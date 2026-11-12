# yamir.in — Yamir Packaging website

Static site built with [Astro](https://astro.build). Deployed on Vercel. Domain yamir.in (GoDaddy).

## How the site is organised

```
src/data/site.ts        → ALL facts, copy and the photograph shot list (company, plants, cartons, industries, certs, FAQs, shots)
src/pages/              → one file per page; [slug] files generate one page per carton / industry / plant
src/components/         → Header, Footer, Enquiry, Carton (3D hero), Dieline, Plate (photo slot), Faq, Crumbs, Needs
src/layouts/Base.astro  → <head>, SEO tags, Organization schema, header + enquiry + footer on every page
src/styles/global.css   → design system
public/photos/          → photographs, named <id>.webp as listed in site.ts (npm run shots prints the list)
public/                 → logo (SVG + PNG), favicon, robots.txt
_archive-2026-07/       → earlier drafts, not deployed
_archive-2026-07/       → the July attempt, kept for reference, not deployed
```

Anything shown with a **yellow highlight** on the site is a `[NEEDS INPUT: …]` marker.
Replace the value in `src/data/site.ts` (or the page file) and the highlight goes away.
Search the whole project for `NEEDS(` to list every gap.

## Design system ("airy luxury", agreed 9 Oct 2026)

- Warm white paper `#f7f5f0`, near-black ink `#1c1c1a`, hairlines `#e3dfd6`. Colour appears only in the logo. Buttons are ink.
- Two typefaces, self-hosted: Cormorant Garamond (display, light) and Hanken Grotesk (text, labels).
- Page margin 7vw, section spacing 9rem. Few elements per screen.
- Home hero: an unprinted CSS carton that turns as you scroll, with its dieline drawing behind (scroll-driven, no autoplay).
- Photographs: `Plate` shows the real photo when `public/photos/<id>.webp` exists, otherwise a quiet blank plate with the shot description. Pages look finished either way.
- A `[NEEDS INPUT]` marker is a fact still missing. Search `NEEDS(` to list them.

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
