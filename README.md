# Nexus AI — 1:1 AI Training Website

A dark-themed, static website for an AI consultancy focused on personalized 1:1 AI training.

## Tech Stack

- **HTML / CSS / JS** — zero dependencies, no build step
- **Google Fonts** — Space Grotesk + Inter (loaded via CDN)
- **100% static** — just files, works anywhere

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Space Black | `#0B0D17` | Background |
| Vivid Purple | `#6C63FF` | Primary accent |
| Electric Cyan | `#00D4FF` | Secondary accent |
| Light Lavender | `#E2E4F0` | Primary text |
| Muted Purple-Gray | `#4A4A6A` | Secondary text |

## Deploy to GitHub Pages

1. Create a new GitHub repository
2. Push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to **Settings → Pages**
4. Set **Source** to `Deploy from a branch`
5. Select `main` branch, root `/`, and **Save**
6. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

> The `.nojekyll` file ensures GitHub Pages serves files directly without Jekyll processing.

## Local Preview

Open `index.html` directly in a browser, or serve locally:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .
```

## Structure

```
ai-consultancy/
├── index.html      # Main page
├── style.css       # All styles
├── script.js       # Animations & interactivity
├── .nojekyll       # GitHub Pages config
└── README.md       # This file
```

## License

MIT
