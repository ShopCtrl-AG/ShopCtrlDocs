---
sidebar_position: 6
slug: /docs/trigger-examples
description: "Kant-en-klare triggers in ShopCtrl: orderbevestigingen per e-mail, automatische facturen en zendingen, voorraadtoewijzing na betaling en meldingen bij backorders."
---

import TriggerFlow from '@site/src/components/TriggerFlow';

# Voorbeelden van triggers

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Deze voorbeelden laten veelgebruikte manieren zien om uw orderstroom met triggers te automatiseren. Hoe u een trigger aanmaakt, leest u in [Een trigger aanmaken](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/index.md#create-a-trigger).

## Typische orderstroom {#typical-order-flow}

De meeste shops automatiseren de weg van betaling naar factuur met vier triggers. Elke trigger wordt bij een eigen gebeurtenis uitgevoerd, zodat ze samen de order zonder handmatige stappen verder brengen.

<TriggerFlow />

### Voorraad toewijzen na betaling {#allocate-stock-after-payment}

Reserveer pas voorraad als de klant heeft betaald.

- **Event:** Order payments done
- **Action:** Allocate stock

U kunt ook toewijzen bij Order invoices all paid, Order invoices partial paid of Order down payment done.

### Een zending aanmaken als de voorraad volledig is toegewezen {#create-a-shipment-when-stock-is-fully-allocated}

Maak de zending automatisch aan zodra de hele order is toegewezen.

- **Event:** Order stock status changed
- **Trigger condition:** Fire trigger on specific base status: **Finished**
- **Action:** Create shipment

### Een melding aanmaken bij backorders {#create-an-alert-for-backorders}

Maak een melding aan wanneer een order gedeeltelijk of volledig in backorder staat, zodat deze direct wordt opgepakt. Zodra de ontbrekende voorraad binnenkomt en de order volledig is toegewezen, maakt de zendingstrigger hierboven de zending aan.

- **Event:** Order has one or more order rows not in stock
- **Action:** Create alert. Stel het type, de ernst, de titel en het bericht van de melding in.

### Een factuur aanmaken wanneer een order is verzonden {#create-an-invoice-when-an-order-is-shipped}

- **Event:** Shipment shipped
- **Action 1:** Create invoice. Create invoice for: **Shipped items**.
- **Action 2:** Send email. Mail template: type invoice. Requires attachment. Single execute.

## Meer voorbeelden {#more-examples}

### Een orderbevestiging per e-mail versturen {#send-an-order-confirmation-email}

Stuur de klant een bevestiging zodra een order is geïmporteerd of handmatig is aangemaakt.

- **Event:** New order added
- **Action:** Send email. Selecteer uw e-mailsjabloon voor orderbevestigingen en vink **Single execute** aan, zodat de e-mail maar één keer wordt verstuurd.

### Een factuur aanmaken wanneer een order wordt toegevoegd {#create-an-invoice-when-an-order-is-added}

- **Event:** New order added
- **Action 1:** Create invoice. Create invoice for: **Complete order** (standaard).
- **Action 2:** Send email. Mail template: type invoice. Requires attachment. Single execute.

### Voorraad vrijgeven wanneer een order wordt gepauzeerd {#release-stock-when-an-order-is-paused}

- **Event:** Order main status changed
- **Trigger condition:** Fire trigger on specific base status: **Pause**
- **Action:** Deallocate stock
