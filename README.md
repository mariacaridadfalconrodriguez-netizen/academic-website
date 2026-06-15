# Academic Website — Dr. María Caridad Falcón Rodríguez

A fast, accessible and elegant academic personal website built with
[Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), and
deployed for free on **GitHub Pages**.

The site is **bilingual (Spanish / English)** with a language switcher. Spanish
is the default language. All content lives in simple **YAML files** under
`src/data/<lang>/` (`es` and `en`), so the site can be updated without touching
any code. Interface strings (buttons, section titles) live in `src/i18n/ui.ts`.

---

## ✨ Features

- Ten pages: Home, About, Research, Publications, Teaching, Projects, Awards,
  Testimonials, CV and Contact.
- Light / dark mode with system-preference detection (no flash on load).
- Searchable, year-grouped publications and a searchable thesis-supervision list.
- Premium academic design: serif display typography, generous whitespace,
  subtle scroll animations, timelines and refined cards.
- SEO optimised: meta tags, Open Graph, Twitter cards, JSON-LD `Person` schema,
  automatic sitemap and `robots.txt`.
- Accessible: semantic HTML, skip-to-content link, focus states, reduced-motion
  support and keyboard-friendly navigation.
- Responsive and mobile-first; optimised, responsive portrait image.
- Automatic deployment to GitHub Pages via GitHub Actions.

---

## 🗂 Project structure

```text
.
├── .github/workflows/deploy.yml   # GitHub Pages CI/CD
├── astro.config.mjs               # Site URL, base path, integrations
├── tailwind.config.mjs            # Design tokens (colours, fonts, animations)
├── public/                        # Static assets served as-is
│   ├── profile.png                # Portrait (also used for social cards)
│   ├── cv-...pdf                  # Downloadable CV
│   ├── favicon.svg
│   ├── robots.txt
│   └── .nojekyll                  # Stops GitHub Pages from running Jekyll
├── src/
│   ├── assets/profile.png         # Portrait (auto-optimised by Astro)
│   ├── components/                # Header, Footer, Icon, SocialLinks, …
│   ├── data/                      # ← ALL EDITABLE CONTENT (YAML)
│   ├── layouts/BaseLayout.astro   # Shared <head>, SEO, theme, shell
│   ├── lib/url.ts                 # Base-path helpers
│   ├── pages/                     # One file per route
│   └── styles/global.css          # Tailwind layers + design utilities
└── package.json
```

---

## 📝 Editing content (no code required)

Open the file for the language you want in **`src/data/es/`** or
**`src/data/en/`** and edit the text. The two folders mirror each other, so to
update both languages edit the matching file in each. Each file is documented
with comments. After saving, the site rebuilds automatically when you push.

> To change the default language, edit `defaultLang` in `src/i18n/ui.ts` and
> `defaultLocale` in `astro.config.mjs`.

| File | Controls |
| --- | --- |
| `site.yaml` | Site title, navigation, global SEO description/keywords |
| `profile.yaml` | Name, title, portrait, email, and profile badge links (ORCID, Scholar, ResearchGate, LinkedIn) |
| `about.yaml` | Short & long biography, key facts, focus areas |
| `education.yaml` | Degrees |
| `positions.yaml` | Career timeline |
| `research.yaml` | Research areas, field contexts, collaborations, languages |
| `publications.yaml` | Journal articles, book chapters, conference papers, metrics |
| `teaching.yaml` | Courses and mentoring philosophy |
| `supervision.yaml` | Supervised theses |
| `projects.yaml` | Funded projects and research stays |
| `awards.yaml` | Awards / milestones timeline |
| `testimonials.yaml` | Testimonials |
| `news.yaml` | News / updates (with optional link and YouTube video) |
| `contact.yaml` | Contact details and channels |

### Adding a news item

Edit `src/data/<lang>/news.yaml` and add a block under `items` (most recent on
top). Available fields:

