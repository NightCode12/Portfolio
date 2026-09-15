# Portfolio — Falcatan

Personal portfolio built with React 19 + Vite. Dark, minimal, motion-driven.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
npm run lint
```

## Structure

```
src/
  data/        Content only — edit these to change what the site says
  components/  One file per section + shared Section / SectionHeading primitives
  styles/      tokens.css → base.css → motion.css, then one file per section
  hooks/       useReveal, useActiveSection, useScrolled, useBodyLock
```

The split is deliberate: **content lives in `data/`, never in JSX.** To add a
project, append an entry to `src/data/projects.js`; to retitle a nav link, edit
`src/data/site.js`. No component changes needed.

## Styling

Three layers, imported once in `src/styles/index.css`:

| File | Holds |
| --- | --- |
| `tokens.css` | Every color, size, radius, duration and easing as a CSS variable |
| `base.css` | Reset plus shared primitives: `.section`, `.container`, `.heading`, `.card`, `.tag`, `.btn`, `.icon-btn`, `.field` |
| `motion.css` | The animation vocabulary (see below) |

Section stylesheets only carry what is unique to that section. Changing
`--accent` in `tokens.css` restyles the whole site.

## Motion

Add `data-reveal` to any element and it fades in when scrolled into view —
`useReveal()` in `App.jsx` watches the document (including nodes React mounts
later) so nothing has to register itself.

```jsx
<div data-reveal="up" style={{ "--d": "120ms" }}>…</div>
```

Variants: `up`, `fade`, `scale`, `left`, `right`. `--d` staggers a group.
For above-the-fold content that should not wait for a scroll, use the
`.animate-rise` class instead.

Everything degrades to no motion under `prefers-reduced-motion: reduce`.

## Contact form

Uses [EmailJS](https://www.emailjs.com/). Credentials are read from Vite env
vars with the current values as fallbacks — copy `.env.example` to `.env` to
override:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

These are publishable client-side identifiers, not secrets.
