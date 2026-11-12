---
sidebar_position: 2
slug: /docs/connectors
description: "Een overzicht van de integraties met verkoopkanalen en e-commerceplatforms in ShopCtrl, en de functies die elke connector ondersteunt."
---

import Check from '@site/src/components/Check';

# Connectors

ShopCtrl biedt een aantal integraties met bekende e-commerceplatforms en marktplaatsen. In elke tabel hieronder staan de meest gebruikte connectors bovenaan.

**Legenda:** <Check /> ondersteund &nbsp;·&nbsp; — niet nodig, omdat het kanaal geen stap voor orderbevestiging heeft

## E-commerceplatforms {#ecommerce-platforms}

<div className="connectors-table">

| Platform | Orderimport | Import van annuleringen | Export van track & trace | Voorraadexport | Prijsexport | Productimport |
| --- | :-: | :-: | :-: | :-: | :-: | :-: |
| <img className="connector-logo" src={require("/img/Shopify-Logo.jpg").default} alt="" /> [Shopify](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/shopify.md) | <Check /> | <Check /> | <Check /> | <Check /> | <Check /> | <Check /> |
| <img className="connector-logo" src={require("/img/WooCommerce_logo.svg.png").default} alt="" /> [Woocommerce](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/woocommerce.md) | <Check /> |  |  | <Check /> |  | <Check /> |
| <img className="connector-logo" src={require("/img/magento.png").default} alt="" /> [Magento v2](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/magento-2.md) | <Check /> |  | <Check /> | <Check /> |  | <Check /> |
| <img className="connector-logo" src={require("/img/shopware.png").default} alt="" /> [Shopware](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/shopware-6.md) | <Check /> |  |  |  | <Check /> | <Check /> |
| <img className="connector-logo" src={require("/img/magento.png").default} alt="" /> Magento v1 | <Check /> |  |  | <Check /> | <Check /> | <Check /> |

</div>

## Marktplaatsen {#marketplaces}

<div className="connectors-table">

| Marktplaats | Orderimport | Orderbevestiging | Import van annuleringen | Export van track & trace | Voorraadexport | Prijsexport |
| --- | :-: | :-: | :-: | :-: | :-: | :-: |
| <img className="connector-logo" src={require("/img/amazon.jpg").default} alt="" /> [Amazon 3P](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-3P/index.md) | <Check /> |  | <Check /> | <Check /> | <Check /> | <Check /> |
| <img className="connector-logo" src={require("/img/amazon.jpg").default} alt="" /> [Amazon 1P](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-1P/index.md) | <Check /> | <Check /> |  | <Check /> | <Check />¹ |  |
| <img className="connector-logo" src={require("/img/ebay.png").default} alt="" /> [Ebay](ebay.md) | <Check /> | — | <Check /> | <Check /> | <Check /> | <Check /> |
| <img className="connector-logo" src={require("/img/bol.com.png").default} alt="" /> [Bol (NL, BE)](./bol.md) | <Check /> | — | <Check /> | <Check /> | <Check /> |  |
| <img className="connector-logo" src={require("/img/1200px-Logo-Mirakl-Blue-Standard.png").default} alt="" /> [Mirakl](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/mirakl.md) | <Check /> | <Check /> | <Check /> | <Check /> | <Check /> | <Check /> |
| <img className="connector-logo" src={require("/img/manomano-logo-freelogovectors.net\_.png").default} alt="" /> [Mano Mano](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/manomano.md) | <Check /> | <Check />² |  | <Check /> | <Check /> | <Check /> |
| <img className="connector-logo" src={require("/img/JD.com_logo.png").default} alt="" /> JingDong | <Check /> |  |  | <Check /> | <Check /> |  |

</div>

¹ Alleen Amazon 1P Direct Fulfillment.  
² Alleen het accepteren van orders.

## Dropshipplatforms van retailers {#retailer-drop-ship-platforms}

Met Virtual Stock (Edge) maakt u als leverancier verbinding met retailers: u ontvangt hun dropshiporders en stuurt voorraadniveaus en trackinggegevens terug. Via Edge kunt u aan meer dan één retailer leveren.

<div className="connectors-table">

| Platform | Orderimport | Orderbevestiging | Import van annuleringen | Export van track & trace | Voorraadexport |
| --- | :-: | :-: | :-: | :-: | :-: |
| <img className="connector-logo connector-logo--small" src={require("/img/virtual-stock-icon.png").default} alt="" /> [Virtualstock](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/index.md) | <Check /> | <Check /> | <Check /> | <Check /> | <Check /> |

</div>

## Staat uw kanaal er niet bij? {#is-your-channel-not-listed}

U kunt het toch aan ShopCtrl koppelen. Kies afhankelijk van uw kanaal een van deze opties:

- **Marktplaatsen die op Mirakl draaien.** Veel marktplaatsen zijn gebouwd op Mirakl. Als uw marktplaats daar een van is, kunt u deze koppelen met de [Mirakl-connector](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/mirakl.md).
- **Orderfeed.** Als uw shop de orders als JSON- of XML-feed kan publiceren, kan ShopCtrl volgens een schema orders uit die feed importeren.
- **ShopCtrl REST API.** Uw ontwikkelaars of integratiepartner kunnen via de API orders naar ShopCtrl sturen en orders, zendingen, producten, voorraad en andere gegevens uitlezen.
- **Webhooks.** ShopCtrl kan uw systeem een melding sturen wanneer orders, producten, zendingen, facturen of retouren wijzigen. Zie [Webhooks](/docs/webhooks).

Weet u niet welke optie bij uw kanaal past? Neem contact op met de support van ShopCtrl om uw situatie te bespreken.
