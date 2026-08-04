# ⌨️ TypeRacer Pro – Free Online Typing Speed Test

A beautiful, fully-featured typing speed test web app built with pure HTML, CSS, and JavaScript. Measure your WPM, accuracy, and streaks — no signup required.

🔗 **Live Site:** https://typeracerpro.vercel.app/

---

## Features

- ⏱️ **Three time modes** – 30s, 60s, 120s
- 📊 **Live stats** – WPM, Accuracy, Timer, Streak counter
- 🎯 **3 difficulty levels** – Easy, Medium, Hard
- 🎨 **Dark & Light theme** with animated UI
- ✅ **Letter-by-letter highlighting** – green for correct, red for wrong
- 🔥 **Streak counter** – tracks consecutive correct words
- 📈 **Rating system** – Beginner → Expert based on WPM
- 💾 **History saved to localStorage** – last 10 results, never sent to any server
- 📱 **Fully responsive** – works on mobile and desktop
- ⌨️ **Keyboard shortcuts** – Tab to restart, Escape to close modal
- 20+ unique text passages across difficulty levels

---

## On-Page SEO Checklist ✅

All of the following are implemented in `index.html`:

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
| Schema.org – FAQPage (5 questions) | ✅ |
| Schema.org – BreadcrumbList | ✅ |
| H1 on every page | ✅ |
| H2/H3 structure in sections | ✅ |
| Privacy Policy page | ✅ |
| robots.txt with sitemap reference | ✅ |
| sitemap.xml with all URLs | ✅ |
| Font preload + dns-prefetch | ✅ |
| script.js loaded with `defer` | ✅ |
| Semantic footer with nav columns | ✅ |

---

## Off-Page SEO Action Plan 🚀

Off-page SEO means getting backlinks, citations, and signals from outside your site. Here's a step-by-step plan:

### 1. Submit to Search Engines (Free, Do First)

- **Google Search Console** → https://search.google.com/search-console
  - Add property: `https://typeracerpro.vercel.app/`
  - Submit sitemap: `https://typeracerpro.vercel.app/sitemap.xml`
  - Request indexing for your homepage URL

- **Bing Webmaster Tools** → https://www.bing.com/webmasters
  - Add site and submit sitemap (also indexes Yahoo and DuckDuckGo)

### 2. Directory & Tool Listings (High-DA Backlinks)

Submit your site to these free tool directories:

| Directory | URL |
|---|---|
| Product Hunt | https://www.producthunt.com/posts/new |
| AlternativeTo | https://alternativeto.net/software/add/ |
| G2 | https://www.g2.com/products/new |
| Capterra | https://www.capterra.com/vendors/sign-up |
| ToolFinder | https://toolfinder.co/submit |
| Futurepedia | https://www.futurepedia.io/submit-tool |
| Fazier | https://fazier.com/submit |
| Peerlist | https://peerlist.io |

### 3. Reddit Communities (Drive Traffic + Social Signals)

Post about your tool in relevant subreddits. Be genuine — explain what you built and why:

- r/learnprogramming – "I built a typing speed test with pure JS — here's how"
- r/webdev – Show your code and UI
- r/learntyping – Share it as a free tool
- r/InternetIsBeautiful – Good fit for clean, free tools
- r/SideProject – Perfect for solo-built tools

**Post title tips:**
- "I built a free, no-signup typing speed test — feedback welcome"
- "TypeRacer Pro: WPM test with 3 difficulty levels and score history"

### 4. Dev Community Posts (Dofollow Backlinks)

- **Dev.to** → https://dev.to/new — Write "How I built a typing speed test in vanilla JS"
- **Hashnode** → https://hashnode.com — Same article, cross-post
- **Medium** → https://medium.com/new-story — Broader audience
- **IndieHackers** → https://www.indiehackers.com — Share as a project update

These posts create dofollow backlinks and bring real organic traffic.

### 5. GitHub Optimization

Since your code is open-source, your GitHub repo itself can rank:

- Add a detailed README (like this one)
- Add topics/tags: `typing-test`, `wpm`, `speed-test`, `javascript`, `html-css-js`, `free-tool`
- Add your live site URL in the repo's About section
- Create a GitHub release with version tag `v1.0.0`
- Post in GitHub Trending / Explore communities

### 6. Social Media & Backlink Building

- **Twitter/X**: Tweet with hashtags `#buildinpublic #javascript #webdev #freeTool`
- **LinkedIn**: Post a short article about building it
- **YouTube**: Even a 2-minute screen recording demo can rank for "typing speed test"
- **Pinterest**: Create a pin with a screenshot linking to the live site

### 7. Answer Questions (Gets Targeted Traffic)

- **Quora**: Answer "What is a good free typing speed test?" and link to your site naturally
- **Stack Overflow**: If relevant questions come up about WPM calculators
- **Reddit**: Answer questions in r/learntyping about WPM tools

### 8. Resource Page Link Building

Search Google for:
- `"best free typing tests" site:blog`
- `"typing practice tools" inurl:resources`

Then reach out to those blog/resource page owners and ask them to add TypeRacer Pro to their list.

---

## Project Structure

```
typing-speed-test/
├── index.html      # Main HTML with full on-page SEO
├── style.css       # All styling (dark/light theme, animations)
├── script.js       # Game logic (vanilla JS, no dependencies)
├── robots.txt      # Crawler instructions + sitemap reference
├── sitemap.xml     # All URLs with priority and change frequency
├── vercel.json     # Vercel deployment config
└── README.md       # This file
```

---

## Deploy to Vercel

### Option 1 – Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 – Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy** — done!

### Option 3 – Drag & Drop
1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag the project folder onto the page
3. Deploy instantly

---

## Local Development

Just open `index.html` in a browser — no build step, no dependencies, no install needed.

---

## Tech Stack

- HTML5 (semantic, accessible)
- CSS3 (custom properties, animations, responsive)
- Vanilla JavaScript (no frameworks, no libraries)
- LocalStorage (for score history and theme)
- Google Fonts (Inter + Fira Code)
- Deployed on Vercel
