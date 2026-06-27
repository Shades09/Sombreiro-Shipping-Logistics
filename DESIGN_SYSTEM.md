# Sombreiro Shipping & Logistics — Design System

## Overview

This document defines the unified design system for Sombreiro's website. All colors, typography, spacing, and components follow these guidelines to maintain consistency across pages.

---

## Color Palette

### Primary Colors

| Name | Hex | Use Case | CSS Variable |
| --- | --- | --- | --- |
| **Orange** | `#D94E0F` | Accents, CTAs, hover states | `--orange` |
| **Green** | `#1A5C2A` | Primary buttons, highlights | `--green` |
| **Dark** | `#1A1A1A` | Text, backgrounds | `--dark` |

### Secondary Colors

| Name | Hex | Use Case | CSS Variable |
| --- | --- | --- | --- |
|------|-----|----------|--------------|
| **Blue** | `#2196F3` | Optional accent | `--blue` |
| **Sand** | `#F5F0E8` | Light backgrounds | `--sand` |
| **Gold** | `#C9943A` | Premium accents | `--gold` |
| **Mid** | `#4A5568` | Secondary text | `--mid` |
| **Border** | `#E2E8F0` | Dividers, borders | `--border` |
| **Light** | `#F7F8FA` | Subtle backgrounds | `--light` |

### Tailwind Usage

All colors are available in Tailwind via `bg-brand-*`, `text-brand-*`, `border-brand-*`:

```html
<button class="bg-brand-green text-white hover:bg-brand-orange">
  Book Now
</button>
```

---

## Typography

### Font Families

| Purpose | Font | Weights | Usage |
| --- | --- | --- | --- |
| **Display** | Playfair Display | 900 | Headlines (h1, h2) |
| **Body** | DM Sans | 400, 500, 600 | Paragraphs, UI text |
| **Accent** | Sora | 100–800 | Feature text |
| **Decorative** | Monsieur La Doulaise | 400 | Logos, special elements |

### Tailwind Font Families

```html
<h1 class="font-display">Heading</h1>
<p class="font-body">Body text</p>
<span class="font-sans">Feature text</span>
<div class="font-mono">Decorative</div>
```

### Type Scale

| Element | Size | Line Height | Weight | Color |
| --- | --- | --- | --- | --- |
| `h1` | clamp(2.8rem, 5vw, 4.2rem) | 1.1 | 900 | `--dark` |
| `h2` | 2.4rem | 1.2 | 700 | `--dark` |
| `h3` | 1.5rem | 1.3 | 600 | `--dark` |
| Body | 1rem | 1.6 | 400 | `--mid` |
| Small | 0.875rem | 1.5 | 500 | `--mid` |
| Eyebrow | 0.8rem | 1.4 | 600 | `--orange` (uppercase) |

---

## Spacing System

| Name | Value | Tailwind |
| --- | --- | --- |
| Nav Height | 72px | `spacing-nav-h` |
| Util Bar | 36px | `spacing-util-h` |
| Padding (Container) | 2rem | `px-8` |
| Gap (Grid) | 1rem–4rem | `gap-4` to `gap-16` |
| Margin (Section) | 2rem–5rem | `my-8` to `my-20` |

---

## Components

### Buttons

#### Primary Button

```html
<a href="#" class="btn-primary">Call to Action</a>
```

**Styles:**

- Background: `--green`
- Hover: `--orange`
- Padding: 0.9rem 2rem
- Radius: 4px
- Font Weight: 600
- Box Shadow on hover

#### Secondary Button

```html
<a href="#" class="btn-secondary">Learn More</a>
```

**Styles:**

- Border: 2px solid `--dark`
- Hover: Border & text `--green`
- Padding: 0.9rem 2rem
- Radius: 4px
- Font Weight: 600

#### Glass Button (Overlay variant)

```html
<a href="#" class="btn-primary glass-btn">Book a Demo</a>
```

**Styles:**

- Backdrop blur: 8px
- Background: rgba(255,255,255,0.12)
- Border: 1px solid rgba(255,255,255,0.18)
- Use with `btn-primary` or `btn-secondary`

### Hero Section

```html
<section class="hero">
  <div class="hero-slide active">
    <div class="hero-eyebrow">Subheading</div>
    <h1>Main Title</h1>
    <p class="hero-desc">Description text</p>
    <div class="hero-actions">
      <a href="#" class="btn-primary glass-btn">Action</a>
    </div>
  </div>
</section>
```

**Features:**

