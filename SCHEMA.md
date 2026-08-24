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
  working: "...",                        // "What's working" column
  notWorking: "...",                     // "What's not" column
  borrow: "<b>Worth borrowing:</b> ..."  // callout — HTML allowed, keep it to one <b> lead-in
}
```
`working` and `notWorking` accept plain text or simple HTML (e.g. `<b>`).
Aim for 130–260 characters per field — that's the range the two-column
layout was built and stress-tested against. Longer text (the DPO Centre
profile runs long deliberately, as a stress test) still lays out fine; very
long company names or paragraphs beyond ~300 characters are the point where
it's worth a manual check in the browser before shipping. The profile badge
pill and site link come from `companies` above, not from here.

## `findings`
The two callout cards in the Overview section (`tag: "risk"` or `"gap"`,
plus a `tagLabel` and `html` body). Edit in place; add more objects to the
array if you need a third card (the grid is 2 columns, so a 3rd wraps below).

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
