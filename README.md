# Quadify Soft Site

Static website for Quadify Soft.

## Project Structure

```text
.
|- index.html
|- programiranje-kraljevo.html
|- izrada-web-aplikacija-kraljevo.html
|- softver-po-meri-kraljevo.html
|- privacy.html
|- terms.html
|- google34c1d7f5ad7d92b6.html
|- CNAME
|- assets/
|  |- css/
|  |  |- site.css
|  |  `- legal.css
|  |- js/
|  |  |- app.js
|  |  `- head.js
|  `- img/
|     |- favicon.png
|     |- logo.png
|     |- logo.webp
|     |- logo-mark.png
|     |- logo-mark.webp
|     |- logo-modern.svg
|     `- preview.png
|- .htaccess
|- robots.txt
`- sitemap.xml
```

## Notes

- `index.html` links to external `assets/css/site.css`, `assets/js/head.js`, and `assets/js/app.js`.
- Legal pages have a single source of truth in root: `privacy.html` and `terms.html`.
- Contact form posts to `/api/contact`, intended to be handled by the Cloudflare Worker in `cloudflare/contact-worker.js`.
- The Worker sends the internal lead notification and visitor autoresponse through Zoho Mail API.
- `CNAME` is set to `quadifysoft.rs` for GitHub Pages custom domain binding.
