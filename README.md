# Elliot Hu's Personal Site

An interactive, desktop-inspired portfolio built with TanStack Start and deployed on Cloudflare.

**Website:** [elliothu.me](https://elliothu.me)

The website source is maintained privately. This repository contains its public overview and CMS deployment configuration.

## Preview

<p>
  <img src="docs/previews/01-desktop-apps.png" width="48%" alt="Desktop apps including Music, Terminal, and Messages">&nbsp;&nbsp;
  <img src="docs/previews/02-desktop-hero.png" width="48%" alt="Interactive desktop hero">
</p>
<p>
  <img src="docs/previews/03-photo-gallery.png" width="48%" alt="Interactive photo gallery">&nbsp;&nbsp;
  <img src="docs/previews/04-dream-scene.png" width="48%" alt="Animated dream scene">
</p>
<p>
  <img src="docs/previews/05-about.png" width="48%" alt="About section">&nbsp;&nbsp;
  <img src="docs/previews/07-message-board.png" width="48%" alt="Visitor message board">
</p>
<p>
  <img src="docs/previews/08-project-preview.png" width="48%" alt="Interactive project preview">
</p>

## Architecture

- **Application:** React 19 and TanStack Start/Router provide the client UI, routing, SSR, and server functions.
- **Desktop shell:** Jotai atoms and a reducer manage windows, focus, stacking, snapping, and viewport state. Apps are defined in a registry and loaded on demand into reusable window frames.
- **Experience layer:** Tailwind CSS handles styling, Motion handles transitions and gestures, and PixiJS powers the richer canvas scenes.
- **Backend:** Cloudflare Workers hosts the application. D1 stores message-board entries, KV stores AI persona prompts, and Workers AI powers the Messages app behind a rate limiter.
- **Assets:** Static media is served from the site and its Cloudflare-backed asset domain.

## CMS

```bash
bun install
bun run cms:dev
bun run cms:deploy
```
