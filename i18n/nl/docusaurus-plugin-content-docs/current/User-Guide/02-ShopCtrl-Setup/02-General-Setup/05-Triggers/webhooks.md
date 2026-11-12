---
sidebar_position: 5
slug: /docs/webhooks
description: "Stuur vanuit ShopCtrl webhooks naar externe applicaties wanneer orders, facturen, zendingen, producten, tickets en andere gegevens wijzigen, met standaard JSON-payloads per gebeurtenis."
---

# Webhooks

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

## Overzicht {#overview}

**Webhooks** maken deel uit van de **Triggers** in ShopCtrl. Met de actie **Call Webhook** stuurt ShopCtrl een verzoek naar uw externe applicatie wanneer er een bepaalde gebeurtenis in ShopCtrl plaatsvindt.

Een webhook kan worden verstuurd bij gebeurtenissen in deze onderdelen:

- Orders
- Facturen
- Zendingen en pakketten
- Retouren
- Producten
- Inkooporders
- Voorraadtellingen
- Klanten
- Tickets
- Service- en huurcontracten
- Shops
- VoIP-gesprekken

De volledige lijst vindt u in [Trigger-gebeurtenissen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-events.md).

Belangrijkste functies van webhooks:

- **Basis-HTTP-authenticatie** met een gebruikersnaam en wachtwoord.
- **Prioriteit** - webhooks met een hogere prioriteit worden als eerste uit de wachtrij verstuurd.
- **Eigen payload** opgebouwd met merge fields, of een [standaardpayload](#default-webhook-payloads) per gebeurtenis.
- **HMAC-handtekening** - ShopCtrl ondertekent de inhoud van het verzoek met HMAC-SHA512 en uw secret, en stuurt de handtekening als hexadecimale tekenreeks in kleine letters mee in de header `X-SIGNATURE`.
- **Clientcertificaat** dat aan elk verzoek wordt toegevoegd.
- **Unieke items in de wachtrij** - sla optioneel een webhook over als dezelfde webhook nog in de wachtrij staat.
- **Nieuwe pogingen** - als een webhook mislukt, probeert ShopCtrl het opnieuw, standaard maximaal 10 keer. De wachttijd wordt bij elke poging langer: 90 seconden na de eerste mislukte poging, 180 seconden na de tweede, enzovoort. Als de laatste poging mislukt, wordt er een melding aangemaakt.

## Een trigger met de actie Call Webhook aanmaken {#how-to-create-trigger-with-call-webhook-action}

Om bij bepaalde gebeurtenissen in ShopCtrl automatisch een webhook aan te roepen, maakt u een trigger aan en voegt u de actie **Call Web hook** toe.
![Algemene instellingen van de Trigger-actie Call Webhook](/img/trigger-action-call-webhook-general.png)

Een Trigger-actie aanmaken die bijvoorbeeld na een wijziging van een order een extern doel aanroept:

1. Ga naar **Configuration > Triggers**.
2. Klik op **Add** om een nieuwe trigger aan te maken.
3. Selecteer de **Event** waarna u de trigger wilt uitvoeren: _Order change_.
4. Selecteer een **Shop**.
5. Klik op de knop **Add Action** en selecteer de actie **Call Webhook** in de lijst.
6. Vul op het tabblad **General** de URL in van het endpoint dat de webhook ontvangt.
7. (Optioneel) Vink **Queue items must be unique** aan om te voorkomen dat er meerdere aanroepen worden aangemaakt voor records die vaak wijzigen.
8. (Optioneel) Vul het **HMAC secret** in om het verzoek te ondertekenen.
9. (Optioneel) Plak het **Client Certificate** dat aan elk verzoek wordt toegevoegd.
10. Vul op het tabblad **Authentication** de gebruikersnaam en het wachtwoord voor basis-HTTP-authenticatie in.
    ![Authenticatie van de webhook](/img/webhook-authentication.png)
11. Op het tabblad **Payload** kunt u het **Payload Mime type** opgeven.
    _ application/JSON
    _ application/XML \* text/plain
    ![Payload van de webhook](/img/webhook-payload.png)

- Vul de inhoud van de **Payload** in volgens het gekozen schema.
- U kunt **Mergefields** aan de payload toevoegen. Om te zien welke merge fields u voor het betreffende type gebeurtenis kunt gebruiken:
  - Klik op de knop **Available Mergefields**.
  - (Optioneel) Geef het Order id op om een dynamische lijst met beschikbare merge fields voor die order te genereren.
  - Of klik op **Show All Available Mergefields** om de algemene lijst met merge fields voor orders te laden.
    ![Beschikbare merge fields voor webhooks](/img/webhooks-available-mergefields.png)

14. Schakel de trigger in met **Enable**.
15. Klik op **Save** of **Save and Close**.

:::info[Let op]

Laat de payload leeg om de standaardpayload in JSON te versturen. De standaardpayload hangt af van het type **gebeurtenis** van de trigger; zie [Standaardpayloads voor webhooks](#default-webhook-payloads).

:::

### Standaardpayloads voor webhooks {#default-webhook-payloads}

Als u de payload leeg laat, stuurt ShopCtrl een standaardpayload in JSON. Elke webhook, met een standaardpayload of een eigen payload, wordt in dezelfde omhulling verstuurd:

```json
{
  "Trigger": "ShipmentShipped",
  "TriggerActionId": 123,
  "Data": {
    "ParcelId": 4567,
    "TrackingCode": "3SABCD1234567",
    "OrderShipmentId": 890,
    "OrderShipmentCode": "SH-10025",
    "OrderId": 1234,
    "OrderCode": "SO-10025"
  }
}
```

- **Trigger** - de gebeurtenis die de trigger heeft gestart, als systeemnaam zonder spaties, bijvoorbeeld `OrderMainStatusChanged` of `ShipmentShipped`.
- **TriggerActionId** - het ID van de actie Call Webhook die het verzoek heeft verstuurd.
- **Data** - de standaardvelden voor de gebeurtenis, zie hieronder. Als u een eigen payload instelt, bevat **Data** in plaats daarvan uw payload.

Velden worden alleen gevuld als de gegevens beschikbaar zijn op het moment van de gebeurtenis. Een ontbrekend ID wordt als `null` verstuurd. Bij gebeurtenissen voor zendingen en retouren wordt een ontbrekende code als lege tekenreeks (`""`) verstuurd.

| Trigger-gebeurtenis | Velden in Data |
| --- | --- |
| Product created<br />Product changed<br />Product deleted<br />Product available stock changed<br />Product locked<br />Product unlocked<br />Product dimensions changed | ProductId<br />ProductCode<br />ShopGroupId |
| Product package created<br />Product package changed<br />Product package deleted | ProductPackageId<br />ProductId<br />ShopGroupId |
| Product selection product changed<br />Product selection product deleted | ProductId<br />ProductCode<br />ProductSelectionProductId<br />ShopId |
| Product group changed<br />Product group deleted | ProductGroupId<br />ProductGroupName |
| Product property definition changed<br />Product property definition deleted | Id<br />Code |
| Product brand changed<br />Product brand deleted | Id<br />Name |
| Order customer rating changed | OrderId<br />OrderCode<br />CustomerRating |
| Order comment changed | OrderCommentId<br />OrderId<br />OrderCode<br />TicketId<br />TicketCode |
| Invoice payments done<br />Invoice payments not done<br />Invoice payments partial done<br />Non-draft invoice saved<br />Non-draft credit invoice saved<br />Order invoices all paid<br />Order invoices partial paid<br />Order invoices created | InvoiceId<br />InvoiceCode<br />OrderId<br />OrderCode |
| Shipment created<br />Shipment picked<br />Shipment packed<br />Shipment shipped<br />Shipment handover<br />Shipment delivered<br />New parcel added<br />Parcel status change<br />Parcel pickup done<br />Order shipment status changed<br />Order fully shipped | ParcelId<br />TrackingCode<br />OrderShipmentId<br />OrderShipmentCode<br />OrderId<br />OrderCode |
| Return created<br />Return changed<br />Return main status changed | OrderReturnId<br />OrderReturnCode<br />OrderId<br />OrderCode |
| Purchase order created<br />Purchase order custom status changed<br />Purchase order delivery provisioned<br />Purchase order delivery received<br />Purchase order handed over<br />Purchase order main status changed<br />Purchase order payment status changed<br />Purchase order provision status changed<br />Purchase order provisioned<br />Purchase order received<br />Purchase order submit status changed | PurchaseOrderId<br />PurchaseOrderCode<br />SupplierId<br />WarehouseId<br />OrderId<br />OrderCode<br />ShopId |
| Ticket created<br />Ticket main status changed | TicketId<br />TicketCode<br />OrderId<br />OrderCode<br />ShopId |
| Ticket handling employee group changed | TicketId<br />TicketCode<br />OrderId<br />OrderCode<br />ShopId<br />HandlingEmployeeGroupId<br />OldHandlingEmployeeGroupId |
| Ticket handling employee changed | TicketId<br />TicketCode<br />OrderId<br />OrderCode<br />ShopId<br />HandlingEmployeeId<br />OldHandlingEmployeeId |
| Ticket incoming message<br />Ticket outgoing message | TicketId<br />TicketCode<br />OrderId<br />OrderCode<br />ShopId<br />TicketMessageDirection |
| Ticket satisfaction score changed | TicketId<br />TicketCode<br />OrderId<br />OrderCode<br />ShopId<br />SatisfactionScoreOld<br />SatisfactionScore |
| Service contract active status changed | ServiceContractId<br />ServiceContractCode<br />ShopId<br />ActiveStatus<br />ActiveStatusName<br />OldActiveStatus<br />OldActiveStatusName |
| Rental contract active status changed | RentalContractId<br />RentalContractCode<br />ShopId<br />ActiveStatus<br />ActiveStatusName<br />OldActiveStatus<br />OldActiveStatusName |
| Rental contract order created | RentalContractId<br />RentalContractCode<br />ShopId<br />OrderId<br />OrderCode |
| Init new shop<br />New shop saved | ShopId |
| Voip call changed | Id |
| Alle andere gebeurtenissen die aan een order zijn gekoppeld | OrderId<br />OrderCode |
| Alle andere gebeurtenissen zonder order | Een lijst met paren van `Id` en `Type`, één voor elk record dat bij de gebeurtenis betrokken is |

De volledige lijst met gebeurtenissen vindt u in [Trigger-gebeurtenissen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-events.md).

## Wachtrij voor webhooks {#webhook-queue}

Nadat de trigger is uitgevoerd, wordt de webhook aan de wachtrij voor webhooks toegevoegd en op de achtergrond verstuurd. De tabel **Webhook Queue** vindt u op de pagina **System > Webhook Queue**.
Hier ziet u een overzicht van alle verstuurde webhooks, met datums en antwoordberichten.

![Wachtrij voor webhooks](/img/webhook-queue.png)
