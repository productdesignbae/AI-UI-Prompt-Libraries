# AI UI Prompt Libraries

10 beautifully designed, interactive AI UI Prompt Libraries built with React + TypeScript — each styled in a completely different design system.

## License

Built as a design system showcase and prompt engineering reference.

# Shiuli's AI UI Prompt Library
10 beautifully designed, interactive AI UI Prompt Libraries built with React + TypeScript —
each styled in a completely different design system, ready to fork, customize, and ship.
---
## What Is This?
This project answers one question: what would a prompt library *look* like if it were actually
designed — not just a plain list on a white background?
Each of the 10 components is a fully interactive UI for browsing, filtering, and copying
AI prompts. Every design uses a different visual language, from Apple Vision Pro glass to
Discord dark server to cocktail-menu editorial scatter-art. The prompt data is identical
across all 10 — 18 hand-crafted, production-ready prompts covering both UI design and
front-end development workflows.
Use this repo as a design system showcase, a prompt engineering reference, or a starting
point for your own prompt library product.
---
## The 10 Designs
| Name | File | Aesthetic |
|---|---|---|
| Shiuli's Dark Vision | `AppleGlass.tsx` | Midnight aurora glass — pure black, violet/teal aurora blobs, Vision Pro |
| Shiuli's Doc Drop | `NotionOpenCode.tsx` | Notion-style editorial database with attribute sliders |
| Shiuli's Ink Mode | `SamuraiCanvas.tsx` | Figma-style canvas with floating draggable prompt cards |
| Shiuli's Moon Era | `MoonishCosmic.tsx` | Møønish editorial storefront with paginated glass cards |
| Shiuli's Sage Edit | `AlohaCoastal.tsx` | Quiet luxury coastal — warm linen, sage green, terracotta |
| Shiuli's Dark Arc | `DiscordStyle.tsx` | Discord dark server with channel sidebar and tag filtering |
| Shiuli's Brain Orbit | `LinearStyle.tsx` | NeuroAstro — SVG orb, topographic rings, nebula glow |
| Shiuli's Last Call | `NoalDrinkBar.tsx` | Bento-grid drink bar homepage with bold typography |
| Shiuli's Smart Pad | `SmartHomeDash.tsx` | Smart home tile dashboard with room-based filtering |
| Shiuli's Olive Drop | `CocktailEditorial.tsx` | Scattered whiteboard cards with attribute sliders |
---
## The 18 Prompts (in every design)
All 18 prompts are tagged as **Design**, **Dev**, or **Both** and cover:
1. **Component Audit** `Both` — Audit a UI component for accessibility, responsiveness, and
   visual hierarchy. List issues by severity with a specific fix for each.
2. **Color System from Brand** `Design` — Generate a full UI color system (primary, secondary,
   neutrals, semantic states) from a hex code. Include light and dark mode tokens with usage rules.
3. **Responsive Layout Scaffold** `Dev` — Write a responsive CSS grid layout for a
   dashboard / landing / settings page. Modern CSS only, no frameworks, fully annotated.
4. **Micro-interaction Spec** `Design` — Write a micro-interaction spec for a button, modal,
   or toast. Include trigger, animation curve, duration in ms, and accessible fallback.
5. **Figma to Tailwind** `Dev` — Convert Figma design tokens and spacing notes into Tailwind
   CSS config values. Include color, font, spacing, and shadow tokens.
6. **Design Critique** `Design` — Critique a UI screenshot like a senior product designer.
   Focus on hierarchy, whitespace, and clarity. Flag the top 3 issues with specific fixes.
7. **Component Props API** `Dev` — Design the TypeScript props interface for a React component.
   Include variants, sizes, disabled state, and full accessibility props.
8. **Error State Copy** `Both` — Write user-friendly error messages for: empty, failed to load,
   no results, permission denied, server error. Max 12 words each. No technical jargon.
9. **Dark Mode Token Map** `Dev` — Given a light mode color token set, generate dark mode
   equivalents. Maintain contrast ratios above 4.5:1. Use oklch() for perceptual uniformity.
10. **Onboarding Flow Outline** `Design` — Outline a 5-step onboarding flow for a product.
    For each step: goal, user action, screen description, copy direction, and success state.
11. **Icon Set Brief** `Design` — Write a design brief for a custom icon set. Cover style,
    stroke weight, grid size, corner radius, and naming conventions for a product type.
12. **Storybook Scaffold** `Dev` — Write Storybook stories for a component with Default, Hover,
    Loading, Error, Empty, and Disabled states. Include ally addon config.
