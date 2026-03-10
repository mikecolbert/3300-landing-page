# Example PRD: Personal Landing Page

### BAIS 3300 – Module 8 | Instructor Reference Example

---

_The following is an example of a completed PRD produced through the AI discovery interview process. It was written for a fictional student, Jordan Mercer, to illustrate the level of specificity expected in each section. Use this as a benchmark when evaluating student submissions._

_A strong PRD reads like a clear brief that a developer could act on without asking follow-up questions. Notice that every section contains concrete, specific details — not vague descriptions._

---

# Product Requirement Document

**Product Name:** Jordan Mercer Personal Landing Page
**Version:** 1.0
**Author:** Jordan Mercer
**Date:** February 25, 2026

---

## 01 — Problem Statement

Jordan Mercer is a senior Business Analytics student at the University of Iowa, Tippie College of Business, graduating in May 2026 with a concentration in Data Visualization. Jordan has real professional experience — a data analytics internship at MedTrack Solutions and ongoing volunteer data work with the Iowa Food Bank Network — but a resume alone cannot convey the scope or impact of that work. Jordan is actively recruiting for entry-level business analyst and associate product manager roles at healthcare technology companies and financial services firms in the Midwest.

Jordan needs a personal landing page that gives recruiters and hiring managers a single, polished destination to explore her work, confirm technical fit, and reach out — all within 60–90 seconds of arriving. The page must go beyond the resume by showing the real-world impact of Jordan's projects and making it easy for the right people to get in touch.

---

## 02 — Target Audience

### Primary Audience

- Early- to mid-career recruiters and hiring managers at healthcare technology companies and regional financial services firms in the Midwest
- Roles they are filling: entry-level business analyst and associate product manager positions
- Company size: mid-size (100–2,000 employees); not large enterprise, not early-stage startups
- They are reviewing multiple candidates quickly and need to assess fit within 60–90 seconds
- They have likely already seen Jordan's resume and are visiting the page to learn more before scheduling an interview

### Secondary Audience

- Faculty and academic advisors who may reference the page when writing recommendation letters or making referrals

### What They Are Looking For

- Confirmation of specific technical skills (Python, SQL, Tableau) with evidence of real use
- Professional experience in a relevant domain — healthcare tech especially
- Evidence of communication ability and stakeholder-facing work
- A fast, frictionless way to contact Jordan or connect on LinkedIn

---

## 03 — Goals & Success Metrics

| Goal                                       | How We Measure It                                                                                                    |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| Be discoverable and credible to recruiters | Page is live and shared in at least 10 job applications within the first month                                       |
| Generate recruiter outreach                | 2+ inbound recruiter or hiring manager messages within 60 days of launch                                             |
| Confirm technical fit quickly              | A visitor can identify Jordan's name, current status, and top 3 technical skills within 10 seconds without scrolling |
| Support the job search                     | At least one interview invitation where the interviewer mentions having visited the page                             |

---

## 04 — Required Content

_"Must" = required for launch. "Should" = strongly preferred but not a blocker._

### Hero / Above the Fold

- **Must:** Professional headshot stored locally as `images/jordan-mercer.jpg`
- **Must:** Full name — Jordan Mercer, displayed as the page's main heading
- **Must:** Professional tagline — "Business Analytics Student | Data Visualization | Aspiring Product Manager"
- **Must:** One-sentence value proposition — "I turn messy data into decisions that actually get made."
- **Must:** Call-to-action — "See My Work" linking to the Projects section

### About

- **Must:** 3–4 sentence bio covering: major and concentration (B.B.A. in Business Analytics, Data Visualization), university and expected graduation (University of Iowa, May 2026), and career interests (product management and business intelligence in healthcare or financial services)
- **Must:** Mention of MedTrack Solutions internship as the most recent professional experience
- **Should:** Reference to volunteer work with Iowa Food Bank Network as the personal detail that makes the page feel human

### Skills

- **Must:** Three grouped categories:
  - _Technical:_ Python (pandas, matplotlib), SQL, Tableau, Power BI, Excel (advanced), R (basic)
  - _Professional:_ Agile methodology, user story writing, stakeholder communication, data storytelling, requirements documentation
  - _Tools:_ GitHub, VS Code, Jupyter Notebook, Microsoft Office Suite, Google Workspace
