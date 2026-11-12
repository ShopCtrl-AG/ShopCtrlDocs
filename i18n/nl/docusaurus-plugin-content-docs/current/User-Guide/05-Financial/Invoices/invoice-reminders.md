---
sidebar_position: 9
slug: /docs/invoice-reminders
description: "Stel automatische betalingsherinneringen in ShopCtrl in: kies wanneer elke herinnering na de vervaldatum wordt verstuurd en wat erin staat, of verstuur een herinnering handmatig."
---

# Betalingsherinneringen

ShopCtrl kan onbetaalde facturen voor u opvolgen door automatisch betalingsherinneringen te versturen. U bepaalt:

* **Wanneer** elke herinnering wordt verstuurd, bijvoorbeeld 2, 14 en 21 dagen na de vervaldatum
* **Wat** elke herinnering bevat, met e-mailsjablonen met [merge fields](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/merge-fields-in-email-templates.md) en uw eigen documentsjablonen
* **Wie** de herinnering ontvangt: de klant, uzelf of allebei
* **Wat er verder gebeurt**, bijvoorbeeld een taak of ticket aanmaken, of een trigger uitvoeren

Als u de [waarschuwing bij orders](#general-reminder-settings) inschakelt, zien medewerkers bij alle orders van een klant ook de waarschuwing *No new orders allowed until overdue invoices are paid!* De waarschuwing verschijnt zodra voor een van de openstaande facturen van de klant een herinnering van de gekozen stap is verstuurd.

<img src={require("/img/order-overdue-invoice-warning.png").default} height="" width="800" />

## Stappen voor herinneringen {#reminder-steps}

U kunt per shop maximaal vijf stappen instellen:

1. **Pre expiration reminder** — een e-mail die een aantal dagen vóór de vervaldatum wordt verstuurd
2. **1st reminder**
3. **2nd reminder**
4. **3rd reminder**
5. **After expiration mail** — een e-mail die een aantal dagen na de vervaldatum wordt verstuurd

Voor de 1e, 2e en 3e herinnering kiest u een actie:

* **Create task** — maakt een taak aan voor een teamlid, bijvoorbeeld een telefoongesprek
* **Create ticket** — maakt een ticket met een vaste categorie aan voor een medewerkersgroep
* **Execute trigger** — voert de bijbehorende trigger voor herinneringen uit, bijvoorbeeld om een webhook aan te roepen
* **Send email** — verstuurt een e-mail op basis van een e-mailsjabloon

Voor elke herinnering kunt u ook een **documentsjabloon** selecteren, bijvoorbeeld een factuur met een betalingsherinnering.

## Automatische herinneringen instellen {#set-up-automatic-reminders}

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Admin** of **Shop Owner Admin** aan de shop gekoppeld zijn.

:::

1. Open de shopinstellingen: klik met de rechtermuisknop op de naam van de shop in het deelvenster met verkoopkanalen en selecteer **Settings**.
2. Ga naar **Financial > Invoice**.
<img src={require("/img/shop-settings-invoice.png").default} height="" width="800" />
3. Stel de stappen voor herinneringen in die u nodig hebt, zoals hieronder beschreven.
4. Vink in het deelvenster **Reminders** het selectievakje **Disable auto generation** uit om herinneringen te gaan versturen.
5. Klik op **Save and close**.

De herinneringen worden gegenereerd door een geplande taak die één keer per dag wordt uitgevoerd, meestal 's nachts. De eerste herinneringen worden de volgende dag verstuurd, tenzij u met de support van ShopCtrl een eerdere start afspreekt.

### Pre expiration reminder {#pre-expiration-reminder}

* **Days before expiration** — wanneer de e-mail wordt verstuurd
* **Mail template** — de e-mail die wordt verstuurd

### Algemene instellingen voor herinneringen {#general-reminder-settings}

In het deelvenster **Reminders**:

* **Send the original invoice with a reminder** — voegt de oorspronkelijke factuur als bijlage toe aan e-mails met herinneringen
* **Additional days for the 1st reminder** — betalingstolerantie, zodat een betaling die op de vervaldatum is gedaan tijd heeft om binnen te komen
* **Order warning** — of medewerkers een waarschuwing zien bij de orders van een klant met een onbetaalde factuur waarvoor een herinnering is verstuurd. De standaardinstelling is **Do not show warning**. Om de waarschuwing in te schakelen, kiest u wanneer deze begint: **Show warning when 1st reminder active**, **2nd reminder active** of **3rd reminder active**. Handmatig verstuurde herinneringen tellen ook mee.
* **Employee group for ticket** en **Ticket category** (optioneel) — worden gebruikt wanneer een stap een ticket aanmaakt

Stel in het deelvenster **Restrict reminder generation** de datum **Generate after invoice date** in om alleen herinneringen te versturen voor facturen vanaf die datum.

<img src={require("/img/invoice-reminders-settings.png").default} height="" width="800" />

### 1e, 2e en 3e herinnering {#1st-2nd-and-3rd-reminder}

Voor elke herinnering:

* **Action** — wat er gebeurt wanneer de herinnering aan de beurt is
* **Document template** (optioneel) — een eigen factuurdocument voor deze herinnering
* **Reminder expires in days** — wanneer de volgende stap begint
* **Mail template** — de e-mail die wordt verstuurd, als de actie **Send email** is

<img src={require("/img/invoice-reminders-steps.png").default} height="" width="800" />

### After expiration mail {#after-expiration-mail}

* **Days after expiration** — wanneer de e-mail wordt verstuurd
* **Mail template** — de e-mail die wordt verstuurd
* **Main order status** — de status die de order krijgt wanneer de factuur is verlopen

## Handmatig een herinnering versturen {#send-a-reminder-manually}

U kunt op elk moment vanaf de detailpagina van de factuur een herinnering aanmaken. U kunt het e-mail- en documentsjabloon wijzigen en de e-mail bewerken voordat u deze verstuurt.

<img src={require("/img/invoice-details-manual-reminders.png").default} height="" width="800" />

## Gerelateerde artikelen {#related-articles}

* [Overzicht van facturen](/User-Guide/05-Financial/Invoices/index.md#quick-filters) — facturen zoeken die een herinnering nodig hebben
* [Trigger-gebeurtenissen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-events.md)
