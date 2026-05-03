# cfp-tools

Prospect-facing interactive calculators for [Cash Flow Portal](https://cashflowportal.com/).

**Live:** https://thesaifmustafa.github.io/cfp-tools/

## Structure

```
/
├── index.html        Launcher — tile grid of all tools
├── pricing.html      Investor Portal Pricing Calculator
├── readiness.html    Deal Readiness & LP Friction Score
└── README.md
```

Flat layout: each tool is a single HTML file at the root. No build step, no dependencies. Manrope font, dark palette modeled on the Squaredocs Framer template (`#0a0a12` near-black + `#a78bfa` violet accent + soft top-edge halo). The CFP dodgerblue/aquamarine brand gradient is reserved for the logo mark only.

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

1. Create `<toolname>.html` at the repo root (e.g. `roi.html`).
2. Include the standard back-link at the top: `<a href="./">← All tools</a>`.
3. Add a tile for it in `index.html`.

## Local preview

Static HTML, no build step:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Or just `open index.html` in a browser.

## Deployment

Auto-deploys to GitHub Pages on every push to `main`. Check the Actions tab for build status.
