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

  northamerica_data: {
    title: "Data Governance — United States",
    intro: "United States privacy law is made up of national, state, and local laws and regulations. There is no comprehensive national privacy law — instead, federal law addresses specific sectors while states have built an increasingly dense patchwork of comprehensive privacy statutes. Compliance is determined by two questions: what sector does the AI operate in, and where are its users? A health AI serving California patients faces HIPAA and CCPA simultaneously.",
    keyPoints: [
      "No comprehensive federal privacy law exists. The American Privacy Rights Act passed a House subcommittee in May 2024 but expired without a full vote and has not been reintroduced.",
      "Federal law is sector-specific: HIPAA (health), GLBA (financial), FCRA (credit), FERPA (education), COPPA (children under 13), and FTC Act Section 5 (deceptive practices across all sectors).",
      "Twenty states have comprehensive consumer privacy laws as of 2026. California's CCPA/CPRA is the de facto national baseline; Texas's TDPSA applies with no revenue threshold, making it unusually broad in reach.",
      "Illinois BIPA is uniquely consequential — the only state law granting individuals a private right of action for biometric privacy violations, with statutory damages per violation.",
      "The FTC treats broken privacy promises as deceptive practices — meaning an organisation's own privacy policy is enforceable against it even in states with no dedicated privacy law.",
      "Several federal statutes have extraterritorial reach. HIPAA applies to foreign companies processing health data of US patients, including via telemedicine or IT services."
    ],
    note: "The practical short list for companies selling nationally is California, Texas, Colorado, Connecticut, Illinois BIPA if biometrics are involved, and whichever states hold the majority of customers. State law obligations should be mapped by customer location rather than by company headquarters."
  },

  northamerica_crossborder: {
    title: "Cross-Border Data Flows — United States",
    intro: "The US does not generally require governmental registrations, filings, or approvals for routine cross-border transfers of personal or commercial data. There is no equivalent to GDPR Chapter V or China's security assessment regime. However, this permissive default is punctured by targeted restrictions that can be extremely consequential — most significantly the DOJ Bulk Data Rule, which names China (including Hong Kong and Macau) as a country of concern and carries criminal penalties.",
    keyPoints: [
      "Default position: no general data export authorisation regime. Federal law imposes no approval requirement, and state privacy laws require only contractual safeguards rather than government permission.",
      "The DOJ Bulk Data Rule (28 CFR Part 202) is the most significant exception — prohibiting or restricting transactions involving bulk US sensitive personal data with China, Hong Kong, Macau, Russia, Iran, North Korea, Cuba, and Venezuela. Effective 8 April 2025.",
      "The CLOUD Act empowers US law enforcement to compel service providers to produce data in their possession, custody, or control regardless of where it is stored — meaning data residency alone rarely insulates records from US legal process.",
      "Export controls (EAR and ITAR) restrict transfers of controlled technical data. The 'deemed export' doctrine means sharing controlled data with a foreign national inside the US can itself trigger licensing requirements.",
      "Sector-specific laws impose contractual rather than approval-based safeguards: HIPAA requires Business Associate Agreements with overseas vendors; FERPA applies the same consent conditions to overseas disclosures; GLBA requires opt-out rights and Safeguards Rule compliance regardless of recipient location."
    ],
    note: "For HSITP organisations the DOJ Bulk Data Rule is the critical instrument — it explicitly covers Hong Kong and Macau alongside Mainland China. A US company, or a company with US operations, transferring bulk sensitive personal data of US persons to a GBA entity should treat this as a high-priority compliance issue running in parallel with its PIPL obligations."
  },

  northamerica_transparency: {
    title: "Algorithmic Transparency & Explainability — United States",
    intro: "The US has no comprehensive federal AI legislation. Congress has enacted only one AI-specific law — the TAKE IT DOWN Act. Binding transparency obligations therefore sit almost entirely at state level, where transparency and disclosure requirements have proven the most politically durable form of AI regulation. This landscape is actively contested: the December 2025 Executive Order 'Ensuring a National Policy Framework for Artificial Intelligence' seeks to preempt state AI laws, but no federal preemption has been enacted and state laws remain enforceable.",
    keyPoints: [
      "Federal layer is thin: the TAKE IT DOWN Act (deepfake removal), FTC Act Section 5 enforcement against AI washing, and the voluntary NIST AI Risk Management Framework, which functions as the de facto federal reference standard.",
      "California is the most comprehensive state — four separate transparency instruments covering AI-generated content provenance, automated decision-making, frontier model safety disclosure, and training data documentation.",
      "Colorado repealed and replaced its AI Act in May 2026. The narrower Automated Decision-Making Technology Act focuses on point-of-interaction notice and post-adverse-outcome explanations, effective January 2027.",
      "Illinois, Texas, Utah, and New York City each impose sector or use-case specific obligations — employment AI notice, prohibited AI purposes, consumer disclosure on request, and mandatory bias audits respectively.",
      "Sector regulators apply existing law to AI: the NAIC Model Bulletin (adopted in 25 states) for insurers, FCRA and ECOA adverse action notices for credit, and EEOC guidance for employment.",
      "The CFPB has confirmed that adverse action notices must state specific reasons — meaning 'the algorithm said no' is not a legally sufficient explanation for an AI-driven credit decision."
    ],
    note: "This is the fastest-moving section of the platform. Colorado's shift from SB 24-205 to SB 26-189 in a single year demonstrates that US AI rules should be treated as moving targets. Organisations should verify current status before relying on any entry, and monitor the federal preemption litigation initiated under the December 2025 Executive Order."
  },

  northamerica_licensing: {
    title: "Licensing & Certification — United States",
    intro: "There is no federal AI licensing, registration, or pre-market approval requirement in the United States. Nothing equivalent to Mainland China's CAC filing exists. A company can deploy an AI product without any government approval specific to its AI functionality — unless it falls into a regulated sector. Where licensing applies, it applies because of what the AI does, not because it is AI. The FDA does not license 'AI'; it licenses medical devices, and AI-enabled medical devices go through the same pathways as any other device with AI-specific additions layered on.",
    keyPoints: [
      "No general AI licensing regime exists at federal or state level. Deployment of a general-purpose AI product requires no AI-specific government approval.",
      "Healthcare is the most developed sector by a wide margin. AI-enabled Software as a Medical Device triggers the full FDA apparatus — 510(k) or De Novo submission, Predetermined Change Control Plan, labelling, post-market surveillance, and cybersecurity compliance.",
      "The Predetermined Change Control Plan is the key AI-specific regulatory innovation — allowing manufacturers to ship pre-authorised model updates without a new clearance for each one.",
      "Financial services has no AI-specific licence. AI governance folds into existing SEC registration, FINRA supervision rules, and state activity licences. No US financial regulator requires a written AI governance policy in a licence application, unlike Hong Kong's SFC.",
      "Aviation requires FAA certification for AI in flight-critical systems. Defence and dual-use AI requires ITAR or EAR export licences before international transfer, demonstration, or deployment.",
      "NYC Local Law 144 is the closest thing to AI certification outside healthcare — mandatory annual independent bias audits function as third-party attestation, conceptually similar to conformity assessment."
    ],
    note: "The US is simultaneously the most permissive jurisdiction for general AI deployment and one of the most demanding for medical AI. This is not a contradiction — US regulation is activity-based rather than technology-based. A founder building a general-purpose tool faces almost no licensing burden; the same founder building a diagnostic tool faces 510(k) clearance, PCCP planning, bias analysis, post-market surveillance, and ISO 13485 quality systems."
  },

  eu_crossborder: {
    title: "Cross-Border Data Flows — European Union",
    intro: "The EU operates the world's most consequential cross-border data transfer regime. GDPR Chapter V inverts the default position: every outbound transfer is prohibited unless a mechanism is in place. The legal duty sits with the EU exporter, not the importer — and 'transfer' is broader than most organisations assume. Cloud storage, remote access from a third country, and intra-group transfers all count. A Shenzhen engineer accessing an EU database from China is a transfer, even though no data was 'sent' anywhere.",
    keyPoints: [
      "Three routes in priority order: adequacy decision (Article 45), appropriate safeguards such as SCCs or BCRs (Article 46), or narrow derogations (Article 49). Check adequacy first; derogations are a last resort, not a business model.",
      "Neither Mainland China nor Hong Kong holds adequacy. Transfers from the EU to either jurisdiction require Article 46 safeguards plus a Transfer Impact Assessment.",
      "Schrems II (CJEU C-311/18) made SCCs alone insufficient. Exporters must assess whether third-country law — including state access provisions — undermines the safeguards, and add supplementary technical measures where it does.",
      "The EU–US Data Privacy Framework enables transfers to self-certified US organisations without additional safeguards. Upheld by the General Court in Latombe (September 2025), but prudent organisations maintain SCC fallbacks given the fate of Safe Harbour and Privacy Shield.",
      "Onward transfers require their own mechanism. A processor in the EEA sub-contracting to a non-EEA sub-processor must ensure Chapter V covers that onward flow — mirroring the GBA Standard Contract's onward transfer limitation.",
      "Non-personal data is separately controlled: DGA Article 31 imposes adequacy-equivalent safeguards on data intermediaries, and Data Act Chapter VII requires cloud providers to resist foreign governmental access conflicting with EU law."
    ],
    note: "The asymmetry with Hong Kong is stark and worth understanding. An EU-to-Hong Kong transfer requires SCCs plus a Transfer Impact Assessment that must grapple with PRC state access law. A Hong Kong-to-EU transfer faces no Hong Kong-side restriction at all, since PDPO Section 33 has never been brought into force. Enforcement risk is substantial: supervisory authorities may impose transfer bans under Article 58(2), which can be more operationally disruptive than any fine."
  },

  eu_transparency: {
    title: "Algorithmic Transparency & Explainability — European Union",
    intro: "The EU's transparency regime is anchored in AI Act Article 50, applicable since 2 August 2026. Notably, Article 50 was left untouched when the Digital Omnibus deferred the high-risk regime by 16 months — making transparency the AI Act obligation most organisations must actually satisfy today. It applies to all AI systems used in four specified situations, not only high-risk ones, and reaches extraterritorially to any business whose outputs meet EU users.",
    keyPoints: [
      "Article 50 covers four situations: systems interacting directly with people; systems generating synthetic content; emotion recognition and biometric categorisation; and deepfakes or AI-generated public-interest text.",
      "The synthetic content marking duty under Article 50(2) is a provenance obligation — outputs must be machine-readable and detectable by verification tools, not merely labelled for human readers.",
      "The Code of Practice on Transparency of AI-Generated Content was confirmed adequate by the Commission and AI Board in July 2026, making it the only EU-wide compliance tool assessed as adequate for Articles 50(2), (4) and (5).",
      "The Commission's final Article 50 Guidelines (20 July 2026) are the reference document national market surveillance authorities use when assessing compliance — the Code explains how to comply, the Guidelines explain what compliance requires.",
      "High-risk transparency duties under Articles 13 and 86 — interpretability by design, instructions for use, and an individual right to explanation — were deferred to December 2027, but the obligations themselves are unchanged.",
      "GDPR Articles 13–15 and 22 continue to apply in parallel wherever personal data is processed, and the Digital Services Act adds recommender system and advertising transparency for online platforms."
    ],
    note: "Three major jurisdictions arrived at near-identical synthetic content marking goals within twelve months: China's GB 45438-2025 (mandatory September 2025), the EU's Article 50(2) (August 2026), and California's SB 942 (August 2026). All three use technically incompatible standards — meeting one does not satisfy the others."
  },

  eu_licensing: {
    title: "Licensing & Certification — European Union",
    intro: "The EU does not license AI in the way China does. Instead it applies its established product-safety model: providers assess conformity themselves, declare it, affix a CE marking, and register in a public database, with third-party notified body involvement required only in specified cases. The high-risk regime was deferred by the Digital Omnibus to December 2027 — in part because only seven notified bodies were accredited for AI conformity assessment as of May 2026, against a target of 25.",
    keyPoints: [
      "Three conformity assessment routes under Article 43: internal control for most Annex III categories; notified body assessment for biometric systems without harmonised standards; and integration into sectoral procedures for Annex I products.",
      "The full pre-market sequence requires a conformity assessment, an EU declaration of conformity, CE marking under Article 48, and registration in the EU database — supported by the Articles 8–15 lifecycle requirements.",
      "GPAI model obligations under Articles 53 and 55 have applied since August 2025 and were untouched by the deferral. They impose documentation, copyright, and training data summary duties, with additional safety obligations for models with systemic risk.",
      "Medical AI faces the most demanding overlap: MDR or IVDR and the AI Act apply simultaneously, requiring integrated technical documentation. Notified bodies are already raising AI Act questions during MDR audits.",
      "Deployer obligations are independent of vendor compliance — fundamental rights impact assessments, human oversight, and use documentation remain the deployer's responsibility regardless of provider readiness.",
      "Reported costs run €35,000–85,000 for internal conformity assessment and €80,000–180,000 for external notified body assessment, with timelines of roughly 8 weeks internal and 14–22 weeks external."
    ],
    note: "The implementation contrast with Mainland China is striking. China's CAC filing regime has been operational since 2022 and had processed 538 base model filings by August 2025. The EU's conformity assessment regime was deferred to December 2027 partly because the technical standards and notified body capacity required to operate it did not exist in time."
  },

  uk_data: {
    title: "Data Governance — United Kingdom",
    intro: "The UK's data governance framework is a direct descendant of the GDPR, retained at Brexit as the UK GDPR and sitting alongside the Data Protection Act 2018. The Data (Use and Access) Act 2025 introduced the first substantial post-Brexit divergence, with provisions commencing in stages from 5 February 2026. Critically, the ICO does not regulate AI as a technology — its authority is tied specifically to personal data, which means an AI system falls within scope only where it trains on, generates, or makes decisions about personal data.",
    keyPoints: [
      "UK GDPR and the Data Protection Act 2018 remain the foundation. All GDPR core principles — lawfulness, purpose limitation, data minimisation, accuracy, storage limitation, and security — apply across the AI lifecycle from training data to deployment.",
      "The Data (Use and Access) Act 2025 received Royal Assent on 19 June 2025 and commenced in stages from 5 February 2026 under SI 2026/82, reforming research provisions, legitimate interests, subject access requests, and automated decision-making.",
      "The ICO's remit is bounded by personal data. An AI system trained solely on non-personal data sits outside ICO jurisdiction, though it may fall to another sector regulator.",
      "PECR governs cookies, tracking, and electronic marketing. The DUAA aligned PECR penalties with UK GDPR levels, substantially increasing exposure for tracking violations.",
      "The UK has no separate data classification regime comparable to China's three-tier DSL system, and no equivalent of the EU Data Act or Data Governance Act for non-personal or IoT data."
    ],
    note: "The UK's post-Brexit position is deliberate divergence within an adequacy-compatible envelope. Reforms must go far enough to offer regulatory advantage but not so far as to jeopardise the EU adequacy decision, which was renewed in December 2025 and runs to December 2031."
  },

  uk_crossborder: {
    title: "Cross-Border Data Flows — United Kingdom",
    intro: "The UK operates a Chapter V regime structurally mirroring the EU's — transfers are prohibited unless a mechanism applies — but with its own adequacy list, its own standard contract, and its own risk assessment methodology. The defining feature of the UK's position is that it holds EU adequacy in both directions of the relationship: EU-to-UK transfers flow freely, and the UK independently recognises third countries through its own 'data bridge' regulations.",
    keyPoints: [
      "The EU renewed the UK's adequacy decision on 19 December 2025, subject to a sunset clause running to 27 December 2031. EU-to-UK personal data transfers therefore require no additional safeguards.",
      "UK GDPR Chapter V mirrors the EU structure: transfers require UK adequacy regulations, appropriate safeguards, or a derogation — checked in that order.",
      "The International Data Transfer Agreement (IDTA) is the UK's standalone standard contract. The UK Addendum allows organisations already using EU SCCs to extend them to UK transfers without duplicating paperwork.",
      "A Transfer Risk Assessment is the UK analogue to the Schrems II TIA. The ICO offers its own methodology as an alternative to the EDPB approach — generally regarded as more proportionate and less onerous.",
      "The UK maintains its own data bridge list, largely inherited from the EU at Brexit, plus the UK–US Data Bridge extending the EU–US Data Privacy Framework. The UK can and does diverge from the EU list.",
      "Neither Mainland China nor Hong Kong holds UK adequacy. Transfers to either require an IDTA or UK Addendum plus a completed Transfer Risk Assessment."
    ],
    note: "The UK's ability to grant adequacy independently is a genuine post-Brexit divergence lever — but exercising it too aggressively risks the EU adequacy decision, since onward transfers from the UK to a jurisdiction the EU considers inadequate could be characterised as circumvention. This constrains how far the UK can realistically diverge."
  },

  uk_transparency: {
    title: "Algorithmic Transparency & Explainability — United Kingdom",
    intro: "The UK has deliberately chosen not to enact an AI statute. There is no UK AI Act and no AI bill before Parliament. The February 2025 government position confirmed that most AI systems should be regulated at the point of use by existing expert regulators — a return to the sector-led framework of the 2023 AI white paper. Transparency obligations therefore flow from data protection law, and the most significant recent change moves in the opposite direction to the EU.",
    keyPoints: [
      "Section 80 of the Data (Use and Access) Act 2025 replaced UK GDPR Article 22 with new Articles 22A to 22D, in force 5 February 2026. The old near-prohibition on solely automated decisions became a permissive regime subject to safeguards.",
      "Required safeguards where a solely automated decision produces legal or similarly significant effects: meaningful information about the decision, meaningful human intervention where required, the ability to make representations, and a mechanism to contest.",
      "The threshold for 'meaningful human involvement' now sits in statute rather than ICO guidance — forcing firms to document human review more thoroughly than the previous guidance demanded. Token-gesture review does not remove a decision from the ADM rules.",
      "The Data Protection Act 2018 (Code of Practice on AI and ADM) Regulations 2026 came into force 12 May 2026, imposing a statutory duty on the Information Commissioner to prepare an AI code. The code itself is expected in 2027.",
      "The ICO consulted on updated draft ADM and profiling guidance between 31 March and 29 May 2026, with final guidance expected in Summer 2026.",
      "Enforcement is already active: after reviewing evidence from more than 30 UK employers, the ICO found most AI recruitment tools constitute automated decision-making without the required safeguards, and that many employers do not recognise ADM is occurring at all."
    ],
    note: "The UK and EU have diverged sharply on the single most AI-relevant provision in near-identical inherited law. As the EU tightened through AI Act Article 86's right to explanation, the UK loosened Article 22 into a conditions-based regime. Two jurisdictions starting from the same statute reached opposite conclusions within eighteen months."
  },

  uk_licensing: {
    title: "Licensing & Certification — United Kingdom",
    intro: "There is no general AI licensing regime in the UK, consistent with the decision not to legislate horizontally. Where approval requirements exist, they attach to the regulated activity rather than to the AI itself — the same activity-based logic as the United States, and the opposite of Mainland China's technology-based CAC filing. Compliance in practice means mapping several sector frameworks simultaneously rather than satisfying a single AI authority.",
    keyPoints: [
      "No AI-specific licence, filing, or pre-market approval exists. An AI product can be deployed in the UK without any AI-specific government authorisation unless it falls within a regulated sector.",
      "The MHRA regulates AI forming part of medical devices. AI as a Medical Device follows UKCA marking requirements, and the AI Airlock regulatory sandbox tests novel AI medical devices in a supervised environment.",
      "For FCA-regulated firms, Consumer Duty, the Senior Managers and Certification Regime, and Operational Resilience requirements all apply to AI use. The FCA's Mills Review, launched 27 January 2026, is examining how the framework handles AI capabilities.",
      "The Treasury Committee has urged the FCA to publish comprehensive AI guidance for firms by the end of 2026. In the interim, expectations flow from existing principles rather than AI-specific rules.",
      "The AI Security Institute, renamed from the AI Safety Institute in February 2025, evaluates frontier model risk through voluntary testing agreements. It has no licensing authority — it assesses rather than approves.",
      "Other sector regulators publish increasingly prescriptive expectations: Ofcom under the Online Safety Act, OFGEM for energy, the SRA for legal services, and the CMA through its data and technology unit."
    ],
    note: "The contrast with Hong Kong is instructive because both jurisdictions are voluntary-by-default. Hong Kong's SFC requires a written AI governance policy in the licence application pack; the FCA has not gone that far. The UK regulates AI in financial services entirely through existing principles and supervision rather than through any application-stage requirement."
  },

  australia_data: {
    title: "Data Governance — Australia",
    intro: "Australia's framework rests on the Privacy Act 1988 and its thirteen Australian Privacy Principles, substantially reformed by the Privacy and Other Legislation Amendment Act 2024. The reforms introduced a statutory tort for serious invasions of privacy — a significant change in a jurisdiction that previously had no general privacy cause of action. Australia has also taken the hardest line of any jurisdiction in this repository on AI training data, twice rejecting a text and data mining copyright exemption.",
    keyPoints: [
      "The Privacy Act applies to APP entities — Commonwealth agencies and organisations with annual turnover above AU$3 million, plus certain small businesses regardless of turnover. The small business exemption is unusual internationally and remains under review.",
      "The POLA Act 2024 was the first substantial rewrite of the Privacy Act in years, introducing a statutory tort for serious invasions of privacy (in force June 2025) alongside stronger OAIC enforcement powers.",
      "The OAIC must develop and register the Privacy (Children's Online Privacy) Code 2026 by 10 December 2026, covering online services likely to be accessed by children.",
      "Australia rejected a text and data mining copyright exemption in October 2025 and again in April 2026. The July 2026 announcement went further, committing to prevent AI training on Australian creative works without the creator's control.",
      "The Security of Critical Infrastructure Act 2018 imposes data security and risk management obligations on critical infrastructure operators, relevant where AI operates within designated critical sectors.",
      "The OAIC is currently conducting a compliance sweep of privacy policies, signalling a shift from guidance toward proactive enforcement ahead of the December 2026 transparency deadline."
    ],
    note: "The copyright position is a live commercial constraint that sits outside the four themes but flows directly from data governance. For an organisation training models on scraped content, Australia is becoming one of the harder markets to enter — and the proposed legislation could require negotiating and paying for access to Australian content before training."
  },

  australia_crossborder: {
    title: "Cross-Border Data Flows — Australia",
    intro: "Australia operates the most permissive cross-border regime of any jurisdiction in this repository — more so even than the United States, which at least maintains the DOJ Bulk Data Rule. There is no adequacy list, no standard contractual clauses, no security assessment, and no export approval. The entire framework rests on accountability rather than authorisation: an Australian organisation remains directly liable for what its overseas recipient does with the data.",
    keyPoints: [
      "APP 8 requires an entity to take reasonable steps, before disclosing personal information overseas, to ensure the overseas recipient does not breach the APPs. There is no government approval, filing, or notification requirement.",
      "Section 16C is the enforcement mechanism: where an APP entity discloses personal information overseas, it remains accountable for any act or practice by the recipient that would breach the APPs if done in Australia.",
      "APP 8.2 provides exceptions where the recipient is subject to a substantially similar law with enforceable mechanisms; where the individual gives informed consent after being expressly told accountability will not apply; or where disclosure is required by law.",
      "The Privacy Act applies extraterritorially to organisations with an 'Australian link' — carrying on business in Australia and collecting personal information from Australia. An overseas AI vendor serving Australian customers may be directly captured.",
      "There is no Australian equivalent of the DOJ Bulk Data Rule, the EU adequacy framework, or China's security assessment. No destination jurisdiction is prohibited or restricted by name."
    ],
    note: "The practical consequence of section 16C is that contractual diligence replaces regulatory filing. An Australian organisation cannot discharge its obligation by pointing to a vendor's own compliance posture — it must be able to demonstrate that it took reasonable steps, and it wears the liability if the vendor fails."
  },

  australia_transparency: {
    title: "Algorithmic Transparency & Explainability — Australia",
    intro: "Australia's approach is deliberately a disclosure rule rather than a prohibition. New APP 1.7 to 1.9, commencing 10 December 2026, require organisations to disclose in their privacy policies when personal information is used in automated decisions that significantly affect individuals. Australia has explicitly declined to follow the EU AI Act's risk tiers and bans — organisations are not told they cannot automate decisions, only that they must be publicly honest that they do.",
    keyPoints: [
      "From 10 December 2026, an APP entity must comply with new transparency requirements where it arranges a computer program, using personal information, to make decisions that significantly affect an individual's rights or interests.",
      "The disclosure must cover the kinds of personal information used and the kinds of decisions made or assisted by automated decision-making — published in the privacy policy rather than provided individually.",
      "The OAIC released an Issues Paper on 18 May 2026 with submissions closing 15 June 2026. Final guidance is expected by September 2026, and the Paper telegraphs an expansive interpretive stance on what counts as ADM.",
      "The National AI Centre's Guidance for AI Adoption (October 2025) sets out six essential practices and is now the primary government guidance for responsible AI governance, alongside the earlier Voluntary AI Safety Standard.",
      "The Federal Court published a Generative AI Practice Note on 16 April 2026 governing disclosure of AI use in litigation — narrow in scope but a notable early institutional response.",
      "New South Wales passed the Work Health and Safety Amendment (Digital Work Systems) Act on 12 February 2026, imposing WHS duties on businesses using AI or algorithms to allocate work. Commencement is by proclamation and other states may follow."
    ],
    note: "The NSW approach is unusual internationally — regulating algorithmic management through workplace safety law rather than data protection or employment law. It creates a duty owed to workers by the business conducting the undertaking, which is a different legal architecture from the notice-and-consent model used elsewhere."
  },

  australia_licensing: {
    title: "Licensing & Certification — Australia",
    intro: "Australia had no general AI licensing regime and, as of December 2025, had explicitly ruled one out. That position changed on 15 July 2026, when the Prime Minister announced plans to legislate Australian Standards for AI and established an Office of AI within the Department of the Prime Minister and Cabinet. Notably, the proposed Standards target AI infrastructure — data centres, power, water, and training data provenance — rather than AI systems by risk tier.",
    keyPoints: [
      "No AI-specific licence currently exists. Approval requirements attach to the regulated activity rather than to the technology, as in the US and UK.",
      "The Australian Standards for AI, announced 15 July 2026, are intended to bring AI governance into a single clear, consistent and mandatory framework. National Cabinet was to consider the approach in August 2026, with legislation expected in Parliament in early 2027.",
      "The proposed framework would mandate that large data centre operators underwrite or supply their own power, avoid increasing household power prices, and minimise water usage — an infrastructure and resource framing rather than a safety framing.",
      "The Office of AI commenced operation on 15 July 2026 within the Department of the Prime Minister and Cabinet, coordinating AI policy across departments. It is a coordinating body, not a licensing authority.",
      "The Therapeutic Goods Administration regulates Software as a Medical Device, requiring inclusion in the Australian Register of Therapeutic Goods before supply. This is Australia's most developed sectoral approval regime for AI.",
      "APRA's CPS 230 Operational Risk Management, effective July 2025, captures AI systems supporting critical operations including third-party AI dependencies. ASIC applies existing AFS licensing without AI-specific requirements."
    ],
    note: "The 15 July 2026 announcement is not itself legislation and creates no new legal duties. Final scope, obligations, and commencement arrangements have not been published. Australia is the only jurisdiction in this repository proposing to regulate AI infrastructure as the primary object rather than AI systems — a genuinely distinctive regulatory target."
  },

  newzealand_data: {
    title: "Data Governance — New Zealand",
    intro: "New Zealand regulates AI through existing privacy law rather than AI-specific legislation. The Privacy Act 2020 and its thirteen Information Privacy Principles apply fully to AI-driven processing, meaning organisations must comply regardless of whether decisions are made by humans or automated systems. Where New Zealand goes further than most jurisdictions is biometrics: the Biometrics Code of Practice, issued in August 2025, is binding law rather than guidance.",
    keyPoints: [
      "The Privacy Act 2020 and its 13 Information Privacy Principles are the core framework. The OPC's September 2023 guidance confirms they apply across the full AI lifecycle, including generative AI.",
      "'Personal information' is defined broadly enough to include inaccurate or fabricated data — deepfakes and fake profiles — where a person is identifiable. This has direct implications for generative AI outputs, not just training inputs.",
      "The OPC guidance distinguishes training data, model artefacts such as weights and pre-trained models, and runtime inputs including prompts — treating each as raising different privacy questions.",
      "Purpose limitation is the central tension for AI: questions arise where organisations use existing datasets for AI-driven processes that differ materially from the original context of collection.",
      "The Biometrics Code of Practice, published August 2025, regulates the collection and use of biometric information. Codes issued under the Privacy Act have the force of law, making this binding rather than advisory.",
      "The Health Information Privacy Code and Credit Reporting Privacy Code impose additional binding sector rules directly relevant where AI processes health or credit data."
    ],
    note: "New Zealand has binding biometrics rules where most jurisdictions have none — stronger than Hong Kong's voluntary PCPD framework, and achieved without the AI-wide statute the EU required to regulate biometric categorisation. The Code followed the OPC's finding that the Foodstuffs North Island facial recognition trial complied with the Privacy Act, which remains a useful precedent for compliant FRT deployment."
  },

  newzealand_crossborder: {
    title: "Cross-Border Data Flows — New Zealand",
    intro: "IPP 12, introduced by the Privacy Act 2020, was New Zealand's first cross-border transfer restriction. It sits structurally between Australia's pure accountability model and the EU's authorisation model — a mechanism is required before disclosure, but there is no government approval and no filing. New Zealand also holds EU adequacy, placing it in a small group alongside Japan, South Korea, the UK, and Switzerland.",
    keyPoints: [
      "IPP 12 permits disclosure to a foreign recipient only where: the individual authorises it after being informed the recipient may not have comparable safeguards; the recipient is in a prescribed country; the recipient is subject to a comparable privacy law or binding scheme; or the recipient agrees by contract to comparable protections.",
      "New Zealand may designate prescribed countries by Order in Council, but the list remains very short in practice — most organisations rely on contractual protections instead.",
      "There is no government approval, security assessment, or filing requirement. The obligation is to select and document an appropriate mechanism, not to obtain permission.",
      "New Zealand holds an EU adequacy decision, meaning EU-to-New Zealand transfers require no additional safeguards. This is a genuine competitive advantage for New Zealand-based data processing serving European clients.",
      "Neither Mainland China nor Hong Kong is a prescribed country. Transfers to either require contractual protections providing comparable safeguards, or individual authorisation after disclosure of the risk."
    ],
    note: "The contrast with Australia is instructive despite the shared region. Australia's APP 8 requires only reasonable steps with continuing accountability under section 16C; New Zealand's IPP 12 requires an identified mechanism before disclosure. New Zealand is the stricter of the two on paper, though neither involves any regulator in the transfer decision."
  },

  newzealand_transparency: {
    title: "Algorithmic Transparency & Explainability — New Zealand",
    intro: "This is the clearest regulatory gap in the repository. New Zealand's Privacy Act 2020 does not address automated decision-making at all. The Privacy Commissioner identified ADM as a priority reform area in 2023, noting risks of bias and the need to align with international practice, but no legislative change has been introduced. There is no obligation to disclose the use of automated decision-making tools in a privacy policy or anywhere else.",
    keyPoints: [
      "No ADM-specific obligation exists. New Zealand has no equivalent to Australia's APP 1.7, the UK's GDPR Articles 22A–22D, or the EU AI Act's Article 86 right to explanation.",
      "IPP 8 is the closest binding hook: an agency must not use or disclose personal information — including for automated decision-making — without taking reasonable steps to ensure it is accurate, up to date, complete, relevant, and not misleading.",
      "IPP 6 and IPP 7 give individuals rights to access and correct personal information held about them. Applied to AI, these can surface inputs and outputs even without a dedicated explanation right.",
      "OPC guidance sets expectations rather than duties: senior leadership approval informed by documented risk assessments; Privacy Impact Assessments and Algorithmic Impact Assessments; transparency about AI use; engagement with Māori and affected communities; and human review for decisions affecting people.",
      "The OPC has emphasised that agencies remain responsible for decisions made using AI tools and cannot treat reliance on automated systems as displacing existing Privacy Act obligations.",
      "The Algorithm Charter for Aotearoa New Zealand, signed by most public sector agencies since 2020, covers transparency, partnership with Māori, human oversight, and data quality — but applies to government rather than the private sector."
    ],
    note: "The trans-Tasman gap is real and asymmetric. A New Zealand organisation serving Australian customers will be captured by APP 1.7 from 10 December 2026 while facing no equivalent domestic obligation, since the OAIC's reach is not limited to Australian-incorporated entities. New Zealand companies will effectively be regulated by Australian law before their own."
  },

  newzealand_licensing: {
    title: "Licensing & Certification — New Zealand",
    intro: "No AI-specific licensing, registration, or pre-market approval regime exists, consistent with the government's light-touch approach. Where approval requirements apply, they attach to the regulated activity. New Zealand's medical device regime is notably lighter than Australia's — Medsafe operates a notification database rather than a pre-market assessment process, making New Zealand one of the easiest developed markets for medical AI entry.",
    keyPoints: [
      "No AI-specific authorisation exists at any level. An AI product may be deployed in New Zealand without AI-specific government approval unless it falls within a regulated sector.",
      "AI qualifying as a medical device must be notified to the Web Assisted Notification of Devices (WAND) database before supply. WAND is a notification system, not a pre-market assessment — there is no conformity assessment requirement.",
      "The Therapeutic Products Act 2023, which would have modernised the regime, was repealed in 2024. The older Medicines Act framework remains in place, leaving New Zealand with a materially lighter medical device pathway than Australia's TGA process.",
      "The Financial Markets Authority and Reserve Bank apply existing conduct and prudential frameworks. Fair dealing provisions under the Financial Markets Conduct Act 2013 and the Conduct of Financial Institutions regime apply to AI-driven advice.",
      "No New Zealand financial regulator imposes an AI-specific licence condition comparable to Hong Kong's SFC requirement for a written AI governance policy in the licence application pack.",
      "The government has confirmed it will regulate AI in a light touch, proportionate way through amending existing legislation and principle-driven frameworks rather than an overarching AI statute."
    ],
    note: "The Medsafe position is a genuine finding rather than an omission. Where Australia requires ARTG inclusion with risk-based conformity assessment and the FDA requires 510(k) clearance, New Zealand requires only notification. For a medical AI developer choosing a first market, this is a material difference in time and cost to entry."
  },

  singapore_data: {
    title: "Data Governance — Singapore",
    intro: "Singapore's data governance rests on the Personal Data Protection Act 2012, substantially amended in 2020 to raise penalties and add breach notification. The PDPA applies to all organisations processing personal data in Singapore, including through AI systems. What distinguishes Singapore is the PDPC's willingness to answer practical questions other regulators avoid — its March 2024 Advisory Guidelines directly address when organisations may train AI on data they already hold without obtaining fresh consent.",
    keyPoints: [
      "Ten data protection obligations apply: consent, purpose limitation, notification, access and correction, accuracy, protection, retention limitation, transfer limitation, data breach notification, and accountability.",
      "Penalties reach SGD 1 million or 10% of annual turnover, whichever is higher — the turnover option was introduced by the 2020 amendments, putting Singapore broadly in line with GDPR-scale exposure.",
      "The PDPC's Advisory Guidelines on the Use of Personal Data in AI Recommendation and Decision Systems (March 2024) clarify when the business improvement and research exceptions permit training AI on existing datasets without fresh consent.",
      "Appointing a Data Protection Officer is mandatory for all organisations, with the DPO's business contact information required to be made publicly available.",
      "Data breach notification has been mandatory since February 2021 where a breach results in or is likely to result in significant harm, or is of significant scale.",
      "The Cybersecurity Act 2018 imposes incident reporting and audit obligations on Critical Information Infrastructure owners across eleven sectors, relevant where AI operates within designated CII."
    ],
    note: "The business improvement and research exceptions are the most practically useful feature of Singapore's framework for AI developers. Most jurisdictions leave the question of training on legacy datasets unresolved; the PDPC answered it directly, which materially reduces legal uncertainty for organisations building models on data collected for other purposes."
  },

  singapore_crossborder: {
    title: "Cross-Border Data Flows — Singapore",
    intro: "Singapore operates a prescribed-mechanism model. Section 26 of the PDPA prohibits transferring personal data outside Singapore except in accordance with requirements ensuring the recipient provides a comparable standard of protection, with Regulation 10 of the Personal Data Protection Regulations 2021 setting out the permitted routes. There is no government approval, filing, or security assessment — but unlike Australia, a specific mechanism must be identified before transfer.",
    keyPoints: [
      "Section 26 imposes the Transfer Limitation Obligation: personal data may only be transferred overseas where the recipient is bound to a comparable standard of protection.",
      "Regulation 10 sets the permitted mechanisms: legally enforceable obligations including contracts, binding corporate rules, or applicable law; specified certifications; or individual consent given after notification that protection may be reduced.",
      "Singapore participates in the APEC Cross-Border Privacy Rules and Privacy Recognition for Processors systems, and CBPR certification is expressly recognised as satisfying the transfer requirement — a route unavailable under the EU or UK frameworks.",
      "Singapore does not hold an EU adequacy decision. EU-to-Singapore transfers require standard contractual clauses plus a Transfer Impact Assessment, notwithstanding Singapore's regulatory maturity.",
      "No destination jurisdiction is prohibited by name. Transfers to Mainland China or Hong Kong are permitted subject to the same mechanism requirement as any other destination.",
      "The obligation sits with the transferring organisation to select, document, and stand behind the mechanism — no regulator reviews or approves the choice."
    ],
    note: "Singapore's model sits between Australia's pure accountability approach and the EU's authorisation model. A mechanism must be identified, as in New Zealand, but the recognised routes are broader — the APEC CBPR pathway in particular has no analogue in the European frameworks and reflects a distinctly Asia-Pacific approach to interoperability."
  },

  singapore_transparency: {
    title: "Algorithmic Transparency & Explainability — Singapore",
    intro: "Singapore has the most developed AI governance framework in Asia, achieved almost entirely without binding AI legislation. The distinction that matters is between form and effect: the Model AI Governance Framework is voluntary, but the PDPC assesses organisations against its standards in enforcement, and failure to implement its principles can constitute a PDPA failure where AI processes personal data. Voluntary in form, consequential in practice — a meaningfully different proposition from Hong Kong's frameworks.",
    keyPoints: [
      "The Model AI Governance Framework (2019, updated 2020) covers internal governance structures, determining the level of human involvement in AI-augmented decisions, operations management, and stakeholder communication. It is widely cited as a reference model across ASEAN.",
      "The human involvement matrix is the framework's most useful contribution — providing a structured basis for deciding when a human should be in-the-loop, over-the-loop, or out-of-the-loop, based on probability and severity of harm.",
      "The Model AI Governance Framework for Generative AI (2024) covers nine dimensions including hallucinations, bias, intellectual property, content provenance, cybersecurity, and systemic risk.",
      "The Model AI Governance Framework for Agentic AI (January 2026) was described by IMDA as the world's first governance framework for autonomous AI agents, addressing cascading failures and unauthorised actions across four risk dimensions.",
      "MAS FEAT Principles — Fairness, Ethics, Accountability and Transparency — have applied to financial sector AI since 2018, among the earliest sectoral AI principles issued anywhere.",
      "Binding deepfake rules exist through the Elections (Integrity of Online Advertising) (Amendment) Act 2024, with the Online Safety (Relief and Accountability) Bill expected to extend statutory redress via the Online Safety Commission in 2026."
    ],
    note: "The agentic AI framework is a genuine first-mover position. No other jurisdiction in this repository has issued governance guidance for autonomous AI agents. For organisations building agentic systems, Singapore's framework is currently the only structured reference available anywhere — roughly eighteen months ahead of comparable jurisdictions."
  },

  singapore_licensing: {
    title: "Licensing & Certification — Singapore",
    intro: "No AI-specific licensing or pre-market approval regime exists. What Singapore has built instead is an assurance ecosystem — AI Verify for testing, and from Q3 2026 the AI Tester Accreditation Programme, reported to be the first of its kind in Asia. The design is notable: rather than licensing AI systems, Singapore proposes to accredit the testers who assess them, which is closer to how financial auditing works than to the EU's notified body model.",
    keyPoints: [
      "No AI-specific authorisation exists and there are no AI-specific penalties. Liability flows from the PDPA, sectoral rules, and general law rather than from any AI statute.",
      "AI Verify, launched by IMDA in 2022 and now governed by the AI Verify Foundation, is a testing and assurance framework allowing organisations to assess AI systems through process checks and technical tests. It has been shared internationally as a candidate global assessment standard.",
      "The AI Tester Accreditation Programme launches by Q3 2026, accrediting the organisations that conduct AI assurance rather than certifying AI systems themselves — a structurally different approach to the conformity assessment model.",
      "MAS issued a consultation paper in November 2025 proposing formal AI Risk Management Guidelines for all financial institutions, covering board oversight, AI inventories, lifecycle controls, fairness, transparency, human oversight, and third-party risk. Consultation closed January 2026 with final guidelines expected in 2026.",
      "The Health Sciences Authority requires Software as a Medical Device to be registered on the Singapore Medical Device Register before supply, with dedicated AI Medical Device guidance issued in 2022 covering lifecycle management and change control.",
      "MAS co-funds financial institutions' AI adoption through the AI and Data Analytics Grant under the Financial Sector Technology and Innovation Scheme, subject to governance and capability criteria."
    ],
    note: "Accrediting testers rather than licensing systems scales differently from the conformity assessment model. The EU's high-risk regime was deferred partly because only seven notified bodies existed against a target of twenty-five; an accreditation model distributes assessment capacity across the market rather than concentrating it in designated bodies."
  },

  india_data: {
    title: "Data Governance — India",
    intro: "India's Digital Personal Data Protection Act 2023 is the country's first comprehensive data protection statute, with Rules notified in 2025 and a phased rollout running to 2027. Its architecture differs meaningfully from GDPR-family laws: there is no sensitive personal data category, and the Act introduces Consent Managers — registered intermediaries through which individuals manage consent across organisations, a mechanism with no analogue anywhere else.",
    keyPoints: [
      "The DPDP Act uses distinct terminology: Data Principal for the individual, Data Fiduciary for the controller, and Significant Data Fiduciary for a designated higher-obligation tier subject to additional audit and assessment duties.",
      "Unlike the SPDI Rules 2011 it replaces, the DPDP Act creates no special category of sensitive personal data. All personal data is treated uniformly, which is unusual internationally and simplifies classification while removing a familiar risk-tiering tool.",
      "Consent Managers are registered intermediaries through which Data Principals can give, manage, review, and withdraw consent across multiple Data Fiduciaries — a structural innovation not found in any other jurisdiction in this repository.",
      "Penalties reach INR 250 crore per breach, imposed by the Data Protection Board of India. There is no turnover-linked alternative, so exposure is capped in absolute terms rather than scaling with company size.",
      "The IT Act 2000 and SPDI Rules 2011 continue to apply during the transition, particularly Section 43A on negligent handling of sensitive personal data and Section 72A on disclosure in breach of contract.",
      "A direct conflict exists between frameworks: the DPDP Act requires minimal collection, limited retention, and purpose-bound use, while the IT Rules require extended retention and traceability for synthetic content."
    ],
    note: "The retention conflict between the DPDP Act and the IT Amendment Rules 2026 is unresolved and pulls platforms in opposite directions. Organisations subject to both should document their reasoning for whichever position they take, since neither framework currently yields to the other."
  },

  india_crossborder: {
    title: "Cross-Border Data Flows — India",
    intro: "India operates the inverse of the European model. Section 16 of the DPDP Act permits transfers to all countries except those the Central Government notifies as restricted — a blacklist rather than a whitelist. No country has been notified as of mid-2026. This makes India structurally the most permissive major jurisdiction in this repository on general transfers, while simultaneously maintaining some of the strictest sectoral localisation mandates anywhere.",
    keyPoints: [
      "Section 16 permits transfer of personal data outside India to any country except those notified as restricted by the Central Government. There is no adequacy list, no standard contractual clauses, and no transfer impact assessment requirement.",
      "The blacklist model was a deliberate reversal from earlier draft bills, which proposed whitelist approaches. As of mid-2026 no country has been notified as restricted.",
      "Section 16(2) preserves stricter sectoral requirements, and several are far more restrictive than the general rule — meaning the DPDP Act alone is an unreliable guide to what a given organisation may do.",
      "RBI Payment Systems Data localisation (2018) requires all payment system data to be stored on servers located in India. This is a hard localisation mandate, not a transfer condition.",
      "IRDAI requires insurance policyholder records to be held in India, and telecom licence conditions impose subscriber data localisation requirements.",
      "For a fintech organisation, the RBI mandate is the operative constraint rather than the DPDP Act — a pattern that would catch out anyone reasoning from the general data protection law alone."
    ],
    note: "India has the most permissive general cross-border regime and among the strictest sectoral localisation requirements simultaneously. Which applies depends entirely on sector, not on the data protection statute. Assessment must start with the sector, not with the DPDP Act."
  },

  india_transparency: {
    title: "Algorithmic Transparency & Explainability — India",
    intro: "India moved decisively in February 2026. The IT (Intermediary Guidelines and Digital Media Ethics Code) Amendment Rules 2026, notified 10 February and effective 20 February, brought AI-generated content — legally termed synthetically generated information — within platform due diligence obligations for the first time. India's labelling requirement is the most prescriptive in the world, and its enforcement mechanism is loss of safe harbour rather than monetary penalty.",
    keyPoints: [
      "Synthetically generated information covers all content produced or altered by AI or similar technologies to create false representations. The definition is deliberately broad and technology-neutral.",
      "All SGI must carry clear and prominent labelling — visual or audio prefixed — together with permanent provenance metadata. Visual labels must cover at least 10% of the visual display area, the most prescriptive specification of any jurisdiction.",
      "Unlawful content must be removed within 3 hours of a court order or government notice. High-risk categories including non-consensual intimate imagery and deepfakes carry a stricter 2-hour window.",
      "Missing the removal window results in immediate loss of safe harbour protection under Section 79 of the IT Act — exposing the platform to liability for all user content it hosts, a categorically different risk from a fine.",
      "Platforms must deploy automated detection tools for synthetic content rather than relying solely on user reporting.",
      "The Draft IT Second Amendment Rules 2026, released 30 March 2026, remain in consultation. They would expand direct blocking powers under Rule 3(4) and extend data retention beyond 180 days.",
      "India has no automated decision-making right. Unlike the EU, UK, or Australia, the DPDP Act confers no right to explanation or human review of automated decisions."
    ],
    note: "Four jurisdictions now mandate synthetic content marking with mutually incompatible specifications: China's GB 45438-2025 sets watermark dimensions and metadata fields; the EU requires machine-readable marking without technical specification; California requires latent disclosure and a detection tool; India requires a visible label covering 10% of the frame. A single implementation cannot satisfy all four."
  },

  india_licensing: {
    title: "Licensing & Certification — India",
    intro: "No AI-specific licensing or pre-market approval regime exists in India. Sectoral regulators apply existing frameworks, with the Reserve Bank and SEBI the most active. The Digital India Act, still in consultation, is expected to introduce risk-based platform classification and deeper AI-specific provisions, potentially replacing the IT Act 2000 framework entirely. A Private Member's Bill on AI ethics introduced in December 2025 signals parliamentary appetite for binding obligations on developers themselves.",
    keyPoints: [
      "No AI-specific authorisation exists. Approval requirements attach to the regulated activity rather than to the technology, consistent with the US, UK, and Australian approach.",
      "Software as a Medical Device requires registration with the Central Drugs Standard Control Organisation under the Medical Devices Rules 2017, with risk-based classification from Class A to D. AI-specific guidance remains limited compared with Singapore's HSA or Australia's TGA.",
      "The RBI's Committee on Framework for Responsible and Ethical Enablement of AI reported in 2025, recommending governance obligations for financial institutions deploying AI. Implementation guidance is developing.",
      "SEBI requires market intermediaries to disclose AI and machine learning applications, with periodic reporting on systems used in trading, advisory, and compliance functions.",
      "The India AI Governance Guidelines, published by MeitY in November 2025, set voluntary principles for responsible AI development across the lifecycle. Non-binding but referenced by sectoral regulators.",
      "The IndiaAI Mission is a funding and capacity programme — compute provision, dataset development, and startup support — rather than a regulatory instrument."
    ],
    note: "The February 2026 amendment is best read as the opening move of a longer sequence. The Digital India Act would introduce risk-based classification and AI-specific provisions, and the December 2025 Private Member's Bill signals appetite for obligations on model developers rather than only on platforms. Organisations should expect the regulatory perimeter to widen."
  },

  saudi_arabia_data: {
    title: "Data Governance — Saudi Arabia",
    intro: "Saudi Arabia regulates AI through data law rather than through any AI statute. The Personal Data Protection Law, issued by Royal Decree M/19 and fully enforced from September 2024, is administered by SDAIA — uniquely, the same authority responsible for both data protection and national AI strategy. SDAIA was created by Royal Order in August 2019 and reports directly to the Prime Minister, giving it unusual institutional weight for a data regulator.",
    keyPoints: [
      "The PDPL requires controllers to register on the National Data Governance Platform. This is an administrative precondition for lawful processing with no equivalent in the EU, UK, or US frameworks.",
      "Data localisation is the default position. Personal data must generally remain within the Kingdom, with transfers permitted only under the specified conditions of the Data Transfer Regulation.",
      "Penalties reach SAR 5 million for unlawful disclosure of sensitive data, with imprisonment of up to two years for certain offences. Penalties may be doubled for repeat violations.",
      "The National Data Management Office issues national data governance policies and data management standards, and operates the National Data Index assessing data management maturity among government entities.",
      "SDAIA's AI Ethics Principles explicitly require entities to align with the PDPL for privacy matters and with National Cybersecurity Authority best practices for model security and incident response — tying the voluntary framework back to binding obligations.",
      "Public sector entities face materially stronger obligations than private ones, and public-entity chief data officers are given a defined governance role under the SDAIA framework."
    ],
    note: "The combination of one authority holding both data protection and AI strategy mandates is distinctive. It means AI governance expectations and privacy enforcement come from the same institution, which reduces regulatory fragmentation but concentrates considerable discretion in a body reporting directly to the Prime Minister."
  },

  saudi_arabia_crossborder: {
    title: "Cross-Border Data Flows — Saudi Arabia",
    intro: "Saudi Arabia operates one of the more restrictive transfer regimes in this repository, and the one most often underestimated by foreign organisations. Data localisation is the default under the PDPL, with transfers permitted only through an adequacy decision, prescribed safeguards, or narrow exceptions. Critically, none of the required instruments has a European analogue that can be reused — EU compliance does not carry over.",
    keyPoints: [
      "PDPL Article 29 and the Regulation on Personal Data Transfer Outside the Kingdom set the framework. Transfers require a SDAIA adequacy decision, appropriate safeguards, or a specified exception construed narrowly.",
      "Available safeguards are SDAIA-issued standard contractual clauses, binding common rules for corporate groups, or certificates of accreditation. EU standard contractual clauses cannot be substituted.",
      "A transfer risk assessment is required where safeguards are relied upon — analogous in function to the Schrems II Transfer Impact Assessment, but following SDAIA's own prescribed methodology.",
      "Controller registration on the National Data Governance Platform is a separate precondition. A GDPR Article 30 record of processing does not satisfy it.",
      "The reconciliation runs one way: an organisation built to EU standards clears the Saudi bar on system governance but still fails compliance without registration, the SDAIA transfer risk assessment, and SDAIA clauses.",
      "Sector-specific rules may impose additional localisation, particularly through Saudi Central Bank requirements for financial data and Cloud Computing Regulatory Framework rules for infrastructure."
    ],
    note: "This is the most actionable finding in the Saudi entry. Three requirements have no European equivalent — controller registration, the SDAIA transfer risk assessment, and SDAIA-issued contractual clauses. Organisations with mature GDPR programmes routinely assume portability here and are wrong."
  },

  saudi_arabia_transparency: {
    title: "Algorithmic Transparency & Explainability — Saudi Arabia",
    intro: "The SDAIA AI Ethics Principles, issued September 2023, set seven principles and a four-tier risk model. They are not directly enforceable in their own right — but they are functionally binding through three indirect channels: PDPL liability where personal data is involved, sectoral regulator expectations, and procurement consequences for entities working with government. In a state-dominated procurement market, the third channel is the sharpest.",
    keyPoints: [
      "Seven principles: fairness; privacy and security; humanity; social and environmental benefits; reliability and safety; transparency and explainability; and accountability and responsibility.",
      "The transparency principle requires documenting datasets, model design, and decision logic to the extent feasible and appropriate — a qualified standard rather than an absolute disclosure duty.",
      "Ethics impact assessments are required for higher-risk systems before deployment, together with mandatory documentation and logging. These function similarly to data protection impact assessments.",
      "The Principles are not directly enforceable. Compliance is established indirectly through the binding PDPL, through sectoral regulators applying the principles within their authority, and through procurement exclusion for entities working with the Saudi government.",
      "SDAIA issued Generative AI Guidelines in 2024 addressing hallucinations, bias, and synthetic content creation, with separate guidance for government entities and for the general public.",
      "The draft Responsible AI Policy, consulted on between April and May 2026, would establish four risk tiers — critical, high, limited, and low — each carrying proportionate obligations for documentation, testing, monitoring, and compliance."
    ],
    note: "Saudi Arabia has no automated decision-making right. Like India and New Zealand, the PDPL confers no right to explanation or human review of decisions made about individuals by automated systems — transparency obligations run to regulators and documentation rather than to affected persons."
  },

  saudi_arabia_licensing: {
    title: "Licensing & Certification — Saudi Arabia",
    intro: "No AI-specific licensing regime exists. But three mechanisms function as de facto gatekeeping, and together they are more restrictive than the absence of a statute suggests: PDPL controller registration as a precondition for processing, government procurement as an enforcement lever, and the National Data Governance Platform as the channel through which compliance is evidenced. SDAIA coordinates with sectoral regulators rather than displacing them.",
    keyPoints: [
      "PDPL controller registration on the National Data Governance Platform is a precondition for lawful processing — administratively closer to a licence than anything in the EU or US frameworks.",
      "Government procurement functions as the primary enforcement lever for AI ethics. Public entities face the strongest alignment expectations, and vendors failing ethics self-assessment face exclusion from a market where the state is the dominant buyer.",
      "The National Data Governance Platform provides privacy impact assessment, self-assessment, breach notification, and AI ethics assessment services. Using these tools is how compliance is demonstrated rather than merely asserted.",
      "The Saudi Food and Drug Authority regulates Software as a Medical Device, requiring registration before market placement. The Saudi Central Bank sets financial sector AI governance expectations alongside existing cybersecurity and outsourcing frameworks.",
      "The National Cybersecurity Authority issues Essential Cybersecurity Controls and Cloud Cybersecurity Controls, providing the security standards protecting AI models and training data from adversarial attacks including data poisoning and model inversion.",
      "The Communications, Space and Technology Commission operates the Cloud Computing Regulatory Framework, directly relevant to AI infrastructure deployment and hosting arrangements."
    ],
    note: "Saudi Arabia is converging on EU-style risk tiering without a statute. The draft Responsible AI Policy adopts four risk levels with proportionate obligations — structurally similar to the EU AI Act — but delivered as policy under an existing authority. That is a materially faster route to operational governance than primary legislation, and worth contrasting with the EU deferring its high-risk regime to December 2027."
  },

  uae_data: {
    title: "Data Governance — United Arab Emirates",
    intro: "The UAE is the most structurally complex jurisdiction in this repository: three separate legal systems operate inside one country. Federal mainland entities fall under the PDPL; entities in the Dubai International Financial Centre fall under DIFC Law No. 5 of 2020; and entities in Abu Dhabi Global Market fall under the ADGM Data Protection Regulations 2021. Federal PDPL does not apply inside the free zones. Which framework governs depends on where an entity is established, not where its customers are.",
    keyPoints: [
      "Federal Decree-Law No. 45 of 2021 (PDPL) has been in force since 2 January 2022, applying to controllers and processors established in the UAE mainland and to certain extraterritorial processing relating to UAE data subjects.",
      "Full PDPL compliance is required by 1 January 2027 — the operative deadline organisations should be working toward.",
      "The PDPL Executive Regulations remain unpublished after more than fifty months. The statutory principles bind today, but the implementing detail that would normally guide compliance does not yet exist.",
      "DIFC operates under Data Protection Law No. 5 of 2020 with its own Commissioner of Data Protection. ADGM operates under its 2021 Regulations. Both are GDPR-aligned and neither is displaced by the federal PDPL.",
      "Federal Decree-Law No. 26 of 2025 on Child Digital Safety took effect 1 January 2026, with full compliance required by 1 January 2027 — the same deadline as the PDPL.",
      "The Healthcare ICT Law (2019) and Federal Decree-Law No. 34 of 2021 on cybercrimes add further federal obligations relevant to AI systems processing health data or operating networked infrastructure."
    ],
    note: "The absence of Executive Regulations produces a counterintuitive result: the looser law is harder to comply with, not easier. Organisations must satisfy binding statutory principles without the prescriptive detail that would tell them how, which means documenting the reasoning behind compliance decisions matters more here than in jurisdictions with detailed implementing rules."
  },

  uae_crossborder: {
    title: "Cross-Border Data Flows — United Arab Emirates",
    intro: "Three parallel transfer regimes operate, matching the three legal systems. The federal PDPL permits transfers to jurisdictions with adequate protection or subject to appropriate safeguards, though the operative detail awaits the unpublished Executive Regulations. DIFC and ADGM run independent frameworks modelled on GDPR Chapter V. The strictest requirement is sectoral: the Healthcare ICT Law imposes health data localisation regardless of which regime otherwise applies.",
    keyPoints: [
      "The federal PDPL permits transfers to jurisdictions determined to have an adequate level of protection by the UAE Data Office, or subject to appropriate safeguards including contractual clauses, binding corporate rules, or explicit consent.",
      "Because the Executive Regulations remain unpublished, the adequacy list and approved clause templates are incomplete. Organisations must rely on contractual safeguards documented against the statutory principle.",
      "DIFC and ADGM operate independent transfer frameworks modelled on GDPR Chapter V, each with its own adequacy determinations, standard clauses, and binding corporate rules mechanisms.",
      "A transfer from mainland UAE to a DIFC entity is treated as an international transfer under DIFC law. Moving data between group entities within the same country can therefore trigger cross-border obligations.",
      "The Healthcare ICT Law requires health data generated in the UAE to be stored within the country, with transfer abroad requiring specific approval. For medical AI this is the binding constraint rather than the PDPL.",
      "Neither Mainland China nor Hong Kong holds a UAE adequacy determination. Transfers to either require contractual safeguards documented against the applicable regime."
    ],
    note: "Intra-group transfers between mainland and free zone entities are the most commonly overlooked exposure. A company with a Dubai mainland office and a DIFC subsidiary is conducting international data transfers between them for regulatory purposes, and needs a documented mechanism in both directions."
  },

  uae_transparency: {
    title: "Algorithmic Transparency & Explainability — United Arab Emirates",
    intro: "The narrative that the Gulf lacks AI regulation is wrong on this point. PDPL Article 18 has prohibited solely automated decisions with legal or seriously significant effects since January 2022 — a functional analogue to GDPR Article 22, binding for four years. Separately, DIFC Regulation 10 on autonomous and semi-autonomous systems reached full enforcement in January 2026, making it one of very few binding AI-specific regulations anywhere outside China and the EU.",
    keyPoints: [
      "PDPL Article 18 prohibits decisions made by automated processing that have legal consequences or seriously affect a data subject, absent consent, contractual necessity, or legislative authorisation. This is stricter than India, Saudi Arabia, New Zealand, or Singapore, none of which have any ADM right.",
      "The Article 18 prohibition is closer to the original UK Article 22 than to the reformed permissive version — the UAE did not follow the UK's 2026 liberalisation.",
      "DIFC Regulation 10 on autonomous and semi-autonomous systems has been in full enforcement since January 2026, imposing accountability, transparency, human oversight, and lawful basis obligations on operators processing personal data within DIFC.",
      "Regulation 10 applies regardless of sector, making DIFC one of the few jurisdictions where a company can access binding AI-specific regulation by choosing where to incorporate.",
      "The UAE Charter for the Development and Use of AI (June 2024) sets twelve ethical principles including safety, transparency, and human oversight. Explicitly non-binding, but it shapes regulator expectations.",
      "The Central Bank issued a Guidance Note on AI/ML on 11 February 2026 applying to all licensed financial institutions, covering governance, bias testing, transparency, and human oversight. Published in the CBUAE Rulebook, it carries strong supervisory expectation despite permissive language."
    ],
    note: "ADGM has no AI-specific overlay, making it the lightest of the three UAE regimes for AI purposes. An organisation choosing between mainland, DIFC, and ADGM establishment is choosing between three materially different AI compliance burdens within a single country."
  },

  uae_licensing: {
    title: "Licensing & Certification — United Arab Emirates",
    intro: "No AI-specific licensing regime exists at federal level. Approval requirements attach to the regulated activity and vary by which of the three legal systems applies. Financial services were consolidated under Federal Decree-Law No. 6 of 2025, effective September 2025, though DIFC and ADGM retain their own financial regulators. Healthcare AI faces registration requirements from three separate emirate-level authorities plus federal data localisation.",
    keyPoints: [
      "No AI-specific authorisation exists. Requirements attach to the regulated activity, and which regulator applies depends on whether the entity is established onshore, in DIFC, or in ADGM.",
      "Federal Decree-Law No. 6 of 2025, effective 16 September 2025, consolidates regulation of banks, finance companies, payment service providers, insurers, and critical service providers under the Central Bank, requiring entities to reconcile their positions within one year.",
      "Three financial regulators operate in parallel: the Central Bank for mainland entities, the Dubai Financial Services Authority for DIFC, and the Financial Services Regulatory Authority for ADGM. Each applies its own AI expectations.",
      "Healthcare AI faces registration through the Dubai Health Authority, the Ministry of Health and Prevention, or the Department of Health Abu Dhabi depending on location, with the Healthcare ICT Law adding data localisation obligations on top.",
      "The Abu Dhabi AI and Advanced Technology Council operates its own governance framework for AI within the emirate — effectively a fourth layer beyond the three legal systems.",
      "The UAE Strategy for Artificial Intelligence 2031 is a national vision rather than law, and creates no obligations. It shapes procurement and government adoption but does not license or approve AI systems."
    ],
    note: "In January 2026 the UAE became the first country to appoint a National AI System as an advisory member of the Cabinet, providing real-time policy analysis across federal entities. This is a governance innovation rather than a regulatory instrument, but it signals the direction of the UAE's institutional approach to AI."
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
  },

  // ── UNITED STATES — DATA GOVERNANCE ──────────────────────
  {
    id: 34,
    title: "California Consumer Privacy Act / Privacy Rights Act (CCPA/CPRA)",
    shortName: "CCPA / CPRA",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "CCPA: January 2020; CPRA amendments: January 2023",
    overview: "The de facto national privacy baseline in the United States. Provides definitions and broad individual rights, and imposes requirements and restrictions on the collection, use, disclosure, and processing of personal information of California residents. Uniquely among state laws, it applies not only to consumer contexts but also to HR and B2B personal information. Enforced by the California Privacy Protection Agency (CPPA), the first dedicated privacy regulator in the US.",
    keyArticles: [
      { ref: "Scope and thresholds", text: "Applies to for-profit businesses doing business in California that meet one of three thresholds: annual gross revenue over $25 million; buying, selling, or sharing personal information of 100,000+ California consumers or households; or deriving 50%+ of annual revenue from selling or sharing personal information." },
      { ref: "Consumer rights", text: "California residents have the right to: know what personal information is collected and how it is used; delete personal information held by a business; correct inaccurate personal information; opt out of the sale or sharing of personal information; limit use of sensitive personal information; and non-discrimination for exercising these rights." },
      { ref: "HR and B2B coverage", text: "Unlike most state privacy laws, the CCPA applies to personal information collected in employment and business-to-business contexts. Employers must provide privacy notices to employees and job applicants, and honour their access, deletion, and correction rights." },
      { ref: "Sensitive personal information", text: "The CPRA created a distinct category of sensitive personal information — including precise geolocation, racial or ethnic origin, religious beliefs, genetic data, biometric data, health information, and sexual orientation. Consumers may direct businesses to limit its use to what is necessary to provide the requested service." },
      { ref: "ADMT regulations", text: "CPPA regulations on automated decision-making technology were approved in September 2025. They give consumers the right to opt out of ADMT used in 'significant decisions' (financial services, housing, education, employment, or healthcare) that replace or substantially replace human decision-making. ADMT-specific requirements begin 1 January 2027." },
      { ref: "Risk assessments and cybersecurity audits", text: "From 1 January 2026, businesses processing data presenting significant privacy risk — including using ADMT for significant decisions, or using personal information to train ADMT — must conduct and document risk assessments. Certain businesses must also complete annual cybersecurity audits." },
      { ref: "Enforcement and penalties", text: "Enforced by the California Privacy Protection Agency and the Attorney General. Civil penalties of up to $2,500 per unintentional violation and $7,500 per intentional violation or violation involving minors. A limited private right of action applies to data breaches resulting from failure to implement reasonable security." }
    ],
    sources: [
      { label: "California Attorney General — CCPA Official Overview", url: "https://www.oag.ca.gov/privacy/ccpa" },
      { label: "California Privacy Protection Agency — Regulations and Guidance", url: "https://cppa.ca.gov/regulations/" }
    ]
  },
  {
    id: 35,
    title: "Texas Data Privacy and Security Act (TDPSA)",
    shortName: "TDPSA (Texas)",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "1 July 2024",
    overview: "Texas's comprehensive consumer privacy statute (HB 4). Structurally similar to the CCPA in the rights it grants, but distinguished by having no revenue threshold — it applies to any business that conducts business in Texas and processes or sells personal data, excluding only small businesses as defined by the SBA. This makes its reach considerably broader than California's in practice.",
    keyArticles: [
      { ref: "Scope — no revenue threshold", text: "Applies to any person that conducts business in Texas or produces products or services consumed by Texas residents, processes or engages in the sale of personal data, and is not a small business as defined by the US Small Business Administration. The absence of a revenue or volume threshold means startups and small companies are captured in a way they are not under the CCPA." },
      { ref: "Consumer rights", text: "Texas residents have the right to: confirm whether a controller is processing their personal data and access that data; correct inaccuracies; delete personal data; obtain a portable copy; and opt out of processing for targeted advertising, sale of personal data, or profiling in furtherance of decisions producing legal or similarly significant effects." },
      { ref: "Consent for sensitive data", text: "Controllers must obtain consent before processing sensitive data — including data revealing racial or ethnic origin, religious beliefs, mental or physical health diagnosis, sexuality, citizenship or immigration status, genetic or biometric data, precise geolocation, and personal data collected from a known child." },
      { ref: "Data protection assessments", text: "Controllers must conduct and document data protection assessments for processing activities presenting a heightened risk of harm — including targeted advertising, sale of personal data, profiling with legal or significant effects, and processing of sensitive data." },
      { ref: "Notice requirement", text: "Controllers that sell sensitive personal data or biometric data must post a specific, prescribed notice on their website stating that such data may be sold. The required wording is set by statute." },
      { ref: "Enforcement", text: "Enforced exclusively by the Texas Attorney General — there is no private right of action. Controllers receive a 30-day cure period after notice of an alleged violation. Civil penalties of up to $7,500 per violation apply where a violation is not cured." }
    ],
    sources: [
      { label: "Texas Legislature — HB 4 Full Statutory Text", url: "https://capitol.texas.gov/tlodocs/88R/billtext/html/HB00004F.htm" },
      { label: "Texas Attorney General — Data Privacy Enforcement", url: "https://www.texasattorneygeneral.gov/consumer-protection/privacy-and-identity-theft" }
    ]
  },
  {
    id: 36,
    title: "Health Insurance Portability and Accountability Act (HIPAA)",
    shortName: "HIPAA",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "1996 (Privacy Rule 2003; Security Rule 2005; HITECH amendments 2013)",
    overview: "Governs the use and disclosure of protected health information (PHI) by covered entities and their business associates. Built on two central rules: the Privacy Rule, which governs use and disclosure of PHI, and the Security Rule, which requires technical, physical, and administrative safeguards. Notably extraterritorial — HIPAA also applies to foreign companies if they process health data of US patients, have access to such data via IT services or telemedicine, or act as a Business Associate for US healthcare providers.",
    keyArticles: [
      { ref: "Covered entities and business associates", text: "Covered entities are health plans, healthcare clearinghouses, and healthcare providers that transmit health information electronically. Business associates are any person or entity that performs functions involving PHI on behalf of a covered entity — including cloud providers, analytics vendors, and AI companies processing patient data." },
      { ref: "Privacy Rule — permitted uses and disclosures", text: "PHI may only be used or disclosed for treatment, payment, and healthcare operations, or with the individual's written authorisation. All other uses require specific authorisation. The minimum necessary standard requires that only the minimum amount of PHI needed to accomplish the purpose is used or disclosed." },
      { ref: "Security Rule — three safeguard categories", text: "Covered entities and business associates must implement: administrative safeguards (risk analysis, workforce training, incident response); physical safeguards (facility access controls, workstation and device security); and technical safeguards (access controls, audit controls, integrity controls, transmission security including encryption)." },
      { ref: "Business Associate Agreements (BAAs)", text: "A written BAA is mandatory before any business associate may handle PHI. The BAA must specify permitted uses, require the business associate to implement appropriate safeguards, mandate breach reporting, and require return or destruction of PHI at termination. AI vendors processing patient data must execute BAAs with every covered entity client." },
      { ref: "Breach Notification Rule", text: "Following a breach of unsecured PHI, covered entities must notify affected individuals without unreasonable delay and within 60 days. Breaches affecting 500 or more individuals must be reported to HHS and prominent media outlets. Business associates must notify the covered entity." },
      { ref: "Extraterritorial application", text: "HIPAA obligations follow the data, not the geography. Foreign companies processing PHI of US patients — including offshore IT service providers, telemedicine platforms, and AI vendors — are subject to HIPAA as business associates, regardless of where they are established." },
      { ref: "Penalties", text: "Four tiers based on culpability: unknowing violations ($137–$68,928 per violation); reasonable cause ($1,379–$68,928); wilful neglect corrected ($13,785–$68,928); wilful neglect uncorrected (minimum $68,928 per violation). Annual caps apply per violation category. Criminal penalties apply for knowing wrongful disclosure." }
    ],
    sources: [
      { label: "HHS — HIPAA for Professionals (Official Guidance)", url: "https://www.hhs.gov/hipaa/for-professionals/index.html" },
      { label: "HHS — HIPAA Security Rule Overview", url: "https://www.hhs.gov/hipaa/for-professionals/security/index.html" }
    ]
  },
  {
    id: 37,
    title: "Gramm-Leach-Bliley Act (GLBA)",
    shortName: "GLBA",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "1999 (Safeguards Rule amendments effective June 2023)",
    overview: "Regulates financial institutions' collection, use, and disclosure of consumers' non-public personal financial information. Requires financial institutions to explain information-sharing practices to customers, provide opt-out rights, and implement a written information security programme under the Safeguards Rule. The definition of 'financial institution' is broad — capturing fintech companies, lenders, mortgage brokers, tax preparers, and increasingly, AI-driven financial services.",
    keyArticles: [
      { ref: "Privacy Rule — notice and opt-out", text: "Financial institutions must provide customers with a clear and conspicuous privacy notice at the start of the relationship and annually thereafter, explaining what information is collected, with whom it is shared, and how it is protected. Customers must be given the right to opt out of sharing non-public personal information with non-affiliated third parties." },
      { ref: "Safeguards Rule — written information security programme", text: "Financial institutions must develop, implement, and maintain a comprehensive written information security programme containing administrative, technical, and physical safeguards appropriate to the size and complexity of the institution and the sensitivity of the customer information handled." },
      { ref: "Safeguards Rule — nine required elements", text: "The 2023 amendments require: designating a qualified individual to oversee the programme; conducting written risk assessments; implementing access controls, encryption, and multi-factor authentication; secure disposal; change management; monitoring and logging; secure development practices; vendor oversight; and an incident response plan." },
      { ref: "Pretexting provisions", text: "The Act prohibits obtaining customer information from a financial institution under false pretences. This applies to third parties attempting to acquire financial data through deception, including social engineering attacks." },
      { ref: "Vendor and service provider oversight", text: "Financial institutions must take reasonable steps to select service providers capable of maintaining appropriate safeguards, require them by contract to implement and maintain such safeguards, and periodically assess their performance. AI vendors serving financial institutions fall squarely within this obligation." },
      { ref: "Enforcement", text: "Enforced by the FTC for non-bank financial institutions, and by federal banking regulators (OCC, Federal Reserve, FDIC) and the CFPB for depository institutions. There is no private right of action under the GLBA itself, though violations may support claims under state law." }
    ],
    sources: [
      { label: "FTC — Gramm-Leach-Bliley Act Compliance Guidance", url: "https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act" },
      { label: "FTC — Safeguards Rule: What Your Business Needs to Know", url: "https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know" }
    ]
  },
  {
    id: 38,
    title: "Fair Credit Reporting Act (FCRA)",
    shortName: "FCRA",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "1970 (as amended by FACTA 2003)",
    overview: "Regulates the collection, dissemination, and use of consumer credit information. Governs consumer reporting agencies and anyone using credit data for employment screening, lending, or insurance decisions. Individuals have rights to access, dispute, and correct their credit information. Directly consequential for AI systems used in hiring, lending, tenant screening, or insurance underwriting — an algorithmic decision does not exempt a user from FCRA obligations.",
    keyArticles: [
      { ref: "Permissible purpose requirement", text: "Consumer reports may only be obtained for a permissible purpose specified in the statute — including credit transactions, employment purposes, insurance underwriting, tenant screening, and legitimate business needs in connection with a consumer-initiated transaction. Obtaining a report without permissible purpose is a violation." },
      { ref: "Adverse action notices", text: "When a consumer report is used in whole or in part to take adverse action — denying credit, employment, insurance, or housing — the user must provide an adverse action notice. The notice must state the specific reasons for the decision. The CFPB has confirmed this applies to AI-driven decisions: an unexplainable model output is not a legally sufficient reason." },
      { ref: "Consumer rights — access, dispute, correction", text: "Consumers have the right to obtain a copy of their file from a consumer reporting agency, dispute inaccurate or incomplete information, and have disputed information investigated within 30 days. Information found to be inaccurate must be corrected or deleted." },
      { ref: "Employment screening obligations", text: "Before obtaining a consumer report for employment purposes, employers must provide a clear standalone written disclosure and obtain written authorisation. Before taking adverse action, employers must provide a pre-adverse action notice with a copy of the report and a summary of FCRA rights." },
      { ref: "Accuracy obligations on furnishers", text: "Organisations that furnish information to consumer reporting agencies must ensure accuracy and completeness, investigate disputes forwarded by the agency, and correct or update inaccurate information. AI-generated risk scores supplied to reporting agencies fall within this obligation." },
      { ref: "Enforcement and penalties", text: "Enforced by the FTC and CFPB, with concurrent state attorney general authority. The FCRA carries a private right of action: actual damages for negligent violations; actual or statutory damages of $100–$1,000 plus punitive damages for wilful violations, with attorney's fees available." }
    ],
    sources: [
      { label: "FTC — Fair Credit Reporting Act Full Text", url: "https://www.ftc.gov/legal-library/browse/statutes/fair-credit-reporting-act" },
      { label: "CFPB — FCRA Regulation V", url: "https://www.consumerfinance.gov/rules-policy/regulations/1022/" }
    ]
  },
  {
    id: 39,
    title: "Family Educational Rights and Privacy Act (FERPA)",
    shortName: "FERPA",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "1974",
    overview: "Protects the privacy of student education records. Applies to educational institutions receiving federal funding — which covers virtually all public schools, districts, colleges, and universities. Schools must obtain consent before disclosing education records to third parties, subject to specific statutory exceptions. EdTech AI companies selling to schools must comply with FERPA even though their primary contractual relationship is with the institution rather than individual students.",
    keyArticles: [
      { ref: "Education records definition", text: "Education records are records directly related to a student and maintained by an educational agency or institution, or by a party acting for the institution. This includes grades, transcripts, disciplinary records, attendance data, and — critically for AI — behavioural and engagement data collected by learning platforms." },
      { ref: "Consent requirement", text: "Educational institutions must obtain written consent from a parent (or the student, once 18 or attending a postsecondary institution) before disclosing personally identifiable information from education records to third parties, unless a statutory exception applies." },
      { ref: "School official exception", text: "The most important exception for EdTech vendors. A third party may access education records without consent if the institution has designated them a 'school official' with a legitimate educational interest, the vendor performs a function the institution would otherwise perform itself, and the institution maintains direct control over the vendor's use and maintenance of the data." },
      { ref: "Direct control requirement", text: "Institutions must retain direct control over the third party's use and maintenance of education records. In practice this means vendors cannot use student data for their own purposes — including training AI models on student data for product improvement — without specific authorisation." },
      { ref: "Parental and student rights", text: "Parents and eligible students have the right to inspect and review education records, request correction of records believed to be inaccurate or misleading, and file a complaint with the Department of Education's Student Privacy Policy Office." },
      { ref: "Enforcement", text: "Enforced by the Department of Education. There is no private right of action. The ultimate sanction is withdrawal of federal funding, which is rarely imposed — but institutions face significant reputational and contractual consequences, which they typically pass through to vendors contractually." }
    ],
    sources: [
      { label: "US Department of Education — FERPA Official Overview", url: "https://studentprivacy.ed.gov/ferpa" },
      { label: "Student Privacy Policy Office — Guidance for Vendors and Schools", url: "https://studentprivacy.ed.gov/" }
    ]
  },
  {
    id: 40,
    title: "Children's Online Privacy Protection Act (COPPA)",
    shortName: "COPPA",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "2000 (COPPA Rule amendments finalised 16 January 2025)",
    overview: "Requires verifiable parental consent before collecting personal information from children under 13. Applies to operators of websites and online services directed to children, and to general-audience services with actual knowledge that they are collecting information from children under 13. The FTC finalised significant amendments to the COPPA Rule on 16 January 2025 — strengthening consent requirements, introducing data retention limits, and expanding scope for EdTech platforms. COPPA 2.0, which would raise the age threshold, is currently working through Congress.",
    keyArticles: [
      { ref: "Verifiable parental consent", text: "Operators must obtain verifiable parental consent before collecting, using, or disclosing personal information from a child under 13. Acceptable methods include signed consent forms, credit card verification, video conference, or government ID verification. The 2025 amendments strengthened the standards for what constitutes verifiable consent." },
      { ref: "Separate consent for third-party disclosure", text: "The 2025 amendments require operators to obtain separate verifiable parental consent before disclosing a child's personal information to third parties, including for targeted advertising. Bundled consent covering both collection and third-party disclosure is no longer sufficient." },
      { ref: "Data retention limits", text: "The 2025 amendments prohibit indefinite retention of children's personal information. Operators must retain data only as long as reasonably necessary to fulfil the specific purpose for which it was collected, and must maintain a written data retention policy that is publicly disclosed." },
      { ref: "Personal information definition", text: "Includes name, address, email, telephone number, persistent identifiers (cookies, device IDs, IP addresses), geolocation, photographs, video, and audio containing a child's image or voice. Biometric identifiers were added by the 2025 amendments — directly relevant for AI using voice or facial recognition." },
      { ref: "EdTech scope expansion", text: "The 2025 amendments clarified the application of COPPA to educational technology. Schools may authorise the collection of children's personal information for educational purposes, but operators must limit use strictly to the educational context and may not use the data for commercial purposes including model training." },
      { ref: "Notice requirements", text: "Operators must post a clear and comprehensive online privacy policy describing what information is collected from children, how it is used, and disclosure practices. Direct notice must also be given to parents before collection." },
      { ref: "Enforcement and penalties", text: "Enforced by the FTC and state attorneys general. Civil penalties of up to $53,088 per violation — with each child whose data was improperly collected constituting a separate violation, penalties can escalate rapidly. Recent enforcement actions have produced settlements in the tens of millions." }
    ],
    sources: [
      { label: "FTC — COPPA Compliance Guidance for Businesses", url: "https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy" },
      { label: "FTC — COPPA Rule Amendments (January 2025)", url: "https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa" }
    ]
  },
  {
    id: 41,
    title: "FTC Act Section 5 — Unfair or Deceptive Practices",
    shortName: "FTC Act §5",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "1914 (ongoing enforcement)",
    overview: "The broadest federal privacy enforcement mechanism in the United States. Section 5 prohibits unfair or deceptive acts or practices in or affecting commerce. The FTC treats broken privacy promises as deceptive practices — meaning an organisation's own privacy policy is legally enforceable against it, even in states with no dedicated privacy statute. This makes Section 5 the effective backstop across every sector and every state.",
    keyArticles: [
      { ref: "Deception standard", text: "A practice is deceptive if there is a representation, omission, or practice likely to mislead a consumer acting reasonably under the circumstances, and the representation is material to the consumer's decision. Privacy policy statements, security claims, and data handling representations all fall within this standard." },
      { ref: "Unfairness standard", text: "A practice is unfair if it causes or is likely to cause substantial injury to consumers, the injury is not reasonably avoidable by consumers themselves, and it is not outweighed by countervailing benefits. The FTC has used this to challenge inadequate data security even where no explicit promise was broken." },
      { ref: "Broken privacy promises", text: "The most frequently used theory. If a company states in its privacy policy that it does not sell data, does not train models on user content, or applies specific security measures, and then does otherwise, that is a deceptive practice — regardless of whether any state privacy law applies." },
      { ref: "AI washing enforcement", text: "The FTC has brought multiple actions against companies making misleading or exaggerated claims about AI capability. Every claim about an AI system's capabilities, accuracy, or performance must be supported by documented evidence. Enforcement in this area has continued on a bipartisan basis." },
      { ref: "Data security enforcement", text: "The FTC has brought dozens of actions alleging that inadequate data security constitutes an unfair practice. Consent orders typically impose 20 years of mandated security programmes, third-party assessments, and reporting obligations — an outcome far more onerous than the monetary penalty." },
      { ref: "Remedies", text: "The FTC may seek injunctive relief, consumer redress, disgorgement, and civil penalties for violations of existing consent orders or specific rules. Section 5 itself does not carry civil penalties for first-time violations, but consent orders convert future non-compliance into penalty-bearing violations." }
    ],
    sources: [
      { label: "FTC — Section 5 Unfair or Deceptive Acts or Practices Policy Statement", url: "https://www.ftc.gov/legal-library/browse/statutes/federal-trade-commission-act" },
      { label: "FTC — Privacy and Security Enforcement Actions", url: "https://www.ftc.gov/business-guidance/privacy-security" }
    ]
  },
  {
    id: 42,
    title: "Illinois Biometric Information Privacy Act (BIPA)",
    shortName: "BIPA (Illinois)",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "2008",
    overview: "The most consequential state biometric privacy law in the United States, and the only one granting individuals a private right of action. Statutory damages of $1,000 per negligent violation and $5,000 per intentional or reckless violation — combined with class action exposure — have produced settlements in the hundreds of millions. Critical for any AI using facial recognition, voice analysis, fingerprinting, or other biometric identifiers.",
    keyArticles: [
      { ref: "Biometric identifiers definition", text: "Covers retina or iris scans, fingerprints, voiceprints, and scans of hand or face geometry. 'Biometric information' means any information based on a biometric identifier used to identify an individual, regardless of how it is captured or stored. Photographs and demographic data are expressly excluded unless converted into a biometric identifier." },
      { ref: "Written notice and consent", text: "Before collecting biometric data, a private entity must: inform the subject in writing that biometric data is being collected or stored; inform them in writing of the specific purpose and length of term for collection, storage, and use; and receive a written release executed by the subject. All three elements are required — consent alone is insufficient without the written disclosures." },
      { ref: "Written retention and destruction policy", text: "Private entities in possession of biometric data must develop a publicly available written policy establishing a retention schedule and guidelines for permanently destroying biometric identifiers when the initial purpose has been satisfied or within 3 years of the individual's last interaction, whichever occurs first." },
      { ref: "Prohibition on sale and profit", text: "A private entity may not sell, lease, trade, or otherwise profit from a person's biometric identifier or biometric information. This is an absolute prohibition — unlike other provisions, it cannot be cured by consent." },
      { ref: "Disclosure restrictions", text: "Biometric data may not be disclosed or disseminated without the subject's consent, unless disclosure completes a financial transaction authorised by the subject, is required by law, or is required by a valid warrant or subpoena." },
      { ref: "Security standard", text: "Private entities must store, transmit, and protect biometric data using the reasonable standard of care within the entity's industry, and in a manner at least as protective as how the entity protects other confidential and sensitive information." },
      { ref: "Private right of action and damages", text: "Any person aggrieved by a violation may bring an action. Liquidated damages of $1,000 or actual damages (whichever is greater) for negligent violations; $5,000 or actual damages for intentional or reckless violations. Attorney's fees and injunctive relief are also available. A 2024 amendment clarified that repeated collections from the same person constitute a single violation." }
    ],
    sources: [
      { label: "Illinois General Assembly — BIPA Full Statutory Text (740 ILCS 14)", url: "https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3004&ChapterID=57" },
      { label: "Illinois Attorney General — Biometric Privacy Resources", url: "https://illinoisattorneygeneral.gov/consumer-protection/" }
    ]
  },

  // ── UNITED STATES — CROSS-BORDER DATA FLOWS ──────────────
  {
    id: 43,
    title: "DOJ Bulk Data Rule / Data Security Program (28 CFR Part 202)",
    shortName: "DOJ Bulk Data Rule",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "8 April 2025 (security requirements from 6 October 2025)",
    overview: "The most consequential US cross-border data instrument for organisations operating between the US and Greater China. Implements Executive Order 14117 (28 February 2024) and functions similarly to export controls — prohibiting or restricting transactions involving bulk US sensitive personal data or government-related data with designated countries of concern. China, including Hong Kong and Macau, is explicitly named. Administered by the DOJ National Security Division. Issued under the International Emergency Economic Powers Act, which is why criminal penalties attach.",
    keyArticles: [
      { ref: "Countries of concern", text: "The Rule applies to transactions involving China (explicitly including Hong Kong and Macau), Russia, Iran, North Korea, Cuba, and Venezuela — and to 'covered persons', meaning entities and individuals owned by, controlled by, or subject to the jurisdiction of those countries, including employees and contractors." },
      { ref: "Who is a 'US person'", text: "Any US citizen, national, lawful permanent resident, asylee, or refugee; any entity organised under US law (including its foreign branches); and any person physically located in the United States regardless of citizenship or status. Foreign companies with US operations are captured through their US entities." },
      { ref: "Prohibited transactions (§ 202 Subpart C)", text: "Data brokerage transactions giving countries of concern or covered persons access to covered data are prohibited outright, as are any transactions involving bulk human genomic data (and related biospecimens). These cannot be cured by security measures — they are flatly barred." },
      { ref: "Restricted transactions (§ 202 Subpart D)", text: "Vendor agreements, employment agreements, and certain investment agreements are permitted only if the US person complies with the CISA Security Requirements referenced at § 202.248 — covering organisational, system-level, and data-level controls including encryption, access management, and auditable governance." },
      { ref: "Covered data categories", text: "Six categories of bulk US sensitive personal data: covered personal identifiers; precise geolocation data; biometric identifiers; human genomic (and epigenomic, proteomic, transcriptomic) data; personal health data; and personal financial data. Separately, US government-related data is covered regardless of volume." },
      { ref: "Bulk thresholds (12-month rolling period)", text: "Thresholds apply cumulatively over any 12 months and apply regardless of anonymisation, pseudonymisation, or encryption: human genomic data on >100 US persons; biometric identifiers on >1,000 US persons; precise geolocation on >1,000 US devices; personal health or financial data on >10,000 US persons; covered personal identifiers on >100,000 US persons." },
      { ref: "Due diligence and audit obligations", text: "US persons engaging in restricted transactions must implement a written data compliance programme, conduct annual independent audits, and maintain records. DOJ applied a grace period through 8 July 2025 for good-faith compliance, and a narrower one through 6 October 2025 for firms building security programmes." },
      { ref: "Penalties", text: "Civil penalties of up to the greater of $368,136 (inflation-adjusted annually) or twice the value of the covered transaction. Wilful violations carry criminal penalties of up to 20 years imprisonment and $1,000,000 in fines." }
    ],
    sources: [
      { label: "eCFR — 28 CFR Part 202 Full Regulatory Text", url: "https://www.ecfr.gov/current/title-28/chapter-I/part-202" },
      { label: "DOJ National Security Division — Data Security Program Hub", url: "https://www.justice.gov/nsd/data-security" },
      { label: "Federal Register — Final Rule (8 January 2025)", url: "https://www.federalregister.gov/documents/2025/01/08/2024-31486/preventing-access-to-us-sensitive-personal-data-and-government-related-data-by-countries-of-concern" },
      { label: "Federal Register — CISA Security Requirements for Restricted Transactions", url: "https://www.federalregister.gov/documents/2025/01/08/2024-31479/notice-of-availability-of-security-requirements-for-restricted-transactions-under-executive-order" }
    ]
  },
  {
    id: 44,
    title: "CLOUD Act (Clarifying Lawful Overseas Use of Data Act)",
    shortName: "CLOUD Act",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "23 March 2018",
    overview: "Empowers US law enforcement to compel certain service providers to produce data within their possession, custody, or control — regardless of where that data is physically stored. This means geographic data residency alone rarely insulates records from US legal process, a point commonly misunderstood. The Act also creates a framework for bilateral executive agreements enabling reciprocal law enforcement data access with qualifying foreign governments.",
    keyArticles: [
      { ref: "Extraterritorial production obligation", text: "A provider of electronic communication or remote computing services subject to US jurisdiction must preserve, back up, or disclose the contents of a communication and associated records within its possession, custody, or control — regardless of whether the data is located inside or outside the United States." },
      { ref: "The 'control' test", text: "What matters is control, not location. A provider headquartered in the US, or with sufficient US nexus, may be obligated to disclose data held in a non-US region if it controls that data. Storing EU or Hong Kong customer data in a local data centre does not by itself defeat a valid US warrant served on a US-controlled provider." },
      { ref: "Comity and motion to quash", text: "Providers may move to quash or modify a legal process where compliance would create a material risk of violating the laws of a qualifying foreign government, and the customer is not a US person and does not reside in the US. Courts apply a comity analysis weighing US law enforcement interests against foreign legal obligations." },
      { ref: "Executive agreements", text: "The Act authorises the US to enter bilateral agreements with qualifying foreign governments permitting reciprocal direct requests for data, bypassing the slower Mutual Legal Assistance Treaty process. The US–UK CLOUD Act Agreement (October 2019) was the first. No such agreement exists with Mainland China or Hong Kong." },
      { ref: "Tension with GDPR and PIPL", text: "The CLOUD Act coexists uneasily with the GDPR's transfer restrictions and with PIPL Article 41 and DSL Article 36, which prohibit providing China-stored data to foreign law enforcement without PRC approval. An organisation subject to both regimes can face directly conflicting legal obligations — a risk that must be managed through data segregation and legal review rather than contract alone." }
    ],
    sources: [
      { label: "US Congress — CLOUD Act Statutory Text (H.R. 4943 / 18 U.S.C. §§ 2523, 2713)", url: "https://www.congress.gov/bill/115th-congress/house-bill/4943" },
      { label: "DOJ — CLOUD Act Resources and White Paper", url: "https://www.justice.gov/criminal/cloud-act-resources" }
    ]
  },
  {
    id: 45,
    title: "Export Controls — EAR and ITAR",
    shortName: "EAR / ITAR",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "EAR: ongoing (15 CFR 730–774); ITAR: ongoing (22 CFR 120–130)",
    overview: "Two export control regimes restrict the cross-border transfer of controlled technical data. The Export Administration Regulations (EAR), administered by the Commerce Department's Bureau of Industry and Security, regulate dual-use goods, software, and technology. The International Traffic in Arms Regulations (ITAR), administered by the State Department, cover defence articles and related technical data. AI models trained on or incorporating controlled technical data may require export licences before international transfer, demonstration, or deployment.",
    keyArticles: [
      { ref: "Deemed export doctrine", text: "The single most misunderstood concept in this area. Releasing controlled technology or source code to a foreign national inside the United States is 'deemed' an export to that person's country of nationality — and may require a licence. Hiring a foreign national engineer who accesses controlled AI training data or model architecture can therefore trigger EAR obligations without any data physically leaving the US." },
      { ref: "EAR scope — dual-use technology", text: "The EAR controls items on the Commerce Control List, organised by Export Control Classification Number. Relevant categories for AI include Category 3 (electronics and semiconductors), Category 4 (computers), and Category 5 (telecommunications and information security). Advanced computing and semiconductor manufacturing items face specific China-related restrictions." },
      { ref: "AI-specific application", text: "AI models are not controlled as such — but AI trained on or incorporating controlled technical data may be. Dual-use AI applications in computer vision, autonomous systems, semiconductor design, and cryptographic analysis are the most likely to be captured. A licence may be required before transferring, demonstrating, or deploying such systems internationally." },
      { ref: "ITAR scope — defence technical data", text: "The ITAR captures broad categories of technical data related to defence articles on the US Munitions List. A licence is virtually always required to transfer ITAR-controlled technical data between countries or parties. ITAR compliance is significantly stricter than EAR — there is no de minimis exemption for foreign-made items incorporating US-origin ITAR content." },
      { ref: "Penalties", text: "EAR civil penalties reach the greater of approximately $368,136 per violation or twice the transaction value; criminal penalties up to 20 years imprisonment and $1,000,000. ITAR civil penalties may reach the greater of approximately $1,271,078 per violation or twice the transaction value, with criminal penalties up to 20 years and $1,000,000 per violation." }
    ],
    sources: [
      { label: "Bureau of Industry and Security — Export Administration Regulations", url: "https://www.bis.doc.gov/index.php/regulations/export-administration-regulations-ear" },
      { label: "Directorate of Defense Trade Controls — ITAR", url: "https://www.pmddtc.state.gov/ddtc_public/ddtc_public?id=ddtc_public_portal_itar_landing" }
    ]
  },
  {
    id: 46,
    title: "Sector-Specific Cross-Border Obligations (HIPAA, FERPA, GLBA)",
    shortName: "Sector Cross-Border Rules",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "Ongoing",
    overview: "Several US sectoral statutes impose restrictions on cross-border disclosure as a secondary effect of their general obligations. None require government pre-approval for international transfers — the mechanism is contractual and organisational rather than permission-based. This is the defining structural difference between US sectoral regulation and the EU or Chinese models: the obligation follows the data, but it is enforced through accountability rather than authorisation.",
    keyArticles: [
      { ref: "HIPAA — Business Associate Agreements for overseas vendors", text: "Cross-border transfers of protected health information to overseas vendors require Business Associate Agreements applying full HIPAA standards. No government pre-approval is required, but contractual safeguards are mandatory and the overseas recipient must meet HIPAA Security Rule standards — administrative, physical, and technical safeguards — regardless of the law of its own jurisdiction." },
      { ref: "HIPAA — extraterritorial reach", text: "HIPAA obligations follow the data rather than the geography. A Hong Kong or Shenzhen AI vendor processing PHI of US patients is a business associate subject to HIPAA in its own right, and is directly liable for violations under the HITECH amendments — not merely liable to its US client under contract." },
      { ref: "FERPA — same conditions for overseas disclosure", text: "Education records may only be disclosed to overseas parties under the same conditions as domestic disclosures: written consent, or a recognised statutory exception such as the school official exception. There is no additional international transfer mechanism, but equally no relaxation — an overseas EdTech vendor must satisfy the direct control requirement just as a domestic one would." },
      { ref: "GLBA — opt-out rights and Safeguards Rule apply extraterritorially", text: "Financial institutions may share customer financial information with overseas affiliates, but must provide the same opt-out rights as for domestic sharing and must maintain Safeguards Rule compliance regardless of the recipient's location. Vendor oversight obligations extend fully to offshore service providers." },
      { ref: "Practical implication", text: "For an AI company serving US healthcare, education, or financial clients from outside the US, the compliance burden is contractual and operational rather than regulatory-approval based. There is no filing to make — but there is a demanding set of security and governance standards to meet, and direct liability for failure." }
    ],
    sources: [
      { label: "HHS — HIPAA Business Associate Guidance", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html" },
      { label: "US Department of Education — FERPA Disclosure Guidance", url: "https://studentprivacy.ed.gov/ferpa" },
      { label: "FTC — GLBA Safeguards Rule Compliance", url: "https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know" }
    ]
  },

  // ── UNITED STATES — ALGORITHMIC TRANSPARENCY ─────────────
  {
    id: 47,
    title: "TAKE IT DOWN Act",
    shortName: "TAKE IT DOWN Act",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "Signed 19 May 2025; platform compliance from 19 May 2026",
    overview: "The only AI-specific statute Congress has enacted to date. Requires online platforms to remove flagged non-consensual intimate imagery — including AI-generated deepfakes — within 48 hours of a valid report. Creates criminal penalties for distributing such content and empowers the FTC to enforce the notice-and-removal obligation. Notable as the single point of binding federal AI legislation in an otherwise state-led landscape.",
    keyArticles: [
      { ref: "48-hour removal obligation", text: "Covered platforms must establish a notice-and-removal process allowing an identifiable individual (or their authorised representative) to request removal of non-consensual intimate imagery. On receipt of a valid request, the platform must remove the content — and any known identical copies — within 48 hours." },
      { ref: "Coverage of AI-generated content", text: "The Act expressly covers 'digital forgeries' — intimate imagery created or altered using AI, machine learning, or other digital manipulation techniques that is indistinguishable from an authentic depiction. This closes the gap left by earlier state laws that addressed only authentic imagery." },
      { ref: "Criminal penalties", text: "Knowingly publishing non-consensual intimate imagery, including AI-generated depictions, carries criminal penalties of up to two years imprisonment where the depicted individual is an adult, and up to three years where the individual is a minor." },
      { ref: "FTC enforcement", text: "Failure to comply with the notice-and-removal requirement is treated as an unfair or deceptive act or practice under Section 5 of the FTC Act, giving the FTC direct enforcement authority against non-compliant platforms." },
      { ref: "Compliance deadline", text: "Covered platforms had until 19 May 2026 to establish the required notice-and-removal process. Platforms hosting user-generated content — including AI image generation services with public galleries — should assess whether they fall within the definition of a covered platform." }
    ],
    sources: [
      { label: "US Congress — TAKE IT DOWN Act Full Text (S.146, 119th Congress)", url: "https://www.congress.gov/bill/119th-congress/senate-bill/146/text" },
      { label: "FTC — Enforcement Resources", url: "https://www.ftc.gov/business-guidance/privacy-security" }
    ]
  },
  {
    id: 48,
    title: "FTC Act Section 5 — AI Washing Enforcement",
    shortName: "FTC §5 — AI Washing",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "Ongoing enforcement",
    overview: "The primary federal mechanism policing AI transparency claims. Section 5 prohibits unfair or deceptive acts or practices, and the FTC has applied it aggressively to misleading statements about AI capability — a pattern of enforcement now widely referred to as 'AI washing'. The operative principle: every claim about an AI system's capabilities, accuracy, or performance must be supported by documented evidence at the time the claim is made.",
    keyArticles: [
      { ref: "Substantiation requirement", text: "Claims about AI capability, accuracy, or performance must be supported by competent and reliable evidence held at the time the claim is made. Post-hoc justification is not a defence. This applies to marketing materials, investor communications, product documentation, and sales representations alike." },
      { ref: "What counts as AI washing", text: "Misrepresenting the degree of automation in a product; overstating accuracy or performance; claiming AI capability where rule-based logic is used; implying human-level judgment where none exists; or claiming a product is 'AI-powered' where AI plays a negligible role." },
      { ref: "Enforcement precedent — DoNotPay (January 2025)", text: "The FTC settled with DoNotPay over marketing an AI chatbot as 'the world's first robot lawyer' without adequate testing to substantiate that its output matched the quality of a licensed attorney. The consent order restricted future claims and required customer notification." },
      { ref: "Enforcement precedent — Growth Cave (January 2026)", text: "Resolved allegations of misrepresenting AI software automation capabilities. Together with DoNotPay, this establishes that AI washing enforcement continues on a bipartisan basis across administrations." },
      { ref: "Consent order consequences", text: "FTC consent orders typically run 20 years and impose ongoing compliance programmes, third-party assessments, and reporting obligations. The lasting operational burden usually exceeds the monetary settlement — and future non-compliance converts into penalty-bearing violations." },
      { ref: "Practical implication", text: "Organisations should treat AI marketing claims with the same rigour as financial disclosures — maintaining a documented evidence trail linking each public claim to specific test results, benchmarks, or validation studies." }
    ],
    sources: [
      { label: "FTC — Federal Trade Commission Act Section 5", url: "https://www.ftc.gov/legal-library/browse/statutes/federal-trade-commission-act" },
      { label: "FTC — AI and Your Business: Guidance and Enforcement", url: "https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check" }
    ]
  },
  {
    id: 49,
    title: "NIST AI Risk Management Framework (AI RMF 1.0)",
    shortName: "NIST AI RMF",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "26 January 2023 (Generative AI Profile: July 2024)",
    overview: "The US government's primary voluntary AI governance framework, developed by the National Institute of Standards and Technology. Not legally binding — but functions as the de facto federal reference standard and is widely used in federal procurement, meaning it operates as a practical requirement for vendors selling to government. Identifies explainability and transparency as core characteristics of trustworthy AI.",
    keyArticles: [
      { ref: "Four core functions", text: "The Framework is organised around four functions: GOVERN (cultivate a culture of risk management across the organisation); MAP (establish context and identify risks); MEASURE (analyse, assess, and track identified risks); and MANAGE (prioritise and act on risks based on projected impact)." },
      { ref: "Seven trustworthiness characteristics", text: "Trustworthy AI is defined as: valid and reliable; safe; secure and resilient; accountable and transparent; explainable and interpretable; privacy-enhanced; and fair with harmful bias managed. Explainability and transparency are treated as distinct but related characteristics." },
      { ref: "Transparency vs explainability", text: "The Framework distinguishes transparency (whether information about an AI system is available to those interacting with it, including its design, training data, and limitations) from explainability (whether the mechanism underlying a specific output can be represented in understandable terms). Both are required for trustworthy AI." },
      { ref: "Generative AI Profile (NIST AI 600-1)", text: "Published July 2024 as a companion resource. Identifies risks unique to or exacerbated by generative AI — including confabulation, data privacy leakage, harmful bias, information integrity, and value chain opacity — and maps suggested actions to the four core functions." },
      { ref: "Federal procurement relevance", text: "Although voluntary, the AI RMF is referenced in federal agency AI procurement requirements and acquisition guidance. Vendors selling AI systems to US government agencies should expect alignment with the Framework to be assessed as part of the procurement process." }
    ],
    sources: [
      { label: "NIST — AI Risk Management Framework 1.0 (Official Publication)", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
      { label: "NIST — Generative AI Profile (NIST AI 600-1)", url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence" }
    ]
  },
  {
    id: 50,
    title: "California AI Transparency Act (SB 942, as amended by AB 853)",
    shortName: "CA AI Transparency Act",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "Operative 2 August 2026 (platform obligations phase in from 2027)",
    overview: "California's content provenance and disclosure statute for AI-generated media. Requires covered generative AI providers to offer a free AI detection tool, apply both visible and embedded disclosures to AI-generated content, and contractually require licensees to preserve those disclosures. Originally enacted as SB 942 in September 2024 with a January 2026 effective date; AB 853 (signed October 2025) delayed the operative date to 2 August 2026 and added obligations for hosting platforms, large online platforms, and capture device manufacturers.",
    keyArticles: [
      { ref: "Covered provider threshold", text: "Applies to a person that creates, codes, or otherwise produces a generative AI system with over 1,000,000 monthly visitors or users that is publicly accessible within California. Smaller providers are not directly covered, but may face contractual obligations passed down from covered providers whose technology they license." },
      { ref: "Free AI detection tool", text: "Covered providers must make available a free, publicly accessible tool allowing users to assess whether image, video, or audio content — or any combination — was created or altered by the provider's generative AI system. The tool must output system provenance data where detected." },
      { ref: "Manifest disclosures (visible)", text: "Covered providers must offer users the option to include a clear and conspicuous disclosure identifying content as AI-generated. The disclosure must be permanent or extraordinarily difficult to remove, and must be understandable to a reasonable person." },
      { ref: "Latent disclosures (embedded)", text: "Covered providers must apply latent disclosures to AI-generated content where technically feasible and reasonable — embedding provenance metadata identifying the provider, the system name and version, and the time and date of generation. This aligns with emerging C2PA content provenance standards." },
      { ref: "Licensee contract obligations", text: "A covered provider licensing its generative AI system to a third party must contractually require the licensee to maintain the system's latent disclosure capability. Licensees may not strip, disable, or circumvent the watermarking mechanism. The obligation runs down the chain to sublicensees. Where a covered provider learns a licensee has modified the system to remove disclosures, it must revoke the licence within 96 hours." },
      { ref: "AB 853 platform expansion (from January 2027)", text: "Large online platforms (over 2 million monthly unique users) must give consumers an easy, conspicuous way to discover available provenance information. Generative AI hosting platforms may not knowingly make available systems that fail SB 942 disclosure requirements. Capture device manufacturers face separate obligations from 2028." },
      { ref: "Penalties", text: "Civil penalty of $5,000 per violation, with each day of non-compliance treated as a discrete violation. Enforceable by the California Attorney General, city attorneys, and county counsels. Prevailing plaintiffs may recover attorney's fees and costs. There is no private right of action." }
    ],
    sources: [
      { label: "California Legislature — SB 942 Full Bill Text", url: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB942" },
      { label: "Regulations.AI — SB 942 Analysis and Summary", url: "https://regulations.ai/regulations/california-sb-942-ai-transparency-act-2024" }
    ]
  },
  {
    id: 51,
    title: "CPPA Automated Decision-Making Technology (ADMT) Regulations",
    shortName: "CPPA ADMT Regulations",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "Approved 23 September 2025; ADMT requirements from 1 January 2027",
    overview: "Regulations issued by the California Privacy Protection Agency under the CCPA, covering automated decision-making technology, privacy risk assessments, and cybersecurity audits. Approved by the California Office of Administrative Law on 23 September 2025. Impose pre-use notice, opt-out, and access rights where ADMT is used to make significant decisions about consumers. The definition of ADMT is functional rather than technology-specific — capturing rule-based scoring systems as well as machine learning models.",
    keyArticles: [
      { ref: "ADMT definition", text: "Any technology that processes personal information and uses computation to replace or substantially replace human decision-making. The definition is deliberately functional — it captures rule-based scoring systems, statistical models, and machine learning alike. What matters is the role the technology plays in the decision, not its technical architecture." },
      { ref: "Significant decision definition", text: "A decision resulting in the provision or denial of: financial or lending services; housing; education enrolment or opportunities; employment or independent contracting opportunities or compensation; or healthcare services. This mirrors — but is narrower than — Colorado's 'consequential decision' standard." },
      { ref: "Pre-use notice", text: "Businesses using ADMT for a significant decision must provide a pre-use notice explaining: that ADMT is being used; the purpose of the use; how the ADMT works in plain language; the consumer's right to opt out; and the consumer's right to access information about the ADMT's output as it relates to them." },
      { ref: "Right to opt out", text: "Consumers have the right to opt out of ADMT used for significant decisions. Limited exceptions apply where the business provides a human appeal process, or where the ADMT is used for security, fraud prevention, or safety purposes. The opt-out must be honoured without degrading the service offered." },
      { ref: "Right to access ADMT information", text: "Consumers may request information about how a business used ADMT with respect to them — including the output of the ADMT and a plain-language explanation of the logic used. This is the closest US analogue to the GDPR's right to explanation." },
      { ref: "Risk assessments (from 1 January 2026)", text: "Businesses processing personal information presenting significant risk — including using ADMT for significant decisions, or using personal information to train ADMT for certain uses — must conduct and document risk assessments. Summaries must be submitted to the CPPA on a phased timeline." },
      { ref: "Phased compliance timeline", text: "Risk assessment obligations commence 1 January 2026. ADMT pre-use notice, opt-out, and access requirements commence 1 January 2027 — the same date Colorado's ADMTA takes effect. Cybersecurity audit obligations phase in through 2030 based on business size." }
    ],
    sources: [
      { label: "California Privacy Protection Agency — CCPA Regulations", url: "https://cppa.ca.gov/regulations/" },
      { label: "California Attorney General — CCPA Overview", url: "https://www.oag.ca.gov/privacy/ccpa" }
    ]
  },
  {
    id: 52,
    title: "Transparency in Frontier Artificial Intelligence Act (SB 53)",
    shortName: "CA Frontier AI Act (SB 53)",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "1 January 2026",
    overview: "The first US law addressing catastrophic risk from frontier AI models. Requires large frontier developers to publish safety frameworks, report critical safety incidents to California regulators, and maintain whistleblower protections. Signed by Governor Newsom in September 2025 following the veto of the broader SB 1047 in 2024 — SB 53 represents a narrower, transparency-focused successor rather than a substantive safety mandate.",
    keyArticles: [
      { ref: "Scope — frontier model threshold", text: "Applies to developers of frontier models trained using computing power exceeding 10^26 floating-point operations (FLOPS). Enhanced obligations apply to 'large frontier developers' — those with annual revenue exceeding $500 million. Smaller developers face reduced reporting requirements." },
      { ref: "Published safety framework", text: "Large frontier developers must publish a frontier AI framework describing how they assess and mitigate catastrophic risk, how the framework incorporates national and international safety standards, and what governance structures oversee its application. The document must be publicly accessible." },
      { ref: "Transparency reports", text: "Developers must publish transparency reports disclosing information about their frontier models — including capability assessments, evaluation results relevant to catastrophic risk, and mitigations applied prior to deployment." },
      { ref: "Critical safety incident reporting", text: "Developers must report critical safety incidents to the California Office of Emergency Services. Reportable incidents include unauthorised access to model weights, loss of control over a model, and evidence of a model providing meaningful uplift toward creating a weapon of mass destruction." },
      { ref: "Whistleblower protections", text: "Employees who report catastrophic risk concerns to regulators are protected from retaliation. Developers must maintain an internal anonymous reporting channel and may not enforce agreements preventing disclosure of catastrophic risk information to authorities." },
      { ref: "Penalties", text: "Civil penalties of up to $1,000,000 per violation for large frontier developers (annual revenue exceeding $500 million), enforceable by the California Attorney General. Penalties scale down for smaller developers." }
    ],
    sources: [
      { label: "California Legislature — SB 53 Full Bill Text", url: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB53" },
      { label: "California Office of Emergency Services — Incident Reporting", url: "https://www.caloes.ca.gov/" }
    ]
  },
  {
    id: 53,
    title: "Generative AI Training Data Transparency Act (AB 2013)",
    shortName: "CA Training Data Act (AB 2013)",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "1 January 2026",
    overview: "Requires developers of generative AI systems made available to Californians to publish high-level documentation of the data used to train those systems. Where SB 942 addresses outputs (content provenance), AB 2013 addresses inputs (training data) — together forming a comprehensive framework covering both sides of the generative AI pipeline. Applies to systems released or substantially modified on or after 1 January 2022.",
    keyArticles: [
      { ref: "Scope and retroactivity", text: "Applies to developers of generative AI systems or services made publicly available to Californians, for systems released or substantially modified on or after 1 January 2022. This retroactive element means documentation obligations extend to models already deployed before the law was enacted." },
      { ref: "Required disclosure — dataset summary", text: "Developers must publish on their website a high-level summary of the datasets used in development, including: the sources or owners of the datasets; the number of data points (ranges are permitted); and the types of data points included." },
      { ref: "Required disclosure — IP and personal information", text: "The documentation must state whether the datasets include data protected by copyright, trademark, or patent; whether they include personal information as defined by the CCPA; and whether they include aggregate consumer information." },
      { ref: "Required disclosure — provenance and processing", text: "Developers must disclose whether datasets were purchased or licensed; whether any data was collected or processed by the developer directly; whether synthetic data generation was used; and the time period during which data was collected." },
      { ref: "Required disclosure — cleaning and modification", text: "The documentation must describe whether the datasets were cleaned, processed, or otherwise modified by the developer, and the purpose of any such modification. This is intended to surface curation decisions that may embed bias." },
      { ref: "Update obligation", text: "Documentation must be updated whenever a system is substantially modified. Developers should treat training data documentation as a living artefact maintained alongside model versioning, rather than a one-time publication." }
    ],
    sources: [
      { label: "California Legislature — AB 2013 Full Bill Text", url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB2013" },
      { label: "California Attorney General — Privacy Enforcement", url: "https://www.oag.ca.gov/privacy" }
    ]
  },
  {
    id: 54,
    title: "Colorado Automated Decision-Making Technology Act (SB 26-189)",
    shortName: "Colorado ADMTA",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "1 January 2027",
    overview: "Signed 14 May 2026, repealing and replacing the 2024 Colorado AI Act before it ever took effect. The original Act was the first comprehensive US AI statute, regulating all 'high-risk' AI systems with a duty of reasonable care to prevent algorithmic discrimination. The replacement is deliberately narrower — applying only to automated decision-making technology used to make consequential decisions, and focusing on transparency and disclosure rather than an affirmative anti-discrimination duty. Existing state anti-discrimination law now applies to ADMT instead.",
    keyArticles: [
      { ref: "Narrowed scope", text: "Applies only to ADMT used to make 'consequential decisions'. Unlike California's CCPA regulations — which cover ADMT that substantially replaces human decision-making — Colorado's standard is broader in one respect: it captures any ADMT that 'materially influences' a consequential decision, not only those that replace human judgment." },
      { ref: "Point-of-interaction notice", text: "Deployers must provide clear consumer notice at the point of interaction with covered ADMT. The requirement may be satisfied via a prominent public posting rather than individualised pre-decision notice — a deliberate simplification from the original Act's framework." },
      { ref: "Post-adverse-outcome disclosure", text: "Where an adverse outcome is influenced by ADMT, the deployer must provide a disclosure explaining the decision, the role the ADMT played in reaching it, and the recourse options available to the consumer." },
      { ref: "Developer-to-deployer information duty", text: "Developers must provide deployers with specified information about the ADMT they supply — including intended uses, reasonably foreseeable harmful uses, and the categories of data used to train the technology. This creates a documentation obligation running along the AI supply chain." },
      { ref: "Individual rights preserved", text: "The Act preserves limited individual rights: to access and correct inaccurate personal data used by the ADMT, and to obtain meaningful human review and reconsideration of adverse automated decisions." },
      { ref: "What was removed", text: "The replacement eliminated: the affirmative duty of reasonable care to prevent algorithmic discrimination; mandatory deployer risk management programmes; impact assessments; and certain Attorney General reporting obligations. Existing Colorado anti-discrimination law now applies to ADMT instead of a bespoke AI duty." },
      { ref: "Enforcement", text: "Enforced exclusively by the Colorado Attorney General — no private right of action. The Act adds a 90-day notice-and-cure period and clarifies liability allocation between developers and deployers. AG rulemaking to implement the Act was opened for public comment in August 2026." }
    ],
    sources: [
      { label: "Colorado Attorney General — ADMT Act Rulemaking and Guidance", url: "https://coag.gov/ai/" },
      { label: "Colorado General Assembly — SB 26-189", url: "https://leg.colorado.gov/bills/sb26-189" }
    ]
  },
  {
    id: 55,
    title: "Illinois — Human Rights Act Amendment (HB 3773) & AI Video Interview Act",
    shortName: "Illinois Employment AI",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "HB 3773: 1 January 2026; AI Video Interview Act: 1 January 2020",
    overview: "Illinois regulates employment AI through two instruments. HB 3773, signed 9 August 2024, amends the Illinois Human Rights Act to make it a civil rights violation to use AI in employment decisions without notice, or in a discriminatory manner — with a private right of action available. The earlier AI Video Interview Act requires consent and disclosure before AI analyses video interviews. Together they make Illinois one of the most consequential US jurisdictions for hiring AI, because plaintiffs can sue directly.",
    keyArticles: [
      { ref: "HB 3773 — notice requirement", text: "Employers must notify employees and applicants when AI is used in recruitment, hiring, promotion, discipline, discharge, or other terms and conditions of employment. Failure to provide notice is itself a civil rights violation, independent of whether any discrimination occurred." },
      { ref: "HB 3773 — discrimination prohibition", text: "Employers may not use AI that has the effect of subjecting employees to discrimination on the basis of a protected class, nor use zip code as a proxy for a protected class. This addresses proxy discrimination — where a facially neutral variable correlates with a protected characteristic." },
      { ref: "HB 3773 — private right of action", text: "Violations are enforceable through the Illinois Human Rights Act's existing procedures, which include a private right of action after exhausting administrative remedies with the Illinois Department of Human Rights. This distinguishes Illinois from Colorado and Texas, where only the Attorney General may enforce." },
      { ref: "AI Video Interview Act — consent", text: "Employers using AI to analyse video interviews must: notify the applicant before the interview that AI may be used; provide an explanation of how the AI works and what characteristics it uses to evaluate applicants; and obtain the applicant's consent before the evaluation occurs." },
      { ref: "AI Video Interview Act — retention and destruction", text: "Employers must destroy all copies of an applicant's video interview, including copies held by any third party, within 30 days of a request from the applicant. Employers must also instruct any recipient of the video to destroy their copies." },
      { ref: "AI Video Interview Act — demographic reporting", text: "Employers who rely solely on AI analysis to determine whether an applicant advances to an in-person interview must report annually to the Illinois Department of Commerce on the race and ethnicity of applicants who were and were not selected, to enable disparate impact monitoring." }
    ],
    sources: [
      { label: "Illinois General Assembly — HB 3773 (Human Rights Act Amendment)", url: "https://www.ilga.gov/legislation/billstatus.asp?DocNum=3773&GAID=17&DocTypeID=HB&SessionID=112" },
      { label: "Illinois General Assembly — AI Video Interview Act (820 ILCS 42)", url: "https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=4015&ChapterID=68" }
    ]
  },
  {
    id: 56,
    title: "Texas Responsible AI Governance Act (TRAIGA, HB 149)",
    shortName: "Texas TRAIGA",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "1 January 2026",
    overview: "Signed 22 June 2025. Takes a prohibited-purpose approach rather than a risk-tiered one — banning AI systems developed or deployed for specified restricted purposes rather than imposing graduated obligations based on risk level. Also imposes disclosure duties on government agencies and certain private deployers. Enforced exclusively by the Texas Attorney General; no private right of action exists.",
    keyArticles: [
      { ref: "Prohibited purposes", text: "AI systems may not be developed or deployed with the intent to: encourage or incite self-harm, harm to others, or criminal activity; unlawfully discriminate against a protected class; produce child sexual abuse material or deepfake sexual content; or infringe constitutional rights. Intent is a required element — disparate impact alone is insufficient." },
      { ref: "Government disclosure duty", text: "State agencies deploying AI systems that interact with consumers must disclose that the consumer is interacting with an AI system. The disclosure must be clear, conspicuous, and provided before or at the time of interaction." },
      { ref: "Healthcare disclosure", text: "Healthcare providers using AI in patient care must disclose that use to the patient before or at the time of service, or as soon as reasonably practicable in emergency situations." },
      { ref: "Biometric identifier restrictions", text: "TRAIGA restricts government use of AI for biometric identification and social scoring — prohibiting the development or deployment of AI to evaluate or classify individuals based on social behaviour or personal characteristics in ways that result in detrimental treatment." },
      { ref: "Regulatory sandbox", text: "Establishes an AI regulatory sandbox administered by the Texas Department of Information Resources, allowing approved participants to test AI systems for up to 36 months with limited regulatory relief while providing performance data to the state." },
      { ref: "Penalties", text: "Curable violations: $10,000–$12,000 per violation with a 60-day cure period. Uncurable violations: $80,000–$200,000 per violation. Continuing violations: $2,000–$40,000 per day. Enforced solely by the Texas Attorney General; no private right of action." }
    ],
    sources: [
      { label: "Texas Legislature — HB 149 (TRAIGA) Full Text", url: "https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB149" },
      { label: "Texas Attorney General — Consumer Protection", url: "https://www.texasattorneygeneral.gov/consumer-protection" }
    ]
  },
  {
    id: 57,
    title: "Utah Artificial Intelligence Policy Act (SB 149, amended by SB 226)",
    shortName: "Utah AI Policy Act",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "1 May 2024 (narrowed by SB 226 in 2025)",
    overview: "The first US state AI framework, creating definitions, oversight structures, and a regulatory learning-laboratory model. Originally imposed broad disclosure duties on any entity using generative AI in consumer interactions; SB 226 (2025) narrowed this significantly so that proactive disclosure is required only in regulated-occupation contexts, with disclosure otherwise required on consumer request.",
    keyArticles: [
      { ref: "Disclosure on request", text: "Any person using generative AI to interact with a consumer must disclose that the consumer is interacting with generative AI and not a human, if the consumer asks in a clear and unambiguous way. The 2025 amendment made this a reactive rather than proactive obligation for most sectors." },
      { ref: "Regulated occupation disclosure", text: "Persons in regulated occupations — those requiring a state licence or certification, such as healthcare, legal, financial, and accounting services — must proactively disclose generative AI use at the outset of any high-risk interaction, before any exchange of personal or sensitive information." },
      { ref: "No liability shield", text: "The Act expressly provides that a person cannot avoid liability for consumer protection violations by claiming that generative AI produced the offending statement or output. The deploying entity remains responsible for AI outputs as if it had made them directly." },
      { ref: "Office of Artificial Intelligence Policy", text: "The Act created the Utah Office of Artificial Intelligence Policy to administer the state's AI regulatory framework and oversee the learning laboratory programme." },
      { ref: "AI Learning Laboratory Program", text: "A regulatory sandbox allowing participants to test AI systems under a regulatory mitigation agreement with the state — providing reduced penalties or temporary regulatory relief in exchange for data sharing and cooperation with the Office of AI Policy." },
      { ref: "Enforcement", text: "Enforced by the Utah Division of Consumer Protection. Administrative fines of up to $2,500 per violation, with court-ordered penalties available for continued non-compliance. No private right of action." }
    ],
    sources: [
      { label: "Utah Legislature — SB 149 Artificial Intelligence Policy Act", url: "https://le.utah.gov/~2024/bills/static/SB0149.html" },
      { label: "Utah Office of Artificial Intelligence Policy", url: "https://ai.utah.gov/" }
    ]
  },
  {
    id: 58,
    title: "New York City Local Law 144 — Automated Employment Decision Tools",
    shortName: "NYC Local Law 144",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "Enforcement from 5 July 2023",
    overview: "The earliest US algorithmic transparency law of its kind and still in force. Requires annual independent bias audits of automated employment decision tools, publication of audit results, and advance notice to candidates. Functions as a mandatory third-party attestation regime — conceptually closer to conformity assessment than to a disclosure rule, and a useful comparator to the EU AI Act's high-risk conformity assessment.",
    keyArticles: [
      { ref: "Scope — AEDT definition", text: "Applies to any automated employment decision tool used to substantially assist or replace discretionary decision-making in hiring or promotion for positions in New York City. 'Substantially assist or replace' includes relying solely on a tool's output, using its score as one weighted criterion above others, or using it to overrule human conclusions." },
      { ref: "Annual independent bias audit", text: "Employers may not use an AEDT unless it has been subject to a bias audit conducted by an independent auditor no more than one year prior to use. The auditor must be independent of the employer and of the tool vendor — vendor self-audits do not satisfy the requirement." },
      { ref: "Audit content — impact ratios", text: "The audit must calculate selection rates and impact ratios for each race/ethnicity and sex category required by EEO reporting, comparing the selection rate for each group against the most-selected group. Intersectional categories must also be assessed." },
      { ref: "Publication of results", text: "A summary of the most recent bias audit must be published on the employer's website, including the date of the audit, the distribution date of the tool, the source and explanation of the data used, and the calculated selection rates and impact ratios. The summary must remain posted for at least six months after the tool's last use." },
      { ref: "Candidate notice", text: "Employers must notify candidates and employees residing in NYC at least ten business days before using an AEDT, disclosing: that an AEDT will be used; the job qualifications and characteristics it will assess; and — on request — the type of data collected, its source, and the employer's data retention policy." },
      { ref: "Penalties", text: "Enforced by the NYC Department of Consumer and Worker Protection. Civil penalties of $500 for a first violation and up to $1,500 for each subsequent violation. Each day of continued use without a compliant audit, and each failure to provide required notice, constitutes a separate violation." }
    ],
    sources: [
      { label: "NYC Department of Consumer and Worker Protection — Local Law 144 Rules", url: "https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page" },
      { label: "NYC Council — Local Law 144 of 2021 Full Text", url: "https://legistar.council.nyc.gov/LegislationDetail.aspx?ID=4344524&GUID=B051915D-A9AC-451E-81F8-6596032FA3F9" }
    ]
  },
  {
    id: 59,
    title: "Sector Transparency — NAIC Model Bulletin, FCRA/ECOA, and EEOC",
    shortName: "Sector AI Transparency",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "Ongoing (NAIC Model Bulletin adopted by 25 states as of April 2026)",
    overview: "Sector regulators have made clear that existing law applies fully to AI-mediated decisions — no separate AI statute is required for enforcement. Three strands matter most: the NAIC Model Bulletin for insurers, adverse action notice requirements under FCRA and ECOA for credit, and EEOC guidance for employment. Together these establish that explainability is already a legal requirement in regulated decision contexts, regardless of the state AI law landscape.",
    keyArticles: [
      { ref: "NAIC Model Bulletin on AI Systems (2023)", text: "Reminds insurers that decisions driven by AI systems must not violate unfair trade practice laws or other existing legal standards. Outlines the governance, risk management, and use protocols insurers should be prepared to disclose to their regulator on request. Adopted by 25 states as of April 2026." },
      { ref: "NAIC — expected governance documentation", text: "Insurers should maintain a written AI systems programme covering: governance structure and accountability; risk identification and mitigation; validation and testing protocols; ongoing monitoring for drift and disparate impact; and third-party vendor oversight. Regulators may request this documentation during market conduct examinations." },
      { ref: "FCRA and ECOA — adverse action notices", text: "Adverse action notices must state the specific principal reasons for a denial. The CFPB has confirmed this applies fully to AI-driven credit decisions — meaning 'the algorithm said no' is not a legally sufficient explanation. Creditors must be able to identify and articulate the actual factors driving a model's output." },
      { ref: "CFPB position on complex models", text: "The CFPB has stated that creditors cannot rely on model complexity as a defence. If a creditor cannot explain the specific reasons a model produced an adverse outcome, that is a compliance failure — not an inherent limitation excusing disclosure. This effectively makes explainability a precondition for lawful deployment in lending." },
      { ref: "EEOC — existing law applies to AI", text: "The EEOC has emphasised that Title VII, the ADA, and the ADEA apply equally to AI-mediated employment decisions. Employers remain liable for disparate impact caused by a vendor's tool, and cannot delegate compliance responsibility to the vendor by contract." },
      { ref: "ADA and accessibility", text: "EEOC guidance specifically addresses AI screening tools that may disadvantage applicants with disabilities — for example, video analysis penalising speech patterns or facial movements. Employers must provide reasonable accommodation and alternative assessment routes." }
    ],
    sources: [
      { label: "NAIC — Model Bulletin on Use of AI Systems by Insurers", url: "https://content.naic.org/cipr-topics/artificial-intelligence" },
      { label: "CFPB — Adverse Action Notification Requirements and AI", url: "https://www.consumerfinance.gov/compliance/circulars/" },
      { label: "EEOC — Artificial Intelligence and Algorithmic Fairness Initiative", url: "https://www.eeoc.gov/ai" }
    ]
  },

  // ── UNITED STATES — LICENSING & CERTIFICATION ────────────
  {
    id: 60,
    title: "FDA Pre-Market Pathways for AI-Enabled Medical Devices",
    shortName: "FDA SaMD Pathways",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "Ongoing (approximately 1,450 AI-enabled devices authorised as of June 2026)",
    overview: "The most developed AI approval regime in the United States — and the closest thing to genuine AI licensing. AI-enabled medical devices go through the same pre-market pathways as any other device, with AI-specific requirements layered on. The threshold question is whether software crosses the line from non-device Clinical Decision Support into regulated Software as a Medical Device. Once it does, the full apparatus applies: 510(k) or De Novo submission, PCCP planning, labelling obligations, post-market surveillance, and cybersecurity compliance.",
    keyArticles: [
      { ref: "Clinical Decision Support carve-out", text: "Software that qualifies as non-device Clinical Decision Support is not subject to FDA pre-market review and requires no PCCP. The line is drawn by function: if an AI-enabled tool makes specific recommendations around a diagnosis or treatment, it is regulated. It is exempt if it merely matches patient data with current treatment guidelines for common illnesses and the clinician can independently review the basis for the recommendation." },
      { ref: "510(k) pathway — substantial equivalence", text: "The dominant route. As of August 2024, 97% of AI-enabled devices were cleared via 510(k). Applicants must demonstrate their low-to-moderate risk device is substantially equivalent to a legally marketed predicate device. Review targets 90 days, though AI submissions frequently require additional information requests." },
      { ref: "De Novo classification — no predicate", text: "For novel low-to-moderate risk devices with no suitable predicate. During the same period, 22 AI-enabled devices went through De Novo classification. A successful De Novo creates a new device classification that subsequent products may then use as a 510(k) predicate — making early De Novo grants strategically valuable." },
      { ref: "Premarket Approval (PMA) — Class III", text: "The most rigorous pathway, reserved for high-risk devices. Only four AI-enabled devices required PMA during the period surveyed. Requires clinical trial evidence demonstrating safety and effectiveness, and carries a substantially longer review timeline and cost." },
      { ref: "SaMD vs SiMD", text: "Software as a Medical Device is standalone software intended for a medical purpose, operating on general computing platforms. Software in a Medical Device is embedded within or drives a physical device. Both are regulated, but SaMD submissions face distinct evidentiary expectations around clinical validation." },
      { ref: "Current authorisation landscape", text: "Approximately 1,450 AI-enabled devices authorised as of June 2026, with a record 295 clearances in 2025 alone. Radiology accounts for 71.5% of all AI/ML authorisations. Notably, no generative AI-enabled medical device has been authorised to date — the agency is still developing its approach to that category." }
    ],
    sources: [
      { label: "FDA — Artificial Intelligence in Software as a Medical Device", url: "https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device" },
      { label: "FDA — AI-Enabled Medical Device List", url: "https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices" }
    ]
  },
  {
    id: 61,
    title: "FDA Predetermined Change Control Plans (PCCPs)",
    shortName: "FDA PCCP Framework",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "Final guidance December 2024; updated August 2025",
    overview: "The key AI-specific regulatory innovation in US medical device law. Solves the fundamental problem that AI models change after approval — under the traditional paradigm, each modification would require a new clearance. A PCCP allows manufacturers to specify anticipated model changes in advance and obtain pre-authorisation for them, then ship updates without a new submission. Now a routine part of AI device submissions.",
    keyArticles: [
      { ref: "Two required components", text: "A PCCP has two parts: the SaMD Pre-Specifications (SPS), describing WHAT aspects of the algorithm the manufacturer intends to change through learning or retraining; and the Algorithm Change Protocol (ACP), explaining HOW the algorithm will change while remaining safe and effective — the methods, validation, and acceptance criteria applied to each change." },
      { ref: "When a PCCP is required", text: "If a model will or might change post-market, a PCCP must be built and submitted with the original marketing application. A 'locked' algorithm — one producing unchanged outputs for identical inputs — does not require a PCCP. An adaptive model that evolves post-deployment does." },
      { ref: "Types of anticipated changes", text: "Commonly covered modifications include: improvement of clinical or analytical performance through training on additional datasets; changes to the input data processed by the algorithm (for example, additional laboratory data or imaging data from a different manufacturer's scanner); and re-training to address performance drift." },
      { ref: "Effect of pre-authorisation", text: "Where a change falls within an approved PCCP, FDA does not expect a new marketing submission when the change is implemented. Changes falling outside the PCCP scope still require a new 510(k), De Novo, or PMA supplement — making PCCP scope definition a significant strategic decision at submission time." },
      { ref: "August 2025 final guidance", text: "FDA's final August 2025 guidance, 'Marketing Submission Recommendations for a Predetermined Change Control Plan for AI-Enabled Device Software Functions', formalised the mechanism. It superseded the December 2024 version with relatively minor changes, most notably a revised definition of machine learning." }
    ],
    sources: [
      { label: "FDA — PCCP Marketing Submission Recommendations (Final Guidance)", url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/marketing-submission-recommendations-predetermined-change-control-plan-artificial-intelligence" },
      { label: "FDA — AI/ML SaMD Action Plan", url: "https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-software-medical-device" }
    ]
  },
  {
    id: 62,
    title: "FDA Lifecycle Management, Quality Systems & Cybersecurity for AI Devices",
    shortName: "FDA TPLC / QMSR / Cyber",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "QMSR: 2 February 2026; Cybersecurity final guidance: 3 February 2026",
    overview: "The ongoing obligations that sit alongside pre-market clearance. Three strands: the Total Product Life Cycle draft guidance setting submission content expectations for AI devices; the Quality Management System Regulation replacing the legacy Quality System Regulation; and the cybersecurity requirements applying to connected devices. Creates an unusual compliance position — manufacturers must operationalise a lifecycle framework that has not yet been formally finalised, while several adjacent guidances are already enforceable.",
    keyArticles: [
      { ref: "TPLC submission content (January 2025 draft)", text: "The draft guidance on AI-Enabled Device Software Functions applies a Total Product Life Cycle approach and recommends submissions include: model description; data lineage and train/validation/test splits; performance tied explicitly to labelling claims; bias analysis and mitigation; human-AI workflow description; post-market monitoring plan; and a PCCP where post-market updates are anticipated." },
      { ref: "Demographic performance assessment", text: "FDA emphasises that for AI/ML devices, manufacturers must assess whether performance is consistent across relevant demographic groups — age, sex, race, and ethnicity — and describe any mitigations undertaken. Robustness testing against under-represented subpopulations and out-of-distribution data is expected, with results included in the submission." },
      { ref: "Unfinalised cornerstone guidance", text: "The TPLC guidance for AI-enabled device software functions, issued as a draft in January 2025, remains unfinalised as of mid-2026. Meanwhile PCCP, Clinical Decision Support, cybersecurity, and general wellness guidances are operative and enforceable — meaning manufacturers must work to a framework that is not yet formally adopted." },
      { ref: "QMSR transition (2 February 2026)", text: "The Quality Management System Regulation takes effect 2 February 2026, withdrawing the majority of current 21 CFR Part 820 requirements and incorporating ISO 13485:2016 by reference. FDA has stated the requirements are substantially similar in totality, but manufacturers must map their existing quality systems to the ISO structure." },
      { ref: "Cybersecurity final guidance (3 February 2026)", text: "'Cybersecurity in Medical Devices: Quality Management System Considerations and Content of Premarket Submissions' supersedes the June 2025 version. Manufacturers should demonstrate products are 'secure by design', embedding threat modelling, risk assessment, and update mechanisms into development." },
      { ref: "Software Bill of Materials (SBOM)", text: "FDA requires an SBOM — a complete inventory of software components including third-party and open-source libraries — to enable vulnerability tracking. For devices meeting the 'cyber device' definition under FD&C Act Section 524B, missing required cybersecurity elements can materially affect FDA's authorisation determination." },
      { ref: "Post-market surveillance", text: "Manufacturers must monitor real-world performance, report adverse events, and track algorithm performance drift. Post-market obligations are comparatively less prescriptive than pre-market requirements, but FDA has signalled increasing interest in mandated registries and periodic real-world outcome reporting." }
    ],
    sources: [
      { label: "FDA — AI-Enabled Device Software Functions: Lifecycle Management (Draft Guidance)", url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/artificial-intelligence-enabled-device-software-functions-lifecycle-management-and-marketing" },
      { label: "FDA — Quality Management System Regulation (QMSR) Final Rule", url: "https://www.fda.gov/medical-devices/quality-and-compliance-medical-devices/quality-management-system-regulation-final-rule-amending-quality-system-regulation-frequently-asked" },
      { label: "FDA — Cybersecurity in Medical Devices Guidance", url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/cybersecurity-medical-devices-quality-system-considerations-and-content-premarket-submissions" }
    ]
  },
  {
    id: 63,
    title: "Financial Services — SEC, FINRA & State Licensing",
    shortName: "US Financial AI Licensing",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "Ongoing",
    overview: "No AI-specific licence exists in US financial services. AI governance folds into existing registration and supervision frameworks rather than creating a separate approval track. This is a meaningful contrast with Hong Kong, where the SFC requires a written AI governance policy as part of the licence application pack for Type 1, 4, and 9 licences. No US financial regulator has gone that far — the obligation is to supervise AI adequately under existing rules, not to obtain AI-specific authorisation.",
    keyArticles: [
      { ref: "SEC registration and Form ADV disclosure", text: "Investment advisers using AI for portfolio management or robo-advisory services must disclose that use in Form ADV. Critically, the fiduciary duty applies regardless of automation — an adviser cannot reduce its standard of care by delegating decisions to an algorithm. Material AI use must be disclosed to clients as part of the adviser's brochure." },
      { ref: "FINRA Rule 3110 — supervision", text: "Broker-dealers using AI in trading, recommendations, or communications must establish and maintain a supervisory system reasonably designed to achieve compliance. This includes written supervisory procedures covering AI system selection, testing, ongoing monitoring, and escalation of anomalous outputs. FINRA has issued AI-specific guidance but created no separate licence." },
      { ref: "Regulation Best Interest (Reg BI)", text: "Where AI generates or influences a recommendation to a retail customer, the recommendation must satisfy Reg BI's care, disclosure, conflict of interest, and compliance obligations. The firm must be able to demonstrate the basis for the recommendation — creating a practical explainability requirement." },
      { ref: "State money transmitter and lending licences", text: "State licences attach to the regulated activity, not the technology. A lending platform requires a state lending licence whether decisions are made by underwriters or by a model. AI does not create additional licensing triggers, but it also provides no exemption from existing ones." },
      { ref: "NAIC Model Bulletin — supervisory expectation", text: "Insurers in the 25 states that have adopted the Model Bulletin must be prepared to disclose AI governance protocols to regulators on request, typically during market conduct examinations. This is a supervisory expectation enforced through examination rather than a licensing precondition." },
      { ref: "Contrast with Hong Kong", text: "The absence of an AI governance policy requirement in US licence applications is the sharpest structural difference from Hong Kong's approach. A firm licensed in both jurisdictions will find the Hong Kong SFC requirement more prescriptive at the application stage, while US obligations bite harder through ongoing supervision and enforcement." }
    ],
    sources: [
      { label: "SEC — Investment Adviser Registration and Form ADV", url: "https://www.sec.gov/investment/investment-adviser-registration" },
      { label: "FINRA — Artificial Intelligence in the Securities Industry", url: "https://www.finra.org/rules-guidance/key-topics/fintech/artificial-intelligence" },
      { label: "NAIC — AI Regulatory Resources", url: "https://content.naic.org/cipr-topics/artificial-intelligence" }
    ]
  },
  {
    id: 64,
    title: "Aviation & Defence — FAA Certification, ITAR and EAR",
    shortName: "FAA / ITAR / EAR Licensing",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "Ongoing",
    overview: "Two distinct licensing regimes apply to AI in aviation and defence contexts. The FAA requires certification for AI used in flight-critical systems and operates a permitting framework for drone operations. Separately, ITAR and EAR require export licences before AI with defence or dual-use applications can be transferred, demonstrated, or deployed internationally — obligations that bite even where no physical export occurs.",
    keyArticles: [
      { ref: "FAA type certification — flight-critical AI", text: "AI used in flight-critical systems requires certification as part of the aircraft or system type certificate. FAA has historically required deterministic, verifiable behaviour in flight-critical software, which creates significant challenges for machine learning systems whose behaviour is probabilistic rather than fully specifiable in advance." },
      { ref: "Part 107 — small unmanned aircraft", text: "Commercial drone operations require a Remote Pilot Certificate under 14 CFR Part 107. AI-enabled autonomous operations frequently exceed Part 107's baseline limits — particularly on beyond-visual-line-of-sight flight and operations over people — and require specific waivers demonstrating an equivalent level of safety." },
      { ref: "ITAR licensing — defence technical data", text: "The ITAR captures broad categories of technical data related to defence articles on the US Munitions List. A licence from the Directorate of Defense Trade Controls is virtually always required to transfer ITAR-controlled technical data between countries or parties. There is no de minimis exemption — foreign-made items incorporating any US-origin ITAR content remain controlled." },
      { ref: "EAR licensing — dual-use AI", text: "AI models trained on or incorporating controlled technical data may require a licence from the Bureau of Industry and Security before international transfer, demonstration, or deployment. Dual-use AI in computer vision, autonomous systems, semiconductor design, and cryptographic analysis is most likely to be captured." },
      { ref: "Deemed export — the licensing trap", text: "Releasing controlled technology or source code to a foreign national inside the United States is 'deemed' an export to that person's country of nationality and may require a licence. Hiring a foreign national engineer who accesses controlled AI training data or model architecture can trigger licensing obligations without any data crossing a border." },
      { ref: "Practical sequencing", text: "Export licences must be obtained before transfer, demonstration, or deployment — not afterwards. For AI companies planning international expansion, export classification should be determined at product design stage rather than at the point of a specific transaction, since classification may constrain architecture and hiring decisions." }
    ],
    sources: [
      { label: "FAA — Unmanned Aircraft Systems (Part 107)", url: "https://www.faa.gov/uas/commercial_operators" },
      { label: "Directorate of Defense Trade Controls — ITAR", url: "https://www.pmddtc.state.gov/ddtc_public/ddtc_public?id=ddtc_public_portal_itar_landing" },
      { label: "Bureau of Industry and Security — Export Administration Regulations", url: "https://www.bis.doc.gov/index.php/regulations/export-administration-regulations-ear" }
    ]
  },
  {
    id: 65,
    title: "Employment — NYC Local Law 144 Bias Audit as Certification",
    shortName: "NYC LL144 — Bias Audit",
    region: "northamerica", country: "usa",
    regionLabel: "North America", countryLabel: "United States",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "Enforcement from 5 July 2023",
    overview: "The closest thing to an AI certification requirement in the United States outside healthcare. Automated employment decision tools must undergo an annual independent bias audit, and the results must be published before the tool can lawfully be used. It is not a licence — no government body grants approval — but it functions as mandatory third-party attestation, conceptually similar to the conformity assessment model used under the EU AI Act for high-risk systems.",
    keyArticles: [
      { ref: "Audit as precondition to lawful use", text: "An employer may not use an AEDT unless a bias audit has been conducted within the preceding twelve months. This makes the audit a precondition to deployment rather than a post-hoc review — structurally analogous to pre-market certification, even though no regulator issues an approval." },
      { ref: "Independence requirement", text: "The audit must be conducted by an independent auditor with no involvement in using, developing, or distributing the tool, and no financial interest in the employer or vendor. Vendor self-audits do not satisfy the requirement — this is what makes the regime a genuine third-party attestation rather than self-certification." },
      { ref: "Published results as public attestation", text: "A summary of the most recent audit must be published on the employer's website — including the audit date, the tool's distribution date, the source and explanation of the data used, and calculated selection rates and impact ratios. The summary must remain posted for at least six months after the tool's last use." },
      { ref: "Annual renewal", text: "The audit must be renewed annually. A tool whose audit lapses may not lawfully continue in use, and each day of continued use without a current audit constitutes a separate violation — creating an ongoing certification maintenance obligation rather than a one-time clearance." },
      { ref: "Comparison to conformity assessment", text: "The structure parallels EU AI Act conformity assessment for high-risk systems: independent evaluation against defined criteria, documentation published or made available, and periodic renewal. The key difference is that Local Law 144 has no notified body system and no registration database — publication substitutes for regulatory filing." },
      { ref: "Vendor implications", text: "Although the obligation falls on the employer, vendors are practically required to support audits by providing the data and access auditors need. Employers increasingly contract for audit cooperation, and some vendors commission audits proactively to accelerate customer deployment." }
    ],
    sources: [
      { label: "NYC Department of Consumer and Worker Protection — Local Law 144", url: "https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page" },
      { label: "NYC — Final Rules on Automated Employment Decision Tools", url: "https://rules.cityofnewyork.us/rule/automated-employment-decision-tools-updated/" }
    ]
  },

  // ── EUROPEAN UNION — CROSS-BORDER DATA FLOWS ─────────────
  {
    id: 66,
    title: "GDPR Chapter V — International Transfers (Articles 44–50)",
    shortName: "GDPR Chapter V",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "25 May 2018",
    overview: "The foundational EU cross-border transfer framework. Chapter V inverts the default: transfers outside the EEA are prohibited unless one of the prescribed mechanisms applies. Personal data may leave the EEA only through an adequacy decision (Article 45), appropriate safeguards (Article 46), or a narrow derogation (Article 49) — in that priority order. The legal duty sits with the EU exporter, not the importer, and applies equally to onward transfers from a third country to a fourth.",
    keyArticles: [
      { ref: "Article 44 — General principle", text: "Transfers to a third country or international organisation may take place only if the conditions in Chapter V are complied with by the controller and processor — including for onward transfers from that third country to another third country or international organisation. All Chapter V provisions must be applied to ensure the level of protection guaranteed by the GDPR is not undermined." },
      { ref: "What counts as a transfer", text: "Broader than most organisations assume. A transfer occurs when personal data is sent to, accessed from, or stored in a country outside the EEA — including cloud storage, remote access, and intra-group transfers. An engineer in Shenzhen accessing an EU database is a transfer, even though no data was actively sent." },
      { ref: "Article 45 — Adequacy decisions", text: "A transfer may take place where the Commission has decided that the third country, a territory or specified sector within it, or the international organisation ensures an adequate level of protection. Such a transfer requires no specific authorisation. Adequacy decisions are subject to periodic review at least every four years and may be amended, suspended, or repealed." },
      { ref: "Article 46 — Appropriate safeguards", text: "In the absence of adequacy, a transfer requires appropriate safeguards providing enforceable data subject rights and effective legal remedies. Available tools include Standard Contractual Clauses, Binding Corporate Rules, approved codes of conduct, and approved certification mechanisms. SCCs are by far the most widely used." },
      { ref: "Article 47 — Binding Corporate Rules", text: "BCRs enable transfers within a corporate group. They must be legally binding on all group members, expressly confer enforceable rights on data subjects, and be approved by a competent supervisory authority. Approval typically takes two to three years, making BCRs practical only for large multinationals with sustained intra-group flows." },
      { ref: "Article 48 — Transfers not authorised by Union law", text: "A judgment or decision of a third-country court or administrative authority requiring transfer or disclosure is only recognisable or enforceable if based on an international agreement such as a mutual legal assistance treaty. This provision is the EU's direct counter to unilateral extraterritorial demands such as those under the US CLOUD Act." },
      { ref: "Article 49 — Derogations", text: "Narrow exceptions where no adequacy decision or appropriate safeguards exist: explicit informed consent after being told of the risks; contractual necessity; important reasons of public interest; establishment or defence of legal claims; vital interests; or transfers from a public register. Per EDPB Guidelines 2/2018, derogations cannot support routine or large-scale flows." },
      { ref: "Article 50 — International cooperation", text: "Requires the Commission and supervisory authorities to develop international cooperation mechanisms, provide mutual assistance, and engage relevant stakeholders to facilitate effective enforcement of data protection legislation across borders." },
      { ref: "Enforcement exposure", text: "Violations of Chapter V fall within the higher penalty tier: up to €20 million or 4% of global annual turnover. Supervisory authorities may also impose transfer bans under Article 58(2), which can suspend cross-border flows entirely and often proves more operationally disruptive than a fine." }
    ],
    sources: [
      { label: "GDPR-Info.eu — Chapter V Annotated Text (Articles 44–50)", url: "https://gdpr-info.eu/chapter-5/" },
      { label: "EUR-Lex — GDPR Official Full Text (PDF)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679" },
      { label: "European Commission — Adequacy Decisions List", url: "https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en" }
    ]
  },
  {
    id: 67,
    title: "Standard Contractual Clauses (2021) and Schrems II Transfer Impact Assessments",
    shortName: "SCCs & Schrems II TIA",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "SCCs adopted 4 June 2021; Schrems II judgment 16 July 2020",
    overview: "The most widely used Article 46 mechanism, and the route most relevant for EU transfers to Mainland China and Hong Kong given neither holds adequacy. The 2021 SCCs replaced the 2001 and 2004 versions with a modular structure. Critically, the Schrems II judgment established that signing SCCs is not sufficient on its own — the exporter must assess whether the destination country's law undermines the clauses in practice, and apply supplementary measures where it does.",
    keyArticles: [
      { ref: "Four modules", text: "The 2021 SCCs use a modular structure covering four transfer scenarios: Module 1 (controller to controller); Module 2 (controller to processor); Module 3 (processor to processor); and Module 4 (processor to controller, used where an EEA processor is engaged by a non-EEA controller). Parties select the applicable module and complete the annexes." },
      { ref: "Fixed template — no modification", text: "If the parties change the text of the SCCs beyond choosing modules, selecting options, and completing square brackets and annexes, the modified clauses may no longer be used as a basis for transfers unless approved by a national DPA as ad hoc clauses under Article 46(3)(a). The template is effectively fixed — structurally similar to China's SCC mechanism." },
      { ref: "Article 28 integration", text: "Modules 2 and 3 incorporate the requirements of GDPR Article 28. Where these modules are used, parties do not need a separate data processing agreement — the SCCs satisfy both the international transfer requirement and the controller-processor contract requirement simultaneously." },
      { ref: "Schrems II — the TIA requirement", text: "The CJEU held in Case C-311/18 that exporters are responsible for verifying, on a case-by-case basis, whether the law or practice of the destination country impinges on the effectiveness of the safeguards — for example through legislation compelling government access to data. A documented Transfer Impact Assessment is required for every Article 46 transfer." },
      { ref: "TIA for China and Hong Kong specifically", text: "A TIA covering transfers to Mainland China or Hong Kong must confront the PIPL, DSL, and National Intelligence Law provisions on state access to data. This is a genuinely difficult assessment and frequently requires supplementary technical measures such as end-to-end encryption where the exporter retains the keys, or robust pseudonymisation." },
      { ref: "Supplementary measures", text: "Where the TIA identifies that destination country law undermines the SCCs, the exporter must implement supplementary technical, contractual, or organisational measures — or suspend the transfer. EDPB Recommendations 01/2020 set out the assessment methodology and the categories of measures considered effective." },
      { ref: "Onward transfers — Module 3", text: "A processor in the EEA sub-contracting to a non-EEA sub-processor must ensure a Chapter V mechanism covers the onward transfer. Module 3 is designed for this scenario and requires prior authorisation from the original controller before the sub-processing arrangement is established." }
    ],
    sources: [
      { label: "European Commission — Standard Contractual Clauses Q&A and Templates", url: "https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/new-standard-contractual-clauses-questions-and-answers-overview_en" },
      { label: "EUR-Lex — Schrems II Judgment (Case C-311/18)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:62018CJ0311" },
      { label: "European Sources Online — Schrems II Case Record", url: "https://www.europeansources.info/record/cjeu-case-c-311-18-data-protection-commissioner-v-facebook-ireland-and-maximillian-schrems/" },
      { label: "EDPB — International Data Transfers Guidance", url: "https://www.edpb.europa.eu/sme/be-compliant/international-data-transfers_en" }
    ]
  },
  {
    id: 68,
    title: "EU–US Data Privacy Framework (Decision (EU) 2023/1795)",
    shortName: "EU–US DPF",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "10 July 2023",
    overview: "An adequacy decision under Article 45 enabling personal data transfers from the EU to the United States without additional safeguards — but only for US organisations that self-certify under the framework and adhere to its principles. The third attempt at a transatlantic transfer mechanism following the invalidation of Safe Harbour (Schrems I) and Privacy Shield (Schrems II). Upheld by the EU General Court in September 2025, though its long-term durability remains contested.",
    keyArticles: [
      { ref: "Self-certification requirement", text: "The adequacy decision applies only to US organisations that have self-certified with the Department of Commerce and appear on the active DPF List. Transferring to a US organisation that has not certified — or whose certification has lapsed — provides no adequacy basis, and the exporter must fall back on SCCs." },
      { ref: "DPF Principles", text: "Certified organisations must adhere to principles covering notice, choice, accountability for onward transfer, security, data integrity and purpose limitation, access, and recourse. These are substantively modelled on the GDPR but administered through US self-certification rather than EU supervision." },
      { ref: "Redress mechanism", text: "Executive Order 14086 established a two-layer redress mechanism: an initial review by the Civil Liberties Protection Officer of the Office of the Director of National Intelligence, and appeal to a newly created Data Protection Review Court. EU individuals may lodge complaints without demonstrating standing." },
      { ref: "Latombe v Commission (September 2025)", text: "On 3 September 2025 the General Court upheld the DPF, rejecting a challenge to its validity. The Court made positive findings about the independence of the Data Protection Review Court and about limitations on US bulk collection — but an appeal to the Court of Justice remains possible." },
      { ref: "Practical risk management", text: "Given that both predecessor frameworks were invalidated, prudent organisations treat the DPF as the primary mechanism while maintaining executed SCCs and a completed TIA as a documented fallback. This avoids an abrupt compliance gap if the framework is annulled." },
      { ref: "Scope limitation", text: "The DPF covers only commercial transfers to certified organisations. It does not extend to US public sector recipients, to organisations outside the Department of Commerce's jurisdiction, or to sectors excluded from FTC or DOT enforcement authority — for which SCCs remain necessary." }
    ],
    sources: [
      { label: "European Commission — EU–US Data Privacy Framework", url: "https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/eu-us-data-transfers_en" },
      { label: "US Department of Commerce — Data Privacy Framework Program", url: "https://www.dataprivacyframework.gov/" }
    ]
  },
  {
    id: 69,
    title: "Non-Personal Data Transfers — DGA Article 31 & Data Act Chapter VII",
    shortName: "Non-Personal Data Transfers",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "DGA: September 2023; Data Act: from September 2025",
    overview: "The EU extends cross-border controls beyond personal data. Two instruments matter: DGA Article 31 imposes adequacy-equivalent safeguards on international transfers of non-personal data by data intermediaries, closing a route that would otherwise allow circumvention of the GDPR regime. Data Act Chapter VII requires cloud and data processing providers to resist foreign governmental access to non-personal data held in the EU — a direct response to instruments such as the US CLOUD Act.",
    keyArticles: [
      { ref: "DGA Article 31 — intermediary transfer safeguards", text: "Data intermediation service providers and data altruism organisations transferring non-personal data to third countries must take measures ensuring the protection framework is not undermined. The Commission may adopt adequacy decisions for non-personal data, mirroring the GDPR structure." },
      { ref: "DGA Article 31 — anti-circumvention purpose", text: "The provision exists to prevent organisations routing mixed or de-identified datasets through non-personal data channels to escape GDPR Chapter V. Where a dataset contains any personal data, the GDPR applies in full alongside the DGA — the two regimes are cumulative, not alternative." },
      { ref: "Data Act Chapter VII — governmental access safeguards", text: "Providers of data processing services must take all adequate technical, organisational, and legal measures to prevent international and third-country governmental access to, or transfer of, non-personal data held in the EU where such access or transfer would conflict with EU or member state law." },
      { ref: "Recognition and enforcement conditions", text: "A third-country authority's decision requiring transfer of non-personal data is only recognisable or enforceable if based on an international agreement in force between the requesting country and the EU or a member state — the non-personal data analogue of GDPR Article 48." },
      { ref: "Minimum interpretation and notification", text: "Where no international agreement exists but the provider considers compliance may be required, it must ask the requesting authority to interpret the request as narrowly as possible, notify the data holder, and where permitted, seek a review by the competent national authority before disclosing." },
      { ref: "Direct CLOUD Act tension", text: "Chapter VII is aimed squarely at unilateral extraterritorial demands. A US-controlled cloud provider serving EU customers may face a CLOUD Act order to produce data while simultaneously being required under Data Act Chapter VII to resist that production — a conflict that must be managed through architecture and data residency, not contract alone." }
    ],
    sources: [
      { label: "EUR-Lex — Data Governance Act (Regulation (EU) 2022/868)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A32022R0868" },
      { label: "EUR-Lex — Data Act (Regulation (EU) 2023/2854)", url: "https://eur-lex.europa.eu/eli/reg/2023/2854/oj/eng" },
      { label: "European Commission — Data Act Overview and Helpdesk", url: "https://digital-strategy.ec.europa.eu/en/policies/data-act" }
    ]
  },
  {
    id: 70,
    title: "Digital Omnibus on AI (Regulation (EU) 2026/1744)",
    shortName: "Digital Omnibus on AI",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "In force 27 July 2026",
    overview: "The first set of amendments to the EU AI Act since its adoption in 2024 — now enacted law, not a proposal. Published in the Official Journal on 24 July 2026 and in force from 27 July 2026, six days before the AI Act's original high-risk deadline. It entered into force on the third day after publication rather than the usual twentieth because 2 August was too close to leave the text hanging. Most significantly, it defers the high-risk compliance regime by 16 months while leaving transparency and prohibited-practice obligations untouched.",
    keyArticles: [
      { ref: "High-risk deferral — Annex III", text: "Compliance for stand-alone high-risk AI systems under Annex III moves from 2 August 2026 to 2 December 2027 — a 16-month extension. This covers AI used in recruitment and employee management, creditworthiness assessment, biometric identification, education, essential services, law enforcement, migration, and justice." },
      { ref: "High-risk deferral — Annex I", text: "High-risk AI embedded as a safety component in products already regulated under EU product-safety legislation moves to 2 August 2028 — a 12-month extension. AI Act compliance for these systems is integrated into the existing conformity assessment procedure for the underlying product." },
      { ref: "Why the deferral happened", text: "Technical standards and harmonised norms for high-risk AI assessment under the CEN/CENELEC work programme were not finalised in time, and conformity assessments depend on them. Notified bodies, national competent authorities, and the AI Office also required additional setup time. Without that infrastructure, an August 2026 deadline would have been unenforceable in practice." },
      { ref: "What did NOT move", text: "Article 50 transparency and AI content-labelling duties remain applicable from 2 August 2026. GPAI provider obligations remain in force from 2 August 2025. Article 5 prohibited practices remain in force from 2 February 2025. The Article 4 AI literacy duty is unchanged. The deferral is narrow, not general." },
      { ref: "New Article 5 prohibition", text: "The Omnibus introduces a prohibition on AI systems that generate non-consensual intimate imagery and child sexual abuse material — including content that is a 'reasonably foreseeable and reproducible outcome' of a system's normal operation. This carries its own compliance date of 2 December 2026 and applies regardless of high-risk status." },
      { ref: "Small mid-cap relief", text: "A simplified compliance framework is extended to small mid-cap companies — organisations with fewer than 750 employees and either €150 million or less in annual turnover, or €129 million or less in total assets — easing documentation burdens for firms below that threshold." },
      { ref: "Machinery Regulation carve-out", text: "The Machinery Regulation is exempted from the scope of the AI Act. AI machinery products comply with sector-specific safety rules rather than AI Act requirements, avoiding dual regulatory review. Sectoral overlap was a major sticking point in trilogue; only the Machinery Regulation was moved." },
      { ref: "Temporal only — no obligation removed", text: "The extension is purely a change of dates. Providers must still complete a conformity assessment, implement a quality management system, register in the EU database, affix CE marking, and prepare technical documentation. Deployers must still conduct fundamental rights impact assessments and implement human oversight." }
    ],
    sources: [
      { label: "EUR-Lex — Digital Omnibus on AI (Regulation (EU) 2026/1744)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52025PC0837" },
      { label: "European Commission — AI Act Implementation Timeline", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" }
    ]
  },

  // ── EUROPEAN UNION — ALGORITHMIC TRANSPARENCY ────────────
  {
    id: 71,
    title: "AI Act Article 50 — Transparency Obligations",
    shortName: "AI Act Article 50",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "2 August 2026 (legacy system marking: 2 December 2026)",
    overview: "The EU's core AI transparency provision, and one of the few AI Act obligations untouched by the Digital Omnibus deferral. Article 50 applies to all AI systems used in four specified situations — not only high-risk systems — making it far broader in reach than the high-risk regime. Extraterritorial: it captures businesses whose AI outputs reach EU users regardless of where they are established.",
    keyArticles: [
      { ref: "Article 50(1) — Interactive systems", text: "Providers must ensure that AI systems intended to interact directly with people are designed so that those people are informed they are interacting with an AI system, unless this is obvious from the circumstances. Disclosure must be made at the time of first interaction and must meet accessibility requirements." },
      { ref: "Article 50(2) — Synthetic content marking", text: "Providers of AI systems generating synthetic audio, image, video, or text — including general-purpose AI systems — must ensure outputs are marked in a machine-readable format and detectable as artificially generated. This is a provenance obligation: it must enable detection tools to verify AI origin, not merely inform a human reader." },
      { ref: "Article 50(3) — Emotion recognition and biometric categorisation", text: "Deployers of emotion recognition or biometric categorisation systems must inform the persons exposed to them. Note the sequencing: each use case should first be screened against the Article 5 prohibitions before Article 50(3) disclosure is considered, since some such uses are banned outright." },
      { ref: "Article 50(4) — Deepfakes and public-interest text", text: "Deployers generating or manipulating image, audio, or video content constituting a deepfake must disclose that the content has been artificially generated or manipulated. The same applies to AI-generated text published to inform the public on matters of public interest." },
      { ref: "Grace period for legacy systems", text: "A limited grace period applies only to AI systems placed on the market before 2 August 2026, and only for the Article 50(2) marking and detection obligation — those systems must comply from 2 December 2026. Content generated before 2 August 2026 does not need to be labelled retroactively." },
      { ref: "Relationship to GPAI obligations", text: "Article 50 obligations are complementary to the GPAI model transparency rules in Articles 53 and 55. The GPAI Code of Practice covers documentation provided to the AI Office and downstream providers plus training data transparency; the Transparency Code of Practice covers marking of outputs toward persons exposed to them." },
      { ref: "Penalties", text: "Fines of up to €15 million or 3% of worldwide annual turnover, whichever is higher. Enforced by national market surveillance authorities using the Commission's Article 50 Guidelines as the primary reference document." }
    ],
    sources: [
      { label: "EU AI Act Explorer — Article 50 Official Text", url: "https://artificialintelligenceact.eu/article/50/" },
      { label: "European Commission — Article 50 Transparency FAQ", url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act" },
      { label: "EU AI Act Explorer — Practical Guide to Article 50", url: "https://artificialintelligenceact.eu/transparency-rules-article-50/" }
    ]
  },
  {
    id: 72,
    title: "Code of Practice on Transparency of AI-Generated Content & Commission Guidelines",
    shortName: "Transparency Code of Practice",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "Code adequacy confirmed 8–9 July 2026; final Guidelines 20 July 2026",
    overview: "Two distinct documents supporting Article 50 compliance, often confused. The Code of Practice is a voluntary compliance tool describing HOW to implement the obligations; the Commission Guidelines are an interpretive reference clarifying WHAT the obligations require and their legal scope. The Commission and AI Board confirmed the Code adequate on 8 and 9 July 2026 respectively, making it the only current EU-wide practical compliance tool assessed as adequate for Articles 50(2), (4) and (5).",
    keyArticles: [
      { ref: "Adequacy decision", text: "On 8 and 9 July 2026, the European Commission and the AI Board concluded that the Code of Practice is adequate to facilitate practical implementation of Articles 50(2), (4) and (5). Providers and deployers adhering to it can rely on it regardless of their place of establishment or competent market surveillance authority." },
      { ref: "Two independent sections", text: "The Code consists of two separate sections — one for providers and one for deployers — which may be signed independently. It is open not only to actors directly bound by Article 50 but also to those who are not, allowing voluntary alignment across the value chain." },
      { ref: "Enforcement posture for signatories", text: "The Commission has stated that for signatories, future enforcement will focus on monitoring adherence to the Code. This represents a more predictable enforcement posture than non-signatories face — though adherence is not a guarantee of compliance, as competent authorities remain responsible for final assessment." },
      { ref: "Commission Guidelines (20 July 2026)", text: "The final Guidelines on Transparency Obligations replace the May 2026 consultation draft and serve as the primary reference document national market surveillance authorities use when assessing compliance. They retain a nine-section structure covering interactive AI systems, synthetic content marking, emotion recognition, and related topics." },
      { ref: "Code vs Guidelines — the distinction", text: "The Code addresses how to implement the obligations; the Guidelines clarify what those obligations require and their legal scope. Organisations need both: the Guidelines to determine whether an obligation applies, and the Code to demonstrate compliance with it." },
      { ref: "Technical standards still developing", text: "Specific technical standards for machine-readable marking continue to be developed through the Code of Practice and complementary EU standardisation work. Organisations should require compliance from AI vendors contractually rather than assuming vendor readiness." }
    ],
    sources: [
      { label: "European Commission — Transparency Obligations FAQ and Code Access", url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act" },
      { label: "EU AI Act Explorer — Article 50 Practical Guide", url: "https://artificialintelligenceact.eu/transparency-rules-article-50/" }
    ]
  },
  {
    id: 73,
    title: "AI Act Articles 13 & 86 — High-Risk Interpretability and Right to Explanation",
    shortName: "AI Act Arts. 13 & 86",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "2 December 2027 (deferred by Digital Omnibus)",
    overview: "The transparency obligations attaching specifically to high-risk AI systems. Article 13 requires systems to be designed for interpretability and accompanied by instructions for use; Article 86 gives individuals a right to an explanation of decisions made about them. Both were deferred to 2 December 2027 by the Digital Omnibus along with the rest of the high-risk regime — but the obligations themselves are unchanged, only their start date.",
    keyArticles: [
      { ref: "Article 13 — Design for interpretability", text: "High-risk AI systems must be designed and developed so their operation is sufficiently transparent to enable deployers to interpret the system's output and use it appropriately. Transparency must be proportionate to enable deployers to comply with their own obligations under the Act." },
      { ref: "Article 13 — Instructions for use", text: "Systems must be accompanied by instructions for use in an appropriate digital or other format, containing: the provider's identity; the system's characteristics, capabilities, and limitations of performance; known or foreseeable circumstances that may lead to risks; the level of accuracy, robustness, and cybersecurity against which the system was tested; and human oversight measures." },
      { ref: "Article 13 — Performance and accuracy disclosure", text: "Instructions must specify expected accuracy metrics and the conditions under which those metrics hold, including any known limitations for specific groups of persons. Where performance varies across demographic groups, this must be disclosed rather than concealed by an aggregate figure." },
      { ref: "Article 86 — Right to explanation of individual decision-making", text: "Any person subject to a decision taken by a deployer on the basis of output from a high-risk AI system listed in Annex III, which produces legal effects or similarly significantly affects them, has the right to obtain from the deployer clear and meaningful explanations of the role of the AI system in the decision procedure and the main elements of the decision taken." },
      { ref: "Relationship to GDPR Article 22", text: "Article 86 operates alongside, not instead of, GDPR Article 22. Where personal data is processed, both apply: GDPR Article 22 restricts solely automated decisions with significant effects, while AI Act Article 86 grants an explanation right for high-risk AI decisions regardless of whether the decision was solely automated." },
      { ref: "Deferred but unchanged", text: "The Digital Omnibus moved the applicability date to 2 December 2027 for Annex III systems and 2 August 2028 for Annex I embedded systems. No substantive obligation was removed — organisations building high-risk systems should design for these requirements now, since retrofitting interpretability is substantially harder than building it in." }
    ],
    sources: [
      { label: "EU AI Act Explorer — Article 13", url: "https://artificialintelligenceact.eu/article/13/" },
      { label: "EU AI Act Explorer — Article 86", url: "https://artificialintelligenceact.eu/article/86/" }
    ]
  },

  // ── EUROPEAN UNION — LICENSING & CERTIFICATION ───────────
  {
    id: 74,
    title: "AI Act Article 43 — Conformity Assessment for High-Risk Systems",
    shortName: "AI Act Conformity Assessment",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "2 December 2027 (Annex III); 2 August 2028 (Annex I)",
    overview: "The EU's pre-market approval mechanism for high-risk AI — the closest European analogue to China's CAC filing, though structurally very different. Rather than government approval, the AI Act uses the EU's established product-safety model: the provider assesses conformity, declares it, affixes a CE marking, and registers in a public database. Third-party notified body involvement is required only in specified cases. Deferred to December 2027 by the Digital Omnibus, largely because the underlying technical standards and notified body capacity were not ready.",
    keyArticles: [
      { ref: "Route 1 — Internal control (Annex VI)", text: "For high-risk AI systems in points 2 to 8 of Annex III, providers follow the conformity assessment procedure based on internal control, which does not involve a notified body. This covers most Annex III categories: critical infrastructure, education, employment, essential services, law enforcement, migration, and administration of justice." },
      { ref: "Route 2 — Notified body assessment (Annex VII)", text: "Required for biometric systems under Annex III point 1 where harmonised standards have not been applied or applied only in part. The provider may choose any notified body — except where the system is intended for law enforcement, immigration, asylum, or EU institutions, in which case the relevant market surveillance authority acts as the notified body." },
      { ref: "Route 3 — Sectoral integration (Annex I)", text: "For high-risk AI covered by Union harmonisation legislation in Annex I Section A, the provider follows the relevant sectoral conformity assessment procedure — meaning AI Act requirements are integrated into the existing product approval process rather than assessed separately." },
      { ref: "Article 48 — CE marking", text: "The CE marking must be affixed visibly, legibly, and indelibly. Where that is not possible given the nature of the system, it goes on the packaging or accompanying documentation. For digital AI systems, a digital CE marking must be easily accessible. Where a notified body was involved, its identification number follows the marking and must appear in promotional material claiming CE compliance." },
      { ref: "Full pre-market sequence", text: "Before placing a system on the market or putting it into service, providers must: carry out the applicable conformity assessment; draw up an EU declaration of conformity; affix the CE marking; and register the system in the EU database. Underlying this, Articles 8–15 require a risk management system, data governance, technical documentation, logging, human oversight, and accuracy/robustness/cybersecurity safeguards throughout the lifecycle." },
      { ref: "Notified body capacity constraint", text: "As of May 2026 only seven notified bodies were EU-accredited for AI conformity assessment, against a 2027 target of 25. This capacity shortfall was among the reasons the Commission deferred the high-risk deadline — without operational assessment infrastructure the regime would have been unenforceable." },
      { ref: "Timelines and costs", text: "Internal conformity assessment under Article 43 averages around 8 weeks; external assessment by a notified body runs 14–22 weeks. Reported first-instance costs are approximately €35,000–85,000 for internal assessment and €80,000–180,000 for external notified body assessment, plus ongoing post-market monitoring costs." },
      { ref: "Deployer obligations are independent", text: "Deployers are not relieved by vendor compliance. They must conduct fundamental rights impact assessments where applicable under Article 27, implement human oversight, use systems according to provider instructions, and document all high-risk AI use. A vendor's failure to prepare does not transfer the deployer's own liability." }
    ],
    sources: [
      { label: "EU AI Act Explorer — Article 43 Conformity Assessment", url: "https://artificialintelligenceact.eu/article/43/" },
      { label: "EU AI Act Explorer — Article 48 CE Marking", url: "https://artificialintelligenceact.eu/article/48/" },
      { label: "European Commission — AI Act Regulatory Framework", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" }
    ]
  },
  {
    id: 75,
    title: "AI Act Articles 53 & 55 — General-Purpose AI Model Obligations",
    shortName: "GPAI Obligations (Arts. 53, 55)",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "2 August 2025",
    overview: "The obligations attaching to providers of general-purpose AI models — foundation models rather than deployed applications. Unlike the high-risk regime, these were untouched by the Digital Omnibus deferral and have been in force since August 2025. There is no pre-market approval, but there are substantial documentation, copyright, and — for the most capable models — safety and security obligations, supported by a dedicated Code of Practice.",
    keyArticles: [
      { ref: "GPAI model definition", text: "Commission guidelines define GPAI models as those trained with computational resources exceeding 10^23 floating point operations and capable of generating language, text-to-image, or text-to-video content. This threshold captures most commercially significant foundation models." },
      { ref: "Article 53 — Documentation obligations", text: "All GPAI providers must maintain technical documentation of the model including training and testing processes and evaluation results; provide information to downstream providers integrating the model; and comply with EU copyright law including respecting text-and-data-mining reservations." },
      { ref: "Article 53 — Training data summary", text: "Providers must publish a sufficiently detailed summary of the content used to train the model, following a template provided by the AI Office. This is the EU analogue to California's AB 2013 training data transparency requirement, though the template-based approach differs." },
      { ref: "Article 55 — Systemic risk obligations", text: "Providers of GPAI models with systemic risk face additional duties: model evaluation including adversarial testing; assessment and mitigation of systemic risks; tracking and reporting serious incidents to the AI Office; and ensuring adequate cybersecurity protection for the model and its physical infrastructure." },
      { ref: "GPAI Code of Practice — three chapters", text: "The Code comprises Transparency and Copyright chapters applicable to all GPAI providers under Article 53, plus a Safety and Security chapter relevant only to providers of models with systemic risk under Article 55. Signatories are publicly listed and can demonstrate compliance while reducing administrative burden." },
      { ref: "Open-source exemptions", text: "Guidelines outline exemptions for models released under free and open-source licences meeting specified transparency conditions. The exemption is conditional rather than automatic — models with systemic risk remain in scope regardless of licensing." },
      { ref: "Relationship to Article 50", text: "GPAI obligations and Article 50 transparency obligations are complementary and both apply. Article 53 governs documentation flowing to the AI Office and downstream providers; Article 50 governs marking of outputs toward the people exposed to them. Mastering Article 53 does not discharge Article 50(2) marking duties." }
    ],
    sources: [
      { label: "EU AI Act Explorer — Article 53", url: "https://artificialintelligenceact.eu/article/53/" },
      { label: "EU AI Act Explorer — Article 55", url: "https://artificialintelligenceact.eu/article/55/" },
      { label: "European Commission — General-Purpose AI Code of Practice", url: "https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai" }
    ]
  },
  {
    id: 76,
    title: "Medical AI — AI Act, MDR and IVDR Dual Compliance",
    shortName: "EU Medical AI (MDR/IVDR)",
    region: "eu", country: "eu_general",
    regionLabel: "European Union", countryLabel: "EU (General)",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "MDR/IVDR ongoing; AI Act high-risk obligations from 2 August 2028 for embedded systems",
    overview: "AI-powered medical devices sit at the intersection of two regulatory regimes that apply simultaneously. The Medical Device Regulation and In Vitro Diagnostic Regulation govern the device; the AI Act classifies AI in medical devices as high-risk and adds its own requirements. Both must be satisfied through integrated technical documentation rather than parallel filings. This is the EU counterpart to the FDA SaMD pathway and China's NMPA registration — and the most demanding sectoral overlap in the AI Act.",
    keyArticles: [
      { ref: "Automatic high-risk classification", text: "AI systems that are safety components of medical devices, or are themselves medical devices requiring third-party conformity assessment under MDR or IVDR, are automatically classified as high-risk under the AI Act. There is no separate risk assessment — the classification follows from the sectoral status." },
      { ref: "Simultaneous application", text: "Both frameworks apply at once, requiring integrated technical documentation, data governance, and human oversight mechanisms. Manufacturers cannot satisfy the AI Act by pointing to MDR compliance, nor vice versa — but the conformity assessment procedures are designed to be conducted together rather than sequentially." },
      { ref: "Deadline — 2 August 2028", text: "The Digital Omnibus deferred Annex I embedded high-risk obligations, which include AI in MDR/IVDR-regulated devices, from August 2027 to 2 August 2028. This gives medical device manufacturers the longest runway of any high-risk category." },
      { ref: "Notified body integration", text: "Notified bodies designated under the AI Act will conduct AI Act-specific conformity assessments, and the intersection with MDR and IVDR assessments is becoming a standard part of the process. Notified bodies have already begun asking AI Act-style questions during MDR audits ahead of the formal deadline." },
      { ref: "Practical sequencing", text: "Manufacturers should classify every AI component in their device portfolio, confirm whether each meets the AI Act's definition of an AI system, and map AI Act requirements onto existing MDR technical documentation rather than creating a separate parallel file." },
      { ref: "Comparison with other jurisdictions", text: "The EU approach differs structurally from both the US and China. The FDA uses 510(k) substantial equivalence with Predetermined Change Control Plans for model updates; China's NMPA requires full pre-market registration; the EU integrates AI requirements into an existing CE marking regime with notified body oversight." }
    ],
    sources: [
      { label: "European Commission — Medical Devices Regulatory Framework", url: "https://health.ec.europa.eu/medical-devices-sector_en" },
      { label: "European Commission — AI Act Regulatory Framework", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" }
    ]
  },

  // ── UNITED KINGDOM — DATA GOVERNANCE ─────────────────────
  {
    id: 77,
    title: "UK GDPR and Data Protection Act 2018",
    shortName: "UK GDPR & DPA 2018",
    region: "uk", country: "uk",
    regionLabel: "United Kingdom", countryLabel: "United Kingdom",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "25 May 2018 (retained post-Brexit)",
    overview: "The foundation of UK data governance — a direct descendant of the EU GDPR, retained in domestic law at Brexit and operating alongside the Data Protection Act 2018. Any AI system processing personal data of UK residents falls within scope. Enforced by the Information Commissioner's Office, whose authority is bounded by personal data rather than extending to AI as a technology in general.",
    keyArticles: [
      { ref: "Scope of ICO authority", text: "The ICO does not regulate AI as a technology. Its jurisdiction is tied specifically to personal data — engaged when an AI system trains on personal data, generates outputs containing personal data, or makes decisions about identifiable individuals. An AI system trained purely on non-personal data sits outside the ICO's remit." },
      { ref: "Core principles applied to AI", text: "ICO guidance explains how UK GDPR principles apply across the AI lifecycle: lawfulness and fairness in training data acquisition; purpose limitation where models are repurposed; data minimisation in feature selection; accuracy in model outputs; storage limitation for training datasets; and security throughout." },
      { ref: "Lawful basis for training data", text: "Organisations must identify a lawful basis before processing personal data for model training. Legitimate interests is commonly relied upon but requires a documented balancing test. The DUAA introduced a list of recognised legitimate interests, though AI training is not among them." },
      { ref: "Data Protection Impact Assessments", text: "A DPIA is required where processing is likely to result in high risk — which the ICO treats as covering most AI systems making decisions about individuals, systematic profiling, and large-scale processing of special category data." },
      { ref: "Accountability and documentation", text: "Controllers must demonstrate compliance, not merely achieve it. For AI systems this means documented records of training data provenance, model validation, human oversight arrangements, and the reasoning behind design choices affecting individuals." },
      { ref: "Penalties", text: "Two tiers mirroring the EU GDPR: up to £8.7 million or 2% of global annual turnover for lesser violations; up to £17.5 million or 4% for the most serious, including breaches of the data protection principles and data subject rights." }
    ],
    sources: [
      { label: "ICO — Guidance on AI and Data Protection", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/" },
      { label: "legislation.gov.uk — Data Protection Act 2018", url: "https://www.legislation.gov.uk/ukpga/2018/12/contents" }
    ]
  },
  {
    id: 78,
    title: "Data (Use and Access) Act 2025",
    shortName: "DUAA 2025",
    region: "uk", country: "uk",
    regionLabel: "United Kingdom", countryLabel: "United Kingdom",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "Royal Assent 19 June 2025; staged commencement from 5 February 2026",
    overview: "The first substantial post-Brexit divergence in UK data protection law. Received Royal Assent on 19 June 2025, with provisions commencing in stages from 5 February 2026 under SI 2026/82. Reforms research provisions, legitimate interests, subject access requests, complaints handling, and — most significantly for AI — the automated decision-making regime. The Act was drafted to offer regulatory advantage without jeopardising the EU adequacy decision.",
    keyArticles: [
      { ref: "Recognised legitimate interests", text: "The Act introduces a list of processing activities that qualify as recognised legitimate interests without requiring a balancing test — including national security, emergency response, and safeguarding. AI model training is not on the list, so the standard balancing test continues to apply." },
      { ref: "Research provisions", text: "Broadens the definition of scientific research and permits broad consent for research purposes where the specific purpose cannot be fully identified at the point of collection. Commercially motivated research can qualify, which has implications for AI development framed as research." },
      { ref: "Subject access requests", text: "Codifies a 'reasonable and proportionate' standard for search effort, and permits the clock to stop while a controller seeks clarification from the requester. Both changes reduce the burden of responding to access requests involving large or unstructured AI training datasets." },
      { ref: "Automated decision-making reform", text: "Section 80 replaces UK GDPR Article 22 with Articles 22A to 22D, converting a near-prohibition into a permissive regime with safeguards. This is the single most AI-relevant change in the Act and is covered in detail under the Algorithmic Transparency theme." },
      { ref: "Complaints procedures", text: "Requires controllers to provide a straightforward complaints mechanism and to acknowledge complaints within 30 days — a new procedural obligation that applies to grievances about AI-driven decisions alongside all other processing." },
      { ref: "PECR penalty alignment", text: "Raises penalties under the Privacy and Electronic Communications Regulations to UK GDPR levels — up to £17.5 million or 4% of global turnover — substantially increasing exposure for cookie and tracking violations." }
    ],
    sources: [
      { label: "legislation.gov.uk — Data (Use and Access) Act 2025", url: "https://www.legislation.gov.uk/ukpga/2025/18/contents" },
      { label: "ICO — Data (Use and Access) Act Guidance Hub", url: "https://ico.org.uk/for-organisations/data-use-and-access-act/" }
    ]
  },

  // ── UNITED KINGDOM — CROSS-BORDER DATA FLOWS ─────────────
  {
    id: 79,
    title: "UK GDPR Chapter V, IDTA and the UK Addendum",
    shortName: "UK Transfer Regime",
    region: "uk", country: "uk",
    regionLabel: "United Kingdom", countryLabel: "United Kingdom",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "IDTA and UK Addendum in force 21 March 2022",
    overview: "The UK operates a Chapter V regime structurally mirroring the EU's — transfers prohibited unless a mechanism applies — but with its own instruments. The IDTA is a standalone UK standard contract; the UK Addendum extends existing EU SCCs to UK transfers without duplicating paperwork. A Transfer Risk Assessment is required alongside either, with the ICO offering its own methodology as a more proportionate alternative to the EDPB approach.",
    keyArticles: [
      { ref: "Transfer mechanism hierarchy", text: "Transfers require, in order of preference: UK adequacy regulations (a 'data bridge'); appropriate safeguards including the IDTA, UK Addendum, or Binding Corporate Rules; or a derogation for specific situations. Derogations cannot support routine or large-scale flows." },
      { ref: "International Data Transfer Agreement (IDTA)", text: "The UK's standalone standard contract, in force since 21 March 2022. Unlike the EU's modular SCCs, the IDTA uses a single document with tables to be completed, covering all controller and processor combinations in one instrument." },
      { ref: "UK Addendum to EU SCCs", text: "Allows organisations already using the 2021 EU SCCs to extend them to UK transfers by attaching a short addendum, rather than negotiating a separate IDTA. This is the route most multinationals take, since it avoids maintaining two parallel contract sets." },
      { ref: "Transfer Risk Assessment (TRA)", text: "Required alongside the IDTA or Addendum, assessing whether the destination country's laws undermine the protections in the contract. The ICO publishes its own TRA tool as an alternative to the EDPB methodology — widely regarded as more proportionate and less resource-intensive." },
      { ref: "UK data bridges", text: "The UK maintains its own adequacy list, largely inherited from the EU at Brexit, plus the UK–US Data Bridge extending the EU–US Data Privacy Framework to UK transfers. The UK may recognise jurisdictions the EU has not — a genuine post-Brexit divergence lever." },
      { ref: "Position on China and Hong Kong", text: "Neither Mainland China nor Hong Kong holds UK adequacy. Transfers to either require an IDTA or UK Addendum plus a completed Transfer Risk Assessment addressing state access provisions under the PIPL, DSL, and National Intelligence Law." }
    ],
    sources: [
      { label: "ICO — International Data Transfer Agreement and Addendum", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/international-data-transfer-agreement-and-guidance/" },
      { label: "ICO — Transfer Risk Assessments", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/international-transfers-a-guide/" }
    ]
  },
  {
    id: 80,
    title: "EU Adequacy Decision for the United Kingdom",
    shortName: "UK Adequacy (EU)",
    region: "uk", country: "uk",
    regionLabel: "United Kingdom", countryLabel: "United Kingdom",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "Renewed 19 December 2025; sunset 27 December 2031",
    overview: "The European Commission's finding that the UK ensures an adequate level of data protection, permitting EU-to-UK personal data transfers without additional safeguards. Originally granted in June 2021 and renewed on 19 December 2025 following review of the Data (Use and Access) Act reforms. Subject to a sunset clause running to 27 December 2031, at which point it must be reassessed.",
    keyArticles: [
      { ref: "Practical effect", text: "EU-to-UK personal data transfers require no SCCs, no Transfer Impact Assessment, and no derogation. This places the UK in the same position as Japan, South Korea, and Switzerland — and in a materially different position from Hong Kong or Mainland China, neither of which holds EU adequacy." },
      { ref: "Sunset clause", text: "The renewed decision runs to 27 December 2031. Unlike most adequacy decisions, which are subject to periodic review without a fixed expiry, the UK decision has a hard end date requiring active renewal. This creates a recurring political and legal risk for organisations dependent on EU-UK flows." },
      { ref: "Divergence constraint", text: "The Commission monitors UK divergence, and the DUAA reforms were assessed as part of the December 2025 renewal. Reforms must go far enough to offer regulatory advantage but not so far as to jeopardise adequacy — a constraint that materially shaped the Act's drafting." },
      { ref: "Onward transfer risk", text: "The UK's ability to grant adequacy independently is limited in practice by circumvention concerns. If the UK recognised a jurisdiction the EU considers inadequate, EU data reaching that destination via the UK could be characterised as circumventing Chapter V — a direct threat to the adequacy decision itself." },
      { ref: "Reciprocal position", text: "The UK correspondingly recognises the EEA as adequate, so UK-to-EU transfers also flow without additional safeguards. The relationship is bidirectionally free, which is unusual and is a significant practical advantage for organisations operating across both." }
    ],
    sources: [
      { label: "European Commission — Adequacy Decisions", url: "https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en" },
      { label: "ICO — International Transfers Guidance", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/" }
    ]
  },

  // ── UNITED KINGDOM — ALGORITHMIC TRANSPARENCY ────────────
  {
    id: 81,
    title: "UK GDPR Articles 22A–22D — Automated Decision-Making",
    shortName: "UK GDPR Arts. 22A–22D",
    region: "uk", country: "uk",
    regionLabel: "United Kingdom", countryLabel: "United Kingdom",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "In force 5 February 2026",
    overview: "The most significant AI-relevant change in UK law, and a deliberate divergence from the EU. Section 80 of the Data (Use and Access) Act 2025 replaced UK GDPR Article 22 with new Articles 22A to 22D. The old provision operated as a near-prohibition on solely automated decisions with legal or similarly significant effects; the new framework permits them subject to safeguards. The liberalisation is real but conditional — the compliance burden shifts from justifying the decision to documenting the safeguards.",
    keyArticles: [
      { ref: "Article 22A — Meaningful human involvement", text: "Defines when a decision is 'based solely on automated processing'. The threshold for meaningful human involvement now sits in statute rather than ICO guidance, requiring firms to document human review more thoroughly than the previous guidance demanded. Draft ICO guidance is explicit that token-gesture review does not remove a decision from the ADM rules." },
      { ref: "Article 22B — Permitted automated decisions", text: "Solely automated decisions producing legal or similarly significant effects are permitted where a lawful basis applies and the required safeguards are in place. This reverses the previous default — the question is no longer whether an exception applies, but whether the safeguards have been implemented." },
      { ref: "Required safeguards", text: "Where a solely automated decision produces legal or similarly significant effects, the controller must: provide meaningful information about the decision; enable the individual to make representations; provide for human intervention; and provide a mechanism to contest the decision." },
      { ref: "Article 22C — Special category data", text: "More restrictive conditions apply where a solely automated decision is based on special category data. These decisions remain closer to the old prohibition model, requiring explicit consent or substantial public interest alongside the general safeguards." },
      { ref: "Article 22D — Secretary of State powers", text: "Confers powers to make regulations further defining meaningful human involvement and adjusting the safeguard requirements — meaning the regime can be recalibrated without primary legislation." },
      { ref: "Divergence from the EU", text: "As the EU tightened through AI Act Article 86's right to explanation for high-risk decisions, the UK loosened Article 22 into a conditions-based regime. Two jurisdictions starting from near-identical inherited law reached opposite conclusions within eighteen months." }
    ],
    sources: [
      { label: "legislation.gov.uk — Data (Use and Access) Act 2025, Section 80", url: "https://www.legislation.gov.uk/ukpga/2025/18/section/80" },
      { label: "ICO — Automated Decision-Making and Profiling Guidance", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/automated-decision-making-and-profiling/" }
    ]
  },
  {
    id: 82,
    title: "ICO Statutory Code of Practice on AI and Automated Decision-Making",
    shortName: "ICO AI Code (Forthcoming)",
    region: "uk", country: "uk",
    regionLabel: "United Kingdom", countryLabel: "United Kingdom",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "Statutory duty in force 12 May 2026; code expected 2027",
    overview: "The Data Protection Act 2018 (Code of Practice on Artificial Intelligence and Automated Decision-Making) Regulations 2026 came into force on 12 May 2026, imposing a statutory duty on the Information Commissioner to prepare an AI code. An important nuance: the regulations regulate the Commissioner, not organisations. The code itself has not been drafted and is expected in 2027 — but when it arrives it will carry evidential weight that ordinary ICO guidance does not.",
    keyArticles: [
      { ref: "What the regulations actually do", text: "SI 2026/425 imposes a duty on the Information Commissioner to prepare a code of practice on good practice in developing or using AI and automated decision-making. Organisations' current legal duties continue to flow from the UK GDPR, the Data Protection Act 2018, and the reformed ADM rules — not from these regulations." },
      { ref: "Evidential weight when published", text: "A statutory code prepared under the Data Protection Act 2018 framework must be taken into account by the Commissioner in enforcement and is admissible in legal proceedings. Ordinary guidance carries no such weight, making the statutory code a substantially stronger compliance benchmark than existing ICO AI guidance." },
      { ref: "Children's data requirement", text: "Regulation 2(2) expressly requires the code to include guidance on good practice in processing children's personal data — signalling that AI systems processing children's data will face heightened expectations, consistent with the approach of the existing Children's Code." },
      { ref: "Expected status", text: "Once finalised, the code is expected to carry the same legal status as the existing Data Sharing Code and Children's Code — meaning courts and the ICO must consider it, and departure from it requires documented justification." },
      { ref: "Timeline", text: "The enabling law is live but the code has not been drafted. Publication is expected in 2027 following drafting and consultation. The ICO has confirmed developing the code is among its 2026/27 priorities." },
      { ref: "Interim position", text: "Pending the code, the ICO's draft ADM and profiling guidance — consulted on between 31 March and 29 May 2026, with final publication expected Summer 2026 — is the operative reference for organisations." }
    ],
    sources: [
      { label: "legislation.gov.uk — Code of Practice on AI and ADM Regulations 2026", url: "https://www.legislation.gov.uk/uksi/2026/425/contents/made" },
      { label: "ICO — AI and Data Protection Resources", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/" }
    ]
  },
  {
    id: 83,
    title: "ICO Enforcement Priorities — AI Recruitment and Biometrics",
    shortName: "ICO AI Enforcement",
    region: "uk", country: "uk",
    regionLabel: "United Kingdom", countryLabel: "United Kingdom",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "Ongoing (recruitment audit outcomes published 2024–2026)",
    overview: "The UK's transparency regime is enforced through the ICO's supervisory activity rather than through a dedicated AI regulator. Its recruitment audit is the clearest signal of enforcement direction: after reviewing evidence from more than 30 UK employers, the ICO found that most use AI to screen and score candidates in ways constituting automated decision-making — and most were not applying the required safeguards. Many did not recognise that ADM was occurring at all.",
    keyArticles: [
      { ref: "Recruitment audit findings", text: "The ICO's review of more than 30 UK employers found widespread non-compliance in AI recruitment tools. The central failure was not deliberate evasion but misclassification — employers did not recognise that AI-assisted screening and scoring engaged the automated decision-making rules." },
      { ref: "The misclassification trap", text: "Where AI scores or ranks candidates and a human recruiter acts on that output without genuine independent assessment, the decision is likely 'solely automated' notwithstanding nominal human presence. The statutory meaningful-involvement threshold under Article 22A makes this harder to argue around than under previous guidance." },
      { ref: "Practical expectations for employers", text: "The ICO expects employers deploying AI recruitment tools to: identify whether ADM is occurring; provide clear candidate-facing information; ensure human reviewers have authority and information to reach an independent conclusion; enable representations and contest; and conduct a DPIA before deployment." },
      { ref: "Vendor responsibility does not transfer", text: "Employers remain the controller for recruitment decisions. Procuring a third-party AI screening tool does not transfer accountability — the employer must satisfy itself that the tool permits compliant use and must document that assessment." },
      { ref: "Biometrics and facial recognition strategy", text: "The ICO published a strategy on biometrics and facial recognition technology as part of its 2026 AI priorities, focusing on live facial recognition in public and commercial settings and the necessity and proportionality assessments required." },
      { ref: "Generative and agentic AI reports", text: "The ICO's 2026 priorities include reports on generative and agentic AI, addressing accountability where AI systems take autonomous action — an emerging area where existing controller-processor concepts fit imperfectly." }
    ],
    sources: [
      { label: "ICO — AI and Data Protection Risk Toolkit and Audit Outcomes", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/" },
      { label: "ICO — Employment Practices and Recruitment Guidance", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/employment/" }
    ]
  },

  // ── UNITED KINGDOM — LICENSING & CERTIFICATION ───────────
  {
    id: 84,
    title: "MHRA — AI as a Medical Device and the AI Airlock",
    shortName: "MHRA AIaMD & AI Airlock",
    region: "uk", country: "uk",
    regionLabel: "United Kingdom", countryLabel: "United Kingdom",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "UK MDR 2002 as amended; AI Airlock launched 2024",
    overview: "The most developed UK approval regime for AI, and the closest UK analogue to FDA SaMD clearance or NMPA registration. The Medicines and Healthcare products Regulatory Agency regulates AI forming part of medical devices, requiring UKCA marking before market placement. The AI Airlock regulatory sandbox, launched in 2024, provides a supervised environment for testing novel AI medical devices that do not fit existing assessment frameworks.",
    keyArticles: [
      { ref: "AI as a Medical Device (AIaMD)", text: "Software qualifies as a medical device where it has a medical purpose — diagnosis, prevention, monitoring, prediction, prognosis, or treatment. AI systems meeting this definition require UKCA marking and, for higher risk classes, assessment by a UK Approved Body before market placement." },
      { ref: "UKCA marking and Approved Bodies", text: "Post-Brexit, UKCA marking replaced CE marking for the Great Britain market, though CE marking remains accepted under transitional arrangements. Northern Ireland continues to follow EU rules under the Windsor Framework, creating a two-regime position within the UK." },
      { ref: "AI Airlock regulatory sandbox", text: "Launched in 2024, the AI Airlock provides a supervised environment for manufacturers to test novel AI medical devices where existing regulatory frameworks do not cleanly apply. It generates evidence to inform future MHRA guidance — functionally similar to Hong Kong's GenAI Sandbox++ and Utah's AI Learning Laboratory." },
      { ref: "Adaptive algorithms", text: "The MHRA has signalled that continuously learning AI raises questions the current framework does not fully answer, and the AI Airlock is being used partly to develop an approach. The UK has no equivalent yet to the FDA's Predetermined Change Control Plan mechanism." },
      { ref: "Post-market surveillance", text: "Manufacturers must maintain post-market surveillance including vigilance reporting for adverse incidents. Software updates that change the device's intended purpose or performance may require reassessment." },
      { ref: "National Health Service procurement", text: "Beyond MHRA approval, AI deployed in the NHS faces separate procurement requirements including the Digital Technology Assessment Criteria (DTAC), covering clinical safety, data protection, technical security, interoperability, and usability." }
    ],
    sources: [
      { label: "MHRA — Software and AI as a Medical Device", url: "https://www.gov.uk/government/publications/software-and-artificial-intelligence-ai-as-a-medical-device" },
      { label: "MHRA — AI Airlock Regulatory Sandbox", url: "https://www.gov.uk/government/collections/ai-airlock-the-regulatory-sandbox-for-aiamd" }
    ]
  },
  {
    id: 85,
    title: "FCA and Financial Services AI Supervision",
    shortName: "FCA AI Supervision",
    region: "uk", country: "uk",
    regionLabel: "United Kingdom", countryLabel: "United Kingdom",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "Ongoing; Mills Review launched 27 January 2026",
    overview: "No AI-specific licence exists in UK financial services. AI governance flows from existing principles — Consumer Duty, the Senior Managers and Certification Regime, and Operational Resilience — applied through supervision rather than at the authorisation stage. This is a meaningful contrast with Hong Kong, where the SFC requires a written AI governance policy in the licence application pack. The FCA has not gone that far.",
    keyArticles: [
      { ref: "No AI-specific authorisation", text: "FCA authorisation attaches to regulated activities, not to the technology used to perform them. A firm using AI for credit decisions requires the same permissions as one using human underwriters — but must satisfy the same conduct standards regardless of automation." },
      { ref: "Consumer Duty", text: "Requires firms to deliver good outcomes for retail customers. Applied to AI, this means firms must be able to demonstrate that automated decisions produce fair outcomes, that customers understand products recommended by AI, and that vulnerable customers are not disadvantaged by automated processes." },
      { ref: "Senior Managers and Certification Regime (SM&CR)", text: "Accountability for AI systems must sit with an identified senior manager. The FCA has been explicit that AI does not dilute individual accountability — a named individual is responsible for the outcomes an AI system produces within their area of responsibility." },
      { ref: "Operational Resilience", text: "Firms must identify important business services, set impact tolerances, and demonstrate they can remain within them during disruption. AI systems supporting important business services fall within scope, including third-party AI dependencies." },
      { ref: "The Mills Review", text: "Launched by Sheldon Mills on 27 January 2026, examining how the current regulatory framework handles AI capabilities. The Treasury Committee has urged the FCA to publish comprehensive AI guidance for firms by the end of 2026." },
      { ref: "Contrast with Hong Kong", text: "Hong Kong's SFC requires a written AI governance policy as part of Type 1, 4, and 9 licence applications. The FCA imposes no equivalent application-stage requirement — UK obligations bite through ongoing supervision and enforcement rather than at authorisation." }
    ],
    sources: [
      { label: "FCA — Artificial Intelligence and Machine Learning", url: "https://www.fca.org.uk/firms/innovation/artificial-intelligence" },
      { label: "FCA — Consumer Duty", url: "https://www.fca.org.uk/firms/consumer-duty" }
    ]
  },
  {
    id: 86,
    title: "AI Security Institute and Sector Regulator Landscape",
    shortName: "AISI & Sector Regulators",
    region: "uk", country: "uk",
    regionLabel: "United Kingdom", countryLabel: "United Kingdom",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "AISI renamed February 2025; sector guidance ongoing",
    overview: "The UK's approach places evaluation and supervision with existing bodies rather than creating an AI licensing authority. The AI Security Institute, renamed from the AI Safety Institute in February 2025, evaluates frontier model risk through voluntary agreements — it assesses rather than approves. Alongside it, sector regulators publish increasingly prescriptive expectations within their own remits, meaning a UK organisation may face several frameworks simultaneously without any single AI authorisation.",
    keyArticles: [
      { ref: "AI Security Institute — evaluation not licensing", text: "The AISI conducts pre-deployment testing of frontier models through voluntary agreements with major developers. It has no statutory power to prohibit deployment or require approval. Its output is evidence and advice to government, not a market access decision." },
      { ref: "The five non-statutory principles", text: "The 2023 AI White Paper set out five cross-sector principles: safety and robustness; transparency and explainability; fairness; accountability and governance; and contestability and redress. Regulators apply these within their existing remits — they carry no independent legal force." },
      { ref: "Ofcom", text: "Enforces the Online Safety Act 2023, covering algorithmic content recommendation, risk assessments for user-to-user services, and transparency reporting. Also operates under the Telecoms Security Act 2021 for network AI applications." },
      { ref: "CMA", text: "The Competition and Markets Authority's data, technology and analytics unit examines competition in foundation model markets and applies the Digital Markets, Competition and Consumers Act 2024 to designated firms with strategic market status." },
      { ref: "Other sector regulators", text: "OFGEM publishes ethical AI guidance for the energy sector; the Solicitors Regulation Authority addresses AI in legal services; and the Equality and Human Rights Commission covers discriminatory outcomes from automated systems under the Equality Act 2010." },
      { ref: "The parallel compliance problem", text: "A UK enterprise deploying AI typically faces several distinct frameworks at once: UK GDPR and the DUAA; the forthcoming ICO code; sector regulator expectations; and — where outputs reach EU users — the EU AI Act extraterritorially. No single authority coordinates these." }
    ],
    sources: [
      { label: "UK Government — AI Security Institute", url: "https://www.aisi.gov.uk/" },
      { label: "DSIT — A Pro-Innovation Approach to AI Regulation (White Paper)", url: "https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach" }
    ]
  },

  // ── AUSTRALIA — DATA GOVERNANCE ──────────────────────────
  {
    id: 87,
    title: "Privacy Act 1988 and the Australian Privacy Principles",
    shortName: "Privacy Act & APPs",
    region: "anz", country: "australia",
    regionLabel: "Australia & New Zealand", countryLabel: "Australia",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "1988 (substantially amended 2024–2026)",
    overview: "Australia's foundational data protection statute, structured around thirteen Australian Privacy Principles covering collection, use, disclosure, quality, security, access, and correction. Applies to APP entities — Commonwealth agencies and organisations above the AU$3 million turnover threshold, plus certain small businesses regardless of size. Enforced by the Office of the Australian Information Commissioner, which has shifted from a guidance posture to proactive enforcement through 2026.",
    keyArticles: [
      { ref: "Scope — the small business exemption", text: "The Act applies to organisations with annual turnover above AU$3 million, plus specified categories regardless of turnover including health service providers, credit reporting bodies, and businesses trading in personal information. This turnover exemption is unusual internationally and has been repeatedly criticised in reform reviews." },
      { ref: "APP 1 — Open and transparent management", text: "Entities must manage personal information in an open and transparent way, and maintain a clearly expressed and up-to-date privacy policy. This is the provision extended by the new automated decision-making disclosure requirements commencing December 2026." },
      { ref: "APP 3 and APP 6 — Collection and use", text: "Personal information may only be collected where reasonably necessary for the entity's functions, and may only be used or disclosed for the primary purpose of collection or a related secondary purpose the individual would reasonably expect. Repurposing data for AI model training frequently strains this test." },
      { ref: "APP 11 — Security", text: "Entities must take reasonable steps to protect personal information from misuse, interference, loss, unauthorised access, modification, or disclosure — and to destroy or de-identify information no longer needed for any permitted purpose." },
      { ref: "Notifiable Data Breaches scheme", text: "Entities must notify the OAIC and affected individuals of eligible data breaches likely to result in serious harm, as soon as practicable after becoming aware. AI systems processing personal information at scale materially increase both breach likelihood and notification scope." },
      { ref: "Extraterritorial application", text: "The Act applies to overseas organisations with an 'Australian link' — those carrying on business in Australia and collecting personal information from Australia. An offshore AI vendor serving Australian customers may be directly captured rather than merely bound by contract." },
      { ref: "OAIC compliance sweep", text: "The OAIC is conducting a compliance sweep of privacy policies through 2026. Entities with non-compliant policies may face a compliance notice, an infringement notice, or civil penalty proceedings." }
    ],
    sources: [
      { label: "OAIC — Australian Privacy Principles", url: "https://www.oaic.gov.au/privacy/australian-privacy-principles" },
      { label: "Federal Register of Legislation — Privacy Act 1988", url: "https://www.legislation.gov.au/C2004A03712/latest" }
    ]
  },
  {
    id: 88,
    title: "Privacy and Other Legislation Amendment Act 2024 (POLA Act)",
    shortName: "POLA Act 2024",
    region: "anz", country: "australia",
    regionLabel: "Australia & New Zealand", countryLabel: "Australia",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "Passed November 2024; provisions staged to 10 December 2026",
    overview: "The first substantial rewrite of the Privacy Act in years, passed by federal Parliament in late 2024. Most of the Act deals with a new statutory tort for serious invasions of privacy and stronger enforcement powers for the regulator. Buried within it are the clauses creating the automated decision-making transparency regime — APP 1.7 to 1.9 — which commence on 10 December 2026 after a two-year transitional period running from Royal Assent.",
    keyArticles: [
      { ref: "Statutory tort for serious invasions of privacy", text: "Commenced June 2025. Allows individuals to sue directly for serious invasions of privacy, whether by intrusion upon seclusion or misuse of information. This is a significant change in a jurisdiction that previously had no general privacy cause of action, and it creates litigation exposure independent of OAIC enforcement." },
      { ref: "Enhanced OAIC enforcement powers", text: "The Act strengthened the Commissioner's powers including expanded investigation capabilities, a tiered civil penalty regime for interferences with privacy, and the ability to issue infringement notices for specified administrative failures without commencing proceedings." },
      { ref: "Automated decision-making clauses (APP 1.7–1.9)", text: "New clauses require APP entities to disclose automated decision-making in their privacy policies where a computer program uses personal information to make decisions significantly affecting an individual's rights or interests. Commencing 10 December 2026 — covered in detail under the Algorithmic Transparency theme." },
      { ref: "Children's Online Privacy Code", text: "The OAIC is required to develop and register the Privacy (Children's Online Privacy) Code 2026 by 10 December 2026, applying to online services likely to be accessed by children. Structurally comparable to the UK Children's Code." },
      { ref: "Two-year transitional period", text: "The transitional period for the automated decision provisions runs from the date of Royal Assent, making 10 December 2026 the operative deadline for privacy policies, internal processes, and system documentation to be in place." },
      { ref: "Second tranche still pending", text: "The Government has committed to further Privacy Act reforms as a second tranche, anticipated to include more specific requirements for automated decision-making beyond the disclosure obligation. Timing has not been confirmed." }
    ],
    sources: [
      { label: "Federal Register of Legislation — Privacy and Other Legislation Amendment Act 2024", url: "https://www.legislation.gov.au/C2024A00113/asmade/text" },
      { label: "OAIC — Privacy Act Reforms", url: "https://www.oaic.gov.au/privacy/privacy-legislation/privacy-act-reforms" }
    ]
  },

  // ── AUSTRALIA — CROSS-BORDER DATA FLOWS ──────────────────
  {
    id: 89,
    title: "APP 8 and Section 16C — Cross-Border Disclosure",
    shortName: "APP 8 & s.16C",
    region: "anz", country: "australia",
    regionLabel: "Australia & New Zealand", countryLabel: "Australia",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "In force (APP framework since March 2014)",
    overview: "The most permissive cross-border regime in this repository. Australia has no adequacy list, no standard contractual clauses, no security assessment, and no export approval requirement. The entire framework rests on accountability rather than authorisation: an Australian organisation must take reasonable steps before disclosing personal information overseas, and remains directly liable under section 16C for what the recipient subsequently does with it.",
    keyArticles: [
      { ref: "APP 8.1 — Reasonable steps obligation", text: "Before disclosing personal information to an overseas recipient, an APP entity must take such steps as are reasonable in the circumstances to ensure the recipient does not breach the Australian Privacy Principles. There is no prescribed mechanism — the entity determines what is reasonable given the sensitivity and volume of data involved." },
      { ref: "Section 16C — Continuing accountability", text: "Where an APP entity discloses personal information to an overseas recipient, an act or practice by that recipient that would breach the APPs if done in Australia is deemed to be a breach by the disclosing entity. Liability follows the data — contractual diligence replaces regulatory filing as the compliance mechanism." },
      { ref: "APP 8.2(a) — Substantially similar law", text: "Reasonable steps are not required where the entity reasonably believes the recipient is subject to a law or binding scheme with effect substantially similar to the APPs, and mechanisms exist for the individual to enforce that protection. The assessment sits with the entity, not with government." },
      { ref: "APP 8.2(b) — Informed consent", text: "Reasonable steps are not required where the entity expressly informs the individual that APP 8.1 will not apply if they consent, and the individual then consents. This must be genuine informed consent — bundled or implied consent will not suffice." },
      { ref: "No prohibited destinations", text: "Unlike the DOJ Bulk Data Rule, which names China including Hong Kong as a country of concern, Australian law prohibits no destination by name. Transfers to any jurisdiction are permitted subject to the same accountability framework." },
      { ref: "Practical compliance approach", text: "In the absence of a prescribed contract, organisations typically rely on contractual clauses binding the recipient to APP-equivalent standards, vendor due diligence, and audit rights. The burden is on the entity to demonstrate what steps it took and why they were reasonable." }
    ],
    sources: [
      { label: "OAIC — APP 8 Cross-Border Disclosure Guidelines", url: "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information" },
      { label: "OAIC — Sending Personal Information Overseas", url: "https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/more-guidance/sending-personal-information-overseas" }
    ]
  },

  // ── AUSTRALIA — ALGORITHMIC TRANSPARENCY ─────────────────
  {
    id: 90,
    title: "APP 1.7–1.9 — Automated Decision-Making Transparency",
    shortName: "APP 1.7–1.9 (ADM)",
    region: "anz", country: "australia",
    regionLabel: "Australia & New Zealand", countryLabel: "Australia",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "10 December 2026",
    overview: "Australia's central AI transparency obligation, introduced by the POLA Act 2024 and commencing 10 December 2026. The framing is deliberate: this is a disclosure rule, not a prohibition. Australia has explicitly declined to follow the EU AI Act's model of risk tiers and bans. Organisations are not told they cannot automate decisions — they are told they must be publicly honest that they do, and explain what information and decisions are involved.",
    keyArticles: [
      { ref: "APP 1.7 — Trigger", text: "An APP entity must comply where it arranges for a computer program to make, or do a thing substantially and directly related to making, a decision that could reasonably be expected to significantly affect the rights or interests of an individual — and personal information about that individual is used in the program." },
      { ref: "Required disclosure content", text: "The privacy policy must set out the kinds of personal information used in the automated decision-making, and the kinds of decisions made or substantially assisted by it. The disclosure is published rather than provided individually — there is no per-decision notification requirement." },
      { ref: "Scope — decisions and assistance", text: "The obligation captures not only fully automated decisions but programs that do things substantially and directly related to making a decision. The OAIC Issues Paper telegraphs an expansive interpretive stance, meaning AI-assisted decisions with human sign-off may still fall within scope." },
      { ref: "OAIC guidance timeline", text: "The OAIC released its Issues Paper on 18 May 2026 with submissions closing 15 June 2026. Formal guidance is expected by September 2026, ahead of the December commencement — leaving a narrow window for organisations to align policies with final guidance." },
      { ref: "OAIC recommended preparation", text: "The OAIC has flagged: mapping IT systems and decision flows to assess whether the obligation applies; undertaking vendor due diligence and reviewing contracts for visibility, audit rights, and disclosure cooperation; and drafting plain-language disclosures of the information and decisions involved." },
      { ref: "Contrast with the EU and UK approach", text: "Australia's obligation is transparency only. There is no right to human review, no right to contest, and no restriction on automating decisions — unlike UK GDPR Articles 22A–22D or EU AI Act Article 86, both of which confer individual rights alongside disclosure." },
      { ref: "Penalties", text: "An entity with a non-compliant privacy policy may be issued a compliance notice or infringement notice, or pursued by the OAIC for civil penalties under the Privacy Act's tiered penalty regime." }
    ],
    sources: [
      { label: "OAIC — Automated Decision-Making Transparency Guidance", url: "https://www.oaic.gov.au/privacy/privacy-legislation/privacy-act-reforms" },
      { label: "Federal Register of Legislation — POLA Act 2024", url: "https://www.legislation.gov.au/C2024A00113/asmade/text" }
    ]
  },
  {
    id: 91,
    title: "Voluntary AI Safety Standard and National AI Centre Guidance",
    shortName: "Voluntary AI Standard & AI6",
    region: "anz", country: "australia",
    regionLabel: "Australia & New Zealand", countryLabel: "Australia",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "Voluntary Standard 2024; NAIC Guidance updated October 2025",
    overview: "Australia's voluntary governance layer, sitting alongside the binding Privacy Act obligations. In 2024 the Government released proposals for mandatory guardrails for high-risk AI alongside a Voluntary AI Safety Standard. In October 2025 the National AI Centre published updated Guidance for AI Adoption setting out six essential practices, now the primary government guidance for responsible AI governance. The December 2025 National AI Plan confirmed reliance on existing laws and voluntary guidance rather than a standalone AI Act — a position that shifted in July 2026.",
    keyArticles: [
      { ref: "Voluntary AI Safety Standard (2024)", text: "Ten voluntary guardrails covering accountability, risk management, data governance, testing, human oversight, user information, contestability, supply chain transparency, record keeping, and stakeholder engagement. Designed to be adopted immediately while mandatory guardrails were under consideration." },
      { ref: "NAIC Guidance for AI Adoption — six essential practices", text: "Published October 2025 and now the primary government guidance. The six practices (AI6) provide a simplified entry point for organisations without mature governance functions, superseding the Voluntary Standard as the recommended starting framework." },
      { ref: "Mandatory guardrails proposal — not adopted", text: "The 2024 proposals paper canvassed mandatory guardrails for high-risk AI on an EU-style model. The December 2025 National AI Plan confirmed Australia would not proceed with immediate mandatory guardrails, relying instead on existing laws and sector regulators." },
      { ref: "Australian AI Safety Institute", text: "Established to evaluate frontier model risk. Like the UK's AI Security Institute, it assesses rather than approves — it has no market access authority and issues no licences or certifications." },
      { ref: "Federal Court Generative AI Practice Note", text: "Published 16 April 2026, governing disclosure of generative AI use in litigation before the Federal Court of Australia. Narrow in scope but a notable early institutional response, and part of a broader pattern of Australian courts addressing AI use in proceedings." },
      { ref: "Status of voluntary guidance", text: "None of these instruments creates legal obligations. Their practical weight comes from procurement expectations, board-level governance norms, and the likelihood that regulators will treat adherence as evidence of reasonable steps under existing statutory duties." }
    ],
    sources: [
      { label: "National AI Centre — Guidance for AI Adoption", url: "https://www.industry.gov.au/publications/guidance-ai-adoption" },
      { label: "Department of Industry — Voluntary AI Safety Standard", url: "https://www.industry.gov.au/publications/voluntary-ai-safety-standard" }
    ]
  },
  {
    id: 92,
    title: "NSW Work Health and Safety Amendment (Digital Work Systems) Act 2026",
    shortName: "NSW Digital Work Systems Act",
    region: "anz", country: "australia",
    regionLabel: "Australia & New Zealand", countryLabel: "Australia",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "Passed 12 February 2026; commencement by proclamation",
    overview: "An unusual and internationally distinctive instrument — New South Wales regulates algorithmic management through workplace safety law rather than data protection or employment law. Passed 12 February 2026, the Act imposes specific work health and safety duties on persons conducting a business or undertaking that use AI, algorithms, automation, or online platforms to allocate work. Other states may follow, making this a potential template for Australian state-level AI regulation.",
    keyArticles: [
      { ref: "Regulatory architecture", text: "The Act operates through the work health and safety framework, imposing duties on persons conducting a business or undertaking (PCBUs). This creates a duty owed to workers by the business — a different legal architecture from the notice-and-consent model used in data protection law." },
      { ref: "Scope — digital work systems", text: "Captures the use of AI, algorithms, automation, or online platforms to allocate work. This reaches gig economy platforms, workforce management systems, shift scheduling tools, and productivity monitoring — regardless of whether personal information is involved." },
      { ref: "Psychosocial hazard framing", text: "Algorithmic management is addressed as a potential psychosocial hazard alongside established WHS risks. PCBUs must identify, assess, and control risks arising from digital work systems, including those relating to work pace, surveillance intensity, and lack of autonomy or predictability." },
      { ref: "Consultation duties", text: "WHS law imposes existing duties to consult workers on matters affecting their health and safety. Applied to digital work systems, this implies consultation before deploying or materially changing algorithmic allocation tools — a participation right not found in Australian privacy law." },
      { ref: "Commencement", text: "Commencement is by proclamation, meaning the operative date is set by the NSW Government rather than fixed in the Act. Organisations operating in NSW should monitor for the proclamation date." },
      { ref: "Potential for replication", text: "Australian WHS law is substantially harmonised across states through model legislation. A successful NSW implementation creates a straightforward path for other states to adopt equivalent provisions, and the model WHS framework is the likely vehicle." }
    ],
    sources: [
      { label: "NSW Legislation — Work Health and Safety Amendment (Digital Work Systems) Act 2026", url: "https://legislation.nsw.gov.au/" },
      { label: "SafeWork NSW — Guidance and Resources", url: "https://www.safework.nsw.gov.au/" }
    ]
  },

  // ── AUSTRALIA — LICENSING & CERTIFICATION ────────────────
  {
    id: 93,
    title: "Australian Standards for AI and the Office of AI",
    shortName: "Australian Standards for AI",
    region: "anz", country: "australia",
    regionLabel: "Australia & New Zealand", countryLabel: "Australia",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "Announced 15 July 2026; legislation expected early 2027",
    overview: "A significant reversal of policy. In December 2025 the National AI Plan confirmed Australia would rely on existing laws rather than a standalone AI Act. On 15 July 2026 the Prime Minister announced plans to legislate Australian Standards for AI and immediately established an Office of AI within the Department of the Prime Minister and Cabinet. Distinctively, the proposed Standards target AI infrastructure — data centres, power, water, and training data provenance — rather than AI systems classified by risk tier.",
    keyArticles: [
      { ref: "Status — announcement, not legislation", text: "The 15 July 2026 announcement does not itself create legal duties and should not be read as a general mandatory standard for organisations using AI. Final scope, obligations, and commencement arrangements have not been published. National Cabinet was to consider the approach in August 2026." },
      { ref: "Office of AI", text: "Commenced operation on 15 July 2026 within the Department of the Prime Minister and Cabinet. Its function is to coordinate AI policy across departments and oversee development of the proposed Standards. It is a coordinating body — it issues no licences and grants no approvals." },
      { ref: "Data centre requirements", text: "The proposed framework would require large data centre operators to underwrite or supply their own power, avoid increasing household electricity prices, and implement strategies to minimise water usage. This is a resource and infrastructure framing rather than an AI safety framing." },
      { ref: "Training data and copyright", text: "The announcement included a commitment that AI companies will not be able to use Australian books, music, art, or news to train models without the creator's control. Australia rejected a text and data mining copyright exemption in October 2025 and again in April 2026." },
      { ref: "Federal-state coordination", text: "Because data centre approvals sit largely with states and territories, the Government is seeking National Cabinet agreement for consistent mandatory standards. States had been taking increasingly divergent approaches to approving AI infrastructure, which was a driver for the national framework." },
      { ref: "Legislative timeline", text: "The Government expects to introduce the proposed laws into Parliament in early 2027. Government material describes the result as what would be the first legislated national AI framework worldwide — though the scope is narrower than that framing suggests." },
      { ref: "Distinctive regulatory target", text: "Australia is the only jurisdiction in this repository proposing to regulate AI infrastructure as the primary object. Other jurisdictions regulate AI systems by risk tier, use case, or sector. This makes direct comparison difficult and means Australian compliance may not map onto obligations elsewhere." }
    ],
    sources: [
      { label: "Prime Minister of Australia — AI Framework Announcement", url: "https://www.pm.gov.au/media" },
      { label: "Department of Industry — National AI Plan", url: "https://www.industry.gov.au/science-technology-and-innovation/technology/artificial-intelligence" }
    ]
  },
  {
    id: 94,
    title: "TGA Software as a Medical Device and Financial Services Supervision",
    shortName: "TGA SaMD & APRA/ASIC",
    region: "anz", country: "australia",
    regionLabel: "Australia & New Zealand", countryLabel: "Australia",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "TGA SaMD reforms 2021; APRA CPS 230 effective July 2025",
    overview: "Australia's sectoral approval regimes, which operate on the same activity-based logic as the US and UK. The Therapeutic Goods Administration regulates Software as a Medical Device, requiring inclusion in the Australian Register of Therapeutic Goods before supply — the most developed AI approval pathway in Australia. Financial services impose no AI-specific licence, but APRA's CPS 230 captures AI systems supporting critical operations.",
    keyArticles: [
      { ref: "TGA — Software as a Medical Device", text: "Software with a therapeutic purpose — diagnosis, prevention, monitoring, prediction, prognosis, or treatment — is regulated as a medical device and must be included in the Australian Register of Therapeutic Goods before supply. The TGA reformed its SaMD framework in 2021, broadly aligning classification with IMDRF principles." },
      { ref: "TGA — Risk-based classification", text: "Classification depends on the significance of the information provided to a healthcare decision and the state of the patient's health. Higher classifications require conformity assessment evidence, which may be accepted from comparable overseas regulators including the FDA and EU notified bodies." },
      { ref: "TGA — Clinical decision support exclusions", text: "Certain clinical decision support software is excluded from regulation where it does not directly process medical device data, is intended only to support a health professional's decision, and the professional can independently review the basis of the recommendation — structurally similar to the FDA's CDS carve-out." },
      { ref: "APRA CPS 230 — Operational Risk Management", text: "Effective July 2025, requiring APRA-regulated entities to identify critical operations, set tolerance levels for disruption, and manage material service provider arrangements. AI systems supporting critical operations fall within scope, including third-party AI dependencies." },
      { ref: "ASIC — No AI-specific licensing", text: "Australian Financial Services licensing attaches to the regulated activity, not the technology. ASIC has published reviews of AI governance among licensees, finding gaps in board oversight and model validation, but has not introduced an application-stage AI requirement comparable to Hong Kong's SFC." },
      { ref: "Contrast with Hong Kong", text: "Hong Kong's SFC requires a written AI governance policy in the licence application pack for Type 1, 4, and 9 licences. Neither ASIC nor APRA imposes an equivalent requirement — Australian obligations bite through prudential supervision and surveillance rather than at authorisation." }
    ],
    sources: [
      { label: "TGA — Software as a Medical Device", url: "https://www.tga.gov.au/how-we-regulate/manufacturing/medical-devices/manufacturer-guidance-specific-types-medical-devices/software-based-medical-devices" },
      { label: "APRA — CPS 230 Operational Risk Management", url: "https://www.apra.gov.au/operational-risk-management" }
    ]
  },

  // ── NEW ZEALAND — DATA GOVERNANCE ────────────────────────
  {
    id: 95,
    title: "Privacy Act 2020 and the Information Privacy Principles",
    shortName: "Privacy Act 2020 & IPPs",
    region: "anz", country: "newzealand",
    regionLabel: "Australia & New Zealand", countryLabel: "New Zealand",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "1 December 2020",
    overview: "New Zealand's core privacy framework, structured around thirteen Information Privacy Principles. The government has chosen to regulate AI through this existing statute rather than through AI-specific legislation. The Privacy Act applies fully to AI-driven processing, meaning organisations must comply with the IPPs regardless of whether decisions are made by humans or automated systems. Enforced by the Office of the Privacy Commissioner, which published detailed AI guidance in September 2023 and has updated it since.",
    keyArticles: [
      { ref: "Scope — no turnover threshold", text: "Unlike Australia, New Zealand applies the Privacy Act to all agencies regardless of size or turnover. There is no small business exemption, meaning a two-person startup faces the same statutory obligations as a large enterprise." },
      { ref: "Broad definition of personal information", text: "Personal information means information about an identifiable individual — including traditional identifiers, technical metadata such as IP addresses and device IDs, and even inaccurate or fabricated data such as deepfakes and fake profiles where a person is identifiable. This captures generative AI outputs, not only training inputs." },
      { ref: "IPP 1 and IPP 3 — Purpose and collection", text: "Personal information may only be collected for a lawful purpose connected with the agency's functions and where collection is necessary for that purpose. Individuals must be informed of the purpose at the time of collection. Repurposing existing datasets for AI development frequently strains these principles." },
      { ref: "IPP 10 — Limits on use", text: "An agency must not use personal information for a purpose other than that for which it was obtained, subject to exceptions. This is the central constraint where organisations seek to use existing datasets for AI-driven processes that differ materially from the original collection context." },
      { ref: "IPP 11 — Limits on disclosure", text: "Personal information may not be disclosed except in specified circumstances. Feeding personal information into a third-party AI tool may constitute disclosure to the vendor, which the OPC guidance treats as requiring its own analysis rather than being covered by the original collection purpose." },
      { ref: "OPC AI lifecycle guidance", text: "The OPC's guidance distinguishes training data used to build models, model artefacts such as weights and pre-trained models, and runtime inputs including prompts and user queries — treating each as raising distinct privacy questions rather than applying a single analysis to the whole system." },
      { ref: "Notifiable privacy breaches", text: "Agencies must notify the OPC and affected individuals of privacy breaches causing or likely to cause serious harm. AI systems processing personal information at scale materially increase both breach likelihood and notification scope." }
    ],
    sources: [
      { label: "OPC — Artificial Intelligence and the Information Privacy Principles", url: "https://www.privacy.org.nz/publications/guidance-resources/artificial-intelligence/" },
      { label: "NZ Legislation — Privacy Act 2020", url: "https://www.legislation.govt.nz/act/public/2020/0031/latest/LMS23193.html" }
    ]
  },
  {
    id: 96,
    title: "Biometric Processing Privacy Code of Practice",
    shortName: "NZ Biometrics Code",
    region: "anz", country: "newzealand",
    regionLabel: "Australia & New Zealand", countryLabel: "New Zealand",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "Issued August 2025",
    overview: "Binding regulation of biometric information, issued by the Privacy Commissioner under the Privacy Act 2020. Codes of practice issued under the Act have the force of law, making this materially stronger than the voluntary AI frameworks found in Hong Kong or Australia. The Code followed the OPC's inquiry into the Foodstuffs North Island facial recognition trial in New Zealand supermarkets, which the OPC found compliant with the Privacy Act due to the robust safeguards implemented.",
    keyArticles: [
      { ref: "Legal status", text: "Codes of practice issued under the Privacy Act 2020 have the force of law and modify how the Information Privacy Principles apply to the regulated activity. This is binding regulation, not guidance — a notable contrast with Hong Kong's voluntary PCPD AI framework and Australia's Voluntary AI Safety Standard." },
      { ref: "Scope — biometric processing", text: "Covers the collection and use of biometric information, including facial recognition, voice identification, fingerprint and iris recognition, and biometric categorisation. Applies to both identification and classification uses." },
      { ref: "Proportionality requirement", text: "Agencies must be satisfied that biometric processing is proportionate — weighing the benefits against the privacy impact, and considering whether a less privacy-intrusive alternative could achieve the same purpose. This is an ex ante assessment, documented before deployment." },
      { ref: "Notification and transparency", text: "Agencies must make people aware that biometric processing is occurring, in a manner that is clear and accessible in the circumstances. For retail facial recognition, this has been interpreted as requiring prominent signage at entry points." },
      { ref: "Restrictions on certain uses", text: "The Code restricts particular categories of biometric classification, including inferring characteristics such as emotional state or health status, reflecting concerns similar to those underlying EU AI Act Article 5 prohibitions on emotion recognition in specified contexts." },
      { ref: "Foodstuffs precedent", text: "The OPC found the Foodstuffs North Island facial recognition trial complied with the Privacy Act due to the robust privacy safeguards implemented during the trial. This remains a useful reference point for what a compliant FRT deployment looks like in practice under New Zealand law." }
    ],
    sources: [
      { label: "OPC — Biometrics Code of Practice and Guidance", url: "https://www.privacy.org.nz/publications/guidance-resources/biometrics/" },
      { label: "OPC — Privacy Codes of Practice", url: "https://www.privacy.org.nz/privacy-act-2020/codes-of-practice/" }
    ]
  },

  // ── NEW ZEALAND — CROSS-BORDER DATA FLOWS ────────────────
  {
    id: 97,
    title: "IPP 12 — Disclosure of Personal Information Outside New Zealand",
    shortName: "IPP 12 (Cross-Border)",
    region: "anz", country: "newzealand",
    regionLabel: "Australia & New Zealand", countryLabel: "New Zealand",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "1 December 2020",
    overview: "New Zealand's first cross-border transfer restriction, introduced by the Privacy Act 2020. IPP 12 sits structurally between Australia's pure accountability model and the EU's authorisation model: a mechanism must be identified before disclosure, but no regulator is involved and no filing is required. New Zealand separately holds EU adequacy, placing it in a small group of jurisdictions from which EU data may flow without additional safeguards.",
    keyArticles: [
      { ref: "The four permitted grounds", text: "An agency may disclose personal information to a foreign person or entity only where: the individual authorises the disclosure after being expressly informed the recipient may not be required to protect the information comparably; the recipient is carrying on business in New Zealand; the recipient is in a prescribed country; or the recipient is otherwise required to protect the information in a way that provides comparable safeguards." },
      { ref: "Contractual comparable safeguards", text: "The most commonly used route in practice. The agency must satisfy itself that the recipient is bound — by contract, binding scheme, or applicable privacy law — to standards providing comparable protection to the IPPs. There is no prescribed contract template, unlike the EU SCCs or the UK IDTA." },
      { ref: "Prescribed countries", text: "New Zealand may designate countries by Order in Council as providing comparable safeguards, removing the need for other mechanisms. The list remains very short in practice, so most organisations rely on contractual protections rather than country designation." },
      { ref: "Individual authorisation", text: "Where authorisation is relied upon, the individual must be expressly informed that the recipient may not be required to protect the information in a way that provides comparable safeguards. Bundled or implied consent will not satisfy this — the risk disclosure must be explicit." },
      { ref: "New Zealand's EU adequacy", text: "New Zealand holds an EU adequacy decision, meaning EU-to-New Zealand personal data transfers require no SCCs or Transfer Impact Assessment. New Zealand is one of a small number of jurisdictions with this status, alongside Japan, South Korea, the United Kingdom, and Switzerland." },
      { ref: "Position on China and Hong Kong", text: "Neither Mainland China nor Hong Kong is a prescribed country. Transfers to either require contractual comparable safeguards or express individual authorisation after disclosure of the risk that comparable protection may not apply." }
    ],
    sources: [
      { label: "OPC — Sending Personal Information Overseas (IPP 12)", url: "https://www.privacy.org.nz/privacy-act-2020/privacy-principles/12/" },
      { label: "European Commission — Adequacy Decisions", url: "https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en" }
    ]
  },

  // ── NEW ZEALAND — ALGORITHMIC TRANSPARENCY ───────────────
  {
    id: 98,
    title: "Automated Decision-Making — The New Zealand Gap",
    shortName: "NZ ADM Gap",
    region: "anz", country: "newzealand",
    regionLabel: "Australia & New Zealand", countryLabel: "New Zealand",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "No obligation currently in force",
    overview: "The clearest regulatory gap in this repository. New Zealand's Privacy Act 2020 does not address automated decision-making at all. There is no obligation to disclose the use of ADM tools in a privacy policy or anywhere else. The Privacy Commissioner identified ADM as a priority reform area in 2023, citing risks of bias and the need to align with international practice, but no legislative change has been introduced. What binds instead are general IPPs never designed for algorithmic decisions.",
    keyArticles: [
      { ref: "No ADM-specific obligation", text: "New Zealand has no equivalent to Australia's APP 1.7, the UK's GDPR Articles 22A–22D, or the EU AI Act Article 86 right to explanation. There is no disclosure duty, no right to human review, and no right to contest an automated decision as such." },
      { ref: "IPP 8 — Accuracy before use", text: "The closest binding hook. An agency holding personal information must not use or disclose it — including for automated decision-making — without taking such steps as are reasonable in the circumstances to ensure it is accurate, up to date, complete, relevant, and not misleading. This creates a data quality duty rather than an explanation duty." },
      { ref: "IPP 6 and IPP 7 — Access and correction", text: "Individuals may request access to personal information held about them and seek correction of inaccuracies. Applied to AI systems, these can surface both inputs and outputs even in the absence of a dedicated explanation right — an indirect route to transparency." },
      { ref: "OPC expectations for AI projects", text: "The OPC sets expectations rather than duties: senior leadership approval informed by documented risk assessments; Privacy Impact Assessments and Algorithmic Impact Assessments; transparency with people about AI use; engagement with Māori and affected communities; human review for decisions affecting people; and preventing AI providers from retaining or disclosing personal information without lawful basis." },
      { ref: "Responsibility is not displaced", text: "The OPC has emphasised that agencies remain responsible for decisions made using AI tools and should not assume that reliance on automated systems displaces existing Privacy Act obligations. Meaningful human oversight is expected for significant decisions, with independent review rather than rubber-stamping of automated outputs." },
      { ref: "Trans-Tasman exposure", text: "A New Zealand organisation serving Australian customers will be captured by APP 1.7 from 10 December 2026 while facing no equivalent domestic obligation. The OAIC's reach is not limited to Australian-incorporated entities, so many New Zealand companies will be regulated by Australian law before their own." }
    ],
    sources: [
      { label: "OPC — Artificial Intelligence Guidance", url: "https://www.privacy.org.nz/publications/guidance-resources/artificial-intelligence/" },
      { label: "OPC — Information Privacy Principles", url: "https://www.privacy.org.nz/privacy-act-2020/privacy-principles/" }
    ]
  },
  {
    id: 99,
    title: "Algorithm Charter for Aotearoa New Zealand",
    shortName: "Algorithm Charter",
    region: "anz", country: "newzealand",
    regionLabel: "Australia & New Zealand", countryLabel: "New Zealand",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "July 2020",
    overview: "A voluntary commitment signed by most New Zealand public sector agencies, setting expectations for the use of algorithms in government decision-making. It predates most comparable international instruments and includes a partnership commitment to Māori that no other jurisdiction in this repository replicates. It applies to government agencies rather than the private sector, but has shaped the OPC's expectations for private sector AI use.",
    keyArticles: [
      { ref: "Transparency commitment", text: "Signatory agencies commit to maintaining transparency by clearly explaining how decisions are informed by algorithms — including plain English explanations, making information about the data and processes publicly available, and publishing information about how data is collected, secured, and stored." },
      { ref: "Partnership with Māori", text: "Agencies commit to delivering clear public benefit through Te Tiriti o Waitangi partnership, embedding a Te Ao Māori perspective in algorithm development and use. No other jurisdiction in this repository builds indigenous consultation into its AI governance framework." },
      { ref: "Focus on people", text: "Agencies commit to identifying and actively managing biases, and to reflecting on the wellbeing of people and ecosystems throughout algorithm development and procurement — an explicitly broader frame than individual privacy harm." },
      { ref: "Data quality", text: "Agencies commit to ensuring data is fit for purpose by understanding its limitations and identifying and managing bias. This mirrors IPP 8 but extends it to structural questions about dataset representativeness rather than individual record accuracy." },
      { ref: "Human oversight", text: "Agencies commit to retaining human oversight by nominating a point of contact for public inquiries about algorithms, providing a channel for challenging or appealing decisions informed by algorithms, and clearly explaining the role of humans in decisions." },
      { ref: "Status and reach", text: "The Charter is voluntary and applies to signatory public sector agencies rather than private organisations. Its practical significance for business lies in procurement — agencies increasingly expect vendors to support Charter commitments where AI is supplied to government." }
    ],
    sources: [
      { label: "Stats NZ — Algorithm Charter for Aotearoa New Zealand", url: "https://www.data.govt.nz/toolkit/data-ethics/government-algorithm-transparency-and-accountability/algorithm-charter/" },
      { label: "OPC — Artificial Intelligence Guidance", url: "https://www.privacy.org.nz/publications/guidance-resources/artificial-intelligence/" }
    ]
  },

  // ── NEW ZEALAND — LICENSING & CERTIFICATION ──────────────
  {
    id: 100,
    title: "Medsafe WAND Notification and Financial Services Supervision",
    shortName: "Medsafe WAND & FMA/RBNZ",
    region: "anz", country: "newzealand",
    regionLabel: "Australia & New Zealand", countryLabel: "New Zealand",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "Medicines Act 1981 framework; WAND ongoing",
    overview: "New Zealand has no AI-specific licensing regime and one of the lightest medical device pathways in the developed world. Medsafe operates the Web Assisted Notification of Devices database, which is a notification system rather than a pre-market assessment — there is no conformity assessment requirement before supply. For a medical AI developer choosing a first market, this is a material difference in time and cost compared with Australia's TGA or the FDA.",
    keyArticles: [
      { ref: "WAND notification, not approval", text: "Medical devices, including qualifying AI software, must be notified to the Web Assisted Notification of Devices database before supply in New Zealand. WAND is a notification system — the sponsor supplies information about the device but Medsafe conducts no pre-market technical assessment and issues no approval." },
      { ref: "No conformity assessment requirement", text: "Unlike Australia's ARTG inclusion process or the EU's notified body regime, New Zealand requires no conformity assessment evidence before supply. Manufacturers must hold evidence of safety and performance, but there is no gatekeeping review." },
      { ref: "Therapeutic Products Act repeal", text: "The Therapeutic Products Act 2023, which would have modernised the regime and introduced a more substantive pre-market pathway, was repealed in 2024. The older Medicines Act 1981 framework remains in place, leaving the lighter notification model operative." },
      { ref: "Financial services — no AI licence", text: "The Financial Markets Authority and Reserve Bank apply existing conduct and prudential frameworks. Fair dealing provisions under the Financial Markets Conduct Act 2013 and the Conduct of Financial Institutions regime apply to AI-driven advice and decisions." },
      { ref: "Contrast with Hong Kong", text: "No New Zealand financial regulator imposes an AI-specific licence condition comparable to Hong Kong's SFC requirement for a written AI governance policy in the licence application pack. Obligations flow entirely from existing conduct standards applied through supervision." },
      { ref: "Government policy position", text: "The government has confirmed it will regulate AI in a light touch, proportionate way by amending existing legislation and introducing principle-driven frameworks rather than an overarching AI statute. No AI licensing regime is currently proposed." }
    ],
    sources: [
      { label: "Medsafe — Medical Devices and WAND", url: "https://www.medsafe.govt.nz/regulatory/DevicesNew/1-1MedicalDeviceRegulation.asp" },
      { label: "Financial Markets Authority — Technology and Innovation", url: "https://www.fma.govt.nz/" }
    ]
  },

  // ── SINGAPORE — DATA GOVERNANCE ──────────────────────────
  {
    id: 101,
    title: "Personal Data Protection Act 2012 (PDPA)",
    shortName: "PDPA (Singapore)",
    region: "sea", country: "singapore",
    regionLabel: "South & Southeast Asia", countryLabel: "Singapore",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "2012 (major amendments in force 2021)",
    overview: "Singapore's binding data protection statute, structured around ten data protection obligations. Substantially amended in 2020 with provisions commencing through 2021, introducing turnover-based financial penalties, mandatory breach notification, and new exceptions for business improvement and research that are directly relevant to AI development. Applies to all organisations processing personal data in Singapore, including through AI systems.",
    keyArticles: [
      { ref: "Ten data protection obligations", text: "Consent; purpose limitation; notification; access and correction; accuracy; protection; retention limitation; transfer limitation; data breach notification; and accountability. These apply uniformly whether processing is performed by humans or automated systems." },
      { ref: "Consent and deemed consent", text: "Organisations must obtain consent unless an exception applies. The 2020 amendments expanded deemed consent to include consent by contractual necessity and by notification, where the organisation notifies the individual of the purpose and allows a reasonable opt-out period." },
      { ref: "Business improvement exception", text: "Permits use of personal data already collected for purposes including improving or developing products and services, learning about customer preferences, and improving operational efficiency — without fresh consent. This is a practically important route for training AI on existing datasets." },
      { ref: "Research exception", text: "Permits use and disclosure of personal data for research where the research cannot reasonably be accomplished without the data, the benefit clearly outweighs the privacy risk, and results will not identify individuals. Applies to commercial research, not only academic." },
      { ref: "Mandatory Data Protection Officer", text: "Every organisation must appoint at least one Data Protection Officer and make their business contact information publicly available. There is no volume or turnover threshold — a materially lower bar than China's PIPL Article 52." },
      { ref: "Data breach notification", text: "Mandatory since February 2021 where a breach results in or is likely to result in significant harm to affected individuals, or is of a significant scale — defined as affecting 500 or more individuals. Notification to the PDPC is required within three calendar days of assessment." },
      { ref: "Penalties", text: "Financial penalties of up to SGD 1 million, or 10% of annual turnover in Singapore for organisations with turnover exceeding SGD 10 million — whichever is higher. The turnover option was introduced by the 2020 amendments." }
    ],
    sources: [
      { label: "PDPC — Personal Data Protection Act Overview", url: "https://www.pdpc.gov.sg/overview-of-pdpa/the-legislation/personal-data-protection-act" },
      { label: "Singapore Statutes Online — PDPA 2012", url: "https://sso.agc.gov.sg/Act/PDPA2012" }
    ]
  },
  {
    id: 102,
    title: "PDPC Advisory Guidelines on Personal Data in AI Recommendation and Decision Systems",
    shortName: "PDPC AI Advisory Guidelines",
    region: "sea", country: "singapore",
    regionLabel: "South & Southeast Asia", countryLabel: "Singapore",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "1 March 2024",
    overview: "Practical guidance answering a question most jurisdictions leave open: when may an organisation use personal data it already holds to develop and train AI systems? The Guidelines clarify how the PDPA's business improvement and research exceptions apply to AI development, and set expectations for consent, notification, and accountability where AI systems make recommendations or decisions about individuals.",
    keyArticles: [
      { ref: "Scope — recommendation and decision systems", text: "Covers AI systems used to make decisions about individuals, or to provide recommendations, predictions, or assessments that influence such decisions. Applies to both the development phase, where personal data trains a model, and the deployment phase, where the system processes data about individuals." },
      { ref: "Business improvement exception applied to AI", text: "Organisations may rely on the business improvement exception to use previously collected personal data for developing AI systems that improve or develop products and services, provided the use is one a reasonable person would consider appropriate in the circumstances." },
      { ref: "Research exception applied to AI", text: "Where AI development qualifies as research, the exception permits use without consent provided the research cannot reasonably be accomplished otherwise, the public benefit clearly outweighs the privacy risk, and outputs do not identify individuals. Commercial research is within scope." },
      { ref: "Data minimisation and anonymisation", text: "The Guidelines encourage anonymisation or pseudonymisation where the AI development purpose can be achieved without identifiable data, noting that anonymised data falls outside the PDPA entirely." },
      { ref: "Notification and consent at deployment", text: "Where an AI system makes recommendations or decisions about individuals, organisations should notify individuals in a meaningful way — including the types of personal data used and a general description of how the system reaches its output." },
      { ref: "Accountability expectations", text: "Organisations should maintain records of AI development including data sources, testing conducted, and measures taken to address risks. The PDPC has indicated it will assess these records when investigating complaints involving AI systems." }
    ],
    sources: [
      { label: "PDPC — Advisory Guidelines on Use of Personal Data in AI Systems", url: "https://www.pdpc.gov.sg/guidelines-and-consultation/2024/02/advisory-guidelines-on-use-of-personal-data-in-ai-recommendation-and-decision-systems" },
      { label: "PDPC — Guidelines and Consultation Hub", url: "https://www.pdpc.gov.sg/guidelines-and-consultation" }
    ]
  },

  // ── SINGAPORE — CROSS-BORDER DATA FLOWS ──────────────────
  {
    id: 103,
    title: "PDPA Section 26 and the Transfer Limitation Obligation",
    shortName: "PDPA Transfer Limitation",
    region: "sea", country: "singapore",
    regionLabel: "South & Southeast Asia", countryLabel: "Singapore",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "PDP Regulations 2021 in force 1 February 2021",
    overview: "Singapore operates a prescribed-mechanism model. Transfers are permitted where the organisation ensures the overseas recipient provides a standard of protection comparable to the PDPA, using one of the routes in Regulation 10 of the Personal Data Protection Regulations 2021. There is no adequacy list, no government approval, and no filing. Distinctively, APEC Cross-Border Privacy Rules certification is expressly recognised — a certification route no European framework offers.",
    keyArticles: [
      { ref: "Section 26 — the obligation", text: "An organisation must not transfer personal data outside Singapore except in accordance with requirements prescribed to ensure that the transferred data will be given a standard of protection comparable to that under the PDPA." },
      { ref: "Regulation 10 — legally enforceable obligations", text: "The primary route. The recipient must be bound by legally enforceable obligations to provide comparable protection — through contract, binding corporate rules, applicable law, or any other legally binding instrument. There is no prescribed template, unlike the EU SCCs or UK IDTA." },
      { ref: "Required contractual content", text: "Where contracts are relied upon, they must require the recipient to comply with the PDPA data protection provisions to the extent they apply, and must specify the countries to which the data may be onward transferred." },
      { ref: "Certification route — APEC CBPR and PRP", text: "Singapore participates in the APEC Cross-Border Privacy Rules and Privacy Recognition for Processors systems. Where the recipient holds valid CBPR or PRP certification, the transfer requirement is satisfied without separate contractual arrangements." },
      { ref: "Consent route", text: "Individual consent may be relied upon where the organisation has provided a reasonable summary in writing of the extent to which the transferred data will be protected to a comparable standard. Consent cannot be made a condition of providing a product or service beyond what is reasonable." },
      { ref: "No EU adequacy", text: "Singapore does not hold an EU adequacy decision. EU-to-Singapore transfers require standard contractual clauses plus a Transfer Impact Assessment — a point often assumed otherwise given Singapore's regulatory maturity." }
    ],
    sources: [
      { label: "PDPC — Transfer Limitation Obligation", url: "https://www.pdpc.gov.sg/overview-of-pdpa/the-legislation/personal-data-protection-act/transfer-limitation-obligation" },
      { label: "Singapore Statutes Online — PDP Regulations 2021", url: "https://sso.agc.gov.sg/SL/PDPA2012-S63-2021" }
    ]
  },

  // ── SINGAPORE — ALGORITHMIC TRANSPARENCY ─────────────────
  {
    id: 104,
    title: "Model AI Governance Framework",
    shortName: "Model AI Governance Framework",
    region: "sea", country: "singapore",
    regionLabel: "South & Southeast Asia", countryLabel: "Singapore",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "First published January 2019; second edition January 2020",
    overview: "Asia's most widely adopted AI governance framework and the reference model across ASEAN discussions. Developed by IMDA and the PDPC. Although not legally binding, it functions as an enforcement benchmark: the PDPC assesses organisations against its standards in investigations, and failure to implement its principles may constitute a PDPA failure where AI processes personal data. Voluntary in form, consequential in practice.",
    keyArticles: [
      { ref: "Four governance areas", text: "The framework covers internal governance structures and measures; determining the level of human involvement in AI-augmented decision-making; operations management; and stakeholder interaction and communication. Each area sets out practical measures scaled to organisational maturity." },
      { ref: "Human involvement matrix", text: "The framework's most practically useful element. Organisations classify decisions by probability and severity of harm, then determine whether a human should be in-the-loop (human decides, AI recommends), over-the-loop (human monitors and can intervene), or out-of-the-loop (fully automated). High-severity, high-probability contexts require human-in-the-loop." },
      { ref: "Internal governance", text: "Expects clear roles and responsibilities for AI governance, risk management procedures covering the AI lifecycle, and staff training. Larger organisations are expected to establish a dedicated coordinating body rather than distributing responsibility informally." },
      { ref: "Operations management", text: "Covers data quality and lineage, model selection and training, explainability, repeatability, robustness, and regular tuning. Organisations are expected to document data provenance and the rationale for model design choices." },
      { ref: "Stakeholder communication", text: "Expects disclosure of AI use in decisions affecting individuals, explanation of how AI influences outcomes, channels for feedback and review, and clear communication of the AI system's limitations." },
      { ref: "De facto binding status", text: "Alignment provides a practical safe harbour: it demonstrates how regulators expect AI to be governed, sector regulators including MAS reference it, and the PDPC assesses organisations against its standards during enforcement. Non-alignment where AI processes personal data may itself evidence a PDPA failure." }
    ],
    sources: [
      { label: "PDPC — Model AI Governance Framework", url: "https://www.pdpc.gov.sg/help-and-resources/2020/01/model-ai-governance-framework" },
      { label: "IMDA — AI Governance Resources", url: "https://www.imda.gov.sg/how-we-can-help/ai-governance" }
    ]
  },
  {
    id: 105,
    title: "Model AI Governance Frameworks for Generative and Agentic AI",
    shortName: "GenAI & Agentic AI Frameworks",
    region: "sea", country: "singapore",
    regionLabel: "South & Southeast Asia", countryLabel: "Singapore",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "Generative AI: May 2024; Agentic AI: January 2026",
    overview: "Two extensions to the Model Framework addressing newer AI architectures. The Generative AI framework covers nine dimensions of risk specific to large language models. The Agentic AI framework, launched January 2026 and described by IMDA as the world's first, addresses autonomous and semi-autonomous agents capable of independent action. No other jurisdiction in this repository has issued agentic AI governance guidance, placing Singapore roughly eighteen months ahead on that question.",
    keyArticles: [
      { ref: "Generative AI — nine dimensions", text: "Accountability; data quality and provenance; trusted development and deployment; incident reporting; testing and assurance; security; content provenance; safety and alignment research; and AI for public good. Together these address hallucination, bias, intellectual property, and systemic risk." },
      { ref: "Generative AI — content provenance", text: "Recommends technical provenance measures including watermarking and cryptographic provenance to help end-users identify AI-generated content. Notably, this is recommended rather than mandated — a contrast with China's GB 45438-2025, the EU's Article 50(2), and California's SB 942, all of which are binding." },
      { ref: "Agentic AI — four risk dimensions", text: "The January 2026 framework addresses risks distinctive to autonomous agents across four dimensions, including cascading failures where one agent's error propagates through a chain of agents, and unauthorised actions where an agent exceeds its intended scope of authority." },
      { ref: "Agentic AI — the authority problem", text: "The framework addresses how organisations should scope, constrain, and monitor the authority delegated to autonomous agents — including permission boundaries, escalation triggers, and audit trails for actions taken without human initiation." },
      { ref: "Living document status", text: "The Agentic AI framework is explicitly designed as a living document. IMDA actively invites feedback and case studies, and further iterations are anticipated as deployment experience accumulates." },
      { ref: "Practical significance", text: "For organisations building agentic systems, the January 2026 framework is currently the only structured governance reference available in any jurisdiction. Alignment with it is likely to become the default evidence of responsible practice internationally, as the original Model Framework did across ASEAN." }
    ],
    sources: [
      { label: "IMDA — Model AI Governance Framework for Generative AI", url: "https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/factsheets/2024/model-ai-governance-framework-for-generative-ai" },
      { label: "IMDA — AI Governance Resources", url: "https://www.imda.gov.sg/how-we-can-help/ai-governance" }
    ]
  },
  {
    id: 106,
    title: "MAS FEAT Principles and Binding Deepfake Provisions",
    shortName: "MAS FEAT & Deepfake Laws",
    region: "sea", country: "singapore",
    regionLabel: "South & Southeast Asia", countryLabel: "Singapore",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "FEAT: November 2018; Elections Amendment Act: 2024",
    overview: "Two distinct strands. The MAS FEAT Principles — Fairness, Ethics, Accountability and Transparency — were among the earliest sectoral AI principles issued anywhere and remain the foundational expectation for financial services AI in Singapore. Separately, Singapore has enacted binding deepfake provisions in the electoral context, with broader online harms legislation pending through the Online Safety Commission.",
    keyArticles: [
      { ref: "FEAT — Fairness", text: "Financial institutions should ensure AI-driven decisions do not systematically disadvantage individuals or groups unless justifiable, that data and models are regularly reviewed for accuracy and bias, and that personal attributes used in decisions are relevant to the outcome." },
      { ref: "FEAT — Ethics and Accountability", text: "AI use should be aligned with the institution's ethical standards and codes of conduct. Internal accountability must be clear, with approval authorities defined and management aware of AI-driven decisions. Third-party AI does not transfer accountability." },
      { ref: "FEAT — Transparency", text: "Institutions should be transparent about AI use with customers and regulators, providing clear information about how AI influences decisions and enabling meaningful customer interaction — including channels to enquire, request review, and provide feedback." },
      { ref: "Elections (Integrity of Online Advertising) Act 2024", text: "Prohibits publishing digitally generated or manipulated content that realistically misrepresents a candidate during an election period. Among the earliest binding deepfake provisions in any jurisdiction, with corrective directions and takedown powers." },
      { ref: "Online Safety (Relief and Accountability) Bill", text: "Provides administrative relief for victims of online harms, creates statutory causes of action, and enables mechanisms to identify wrongdoers. Covered harms are to expand progressively to include inauthentic material abuse such as deepfakes." },
      { ref: "Online Safety Commission", text: "The Bill is expected to become operational with the establishment of the Online Safety Commission in 2026, which will administer the relief mechanisms and issue directions to platforms and individuals." }
    ],
    sources: [
      { label: "MAS — FEAT Principles for AI and Data Analytics", url: "https://www.mas.gov.sg/publications/monographs-or-information-paper/2018/FEAT" },
      { label: "Singapore Statutes Online — Elections (Integrity of Online Advertising) Act", url: "https://sso.agc.gov.sg/" }
    ]
  },

  // ── SINGAPORE — LICENSING & CERTIFICATION ────────────────
  {
    id: 107,
    title: "AI Verify and the AI Tester Accreditation Programme",
    shortName: "AI Verify & AI TAP",
    region: "sea", country: "singapore",
    regionLabel: "South & Southeast Asia", countryLabel: "Singapore",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "AI Verify: 2022; AI TAP: launching Q3 2026",
    overview: "Singapore has built an assurance ecosystem rather than a licensing regime. AI Verify, launched by IMDA in 2022, is a testing and assurance framework allowing organisations to assess AI systems against recognised governance principles. The AI Tester Accreditation Programme, launching by Q3 2026 and reported to be the first of its kind in Asia, accredits the testers rather than licensing the systems — a design that scales differently from the notified body model.",
    keyArticles: [
      { ref: "AI Verify — process checks and technical tests", text: "Combines documentary process checks against governance principles with automated technical tests measuring fairness, explainability, and robustness. It generates a testing report rather than a certificate — the output is evidence, not approval." },
      { ref: "AI Verify Foundation", text: "Governance was transferred to the AI Verify Foundation, an open-source community with global membership. This positions the toolkit as international infrastructure rather than a national compliance instrument, and it has been shared with international counterparts as a potential global assessment standard." },
      { ref: "AI Tester Accreditation Programme (AI TAP)", text: "Launching by Q3 2026, reported as the first accreditation scheme of its kind in Asia. It accredits organisations providing AI testing services, establishing a recognised profession of qualified third-party assessors." },
      { ref: "Why the design matters", text: "Accrediting testers rather than licensing systems inverts the conformity assessment model. The EU's approach requires notified bodies to assess each high-risk system, and capacity constraints — only seven accredited bodies as of May 2026 — contributed to the deferral of its high-risk regime. An accredited-tester market scales with demand." },
      { ref: "Voluntary status", text: "Neither AI Verify use nor engagement of an accredited tester is legally required. Their weight comes from procurement expectations, investor diligence, and the likelihood that regulators treat independent testing as evidence of reasonable governance." },
      { ref: "International positioning", text: "Singapore is actively positioning itself as the AI governance standard-setter for Asia. AI Verify's international sharing and AI TAP's regional first-mover status are both elements of that strategy rather than purely domestic measures." }
    ],
    sources: [
      { label: "IMDA — AI Verify", url: "https://www.imda.gov.sg/how-we-can-help/ai-verify" },
      { label: "AI Verify Foundation", url: "https://aiverifyfoundation.sg/" }
    ]
  },
  {
    id: 108,
    title: "MAS AI Risk Management Guidelines and HSA Medical Device Registration",
    shortName: "MAS AI Guidelines & HSA SaMD",
    region: "sea", country: "singapore",
    regionLabel: "South & Southeast Asia", countryLabel: "Singapore",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "MAS Guidelines: final expected 2026; HSA registration ongoing",
    overview: "Singapore's two most consequential sectoral regimes. MAS consulted in November 2025 on formal AI Risk Management Guidelines for all financial institutions, going substantially beyond the FEAT principles — when issued these will be the most prescriptive binding AI instrument in Singapore. Separately, the Health Sciences Authority requires product registration on the Singapore Medical Device Register before supplying Software as a Medical Device.",
    keyArticles: [
      { ref: "MAS AI Risk Management Guidelines — scope", text: "Proposed in a November 2025 consultation paper applying to all MAS-regulated financial institutions. Consultation closed January 2026 with final guidelines expected during 2026. They extend well beyond FEAT into operational risk management territory." },
      { ref: "MAS Guidelines — proposed content", text: "Board and senior management oversight; maintaining an AI inventory; risk materiality assessment; lifecycle controls covering development, validation, deployment and monitoring; fairness and transparency requirements; human oversight; and third-party AI risk management." },
      { ref: "Comparison with HKMA SB-1", text: "The proposed Guidelines are directly comparable to the HKMA's Supervisory Policy Manual SB-1 on model risk management. Both impose lifecycle controls on financial institutions; Singapore's version is more explicitly AI-focused where SB-1 addresses models generally." },
      { ref: "HSA — Software as a Medical Device", text: "Software with a medical purpose requires registration on the Singapore Medical Device Register before supply, with risk-based classification from Class A through D. Higher classes require conformity assessment evidence, which may draw on approvals from reference regulators." },
      { ref: "HSA AI medical device guidance", text: "HSA issued dedicated regulatory guidelines for AI medical devices in 2022, covering lifecycle management, change control for continuously learning systems, and evidence expectations for algorithm performance and clinical validation." },
      { ref: "AI and Data Analytics Grant", text: "MAS co-funds financial institutions' AI adoption through the AIDA Grant under the Financial Sector Technology and Innovation Scheme, subject to governance and capability-building criteria — reflecting a philosophy of supporting responsible adoption rather than only constraining risk." }
    ],
    sources: [
      { label: "MAS — Consultation on AI Risk Management Guidelines", url: "https://www.mas.gov.sg/publications/consultations" },
      { label: "HSA — Medical Device Regulatory Guidelines", url: "https://www.hsa.gov.sg/medical-devices" }
    ]
  },

  // ── INDIA — DATA GOVERNANCE ──────────────────────────────
  {
    id: 109,
    title: "Digital Personal Data Protection Act 2023 and DPDP Rules 2025",
    shortName: "DPDP Act & Rules",
    region: "sea", country: "india",
    regionLabel: "South & Southeast Asia", countryLabel: "India",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "Act passed August 2023; Rules notified 2025; phased rollout to 2027",
    overview: "India's first comprehensive data protection statute. Its architecture differs meaningfully from GDPR-family laws — there is no sensitive personal data category, and it introduces Consent Managers as registered intermediaries through which individuals manage consent across organisations. Enforcement sits with the Data Protection Board of India, with penalties reaching INR 250 crore per breach. The Rules were notified in 2025 with a phased rollout running to 2027.",
    keyArticles: [
      { ref: "Key terminology", text: "The Act uses distinct terms: Data Principal for the individual; Data Fiduciary for the entity determining purpose and means; Data Processor for one processing on behalf of a Fiduciary; and Significant Data Fiduciary for a designated tier subject to additional obligations including Data Protection Impact Assessments, independent audits, and appointment of a resident Data Protection Officer." },
      { ref: "No sensitive personal data category", text: "Unlike the SPDI Rules 2011 it displaces, the DPDP Act creates no special category of sensitive personal data. All personal data is treated uniformly. This simplifies classification but removes the familiar risk-tiering tool used in most other jurisdictions to calibrate obligations." },
      { ref: "Consent and legitimate uses", text: "Processing requires either consent or a specified 'legitimate use' — including voluntary provision by the individual, State functions, medical emergencies, and employment purposes. Consent must be free, specific, informed, unconditional, and unambiguous, with a clear affirmative action." },
      { ref: "Consent Managers", text: "A registered intermediary through which Data Principals can give, manage, review, and withdraw consent across multiple Data Fiduciaries. Consent Managers must register with the Data Protection Board and meet prescribed technical and financial criteria. No equivalent mechanism exists in any other jurisdiction covered here." },
      { ref: "Data Principal rights", text: "Rights to access information about processing, correction and erasure, grievance redressal, and nomination of another individual to exercise rights in the event of death or incapacity. There is no right to data portability and no right to object to processing." },
      { ref: "Penalties", text: "Up to INR 250 crore per breach for failure to take reasonable security safeguards, with graduated amounts for other contraventions. Penalties are capped in absolute terms rather than linked to turnover, so exposure does not scale with company size." },
      { ref: "Transition from the IT Act framework", text: "The IT Act 2000 and SPDI Rules 2011 continue to apply during the phased rollout, particularly Section 43A on compensation for negligent handling of sensitive personal data and Section 72A on punishment for disclosure in breach of contract." },
      { ref: "Conflict with the IT Rules", text: "The DPDP Act requires minimal collection, limited retention, and purpose-bound use, while the IT Amendment Rules 2026 require extended retention and traceability for synthetic content. This conflict is unresolved and neither framework currently yields to the other." }
    ],
    sources: [
      { label: "MeitY — Digital Personal Data Protection Act 2023", url: "https://www.meity.gov.in/data-protection-framework" },
      { label: "India Code — DPDP Act 2023 Full Text", url: "https://www.indiacode.nic.in/handle/123456789/20123" }
    ]
  },

  // ── INDIA — CROSS-BORDER DATA FLOWS ──────────────────────
  {
    id: 110,
    title: "DPDP Section 16 and Sectoral Data Localisation",
    shortName: "DPDP s.16 & Localisation",
    region: "sea", country: "india",
    regionLabel: "South & Southeast Asia", countryLabel: "India",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "DPDP s.16 with Act rollout; RBI localisation since October 2018",
    overview: "India operates the inverse of the European model. Section 16 permits transfers to all countries except those the Central Government notifies as restricted — a blacklist rather than a whitelist — and no country has been notified as of mid-2026. But Section 16(2) preserves stricter sectoral requirements, and several are among the most restrictive anywhere. Assessment must begin with the sector, not with the data protection statute.",
    keyArticles: [
      { ref: "Section 16(1) — The blacklist model", text: "A Data Fiduciary may transfer personal data outside India except to a country or territory notified as restricted by the Central Government. There is no adequacy assessment, no standard contractual clauses, no transfer impact assessment, and no filing requirement. As of mid-2026 no country has been notified." },
      { ref: "Reversal from earlier drafts", text: "The blacklist approach was a deliberate policy reversal. Earlier draft bills, including the 2019 Personal Data Protection Bill, proposed whitelist models with adequacy assessments and localisation of sensitive data. The final Act abandoned this in favour of the permissive default." },
      { ref: "Section 16(2) — Sectoral override", text: "Nothing in Section 16 restricts the applicability of any other law providing a higher degree of protection or restriction on transfer. This preserves existing sectoral localisation mandates, which are considerably stricter than the general rule." },
      { ref: "RBI Payment Systems Data localisation", text: "The Reserve Bank's April 2018 directive requires all payment system data — including full end-to-end transaction details and customer information — to be stored on servers located in India. This is a hard localisation mandate rather than a transfer condition, and is the operative constraint for any fintech organisation." },
      { ref: "Insurance and telecom localisation", text: "IRDAI requires insurers to maintain policyholder records within India. Telecom licence conditions impose subscriber data localisation requirements on service providers. Both operate independently of the DPDP framework." },
      { ref: "Significant Data Fiduciary restrictions", text: "The DPDP Rules empower the Central Government to specify categories of personal data that a Significant Data Fiduciary must not transfer outside India, based on recommendations from a designated committee. This creates a mechanism for targeted localisation beyond the sectoral rules." },
      { ref: "Practical implication", text: "An organisation reasoning solely from the DPDP Act would conclude that transfers are essentially unrestricted. For regulated sectors that conclusion is wrong. The general rule is permissive; the sectoral overrides are among the strictest in this repository." }
    ],
    sources: [
      { label: "MeitY — Digital Personal Data Protection Act 2023", url: "https://www.meity.gov.in/data-protection-framework" },
      { label: "Reserve Bank of India — Storage of Payment System Data", url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx" }
    ]
  },

  // ── INDIA — ALGORITHMIC TRANSPARENCY ─────────────────────
  {
    id: 111,
    title: "IT Amendment Rules 2026 — Synthetically Generated Information",
    shortName: "IT Rules 2026 (SGI)",
    region: "sea", country: "india",
    regionLabel: "South & Southeast Asia", countryLabel: "India",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "Notified 10 February 2026; effective 20 February 2026",
    overview: "India's decisive move on AI content. Notified through Gazette Notification G.S.R. 120(E) amending the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021, this brought AI-generated content — legally termed synthetically generated information — within platform due diligence obligations for the first time. India's labelling requirement is the most prescriptive in the world, and enforcement operates through loss of safe harbour rather than monetary penalty.",
    keyArticles: [
      { ref: "Definition of SGI", text: "Synthetically generated information covers all content produced or altered using AI or similar technologies to create false representations. The definition is deliberately broad and technology-neutral, capturing image, audio, video, and text generation alike." },
      { ref: "Labelling — the 10% rule", text: "All SGI must carry clear and prominent labelling, visual or audio prefixed, together with permanent provenance metadata. Visual labels must cover at least 10% of the visual display area — the most prescriptive content labelling specification of any jurisdiction, exceeding even China's GB 45438-2025 in precision." },
      { ref: "Provenance metadata", text: "Permanent provenance metadata must be embedded and preserved through the content lifecycle. Platforms may not strip or alter metadata identifying content as synthetically generated." },
      { ref: "Takedown — 3 hours", text: "Upon receiving a court order or government notice, unlawful content must be removed or access disabled within 3 hours. This replaces the previous 36-hour window and is among the shortest compliance windows in any content regulation regime globally." },
      { ref: "Takedown — 2 hours for high-risk categories", text: "Non-consensual intimate imagery and deepfakes carry a stricter 2-hour removal window, reflecting the harm profile of these categories and the speed at which such content propagates." },
      { ref: "Safe harbour as the enforcement mechanism", text: "Missing the removal window results in immediate loss of safe harbour protection under Section 79 of the IT Act — exposing the platform to liability for all user content it hosts. This is categorically more severe than a fine and is existential for a platform business." },
      { ref: "Automated detection obligation", text: "Platforms must deploy automated detection tools for synthetic content rather than relying solely on user reporting. This is a technical capability requirement, not merely a process obligation." },
      { ref: "Draft Second Amendment Rules", text: "MeitY released the Draft IT Second Amendment Rules on 30 March 2026, which remain in consultation. They would expand direct blocking powers under Rule 3(4) and extend data retention beyond 180 days. These are draft — the SGI provisions above are operative law." }
    ],
    sources: [
      { label: "MeitY — IT Intermediary Guidelines and Digital Media Ethics Code Rules", url: "https://www.meity.gov.in/information-technology-intermediary-guidelines-and-digital-media-ethics-code-rules-2021" },
      { label: "India Briefing — Deepfake Corporate Liability Under the 2026 IT Rules", url: "https://www.india-briefing.com/news/deepfake-corporate-liability-india-2026-it-rules-44836.html" }
    ]
  },
  {
    id: 112,
    title: "India AI Governance Guidelines and the Automated Decision Gap",
    shortName: "India AI Guidelines",
    region: "sea", country: "india",
    regionLabel: "South & Southeast Asia", countryLabel: "India",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "Guidelines published November 2025 (voluntary)",
    overview: "MeitY's voluntary framework for responsible AI development and deployment, published November 2025. Alongside it sits a notable absence: India has no automated decision-making right. Unlike the EU, UK, or Australia, the DPDP Act confers no right to explanation, no right to human review, and no disclosure obligation for automated decisions affecting individuals. Transparency obligations attach to AI-generated content rather than to AI-driven decisions.",
    keyArticles: [
      { ref: "Status and scope", text: "The India AI Governance Guidelines are voluntary and non-binding, setting principles for responsible AI development and deployment across the system lifecycle. They are referenced by sectoral regulators but carry no independent legal force." },
      { ref: "No automated decision-making right", text: "The DPDP Act contains notice and consent obligations but confers no right to an explanation of an automated decision, no right to human review, and no right to contest. This is a material gap relative to the EU AI Act Article 86, UK GDPR Articles 22A–22D, and Australia's APP 1.7." },
      { ref: "Transparency attaches to content, not decisions", text: "India's binding transparency obligations concern synthetically generated content under the IT Rules. There is no corresponding obligation to disclose that an AI system was used to make a decision about an individual — an inversion of the pattern in most other jurisdictions." },
      { ref: "DPDP notice obligations", text: "Data Fiduciaries must provide notice of the personal data being processed and the purpose. Where AI processing is the purpose, this must be disclosed — but the obligation describes the processing rather than explaining any resulting decision." },
      { ref: "Digital India Act in consultation", text: "The Digital India Act, still under consultation, is expected to introduce risk-based platform classification and deeper AI-specific provisions, potentially replacing the IT Act 2000 framework entirely." },
      { ref: "Private Member's Bill on AI ethics", text: "A Private Member's Bill on AI ethics and accountability introduced in December 2025 signals parliamentary appetite for binding obligations on model developers rather than only on platforms. Private Member's Bills rarely pass, but they indicate direction of travel." }
    ],
    sources: [
      { label: "MeitY — India AI Governance Guidelines", url: "https://www.meity.gov.in/artificial-intelligence" },
      { label: "IndiaAI — Policy and Governance", url: "https://indiaai.gov.in/" }
    ]
  },

  // ── INDIA — LICENSING & CERTIFICATION ────────────────────
  {
    id: 113,
    title: "Sectoral AI Oversight — CDSCO, RBI FREE-AI and SEBI",
    shortName: "India Sectoral AI Oversight",
    region: "sea", country: "india",
    regionLabel: "South & Southeast Asia", countryLabel: "India",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "Ongoing; RBI FREE-AI Committee reported 2025",
    overview: "No AI-specific licensing or pre-market approval regime exists in India. Sectoral regulators apply existing frameworks, with the Reserve Bank and SEBI the most active. Medical AI faces the most defined pathway through CDSCO registration, though AI-specific guidance is less developed than Singapore's HSA or Australia's TGA. The Digital India Act, still in consultation, may reshape this landscape substantially.",
    keyArticles: [
      { ref: "No AI-specific authorisation", text: "Approval requirements attach to the regulated activity rather than to the technology. An AI product may be deployed in India without AI-specific government approval unless it falls within a regulated sector — consistent with the US, UK, and Australian approach." },
      { ref: "CDSCO — Software as a Medical Device", text: "AI qualifying as a medical device requires registration with the Central Drugs Standard Control Organisation under the Medical Devices Rules 2017, with risk-based classification from Class A through Class D. AI-specific technical guidance remains limited compared with more mature regimes." },
      { ref: "RBI FREE-AI Framework", text: "The Reserve Bank's Committee on Framework for Responsible and Ethical Enablement of AI reported in 2025, recommending governance obligations for financial institutions deploying AI — covering board oversight, model validation, explainability, and third-party risk. Implementation guidance is developing." },
      { ref: "SEBI disclosure requirements", text: "Market intermediaries must disclose their use of AI and machine learning applications, with periodic reporting on systems used in trading, advisory, and compliance functions. This is a disclosure regime rather than an approval requirement." },
      { ref: "IndiaAI Mission", text: "A funding and capacity programme rather than a regulatory instrument — providing compute access, supporting dataset development, and funding startups. It shapes the market without imposing obligations." },
      { ref: "Digital India Act", text: "Still in consultation. Expected to introduce risk-based platform classification and deeper AI-specific provisions, potentially replacing the IT Act 2000 framework. Organisations should expect the regulatory perimeter to widen rather than narrow." }
    ],
    sources: [
      { label: "CDSCO — Medical Device Regulation", url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/" },
      { label: "Reserve Bank of India — Reports and Publications", url: "https://www.rbi.org.in/Scripts/AnnualReportPublications.aspx" }
    ]
  },

  // ── SAUDI ARABIA — DATA GOVERNANCE ───────────────────────
  {
    id: 114,
    title: "Personal Data Protection Law (Royal Decree M/19)",
    shortName: "Saudi PDPL",
    region: "mena", country: "saudi_arabia",
    regionLabel: "MENA", countryLabel: "Saudi Arabia",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "Issued 2021, amended 2023; full enforcement from 14 September 2024",
    overview: "Saudi Arabia's comprehensive data protection statute, administered by SDAIA — uniquely, the same authority responsible for national AI strategy. SDAIA was created by Royal Order in August 2019 and reports directly to the Prime Minister. The PDPL differs structurally from GDPR-family laws in two respects that catch foreign organisations out: controller registration is an administrative precondition for processing, and data localisation is the default rather than the exception.",
    keyArticles: [
      { ref: "Controller registration", text: "Controllers must register on the National Data Governance Platform. This is a precondition for lawful processing with no equivalent in the EU, UK, or US frameworks — a GDPR Article 30 record of processing activities does not satisfy it, and there is no mutual recognition." },
      { ref: "Data localisation default", text: "Personal data must generally remain within the Kingdom. Transfer outside Saudi Arabia is permitted only under the conditions set by Article 29 and the Data Transfer Regulation — the inverse of the permissive default found in Australia, India, or the United States." },
      { ref: "Lawful basis", text: "Processing generally requires consent, with specified exceptions including where processing serves an actual interest of the data subject but contacting them is impossible or difficult, where required by another law, or where the controller is a public entity and processing is required for security or judicial purposes." },
      { ref: "Data subject rights", text: "Rights to be informed, to access personal data, to request a copy in a readable format, to request correction or completion, and to request destruction where the data is no longer needed. There is no right to object to processing and no right to explanation of automated decisions." },
      { ref: "Sensitive personal data", text: "The PDPL defines sensitive personal data to include ethnic origin, religious or intellectual belief, criminal convictions, biometric and genetic data identifying an individual, health data, and data indicating parentage. Higher protections and penalties apply." },
      { ref: "Penalties", text: "Up to SAR 5 million for unlawful disclosure of sensitive data, with imprisonment of up to two years for certain offences. Penalties may be doubled for repeat violations. Enforcement has been active since the September 2024 full enforcement date." },
      { ref: "NDMO standards and the National Data Index", text: "The National Data Management Office issues national data governance policies and data management standards, and operates the National Data Index assessing data management maturity among government entities. Public sector entities face materially stronger obligations." },
      { ref: "Link to AI governance", text: "SDAIA's AI Ethics Principles explicitly require entities to align with the PDPL for privacy matters and with National Cybersecurity Authority best practices for model security and incident response — tying the voluntary AI framework back to binding statutory obligations." }
    ],
    sources: [
      { label: "SDAIA — Laws, Regulations and Policies", url: "https://sdaia.gov.sa/en/SDAIA/about/Pages/RegulationsAndPolicies.aspx" },
      { label: "SDAIA — National Data Governance Platform", url: "https://sdaia.gov.sa/en/default.aspx" }
    ]
  },

  // ── SAUDI ARABIA — CROSS-BORDER DATA FLOWS ───────────────
  {
    id: 115,
    title: "PDPL Article 29 and the Data Transfer Regulation",
    shortName: "Saudi Transfer Regime",
    region: "mena", country: "saudi_arabia",
    regionLabel: "MENA", countryLabel: "Saudi Arabia",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "In force with PDPL enforcement from September 2024",
    overview: "One of the more restrictive transfer regimes in this repository, and the one most often underestimated. Data localisation is the default; transfers require an adequacy decision, prescribed safeguards, or a narrowly construed exception. The critical practical point is that none of the required instruments has a European analogue — EU standard contractual clauses cannot be substituted for SDAIA clauses, and GDPR compliance does not carry over.",
    keyArticles: [
      { ref: "Article 29 — Transfer conditions", text: "Personal data may be transferred outside the Kingdom only where SDAIA has issued an adequacy decision for the destination, where appropriate safeguards are in place, or where a specified exception applies. Exceptions are construed narrowly and cannot support routine commercial flows." },
      { ref: "SDAIA adequacy decisions", text: "SDAIA may determine that a destination country provides an adequate level of protection, permitting transfer without additional safeguards. The list of recognised destinations is limited, and organisations should not assume a jurisdiction with EU adequacy holds Saudi adequacy." },
      { ref: "SDAIA standard contractual clauses", text: "Where adequacy does not apply, SDAIA-issued standard contractual clauses are the primary safeguard mechanism. These are distinct instruments from the EU SCCs, the UK IDTA, or China's SCCs — none is interchangeable, and each must be executed separately." },
      { ref: "Binding common rules", text: "Corporate groups may rely on binding common rules for intragroup transfers, functionally analogous to EU Binding Corporate Rules but requiring separate approval under the Saudi framework." },
      { ref: "Transfer risk assessment", text: "A risk assessment is required before transfer where safeguards are relied upon, following SDAIA's prescribed methodology. This is analogous in function to the Schrems II Transfer Impact Assessment but is a separate exercise with its own criteria — an EU TIA does not satisfy it." },
      { ref: "The non-fungibility problem", text: "An organisation with mature GDPR and EU AI Act compliance still faces three Saudi-specific requirements with no European equivalent: controller registration, the SDAIA transfer risk assessment, and SDAIA-issued contractual clauses. Nothing carries over, and the reconciliation runs only one way." },
      { ref: "Sectoral localisation overlays", text: "Additional localisation requirements may apply through Saudi Central Bank rules for financial data and the Communications, Space and Technology Commission's Cloud Computing Regulatory Framework for infrastructure and hosting arrangements." }
    ],
    sources: [
      { label: "SDAIA — Laws, Regulations and Policies", url: "https://sdaia.gov.sa/en/SDAIA/about/Pages/RegulationsAndPolicies.aspx" },
      { label: "Vision 2030 AI — Saudi Arabia AI Regulation Analysis", url: "https://vision2030.ai/regulation/saudi-arabia-ai-regulation-sdaia/" }
    ]
  },

  // ── SAUDI ARABIA — ALGORITHMIC TRANSPARENCY ──────────────
  {
    id: 116,
    title: "SDAIA AI Ethics Principles and Generative AI Guidelines",
    shortName: "SDAIA AI Ethics Principles",
    region: "mena", country: "saudi_arabia",
    regionLabel: "MENA", countryLabel: "Saudi Arabia",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "AI Ethics Principles September 2023; Generative AI Guidelines 2024",
    overview: "Saudi Arabia's primary AI governance instrument, setting seven principles and a four-tier risk model. The Principles are not directly enforceable in their own right — but they are functionally binding through three indirect channels: PDPL liability where personal data is involved, sectoral regulator expectations, and procurement consequences for entities working with government. In a market where the state is the dominant technology buyer, procurement exclusion is the sharpest of the three.",
    keyArticles: [
      { ref: "Seven principles", text: "Fairness — avoiding bias and discrimination through data and model governance; Privacy and Security — PDPL compliance, data minimisation, strong security controls; Humanity — human dignity, oversight, and preventing uses undermining fundamental rights; Social and Environmental Benefits; Reliability and Safety; Transparency and Explainability; and Accountability and Responsibility." },
      { ref: "Transparency and explainability requirement", text: "Entities must document datasets, model design, and decision logic to the extent feasible and appropriate. The qualification matters — this is a proportionate documentation standard rather than an absolute disclosure duty, and leaves considerable interpretive latitude." },
      { ref: "Ethics impact assessments", text: "Required before deployment for higher-risk AI systems, similar in purpose to data protection impact assessments. Mandatory documentation and logging obligations also attach to higher-risk systems." },
      { ref: "Mandatory alignment requirements", text: "Entities must comply with the PDPL for all AI-related privacy matters and align AI system security and incident response with National Cybersecurity Authority best practices — including protection against adversarial attacks such as data poisoning and model inversion." },
      { ref: "Indirect enforceability", text: "The Principles are not directly enforceable. Compliance is established through three pathways: the binding PDPL where AI ethics violations involve personal data processing; sectoral regulators applying the principles within their authority; and procurement consequences for entities working with the Saudi government." },
      { ref: "Generative AI Guidelines (2024)", text: "Address risks associated with large language models including hallucinations, bias, and the creation of synthetic content, with separate practical guidance for government agencies and for the general public on interacting safely with generative systems." },
      { ref: "No automated decision-making right", text: "The PDPL confers no right to explanation or human review of automated decisions. Transparency obligations run to regulators and internal documentation rather than to affected individuals — a pattern shared with India and New Zealand." }
    ],
    sources: [
      { label: "SDAIA — AI Ethics Principles", url: "https://sdaia.gov.sa/en/SDAIA/about/Pages/RegulationsAndPolicies.aspx" },
      { label: "Regulations.AI — SDAIA AI Ethics Principles Analysis", url: "https://regulations.ai/regulations/RAI-SA-NA-PCAESXX-2023" }
    ]
  },
  {
    id: 117,
    title: "Draft Responsible AI Policy (2026 Consultation)",
    shortName: "Draft Responsible AI Policy",
    region: "mena", country: "saudi_arabia",
    regionLabel: "MENA", countryLabel: "Saudi Arabia",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "Consultation opened April 2026, closed May 2026; not yet finalised",
    overview: "The most significant recent development in Saudi AI governance, and a clear shift from broad ethics statements toward structured operational governance. SDAIA opened public consultation on a draft Responsible AI Policy in April 2026, establishing a four-tier risk framework with proportionate obligations. Structurally this resembles the EU AI Act — but delivered as policy under an existing authority rather than as primary legislation, which is a materially faster route to operational effect.",
    keyArticles: [
      { ref: "Status", text: "The draft was released for public consultation in April 2026, with consultation closing in May 2026. It has not been finalised and creates no obligations yet. It should be read as a strong signal of direction rather than as current law." },
      { ref: "Four risk tiers", text: "The draft categorises AI systems into four levels: critical, high, limited, and low risk. Each tier carries proportionate obligations around documentation, testing, monitoring, and compliance — structurally comparable to the EU AI Act's risk-based approach." },
      { ref: "Shift to operational governance", text: "The draft signals a move away from principle statements toward a compliance blueprint. Organisations developing or deploying AI in Saudi Arabia will need to treat responsible AI as a design requirement rather than a post-launch consideration." },
      { ref: "Cross-functional implication", text: "The draft makes clear that responsible AI cannot sit only with a legal or policy team. It requires product, engineering, compliance, and security functions to work from a shared framework — a governance model rather than a documentation exercise." },
      { ref: "Convergence with the PDPL and NCA controls", text: "AI governance in Saudi Arabia does not operate in isolation. The draft policy sits alongside the PDPL and National Cybersecurity Authority standards, and the three are increasingly converging. A single AI product may fall under all three simultaneously, plus sectoral rules from SAMA or the SFDA." },
      { ref: "Policy versus statute", text: "Delivering risk tiering through policy under an existing authority avoids the legislative timelines that led the EU to defer its high-risk regime to December 2027. Saudi Arabia may reach operational risk-based governance faster despite starting later." }
    ],
    sources: [
      { label: "SDAIA — Laws, Regulations and Policies", url: "https://sdaia.gov.sa/en/SDAIA/about/Pages/RegulationsAndPolicies.aspx" },
      { label: "Complyan — SDAIA and AI Governance in Saudi Arabia", url: "https://complyan.com/sdaia-and-ai-governance-in-saudi-arabia-building-responsible-ai-at-national-scale/" }
    ]
  },

  // ── SAUDI ARABIA — LICENSING & CERTIFICATION ─────────────
  {
    id: 118,
    title: "Registration, Procurement and Sectoral Oversight",
    shortName: "Saudi AI Gatekeeping",
    region: "mena", country: "saudi_arabia",
    regionLabel: "MENA", countryLabel: "Saudi Arabia",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "PDPL registration since September 2024; sectoral frameworks ongoing",
    overview: "No AI-specific licensing regime exists, but three mechanisms function as de facto gatekeeping and together are more restrictive than the absence of a statute suggests. PDPL controller registration is a precondition for processing; government procurement operates as the primary enforcement lever for AI ethics; and the National Data Governance Platform is the channel through which compliance is evidenced. SDAIA coordinates with sectoral regulators rather than displacing them.",
    keyArticles: [
      { ref: "PDPL controller registration", text: "Registration on the National Data Governance Platform is a precondition for lawful processing of personal data. Administratively this sits closer to a licence than anything in the EU or US frameworks, and it is the first practical gate any AI organisation must clear." },
      { ref: "Procurement as enforcement", text: "Government procurement is the primary enforcement lever for the AI Ethics Principles. Public entities face the strongest alignment expectations, and vendors failing ethics self-assessment face exclusion from a market where the state is the dominant technology buyer." },
      { ref: "National Data Governance Platform services", text: "The platform provides privacy impact assessment, self-assessment, breach notification, and AI ethics assessment services. Using these tools is how compliance is demonstrated rather than merely asserted — they function as the evidentiary record." },
      { ref: "SFDA — Medical devices", text: "The Saudi Food and Drug Authority regulates Software as a Medical Device, requiring registration before market placement. SDAIA coordinates with the Ministry of Health to ensure AI deployments in healthcare meet both general AI ethics and sector-specific safety standards." },
      { ref: "SAMA — Financial services", text: "The Saudi Central Bank sets AI governance expectations for financial institutions alongside its existing cybersecurity framework and outsourcing rules. SDAIA coordinates with SAMA rather than regulating financial sector AI directly." },
      { ref: "NCA cybersecurity controls", text: "The National Cybersecurity Authority issues Essential Cybersecurity Controls and Cloud Cybersecurity Controls, providing the security standards protecting AI models and training data from adversarial attacks including data poisoning and model inversion." },
      { ref: "CST Cloud Computing Regulatory Framework", text: "The Communications, Space and Technology Commission operates the cloud regulatory framework, directly relevant to AI infrastructure deployment, hosting arrangements, and where model training may lawfully occur." },
      { ref: "State capital as a market layer", text: "HUMAIN, launched as a PIF-owned company operating across the AI value chain, is a market-shaping actor rather than a regulator — state capital shaping the market alongside state regulation." }
    ],
    sources: [
      { label: "SDAIA — Regulations and Policies", url: "https://sdaia.gov.sa/en/SDAIA/about/Pages/RegulationsAndPolicies.aspx" },
      { label: "Vision 2030 AI — Saudi AI Ethics and Business Implications", url: "https://vision2030.ai/analysis/saudi-ai-ethics-principles-sdaia-governance-business-implications/" }
    ]
  },

  // ── UNITED ARAB EMIRATES — DATA GOVERNANCE ───────────────
  {
    id: 119,
    title: "Federal PDPL (Decree-Law 45/2021), DIFC and ADGM Regimes",
    shortName: "UAE PDPL / DIFC / ADGM",
    region: "mena", country: "uae",
    regionLabel: "MENA", countryLabel: "United Arab Emirates",
    theme: "data", themeLabel: "Data Governance",
    effectiveDate: "PDPL in force 2 January 2022; full compliance required 1 January 2027",
    overview: "Three separate legal systems operate inside one country. Federal mainland entities fall under the PDPL; DIFC entities under Data Protection Law No. 5 of 2020; ADGM entities under the Data Protection Regulations 2021. Federal PDPL does not apply inside the free zones. The defining practical problem is that the PDPL Executive Regulations remain unpublished after more than fifty months — the statutory principles bind, but the implementing detail does not exist.",
    keyArticles: [
      { ref: "Scope of the federal PDPL", text: "Applies to processing by controllers and processors established in the UAE mainland, and to certain extraterritorial processing relating to UAE data subjects. Expressly excludes processing carried out exclusively under the DIFC or ADGM regimes — establishment determines the applicable law, not customer location." },
      { ref: "The 1 January 2027 deadline", text: "Full PDPL compliance is required by 1 January 2027. This is the operative deadline for mainland entities and coincides with the full compliance date for the Child Digital Safety Law." },
      { ref: "Executive Regulations pending", text: "The PDPL Executive Regulations remain unpublished as of 2026, more than fifty months after the law entered force. Statutory principles bind today; only the operative detail awaits. Organisations must build to the principle and document their reasoning." },
      { ref: "DIFC Data Protection Law No. 5 of 2020", text: "Governs entities within the Dubai International Financial Centre, administered by its own Commissioner of Data Protection. GDPR-aligned in structure, with independent enforcement and its own transfer framework." },
      { ref: "ADGM Data Protection Regulations 2021", text: "Governs entities within Abu Dhabi Global Market. Also GDPR-aligned, but with no AI-specific overlay — making ADGM the lightest of the three regimes for AI purposes." },
      { ref: "Child Digital Safety Law (Decree-Law 26/2025)", text: "Took effect 1 January 2026 with full compliance required by 1 January 2027, following a one-year transition. Relevant to any AI service accessible to minors, alongside the PDPL's general obligations." },
      { ref: "Supporting federal instruments", text: "Federal Decree-Law No. 34 of 2021 on cybercrimes and the Healthcare ICT Law (2019) add further obligations. The Healthcare ICT Law is particularly significant because it imposes health data localisation independent of the PDPL." }
    ],
    sources: [
      { label: "UAE Legislation Portal — Federal Decree-Law No. 45 of 2021", url: "https://uaelegislation.gov.ae/en" },
      { label: "DIFC — Data Protection Law and Regulations", url: "https://www.difc.com/business/laws-and-regulations/data-protection" }
    ]
  },

  // ── UNITED ARAB EMIRATES — CROSS-BORDER ──────────────────
  {
    id: 120,
    title: "UAE Transfer Regimes and Healthcare Data Localisation",
    shortName: "UAE Transfer Regimes",
    region: "mena", country: "uae",
    regionLabel: "MENA", countryLabel: "United Arab Emirates",
    theme: "crossborder", themeLabel: "Cross-Border Data Flows",
    effectiveDate: "PDPL provisions in force; Executive Regulations pending",
    overview: "Three parallel transfer regimes match the three legal systems. The federal PDPL permits transfers to jurisdictions with adequate protection or subject to appropriate safeguards, though the adequacy list and clause templates await the unpublished Executive Regulations. DIFC and ADGM run independent GDPR Chapter V-style frameworks. The strictest requirement is sectoral: the Healthcare ICT Law imposes health data localisation regardless of which regime otherwise applies.",
    keyArticles: [
      { ref: "Federal PDPL transfer grounds", text: "Transfers are permitted to jurisdictions determined by the UAE Data Office to provide an adequate level of protection, or subject to appropriate safeguards including contractual clauses, binding corporate rules, or the data subject's explicit consent." },
      { ref: "Incomplete operative detail", text: "Because the Executive Regulations remain unpublished, the adequacy list and approved contractual clause templates are not finalised. Organisations must rely on contractual safeguards documented against the statutory principle rather than a prescribed template." },
      { ref: "Intra-country transfers between regimes", text: "A transfer from mainland UAE to a DIFC entity is treated as an international transfer under DIFC law. Moving data between group entities within the same country therefore triggers cross-border obligations — the most commonly overlooked exposure for UAE groups." },
      { ref: "DIFC transfer framework", text: "DIFC operates its own adequacy determinations, standard contractual clauses, and binding corporate rules mechanisms modelled on GDPR Chapter V, administered by the DIFC Commissioner of Data Protection." },
      { ref: "ADGM transfer framework", text: "ADGM's Data Protection Regulations 2021 apply an equivalent GDPR-aligned structure. Organisations operating across mainland, DIFC, and ADGM require three documented transfer positions rather than one." },
      { ref: "Healthcare ICT Law localisation", text: "Health data generated in the UAE must generally be stored within the country, with transfer abroad requiring specific approval. For medical AI this is the binding constraint rather than the PDPL, and it applies regardless of establishment location." },
      { ref: "Position on China and Hong Kong", text: "Neither Mainland China nor Hong Kong holds a UAE, DIFC, or ADGM adequacy determination. Transfers to either require contractual safeguards documented against whichever regime applies to the transferring entity." }
    ],
    sources: [
      { label: "UAE Legislation Portal — Data Protection", url: "https://uaelegislation.gov.ae/en" },
      { label: "DIFC — Data Protection Law and Regulations", url: "https://www.difc.com/business/laws-and-regulations/data-protection" }
    ]
  },

  // ── UNITED ARAB EMIRATES — ALGORITHMIC TRANSPARENCY ──────
  {
    id: 121,
    title: "PDPL Article 18 — Automated Decision-Making",
    shortName: "PDPL Article 18 (ADM)",
    region: "mena", country: "uae",
    regionLabel: "MENA", countryLabel: "United Arab Emirates",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "In force since 2 January 2022",
    overview: "The most significant and least recognised AI provision in the Gulf. Article 18 of the federal PDPL prohibits decisions made by automated processing that have legal consequences or seriously affect a data subject, absent consent, contractual necessity, or legislative authorisation. This is a functional analogue to GDPR Article 22 and has been binding for four years — meaning the UAE has had an automated decision-making restriction throughout the period it was commonly described as having no AI regulation.",
    keyArticles: [
      { ref: "The prohibition", text: "Decisions based on automated processing that produce legal consequences for the data subject, or seriously affect them, are prohibited unless one of the specified grounds applies: the data subject's consent, necessity for the conclusion or performance of a contract, or authorisation under applicable legislation." },
      { ref: "Comparative position", text: "This is stricter than India, Saudi Arabia, New Zealand, or Singapore, none of which confer any automated decision-making right. It is closer to the original UK GDPR Article 22 than to the reformed permissive version — the UAE did not follow the UK's 2026 liberalisation." },
      { ref: "Interaction with the missing Executive Regulations", text: "Article 18 binds today, but the Executive Regulations that would clarify what constitutes a decision that 'seriously affects' a data subject remain unpublished. Organisations must interpret the threshold themselves and document their reasoning." },
      { ref: "Profiling and risk assessment", text: "The PDPL pushes organisations toward governance mechanisms including Data Protection Officer involvement and risk assessment in higher-risk processing scenarios, expressly including profiling and automated processing contexts." },
      { ref: "Practical scope for AI systems", text: "Any AI system making or materially determining decisions about individuals in the UAE mainland — credit scoring, recruitment screening, insurance underwriting, eligibility determinations — engages Article 18 and requires one of the three grounds to be established and documented." },
      { ref: "Free zone position", text: "Article 18 applies to mainland entities. DIFC and ADGM entities are subject to their own regimes, both of which contain GDPR-aligned automated decision provisions — so the restriction exists across all three systems, though the precise wording differs." }
    ],
    sources: [
      { label: "UAE Legislation Portal — Federal Decree-Law No. 45 of 2021", url: "https://uaelegislation.gov.ae/en" },
      { label: "AskAjay — UAE PDPL as De Facto AI Law", url: "https://askajay.ai/thinking/uae-pdpl-de-facto-ai-law" }
    ]
  },
  {
    id: 122,
    title: "DIFC Regulation 10, UAE AI Charter and CBUAE Guidance",
    shortName: "DIFC Reg 10 & AI Charter",
    region: "mena", country: "uae",
    regionLabel: "MENA", countryLabel: "United Arab Emirates",
    theme: "transparency", themeLabel: "Algorithmic Transparency",
    effectiveDate: "DIFC Regulation 10 full enforcement January 2026; UAE AI Charter June 2024",
    overview: "DIFC Regulation 10 on autonomous and semi-autonomous systems is one of very few binding AI-specific regulations anywhere outside China and the EU. In full enforcement since January 2026, it applies within DIFC regardless of sector. Alongside it sit the non-binding UAE Charter for AI and the Central Bank's February 2026 Guidance Note for licensed financial institutions — creating three distinct layers of transparency expectation depending on establishment and sector.",
    keyArticles: [
      { ref: "DIFC Regulation 10 — scope", text: "Governs autonomous and semi-autonomous systems processing personal data within the Dubai International Financial Centre. It reached full enforcement in January 2026 and applies regardless of sector, making DIFC one of the few jurisdictions where binding AI-specific regulation can be accessed by choice of incorporation." },
      { ref: "Regulation 10 — core obligations", text: "Imposes accountability, transparency, human oversight, and lawful basis requirements on operators of autonomous and semi-autonomous systems. Operators must be able to explain system behaviour and demonstrate that meaningful human oversight exists." },
      { ref: "ADGM has no AI overlay", text: "By contrast, ADGM's Data Protection Regulations 2021 contain no AI-specific provisions. An organisation choosing between mainland, DIFC, and ADGM establishment is choosing between three materially different AI compliance burdens within one country." },
      { ref: "UAE Charter for AI (June 2024)", text: "Sets twelve ethical principles including safety, transparency, and human oversight. Explicitly non-binding, but it shapes regulator expectations and informs procurement standards across federal entities." },
      { ref: "CBUAE Guidance Note on AI/ML", text: "Issued 11 February 2026, applying to all licensed financial institutions including banks, insurance providers, exchange houses, and payment service providers. Covers governance, bias testing, transparency, and human oversight." },
      { ref: "CBUAE — supervisory weight", text: "Published in the official CBUAE Rulebook, the Guidance Note carries strong supervisory expectation despite using permissive language. Financial institutions should treat it as an examination standard rather than optional guidance." },
      { ref: "UAE Strategy for AI 2031", text: "A national vision rather than law. It creates no obligations but shapes government adoption and procurement expectations, and provides the policy context within which the binding instruments operate." }
    ],
    sources: [
      { label: "DIFC — Laws and Regulations", url: "https://www.difc.com/business/laws-and-regulations" },
      { label: "Central Bank of the UAE — Rulebook", url: "https://rulebook.centralbank.ae/" }
    ]
  },

  // ── UNITED ARAB EMIRATES — LICENSING & CERTIFICATION ─────
  {
    id: 123,
    title: "UAE Sectoral Licensing Across Three Jurisdictions",
    shortName: "UAE Sectoral Licensing",
    region: "mena", country: "uae",
    regionLabel: "MENA", countryLabel: "United Arab Emirates",
    theme: "licensing", themeLabel: "Licensing & Certification",
    effectiveDate: "Central Bank Law 6/2025 effective 16 September 2025; sectoral frameworks ongoing",
    overview: "No AI-specific licensing regime exists at federal level. Approval requirements attach to the regulated activity, and which regulator applies depends on whether the entity is established onshore, in DIFC, or in ADGM. Financial services were consolidated federally under Decree-Law No. 6 of 2025, though DIFC and ADGM retain independent financial regulators. Healthcare AI faces registration from three separate emirate-level authorities plus federal data localisation.",
    keyArticles: [
      { ref: "No AI-specific authorisation", text: "There is no AI licence, filing, or pre-market approval at federal level. Requirements attach to the regulated activity rather than the technology, consistent with the US, UK, and Australian approach — but complicated by the three-jurisdiction structure." },
      { ref: "Federal Decree-Law No. 6 of 2025", text: "Effective 16 September 2025, consolidating regulation of banks, finance companies, payment service providers, insurers, and critical service providers under the Central Bank. Entities subject to it were required to reconcile their positions within one year of entry into force." },
      { ref: "Three financial regulators in parallel", text: "The Central Bank regulates mainland entities; the Dubai Financial Services Authority regulates DIFC; the Financial Services Regulatory Authority regulates ADGM. Each applies its own AI governance expectations, and a group operating across all three requires three compliance positions." },
      { ref: "Virtual asset activity", text: "Decree-Law No. 6 of 2025 expressly includes payment services using virtual assets and stored value services among licensed financial activities. Virtual asset activity outside that perimeter remains subject to other legislation and competent regulators, with DIFC and ADGM operating detailed separate regimes." },
      { ref: "Healthcare registration", text: "AI-enabled medical software requires registration through the Dubai Health Authority, the Ministry of Health and Prevention, or the Department of Health Abu Dhabi depending on location, with the Healthcare ICT Law adding data localisation obligations on top." },
      { ref: "Abu Dhabi AIATC", text: "The Abu Dhabi AI and Advanced Technology Council operates its own governance framework for AI within the emirate — effectively a fourth layer beyond the three legal systems, relevant to entities operating in Abu Dhabi outside ADGM." },
      { ref: "Functional outcomes determine scope", text: "Regulatory perimeter is determined by what a service actually does rather than how it is labelled. Organisations should map services, products, data flows, and entities against applicable federal, emirate, DIFC, and ADGM regimes rather than assuming a single classification applies." },
      { ref: "National AI System in Cabinet", text: "In January 2026 the UAE became the first country to appoint a National AI System as an advisory member of the Cabinet, providing real-time policy analysis across federal entities. A governance innovation rather than a regulatory instrument, but it signals institutional direction." }
    ],
    sources: [
      { label: "Central Bank of the UAE — Rulebook and Legislation", url: "https://rulebook.centralbank.ae/" },
      { label: "UAE Legislation Portal", url: "https://uaelegislation.gov.ae/en" }
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
  // Prefer a country-specific overview where one exists (e.g. australia_data),
  // otherwise fall back to the region-level overview (e.g. anz_data).
  let overviewKey = null;
  if (activeTheme) {
    const countryKey = country ? `${country}_${activeTheme}` : null;
    const regionKey  = region  ? `${region}_${activeTheme}`  : null;
    if (countryKey && topicOverviews[countryKey])      overviewKey = countryKey;
    else if (regionKey && topicOverviews[regionKey])   overviewKey = regionKey;
  }
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
  document.getElementById('repository').scrollIntoView({ behavior: 'smooth' });
});

renderTiles(regulations);

// ════════════════════════════════════════════════════════════
// PORTOLAN ASSISTANT
// A client-side retrieval assistant. It does not generate text —
// it searches the regulation database and surfaces the sourced
// entries that answer the question. No API key, no server.
// ════════════════════════════════════════════════════════════

// Words too common to be useful for matching
const STOPWORDS = new Set([
  'a','an','the','is','are','was','were','be','been','being','do','does','did',
  'what','which','who','whom','whose','when','where','why','how','can','could',
  'should','would','will','shall','may','might','must','need','to','of','in','on',
  'at','by','for','with','about','against','between','into','through','during',
  'and','or','but','if','then','than','so','as','it','its','this','that','these',
  'those','i','you','we','they','my','our','your','their','me','us','them','there',
  'here','have','has','had','am','get','got','tell','show','find','know','about'
]);

// Maps everyday phrasing onto the region keys used in the database
const REGION_SYNONYMS = {
  china:        ['china','chinese','prc','mainland','beijing','shenzhen','cac'],
  hongkong:     ['hong kong','hongkong','hk','pcpd','sar'],
  northamerica: ['us','usa','united states','america','american','federal','california','texas','illinois','colorado','new york','nyc','canada'],
  eu:           ['eu','europe','european','european union','brussels','gdpr'],
  uk:           ['uk','united kingdom','britain','british','england','ico'],
  mena:         ['mena','middle east','gulf','saudi','saudi arabia','ksa','uae','emirates','dubai','abu dhabi','difc','adgm'],
  sea:          ['singapore','india','indian','asean','southeast asia','south asia','imda','pdpc'],
  anz:          ['australia','australian','new zealand','nz','anz','oaic','kiwi']
};

// Maps everyday phrasing onto theme keys
const THEME_SYNONYMS = {
  data:         ['data governance','personal data','privacy','data protection','consent','collection','retention','storage','breach','pii'],
  crossborder:  ['cross border','cross-border','transfer','transfers','international','overseas','export','localisation','localization','adequacy','scc','offshore'],
  transparency: ['transparency','explainability','explainable','disclosure','labelling','labeling','watermark','deepfake','automated decision','adm','explanation','synthetic'],
  licensing:    ['licence','license','licensing','certification','approval','registration','filing','conformity','pre-market','premarket','audit','accreditation']
};

function tokenize(text) {
  return String(text).toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 2 && !STOPWORDS.has(t));
}

// Detect which region and theme (if any) the question is about.
// Uses word boundaries so short terms like "us" don't match inside "must".
function hasTerm(text, term) {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').trim();
  return new RegExp('\\b' + escaped + '\\b', 'i').test(text);
}

function detectContext(query) {
  const q = query.toLowerCase();
  let region = null, theme = null, country = null;

  for (const [key, terms] of Object.entries(REGION_SYNONYMS)) {
    if (terms.some(t => hasTerm(q, t))) { region = key; break; }
  }
  for (const [key, terms] of Object.entries(THEME_SYNONYMS)) {
    if (terms.some(t => hasTerm(q, t))) { theme = key; break; }
  }

  const countryHints = {
    china:        ['china','chinese','prc','cac','pipl','dsl'],
    hongkong:     ['hong kong','hongkong','hk','pcpd','pdpo','sfc','hkma'],
    usa:          ['us','usa','united states','america','american','california','texas','illinois','colorado','fda','ftc','ccpa','hipaa'],
    eu_general:   ['eu','european union','gdpr','ai act','brussels'],
    uk:           ['uk','united kingdom','britain','british','ico','fca','mhra'],
    saudi_arabia: ['saudi','ksa','sdaia','pdpl'],
    uae:          ['uae','emirates','dubai','abu dhabi','difc','adgm'],
    singapore:    ['singapore','imda','pdpc','mas'],
    india:        ['india','indian','meity','dpdp','rbi','sebi'],
    australia:    ['australia','australian','oaic','apra','tga'],
    newzealand:   ['new zealand','nz','opc','medsafe']
  };
  for (const [key, terms] of Object.entries(countryHints)) {
    if (terms.some(t => hasTerm(q, t))) { country = key; break; }
  }

  // Keep region and country consistent with each other
  const countryToRegion = {
    china:'china', hongkong:'hongkong', usa:'northamerica', eu_general:'eu',
    uk:'uk', saudi_arabia:'mena', uae:'mena',
    singapore:'sea', india:'sea', australia:'anz', newzealand:'anz'
  };
  if (country) region = countryToRegion[country];

  return { region, theme, country };
}

// Score every regulation against the query
function scoreRegulations(query) {
  const tokens = tokenize(query);
  if (!tokens.length) return [];
  const ctx = detectContext(query);
  const qLower = query.toLowerCase();

  return regulations.map(reg => {
    let score = 0;
    let bestArticle = null, bestArticleScore = 0;

    const shortLower = reg.shortName.toLowerCase();
    const titleLower = reg.title.toLowerCase();

    // Exact short-name or title phrase match is the strongest signal
    if (qLower.includes(shortLower) && shortLower.length > 3) score += 30;
    if (qLower.includes(titleLower) && titleLower.length > 8) score += 30;

    tokens.forEach(t => {
      if (shortLower.includes(t)) score += 12;
      if (titleLower.includes(t)) score += 8;
      if (reg.overview.toLowerCase().includes(t)) score += 3;
      if (reg.countryLabel.toLowerCase().includes(t)) score += 5;
      if (reg.themeLabel.toLowerCase().includes(t)) score += 4;
    });

    // Find the single most relevant article within this regulation
    reg.keyArticles.forEach(a => {
      let aScore = 0;
      const refL = a.ref.toLowerCase(), textL = a.text.toLowerCase();
      tokens.forEach(t => {
        if (refL.includes(t))  aScore += 5;
        if (textL.includes(t)) aScore += 2;
      });
      if (aScore > bestArticleScore) { bestArticleScore = aScore; bestArticle = a; }
      score += Math.min(aScore, 10);   // cap so one article can't dominate
    });

    // Context boosts
    if (ctx.region  && reg.region  === ctx.region)  score += 15;
    if (ctx.country && reg.country === ctx.country) score += 20;
    if (ctx.theme   && reg.theme   === ctx.theme)   score += 15;

    return { reg, score, bestArticle };
  })
  .filter(r => r.score > 8)
  .sort((a, b) => b.score - a.score);
}

// Build the assistant's reply
function buildAnswer(query) {
  const ctx = detectContext(query);
  const results = scoreRegulations(query);

  if (!results.length) {
    return `<p class="pa-none">I couldn't find anything matching that. Try naming a jurisdiction and a topic — for example <em>"cross-border transfers from China"</em> or <em>"who needs a licence in the EU"</em>.</p>`;
  }

  let html = '';

  // Lead with the topic overview when the question maps to one
  const ovKey = (ctx.country && ctx.theme && topicOverviews[`${ctx.country}_${ctx.theme}`])
    ? `${ctx.country}_${ctx.theme}`
    : (ctx.region && ctx.theme && topicOverviews[`${ctx.region}_${ctx.theme}`])
      ? `${ctx.region}_${ctx.theme}` : null;

  if (ovKey) {
    const ov = topicOverviews[ovKey];
    html += `
      <div class="pa-overview">
        <p class="pa-ov-label">Overview</p>
        <p class="pa-ov-title">${ov.title}</p>
        <p class="pa-ov-text">${ov.intro}</p>
        <ul class="pa-ov-points">
          ${ov.keyPoints.slice(0, 3).map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>`;
  }

  // Then the most relevant regulations
  const top = results.slice(0, ovKey ? 3 : 4);
  html += `<p class="pa-lead">${ovKey ? 'Most relevant regulations' : `Found ${results.length} relevant ${results.length === 1 ? 'entry' : 'entries'}`}</p>`;
  html += '<div class="pa-results">';
  top.forEach(({ reg, bestArticle }) => {
    const tc = themeConfig[reg.theme];
    html += `
      <button class="pa-card" onclick="openModal(${reg.id}); closeAssistant();">
        <div class="pa-card-top">
          <span class="pa-badge">${reg.shortName}</span>
          <span class="pa-juris">${reg.countryLabel}</span>
        </div>
        <span class="pa-card-title">${reg.title}</span>
        ${bestArticle ? `<span class="pa-snippet"><strong>${bestArticle.ref}</strong> — ${bestArticle.text.slice(0, 190)}${bestArticle.text.length > 190 ? '…' : ''}</span>` : ''}
        <span class="pa-open">Open full entry →</span>
      </button>`;
  });
  html += '</div>';

  if (results.length > top.length) {
    html += `<p class="pa-more">${results.length - top.length} further ${results.length - top.length === 1 ? 'entry' : 'entries'} matched. Narrow the question or use the filters to see them all.</p>`;
  }

  html += `<p class="pa-disclaim">Portolan surfaces sourced entries — it does not generate legal advice. Always check the primary sources linked in each entry.</p>`;
  return html;
}

// ── UI wiring ───────────────────────────────────────────────
function openAssistant() {
  document.getElementById('pa-panel').classList.add('open');
  document.getElementById('pa-launcher').classList.add('hidden');
  setTimeout(() => document.getElementById('pa-input').focus(), 120);
}
function closeAssistant() {
  document.getElementById('pa-panel').classList.remove('open');
  document.getElementById('pa-launcher').classList.remove('hidden');
}
function askAssistant(preset) {
  const input = document.getElementById('pa-input');
  const query = (preset !== undefined ? preset : input.value).trim();
  if (!query) return;
  const log = document.getElementById('pa-log');

  log.insertAdjacentHTML('beforeend', `<div class="pa-msg pa-user">${query}</div>`);
  log.insertAdjacentHTML('beforeend', `<div class="pa-msg pa-bot">${buildAnswer(query)}</div>`);

  input.value = '';
  log.scrollTop = log.scrollHeight;
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('pa-input');
  if (input) {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); askAssistant(); }
    });
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAssistant();
  });
});