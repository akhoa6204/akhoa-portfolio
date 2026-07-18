# Anh Khoa – Next.js Firebase Portfolio

Portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, Firebase Admin SDK, Realtime Database, dynamic project detail pages, Framer Motion, Lucide React and React Icons.

## Architecture

- `app/page.tsx`: homepage Server Component, reads portfolio data and renders the main sections.
- `app/projects/[id]/page.tsx`: dynamic project detail page with project-specific metadata, canonical URL, Open Graph data and structured data.
- `app/layout.tsx`: root layout and shared site metadata configuration.
- `app/loading.tsx`: route-level loading UI.
- `app/robots.ts`: generates `robots.txt`.
- `app/sitemap.ts`: generates sitemap entries for the homepage and visible project detail pages.
- `components/home-page/*`: homepage sections such as Hero, Career, Projects, Skills, Technology Strip, Contact, Header and Footer.
- `components/project-detail-page/*`: reusable sections for the project detail page, including breadcrumb, hero, gallery, overview, features, challenges, sidebar and JSON-LD.
- `components/ui/*`: reusable interface components such as project cards, career rows, loaders, reveal animations and technology items.
- `lib/firebase-admin.ts`: server-only Firebase Admin initialization.
- `lib/portfolio-data.ts`: reads portfolio data and supports branch/item lookup for dynamic project pages, with local fallback data when Firebase is unavailable.
- `firebase/portfolio.seed.json`: import-ready Firebase data containing profile, career, projects, project detail content, skills and technologies.
- `types/portfolio.ts`: shared TypeScript types for profile, career, project details, features, challenges, gallery images, skills and technologies.

## Why two icon libraries?

- **Lucide React**: consistent tree-shakable interface icons such as Mail, MapPin, ArrowUpRight and technology category icons.
- **React Icons**: brand icons such as GitHub and LinkedIn. This avoids forcing brand logos into a general-purpose interface icon set.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `[http://localhost:3000](https://anhkhoa-dev.vercel.app/)`.

The project works with fallback data before Firebase is configured.

## Connect Firebase Realtime Database

1. Firebase Console → Realtime Database → create the database in locked mode.
2. In the Data tab, use the three-dot menu → **Import JSON**.
3. Import `firebase/portfolio.seed.json` at the database root.
4. Firebase Console → Project settings → Service accounts → Generate new private key.
5. Copy the relevant values into `.env.local`.

Keep these rules when access happens only through Firebase Admin on the Next.js server:

```json
{
  "rules": {
    ".read": false,
    ".write": false
  }
}
```

The Admin SDK authenticates with a service account and is not blocked by client security rules. Never expose the private key through a `NEXT_PUBLIC_` variable.

## Updating content

Edit values under `/portfolio` in Firebase Console. The page uses `revalidate = 60`, so updates generally appear within about one minute without a new deployment.

## Production

Set `NEXT_PUBLIC_SITE_URL` to the deployed domain and add all Firebase variables to Vercel Project Settings → Environment Variables.

```bash
npm run build
npm start
```
