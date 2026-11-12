---
sidebar_position: 1
slug: /docs/triggers
description: "Wat triggers in ShopCtrl zijn, hoe gebeurtenissen, voorwaarden en acties samenwerken, en hoe u een trigger aanmaakt."
---

import TriggerFlow from '@site/src/components/TriggerFlow';

# Triggers

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Een **Trigger** is een actie of een reeks acties die ShopCtrl uitvoert bij een ingestelde gebeurtenis.
Triggers worden gebruikt om e-mails naar klanten en webhooks naar externe applicaties te sturen, en om uw eigen systeem van aangepaste orderstatussen in te richten. Met triggers kunt u uw fulfilmentproces inrichten en bepalen op welk moment voorraad aan een order wordt toegewezen.

Triggers kunnen op het niveau van de shop owner worden aangemaakt en op alle shopgroepen worden toegepast. Ze kunnen ook shopspecifiek zijn, bijvoorbeeld als u voor verschillende shops verschillende e-mailsjablonen wilt gebruiken.

Het onderstaande schema toont een typische orderstroom die met vier triggers is geautomatiseerd, van betaling tot factuur.

<TriggerFlow examplesUrl="/docs/trigger-examples" />

## Hoe triggers werken {#how-triggers-work}

Elke trigger bestaat uit drie onderdelen:

- **Gebeurtenis (Event)** - de wijziging in ShopCtrl die de trigger start, bijvoorbeeld **New order added**. Zie [Trigger-gebeurtenissen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-events.md).
- **Trigger-voorwaarde (Trigger condition)** (optioneel) - opties die bepalen wanneer de trigger precies wordt uitgevoerd, bijvoorbeeld alleen wanneer de order een bepaalde status bereikt.
- **Acties (Actions)** - wat ShopCtrl doet wanneer de trigger wordt uitgevoerd, bijvoorbeeld een e-mail versturen of een zending aanmaken. Acties worden uitgevoerd in de volgorde waarin ze in de lijst staan. Zie [Trigger-acties](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-actions.md).

## Een trigger aanmaken {#create-a-trigger}

1. Ga naar **Configuration > Triggers**.
2. Klik op **Add** om een nieuwe trigger aan te maken.
3. Vul een **Title** in.
4. Selecteer de **Event** waarmee de trigger moet starten.
5. (Optioneel) Stel de opties in het deelvenster **Trigger condition** in. Welke opties er zijn, hangt af van de gebeurtenis.
6. Selecteer de shop owner, of een **Shop** om de trigger shopspecifiek te maken.
7. Klik op **Add action** en selecteer een actie. Herhaal dit voor elke actie die u nodig hebt.
8. Vink **Enabled** aan.
9. Klik op **Save** of **Save and close**.

Kant-en-klare voorbeelden vindt u in [Voorbeelden van triggers](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-examples.md).
