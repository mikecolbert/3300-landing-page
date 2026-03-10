# Jordan Mercer Personal Landing Page

## Project Overview
A single-page personal landing page for Jordan Mercer, a Business Analytics student at the University of Iowa. Built for BAIS 3300 Module 8. Designed to help recruiters and hiring managers quickly assess Jordan's skills, experience, and project work.

## Tech Stack
- HTML5 (semantic elements)
- CSS3 (external stylesheet)
- Bootstrap 5.3 (via CDN)
- Google Fonts (Inter)
- Bootstrap Icons (via CDN)
- No JavaScript frameworks, no backend, no database

## Folder Structure
```
/
├── index.html
├── css/
│   └── stylesheet.css
├── images/
│   └── jordan-mercer.jpg
├── PRD.md
├── STANDARDS.md
├── jordan_mercer_resume.docx
└── README.md
```

## Content Sections
- **Hero** — Headshot, name, tagline, value proposition, CTA
- **About** — Bio covering education, internship, volunteer work
- **Skills** — Three categories (Technical, Professional, Tools) as pill badges
- **Experience** — MedTrack Solutions internship, Iowa Food Bank Network volunteer
- **Projects** — Tippie Enrollment Trend Analysis, This Landing Page (two-column cards)
- **Education** — University of Iowa, Tippie College of Business
- **Contact** — Email, LinkedIn, GitHub links

## Design
- Color palette: Navy (#1B2A4A), Teal (#0D9488), White
- Font: Inter from Google Fonts
- Max content width: 800px, centered
- Responsive: single column mobile, two-column project cards on desktop
- WCAG 2.2 AA compliant

## Running
- Served via Python HTTP server on port 5000
- Workflow: "Start application" → `python3 -m http.server 5000 --bind 0.0.0.0`

## Deployment
- Configured as static site deployment with `publicDir: "."`
