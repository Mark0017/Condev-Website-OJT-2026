# Condev Website OJT 2026

A polished single-page real estate landing page inspired by Condev, built with Next.js, React, TypeScript, and Tailwind CSS.

## Overview

This project recreates a modern property developer marketing site with a strong hero section, featured developments, company highlights, testimonials, careers messaging, and a contact section.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- React Icons

## Main Sections

- Navigation bar
- Hero banner
- About section
- Featured and completed projects
- Testimonials
- Careers and roles section
- Contact section
- Footer

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  About.tsx
  Contact.tsx
  Footer.tsx
  Hero.tsx
  Navbar.tsx
  Projects.tsx
  RolesSection.tsx
  Testimonials.tsx
public/
  images/
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev` starts the local development server
- `npm run build` creates the production build
- `npm run start` runs the production server
- `npm run lint` checks the project with ESLint

## Google Sheets Integration

The contact form and careers application popup can send submissions to Google Sheets.

Setup guide: `GOOGLE_SHEETS_SETUP.md`

## Notes

- Project images are stored in `public/images/`
- The local folder `Condev-Website-OJT-2026/` is ignored so it does not get tracked as a nested repository
- The current project metadata in `app/layout.tsx` uses the title `Condev Clone`

## Deployment

You can deploy this project to Vercel or any platform that supports Next.js production builds.

```bash
npm run build
npm run start
```

## Repository

GitHub: <https://github.com/Mark0017/Condev-Website-OJT-2026>
