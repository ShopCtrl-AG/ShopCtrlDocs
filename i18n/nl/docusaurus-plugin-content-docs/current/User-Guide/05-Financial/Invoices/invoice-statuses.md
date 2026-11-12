---
sidebar_position: 4
slug: /docs/invoice-statuses
description: "Factuurstatussen in ShopCtrl: hoofd-, verzend- en aangepaste statussen, standaardstatussen, automatische statuswijzigingen, wat u per status kunt bewerken en hoe u statussen wijzigt of configureert."
---

# Factuurstatussen

Elke factuur heeft drie statussen. U ziet ze op de detailpagina van de factuur en als pictogrammen in de [tabel Invoices](/User-Guide/05-Financial/Invoices/index.md):

* **Main status** (huispictogram) — waar de factuur zich in de levenscyclus bevindt, bijvoorbeeld **Draft**, **Open** of **Paid**
* **Sent status** (enveloppictogram) — of de factuur naar de klant is verstuurd
* **Custom status** (labelpictogram) — een optionele status voor uw eigen proces. ShopCtrl wijzigt deze niet automatisch.

<img src={require("/img/invoice-status-rows.png").default} height="" width="600" />

Elke status is gekoppeld aan een **basisstatus** (base status). De basisstatus bepaalt hoe ShopCtrl de factuur behandelt en welke kleur het pictogram heeft:

* **Pause** (oranje) — concept of in de wacht
* **Active** (geel) — open, moet nog worden verwerkt
* **Finished** (groen) — afgerond, bijvoorbeeld betaald of verstuurd
* **Cancel** (rood) — geannuleerd

## Standaardstatussen {#default-statuses}

**Main status**
* **Draft** (Pause) — de factuur kan nog worden bewerkt en heeft nog geen factuurnummer
* **Open** (Active) — de factuur is definitief en wacht op betaling
* **Paid** (Finished) — de factuur is volledig betaald
* **Credited** (Finished) — de factuur is tenietgedaan door een creditfactuur
* **Cancelled** (Cancel)

**Sent status**
* **Not sent** (Active)
* **Sent** (Finished)
* **Do not send** (Pause) — voor facturen die niet naar de klant moeten worden verstuurd

Een nieuwe factuur krijgt de statussen **Open** en **Not sent**. U kunt eigen statussen toevoegen; zie [Factuurstatussen toevoegen of bewerken](#add-or-edit-invoice-statuses).

## Automatische statuswijzigingen {#automatic-status-changes}

ShopCtrl wijzigt de status van een factuur wanneer:

* **De factuur is betaald** — wanneer de betalingen het factuurtotaal dekken, verandert de hoofdstatus in **Paid**. Als er een betaling wordt verwijderd en de factuur niet meer volledig is betaald, verandert de status weer in **Open**.
* **De factuur is gemaild** — wanneer een e-mail met de factuur-pdf als bijlage wordt verstuurd, verandert de verzendstatus in **Sent**.
* **De factuur is gecrediteerd** — wanneer een creditfactuur een onbetaalde factuur van dezelfde order tenietdoet, krijgen beide facturen de status **Credited**.

Als u een factuur handmatig op **Paid** zet, maakt ShopCtrl een betaling aan voor het openstaande bedrag.

## Wat u per hoofdstatus kunt doen {#what-you-can-do-in-each-main-status}

| | Draft | Open, Paid, Credited |
|---|---|---|
| Factuurgegevens en -regels bewerken | Ja | Nee |
| Factuurnummer | Nog niet toegekend | Toegekend |
| De factuur afdrukken, mailen of versturen | Nee | Ja |
| De factuur verwijderen | Ja | Nee |

Wanneer u een factuur met de status **Draft** wijzigt in **Open**, kent ShopCtrl het factuurnummer toe en vult het de factuurdatum in als die leeg is. Hoe u een factuur corrigeert die geen concept meer is, leest u in [De btw op een factuur wijzigen](/User-Guide/05-Financial/Invoices/change-invoice-vat.md) of [Een onjuiste factuur corrigeren](/User-Guide/05-Financial/Invoices/correct-wrong-invoice.md).

:::info[Let op]

Voor het terugzetten van een factuur van **Open** naar **Draft** is een apart recht nodig. Als de factuur al naar uw boekhoudsysteem is geëxporteerd, kan mogelijk alleen een beheerder de hoofdstatus wijzigen.

:::

## De status van een factuur wijzigen {#change-the-status-of-an-invoice}

**Op de detailpagina van de factuur**

1. Open de factuur.
2. Selecteer in de statusregels de nieuwe hoofd-, verzend- of aangepaste status.
3. Vul eventueel een opmerking in, of stel een actiedatum in als herinnering voor opvolging.
4. Klik op **Save and close**.

**Voor meerdere facturen tegelijk**

Selecteer de facturen in de tabel **Sales > Invoices** en klik op **More > Change status**. Zie [Overzicht van facturen](/User-Guide/05-Financial/Invoices/index.md#change-the-status-of-invoices).

**Automatisch**

Gebruik de Trigger-actie [Set invoice status](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-actions.md#set-invoice-status).

U kunt alleen de statussen selecteren die u mag instellen.

## Factuurstatussen toevoegen of bewerken {#add-or-edit-invoice-statuses}

:::info[**Vereiste rechten**]

Alleen een **Shop Owner Admin** kan factuurstatussen toevoegen of bewerken.

:::

1. Ga naar **Configuration > Statuses > Invoice statuses**.

   <img src={require("/img/invoice-status-list.png").default} height="" width="800" />

2. Klik op **Add**, of dubbelklik op een bestaande status.
3. Vul de velden in:
    * **Status type** — Main, Sent of Custom status
    * **Base status** — bepaalt hoe ShopCtrl facturen met deze status behandelt
    * **Name** — de naam die gebruikers zien
    * **Shop** — laat dit leeg om de status voor alle shops te gebruiken
    * **Is default for** — maakt dit de standaardstatus, bijvoorbeeld de status die een nieuwe factuur krijgt
    * **Icon** — optioneel eigen pictogram
    * **Has actiondate** — gebruikers kunnen bij deze status een actiedatum instellen

   <img src={require("/img/invoice-status-detail.png").default} height="" width="600" />

4. Sla de status op.

## Factuurstatus van de order {#invoice-status-on-the-order}

Op de detailpagina van de order staan de facturen van de order onder **Invoices** in het gedeelte **Topics**. De factuurstatus van de order wordt als klein pictogram bij de ordertotalen getoond. Beweeg de muis over het pictogram om de status te zien. De status is gebaseerd op de facturen van de order:

* **Not invoiced** — een deel van de orderregels is nog niet gefactureerd
* **Not sent** — een deel van de orderregels staat op een factuur met de status **Draft**
* **Not paid** — een deel van de orderregels staat op een factuur met de status **Open**
* **Paid** — alle orderregels staan op betaalde facturen

<img src={require("/img/order-invoice-status.png").default} height="" width="800" />

:::info[Let op]

Bij de order betekent **Not sent** dat een factuur nog een concept is, niet dat de factuur niet is gemaild. Om te zien of een factuur is gemaild, kijkt u naar de verzendstatus van de factuur.

:::
