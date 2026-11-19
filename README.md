# yamir.in

The Yamir Packaging website. It is a plain static site: no build step.

## What is where

- `site/` is the whole website. This folder is what visitors see.
  - `index.html` is the page.
  - `img/` holds the images (logo, brand logos, certificates, testimonial photos, Everest letter).
  - `robots.txt` and `sitemap.xml` are for search engines.
- `vercel.json` tells Vercel to serve `site/` as it is, with no install and no build.

## How to update the site

1. The site is designed in the Claude prototype. When it changes, Claude rebuilds the launch folder from it.
2. Replace the contents of `site/` with the new launch folder. Do not edit `site/index.html` by hand.
3. Commit and push in GitHub Desktop. Vercel puts it live within a minute or two.

## Things to know

- `site/email/` holds the email signature cards (black, green, cream). Gmail signatures load them from https://yamir.in/email/. When you replace the contents of `site/` with a new launch folder, keep `site/email/`, or every signature loses its card.
- The enquiry form sends to a Google Apps Script web app owned by hyuma@yamir.in, which saves a row in the "Yamir Website Enquiries" Sheet and emails sales@yamir.in. Details are in the Claude project note `enquiry-form`.
- FSC is deliberately left off the site until FSC approves its use. Details are in the Claude project note `fsc-restore`.
- The old Astro site and the "website is being upgraded" holding page are in git history (commit 4dc5c97). The `HOLDING` setting in Vercel no longer does anything and can be deleted.

## Deploy chain

GitHub Desktop -> GitHub (hyuma8/yamir.in) -> Vercel project `yamir-in` -> yamir.in and www.yamir.in (DNS at GoDaddy).
