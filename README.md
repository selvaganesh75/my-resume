# Selvaganesh J — Resume Site

A glassmorphism-styled personal resume/portfolio built with Next.js 16 (App
Router, Cache Components), TypeScript, and Tailwind CSS 4.

## Content

All resume content lives in one place: [`src/data/resume.ts`](src/data/resume.ts).
Edit that file to update your summary, skills, projects, education, email, or
WhatsApp number — every section reads from it.

The original source docx is kept in `source/` for reference. When you get the
updated PDF, either re-extract the text or just hand-edit `resume.ts` directly
(it's plain TypeScript objects, no build step needed).

To enable the "Download résumé" button, drop a `resume.pdf` file into `public/`.

## Contact form (email notifications)

The contact form uses a React Server Action ([`src/app/actions.ts`](src/app/actions.ts))
and [Nodemailer](https://nodemailer.com/) to email new messages to
`ganesh5632@gmail.com`. Configure SMTP credentials before deploying:

1. Copy `.env.example` to `.env.local`.
2. For Gmail: turn on 2-Step Verification, then create an **App Password** at
   https://myaccount.google.com/apppasswords — use that (not your normal
   password) as `SMTP_PASS`.
3. Fill in `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, and `CONTACT_TO_EMAIL`.
4. Add the same variables in your hosting provider's dashboard (e.g. Vercel →
   Project Settings → Environment Variables) before deploying.

Without these variables the form shows a friendly error asking visitors to use
WhatsApp instead — it won't crash the build or the site.

The WhatsApp number is set in `resume.ts` as `contact.whatsappNumber`
(`919788546014`, assuming +91). Update it if the country code is wrong.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Hosting recommendation: Vercel, not GitHub Pages

This site uses a **Server Action** (for the email-sending contact form), which
needs a server/serverless runtime on every request. **GitHub Pages only serves
static files** — there is no server, so Server Actions and API routes simply
don't work there without ripping out the email feature and switching the form
to a third-party static form backend (e.g. Formspree) instead.

**Recommended: [Vercel](https://vercel.com)** (made by the Next.js team)

- Free tier, no credit card required.
- Zero-config — it detects Next.js automatically, including Server Actions.
- You get a free subdomain like `your-name.vercel.app` — no domain purchase
  needed.
- Add the SMTP env vars in the dashboard and the contact form works out of the
  box.

Steps:

1. Push this repo to GitHub.
2. Go to vercel.com → "Add New Project" → import the GitHub repo.
3. Add the environment variables from `.env.example`.
4. Deploy. Every future `git push` auto-deploys.

**If you still want GitHub Pages later:** it's possible, but requires adding
`output: "export"` to `next.config.ts`, removing/replacing the Server Action
contact form with a static-compatible service like Formspree or EmailJS, and
setting `basePath`/`assetPrefix` to your repo name since the site won't live
at the domain root. Ask if you'd like this variant set up as well — it's free
too, just more limited.

## Tech stack

- Next.js 16 (App Router, Cache Components, Turbopack)
- TypeScript
- Tailwind CSS 4 (custom `glass` / `glass-strong` utilities in `globals.css`)
- Nodemailer for contact-form email notifications

