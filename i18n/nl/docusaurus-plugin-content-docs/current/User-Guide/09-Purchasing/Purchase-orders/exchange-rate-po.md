---
sidebar_position: 8
slug: /docs/purchase-orders-prices-handling
description: "Hoe ShopCtrl inkoopprijzen en winstmarges bepaalt en wanneer wisselkoersen worden toegepast tijdens de levenscyclus van een inkooporder."
---


# Prijzen en winstmarges bij inkooporders berekenen

ShopCtrl beheert inkoopprijzen voor voorraaditems verschillend, afhankelijk van of producten via het ingebouwde inkoopsysteem of extern worden toegevoegd. Deze handleiding legt uit hoe wisselkoersen op inkooporders worden toegepast en hoe de kosten van de voorraad worden berekend.

## Hoe inkoopprijzen worden bepaald {#how-purchase-prices-are-determined}

De inkoopkosten van de voorraad worden verschillend berekend, afhankelijk van de manier waarop de voorraad wordt ingeboekt. Voor producten die via het geïntegreerde inkoopsysteem van ShopCtrl worden toegevoegd, wordt de inkoopprijs automatisch bepaald op basis van de gegevens van de inkooporder. Als producten buiten ShopCtrl om worden toegevoegd, bijvoorbeeld handmatig of via een ander systeem, wordt de inkoopprijs overgenomen van de [leveranciersprijs](/User-Guide/08-Product-Management/Product-Details/product-purchasing.md) die op het tabblad met productgegevens is ingevoerd.

Wanneer een inkooporder in de basisvaluta van de shop owner is, worden de prijzen ongewijzigd vastgelegd. Is de inkooporder in een vreemde valuta, dan worden de prijzen omgerekend naar de basisvaluta van de shop owner met de wisselkoers op het moment dat de voorraad wordt ingeboekt.


:::info[**Verzendkosten, kortingen en berekening van de winstmarge**]

Let op: ShopCtrl verwerkt **verzendkosten en kortingen op het niveau van de inkooporder niet** in de inkoopprijs van het afzonderlijke StockItem. Deze kosten worden apart behandeld en tellen niet mee bij de berekening van de winstmarge van afzonderlijke producten.

:::


## Wijzigingen in de wisselkoers tijdens de levenscyclus van een inkooporder {#handling-exchange-rate-changes-during-po-lifecycle}

De prijzen van inkooporderregels in een vreemde valuta blijven ongewijzigd en veranderen nooit tijdens de levenscyclus van de inkooporder. Alleen het equivalent in de basisvaluta kan veranderen door schommelingen in de wisselkoers.

ShopCtrl past wisselkoersen toe op specifieke momenten in de levenscyclus van de inkooporder, zodat de kosten nauwkeurig worden bijgehouden:
 - Bij het aanmaken van de inkooporder: de wisselkoers op het moment dat de inkooporder wordt aangemaakt, wordt op orderniveau vastgelegd.
 - Bij het aanmaken van een levering: wanneer een levering wordt gestart, wordt de wisselkoers op dat moment op leveringsniveau vastgelegd.
 - Bij het inboeken van de voorraad: de werkelijke wisselkoers op het moment dat de voorraad het magazijn binnenkomt, bepaalt de uiteindelijke kosten van die items in de basisvaluta.

**De kosten van voorraaditems worden bij levering vastgezet.** Wanneer producten in uw magazijn worden ingeboekt, wordt hun inkoopprijs in de basisvaluta vastgelegd met de wisselkoers op dat moment. Zo blijven de kosten van al geleverde items consistent en traceerbaar, ook als de wisselkoers op de inkooporder later verandert.


Als de wisselkoers bijvoorbeeld 25 was bij de eerste levering en vóór een tweede levering daalde tot 23, weerspiegelt de voorraad van elke levering de koers die gold op het moment van inboeken. 

<img src={require("/img/exchange-rate-po.png").default} height="" width="800" />

Daarvoor houdt ShopCtrl nu de wisselkoersen op leveringsniveau bij. Bij elke levering wordt de koers vastgelegd die bij het inboeken is gebruikt. Als er voor dezelfde inkooporder op verschillende momenten meerdere leveringen plaatsvinden, weerspiegelt elke partij de wisselkoers die gold toen deze binnenkwam.

Dit betekent dat de som van de kosten van uw voorraaditems in de basisvaluta mogelijk niet precies overeenkomt met het omgerekende regeltotaal op de inkooporder als de koersen zijn veranderd nadat een deel van de items is geleverd. Dit is te verwachten en zorgt ervoor dat de kosten per levering nauwkeurig worden bijgehouden.

<img src={require("/img/PO-ER-stock-item-price-calc.png").default} height="" width="400" />

Met deze aanpak geeft ShopCtrl de werkelijke kosten weer die voor elk item zijn betaald dat het magazijn binnenkomt, terwijl de oorspronkelijk opgegeven prijzen in vreemde valuta ongewijzigd blijven.


