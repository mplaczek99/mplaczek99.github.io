# Michael Placzek Portfolio

Personal portfolio website for `mplaczek99.github.io`, built as a lightweight static site and deployed with GitHub Pages.

## Live Site

- https://mplaczek99.github.io/

## Overview

This repository contains a single-page portfolio focused on clear presentation of background, selected projects, and contact information.
The site uses semantic HTML and custom CSS, with no framework or build step required.

## Features

- Responsive one-page layout with sections for About, Projects, and Contact
- Multiple selectable visual themes with saved preference in local storage
- Typography pairing with self-hosted web fonts for readable body text and expressive headings
- Lightweight stack (plain HTML/CSS) for fast loading and easy maintenance

## Tech Stack

- HTML5
- CSS3
- Self-hosted WOFF2 fonts
- GitHub Actions (quality checks)
- GitHub Pages

## Project Structure

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
|  `- resume/
|     `- MichaelPlaczek_Resume.pdf
|- index.html
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

## Automated Quality Checks

- A GitHub Actions workflow runs on pushes to `main` and all pull requests.
- HTML is validated with `html-validate` against `index.html`.
- Links and in-page anchors are checked with Lychee in offline mode for `index.html` and `README.md`.

## Customization Guide

- Update content in `index.html` (headline, bio, projects, contact details)
- Update colors, spacing, and typography in `style.css`
- Edit theme tokens in `:root` and each `[data-theme="..."]` block for palette updates
- Add or remove available options in the theme `<select>` and `theme-switcher.js`

## Deployment Notes

This repo is intended for GitHub Pages hosting as a user site (`<username>.github.io`).
Changes are published when pushed to the branch configured for Pages in the repository settings.

## Contact

- Email: `mplaczek99@gmail.com`
