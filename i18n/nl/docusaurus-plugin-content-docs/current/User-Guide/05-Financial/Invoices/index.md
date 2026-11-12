---
sidebar_position: 1
slug: /docs/invoices
description: "Werk met de tabel Invoices in ShopCtrl: facturen zoeken en filteren, een factuur of de bijbehorende order openen, pdf's bekijken, facturen mailen, statussen wijzigen en facturen exporteren."
---

# Overzicht van facturen

Alle facturen staan in de tabel **Sales > Invoices**. Hier zoekt u facturen, volgt u onbetaalde of nog niet verstuurde facturen op en voert u acties uit op een of meer facturen tegelijk.

<img src={require("/img/invoices-table-overview.png").default} height="" width="800" />

In ShopCtrl is elke factuur gebaseerd op een order. Hoe u facturen aanmaakt, leest u in [Facturen aanmaken](/User-Guide/05-Financial/Invoices/create-invoices.md).

:::info[**Vereiste rechten**]

Om facturen te zien, heeft een medewerker het recht **View Invoices** nodig. Om statussen te wijzigen of facturen te mailen, is ook het recht **Edit Invoices** nodig. Zie [Rollen en rechten beheren](/User-Guide/02-ShopCtrl-Setup/01-Authentication-and-Employee-Management/02-Roles-and-Permissions/manage-roles-and-permissions.md).

:::

## Facturen zoeken {#find-invoices}

Gebruik de filters boven de tabel. Filters worden gecombineerd: een factuur wordt alleen getoond als deze aan alle filters voldoet.

* **Search by keyword...** — typ een zoekterm en druk op **Enter**. Er wordt gezocht in de factuurcode, de ordercode, de klantreferentie, en de naam, het bedrijf, het e-mailadres, de postcode en de plaats van de factuurontvanger.
* **Status...** — selecteer een of meer hoofd-, verzend- of aangepaste statussen en klik op **Apply**.
* **Order types...** — toon alleen facturen voor bepaalde ordertypen.
* **Date range** — filter op de factuurdatum.
* **Customer** — toon de facturen van één klant.

<img src={require("/img/invoices-table-filters.png").default} height="" width="800" />

### Snelfilters {#quick-filters}

Gebruik de lijst met snelfilters om facturen te zien die opvolging nodig hebben:

* **Not paid** — openstaande facturen en conceptfacturen
* **Paid** — betaalde facturen, inclusief gecrediteerde facturen
* **Not sent** — facturen die nog niet naar de klant zijn verstuurd
* **Needs a reminder** — openstaande facturen waarvan de betaaldatum is verstreken en die een (volgende) [betalingsherinnering](/User-Guide/05-Financial/Invoices/invoice-reminders.md) nodig hebben
* **Needs export**, **Export requested**, **Export failed**, **Not successfully exported** — facturen die u moet opvolgen voor de export naar uw boekhoudsysteem

Selecteer **All** om het snelfilter te wissen.

<img src={require("/img/invoices-quick-filter.png").default} height="" width="800" />

## Een factuur of de bijbehorende order openen {#open-an-invoice-or-its-order}

* Om een factuur te openen, dubbelklikt u erop, of selecteert u de factuur en klikt u op **Edit**.
* Om de order van een factuur te openen, selecteert u de factuur en klikt u op **More > Edit corresponding order**.

## Factuur-pdf's bekijken en afdrukken {#view-and-print-invoice-pdfs}

* Om de pdf van één factuur te bekijken, klikt u op het pictogram in de kolom **Docs** en selecteert u **Show invoice PDF**. Als er een herinnering is verstuurd, kunt u ook **Show reminder PDF** selecteren.
* Om de pdf's van meerdere facturen tegelijk te openen, bijvoorbeeld om ze af te drukken, selecteert u de facturen en klikt u op **Reporting > View pdf**.
* Als factuur-pdf's verouderd zijn, bijvoorbeeld nadat u het factuursjabloon hebt gewijzigd, selecteert u de facturen en klikt u op **More > Recreate invoice PDF**.

<img src={require("/img/invoices-docs-column-menu.png").default} height="" width="800" />

## Facturen mailen {#mail-invoices}

Facturen naar klanten e-mailen:

1. Selecteer de facturen.
2. Klik op **More > Mail invoices**. Er verschijnt een venster met per factuur de klant, het e-mailadres en het e-mailsjabloon.

   <img src={require("/img/invoices-mail-invoices-window.png").default} height="" width="600" />

3. Controleer de waarschuwingen. Facturen zonder e-mailadres, e-mailsjabloon of factuur-pdf worden niet verstuurd.
4. Klik op **Send**.

De verzendstatus van de gemailde facturen verandert in **Sent**.

## De status van facturen wijzigen {#change-the-status-of-invoices}

1. Selecteer een of meer facturen.
2. Klik op **More > Change status** en kies **Main status**, **Sent status** of **Custom status**.

   <img src={require("/img/invoices-change-status-menu.png").default} height="" width="400" />

3. Selecteer de nieuwe status.

De lijst toont alleen de statussen die u mag instellen. U kunt een factuur bijvoorbeeld als **Paid** markeren als de betaling buiten ShopCtrl is ontvangen. Zie [Factuurstatussen](/User-Guide/05-Financial/Invoices/invoice-statuses.md).

## Een creditfactuur aanmaken {#create-a-credit-invoice}

Selecteer de factuur en klik op **More > Create credit invoice**. Zie [Creditfactuur](/User-Guide/05-Financial/Invoices/credit-invoice.md).

## Facturen exporteren {#export-invoices}

* **Naar Excel** — klik op **Reporting > Export list** en kies **Export current page**, **Export selection** of **Export all**.
* **Naar uw boekhoudsysteem** — selecteer de facturen, klik op **Export > Export invoices**, kies de connector en klik op **Start export**. Zie [Exact Online](/User-Guide/05-Financial/Connectors/exact-online.md).

<img src={require("/img/invoices-export-menus.png").default} height="" width="800" />

De kolom **Export** toont het exportresultaat van elke factuur.

## Kolommen tonen of verbergen {#show-or-hide-columns}

Via het menu in de kolomkop kunt u kolommen toevoegen of verwijderen. Uw kolomindeling wordt voor uw gebruiker opgeslagen.

<img src={require("/img/invoices-columns-menu.png").default} height="" width="400" />

Standaard worden onder andere de statuspictogrammen, **Code**, **Date**, **Customer**, **Order**, **Payment terms**, **Pay before**, **Total** en **Docs** getoond. **Pay before** wordt rood weergegeven als de vervaldatum van een onbetaalde factuur is verstreken.

Handige kolommen die u kunt toevoegen:

* **Customer ref**, **VAT number**, **Payment type**
* **SumPayments** — het betaalde bedrag
* **Reminders** — het aantal verstuurde herinneringen
* **Fin period** — de financiële periode
* **Bill to address**, **Bill to city**, **Bill to postal code**, **Bill to country**

## Gerelateerde artikelen {#related-articles}

* [Facturatie configureren](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/configure-invoicing.md)
* [Facturen aanmaken](/User-Guide/05-Financial/Invoices/create-invoices.md)
* [Factuurstatussen](/User-Guide/05-Financial/Invoices/invoice-statuses.md)
* [Een onjuiste factuur corrigeren](/User-Guide/05-Financial/Invoices/correct-wrong-invoice.md)
* [Betalingsherinneringen](/User-Guide/05-Financial/Invoices/invoice-reminders.md)
