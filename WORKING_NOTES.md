# Working Notes — 3300 Landing Page

> **Internal document.** These notes are for developer and AI assistant reference only. They are not intended for public audiences. This file should be updated at the end of every working session.

---

## How to Use This File (For AI Assistants)

1. Read this entire file before suggesting changes or writing code.
2. Read `README.md` for the public-facing project description.
3. Do not change the folder structure or naming conventions without discussing with the author first.
4. Follow all conventions listed in this document exactly.
5. Do not suggest any approaches listed in the "What Was Tried and Rejected" section.
6. Ask clarifying questions before making large structural changes.
7. This project was vibe coded / AI-assisted. Refactor conservatively — avoid rewriting working code without a clear reason.

---

## Current State

**Last Updated:** 2026-03-10

The project is a complete, functional single-page personal landing page for Jordan Mercer. All required content sections from the PRD are built and populated with real content. The page is responsive, accessible, and deployed via Azure Static Web Apps. The codebase uses vanilla HTML, CSS, and minimal JavaScript with no frameworks.

### What Is Working

- [x] Hero section with headshot, name, tagline, value proposition, and CTA
- [x] About section with bio covering education, internship, and volunteer work
- [x] Skills section with three grouped categories displayed as pill badges
- [x] Experience section with MedTrack Solutions and Iowa Food Bank Network entries
- [x] Projects section with two-column card grid (Tippie Enrollment, This Landing Page)
- [x] Education section with University of Iowa details, GPA, and Dean's List
- [x] Contact section with email, LinkedIn, and GitHub icon links
- [x] Sticky navigation bar with smooth-scrolling anchor links
- [x] Mobile hamburger menu with vanilla JavaScript toggle
- [x] Responsive layout from 320px to desktop widths
- [x] WCAG 2.2 Level AA accessibility (semantic HTML, heading hierarchy, alt text, descriptive links)
- [x] External links open in new tabs with `rel="noopener noreferrer"`
- [x] README.md with full project documentation
- [x] Azure Static Web Apps CI/CD pipeline via GitHub Actions

### What Is Partially Built

- [ ] Favicon — not yet added; causes a 404 console error on page load
- [ ] STANDARDS.md — still references Bootstrap 5.3 as a requirement, which no longer applies after the vanilla CSS refactor

### What Is Not Started

- [ ] LICENSE file (referenced in README but not yet created in the repo)
- [ ] Print stylesheet
- [ ] Analytics tracking
- [ ] Dark mode

---

## Current Task

**What I was working on when I last stopped:** Generated the README.md and WORKING_NOTES.md documentation files. All code features are complete. The landing page is fully built and rendering correctly in the browser with all sections, responsive layout, and accessible markup.

**The very next step is:** Add a favicon to the project to eliminate the 404 console error, then create a LICENSE file in the repository root.

---

## Architecture and Tech Stack

| Technology | Version | Why It Was Chosen |
|---|---|---|
| HTML5 | 5 | Required by course standards (BAIS 3300); semantic elements for accessibility |
| CSS3 | 3 | Required by course standards; all styling in a single external file for maintainability |
| JavaScript (vanilla) | ES5 | Minimal script for mobile nav toggle only; no framework needed for a static page |
| Google Fonts (Inter) | N/A | Clean, modern sans-serif that matches the professional/approachable design tone |
| SVG icons (inline) | N/A | Replaced Bootstrap Icons to eliminate framework dependency; no external requests needed |
| Azure Static Web Apps | Free tier | Course-required hosting platform; free tier sufficient for a static site |
| GitHub Actions | N/A | Automatic CI/CD deployment to Azure on push to main branch |
| Replit | N/A | Course-required AI-assisted development environment |
| Python 3 http.server | 3.x | Lightweight local dev server; no dependencies needed for static file serving |

---

## Project Structure Notes

