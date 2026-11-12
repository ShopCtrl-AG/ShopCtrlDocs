---
sidebar_position: 8
slug: /docs/amazon-1p-order-fulfillment-workflow
description: "De volledige workflow voor orderfulfilment van Amazon 1P in ShopCtrl, van het importeren en bevestigen van inkooporders tot de zending en de ASN."
---


# Amazon 1P-workflow voor orderfulfilment


De workflow voor orderfulfilment van Amazon 1P in ShopCtrl draait om efficiëntie en nauwkeurigheid. Net als elke andere verkooporder doorlopen inkomende inkooporders van Amazon een aantal belangrijke fasen voordat ze worden uitgevoerd en bij het magazijn van Amazon worden afgeleverd. Hieronder staat elke stap van het proces beschreven:

## Workflow voor orderfulfilment {#order-fulfillment-workflow}

1. **Inkooporders importeren uit Amazon:**
Inkooporders worden met geplande synchronisatieverzoeken op de achtergrond naadloos van Amazon in ShopCtrl geïmporteerd.

1. **Het type inkooporder bepalen:**
Het systeem bepaalt automatisch of een order in de categorie "Bulk buy" of "Weekly" valt. Als slechts aan een deel van de criteria wordt voldaan, blijft het type van de order ongedefinieerd.

1. **De inkooporder aan Amazon bevestigen:**
Bulk buy-orders, die al vooraf zijn goedgekeurd via het [goedkeuringsproces voor Bulk buy offers](./amazon-bulk-buy-offers-approval.md), worden automatisch bevestigd. Andere orders worden bevestigd zodra de pickgegevens zijn ontvangen.

1. **Pickgegevens van de order verwerken:**
Picken is flexibel in ShopCtrl: intern, of door [bestanden uit een extern Warehouse Management System (WMS) te verwerken](/User-Guide/02-ShopCtrl-Setup/05-Fulfillment/integration-with-wms-via-ftp.md) voor een naadloze integratie.

1. **De order inpakken en de inpakgegevens bijwerken:**
Inpakken kunt u rechtstreeks in het platform beheren, of ShopCtrl [verwerkt bestanden die een extern WMS genereert](/User-Guide/02-ShopCtrl-Setup/05-Fulfillment/integration-with-wms-via-ftp.md).

1. **Een groepszending aanmaken en bewerken:**
Een groepszending (Group Shipment) kan automatisch worden aangemaakt tijdens het verwerken van de inpakgegevens uit het WMS (Warehouse Management System), of handmatig. Zodra alles is ingepakt, worden de samengevoegde gegevens naar de vervoerdersintegratie gestuurd, zodat labels en andere benodigde inpakdocumenten kunnen worden afgedrukt.
1. **De ASN naar Amazon sturen:**
ShopCtrl zorgt voor naleving door de Advance Shipping Notice (ASN) naar Amazon te sturen, met gegevens over de uitgaande groepszending.
1. **Verzenden naar het magazijn van Amazon:**
In de laatste stap zorgen de verantwoordelijke medewerkers ervoor dat de volledig ingepakte groepszending naar het magazijn van Amazon wordt verzonden.

**Uitzonderingen en aanpassingen van orders**

* **Pickbestand aanpassen:**
Het systeem maakt het mogelijk pickbestanden opnieuw in te dienen, zodat de order eenvoudig kan worden gecorrigeerd.
* **Order opnieuw bevestigen:**
Als er met het pickbestand wijzigingen worden doorgevoerd, begeleidt ShopCtrl het opnieuw bevestigen bij Amazon.
* **Pakbestand opnieuw indienen:**
ShopCtrl verwerkt opnieuw ingediende pakbestanden en voert de nodige correcties in de zending door.
* **ASN bijwerken en opnieuw versturen:**
Bij wijzigingen stuurt ShopCtrl de ASN efficiënt opnieuw naar Amazon, zodat de informatie juist en actueel is.

## Indeling van Amazon 1P-orders in ShopCtrl {#amazon-1p-order-classification-in-shopctrl}

In ShopCtrl komen inkooporders van Amazon overeen met verkooporders in ShopCtrl. Hoe een inkooporder wordt bevestigd, hangt af van het type geïmporteerde order.

Bij het importeren van Amazon 1P-inkooporders probeert ShopCtrl ze automatisch te koppelen aan afgeronde Bulk buy offers. Zo wordt bepaald of de inkooporder een gewone wekelijkse order is of een [vooraf goedgekeurd Bulk buy offer-verzoek](./amazon-bulk-buy-offers-approval.md).

Het schema hieronder toont hoe het type van een Amazon 1P-order wordt bepaald:
<img src={require("/img/Amazon-1P-purchase-order-type-resolution.png").default} height="" width="600" />

ShopCtrl deelt inkooporders in drie typen in:

**1. Bulk Buy-inkooporder**
Een bulk buy-inkooporder is gebaseerd op een vooraf goedgekeurde Bulk buy offer van een leverancier. Meestal zijn dit grote orders die ongeveer 30 dagen vooruit worden gepland, met een leveringsvenster binnen dezelfde periode. Voorwaarden om een inkooporder als bulk buy-order te koppelen zijn onder andere:
* Het leveringsvenster van de inkooporder moet overeenkomen met de kolommen From-TO van de 1e of 2e fase van de Bulk buy offer.
* De producten en prijzen komen overeen met de bijbehorende Bulk buy offer.
* De opgetelde hoeveelheden van gekoppelde orders zijn niet groter dan de afgesproken hoeveelheden van de BulkBuy offer.
* Het minimale aantal dagen tot het verzendvenster ([in te stellen in de shopinstellingen](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-1P/setting-up-bulk-buy-offers.md#step-2-set-up-notifications-for-bulk-buy-offers-expiry-and-configure-timeframe-for-mapping-incoming-purchase-orders)) moet 30 zijn. Als het minder is, wordt de order niet gekoppeld.
* De fase van de Bulk buy offer moet als Complete zijn gemarkeerd (van de laatste 5 Bulk Buy Offers).

De volledige lijst met orders die aan de Bulk buy offer zijn gekoppeld, staat op het tabblad Bulk buy Offer details > Orders.

**2. Wekelijkse inkooporder**
Wekelijkse inkooporders herkent u aan een leveringsvenster dat korter is dan het minimum voor koppeling aan bulk buy offers. Deze orders zijn meestal kleiner dan bulk buy-orders.

**3. Niet-gedefinieerde inkooporder**
Een niet-gedefinieerde inkooporder (Undefined) heeft een leveringsvenster van 30 dagen vooruit en is gedeeltelijk aan een bulk buy offer gekoppeld. Door verschillen in hoeveelheden of prijzen is automatisch koppelen echter niet mogelijk. Deze orders krijgen een melding om de aandacht op het probleem te vestigen. Ze vragen extra aandacht van een medewerker en moeten mogelijk handmatig worden gekoppeld om ze juist te kunnen bevestigen.

<img src={require("/img/orders-grid-purchase-type.png").default} height="" width="800" />

Er is een voorkeuzefilter beschikbaar waarmee u alleen de niet-gedefinieerde inkooporders toont.



### Niet-gedefinieerde inkooporders handmatig aan bulk buy offers koppelen {#manual-mapping-of-undefined-purchase-orders-to-bulk-buy-offers}

Als verschillen automatisch koppelen verhinderen, worden inkooporders mogelijk niet aan bulk buy offers gekoppeld. Het type **Undefined** geeft aan dat regels of parameters niet volledig overeenkomen.

Om dit op te lossen, bekijkt u in het onderdeel met meldingen van de order de lijst met verschillen die automatisch koppelen verhinderen. Er kunnen bijvoorbeeld verschillen in hoeveelheden zijn. Prijsverschillen worden op dezelfde manier behandeld.
<img src={require("/img/bulk-buy-match-failed-alerts.png").default} height="" width="800" />

Los de verschillen zo mogelijk op door creditregels aan te maken voor hoeveelheden die boven de goedgekeurde hoeveelheid uitkomen. Zo worden de verschillen rechtgezet en wordt koppelen mogelijk.

Als de order aan een bulk buy offer moet worden gekoppeld, doet u dat handmatig.

1. Log in als medewerker met het recht om orders van de Amazon 1P-shop te bewerken.
2. Ga naar het tabblad **Orders**.
3. Zoek een order van het type **Underfined** en open deze om te bewerken.
4. Op het tabblad **Topic > Amazon 1P > General** kunt u nu het **Order type** wijzigen in **Bulk buy**.

<img src={require("/img/order-purchase-type-define-order-details.png").default} height="" width="800" />

5. Zoek en selecteer in het veld voor de Bulk buy offer de bulk buy offer die aan de bewerkte order moet worden gekoppeld.
6. Sla de order op met **Save** om de wijzigingen toe te passen.

<img src={require("/img/order-purchase-type-define-bulk-buy.png").default} height="" width="800" />

7. Op het tabblad **Alerts** kunt u controleren of er na het koppelen aan de gekozen bulk buy offer verschillen zijn ontstaan.

<img src={require("/img/order-purchase-type-define-bulk-buy-alerts.png").default} height="" width="800" />


Zodra de order is gekoppeld, is deze in ShopCtrl verbonden met de bijbehorende bulk buy offer. Zo worden de producten in de order meegenomen bij beslissingen over nieuwe Amazon 1P-inkooporders.


:::warning[Let op]

Het handmatig koppelen van een order aan een bulk buy offer leidt niet automatisch tot een bevestiging van de order. U moet de order daarna [handmatig accepteren](/User-Guide/07-Fulfillment/Amazon-1P-Order-Fulfillment-Workflow/amazon-1p-orders-acknowledgement.md#manual-order-acknowledgement). Anders wordt de bevestiging pas verstuurd nadat de order is gepickt en ShopCtrl het bestand uit het externe Warehouse Management System (WMS) heeft verwerkt.

:::
