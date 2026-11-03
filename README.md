# João Sousa's site

Source of [joaosousadev.pt](https://joaosousadev.pt): a single static page with experience, projects, skills, certifications and education.

React renders the page to HTML at build time (see `vite.config.js`). No JavaScript is shipped to the browser. Content lives in `src/utils/Data.js`.

## Commands

```sh
npm ci
npm run dev      # local server
npm run lint
npm run build    # outputs dist/
npm test         # checks dist/, so build first
```

## Deployment

`.github/workflows/deploy.yml` runs lint, build and test on every pull request and on `master`. Pushes to `master` then deploy `dist/` to GitHub Pages.
