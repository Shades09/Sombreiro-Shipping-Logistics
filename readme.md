# Sombreiro Shipping & Logistics Ltd — Website

## Setup (one time only)

1. Open this folder in VS Code
2. Open the terminal (Ctrl + ` or View > Terminal)
3. Run:

```bash
npm install
```

## Development (every time you work on the site)

Run this command to watch for changes and auto-rebuild CSS:

```bash
npm run watch
```

Then open `index.html` with the **Live Server** VS Code extension (right-click → Open with Live Server).

Any time you change a Tailwind class in an HTML file, the CSS rebuilds automatically.

## Pages

| File | Page |
|------|------|
| index.html | Homepage |
| about.html | About Us |
| services.html | Services |
| contact.html | Contact |

## Folder Structure

```
sombreiro/
├── src/
│   └── input.css       ← Tailwind source (don't edit directly)
├── dist/
│   └── output.css      ← Auto-generated CSS (don't edit)
├── js/
│   └── main.js         ← Navigation & animations
├── images/
│   └── logo.png        ← Add your logo here
├── index.html
├── about.html
├── services.html
├── contact.html
├── tailwind.config.js
└── package.json
```

## Add Your Logo

Drop your logo file into the `images/` folder as `logo.png`.

## Deploy to Netlify

1. Go to https://netlify.com and sign up (free)
2. Drag and drop this entire folder onto the Netlify dashboard
3. Your site is live instantly!

To update: make your changes → drag and drop again → done.
