# cfp-tools

Prospect-facing interactive calculators for [Cash Flow Portal](https://cashflowportal.com/).

**Live:** https://thesaifmustafa.github.io/cfp-tools/

## Structure

```
/
├── index.html        Launcher — hero + category grid
├── pricing.html      Investor Portal Pricing Calculator
├── readiness.html    Deal Readiness & LP Friction Score
├── shell.css         Shared topbar + sticky sidebar styles
├── shell.js          Injects topbar/sidebar into every page; auto-active link
└── README.md
```

Flat layout: each tool is a single HTML file at the root. No build step, no dependencies. Manrope font, dark palette modeled on the Squaredocs Framer template (`#0a0a12` near-black + `#a78bfa` violet accent + soft top-edge halo). The CFP dodgerblue/aquamarine brand gradient is reserved for the logo mark only.

**Shell.** Every page links `shell.css` and `shell.js`, then declares two empty placeholders — `<header id="cfp-topbar" class="topbar"></header>` and `<aside id="cfp-sidebar" class="sidebar"></aside>` — which `shell.js` fills with the shared topbar and sidebar nav. The active link is set automatically from `location.pathname`. To add a new tool: create `<toolname>.html`, add a `<li><a class="nav-link" href="<toolname>.html">Display Name</a></li>` to `SIDEBAR_HTML` inside `shell.js`, and the tile to `index.html`.

## Tools

### Pricing Calculator — `pricing.html`

Real-time Investor Portal pricing based on equity under management. Supports flat and progressive (enterprise) pricing modes.

| EUM | Monthly (flat) |
|---|---|
| Up to $10M | $499 |
| $10M – $25M | $599 |
| $25M – $50M | $699 |
| Over $50M | $699 + $10/mo per $1M over $50M |

Enterprise mode (progressive rates above $50M): $10/MM in $50–100M band, $8/MM in $100–150M, $6/MM above $150M.

Features: real-time quote, active-tier highlight, annual total, slider to $1B EUM, copy-quote for email/Slack, shareable URL.

**Deep links:**
- `pricing.html#eum=25` — $25M EUM (flat)
- `pricing.html#eum=200&adv=1` — $200M EUM with enterprise pricing on

### Deal Readiness & LP Friction Score — `readiness.html`

Pre-raise diagnostic for real estate GPs. 8 questions across Structure, Narrative, Execution, and Strategy. Outputs a Readiness Score (0–100), LP Friction Score (0–100, lower is better), Top 3 Capital Killers, and 3 prioritized fixes.

Scoring is heuristic, based on common failure patterns in sub-$50M raises. 10 test cases verified.

**Deep link:** `readiness.html#r=33233331` opens a pre-filled result (the 8 digits encode each answer 1–3; an optional 9th digit 0–2 encodes the q1 LP-type option index).

### ROI & Time Savings Estimator — coming soon

Plug in investor count, distributions per year, and K-1 count. Returns hours and dollars saved versus manual operations.

## Adding a new tool

1. Create `<toolname>.html` at the repo root (e.g. `roi.html`). Use `pricing.html` as a starting template — it already has the shell wired in.
2. Inside the new file: link `shell.css` in the head, drop a `<header id="cfp-topbar" class="topbar"></header>` at the top of `<body>`, wrap your content in `<div class="shell"><aside id="cfp-sidebar" class="sidebar"></aside><main class="content">...</main></div>`, and include `<script src="shell.js"></script>` before `</body>`.
3. In `shell.js`, add a `<li>` to `SIDEBAR_HTML` so it shows in the sidebar on every page.
4. Add a tile for it in `index.html` (the launcher's category grid).

## Local preview

Static HTML, no build step:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Or just `open index.html` in a browser.

## Deployment

Auto-deploys to GitHub Pages on every push to `main`. Check the Actions tab for build status.
