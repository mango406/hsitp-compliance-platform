/*
  ══════════════════════════════════════════════════════════════
  THE REGULATIONS DATABASE
  ══════════════════════════════════════════════════════════════
  This is a JavaScript array — a list of objects.
  Each object {} represents one regulation and has the same
  set of properties (keys) so we can treat them consistently.

  Think of it like a spreadsheet:
  - Each object = one row
  - Each property (id, title, jurisdiction...) = one column

  In a full production app this data would come from a real database
  on a server. For now, it lives here in the JavaScript file.
  Adding a new regulation = adding a new object to this array.
*/
const regulations = [

  // ── MAINLAND CHINA ────────────────────────────────────
  {
    id: 1,
    title: "Personal Information Protection Law (PIPL)",
    jurisdiction: "china",
    jurisdictionLabel: "Mainland China",
    theme: "data",
    themeLabel: "Data Governance & Cross-Border Flows",
    effectiveDate: "1 November 2021",
    summary: "China's first comprehensive national-level personal information law. Governs collection, storage, use, and cross-border transfer of personal data. Has extraterritorial reach — applies to any organisation handling data of persons located in China, regardless of where the company is incorporated.",
    keyRequirements: "Organisations must have a lawful basis for processing. Cross-border transfers require one of three mechanisms: CAC security assessment, professional certification, or standard contractual clauses. Security assessment is mandatory for transfers involving more than 100,000 individuals' personal information or more than 10,000 individuals' sensitive personal information.",
    startupImplication: "HSITP startups building AI products that process data of mainland China users — regardless of where the company is based — must comply. Cross-border data flows between HSITP (Hong Kong) and mainland China operations are directly regulated.",
    source: "NPC Official English Reference Text",
    sourceUrl: "http://en.npc.gov.cn.cdurl.cn/2021-12/29/c_694559.htm"
  },
  {
    id: 2,
    title: "Data Security Law (DSL)",
    jurisdiction: "china",
    jurisdictionLabel: "Mainland China",
    theme: "data",
    themeLabel: "Data Governance & Cross-Border Flows",
    effectiveDate: "1 September 2021",
    summary: "Establishes a national data classification and graded protection system. Introduces 'important data' and 'national core data' categories subject to strict controls and export restrictions. Primarily focused on national security dimensions of data governance.",
    keyRequirements: "Organisations must assess whether their data qualifies as 'important data'. Stricter security requirements and potential export restrictions apply to important data. Works alongside PIPL and the 2017 Cybersecurity Law.",
    startupImplication: "AI startups whose systems process large volumes of industry-specific or government-adjacent data should assess whether that data could be classified as 'important data' under DSL — a broad and administratively defined category.",
    source: "China Law Translate — Unofficial English Translation",
    sourceUrl: "https://www.chinalawtranslate.com/en/datasecuritylaw/"
  },
  {
    id: 3,
    title: "Provisions on Algorithm Recommendation",
    jurisdiction: "china",
    jurisdictionLabel: "Mainland China",
    theme: "transparency",
    themeLabel: "Algorithmic Transparency & Explainability",
    effectiveDate: "1 March 2022",
    summary: "One of the world's first binding AI-specific transparency regulations. Applies to internet information service providers using recommendation algorithms in China. Creates a mandatory government algorithm registration (filing) system for services with 'public opinion or social mobilisation' properties.",
    keyRequirements: "Providers must disclose to users that they are subject to algorithmic recommendations. Users have the right to opt out of personalised recommendations. Services reaching the public opinion threshold must register their algorithms with the CAC via a mandatory filing system. Internal ethics reviews and security assessments are required.",
    startupImplication: "Any startup operating a content, news, social, or recommendation platform in China — including AI-powered search or personalisation features — is likely subject to registration obligations.",
    source: "Regulations.AI — Algorithm Recommendation Provisions",
    sourceUrl: "https://regulations.ai/regulations/RAI-CN-NA-PAARIXX-2021"
  },
  {
    id: 4,
    title: "Interim Measures for Generative AI Services",
    jurisdiction: "china",
    jurisdictionLabel: "Mainland China",
    theme: "transparency",
    themeLabel: "Algorithmic Transparency & Explainability",
    effectiveDate: "15 August 2023",
    summary: "China's first binding regulation specifically on generative AI — among the earliest globally. Jointly issued by 7 ministries. Applies to any provider offering generative AI services (text, image, audio, video) to the public within China.",
    keyRequirements: "AI-generated content must be disclosed to users. Training data sources and algorithmic mechanisms must be explained to regulators on request. Content labelling is mandatory. Training data must be lawfully sourced. Content safety regime applies — generated content must not violate Chinese law. Providers must file with the CAC.",
    startupImplication: "Critical for any startup building on or integrating LLMs, image generators, or other generative AI for the Chinese market. CAC filing is required before offering services publicly.",
    source: "Digital Watch Observatory — Full English Translation",
    sourceUrl: "https://dig.watch/resource/interim-measures-for-the-administration-of-generative-artificial-intelligence-services"
  },
  {
    id: 5,
    title: "Algorithm Registry (CAC Filing System)",
    jurisdiction: "china",
    jurisdictionLabel: "Mainland China",
    theme: "licensing",
    themeLabel: "Licensing & Certification",
    effectiveDate: "August 2022 (ongoing)",
    summary: "The operational output of China's mandatory algorithm registration system, created under the 2022 Algorithm Recommendation Provisions. One of the world's first functioning AI licensing mechanisms — providers must register with the CAC before or shortly after public deployment if their systems reach the public opinion threshold.",
    keyRequirements: "Registration requires disclosure of the algorithm's name, purpose, application product, and operational details. Separate registration tracks exist for recommendation algorithms and deep synthesis (deepfake) algorithms. As of early 2026, 796 generative AI services and 481 deep synthesis applications had been registered.",
    startupImplication: "Startups should assess at product design stage whether their AI system will meet the public opinion or social mobilisation threshold. Registration before deployment is strongly advisable.",
    source: "Carnegie Endowment — Analysis of China's Algorithm Registry",
    sourceUrl: "https://carnegieendowment.org/posts/2022/12/what-chinas-algorithm-registry-reveals-about-ai-governance?lang=en"
  },

  // ── HONG KONG SAR ─────────────────────────────────────
  {
    id: 6,
    title: "Personal Data (Privacy) Ordinance (PDPO)",
    jurisdiction: "hongkong",
    jurisdictionLabel: "Hong Kong SAR",
    theme: "data",
    themeLabel: "Data Governance & Cross-Border Flows",
    effectiveDate: "December 1996 (amended 2021)",
    summary: "Hong Kong's primary data protection statute — one of Asia's earliest comprehensive data privacy laws. Governs collection, holding, and use of personal data through six Data Protection Principles (DPPs). Operates independently of China's PIPL under 'One Country, Two Systems'. 2021 amendments strengthened enforcement powers.",
    keyRequirements: "Six Data Protection Principles govern purpose limitation, data accuracy and retention, use limitation, data security, openness, and individual access rights. The Privacy Commissioner (PCPD) enforces compliance. Anti-doxxing criminal offences introduced in 2021 carry penalties up to HK$1 million and 5 years imprisonment.",
    startupImplication: "HSITP startups are in Hong Kong's jurisdiction by default. Dual compliance is required for companies operating on both sides of the boundary — PDPO and PIPL operate independently. No automatic equivalence between the two regimes.",
    source: "PCPD — PDPO at a Glance (Official)",
    sourceUrl: "https://www.pcpd.org.hk/english/data_privacy_law/ordinance_at_a_Glance/ordinance.html"
  },
  {
    id: 7,
    title: "PCPD Model AI Data Protection Framework",
    jurisdiction: "hongkong",
    jurisdictionLabel: "Hong Kong SAR",
    theme: "transparency",
    themeLabel: "Algorithmic Transparency & Explainability",
    effectiveDate: "June 2024",
    summary: "Voluntary framework from the Office of the Privacy Commissioner for Personal Data providing practical guidance on AI governance, risk assessment, and stakeholder transparency. Part of the Global AI Governance Initiative. Directly addresses the intersection of the PDPO and AI deployment.",
    keyRequirements: "Guidance covers: establishing AI governance strategies; conducting AI-specific risk assessments; managing AI models securely; ensuring transparency with data subjects about AI use; and maintaining human oversight. Not legally binding but expected by the PCPD as best practice.",
    startupImplication: "Startups deploying AI that processes Hong Kong residents' personal data should follow this framework as a de facto compliance baseline — even though it is currently voluntary.",
    source: "PCPD — PDPO and Mainland PIPL Comparative Overview",
    sourceUrl: "https://www.pcpd.org.hk/english/data_privacy_law/mainland_law/mainland_law.html"
  },

  // ── UNITED STATES ─────────────────────────────────────
  {
    id: 8,
    title: "CCPA / CPRA Automated Decision-Making (ADMT) Regulations",
    jurisdiction: "usa",
    jurisdictionLabel: "United States",
    theme: "transparency",
    themeLabel: "Algorithmic Transparency & Explainability",
    effectiveDate: "Operative 1 January 2026; ADMT requirements from 1 January 2027",
    summary: "California's most significant AI-specific regulation. Issued by the California Privacy Protection Agency under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA). Requires businesses to provide transparency and opt-out rights for automated decision-making that produces significant decisions about consumers.",
    keyRequirements: "Pre-use notices required when ADMT is used for significant decisions (employment, credit, housing, education, healthcare). Consumers have the right to opt out and request access to the logic behind decisions. Applies to for-profit businesses in California with annual revenue over US$25 million, or handling data of 100,000+ California residents.",
    startupImplication: "Any HSITP startup targeting US consumers with an AI product making significant decisions will likely meet the thresholds at meaningful scale. Compliance should be designed into products from the start, not retrofitted.",
    source: "FLAS Law — CCPA/CPRA ADMT Regulations Summary",
    sourceUrl: "https://flasllp.com/california-ai-privacy-laws-regulating-automated-decision-making-technology/"
  },
  {
    id: 9,
    title: "NIST AI Risk Management Framework (AI RMF 1.0)",
    jurisdiction: "usa",
    jurisdictionLabel: "United States",
    theme: "transparency",
    themeLabel: "Algorithmic Transparency & Explainability",
    effectiveDate: "26 January 2023",
    summary: "The US government's primary voluntary framework for managing AI risk. Organised around four functions: Govern, Map, Measure, and Manage. Identifies explainability and transparency as core trustworthiness characteristics. Voluntary but used as de facto compliance reference for federal procurement and sector regulatory guidance.",
    keyRequirements: "Organisations should identify AI risks (Map), analyse them (Measure), govern their response (Govern), and operationalise risk management (Manage). Companion AI RMF Playbook provides concrete actions. A Generative AI Profile (NIST AI 600-1) was released in July 2024.",
    startupImplication: "While voluntary, alignment with the AI RMF is increasingly expected by US federal agency customers and regulated industry partners. Useful as a governance framework to implement alongside mandatory requirements.",
    source: "NIST — AI Risk Management Framework 1.0 (Official)",
    sourceUrl: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10"
  },

  // ── EUROPEAN UNION ────────────────────────────────────
  {
    id: 10,
    title: "EU AI Act (Regulation (EU) 2024/1689)",
    jurisdiction: "eu",
    jurisdictionLabel: "European Union",
    theme: "transparency",
    themeLabel: "Algorithmic Transparency & Explainability",
    effectiveDate: "In force 1 August 2024; transparency provisions applicable 2 August 2026",
    summary: "The world's first comprehensive horizontal AI law. Takes a risk-based approach classifying AI into prohibited practices, high-risk AI, limited-risk AI, and minimal-risk AI. Imposes transparency obligations on generative AI providers and stringent conformity assessment requirements for high-risk AI systems.",
    keyRequirements: "High-risk AI systems must be transparent and provide technical documentation. Article 50: chatbots must disclose their artificial nature; AI-generated content must be identifiable; deepfakes must be labelled. GPAI models above 10^25 FLOPS face additional systemic risk obligations including model evaluations. Fines up to €35 million or 7% of global turnover.",
    startupImplication: "Any startup selling AI products to EU customers or with EU operations must map their systems to the AI Act's risk tiers. The conformity assessment and registration requirements for high-risk AI create significant pre-deployment compliance obligations.",
    source: "European Commission — EU AI Act Official Overview",
    sourceUrl: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
  },
  {
    id: 11,
    title: "EU AI Act — Conformity Assessment & Registration",
    jurisdiction: "eu",
    jurisdictionLabel: "European Union",
    theme: "licensing",
    themeLabel: "Licensing & Certification",
    effectiveDate: "Phased: 2024–2027 depending on risk tier",
    summary: "High-risk AI systems must undergo conformity assessment before market placement — either self-assessment or third-party assessment depending on the system category. High-risk AI must be registered in the EU's public database. GPAI models with systemic risk face additional evaluation and testing requirements.",
    keyRequirements: "Conformity assessment must be completed before deployment. Technical documentation, logging capabilities, and instructions for use are required for high-risk systems. The EU AI Office (established 2024) supervises GPAI models. National authorities enforce across EU member states.",
    startupImplication: "Startups whose AI products fall into high-risk categories (hiring tools, credit scoring, safety systems, biometric identification, etc.) face mandatory certification before entering the EU market.",
    source: "EU AI Act Explorer — Article 13 Transparency Obligations",
    sourceUrl: "https://artificialintelligenceact.eu/article/13/"
  },

  // ── UNITED KINGDOM ────────────────────────────────────
  {
    id: 12,
    title: "ICO Guidance on AI and Data Protection",
    jurisdiction: "uk",
    jurisdictionLabel: "United Kingdom",
    theme: "data",
    themeLabel: "Data Governance & Cross-Border Flows",
    effectiveDate: "Updated 15 March 2023",
    summary: "The UK Information Commissioner's Office's primary guidance clarifying how UK GDPR applies to AI systems that process personal data. Part of the UK's pro-innovation, principles-based regulatory approach which relies on existing sector regulators rather than new AI-specific legislation.",
    keyRequirements: "AI systems processing personal data must comply with UK GDPR: lawful basis, fairness and transparency, purpose limitation, data minimisation, accuracy, storage limitation, security, and accountability. Automated decision-making provisions (Article 22 equivalent) apply to significant AI-driven decisions.",
    startupImplication: "The UK has no bespoke AI Act. Compliance with UK GDPR, as interpreted through ICO guidance, is the primary AI compliance obligation for startups in the UK market. Proactive engagement with the ICO's guidance reduces enforcement risk.",
    source: "ICO — Guidance on AI and Data Protection (Official)",
    sourceUrl: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/"
  },

  // ── MENA ──────────────────────────────────────────────
  {
    id: 13,
    title: "UAE Personal Data Protection Law (PDPL)",
    jurisdiction: "mena",
    jurisdictionLabel: "MENA — UAE",
    theme: "data",
    themeLabel: "Data Governance & Cross-Border Flows",
    effectiveDate: "2 January 2022",
    summary: "UAE's federal personal data protection law governing data processing by organisations operating in or targeting residents of the UAE. Coexists with separate GDPR-aligned frameworks in the DIFC and ADGM free zones. The DIFC uniquely amended its regulations in 2023 to specifically regulate AI-related data processing (Regulation 10).",
    keyRequirements: "Lawful basis required for processing. Cross-border data transfers must meet conditions set by the UAE Data Office. Financial free zone companies (DIFC, ADGM) face separate obligations. UAE AI Charter (June 2024) sets 12 voluntary ethical principles including transparency and human oversight.",
    startupImplication: "Companies licensed in DIFC or ADGM face different (often stricter) obligations than those operating onshore. Startups should determine which regulatory perimeter applies before establishing UAE operations.",
    source: "Modulos — Middle East AI Compliance Guide",
    sourceUrl: "https://www.modulos.ai/middle-east-ai-regulations/"
  },
  {
    id: 14,
    title: "Saudi Arabia Personal Data Protection Law (PDPL)",
    jurisdiction: "mena",
    jurisdictionLabel: "MENA — Saudi Arabia",
    theme: "data",
    themeLabel: "Data Governance & Cross-Border Flows",
    effectiveDate: "Enforced 14 September 2024",
    summary: "One of the most comprehensive and sovereignty-driven data protection laws in MENA. Enforced by SDAIA — uniquely the same body responsible for Saudi Arabia's AI strategy. Imposes strict data localisation requirements and prior approval requirements for cross-border data transfers.",
    keyRequirements: "Personal data must generally remain within the Kingdom. Cross-border transfers require prior SDAIA approval under specific conditions. SDAIA is authorised to set governance standards and assess AI risks across data and AI domains as part of Vision 2030.",
    startupImplication: "Data localisation is the most significant operational constraint for AI startups in the Saudi market. Cloud infrastructure decisions must account for KSA residency requirements before deployment.",
    source: "Data Privacy Manager — MENA Data Protection Overview",
    sourceUrl: "https://dataprivacymanager.net/how-the-middle-east-is-defining-the-next-wave-of-data-privacy/"
  },

  // ── SOUTH & SOUTHEAST ASIA ────────────────────────────
  {
    id: 15,
    title: "Singapore PDPA + PDPC AI Advisory Guidelines",
    jurisdiction: "sea",
    jurisdictionLabel: "South & Southeast Asia — Singapore",
    theme: "data",
    themeLabel: "Data Governance & Cross-Border Flows",
    effectiveDate: "PDPA 2012 (amended 2024); AI Guidelines 1 March 2024",
    summary: "Singapore's Personal Data Protection Act (PDPA) governs personal data handling and applies throughout the AI lifecycle. The 2024 amendments add data processor obligations and enhanced breach notification. The PDPC's March 2024 Advisory Guidelines specifically address AI recommendation and decision systems.",
    keyRequirements: "Consent, notification, and accountability obligations apply to AI systems handling personal data. The Advisory Guidelines require a risk-based approach: higher-risk AI decisions require stronger transparency and governance. Cross-border transfers must meet binding transfer limitation obligations; ASEAN Model Contractual Clauses are recognised.",
    startupImplication: "Singapore is Southeast Asia's most developed compliance environment and a natural entry point for the region. PDPA compliance provides a strong foundation for expansion to other ASEAN markets.",
    source: "Chambers and Partners — Singapore Data Protection & Privacy 2026",
    sourceUrl: "https://practiceguides.chambers.com/practice-guides/data-protection-privacy-2026/singapore/trends-and-developments"
  },
  {
    id: 16,
    title: "Singapore Model AI Governance Framework",
    jurisdiction: "sea",
    jurisdictionLabel: "South & Southeast Asia — Singapore",
    theme: "transparency",
    themeLabel: "Algorithmic Transparency & Explainability",
    effectiveDate: "Updated January 2024 (GenAI & Agentic AI extensions)",
    summary: "Singapore's voluntary AI governance framework developed by IMDA, providing detailed guidance on accountability, human oversight, explainability, and operational governance. Updated in 2024 with Generative AI and Agentic AI extensions. The AI Verify Foundation provides testing and certification tools to demonstrate compliance.",
    keyRequirements: "Framework covers nine dimensions including accountability, data, trusted development, incident reporting, testing and assurance, security, content provenance, safety research, and AI for public good. Voluntary but increasingly expected by enterprise customers and sector regulators.",
    startupImplication: "Alignment with the Model AI Governance Framework is effectively expected for any startup seeking enterprise sales or government contracts in Singapore. It also maps to international frameworks (EU AI Act, NIST RMF), reducing the cost of multi-jurisdictional compliance.",
    source: "Pertama Partners — Singapore Model AI Governance Framework (2026)",
    sourceUrl: "https://www.pertamapartners.com/insights/singapore-model-ai-governance-framework-genai-agentic"
  },
  {
    id: 17,
    title: "ASEAN Guide on AI Governance and Ethics",
    jurisdiction: "sea",
    jurisdictionLabel: "South & Southeast Asia — ASEAN",
    theme: "transparency",
    themeLabel: "Algorithmic Transparency & Explainability",
    effectiveDate: "February 2024 (GenAI extension January 2025)",
    summary: "Regional voluntary AI governance guide for all 10 ASEAN member states. Provides a common framework for AI design, development, and deployment. Enhanced in January 2025 with a Generative AI guide. Draws heavily on Singapore's Model AI Governance Framework.",
    keyRequirements: "Nine governance dimensions: accountability, data, trusted development and deployment, incident reporting, testing and assurance, security, content provenance, safety and alignment R&D, and AI for public good. Explicitly light-touch and voluntary.",
    startupImplication: "Startups targeting multiple Southeast Asian markets simultaneously can use the ASEAN Guide as a regional baseline, reducing duplication of compliance work across member states.",
    source: "RPC Legal — AI Regulation in Asia: Part 4",
    sourceUrl: "https://www.rpclegal.com/thinking/artificial-intelligence/ai-guide/part-4-ai-regulation-in-asia/"
  },

  // ── AUSTRALIA & NEW ZEALAND ───────────────────────────
  {
    id: 18,
    title: "Australia — Privacy Act 2024 ADMT Transparency Obligations",
    jurisdiction: "anz",
    jurisdictionLabel: "Australia & New Zealand",
    theme: "transparency",
    themeLabel: "Algorithmic Transparency & Explainability",
    effectiveDate: "10 December 2026",
    summary: "The Privacy and Other Legislation Amendment Act 2024 introduces mandatory transparency obligations for Australian Privacy Principle (APP) entities that use substantially automated decision-making with personal information where the outcome could significantly affect individuals' rights or interests. This is Australia's most concrete step toward binding AI-specific requirements.",
    keyRequirements: "APP entities must disclose in their privacy policy when personal information is used in substantially automated decisions that significantly affect individuals (loan approvals, insurance pricing, hiring screening, etc.). Disclosures must be specific — generic statements are insufficient. Human oversight in the decision loop does not automatically exempt an organisation.",
    startupImplication: "Startups in Australia or with Australian customers should review their AI systems now and map which decisions are substantially automated. Privacy policies need updating before December 2026.",
    source: "Landers & Rogers — Australian Privacy Law Update 2026",
    sourceUrl: "https://landers.com.au/legal-insights-news/australian-privacy-law-update-what-app-entities-need-to-know-in-2026"
  },
  {
    id: 19,
    title: "New Zealand — Privacy Act 2020 AI Guidance",
    jurisdiction: "anz",
    jurisdictionLabel: "Australia & New Zealand",
    theme: "data",
    themeLabel: "Data Governance & Cross-Border Flows",
    effectiveDate: "OPC AI Guidance published 21 September 2023",
    summary: "New Zealand's Privacy Act 2020 and its 13 Information Privacy Principles (IPPs) apply to the full AI lifecycle. The Office of the Privacy Commissioner (OPC) published detailed AI guidance in September 2023 clarifying compliance expectations. New Zealand has adopted a 'light-touch, principles-based' AI strategy (2025), relying on existing laws rather than dedicated AI legislation.",
    keyRequirements: "Organisations using AI must: secure senior leadership approval; conduct Privacy Impact Assessments; carry out Algorithmic Impact Assessments (AIAs); be transparent with individuals about AI use; engage with Māori and affected communities; ensure human review for decisions affecting individuals.",
    startupImplication: "New Zealand's light-touch posture makes it one of the more accessible regulatory environments for AI startups. However, OPC enforcement is active — proactive compliance documentation is advisable.",
    source: "Regulations.AI — NZ OPC AI Guidance Overview",
    sourceUrl: "https://regulations.ai/regulations/RAI-NZ-NA-OPCGUXX-2023"
  }

]; // end of regulations array


