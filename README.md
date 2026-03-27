# Michael Placzek Portfolio

Personal portfolio website for `mplaczek99.github.io`, built as a lightweight static site and deployed with GitHub Pages.

## Live Site

- https://mplaczek99.github.io/

## Overview

This repository contains a single-page portfolio focused on clear presentation of background, experience, selected projects, and contact information.
The site is intentionally simple to maintain: semantic HTML, custom CSS, and a small vanilla JavaScript theme module with no build step.

## Current Features

- Single-page layout with sections for Home, About, Experience, Projects, and Contact
- Four selectable color themes (`tokyo-night`, `aurora-fog`, `ember-forge`, `deep-forest`) with saved preference in `localStorage`
- Self-hosted fonts and SVG icons to reduce third-party dependencies
- Responsive design for desktop, tablet, and mobile breakpoints
- In-page navigation anchors account for sticky header height so section titles remain visible
- Security-minded metadata in `index.html` (CSP, permissions policy, and strict referrer policy)
- Downloadable resume and direct links to LinkedIn, GitHub, and email

## Tech Stack

- HTML5
- CSS3 (custom properties, layout grids, media queries)
- Vanilla JavaScript (theme persistence and UI synchronization)
- Self-hosted WOFF2 assets
- GitHub Actions (quality checks)
- GitHub Pages (deployment)

## Repository Structure

```text
.
|- .github/
|  `- workflows/
|     `- quality-checks.yml
|- assets/
|  |- fonts/
|  |  |- ibm-plex-mono-400-latin.woff2
|  |  |- ibm-plex-sans-400-700-latin.woff2
|  |  `- syne-700-latin.woff2
|  |- icons/
|  |  |- cplusplus.svg
|  |  |- go.svg
|  |  |- java.svg
|  |  |- location-pin.svg
|  |  `- python.svg
|  `- resume/
|     `- MichaelPlaczek_Resume.pdf
|- index.html
|- robots.txt
|- sitemap.xml
|- style.css
|- theme-switcher.js
`- README.md
```

## Run Locally

No install or build process is required.

1. Clone the repository.
2. Open `index.html` directly in your browser.

Optional local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customization Guide

- **Content**: Update portfolio copy, project cards, and contact information in `index.html`.
- **Styling**: Update layout, spacing, typography, and component styling in `style.css`.
- **Anchor offset**: `style.css` defines `--anchor-offset` and applies it via `scroll-margin-top` on `main > section[id]` to prevent section headers from being hidden by the sticky nav.
- **Themes**:
  - Update theme variables in `:root` and each `[data-theme="..."]` block in `style.css`.
  - Update the shared theme catalog in `<script id="theme-meta" type="application/json">` in `index.html`.
  - Keep each catalog key aligned with its matching `[data-theme="..."]` block in `style.css`; theme options are generated automatically by `theme-switcher.js`.
- **Assets**: Replace files in `assets/resume/`, `assets/icons/`, or `assets/fonts/` as needed, then update references in `index.html`/`style.css`.

## Automated Quality Checks

- A GitHub Actions workflow runs on pushes to `main` and all pull requests.
- `html-validate` verifies `index.html`.
- Lychee validates links and anchors in `index.html` and `README.md` (including external links) with retries for transient network failures.

## Deployment Notes

This repo is intended for GitHub Pages hosting as a user site (`<username>.github.io`).
Changes are published when pushed to the branch configured for Pages in repository settings.

## Contact

- Email: `mplaczek99@gmail.com`
