# Photo Port

![React](https://img.shields.io/badge/React-17-61DAFB?style=flat&logo=react&logoColor=white)
![Create React App](https://img.shields.io/badge/CRA-5.x-09D3AC?style=flat&logo=create-react-app&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue?style=flat)

A small React photography portfolio with a category-filtered gallery, a lightbox modal, and a contact form. The data is local — no backend — so it deploys cleanly to GitHub Pages.

## Live demo

[coleyrockin.github.io/photo-port](http://coleyrockin.github.io/photo-port)

## Features

- **Category-filtered gallery** — switch between Commercial, Portraits, Food, and Landscape from the nav
- **Lightbox modal** — click a photo for the full-size image; close with the close button, the backdrop, or `Esc`
- **Lazy-loaded thumbnails** — `loading="lazy"` so off-screen images don't block first paint
- **Accessible nav** — real `<button>` elements with `aria-pressed`, focus-visible outlines, and a labeled landmark
- **Contact form** — controlled inputs, live validation, and a `mailto:` fallback (swap for Formspree / Netlify Forms when deployed)
- **Tests** — `@testing-library/react` smoke tests for each component

## Tech stack

| Layer | Tech |
|---|---|
| Framework | React 17 |
| Build | Create React App (react-scripts 5) |
| Tests | Jest, @testing-library/react |
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

The app runs at `http://localhost:3000`.

### Run tests

```bash
npm test
```

### Build for production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the app and pushes the `build/` folder to the `gh-pages` branch on origin. The `homepage` field in `package.json` controls the deployed URL.

## Project structure

```
photo-port/
├── public/
├── src/
│   ├── assets/                # cover, large, small (thumbnail) images per category
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Gallery/
│   │   ├── Modal/
│   │   ├── Nav/
│   │   └── PhotoList/
│   ├── utils/
│   │   └── helpers.js          # capitalizeFirstLetter, validateEmail
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## What I learned

- Lifting category state into `App` so the gallery, nav, and contact view stay in sync without a router
- Building a focus-trapped, escape-listenable modal from scratch (no library)
- Why `defaultValue` + `onBlur` on a controlled form is a trap (state lags) — switched to `value` + `onChange`
- How GitHub Pages + a CRA `homepage` field combine to ship a static portfolio with a single command

## Known limitations

- The contact form opens the user's mail client via `mailto:` instead of POSTing to a backend. Wire to Formspree / Netlify Forms / a small API for production.
- 27 transitive npm advisories ride along with `react-scripts` (CRA). They are dev-only. A migration to Vite would clear most of them.
- React 17 is older than current; an upgrade to React 18 + `createRoot` is on the roadmap.
- Photo data is hand-coded in `src/components/PhotoList/index.js`; a real version would source from a CMS or local manifest.

## Roadmap

1. Add screenshots / a 30-second demo GIF to this README
2. Move photos array to `src/data/photos.js` and import per category
3. Wire the contact form to Formspree (or similar) so submissions actually deliver
4. Migrate from CRA to Vite (clears most dev-dep advisories, faster HMR)
5. React 18 + `createRoot`
6. Add a GitHub Actions CI workflow (build + test on PRs)
7. Add prev/next navigation inside the modal

## License

ISC — see [`LICENSE`](./LICENSE).

## Author

Built by [Boyd Roberts](https://github.com/coleyrockin).
