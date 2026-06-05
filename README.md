# Aspires Training and Consulting

The official website for **Aspires Training and Consulting** — a professional platform that connects individuals and organisations with vetted experts across a wide range of fields, and offers IT training, IELTS preparation, and higher education advisory services.

Built with [Next.js](https://nextjs.org) 16, React 19, TypeScript, and Tailwind CSS v4.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | react-icons |
| Font | Raleway (Google Fonts via `next/font`) |
| Data | Google Sheets (published as CSV) |

---

## Project Structure

```
app/
├── components/
│   ├── atoms/              # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── FramedImage.tsx
│   │   ├── FramedImageClickable.tsx
│   │   ├── PersonnelCard.tsx
│   │   ├── PersonnelOverlay.tsx
│   │   └── ScrollToTop.tsx
│   └── sections/           # Page sections
│       ├── Nav.tsx
│       ├── Hero.tsx
│       ├── HeroButtonSection.tsx
│       ├── WhoWeAre.tsx
│       ├── WhatWeDo.tsx
│       ├── KeyPersonnel.tsx
│       ├── PersonnelList.tsx
│       ├── ContactAPro.tsx
│       └── Footer.tsx
├── lib/
│   └── getPersonnel.ts     # Fetches and parses personnel data from Google Sheets
├── images/                 # App-level static images (logo, default profile)
├── globals.css             # Global styles and design token CSS variables
├── layout.tsx              # Root layout (Nav + Footer wrapping all pages)
├── page.tsx                # Home page
├── privacy-policy/
│   └── page.tsx
└── terms-of-use/
    └── page.tsx
public/
└── images/                 # Personnel photos and section images
docs/
└── google-sheets-setup.md  # Guide for managing personnel data
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, Who We Are, What We Do, Key Personnel, Contact a Pro |
| `/privacy-policy` | Privacy policy |
| `/terms-of-use` | Terms of use |

---

## Personnel Data (Google Sheets)

The **Key Personnel** section is data-driven. Personnel records are fetched at build/request time from a publicly published Google Sheet (as CSV) and cached for one hour.

### Setup

1. Set the `GOOGLE_SHEET_CSV_URL` environment variable in `.env.local`:

```
GOOGLE_SHEET_CSV_URL=https://docs.google.com/spreadsheets/d/e/LONG_ID/pub?gid=SHEET_ID&single=true&output=csv
```

2. See [`docs/google-sheets-setup.md`](docs/google-sheets-setup.md) for full instructions on sheet structure, column order, adding photos, and troubleshooting.

> `.env.local` is gitignored and must never be committed.

---

## Design System

All colors are defined as CSS variables in `app/globals.css` and exposed as Tailwind utility classes. Never use raw hex values or arbitrary Tailwind color classes.

| Variable | Tailwind class | Use |
|---|---|---|
| `--background` | `bg-background` / `text-background` | Page background |
| `--text` | `text-text` | Body text |
| `--primary` | `text-primary` / `bg-primary` | Primary actions, headings |
| `--accent` | `bg-accent` / `text-accent` | Highlights, badges |
| `--secondary` | `bg-secondary` | Subtle backgrounds |
| `--hover` | `text-hover` / `bg-hover` | Hover states |

Always use `react-icons` for icons. Never use inline SVGs, emoji, or other icon libraries.

---

## Getting Started

Install dependencies:

```bash
npm install
```

Create a `.env.local` file at the project root and add the Google Sheets URL (see above).

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## Deployment

Deploy on [Vercel](https://vercel.com) for the best Next.js experience. Add `GOOGLE_SHEET_CSV_URL` as an environment variable in the Vercel project settings.

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other hosting options.
