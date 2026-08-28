# ShopCtrl Knowledgebase

The source for the **ShopCtrl Knowledgebase** — the comprehensive documentation for the ShopCtrl Omnichannel Backoffice software.

📖 **Read the docs:** [docs.shopctrl.com](https://docs.shopctrl.com)

This repository contains the Markdown content and site configuration for that knowledge base. It's a static site built with [Docusaurus](https://docusaurus.io/).

## What's inside

The documentation is organized as a User Guide under [`docs/User-Guide/`](docs/User-Guide):

| Section | Topic |
| --- | --- |
| 01 · ShopCtrl Basics | Core concepts and getting oriented |
| 02 · ShopCtrl Setup | Configuring your environment |
| 03 · Basic Functions | Day-to-day operations |
| 04 · Order Management | Handling orders end to end |
| 05 · Financial | Invoicing, payments, and reconciliation |
| 06 · Communication | Notifications and messaging |
| 07 · Fulfillment | Picking, packing, and shipping |
| 08 · Product Management | Catalog and product data |
| 09 · Purchasing | Suppliers and purchase orders |

Images and diagrams live in [`static/img/`](static/img). The API reference is hosted separately at [api.demo.shopctrl.com](https://api.demo.shopctrl.com/).

## Running the site locally

**Prerequisites:** [Node.js](https://nodejs.org/) 18 or newer.

```bash
# Install dependencies
npm install

# Start the dev server with live reload at http://localhost:3000
npm run start
```

Edit any file under `docs/` and the browser refreshes automatically.

### Building for production

```bash
# Generate the static site into the ./build folder
npm run build

# Serve the production build locally to verify it
npm run serve
```

## Editing the documentation

- Pages are plain Markdown (`.md` / `.mdx`) files under [`docs/User-Guide/`](docs/User-Guide).
- The left-hand navigation order follows the numeric prefixes on folders and files (`01-`, `02-`, …).
- Add images to [`static/img/`](static/img) and reference them from your page.
- Site-wide settings (title, navbar, footer, plugins) live in [`docusaurus.config.js`](docusaurus.config.js).

Spotted an error or something out of date? Please [open an issue](https://github.com/ShopCtrl-AG/ShopCtrlDocs/issues) — we welcome corrections and suggestions.

## Deployment

The site is published to [docs.shopctrl.com](https://docs.shopctrl.com) via the pipeline defined in [`azure-pipelines.yml`](azure-pipelines.yml).

## About ShopCtrl

ShopCtrl is omnichannel backoffice software for retailers and brands. Learn more at [shopctrl.com](https://shopctrl.com) or [get in touch](https://shopctrl.com/contact/contact-us).

## License

© 2026 ShopCtrl AG. All rights reserved. This documentation is proprietary — see [LICENSE](LICENSE) for details.
