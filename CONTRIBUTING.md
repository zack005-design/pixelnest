# Contributing to PixelNest

## Develop locally

Use Node.js 22.13 or newer and run `npm ci`, then `npm run dev`. Keep `package-lock.json` updated with any intentional dependency changes so local and CI installations stay reproducible.

Before submitting a change:

1. Run `npm test` and `npm run build`; the build includes the TypeScript check.
2. Run `npm run preview` and check the affected interactions in the production app.
3. Check a narrow viewport and keyboard navigation for interface changes.
4. Confirm image paths are relative and shared hash links still work after a refresh.
5. Keep dependencies, `dist/`, local caches, logs, and credentials out of the commit.

Describe the problem, resulting behavior, and verification in your pull request. For bugs, include the affected route, reproduction steps, and browser version. Do not attach private browser data or credentials.

## Adding images

Store bundled images in `public/images/` and reference them with relative paths in `src/lib/catalogue.json`. Include useful alt text and accurate dimensions. Add the original source and attribution to `CREDITS.md`, and confirm you have permission to use the asset.

## Deployment

Changes merged to `main` trigger GitHub Pages deployment. Check both the build and deploy jobs before reporting a release, then open the live site and refresh a shared Pin link. Use the Actions logs to diagnose failures.

## Data and credentials

PixelNest is a browser-local demo. Preserve that expectation unless a change explicitly introduces a backend. Never put service credentials in `public/`, frontend source, or `VITE_*` variables: frontend values are delivered to visitors.
