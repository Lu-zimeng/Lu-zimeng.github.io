# Katie Lu — personal website

English, responsive, custom HTML/CSS/JS for https://lu-zimeng.github.io/.
No dependencies or build step. Open index.html to preview.

## Edit the content
- `index.html`: name, draft biography, research/projects, notes list, contact information.
- `assets/css/style.css`: colors, typography, desktop and mobile layouts.
- `assets/js/main.js`: mobile menu and current year.
- `assets/images/research-pattern.svg`: original decorative circular pattern, not scientific results.
- `assets/images/`: put your own portrait and research figures here.
- `assets/fonts/`: optional fonts; currently uses system fonts.
- `notes/first-note.html`: article template. Duplicate for each new post and add a link in index.html.
- `about/`, `projects/`, `notes/`, `contact/`: entry points to the homepage sections.

The ZJE affiliation, love of chocolate, and music interests are preserved from your existing public homepage. The year-specific IBI1 description is omitted because it may be outdated. Research interests and the remaining biography are editable draft copy. Project cards and the article are explicitly placeholders. No affiliation, publications, email, or academic qualifications have been invented. Replace these drafts before publishing if desired.

To add a portrait, replace `<div class="avatar" aria-label="Katie Lu initials">KL</div>` with `<img class="avatar" src="assets/images/portrait.jpg" alt="Katie Lu">`, then add `.avatar { object-fit: cover; }` to the stylesheet.

## Publish with GitHub Pages
1. Open your existing `Lu-zimeng/Lu-zimeng.github.io` repository. Download a backup or create a separate branch before replacing files. Preserve any unrelated existing files.
2. Upload the CONTENTS of this directory into the root of the repository. `index.html` must be at the root, not inside a personal-homepage folder. Include `.nojekyll` (an empty file disabling Jekyll processing).
3. Commit to `main`.
4. The site already uses GitHub Pages; first check its existing publishing settings. For this static version, go to Settings → Pages → Build and deployment → Source → Deploy from a branch.
5. Select `main` and `/(root)`, then Save.
6. After deployment succeeds, visit https://lu-zimeng.github.io/. Publishing may take up to 10 minutes.

Official guide: https://docs.github.com/en/pages/quickstart

The current deliverable is local; uploading and remote deployment have not been performed.

## Version 2: separate pages
Home contains About only. Research, Notes, and Contact are independent HTML pages, with icon navigation. Edit projects/index.html, notes/index.html and contact/index.html to update their respective content.

## Fix the current upload
Your myweb branch currently nests the site in personal-homepage/. Upload the CONTENTS of this package at the repository ROOT, alongside the existing index.md. The root must directly contain index.html, assets/, projects/, notes/, contact/, about/ and .nojekyll. Do not upload the enclosing folder. In Settings > Pages, verify myweb and /(root). Old nested files can remain; they do not serve the root homepage. On macOS, Command+Shift+. reveals .nojekyll. If needed, create an empty file named .nojekyll through Add file > Create new file.

## About modules (v3)
Education, Honors, Languages, and Hobbies are included in index.html and about/index.html. Edit both copies when changing their text. Institution and hobbies come from the existing site. Degree, dates, awards, and language proficiency are placeholders.

.nojekyll now contains text so it is not an empty upload. Its contents do not matter; its presence disables Jekyll. Alternatively, on myweb use Add file > Create new file, filename .nojekyll, content `Disable Jekyll`, then commit to myweb. This avoids the upload dialog entirely.

## Version 4 — reference-style academic layout
Uses a narrow centered text column, Poppins body type, Jost headings, simple bullet lists, no cards or divider lines for About subsections, and a desktop icon navigation rail. Fonts load from Google Fonts with system fallbacks. Research, Notes and Contact remain separate pages. Square brackets indicate details to replace, not actual qualifications. The reference author's credentials, portrait, publications and research figure have not been copied.
