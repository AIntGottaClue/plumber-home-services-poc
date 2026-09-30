# Plumber home-services proof of concept

Static Astro project. One template with config-file data and Google Sheets gViz data. GitHub Pages only. No Cloudflare config, production hostname, analytics, lead tracker, or live submissions.

## Preview modes

- `npm run build` builds the sample config site. All public business fields live in `src/data/siteConfig.ts`.
- `npm run build:both` produces `site/config/` and `site/demo/` plus a chooser. The default GitHub Pages repository path is `/plumber-home-services-poc/`. Set `PAGES_PREFIX` if using a different repository name.
- Demo business is resolved by `?business=abc-austin`, `radiant-austin`, or `stans-austin`. Internal navigation keeps the slug. Missing, disabled, duplicate, unavailable, or incomplete data fails closed without showing another business.
- `node scripts/export-config.mjs <slug>` copies a selected row into the same config shape before a config build. It does not authorize production launch. Config HTML does not request Google Sheets at runtime.

## Business sheet

https://docs.google.com/spreadsheets/d/1uYaj741H-TyN7XuRHlHvBGXmK8ZIXifhDHJ8gTJzZaY/edit

Columns: slug, name, city, region, phone, website, source_url, services, areas, verified_at, enabled. Pipe-separated service and area values. Keep slugs unique and enabled a boolean. This sheet is public-read by owner confirmation and contains only public business information. Never add personal lead data, tokens, or private notes.

## Safeguards

All preview pages use `noindex,follow`, including the chooser. Robots permits crawling so crawlers can see noindex. No sample LocalBusiness schema, fabricated review, credential, staff claim, or testimonial. Stock photo is labeled illustrative. Form fields and phone actions are disabled. Real businesses did not commission or approve these independent previews.

## Launch gate

A later commissioned site needs approved business identity, exact coverage, real work evidence, contact routing, a domain, and current privacy/terms. Verify claims before activating business structured data. Add real-domain canonicals, sitemap, indexability, and Search Console only to that approved site. No ranking promises. No automated mass city pages.

## Validation

`node scripts/visual-test.cjs` inspects a root config build locally. `node scripts/test-gviz.cjs` tests the dual build on the repository base path with live public Google Sheets requests and audits all internal links. Desktop/mobile screenshots are not included in the repo. Source and built HTML were scanned for analytics, em dashes, price/cost wording, and invented credentials.
