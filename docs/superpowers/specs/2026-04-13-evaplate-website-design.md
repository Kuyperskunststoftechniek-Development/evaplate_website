# EVAplate Website — Design Specification

## Context

EVAplate is a new company manufacturing vacuum evaporators built from engineering plastic (kunststof). The plastic construction is the key differentiator — it enables processing aggressive and mixed industrial waste streams that would corrode traditional metal evaporators. The company offers two models: EVAplate 100 (100 L/h) and EVAplate 1000 (1000 L/h).

The website serves dual purposes: **lead generation** (driving quote requests from industrial clients) and **product showcase** (educating visitors about the technology and product line). Target audience includes industrial companies, waste management firms, and government/municipal authorities.

---

## 1. Site Architecture

### Pages

| Page | Purpose | Key Content |
|------|---------|-------------|
| **Home** | First impression + lead capture | Hero CTA, technology highlights, product preview, sustainability message |
| **Technology** | Educate on the "why plastic?" advantage | Vacuum evaporation process, plastic vs metal comparison, benefits |
| **Products** | Product details + comparison | EVAplate 100 & 1000 specs, comparison table, applications |
| **About** | Company credibility | Company story, mission, values |
| **Contact** | Lead capture | Inquiry form, company details |

### Navigation

- **Header**: Logo (left) · Home · Technology · Products · About · Contact (center/right) · EN/NL toggle (far right)
- **Footer**: Company info, quick links, contact details, social media links
- **Mobile**: Hamburger menu with slide-out navigation

---

## 2. Visual Design

### Color System — Ocean Teal

| Role | Color | Hex |
|------|-------|-----|
| Primary | Teal | `#0d9488` |
| Primary dark | Deep emerald | `#065f46` |
| Accent light | Light teal | `#5eead4` |
| Text primary | Dark slate | `#1e293b` |
| Text secondary | Gray | `#64748b` |
| Surface | Soft green tint | `#f0fdf4` |
| Background | White | `#ffffff` |
| CTA / buttons | Primary teal | `#0d9488` |
| CTA hover | Primary dark | `#065f46` |

### Typography

- **Headings**: Inter, bold (system sans-serif fallback)
- **Body**: Inter, regular (system sans-serif fallback)
- **Sizes**: Tailwind default scale (`text-sm` through `text-5xl`)

### Design Principles

- Clean whitespace, modern layout
- Sustainability-forward imagery (nature, water, clean processes)
- Professional but approachable — not overly corporate
- Mobile-first responsive design

---

## 3. Page Designs

### Home Page

1. **Hero Section** — Full-width gradient (teal → emerald), bold headline, subtitle, primary CTA ("Request a Quote"), secondary CTA ("Learn More")
2. **Technology Highlights** — 3-column icon/card strip: Corrosion Resistant, Scalable Capacity, Multi-Industry Applications
3. **Product Preview** — Side-by-side cards for EVAplate 100 and EVAplate 1000 with key specs and "View Details" links
4. **Sustainability Message** — Section highlighting environmental benefits of the plastic-based approach
5. **Contact CTA** — Full-width banner with "Ready to get started?" and contact form link

### Technology Page

1. **Hero** — Compact header with page title and intro text
2. **How Vacuum Evaporation Works** — Process explanation with a simplified diagram/illustration
3. **Why Plastic?** — Comparison section: plastic vs metal evaporators (corrosion resistance, maintenance, lifespan, cost)
4. **Benefits List** — Key advantages in a visual grid: chemical resistance, lower maintenance, longer lifespan, wider application range
5. **CTA** — Link to products or contact

### Products Page

1. **Page Header** — Title + intro
2. **Product Cards** — EVAplate 100 and EVAplate 1000, each with:
   - Product name and image placeholder
   - Capacity (L/h)
   - Key features (bullet list)
   - "Request Quote" CTA
3. **Comparison Table** — Side-by-side specifications: capacity, dimensions, power, applications, materials
4. **Applications Section** — Grid showing industry types: chemical, food & beverage, municipal, manufacturing
5. **CTA** — Contact for custom requirements

