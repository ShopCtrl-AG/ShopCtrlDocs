---
sidebar_position: 6
slug: /docs/configure-invoicing
description: "Stel facturatie in ShopCtrl in: standaardsjablonen voor facturen en creditfacturen, de bron van factuurdocumenten, factuurnummering, standaardbetalingsvoorwaarden, btw-tarieven en factuurinstellingen per klant."
---

# Facturatie configureren

Stel voordat u facturen aanmaakt in hoe facturen worden genummerd, welke sjablonen worden gebruikt en welke betalingsvoorwaarden gelden. De meeste instellingen maakt u per shop, in de shopinstellingen onder **Financial**.

:::info[**Vereiste rechten**]

* Shopinstellingen: het recht **Edit Tab: Financial Details** voor de shop.
* Factuurnummering en instellingen van de shop owner: de rol **Shop Owner Admin**.

:::

## De financiële instellingen openen {#open-the-financial-settings}

* **Shopinstellingen** — klik met de rechtermuisknop op de naam van de shop in het deelvenster met verkoopkanalen en selecteer **Settings**, of ga naar **Configuration > Shops** en open de shop. Open in het linkermenu **Financial**.
* **Instellingen van de shop owner** — ga naar **Configuration > Shop owners** en open de shop owner. Open in het linkermenu **Financial**.

Shopinstellingen gaan voor de instellingen van de shop owner.

## De standaardsjablonen voor facturen instellen {#set-the-default-invoice-templates}

