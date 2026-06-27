# Sombreiro Branding Guide

## Brand Identity

**Company:** Sombreiro Shipping & Logistics Ltd
**Industry:** Maritime Agency & Logistics (Nigeria)
**Founded:** 2024
**Base:** Niger Delta, Nigeria
**Vision:** Local expertise with global maritime standards

---

## Color System

### Primary Brand Colors

#### Orange — Accent & Energy


- **Hex:** `#D94E0F`
- **RGB:** rgb(217, 78, 15)
- **HSL:** hsl(16, 87%, 45%)
- **Usage:** CTAs, hover states, accents, eyebrows
- **Contrast:** 6.2:1 on white ✅
- **Feelings:** Attention, action, warmth, African heritage

#### Green — Trust & Growth


- **Hex:** `#1A5C2A`
- **RGB:** rgb(26, 92, 42)
- **HSL:** hsl(142, 56%, 23%)
- **Usage:** Primary buttons, header accents, trust signals
- **Contrast:** 5.8:1 on white ✅
- **Feelings:** Trust, growth, maritime tradition, professionalism

#### Dark — Primary Text & Depth


- **Hex:** `#1A1A1A`
- **RGB:** rgb(26, 26, 26)
- **HSL:** hsl(0, 0%, 10%)
- **Usage:** Body text, main navigation, backgrounds
- **Contrast:** >12:1 on white ✅
- **Feelings:** Stability, authority, professionalism

### Secondary Colors

| Color | Hex | RGB | Use |
| --- | --- | --- | --- |
| **Blue** | `#2196F3` | rgb(33, 150, 243) | Optional interactive elements |
| **Sand** | `#F5F0E8` | rgb(245, 240, 232) | Light section backgrounds |
| **Gold** | `#C9943A` | rgb(201, 148, 58) | Premium accents, decorative |
| **Mid Gray** | `#4A5568` | rgb(74, 85, 104) | Secondary text |
| **Border** | `#E2E8F0` | rgb(226, 232, 240) | Dividers, subtle borders |
| **Light** | `#F7F8FA` | rgb(247, 248, 250) | Subtle backgrounds |

### Color Application Examples

```text
Hero Section:
├─ Background overlay: Dark (#1A1A1A) with opacity
├─ Headline: White text
├─ Eyebrow: Orange (#D94E0F)
└─ Primary button: Green (#1A5C2A) → Orange on hover

Navigation:
├─ Background: White with subtle transparency
├─ Text: Dark (#1A1A1A)
├─ Hover underline: Orange (#D94E0F)
└─ CTA button: Green (#1A5C2A)

Services Grid:
├─ Card background: Sand (#F5F0E8)
├─ Heading: Dark (#1A1A1A)
├─ Link text: Green (#1A5C2A)
└─ Link hover: Orange (#D94E0F)
```

---

## Typography System

### Font Families

#### Display Font — Playfair Display


- **Purpose:** Headlines, hero titles
- **Weights:** 700 (bold), 900 (extra bold)
- **Usage:** h1, h2, section titles
- **Characteristics:** Elegant, serif, high contrast
- **Pairing:** Works with DM Sans for body text
- **Example:** "Rooted in the Delta, Trusted at Sea"

#### Body Font — DM Sans


- **Purpose:** Body text, UI labels, navigation
- **Weights:** 400 (regular), 500 (medium), 600 (semi-bold)
- **Usage:** Paragraphs, buttons, links, nav items
- **Characteristics:** Clean, geometric sans-serif
- **Readability:** Optimized for screen (high x-height)
- **Example:** "Ship agency, husbandry, protective services..."

#### Accent Font — Sora


- **Purpose:** Feature text, secondary headings
- **Weights:** 100–800 (full range)
- **Usage:** Optional, for emphasis or variation
- **Characteristics:** Versatile, modern sans-serif
- **Example:** Could be used in testimonials or callouts

#### Decorative Font — Monsieur La Doulaise


- **Purpose:** Logo, special elements only
- **Weights:** 400 (regular)
- **Usage:** Sparingly—company name, badges
- **Characteristics:** Script, handwritten feel
- **Example:** "Sombreiro" in company logo mark

### Type Scale

| Level | Size (Desktop) | Size (Mobile) | Weight | Line Height | Use |
| --- | --- | --- | --- | --- | --- |
| **h1** | 4.2rem (clamp) | 2.8rem | 900 | 1.1 | Page hero titles |
| **h2** | 2.4rem | 1.8rem | 700 | 1.2 | Section titles |
| **h3** | 1.5rem | 1.25rem | 600 | 1.3 | Subsections |
| **h4** | 1.25rem | 1.1rem | 600 | 1.4 | Card titles |
| **Body** | 1rem | 0.95rem | 400 | 1.6 | Paragraphs |
| **Small** | 0.875rem | 0.8rem | 500 | 1.5 | Labels, captions |
| **Eyebrow** | 0.8rem | 0.75rem | 600 | 1.4 | Section labels |

---

## Logo & Visual Identity

### Logo Description


- **Current:** Placeholder (add when brand mark is ready)
- **Location:** `images/logo.png`
- **Recommended sizes:** 32×32px (favicon), 48×48px (nav), 200×200px (footer)
- **Formats:** PNG (transparency), SVG (scalable)
- **Name Mark:** Monsieur La Doulaise script (optional)

### Favicon


- Place `favicon.ico` in root
- Create multiple sizes: 16×16, 32×32, 64×64px
- Theme color: `#1A5C2A` (green)

### Icon System
- **Currently:** Material Icons Outlined
- **Usage:** Small inline icons (16–24px)
- **Style:** Consistent stroke weight, minimal
- **Avoid:** Oversized icons, mismatched stroke weights

