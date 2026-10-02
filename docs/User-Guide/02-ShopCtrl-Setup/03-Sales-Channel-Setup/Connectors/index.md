---
sidebar_position: 2
slug: /docs/connectors
description: "An overview of the sales channel and ecommerce platform integrations available in ShopCtrl, and the features each connector supports."
---

import Check from '@site/src/components/Check';

# Connectors

ShopCtrl provides a number of integrations with well-known ecommerce platforms and marketplaces. In each table below, the most widely used connectors are listed first.

**Legend:** <Check /> supported &nbsp;·&nbsp; — not needed, because the channel has no order acknowledgement step

## Ecommerce platforms

<div className="connectors-table">

| Platform | Order Import | Cancellation Import | Track & Trace Export | Stock Export | Price Export | Product Import |
| --- | :-: | :-: | :-: | :-: | :-: | :-: |
| <img className="connector-logo" src={require("/img/Shopify-Logo.jpg").default} alt="" /> [Shopify](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/shopify.md) | <Check /> | <Check /> | <Check /> | <Check /> | <Check /> | <Check /> |
| <img className="connector-logo" src={require("/img/WooCommerce_logo.svg.png").default} alt="" /> [Woocommerce](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/woocommerce.md) | <Check /> |  |  | <Check /> |  | <Check /> |
| <img className="connector-logo" src={require("/img/magento.png").default} alt="" /> [Magento v2](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/magento-2.md) | <Check /> |  | <Check /> | <Check /> |  | <Check /> |
| <img className="connector-logo" src={require("/img/shopware.png").default} alt="" /> [Shopware](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/shopware-6.md) | <Check /> |  |  |  | <Check /> | <Check /> |
| <img className="connector-logo" src={require("/img/magento.png").default} alt="" /> Magento v1 | <Check /> |  |  | <Check /> | <Check /> | <Check /> |

</div>

## Marketplaces

<div className="connectors-table">

| Marketplace | Order Import | Order Acknowledgement | Cancellation Import | Track & Trace Export | Stock Export | Price Export |
| --- | :-: | :-: | :-: | :-: | :-: | :-: |
| <img className="connector-logo" src={require("/img/amazon.jpg").default} alt="" /> [Amazon 3P](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-3P/index.md) | <Check /> |  | <Check /> | <Check /> | <Check /> | <Check /> |
| <img className="connector-logo" src={require("/img/amazon.jpg").default} alt="" /> [Amazon 1P](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-1P/index.md) | <Check /> | <Check /> |  | <Check /> | <Check />¹ |  |
| <img className="connector-logo" src={require("/img/ebay.png").default} alt="" /> [Ebay](ebay.md) | <Check /> | — | <Check /> | <Check /> | <Check /> | <Check /> |
| <img className="connector-logo" src={require("/img/bol.com.png").default} alt="" /> [Bol (NL, BE)](./bol.md) | <Check /> | — | <Check /> | <Check /> | <Check /> |  |
| <img className="connector-logo" src={require("/img/1200px-Logo-Mirakl-Blue-Standard.png").default} alt="" /> [Mirakl](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/mirakl.md) | <Check /> | <Check /> | <Check /> | <Check /> | <Check /> | <Check /> |
| <img className="connector-logo" src={require("/img/manomano-logo-freelogovectors.net\_.png").default} alt="" /> [Mano Mano](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/manomano.md) | <Check /> | <Check />² |  | <Check /> | <Check /> | <Check /> |
| <img className="connector-logo" src={require("/img/JD.com_logo.png").default} alt="" /> JingDong | <Check /> |  |  | <Check /> | <Check /> |  |

</div>

¹ Amazon 1P Direct Fulfillment only.  
² Accepting orders only.

## Retailer drop-ship platforms

With Virtual Stock (Edge), you connect to retailers as their supplier: you receive their drop-ship orders and send back stock levels and tracking. You can supply more than one retailer through Edge.

<div className="connectors-table">

| Platform | Order Import | Order Acknowledgement | Cancellation Import | Track & Trace Export | Stock Export |
| --- | :-: | :-: | :-: | :-: | :-: |
| <img className="connector-logo connector-logo--small" src={require("/img/virtual-stock-icon.png").default} alt="" /> [Virtualstock](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/index.md) | <Check /> | <Check /> | <Check /> | <Check /> | <Check /> |

</div>

## Is your channel not listed?

You can still connect it to ShopCtrl. Depending on your channel, choose one of these options:

- **Marketplaces running on Mirakl.** Many marketplaces are built on Mirakl. If your marketplace is one of them, you can connect it with the [Mirakl connector](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/mirakl.md).
- **Order feed.** If your shop can publish its orders as a JSON or XML feed, ShopCtrl can import orders from that feed on a schedule.
- **ShopCtrl REST API.** Your developers or integration partner can use the API to send orders to ShopCtrl and read back orders, shipments, products, stock and other data.
- **Webhooks.** ShopCtrl can notify your system when orders, products, shipments, invoices or returns change. See [Webhooks](/docs/webhooks).

Not sure which option fits your channel? Contact ShopCtrl support to discuss your setup.
