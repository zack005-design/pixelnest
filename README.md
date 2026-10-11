# PixelNest

**Discover. Create. Inspire.**

A visual discovery app for curious minds. Explore 126 bundled images, collect ideas into boards, and add your own inspiration through a responsive masonry interface.

[**Open PixelNest →**](https://zack005-design.github.io/webpage/) · [Image credits](CREDITS.md) · [Contributing](CONTRIBUTING.md)

[![Deploy PixelNest](https://github.com/zack005-design/webpage/actions/workflows/deploy.yml/badge.svg)](https://github.com/zack005-design/webpage/actions/workflows/deploy.yml)

## What you can do

- **Discover:** browse categories, search by keyword, and filter by color, mood, and style.
- **Collect:** save ideas into boards, like Pins, and follow demo creators.
- **Create:** upload images, add descriptions and alt text, and organize your own Pins.
- **Personalize:** choose light, dark, or system appearance, accent colors, layout, and motion preferences.
- **Share:** copy links to bundled Pins and boards. Hash routing keeps shared views refreshable on GitHub Pages.

## Quick start

Use Node.js 22.13 or newer. The deployment workflow uses Node.js 22; `.nvmrc` selects that major version for compatible local tools.

```sh
git clone https://github.com/zack005-design/webpage.git
cd webpage
npm ci
npm run dev
```

Open the local URL printed by Vite. No environment variables or API keys are required.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run typecheck` | Check TypeScript without generating files |
| `npm test` | Check discovery, Following feeds, board saves, safe links, and shared routes |
| `npm run build` | Check types and create the production app in `dist/` |
| `npm run preview` | Serve the production build locally |

For a production preview, run `npm run build` followed by `npm run preview`.

## Deployment

GitHub Pages publishes this app at **[zack005-design.github.io/webpage](https://zack005-design.github.io/webpage/)**.

Each push to `main` runs the [deployment workflow](.github/workflows/deploy.yml): install locked dependencies, check TypeScript, build with Vite, upload `dist/`, and deploy to Pages. You can also run **Deploy PixelNest to GitHub Pages** manually from the Actions tab.

For a fork, enable **Settings → Pages → Build and deployment → Source → GitHub Actions**. The workflow needs Pages enabled and permission to deploy to the `github-pages` environment. Public repositories can use Pages without a paid plan; private repositories require a supporting plan.

Vite uses `base: './'`, and the app uses relative image paths and hash navigation such as `#/pin/p100`. This supports a repository subdirectory without server-side route rewrites. Keep these settings when deploying under a path like `/webpage/`.

If a deployment fails, open the failed workflow step in Actions. A successful build alone does not confirm that Pages deployed. A “Get Pages site failed” error usually means Pages needs to be enabled or its source configured to GitHub Actions.

## How the demo stores your data

Likes, boards, uploads, comments, follows, demo messages, and preferences are stored in this browser's local storage. Clearing site data removes these changes; each browser and hosting domain has its own storage.

There is no live account service, cross-device sync, or real messaging backend. Board privacy controls local views, and uploaded-Pin links work only in the browser where the Pin was created. Demo profiles are fictional collectors, not the original photographers.

Visual matching compares average color and image proportions. Recommendations use local category, tag, and follow signals. External or AI adapters can be added through `src/lib/imageService.ts`; any credentials must stay on a separate server.

## Project structure

```text
.github/workflows/deploy.yml  Build and Pages deployment
public/images/               126 bundled images
public/favicon.svg           PixelNest favicon
src/components/PixelNest.tsx  Application views and interactions
src/lib/                     Catalogue, navigation, and image adapters
src/styles.css               Responsive layout and themes
src/main.tsx                 React entry point
CREDITS.md                   Original image attribution
vite.config.ts               Relative production asset paths
```

The stack is React, TypeScript, Vite, Framer Motion, and Lucide icons. The SVG logo and interface are original PixelNest designs. DM Sans and Manrope load through Google Fonts.

Dependencies, build output, caches, logs, environment files, and private keys are excluded from Git. The workflow publishes `dist/` as an artifact; generated output is not committed. The original ZIP remains recoverable from earlier Git history.

## Contributing and image attribution

See [CONTRIBUTING.md](CONTRIBUTING.md) for the development checklist. Preserve [CREDITS.md](CREDITS.md) and verify usage rights before adding or redistributing images. A public repository does not itself grant a license to its source or third-party assets.
