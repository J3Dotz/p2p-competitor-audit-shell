# Editing the report — content.js

All competitor content lives in one file: **`content.js`**. Everything on the
page — tabs, profiles, bar charts, the comparison matrix, the scoring
methodology block — is generated from it by `app.js`. To update content,
edit `content.js` only; you should never need to touch `index.html` or
`app.js` for a normal content change.

Open `content.js` in any text editor. It's one JavaScript object called
`CONTENT` with six sections:

## 1. `companies`
The 8 companies shown everywhere, in display order. Each one:
```js
{ id: "securys", name: "Securys", short: "Securys", url: "https://www.securys.co.uk", role: "competitor", badge: "Benchmark-quality" }
```
- `id` — short lowercase code, must match the `id` used in `scores`, `matrix`
  and `profiles` below. Don't change existing ids without updating every
  other section that references them.
- `name` — full name, shown in profile headings and bar charts.
- `short` — shown in the matrix table's column header (keep it brief — long
  names wrap awkwardly in an 8-column table).
- `url` — the company's live site. Shown as a clickable link next to their
  name on the profile tab. Use the real homepage URL.
- `role: "benchmark"` marks P2P (exactly one company should have this — it
  drives the navy bar/"Benchmark" badge/"(baseline)" tab label). Every other
  company is `role: "competitor"`.
- `badge` — a short descriptive pill shown on that company's profile tab
  (e.g. `"Market leader"`, `"Content standout"`). Use `null` for none. This
  is editorial framing, not a score — keep it to 2–4 words.

## 2. `criteria`
The 7 scoring criteria, in display order (this also sets matrix row order and
bar-chart section order). Just an `id` and a `name` each. Criterion ids are
camelCase (`dataCollection`, `contentSeo`, `socialLinkedin`, `trustSignals`)
— they must match the keys used in `scoringRubric`, `scores` and `matrix`.

## 3. `scoringRubric`
One text block per criterion id, describing what a 0–2 / 5–6 / 9–10 score
means for that criterion. This renders as the "Scoring methodology"
reference table under the bar charts — it's what makes every score
defensible as "anchored to a band," not a gut call. If you change how a
criterion is scored, update its rubric text here so the two stay in sync.

Social & LinkedIn's rubric is a deliberate exception: it explains why the
score is capped at 3–4 for everyone (LinkedIn blocks the research access
needed to verify posting cadence) rather than describing bands. `app.js`
also prints this as an inline note directly under that specific chart.

## 4. `scores`
One block per criterion id, each holding `{ companyId: score }` pairs —
**whole numbers, 0–10**, each one justified by the matching band in
`scoringRubric`. You don't need to list every company — only the ones with
a score show up in that chart, and the chart sorts itself low to high
automatically. The highest score in each chart is auto-flagged gold
("leader"); P2P's bar is auto-flagged navy. (Social & LinkedIn never gets a
gold leader bar, since every score there is capped/unverified.)

## 5. `matrix`
Short reference-table text (aim for well under 90 characters — it's an
8-column table) per criterion id, per company id. The matrix table also
appends that company's score (`n/10`) automatically — don't repeat the score
in the text itself. Full explanation goes in `profiles` instead.

## 6. `profiles`
One block per company id:
```js
securys: {
  working: ["...", "...", "..."],        // "What's working" — array of 3-5 bullet strings
  notWorking: ["...", "..."],            // "What's not" — array of bullet strings
  borrow: "<b>Worth borrowing:</b> ..."  // callout — HTML allowed, keep it to one <b> lead-in
}
```
`working` and `notWorking` are **arrays** — each string becomes one `<li>`.
Each item accepts plain text or simple HTML (e.g. `<b>`). Aim for 3–5 items,
roughly one sentence each — that's the range the bulleted layout was built
and stress-tested against (the DPO Centre profile runs to 7 bullets
deliberately, as a stress test, and still lays out fine on screen and
print). The profile badge pill and site link come from `companies` above,
not from here.

## `findings`
The callout cards in the Overview section (`tag: "risk"` or `"gap"`, plus a
`tagLabel` and `html` body). Edit in place; add more objects to the array if
you need extra cards (the grid is 2 columns, so a 3rd/5th wraps below).

## `pageInsights`
Measured Google PageSpeed Insights data — kept structurally and visually
separate from the editorial 0-10 scores above, in its own "Technical
Performance" subsection at the end of the matrix section.
```js
pageInsights: {
  meta: "Google PageSpeed Insights, desktop, captured 25 Aug 2026. Scores 0-100 per Lighthouse.",
  metrics: [{ id: "performance", name: "Performance" }, ...],   // exactly 4: performance, accessibility, bestPractices, seo
  scores: { performance: { companyId: 0-100, ... }, ... },       // one block per metric id
  flags: { companyId: "Free-text red-callout note." }            // ONE flag per company, shown once
}
```
Each company gets **at most one** flag, and `app.js`'s `FLAG_METRIC` map
decides which of the 4 charts it renders under (an HTTPS/mixed-content issue
is a Best Practices audit; CLS/TBT/Core Web Vitals issues are Performance
audits) — it does not render under all 4 automatically. If you add a flag
for a new company, add its id to `FLAG_METRIC` in `app.js` too, matching
whichever Lighthouse category the flag text is actually about.

## `gaps` and `leadMagnets`
Deliverables 03/04, both data-driven:
```js
gaps: {
  quickWins: [{ title: "...", detail: "..." }, ...],
  structural: [{ title: "...", detail: "..." }, ...]
},
leadMagnets: [{ title: "...", detail: "..." }, ...]   // rendered in array order, numbered 01/02/03
```
`detail` accepts simple HTML. No fixed item count, but the two-column gap
layout and three-column magnet grid are tuned for roughly 4-5 items and
2-4 items respectively — many more and they'll wrap to extra rows (fine,
just check it looks right).

---

## Adding a 9th company or an 8th criterion
Add an entry to `companies` or `criteria`, then add matching entries in
`scoringRubric` (criteria only), `scores`, `matrix`, and `profiles` (for a
new company) using the same `id`. Nothing else needs to change — tabs,
charts, the rubric block and the matrix all regenerate from the array
length automatically.

## Local preview
Open `index.html` directly in a browser, or, for full JS execution, serve
the folder locally, e.g.:
```bash
python3 -m http.server 8000
```
then visit `http://localhost:8000`.
