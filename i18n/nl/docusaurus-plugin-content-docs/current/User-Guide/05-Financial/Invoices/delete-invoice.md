---
sidebar_position: 6
slug: /docs/delete-invoice
description: "Verwijder een factuur in ShopCtrl: alleen facturen met de status Draft kunnen worden verwijderd. De orderregels komen dan weer beschikbaar voor een nieuwe factuur."
---

# Een factuur verwijderen

U kunt een factuur die per ongeluk is aangemaakt verwijderen, zolang deze de hoofdstatus **Draft** heeft. Na het verwijderen zijn de orderregels niet meer gefactureerd, zodat u er een nieuwe factuur voor kunt aanmaken.

:::info[**Vereiste rechten**]

Een medewerker heeft het recht **Delete Invoices** nodig. Als de factuur al naar uw boekhoudsysteem is geëxporteerd, kan alleen een beheerder deze verwijderen. Zie [Rollen en rechten beheren](/User-Guide/02-ShopCtrl-Setup/01-Authentication-and-Employee-Management/02-Roles-and-Permissions/manage-roles-and-permissions.md).

:::

## Een factuur verwijderen {#delete-an-invoice}

1. Open de factuur vanuit de tabel **Sales > Invoices**.
2. Als de factuur geen concept is, wijzigt u de hoofdstatus in **Draft** en klikt u op **Save**. Zie [Factuurstatussen](/User-Guide/05-Financial/Invoices/invoice-statuses.md).
3. Klik op **Delete** in het actiemenu bovenaan.
   <img src={require("/img/delete-invoice-button.png").default} height="" width="800" />
4. Klik op **OK** om te bevestigen.

De factuur wordt uit de tabel met facturen verwijderd en de pdf wordt gearchiveerd. De orderregels van de factuur zijn weer beschikbaar voor een nieuwe factuur.

:::warning[Let op]

* Alleen facturen met de status **Draft** kunnen worden verwijderd. Bij andere facturen krijgt u de melding *Can't delete an invoice when it does not have the status New.*
* Als de factuur al een factuurnummer heeft, ontstaat er door het verwijderen een gat in uw factuurnummering. Om het gat te vullen, noteert u het nummer voordat u de factuur verwijdert. Vul dit nummer bij de volgende factuur handmatig in het veld **Invoice code** in voordat u deze opslaat. Het nummer van een verwijderde factuur kan opnieuw worden gebruikt.
* Als de factuur al naar de klant is verstuurd, verwijdert u deze niet. [Corrigeer de factuur](/User-Guide/05-Financial/Invoices/correct-wrong-invoice.md) in plaats daarvan met een creditfactuur.

:::

## Gerelateerde artikelen {#related-articles}

* [Facturen aanmaken](/User-Guide/05-Financial/Invoices/create-invoices.md)
* [Creditfactuur](/User-Guide/05-Financial/Invoices/credit-invoice.md)
