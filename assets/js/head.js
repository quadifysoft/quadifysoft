window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

if (window.location.hostname.endsWith('github.io')) {
  const robotsMeta = document.querySelector('meta[name="robots"]') || document.createElement('meta');
  robotsMeta.setAttribute('name', 'robots');
  robotsMeta.setAttribute('content', 'noindex, follow');
  if (!robotsMeta.parentNode) {
    document.head.appendChild(robotsMeta);
  }

  const canonicalPath = window.location.pathname.replace(/^\/quadifysoft\/?/, '/');
  const canonicalUrl = `https://quadifysoft.rs${canonicalPath}${window.location.search}${window.location.hash}`;
  window.location.replace(canonicalUrl);
}

window.QS_GA4_ID = window.QS_GA4_ID || 'G-XXXXXXXXXX';
if (window.QS_GA4_ID && window.QS_GA4_ID !== 'G-XXXXXXXXXX') {
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${window.QS_GA4_ID}`;
  document.head.appendChild(gaScript);
  gtag('js', new Date());
  gtag('config', window.QS_GA4_ID, { anonymize_ip: true });
}
