const countryMap = {
  china:        [{ value:"china",        label:"Mainland China" }],
  hongkong:     [{ value:"hongkong",     label:"Hong Kong SAR" }],
  northamerica: [{ value:"usa",          label:"United States" },
                 { value:"canada",       label:"Canada" }],
  eu:           [{ value:"eu_general",   label:"EU (General)" }],
  uk:           [{ value:"uk",           label:"United Kingdom" }],
  mena:         [{ value:"uae",          label:"United Arab Emirates" },
                 { value:"saudi_arabia", label:"Saudi Arabia" }],
  sea:          [{ value:"singapore",    label:"Singapore" },
                 { value:"india",        label:"India" }],
  anz:          [{ value:"australia",    label:"Australia" },
                 { value:"newzealand",   label:"New Zealand" }]
};

// ── TOPIC OVERVIEWS ──────────────────────────────────────────
const topicOverviews = {
  china_data: {
    title: "Data Governance — Mainland China",
    intro: "China uses a layered system of interlocking laws rather than a single statute. The PIPL, DSL, and Cybersecurity Law must all be read together — each addresses a different dimension of data governance.",
    keyPoints: [
      "Processing requires one of seven lawful bases — consent is one option, not the only one (Article 13, PIPL).",
      "Three-tier data classification: general / important / core state data. Obligations scale with the tier (Article 21, DSL).",
      "Automated decision-making must be transparent and fair; individuals have the right to an explanation and to opt out (Article 24, PIPL).",
      "A Personal Information Protection Impact Assessment is required before processing sensitive data or using AI for automated decisions (Article 55, PIPL).",
      "Providing data to foreign law enforcement without PRC approval is prohibited (Article 36, DSL)."
    ],
    note: "Penalties are tiered: minor violations attract fines of RMB 50,000–500,000; core state data violations can reach RMB 10,000,000 with possible licence revocation."
  },

  china_crossborder: {
    title: "Cross-Border Data Flows — Mainland China",
    intro: "China's cross-border data transfer regime is among the most restrictive globally. The PIPL, DSL, and Cybersecurity Law together form the statutory foundation. Every outbound transfer of personal information or important data must satisfy one of four conditions under PIPL Article 38. The Outbound Data Transfer Security Assessment Measures (effective September 2022) operationalise the most demanding of these conditions in procedural detail.",
    keyPoints: [
      "PIPL Article 38 sets four conditions for lawful cross-border transfer: (1) passing a CAC security assessment; (2) undergoing personal information protection certification by a specialised body; (3) concluding a standard contract with the foreign recipient; or (4) other conditions provided by law.",
      "PIPL Article 39: individuals must be separately notified and give separate consent before their data is transferred abroad — including the name of the foreign recipient and how to exercise rights with that recipient.",
      "PIPL Article 40: Critical Information Infrastructure Operators (CIIOs) and large-scale personal information handlers must store data domestically and pass a CAC security assessment before any outbound transfer.",
      "Security Assessment Measures, Article 4: a mandatory security assessment applies where important data is transferred abroad; a CIIO or handler of 1 million+ individuals provides personal data abroad; or any handler transfers personal data of 100,000+ people or sensitive data of 10,000+ people accumulated since 1 January of the previous year.",
      "DSL Article 31: important data collected by CIIOs follows the Cybersecurity Law for outbound security management. Other important data handlers must follow jointly formulated national measures.",
      "Security Assessment Measures, Article 14: approved assessments are valid for two years and must be renewed if the purpose, scope, method, or recipient country's security environment changes materially."
    ],
    note: "PIPL Article 41 prohibits providing China-stored personal information to foreign judicial or law enforcement bodies without PRC government approval. PIPL Article 43 contains a reciprocity clause — China may adopt countermeasures against countries that impose discriminatory restrictions on China in the area of personal information protection. PIPL Article 53 requires overseas handlers subject to PIPL to appoint a dedicated entity or representative within China."
  },

  china_transparency: {
    title: "Algorithmic Transparency & Explainability — Mainland China",
    intro: "China has built the world's most detailed stack of binding algorithmic transparency regulations. Rather than one horizontal AI law, China has issued successive instrument targeting different AI technologies — each adding specific disclosure, filing, and technical compliance obligations. The Cybersecurity Law, DSL, and PIPL form the statutory foundation on which all AI-specific regulations are built, meaning compliance failures can be pursued under multiple frameworks simultaneously.",
    keyPoints: [
      "The foundational statutes establish baseline obligations for internet information service providers and form the legal basis on which all AI-specific regulations are built. The PIPL additionally gives individuals specific rights around automated decision-making and requires transparency audits.",
      "The Algorithm Recommendation Provisions (2022) are the world's first binding regulation specifically targeting algorithmic systems — covering disclosure, opt-out rights, prohibited practices, and mandatory CAC filing.",
      "The Deep Synthesis Provisions (2023) govern deepfakes and synthetic media — requiring explicit labelling of all AI-generated content, consent where real persons are depicted, and a dedicated CAC registration track.",
      "The Generative AI Interim Measures (2023) made China the first country to implement binding generative AI regulations — requiring CAC service filing, disclosure obligations, and training data governance.",
      "The AI Content Labelling Measures + GB 45438-2025 (September 2025) are the most technically detailed instrument — mandating both visible labels and machine-readable metadata on all AI-generated content, with penalties up to RMB 15 million.",
      "Enforcement has intensified since 2025 through the CAC's Qinglang campaign — local regulators have imposed administrative penalties on AI services operating without completed filings."
    ],
    note: "China's GB 45438-2025 metadata schema is technically distinct from international standards such as C2PA and the EU AI Act's Article 50 marking requirements — meeting one does not satisfy the others. The PIPL, DSL, and Cybersecurity Law all share the same legal basis as the AI-specific regulations, so a single violation may be pursued under multiple statutory frameworks simultaneously."
  },

  china_licensing: {
    title: "Licensing & Certification — Mainland China",
    intro: "China's AI licensing system is fundamentally different from every other jurisdiction — filing is a precondition for market access, not a post-hoc regulatory formality. The CAC operates a two-tier system distinguishing between base model filings and application registrations. As of August 2025, the system had processed 538 base model filings and 263 application registrations. Beyond CAC filing, sector-specific regulators — particularly the NMPA for healthcare AI and financial sector regulators for fintech AI — impose additional parallel approval requirements.",
    keyPoints: [
      "Algorithm recommendation filing is mandatory for all Chinese enterprises providing internet services using algorithmic recommendation technology across five categories: generation and synthesis; personalised pushing; ranking and selection; retrieval and filtering; and dispatching and decision-making.",
      "Deep synthesis algorithms have a separate mandatory registration track under the Deep Synthesis Provisions — distinct from the general recommendation algorithm registry. The CAC published the first batch of filed deep synthesis algorithms in June 2023.",
      "Generative AI service filing is the most widely applicable requirement — 346 services had filed as of March 2025, including DeepSeek and Baidu Ernie Bot. Filed services must display their CAC filing number prominently in the product interface.",
      "Medical AI (Class II and III) requires NMPA registration before market placement, covering the full product lifecycle from algorithm design through clinical evaluation and post-market surveillance.",
      "Financial services AI faces parallel approval tracks: CAC algorithm filing for the AI system, plus sector-specific approval from the PBOC (banking), CSRC (securities), or NFRA (insurance).",
      "National standards create a de facto technical certification layer — GB 45438-2025 (AI content labelling), GB/T 43697-2024 (data classification), and TC260 cybersecurity standards all impose technical compliance obligations alongside regulatory filing."
    ],
    note: "The two-tier filing system means companies building on already-filed foundation models may qualify for the lighter application registration pathway rather than full base model filing. Filing is not a one-time event — registrations must be updated when AI systems change materially, and CAC filing numbers must be displayed prominently in all product interfaces."
  },

  hongkong_data: {
    title: "Data Governance — Hong Kong SAR",
    intro: "Hong Kong's data governance framework is anchored in the Personal Data (Privacy) Ordinance (PDPO), one of Asia's earliest comprehensive data privacy statutes. The PDPO operates entirely independently from Mainland China's PIPL under the 'One Country, Two Systems' framework — organisations operating on both sides of the boundary face dual, parallel compliance obligations with no automatic equivalence or passporting between the two regimes.",
    keyPoints: [
      "The PDPO regulates the collection, holding, processing, and use of personal data in Hong Kong through six Data Protection Principles (DPPs). Compliance is mandatory for all data users operating in Hong Kong.",
      "'Personal data' means information relating to a living individual that can be used to identify that individual, existing in a form that is practicable for access or processing.",
      "'Data user' controls the collection, holding, processing, or use of personal data. 'Data processor' processes data on behalf of a data user. Data processors are not directly regulated — but data users must, by contract or other means, ensure their processors meet PDPO requirements.",
      "Direct marketing requires informed consent: data users must notify data subjects of the intended use, the classes of data and marketing subjects involved, and the right to opt out. Transferring data to third parties for gain carries the heaviest penalties.",
      "The Privacy Commissioner may investigate suspected contraventions and issue enforcement notices. Contravening an enforcement notice carries a maximum fine of HK$50,000 and 2 years imprisonment, rising to HK$100,000 and 2 years on subsequent conviction.",
      "Data privacy must be balanced against other important rights — the PDPO is not absolute and must be read alongside other Hong Kong legislation and common law principles."
    ],
    note: "Unlike Mainland China's PIPL, the PDPO has no extraterritorial reach equivalent and Section 33 (which restricts cross-border data transfers) has not been brought into force. This makes Hong Kong's framework considerably more permissive than the mainland on outbound data flows. However, organisations should monitor developments as Section 33 may be activated in the future."
  },

  hongkong_crossborder: {
    title: "Cross-Border Data Flows — Hong Kong SAR",
    intro: "Hong Kong's cross-border data transfer position is strikingly different from Mainland China — and considerably more permissive. Section 33 of the PDPO, which would restrict outbound personal data transfers, has not been brought into force. There are currently no mandatory statutory restrictions on transferring personal data from Hong Kong to other jurisdictions. For HSITP organisations, the GBA Standard Contract is the most practically relevant instrument, providing a voluntary framework specifically for data flows between Hong Kong and Guangdong Province.",
    keyPoints: [
      "Section 33 of the PDPO prohibits cross-border data transfers except where specified conditions are met — but has not come into force. The Hong Kong government has deliberately held back Section 33 to preserve Hong Kong's competitiveness as an international business hub.",
      "Current position: Hong Kong imposes no blanket statutory restriction on transferring personal data offshore. The PCPD publishes voluntary Recommended Model Contractual Clauses (2014, updated 2022) as best practice guidance — but these are not legally required.",
      "Organisations must still meet the six Data Protection Principles (particularly DPP1 — transparency, and DPP4 — security) when transferring data abroad, even in the absence of Section 33.",
      "The GBA Standard Contract (joint CAC and Hong Kong ITIB, December 2023) is the most directly relevant instrument for HSITP — providing a voluntary framework for personal data flows between Hong Kong and the ten GBA cities, extended to all sectors from November 2024.",
      "Critical limitation: data transferred under the GBA Standard Contract cannot be onward-transferred beyond the GBA without separately complying with PIPL cross-border transfer requirements. The GBA Standard Contract does not replace or override the PDPO."
    ],
    note: "When Section 33 is eventually brought into force, a data user will generally be prohibited from transferring personal data outside Hong Kong unless: the destination jurisdiction provides a comparable level of protection; the data subject has given written consent; or the data user has taken reasonable precautions and exercised due diligence to ensure protection to PDPO standards. Organisations should design data transfer practices with Section 33 in mind even though it is not yet operative."
  },

  hongkong_transparency: {
    title: "Algorithmic Transparency & Explainability — Hong Kong SAR",
    intro: "Hong Kong's approach to algorithmic transparency is predominantly voluntary at the general level, with mandatory sector-specific requirements in financial services. There are currently no laws or regulations governing AI specifically — except for financial services, where the HKMA and SFC have issued binding guidance. The Secretary of Justice is working to establish an Inter-Departmental Working Group to review legislation supporting wider application of AI, signalling that binding frameworks are on the horizon.",
    keyPoints: [
      "No general AI transparency legislation exists in Hong Kong as of 2026. The PCPD conducts active compliance checks — 80% of 60 organisations surveyed in May 2025 reported using AI in daily operations.",
      "The PCPD Model AI Data Protection Framework (2024) is the primary cross-sector voluntary reference — targeting organisations procuring, implementing, and using AI systems involving personal data.",
      "The Digital Policy Office Generative AI Technical and Application Guidelines (2025) set five voluntary governance principles including security and transparency, explainable AI, and algorithm optimisation.",
      "For financial services, the HKMA's principles (2019, updated 2024) and Supervisory Policy Manual SB-1 (revised 2024) set mandatory model development, validation, monitoring, and explainability requirements for all authorised banks.",
      "The SFC AI Circular (November 2024) is binding for licensed corporations — requiring a written AI governance policy as part of the licence application for Type 1, 4, and 9 licences, and mandating human-readable explanations for Tier 1 algorithmic systems.",
      "The GenAI Sandbox++ (March 2026), jointly run by the HKMA, SFC, Insurance Authority, and MPFA, provides a supervised testing environment for AI deployment across the financial sector."
    ],
    note: "The contrast with Mainland China is significant — China has binding transparency obligations across all sectors through the Algorithm Recommendation Provisions, Generative AI Measures, and Content Labelling rules. Hong Kong's approach is deliberately lighter-touch, prioritising innovation while building sector-specific mandatory requirements over time."
  },

  eu_data: {
    title: "Data Governance — European Union",
    intro: "The EU has built the world's most comprehensive data governance ecosystem. The GDPR is the foundational layer — everything else either builds on it, interacts with it, or sits alongside it. Rather than a single statute, the EU operates an interlocking suite of regulations covering personal data (GDPR), data sharing intermediaries (DGA), IoT and connected product data (Data Act), cookies and communications (ePrivacy Directive), large platform obligations (DMA and DSA), and AI-specific requirements (AI Act). GDPR compliance must function as embedded, risk-based governance infrastructure — not a checklist.",
    keyPoints: [
      "The GDPR (2018) is the foundation — governing collection, processing, storage, and transfer of personal data of EU residents. Applies extraterritorially to any organisation handling EU residents' data, regardless of where the organisation is based.",
      "The Data Governance Act (DGA, September 2023) governs data sharing intermediaries — organisations that facilitate the exchange of data between data holders and data users. Requires structural separation, neutrality, and mandatory notification to national authorities.",
      "The Data Act (Regulation (EU) 2023/2854) governs access to data generated by connected products and services (IoT). Data access and cloud switching rights have applied since 12 September 2025; full scope applies from 12 September 2027.",
      "The ePrivacy Directive (2002/58/EC) governs cookies, electronic communications, and online tracking — a specific layer on top of the GDPR for digital communications. Currently being reformed; the 2025 Digital Omnibus proposal may move cookie consent rules into the GDPR.",
      "The Digital Markets Act (DMA) targets designated gatekeeper platforms — imposing data access, interoperability, and anti-self-preferencing obligations. The Digital Services Act (DSA) governs online platforms on content moderation, transparency, and algorithmic accountability.",
      "The AI Act (Regulation (EU) 2024/1689) adds AI-specific data governance obligations for high-risk AI systems, including training data documentation requirements and data quality standards."
    ],
    note: "The EU data governance ecosystem is not static — the Digital Omnibus proposal (November 2025) is actively seeking to simplify overlapping obligations across the GDPR, AI Act, and ePrivacy rules. Organisations should monitor this process as it may reduce compliance complexity across the suite of instruments."
  },

  hongkong_licensing: {
    title: "Licensing & Certification — Hong Kong SAR",
    intro: "Hong Kong currently has no dedicated general AI licensing or pre-market approval regime. Unlike Mainland China's mandatory CAC algorithm filing, there is no precondition for market access specific to AI. Companies primarily need to comply with the PDPO and any applicable sector regulation. However, financial services is an increasingly mandatory environment — and the SFC's requirement for a written AI governance policy as part of the licence application process is effectively a de facto AI licensing requirement for financial firms.",
    keyPoints: [
      "No general AI licensing regime exists. No pre-market approval is required for AI products in Hong Kong outside of regulated sectors — in direct contrast to Mainland China's mandatory CAC filing system.",
      "Financial services is the most developed sector: the SFC requires a written AI governance policy as part of Type 1, 4, and 9 licence applications. The HKMA and FSTB have issued mandatory and advisory frameworks respectively.",
      "The FSTB Policy Statement on Responsible AI in the Financial Market (October 2024) sets the government's dual-track policy approach — promoting AI adoption while requiring risk-based governance.",
      "The GenAI Sandbox++ (March 2026) provides a supervised testing environment across the financial sector — a soft licensing mechanism allowing institutions to test AI use cases before wider deployment.",
      "Healthcare AI is subject to the voluntary Medical Devices Administrative Control System (MDACS) and professional licensing under the Medical Registration Ordinance — no NMPA-equivalent mandatory registration exists.",
      "The Insurance Authority indicated in August 2025 that mandatory AI guidelines for insurers will be issued in 2026. A Steering Committee was convened in March 2026 to review AI legislation more broadly."
    ],
    note: "Binding horizontal AI legislation remains on the horizon rather than imminent. Organisations should monitor the Inter-Departmental Working Group's recommendations as these are likely to shape Hong Kong's first dedicated AI legal framework."
  }
};

