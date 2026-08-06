# Aathi — Developer Portfolio

Java Full Stack Developer portfolio. Single-page scroll site with anchor navigation.

## Status: Milestone 10 complete (Performance, SEO & Accessibility)

Every component is built, animated, responsive-audited, and now has a performance/SEO/
accessibility pass on top. Only **deployment** remains.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 3** (pinned to v3, not v4 — keeps the classic `tailwind.config.js` workflow)
- **React Router 7** (`react-router-dom`) — client-side routing, `BrowserRouter`
- **Framer Motion** — installed in Milestone 9, drives the scroll-reveal system (`Reveal.jsx`)
- **`@fontsource/*`** — self-hosted fonts, installed in Milestone 10 (replaced the Google Fonts CDN)
- **`react-icons`** — GitHub/LinkedIn brand marks in Contact/Footer
- **`lucide-react`** — all other icons

## Folder structure

```
src/
├── assets/                 icons, images
├── components/
│   ├── layout/              Navbar.jsx, Footer.jsx built
│   ├── sections/             Hero.jsx, About.jsx, Skills.jsx, Projects.jsx, Contact.jsx built
│   └── ui/                   SkillBadge.jsx, ProjectCard.jsx, Reveal.jsx built | Button.jsx (not built yet)
├── context/
│   └── ThemeContext.jsx     built — dark/light state, localStorage, system preference
├── data/                    profile.js (now incl. email/github/linkedin), skills.js, projects.js built
├── pages/                   (empty — reserved if we ever need actual routes beyond the single page)
├── App.jsx                  built — router shell + all 5 content sections + Footer mounted
├── main.jsx                 built — BrowserRouter + ThemeProvider wrapper
└── index.css                built — Tailwind directives + base theme rules
```

Import alias `@/` points to `src/` (configured in `vite.config.js` + `jsconfig.json`), e.g.
`import Navbar from '@/components/layout/Navbar'`.

## Design tokens (in `tailwind.config.js`)

| Token | Light | Dark |
|---|---|---|
| `background` | `#FAFAF9` | `#0B0E14` |
| `surface` (cards) | `#FFFFFF` | `#131720` |
| `foreground` (text) | `#14171F` | `#E7E9EE` |
| `muted` (secondary text) | `#6B7280` | `#8B93A5` |
| `accent` | `#3562CC` | `#5B8CFF` |
| `border` | `#7C8592` | `#636D85` |

`accent` (light) and both `border` colors were changed in Milestone 10 from their original
values (`#3B6FE0`, `#E5E7EB`, `#232838`) after computing exact WCAG contrast ratios and
finding real failures — see the Milestone 10 section below for the numbers.

Fonts: **Space Grotesk** (`font-display`, headings) / **Inter** (`font-body`, default) /
**JetBrains Mono** (`font-mono`, for tech tags, code-flavored accents — a deliberate nod to
the backend/engineering identity). Self-hosted via `@fontsource/*` (switched from the Google
Fonts CDN in Milestone 10 — see below).

## Dark mode

- Strategy: Tailwind `darkMode: 'class'`, toggled via `ThemeContext` (`src/context/ThemeContext.jsx`).
- Persisted to `localStorage` under key `portfolio-theme`.
- Falls back to system preference (`prefers-color-scheme`) if no explicit choice has been made,
  and keeps following system changes until the user picks a theme manually.
- A small blocking script in `index.html` applies the theme class before first paint, so there's
  no flash of the wrong theme on load.
- Usage in any component: `const { theme, toggleTheme, isDark } = useTheme()`.

## Navbar

- Fixed to the top, transparent over the hero, gains a blurred solid background + bottom
  border once `window.scrollY > 8`.
- Logo mark: `<Aathi/>` with the brackets in `font-mono text-accent` — small nod to the dev
  identity, kept restrained.
- Desktop: inline links + theme toggle. Mobile (`< 768px`): hamburger icon opens a dropdown
  panel with the same links, animated via `max-height` transition.
- Uses `lucide-react` for the Menu/X/Sun/Moon icons.
- **Scroll-spy active-link highlighting is live** (added Milestone 9) — the link matching
  whatever section crosses the viewport's vertical center gets `font-semibold` + accent color
  + `aria-current="true"`.
- Escape key closes the mobile menu (added Milestone 10).

## Known non-issue

`npm audit` flags a high-severity advisory on `react-router-dom` (GHSA-qwww-vcr4-c8h2). It only
affects the unstable RSC (React Server Components) APIs — this project is a plain client-side SPA
using `BrowserRouter`, so it doesn't apply. Left as-is rather than force a v8 major upgrade.

## Running locally

```
npm install
npm run dev
```

## Hero

