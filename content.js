/*
 * P2P Competitor Analysis — content data
 * Source: direct site visits (all 8 sites), Aug 2026. Not yet gathered:
 * screenshots, mobile/speed testing, verified LinkedIn posting cadence.
 * Scores follow the documented rubric below — every score maps to a
 * defined band, not a gut call. See SCHEMA.md for how to edit this file.
 */
const CONTENT = {

  meta: {
    competitorsReviewed: "7 + P2P benchmark",
    criteriaCount: 7,
    status: "Research complete · screenshots pending"
  },

  // Order here = default display order everywhere (tabs, matrix columns, bar charts before sorting).
  companies: [
    { id: "p2p",           name: "Pathway 2 Privacy", short: "P2P",           url: "https://pathway2privacy.co.uk",   role: "benchmark",  badge: null },
    { id: "securys",       name: "Securys",           short: "Securys",       url: "https://www.securys.co.uk",       role: "competitor", badge: "Benchmark-quality" },
    { id: "pembroke",      name: "Pembroke Privacy",  short: "Pembroke",      url: "https://pembrokeprivacy.com",     role: "competitor", badge: null },
    { id: "lighthouse",    name: "Lighthouse IG",     short: "Lighthouse IG", url: "https://www.lighthouseig.com",    role: "competitor", badge: "Closest comparable" },
    { id: "ica",           name: "ICA Consultancy",   short: "ICA",          url: "https://www.icaconsultancy.co.uk", role: "competitor", badge: "Content standout" },
    { id: "privacyhelper", name: "Privacy Helper",    short: "Privacy Helper", url: "https://privacyhelper.co.uk",    role: "competitor", badge: "Strongest trust profile" },
    { id: "dpocentre",     name: "The DPO Centre",    short: "DPO Centre",   url: "https://www.dpocentre.com",        role: "competitor", badge: "Market leader" },
    { id: "ametros",       name: "Ametros Group",     short: "Ametros",      url: "https://ametrosgroup.com",         role: "competitor", badge: null }
  ],

  // Order here = matrix row order and bar-chart section order.
  criteria: [
    { id: "positioning",    name: "Positioning" },
    { id: "offering",       name: "Offering & Pricing" },
    { id: "website",        name: "Website" },
    { id: "dataCollection", name: "Data Collection" },
    { id: "contentSeo",     name: "Content & SEO" },
    { id: "socialLinkedin", name: "Social & LinkedIn" },
    { id: "trustSignals",   name: "Trust Signals" }
  ],

  // Every score below is anchored to one of these bands, not an unsupported judgement call.
  scoringRubric: {
    positioning: "0–2 no clear value prop / fully generic. 5–6 clear, some differentiation. 9–10 distinctive, ownable, proof-backed.",
    offering: "0–2 services unclear. 5–6 clear breakdown, no pricing. 9–10 segmented offering + transparent process/pricing.",
    website: "0–2 thin, no depth. 5–6 reasonable IA, some sector depth. 9–10 sector pages + mega-menu depth, current build.",
    dataCollection: "0–2 contact form only. 5–6 form + newsletter/CTA variety. 9–10 gated content + self-serve tool + tracked funnel.",
    contentSeo: "0–2 no content. 5–6 active blog. 9–10 multi-format + verified strong rankings.",
    socialLinkedin: "Capped at 3–4 for every entity — LinkedIn blocks cadence verification via research tools, so this criterion currently confirms platform presence only, not activity. Not a reliable differentiator without a manual, logged-in check.",
    trustSignals: "0–2 none. 5–6 named testimonials OR badges. 9–10 named clients + testimonials + certifications + registration transparency."
  },

  // 0-10 integer score per criterion per company, scored against the rubric above.
  scores: {
    positioning:    { p2p: 2, securys: 7, pembroke: 6, lighthouse: 6, ica: 6, privacyhelper: 7, dpocentre: 8, ametros: 7 },
    offering:       { p2p: 3, securys: 6, pembroke: 7, lighthouse: 5, ica: 6, privacyhelper: 8, dpocentre: 8, ametros: 7 },
    website:        { p2p: 2, securys: 7, pembroke: 6, lighthouse: 6, ica: 6, privacyhelper: 9, dpocentre: 9, ametros: 8 },
    dataCollection: { p2p: 1, securys: 5, pembroke: 7, lighthouse: 5, ica: 7, privacyhelper: 8, dpocentre: 6, ametros: 7 },
    contentSeo:     { p2p: 1, securys: 7, pembroke: 6, lighthouse: 7, ica: 8, privacyhelper: 8, dpocentre: 10, ametros: 6 },
    socialLinkedin: { p2p: 3, securys: 3, pembroke: 4, lighthouse: 4, ica: 4, privacyhelper: 4, dpocentre: 4, ametros: 3 },
    trustSignals:   { p2p: 1, securys: 7, pembroke: 7, lighthouse: 6, ica: 7, privacyhelper: 9, dpocentre: 9, ametros: 6 }
  },

  // Matrix-cell text per criterion per company. Full detail lives in profiles below.
  matrix: {
    positioning: {
      p2p: "“Independent, unbiased guidance” — generic, shared near-verbatim with 4+ competitors below",
      securys: "“Turn data from risk to asset” — trademarked methodology (Privacy Made Positive®)",
      pembroke: "Legal-expertise angle, Ireland/UK dual-office",
      lighthouse: "“Shining a light on…” — broad, approachable, named principal consultant",
      ica: "Cyber-first: CISOaaS + DPOaaS bundle",
      privacyhelper: "“Compliance Made Easy” — SME-friendly, sector-led",
      dpocentre: "Category leader, “Schedule of Works” methodology",
      ametros: "Proof-led: explicit 100% success claim, “CompliCycle™”"
    },
    offering: {
      p2p: "4 generic tiles, no pricing, no packaging detail",
      securys: "Enterprise + SME/charity/education tiers, maturity-stage segmentation",
      pembroke: "DP + AI governance + paid IAPP training courses, bookable",
      lighthouse: "DPO, Advice & Assurance, Training — broad but shallow",
      ica: "CISOaaS, DPOaaS, Culture360°, Guardian GRC360°",
      privacyhelper: "20+ distinct service pages incl. AI/LLM-specific",
      dpocentre: "AI Governance suite, Europrivacy Certification, health-sector services",
      ametros: "10 sector packages, certification services, published process (not £)"
    },
    website: {
      p2p: "4 nav items, no sector pages, no blog",
      securys: "Full mega-menu, sector pages, jurisdiction map",
      pembroke: "Deep mega-menu, arguably over-built",
      lighthouse: "Clean, current (2026), simpler structure",
      ica: "Clean, service-tile homepage, blog integrated",
      privacyhelper: "10 dedicated sector pages, largest catalogue seen",
      dpocentre: "Dense mega-menu, 6 sector pages, recently rebranded",
      ametros: "Grouped mega-menu, 10 sector pages, dedicated Prices page"
    },
    dataCollection: {
      p2p: "Single generic CTA repeated, no lead magnet",
      securys: "Contact/consultation CTAs, no gated content",
      pembroke: "Newsletter, course booking, GCLID/UTM tracking already live",
      lighthouse: "“Enquire with Scott” CTA, podcast/blog subscribe",
      ica: "Free maturity assessment — strong self-serve lead-gen",
      privacyhelper: "Gated GDPR checklist PDF, granular cookie consent",
      dpocentre: "Advice-line retention mechanic, mostly ungated resources",
      ametros: "Two-stage form funnel, explicit “15-min discovery call”"
    },
    contentSeo: {
      p2p: "No blog, no resources, no dated content",
      securys: "Active blog, white papers, reports, webinars",
      pembroke: "News section, FAQ, resources hub",
      lighthouse: "Blog + “The Rest is Data” podcast — differentiated format",
      ica: "Substantive long-form blog (e.g. “9 years, 9 lessons”)",
      privacyhelper: "Active Knowledge Hub, dated 2026 articles, categorised",
      dpocentre: "Ranks #1 for 25+ P2P target keywords, 2 newsletters, active blog",
      ametros: "Ranks top 10–20 for outsourced-DPO cluster, press section"
    },
    socialLinkedin: {
      p2p: "LinkedIn only, footer link",
      securys: "LinkedIn present",
      pembroke: "LinkedIn + Twitter/X present",
      lighthouse: "LinkedIn + YouTube present",
      ica: "LinkedIn + Twitter/X + Facebook present",
      privacyhelper: "Facebook + Twitter/X + LinkedIn present",
      dpocentre: "LinkedIn present",
      ametros: "Not verified"
    },
    trustSignals: {
      p2p: "None — no logos, testimonials, badges, or registration numbers",
      securys: "ISO 27001+27701, named testimonials with job titles",
      pembroke: "Named team bios, testimonials, IAPP badge, awards finalist",
      lighthouse: "Stats block (200+ engagements, 18+ yrs), named testimonials",
      ica: "Cyber Essentials + Plus certified, editorial honesty",
      privacyhelper: "Named client logos (Hippodrome, Rocco Forte, Portsmouth FC), ICO number",
      dpocentre: "Named clients (Knight Frank, Lindt), 4× GPTW, 2026 industry awards",
      ametros: "100% success claim (verify), company/VAT number displayed"
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

  // Profile copy per company. badge mirrors companies[].badge / role (benchmark | descriptive text | none).
  profiles: {
    p2p: {
      working: "The core message — independent, unbiased guidance without the conflict of interest of an internal appointee — is a legitimate differentiator, and the four-tile service breakdown is at least clear and jargon-light.",
      notWorking: "Every other entity in this set has something — a logo, a number, a badge, a name — that says “this is real and other people trust it.” P2P has none of that. Positioning language is close to interchangeable with Securys's, Ametros's, and Lighthouse IG's own copy. No content, no sector pages, no lead capture beyond a repeated generic CTA.",
      borrow: "<b>Foundation to build on:</b> the plain-language service tiles are a decent base for sector-specific and trust-signal layers — not a full rewrite."
    },
    securys: {
      working: "Most enterprise-credible operator in the set. Splits its offer cleanly by client maturity stage rather than just by service line — a genuinely useful IA pattern P2P could borrow. ISO certification + named client testimonials with job titles is the strongest verifiable trust combination reviewed.",
      notWorking: "Not a like-for-like competitor on size — the enterprise focus means some of its patterns (jurisdiction map, maturity tiers) may be over-engineered for P2P's SME client base.",
      borrow: "<b>Worth borrowing:</b> maturity-stage segmentation (early/growth/maturity) as an alternative to segmenting by service line alone."
    },
    pembroke: {
      working: "Training is a genuine paid product line (IAPP CIPP/E, CIPM, CIPT courses), not just a lead magnet. Legal-background team positioning is distinctive. Enquiry form already has ad-attribution tracking wired up, meaning they're running paid ads properly.",
      notWorking: "Mega-menu is deep enough (5 separate top-level sections) to risk confusing rather than clarifying navigation.",
      borrow: "<b>Worth borrowing:</b> productising training as a genuine revenue line rather than folding it into a generic “Training & Workshops” tile — worth considering for P2P given Scott's existing content/training involvement."
    },
    lighthouse: {
      working: "Genuinely current build, single named principal consultant driving the brand, podcast as a real content-format differentiator. Stats block is a simple, low-effort trust pattern. Scope is broad (AI, CCTV, FOI, marketing consent) without becoming incoherent.",
      notWorking: "Offering menu is broad but shallow — services are named but not deeply differentiated from each other on the page.",
      borrow: "<b>Worth borrowing:</b> the stats block pattern (years operating, engagements completed) is the single lowest-effort, highest-impact quick win in this entire set — P2P could implement something similar almost immediately."
    },
    ica: {
      working: "Cyber-first positioning is a genuinely different market angle. Blog is the standout of the entire set — long-form, dated, specific, and reflective rather than generic filler. Free maturity assessment is a strong, low-friction lead-gen mechanic.",
      notWorking: "Different market position than P2P (cyber-led rather than DP-led) means not every pattern here transfers directly.",
      borrow: "<b>Worth borrowing:</b> the free self-serve maturity assessment as a lead magnet, and the standard set by their blog for what “active content” should actually look like."
    },
    privacyhelper: {
      working: "The most complete site of the client-nominated group. Ten dedicated sector pages directly validates the sector-page approach already in P2P's suggested-pages list. Named, recognisable client logos are a different tier of social proof than anonymised case studies. Gated GDPR-checklist PDF is a simple, replicable lead magnet.",
      notWorking: "Service catalogue is large enough (20+ pages) that it risks diluting focus if not organised carefully — worth reviewing their nav pattern before copying the breadth.",
      borrow: "<b>Worth borrowing:</b> the sector-page pattern (proof this works commercially, not just a keyword-volume theory), the gated checklist lead magnet, and displaying ICO/company/VAT registration numbers as a simple transparency signal."
    },
    dpocentre: {
      working: "The most credible operator in the entire set, not just the SEO leader. Named client logos, named testimonials with company names, a genuinely active content programme, and very recent, specific credibility markers (4th consecutive Great Place to Work, “Compliance Consultancy Firm of the Year” 2026). Six sector pages. Structured, named methodology.",
      notWorking: "The mega-menu is genuinely dense — 10+ top-level items, several with sub-menus. What “too much scope, not enough hierarchy” looks like at the far end, even though their SEO results prove it isn't holding them back.",
      borrow: "<b>Worth borrowing:</b> the sector-page pattern (now confirmed by three separate competitors running the same play), and having a named, structured methodology rather than generic language. Their SEO dominance is accumulated authority over years — realistic response for P2P is “don't compete on their terms,” go long-tail and sector-specific instead."
    },
    ametros: {
      working: "Leads with a specific, falsifiable claim — a genuinely differentiated trust pattern if substantiated. Ten sector-specific landing pages — the fourth confirmation that sector pages are standard practice. Named, trademarked methodology. A dedicated Prices page transparent about process even without numbers.",
      notWorking: "Homepage stats block (continents served, revenue protected, employees supported) appeared with placeholder-style formatting on this pass — worth a manual check that these numbers render properly live.",
      borrow: "<b>Worth borrowing:</b> the explicit, named engagement process (Discovery Call → Proposal → Onboarding) gives prospects a concrete next step and timeline — more reassuring than P2P's single repeated CTA with no indication of what happens next."
    }
  }
};