```
3300-landing-page/
├── index.html                 # Single-page landing page (all sections)
├── css/
│   └── stylesheet.css         # All styles — layout, colors, responsive, nav
├── js/
│   └── scripts.js             # Mobile nav toggle (hamburger menu open/close)
├── images/
│   └── jordan-mercer.jpg      # Headshot image (originally .png, copied to this path)
├── PRD.md                     # Product Requirements Document (do not modify)
├── STANDARDS.md               # Technical/design standards (do not modify without discussion)
├── jordan_mercer_resume.docx  # Source resume content (do not modify)
├── README.md                  # Public-facing project documentation
├── WORKING_NOTES.md           # This file — internal developer notes
├── replit.md                  # Replit environment configuration notes
└── .github/
    └── workflows/
        └── azure-static-web-apps-purple-sea-03c2aab0f.yml  # CI/CD pipeline
```

- `PRD.md`, `STANDARDS.md`, and `jordan_mercer_resume.docx` are source-of-truth documents. Do not modify them without explicit discussion.
- The `images/` folder originally had a typo (`iimages/`) and the file was named `jordan_mercer.png`. It was moved and renamed to `images/jordan-mercer.jpg` to match the PRD's expected path.
- The `css/` and `js/` folder structure follows the layout defined in STANDARDS.md.
- `replit.md` is a Replit-specific file that tracks environment configuration. It is not committed to GitHub.

---

## Data / Database

This project has no persistent data. It is a fully static site with no database, no API calls, and no server-side logic. All content is hardcoded in `index.html`.

---

## Conventions

### Naming Conventions

- **Files:** lowercase with hyphens (e.g., `jordan-mercer.jpg`, `stylesheet.css`)
- **CSS classes:** lowercase with hyphens (e.g., `.hero-section`, `.btn-cta`, `.skill-technical`)
- **CSS custom properties:** descriptive names with double hyphens (e.g., `--navy`, `--teal-light`, `--text-primary`)
- **IDs:** lowercase with hyphens, used only for section anchors (e.g., `#hero`, `#about`, `#skills`)

### Code Style

- HTML: 4-space indentation, semantic elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- CSS: 4-space indentation, properties grouped logically (layout, then visual, then transitions)
- JavaScript: 4-space indentation, `var` declarations (ES5 compatible), no semicolon-free style
- No inline styles anywhere — all styling in `css/stylesheet.css`
- No `<style>` tags in HTML files

### Framework-Specific Patterns

- No frameworks. This is intentional. Bootstrap was removed during development per author preference. Do not re-add it.

### Git Commit Message Style

- Imperative mood, present tense (e.g., "Add contact section", "Fix mobile nav toggle")
- Brief first line, optional body for context

---

## Decisions and Tradeoffs

