---
sidebar_position: 2
slug: /docs/importing-orders
description: "Hoe ShopCtrl orders uit elk verkoopkanaal importeert, welke gegevens worden gesynchroniseerd en hoe gepersonaliseerde producten worden verwerkt."
---

# Orders importeren


ShopCtrl importeert orders uit verschillende [platforms](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/index.md). In dit artikel leest u wat er bij de orderimport per verkoopkanaal speelt.

:::warning[Let op]

Nadat de order in ShopCtrl is geïmporteerd, worden latere wijzigingen van de order in het verkoopkanaal niet meer naar ShopCtrl gesynchroniseerd. De enige uitzonderingen zijn annuleringsverzoeken van Amazon en Shopify.

:::


## Orders importeren uit Amazon {#importing-orders-from-amazon}
ShopCtrl importeert orders zodra ze de status pending voorbij zijn en klaar zijn voor verzending. Vanaf dat moment kan de klant de order niet meer annuleren zonder contact op te nemen met de verkoper.

ShopCtrl synchroniseert de ordertotalen in de betreffende valuta, de productnaam, de SKU van de verkoper, de aantallen en de btw-tarieven van de order. Omdat de order al is betaald, wordt de bijbehorende betaling automatisch in ShopCtrl aangemaakt.



### Orders met gepersonaliseerde producten importeren {#importing-orders-with-customized-products}

Als u bent aangemeld voor deze functie, kunt u producten die u op Amazon verkoopt personaliseren met tekst, afbeeldingen of een configuratie.
ShopCtrl importeert de personalisatie die de klant heeft gekozen rechtstreeks in de eigenschappen van de orderregel.


Om ervoor te zorgen dat de namen en waarden van eigenschappen worden geïmporteerd zoals u verwacht, geeft u de personalisatievlakken (customization surfaces) en optienamen duidelijke namen. Zie de schermafbeelding hieronder.
<img src={require("/img/amazon-customization-import.png").default} height="" width="800" />

Elke personalisatieoptie van een aanbieding heeft een naam (niet zichtbaar voor klanten) en een label (zichtbaar voor klanten).
Om de gegevens correct en voor alle aanbiedingen op dezelfde manier te verwerken, nemen we:

* de naam van de optie als naam van de eigenschap ("Option Dropdown 1" in de schermafbeelding)
* de waarde van de optie als waarde van de eigenschap ("RED, GREEN, BLUE" in de schermafbeelding)

<img src={require("/img/order-row-parameters-customization-one-option.png").default} height="" width="800" />

Als de klant meerdere persoonlijke eigenschappen voor de aanbieding kiest, krijgen de namen van de eigenschappen het voorvoegsel `[{Surface name}]`.

<img src={require("/img/order-row-parameters-customization-two-options.png").default} height="" width="800" />

Zie de helppagina's van Amazon [Offer customizable products](https://sell.amazon.com/programs/custom) voor meer informatie over het configureren van gepersonaliseerde producten.

## Orders importeren uit Shopify {#importing-orders-from-shopify}

Orders worden met geplande synchronisatieverzoeken ongeveer elke 6 minuten in ShopCtrl geïmporteerd.
Als de functie Auto-check missing orders for order import is ingeschakeld, controleert ShopCtrl ook regelmatig of er orders ontbreken.

ShopCtrl synchroniseert de ordertotalen in de betreffende valuta, de toegepaste kortingen, de productnamen, de codes, de aantallen en de btw-tarieven van de orderregels.
Als de order al is betaald, wordt de bijbehorende betaling automatisch in ShopCtrl aangemaakt.
