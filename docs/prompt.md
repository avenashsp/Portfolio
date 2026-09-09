Build a complete, production-quality portfolio website for Swathy Moorthy in this workspace. Do not stop at a mockup: implement, test, and leave a working GitHub Pages-ready project.

First inspect these supplied files and use them as the factual source of truth:

- Swathy_Resume.pdf — experience, education, verified skills, contact details, metrics
- vision.docx — desired sections and interaction ideas
- color8.jpg — mandatory palette
- photo1.png — transparent hero portrait; use prominently

Important conflict resolution:
- Build a BRIGHT-THEME-ONLY experience. Do not add dark mode or a dark hero, even though vision.docx mentions a dark background.
- Use the resume as factual authority. State Pondicherry, India as the location; reference Paris, France as international work experience.
- Do not invent outcomes, clients, tools, countries, revenue, GMV, publication rates, certifications, screenshots, or personal photos.

## Product goal

Create a recruiter-focused experience that feels like exploring the elegant command dashboard of an e-commerce and marketplace strategist, not a conventional résumé.

The site should feel:
- Bright, premium, warm, and strategic
- Glassmorphic with refined depth and soft light
- Immersive through controlled 3D, smooth scrolling, parallax, data visualisation, and interaction
- Easy to scan, accessible, and professional rather than gimmicky

Use concise, confident copy. Make the verified achievements visually memorable without exaggerating them.

## Required tech stack

Use React + TypeScript + Vite unless the existing workspace already contains a compatible framework.

Use:
- Tailwind CSS for styling and design tokens
- Framer Motion for section reveals and micro-interactions
- React Three Fiber + Drei for one restrained 3D hero scene
- Lenis only if smooth scrolling remains accessible and respects reduced-motion settings
- Lucide for generic interface icons
- Simple Icons or official brand assets for brand/software logos
- Native SVG/CSS for dashboard charts rather than a large chart library

Do not use a backend, server routes, database, paid API, or platform-specific deployment feature. The portfolio must work as a static site on GitHub Pages.

## GitHub Pages deployment requirements

Configure the project so it deploys directly through GitHub Actions.

- Add a `.github/workflows/deploy.yml` GitHub Pages workflow.
- Configure Vite’s `base` dynamically:
  - locally: `/`
  - in GitHub Actions: `/<repository-name>/`
  - derive the repository name from `GITHUB_REPOSITORY` rather than hard-coding one.
- Use only relative/static assets packaged with the build.
- Add clear README instructions for:
  1. creating a GitHub repository,
  2. pushing the project,
  3. enabling GitHub Pages with GitHub Actions,
  4. updating the portrait, resume, LinkedIn link, and asset credits.
- Run lint and the production build before finishing, fixing every error.

## Design system

Use this exact palette from color8.jpg:

- Purple: `#5B41C1`
- Blue: `#5893E0`
- Teal: `#43C2C2`
- Green: `#58E55C`
- Yellow: `#FCF04E`
- Coral: `#F25A5F`

Visual rules:
- Main background: layered off-white, very pale lavender, and soft cool-blue gradients.
- Glass panels: semi-transparent white/lavender surfaces, subtle borders, `backdrop-filter: blur()`, and restrained soft shadows.
- Primary accents: purple, blue, teal.
- Use green for positive performance states, yellow for attention, and coral sparingly.
- Never use every palette colour in the same component.
- Add subtle commerce-inspired details: faint dot grids, delicate grain/noise, diffused colour blobs, glass refractions, and quiet data-line patterns.
- Use `Space Grotesk` or `Sora` for headings and `Inter` or `Manrope` for body text.
- Use tabular numerals for all metrics.
- Avoid neon effects, excessive gradients, oversized rounded “SaaS” cards, or dark sections.

## Assets and logos

- Use `photo1.png` as the hero portrait and again in the About section.
- Use logos instead of repeatedly writing software/platform names.
- Use SVG for brand logos so they stay crisp. Every logo needs accessible text through an `aria-label`, tooltip, `alt`, or screen-reader label.
- When decorative raster imagery genuinely improves the layout, source only free-to-use transparent WebP images from the internet, download and optimise them locally, and store them in `public/assets/`.
- Prefer abstract transparent assets such as package silhouettes, translucent product-card fragments, commerce shapes, data particles, or shopping-bag forms.
- Record the exact source URL and licence/attribution requirement for every external asset in the README.
- Do not use stock portraits, fake marketplace screenshots, copyrighted UI screenshots, invented certificates, or unverified personal images.
- Use CSS/SVG abstract visuals where that is cleaner than forcing an image into the design.

## Site architecture

Create these sections in this order:

1. Sticky navigation
2. Hero: Commerce Orbit
3. About and impact metrics
4. Career Journey
5. Commerce Stories
6. Commerce Intelligence Dashboard
7. Marketplace Network
8. Skills and Tool Stack
9. Education and Languages
10. Resume preview
11. Contact
12. Footer

Keep portfolio content centralised in `src/data/portfolioData.ts`. Use a maintainable structure such as:

- `src/components/`
- `src/sections/`
- `src/scenes/`
- `src/data/`
- `src/styles/`
- `public/assets/`

## Navigation

Build a floating, sticky glass navigation with:

- Journey
- Stories
- Dashboard
- Toolkit
- Resume
- Contact

Requirements:
- Active section indicator while scrolling
- Accessible anchor navigation
- Keyboard-accessible mobile menu
- Visible focus states
- “Skip to content” link
- No forced auto-scroll or scroll hijacking

## Hero: Commerce Orbit

Make this a full-viewport, bright, airy hero.

- Place Swathy’s supplied transparent portrait on the right inside a floating glass display with a soft purple/blue/teal glow.
- Build one lightweight R3F scene behind the content: slowly moving translucent product-card forms, abstract nodes, thin connections, and tiny particles.
- The 3D scene must be atmospheric and never obstruct text.
- Include a CSS/SVG fallback if WebGL is unavailable.
- Add gentle pointer parallax on desktop only.

Use this copy:

Eyebrow:
`DIGITAL COMMERCE / MARKETPLACE STRATEGY`

Heading:
`Hi, I’m Swathy Moorthy.`

Role:
`E-commerce & Marketplace Strategist`

Supporting copy:
`Helping brands grow across global marketplaces through data, content, and customer experience.`

Show an animated strategy chain:
`Product Content → Marketplace Operations → Digital Commerce → Customer Success → Growth`

CTAs:
- Explore My Journey
- View Commerce Stories
- Get in Touch

Add a subtle scroll cue:
`Explore the strategy behind the numbers.`

## About and impact metrics

Create an asymmetric glass-dashboard layout around a smaller version of the portrait.

Use:
- Swathy Moorthy
- Pondicherry, India
- International marketplace experience in Paris, France
- MBA in Marketing and E-Commerce Development
- Global Marketplace Specialist
- English and French: professional; Tamil: native

Profile copy:
`E-commerce strategist with experience turning marketplace data, product content, and customer needs into stronger digital visibility and growth.`

Animate only these résumé-backed metrics as they enter view:

- `20+` — Marketplaces / Platforms
- `60%` — Product Visibility Increase
- `90%+` — Brand Exposure Increase
- `3+` — Years in Digital Commerce

## Career Journey

Build an immersive horizontal timeline on desktop that becomes a vertical timeline on mobile. Each glass card should expand on click, hover, or keyboard focus.

Use these roles exactly:

1. E-commerce Analyst  
   Lumina Datamatics Ltd — Pondicherry, India  
   Sep 2020 – Jun 2022  
   - Managed editorial projects for Walmart strategic business units across beauty, baby, pets, personal care, health & wellness, and household essentials.
   - Developed wireframes and page layouts for updates and launches.
   - Merchandised best-selling, new, and trending SKUs around GMV and customer needs.
   - Expertise: campaign planning, customer satisfaction, quality control.

2. E-commerce Senior Analyst  
   Cognizant — Chennai, India  
   Jul 2022 – Jan 2023  
   - Curated and optimised Hardware and Home product content.
   - Improved content quality, discoverability, and client-facing product pages.
   - Led content revisions for Highbourne and Walmart.
   - Expertise: digital marketing, CRM, product analysis.

3. International Content Coordinator, Intern  
   Neteven — a Lectra Group — Paris, France  
   Aug 2024 – Feb 2025  
   - Optimised product content through Neteven SaaS across 20 platforms.
   - Worked with Farfetch, Zalando, Amazon, and La Redoute.
   - Increased product visibility by 60%.
   - Managed listing issues and curated seasonal premium-fashion catalogues.
   - Expertise: back-office operations, listing management, client reporting.

4. Customer Success Manager, Intern  
   Neteven — a Lectra Group — Paris, France  
   Aug 2025 – Feb 2026  
   - Analysed seasonal sales across 20 marketplaces.
   - Delivered e-commerce and high-performing-brand insights for yearly growth strategies.
   - Led data-driven marketplace expansion that increased brand exposure by 90%+.
   - Prepared structured reports for internal teams and external clients.
   - Expertise: project management, content strategy, account management, marketplace strategy.

Use company logo tiles sparingly and do not overuse wordmarks.

## Commerce Stories

Create four cinematic, expandable case-study panels. Use abstract WebP assets, data visualisations, or CSS compositions. Never use fake marketplace screenshots.

Add a small confidentiality note to relevant stories.