- Full-viewport section, center-aligned, content vertically centered.
- Eyebrow styled as a config/JSON key-value pair (`role: "Java Full Stack Developer"`) in
  `font-mono` — a small signature tying the visual language to REST/Spring config files.
- Headline works the name in directly rather than a generic greeting; tagline leans into the
  "full stack, not just my favorite half" framing.
- Two CTAs (`View Projects` → `#projects`, `Get in Touch` → `#contact`) and a bouncing
  scroll-cue (`#about`).
- Content wrapped in `Reveal` (added Milestone 9) for a fade/rise on load; the scroll-cue's
  bounce is Tailwind's own `animate-bounce`, independent of that system.

## About

- Two-column layout (`md:grid-cols-[200px_1fr]`): a label column (`// About` eyebrow +
  heading) and a content column (paragraph + education). Stacks to one column on mobile.
- Establishes a reusable header pattern: `// SectionName` in `font-mono text-accent` plus
  a short `<h2>`. Skills/Projects/Contact should reuse this same eyebrow style for visual
  consistency, even if their content layout below it differs.
- Also establishes the section vertical-padding convention: `py-24 sm:py-32`. Reuse this
  for the remaining sections so spacing rhythm stays even down the page.
- Education is folded in as a compact bordered credential (icon + text), not a separate
  section — per the original roadmap decision to avoid over-fragmenting a one-line detail.

## Skills

- Reuses the `// SectionName` eyebrow + `md:grid-cols-[200px_1fr]` layout from About.
- Grouped into **Backend** (Java, Spring Boot, Spring Security, REST APIs, MySQL),
  **Frontend** (React, JavaScript, HTML, CSS, Tailwind CSS), and
  **Tools & Fundamentals** (Git, Docker, Data Structures & Algorithms) — scannable rather
  than one flat wall of 13 pills.
- `SkillBadge.jsx` (new, in `components/ui/`): a plain `font-mono` pill, no brand icons.
  Considered adding tech-brand icons (Java, React, MySQL, etc. each have their own brand
  color) but skipped it deliberately — mixing five or six brand colors would undercut the
  restrained cobalt/neutral palette the rest of the site uses. Text-only pills stay
  consistent with that.

## Projects

- Reuses the `// SectionName` eyebrow + `md:grid-cols-[200px_1fr]` layout from About/Skills.
- **Two-tier hierarchy**, per the original roadmap: JWT Authentication System and Ecommerce
  Backend API render as larger "Featured" cards (own row, more padding, feature-list
  bullets), while Weather Dashboard and Todo Application render as smaller cards under a
  "More Projects" label — same audience-fit reasoning as before (backend work gets the
  weight, for this recruiter audience).
- `ProjectCard.jsx` (new, in `components/ui/`) reuses `SkillBadge` for the tech-stack tags
  instead of building a second near-identical pill component.
- **All "View Code" links currently point to the GitHub profile root**
  (`https://github.com/aathi1412`), not per-repo URLs — none were provided. Update
  `githubUrl` on each entry in `data/projects.js` once the actual repo links exist.
- Icon note: `lucide-react` doesn't ship a GitHub logo (brand icons were dropped from the
  library). Used `Code2` (a `</>` glyph) instead — also keeps things consistent with the
  no-brand-icons decision made in the Skills milestone.

## Contact

- Reuses the `// SectionName` eyebrow + `md:grid-cols-[200px_1fr]` layout from the other
  sections. Heading: "Let's build something great." — the closing-CTA framing the roadmap
  called for.
- Three link tiles: Email, GitHub, LinkedIn — bordered cards, accent on hover.
- GitHub/LinkedIn use real brand marks (`FaGithub`/`FaLinkedin` from `react-icons/fa`, new
  dependency), unlike Skills' plain-text pills. Reasoning is different, not inconsistent:
  these are two well-known single-color glyphs that adopt `currentColor`, not a handful of
  differently-colored official logos — so they don't fight the palette the way five or six
  brand-colored tech icons would have.
- **Email is a placeholder** (`aathi@example.com` in `profile.js`) — no real address was
  ever given. Flagged loudly here and in the file itself; swap it before deploying.

**Note on how this milestone went:** `Contact.jsx`, the `profile.js` contact fields, and the
`App.jsx` mount were already present in the workspace when this session started — not
written by me in this session. I reviewed rather than assumed: kept the layout and the safe
placeholder-email pattern, but swapped the generic icons for real GitHub/LinkedIn marks and
strengthened the closing copy to match the original spec, then verified the build myself.

## Footer

- Two-tier layout: top row is brand (`<Aathi/>` logo, same mark as Navbar, for a deliberate
  open/close bookend) + quick actions; bottom row is copyright + "Back to top".
