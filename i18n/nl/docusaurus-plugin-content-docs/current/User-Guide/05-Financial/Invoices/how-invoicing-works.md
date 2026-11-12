---
sidebar_position: 3
slug: /docs/how-invoicing-works
description: "Hoe facturatie in ShopCtrl werkt: welke orderregels, verzendkosten en toeslagen worden gefactureerd, en wat er met de factuur en de order gebeurt nadat een factuur is aangemaakt."
---

# Hoe facturatie werkt

In ShopCtrl is elke factuur gebaseerd op een order. In dit artikel leest u wat er op een factuur komt en wat ShopCtrl doet nadat de factuur is aangemaakt. Hoe u facturen aanmaakt, leest u in [Facturen aanmaken](/User-Guide/05-Financial/Invoices/create-invoices.md).

## Wat er op een factuur komt {#what-is-included-in-an-invoice}

Standaard bevat een nieuwe factuur **alle orderregels die nog niet zijn gefactureerd**, met de bestelde hoeveelheid, de prijs, de korting en de btw. ShopCtrl controleert niet of de order is betaald of verzonden. Als u alleen verzonden artikelen wilt factureren, [maakt u de factuur aan voor een zending](/User-Guide/05-Financial/Invoices/create-invoices.md#create-an-invoice-for-a-shipment).

Een order kan **meerdere facturen** hebben. Elke factuur bevat hele orderregels: u kiest welke regels erop komen, maar u kunt niet een deel van de hoeveelheid van een regel factureren.

* **Verzendkosten** — de verzendkosten van de order die nog niet zijn gefactureerd.
* **Betaalkosten** (payment fee) — worden alleen aan de eerste factuur van de order toegevoegd.
* **Orderkorting** — het deel van de orderkorting dat nog niet is gefactureerd.

<img src={require("/img/invoice-totals.png").default} height="" width="400" />

U kunt geen factuur aanmaken als:

* De hoofdstatus van de order **On hold** of **Cancelled** is
* Alle orderregels al zijn gefactureerd
* De order geen regels heeft

## Wat er gebeurt nadat een factuur is aangemaakt {#what-happens-after-an-invoice-is-created}

* **Factuurnummer** — wordt automatisch toegekend uit de [nummerreeks](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/01-Organization-Settings/number-ranges.md) voor facturen van de shop of de shop owner. Facturen met de status **Draft** krijgen pas een nummer wanneer hun status in **Open** verandert.
* **Factuurstatus** — de factuur krijgt de standaardstatus **Open** van de shop en de verzendstatus **Not sent**. Als de order al volledig is betaald, krijgt de factuur de status **Paid**.
* **Factuur-pdf** — wordt gegenereerd op basis van een documentsjabloon. Zie [Het factuurdocument](#the-invoice-document).
* **Betalingsvoorwaarden** — worden overgenomen van het klantcontract, de klant, de betaalmethode of de standaardinstelling van de shop, in deze volgorde.
* **Betalingen** — betalingen die al op de order zijn geregistreerd, worden automatisch aan de factuur toegewezen.
* **Order** — de factuurstatus van de order wordt bijgewerkt en er wordt een opmerking *Invoice '[code]' created.* aan de order toegevoegd.

De factuur wordt **niet** automatisch naar de klant verstuurd, tenzij u **Save, close & mail**, **Create invoices and mail** of een trigger met de actie **Send email** gebruikt. Zie [Facturen aanmaken](/User-Guide/05-Financial/Invoices/create-invoices.md).

## Het factuurdocument {#the-invoice-document}

De factuur-pdf wordt bij het opslaan van de factuur gegenereerd op basis van een **documentsjabloon**. Het sjabloon bepaalt de opmaak en de inhoud van het document, en gebruikt [merge fields](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md) om de factuurgegevens in te vullen, zoals het adres van de klant, de factuurregels en de totalen.

ShopCtrl gebruikt het eerste sjabloon dat het vindt:

1. Het **Invoice template** van de Trigger-actie [Create invoice](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-actions.md#create-invoice), als de factuur door een trigger wordt aangemaakt
2. Het factuursjabloon dat voor de klant is ingesteld
3. Het standaardfactuursjabloon van de shop

Creditfacturen gebruiken het standaardsjabloon voor creditfacturen. Als er geen sjabloon voor creditfacturen is ingesteld, wordt het factuursjabloon gebruikt.

<img src={require("/img/invoice-details-with-document.png").default} height="" width="800" />

Hoe u de standaardsjablonen instelt, leest u in [Facturatie configureren](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/configure-invoicing.md). Hoe u een sjabloon aanmaakt of bewerkt, leest u in [Documentsjablonen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/managing-document-templates.md).

:::info[Let op]

Als u een sjabloon wijzigt, behouden bestaande facturen hun oude pdf. Om ze bij te werken, selecteert u de facturen in de tabel **Sales > Invoices** en klikt u op **More > Recreate invoice PDF**.

:::
