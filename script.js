/* ════════════════════════════════════════════════════════════
   DESIGN TOKENS
   ════════════════════════════════════════════════════════════ */
:root {
  --blue:        #2563EB;
  --blue-mid:    #3B82F6;
  --blue-light:  #DBEAFE;
  --blue-xlight: #EFF6FF;
  --ink:         #0F172A;
  --ink-mid:     #334155;
  --ink-light:   #64748B;
  --rule:        #E2E8F0;
  --surface:     #F8FAFC;
  --white:       #FFFFFF;

  /* Theme colours */
  --c-data:         #0369A1; --c-data-bg:         #E0F2FE;
  --c-crossborder:  #6D28D9; --c-crossborder-bg:  #EDE9FE;
  --c-transparency: #0F766E; --c-transparency-bg: #CCFBF1;
  --c-licensing:    #B45309; --c-licensing-bg:    #FEF3C7;

  --font-display: 'DM Serif Display', Georgia, serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --radius:       10px;
  --radius-sm:    6px;
  --shadow:       0 1px 4px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06);
  --shadow-lg:    0 8px 32px rgba(0,0,0,0.14);

  --sidebar-w: 280px;
  --header-h:  56px;
}

/* ════════════════════════════════════════════════════════════
   RESET
   ════════════════════════════════════════════════════════════ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  color: var(--ink-mid);
  background: var(--surface);
  line-height: 1.6;
}
a { color: inherit; text-decoration: none; }
button { cursor: pointer; font-family: var(--font-body); }
select, input { font-family: var(--font-body); }

/* ════════════════════════════════════════════════════════════
   STICKY HEADER
   ════════════════════════════════════════════════════════════ */
.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--header-h);
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--rule);
  z-index: 300;
  display: flex;
  align-items: center;
}
.header-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--ink);
}
.logo-hsitp { letter-spacing: 0.04em; }
.logo-pill {
  background: var(--blue);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 4px;
  letter-spacing: 0.05em;
}
.logo-rest { color: var(--ink-light); font-weight: 500; }
.header-nav { display: flex; gap: 24px; }
.nav-link {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--ink-light);
  transition: color 0.15s;
}
.nav-link:hover { color: var(--blue); }

/* ════════════════════════════════════════════════════════════
   WELCOME PAGE
   Fills exactly the viewport. Ambient words float in background.
   ════════════════════════════════════════════════════════════ */
.welcome {
  min-height: 100vh;
  /* Deep navy → rich blue gradient — distinct from generic tech blues */
  background: linear-gradient(145deg, #0A1628 0%, #0F2D5E 45%, #1A4B8C 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: var(--header-h);
}

/* Ambient background words — signature design element */
.ambient-words {
  position: absolute;
  inset: 0;
  pointer-events: none;
  user-select: none;
}
.aw {
  position: absolute;
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 5rem);
  color: rgba(255,255,255,0.04);
  font-style: italic;
  white-space: nowrap;
  /* Each word placed manually for a deliberate, non-scattered feel */
}
.aw-1  { top:  8%; left:  5%; font-size: 6rem; }
.aw-2  { top: 15%; right: 8%; font-size: 9rem; }
.aw-3  { top: 38%; left:  2%; font-size: 4rem; }
.aw-4  { top: 60%; left: 12%; font-size: 7rem; }
.aw-5  { top: 72%; right: 5%; font-size: 5rem; }
.aw-6  { top: 25%; left: 35%; font-size: 3.5rem; opacity: 0.03; }
.aw-7  { top: 80%; left: 40%; font-size: 4.5rem; }
.aw-8  { top:  5%; left: 55%; font-size: 3rem; }
.aw-9  { top: 48%; right: 3%; font-size: 8rem; }
.aw-10 { top: 85%; left:  2%; font-size: 3.5rem; }
.aw-11 { top: 30%; right: 22%; font-size: 5rem; }
.aw-12 { top: 65%; right: 28%; font-size: 3rem; }

.welcome-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 720px;
  padding: 40px 32px;
}
.welcome-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  margin-bottom: 20px;
}
.welcome-title {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 5vw, 4.2rem);
  font-weight: 400;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}
.welcome-title em {
  font-style: italic;
  /* Slight gold tint on the italic line — warm contrast against the blue */
  color: #93C5FD;
}
.welcome-sub {
  font-size: 1rem;
  color: rgba(255,255,255,0.7);
  max-width: 540px;
  margin: 0 auto 32px;
  line-height: 1.7;
}
.welcome-meta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
}
.meta-chip {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 999px;
  padding: 5px 16px;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.85);
}
.meta-chip strong { color: #fff; }

.btn-explore {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--blue);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 999px;
  border: none;
  transition: background 0.2s, transform 0.2s;
  cursor: pointer;
}
.btn-explore:hover { background: var(--blue-mid); transform: translateY(-1px); }
.btn-arrow {
  font-size: 1.1rem;
  animation: bounce 2s ease-in-out infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(4px); }
}

.scroll-hint {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.3);
}

