---
sidebar_position: 3
slug: /docs/product-general-data
description: "Het tabblad General van een product in ShopCtrl: korte en lange omschrijvingen, opmerkingen bij orderregels, interne notities, fulfilmentopties en productafmetingen."
---
# Algemene productgegevens 


## Algemeen {#general}
Afhankelijk van de shopsynchronisatie-instellingen van uw ShopCtrl-omgeving kan de set gegevens die met de productdetailpagina wordt gesynchroniseerd verschillen.
Het tabblad **General** bevat alle belangrijkste productgegevens.

<img src={require("/img/product-general-tab.png").default} height="" width="800" />

**Description** korte productomschrijving.
**Description Long** gesynchroniseerde lange omschrijving van een product. U kunt de WYSIWYG-editor of de HTML-weergave gebruiken om de productomschrijving te wijzigen.
**Offer/Order Row comment** - voegt een vertaalbare opmerking toe aan de offerte- of orderregel die dit product bevat. U kunt opmerkingen toevoegen in alle talen die in uw bedrijf worden gebruikt. Gebruik de vervolgkeuzelijst Translation in het bovenste menu om tussen talen te wisselen.
<img src={require("/img/product-order-comment.png").default} height="" width="" />

**Note** - een interne notitie over het product die niet wordt gesynchroniseerd en voor alle vertalingen gelijk is.
**Fulfillment options** - het selectievakje **Is Shippable** bepaalt of een product digitaal of fysiek is.
**Dimensions:** Length, Width, Height, Diameter, Weight en Volume - afmetingen van het product die kunnen worden gebruikt voor het berekenen van verzendkosten. Let op: afmetingen kunnen in verschillende eenheden worden opgegeven.

**Miscellaneous**

**Order Sync Ref** - de ordersynchronisatie gebruikt dit veld om naar een product te verwijzen.
**Replacement period month** - dit veld wordt alleen gebruikt als het product extra aftersalesservice nodig heeft.
**Product Brand** - merk of fabrikant van het product. Selecteer het merk van een product in een vervolgkeuzelijst. Klik op het pictogram <img src={require("/img/simple-go.png").default}  /> in het veld om de detailpagina van het merk in een nieuw tabblad te openen.
**HS Code** en **HS Code 2** - voer geldige HS-codes van een product in. U kunt controleren of een code juist is door op de link **Look up code** te klikken.
**Country of Origin** - naast het productmerk kunt u ook het land opgeven waarin het product is geproduceerd.
**Create date** en **Change date** worden automatisch bijgewerkt.

## Verkoopprijs {#retail-price}

In het deelvenster voor de verkoopprijs kunt u de prijzen, btw-tarieven en publicatiestatus van een product in verschillende shops beheren.

<img src={require("/img/product-details-retail-price-unpublish.png").default} height="" width="800" />

Selecteer een rij en gebruik de knoppen **Publish** of **Unpublish** om de status van het product per shop te wijzigen. 

Met het veld **Price ex vat** kunt u de prijs exclusief btw in de standaardvaluta van de shop owner voor alle verkoopkanalen bewerken.
De getoonde **Purchase price** is de inkoopprijs exclusief btw van de voorkeursleverancier voor een product. U kunt de voorkeursleverancier kiezen op het tabblad Products details > Supplier.

Dubbelklik op de rij van een specifieke shop om deze te openen voor bewerking.

<img src={require("/img/product-details-retail-price-edit-record-price-details.png").default} height="" width="400" />

Het eerste tabblad **Details** bevat de prijsinstellingen voor de geselecteerde shop. 
U kunt kiezen of u het product wilt **publiceren**, een **Vat tariff** voor het product in deze shop instellen en een **verkoopprijs** wijzigen.

Selectievakje **Auto calc** - schakelt de automatische berekening in van de buitenlandse prijs inclusief btw, op basis van de prijs exclusief btw in de basisvaluta, de wisselkoers en het btw-tarief dat voor het product in de betreffende shop is ingesteld.

U kunt de automatische berekening uitschakelen en handmatig een prijs voor een shop instellen: 
**Foreign price ex (shop currency)** - verkoopprijs van een product in een shop exclusief btw.
**Foreign price inc (shop currency)** - verkoopprijs van een product in een shop inclusief btw.

Op het tabblad **Profit** ziet u de winstmarge per product op dit verkoopkanaal, op basis van de inkoopprijs van de voorkeursleverancier. 

<img src={require("/img/product-details-retail-price-edit-record-2.png").default} height="" width="400" />

## Vertalingen {#translations}

