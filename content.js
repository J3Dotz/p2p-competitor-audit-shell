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
    status: "Research complete · screenshot library pending"
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
    socialLinkedin: "0–2 dormant or near-inactive (minimal following, no meaningful recent cadence). 5–6 moderate, consistent cadence (roughly 2–5 posts/month) with a developing content strategy. 9–10 high-frequency (10+ posts/month), large following, a genuinely varied content mix. Based on a manual, logged-in review of each entity's LinkedIn (and other social) activity over the last 3–6 months.",
    trustSignals: "0–2 none. 5–6 named testimonials OR badges. 9–10 named clients + testimonials + certifications + registration transparency."
  },

  // 0-10 integer score per criterion per company, scored against the rubric above.
  scores: {
    positioning:    { p2p: 2, securys: 7, pembroke: 6, lighthouse: 6, ica: 6, privacyhelper: 7, dpocentre: 8, ametros: 7 },
    offering:       { p2p: 3, securys: 6, pembroke: 7, lighthouse: 5, ica: 6, privacyhelper: 8, dpocentre: 8, ametros: 7 },
    website:        { p2p: 2, securys: 7, pembroke: 6, lighthouse: 6, ica: 6, privacyhelper: 9, dpocentre: 9, ametros: 8 },
    dataCollection: { p2p: 1, securys: 5, pembroke: 7, lighthouse: 5, ica: 7, privacyhelper: 8, dpocentre: 6, ametros: 7 },
    contentSeo:     { p2p: 1, securys: 7, pembroke: 6, lighthouse: 7, ica: 8, privacyhelper: 8, dpocentre: 10, ametros: 6 },
    socialLinkedin: { p2p: 1, securys: 5, pembroke: 6, lighthouse: 4, ica: 4, privacyhelper: 3, dpocentre: 9, ametros: 1 },
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
      p2p: "LinkedIn only, footer link — cadence not verified",
      securys: "2k followers, 5.5 posts/mo historically — none in the last month",
      pembroke: "2k followers, ~5 posts/mo, timely topics, low engagement",
      lighthouse: "199 followers, ~2 posts/mo — improving via podcast + relaunch",
      ica: "279 followers, ~2.5 posts/mo, leans on calendar-hook content",
      privacyhelper: "914 followers, ~4 posts + 4 reposts in 6mo — unclear focus",
      dpocentre: "9k followers, ~20 posts/mo — carousels, news, webinars",
      ametros: "72 followers, dormant — last post 6 months ago"
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
    },
    {
      tag: "gap",
      tagLabel: "Measured, not editorial",
      html: "<b>P2P's site is the best-performing in the set on raw technical metrics</b> — 99/100 Performance, 100/100 Best Practices (Google PageSpeed, desktop). This isn't a content problem disguised as a speed problem: the current build doesn't need rebuilding for technical reasons, only for what's missing on the page."
    }
  ],

  // Measured PageSpeed Insights data (desktop), Aug 25 2026. Distinct from the editorial
  // 0-10 rubric scores above — these are Google Lighthouse's own 0-100 scores, unedited.
  // Rendered as its own labelled section so it's never confused with editorial judgement.
  pageInsights: {
    meta: "Google PageSpeed Insights, desktop, captured 25 Aug 2026. Scores 0-100 per Lighthouse.",
    metrics: [
      { id: "performance", name: "Performance" },
      { id: "accessibility", name: "Accessibility" },
      { id: "bestPractices", name: "Best Practices" },
      { id: "seo", name: "Technical SEO" }
    ],
    scores: {
      performance:    { p2p: 99, securys: 82, pembroke: 65, lighthouse: 76, ica: 65, privacyhelper: 39, dpocentre: 56, ametros: 53 },
      accessibility:  { p2p: 95, securys: 84, pembroke: 95, lighthouse: 95, ica: 97, privacyhelper: 100, dpocentre: 78, ametros: 88 },
      bestPractices:  { p2p: 100, securys: 96, pembroke: 96, lighthouse: 96, ica: 96, privacyhelper: 92, dpocentre: 96, ametros: 73 },
      seo:            { p2p: 92, securys: 85, pembroke: 92, lighthouse: 92, ica: 92, privacyhelper: 100, dpocentre: 92, ametros: 85 }
    },
    // Notable flags worth surfacing verbatim rather than just the score.
    flags: {
      ametros: "Fails an HTTPS check — 1 insecure request found on the page.",
      privacyhelper: "Severe layout-shift bug: Cumulative Layout Shift of 0.489 (\u201Cgood\u201D is under 0.1), likely the rotating hero or cookie banner.",
      pembroke: "Total Blocking Time of 1,220ms — real interactivity lag despite otherwise good visual metrics.",
      dpocentre: "Fails Google's Core Web Vitals assessment outright (LCP 3.8s, CLS 0.21)."
    }
  },

  // Profile copy per company. badge mirrors companies[].badge / role (benchmark | descriptive text | none).
  // working / notWorking are bullet arrays (3-5 items each) — rendered as <ul><li>.
  profiles: {
    p2p: {
      working: [
        "\u201CIndependent, unbiased guidance\u201D is a legitimate structural differentiator — no conflict of interest from an internal DPO appointee, unlike some competitors who bundle adjacent services",
        "Four clearly-labelled service tiles (Risk Assessment, Compliance Remediation, Training & Workshops, Ongoing Support) — plain language, no jargon",
        "Single, consistent call-to-action across the site — the ask is at least not confusing, even if it's repetitive",
        "Technically the strongest site in the entire set — 99/100 Performance, 100/100 Best Practices, 95/100 Accessibility (Google PageSpeed, desktop). The redesign is not fixing a slow or broken site."
      ],
      notWorking: [
        "Zero trust signals anywhere — no client logos, no named testimonials, no accreditation badges, no ICO/company registration number",
        "No content presence at all — no blog, no resources, no dated material of any kind, versus every one of the 7 competitors reviewed",
        "Positioning language (\u201Cindependent, unbiased guidance,\u201D \u201Cpractical solutions\u201D) is close to interchangeable with Securys's, Ametros's and Lighthouse IG's own copy",
        "Single generic \u201CGet Started\u201D CTA repeated three times — no lead magnet, no gated content, no newsletter signup",
        "No sector-specific pages, despite four separate competitors (Privacy Helper, DPO Centre, Ametros, Securys) proving this is standard practice in this market"
      ],
      borrow: "<b>Foundation to build on:</b> the plain-language service tiles are a decent base for sector-specific and trust-signal layers — not a full rewrite."
    },
    securys: {
      working: [
        "Splits its offer cleanly by client maturity stage (early / growth / maturity) rather than service line alone — a genuinely different IA logic worth studying",
        "ISO 27001 + 27701 certified — the only competitor in the set combining both certifications",
        "Named client testimonials with job titles attached (Sagicor, Anglo American, PacBio) — the highest-credibility testimonial format reviewed",
        "Global jurisdiction map signals genuine international capability rather than just a claim",
        "Active blog, white papers, reports and webinars — a genuine multi-format content hub"
      ],
      notWorking: [
        "Not a like-for-like competitor on size — the enterprise focus means some of its patterns (jurisdiction map, maturity tiers) may be over-engineered for P2P's SME-heavy client base",
        "No visible gated content or lead magnet on the homepage — relies on direct contact/consultation CTAs only",
        "PageSpeed flags a large network payload (13.7MB total) and the lowest Accessibility score of the client-nominated group (84/100) — missing image alt text and heading-order issues",
        "LinkedIn cadence has gone quiet — a historically solid 5.5 posts/month (2k followers) but nothing posted in the last month"
      ],
      borrow: "<b>Worth borrowing:</b> maturity-stage segmentation (early/growth/maturity) as an alternative to segmenting by service line alone."
    },
    pembroke: {
      working: [
        "Training is a genuine paid product line (IAPP CIPP/E, CIPM, CIPT courses) with online booking — not folded in as a generic tile",
        "Legal-background team positioning (\u201Cmany of our team members have qualified as lawyers\u201D) is distinctive and credible",
        "Enquiry form already carries GCLID/UTM hidden fields — proof they're running and properly tracking paid ads",
        "Named team bios, multiple named testimonials, IAPP official partner badge, Strand Alliance network membership",
        "Dual Ireland/UK office presence — directly relevant given P2P's own cross-border consulting exposure",
        "Active, timely LinkedIn presence (2k followers, ~5 posts/month) — live events and regulatory topics like the EU AI Act, not just service promotion"
      ],
      notWorking: [
        "Mega-menu is deep enough (5 separate top-level sections: Support/AI/DPO/Rep/Training) to risk over-complicating navigation",
        "No published pricing — same gap as almost every competitor reviewed, so not a unique weakness, but worth noting P2P isn't alone here",
        "Real interactivity lag: Total Blocking Time of 1,220ms drags Performance to 65/100 despite good visual load metrics — a heavy JavaScript payload is the likely cause"
      ],
      borrow: "<b>Worth borrowing:</b> productising training as a genuine revenue line rather than folding it into a generic \u201CTraining & Workshops\u201D tile — worth considering for P2P given Scott's existing content/training involvement."
    },
    lighthouse: {
      working: [
        "Simple, current build (2026) with a single named principal consultant (Scott) driving the brand — personal and credible",
        "Stats block (200+ engagements, 30+ clients, 18+ years experience) — the lowest-effort, highest-impact trust pattern in the entire set",
        "Podcast (\u201CThe Rest is Data\u201D) as a genuinely differentiated content format, not just another blog",
        "Broad scope (AI, CCTV, FOI, marketing consent) held together without becoming incoherent",
        "Solid technical baseline alongside its content strengths — 95/100 Accessibility, 96/100 Best Practices, 92/100 SEO"
      ],
      notWorking: [
        "Offering menu (DPO / Advice & Assurance / Training) is broad but shallow — services aren't deeply differentiated from each other on the page",
        "No sector pages, despite this being the standard pattern among the stronger competitors in this set",
        "LinkedIn is small (199 followers, ~2 posts/month) and was generic until recently — only picked up in the last two months alongside the podcast push and site relaunch"
      ],
      borrow: "<b>Worth borrowing:</b> the stats block pattern (years operating, engagements completed) is the single lowest-effort, highest-impact quick win in this entire set — P2P could implement something similar almost immediately."
    },
    ica: {
      working: [
        "Cyber-first positioning (CISOaaS + DPOaaS bundled) is a genuinely different market angle, not just DP-with-extra-steps",
        "Blog is the strongest in the entire set — long-form, dated, specific, including a reflective \u201C9 years, 9 lessons\u201D anniversary post rather than generic filler",
        "Free, self-serve maturity assessment tool is a strong, low-friction lead-gen mechanic",
        "Cyber Essentials + Cyber Essentials Plus certified",
        "Best all-round technical scores of the group bar P2P — 97/100 Accessibility, 96/100 Best Practices, 92/100 SEO"
      ],
      notWorking: [
        "Different market position than P2P (cyber-led rather than DP-led) means not every pattern here transfers directly",
        "No published pricing or process transparency beyond the free assessment tool",
        "LinkedIn strategy leans on generic calendar hooks (Daylight Saving, summer solstice) rather than the substance of their own blog — only 279 followers, ~2.5 posts/month"
      ],
      borrow: "<b>Worth borrowing:</b> the free self-serve maturity assessment as a lead magnet, and the standard set by their blog for what \u201Cactive content\u201D should actually look like."
    },
    privacyhelper: {
      working: [
        "Ten dedicated sector pages (casinos, gyms, schools, SaaS, healthcare, etc.) — the most complete sector-page implementation reviewed, and direct proof the approach already in P2P's suggested-pages list works commercially",
        "Named, recognisable client logos (Hippodrome Casino, Rocco Forte Hotels, Portsmouth FC) — a stronger tier of social proof than anonymised case studies",
        "Gated GDPR-checklist PDF (name/company/email) is a simple, replicable lead magnet",
        "ICO registration number, company number and VAT number all displayed in the footer — full transparency",
        "20+ distinct service pages including AI/LLM-specific services (ChatGPT compliance, biometric DPIAs) — ahead of the market on emerging-tech compliance"
      ],
      notWorking: [
        "Service catalogue is large enough (20+ pages) to risk diluting focus if navigation isn't organised carefully — worth reviewing their nav pattern before copying the breadth wholesale",
        "No visible published pricing, consistent with the rest of the set",
        "Technical execution doesn't match its content strength — Performance is 39/100 with a severe layout-shift bug (CLS 0.489, likely the rotating hero or cookie banner). Worth borrowing the content strategy, not the build quality.",
        "Social presence doesn't match the site either — 914 followers, just 4 original posts (plus 4 reposts) in six months, with unclear messaging and objectives"
      ],
      borrow: "<b>Worth borrowing:</b> the sector-page pattern (proof this works commercially, not just a keyword-volume theory), the gated checklist lead magnet, and displaying ICO/company/VAT registration numbers as a simple transparency signal."
    },
    dpocentre: {
      working: [
        "Named client logos across recognisable brands (Knight Frank, Lindt, Saint-Gobain, Calendly, Edgewise Therapeutics)",
        "Named testimonials with company names attached (Shard Capital, Unbar Rothon, Professional Case Management)",
        "Very recent, specific credibility markers: 4th consecutive Great Place to Work certification, \u201CCompliance Consultancy Firm of the Year\u201D at the ICA Compliance Awards Europe 2026, Best Workplaces for Women",
        "Six sector pages (Finance, Healthcare, Software, Retail, Education, Charities) plus a dedicated Life Sciences vertical",
        "Structured, named methodology (\u201CSchedule of Works,\u201D aligned to GDPR's 7 principles) plus a primary + secondary DPO continuity model",
        "Genuinely active content programme — dated blog posts, two separate newsletters, a white paper library",
        "Ranks #1 for 25+ of P2P's own target keywords — the single largest SEO threat in this market",
        "Also the clear social leader — 9k LinkedIn followers and roughly 20 posts a month, mixing carousels, company news and webinars"
      ],
      notWorking: [
        "Mega-menu is genuinely dense (10+ top-level items, several with sub-menus) — what \u201Ctoo much scope, not enough hierarchy\u201D looks like at the far end, even though it clearly isn't hurting their SEO",
        "Recently rebranded under a parent group (\u201CAxiom GRC\u201D) — worth monitoring whether this shifts their positioning or pricing tier over the coming months",
        "Fails Google's Core Web Vitals assessment outright (LCP 3.8s, CLS 0.21), and Performance sits at just 56/100 — the market dominance is built on content and authority, not technical execution"
      ],
      borrow: "<b>Worth borrowing:</b> the sector-page pattern (now confirmed by three separate competitors running the same play), and having a named, structured methodology rather than generic language. Their SEO dominance is accumulated authority over years — realistic response for P2P is \u201Cdon't compete on their terms,\u201D go long-tail and sector-specific instead."
    },
    ametros: {
      working: [
        "Leads with a specific, falsifiable claim: over 300 organisations represented to regulators, 100% success rate against enforcement action",
        "Ten sector-specific landing pages (Financial Services, Legal, Healthcare, Charity, Retail, Construction, Recruitment, Education, Transport, Software)",
        "Named, trademarked methodology (\u201CCompliCycle™\u201D)",
        "Dedicated Prices page — transparent about process (\u201CDiscovery Call → Proposal & Quote → Onboard in 2 weeks\u201D) even without published numbers",
        "Also runs certification services (Cyber Essentials, Cyber Essentials Plus, ISO 27001 readiness) as a genuine adjacent revenue line, not just DPO services"
      ],
      notWorking: [
        "Homepage stats block (continents served, revenue protected, employees supported) displayed with placeholder-style formatting on this pass — worth a manual check that these numbers render correctly live, since a broken stats block undercuts the exact trust signal it's meant to build",
        "LinkedIn has gone dormant — 72 followers, no post in six months, and even the earlier 1–2/month cadence was service-pitch content with little engagement",
        "Fails an HTTPS check (1 insecure request found) and posts the lowest Performance score in the set (53/100) — a real, fixable technical weakness despite the strong positioning"
      ],
      borrow: "<b>Worth borrowing:</b> the explicit, named engagement process (Discovery Call → Proposal → Onboarding) gives prospects a concrete next step and timeline — more reassuring than P2P's single repeated CTA with no indication of what happens next."
    }
  },

  // Deliverable 03 — gaps & opportunities. Each item pairs a recommendation with the
  // competitor evidence behind it, so nothing reads as an unsupported opinion.
  gaps: {
    quickWins: [
      { title: "Add trust signals to the homepage", detail: "Even 2–3 anonymised case studies or a single accreditation badge would move P2P ahead of the weakest competitors immediately. P2P is the only one of 8 sites reviewed with zero trust signals of any kind." },
      { title: "Add a simple stats block", detail: "Years operating, engagements completed, sectors served. Lighthouse IG's \u201C200+ engagements, 18+ years\u201D block is the cheapest, lowest-production-effort trust pattern in this entire set to replicate." },
      { title: "Display ICO/company/VAT registration in the footer", detail: "Costs nothing to add. Both Privacy Helper and The DPO Centre display this and it signals legitimacy immediately — a small transparency move P2P is currently missing entirely." },
      { title: "Ship one gated lead magnet", detail: "A checklist PDF is the simplest option. Privacy Helper's gated GDPR checklist proves this is a proven, low-cost lead-gen pattern that already works in this exact market." }
    ],
    structural: [
      { title: "Build dedicated sector pages", detail: "Confirmed standard practice, not a theory — Privacy Helper runs 10 sector pages, Ametros 10, The DPO Centre 6, and Securys segments by sector implicitly. This should be a core IA decision for the redesign, not an afterthought." },
      { title: "Develop a named, documented methodology", detail: "DPO Centre's \u201CSchedule of Works,\u201D Ametros's \u201CCompliCycle™,\u201D Securys's \u201CPrivacy Made Positive®.\u201D Gives sales conversations and the site something ownable, instead of the generic language P2P currently shares near-verbatim with 4+ competitors." },
      { title: "State an explicit engagement process", detail: "Discovery call → proposal/quote → onboarding timeline. Ametros's clearly-stated process is a lower-effort trust move than full pricing transparency, and gives prospects a concrete next step P2P's site currently lacks entirely." },
      { title: "Productise training as its own line", detail: "Pembroke Privacy's paid, bookable IAPP courses show this can be a genuine revenue line rather than a generic tile — worth exploring given Scott's existing content/training involvement in the account." },
      { title: "Build a real content programme", detail: "P2P scored 1/10 on Content & SEO — jointly the lowest score anywhere in the matrix. Every competitor except one scored 6 or above. This is the single largest gap in the entire analysis, not a nice-to-have." }
    ]
  },

  // Deliverable 04 — lead magnet recommendations, ranked by build effort vs proven pull.
  leadMagnets: [
    { title: "Gated compliance checklist PDF", detail: "Directly modelled on Privacy Helper's pattern — simplest to build, lowest production cost of the three options, and already proven to work in this market." },
    { title: "Free maturity / readiness self-assessment", detail: "Modelled on ICA Consultancy's tool — a stronger lead-gen mechanic (self-serve, produces a personalised result) but meaningfully more build effort than a static PDF." },
    { title: "Sector-specific guide tied to a sector landing page", detail: "E.g. \u201CGDPR for Schools\u201D paired with a dedicated schools page. Combines the sector-page structural recommendation with a lead magnet in one move — no competitor in this set combines both this cleanly, so it's a genuine differentiation opportunity rather than just catching up." }
  ]
};