- **Should:** Displayed as grouped pill badges, not a plain list

### Experience

- **Must:** MedTrack Solutions — Data Analytics Intern, June–August 2025. Built and maintained Tableau dashboards used daily by a 6-person client success team to monitor product adoption across 40+ rural clinic accounts. Wrote SQL queries that reduced manual reporting time by approximately 3 hours per week. Presented a data quality audit to the VP of Engineering identifying duplicate patient records affecting 12% of active accounts. Tools: Tableau, SQL (PostgreSQL)
- **Should:** Iowa Food Bank Network — Data Coach (Volunteer), January 2025–Present. Built a Tableau dashboard to visualize weekly food distribution across 14 Iowa counties, identifying three underserved zip codes and prompting reallocation of two delivery routes. Tools: Tableau, Excel

### Projects

- **Must:** Tippie Enrollment Trend Analysis — Led a team of three in analyzing five years of enrollment data for a Database Management course project. Wrote all SQL queries and built visualizations in Python; presented findings to a faculty panel as a mock business intelligence briefing. Received highest mark in a class of 28 students. Tools: Python (pandas), SQL, PowerPoint
- **Must:** This Landing Page — Built using HTML/CSS, deployed to Azure Static Web Apps via GitHub, developed with an AI-assisted workflow in Replit. Tools: HTML, CSS, GitHub, Azure
- **Must per item:** Title, tools used, 2-sentence description, and outcome or impact
- **Should:** Link to GitHub repo or live demo where available

### Education

- **Must:** University of Iowa, Tippie College of Business | B.B.A. Business Analytics, Data Visualization concentration | Expected graduation: May 2026 | GPA: 3.7 | Dean's List: Fall 2024, Spring 2025

### Contact

- **Must:** Email — jordan-mercer@uiowa.edu, displayed as a mailto link labeled "Email Jordan"
- **Must:** LinkedIn — linkedin.com/in/jordanmercer, labeled "Connect on LinkedIn," opens in new tab
- **Must:** GitHub — github.com/jordanmercer, labeled "View on GitHub," opens in new tab

### Content to Exclude

- Home address, phone number, and high school information
- Resume link or embed — the landing page is a curated professional presence, not a resume mirror
- Individual course names from the Relevant Coursework section of the resume

---

## 05 — Scope

| ✓ In Scope (This Week)                              | ✗ Out of Scope                         |
| --------------------------------------------------- | -------------------------------------- |
| Single-page HTML/CSS landing page                   | Blog or multi-page site                |
| Static site — no backend or database                | Dynamic content or user authentication |
| Deployed to Azure Static Web Apps                   | Custom backend or server-side code     |
| Connected via GitHub with a "replit" feature branch | Native mobile app                      |
| Custom domain configured and pointing to Azure      | E-commerce or payment features         |
| Mobile-responsive layout                            | Resume link or PDF embed               |
| All content sections live and populated             | Analytics tracking (future iteration)  |

---

## 06 — Assumptions & Constraints

### What I Already Have

- Professional headshot ready to upload
- Resume content fully documented (MedTrack internship, Food Bank volunteer work, Tippie project)
- GitHub repo created and connected to Azure Static Web Apps
- Replit connected to GitHub repo on the "replit" feature branch
- PRD.md and STANDARDS.md committed to the repo root
- LinkedIn profile is current and public at linkedin.com/in/jordanmercer
- GitHub profile is active at github.com/jordanmercer

### Constraints

- **Time:** Must be deployed and live by end of the week (5 working days)
- **Tech stack:** Vanilla HTML/CSS only — no JavaScript frameworks this iteration
- **Tools:** No paid design tools — all assets must be freely available
- **Hosting:** Azure free tier only

---

_This is a living document. Update it if your scope, content, or goals change before launch._

> **Next step:** Save this file as `PRD.md` in your GitHub repo root. Then open your `STANDARDS.md` template and use your PRD to fill in Section 1 (Project Overview) and Section 3 (Design Standards). Both files must be in your repository root before your first coding session.

---

_BAIS 3300 – Digital Product Management | Module 8 Example | University of Iowa Tippie College of Business_