// ── REGULATIONS ──────────────────────────────────────────────
const regulations = [
  {
    id: 1,
    title: "Personal Information Protection Law",
    shortName: "PIPL",
    region: "china", country: "china",
    regionLabel: "Mainland China", countryLabel: "Mainland China",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "1 November 2021",
    overview: "China's first comprehensive national personal information protection law. Governs the collection, storage, use, processing, and transfer of personal information of individuals in China. Has extraterritorial reach — foreign organisations handling data of persons in China must comply.",
    keyArticles: [
      { ref: "Article 4",      text: "Personal information does not include anonymised information. Anonymisation means it is impossible to identify or restore a specific individual — anonymised data falls outside the law's scope entirely." },
      { ref: "Article 13",     text: "Seven lawful bases for processing personal information: (1) individual consent; (2) contractual or HR necessity; (3) statutory duties or obligations; (4) public health emergencies or protection of life and property; (5) public interest news reporting or media supervision; (6) lawfully disclosed personal information of the individual; (7) other circumstances provided by law or administrative regulations." },
      { ref: "Articles 14–16", text: "Consent rules: consent must be voluntary, explicit, and fully informed (Art. 14). Individuals may withdraw consent at any time via convenient mechanisms — withdrawal does not invalidate prior processing (Art. 15). Processors cannot refuse to provide products or services solely because an individual withholds or withdraws consent (Art. 16)." },
      { ref: "Article 17",     text: "Before processing, individuals must be informed in clear, easy-to-understand language of: the processor's name and contact; the purpose, means, categories, and storage periods of processing; and how to exercise their rights." },
      { ref: "Article 19",     text: "Storage periods must be the minimum necessary to fulfil the processing purpose, unless otherwise required by law or regulation." },
      { ref: "Article 24",     text: "Automated decision-making using personal information must be transparent, fair, and impartial. Individuals may request an explanation of any automated decision and may refuse automated decisions in transactions affecting their rights and interests." },
      { ref: "Article 31",     text: "Processing personal information of minors under 14 requires the consent of a parent or legal guardian." },
      { ref: "Article 52",     text: "Organisations handling personal information above the volume threshold set by the national cyberspace authority must appoint a Personal Information Protection Officer (PIPO) responsible for supervising handling activities and protection measures. Contact details must be disclosed publicly." },
      { ref: "Article 55",     text: "A Personal Information Protection Impact Assessment must be conducted before: handling sensitive personal information; using personal information for automated decision-making; sharing or entrusting personal information to others; transferring personal information abroad; or any other handling activity with major influence on individuals." },
      { ref: "Articles 66–71", text: "Legal liability: violations can result in fines of up to RMB 50,000,000 or 5% of annual turnover for serious cases; possible suspension of business or revocation of licences. Responsible individuals may also face personal fines." }
    ],
    source: "DigiChina / Stanford — English & Chinese Bilingual Translation",
    sourceUrl: "https://digichina.stanford.edu/work/translation-personal-information-protection-law-of-the-peoples-republic-of-china-effective-nov-1-2021/",
    secondaryUrl: "https://www.chinalawtranslate.com/en/personal-information-protection-law/",
    sources: [
      { label: "DigiChina / Stanford — English & Chinese Bilingual Translation", url: "https://digichina.stanford.edu/work/translation-personal-information-protection-law-of-the-peoples-republic-of-china-effective-nov-1-2021/" },
      { label: "China Law Translate — English Translation", url: "https://www.chinalawtranslate.com/en/personal-information-protection-law/" }
    ]
  },
  {
    id: 2,
    title: "Data Security Law",
    shortName: "DSL",
    region: "china", country: "china",
    regionLabel: "Mainland China", countryLabel: "Mainland China",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "1 September 2021",
    overview: "A national security-oriented data law complementing the PIPL. Establishes a three-tier data classification system and imposes security obligations scaled to the sensitivity of the data. Primarily addresses the national security and economic dimensions of data governance rather than individual privacy rights.",
    keyArticles: [
      { ref: "Article 3",       text: "Core definitions: 'data' means any information recorded in electronic or other form. 'Data handling' includes collection, storage, use, processing, transmission, provision, and disclosure. 'Data security' means ensuring data is in a state of effective protection and lawful use through necessary measures." },
      { ref: "Article 21",      text: "Establishes the three-tier data classification system. General data: standard protections. Important data: must be catalogued by each region and sector; periodic risk assessments required. Core state data: strictest controls — data related to national security, the national economy, people's livelihoods, and major public interests. Each region and sector must compile a specific catalogue of important data." },
      { ref: "Article 27",      text: "General security obligations: all organisations carrying out data handling must establish data security management systems covering the entire process, organise data security education and training, and employ appropriate technical measures. Those processing important data must clearly designate persons responsible for data security and establish dedicated data security management bodies." },
      { ref: "Article 30",      text: "Organisations handling important data must periodically conduct risk assessments of their data handling activities and submit reports to the relevant regulatory departments. Reports must cover: the type and amount of important data handled, the handling circumstances, the data security risks faced, and the measures taken to address them." },
      { ref: "Article 32",      text: "Data collection must use lawful and proper methods. Organisations must not steal or otherwise obtain data through illegal means. Where laws or regulations specify the purpose or scope of data collection and use, data must be collected and used only within that purpose and scope." },
      { ref: "Article 33",      text: "Data transaction intermediaries must: require the data-providing party to explain the source of the data; verify the identities of both parties to the transaction; and retain verification and transaction records. This applies to any institution providing data brokerage or marketplace services." },
      { ref: "Article 36",      text: "Organisations must not provide data stored within China to foreign judicial or law enforcement bodies without approval from the competent Chinese authorities. This applies regardless of how the request is framed — including through contractual obligations with foreign parties." },
      { ref: "Article 45 — General violations", text: "Failure to meet data security obligations (Articles 27, 29, 30): warnings and fines of RMB 50,000–500,000 for organisations; RMB 10,000–100,000 for responsible individuals. Refusal to correct or serious consequences such as large-scale data leaks: fines of RMB 500,000–2,000,000, and possible suspension of operations or licence revocation." },
      { ref: "Article 45 — Core state data", text: "Violations that endanger national sovereignty, security, or development interests: fines of RMB 2,000,000–10,000,000; possible suspension of operations and licence revocation. Where a crime is constituted, criminal liability is pursued." },
      { ref: "Article 48",      text: "Providing data stored in China to foreign judicial or law enforcement bodies without authorisation: fines of RMB 100,000–1,000,000 for organisations; RMB 10,000–100,000 for responsible individuals. Serious cases: fines of RMB 1,000,000–5,000,000, possible suspension of operations, and licence revocation." }
    ],
    sources: [
      { label: "DigiChina / Stanford — English Translation", url: "https://digichina.stanford.edu/work/translation-data-security-law-of-the-peoples-republic-of-china/" },
      { label: "China Law Translate — English Translation", url: "https://www.chinalawtranslate.com/en/datasecuritylaw/" }
    ]
  },
  {
    id: 3,
    title: "Cybersecurity Law",
    shortName: "CSL",
    region: "china", country: "china",
    regionLabel: "Mainland China", countryLabel: "Mainland China",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "1 June 2017",
    overview: "The foundational network security law underpinning China's entire data governance framework. Establishes the Multi-Level Protection System (MLPS) for cybersecurity, creates obligations for Critical Information Infrastructure Operators (CIIOs), and forms the legal basis on which the PIPL, DSL, and all AI-specific regulations were subsequently built.",
    keyArticles: [
      { ref: "Article 10",    text: "Network operators must comply with mandatory cybersecurity standards and take technical measures to protect networks from data theft, leakage, or destruction." },
      { ref: "Article 21",    text: "Establishes the Multi-Level Protection System (MLPS). Organisations must classify their network infrastructure at the appropriate security level and implement corresponding protections." },
      { ref: "Article 37",    text: "Critical Information Infrastructure Operators (CIIOs) must store personal information and important data collected within China domestically. Overseas provision requires a security assessment — the origin of China's data localisation obligation." },
      { ref: "Articles 40–44",text: "Network operators must keep user data strictly confidential, must not sell or unlawfully disclose personal information, and must take immediate remediation when personal information is leaked, damaged, or lost." }
    ],
    sources: [
      { label: "DigiChina / Stanford — English Translation", url: "https://digichina.stanford.edu/work/translation-cybersecurity-law-of-the-peoples-republic-of-china-effective-june-1-2017/" },
      { label: "China Law Translate — English Translation", url: "https://www.chinalawtranslate.com/en/2017-cybersecurity-law/" }
    ]
  },

  // ── CHINA — CROSS-BORDER DATA FLOWS ──────────────────────
  {
    id: 4,
    title: "PIPL — Cross-Border Transfer Provisions",
    shortName: "PIPL Arts. 38–43",
    region: "china", country: "china",
    regionLabel: "Mainland China", countryLabel: "Mainland China",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "1 November 2021",
    overview: "Articles 38–43 of the PIPL establish the core legal framework for cross-border transfers of personal information out of China. They set four permitted pathways, require separate individual consent, impose domestic storage obligations on large-scale handlers, and restrict disclosure to foreign law enforcement without PRC approval.",
    keyArticles: [
      { ref: "Article 38 — Four pathways", text: "Personal information may only be transferred abroad if the handler meets one of four conditions: (1) passes a CAC security assessment; (2) undergoes personal information protection certification by a specialised body; (3) concludes a standard contract with the foreign recipient as formulated by the State cyberspace authority; or (4) satisfies other conditions provided by laws, regulations, or the State cyberspace authority. The handler must also take necessary measures to ensure the foreign recipient meets China's personal information protection standards." },
      { ref: "Article 39 — Individual consent", text: "Before transferring personal information abroad, handlers must inform individuals of: the name and contact details of the foreign recipient; the purpose, method, and categories of data to be processed; how individuals can exercise their rights with the foreign recipient; and other relevant matters. Separate consent must be obtained from the individual." },
      { ref: "Article 40 — Domestic storage & security assessment", text: "Critical Information Infrastructure Operators (CIIOs) and handlers of personal information above the CAC volume threshold must store all personal information collected and produced within China domestically. Any provision abroad requires passing a CAC security assessment, unless laws or regulations provide otherwise." },
      { ref: "Article 41 — Foreign law enforcement", text: "Chinese competent authorities must handle foreign judicial or law enforcement requests for China-stored personal information according to applicable laws and treaties. Without approval from Chinese competent authorities, handlers may not provide China-stored personal information to foreign judicial or law enforcement bodies." },
      { ref: "Article 42 — Blacklist", text: "Where foreign organisations or individuals engage in personal information handling activities that violate the rights and interests of Chinese citizens or harm China's national security or public interest, the national cyberspace authority may place them on a list limiting or prohibiting the provision of personal information to them." },
      { ref: "Article 43 — Reciprocity", text: "Where any country or region adopts discriminatory prohibitions, limitations, or other similar measures against China in the area of personal information protection, China may adopt reciprocal countermeasures against that country or region based on actual circumstances." },
      { ref: "Article 53 — Overseas handler representative", text: "Personal information handlers located outside China but subject to the PIPL (under Article 3, Paragraph 2) must establish a dedicated entity or appoint a representative within China to be responsible for personal information handling matters, and must report that entity's or representative's name and contact details to the relevant regulatory departments." }
    ],
    sources: [
      { label: "DigiChina / Stanford — PIPL English & Chinese Bilingual Translation", url: "https://digichina.stanford.edu/work/translation-personal-information-protection-law-of-the-peoples-republic-of-china-effective-nov-1-2021/" },
      { label: "China Law Translate — English Translation", url: "https://www.chinalawtranslate.com/en/personal-information-protection-law/" }
    ]
  },
  {
    id: 5,
    title: "DSL — Cross-Border Transfer of Important Data",
    shortName: "DSL Art. 31 & 46",
    region: "china", country: "china",
    regionLabel: "Mainland China", countryLabel: "Mainland China",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "1 September 2021",
    overview: "Chapter IV of the DSL governs the outbound transfer of important data — a category distinct from personal information and defined by its potential to harm national security, economic operations, or social stability. Article 31 sets the framework; Article 46 establishes the penalty for violations.",
    keyArticles: [
      { ref: "Article 31 — Important data outbound management", text: "For Critical Information Infrastructure Operators (CIIOs): the outbound security management of important data collected or produced within China follows the Cybersecurity Law. For all other data handlers: outbound security management measures for important data are to be jointly formulated by the national cybersecurity and informatization department and relevant State Council departments." },
      { ref: "Article 46 — Penalty for unlawful outbound transfer", text: "Where important data is provided abroad in violation of Article 31: relevant departments are to order corrections and issue a warning; a fine of RMB 100,000–1,000,000 may be imposed; suspension of operations, suspension for rectification, or revocation of business permits or licences may be ordered; directly responsible individuals are to be fined RMB 100,000–1,000,000." },
      { ref: "Article 19 (Security Assessment Measures) — Definition of important data", text: "Important data means data that, if altered, destroyed, leaked, illegally acquired, or illegally used, may harm national security, economic operations, social stability, public health, or public safety." }
    ],
    sources: [
      { label: "DigiChina / Stanford — DSL English Translation", url: "https://digichina.stanford.edu/work/translation-data-security-law-of-the-peoples-republic-of-china/" },
      { label: "China Law Translate — English Translation", url: "https://www.chinalawtranslate.com/en/datasecuritylaw/" }
    ]
  },
  {
    id: 6,
    title: "Outbound Data Transfer Security Assessment Measures",
    shortName: "Security Assessment Measures",
    region: "china", country: "china",
    regionLabel: "Mainland China", countryLabel: "Mainland China",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "1 September 2022",
    overview: "The primary operational regulation governing Pathway 1 cross-border data transfers under the PIPL. Sets out exactly when a mandatory CAC security assessment is required, what materials must be submitted, what factors the CAC assesses, what the legal contract with the foreign recipient must contain, and how long an approved assessment remains valid.",
    keyArticles: [
      { ref: "Article 4 — When assessment is mandatory", text: "A security assessment must be applied for through the provincial CAC where: important data is transferred abroad; a CIIO or handler of personal information of more than 1 million people provides personal information abroad; any handler has transferred personal information of more than 100,000 people or sensitive personal information of more than 10,000 people since 1 January of the previous year; or the national cyberspace authority otherwise requires it." },
      { ref: "Article 5 — Prior self-assessment", text: "Before applying, the data handler must conduct a risk self-assessment covering: the legality, propriety, and necessity of the transfer; the scale, scope, categories, and sensitivity of the data; the security capabilities of the foreign recipient; the risk of leakage, loss, illegal acquisition, or misuse during and after transfer; and whether the planned legal document fully stipulates data security responsibilities." },
      { ref: "Article 6 — Application materials", text: "The application must include: (1) an application letter; (2) the outbound data transfer risk self-assessment report; and (3) the legal document intended to be concluded between the handler and the foreign recipient." },
      { ref: "Article 8 — Assessment criteria", text: "The CAC assesses: the legality and necessity of the transfer; the data security legal environment in the recipient country; the scale, scope, and sensitivity of the data; the risk of alteration, destruction, leak, loss, or illegal use; whether data security and individual rights are adequately protected; and compliance with Chinese laws and regulations." },
      { ref: "Article 9 — Required contract contents", text: "The legal document with the foreign recipient must include: the purpose, method, and scope of the transfer; storage location and time limit abroad; how data will be handled when the agreement ends; restrictions on the foreign recipient retransferring data to third parties; security measures if the recipient's control or security environment changes; and remedial measures and dispute settlement terms for data security breaches." },
      { ref: "Article 7 — Acceptance notification", text: "Once application materials are received, the national cyberspace authority must notify the data handler in writing within seven days whether the application has been accepted or not." },
      { ref: "Article 12 — Assessment timeline", text: "The CAC must complete the security assessment within 45 working days from the date of the written acceptance notice. If the data handler objects to the outcome, they may request reconsideration within 15 working days — the reconsideration outcome is final." },
      { ref: "Article 14 — Validity and renewal", text: "An approved assessment is valid for two years from the date of the outcome. Re-application is required if: the purpose, method, scope, or category of transfer changes; the recipient country's data security environment or the recipient's control changes materially; the legal document is changed; or the validity period expires and transfer activities are to continue (re-application must be made 60 working days before expiry)." },
      { ref: "Article 15 — Confidentiality obligations", text: "Relevant agencies and personnel involved in the security assessment must not leak or illegally provide to others any state secrets, personal information, commercial secrets, or other confidential information obtained in the course of their work." },
      { ref: "Article 17 — Revocation of approval", text: "If the national cyberspace authority determines that, in actual practice, an outbound data transfer activity that has passed assessment no longer meets security management requirements, it may notify the data handler in writing to terminate the outbound transfer. If the handler needs to continue transfers, they must make corrections and re-apply for assessment after corrections are complete." }
    ],
    sources: [
      { label: "DigiChina / Stanford — Outbound Data Transfer Security Assessment Measures (English Translation)", url: "https://digichina.stanford.edu/work/translation-online-data-security-management-regulations-draft-for-comment-nov-2021/" },
      { label: "DLA Piper — China Data Protection Overview (Secondary Commentary)", url: "https://www.dlapiperdataprotection.com/index.html?c=CN" }
    ]
  },

  // ── CHINA — ALGORITHMIC TRANSPARENCY ─────────────────────
  {
    id: 7,
    title: "PIPL — Transparency & Accountability Provisions",
    shortName: "PIPL Arts. 45, 54–58",
    region: "china", country: "china",
    regionLabel: "Mainland China", countryLabel: "Mainland China",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "1 November 2021",
    overview: "Beyond its core data governance role, the PIPL contains specific transparency and accountability obligations directly relevant to AI systems. These include individual rights to access and explanation, mandatory compliance audits, detailed impact assessment requirements, breach notification rules, and heightened obligations for large platform operators.",
    keyArticles: [
      { ref: "Article 24",   text: "Automated decision-making using personal information must be transparent, fair, and impartial. Individuals may request an explanation of any automated decision affecting their rights and interests, and may refuse automated decisions in the context of transactions." },
      { ref: "Article 45",   text: "Individuals have the right to consult and copy their personal information from personal information handlers, except where restricted by Article 18 (confidentiality) or Article 35 (law enforcement). This creates a right of access that supports transparency about how personal data feeds into AI systems." },
      { ref: "Article 54",   text: "Personal information handlers shall regularly conduct compliance audits of their personal information handling activities — similar in spirit to the EU GDPR's accountability principle. Audit findings must verify compliance with applicable laws and regulations." },
      { ref: "Article 56",   text: "Personal Information Protection Impact Assessment reports must address: (1) whether the handling purpose, method, etc. are lawful, legitimate, and necessary; (2) the influence on individuals' rights and interests and the security risks; and (3) whether protective measures are legal, effective, and proportionate to the degree of risk. Reports and records must be preserved for at least three years." },
      { ref: "Article 57",   text: "Where a personal information leak, distortion, or loss occurs or may have occurred, handlers must immediately adopt remedial measures and notify both the regulatory authorities and the affected individuals. Notifications must include: the categories, causes, and possible harm of the incident; the remedial measures taken; and the handler's contact details." },
      { ref: "Article 58",   text: "Personal information handlers providing important internet platform services with large user bases and complex business models must: establish independent compliance oversight bodies with external members; formulate platform rules on intra-platform personal information handling; stop providing services to platform participants that seriously violate personal information laws; and regularly publish personal information protection social responsibility reports." }
    ],
    sources: [
      { label: "DigiChina / Stanford — PIPL English & Chinese Bilingual Translation", url: "https://digichina.stanford.edu/work/translation-personal-information-protection-law-of-the-peoples-republic-of-china-effective-nov-1-2021/" },
      { label: "China Law Translate — English Translation", url: "https://www.chinalawtranslate.com/en/personal-information-protection-law/" }
    ]
  },
  {
    id: 8,
    title: "Provisions on the Administration of Algorithmic Recommendations",
    shortName: "Algorithm Recommendation Provisions",
    region: "china", country: "china",
    regionLabel: "Mainland China", countryLabel: "Mainland China",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "1 March 2022",
    overview: "The world's first binding regulation specifically targeting algorithmic systems. Applies to internet information service providers using recommendation algorithms in China. Imposes disclosure obligations, user rights, prohibited practices, content labelling requirements, and a mandatory CAC algorithm filing system for services with public opinion or social mobilisation attributes. Legal basis draws simultaneously on the Cybersecurity Law, DSL, PIPL, and Internet Information Services Measures — meaning violations can be pursued under multiple frameworks.",
    keyArticles: [
      { ref: "Article 16 — Disclosure obligation", text: "Algorithmic recommendation service providers must publicly disclose the basic principles, purposes, and main operating mechanisms of their recommendation algorithms in an appropriate and accessible manner. Disclosures must cover the algorithm process, data inputs, models, and intervention strategies, as well as risk assessment information." },
      { ref: "User opt-out rights",                text: "Users must be informed that they are subject to algorithmic recommendations. Providers must give users the option to turn off personalised recommendations and to turn off targeted push notifications. Where personalised recommendations are turned off, non-personalised alternatives must be offered." },
      { ref: "Prohibited practices",               text: "Providers must not use algorithms to: exploit users through addictive design or compulsive consumption mechanisms; engage in price discrimination against users based on their behaviour or characteristics; manipulate rankings or search results unfairly; or create or spread disinformation." },
      { ref: "Content labelling",                  text: "Algorithmically recommended content must be clearly labelled so users can distinguish it from organic (non-recommended) content." },
      { ref: "Mandatory CAC filing",               text: "Providers of services with 'public opinion attributes or social mobilisation capability' must complete algorithm filing (registration) with the CAC through local cyberspace authorities. Filing covers five algorithm categories: generation and synthesis technology; personalised pushing technology; ranking and selection technology; retrieval and filtering technology; and dispatching and decision-making technology." }
    ],
    sources: [
      { label: "CAC — Official Chinese Text (网信办官方原文)", url: "https://www.cac.gov.cn/2022-01/04/c_1642894606364259.htm" },
      { label: "China Law Translate — English Translation", url: "https://www.chinalawtranslate.com/en/algorithms/" }
    ]
  },
  {
    id: 9,
    title: "Administrative Provisions on Deep Synthesis in Internet Information Services",
    shortName: "Deep Synthesis Provisions",
    region: "china", country: "china",
    regionLabel: "Mainland China", countryLabel: "Mainland China",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "10 January 2023",
    overview: "Governs deep synthesis technology — any technology using deep learning, virtual reality, or other generative and synthetic algorithms to produce text, images, audio, video, virtual scenes, or other network information. Introduces labelling requirements, consent obligations for content involving real persons, a dedicated CAC algorithm registration track for deepfake technologies, and secondary platform obligations for distribution.",
    keyArticles: [
      { ref: "Explicit labelling",                 text: "Service providers must clearly label all deep synthesis content so users can identify it as artificially generated. Labels must appear in a prominent and accessible manner." },
      { ref: "Implicit labelling",                 text: "Providers of deep synthesis tools must add detectable implicit labels (machine-readable metadata or watermarks) to all generated content, in addition to visible labels." },
      { ref: "Consent for real persons",           text: "Where deep synthesis content involves a real, identifiable person — including their likeness, voice, or other biometric characteristics — the provider must obtain that person's separate consent before producing and distributing the content. The content must also be clearly marked." },
      { ref: "CAC algorithm filing",               text: "Providers of deep synthesis services must register their algorithms with the CAC under a dedicated registration track — distinct from the recommendation algorithm registry established under the 2022 Algorithm Recommendation Provisions. The CAC published the first batch of filed deep synthesis algorithms in June 2023." },
      { ref: "Prohibition on disinformation",      text: "Providers must not use deep synthesis technology to produce or disseminate fake news, false information, or other content that violates laws or regulations." },
      { ref: "Platform obligations",               text: "Platforms distributing deep synthesis content bear secondary obligations: they must implement mechanisms to detect unlabelled AI-generated content, display labels where detected, and where necessary remove content that does not comply with labelling requirements." }
    ],
    sources: [
      { label: "CAC — Official Chinese Text (网信办官方原文)", url: "https://www.cac.gov.cn/2022-12/11/c_1672221949354811.htm" },
      { label: "China Law Translate — English Translation", url: "https://www.chinalawtranslate.com/en/deep-synthesis/" }
    ]
  },
  {
    id: 10,
    title: "Interim Measures for the Management of Generative AI Services",
    shortName: "Generative AI Interim Measures",
    region: "china", country: "china",
    regionLabel: "Mainland China", countryLabel: "Mainland China",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "15 August 2023",
    overview: "China's first binding regulation on generative AI — and among the earliest globally. Jointly issued by 7 ministries. Applies to providers of generative AI services (text, image, audio, video) offered to the public in China. Makes China the first country in the world to implement binding generative AI regulations. As of April 2025, 346 generative AI services had completed the CAC filing process.",
    keyArticles: [
      { ref: "Disclosure to users",                text: "Providers must clearly indicate to users when content is generated by AI. AI-generated content must be identifiable as artificial — providers must display model names and CAC filing numbers prominently in the service interface." },
      { ref: "Transparency to regulators",         text: "Training data sources and algorithmic mechanisms must be explained to regulators on request. Providers must cooperate with security assessments and provide technical details about model architecture and training data when required." },
      { ref: "CAC service filing",                 text: "Services with 'public opinion attributes or social mobilisation capability' must complete CAC service filing before or shortly after public deployment. This is a precondition for market access for most consumer-facing generative AI products in China." },
      { ref: "Training data governance",           text: "Providers must use legitimate training data sources, respect copyright and personal information rights, and take measures to improve data quality. Training data must not contain content that violates Chinese law." },
      { ref: "Content safety",                     text: "Generated content must not violate Chinese law or core socialist values. Providers must establish content review mechanisms and promptly correct or remove non-compliant AI-generated content." },
      { ref: "Pre-launch security assessments",    text: "Providers must conduct security assessments before launching generative AI services publicly. The scope and methodology of these assessments must meet requirements set by the relevant regulatory authorities." }
    ],
    sources: [
      { label: "CAC — Official Chinese Text (网信办官方原文)", url: "https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm" },
      { label: "China Law Translate — English Translation", url: "https://www.chinalawtranslate.com/en/generative-ai-interim/" }
    ]
  },
  {
    id: 11,
    title: "Measures for Labelling AI-Generated Synthetic Content + GB 45438-2025",
    shortName: "AI Content Labelling Measures",
    region: "china", country: "china",
    regionLabel: "Mainland China", countryLabel: "Mainland China",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "1 September 2025",
    overview: "The most technically detailed AI transparency instrument China has issued. Jointly issued by the CAC, MIIT, MPS, and NRTA. Mandates both explicit visible labels and implicit machine-readable metadata on all AI-generated or AI-synthesised content — text, images, audio, video, and virtual scenes. The accompanying mandatory national standard GB 45438-2025 is the first mandatory AI national standard in China's history.",
    keyArticles: [
      { ref: "Scope — four obligation holders",    text: "The Measures impose obligations on four types of entities: AI content generation service providers; internet information content propagation service providers; app distribution platforms; and users who upload AI-generated content to platforms." },
      { ref: "Explicit labels (visible)",          text: "Visible labels such as 'AI生成' ('AI-Generated') must appear at the start, end, or appropriate position in content. Labels must be prominent and easily noticeable to users." },
      { ref: "Implicit labels (machine-readable)", text: "Machine-readable metadata must be embedded in the file, including: the type of synthesised content; the service provider's name or identifying code; and a content identification number. Watermarks must be embedded where technically feasible." },
      { ref: "Platform obligations",               text: "Distribution platforms must implement automated verification mechanisms to detect implicit metadata labels on AI-generated content uploaded by users, and must display explicit labels for all such content." },
      { ref: "GB 45438-2025 technical standard",   text: "The mandatory national standard specifies: watermark dimensions and positioning; metadata fields (provider code, content ID, generation timestamp); and labelling methods for each content type (text, image, audio, video). This is the first mandatory AI national standard in China." },
      { ref: "Penalties",                          text: "Fines of up to RMB 15 million or 5% of annual turnover for violations — among the highest penalties in China's AI regulatory framework. Note: China's GB 45438-2025 schema is technically distinct from C2PA and EU AI Act Article 50 requirements — compliance with one does not satisfy the others." }
    ],
    sources: [
      { label: "CAC — Labelling Measures Official Chinese Text (网信办官方原文)", url: "https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm" },
      { label: "China Law Translate — Labelling Measures English Translation", url: "https://www.chinalawtranslate.com/en/ai-labeling/" },
      { label: "SAC/SAMR — GB 45438-2025 Official Standard Record (Chinese)", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=F32EA2A561F1886CD8D606513512D547" },
      { label: "Geopolitechs — GB 45438-2025 Partial English Translation", url: "https://www.geopolitechs.org/p/chinas-mandatory-national-standards" }
    ]
  },

  // ── CHINA — LICENSING & CERTIFICATION ────────────────────
  {
    id: 12,
    title: "Algorithm Recommendation Filing (CAC Registry)",
    shortName: "Algorithm Filing — CAC",
    region: "china", country: "china",
    regionLabel: "Mainland China", countryLabel: "Mainland China",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "1 March 2022",
    overview: "Mandatory CAC filing for all Chinese enterprises providing internet services using algorithmic recommendation technology. Filing is a precondition for market access — not a post-launch formality. Covers five algorithm categories and applies to any company in any industry that uses AI algorithms in an internet-facing product or service in China. Failure to file can result in suspension of business and a fine of up to CNY 100,000.",
    keyArticles: [
      { ref: "Article 9 — Filing obligation", text: "Providers of algorithmic recommendation services with public opinion attributes or social mobilisation capability must complete algorithm filing (record-filing) with the CAC through local cyberspace authorities before or at the point of public deployment." },
      { ref: "Five algorithm categories", text: "Filing covers five categories: (1) generation and synthesis technology; (2) personalised pushing technology; (3) ranking and selection technology; (4) retrieval and filtering technology; (5) dispatching and decision-making technology. Any service using one or more of these algorithm types is potentially subject to the filing obligation." },
      { ref: "Required disclosures", text: "The filing must disclose: the algorithm's name; its purpose; the application product it powers; operational details including data inputs and model types; any public opinion or social mobilisation attributes; and content governance mechanisms in place." },
      { ref: "Two-tier filing system", text: "The system distinguishes between base model filings (for foundation models — requiring full CAC filing) and application registrations (for services built on already-filed models — a lighter process). As of August 2025, the CAC had processed 538 base model filings and 263 application registrations." },
      { ref: "Display requirement", text: "Applications and features that have completed filing must display their CAC filing number or launch registration number prominently in the product interface or app store product details page." },
      { ref: "Penalties", text: "Failure to comply may result in suspension of business and a fine of up to CNY 100,000. Enforcement has intensified since 2025 — local CAC offices in Shanghai and Zhejiang have imposed administrative penalties on services operating without completed filings." }
    ],
    sources: [
      { label: "CAC — Official Chinese Text (网信办官方原文)", url: "https://www.cac.gov.cn/2022-01/04/c_1642894606364259.htm" },
      { label: "China Law Translate — English Translation", url: "https://www.chinalawtranslate.com/en/algorithms/" }
    ]
  },
  {
    id: 13,
    title: "Deep Synthesis Algorithm Registration",
    shortName: "Deep Synthesis Registration — CAC",
    region: "china", country: "china",
    regionLabel: "Mainland China", countryLabel: "Mainland China",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "10 January 2023",
    overview: "A dedicated, separate algorithm registration track specifically for deep synthesis technologies — AI systems generating synthetic media including deepfakes, AI-generated images, audio, and video. Established under the Administrative Provisions on Deep Synthesis in Internet Information Services. Providers must register before offering deep synthesis services publicly. The CAC published the first batch of filed deep synthesis algorithms in June 2023.",
    keyArticles: [
      { ref: "Separate registration track", text: "Deep synthesis algorithm registration is a distinct track from the general recommendation algorithm filing system established under the 2022 Algorithm Recommendation Provisions. Providers of deep synthesis services must register under this specific track — general algorithm filing does not substitute for deep synthesis registration." },
      { ref: "Required disclosures", text: "Registration must disclose: the technology type (e.g. text generation, image synthesis, voice cloning, video synthesis, virtual scene generation); the service scope; and the content governance mechanisms in place to prevent misuse." },
      { ref: "Timing", text: "Providers must register before offering deep synthesis services publicly. The CAC published the first batch of filed deep synthesis algorithms on 23 June 2023, providing the first public visibility into which services had completed registration." },
      { ref: "Scope of 'deep synthesis'", text: "Deep synthesis is broadly defined as any technology using deep learning, virtual reality, or other generative and synthetic algorithms to produce text, images, audio, video, virtual scenes, or other network information. This encompasses generative AI, face-swapping, voice cloning, text-to-image, text-to-video, and virtual avatar technologies." }
    ],
    sources: [
      { label: "CAC — Deep Synthesis Provisions Official Chinese Text (网信办官方原文)", url: "https://www.cac.gov.cn/2022-12/11/c_1672221949354811.htm" },
      { label: "China Law Translate — Deep Synthesis Provisions English Translation", url: "https://www.chinalawtranslate.com/en/deep-synthesis/" }
    ]
  },
  {
    id: 14,
    title: "Generative AI Service Filing (CAC Registry)",
    shortName: "GenAI Service Filing — CAC",
    region: "china", country: "china",
    regionLabel: "Mainland China", countryLabel: "Mainland China",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "15 August 2023",
    overview: "The most widely applicable AI filing requirement for companies operating in China in 2026. Under the Interim Measures for the Management of Generative AI Services, providers of generative AI services with public opinion attributes or social mobilisation capability must complete CAC service filing before or shortly after public deployment. As of March 2025, 346 generative AI services had filed — including DeepSeek and Baidu's Ernie Bot.",
    keyArticles: [
      { ref: "Filing obligation", text: "Providers of generative AI services (text, image, audio, video generation) that possess public opinion influence or social mobilisation capability must complete CAC service filing before or shortly after public deployment. This is a precondition for market access for most consumer-facing generative AI products in China." },
      { ref: "Filing procedure", text: "Filing is completed through local cyberspace authorities. The CAC maintains a public registry of all filed services. As of March 2025, 346 generative AI services had been registered, including well-known examples such as DeepSeek and Baidu Ernie Bot." },
      { ref: "Display requirement", text: "Generative AI applications and features that have already launched must indicate the AI model names and their CAC filing numbers or launch registration numbers in a prominent location in the product interface or on the product details page in app stores." },
      { ref: "Base model vs application registration", text: "The two-tier system applies to generative AI: foundation model providers complete full CAC filing; application developers building on top of already-filed foundation models may qualify for the lighter application registration pathway. As of August 2025, 538 base model filings and 263 application registrations had been processed." },
      { ref: "Competitive intelligence value", text: "The CAC's public filing registry is itself a useful market intelligence resource — listing which generative AI services are legally operating in China and on which foundation models they are built." }
    ],
    sources: [
      { label: "CAC — Generative AI Interim Measures Official Chinese Text (网信办官方原文)", url: "https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm" },
      { label: "China Law Translate — Generative AI Interim Measures English Translation", url: "https://www.chinalawtranslate.com/en/generative-ai-interim/" }
    ]
  },
  {
    id: 15,
    title: "NMPA Registration for AI Medical Devices",
    shortName: "AI Medical Device — NMPA",
    region: "china", country: "china",
    regionLabel: "Mainland China", countryLabel: "Mainland China",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "March 2022",
    overview: "Medical AI in China faces the most rigorous pre-market requirements of any sector. The National Medical Products Administration (NMPA) governs medical device registration, technical reviews, and post-market surveillance for healthcare AI products. The primary instrument is the Guiding Principles for the Technical Review of Artificial Intelligence Medical Devices (March 2022), covering the full AI product lifecycle from requirement analysis and algorithm development through verification, validation, and post-market surveillance.",
    keyArticles: [
      { ref: "Scope — Class II and III AI devices", text: "Applies to Class II and III standalone AI software and medical devices containing AI software components — including diagnostic AI, treatment planning AI, clinical decision support, and patient monitoring AI. Aims to ensure the safety and effectiveness of these products before market placement." },
      { ref: "Design and development documentation", text: "Each algorithm requires independent lifecycle validation. 18 technical aspects must be documented including: data collection methodology; algorithm design and training; performance verification and validation; cybersecurity measures; and intended use limitations. Documentation must cover the full development pipeline." },
      { ref: "Pre-submission and classification", text: "Before formal submission, manufacturers must determine the correct device classification, conduct performance testing, and compile clinical evaluation data. Disease-specific sub-guidelines exist for AI used in lung cancer diagnosis, coronary artery disease screening, and other conditions — creating an additional layer of sector-specific requirements." },
      { ref: "NMPA formal review", text: "Following submission, the NMPA's Centre for Medical Device Evaluation (CMDE) conducts a technical review. The NMPA governs registration and formal review; the National Health Commission separately supervises how approved AI products are deployed and used by medical institutions in clinical practice." },
      { ref: "Post-market surveillance", text: "Registered AI medical devices are subject to ongoing post-market surveillance obligations, including adverse event reporting and notification of algorithm updates. Material changes to the algorithm may require re-registration." },
      { ref: "Parallel regulatory track", text: "Medical AI products are subject to both NMPA registration (for the device itself) and CAC algorithm filing (if the product includes algorithmic recommendation features). Both tracks must be completed in parallel." }
    ],
    sources: [
      { label: "Chambers and Partners — Healthcare AI in China 2026 (Practice Guide)", url: "https://practiceguides.chambers.com/practice-guides/healthcare-ai-2026/china" },
      { label: "China Medical Devices — AI Device Registration Guidelines (2023)", url: "https://chinamedicaldevices.com/ai-guidelines-2023/" }
    ]
  },
  {
    id: 16,
    title: "National Standards — Technical Certification Layer",
    shortName: "National Standards (GB/TC260)",
    region: "china", country: "china",
    regionLabel: "Mainland China", countryLabel: "Mainland China",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "Various (see individual standards)",
    overview: "Beyond regulatory filing, China's national standards system creates a de facto technical certification layer that AI companies must comply with. Standards are developed by standardisation institutions and sectoral administrations — primarily TC260 (cybersecurity standards) and the NMPA (medical device standards) — under the direction of the CAC, MIIT, and NMPA. Compliance with mandatory standards (GB prefix) is legally required; recommended standards (GB/T prefix) are voluntary but widely adopted as industry benchmarks.",
    keyArticles: [
      { ref: "GB 45438-2025 — AI Content Labelling", text: "Mandatory national standard (effective 1 September 2025): Cybersecurity Technology — Methods for Labelling AI-Generated Synthetic Content. The first mandatory AI national standard in China. Specifies technical requirements for explicit and implicit labelling of AI-generated content, including watermark dimensions, metadata schema, and file format requirements. Compliance is legally required for all AI content generation service providers." },
      { ref: "GB/T 43697-2024 — Data Classification", text: "Recommended national standard: Data Security Technology — Data Classification and Categorization Rules. Used by organisations to assess whether data processed by AI qualifies as 'important data' under the DSL — which triggers significantly stricter security obligations and cross-border transfer restrictions. While technically a recommended standard, compliance is effectively required for DSL important data assessments." },
      { ref: "TC260 Cybersecurity Standards", text: "The National Information Security Standardization Technical Committee (TC260) has issued multiple cybersecurity standards with AI implications, including security certification specifications for cross-border personal information processing. TC260 standards underpin the Multi-Level Protection System (MLPS) compliance requirements that apply to all AI systems operating on networked infrastructure in China." },
      { ref: "NMPA Medical AI Technical Standards", text: "The NMPA issued six AI guidelines for medical device software in 2023, covering clinical evaluation requirements, algorithm performance standards, and post-market surveillance specifications. These technical standards sit below the Guiding Principles for AI Medical Device Registration and specify the detailed performance benchmarks that AI medical devices must meet." },
      { ref: "Standard-setting bodies", text: "National standards are developed by standardisation institutions (TC260, NMPA) and sectoral administrations, with the China Communications Standards Association leading many group standards. The CAC, MIIT, and NMPA provide regulatory direction. Organisations should monitor the national standards pipeline as new mandatory AI standards are in active development." }
    ],
    sources: [
      { label: "SAC/SAMR — GB 45438-2025 Official Standard Record", url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=F32EA2A561F1886CD8D606513512D547" },
      { label: "SAC/SAMR — National Standards Public Information Platform", url: "https://openstd.samr.gov.cn" }
    ]
  },

  // ── HONG KONG — DATA GOVERNANCE ──────────────────────────
  {
    id: 17,
    title: "Personal Data (Privacy) Ordinance (PDPO)",
    shortName: "PDPO",
    region: "hongkong", country: "hongkong",
    regionLabel: "Hong Kong SAR", countryLabel: "Hong Kong SAR",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "December 1996 (amended 2012, 2021)",
    overview: "One of Asia's earliest comprehensive data privacy statutes. The PDPO regulates the collection, holding, processing, and use of personal data in Hong Kong through six Data Protection Principles (DPPs). Compliance is mandatory for all data users operating in Hong Kong. The Ordinance operates entirely independently of Mainland China's PIPL under 'One Country, Two Systems' — organisations with operations on both sides of the boundary face separate, parallel compliance obligations with no automatic equivalence between the two frameworks.",
    keyArticles: [
      { ref: "Key definitions", text: "'Personal data' means information relating to a living individual that can be used to identify that individual, existing in a form that is practicable for access or processing. 'Data subject' is the individual to whom the personal data relates. 'Data user' is a person who, alone or jointly, controls the collection, holding, processing, or use of personal data. 'Data processor' processes personal data on behalf of a data user for the data user's purposes." },
      { ref: "Data processor obligations", text: "Data processors are not directly regulated under the PDPO. Instead, data users are required to ensure — by contract or other means — that their data processors meet the applicable PDPO requirements. This places the compliance obligation squarely on the data user to conduct appropriate due diligence and contractual oversight of any third party processing data on their behalf." },
      { ref: "Six Data Protection Principles (DPPs)", text: "The PDPO operates through six DPPs: DPP1 (purpose and manner of collection — data must be collected fairly, lawfully, and for a lawful purpose); DPP2 (accuracy and retention — data must be accurate and not kept longer than necessary); DPP3 (use of data — data must only be used for the purpose for which it was collected or a directly related purpose); DPP4 (security — appropriate security measures must be applied); DPP5 (openness — data users must make their policies on personal data available); DPP6 (access and correction — data subjects have the right to access and correct their personal data)." },
      { ref: "Direct marketing — consent requirements", text: "Use of personal data for direct marketing requires informed consent. The data user must inform the data subject of: the intention to use data for direct marketing; the fact that consent is required; the kinds of personal data to be used; the classes of marketing subjects involved; and the right to opt out. If data is to be transferred to a third party for direct marketing, the data subject must also be informed of the classes of transferees and whether the transfer is for gain." },
      { ref: "Direct marketing — penalties", text: "Failure to comply with direct marketing requirements is a criminal offence. Penalties: a fine of HK$500,000 and imprisonment for 3 years. Where personal data was transferred to a third party for gain: a fine of HK$1,000,000 and imprisonment for 5 years." },
      { ref: "Enforcement — investigation and notices", text: "When the Privacy Commissioner receives a complaint or has reasonable grounds to believe there may be a contravention of the PDPO, the Commissioner may investigate and publish a report if in the public interest. If a contravention is found, the Commissioner may issue an enforcement notice directing remedial or preventive steps." },
      { ref: "Enforcement — penalties for contravening enforcement notices", text: "Contravening an enforcement notice issued by the Commissioner is a criminal offence: maximum fine of HK$50,000 and imprisonment for 2 years, with a daily penalty of HK$1,000 for continuing contravention. Subsequent convictions: maximum fine of HK$100,000 and imprisonment for 2 years, with a daily penalty of HK$2,000." },
      { ref: "Balancing principle", text: "Data privacy under the PDPO must be balanced against other important rights and interests. The Ordinance is not absolute — it must be read alongside other Hong Kong legislation, common law principles, and, where applicable, the Basic Law." }
    ],
    sources: [
      { label: "Hong Kong e-Legislation — PDPO Full Text (Bilingual English/Chinese)", url: "https://www.elegislation.gov.hk/hk/cap486?pmc=1&m=1&pm=0" },
      { label: "PCPD — PDPO at a Glance (Official Summary)", url: "https://www.pcpd.org.hk/english/data_privacy_law/ordinance_at_a_Glance/ordinance.html" }
    ]
  },

  // ── HONG KONG — CROSS-BORDER DATA FLOWS ──────────────────
  {
    id: 18,
    title: "PDPO Section 33 & PCPD Recommended Model Contractual Clauses",
    shortName: "PDPO S.33 & RMCs",
    region: "hongkong", country: "hongkong",
    regionLabel: "Hong Kong SAR", countryLabel: "Hong Kong SAR",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "Section 33: not yet in force. RMCs: December 2014, updated May 2022",
    overview: "Section 33 of the PDPO is the provision that would restrict cross-border transfers of personal data from Hong Kong — but it has never been brought into force. The Hong Kong government has deliberately held it back to preserve Hong Kong's competitiveness as an international business hub. In its place, the PCPD has issued voluntary Recommended Model Contractual Clauses (RMCs) as a best practice framework. Currently, Hong Kong imposes no mandatory statutory restrictions on transferring personal data offshore.",
    keyArticles: [
      { ref: "Section 33 — The provision that is not in force", text: "Section 33 of the PDPO prohibits the transfer of personal data to places outside Hong Kong except where specified conditions are met. These conditions include: the destination jurisdiction ensures a level of protection substantially similar to Hong Kong; the data subject has given written consent to the transfer; the data user has taken all reasonable precautions and exercised due diligence to ensure the data will not be handled contrary to the PDPO; or other prescribed conditions are met. Despite being enacted, Section 33 has never been activated — it is a matter of deliberate policy, not oversight." },
      { ref: "Current statutory position", text: "There are currently no mandatory restrictions on the cross-border transfer of personal data from Hong Kong. Organisations are free to transfer personal data offshore without obtaining prior regulatory approval or satisfying any statutory transfer mechanism. This is a fundamental difference from Mainland China (which requires security assessments, SCCs, or certification) and the EU (which requires adequacy or SCCs)." },
      { ref: "Ongoing DPP obligations", text: "Even without Section 33, data users must still comply with the six Data Protection Principles when transferring data abroad — particularly DPP1 (data must be collected fairly and for a lawful purpose, with data subjects informed) and DPP4 (appropriate security measures must be applied to data, including during transfer). The absence of Section 33 does not exempt organisations from their general PDPO obligations." },
      { ref: "PCPD Recommended Model Contractual Clauses (RMCs)", text: "The PCPD published RMCs in December 2014 and updated guidance in May 2022, providing voluntary contractual templates that data users may use when transferring personal data to overseas data processors or data users. Adoption is entirely voluntary. The RMCs are modelled on contractual transfer mechanisms from other jurisdictions (including GDPR SCCs) but carry no legal compulsion under current Hong Kong law." },
      { ref: "Future activation of Section 33", text: "Organisations should design their data transfer practices with Section 33 in mind, even though it is not yet operative. If activated, organisations with established contractual and governance frameworks (including RMCs or equivalent) will be better positioned to demonstrate compliance. The PCPD has indicated it will provide transition guidance before Section 33 is brought into force." }
    ],
    sources: [
      { label: "PCPD — Recommended Model Contractual Clauses for Cross-Border Data Transfer", url: "https://www.pcpd.org.hk/english/data_privacy_law/ordinance_at_a_Glance/ordinance.html" },
      { label: "Hong Kong e-Legislation — PDPO Section 33 Full Text", url: "https://www.elegislation.gov.hk/hk/cap486?pmc=1&m=1&pm=0" }
    ]
  },
  {
    id: 19,
    title: "GBA Standard Contract for Cross-Boundary Personal Information Flow",
    shortName: "GBA Standard Contract",
    region: "hongkong", country: "hongkong",
    regionLabel: "Hong Kong SAR", countryLabel: "Hong Kong SAR",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "December 2023 (extended to all sectors: November 2024)",
    overview: "The single most important cross-border data transfer development for HSITP organisations. Jointly released by the CAC and the Hong Kong Innovation, Technology and Industry Bureau (ITIB) in December 2023, the GBA Standard Contract provides a voluntary framework specifically for the cross-boundary flow of personal information within the ten cities of the Greater Bay Area. It was China's first integrated cross-border personal data mechanism covering both Mainland China and Hong Kong, and was extended from pilot industries to all sectors in November 2024.",
    keyArticles: [
      { ref: "Scope and coverage", text: "The GBA Standard Contract applies to personal information transfers between organisations in Mainland China (Guangdong Province, including Shenzhen) and Hong Kong SAR, within the ten GBA cities. Extended from pilot industries to all sectors in November 2024. Adoption is voluntary — organisations may use the GBA Standard Contract or alternatively use standard PIPL Pathway 1, 2, or 3 mechanisms for GBA transfers." },
      { ref: "Most relevant for HSITP", text: "HSITP sits at the Lok Ma Chau Loop, directly on the Hong Kong-Shenzhen boundary. Organisations operating on both sides of the boundary — or transferring personal data between their Hong Kong and Guangdong operations — are the primary intended users of the GBA Standard Contract." },
      { ref: "Critical limitation — no onward transfer", text: "Data transferred into Hong Kong from Mainland China under the GBA Standard Contract cannot be onward-transferred beyond the GBA — for example, to a Singapore data centre, a UK headquarters, or a US cloud provider — without separately complying with the full PIPL cross-border transfer mechanisms (Security Assessment, SCC, or Certification). The GBA Standard Contract is a GBA-specific instrument only." },
      { ref: "PDPO still applies in full", text: "The GBA Standard Contract does not override or replace the PDPO. Hong Kong data users remain subject to all applicable PDPO obligations — including the six Data Protection Principles — even when using the GBA Standard Contract. The facilitation measure does not change the laws of either Hong Kong or Mainland China." },
      { ref: "No change to underlying law", text: "The GBA Standard Contract is a practical facilitation tool, not a legislative change. The processing and export of personal data from Hong Kong continues to be regulated in accordance with the PDPO; the processing and import of personal data into Mainland China continues to be regulated in accordance with the PIPL and DSL." }
    ],
    sources: [
      { label: "PCPD — GBA Standard Contract Implementation Guidelines", url: "https://www.pcpd.org.hk/english/data_privacy_law/mainland_law/mainland_law.html" },
      { label: "ITIB — GBA Cross-Border Data Flow Policy Statement (Official)", url: "https://www.itib.gov.hk/assets/files/Policy_Statement_Eng.pdf" },
      { label: "DLA Piper — China Data Protection Overview (GBA Commentary)", url: "https://www.dlapiperdataprotection.com/index.html?c=CN" }
    ]
  },

  // ── HONG KONG — ALGORITHMIC TRANSPARENCY ─────────────────
  {
    id: 20,
    title: "PCPD Model AI Data Protection Framework",
    shortName: "PCPD AI Framework",
    region: "hongkong", country: "hongkong",
    regionLabel: "Hong Kong SAR", countryLabel: "Hong Kong SAR",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "June 2024",
    overview: "The primary cross-sector AI governance reference for Hong Kong, issued by the Office of the Privacy Commissioner for Personal Data. Targets organisations procuring, implementing, and using AI systems that involve the use of personal data. Provides practical measures for implementing AI governance strategies, conducting risk assessments, and engaging transparently with stakeholders. Voluntary — but the PCPD conducted active compliance checks in May 2025, finding 80% of surveyed organisations already using AI. The Framework adheres to the three data stewardship values and seven ethical principles from the PCPD's 2021 AI Ethics Guidance.",
    keyArticles: [
      { ref: "Target organisations", text: "The Framework targets organisations across all sectors that procure, implement, or use AI systems involving personal data — including predictive AI, generative AI, and AI-assisted decision-making tools. It is not limited to technology companies." },
      { ref: "Three data stewardship values", text: "The Framework is grounded in three data stewardship values from the 2021 AI Ethics Guidance: respect for persons (treating individuals with dignity and protecting their data rights); beneficence (using AI to benefit individuals and society); and non-maleficence (avoiding harm through AI misuse, bias, or privacy violations)." },
      { ref: "Seven ethical principles", text: "The 2021 AI Ethics Guidance underlying the Framework sets seven principles: accountability; human oversight; transparency and interpretability; data privacy; fairness and non-discrimination; reliability, robustness, and security; and environmental wellbeing." },
      { ref: "AI governance strategy", text: "Organisations should establish a documented AI governance strategy covering: the purpose and scope of AI use; roles and responsibilities for AI governance; risk assessment processes; and mechanisms for ongoing monitoring and improvement." },
      { ref: "Risk assessment and transparency", text: "Organisations must conduct risk assessments before deploying AI systems that use personal data, and must engage transparently with data subjects about how AI is used in decisions that affect them. The Framework provides a risk assessment template aligned with the PDPO's Data Protection Principles." },
      { ref: "PCPD compliance checks", text: "In May 2025, the PCPD conducted compliance checks on 60 organisations. 80% reported using AI in daily operations; nearly 70% recognised significant privacy risks from AI use. The PCPD has signalled ongoing active monitoring — making adherence to this Framework a practical risk management priority even though it is voluntary." }
    ],
    sources: [
      { label: "PCPD — Model AI Data Protection Framework (Official PDF)", url: "https://www.pcpd.org.hk/english/resources_centre/publications/files/ai_protection_framework.pdf" },
      { label: "PCPD — AI Ethics Guidance 2021 (Underlying Principles)", url: "https://www.pcpd.org.hk/english/resources_centre/publications/files/guidance_ethical_e.pdf" }
    ]
  },
  {
    id: 21,
    title: "Digital Policy Office — Generative AI Technical and Application Guidelines",
    shortName: "DPO GenAI Guidelines",
    region: "hongkong", country: "hongkong",
    regionLabel: "Hong Kong SAR", countryLabel: "Hong Kong SAR",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "December 2025",
    overview: "Voluntary guidelines issued by the Digital Policy Office providing practical operational guidance on generative AI governance for various parties including developers, platform providers, and users. Supplements the 2024 Ethical AI Framework. Sets five key principles of governance for generative AI use, including security and transparency, explainable AI, and algorithm optimisation. Not legally binding — but forms part of the government's broader strategy to shape responsible AI adoption across sectors.",
    keyArticles: [
      { ref: "Definition of Generative AI", text: "The 2025 Guidelines define Generative AI as 'the use of various machine learning algorithms to enable computer systems to automatically generate content information such as text, image, audio, video, code or other media, based on vast amounts of data, according to complex human intentions and instructions.' This supplements the 2024 definition." },
      { ref: "Five governance principles", text: "The Guidelines propose five key principles: (1) Compliance with Laws and Regulations — legal compliance, intellectual property, privacy, and avoiding harmful information; (2) Security and Transparency — algorithm optimisation, data governance, risk disclosure, and use of explainable AI; (3) Fairness and Non-Discrimination — avoiding algorithmic bias; (4) Accountability — clear responsibility for AI outputs; (5) Human Oversight — maintaining meaningful human control over AI-generated decisions." },
      { ref: "Security and Transparency principle", text: "The Security and Transparency principle requires organisations to: address both model-level and service-level security issues in generative AI; implement algorithm optimisation to improve reliability; maintain data governance over training and inference data; provide risk disclosures to users; and employ technologies like encryption and explainable AI to support transparency." },
      { ref: "Relationship to the 2024 Ethical AI Framework", text: "The 2025 Guidelines supplement the Digital Policy Office's July 2024 Ethical Artificial Intelligence Framework, which outlines ethical principles, an AI governance model, a lifecycle guide for AI, and an impact assessment template. The two documents should be read together." }
    ],
    sources: [
      { label: "Digital Policy Office — Ethical AI Framework and Guidelines (Official)", url: "https://www.digitalpolicy.gov.hk/en/our_work/data_governance/policies_standards/ethical_ai_framework/" }
    ]
  },
  {
    id: 22,
    title: "HKMA — Principles for Responsible Use of AI in Banking",
    shortName: "HKMA AI Principles",
    region: "hongkong", country: "hongkong",
    regionLabel: "Hong Kong SAR", countryLabel: "Hong Kong SAR",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "November 2019 (updated August 2024)",
    overview: "Mandatory governance framework for all HKMA-authorised institutions. The original November 2019 circular established four guiding principles for AI use in banking. The August 2024 update extended these to cover generative AI in customer-facing applications. The HKMA's Supervisory Policy Manual SB-1 (revised 2024) provides the detailed mandatory baseline for model risk management, covering model development, validation, monitoring, and retirement. Non-compliance is a supervisory concern addressed through the HKMA's examination process.",
    keyArticles: [
      { ref: "Four guiding principles (2019)", text: "The original circular established four principles applicable to all AI use by authorised institutions: (1) Governance and accountability — clear ownership and oversight of AI systems; (2) Fairness — AI must not produce discriminatory outcomes; (3) Transparency and disclosure — AI decisions must be explainable and disclosed to customers where appropriate; (4) Data privacy and protection — AI must comply with applicable privacy obligations including the PDPO." },
      { ref: "Supervisory Policy Manual SB-1 — Model Risk Management", text: "SB-1 (revised January 2024) provides the mandatory baseline framework. Authorised institutions must implement a model risk management framework covering: model development (documentation of data sources, feature selection, and algorithm choice); model validation (independent testing of accuracy, stability, and fairness); model monitoring (ongoing performance tracking including drift detection and bias monitoring); and model retirement (process for decommissioning outdated or underperforming models)." },
      { ref: "August 2024 GenAI update", text: "The August 2024 circular provides guiding principles for the use of GenAI in customer-facing applications, requiring banks to ensure AI applications are transparent, explainable, and fair. Banks must disclose to customers the purposes and limitations of using GenAI. The HKMA required authorised institutions with significant operations in Hong Kong to submit a feasibility study report and AI implementation plan by end of March 2025." },
      { ref: "Explainability requirement", text: "The HKMA and SFC require firms to implement governance frameworks that prioritise model explainability, cybersecurity, and risk-based oversight. For customer-facing AI, banks must be able to explain to customers how AI-driven recommendations or decisions were reached, in plain language appropriate to the customer." }
    ],
    sources: [
      { label: "HKMA — November 2019 AI Circular (Original Principles)", url: "https://brdr.hkma.gov.hk/eng/doc-ldg/docId/20191101-1-EN" },
      { label: "HKMA — August 2024 GenAI Customer-Facing Applications Circular", url: "https://brdr.hkma.gov.hk/eng/doc-ldg/docId/getPdf/20241118-4-EN/20241118-4-EN.pdf" },
      { label: "HKMA — Supervisory Policy Manual SB-1 (Current Version)", url: "https://brdr.hkma.gov.hk/eng/spm" }
    ]
  },
  {
    id: 23,
    title: "SFC — AI Circular for Licensed Corporations",
    shortName: "SFC AI Circular",
    region: "hongkong", country: "hongkong",
    regionLabel: "Hong Kong SAR", countryLabel: "Hong Kong SAR",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "November 2024 (updated 2026)",
    overview: "Mandatory guidance from the Securities and Futures Commission covering all licensed corporations that deploy AI for investment advisory, trading, and risk management. Not a voluntary code — sets out mandatory governance expectations around algorithmic fairness, transparency, and accountability. Critically, for any firm applying for a Type 1 (dealing in securities), Type 4 (advising on securities), or Type 9 (asset management) licence, the SFC now requires a written AI governance policy as part of the licence application pack. The SFC AI Circular is therefore as close as Hong Kong gets to an AI licensing requirement.",
    keyArticles: [
      { ref: "Mandatory AI governance policy for licensing", text: "For any firm applying for a Type 1, Type 4, or Type 9 SFC licence, a written AI governance policy is now required as part of the licence application documentation. This policy must demonstrate how the firm governs AI systems used in regulated activities — including investment advisory services, securities dealing, and asset management." },
      { ref: "Explainability requirement for Tier 1 systems", text: "The SFC AI Circular adds a specific requirement for 'explainability' for Tier 1 systems. For any Tier 1 AI system, the firm must be able to produce a human-readable explanation of how the algorithm reached a particular decision. This is not a 'right to explanation' in the GDPR sense — it is a regulatory expectation that the firm can demonstrate the logic chain to the SFC on request." },
      { ref: "Scope", text: "The Circular covers licensed corporations using generative AI language models — whether developed in-house, by group companies, external providers, or open-source platforms — in regulated activities such as investment advisory services, securities trading, and virtual asset trading." },
      { ref: "Mandatory governance expectations", text: "The SFC sets out mandatory expectations on: algorithmic fairness (AI must not produce discriminatory outcomes for clients); transparency (firms must be able to explain AI-driven recommendations); accountability (clear ownership and escalation paths for AI failures); and cybersecurity (AI systems must meet the SFC's existing cybersecurity requirements)." },
      { ref: "2026 Circular update", text: "An updated SFC circular was issued in 2026, extending and refining the AI governance requirements for licensed corporations. Licensed firms must assess whether their data governance and risk management comply with both the November 2024 Circular and the 2026 update, and must keep pace with rapidly evolving AI developments including cybersecurity risks from AI language models." }
    ],
    sources: [
      { label: "SFC — AI Circular November 2024 (Official)", url: "https://apps.sfc.hk/edistributionWeb/gateway/EN/circular/doc?refNo=24EC55" },
      { label: "SFC — AI Circular 2026 Update (Official)", url: "https://apps.sfc.hk/edistributionWeb/api/circular/openFile?lang=EN&refNo=26EC32" }
    ]
  },

  // ── HONG KONG — LICENSING & CERTIFICATION ────────────────
  {
    id: 24,
    title: "SFC Licence Requirements — Written AI Governance Policy",
    shortName: "SFC AI Licence Requirement",
    region: "hongkong", country: "hongkong",
    regionLabel: "Hong Kong SAR", countryLabel: "Hong Kong SAR",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "November 2024",
    overview: "The closest Hong Kong gets to an AI licensing requirement. The Securities and Futures Commission now requires a written AI governance policy as part of the licence application pack for firms applying for Type 1 (dealing in securities), Type 4 (advising on securities), or Type 9 (asset management) licences. AI governance is effectively baked into the financial services licensing process itself. The SFC Circular on the Use of Generative AI Language Models (November 2024) sets out the mandatory governance framework underpinning this requirement.",
    keyArticles: [
      { ref: "Written AI governance policy — licensing requirement", text: "For any firm applying for a Type 1, Type 4, or Type 9 SFC licence, a written AI governance policy is required as part of the application documentation. The policy must demonstrate how the firm governs AI systems used in regulated activities including investment advisory, securities dealing, and asset management." },
      { ref: "Four core principles", text: "The SFC Circular is organised around four core principles: (1) Senior management oversight — close involvement of senior management throughout the full AI system lifecycle; (2) Risk management — a risk-based approach to AI procurement and deployment; (3) Transparency and explainability — firms must be able to explain AI-driven decisions; (4) Accountability — clear responsibility for AI outputs and failures." },
      { ref: "Scope of the requirement", text: "Applies to licensed corporations using generative AI language models — whether developed in-house, by group companies, external providers, or open-source platforms — in regulated activities such as investment advisory services, securities trading, and virtual asset trading." },
      { ref: "Ongoing compliance", text: "The requirement is not a one-time application step — licensed corporations must maintain and update their AI governance policy as AI systems and regulatory guidance evolve. The 2026 SFC Circular update extended and refined the requirements, and firms must demonstrate ongoing compliance with both circulars." }
    ],
    sources: [
      { label: "SFC — Circular on Use of Generative AI Language Models, November 2024 (Official)", url: "https://apps.sfc.hk/edistributionWeb/gateway/EN/circular/doc?refNo=24EC55" },
      { label: "SFC — AI Circular 2026 Update (Official)", url: "https://apps.sfc.hk/edistributionWeb/api/circular/openFile?lang=EN&refNo=26EC32" }
    ]
  },
  {
    id: 25,
    title: "FSTB Policy Statement on Responsible Application of AI in the Financial Market",
    shortName: "FSTB AI Policy Statement",
    region: "hongkong", country: "hongkong",
    regionLabel: "Hong Kong SAR", countryLabel: "Hong Kong SAR",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "28 October 2024",
    overview: "The Hong Kong government's overarching policy statement on AI in the financial sector. Issued by the Financial Services and the Treasury Bureau (FSTB) on 28 October 2024. Not a binding regulation — but sets the government's official policy stance and gives effect to the regulatory direction followed by the HKMA and SFC. Frames AI governance around three key attributes: data-driven, double-edged, and dynamic. Recommends a dual-track approach: promoting AI adoption while managing associated risks.",
    keyArticles: [
      { ref: "Dual-track approach", text: "The FSTB recommends that financial institutions adopt a dual-track approach — simultaneously promoting AI development and adoption while rigorously addressing associated risks including cybersecurity, data privacy, and intellectual property protection. This approach shapes the direction of all subsequent mandatory guidance from the HKMA, SFC, and Insurance Authority." },
      { ref: "Three key attributes of AI in financial services", text: "The Policy Statement analyses AI in financial services through three lenses: (1) Data-driven — AI will improve efficiency and competitiveness given the sector's data-intensive nature; (2) Double-edged — AI brings opportunities but also potential risks that must be thoroughly mitigated; AI should complement rather than replace human capabilities; (3) Dynamic — AI will foster innovations and new business types that advance the financial services industry." },
      { ref: "AI governance strategy requirement", text: "Financial institutions should formulate an AI governance strategy to provide direction on how AI systems should be implemented and used. A risk-based approach should be adopted in the procurement, use and management of AI. Institutions must focus on data privacy, intellectual property rights, information security, accountability, operational resilience, and job security." },
      { ref: "Relationship to HKMA and SFC guidance", text: "The Policy Statement gives effect to the policy direction followed by the HKMA's principles circulars (2019, 2024) and the SFC's AI Circular (November 2024). These regulatory instruments implement the dual-track approach at the supervisory level, translating the FSTB's policy stance into mandatory governance requirements for financial institutions." }
    ],
    sources: [
      { label: "FSTB — AI Policy Statement Official PDF", url: "https://www.fstb.gov.hk/fsb/en/business/policy_highlights/doc/AI_Policy_Statement_e.pdf" },
      { label: "HK Government Press Release — 28 October 2024", url: "https://www.info.gov.hk/gia/general/202410/28/P2024102800154.htm" }
    ]
  },
  {
    id: 26,
    title: "GenAI Sandbox++",
    shortName: "GenAI Sandbox++",
    region: "hongkong", country: "hongkong",
    regionLabel: "Hong Kong SAR", countryLabel: "Hong Kong SAR",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "5 March 2026",
    overview: "A supervised testing environment for AI deployment across Hong Kong's financial sector — jointly operated by the HKMA, SFC, Insurance Authority (IA), and Mandatory Provident Fund Schemes Authority (MPFA) in collaboration with Cyberport. An expanded version of the original HKMA GenAI Sandbox launched in December 2024. The Sandbox++ functions as a soft licensing mechanism: regulated institutions can test AI use cases in a supervised environment before wider market deployment. Participating institutions gain access to computing resources at Cyberport's AI Supercomputing Centre.",
    keyArticles: [
      { ref: "Original GenAI Sandbox (December 2024)", text: "The first cohort of the HKMA GenAI Sandbox was announced in December 2024, covering banks only. A report published on 31 October 2025 highlighted key findings and provided guidance to help banks address AI implementation challenges including data preparation, model fine-tuning, output evaluation, and ongoing monitoring. The second cohort, announced 15 October 2025, focused on 'AI vs AI' strategies and deepfake-related fraud defences." },
      { ref: "Sandbox++ expansion (March 2026)", text: "On 5 March 2026, the HKMA, SFC, IA, and MPFA, in collaboration with Cyberport, announced GenAI Sandbox++. The expanded initiative caters for: SFC licensed corporations; authorised insurers and licensed insurance broker companies; MPF approved trustees and principal intermediaries; and stored value facility licensees — significantly broadening participation beyond banks." },
      { ref: "Access to AI Supercomputing Centre", text: "Successful applicants gain access to computing resources at Cyberport's AI Supercomputing Centre (AISC). This provides regulated institutions with the computational infrastructure needed to test large AI models without building their own infrastructure — a practical enabler for smaller financial services firms." },
      { ref: "Soft licensing mechanism", text: "The Sandbox functions as a soft licensing mechanism — institutions test AI use cases under regulatory supervision before wider deployment. Participation signals regulatory engagement and helps institutions demonstrate governance maturity, which is increasingly relevant given the SFC's written AI governance policy requirement for licence applications." }
    ],
    sources: [
      { label: "HKMA — GenAI Sandbox First Cohort Report (October 2025)", url: "https://brdr.hkma.gov.hk/eng/doc-ldg/docId/20251031-1-EN" },
      { label: "Lexology — GenAI Sandbox++ Launch Summary (March 2026)", url: "https://www.lexology.com/library/detail.aspx?g=4133f01f-ed60-4bf8-a0ea-06bd35918e40" }
    ]
  },
  {
    id: 27,
    title: "Healthcare AI — MDACS and Medical Registration Ordinance",
    shortName: "Healthcare AI — MDACS",
    region: "hongkong", country: "hongkong",
    regionLabel: "Hong Kong SAR", countryLabel: "Hong Kong SAR",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "MDACS: ongoing (voluntary); Medical Registration Ordinance: Cap. 161",
    overview: "Hong Kong has no NMPA-equivalent mandatory pre-market registration regime for AI medical devices. Healthcare AI is governed by the voluntary Medical Devices Administrative Control System (MDACS), administered by the Medical Device Division of the Department of Health, alongside the professional licensing requirements of the Medical Registration Ordinance. For AI used in appointment scheduling, clinical documentation, or patient communication, both the PDPO and sector-specific Department of Health requirements apply.",
    keyArticles: [
      { ref: "Medical Devices Administrative Control System (MDACS)", text: "The MDACS is the current regulatory framework for medical devices in Hong Kong, including AI-powered medical software. It is currently voluntary — there is no mandatory pre-market approval requirement equivalent to the NMPA process in Mainland China or the FDA process in the United States. The Department of Health maintains a medical device register and encourages registration, but non-registration does not currently prohibit market access." },
      { ref: "Medical Registration Ordinance (Cap. 161)", text: "The Medical Registration Ordinance governs the registration of medical practitioners in Hong Kong. AI tools used in clinical settings must be deployed under the supervision of registered practitioners and must comply with their professional obligations under the Ordinance. Clinical decision-making responsibility cannot be delegated entirely to an AI system — human professional accountability is maintained." },
      { ref: "PDPO applies", text: "For healthcare AI processing patient personal data — including appointment scheduling, clinical documentation, diagnostic support, and patient communication — full PDPO compliance is required alongside any sector-specific obligations. The PCPD's Model AI Data Protection Framework is the relevant voluntary governance reference." },
      { ref: "Future developments", text: "The Department of Health is monitoring international developments in medical AI regulation, including the EU AI Act's high-risk AI classification for medical devices and the NMPA's AI medical device guidelines in Mainland China. Mandatory regulation for medical AI in Hong Kong is anticipated in the medium term as the Inter-Departmental Working Group on AI legislation develops its recommendations." }
    ],
    sources: [
      { label: "Department of Health — Medical Device Division (MDACS Overview)", url: "https://www.mdacs.gov.hk/en/aboutus.html" },
      { label: "Hong Kong e-Legislation — Medical Registration Ordinance (Cap. 161)", url: "https://www.elegislation.gov.hk/hk/cap161" }
    ]
  },

  // ── EUROPEAN UNION — DATA GOVERNANCE ─────────────────────
  {
    id: 28,
    title: "General Data Protection Regulation (GDPR)",
    shortName: "GDPR",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "25 May 2018",
    overview: "The foundational EU data protection regulation. Governs how personal data of EU residents is collected, processed, stored, and transferred. Applies extraterritorially — any organisation handling the personal data of EU residents must comply, regardless of where the organisation is established. Everything else in the EU data governance ecosystem either builds on, interacts with, or sits alongside the GDPR. GDPR compliance must function as embedded, risk-based governance infrastructure evidenced in practice — not a checklist.",
    keyArticles: [
      { ref: "Article 5 — Data protection principles", text: "Personal data must be: processed lawfully, fairly, and transparently; collected for specified, explicit, and legitimate purposes (purpose limitation); adequate, relevant, and limited to what is necessary (data minimisation); accurate and kept up to date; retained no longer than necessary (storage limitation); and processed with appropriate security (integrity and confidentiality). The controller is accountable for demonstrating compliance with all principles." },
      { ref: "Article 6 — Lawful basis for processing", text: "Processing is only lawful if at least one of six conditions is met: consent; performance of a contract; compliance with a legal obligation; protection of vital interests; performance of a task in the public interest; or legitimate interests of the controller or a third party (subject to override by the data subject's interests). AI systems processing personal data must identify and document a lawful basis before deployment." },
      { ref: "Article 9 — Special categories of data", text: "Processing of sensitive personal data (health, biometric, genetic, racial or ethnic origin, political opinions, religious beliefs, trade union membership, sexual orientation) is prohibited except under specified conditions including explicit consent, vital interests, or substantial public interest. AI systems using such data for training or inference face significantly higher compliance obligations." },
      { ref: "Article 13–14 — Transparency obligations", text: "Controllers must inform data subjects at the time of collection (Article 13) or within a reasonable period if not collected directly (Article 14) of: the identity of the controller; the purposes and legal basis for processing; recipients; retention periods; and data subject rights. AI systems that use personal data must disclose this use to individuals." },
      { ref: "Article 22 — Automated decision-making", text: "Individuals have the right not to be subject to decisions based solely on automated processing — including profiling — that produce legal or similarly significant effects. Exceptions apply (contract necessity, legal authorisation, explicit consent). Where automated decisions are permissible, individuals must be given the right to obtain human review, express their view, and contest the decision." },
      { ref: "Article 25 — Data protection by design and by default", text: "Controllers must implement data protection by design (embedding privacy into system architecture from the outset) and by default (processing only the minimum personal data necessary). Directly relevant for AI system design — privacy controls must be built in, not bolted on after deployment." },
      { ref: "Article 35 — Data Protection Impact Assessment (DPIA)", text: "Where processing is likely to result in high risk to individuals — including systematic profiling, large-scale processing of sensitive data, or systematic monitoring of public areas — controllers must conduct a DPIA before beginning processing. AI systems that profile individuals at scale, use sensitive data, or make automated decisions with significant effects are likely to require DPIAs." },
      { ref: "Articles 44–49 — International data transfers", text: "Transfers of personal data to third countries require either an adequacy decision, standard contractual clauses, binding corporate rules, or other approved mechanisms. No adequacy decision exists for Mainland China or Hong Kong. The EU–US Data Privacy Framework (July 2023) enables transfers to self-certified US organisations and was confirmed valid by the EU General Court in September 2025." },
      { ref: "Articles 83–84 — Penalties", text: "Two tiers of fines: up to €10 million or 2% of global annual turnover (for less serious violations such as processor obligations or record-keeping); up to €20 million or 4% of global annual turnover (for the most serious violations including data protection principles, lawful basis, data subjects' rights, and international transfers). Whichever is higher applies." }
    ],
    sources: [
      { label: "EUR-Lex — GDPR Official Full Text (Regulation (EU) 2016/679)", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng" },
      { label: "GDPR-Info.eu — Annotated GDPR Text", url: "https://gdpr-info.eu/" }
    ]
  },
  {
    id: 29,
    title: "Data Governance Act (DGA)",
    shortName: "DGA",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "Applying from 24 September 2023",
    overview: "A cross-sectoral EU regulation governing data sharing intermediaries and the reuse of public sector data. Distinct from the GDPR — addresses non-personal and mixed datasets alongside personal data. Creates rules for organisations acting as neutral data marketplaces (data intermediaries) and organisations collecting data for altruistic purposes. Directly relevant for AI companies that source training data from EU data intermediaries or operate as data sharing platforms.",
    keyArticles: [
      { ref: "Article 2 — Scope", text: "The DGA applies to: data held by public sector bodies that is subject to third-party rights (GDPR, IP, trade secrecy); providers of data intermediation services; and data altruism organisations. Both personal and non-personal data are in scope — where personal data is involved, the GDPR continues to apply alongside the DGA." },
      { ref: "Article 10 — Definition of data intermediation services", text: "Data intermediation services are services that establish commercial relationships for the purpose of data sharing between data subjects and holders on the one hand and data users on the other, including data marketplaces, B2B data brokers, and sector-specific data sharing platforms. Cloud storage providers and data analytics services are excluded." },
      { ref: "Article 11 — Notification obligation for data intermediaries", text: "Providers of data intermediation services must submit a formal notification to a designated national competent authority before commencing services. The notification must describe the service, the types of data handled, and the technical and organisational security measures in place." },
      { ref: "Neutrality requirement", text: "Data intermediaries must remain strictly neutral — they must not use the data they intermediate for their own purposes (including for AI model training). Structural separation is required: the intermediation service must be legally separate from any other commercial activities of the provider. Pricing must be fair and non-discriminatory." },
      { ref: "Data altruism organisations", text: "The DGA creates a voluntary 'EU Data Altruism Organisation' designation for non-profit entities that collect data for general interest purposes (e.g. medical research, public services). Registered organisations may use a common EU data altruism consent form — relevant for AI developers sourcing training data from altruism pools." },
      { ref: "Article 31 — International transfers", text: "Transfers of non-personal data by data intermediaries to third countries are subject to adequacy-equivalent safeguards to prevent regulatory circumvention — analogous to the GDPR's international transfer framework for personal data." }
    ],
    sources: [
      { label: "EUR-Lex — DGA Official Full Text (Regulation (EU) 2022/868)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A32022R0868" },
      { label: "European Commission — Data Governance Act Explained", url: "https://digital-strategy.ec.europa.eu/en/policies/data-governance-act-explained" }
    ]
  },
  {
    id: 30,
    title: "EU Data Act",
    shortName: "Data Act",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "Data access rights: 12 September 2025; full scope: 12 September 2027",
    overview: "Governs access to and use of data generated by connected products and related services (IoT devices, smart products, cloud services). Opens a new regulatory chapter on processing personal and non-personal IoT data. The Data Act itself does not create a new legal basis for processing personal data — the GDPR applies alongside it. Directly relevant for AI startups building on connected devices, wearables, or industrial IoT, and for any company using EU cloud services.",
    keyArticles: [
      { ref: "User data access rights (from 12 September 2025)", text: "Users of connected products and related services have the right to access data generated by their use of those products and services — easily, securely, and free of charge. Manufacturers and service providers must design connected products and services so that this data is directly accessible to users by default." },
      { ref: "Data sharing with third parties", text: "Users may share their connected product data with any third party of their choosing, at the same level of quality and with the same ease as the data holder itself provides. Data holders must make data available to third parties at the user's request under fair, reasonable, and non-discriminatory terms." },
      { ref: "Cloud switching rights (from 12 September 2025)", text: "Customers of data processing services (including IaaS, PaaS, and SaaS) have the right to switch to a competing provider. Providers must remove all technical, commercial, and contractual obstacles to effective switching. Maximum egress fees for switching must be reduced to zero by 2027." },
      { ref: "Relationship with the GDPR", text: "The Data Act does not create new legal bases for processing personal data. Where the data generated by connected products is personal data, data holders must identify a lawful basis under the GDPR for any access, sharing, or use. The two regulations apply in parallel — GDPR obligations cannot be reduced by relying on Data Act access rights." },
      { ref: "Full scope application (12 September 2027)", text: "Additional obligations applying from September 2027 include: requirements on data portability across cloud providers; interoperability requirements for data spaces; and further restrictions on international data transfers by cloud providers. Organisations should design their IoT and cloud architectures now to accommodate full compliance." }
    ],
    sources: [
      { label: "EUR-Lex — Data Act Official Full Text (Regulation (EU) 2023/2854)", url: "https://eur-lex.europa.eu/eli/reg/2023/2854/oj/eng" },
      { label: "European Commission — EU Data Act Overview", url: "https://digital-strategy.ec.europa.eu/en/policies/data-act" }
    ]
  },
  {
    id: 31,
    title: "ePrivacy Directive",
    shortName: "ePrivacy Directive",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "2002 (as amended 2009); currently being reformed",
    overview: "The EU's specific framework for privacy in electronic communications — governing cookies, tracking technologies, direct marketing, and the confidentiality of communications. Operates as a specific layer on top of the GDPR, adding requirements for digital communications contexts. The ePrivacy Regulation proposed in 2017 was formally withdrawn in February 2025; the 2025 Digital Omnibus proposal may move cookie consent rules from the Directive into the GDPR. The 2002/2009 Directive remains the current applicable law.",
    keyArticles: [
      { ref: "Cookie consent requirement", text: "Websites must obtain prior informed consent before placing non-essential cookies on a user's device. Consent must meet the GDPR standard: freely given, specific, informed, and unambiguous. Pre-ticked boxes and bundled consent are not valid. Analytics, advertising, and tracking cookies all require active consent." },
      { ref: "Communications confidentiality", text: "Electronic communications — including emails, messages, and voice calls — and their metadata must be treated as confidential. Interception or surveillance of communications is prohibited except under specific legal grounds. Relevant for AI systems that process communications data, including email monitoring AI or customer service bots." },
      { ref: "Direct marketing", text: "Unsolicited direct marketing by electronic means (email, SMS, automated calls) is prohibited without prior consent, except for existing customer relationships where a soft opt-in applies. AI-powered marketing automation systems must comply with these consent requirements." },
      { ref: "Reform status", text: "The ePrivacy Regulation proposed in 2017 was formally withdrawn by the European Commission in February 2025. The November 2025 Digital Omnibus proposal includes a provision to transfer cookie consent rules from the ePrivacy Directive into the GDPR, which would simplify the regulatory landscape. Until any reform takes effect, the current Directive remains applicable law." }
    ],
    sources: [
      { label: "EUR-Lex — ePrivacy Directive Official Text (Directive 2002/58/EC)", url: "https://eur-lex.europa.eu/eli/dir/2002/58/oj/eng" },
      { label: "European Commission — ePrivacy Overview", url: "https://digital-strategy.ec.europa.eu/en/policies/eprivacy" }
    ]
  },
  {
    id: 32,
    title: "Digital Markets Act (DMA)",
    shortName: "DMA",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "In force: November 2022; applicable from May 2023",
    overview: "Targets designated 'gatekeeper' platforms — large tech companies with significant market power, designated by the European Commission. Imposes obligations around data access, interoperability, and prohibitions on self-preferencing. Directly relevant for AI companies that depend on gatekeeper platforms for distribution, data access, or cloud infrastructure. While the DMA does not apply to most startups, it creates obligations on the gatekeepers they use that indirectly benefit smaller companies.",
    keyArticles: [
      { ref: "Gatekeeper designation", text: "A company is designated a gatekeeper if it provides a core platform service (search, social media, messaging, operating systems, browsers, cloud, advertising, virtual assistants, or connected TV) and meets quantitative thresholds: annual EU turnover ≥€7.5 billion, or market capitalisation ≥€75 billion, plus ≥45 million monthly end users and ≥10,000 annual business users. Current designated gatekeepers include Alphabet, Amazon, Apple, ByteDance, Meta, and Microsoft." },
      { ref: "Data access obligations", text: "Gatekeepers must provide business users with access to data generated by those users' activities on the platform — including data generated by end users. This creates rights for companies distributing through App Store or Google Play to access data about their own users, enabling better AI model training and personalisation." },
      { ref: "Interoperability requirements", text: "Gatekeepers must ensure interoperability with third-party services — particularly relevant for messaging platforms (ensuring open APIs) and operating systems (preventing app store monopolies). This creates practical obligations that benefit AI application developers." },
      { ref: "Prohibition on self-preferencing", text: "Gatekeepers are prohibited from favouring their own products and services over those of third-party business users in rankings and search results. Directly relevant for AI companies competing with platform-owned AI tools on those platforms." },
      { ref: "Penalties", text: "Fines up to 10% of global annual turnover for violations; up to 20% for repeat infringements. For systematic non-compliance, the Commission may impose structural remedies including mandatory divestiture of parts of the gatekeeper's business." }
    ],
    sources: [
      { label: "EUR-Lex — DMA Official Full Text (Regulation (EU) 2022/1925)", url: "https://eur-lex.europa.eu/eli/reg/2022/1925/oj/eng" },
      { label: "European Commission — Digital Markets Act Overview", url: "https://digital-strategy.ec.europa.eu/en/policies/digital-markets-act" }
    ]
  },
  {
    id: 33,
    title: "Digital Services Act (DSA)",
    shortName: "DSA",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "In force: November 2022; applicable from February 2024",
    overview: "Governs online platforms and intermediaries operating in the EU — covering content moderation, transparency obligations, algorithmic accountability, and advertising restrictions. Guidelines on the interplay between the DSA and the GDPR ensure consistent interpretation where intermediary service providers process personal data. Particularly relevant for AI companies operating platforms with user-generated content, recommendation algorithms, or targeted advertising.",
    keyArticles: [
      { ref: "Scope and tiered obligations", text: "The DSA applies in tiers: all intermediary services (basic obligations); hosting services (notice and action for illegal content); online platforms (additional transparency and accountability); and very large online platforms and search engines (VLOPs/VLOSEs, with >45 million EU users, facing the most stringent requirements). AI-powered platforms must assess which tier applies to their service." },
      { ref: "Algorithmic transparency", text: "Online platforms using recommender systems must provide users with at least one option that is not based on profiling. Platforms must explain in their terms of service the main parameters of their recommender systems and why certain content is recommended. VLOPs/VLOSEs must publish transparency reports and make their recommender systems accessible for research." },
      { ref: "Advertising transparency", text: "Online platforms must ensure that users can identify advertising clearly, know who paid for it, and understand why it was shown to them. Targeting of advertising based on sensitive data (including data revealing political opinions, health, or sexual orientation) is prohibited. Targeting of minors is prohibited." },
      { ref: "Risk assessments for VLOPs/VLOSEs", text: "Very large online platforms must conduct annual risk assessments covering: the spread of illegal content; negative effects on fundamental rights; intentional manipulation of the service; and risks to public security. These assessments must be audited by independent bodies and shared with regulators." },
      { ref: "Interplay with GDPR", text: "Where intermediary service providers process personal data in the course of their services, both the DSA and the GDPR apply. The European Commission and the European Data Protection Board have issued guidelines to ensure consistent interpretation — the DSA's obligations do not limit the GDPR's requirements, and vice versa." },
      { ref: "Penalties", text: "Fines up to 6% of global annual turnover for violations; up to 1% for providing incorrect, incomplete, or misleading information. For VLOPs/VLOSEs, the Commission may impose periodic penalty payments of up to 5% of average daily global turnover." }
    ],
    sources: [
      { label: "EUR-Lex — DSA Official Full Text (Regulation (EU) 2022/2065)", url: "https://eur-lex.europa.eu/legal-content/EN/LSU/?uri=uriserv:OJ.L_.2022.277.01.0001.01.ENG" },
      { label: "European Commission — Digital Services Act Overview", url: "https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package" }
    ]
  }
];

// ── THEME CONFIG ─────────────────────────────────────────────
const themeConfig = {
  data:         { label: "Data Governance",           cssClass: "data" },
  crossborder:  { label: "Cross-Border Data Flows",   cssClass: "crossborder" },
  transparency: { label: "Algorithmic Transparency",  cssClass: "transparency" },
  licensing:    { label: "Licensing & Certification", cssClass: "licensing" }
};

let activeTheme = "";

// ── REGION CHANGE ────────────────────────────────────────────
function onRegionChange() {
  const region = document.getElementById('region-filter').value;
  const block  = document.getElementById('country-block');
  const sel    = document.getElementById('country-filter');
  if (!region || !countryMap[region]) { block.style.display = 'none'; sel.value = ''; return; }
  sel.innerHTML = '<option value="">All countries</option>';
  countryMap[region].forEach(c => {
    const o = document.createElement('option');
    o.value = c.value; o.textContent = c.label;
    sel.appendChild(o);
  });
  if (countryMap[region].length === 1) sel.value = countryMap[region][0].value;
  block.style.display = 'block';
}

// ── THEME PILL ───────────────────────────────────────────────
function selectTheme(btn) {
  document.querySelectorAll('.theme-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  activeTheme = btn.dataset.theme;
}

// ── FILTERS ──────────────────────────────────────────────────
function applyFilters() {
  const region  = document.getElementById('region-filter').value;
  const country = document.getElementById('country-filter')?.value || '';
  const keyword = document.getElementById('search-input').value.toLowerCase().trim();

  let list = regulations.filter(reg => {
    const mR = !region      || reg.region  === region;
    const mC = !country     || reg.country === country;
    const mT = !activeTheme || reg.theme   === activeTheme;
    const mK = !keyword ||
      reg.title.toLowerCase().includes(keyword) ||
      reg.shortName.toLowerCase().includes(keyword) ||
      reg.overview.toLowerCase().includes(keyword) ||
      reg.keyArticles.some(a => a.text.toLowerCase().includes(keyword) || a.ref.toLowerCase().includes(keyword));
    return mR && mC && mT && mK;
  });

  renderActiveFilterTags(region, country, activeTheme, keyword);
  const overviewKey = region && activeTheme ? `${region}_${activeTheme}` : null;
  renderOverview(overviewKey);
  renderTiles(list);
}

// ── OVERVIEW PANEL ───────────────────────────────────────────
function renderOverview(key) {
  const el = document.getElementById('overview-panel');
  if (!key || !topicOverviews[key]) { el.style.display = 'none'; el.innerHTML = ''; return; }
  const ov = topicOverviews[key];
  el.style.display = 'block';
  el.innerHTML = `
    <div class="overview-inner">
      <p class="overview-eyebrow">Topic Overview</p>
      <h2 class="overview-title">${ov.title}</h2>
      <p class="overview-intro">${ov.intro}</p>
      <h3 class="overview-sub">Key Points</h3>
      <ul class="overview-list">${ov.keyPoints.map(p => `<li>${p}</li>`).join('')}</ul>
      <div class="overview-note"><strong>Note: </strong>${ov.note}</div>
    </div>`;
}

// ── TILE GRID ────────────────────────────────────────────────
/*
  Each regulation is a small square tile showing only the
  short name and regulation title. Clicking opens the modal.
  Tiles are grouped by theme.
*/
function renderTiles(list) {
  const grid    = document.getElementById('results-grid');
  const empty   = document.getElementById('empty-state');
  const countEl = document.getElementById('results-count');

  if (list.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    countEl.textContent = 'No regulations found';
    return;
  }
  empty.style.display = 'none';
  countEl.textContent = `Showing ${list.length} regulation${list.length !== 1 ? 's' : ''}`;

  // Group by theme
  const groups = {};
  list.forEach(r => { if (!groups[r.theme]) groups[r.theme] = []; groups[r.theme].push(r); });

  const order = ['data', 'crossborder', 'transparency', 'licensing'];
  let html = '';
  order.forEach(theme => {
    if (!groups[theme]) return;
    const tc = themeConfig[theme];
    html += `
      <div class="theme-group">
        <div class="theme-group-header">
          <span class="theme-tag ${tc.cssClass}">${tc.label}</span>
          <span class="theme-group-count">${groups[theme].length} regulation${groups[theme].length !== 1 ? 's' : ''}</span>
        </div>
        <div class="tiles-grid">
          ${groups[theme].map(buildTile).join('')}
        </div>
      </div>`;
  });
  grid.innerHTML = html;
}

// ── BUILD TILE ───────────────────────────────────────────────
function buildTile(reg) {
  return `
    <button class="reg-tile" onclick="openModal(${reg.id})" title="${reg.title}">
      <span class="tile-badge">${reg.shortName}</span>
      <span class="tile-name">${reg.title}</span>
    </button>`;
}

// ── MODAL ────────────────────────────────────────────────────
function openModal(id) {
  const reg = regulations.find(r => r.id === id);
  if (!reg) return;
  const tc = themeConfig[reg.theme];

  const articles = reg.keyArticles.map(a => `
    <div class="article-row">
      <span class="article-ref">${a.ref}</span>
      <span class="article-text">${a.text}</span>
    </div>`).join('');

  const sourcesHtml = (reg.sources || [
    { label: reg.source, url: reg.sourceUrl },
    ...(reg.secondaryUrl ? [{ label: "Secondary Source", url: reg.secondaryUrl }] : [])
  ]).map((s, i) => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer"
       class="source-link ${i === 0 ? 'primary' : 'secondary'}">${s.label} ↗</a>
  `).join('');

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-region">${reg.regionLabel} · ${reg.countryLabel}</div>
    <h2 class="modal-title">${reg.title}</h2>
    <span class="theme-tag ${tc.cssClass}" style="margin-bottom:16px;display:inline-block">${tc.label}</span>
    <div class="modal-section">
      <h3>Overview</h3>
      <p>${reg.overview}</p>
    </div>
    <div class="modal-section">
      <h3>Effective Date</h3>
      <p>${reg.effectiveDate}</p>
    </div>
    <div class="modal-section">
      <h3>Key Articles</h3>
      <div class="articles-list">${articles}</div>
    </div>
    <div class="modal-sources">
      <h3 style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);margin-bottom:10px;">Sources</h3>
      <div class="sources-list">${sourcesHtml}</div>
    </div>`;

  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ── ACTIVE FILTER TAGS ───────────────────────────────────────
function renderActiveFilterTags(region, country, theme, keyword) {
  const container = document.getElementById('active-tags');
  container.innerHTML = '';
  const tags = [];
  if (region)  tags.push({ label: document.getElementById('region-filter').options[document.getElementById('region-filter').selectedIndex].text, clear: () => { document.getElementById('region-filter').value = ''; document.getElementById('country-block').style.display = 'none'; applyFilters(); } });
  if (country) tags.push({ label: document.getElementById('country-filter').options[document.getElementById('country-filter').selectedIndex].text, clear: () => { document.getElementById('country-filter').value = ''; applyFilters(); } });
  if (theme)   tags.push({ label: themeConfig[theme]?.label || theme, clear: () => { activeTheme = ''; document.querySelectorAll('.theme-pill').forEach(p => p.classList.remove('active')); document.querySelector('.theme-pill[data-theme=""]').classList.add('active'); applyFilters(); } });
  if (keyword) tags.push({ label: `"${keyword}"`, clear: () => { document.getElementById('search-input').value = ''; applyFilters(); } });
  tags.forEach(t => {
    const el = document.createElement('div');
    el.className = 'active-tag';
    el.innerHTML = `${t.label}<button class="tag-remove">×</button>`;
    el.querySelector('.tag-remove').addEventListener('click', t.clear);
    container.appendChild(el);
  });
}

// ── CLEAR FILTERS ────────────────────────────────────────────
function clearFilters() {
  document.getElementById('region-filter').value = '';
  document.getElementById('search-input').value  = '';
  document.getElementById('country-block').style.display = 'none';
  if (document.getElementById('country-filter')) document.getElementById('country-filter').value = '';
  activeTheme = '';
  document.querySelectorAll('.theme-pill').forEach(p => p.classList.remove('active'));
  document.querySelector('.theme-pill[data-theme=""]').classList.add('active');
  document.getElementById('active-tags').innerHTML = '';
  document.getElementById('overview-panel').style.display = 'none';
  renderTiles(regulations);
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
document.getElementById('search-input').addEventListener('input', applyFilters);
document.getElementById('explore-btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('platform').scrollIntoView({ behavior: 'smooth' });
});

renderTiles(regulations);