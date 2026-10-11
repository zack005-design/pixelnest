# PixelNest

**Discover. Create. Inspire.**

An original visual discovery app with 126 bundled images, responsive masonry feeds, search and filters, boards, local uploads, likes, follows, comments, demo messages, themes, and preferences.

## Run locally

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Build and preview the production version:

```sh
npm run build
npm run preview
```

## Deploy from this repository

In GitHub, select **Settings → Pages → Build and deployment → Source → GitHub Actions**. The included workflow builds and publishes each push to `main`. You can also run **Deploy PixelNest to GitHub Pages** manually from the Actions tab.

Once deployment succeeds, the site is available at `https://zack005-design.github.io/webpage/`.

Navigation uses hash URLs, for example `#/pin/p100`, so shared links and page refreshes work on GitHub Pages without a server. Image and bundle paths are relative, supporting both a repository subdirectory and a custom domain.

## Files

- `src/` — application, styles, catalogue, and image-service adapters.
- `public/` — favicon and the images used by the application.
- `.github/workflows/deploy.yml` — automatic build and Pages deployment.
- `index.html`, `package.json`, `package-lock.json`, `tsconfig.json`, `vite.config.ts` — application entry and reproducible build configuration.
- `CREDITS.md` — original image attribution.

Generated output, dependencies, caches, logs, environment files, and hosting-provider files are excluded. GitHub Actions uploads `dist/` as a deployment artifact; build output is not committed to the source repository.

## Local demo behavior

Likes, boards, uploads, comments, follows, messages, and preferences are saved in this browser. There is no live account service, cross-device sync, or real messaging backend. Board privacy controls local views. Uploaded-Pin links only work in the browser where the Pin was created. The demo profiles are fictional collectors, not the original photographers.

Visual matching uses average color and image proportions. Recommendations use local category, tag, and follow signals. External and AI adapters can be added through `src/lib/imageService.ts`; credentials must stay on a separate server.

## Design and dependencies

Original PixelNest SVG logo and interface. React, TypeScript, Vite, Framer Motion, and Lucide icons. DM Sans and Manrope fonts are loaded through Google Fonts. Photo attribution is listed in [CREDITS.md](CREDITS.md).