/* ════════════════════════════════════════════════════════════
   ABOUT STRIP
   ════════════════════════════════════════════════════════════ */
.about-strip {
  background: var(--ink);
  padding: 48px 32px;
}
.about-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.about-col h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 10px;
  font-weight: 400;
}
.about-col p {
  font-size: 0.87rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.7;
}

/* ════════════════════════════════════════════════════════════
   PLATFORM — SIDEBAR + RESULTS LAYOUT
   ════════════════════════════════════════════════════════════ */
.platform {
  display: flex;
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 48px;
  gap: 0;
  align-items: flex-start;
}

/* ── SIDEBAR ───────────────────────────────────────────────  */
.sidebar {
  width: var(--sidebar-w);
  flex-shrink: 0;
  /* Sticks as user scrolls through results */
  position: sticky;
  top: calc(var(--header-h) + 24px);
  max-height: calc(100vh - var(--header-h) - 48px);
  overflow-y: auto;
  padding: 0 0 40px 32px;
}
/* Thin custom scrollbar on sidebar */
.sidebar::-webkit-scrollbar { width: 4px; }
.sidebar::-webkit-scrollbar-thumb { background: var(--rule); border-radius: 2px; }

.sidebar-inner {
  background: var(--white);
  border-radius: var(--radius);
  border: 1px solid var(--rule);
  padding: 24px;
  box-shadow: var(--shadow);
}
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--rule);
}
.sidebar-title {
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink);
}
.btn-clear-all {
  font-size: 0.75rem;
  color: var(--blue);
  background: none;
  border: none;
  font-weight: 600;
  padding: 0;
}
.btn-clear-all:hover { text-decoration: underline; }

.filter-block { margin-bottom: 20px; }
.filter-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--ink-light);
  margin-bottom: 8px;
}
.search-wrap { position: relative; }
.filter-input {
  width: 100%;
  padding: 9px 12px 9px 36px;
  border: 1.5px solid var(--rule);
  border-radius: var(--radius-sm);
  font-size: 0.87rem;
  color: var(--ink);
  background: var(--surface);
  transition: border-color 0.15s;
}
.filter-input:focus { outline: none; border-color: var(--blue); }
.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.1rem;
  color: var(--ink-light);
  pointer-events: none;
}
.filter-select {
  width: 100%;
  padding: 9px 12px;
  border: 1.5px solid var(--rule);
  border-radius: var(--radius-sm);
  font-size: 0.87rem;
  color: var(--ink);
  background: var(--surface);
  appearance: none;
  /* Custom caret */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2364748B' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  cursor: pointer;
  transition: border-color 0.15s;
}
.filter-select:focus { outline: none; border-color: var(--blue); }

/* Theme pills — each theme gets its own coloured pill */
.theme-pills {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.theme-pill {
  text-align: left;
  padding: 7px 12px;
  border-radius: var(--radius-sm);
  border: 1.5px solid var(--rule);
  background: var(--white);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--ink-mid);
  transition: all 0.15s;
}
.theme-pill:hover { border-color: var(--blue); color: var(--blue); }
.theme-pill.active {
  background: var(--blue-xlight);
  border-color: var(--blue-light);
  color: var(--blue);
  font-weight: 600;
}
/* Theme-specific active colours */
.theme-pill[data-theme="data"].active         { background: var(--c-data-bg);         border-color: #BAE6FD; color: var(--c-data); }
.theme-pill[data-theme="crossborder"].active   { background: var(--c-crossborder-bg);   border-color: #C4B5FD; color: var(--c-crossborder); }
.theme-pill[data-theme="transparency"].active  { background: var(--c-transparency-bg);  border-color: #99F6E4; color: var(--c-transparency); }
.theme-pill[data-theme="licensing"].active     { background: var(--c-licensing-bg);     border-color: #FDE68A; color: var(--c-licensing); }

.btn-apply {
  width: 100%;
  padding: 10px 0;
  background: var(--blue);
  color: #fff;
  border: none;
  border-radius: var(--radius-sm);
  font-size: 0.88rem;
  font-weight: 600;
  transition: background 0.15s;
  margin-top: 4px;
}
.btn-apply:hover { background: var(--blue-mid); }

/* ── RESULTS AREA ──────────────────────────────────────────  */
.results-area {
  flex: 1;
  min-width: 0;
  padding: 0 32px 60px;
}
.results-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--rule);
}
.results-count {
  font-size: 0.85rem;
  color: var(--ink-light);
  font-weight: 500;
}
.sort-wrap { display: flex; align-items: center; gap: 8px; }
.sort-label { font-size: 0.8rem; color: var(--ink-light); }
.sort-select {
  padding: 5px 28px 5px 10px;
  border: 1.5px solid var(--rule);
  border-radius: var(--radius-sm);
  font-size: 0.82rem;
  color: var(--ink);
  background: var(--white);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%2364748B' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  cursor: pointer;
}
.sort-select:focus { outline: none; }

/* Active filter tags */
.active-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
  min-height: 0;
}
.active-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--blue-xlight);
  border: 1px solid var(--blue-light);
  border-radius: 999px;
  padding: 3px 10px 3px 12px;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--blue);
}
.tag-remove {
  background: none;
  border: none;
  color: var(--blue);
  font-size: 1rem;
  line-height: 1;
  padding: 0;
  opacity: 0.7;
}
.tag-remove:hover { opacity: 1; }

