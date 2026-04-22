# Quadify Soft Go-Live Checklist

## 1) Domain + DNS
- Domain: `quadifysoft.rs`
- GitHub Pages custom domain file is present:
  - `CNAME` -> `quadifysoft.rs`
- DNS should contain:
  - `A @ -> 185.199.108.153`
  - `A @ -> 185.199.109.153`
  - `A @ -> 185.199.110.153`
  - `A @ -> 185.199.111.153`
  - `CNAME www -> quadifysoft.github.io`
- Wait until Cloudflare zone status is `Active`.

## 2) GitHub Pages
- Repo -> `Settings` -> `Pages`.
- Set `Custom domain` to `quadifysoft.rs`.
- Enable `Enforce HTTPS` when available.

## 3) Search Console
- Keep existing URL-prefix property for legacy GitHub URL.
- Add and verify new property for:
  - `https://quadifysoft.rs/`
- Submit sitemap:
  - `https://quadifysoft.rs/sitemap.xml`

## 4) GA4 setup (events already wired)
- Create GA4 property and Web Data Stream.
- Copy Measurement ID (format `G-XXXX...`).
- In `assets/js/head.js`, replace:
  - `window.QS_GA4_ID = "G-XXXXXXXXXX"` with real ID.
- Verify in GA4 Realtime:
  - `form_submit`
  - `cta_start_click`
  - `book_call_click`
  - `phone_click`
  - `email_click`

## 5) Email routing (Cloudflare)
- Enable Email Routing after zone is `Active`.
- Add forwarding aliases:
  - `kontakt@quadifysoft.rs -> quadifysoft@gmail.com`
  - `info@quadifysoft.rs -> quadifysoft@gmail.com`
  - `office@quadifysoft.rs -> quadifysoft@gmail.com`
- Add required MX/TXT records from Cloudflare wizard.

## 6) Security notes
- `.htaccess` headers apply only on Apache hosting.
- On GitHub Pages, security headers must be handled by Cloudflare.
- In Cloudflare, set SSL/TLS mode to `Full` after activation.

## 7) Final QA pass
- Desktop + mobile smoke test:
  - sticky header and mobile menu behavior
  - language switch
  - contact form submit and success flow
  - privacy/terms URLs
- Check all CTA/contact links.

## 8) Performance check
- Run Lighthouse against production:
  - `lighthouse https://quadifysoft.rs --preset=desktop`
  - `lighthouse https://quadifysoft.rs --preset=perf`