- **Vanilla CSS instead of Bootstrap:** The author explicitly requested Bootstrap removal. All layout is handled with CSS Grid, Flexbox, and custom styles. Do not suggest reversing this.
- **Inline SVG icons instead of an icon library:** Eliminates external CDN dependency and reduces page load. Three SVGs are embedded directly in the contact section. Do not suggest replacing with Bootstrap Icons, Font Awesome, or other icon libraries.
- **Minimal JavaScript:** Only used for the mobile hamburger menu toggle. No JS frameworks, no scroll-spy, no animation libraries. The STANDARDS.md originally said "no JavaScript" but a small script was necessary for the mobile nav. Do not suggest adding jQuery or other libraries.
- **800px max content width:** Chosen per STANDARDS.md to keep text readable and the layout focused. Applied via `.content-wrap` class on every section container.
- **CSS custom properties for colors:** All palette colors defined in `:root` for easy theming. The palette is navy (#1B2A4A), teal (#0D9488), and white with supporting grays. Do not suggest changing the color system.
- **Headshot border changed to yellow:** Author requested a 2px solid yellow (#FFD700) border on the circular headshot, replacing the original teal border.
- **Contact URLs use mikecolbert:** The author provided their own LinkedIn and GitHub URLs (`mikecolbert`) to override the PRD's fictional URLs (`jordanmercer`). This is intentional. Do not change these to the PRD values.

---

## What Was Tried and Rejected

- **Bootstrap 5.3 via CDN:** Was the initial framework used for layout, navigation, and pill badges. Removed at author's request in favor of vanilla CSS. Do not re-add Bootstrap.
- **Bootstrap Icons via CDN:** Was used for contact section icons (email, LinkedIn, GitHub). Replaced with inline SVGs when Bootstrap was removed. Do not suggest re-adding.
- **Bootstrap integrity hash attributes:** The initial CDN links included `integrity` attributes with incorrect SHA-384 hashes that caused the browser to block the resources. These were removed. If any CDN links are added in the future, verify integrity hashes before including them.
- **Inline `<script>` tag for nav toggle:** The JavaScript was initially embedded at the bottom of `index.html`. Moved to `js/scripts.js` to comply with the STANDARDS.md folder structure. Do not move it back inline.

---

## Known Issues and Workarounds

- **Missing favicon causes 404 console error:** The browser requests `/favicon.ico` on page load and receives a 404. No workaround is in place. A favicon should be added to the project root to resolve this. This is cosmetic and does not affect functionality.
- **STANDARDS.md references Bootstrap:** The STANDARDS.md file still lists "Bootstrap 5.3 loaded via CDN" as a requirement. The actual codebase no longer uses Bootstrap. This document has not been updated because it is treated as a source-of-truth template from the course. No workaround needed — just be aware of the discrepancy.

---

## Browser / Environment Compatibility

### Tested Browsers

- Chrome (latest) — verified via Replit preview pane

### Expected to Work

- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome for Android

### Known Incompatibilities

- None identified. The page uses widely supported CSS (Flexbox, Grid, custom properties, `scroll-behavior`) and ES5 JavaScript. All features have broad browser support.

### Development Environment

- Replit (NixOS-based Linux container)
- Python 3 `http.server` on port 5000 for local development
- No build step required — files are served as-is

---

## Open Questions

- Should the STANDARDS.md be updated to reflect the removal of Bootstrap, or should it remain unchanged as the original course template?
- Should a custom domain be configured for the Azure Static Web Apps deployment?
- Should the headshot image be optimized (compressed/resized) for faster page load?
- Should `prefers-reduced-motion` be respected for the `scroll-behavior: smooth` CSS property?

---

## Session Log

### 2026-03-10

- Built the complete landing page with all PRD-required sections (Hero, About, Skills, Experience, Projects, Education, Contact)
- Initially built with Bootstrap 5.3; refactored to vanilla CSS per author request
- Fixed Bootstrap CDN integrity hash issue that blocked resource loading
- Moved headshot from `iimages/jordan_mercer.png` (typo) to `images/jordan-mercer.jpg`
- Replaced Bootstrap Icons with inline SVGs for contact section
- Moved inline nav toggle script to `js/scripts.js`
- Changed headshot border from 4px teal to 2px yellow (#FFD700) per author request
- Generated comprehensive README.md with all 16 requested sections
- Generated WORKING_NOTES.md (this file)
- Left incomplete: favicon, LICENSE file, STANDARDS.md update
- Next step when resuming: add a favicon and create a LICENSE file

---

## Useful References

- [PRD.md](PRD.md) — Product Requirements Document defining all required content and sections
- [STANDARDS.md](STANDARDS.md) — Technical and design standards for the project
- [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) — Typeface used throughout the page
- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) — Accessibility guidelines followed
- [CSS Grid Guide (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) — Used for project card layout
- [Azure Static Web Apps Documentation](https://learn.microsoft.com/en-us/azure/static-web-apps/) — Hosting platform documentation
- AI tools were used throughout development. Initial code structure was generated with Claude via Replit's AI assistant and reviewed/modified by the author. All content was sourced from the PRD and resume — no placeholder text was used.