/* ── CARDS GRID ────────────────────────────────────────────  */
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 18px;
}

.reg-card {
  background: var(--white);
  border: 1.5px solid var(--rule);
  border-radius: var(--radius);
  padding: 20px 22px;
  cursor: pointer;
  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;
  display: flex;
  flex-direction: column;
}
.reg-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--blue-light);
}
.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
}
.card-title {
  font-weight: 600;
  font-size: 0.93rem;
  color: var(--ink);
  line-height: 1.4;
  flex: 1;
}
.jurisdiction-tag {
  background: var(--blue-xlight);
  color: var(--blue);
  border-radius: 999px;
  padding: 2px 9px;
  font-size: 0.7rem;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;
}
.theme-tag {
  display: inline-block;
  border-radius: 999px;
  padding: 2px 9px;
  font-size: 0.7rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.theme-tag.data         { background: var(--c-data-bg);         color: var(--c-data); }
.theme-tag.crossborder  { background: var(--c-crossborder-bg);  color: var(--c-crossborder); }
.theme-tag.transparency { background: var(--c-transparency-bg); color: var(--c-transparency); }
.theme-tag.licensing    { background: var(--c-licensing-bg);    color: var(--c-licensing); }

.card-summary {
  font-size: 0.84rem;
  color: var(--ink-light);
  line-height: 1.55;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid var(--rule);
}
.effective-date { font-size: 0.73rem; color: var(--ink-light); }
.card-cta { font-size: 0.75rem; font-weight: 700; color: var(--blue); }

/* Empty state */
.empty-state {
  text-align: center;
  padding: 80px 24px;
}
.empty-title { font-family: var(--font-display); font-size: 1.4rem; color: var(--ink); margin-bottom: 8px; }
.empty-sub   { font-size: 0.88rem; color: var(--ink-light); }

/* ════════════════════════════════════════════════════════════
   MODAL
   ════════════════════════════════════════════════════════════ */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10,22,40,0.55);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 400;
  padding: 24px;
}
.modal-overlay.active { display: flex; }

.modal-box {
  background: var(--white);
  border-radius: 14px;
  box-shadow: var(--shadow-lg);
  max-width: 680px;
  width: 100%;
  max-height: 88vh;
  overflow-y: auto;
  padding: 40px 44px;
  position: relative;
}
.modal-box::-webkit-scrollbar { width: 4px; }
.modal-box::-webkit-scrollbar-thumb { background: var(--rule); border-radius: 2px; }

.modal-close {
  position: absolute;
  top: 18px; right: 20px;
  background: var(--surface);
  border: 1px solid var(--rule);
  border-radius: 50%;
  width: 32px; height: 32px;
  font-size: 1.2rem;
  color: var(--ink-light);
  line-height: 1;
  transition: background 0.15s;
}
.modal-close:hover { background: var(--rule); }

.modal-region   { font-size: 0.73rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--blue); margin-bottom: 6px; }
.modal-title    { font-family: var(--font-display); font-size: 1.6rem; color: var(--ink); margin-bottom: 16px; line-height: 1.25; }
.modal-section  { margin-bottom: 20px; }
.modal-section h3 { font-size: 0.73rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: var(--ink-light); margin-bottom: 6px; }
.modal-section p  { font-size: 0.9rem; color: var(--ink-mid); line-height: 1.7; }
.modal-link {
  display: inline-block;
  margin-top: 20px;
  color: var(--blue);
  font-size: 0.86rem;
  font-weight: 600;
  border-bottom: 2px solid var(--blue-light);
  transition: border-color 0.15s;
}
.modal-link:hover { border-color: var(--blue); }

/* ════════════════════════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════════════════════════ */
.site-footer {
  background: var(--ink);
  padding: 20px 32px;
}
.footer-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}
.footer-left, .footer-right {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.4);
}
.footer-logo { color: rgba(255,255,255,0.7); font-weight: 600; }
.footer-divider { opacity: 0.3; }

/* ════════════════════════════════════════════════════════════
   RESPONSIVE
   ════════════════════════════════════════════════════════════ */
@media (max-width: 900px) {
  .platform { flex-direction: column; padding-top: 24px; }
  .sidebar {
    width: 100%;
    position: static;
    max-height: none;
    padding: 0 16px;
    overflow: visible;
  }
  .results-area { padding: 0 16px 40px; }
  .about-inner { grid-template-columns: 1fr; gap: 24px; }
}
@media (max-width: 600px) {
  .welcome-title { font-size: 2.2rem; }
  .header-inner { padding: 0 16px; }
  .logo-rest { display: none; }
  .modal-box { padding: 28px 20px; }
}




