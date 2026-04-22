# Quadify Soft Site

Static website for Quadify Soft.

## Project Structure

```text
.
|- index.html
|- privacy.html
|- terms.html
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
- Form submit uses FormSubmit with `_captcha=false` and honeypot spam protection.
