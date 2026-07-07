# LRYPT Technologies — React (Vite + React Router)

Every page explicitly lists the components it uses. Every page's content
lives in one dedicated data file. Same colors, fonts, layout, and
animations as the original static site.

## Structure

```
src/
  components/
    Nav.jsx, Footer.jsx, Layout.jsx   — shared chrome
    Icon.jsx                          — renders the small SVG icons from data
    sections/                        — one component per visual pattern
      PageHead.jsx        — top banner/breadcrumb on inner pages
      HeroSlider.jsx      — homepage rotating hero
      IntroBlock.jsx      — intro/label/lede/lead text blocks
      CardGrid.jsx        — "Our solutions" / "Our services" style cards
      IconGrid.jsx        — "Why choose LRYPT" style icon+text grids
      TagList.jsx         — pill/tag lists (industries, materials, etc.)
      Capabilities.jsx    — capability rows with bullet lists (+ SoloCapability)
      SplitFeature.jsx    — image + copy split sections
      ProductGrid.jsx     — Formlabs product cards
      FAQSection.jsx      — FAQ accordion (+ FAQCategorized for /faq)
      ContactForm.jsx     — contact form + info panel (ContactPanel)
      CTABand.jsx         — "Get a quote" band at the bottom of pages
      MissionVision.jsx   — About page mission/vision columns

  data/                              — ONE file per page, all its content
    homeData.js
    aboutData.js
    solutionsData.js
    cadDesignData.js
    ansysSimulationData.js
    formlabsData.js
    servicesData.js
    utilityNetworkData.js
    engineeringDesignData.js
    hrmsData.js
    blogsData.js
    faqData.js
    contactData.js

  pages/                             — ONE file per route, spells out
    Home.jsx                           its components explicitly
    About.jsx
    ... etc
    NotFound.jsx

  hooks/
    usePageEffects.js   — scroll-reveal / parallax / slider / FAQ-accordion
                          engine, ported from the original vanilla JS
    usePageMeta.js      — sets document title + meta description per page
```

## How a page works — e.g. `src/pages/About.jsx`
```jsx
import PageHead from "../components/sections/PageHead";
import IntroBlock from "../components/sections/IntroBlock";
import IconGrid from "../components/sections/IconGrid";
import MissionVision from "../components/sections/MissionVision";
import CTABand from "../components/sections/CTABand";
import usePageMeta from "../hooks/usePageMeta";
import { meta, pageHead, intro, whyChoose, missionVision, cta } from "../data/aboutData";

export default function About() {
  usePageMeta(meta.title, meta.description);
  return (
    <>
      <PageHead {...pageHead} />
      <IntroBlock {...intro} />
      <IconGrid {...whyChoose} tightTop />
      <MissionVision {...missionVision} />
      <CTABand {...cta} />
    </>
  );
}
```
You can see, top to bottom, exactly which components make up the page and
in what order — no switchboard, no hidden lookup. Each `{...pageHead}` /
`{...intro}` spreads that section's fields (from `aboutData.js`) as props
into the matching component.

## Editing content
Open the page's file in `src/data/` and edit the plain object — headings,
paragraphs, images, FAQ items, icon labels, etc. No JSX to touch.

## Editing layout/design
Open the one component in `src/components/sections/` for that pattern
(e.g. `IconGrid.jsx`) — the change applies everywhere that pattern is used.

## Run it
```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Deploying
Client-side routed — configure your host to serve `index.html` for unknown
paths. A `public/_redirects` file is included for Netlify
(`/* /index.html 200`); Vercel does this automatically.

## Still TODO (same as the original static site)
- Replace placeholder images (`assets/img/ph-*.webp`)
- Confirm public email, office address, and social links
- Wire the contact form (`/contact`) to a real backend endpoint

# HIROLA-LRYPT
