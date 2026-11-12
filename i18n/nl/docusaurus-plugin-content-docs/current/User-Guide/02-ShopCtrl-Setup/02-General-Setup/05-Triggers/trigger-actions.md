---
sidebar_position: 3
slug: /docs/trigger-actions
description: "De acties die een trigger in ShopCtrl kan uitvoeren: statussen instellen, e-mail versturen, webhooks aanroepen, zendingen, facturen, documenten, meldingen en tickets aanmaken, en voorraad toewijzen."
---

# Trigger-acties

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Een trigger voert een of meer **acties** uit wanneer de bijbehorende gebeurtenis plaatsvindt. Acties worden uitgevoerd in de volgorde waarin ze in de lijst met acties van de trigger staan.

In de koppen hieronder staan de namen van de acties zoals ze in ShopCtrl worden weergegeven.

## Set Order status {#set-order-status}

Zet de orderstatus van de betreffende order op een bepaalde waarde. U kunt een of meer statussen selecteren die worden gewijzigd.
![Trigger-actie Set Order status](/img/trigger-action-set-order-status.png)

Stel bijvoorbeeld dat de order handmatig is aangemaakt (en niet uit een van de shops is geïmporteerd). In dat geval wilt u de orderstatus misschien automatisch wijzigen in "Manual", om deze orders te onderscheiden van orders die uit de shops zijn geïmporteerd.

## Set Invoice status {#set-invoice-status}

Zet de factuurstatus van de betreffende factuur op een bepaalde waarde.
Selecteer een of meer statussen die worden gewijzigd. De status wordt bijgewerkt naar de geselecteerde status, ongeacht de huidige status van de factuur.
![Trigger-actie Set Invoice status](/img/trigger-action-set-invoice-status.png)

## Set Purchase Order Status {#set-purchase-order-status}

Op dezelfde manier kunt u de status van een inkooporder wijzigen naar aanleiding van een bepaalde gebeurtenis.
![Trigger-actie Set Purchase Order Status](/img/trigger-action-set-purchase-order-status.png)

## Send email {#send-email}

U kunt een e-mailsjabloon selecteren en bepalen of er een bijlage bij de e-mail moet (bijvoorbeeld een automatisch gegenereerde factuur). Vink het selectievakje Single execute aan om herhaling te voorkomen. De e-mail wordt dan maar één keer verstuurd.

![Trigger-actie Send email](/img/trigger-action-send-email.png)

U kunt bijvoorbeeld een orderbevestiging per e-mail instellen die wordt verstuurd nadat de order is geïmporteerd of handmatig is aangemaakt.
U kunt alle merge fields voor shops, klanten of orders gebruiken om de e-mail met de juiste gegevens te vullen. Meer informatie vindt u bij [E-mailsjablonen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/creating-and-editing-email-templates.md).

## Call Webhook {#call-webhook}

U kunt webhooks instellen die na een bepaalde gebeurtenis in ShopCtrl naar uw externe applicaties worden gestuurd.
![Trigger-actie Call Webhook](/img/trigger-action-webhook.png)

Meer informatie over het instellen van webhooks vindt u bij [Webhooks](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/webhooks.md).

## Create Shipment {#create-shipment}

Hiermee kunt u automatisch zendingen aanmaken wanneer een order volledig is toegewezen.

![Trigger-actie Create Shipment](/img/trigger-action-create-shipment.png)

De volledige instellingen vindt u in [Een zending aanmaken als de voorraad volledig is toegewezen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-examples.md#create-a-shipment-when-stock-is-fully-allocated).

## Create Invoice {#create-invoice}

Met deze actie bepaalt u het moment waarop een factuur wordt gegenereerd.
U kunt ook instellen welke artikelen op de factuur komen:

- Complete order (standaard)
- Shipped items

![Trigger-actie Create Invoice](/img/trigger-action-create-invoice.png)

U kunt de factuur bijvoorbeeld aanmaken zodra een order wordt toegevoegd, of pas wanneer deze is verzonden. Zie [Voorbeelden van triggers](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-examples.md#create-an-invoice-when-an-order-is-added).

## Allocate stock {#allocate-stock}

Met deze actie bepaalt u wanneer de voorraad voor de order wordt gereserveerd (toegewezen).
U kunt ook aangeven of eerder vrijgegeven orderregels opnieuw worden toegewezen.
![Trigger-actie Allocate stock](/img/trigger-action-allocate-stock.png)

Afhankelijk van uw interne processen kunt u dit moment instellen op:

- Order invoices all paid
- Order invoices partial paid
- Order down payment done
- Order payments done

## Deallocate Stock {#deallocate-stock}

Bepaalt het moment waarop voorraad wordt vrijgegeven. Hiermee handelt u situaties af waarin orders om welke reden dan ook in de wacht zijn gezet.
U kunt deze actie bijvoorbeeld gebruiken samen met de gebeurtenis "Order main status changed, Base status: Pause".

## Set Carrier Account {#set-carrier-account}

U kunt een trigger instellen die voor een bepaalde shop het vervoerdersaccount wijzigt in een specifiek account.
![Trigger-actie Set Carrier Account](/img/trigger-action-set-carrier-account.png)

## Set Shipment Shipped {#set-shipment-shipped}

Zet de status van de betreffende zending op verzonden.

## Create Document {#create-document}

U kunt deze trigger instellen om met het gekozen sjabloon het document te genereren dat bij de gebeurtenis hoort. Laat de actie volgen door de actie voor het versturen van e-mail om het document automatisch naar de geadresseerde te sturen.

![Trigger-actie Create Document](/img/trigger-action-create-document.png)

## Create Alert {#create-alert}

U kunt het type, de ernst, de titel en het bericht opgeven van de melding die na een bepaalde gebeurtenis wordt getoond.
![Trigger-actie Create Alert](/img/trigger-action-create-alert.png)

Deze actie wordt het meest gebruikt om een melding aan te maken bij het afhandelen van backorders. U kunt hiervoor de gebeurtenis "Order has one or more order rows not in stock" gebruiken. Voor elke nieuwe backorder wordt dan een melding aangemaakt, zodat de situatie direct wordt opgepakt.

## Create ticket {#create-ticket}

Na elke gebeurtenis die met een order te maken heeft, kunt u een trigger een ticket van een bepaald type laten aanmaken en dit laten toewijzen aan een bepaalde medewerkersgroep.

![Trigger-actie Create ticket met toewijzing aan een groep](/img/trigger-action-create-ticket-assign-group.png)

## Trigger Condition {#trigger-condition}

Met de actie Trigger condition bepaalt u op basis van eigenschappen van een record of de overige acties van een trigger worden uitgevoerd. Zo bouwt u voorwaardelijke workflows zonder voor elke situatie een aparte trigger aan te maken.

Meer informatie vindt u in [Trigger-actie: Condition](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-action-condition.md).
