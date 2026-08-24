# Editing the report — content.js

All competitor content lives in one file: **`content.js`**. Everything on the
page — tabs, profiles, bar charts, the comparison matrix — is generated from
it by `app.js`. To update content, edit `content.js` only; you should never
need to touch `index.html` or `app.js` for a normal content change.

Open `content.js` in any text editor. It's one JavaScript object called
`CONTENT` with five sections:

## 1. `companies`
The 8 companies shown everywhere, in display order. Each one:
```js
{ id: "securys", name: "Securys", short: "Securys" }
```
- `id` — short lowercase code, must match the `id` used in `scores`, `matrix`
  and `profiles` below. Don't change existing ids without updating every
  other section that references them.
- `name` — full name, shown in profile headings and bar charts.
- `short` — shown in the matrix table's column header (keep it brief — long
  names wrap awkwardly in an 8-column table).
- `badge: "benchmark"` marks P2P; `badge: "leader"` marks the current market
  leader (currently The DPO Centre). At most one company should carry each.

## 2. `criteria`
The 7 scoring criteria, in display order (this also sets matrix row order and
bar-chart section order). Just an `id` and a `name` each.

## 3. `scores`
One block per criterion id, each holding `{ companyId: score }` pairs,
0–10, one decimal place. You don't need to list every company — only the
ones with a score show up in that chart, and the chart sorts itself low to
high automatically. The highest score in each chart is auto-flagged gold
("leader"); P2P's bar is auto-flagged navy. **Only Trust Signals and Content
& SEO are confirmed measurements** — the other five criteria currently hold
first-pass editorial scores pending sign-off; update them as real data lands.

## 4. `matrix`
Short reference-table text (aim for well under 90 characters — it's an
8-column table) per criterion id, per company id. This is the condensed
version; put the full explanation in `profiles` instead.

## 5. `profiles`
One block per company id:
```js
securys: {
  badgeLabel: "What good looks like",   // optional pill shown next to the name; use null for none
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
it's worth a manual check in the browser before shipping.

## `findings`
The two callout cards in the Overview section (`tag: "risk"` or `"gap"`,
plus a `tagLabel` and `html` body). Edit in place; add more objects to the
array if you need a third card (the grid is 2 columns, so a 3rd wraps below).

---

## Adding a 9th company or an 8th criterion
Add an entry to `companies` or `criteria`, then add matching entries in
`scores`, `matrix`, and `profiles` (for a new company) using the same `id`.
Nothing else needs to change — tabs, charts and the matrix all regenerate
from the array length automatically.

## Local preview
Open `index.html` directly in a browser, or, for full JS execution, serve
the folder locally, e.g.:
```bash
python3 -m http.server 8000
```
then visit `http://localhost:8000`.