Alle productvertalingen die voor verschillende culturen zijn aangemaakt of gesynchroniseerd, worden op dit tabblad verzameld. Om de productvertaling te bewerken, klikt u op de knop <img src={require("/img/pencil.png").default}  /> in de rij. De bijbehorende set velden wordt in een nieuw tabblad geopend voor bewerking. 
<img src={require("/img/product-details-translation.png").default} height="" width="800" />

## Bronnen {#resources}

Op dit tabblad kunt u alle productgerelateerde bestanden, materialen en links beheren. 
<img src={require("/img/product-details-resources.png").default} height="" width="800" /> 

## Productgroep {#product-group}

Hier staan alle productgroepen waaraan het product is gekoppeld. U kunt de koppeling wijzigen door de selectievakjes in of uit te schakelen.
Zie voor meer informatie [Productgroepen](/User-Guide/08-Product-Management/product-groups.md).
<img src={require("/img/product-details-product-group.png").default} height="" width="800" />

## SEO {#seo}

Hier worden alle SEO-productgegevens uit uw webshops gesynchroniseerd.
Een pictogram aan het einde van het veld geeft de cultuur aan van de metadata die u bewerkt. U kunt de vertaalcultuur wijzigen in de vervolgkeuzelijst **Translations** in het bovenste actiemenu.

<img src={require("/img/product-details-seo.png").default} height="" width="800" />

## Eigenschappen {#properties}

Hier kunt u alle eigenschappen beheren die aan een product zijn toegewezen. [Eigenschappen](/User-Guide/08-Product-Management/product-properties.md) kunnen worden toegewezen als onderdeel van een eigenschappenset, afzonderlijk, of allebei. 
U kunt een eigenschappenset combineren met een willekeurig aantal extra eigenschappen, die zowel afzonderlijk als onderdeel van een andere eigenschappenset kunnen zijn. 

<img src={require("/img/product-details-properties.png").default} height="" width="800" />

## Productrelaties {#product-relations}

Hier worden de relaties weergegeven die het bewerkte product heeft met andere producten. 
Relatietypen:
* Contains product
* Cross-sell
* Upsell

U kunt het relatietype, de volgorde en de producthoeveelheid bewerken, of de relatie verwijderen. Klik op het pictogram aan het einde van de rij om het gerelateerde product in een nieuw tabblad te openen voor bewerking.

<img src={require("/img/product-product-relations.png").default} height="" width="800" />

## Varianteigenschappen {#variant-properties}

Dit tabblad staat alleen in het menu als u een product zonder varianten of een hoofdproduct voor varianten bewerkt. Het bevat de eigenschappen die kunnen worden gebruikt om varianten te genereren.
Als er voor een product nog geen orders zijn aangemaakt, kunt u het omzetten in een hoofdproduct voor productvarianten. Zie [Productvarianten](/User-Guide/08-Product-Management/product-variants.md) voor meer informatie.

Zodra het product aan de voorraad is toegevoegd en naar de klant is verzonden, kan het niet meer worden omgezet in een productvariant. In dat geval is dit tabblad uitgeschakeld en wordt een waarschuwing weergegeven.

Bij een hoofdproduct voor varianten toont dit tabblad de eigenschappen op basis waarvan de varianten zijn gegenereerd. Bijvoorbeeld:
<img src={require("/img/product-details-variant-properties.png").default} height="" width="800" />

## Productvarianten {#product-variants}

Dit tabblad is alleen zichtbaar als u een **hoofdproduct voor varianten** bewerkt. Het wordt gebruikt om productvarianten aan te maken en te beheren.
<img src={require("/img/product-details-product-variants.png").default} height="" width="800" />

Selecteer een of meer varianten door de selectievakjes in te schakelen. De knop **Bulk update** is nu actief en u kunt de selectie bijwerken: 

* Varianten publiceren of de publicatie ervan intrekken in de shopselectie die in de vervolgkeuzelijst in het bovenste menu is gekozen.
* Een afbeelding uploaden uit een lokale map.
* Een verkoopprijs instellen: 
    * basisprijs exclusief btw (valuta van de shop owner)
    * u kunt ook de prijs van de variant in de geselecteerde shop wijzigen. 

<img src={require("/img/product-details-product-variants-bulk-update-price.png").default} height="" width="400" />

## Synchronisatiestatus {#synchronization-status}

Op dit tabblad kunt u de synchronisatiestatus van het product met verschillende shops controleren en beheren.

<img src={require("/img/product-details-sync-status.png").default} height="" width="800" />