- Full-height hero with carousel
- Automatic slide rotation (7s)
- Fade-in animations on scroll
- Responsive typography

### Navigation


Navigation styles are defined in `css/nav.css`. Includes:

- Utility bar (top)
- Main navigation with logo
- Responsive hamburger menu
- Smooth hover underlines

### Card Components

```html
<div class="glass-card">
  <!-- Content -->
</div>
```

**Styles:**

- Glassmorphic design with backdrop blur
- Semi-transparent white with border
- Inset highlights for depth
- 240px × 360px standard size

---

## Animation Tokens

| Name | Duration | Easing | Usage |
| --- | --- | --- | --- |
| `spinSlow` | 25s | linear | Rotating backgrounds |
| `spinReverse` | 18s | linear reverse | Counter-rotation |
| `floatLogo` | 5s | ease-in-out | Subtle elevation |
| `floatBadge` | 4s | ease-in-out | Floating elements |
| `fade-in` | — | — | Scroll animations (JS) |

**Tailwind Animation:**

```html
<div class="animate-floatLogo">Floating element</div>
```

---

## Accessibility Guidelines

### Color Contrast

- All text must meet WCAG AA standards (4.5:1 for body, 3:1 for large text)
- Orange on white: ✅ 6.2:1
- Green on white: ✅ 5.8:1
- Test with: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Focus States


- All interactive elements have visible `:focus` states
- Focus ring: 2px solid `--green`
- Border-radius matches element radius

### Semantic HTML


- Use `<button>` for actions, `<a>` for navigation
- Wrap form inputs in `<label>` elements
- Use `role="main"`, `role="navigation"` where needed
- Alt text on all images: `alt="descriptive text"`

### ARIA Attributes


- Carousel controls: `aria-label="Previous slide"`
- Hamburger menu: `aria-expanded`, `aria-label`
- Skip navigation link included

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
| --- | --- | --- |
| Mobile | < 640px | Hamburger nav, single column |
| Tablet | 640px – 1024px | 2-column grids, medium padding |
| Desktop | > 1024px | 3+ columns, full spacing |

**Tailwind Breakpoint Prefixes:**

```html
<div class="w-full md:w-1/2 lg:w-1/3">Responsive width</div>
```

---

## Best Practices

### Do

✅ Use CSS variables for colors: `color: var(--orange)`
✅ Use Tailwind for responsive utilities
✅ Keep font sizes in relative units (rem, clamp)
✅ Test on mobile, tablet, desktop
✅ Use semantic HTML elements
✅ Add alt text to images
✅ Maintain at least 3:1 color contrast

### Don't


❌ Hardcode hex colors (use variables)
❌ Use inline styles for layout
❌ Skip alt text on decorative images
❌ Create custom breakpoints (use Tailwind's)
❌ Use `<div>` for buttons or links
❌ Ignore focus states for keyboard users
❌ Break from brand color palette

---

## File Organization

```text
sombreiro/
├── css/
│   ├── nav.css         ← Navigation & utility bar
│   └── style.css       ← Hero, components, animations
├── src/
│   └── input.css       ← Tailwind directives (@tailwind)
├── dist/
│   └── output.css      ← Generated (auto-rebuilt)
├── tailwind.config.js  ← Theme config, brand colors
└── DESIGN_SYSTEM.md    ← This file
```

---

## Updating the Design System

### Adding a New Color


1. Update `tailwind.config.js` in `colors.brand`
2. Update `:root` variables in `css/style.css` or `css/nav.css`
3. Document in this file
4. Test contrast ratios

### Changing Existing Colors


1. Replace in both `tailwind.config.js` and CSS variable definitions
2. Search entire codebase for hardcoded hex values
3. Run `npm run build` to regenerate `dist/output.css`
4. Test on all pages

### Adding a New Font


1. Import in `index.html` via Google Fonts
2. Add to `tailwind.config.js` fontFamily
3. Document the use case and weights
4. Test across pages

---

## Quick Reference



**Colors:** `--orange`, `--green`, `--dark`, `--blue`, `--sand`, `--gold`
**Fonts:** Display (Playfair), Body (DM Sans), Accent (Sora), Decorative (Monsieur La Doulaise)
**Layout:** 2rem padding, full-width sections with max-width containers
**Buttons:** `.btn-primary` (green), `.btn-secondary` (bordered), `.glass-btn` (overlay)
**Animations:** Scroll fade-ins, carousel auto-rotate, subtle float effects

---

**Last Updated:** June 2026
**Maintained by:** Development Team