---

## Visual Elements

### Buttons

#### Primary Button (CTA)

```css
Background: #1A5C2A (Green)
Hover: #D94E0F (Orange)
Text: White
Padding: 0.9rem 2rem
Border-radius: 4px
Font-weight: 600
Shadow: 0 4px 16px rgba(26, 92, 42, 0.25)
```


```css# Secondary Button
```
Background: Transparent
Border: 2px solid #1A1A1A (Dark)
Text: #1A1A1A
Hover: Border + text → #1A5C2A (Green)
Padding: 0.9rem 2rem
Border-radius: 4px
```

#### Glass Button (Overlay)

```css
Background: rgba(255, 255, 255, 0.12)
Border: 1px solid rgba(255, 255, 255, 0.18)
Backdrop: blur(8px)
Text: White
Use: Hero/dark background sections
```

### Cards


- **Background:** Sand (#F5F0E8) or White
- **Border:** 1px solid #E2E8F0
- **Radius:** 8px–12px
- **Shadow:** 0 2px 8px rgba(0, 0, 0, 0.08)
- **Padding:** 1.5rem–2rem

### Spacing Grid


- **Base unit:** 0.5rem
- **Common sizes:** 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 5rem
- **Padding:** 2rem (containers), 1rem–1.5rem (cards)
- **Gap:** 1rem–4rem (between elements)
- **Margin:** 2rem–5rem (between sections)

### Glassmorphism Effects

```css
Background: rgba(255, 255, 255, 0.12–0.18)
Backdrop-filter: blur(8px–16px)
Border: 1px solid rgba(255, 255, 255, 0.18–0.3)
Box-shadow: Inset highlights + outer shadow
```

---

## Photography & Imagery

### Image Strategy


- **Hero images:** Shipping/maritime scenes, port activity, vessels
- **Color correction:** Cool tones, high contrast
- **Overlay:** Dark gradient (80%+ opacity) for text readability
- **Format:** JPG for photos, WebP with fallback

### Brand Photography Guidelines


- **Maritime:** Ships, ports, waterways, cargo handling
- **People:** Team in professional attire, diverse representation
- **Locations:** Niger Delta, Nigerian ports, water scenes
- **Tone:** Professional, trustworthy, energetic
- **Avoid:** Generic stock photos, overly glossy images

---

## Voice & Tone

### Brand Voice

**Professional + Accessible + Confident**

| Aspect | Guideline | Example |
| --- | --- | --- |
| **Clarity** | Plain language, avoid jargon | "We handle port logistics" not "We facilitate maritime disbursements" |
| **Confidence** | Bold claims backed by expertise | "24/7 Port Support" (delivers on promise) |
| **Local** | Acknowledge Nigerian context | "Niger Delta specialists" (not generic) |
| **Warm** | Friendly, not corporate sterile | "Talk to Us" (not "Request Consultation") |

### Tone Examples


- **Hero:** Bold, aspirational, grounded in local pride
- **Services:** Clear, concrete, benefit-focused
- **Navigation:** Direct, action-oriented
- **CTAs:** Conversational, time-sensitive urgency

### Do's & Don'ts


✅ Do: Use active voice, maritime terminology accurately
❌ Don't: Use clichés ("best-in-class"), overuse exclamation marks
✅ Do: Acknowledge customer pain points
❌ Don't: Sound generic or impersonal

---

## Consistency Checklist

### Before Publishing Any Page


- [ ] Logo/branding visible and correctly positioned
- [ ] Primary colors used: Orange, Green, Dark
- [ ] Typography: Playfair for headings, DM Sans for body
- [ ] Button styles: Primary (green) and Secondary (outlined)
- [ ] Spacing consistent with grid system
- [ ] Images have alt text
- [ ] Links underlined or clearly differentiated
- [ ] Focus states visible on interactive elements
- [ ] Contrast ratios pass WCAG AA (4.5:1 minimum)
- [ ] Tone matches brand voice

### Design QA Checklist


- [ ] Desktop layout (1200px+)
- [ ] Tablet layout (768px–1024px)
- [ ] Mobile layout (< 768px)
- [ ] Light mode rendering (primary)
- [ ] Navigation responsive on all sizes
- [ ] Forms accessible and labeled
- [ ] Media queries tested
- [ ] Typography sizes readable on all devices

---

## File References

### Color Variables (CSS)

```css
:root {
  --orange: #D94E0F;
  --green: #1A5C2A;
  --dark: #1A1A1A;
  --blue: #2196F3;
  --sand: #F5F0E8;
  --gold: #C9943A;
}
```

### Tailwind Config

All brand colors available via:

```text
bg-brand-orange, text-brand-green, border-brand-dark, etc.
```

### Font Imports

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap">
```

---

## Brand Extensions

### When Adding New Sections


1. **Match color system** — Use primary colors or approved secondaries
2. **Maintain typography** — Playfair for headers, DM Sans for body
3. **Respect spacing** — Use 0.5rem base unit
4. **Button consistency** — Primary = green, secondary = outlined
5. **Image treatment** — Dark overlay, high contrast
6. **Tone of voice** — Professional, accessible, confident

### When Creating Marketing Materials


- Use brand colors (Pantone equivalents: Orange 16-1564, Green 19-0303)
- Maintain aspect ratios (16:9 for banners, 1:1 for social)
- Apply watermarks with company name/URL
- Include tagline: "Local Expertise. Global Standards."

---

## Contact & Updates

**Brand Manager:** [Contact info]
**Last Updated:** June 2026
**Next Review:** December 2026

For questions about brand usage, contact the marketing team.
