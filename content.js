/*
 * P2P Competitor Analysis — content data
 * Edit this file to update scores, matrix text, or profile copy.
 * See SCHEMA.md in this folder for field-by-field notes.
 */
const CONTENT = {

  meta: {
    competitorsReviewed: "7 + P2P benchmark",
    criteriaCount: 7,
    status: "Content locked, screenshots pending"
  },

  // Order here = default display order everywhere (tabs, matrix columns, bar charts before sorting).
  companies: [
    { id: "p2p",           name: "Pathway 2 Privacy", short: "P2P",           badge: "benchmark" },
    { id: "securys",       name: "Securys",           short: "Securys" },
    { id: "pembroke",      name: "Pembroke Privacy",  short: "Pembroke" },
    { id: "lighthouse",    name: "Lighthouse IG",     short: "Lighthouse IG" },
    { id: "ica",           name: "ICA Consultancy",   short: "ICA" },
    { id: "privacyhelper", name: "Privacy Helper",    short: "Privacy Helper" },
    { id: "dpocentre",     name: "The DPO Centre",    short: "DPO Centre",    badge: "leader" },
    { id: "ametros",       name: "Ametros Group",     short: "Ametros" }
  ],

  // Order here = matrix row order and bar-chart section order.
  criteria: [
    { id: "positioning", name: "Positioning" },
    { id: "offering",    name: "Offering & Pricing" },
    { id: "website",     name: "Website" },
    { id: "data",        name: "Data Collection" },
    { id: "content",     name: "Content & SEO" },
    { id: "social",      name: "Social & LinkedIn" },
    { id: "trust",       name: "Trust Signals" }
  ],

  // 0-10 editorial score per criterion per company. Charts sort low->high and
  // flag the P2P bar (navy) and the top score (gold) automatically.
  // NOTE: only Trust Signals and Content & SEO come from the confirmed research
  // pass — the other five are first-pass editorial judgement pending client sign-off.
  scores: {
    positioning: { p2p: 2.0, lighthouse: 5.0, ica: 6.0, pembroke: 6.5, privacyhelper: 6.8, securys: 8.0, ametros: 8.5, dpocentre: 9.0 },
    offering:    { p2p: 3.0, lighthouse: 4.5, securys: 6.0, ica: 6.2, pembroke: 6.5, privacyhelper: 7.5, ametros: 8.0, dpocentre: 8.8 },
    website:     { p2p: 2.5, pembroke: 6.0, lighthouse: 6.5, ica: 6.8, securys: 7.5, dpocentre: 7.8, privacyhelper: 8.0, ametros: 8.2 },
    data:        { p2p: 1.5, securys: 4.0, lighthouse: 5.0, dpocentre: 5.5, pembroke: 6.5, ametros: 6.8, ica: 7.5, privacyhelper: 8.5 },
    content:     { p2p: 0.5, ametros: 4.8, pembroke: 5.5, securys: 6.6, lighthouse: 7.0, ica: 7.8, privacyhelper: 8.2, dpocentre: 9.7 },
    social:      { ametros: 2.0, p2p: 3.0, securys: 3.5, dpocentre: 4.0, pembroke: 4.5, lighthouse: 5.0, ica: 6.0, privacyhelper: 6.5 },
    trust:       { p2p: 0.8, lighthouse: 5.8, ametros: 6.2, securys: 6.6, pembroke: 7.0, ica: 7.4, privacyhelper: 9.2, dpocentre: 9.6 }
  },

  // Short matrix-cell text per criterion per company (~3-12 words). Full detail lives in profiles below.
  matrix: {
    positioning: {
      p2p: "“Independent, unbiased guidance” — generic, shared language",
      securys: "Enterprise + SME split, trademarked methodology",
      pembroke: "Legal-expertise angle, Ireland/UK dual-office",
      lighthouse: "Approachable, broad scope",
      ica: "Cyber-first, DPO + CISO bundle",
      privacyhelper: "SME-friendly, sector-led, “zero-fuss”",
      dpocentre: "Category leader, structured “Schedule of Works”",
      ametros: "Proof-led claim, trademarked “CompliCycle™”"
    },
    offering: {
      p2p: "4 tiles, no published pricing or packaging detail",
      securys: "Maturity-stage tiers (early/growth/mature), no pricing",
      pembroke: "DP + AI governance + paid IAPP training",
      lighthouse: "DPO, Advice & Assurance, Training — broad, shallow",
      ica: "CISOaaS + DPOaaS bundle, named tools",
      privacyhelper: "20+ service pages incl. AI/LLM-specific",
      dpocentre: "Primary+secondary DPO, AI Governance suite, health sector",
      ametros: "10 sector packages, transparent process, no numbers"
    },
    website: {
      p2p: "4 nav items, no sector pages, no blog",
      securys: "Mega-menu, sector pages, jurisdiction map",
      pembroke: "Deep mega-menu — arguably over-built",
      lighthouse: "Squarespace, clean, current (2026)",
      ica: "Wix, clean, active blog integrated",
      privacyhelper: "10 sector pages, largest catalogue seen",
      dpocentre: "Dense mega-menu, 6 sector pages, recent rebrand",
      ametros: "Extensive mega-menu, 10 sector pages, Prices page"
    },
    data: {
      p2p: "Single generic “Get Started” CTA, repeated 3×",
      securys: "Contact/consultation CTAs, no gated content",
      pembroke: "Newsletter + course booking, GCLID/UTM tracking live",
      lighthouse: "“Enquire with Scott” CTA, podcast subscribe",
      ica: "Free maturity self-assessment tool",
      privacyhelper: "Gated GDPR checklist, cookie consent manager",
      dpocentre: "Advice-line retention hook; resource centre mostly ungated",
      ametros: "Two-stage form funnel, “15-min discovery call”"
    },
    content: {
      p2p: "None — no blog, no resources, no dated content",
      securys: "Active blog, white papers, reports, webinars",
      pembroke: "News section, FAQ, resources hub",
      lighthouse: "Blog + podcast — differentiated format",
      ica: "Long-form blog, substantive posts",
      privacyhelper: "“Knowledge Hub” + separate Industry News, dated 2026",
      dpocentre: "#1 for 25+ target keywords, 2 newsletters",
      ametros: "Top 10–20 for DPO cluster terms, news posts"
    },
    social: {
      p2p: "LinkedIn only (cadence not verified)",
      securys: "LinkedIn present (cadence not verified)",
      pembroke: "LinkedIn + Twitter/X",
      lighthouse: "LinkedIn + YouTube",
      ica: "LinkedIn + Twitter/X + Facebook",
      privacyhelper: "Facebook + Twitter/X + LinkedIn",
      dpocentre: "LinkedIn present (cadence not verified)",
      ametros: "Not verified"
    },
    trust: {
      p2p: "None — no logos, testimonials, badges, or numbers",
      securys: "ISO 27001 + 27701, named testimonials w/ job titles",
      pembroke: "Named team bios, testimonials, IAPP partner badge",
      lighthouse: "Stats block (200+ engagements, 18+ yrs)",
      ica: "Cyber Essentials + Plus certified",
      privacyhelper: "Named client logos, ISO/CIPP/AIGP badges, ICO number",
      dpocentre: "Named client logos, 4× Great Place to Work, awards",
      ametros: "“100% success rate” claim (unverified), company/VAT numbers"
    }
  },

  findings: [
    {
      tag: "risk",
      tagLabel: "Market reality",
      html: "<b>The DPO Centre ranks #1</b> for 25+ of P2P's target keywords. Not a benchmarking footnote — the dominant fact shaping whether an SEO-led strategy can work here at all. The realistic path is sector specificity and conversion quality, not head-to-head SEO."
    },
    {
      tag: "gap",
      tagLabel: "Biggest gap",
      html: "<b>P2P has the weakest trust-signal profile</b> of all 8 sites reviewed — no logos, no testimonials, no badges, no registration numbers. Every competitor, even the dated ones, has at least one."
    }
  ],

  // Profile copy per company. badge mirrors companies[].badge (benchmark | leader | omit).
  profiles: {
    p2p: {
      badgeLabel: "Benchmark",
      working: "Clear, jargon-light 4-tile service breakdown. “Independent, unbiased guidance” — no conflict of interest of an internal appointee — is a legitimate differentiator on paper.",
      notWorking: "Zero trust signals, zero content, single repeated generic CTA, positioning language shared near-verbatim with 4+ competitors below. Nothing here is ownable or memorable.",
      borrow: "<b>Foundation to build on:</b> the plain-language service tiles are a decent base for sector-specific and trust-signal layers — not a full rewrite."
    },
    securys: {
      badgeLabel: "What good looks like",
      working: "Most enterprise-credible operator in the set. Splits its offer cleanly by client maturity stage (early / growth / mature) rather than just service line — a genuinely useful IA pattern. ISO 27001 + 27701 certification plus named client testimonials with job titles (Sagicor, Anglo American, PacBio) is the strongest verifiable trust combination reviewed.",
      notWorking: "No gated content or lead magnet on the homepage — relies entirely on contact/consultation CTAs to convert interest.",
      borrow: "<b>Worth borrowing:</b> maturity-stage segmentation as an IA pattern, and the credibility of pairing certification with named, attributed testimonials."
    },
    pembroke: {
      badgeLabel: null,
      working: "Ireland/UK dual-office, legal-background team positioning (“many of our team members have qualified as lawyers”). Training is a genuine paid product line — IAPP CIPP/E, CIPM, CIPT courses, bookable online — not just a lead magnet. Enquiry form already carries GCLID/LinkedIn CLID hidden fields, meaning paid-ad attribution is properly wired up.",
      notWorking: "Mega-menu is deep across Support/AI/DPO/Rep/Training as separate top-level sections — arguably over-built for the scope of the offer.",
      borrow: "<b>Worth borrowing:</b> productising training as a bookable, paid line rather than folding it into one tile among several — relevant given P2P's own training angle."
    },
    lighthouse: {
      badgeLabel: "Closest comparable in scale",
      working: "Genuinely current (2026 build), single named principal consultant (Scott) driving the brand, podcast (“The Rest is Data”) as a content-format differentiator. Simple stats block (200+ engagements, 18+ years experience) is a low-effort trust pattern.",
      notWorking: "Positioning tone (“broad, approachable”) doesn't distinguish it much from 3-4 other sites in this set beyond scale and recency.",
      borrow: "<b>Worth borrowing:</b> the stats block is simple, low-production-effort, and P2P could implement something equivalent almost immediately."
    },
    ica: {
      badgeLabel: "Content marketing done properly",
      working: "Cyber-first positioning (DPO bundled alongside CISO-as-a-service) is a different market angle. The blog is the standout: long-form, dated, specific — including a genuinely reflective “what we got wrong” anniversary post rather than generic filler. Free maturity self-assessment tool is a strong, self-serve lead-gen mechanic.",
      notWorking: "Cyber-first framing may read as off-target for prospects specifically searching for DPO-first support rather than a bundled CISO/DPO offer.",
      borrow: "<b>Worth borrowing:</b> this is what “Content & SEO” should look like as an output — specific and reflective, not just a volume of posts."
    },
    privacyhelper: {
      badgeLabel: "Strongest trust-signal profile",
      working: "Most complete site of the client-nominated group. Ten dedicated sector pages (Casinos, Gyms, Schools, SaaS, Healthcare, etc.) prove the sector-page approach works commercially. Named, recognisable client logos (Hippodrome Casino, Rocco Forte Hotels, Portsmouth FC) are a different tier of social proof than anonymised case studies. Gated GDPR-checklist PDF is a simple, replicable lead magnet, and ICO/company/VAT numbers are all displayed in the footer.",
      notWorking: "Largest service catalogue seen in this set (20+ pages) risks diluting focus without clear hierarchy between core and adjacent offers.",
      borrow: "<b>Worth borrowing:</b> the gated checklist PDF and the footer registration numbers are both near-zero-effort trust moves P2P's site currently lacks entirely."
    },
    dpocentre: {
      badgeLabel: "Market leader",
      working: "Named client logos (Knight Frank, Lindt, Saint-Gobain, Calendly), named testimonials with company names attached, an active content programme (posts dated within the last month, two newsletters, a white paper library), 4th consecutive Great Place to Work certification, “Compliance Consultancy Firm of the Year” at the ICA Compliance Awards Europe 2026, and a recent rebrand under parent group “Axiom GRC.” Ranks #1 for 25+ of P2P's target keywords. Structured around a named “Schedule of Works” methodology aligned to GDPR's seven principles.",
      notWorking: "Mega-menu is genuinely dense — 10+ top-level items, several with sub-menus. What “too much scope, not enough hierarchy” looks like at the far end, even though it clearly isn't hurting their SEO.",
      borrow: "<b>Worth borrowing:</b> the sector-page pattern (confirmed by three other competitors too), and a named, structured methodology instead of generic language. Don't chase their SEO volume head-on — go long-tail and sector-specific instead."
    },
    ametros: {
      badgeLabel: null,
      working: "Leads with a specific, falsifiable claim — “over 300 organisations represented to regulators, 100% successful rate against regulatory enforcement action.” Ten sector-specific landing pages, a named trademarked methodology (“CompliCycle™”), and a dedicated Prices page that's transparent about process (Discovery Call → Proposal & Quote → Onboard in 2 weeks) even without published numbers.",
      notWorking: "Homepage stats block (continents served, revenue protected, employees supported) showed placeholder-style formatting in this pass — worth a manual check, since a broken stats block undercuts the trust signal it's meant to build.",
      borrow: "<b>Worth borrowing:</b> the named, explicit engagement process gives prospects a concrete next step — more reassuring than P2P's single repeated “Get Started” CTA."
    }
  }
};
