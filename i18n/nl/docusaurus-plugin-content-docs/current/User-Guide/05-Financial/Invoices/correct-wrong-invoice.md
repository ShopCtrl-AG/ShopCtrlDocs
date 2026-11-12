---
sidebar_position: 8
slug: /docs/correct-wrong-invoice
description: "Corrigeer een onjuiste factuur in ShopCtrl: crediteer de factuur, bereid de order voor op een nieuwe factuur en breng een juiste factuur uit, of de factuur nu betaald is of niet."
---

# Een onjuiste factuur corrigeren

Als een factuur een fout bevat, bijvoorbeeld onjuiste klantgegevens, prijzen of btw, kunt u deze niet meer bewerken zodra de factuur definitief is. In plaats daarvan crediteert u de onjuiste factuur en brengt u een nieuwe, juiste factuur uit. Dit werkt zowel bij betaalde als bij onbetaalde facturen.

ShopCtrl doet het meeste werk voor u met de optie **Create credit invoice & prepare for a new invoice**. Deze optie:

* Maakt een creditfactuur aan die de onjuiste factuur tenietdoet
* Kopieert de orderregels, zodat ze op de nieuwe factuur kunnen komen
* Verplaatst de verzendgegevens van de orderregels naar de kopieën, zodat uw voorraadregistratie klopt
* Verwijdert de betaling van de onjuiste factuur, zodat deze aan de nieuwe factuur kan worden toegewezen

:::tip

Als de factuur nog een concept is, of als u alleen de btw hoeft te wijzigen, hebt u misschien geen creditfactuur nodig. Zie [De btw op een factuur wijzigen](/User-Guide/05-Financial/Invoices/change-invoice-vat.md) en [Een factuur verwijderen](/User-Guide/05-Financial/Invoices/delete-invoice.md).

:::

## Stap 1. De onjuiste factuur crediteren {#step-1-credit-the-wrong-invoice}

1. Open de order vanuit de tabel **Sales > Orders**.
2. Open in het gedeelte **Topics** van de pagina met orderdetails het onderdeel **Invoices**.
3. Selecteer de onjuiste factuur en klik op **Create credit invoice**.
4. Selecteer in het pop-upvenster de **Reason** voor de creditering.
5. Selecteer **Create credit invoice & prepare for a new invoice** en kies de status van de creditfactuur:
    * **Draft** — de creditfactuur wordt aangemaakt zonder factuurcode
    * **Credited** — de creditfactuur krijgt automatisch een factuurcode
   <img src={require("/img/create-credit-invoice-and-prepare.png").default} height="" width="400" />
6. Klik op **Create**.

De orderregels worden gecrediteerd met de reden die u hebt gekozen en gekopieerd met hun verzendgegevens. De onjuiste factuur en de creditfactuur heffen elkaar op. Als de onjuiste factuur was betaald, maakt ShopCtrl de betalingen aan die nodig zijn om beide facturen in evenwicht te brengen.

<img src={require("/img/reissued-credit-invoice.png").default} height="" width="800" />

## Stap 2. De order corrigeren {#step-2-correct-the-order}

Open de order, wijzig de gegevens die onjuist waren en sla de order op. Bijvoorbeeld:

* **Klantgegevens** — corrigeer de naam, het adres of de contactgegevens.
* **Onjuiste btw** — wijzig het btw-tarief van de orderregels. Waar u dat doet, leest u in [De btw op een factuur wijzigen](/User-Guide/05-Financial/Invoices/change-invoice-vat.md#change-the-vat).
* **Factuur zonder btw** — de klant geeft na het uitbrengen van de factuur een geldig btw-nummer op en heeft een factuur zonder btw nodig (intracommunautaire levering). Voeg het btw-nummer toe aan de contactgegevens op de order, en wijzig het btw-tarief van de orderregels in uw btw-tarief voor intracommunautaire leveringen (0%).

<img src={require("/img/order-contact-info-vat-number.png").default} height="" width="600" />

:::warning[Bekend probleem]

Nadat u een factuur hebt gecrediteerd, kunt u het btw-tarief van de **verzendkosten** en de **betaalkosten** op de order niet meer wijzigen. De nieuwe factuur gebruikt daarvoor het oorspronkelijke btw-tarief. Alleen de btw van de orderregels kan worden gewijzigd.

Als u de btw van de verzendkosten of de betaalkosten moet wijzigen, neem dan contact op met de support van ShopCtrl voordat u de nieuwe factuur aanmaakt.

:::

## Stap 3. De nieuwe factuur aanmaken {#step-3-create-the-new-invoice}

Maak de nieuwe factuur voor de order handmatig aan. Zie [Een factuur aanmaken vanaf de pagina met orderdetails](/User-Guide/05-Financial/Invoices/create-invoices.md#create-an-invoice-from-the-order-details-page).

Wanneer u de nieuwe factuur opslaat, wordt de betaling van de klant er automatisch aan toegewezen.

## Gerelateerde artikelen {#related-articles}

* [Creditfactuur](/User-Guide/05-Financial/Invoices/credit-invoice.md)
* [Facturen aanmaken](/User-Guide/05-Financial/Invoices/create-invoices.md)
