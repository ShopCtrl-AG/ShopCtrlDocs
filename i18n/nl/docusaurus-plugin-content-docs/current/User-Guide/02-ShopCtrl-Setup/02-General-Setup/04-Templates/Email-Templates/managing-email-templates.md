---
sidebar_position: 5
slug: /docs/managing-email-templates
description: "Beheer de lijst met e-mailsjablonen in ShopCtrl: sjablonen toevoegen, kopiëren, bewerken, zoeken, filteren op soort en publicatiestatus, en verwijderen."
---

# E-mailsjablonen beheren

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Power User** of hoger aan de shop gekoppeld zijn om sjablonen op het niveau van de shop owner aan te maken en te bewerken.

:::

## E-mailsjablonen beheren {#how-to-manage-email-templates}

Om de lijst met sjablonen te openen, gaat u naar Configuration > Templates > Mail Templates.

![E-mailsjablonen beheren](/img/managing-mail-templates.png)

U kunt bestaande sjablonen bewerken (**Edit**) en kopiëren (**Copy**), en nieuwe toevoegen (**Add**). Verwijder een sjabloon door de rij van het sjabloon te selecteren en op de knop **Delete** te klikken.
:::warning[**Let op:**]

Het **verwijderen** kan niet ongedaan worden gemaakt. Verwijder geen sjablonen die als merge field worden gebruikt.

:::
U kunt ook **zoeken** op de naam van een sjabloon en sjablonen **filteren** op soort en publicatiestatus. Standaard toont het filter alle gepubliceerde sjablonen.

Dubbelklik op de rij van een sjabloon om het in een nieuw tabblad te openen en te bewerken.
U kunt nu:

- Het sjabloon bewerken. Meer informatie vindt u in [E-mailsjablonen aanmaken en bewerken](creating-and-editing-email-templates.md).
- Het selectievakje **Publish** aanvinken om het sjabloon beschikbaar te maken voor selectie. Of systeemsjablonen verbergen voor het gewone werk van de klantenservice door de publicatie in te trekken.
- Een medewerkersgroep instellen waarvoor het sjabloon handmatig te selecteren is.
- De Shop Owner of Shop wijzigen waarvoor het sjabloon wordt gebruikt.

:::warning[**Let op**]

Als u de publicatie van een sjabloon intrekt, wordt het sjabloon uit de lijst met beschikbare sjablonen verwijderd. Als het sjabloon al voor het genereren van een bepaald document was gekozen, blijft het daar wel in gebruik.

:::

## E-mailsjablonen instellen {#how-to-set-up-email-templates}

U kunt e-mailsjablonen op verschillende niveaus instellen:

| Gericht aan             | Mail Kind                       | Niveau                                 | Pad                                                                        |
| ----------------------- | ------------------------------- | -------------------------------------- | -------------------------------------------------------------------------- |
| For Customer (Default)  | General                         | Shop                                   | Shop details page > Topic menu > Communication > E-mail > E-mail templates |
| For Customer (Reply)    | General                         | Shop                                   | Shop details page > Topic menu > Communication > E-mail > E-mail templates |
| For Customer (Forward)  | General                         | Shop                                   | Shop details page > Topic menu > Communication > E-mail > E-mail templates |
| Generic                 | NonCustomer                     | Shop                                   | Shop details page > Topic menu > Communication > E-mail > E-mail templates |
| For Customer            | Offer                           | Shop                                   | Shop details page > Topic menu > Communication > E-mail > E-mail templates |
| For Customer            | Order                           | -                                      | Handmatig te selecteren, te gebruiken in Trigger-acties en Bulk Operations |
| For Customer            | Invoice                         | Shop                                   | Shop Details Page > Topic Menu > Financial > Invoice                       |
| For Customer            | Invoice                         | Klant <br /> (overschrijft Shop)       | Customer Details Page > Topic Menu > General Info                          |
| For Customer            | Credit Invoice                  | Shop                                   | Shop Details Page > Topic Menu > Financial > Invoice                       |
| For Customer            | Invoice Reminder 1              | Shop                                   | Shop Details Page > Topic Menu > Financial > Invoice                       |
| For Customer            | Invoice Reminder 2              | Shop                                   | Shop Details Page > Topic Menu > Financial > Invoice                       |
| For Customer            | Invoice Reminder 3              | Shop                                   | Shop Details Page > Topic Menu > Financial > Invoice                       |
| For Customer            | Pre Expiration Invoice Reminder | Shop                                   | Shop Details Page > Topic Menu > Financial > Invoice                       |
| For Customer            | After Expiration Invoice Mail   | Shop                                   | Shop Details Page > Topic Menu > Financial > Invoice                       |
| For Customer            | Order Shipment                  | Vervoerder                             | Configuration > Transport > Carrier Account Details Page                   |
| For Customer            | Service Contract                | -                                      | Te selecteren op de detailpagina van het servicecontract (Service Contract Details Page) |
| For Customer            | Order Return                    | -                                      | Handmatig te selecteren, te gebruiken in Trigger-acties en Bulk Operations |
| For Supplier            | Purchase Order                  | Shop owner                             | Shop Owner Details Page > Topic Menu > Purchasing                          |
| For Supplier            | Purchase Order                  | Leverancier <br /> (overschrijft Shop owner) | Supplier Details Page > Topic Menu > Purchasing                      |
| For Supplier (Dropship) | Purchase order                  | Shop                                   | Shop details page > Topic menu > Communication > E-mail > E-mail templates |
| For Supplier (Dropship) | Purchase order                  | Leverancier <br /> (overschrijft Shop) | Supplier Details Page > Topic Menu > Dropship                              |
| For Supplier            | Stock Confirm                   | -                                      | Alleen te selecteren in een specifieke Stock Confirm-module                |