/*
  ══════════════════════════════════════════════════════════════
  THEME LABEL MAPPING
  ══════════════════════════════════════════════════════════════
  A simple lookup object. Given a theme key (e.g. "data"),
  it returns the display label and CSS class.
  This saves us repeating the same if/else logic in multiple places.
*/
const themeConfig = {
  data:         { label: "Data Governance",       cssClass: "data" },
  transparency: { label: "Algorithmic Transparency", cssClass: "transparency" },
  licensing:    { label: "Licensing & Certification", cssClass: "licensing" }
};


/*
  ══════════════════════════════════════════════════════════════
  buildCard(regulation)
  ══════════════════════════════════════════════════════════════
  This function takes one regulation object and returns
  a string of HTML representing a card.

  Template literals (backtick strings) let us embed variables
  directly using ${variable} syntax — much cleaner than
  concatenating strings with + signs.
*/
function buildCard(reg) {
  const theme = themeConfig[reg.theme];
  return `
    <div class="reg-card" onclick="openModal(${reg.id})">
      <div class="card-top">
        <div class="card-title">${reg.title}</div>
        <div class="jurisdiction-tag">${reg.jurisdictionLabel}</div>
      </div>
      <div class="theme-tag ${theme.cssClass}">${theme.label}</div>
      <p class="card-summary">${reg.summary}</p>
      <div class="card-footer">
        <span class="effective-date">Effective: ${reg.effectiveDate}</span>
        <span class="card-cta">View details →</span>
      </div>
    </div>
  `;
}


