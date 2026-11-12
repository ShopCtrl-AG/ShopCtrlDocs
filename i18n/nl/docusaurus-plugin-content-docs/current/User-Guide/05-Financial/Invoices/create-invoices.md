---
sidebar_position: 2
slug: /docs/create-invoices
description: "Maak in ShopCtrl facturen aan voor orders: vanaf de pagina met orderdetails, voor een zending, in bulk vanuit de tabel met orders, of automatisch met triggers."
---

# Facturen aanmaken

In ShopCtrl is elke factuur gebaseerd op een order. U kunt op de volgende manieren een factuur aanmaken:

* **Handmatig** vanaf de pagina met orderdetails, met volledige controle over welke orderregels op de factuur komen
* **Met één klik** vanaf de pagina met orderdetails, met **Auto create**
* **Voor een zending**, om alleen te factureren wat is verzonden
* **In bulk** voor een selectie orders vanuit de tabel met orders
* **Automatisch** met een [trigger](#create-invoices-automatically-with-triggers), bijvoorbeeld wanneer een order wordt toegevoegd of verzonden

:::info[**Vereiste rechten**]

Om facturen aan te maken, heeft een medewerker het recht **Add Invoice** voor **Orders** en het recht **Add Invoices** voor **Invoices** nodig. Zie [Rollen en rechten beheren](/User-Guide/02-ShopCtrl-Setup/01-Authentication-and-Employee-Management/02-Roles-and-Permissions/manage-roles-and-permissions.md).

:::

Een nieuwe factuur bevat alle orderregels die nog niet zijn gefactureerd, tenzij u bepaalde regels of een zending selecteert. Wat er op een factuur komt en wat er gebeurt nadat deze is aangemaakt, leest u in [Hoe facturatie werkt](/User-Guide/05-Financial/Invoices/how-invoicing-works.md).

## Een factuur aanmaken vanaf de pagina met orderdetails {#create-an-invoice-from-the-order-details-page}

Gebruik deze optie als u de factuur wilt controleren of wijzigen voordat u deze opslaat, bijvoorbeeld om bepaalde orderregels te selecteren of een andere factuurdatum in te stellen.

1. Open het tabblad **Sales > Orders** en dubbelklik op de order.
2. Klik in het actiemenu bovenaan op **Add invoice**. Als de order niet-opgeslagen wijzigingen heeft, slaat ShopCtrl die eerst op. Klik op **OK** om door te gaan.
   <img src={require("/img/create-invoice-button-order-details.png").default} height="" width="800" />
3. Er opent een nieuwe detailpagina voor de factuur in een nieuw tabblad. De factuur is nog niet opgeslagen.
   <img src={require("/img/manually-create-invoice-new-invoice-details.png").default} height="" width="800" />
4. Controleer de **Invoice rows**. Gebruik de selectievakjes in de eerste kolom om orderregels toe te voegen of te verwijderen. In de lijst **Select rows** kunt u kiezen:
    * **Not invoiced order rows** — alle regels die nog niet zijn gefactureerd
    * **Shipment: [shipment code]** — alleen de regels van die zending
5. Wijzig zo nodig de factuurgegevens: **Invoice date**, **Payment type**, **Payment terms**, **Customer reference**. Om een bepaald factuurnummer te gebruiken in plaats van het volgende nummer uit de reeks, bijvoorbeeld om een gat te vullen dat door een [verwijderde factuur](/User-Guide/05-Financial/Invoices/delete-invoice.md) is ontstaan, vult u dit in het veld **Invoice code** in.
6. Sla de factuur op met een van de opties onder de knop **Save and close**:

   <img src={require("/img/create-manual-invoice-save-and-close-buttons.png").default} height="" width="400" />
    * **Save and close** / **Save**
    * **Save, close & print** — opent de factuur-pdf om af te drukken
    * **Save, close & mail** — opent een nieuwe e-mail aan de klant met de factuur als bijlage

Bij het opslaan wordt het factuurnummer toegekend en wordt de factuur-pdf gegenereerd op basis van uw [documentsjabloon](/User-Guide/05-Financial/Invoices/how-invoicing-works.md#the-invoice-document) voor facturen.

### Een factuur aanmaken met Auto create {#auto-create-an-invoice}

Met één klik een factuur aanmaken en opslaan voor alle regels die nog niet zijn gefactureerd:

1. Open de pagina met orderdetails.
2. Klik op het pijltje naast **Add invoice** en selecteer **Auto create**.
   <img src={require("/img/auto-create-invoice-button-order-details.png").default} height="" width="800" />
3. Klik op **OK** om te bevestigen. De order wordt opgeslagen, de factuur wordt aangemaakt en de pagina wordt vernieuwd.

De nieuwe factuur verschijnt onder **Invoices** in het gedeelte **Topics** van de pagina met orderdetails. De factuur wordt niet automatisch naar de klant verstuurd.

## Een factuur aanmaken voor een zending {#create-an-invoice-for-a-shipment}

Alleen de verzonden artikelen factureren:

1. Open de zending vanuit de tabel **Shipments**, of vanaf het tabblad **Shipments** op de pagina met orderdetails.
2. Klik op **Create invoice**.
   <img src={require("/img/create-invoice-from-shipment-button.png").default} height="" width="800" />
3. Er opent een nieuwe detailpagina voor de factuur, met de regels van deze zending geselecteerd. Orderregels die van nature niet worden verzonden (bijvoorbeeld diensten) worden ook meegenomen.
4. Controleer de factuur en klik op **Save and close**.

De knop **Create invoice** is niet beschikbaar als alle regels van de zending al zijn gefactureerd of als de order in de wacht staat.

## Facturen in bulk aanmaken {#create-invoices-in-bulk}

Facturen voor meerdere orders tegelijk aanmaken:

1. Open het tabblad **Sales > Orders**.
2. Selecteer of [filter](/User-Guide/04-Order-Management/02-Orders/orders-introduction.md#filtering-orders) de orders. Tip: filter op **Not invoiced** om alleen orders zonder factuur te zien.
3. Klik in het menu **Actions** op **More > Create invoice**.
   <img src={require("/img/create-invoices-in-bulk-button.png").default} height="" width="800" />
4. Het venster **Create invoices** opent en toont de status van elke order:
    * **Ready to create invoice**
    * **Order partially invoiced.** — er wordt een factuur aangemaakt voor de overige regels
    * **Order already invoiced.** — de order wordt overgeslagen
    * **The Order is not active** / **The Order has no rows** — de order wordt overgeslagen

   <img src={require("/img/create-invoices-in-bulk.png").default} height="" width="600" />
5. Klik op een van de knoppen:
    * **Create invoices** — maakt de facturen aan
    * **Create invoices and mail** — maakt de facturen aan en e-mailt ze elk naar de klant
6. Volg de voortgang in de kolom **Message**. Klik op **Stop** om het proces te onderbreken.
7. Als het klaar is, toont de kolom **Message** bij elke gefactureerde order **Invoice created.** Klik op **Pdf** om alle aangemaakte facturen te openen.
   <img src={require("/img/create-invoices-in-bulk-result.png").default} height="" width="600" />

In bulk bevat elke factuur alle regels van de order die nog niet zijn gefactureerd, met de datum van vandaag.

Als u **Create invoices and mail** gebruikt:

* Gebruikt de e-mail het e-mailsjabloon voor facturen van de klant, of het standaard e-mailsjabloon voor facturen van de shop als de klant er geen heeft.
* Wordt de e-mail verstuurd naar het e-mailadres voor facturen van de klant. Als dat leeg is, gebruikt ShopCtrl het factuur-e-mailadres van de order en daarna het e-mailadres van de klant.
* Wordt de verzendstatus van de factuur op **Sent** gezet.

## Facturen automatisch aanmaken met triggers {#create-invoices-automatically-with-triggers}

Gebruik de Trigger-actie [Create invoice](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-actions.md#create-invoice) om automatisch facturen aan te maken, bijvoorbeeld wanneer een order wordt toegevoegd of verzonden. De actie verstuurt de factuur niet. Om de factuur te e-mailen, voegt u aan dezelfde trigger een actie **Send email** toe.

Kant-en-klare voorbeelden:

* [Een factuur aanmaken wanneer een order is verzonden](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-examples.md#create-an-invoice-when-an-order-is-shipped)
* [Een factuur aanmaken wanneer een order wordt toegevoegd](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-examples.md#create-an-invoice-when-an-order-is-added)
* [Alleen automatisch factureren bij orders met een bepaalde parameter](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-action-condition.md#4-auto-invoice-only-for-orders-with-a-specific-parameter)

Orders die op basis van een [klantcontract](/User-Guide/04-Order-Management/contracts.md) worden gegenereerd, kunnen ook automatisch worden gefactureerd en gemaild, op basis van de factuurinstellingen van het contract.

## Probleemoplossing {#troubleshooting}

Als een factuur niet kan worden aangemaakt of gemaild, raadpleeg dan [Probleemoplossing bij facturen](/User-Guide/05-Financial/Invoices/invoice-troubleshooting.md).
