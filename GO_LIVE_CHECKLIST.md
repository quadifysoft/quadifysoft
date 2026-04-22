# Quadify Soft Go-Live Checklist

## 1) GA4 setup (events already wired)
- Create GA4 property and Web Data Stream.
- Copy Measurement ID (format `G-XXXX...`).
- In `assets/js/head.js`, replace:
  - `window.QS_GA4_ID = "G-XXXXXXXXXX"` with your real ID.
- Open site and verify in GA4 Realtime:
  - `form_submit`
  - `cta_start_click`
  - `book_call_click`
  - `phone_click`
  - `email_click`

## 2) Search Console
- Add property for your production domain.
- Verify ownership.
- In `index.html`, replace:
  - `meta name="google-site-verification" content="REPLACE_WITH_SEARCH_CONSOLE_TOKEN"`
- Submit sitemap URL:
  - `/sitemap.xml`

## 3) HTTPS / "Not secure" fix
- Production must run behind valid TLS certificate.
- `.htaccess` already enforces redirect to HTTPS.
- If hosting is Apache, keep `.htaccess` in web root.
- If using Nginx/Cloudflare, keep equivalent HTTPS redirect + headers there too.

## 4) Security headers
- `.htaccess` already includes:
  - HSTS
  - CSP
  - Referrer-Policy
  - X-Content-Type-Options
  - X-Frame-Options
  - Permissions-Policy
- After deploy, verify with browser devtools (Network -> Response headers).

## 5) Final QA pass
- Desktop + mobile smoke test:
  - sticky header
  - mobile menu
  - active nav for `Proces`, `O nama`, `Kontakt`
  - contact form submit + success message
- Check all primary CTAs and contact links.

## 6) Lighthouse mobile
- Install Lighthouse CLI on your machine:
  - `npm i -g lighthouse`
- Run against production URL:
  - `lighthouse https://your-domain.com --preset=desktop`
  - `lighthouse https://your-domain.com --preset=perf`

## 7) Asset optimization (recommended)
- Current large assets to optimize first:
  - `assets/img/logo.png`
  - `assets/img/logo-mark.png`
  - `assets/img/preview.png`
- Compress to WebP/optimized PNG and re-test visual quality.