1. Marketplace Expansion  
   Challenge → strategic analysis → cross-marketplace recommendation → `90%+ brand exposure`  
   Base it on Neteven seasonal-sales analysis and marketplace-expansion work.

2. Content Optimisation at Scale  
   Workflow:
   `Product Data → SEO / Content Enrichment → Marketplace Rules → Publishing → Monitoring`  
   Highlight 20 platforms and `60% product visibility increase`.  
   Include compact, accessible logo chips for Farfetch, Zalando, Amazon, and La Redoute.

3. Retail Content Operations  
   Base it on Cognizant Hardware and Home work.  
   Show quality, discoverability, content revision, and client-facing product-page workflows.  
   Mention Highbourne and Walmart only as résumé-backed context.

4. Campaign-led Merchandising  
   Base it on Lumina Datamatics work.  
   Show:
   `Season Planning → Trending SKUs → Content Refresh → Marketplace Placement → Performance Review`  
   Emphasise wireframes, launches, quality control, and customer needs.

## Commerce Intelligence Dashboard

This is the centrepiece. Label it clearly as a “Portfolio Summary” so it cannot be mistaken for a live analytics product.

Include:
- Metric cards using only the four verified metrics above
- Animated line chart: `Content Performance Momentum`
- Bar chart: `Marketplace Operations Coverage`
- Radial chart: `Content Quality Focus`
- A visual activity feed representing catalogue curation, listing resolution, sales analysis, reporting, campaign planning, and customer success
- Accessible HTML tooltips

Use illustrative, unlabelled chart values only when they cannot be interpreted as factual performance data. Do not show unsupported GMV totals, revenue, publication rates, product counts, or conversion figures.

## Marketplace Network

Build a bright pseudo-3D glass globe or a lightweight 3D globe.

- Anchor Paris and India visually.
- Use generic global nodes to represent cross-marketplace work; do not claim country-specific work not stated in the résumé.
- Hover/focus must reveal accessible HTML detail panels outside any canvas.
- Create a responsive 2D fallback.

## Skills and Tool Stack

On desktop, use slowly floating glass bubbles; on mobile, switch to a clean responsive logo grid.

Verified tools:
- Adobe Analytics
- Microsoft Office
- Canva
- Adobe Photoshop
- Wireframe Design

Verified expertise:
- Marketplace Strategy
- Content Strategy
- Content Management
- Project Management
- Account Management
- Client Reporting
- Listing Management
- Digital Marketing
- Customer Relationship Management
- Product Analysis
- Campaign Planning
- Quality Control

Use logos for the verified software. On hover/focus, show a short factual explanation of where the capability was applied. Do not introduce unverified tools such as Figma, GitHub, Google Workspace, or Excel-specific expertise.

## Education and languages

Create a compact glass stack:

- MBA, Marketing and E-Commerce Development — ESCC Business School, France — 2024–2025
- MBA, International Marketing and Business — ESCC Business School, France — 2023–2024
- BSc Mathematics — Pondicherry University, India — 2017–2020
- Languages: English (professional), French (professional), Tamil (native)

## Resume and contact

Resume:
- Create a polished résumé-preview card based on the supplied PDF.
- Include a functional `Download Resume` button linking to the supplied PDF.
- Do not display the résumé phone number.
- Make the preview responsive and keyboard accessible.

Contact:
- Heading: `Let’s Build Better Commerce Together.`
- Email: `swathymoorthy2000@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/swathy-moorthy-847133210/`
- Location: `Paris, France`
- Use a subtle magnetic email button only for pointer devices. It must behave normally for touch and keyboard users.

## Motion, accessibility, and quality bar

Use smooth, restrained motion:
- Section reveals
- Subtle parallax
- Glass refraction
- Number counters
- Ambient floating nodes
- Polished hover states
- Page/section transitions

Respect `prefers-reduced-motion`:
- Disable or simplify Lenis, 3D orbit, parallax, counters, magnetic movement, and floating effects.
- Do not use flashing, fast rotations, autoplay media, delayed content, or movement that impairs reading.
- Do not force scroll movement.

Quality requirements:
- Semantic landmarks and real buttons/links
- WCAG AA contrast
- Logical tab order and visible focus states
- No canvas-only information
- Lazy-load noncritical sections and 3D resources
- Render only one WebGL canvas
- Reduce visual effects on mobile and lower-power devices
- Test at 320px, 768px, 1024px, and 1440px
- Eliminate horizontal overflow
- Test keyboard navigation, WebGL fallback, and reduced-motion behaviour
- Run lint and production build successfully

Definition of done:
Deliver a complete, responsive, bright glassmorphism + immersive-3D portfolio that is recruiter-friendly, factual, GitHub Pages-ready, uses the supplied portrait, uses verified metrics only, documents external asset licensing, and passes lint/build checks.