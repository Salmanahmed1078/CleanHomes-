# CleanHomes

Professional home cleaning website for the San Francisco Bay Area.

## Stack

- React + Vite
- Tailwind CSS
- Deployed on Vercel as a static SPA

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Requires Node.js 20 or newer.

## Environment variables

Create a `.env` file for form submissions:

```bash
VITE_FORM_EMAIL=info@cleanhomes.com
```

Booking and contact forms submit through FormSubmit to this email address.

## Deploy on Vercel

1. Import the GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Set `VITE_FORM_EMAIL` in project environment variables