- GitHub/LinkedIn as compact icon-only circular buttons (`react-icons/fa`, same as Contact),
  not full tiles — Footer is meant to be quieter than Contact, not a repeat of it.
- **Resume button is a real disabled `<button>`**, not a dead link — `disabled` +
  `aria-disabled="true"` + a visible "(coming soon)" label, so it reads as intentionally
  unavailable rather than broken. Swap it for a real `<a href="/resume.pdf" download>` once
  a resume file exists (there's already a placeholder path reserved at
  `public/resume.pdf` from Milestone 1).
- Copyright year is computed via `new Date().getFullYear()`, not hardcoded — stays correct
  without maintenance.
- Mounted **outside** the `<Routes>` block in `App.jsx` (Navbar is too) — both persist
  regardless of route, in case real routes ever get added later.

## Milestone 9 — Animation pass + Responsive/cross-browser QA

### Animation

- New `components/ui/Reveal.jsx`: a reusable scroll-triggered fade/rise (`whileInView`,
  fires once), used instead of hand-rolling the same Framer Motion config in every section.
  **Respects `prefers-reduced-motion`** — falls back to a plain, unanimated `div` via
  Framer's `useReducedMotion` hook.
- Every section's label column and content now reveal in a staggered cascade (label first,
  then content items 0.1s apart) — About, Skills (per skill-group), Projects (per card,
  continuous 0.1→0.4 across both rows), Contact (paragraph, then each tile).
- **Navbar scroll-spy is now live** — the nav link matching whatever section is crossing
  the viewport's vertical center gets highlighted in accent color. This was explicitly
  deferred in Milestone 2 ("nothing real to test it against yet"); all section ids exist
  now, so it's built and works for real, not against nothing.
- Added a subtle `hover:-translate-y-1` lift to `ProjectCard` and the Contact tiles —
  consistent hover language across the two bordered-card patterns on the page.
- **Bundle size cost, flagged plainly:** Framer Motion adds real weight — production JS
  went from ~253KB to ~375KB (~80KB → ~120KB gzipped). Expected and consistent with the
  stack decision made back at the roadmap stage, but worth knowing before the performance
  pass.

### Responsive/cross-browser QA

No headless browser is available in this sandbox (tried installing Playwright's Chromium —
the download domain isn't reachable through the sandbox's network allowlist), so this was a
rigorous **code-level audit**, not a visual one. Recommend a real spot-check in
Chrome/Firefox/Safari/Edge before shipping. Two real issues were found and fixed, not just
theoretical ones:

1. **Cramped cards at 640–767px viewport width.** The label/content grid (`About`, `Skills`,
   `Projects`, `Contact`) split into two columns at the same `sm:` (640px) breakpoint that
   `Projects`' card-row and `Contact`'s tile-row *also* used for their own 2-up split. At
   exactly that width, both splits fired at once, squeezing project cards down to ~150px —
   too narrow for the feature-bullet content. **Fix:** moved the label/content grid
   breakpoint from `sm:` to `md:` (768px) across all four sections. This also fixes a real
   inconsistency: the Navbar was already switching mobile↔desktop at `md:` — content
   sections were switching at `sm:`. Now the whole site uses one consistent breakpoint for
   "mobile" vs "desktop" layout.
2. **`ProjectCard`'s feature list had a fragile nested 2-column sub-grid** that got
   uncomfortably tight once cards render in a 2-up row (~220–340px wide depending on
   viewport) — some feature names ("Role Based Authentication") would wrap awkwardly in a
   ~130px column. **Fix:** simplified to a single-column bullet list. Slightly taller cards,
   no width-dependent cramping risk at any viewport.

Also done as part of this pass:
- Bumped every icon-only button (Navbar's theme toggle + hamburger, Footer's GitHub/
  LinkedIn) from 36px to 40px — closer to the ~44px touch-target guideline for mobile.
- Confirmed `backdrop-blur` (Navbar) gets its `-webkit-` prefix automatically via
  Autoprefixer (already configured in `postcss.config.js`) — checked in the compiled CSS
  output, not assumed.