/*
  ══════════════════════════════════════════════════════════════
  renderCards(list)
  ══════════════════════════════════════════════════════════════
  Takes an array of regulation objects and renders them into the page.

  document.getElementById() finds an HTML element by its id attribute.
  innerHTML sets the HTML content inside that element.
  We use .map() to transform each regulation into a card HTML string,
  then .join('') to combine all strings into one big string with no separator.
*/
function renderCards(list) {
  const grid = document.getElementById('results-grid');
  const emptyState = document.getElementById('empty-state');
  const countEl = document.getElementById('results-count');

  if (list.length === 0) {
    /*
      If no regulations match, hide the grid and show the empty state message.
      We set innerHTML to empty string to clear any previous cards.
    */
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    countEl.textContent = 'No regulations found';
  } else {
    emptyState.style.display = 'none';
    grid.innerHTML = list.map(buildCard).join('');
    /*
      Ternary operator: condition ? valueIfTrue : valueIfFalse
      This is a compact way to write a simple if/else.
    */
    countEl.textContent = `Showing ${list.length} regulation${list.length === 1 ? '' : 's'}`;
  }
}


/*
  ══════════════════════════════════════════════════════════════
  applyFilters()
  ══════════════════════════════════════════════════════════════
  Called when the user clicks the Search button.
  Reads the values from each filter, then uses .filter() to
  return only regulations that match ALL active filters.

  Array .filter() creates a new array containing only items
  where the callback function returns true.
*/
function applyFilters() {
  /*
    .value reads the currently selected option from a <select>
    or the typed text from an <input>.
    .toLowerCase() converts to lowercase so search is case-insensitive —
    "PIPL" and "pipl" both match.
    .trim() removes accidental leading/trailing spaces.
  */
  const jurisdiction = document.getElementById('jurisdiction-filter').value;
  const theme        = document.getElementById('theme-filter').value;
  const keyword      = document.getElementById('search-input').value.toLowerCase().trim();

  const filtered = regulations.filter(reg => {
    /*
      Each condition checks one filter.
      If the filter is empty (user selected "All"), the condition is true
      (meaning that filter doesn't exclude anything).
      All conditions must be true for a regulation to be included.
    */
    const matchJurisdiction = jurisdiction === '' || reg.jurisdiction === jurisdiction;
    const matchTheme        = theme === ''        || reg.theme === theme;

    /*
      For keyword search, we check if the keyword appears in any
      of the text fields. || means OR — the keyword just needs to
      appear in at least one field.
    */
    const matchKeyword = keyword === '' ||
      reg.title.toLowerCase().includes(keyword) ||
      reg.summary.toLowerCase().includes(keyword) ||
      reg.keyRequirements.toLowerCase().includes(keyword) ||
      reg.jurisdictionLabel.toLowerCase().includes(keyword);

    return matchJurisdiction && matchTheme && matchKeyword;
  });

  renderCards(filtered);
}


