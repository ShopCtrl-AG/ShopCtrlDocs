---
sidebar_position: 5
slug: /docs/managing-document-templates
description: "Beheer de lijst met documentsjablonen in ShopCtrl: sjablonen toevoegen, kopiëren, bewerken, zoeken, filteren en verwijderen onder Configuration > Templates."
---

# Documentsjablonen beheren

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Admin** of **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

## Documentsjablonen beheren {#how-to-manage-document-templates}

Om de lijst met sjablonen te openen, gaat u naar **Configuration > Templates > Document Templates**.

![Documentsjablonen beheren](/img/managing-document-templates.png)

U kunt bestaande sjablonen bewerken (**Edit**) en kopiëren (**Copy**), en nieuwe toevoegen (**Add**). Verwijder een sjabloon door de rij van het sjabloon te selecteren en op de knop **Delete** te klikken.
:::warning[**Let op:**]

Het **verwijderen** kan niet ongedaan worden gemaakt.

:::
U kunt ook **zoeken** op de naam van een sjabloon en sjablonen **filteren** op type.

Dubbelklik op de rij van een sjabloon om het in een nieuw tabblad te openen en te bewerken.
U kunt nu:

- Het sjabloon bewerken. Meer informatie vindt u in [Documentsjablonen aanmaken en bewerken](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/creating-and-editing-document-templates.md).
- Het selectievakje **Publish** aanvinken om het sjabloon beschikbaar te maken voor selectie.
- De **Shop Owner** of **Shop** wijzigen waarvoor het sjabloon wordt gebruikt.

:::warning[**Let op**]

Als u de publicatie van een sjabloon intrekt, wordt het sjabloon uit de lijst met beschikbare sjablonen verwijderd. Als het sjabloon al voor het genereren van een bepaald document was gekozen, blijft het daar wel in gebruik.

:::

## Documentsjablonen instellen {#how-to-set-up-document-templates}

U kunt documentsjablonen op verschillende niveaus instellen:
| Type documentsjabloon | Niveau | Pad |
| --- | --- | --- |
| Invoice <br /> Vat Free Invoice | Shop | Shop Details Page > Topic Menu > Financial > Invoice |
| Invoice <br /> Vat Free Invoice | Klant <br />(overschrijft Shop) | Customer Details Page > Topic Menu > General Info |
| Reminder1st | Shop | Shop Details Page > Topic Menu > Financial > Invoice |
| Reminder2nd | Shop | Shop Details Page > Topic Menu > Financial > Invoice |
| Reminder3rd | Shop | Shop Details Page > Topic Menu > Financial > Invoice |
| Credit Invoice | Shop | Shop Details Page > Topic Menu > Financial > Invoice |
| Offer | Shop | Shop Details Page > Topic Menu > Document Templates |
| Order | Shop | Document genereren via een trigger. Document handmatig aanmaken via Orders grid > More > Create document |
| Picklist | Shop | Shop Details Page > Topic Menu > Document Templates |
| Packing Slip | Shop | Shop Details Page > Topic Menu > Document Templates |
| Return Form | Shop | Shop Details Page > Topic Menu > Returns |
| Purchase Order | Shop owner | Shop Owner Details Page > Topic Menu > Purchasing |
| Purchase Order | Leverancier <br />(overschrijft Shop owner) | Supplier Details Page > Topic Menu > Purchasing |
| Dropship Purchase Order | Shop | Shop Details Page > Topic Menu > Document Templates |
| Shipping Label | Vervoerder | Configuration > Transport > Carrier Account Details Page |
| Product Label | Shop owner | Shop Owner Details Page > Topic Menu >Warehouse Settings |
| Product Label | Product <br />(overschrijft Shop owner) | Product Details Page > Topic Menu > Stock > Stock Settings |
| Stock Item Label | Shop owner | Shop Owner Details Page > Topic Menu > Warehouse Settings |
| Warehouse Location Label | Shop owner | Shop Owner Details Page > Topic Menu > Warehouse Settings |
