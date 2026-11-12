---
sidebar_position: 3
slug: /docs/collections-in-document-templates
description: "Gebruik collecties in documentsjablonen van ShopCtrl om herhalende merge fields, zoals orderregels en factuurregels, te doorlopen."
---

# Collecties in documentsjablonen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Admin** of **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Gebruik **Collections** in documentsjablonen om merge fields die vaker voorkomen, zoals orderregels of factuurregels, te doorlopen. De tekst binnen de reeks wordt voor elk element van de collectie herhaald, tot alle elementen in het document staan.
Velden die in de [lijst met merge fields](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md) als **Collections** zijn gemarkeerd, moeten binnen een bepaalde collectie worden ingevoegd.

## Een collectie merge fields toevoegen {#how-to-add-a-collection-of-merge-fields}

Een **Collection** merge fields in een Word-documentsjabloon invoegen:

1. Open het Word-document om het te bewerken.
2. Druk op `Ctrl` + `F9` om de veldaccolades `{}` in te voegen. Typ tussen de accolades `RangeStart:`, gevolgd door de naam van de collectie. Hiermee geeft u het beginpunt van de collectie aan.
3. Klik met de rechtermuisknop op het ingevoerde merge field en klik op **Update the field** om de wijzigingen toe te passen.
4. Voeg de **inhoud van de collectie** in. Deze kan bestaan uit tekst en uit specifieke merge fields uit de gekozen collectie. Maak de merge fields zo nodig op.
5. Om de reeks af te sluiten, voegt u met `Ctrl` + `F9` de veldaccolades `{}` in. Typ tussen de accolades `RangeEnd:`, gevolgd door de naam van de collectie die u hierboven hebt gekozen. Hiermee geeft u het eindpunt van de collectie aan.
6. Klik met de rechtermuisknop op het ingevoerde merge field en klik op **Update the field** om de wijzigingen toe te passen.
7. Bewerk het sjabloon verder zoals gebruikelijk.

Bijvoorbeeld een reeks voor de collectie orderregels:
![Schema van een reeks orderregels](/img/order-row-range-schema.png)

:::warning[**Let op:**]

Opmaakschakelaars voor getallen of gegevens kunnen alleen op de afzonderlijke merge fields binnen de reeks worden toegepast. Het is niet mogelijk de opmaak op de hele collectie toe te passen.

:::

### Geneste collecties merge fields {#nested-collections-of-merge-fields}

Plaats **Collections** binnen andere collecties om alleen waarden te tonen die horen bij de huidige waarde van de bovenliggende collectie.

De collectie SerialNumbers is bijvoorbeeld genest binnen de collectie PackRow.

![Geneste collecties in een pakbon](/img/nested-collectios-packbon.png)