De sjablonen bepalen hoe het factuurdocument en de factuurmail eruitzien. Zie [Het factuurdocument](/User-Guide/05-Financial/Invoices/how-invoicing-works.md#the-invoice-document).

1. Open de shopinstellingen en ga naar **Financial > Invoice**.
2. Selecteer in het gedeelte **Default invoice**:
    * Het **document template** voor de factuur-pdf
    * Het **Mail template** voor factuurmails
3. Selecteer in het gedeelte **Default credit invoice** het documentsjabloon en het e-mailsjabloon voor creditfacturen.
4. Klik op **Save and close**.

<img src={require("/img/configure-invoicing-default-templates.png").default} height="" width="800" />

U kunt per klant een ander factuursjabloon en e-mailsjabloon voor facturen instellen; zie [Factuurinstellingen per klant](#customer-invoice-settings). Hoe u sjablonen aanmaakt of bewerkt, leest u in [Documentsjablonen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/managing-document-templates.md).

## De bron van het factuurdocument kiezen {#choose-the-invoice-document-source}

In **Financial > Invoice** bepaalt de instelling **Invoice document source** waar de factuur-pdf vandaan komt:

* **System internal** (standaard) — ShopCtrl genereert de pdf op basis van uw documentsjabloon.
* **External service** — een extern systeem, bijvoorbeeld uw boekhoudsoftware, maakt de pdf en uploadt deze via de API naar ShopCtrl. De velden voor sjablonen zijn dan uitgeschakeld, en een factuur kan niet meer worden bewerkt zodra het document is geüpload.

## De factuurnummering instellen {#set-up-invoice-numbering}

Factuurnummers worden toegekend uit een nummerreeks. Creditfacturen gebruiken dezelfde nummerreeks als facturen.

1. Open de instellingen van de shop of de shop owner en ga naar **Financial > Number ranges**.
2. Stel in het gedeelte **Invoice numbering** het volgende in:
    * **Numbering at shop level** (alleen in de shopinstellingen) — selecteer dit om deze shop een eigen nummerreeks te geven. Laat het uit om voor alle shops de nummerreeks van de shop owner te gebruiken.
    * **Invoice nr reset period** — **Infinite**, of **Yearly** om de nummering elk jaar opnieuw te laten beginnen
    * **Invoicecode format** — bijvoorbeeld `INV{Nr:000000}` geeft INV000001, INV000002
    * **Last number** — het laatst gebruikte nummer. De volgende factuur krijgt het volgende nummer.
3. Klik op **Save and close**.

Alle notatieopties vindt u in [Nummerreeksen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/01-Organization-Settings/number-ranges.md).

## De standaardbetalingsvoorwaarden instellen {#set-the-default-payment-terms}

Elke factuur heeft betalingsvoorwaarden nodig. Als ShopCtrl er geen vindt, kunt u geen facturen aanmaken.

1. Open de shopinstellingen en ga naar **Financial > Payment terms**.
2. Controleer of de betalingsvoorwaarden die u nodig hebt bestaan en zijn ingeschakeld, bijvoorbeeld 14 of 30 dagen.
3. Selecteer de **Default payment terms for shop**.
4. Klik op **Save and close**.

De standaardwaarde van de shop wordt alleen gebruikt als het klantcontract, de klant en de betaalmethode geen betalingsvoorwaarden hebben. Zie [Wat er gebeurt nadat een factuur is aangemaakt](/User-Guide/05-Financial/Invoices/how-invoicing-works.md#what-happens-after-an-invoice-is-created).

## Btw-tarieven instellen {#set-up-vat-tariffs}

Ga in de shopinstellingen naar **Financial > VAT**:

* Selecteer bij **Available VAT tariffs** de btw-tarieven die de shop kan gebruiken en het tarief **Default**.
* Selecteer **Default inc VAT** om alle financiële gegevens inclusief btw te tonen.
* Klik op **Click here to manage your VAT tariffs** om tarieven toe te voegen of te wijzigen.

Hoe u de btw op een bestaande factuur wijzigt, leest u in [De btw op een factuur wijzigen](/User-Guide/05-Financial/Invoices/change-invoice-vat.md).

## Instellingen voor creditfacturen {#credit-invoice-settings}

* **Sjabloon voor creditfacturen** — stelt u in in het gedeelte **Default credit invoice**; zie [De standaardsjablonen voor facturen instellen](#set-the-default-invoice-templates).
* **Creditredenen** — legt u vast in de [retourconfiguratie](/User-Guide/07-Fulfillment/Returns/configure-returns.md#return-reasons).
* **State shipping costs on crediting** — bepaal of de gefactureerde verzendkosten worden gecrediteerd wanneer de volledige order wordt gecrediteerd (of het laatste artikel van de order wordt geretourneerd). Als deze instelling uit staat, worden verzendkosten nooit in de creditfactuur opgenomen. U stelt dit in bij:
    * **Shop settings > Financial > Invoice > Credit Invoice**
    * **Shop owner settings > Financial > Invoice management**

  De shopinstelling gaat voor de instelling van de shop owner.

<img src={require("/img/credit-invoice-shop-settings.png").default} height="" width="800" />

Hoe u creditfacturen aanmaakt, leest u in [Creditfactuur](/User-Guide/05-Financial/Invoices/credit-invoice.md).

## Factuurinstellingen per klant {#customer-invoice-settings}

Op de detailpagina van de klant kunt u in het gedeelte **Invoice** de standaardinstellingen van de shop voor één klant overschrijven: **Invoice email**, **Reminder email**, **Invoice mail template** en **Invoice template**. In het gedeelte **Financial** stelt u de **Payment terms** van de klant en een **VAT free tariff** in.

Zie [Financiële instellingen van klanten instellen](/User-Guide/02-ShopCtrl-Setup/04-Customers/create-customers.md#set-up-customers-financial-settings).

## Overige factuurinstellingen {#other-invoice-settings}

* **Factuurstatussen** — zie [Factuurstatussen toevoegen of bewerken](/User-Guide/05-Financial/Invoices/invoice-statuses.md#add-or-edit-invoice-statuses).
* **Betalingsherinneringen** — zie [Betalingsherinneringen](/User-Guide/05-Financial/Invoices/invoice-reminders.md).
* **Export naar uw boekhoudsysteem** — stelt u in bij **Financial > Invoice export**. Zie [Exact Online](/User-Guide/05-Financial/Connectors/exact-online.md).
* **Facturen automatisch aanmaken** — zie [Facturen automatisch aanmaken met triggers](/User-Guide/05-Financial/Invoices/create-invoices.md#create-invoices-automatically-with-triggers).

## Gerelateerde artikelen {#related-articles}

* [Facturen aanmaken](/User-Guide/05-Financial/Invoices/create-invoices.md)
* [Hoe facturatie werkt](/User-Guide/05-Financial/Invoices/how-invoicing-works.md)
