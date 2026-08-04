# ⌨️ TypeRacer Pro — Free Online Typing Speed Test

> Test your typing speed in seconds. Measure WPM, accuracy, and streaks. No signup. No ads. 100% free.

🔗 **Live Site:** https://typeracer-pro-web.vercel.app/

---

## 📸 Screenshots

### 🏠 Home Page (Light Mode)
![Home Page Light](https://typeracer-pro-web.vercel.app/og-image.png)

> Full page previews below:

| Home — Light | Home — Dark |
|---|---|
| ![Home Light](https://raw.githubusercontent.com/Mumtazsanjar/typeracer-pro/main/screenshots/home-light.png) | ![Home Dark](https://raw.githubusercontent.com/Mumtazsanjar/typeracer-pro/main/screenshots/home-dark.png) |

| Typing Test | About Page |
|---|---|
| ![Test Page](https://raw.githubusercontent.com/Mumtazsanjar/typeracer-pro/main/screenshots/test-page.png) | ![About Page](https://raw.githubusercontent.com/Mumtazsanjar/typeracer-pro/main/screenshots/about-page.png) |

| Privacy Policy | Mobile View |
|---|---|
| ![Privacy Page](https://raw.githubusercontent.com/Mumtazsanjar/typeracer-pro/main/screenshots/privacy-page.png) | ![Mobile View](https://raw.githubusercontent.com/Mumtazsanjar/typeracer-pro/main/screenshots/mobile-view.png) |

---

## Features

- ⏱️ **Three time modes** — 30s, 60s, 120s
- 📊 **Live stats** — WPM, Accuracy, Timer, Streak counter
- 🎯 **3 difficulty levels** — Easy, Medium, Hard
- 🎨 **Dark & Light theme** with animated UI
- ✅ **Letter-by-letter highlighting** — green for correct, red for wrong
- 🔥 **Streak counter** — tracks consecutive correct words
- 📈 **Rating system** — Beginner → Expert based on WPM
- 💾 **History saved to localStorage** — last 10 results, never sent to any server
- 📱 **Fully responsive** — works on mobile and desktop
- ⌨️ **Keyboard shortcuts** — Tab to restart, Escape to close modal
- 90+ unique text passages across difficulty levels

---

## On-Page SEO Checklist ✅

| Element | Status |
|---|---|
| `<title>` tag with primary keyword | ✅ |
| Meta description (under 160 chars) | ✅ |
| Canonical URL | ✅ |
| robots meta tag | ✅ |
| Open Graph tags (og:title, og:description, og:image) | ✅ |
| Twitter Card tags | ✅ |
| Schema.org – WebApplication + SoftwareApplication | ✅ |
| Schema.org – Organization | ✅ |
| Schema.org – WebSite | ✅ |
| Schema.org – FAQPage (6 questions) | ✅ |
| Schema.org – BreadcrumbList | ✅ |
| H1 on every page | ✅ |
| H2/H3 structure in sections | ✅ |
| Privacy Policy page | ✅ |
| robots.txt with sitemap reference | ✅ |
| sitemap.xml | ✅ |
| script.js loaded with `defer` | ✅ |
| Semantic footer with nav columns | ✅ |

---

## Off-Page SEO Action Plan 🚀

### 1. Submit to Search Engines (Free, Do First)

- **Google Search Console** → https://search.google.com/search-console
  - Add property: `https://typeracer-pro-web.vercel.app/`
  - Submit sitemap: `https://typeracer-pro-web.vercel.app/sitemap.xml`

- **Bing Webmaster Tools** → https://www.bing.com/webmasters

### 2. Directory & Tool Listings

| Directory | URL |
|---|---|
| Product Hunt | https://www.producthunt.com/posts/new |
| AlternativeTo | https://alternativeto.net/software/add/ |
| G2 | https://www.g2.com/products/new |
| Futurepedia | https://www.futurepedia.io/submit-tool |
| Fazier | https://fazier.com/submit |

### 3. Reddit Communities

- r/learnprogramming
- r/webdev
- r/learntyping
- r/InternetIsBeautiful
- r/SideProject

### 4. Dev Community Posts (Dofollow Backlinks)

- **Dev.to** → https://dev.to/new
- **Hashnode** → https://hashnode.com
- **IndieHackers** → https://www.indiehackers.com

---

## Project Structure

```
typeracer-pro/
├── index.html      # Main HTML with full on-page SEO
├── style.css       # All styling (dark/light theme, animations)
├── script.js       # Game logic (vanilla JS, no dependencies)
├── robots.txt      # Crawler instructions + sitemap reference
├── sitemap.xml     # Homepage URL with priority
├── vercel.json     # Vercel deployment config
└── README.md       # This file
```

---

## Deploy to Vercel

### Option 1 — Vercel Dashboard
1. Push to GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo → Deploy

### Option 2 — Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## Local Development

Just open `index.html` in a browser — no build step, no dependencies, no install needed.

---

## Tech Stack

- HTML5 (semantic, accessible)
- CSS3 (custom properties, animations, responsive)
- Vanilla JavaScript (no frameworks, no libraries)
- LocalStorage (score history + theme preference)
- Google Fonts (Inter)
- Deployed on Vercel
