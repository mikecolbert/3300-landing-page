# 3300 Landing Page

## Project Overview
A simple static HTML landing page ("Hello World"). No build system, no dependencies, no backend.

## Structure
- `index.html` — The single static HTML file served as the landing page

## Running
- Served via Python's built-in HTTP server on port 5000
- Workflow: "Start application" → `python3 -m http.server 5000 --bind 0.0.0.0`

## Deployment
- Configured as a static site deployment with `publicDir: "."`
