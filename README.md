# Quadify Soft Site

Static website for Quadify Soft.

## Project Structure

```text
.
|- index.html
|- legacy redirect pages
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
|     `- logo-mark.png
|- .htaccess
|- robots.txt
`- sitemap.xml
```

## Notes

- `index.html` links to external `assets/css/site.css`, `assets/js/head.js`, and `assets/js/app.js`.
- Legal pages redirect to clean routes: `/privacy/` and `/terms/`.
- Contact form posts to `/api/contact`, intended to be handled by the Cloudflare Worker in `cloudflare/contact-worker.js`.
- The Worker sends the internal lead notification and visitor autoresponse through Zoho Mail API.
- `CNAME` is set to `quadifysoft.rs` for GitHub Pages custom domain binding.
