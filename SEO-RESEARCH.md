# SEO implementation decisions

Researched September 30, 2026, before the build. This is a proof of concept, not an indexable business launch. Following guidance cannot guarantee rankings.

| Decision | Applied implementation |
|---|---|
| People-first content | Four distinct problem pages, practical observations, diagnosis boundaries, no testimonials or invented proof. |
| Crawlable architecture | Static HTML navigation and contextual anchor links; descriptive service paths; requested service and area dropdowns. |
| Page identity | One H1 per page, topic-specific title and description, visible content matching WebPage schema. |
| Mobile usability | Responsive cards, keyboard-operable details menus, skip link, visible focus, no horizontal overflow on tested viewports. |
| Performance | Static Astro output, one optimized local JPEG, no framework hydration, declared image dimensions, high-priority hero image. Core Web Vitals remain unmeasured until hosting exists; no pass claim. |
| Honest entity data | No fictitious LocalBusiness or review markup. Production business schema needs approved, complete verified identity. |
| No doorway strategy | Small demonstration area set, no mass city swaps. Only researched coverage is shown in sheet navigation. Region expansion needs distinct useful content. |
| Preview isolation | Noindex for all demo routes. No production canonicals, sitemap submission, analytics, or Search Console on previews. |
| Production data | Same template accepts a baked config row. No runtime sheet dependency in config mode. |

## Primary sources read

- SEO Starter Guide, Google Search Central: https://developers.google.cn/search/docs/fundamentals/seo-starter-guide
- Helpful, reliable, people-first content: https://developers.google.cn/search/docs/fundamentals/creating-helpful-content
- Search Essentials: https://developers.google.cn/search/docs/essentials
- Spam policies: https://developers.google.cn/search/docs/essentials/spam-policies
- Local business structured data: https://developers.google.cn/search/docs/appearance/structured-data/local-business
- Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
- Austin Water leak guidance: https://www.austintexas.gov/water/water-leaks
- Austin Water grease guidance: https://www.austintexas.gov/water/grease-blob
- EPA WaterSense: https://www.epa.gov/watersense/fix-leak-week
- Pexels license: https://www.pexels.com/license/
- Hero photo: https://www.pexels.com/photo/plumber-repairing-pipe-with-wrench-indoors-32588548/

Official documentation is the main source for technical SEO. Local utility and environmental-agency guidance support practical content. Business websites establish names/contact/services; their promotional assertions were not adopted. No keyword volume or ranking-difficulty claims were researched or invented. Licensed expert review and approved business facts remain production requirements.
