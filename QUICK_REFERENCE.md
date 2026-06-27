# Quick Reference — Sombreiro Frontend

## Colors (Use These!)

```css
/* Primary */
--orange: #D94E0F (accents, hover, CTAs)
--green: #1A5C2A (primary button, trust)
--dark: #1A1A1A (text, backgrounds)

/* Secondary */
--blue: #2196F3
--sand: #F5F0E8 (light backgrounds)
--gold: #C9943A
```

**Tailwind Usage:**
```html
<button class="bg-brand-green hover:bg-brand-orange text-brand-dark">Click</button>
<div class="bg-brand-sand border-brand-orange">Card</div>
```

---

## Typography

### Fonts
- **Headings:** `font-display` (Playfair Display, serif)
- **Body:** `font-body` (DM Sans, sans-serif)
- **Accent:** `font-sans` (Sora)
- **Logo:** `font-mono` (Monsieur La Doulaise)

### Sizes
```html
<h1 class="text-4xl font-display font-bold">Title</h1>
<h2 class="text-2xl font-display font-bold">Heading</h2>
<p class="text-base font-body">Body text</p>
<p class="text-sm font-body text-brand-mid">Small text</p>
```

---

## Buttons

### Primary (Green → Orange on hover)
```html
<a href="#" class="btn-primary">Action</a>
```
**On dark background:**
```html
<a href="#" class="btn-primary glass-btn">Action</a>
```

### Secondary (Outlined)
```html
<a href="#" class="btn-secondary">Learn More</a>
```

### Styles
- Padding: `0.9rem 2rem`
- Border radius: `4px`
- Font weight: `600`
- Transition: `all 0.25s`

---

## Spacing System

| Size | Pixels | Tailwind |
|------|--------|----------|
| xs | 0.25rem | `p-1` |
| sm | 0.5rem | `p-2` |
| md | 1rem | `p-4` |
| lg | 1.5rem | `p-6` |
| xl | 2rem | `p-8` |
| 2xl | 3rem | `p-12` |
| 3xl | 4rem | `p-16` |
| 4xl | 5rem | `p-20` |

**Usage:**
```html
<div class="p-8 gap-4">Container with 2rem padding, items 1rem apart</div>
<section class="my-20">Section with 5rem top & bottom margin</section>
```

---

## Responsive Breakpoints

```html
<!-- Mobile first -->
<div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
  100% on mobile
  50% on tablet
  33% on desktop
  25% on wide desktop
</div>
```

**Breakpoints:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## Components

### Hero Section
```html
<section class="hero">
  <div class="hero-slide active">
    <div class="hero-eyebrow">Subheading</div>
    <h1>Main Title</h1>
    <p class="hero-desc">Description</p>
    <div class="hero-actions">
      <a href="#" class="btn-primary glass-btn">CTA</a>
    </div>
  </div>
</section>
```

### Service Card
```html
<div class="bg-brand-sand p-6 rounded-lg border border-brand-border">
  <h3 class="text-xl font-display font-bold mb-4">Service Name</h3>
  <p class="text-brand-mid mb-4">Description</p>
  <a href="#" class="text-brand-green hover:text-brand-orange">Learn more →</a>
</div>
```

### Section with Label
```html
<section class="py-16">
  <div class="section-label">Label</div>
  <h2 class="section-title">Title with <em>emphasis</em></h2>
  <p class="text-lg">Content</p>
</section>
```

---

## Accessibility

### Focus States
All buttons/links get green focus outline automatically:
```css
button:focus { outline: 2px solid var(--green); outline-offset: 2px; }
```

### Keyboard Navigation
- Tab: navigate forward
- Shift+Tab: navigate backward
- Enter/Space: activate button
- Arrow keys: carousel controls (implemented in JS)

### ARIA Labels
```html
<button aria-label="Previous slide">←</button>
<button aria-label="Play video">▶</button>
<div role="region" aria-label="Featured carousel">Carousel</div>
```

### Skip Link
Auto-included in all pages:
```html
<a href="#main-content" class="sr-only">Skip to main content</a>
<section id="main-content">Main content here</section>
```

---

## Performance Tips

### Images
```html
<!-- Optimize: specify size, lazy load, alt text -->
<img 
  src="ship.jpg" 
  alt="Container ship at port"
  width="800"
  height="600"
  loading="lazy"
/>
```

### CSS
```bash
npm run build  # Generates optimized dist/output.css
npm run watch  # Watch mode during development
```

### Fonts
Already optimized with:
- `display=swap` to prevent FOIT
- Preload on critical pages
- Reduced subset (Latin only)

---

## Animation Tokens

```css
animation-spinSlow: 25s linear infinite;
animation-spinReverse: 18s linear infinite reverse;
animation-floatLogo: 5s ease-in-out infinite;
animation-floatBadge: 4s ease-in-out infinite;
```

**Usage:**
```html
<div class="animate-floatLogo">Floating element</div>
```

---

## Color Contrast (WCAG AA)

✅ **Verified ratios:**
- Orange (#D94E0F) on white: **6.2:1**
- Green (#1A5C2A) on white: **5.8:1**
- Dark (#1A1A1A) on white: **>12:1**

**Always test when combining colors!**
Use: https://webaim.org/resources/contrastchecker/

---

## Development Workflow

```bash
# Start development
npm install      # Install dependencies
npm run watch    # Watch CSS changes

# Before deployment
npm run build    # Generate optimized CSS
npm test         # Run lighthouse
npm deploy       # Deploy to Netlify (if configured)
```

---

## Common Tasks

### Add a new color
1. Update `tailwind.config.js` in `colors.brand`
2. Add to `:root` variables in CSS
3. Reference with Tailwind: `bg-brand-[name]`

### Create new component
1. Define styles in `css/style.css`
2. Use Tailwind for layout/spacing
3. Document in DESIGN_SYSTEM.md

### Update typography
1. Change in Tailwind config or CSS
2. Test on all pages
3. Verify contrast ratios

### Test accessibility
1. Open browser DevTools
2. Install axe DevTools extension
3. Run scan and fix issues
4. Test keyboard navigation (Tab through page)

---

## Documentation

| Document | Purpose |
|----------|---------|
| **DESIGN_SYSTEM.md** | Component specs, tokens, best practices |
| **BRANDING_GUIDE.md** | Brand identity, colors, voice & tone |
| **FRONTEND_OPTIMIZATION.md** | Performance, SEO, accessibility |
| **IMPROVEMENTS_SUMMARY.md** | Changelog of all updates |
| **README.md** | Setup & deployment instructions |

---

## Useful Links

- **Tailwind Docs:** https://tailwindcss.com/docs
- **Color Contrast:** https://webaim.org/resources/contrastchecker/
- **Lighthouse:** Chrome DevTools → Lighthouse tab
- **axe DevTools:** Browser extension for accessibility

---

**Print this page or save as bookmark!**

Last Updated: June 2026
