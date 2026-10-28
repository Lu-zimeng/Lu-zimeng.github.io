# Katie Lu — academic website v15

Standalone static HTML/CSS/JavaScript website. This version continues the CV layout refinements and uses the user-supplied `14683903_3840_2160_30fps.mp4` as the Home hero background. Original source video and historical versions are unchanged.

## Preview
Open `index.html`, or run `python3 -m http.server 8015` and visit http://localhost:8015/. No dependencies or build step.

## Current refinements
- Berkeley: italic Summer Sessions; black bullet list with bold Grade A (4.00/4.00) before Course UGBA 195T – Topics in Entrepreneurship. Dates and locations align right.
- Honors and Competitions: headings match school-name font size and remain bold; MCM uses normal weight. Bullets, right-aligned dates, and nested S Award are retained.
- Research: the Antibiotic Discovery project uses an inline pill icon matching the other 24 px-viewBox line icons. Research text and order are unchanged.
- Home retains its original photo, Berkshire Swash name, text, layout, and opaque content above the video.

## Background media
- `assets/videos/hero-background.mp4`: 1280 × 720 H.264, approximately 3.6 MB.
- `assets/videos/hero-background-mobile.mp4`: 960 × 540 H.264, approximately 1.6 MB.
- Both preserve the full approximately 20-second supplied video, without audio, and use fast-start MP4 layout.
- `assets/images/hero-background-poster.jpg`: still frame for loading, autoplay restrictions, or reduced motion.
- `assets/js/hero-video.js`: muted looping inline playback, with off-screen/hidden-tab pausing. Initial reduced-motion preference shows the poster without downloading the MP4. No external video host is required.
- Previous Canvas animation and its unused script/styles have been removed from this version.

## Validation
Checked Home at 320, 390, 768, and 1440 px and all other pages at mobile and desktop sizes. Video autoplay, proper mobile/desktop source selection, muting, looping, off-screen pause/resume, and reduced-motion behavior passed. Berkeley list order, grade weight/color, subtitle sizes, MCM weight, and matching research icon dimensions were checked. Desktop/mobile previews were visually reviewed. All 83 local asset/link/fragment references resolve; no horizontal overflow, local resource errors, or JavaScript exceptions were detected. Historical folder checksums remain unchanged.

## GitHub Pages
Preserve `.nojekyll`, `_config.yml`, and the existing publishing branch/root settings. Upload this folder’s contents only when ready. No commit, push, or deployment has been performed.
