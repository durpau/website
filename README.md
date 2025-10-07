
# My Portfolio (version 2)

A simple static website ready to be uploaded to GitHub Pages.
Structure:
- index.html — About (landing page)
- pages/cv.html — CV (link to PDF)
- pages/research.html — Research & publications
- partials/ — header and footer included via JavaScript
- assets/ — css, js, images, cv and publications PDFs (placeholders)

## How to update the website (quick guide)

### Locally (recommended)
1. Clone your repository (or copy these files into your repo folder):
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   ```
2. Replace the profile image:
   - Put your image at `assets/img/profile.svg` (or `profile.jpg/png`) and update the `<img src="...">` path in `index.html` if needed.
3. Update the short bio / About text:
   - Edit `index.html` and change the content inside the `<div class="bio">` block.
4. Replace the CV file:
   - Overwrite `assets/cv/CV_Pau_Dura_Diez.pdf` with your real CV named the same, or change the link in `pages/cv.html` to the file name you uploaded.
5. Add or edit publications:
   - Edit `pages/research.html` and add/remove `<article class="publication">` blocks.
   - Each entry contains title, authors, venue/year, short abstract, and optional links (PDF and DOI).
6. Commit & push changes:
   ```bash
   git add .
   git commit -m "Update site content"
   git push origin main
   ```

### Directly on GitHub (quick edits)
- Go to your repository on GitHub, browse to the file (`index.html`, `pages/research.html`, or `assets/cv/`), click the pencil icon to edit, or click "Upload files" to upload a new CV or image. Commit changes at the bottom of the page.

### Adding publications (suggested HTML snippet)
```html
<article class="publication">
  <h3>Title of the paper</h3>
  <div class="pub-meta">Author(s) — Journal / Working paper, 2025</div>
  <p>Short description/abstract (1-2 lines).</p>
  <div class="pub-actions">
    <a href="../assets/pubs/yourpaper.pdf" target="_blank">PDF</a>
    <a href="https://doi.org/..." target="_blank">DOI</a>
  </div>
</article>
```

### Optional improvements
- Convert partials/header.html and footer.html into server-side includes or use Jekyll (GitHub Pages supports Jekyll out-of-the-box) to avoid the small JS include workaround.
- For a dynamic publications list, store publications in a JSON file (e.g. `assets/data/pubs.json`) and modify `assets/js/main.js` to render them dynamically.

If you want, I can also:
- Convert this to a Jekyll structure so you can edit posts/publications using markdown.
- Add a small script that reads publications from a JSON file so you only need to edit one file to update the list.
