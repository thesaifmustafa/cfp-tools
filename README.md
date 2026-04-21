# cfp-tools

Internal tools for Cash Flow Portal AEs.

## Pricing Calculator (`index.html`)

**Live:** https://thesaifmustafa.github.io/cfp-tools/

Enter EUM, get the Investor Portal price instantly. Shareable via URL hash (e.g. `/#eum=35`).

### Formula

| EUM | Monthly price |
|---|---|
| Up to $10M | $499 |
| $10M – $25M | $599 |
| $25M – $50M | $699 |
| Over $50M | $699 + $10/mo per $1M over $50M |

Fund admin pricing sold separately.

### Features

- Real-time price as you type or drag the slider
- Active-tier highlight
- Annual total shown alongside monthly
- **Copy quote** — one-click copy of `"Investor Portal: $X/mo ($Y/yr) at $ZM EUM"` for pasting into email/Slack
- **Copy link** — shareable URL that opens with the EUM pre-filled
- Defensive JS so it survives being embedded via `innerHTML` (e.g. inside HubSpot/CRM widgets)

### Local development

It's one static HTML file — no build step. To preview locally:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

Or just `open index.html` in a browser.

### Deployment

Auto-deploys to GitHub Pages on every push to `main`. Check Actions for build status.