/*
  ══════════════════════════════════════════════════════════════
  clearFilters()
  ══════════════════════════════════════════════════════════════
  Resets all filters to their default empty state and re-renders all cards.
*/
function clearFilters() {
  document.getElementById('jurisdiction-filter').value = '';
  document.getElementById('theme-filter').value = '';
  document.getElementById('search-input').value = '';
  renderCards(regulations);
}


/*
  ══════════════════════════════════════════════════════════════
  openModal(id)
  ══════════════════════════════════════════════════════════════
  Called when a user clicks a regulation card.
  Finds the matching regulation by id, builds the detail HTML,
  injects it into the modal, and makes the modal visible.
*/
function openModal(id) {
  /*
    .find() searches an array and returns the FIRST item where
    the callback returns true. reg.id === id finds the right regulation.
  */
  const reg = regulations.find(r => r.id === id);
  if (!reg) return;   /* Safety check — if no match found, do nothing */

  const theme = themeConfig[reg.theme];

  /*
    We build the modal HTML using a template literal.
    Each section has a heading and content.
  */
  const html = `
    <div class="modal-jurisdiction">${reg.jurisdictionLabel}</div>
    <h2 class="modal-title">${reg.title}</h2>
    <div class="theme-tag ${theme.cssClass}" style="margin-bottom:20px">${theme.label}</div>

    <div class="modal-section">
      <h3>Overview</h3>
      <p>${reg.summary}</p>
    </div>

    <div class="modal-section">
      <h3>Key Requirements</h3>
      <p>${reg.keyRequirements}</p>
    </div>

    <div class="modal-section">
      <h3>Effective Date</h3>
      <p>${reg.effectiveDate}</p>
    </div>

    <div class="modal-section">
      <h3>Startup Implication</h3>
      <p>${reg.startupImplication}</p>
    </div>

    <a href="${reg.sourceUrl}" target="_blank" rel="noopener noreferrer" class="modal-link">
      View Primary Source: ${reg.source} ↗
    </a>
  `;

  document.getElementById('modal-content').innerHTML = html;

  /*
    Adding the 'active' class to the overlay triggers the CSS rule
    .modal-overlay.active { display: flex; } — making the modal visible.
    This is a common pattern: JavaScript adds/removes CSS classes,
    and CSS controls the visual result.
  */
  document.getElementById('modal-overlay').classList.add('active');

  /*
    Prevent the page behind from scrolling while the modal is open.
    We do this by setting overflow:hidden on the body.
  */
  document.body.style.overflow = 'hidden';
}


/*
  ══════════════════════════════════════════════════════════════
  closeModal()
  ══════════════════════════════════════════════════════════════
  Hides the modal and restores page scrolling.
*/
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';   /* Restore scrolling */
}


/*
  ══════════════════════════════════════════════════════════════
  KEYBOARD SUPPORT
  ══════════════════════════════════════════════════════════════
  Good accessibility practice: users should be able to close the
  modal by pressing Escape.

  document.addEventListener listens for events on the whole page.
  'keydown' fires whenever any key is pressed.
  e.key === 'Escape' checks if the pressed key was Escape.
*/
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

/*
  Allow pressing Enter in the search input to trigger the search —
  more intuitive than requiring a mouse click on the button.
*/
document.getElementById('search-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') applyFilters();
});


/*
  ══════════════════════════════════════════════════════════════
  INITIAL RENDER
  ══════════════════════════════════════════════════════════════
  This line runs when the page first loads.
  It calls renderCards with ALL regulations, so the user sees
  everything before applying any filters.

  This is the last line — it runs after all the functions above
  have been defined, so there's no risk of calling an undefined function.
*/
renderCards(regulations);