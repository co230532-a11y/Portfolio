# Khan Ong Fernandez — Portfolio (Next.js + Tailwind)

## Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS custom properties
- **Fonts**: Syne + DM Sans (via `next/font/google`)
- **Icons**: Font Awesome 6.5

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout with font setup + metadata
│   └── page.tsx           # Home page — assembles all sections
├── components/
│   ├── Navbar.tsx         # Sticky nav with active section tracking
│   ├── Hero.tsx           # Hero section with photo, CTA, socials
│   ├── Projects.tsx       # 4-project grid with scroll reveal
│   ├── About.tsx          # Education, military, approach, stats
│   ├── Skills.tsx         # 4-column skill cards
│   ├── Leadership.tsx     # Certifications & mil achievements
│   └── Footer.tsx         # 3-column footer
├── public/
│   ├── ROTC.jpg           # ← Add your photo here
│   ├── adzu.png           # ← Add ADZU logo
│   ├── paf.png            # ← Add PAF logo
│   ├── adrtc.png          # ← Add ROTC logo
│   └── Khan O. Fernandez.png  # ← CV/resume image
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
└── package.json
```

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Add your assets to /public (see above)

# 3. Run dev server
npm run dev
# → http://localhost:3000

# 4. Build for production
npm run build
npm start
```

## Deployment

This project is ready to deploy on **Vercel** (recommended):

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import on [vercel.com](https://vercel.com).

## Assets to add to `/public`

| File | Description |
|------|-------------|
| `ROTC.jpg` | Your hero photo |
| `adzu.png` | ADZU university logo |
| `paf.png` | Philippine Air Force logo |
| `adrtc.png` | ADZU ROTC logo |
| `Khan O. Fernandez.png` | CV / resume file |

## Customization

All content is co-located in each component file as typed data arrays — just edit the arrays at the top of each component to update content without touching markup.
