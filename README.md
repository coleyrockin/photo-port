# Photo Port

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=flat&logo=react-router&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue?style=flat)
![CI](https://github.com/coleyrockin/photo-port/actions/workflows/ci.yml/badge.svg)

A React 18 photography portfolio with URL-based category routing, a full-screen lightbox with prev/next navigation, and a dark editorial design.

## Live demo

[coleyrockin.github.io/photo-port](http://coleyrockin.github.io/photo-port)

## Features

- **React Router v6** — each category gets a real URL (`/#/commercial`, `/#/portraits`, etc.)
- **Lightbox modal** — full-size image with prev/next navigation; close with `✕`, backdrop click, `Esc`, or arrow keys
- **Lazy-loaded thumbnails** — `loading="lazy"` so off-screen images don't block first paint
- **Dark editorial design** — Cormorant Garamond headings, Inter body, warm gold accent, responsive grid
- **Contact form** — controlled inputs, live email validation, `mailto:` submission
- **Tests** — Vitest + @testing-library/react, 11 tests across all components
- **CI** — GitHub Actions builds and tests on every push to main

## Tech stack

| Layer | Tech |
|---|---|
| Framework | React 18 + `createRoot` |
| Build | Vite 5 |
| Routing | React Router v6 (HashRouter for GH Pages) |
| Tests | Vitest, @testing-library/react |
| Deploy | GitHub Pages via `gh-pages` |
| Tooling | Prettier 3 |

## Getting started

### Prerequisites

- Node.js 20+

### Install

```bash
git clone https://github.com/coleyrockin/photo-port.git
cd photo-port
npm install
```

### Run locally

```bash
npm start
```

Opens at `http://localhost:5173`.

### Run tests

```bash
npm test
```

### Build for production

```bash
npm run build
```

Output goes to `dist/`.

### Deploy to GitHub Pages

```bash
npm run deploy
```

Builds to `dist/` and pushes to the `gh-pages` branch.

## Project structure

```
photo-port/
├── index.html                  # Vite entry point (root)
├── vite.config.js
├── public/
│   └── assets/                 # Static images (small, large, cover)
├── src/
│   ├── data/
│   │   └── photos.js           # CATEGORIES and PHOTOS arrays
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Gallery/            # reads :category param from URL
│   │   ├── Modal/              # prev/next + keyboard nav
│   │   ├── Nav/                # NavLink-based, no prop drilling
│   │   └── PhotoList/
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── .github/workflows/ci.yml
```

## What I learned / practiced

- Migrating a CRA project to Vite (dropped from 1248 → 236 packages, 69 → 5 vulnerabilities)
- React 18 `createRoot` and concurrent rendering
- React Router v6 — `useParams`, `NavLink`, `Navigate`, nested routes
- HashRouter as the pragmatic choice for GitHub Pages SPA deployment
- Prev/next modal state with index cycling, keyboard arrow key navigation
- CSS custom properties for a coherent design system without a framework

## Known limitations

- Contact form opens `mailto:` instead of POSTing. Wire to Formspree / Netlify Forms for real delivery.
- Photo data is hand-coded in `src/data/photos.js`; a real version would source from a CMS.

## License

ISC — see [`LICENSE`](./LICENSE).

## Author

Built by [Boyd Roberts](https://github.com/coleyrockin).