```yaml
- date: "2026-06-13"          # YYYY-MM-DD
  title: "Headline"
  summary: "Short description."
  link: "https://…"           # optional external link (e.g. a LinkedIn post)
  linkLabel: "View the post"   # optional button text
  video: "hSMBxioWNyc"        # optional YouTube video ID (after ?v= or /embed/)
  tags: ["Tag A", "Tag B"]    # optional
```

The YouTube `video` field takes only the **video ID**, e.g. for
`https://www.youtube.com/watch?v=hSMBxioWNyc` use `hSMBxioWNyc`.

### Updating the portrait or CV

- **Portrait:** replace both `src/assets/profile.png` (used across the site) and
  `public/profile.png` (used for social-share cards), keeping the same filenames.
- **CV PDFs (per language):** place the files in `public/` as
  `cv-maria-caridad-falcon-rodriguez-es.pdf` and
  `cv-maria-caridad-falcon-rodriguez-en.pdf`. The CV link, hero/about buttons and
  the CV page stay hidden until you set `cv.available: true` in the matching
  `src/data/<lang>/profile.yaml`. Each language serves its own PDF via `cv.file`.

> Profiles without a real URL (e.g. Google Scholar, ResearchGate) keep `#` and
> are hidden automatically. Add the real URL in `profile.yaml`/`contact.yaml` and
> they reappear on their own.

### Testimonials via Google Form (optional, no backend)

The Testimonials page always shows the curated entries in
`src/data/<lang>/testimonials.yaml`. You can also let people submit testimonials
through a Google Form and have **approved** ones load automatically (no rebuild),
configured in `src/data/testimonials-source.yaml`:

1. Create a **Google Form** with questions named exactly: `Nombre`, `Cargo`,
   `Testimonio`, `Idioma` (answer `es` or `en`). Copy its public link.
2. Open the linked **responses spreadsheet** and add a column named `Aprobado`.
   Write `sí` (or `x`, `true`, `1`) in that column only for testimonials you want
   published — everything else stays hidden.
3. Publish the sheet: **File → Share → Publish to web → select the sheet →
   CSV**, and copy the generated link.
4. Paste both links into `src/data/testimonials-source.yaml` (`formUrl` and
   `csvUrl`). Adjust the `columns:` names if you used different headers.

Once set, the "Submit a testimonial" button opens your form, and approved rows
appear on the page automatically. While the fields are empty, the button simply
links to the contact page.

---

## 💻 Local development

Requires **Node.js 20+**.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321/academic-website
npm run build    # production build into ./dist
npm run preview  # preview the production build locally
```

---

## 🚀 Deploying to GitHub Pages

The repository is pre-configured for the repo
`mariacaridadfalconrodriguez-netizen/academic-website`, which publishes to:

```
https://mariacaridadfalconrodriguez-netizen.github.io/academic-website/
```

### One-time setup

1. Create the GitHub repository and push this project:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: academic website"
   git branch -M main
   git remote add origin https://github.com/mariacaridadfalconrodriguez-netizen/academic-website.git
   git push -u origin main
   ```

2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.

That's it. Every push to `main` triggers the workflow in
`.github/workflows/deploy.yml`, which builds the site and deploys it. The first
deploy typically takes 1–2 minutes; watch progress under the **Actions** tab.

### If you rename the repository or use a custom domain

Update the two constants at the top of `astro.config.mjs`:

```js
const SITE = 'https://<your-user>.github.io';
const BASE = '/<your-repo>';
```

For a custom domain, set `SITE` to your domain, set `BASE` to `'/'`, add a
`public/CNAME` file containing the domain, and configure the domain under
**Settings → Pages**.

---

## 🧰 Tech stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — automatic sitemap
- [@rollup/plugin-yaml](https://github.com/rollup/plugins/tree/master/packages/yaml) — YAML content imports

---

## 📄 License

Content © Dr. María Caridad Falcón Rodríguez. Source code released under the MIT License.
