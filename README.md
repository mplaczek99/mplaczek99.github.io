# Michael Placzek Portfolio

Personal portfolio website for `mplaczek99.github.io`, built as a lightweight static site and deployed with GitHub Pages.

## Live Site

- https://mplaczek99.github.io/

## Overview

This repository contains a single-page portfolio focused on clear presentation of background, selected projects, and contact information.
The site uses semantic HTML and custom CSS, with no framework or build step required.

## Features

- Responsive one-page layout with sections for About, Projects, and Contact
- Custom visual theme using CSS variables, gradients, and glass-style cards
- Typography pairing with Google Fonts for readable body text and expressive headings
- Lightweight stack (plain HTML/CSS) for fast loading and easy maintenance

## Tech Stack

- HTML5
- CSS3
- Google Fonts
- GitHub Pages

## Project Structure

```text
.
|- index.html
|- style.css
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

- Update content in `index.html` (headline, bio, projects, contact details)
- Update colors, spacing, and typography in `style.css`
- Edit theme tokens in the `:root` block for quick style changes

## Deployment Notes

This repo is intended for GitHub Pages hosting as a user site (`<username>.github.io`).
Changes are published when pushed to the branch configured for Pages in the repository settings.

## Contact

- Email: `mplaczek99@gmail.com`
