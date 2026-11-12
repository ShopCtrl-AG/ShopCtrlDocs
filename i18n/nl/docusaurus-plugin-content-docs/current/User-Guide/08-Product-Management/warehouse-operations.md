---
sidebar_position: 12
slug: /docs/warehouse-operations
description: "Scan en beheer voorraaditems in ShopCtrl, bekijk de voorraadtellingen per locatie en verplaats geavanceerde voorraaditems tussen locaties."
---
# Magazijnhandelingen 


De module voor magazijnhandelingen maakt deel uit van [Advanced Warehouse](/User-Guide/09-Purchasing/advanced-warehouse.md).
Om deze pagina te openen, gaat u naar het tabblad **Product Management > Warehouse Operations**. 
Op deze pagina kunt u:
* voorraaditems scannen en beheren
* een overzicht krijgen van de voorraadtellingen die voor locaties zijn uitgevoerd
* geavanceerde voorraaditems tussen locaties verplaatsen

## Product scannen {#scan-product}
<img src={require("/img/warehouse-operations-scan-product-tab.png").default} height="" width="800" />

Om de details van een voorraaditem op te halen, kunt u:
* de barcode van een voorraaditem **scannen**
* de code van het voorraaditem handmatig invoeren in het veld **Scan code**

De details van een voorraaditem zijn: 
* ID van het voorraaditem
* Productcode
* Productnaam
* Status van het gescande voorraaditem
* (Optioneel) Lotnummer
* (Optioneel) Vervaldatum
* (Optioneel) Serienummer

Zodra de details van het voorraaditem zijn geladen, kunt u de status van het voorraaditem **beheren** met de knoppen in het menu bovenaan:

* **Mark As Available**: het voorraaditem wordt beschikbaar voor toewijzing. Als het item bijvoorbeeld per vergissing als **Missing**, **Deleted** of **Damaged** is gemarkeerd, kunt u de status terugzetten naar **Available**. Op deze manier kunt u ook een gereserveerd item met de status **Parked** vrijgeven.
* **Mark As Parked**: haalt het gekozen item uit de normale automatische toewijzing. U kunt dit item nu handmatig toewijzen via het tabblad **Product details page > Stock > Parked stock**.
* **Mark As Deleted**: wijzigt de status van het voorraaditem in **Deleted**.  Het item kan niet meer worden toegewezen en de hoeveelheid **On hand** (en **Available**) van het product wordt met **1** verlaagd.
* **Mark As Damaged** wijzigt de status van het voorraaditem in **Damaged**.  Het item kan niet meer worden toegewezen en de hoeveelheid **On hand** (en **Available**) van het product wordt met **1** verlaagd.
* **Mark As Missing** wijzigt de status van het voorraaditem in **Missing**.  Het item kan niet meer worden toegewezen en de hoeveelheid **On hand** (en **Available**) van het product wordt met **1** verlaagd.


## Voorraadtelling {#stock-counting}

Deze pagina geeft een overzicht van alle voorraadtellingen die voor magazijnen en locaties zijn uitgevoerd en afgesloten.
<img src={require("/img/warehouse-operations-stock-count.png").default} height="" width="800" />

U kunt op het pictogram <img src={require("/img/icon-location.png").default}  /> naast de naam van het magazijn of de locatie klikken om de details ervan in een nieuw tabblad te openen.
U kunt ook een nieuwe telling voor een specifieke locatie aanmaken door op de knop **Add count** in de rij van de locatie te klikken. De nieuwe voorraadtelling wordt in een nieuw tabblad geopend.

## Voorraad verplaatsen {#stock-move}

Op deze pagina kunt u een of meer voorraaditems scannen en naar de geselecteerde magazijnlocatie verplaatsen.

<img src={require("/img/stock-move.png").default} height="" width="800" />