### About Page

1. **Company Story** — Mission and vision of EVAplate
2. **Values** — Innovation, sustainability, reliability (3-column cards)
3. **Team** — Optional section for team members (placeholder for future)
4. **CTA** — Link to contact

### Contact Page

1. **Contact Form** — Fields: name, email, phone, company, message, product interest (dropdown: EVAplate 100 / EVAplate 1000 / General inquiry). Submits via Formspree (or similar static-site-friendly form service) — no backend needed.
2. **Company Details** — Address, email, phone
3. **Optional Map** — Embedded map placeholder

---

## 4. Technical Architecture

### Stack

- **Framework**: Nuxt 3 (Vue 3)
- **Rendering**: Static Site Generation (SSG) via `nuxt generate`
- **Styling**: Tailwind CSS 3
- **i18n**: `@nuxtjs/i18n` module — simple toggle, no URL prefix
- **Icons**: Lucide (`lucide-vue-next` — tree-shakeable, good Vue 3 integration)
- **Font**: Inter via `@fontsource-variable/inter` (self-hosted, no Google Fonts dependency)
- **Deployment**: Static output — deployable to Vercel, Netlify, or any static host

### Project Structure

```
evaplate_website/
├── nuxt.config.ts
├── tailwind.config.ts
├── package.json
├── app.vue
├── pages/
│   ├── index.vue          # Home
│   ├── technology.vue     # Technology
│   ├── products.vue       # Products
│   ├── about.vue          # About
│   └── contact.vue        # Contact
├── components/
│   ├── AppHeader.vue      # Navigation + language toggle
│   ├── AppFooter.vue      # Footer
│   ├── HeroSection.vue    # Reusable hero with props
│   ├── FeatureCard.vue    # Icon + title + description card
│   ├── ProductCard.vue    # Product display card
│   ├── ProductComparison.vue  # Specs comparison table
│   ├── ContactForm.vue    # Form with validation
│   └── CtaBanner.vue      # Full-width call-to-action
├── layouts/
│   └── default.vue        # Header + slot + Footer
├── i18n/
│   ├── en.json            # English translations
│   └── nl.json            # Dutch translations
├── assets/
│   └── css/
│       └── main.css       # Tailwind imports + custom styles
├── public/
│   └── images/            # Static images
└── composables/
    └── useContactForm.ts  # Form logic composable
```

### i18n Strategy

- English as default language
- Dutch as secondary
- Toggle button in header switches language
- All user-facing text stored in `i18n/en.json` and `i18n/nl.json`
- No URL-based routing (same URLs for both languages)
- `@nuxtjs/i18n` with `strategy: 'no_prefix'`

### Component Design

- **Props-driven**: Components accept content via props for reusability
- **Composition API**: `<script setup>` throughout
- **Responsive**: Mobile-first with Tailwind breakpoints (`sm:`, `md:`, `lg:`)

---

## 5. Content Strategy

### Key Messaging

- **Headline**: "Sustainable Vacuum Evaporation" or "Vacuum Evaporation, Built Different"
- **USP**: Plastic construction = corrosion-free = handles more waste streams
- **CTA**: "Request a Quote" (primary), "Learn More" (secondary)

### Tone

- Professional but accessible
- Technical where needed, but not jargon-heavy
- Sustainability as a core theme, not just a buzzword

---

## 6. Verification Plan

1. **Dev server**: Run `npm run dev` and verify all pages render correctly
2. **Navigation**: Test all nav links, including mobile hamburger menu
3. **i18n**: Toggle between EN and NL, verify all text switches
4. **Responsive**: Test at mobile (375px), tablet (768px), and desktop (1280px) widths
5. **Contact form**: Verify form validation (required fields, email format)
6. **SSG build**: Run `npm run generate` and verify static output
7. **Accessibility**: Check color contrast, keyboard navigation, semantic HTML
8. **Performance**: Verify Lighthouse score (target: 90+ on all categories)