13. **Animation Timing System** `Both` — Create a motion timing system with 4 duration tokens
    and easing curves for appear, exit, transition, and feedback. Output as CSS custom properties.
14. **Skeleton Loader Markup** `Dev` — Write HTML + CSS for a skeleton loader matching a given
    layout. CSS animation keyframes only, no JavaScript.
15. **A/B Test Variant Ideas** `Both` — Suggest 3 A/B test variants for a CTA, hero, or form.
    For each: hypothesis, the exact change, and the primary metric to track.
16. **Spacing Scale** `Design` — Generate a spacing scale with a 4px base unit. Name tokens
    semantically (xs → 2xl) and explain the rationale for each step.
17. **Typography Ramp** `Design` — Create a 6-level type ramp: display, h1, h2, h3, body,
    caption. Specify size, weight, line-height as Tailwind classes and CSS custom properties.
18. **Accessibility Audit** `Both` — Audit a component for WCAG 2.1 AA compliance. Check color
    contrast, keyboard navigation, ARIA roles, focus management, and screen reader output.
---
## Getting Started
### Prerequisites
- Node.js 18+
- pnpm 8+
### Installation
```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/shiulis-prompt-library.git
cd shiulis-prompt-library
# Install dependencies
pnpm install
# Start the development server
pnpm --filter @workspace/mockup-sandbox run dev

The component preview server will start at http://localhost:8081.

Previewing a Design
Each component is available at its own preview URL:

http://localhost:8081/__mockup/preview/ui-prompts-library/AppleGlass
http://localhost:8081/__mockup/preview/ui-prompts-library/AlohaCoastal
http://localhost:8081/__mockup/preview/ui-prompts-library/NotionOpenCode
http://localhost:8081/__mockup/preview/ui-prompts-library/SamuraiCanvas
http://localhost:8081/__mockup/preview/ui-prompts-library/MoonishCosmic
http://localhost:8081/__mockup/preview/ui-prompts-library/DiscordStyle
http://localhost:8081/__mockup/preview/ui-prompts-library/LinearStyle
http://localhost:8081/__mockup/preview/ui-prompts-library/NoalDrinkBar
http://localhost:8081/__mockup/preview/ui-prompts-library/SmartHomeDash
http://localhost:8081/__mockup/preview/ui-prompts-library/CocktailEditorial

How to Use This in Your Own Project
Option 1 — Drop in a single component
Copy any .tsx file from artifacts/mockup-sandbox/src/components/mockups/ui-prompts-library/
into your React project.
Install dependencies: npm install lucide-react and ensure Tailwind CSS is configured.
Import and render the component: import { AppleGlass } from './AppleGlass'
Option 2 — Swap in your own prompts
Each component has a PROMPTS array near the top of the file. Replace the entries with your
own data. Every prompt follows this shape:

{
  id: 1,
  title: "Your Prompt Name",
  type: "Design" | "Dev" | "Both",
  tags: ["tag1", "tag2"],
  desc: "The full prompt text that gets copied to clipboard."
}

Save the file and the UI updates instantly — no other changes needed.

Option 3 — Build your own design system on top
All 10 designs use only React, TypeScript, Tailwind CSS, and Lucide Icons. There are no
external UI libraries, no complex dependencies, and no backend. Fork the repo, keep the
prompt data structure, and replace the visual layer with your own design system.

Project Structure
artifacts/
  mockup-sandbox/
    src/
      components/
        mockups/
          ui-prompts-library/
            AppleGlass.tsx          # Shiuli's Dark Vision
            AlohaCoastal.tsx        # Shiuli's Sage Edit
            NotionOpenCode.tsx      # Shiuli's Doc Drop
            SamuraiCanvas.tsx       # Shiuli's Ink Mode
            MoonishCosmic.tsx       # Shiuli's Moon Era
            DiscordStyle.tsx        # Shiuli's Dark Arc
            LinearStyle.tsx         # Shiuli's Brain Orbit
            NoalDrinkBar.tsx        # Shiuli's Last Call
            SmartHomeDash.tsx       # Shiuli's Smart Pad
            CocktailEditorial.tsx   # Shiuli's Olive Drop

Stack
React 18 + TypeScript
Tailwind CSS — utility-first styling
Lucide Icons — consistent icon set
Vite — fast dev server and bundler
pnpm workspaces — monorepo management
License
MIT — use it, fork it, ship it.

---
That's the full text. Just replace `YOUR_USERNAME` with your GitHub handle and you're good to go.


Scroll to latest
