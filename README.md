# Anh Khoa – Next.js Firebase Portfolio

Portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, Firebase Admin SDK, Realtime Database, Framer Motion, Lucide React and React Icons.

## Architecture

- `app/page.tsx`: Server Component, reads Firebase and generates SEO metadata.
- `components/sections/*`: independent About, Hero, Projects, Skills, Contact, Header and Footer sections.
- `components/ui/*`: small Client Components only for animation and interactive cards.
- `lib/firebase-admin.ts`: server-only Firebase Admin initialization.
- `lib/portfolio-data.ts`: reads `/portfolio` and falls back to local data if Firebase is not configured.
- `firebase/portfolio.seed.json`: import-ready Firebase data.

## Why two icon libraries?

- **Lucide React**: consistent tree-shakable interface icons such as Mail, MapPin, ArrowUpRight and technology category icons.
- **React Icons**: brand icons such as GitHub and LinkedIn. This avoids forcing brand logos into a general-purpose interface icon set.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

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
