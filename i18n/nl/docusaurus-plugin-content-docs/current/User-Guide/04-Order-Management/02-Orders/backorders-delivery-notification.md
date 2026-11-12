---
sidebar_position: 7
slug: /docs/backorders-delivery-notification
description: "Informeer klanten met backorders in ShopCtrl wanneer verwachte leverdatums wijzigen, met e-mailsjablonen die worden gevuld met gegevens uit inkooporders."
---

# Melding over de levering van backorders


Klanten met een backorder kunnen via een halfautomatisch proces op de hoogte worden gebracht van een gewijzigde leverdatum van hun producten.

Zodra er een inkooporder voor de product(en) in backorder is aangemaakt en een verwachte levering is ingesteld, worden latere wijzigingen van de backorder en de inkooporder vastgelegd.

Wijzigingen in de verwachte leverdatum van de inkooporder worden per inkooporder en per leverancier vastgelegd. De records van alle betrokken backorders staan op de pagina **Fulfillment > Orders delivery date changes**.

<img src={require("/img/orders-delivery-date-changes.png").default} height="" width="800" />

Vanaf deze pagina kunnen medewerkers klanten informeren over de nieuwe beschikbaarheidsdatums van producten, met e-mailsjablonen waarin de bijbehorende leverdatums van de order via merge fields automatisch worden ingevuld.

De bijgewerkte verwachte leverdatum van de order kan via een merge field aan de klant worden doorgegeven. Deze datum wordt berekend door een verschuiving in werkdagen (het aantal werkdagen dat nodig is om de order te leveren) op te tellen bij de gewijzigde leverdatum van de inkooporder voor het product in backorder. Deze verschuiving wordt per shop ingesteld.

De levering van de inkooporder die vertraging heeft, moet worden bijgewerkt met de nieuwe verwachte leverdatum.
De wijzigingen in de verwachte leverdatum van de inkooporder worden zowel bij de inkooporder als bij de leverancier vastgelegd. U ziet ze op het tabblad **Delivery date changes**. De statistieken per leverancier kunt u later met een rapport analyseren.

<img src={require("/img/delivery-date-changes.png").default} height="" width="800" />


## Het e-mailsjabloon voor de melding aan klanten instellen {#customer-notification-mail-template-set-up}

U kunt een universeel e-mailsjabloon maken dat in alle shops wordt gebruikt om klanten te informeren over een gewijzigde verwachte leverdatum van hun backorder.

Voor het e-mailsjabloon kunt u een aantal merge fields gebruiken.
```
$$Order.ExpectedDeliveryDate$$
$$Order.ExpectedDeliveryWeek$$
```
Deze datums worden berekend door een **leververschuiving** in werkdagen, die handmatig per shop wordt ingesteld, op te tellen bij de bijgewerkte datum waarop het product in het magazijn aankomt.

De verschuiving wordt per shop ingesteld:
**Shop settings > Delivery workdays offset in days** - het aantal werkdagen dat het gewoonlijk kost om de verkooporder te verwerken, te verzenden en te leveren.


Er zijn ook een aantal merge fields die deel uitmaken van de collectie Order row. Met deze merge fields ziet u precies van welk product de verwachte leverdatum is gewijzigd.

```
$$OrderRow.ExpectedDeliveryDate$$
$$OrderRow.ExpectedDeliveryDateChange$$
$$OrderRow.ExpectedDeliveryDateStatusEnumValue$$
$$OrderRow.ExpectedDeliveryWeek$$
$$OrderRow.PreviousExpectedDeliveryDate$$
```

De volledige lijst met merge fields voor wijzigingen in de verwachte leverdatum van orders vindt u in de [lijst met merge fields: Order expected delivery date change](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md#order-expected-delivery-date-change). U kunt ook de knop met beschikbare merge fields op de detailpagina van het sjabloon gebruiken om de dynamisch gegenereerde lijst met merge fields voor een bepaalde order op te halen.

Het sjabloon dat op de pagina met gewijzigde leverdatums wordt gebruikt om klanten te informeren, stelt u in op de pagina met shopinstellingen:
**Shop settings > Expected delivery date notification**
Kies met het pijltje aan het einde van het veld voor welk onderdeel van ShopCtrl de instelling geldt: shop, shopgroep of shop owner.

<img src={require("/img/shop-settings-expected-delivery-date-notification-and-offset.png").default} height="" width="800" />


## Gewijzigde leverdatums van orders beheren {#managing-orders-delivery-date-changes}

Alle backorders die op een levering van een inkooporder wachten en door wijzigingen in de inkooporder(s) zijn geraakt, ziet u via **Fulfillment > Orders delivery date changes**.

<img src={require("/img/orders-delivery-date-changes.png").default} height="" width="800" />

U kunt de lijst filteren op status:

* Later - orders waarvan de levering is uitgesteld
* Earlier - orders waarvan de levering eerder dan verwacht binnenkomt
* Undetermined - tussenstatus tijdens de overgangsperiode, wanneer de datum door ontbrekende gegevens niet kan worden berekend

Selecteer een of meer orders en klik op de knop **Send mail** om klanten te informeren met het sjabloon dat voor de betreffende shops is ingesteld.
U kunt ook een eigen sjabloon van het type order gebruiken door op de knop **Send customer mail** te klikken en een sjabloon uit de lijst te selecteren. Eigen sjablonen kunt u alleen gebruiken voor een selectie orders uit dezelfde shop.

De knop **Mark not changed** verwijdert het record over de gewijzigde levering van de backorder uit deze lijst.
