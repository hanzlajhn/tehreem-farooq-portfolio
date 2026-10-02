# Tehreem Farooq — Portfolio

Single-page portfolio for Tehreem Farooq, a B2B lead generation and digital marketing specialist based in Pakistan.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To use another port:

```bash
npx next dev --hostname 0.0.0.0 --port 43123
```

## Edit the words on the page

Visible copy — name, summary, services, jobs, education, skills, and contact details — is in [`lib/site.ts`](lib/site.ts). Change the strings there and refresh.

Section layout lives in [`app/page.tsx`](app/page.tsx). The navigation and footer read the same `lib/site.ts` file.

## Replace the CV

The Download CV button points at [`public/Tehreem_Farooq_CV.pdf`](public/Tehreem_Farooq_CV.pdf).

Replace that file with your own one-page PDF and keep the same filename. No code change is required.

## Deploy

The site is a Next.js app. Pushing `main` deploys to Vercel (Hobby plan) at the project URL configured for this repo. The canonical site URL is set as `url` in `lib/site.ts`.
