# yamir.in — Yamir Packaging website

Static site built with [Astro](https://astro.build). Deployed on Vercel. Domain yamir.in (GoDaddy).

## How the site is organised

```
src/data/site.ts        → ALL facts and copy live here (company, plants, products, industries, certs, FAQs)
src/pages/              → one file per page; [slug] files generate one page per product / industry / plant
src/components/         → Header, Footer, EnquiryForm, EnquiryBand, Faq, Breadcrumbs, Photo, ProofBar, Needs
src/layouts/BaseLayout  → <head>, SEO tags, Organization schema, header + footer + enquiry band on every page
src/styles/global.css   → design system (colours, type, buttons, cards)
public/                 → logo (SVG + PNG), favicon, robots.txt
_archive-2026-07/       → the July attempt, kept for reference, not deployed
```

Anything shown with a **yellow highlight** on the site is a `[NEEDS INPUT: …]` marker.
Replace the value in `src/data/site.ts` (or the page file) and the highlight goes away.
Search the whole project for `NEEDS(` to list every gap.

## Design rules (from the brief)

- Colours: deep blue `#1c3f60` (headings, dark band), warm off-white `#faf8f5`, dark grey text `#2b2b2b`, brand orange `#c2410c` for buttons only. All pairs pass WCAG AA.
- One typeface: IBM Plex Sans (self-hosted via Fontsource, no external requests).
- Body text 17px. Lots of white space. No animation that moves on its own.
- Real photos only. The dashed "Photo to shoot" boxes are the shot list.

## Work locally (on the Mac)

```bash
npm install     # first time, or after pulling changes
npm run dev     # http://localhost:4321
npm run build   # production build into dist/
```

Note: the `node_modules` folder currently on disk was installed from Claude's Linux VM.
If `npm run dev` complains on the Mac, delete `node_modules` and run `npm install` once in Terminal.

## Holding page ("website is being upgraded")

`holding/` is a self-contained one-page site (logo, phone, email, LinkedIn).
`npm run build` runs `scripts/holding.mjs` after Astro. If the environment
variable `HOLDING` is `1`, dist/ is replaced with the holding page; otherwise
the full site is deployed.

- While the site is being built: Vercel → Project → Settings → Environment
  Variables → `HOLDING` = `1` (Production). Every push shows the holding page.
- Launch day: delete the `HOLDING` variable in Vercel → Deployments → Redeploy.
  Nothing in the code or DNS changes.
- Preview builds (non-production) are unaffected unless you set the variable
  for them too, so you can keep checking the real site at its preview URL.

## Deploy: GitHub Desktop → Vercel → GoDaddy

1. **GitHub Desktop**: File → Add Local Repository → pick this folder → Publish repository (private is fine).
   `node_modules`, `dist`, `.astro` and `_archive-2026-07` are ignored by `.gitignore`, so they do not upload.
2. **Vercel**: Add New → Project → Import the GitHub repo. Vercel detects Astro (build `npm run build`, output `dist`). Deploy. You get a `*.vercel.app` preview URL.
3. **Domain**: Vercel → Project → Settings → Domains → add `yamir.in` and `www.yamir.in`. Vercel shows the DNS records it wants.
4. **GoDaddy** (hyuma8@gmail.com account) → My Products → yamir.in → DNS. Add the records Vercel showed: typically an `A` record for `@` and a `CNAME` for `www`. Remove any old `A`/`CNAME` records pointing at the previous host. Propagation can take up to a day.
5. After that, every push from GitHub Desktop redeploys the site automatically.

## Enquiry form

Posts to Web3Forms (free, no server). Create a key at web3forms.com using the sales mailbox,
then replace `REPLACE_WITH_WEB3FORMS_KEY` in `src/data/site.ts`. Until then the form will not send.
Submissions redirect to `/thank-you`.

## SEO / AI readiness built in

- Unique title + meta description per page, canonical URL, one H1 per page.
- Clean URLs (`/products/mono-cartons`, `/plants/kadi`), breadcrumbs with BreadcrumbList schema.
- Organization schema on every page; LocalBusiness per plant; Product per product; FAQPage where FAQs exist.
- `sitemap-index.xml` generated on build; `robots.txt` allows all crawlers including AI crawlers.
- All content is plain HTML with no JavaScript required (menu is CSS-only).

## Before go-live checklist

- [ ] Every yellow `[NEEDS INPUT]` replaced
- [ ] Plant addresses, Google Maps links, GSTIN
- [ ] Certificate PDFs uploaded to `public/certificates/` and linked on /quality
- [ ] Web3Forms key set; test one enquiry end to end
- [ ] Real photos (WebP, under 200 KB each) replacing every "Photo to shoot" box
- [ ] Confirm "we reply within one working day" is a promise sales can keep
- [ ] Client names only with written approval
- [ ] Google Search Console: add property, submit sitemap
- [ ] Google Business Profile for each plant (local search)
