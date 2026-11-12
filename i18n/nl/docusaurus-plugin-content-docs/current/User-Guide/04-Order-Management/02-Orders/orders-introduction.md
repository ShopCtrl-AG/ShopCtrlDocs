---
sidebar_position: 1
slug: /docs/orders-introduction
description: "Hoe orderbeheer in ShopCtrl werkt, van het importeren van orders uit verkoopkanalen tot factureren en verzenden, gekoppeld aan voorraadbeheer."
---

# Introductie tot orders

Een van de kernfuncties van ShopCtrl is orderbeheer (fulfilment en verzending van orders).

Het systeem biedt een volledige orderbeheercyclus: van order tot het afdrukken van de factuur en het markeren als verzonden. Het systeem kan automatisch orders ophalen uit veel verschillende kanalen (eBay, Amazon, Magento, WooCommerce en andere websites), orders combineren met betalingsbestanden en de verkoop opvolgen (waar die mogelijkheid bestaat).


![Orderverwerking](/img/order-processing-300x265.jpg)

Een van de unieke functies van het systeem is dat orderbeheer aan uw voorraadbeheer kan worden gekoppeld. Wanneer een order wordt geplaatst en verwerkt, wordt het voorraadniveau aangepast en doorgegeven aan alle andere kanalen waarop u hetzelfde artikel verkoopt. Zo verkleint u het risico op oververkoop.
___
## Inkomende orders {#incoming-orders}
ShopCtrl importeert orders uit al uw [verkoopkanalen](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/index.md). Voorbeelden van verkoopkanalen zijn:

  + Marktplaatsen zoals eBay en Amazon
  + E-commerceplatforms (zoals Shopify, Magento, BigCommerce enzovoort)
  + Zelf ontwikkelde e-commerceplatforms
  + Handmatige / telefonische orders

De ordertabel is volledig aan te passen en vormt het startpunt voor alle acties in het orderproces:
<img src={require("/img/orders-grid.png").default} height="" width="800" />

## Orders filteren {#filtering-orders}
Het orderfilter van ShopCtrl is een krachtige functie waarmee u selecties maakt op basis van vooraf ingestelde filters. U kunt in ShopCtrl zelfs een onbeperkt aantal voorkeuzefilters (presets) instellen.

Het filterpaneel staat in het gedeelte met orders.

**Zoeken op trefwoord**

Het filter ‘keyword’ toont alle orders die overeenkomen met het opgegeven trefwoord.

**Filteren op periode**

Haal een lijst op met orders binnen een bepaalde periode.
<img src={require("/img/order_filter_date.png").default} height="" width="200" />

**Filteren op status**

ShopCtrl ondersteunt tientallen orderstatussen. U kunt zelfs eigen orderstatussen instellen.
<img src={require("/img/order_filter_status.png").default} height="" width="200" />

Selecteer een of meer statussen om alle bijbehorende orders te tonen.

**Filteren op product**
Toont alle orders die het opgegeven product bevatten.

**Filteren op productgroep**
Toont alle orders met producten uit de geselecteerde productgroep.

**Voorkeuzefilters**
U kunt ook uw eigen voorkeuzefilters maken op basis van eigen voorwaarden en deze opslaan voor later gebruik. Voorkeuzefilters kunnen persoonlijk zijn of voor het hele bedrijf gelden.

<img src={require("/img/order_filter_preset_panel.png").default} height="" width="300" />

In het voorbeeld hierboven zijn twee voorkeuzefilters ingesteld.

#### Een nieuw voorkeuzefilter maken {#how-to-create-a-new-preset-filter}

Klik op de knop ‘Add’ om een nieuw voorkeuzefilter te maken.

<img src={require("/img/order_filter_preset_conditions.png").default} height="" width="600" />

1. Vul een geldige naam in.
2. Kies het niveau van het voorkeuzefilter:
    * Personal - wordt alleen in uw eigen ShopCtrl-omgeving getoond. Andere gebruikers in uw organisatie zien het voorkeuzefilter niet.
    * Global - het voorkeuzefilter wordt voor alle gebruikers in de organisatie getoond.
3. Let op: het niveau van het voorkeuzefilter is niet altijd zichtbaar. Alleen het beheerdersaccount kan globale voorkeuzefilters maken.
4. Stel de filtervoorwaarden in. U kunt een onbeperkt aantal regels met eigen voorwaarden toevoegen.
5. Klik op ‘Save and Apply’ om het voorkeuzefilter op te slaan.
