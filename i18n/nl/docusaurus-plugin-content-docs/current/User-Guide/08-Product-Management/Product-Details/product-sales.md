---
sidebar_position: 1
slug: /docs/product-sales
description: "De verkooptabbladen van een ShopCtrl-product: grafieken met de verkoophistorie, de gemiddelde prijs, de orders met het product en gereserveerde orders."
---
# Productverkoop 


Op deze tabbladen ziet u de orders en retouren voor een bepaald product.

### Verkoophistorie {#sales-history}

Hier ziet u een kort rapport over de verkoophistorie van dit product. 
Daarna volgen twee grafieken:
De eerste, "Number of sold products", geeft een beeld van hoeveel orders er het afgelopen jaar voor dit product zijn ontvangen. 
De tweede, "Average price", is het gemiddelde aandeel van het product in de order.

Het laatste deel van het tabblad toont alle verkooporders die dit product bevatten. 

<img src={require("/img/product-details-sales-history.png").default} height="" width="800" />

### Gereserveerde orders {#reserved-orders}

Hier vindt u een lijst met orders die uw klanten voor dit product hebben geplaatst en die wel zijn toegewezen, maar nog niet verzonden.
<img src={require("/img/product-details-reserved-orders.png").default} height="" width="800" />

### Backorders {#backorders}

Op dit tabblad beheert u de backorders voor een bepaald product.
<img src={require("/img/product-details-backorders-1.png").default} height="" width="800" />

Het onderdeel **Purchase info** geeft informatie over voorraad die is besteld maar nog niet door de leverancier is geleverd. Het tweede record laat zien of er na de levering genoeg producten zijn om alle openstaande orders van klanten te leveren.

U kunt de toewijzingsprioriteit wijzigen als er meerdere leveringen voor de inkooporder zijn. Selecteer een order en klik op de knop **Set Allocation Priority**. Kies de prioriteit in de vervolgkeuzelijst en klik op **Save** om de wijzigingen toe te passen. De volgende prioriteitsopties zijn beschikbaar: Very Low, Low, Normal, High, Very High.
<img src={require("/img/product-details-backorders-allocation-priority.png").default} height="" width="300" />

Zodra de voorraad binnenkomt, worden de producten toegewezen volgens de ingestelde prioriteit.

### Retouren {#returns}

Op dit tabblad ziet u een lijst met [retouren](/User-Guide/07-Fulfillment/Returns/manage-returns.md) die klanten voor dit product hebben aangemeld, met de redenen. U kunt een retour in een nieuw tabblad openen om te bewerken door te dubbelklikken op de retourrij.

<img src={require("/img/product-details-returns.png").default} height="" width="800" />