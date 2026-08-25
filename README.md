# Nasim Khan Milon — Portfolio

A React + Tailwind CSS portfolio built around one deliberate mid-tone theme —
"aurora" — instead of a light/dark toggle: deep twilight indigo, never
stark black or white, with a signature violet → fuchsia → cyan gradient that
recurs across headings, buttons, and three large drifting gradient blobs
behind the page. It's built to move: entrance reveals, tilting cards, an
infinite skills marquee, a scroll-filled achievements timeline, and
count-up stats.

## Design concept

Every section presents its content differently on purpose, instead of
repeating the same card grid:

| Section | How it's presented |
|---|---|
| Hero | Staggered entrance, animated gradient name, a spinning conic-gradient ring around the profile photo, two floating stat chips |
| About | Animated count-up numbers (problems solved, rating, CGPA, projects shipped) that count from 0 when scrolled into view |
| Skills | Continuous horizontal marquees, one per category, alternating scroll direction, pausing on hover |
| Projects | Filterable (All / Solo / Team) with an animated sliding pill, and each card tilts in 3D toward the cursor |
| Achievements | A vertical timeline with a gradient line that fills in as you scroll, alternating left/right, each entry badged "AC" — a nod to competitive-programming judge verdicts |
| Education | An animated circular progress ring for CGPA |
| Contact | Floating-label inputs and a submit button that swaps between a spinner and a checkmark |

## Tech stack

- **React 19** + **Vite**
- **Tailwind CSS v4** — theme tokens and shared classes (`.glass`, `.aurora-text`,
  `.btn-primary`, `.tag`, marquee/blob keyframes) defined in `src/index.css`
- **Framer Motion** — all scroll reveals, the tilt effect, the sliding nav/filter
  pills, the timeline fill, and the circular progress ring
- **typed.js** — the rotating role headline in the hero
- **@emailjs/browser** — the contact form
- **lucide-react** — UI icons (GitHub/LinkedIn/Codeforces are hand-rolled
  SVGs in `src/components/BrandIcons.jsx` since lucide doesn't ship brand marks)

## Project structure

```
src/
  assets/                profile photo + project screenshots
  components/
    AuroraBackground.jsx   the three drifting gradient blobs (fixed, behind everything)
    ScrollProgress.jsx     thin gradient bar tracking scroll position
    Navbar.jsx              floating glass pill nav, animated active-link highlight
    Reveal.jsx              shared fade-up-on-scroll wrapper used across sections
    CountUp.jsx             animates a number from 0 when scrolled into view
    Hero.jsx / About.jsx / Skills.jsx / Projects.jsx / ProjectCard.jsx /
    Achievements.jsx / Education.jsx / Contact.jsx / Footer.jsx
    BrandIcons.jsx           GitHub / LinkedIn / Codeforces SVGs
  data/siteData.js        ALL editable content lives here
  hooks/useActiveSection.js  scroll-spy for the navbar
  App.jsx                 page composition
  index.css                theme tokens, gradients, animation keyframes
public/
  cv.pdf                  the file the "Resume" button downloads
```

## Getting started

```bash
npm install
npm run dev       # start the dev server (usually http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Editing content

Your name, tagline, skills, project list, achievements, education, and
contact details all live in **`src/data/siteData.js`**. Update that file and
every section using it updates automatically.

To add a project with a screenshot, drop the image in `src/assets/` and set
its filename as the `image` field — cards fall back to a plain icon cover if
`image` is `null`. Set `group: true` on a project to have it show up under
the "Team" filter with the team badge.

## Theme tokens

Everything about the look lives in `src/index.css` under `@theme`:

```css
--color-bg: #1a1533;        /* page background — deep twilight, not black */
--color-surface: rgba(255, 255, 255, 0.055);  /* glass panel fill */
--color-violet: #8b5cf6;
--color-fuchsia: #ec4899;
--color-cyan: #22d3ee;      /* the three gradient colors */
--font-display: "Outfit";
--font-mono: "JetBrains Mono";
```

The same three gradient colors are reused in `AuroraBackground.jsx` (the
drifting blobs) and `.aurora-text` (gradient headline text) — change them
there too if you retint the palette.

## Motion & accessibility

All animation respects `prefers-reduced-motion` — see the media query at the
top of `index.css`, which collapses transition/animation durations to near
zero for anyone with that OS setting enabled.

## Contact form (EmailJS)

The form uses the same EmailJS service/template IDs as the original site
(`src/components/Contact.jsx`). To use your **own** EmailJS account instead,
sign up at [emailjs.com](https://www.emailjs.com/), create a service +
template, and replace the three constants at the top of `Contact.jsx`:

```js
const EMAILJS_SERVICE_ID = "...";
const EMAILJS_TEMPLATE_ID = "...";
const EMAILJS_PUBLIC_KEY = "...";
```

## Deploying

This is a static Vite app, so it deploys anywhere that serves static files:

- **Vercel**: import the repo, framework preset "Vite" is auto-detected, no config needed.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: run `npm run build` and push the `dist/` folder, or use `gh-pages`.

## Notes

- The `demo` field on each project in `siteData.js` is `null` — add a live
  URL there for any deployed project and a "Live demo" link appears automatically.
- The EduAI and Smart Department Management System cards don't have
  screenshots yet — drop images into `src/assets/` and reference them in
  `siteData.js` if you have any.
