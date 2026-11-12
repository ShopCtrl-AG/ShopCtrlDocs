---
sidebar_position: 7
slug: /docs/credit-invoice
description: "Maak in ShopCtrl een creditfactuur aan om een eerdere factuur geheel of gedeeltelijk te crediteren: bij terugbetalingen, retouren, fouten in de factuur of per ongeluk uitgebrachte facturen."
---

# Creditfactuur

Een creditfactuur crediteert een eerdere factuur geheel of gedeeltelijk. Gebruik een creditfactuur wanneer:

* De klant producten retourneert en om terugbetaling vraagt
* De klant een gedeeltelijke terugbetaling krijgt
* Het bedrag op de oorspronkelijke factuur onjuist is
* De factuur per ongeluk is uitgebracht

Hoe u een onjuiste factuur vervangt door een juiste, leest u in [Een onjuiste factuur corrigeren](/User-Guide/05-Financial/Invoices/correct-wrong-invoice.md).

Een creditfactuur kan ook automatisch worden aangemaakt wanneer u [een retour verwerkt](/User-Guide/07-Fulfillment/Returns/manage-returns.md#creating-return). De retourreden wordt dan als creditreden gebruikt.

:::info[**Vereiste rechten**]

Een medewerker heeft het recht **Add Invoices** nodig. Zie [Rollen en rechten beheren](/User-Guide/02-ShopCtrl-Setup/01-Authentication-and-Employee-Management/02-Roles-and-Permissions/manage-roles-and-permissions.md).

:::

## Een creditfactuur aanmaken vanuit de tabel met facturen {#create-a-credit-invoice-from-the-invoices-table}

1. Open het tabblad **Sales > Invoices**.
2. Selecteer de factuur die moet worden gecrediteerd.
3. Klik op **More > Create credit invoice**.
<img src={require("/img/create-credit-invoice-from-invoices-table.png").default} height="" width="800" />
4. De detailpagina van de creditfactuur wordt in een nieuw tabblad geopend. Ken zo nodig de **Invoice code** toe of bewerk deze.
<img src={require("/img/create-credit-invoice.png").default} height="" width="800" />
5. Klik op **Save and close**. Om de creditfactuur ook naar de klant te e-mailen, selecteert u **Save, close & mail** onder de knop **Save and close**.

De pdf van de creditfactuur wordt gegenereerd en aan de creditfactuur en aan de order toegevoegd.

## Een creditfactuur aanmaken vanaf de pagina met orderdetails {#create-a-credit-invoice-from-the-order-details-page}

1. Open de order vanuit de tabel **Sales > Orders**.
2. Open in het gedeelte **Topics** van de pagina met orderdetails het onderdeel **Invoices**.
3. Selecteer de factuur en klik op **Create credit invoice**.
<img src={require("/img/create-credit-invoice-from-order-details.png").default} height="" width="800" />
4. Selecteer in het pop-upvenster de **Reason** voor de creditering.
5. Selecteer **Create credit invoice** en kies de status van de creditfactuur:
    * **Draft** — de creditfactuur wordt aangemaakt zonder factuurcode
    * **Open** — de creditfactuur krijgt automatisch een factuurcode

   <img src={require("/img/credit-invoice-popup.png").default} height="" width="400" />

6. Klik op **Create**.

Als u een concept-creditfactuur hebt aangemaakt, kent u een factuurcode toe door de status te wijzigen in **Open**. Verstuur de creditfactuur daarna naar de klant.

## Gerelateerde artikelen {#related-articles}

* [Instellingen voor creditfacturen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/configure-invoicing.md#credit-invoice-settings) — sjabloon voor creditfacturen, creditredenen en verzendkosten
* [Een onjuiste factuur corrigeren](/User-Guide/05-Financial/Invoices/correct-wrong-invoice.md)
* [Retouren beheren](/User-Guide/07-Fulfillment/Returns/manage-returns.md)
