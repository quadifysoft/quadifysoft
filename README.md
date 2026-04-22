# Quadify Soft Site

Static website for Quadify Soft.

## Project Structure

```text
.
|- index.html
|- pages/
|  |- privacy.html
|  `- terms.html
|- assets/
|  |- css/
|  |  |- site.css
|  |  `- legal.css
|  |- js/
|  |  `- app.js
|  `- img/
|     |- favicon.png
|     |- logo.png
|     |- logo-mark.png
|     |- logo-modern.svg
|     `- preview.png
`- legacy/
   |- app.js
   |- site.css
   `- style.css
```

## Notes

- `index.html` links to external `assets/css/site.css` and `assets/js/app.js`.
- Legal pages are served via pretty URLs `/privacy` and `/terms` through `.htaccess` rewrites.
- `pages/privacy.html` and `pages/terms.html` share `assets/css/legal.css`.
- Some old root files may still exist while the local server process keeps a file lock.
