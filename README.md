# cfp-tools

Prospect-facing interactive calculators for [Cash Flow Portal](https://cashflowportal.com/).

**Live:** https://thesaifmustafa.github.io/cfp-tools/

## Structure

```
/
├── index.html       Launcher — tile grid of all tools
├── pricing.html     Investor Portal Pricing Calculator
└── README.md
```

Flat layout: each tool is a single HTML file at the root. No build step, no dependencies.

## Tools

### Pricing Calculator — `pricing.html`

Real-time Investor Portal pricing based on equity under management.

| EUM | Monthly |
|---|---|
| Up to $10M | $499 |
| $10M – $25M | $599 |
| $25M – $50M | $699 |
| Over $50M | $699 + $10/mo per $1M over $50M |

Features: real-time quote, active-tier highlight, annual total, copy-quote for email/Slack, shareable URL.

**Deep link:** `pricing.html#eum=25` opens the calculator pre-filled at $25M EUM.

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
