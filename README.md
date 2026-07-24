# Personal Portfolio — Next.js + TypeScript + Tailwind CSS

A modern, animated, SEO-friendly personal portfolio built with Next.js 15 (App
Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## ✨ Features

- Sticky navbar with scroll-spy active-link highlighting & smooth scrolling
- Dark / light mode (system-aware, powered by `next-themes`)
- Animated hero with counting stats, floating social sidebar, back-to-top button
- About, Skills (categorized, logo cards), Projects (alternating layout),
  Education timeline, and Contact sections
- Working contact form that emails you directly (Nodemailer API route)
- "View Resume" button that downloads your resume file
- "Email Me" button that opens the visitor's email client
- Per-route metadata, Open Graph/Twitter cards, `sitemap.xml`, `robots.txt`
- Fully responsive, smooth page-load and scroll animations, reduced-motion support

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🛠️ Customize Your Content

Almost everything on the site is driven from **one file**:

```
src/lib/config.ts
```

Edit your name, title, bio, email, phone, social links, skills, projects, and
education entries there — the whole site updates automatically.

## 🖼️ Replace Placeholder Assets

All placeholder graphics live in `public/`:

| File | Replace with |
|---|---|
| `public/images/profile.svg` | Your hero photo (jpg/png/webp works too — just update the path in `hero.tsx`) |
| `public/images/about.svg` | A photo for the About section |
| `public/images/projects/project-*.svg` | Screenshots of your real projects |
| `public/resume.pdf` | Your real resume |
| `public/images/og.png` | Your social-share preview image (1200×630) |
| `public/favicon.svg` | Your favicon |

## 📧 Set Up the Contact Form (real email sending)

The contact form sends mail via SMTP using Nodemailer. Copy `.env.example` to
`.env.local` and fill in your details:

```bash
cp .env.example .env.local
```

**Fastest option — Gmail:**
1. Turn on 2-Step Verification on your Google account.
2. Create an [App Password](https://myaccount.google.com/apppasswords).
3. Put that 16-character password in `SMTP_PASS` (not your normal password).

Other SMTP providers (Outlook, Zoho, SendGrid, Mailgun, Resend) work the same
way — just change `SMTP_HOST` / `SMTP_PORT`.

⚠️ Without these env vars set, the contact form will show a friendly error
instead of silently failing.

## 🎨 Design Tokens

Colors, type scale, and other tokens live in `src/app/globals.css` under
`:root` / `.dark`. The palette is a warm off-white / near-black pair with a
light-green accent (`--accent`), matching the brief's primary color request.
Fonts: **Space Grotesk** (display), **Inter** (body), **JetBrains Mono**
(tech tags, labels).

## 📦 Deploy

Works out of the box on [Vercel](https://vercel.com/new) — import the repo
and add your environment variables from `.env.example` in the project settings.

## 🗂️ Project Structure

```
src/
  app/            → routes, layout, metadata, sitemap, robots, API route
  components/     → all UI sections & shared components
  lib/
    config.ts     → ALL editable site content lives here
    utils.ts      → small class-name helper
public/
  images/         → hero/about/project art (replace with real photos)
  resume.pdf      → placeholder resume (replace with yours)
```

## 🧩 Tech Stack

Next.js 15 · TypeScript · Tailwind CSS v4 · Framer Motion · next-themes ·
Nodemailer · Lucide Icons · react-hot-toast