- **One known, low-risk compatibility note:** this Tailwind version compiles responsive
  breakpoints using modern `@media (width>=768px)` range syntax rather than the older
  `min-width:`. Functionally identical, but unsupported on browsers older than roughly
  Safari 16.4 / 2023-era Chrome & Firefox — on those, sections would just stay in the
  mobile-stacked layout rather than break. Not fixing this (would mean fighting the
  installed Tailwind version's default output) given how narrow the affected browser
  population is for this audience.

## Milestone 10 — Performance, SEO & Accessibility

### Accessibility — real, measured fixes, not a checklist

- **Contrast ratios were computed exactly** (WCAG relative-luminance formula), not
  eyeballed. Two real failures found and fixed with the smallest color shift that cleared
  the bar:
  - `accent` text on the light background was **4.43:1** (WCAG AA needs 4.5:1 for normal
    text) → changed `#3B6FE0` → `#3562CC`, now **5.33:1**. Same hue/saturation, just
    slightly deeper — visually near-identical.
  - Both `border` colors were **~1.2:1** against their backgrounds (WCAG needs 3:1 for
    non-text UI component boundaries — buttons/cards that rely on a border alone to show
    their edge) → `border-light` `#E5E7EB`→`#7C8592` (3.57:1), `border-dark`
    `#232838`→`#636D85` (3.73:1). **This is a real, visible change** — borders that were
    near-invisible hairlines are now clearly perceivable. Verified against both the page
    background and the (harder) card-surface color, not just one.
- Added the missing **`<main>` landmark** in `App.jsx` — without it, everything between
  Navbar and Footer wasn't reachable as a single screen-reader jump target.
- **Fixed a real heading-hierarchy bug**: `ProjectCard` titles were all `h3`, but the "More
  Projects" cards sit under a `h3` sub-heading — meaning their titles should be `h4`, one
  level deeper. `ProjectCard` now takes a `titleLevel` prop; Projects.jsx passes `"h4"` for
  the non-featured row.
- Every section now has `aria-labelledby` pointing at its heading's `id` — makes each one a
  properly named landmark region, not just an anonymous `<section>`.
- **Navbar's active-link state was color-only** (fails WCAG 1.4.1 — color can't be the only
  means of conveying information). Now pairs the color change with a font-weight change and
  `aria-current="true"`.
- Added Escape-to-close on the mobile menu (keyboard users).
- Added a custom `:focus-visible` ring (accent-colored, `ring-offset` matched to each
  theme) — `focus-visible` only, so it never shows on mouse clicks, only keyboard/
  programmatic focus. Satisfies WCAG 2.4.7.

### Performance

- **Self-hosted all three fonts** via `@fontsource/*` instead of the Google Fonts CDN —
  removes two external origins (`fonts.googleapis.com`, `fonts.gstatic.com`) the browser
  previously had to DNS-resolve and connect to. Also sidesteps the GDPR/IP-leak concern
  some EU courts have flagged with remotely-loaded Google Fonts.
- Imported **latin + latin-ext subsets only** (not the full multi-script files) — this is
  English content, so the cyrillic/greek/vietnamese `@font-face` declarations were dead
  weight. Cut the CSS bundle from 47KB → 17.7KB (gzip: 18.8KB → **4.2KB**).
- No raster images exist anywhere else on the site (every icon is an inline SVG React
  component) — so there was nothing else to lazy-load or compress.

### SEO

- Full Open Graph + Twitter Card meta tags (title, description, image, dimensions).
- **Generated an actual `og-image.png`** (1200×630) at `public/og-image.png` — matches the
  site's dark palette, mono/JSON eyebrow motif, and tech-tag pill styling, so link previews
  on LinkedIn/Slack/Twitter look intentional instead of blank. Source SVG is at
  `scripts/og-image-source.svg` — edit and re-run
  `rsvg-convert -w 1200 -h 630 scripts/og-image-source.svg -o public/og-image.png` to
  regenerate if the copy changes.
- JSON-LD structured data (`schema.org/Person`) — helps search engines parse this as a
  professional profile rather than an arbitrary page.
- `robots.txt` and a minimal `sitemap.xml`.
- ⚠️ **Canonical URL, `og:url`, `twitter:image`, and the sitemap all use a placeholder
  domain** (`https://aathi-portfolio.example.com/`) — there's no real deployed URL yet.
  Swap this for the actual domain during the deployment milestone, or these tags actively
  mislead crawlers.

### Honest note on how this was tested

No real browser is available in this sandbox (confirmed again this milestone — tried
installing Playwright's Chromium, the download domain isn't reachable through the sandbox's
network allowlist). Everything above was verified by: building the actual production
bundle, grepping the compiled output to confirm classes/attributes survived minification and
that specific bugs (heading levels, aria attributes, Google Fonts removal, new meta tags)
were actually fixed rather than assumed fixed, computing contrast numbers exactly rather than
guessing, and serving the production build with `vite preview` + `curl` to confirm the page,
`og-image.png`, `robots.txt`, and `sitemap.xml` all actually load with a 200. That's
rigorous, but it's not the same as opening the site in Chrome and running axe DevTools or
Lighthouse — worth doing that for real before shipping.

## Next milestone

**Milestone 11 — Deployment.** Also the point to: replace the placeholder domain in SEO
tags, add a real email in `profile.js`, and add a real resume file (swap Footer's disabled
button for a real download link).
