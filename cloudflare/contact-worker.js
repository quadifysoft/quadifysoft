const ZOHO_DC_HOSTS = {
  com: {
    accounts: 'https://accounts.zoho.com',
    mail: 'https://mail.zoho.com'
  },
  eu: {
    accounts: 'https://accounts.zoho.eu',
    mail: 'https://mail.zoho.eu'
  }
};

const FIELD_LABELS = {
  custom: 'Custom Business Software',
  ai: 'AI Systems',
  cloud: 'Cloud Platforms',
  other: 'Other / Consultation',
  new: 'New build',
  upgrade: 'Upgrade existing system',
  automation: 'Automation',
  '1-3m': '1-3 months',
  '3-6m': '3-6 months',
  '6-12m': '6-12 months',
  '12m+': '12+ months'
};

function json(data, status = 200, origin = '*') {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function text(value = '') {
  return String(value).trim();
}

function label(value) {
  return FIELD_LABELS[value] || value || 'Not specified';
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getHosts(env) {
  const dc = (env.ZOHO_DC || 'eu').toLowerCase();
  return ZOHO_DC_HOSTS[dc] || ZOHO_DC_HOSTS.eu;
}

async function getAccessToken(env) {
  const hosts = getHosts(env);
  const body = new URLSearchParams({
    refresh_token: env.ZOHO_REFRESH_TOKEN,
    client_id: env.ZOHO_CLIENT_ID,
    client_secret: env.ZOHO_CLIENT_SECRET,
    grant_type: 'refresh_token'
  });

  const response = await fetch(`${hosts.accounts}/oauth/v2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  });

  const data = await response.json();
  if (!response.ok || !data.access_token) {
    throw new Error(`Zoho token request failed: ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

async function sendZohoMail(env, token, message) {
  const hosts = getHosts(env);
  const response = await fetch(`${hosts.mail}/api/accounts/${env.ZOHO_ACCOUNT_ID}/messages`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Zoho-oauthtoken ${token}`
    },
    body: JSON.stringify({
      fromAddress: env.ZOHO_FROM || 'office@quadifysoft.rs',
      mailFormat: 'html',
      encoding: 'UTF-8',
      ...message
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(`Zoho mail request failed: ${JSON.stringify(data)}`);
  }
  return data;
}

function buildInternalEmail(data) {
  const submittedAt = new Date().toISOString();
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
      <h2>New project inquiry - Quadify Soft</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(data.company || 'Not specified')}</p>
      <p><strong>Service:</strong> ${escapeHtml(label(data.service))}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(label(data.timeline))}</p>
      <p><strong>Project type:</strong> ${escapeHtml(label(data.project_type))}</p>
      <p><strong>Site language:</strong> ${escapeHtml(data.site_language || 'sr')}</p>
      <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
    </div>
  `;
}

function buildAutoresponse(data) {
  const sr = data.site_language === 'sr';
  if (sr) {
    return `
      <div style="font-family:Arial,sans-serif;line-height:1.7;color:#111">
        <p>Postovani/a ${escapeHtml(data.name)},</p>
        <p>Hvala sto ste kontaktirali Quadify Soft. Primili smo vas upit i pazljivo cemo ga pregledati.</p>
        <p>Odgovoricemo vam u najkracem roku sa predlogom narednih koraka.</p>
        <p>Srdacno,<br><strong>Quadify Soft</strong><br>office@quadifysoft.rs</p>
      </div>
    `;
  }

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.7;color:#111">
      <p>Hello ${escapeHtml(data.name)},</p>
      <p>Thank you for contacting Quadify Soft. We received your inquiry and will review it carefully.</p>
      <p>We will get back to you as soon as possible with suggested next steps.</p>
      <p>Best regards,<br><strong>Quadify Soft</strong><br>office@quadifysoft.rs</p>
    </div>
  `;
}

async function handleContact(request, env) {
  const origin = request.headers.get('Origin') || '';
  const allowedOrigin = env.ALLOWED_ORIGIN || 'https://quadifysoft.rs';
  const corsOrigin = origin === allowedOrigin ? origin : allowedOrigin;

  if (request.method === 'OPTIONS') {
    return json({}, 204, corsOrigin);
  }

  if (request.method !== 'POST') {
    return json({ ok: false, error: 'Method not allowed' }, 405, corsOrigin);
  }

  const contentType = request.headers.get('Content-Type') || '';
  const data = contentType.includes('application/json')
    ? await request.json()
    : Object.fromEntries(await request.formData());

  if (text(data._honey)) {
    return json({ ok: true }, 200, corsOrigin);
  }

  const payload = {
    name: text(data.name),
    email: text(data.email),
    company: text(data.company),
    service: text(data.service),
    timeline: text(data.timeline),
    project_type: text(data.project_type),
    message: text(data.message),
    site_language: text(data.site_language || 'sr')
  };

  if (payload.name.length < 2 || !isEmail(payload.email) || payload.message.length < 10) {
    return json({ ok: false, error: 'Invalid form data' }, 400, corsOrigin);
  }

  const token = await getAccessToken(env);
  const inbox = env.ZOHO_TO || 'office@quadifysoft.rs';
  const from = env.ZOHO_FROM || 'office@quadifysoft.rs';

  await sendZohoMail(env, token, {
    toAddress: inbox,
    replyTo: payload.email,
    subject: `New project inquiry - ${payload.name}`,
    content: buildInternalEmail(payload)
  });

  await sendZohoMail(env, token, {
    toAddress: payload.email,
    subject: payload.site_language === 'sr'
      ? 'Primili smo vas upit - Quadify Soft'
      : 'We received your inquiry - Quadify Soft',
    content: buildAutoresponse(payload)
  });

  return json({ ok: true, from }, 200, corsOrigin);
}

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      if (url.pathname !== '/api/contact') {
        return json({ ok: false, error: 'Not found' }, 404, env.ALLOWED_ORIGIN || '*');
      }
      return await handleContact(request, env);
    } catch (error) {
      console.error(error);
      return json({ ok: false, error: 'Email service unavailable' }, 500, env.ALLOWED_ORIGIN || '*');
    }
  }
};
