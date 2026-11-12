---
sidebar_position: 5
slug: /docs/change-invoice-vat
description: "Wijzig de btw op een factuur in ShopCtrl: zet de factuur op Draft, wijzig de btw van orderregels, verzendkosten of betaalkosten op de order, en maak de factuur weer definitief."
---

# De btw op een factuur wijzigen

De btw op een factuur komt van de order. Om de btw te wijzigen, zet u de factuur op **Draft**, wijzigt u de btw op de order en maakt u de factuur weer definitief.

## De btw wijzigen {#change-the-vat}

1. Open de factuur, wijzig de hoofdstatus in **Draft** en klik op **Save**.
   <img src={require("/img/change-invoice-vat-set-draft.png").default} height="" width="600" />
2. Open de order: klik in de tabel **Sales > Invoices** op **More > Edit corresponding order**, of klik op de ordercode op de detailpagina van de factuur.
3. Wijzig de btw van elk onderdeel waarvoor dat nodig is:
    * **Orderregel** — bewerk de regel en selecteer het nieuwe btw-tarief.

      <img src={require("/img/change-invoice-vat-order-row.png").default} height="" width="600" />

    * **Verzendkosten** — klik in de ordertotalen op **Shipping costs**, selecteer het btw-tarief en klik op **Ok**.
    * **Betaalkosten** — klik in de ordertotalen op **Payment fee**, selecteer het btw-tarief en klik op **Ok**.
      <img src={require("/img/change-invoice-vat-order-totals.png").default} height="" width="600" />

4. Sla de order op.
5. Open de factuur opnieuw, zet de hoofdstatus terug op **Open** (of **Paid** als de factuur al was betaald) en klik op **Save**.

De factuur-pdf wordt opnieuw gegenereerd wanneer u de hoofdstatus wijzigt.

:::tip

Als de factuur-pdf nog de oude btw toont, selecteert u de factuur in de tabel **Sales > Invoices** en klikt u op **More > Recreate invoice PDF**.

:::

:::warning[Let op]

U kunt de btw niet voor de hele order in één keer wijzigen (door op **VAT total** op de order te klikken) zolang de order een factuur heeft, ook niet als dat een concept is. Wijzig de btw van elke regel, de verzendkosten en de betaalkosten afzonderlijk.

:::

## Wanneer u beter een creditfactuur gebruikt {#when-to-use-a-credit-invoice-instead}

Als de factuur al naar de klant is verstuurd of naar uw boekhoudsysteem is geëxporteerd, [corrigeert u de factuur](/User-Guide/05-Financial/Invoices/correct-wrong-invoice.md) in plaats daarvan met een creditfactuur en een nieuwe factuur.

Voor het terugzetten van een factuur van **Open** naar **Draft** is een apart recht nodig. Als de factuur al is geëxporteerd, kan mogelijk alleen een beheerder de hoofdstatus wijzigen.

## Gerelateerde artikelen {#related-articles}

* [Factuurstatussen](/User-Guide/05-Financial/Invoices/invoice-statuses.md)
* [Een onjuiste factuur corrigeren](/User-Guide/05-Financial/Invoices/correct-wrong-invoice.md)
