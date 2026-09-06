# Aathi — Portfolio

A personal developer portfolio for **Aathithyan**, a Full Stack Developer. Built as a single-page React app with MERN Stack, Spring Boot/Java-flavored aesthetic, smooth scroll-based navigation, and a fully accessible light/dark theme.

**Live site:** [aathi-dev.netlify.app](https://aathi-dev.netlify.app/)

## Overview

The site is a one-page profile — Hero, About, Skills, Projects, and Contact — styled around the idea of a backend developer who also ships clean frontends. Content (profile info, skills, and project list) is kept in plain data files under `src/data/`, so updating the portfolio doesn't require touching any component markup.

## Features

- **Light / dark theme** — respects the visitor's system preference on first load, remembers an explicit choice in `localStorage`, and applies the theme before first paint to avoid a flash of the wrong theme.
- **Responsive navigation** — fixed header with a blurred background on scroll, scroll-spy active-link highlighting via `IntersectionObserver`, and a mobile menu that closes on resize or <kbd>Esc</kbd>.
- **Scroll-reveal animations** — sections and cards fade/slide into view using Framer Motion.
- **Project showcase** — cards for each project with description, feature list, tech badges, a "Featured" flag, a status tag (e.g. *In Progress* / *Completed*), and links to source code and live demos where available.
- **Resume download** — one-click PDF download from the footer.
- **SEO-ready** — descriptive meta tags, Open Graph and Twitter Card data, a canonical URL, `schema.org/Person` structured data, `robots.txt`, and a `sitemap.xml`.
- **Accessibility-minded** — semantic landmarks, `aria-current`/`aria-label` usage throughout, and a color palette whose accent/border colors were deliberately adjusted to clear WCAG AA contrast requirements.

## Tech Stack

| Category | Tools |
|---|---|
| Framework | [React 19](https://react.dev/) + [React Router](https://reactrouter.com/) |
| Build tool | [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [lucide-react](https://lucide.dev/), [react-icons](https://react-icons.github.io/react-icons/) |
| Fonts | [Fontsource](https://fontsource.org/) — Space Grotesk (display), Inter (body), JetBrains Mono (mono) |
| Linting | [oxlint](https://oxc.rs/docs/guide/usage/linter.html) |

## Project Structure

```
portfolio/
├── public/                 # Static assets (favicon, OG image, resume, robots.txt, sitemap.xml)
├── scripts/                # Source SVG for the generated OG image
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Hero, About, Skills, Projects, Contact
│   │   └── ui/               # ProjectCard, SkillBadge, Reveal (scroll animation wrapper)
│   ├── context/             # ThemeContext (light/dark state)
│   ├── data/                 # profile.js, skills.js, projects.js — edit these to update content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/aathi1412/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server (with hot module reloading) at `http://localhost:5173`.

### Build

```bash
npm run build
```

Outputs a production build to `dist/`.

### Preview

```bash
npm run preview
```

Serves the production build locally to sanity-check it before deploying.

### Lint

```bash
npm run lint
```

Runs [oxlint](https://oxc.rs/docs/guide/usage/linter.html) against the codebase.

## Customizing

This portfolio is data-driven, so most updates don't require touching component code:

- **Profile info** (name, title, tagline, about text, email, social links) → `src/data/profile.js`
- **Skills** (grouped by category) → `src/data/skills.js`
- **Projects** (title, description, features, tech stack, links, status) → `src/data/projects.js`
- **Resume PDF** → replace `public/resume.pdf`
- **Colors / fonts** → `tailwind.config.js`
- **SEO / social preview metadata** → `index.html`

A `@` import alias points to `src/` (configured in `vite.config.js` and `jsconfig.json`), e.g. `import { profile } from '@/data/profile'`.

## Deployment

The site is configured for static hosting (currently deployed on [Netlify](https://www.netlify.com/)). Any static host that can serve the Vite `dist/` output works:

1. Run `npm run build`.
2. Deploy the contents of `dist/`.
3. Since this is a client-side routed SPA, configure your host to redirect all routes to `index.html`.

## License

Licensed under the [MIT License](./LICENSE).

## Contact

- **GitHub:** [@aathi1412](https://github.com/aathi1412)
- **LinkedIn:** [Aathithyan](https://www.linkedin.com/in/aathithyan-t)
- **Email:** aathithirunav@gmail.com
