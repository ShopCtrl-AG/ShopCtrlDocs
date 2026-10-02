---
sidebar_position: 5
slug: /docs/webhooks
description: "Send webhooks from ShopCtrl to external applications when orders, invoices, shipments, products, tickets and other data change, with default JSON payloads per event."
---

# Webhooks

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

## Overview

**Webhooks** are part of the ShopCtrl **Triggers** functionality. With the **Call Webhook** action, ShopCtrl sends a request to your external application when a certain event happens in ShopCtrl.

A webhook can be sent for events in these areas:

- Orders
- Invoices
- Shipments and parcels
- Returns
- Products
- Purchase orders
- Stock counts
- Customers
- Tickets
- Service and rental contracts
- Shops
- VoIP calls

For the full list, see [Trigger events](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-events.md).

Webhook main features:

- **Basic HTTP authentication** with a username and password.
- **Priority** - webhooks with a higher priority are sent first from the queue.
- **Custom payload** built with merge fields, or a [default payload](#default-webhook-payloads) for each event.
- **HMAC signature** - ShopCtrl signs the request body with HMAC-SHA512 using your secret, and sends the signature as a lowercase hex string in the `X-SIGNATURE` header.
- **Client certificate** added to each request.
- **Unique queue items** - optionally skip a webhook if the same one is still waiting in the queue.
- **Retries** - if a webhook fails, ShopCtrl tries again, up to 10 attempts by default. The wait grows with each attempt: 90 seconds after the first failure, 180 seconds after the second, and so on. If the last attempt fails, an alert is created.

## How to create trigger with call webhook action

To setup automatic webhook call on certain events in ShopCtrl, we need to create trigger and add an action - **Call Web hook**.
![trigger-action-call-webhook-general](/img/trigger-action-call-webhook-general.png)

For example, to create a trigger action that will call an external target after an order change:

1. Go to **Configuration > Triggers**.
2. Click **Add** to create a new trigger.
3. Select an **Event** after which you would like to fire a trigger - _Order change_.
4. Select a **Shop**.
5. Click the **Add Action** button and select a **Call Webhook** action from the list.
6. In the **General** tab, provide the URL of the endpoint that will receive a webhook.
7. (Optional) Mark the **Queue items must be unique** to prevent the creation of multiple calls for frequently changed entities.
8. (Optional) Provide the **HMAC secret** to sign the request.
9. (Optional) Paste in the **Client Certificate** to be added to each request.
10. On the **Authentication** tab, enter the user name and password used for basic HTTP authentication.
    ![webhook-authentication](/img/webhook-authentication.png)
11. On the **Payload** tab, you can specify the **Payload Mime type**.
    _ application/JSON
    _ application/XML \* text/plain
    ![webhook-payload](/img/webhook-payload.png)

- Enter the **Payload** body according to the scheme chosen.
- You can add **Mergefields** to the payload. To check what merge fields you could use for the specific event type:
  - Click the **Available Mergefields** button.
  - (Optional) Specify the Order id to generate a dynamic list of available merge fields for the specific order.
  - Or click **Show All Available Mergefields** to load the generic order type merge fields list.
    ![webhooks-available-mergefields](/img/webhooks-available-mergefields.png)

14. **Enable** the trigger.
15. Click **Save** or **Save and Close**.

:::info[Please note]

Leave the payload empty to send the default payload in JSON. The default payload depends on the **event** type of the trigger, see [Default webhook payloads](#default-webhook-payloads).

:::

### Default webhook payloads

If you leave the payload empty, ShopCtrl sends a default JSON payload. Every webhook, with a default or a custom payload, is sent in the same wrapper:

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

- **Trigger** - the event that fired the trigger, as its system name without spaces, for example `OrderMainStatusChanged` or `ShipmentShipped`.
- **TriggerActionId** - the ID of the Call Webhook action that sent the request.
- **Data** - the default fields for the event, listed below. If you set a custom payload, **Data** contains your payload instead.

Fields are filled in only if the data is available when the event happens. A missing ID is sent as `null`. For shipment and return events, a missing code is sent as an empty string (`""`).

| Trigger event | Fields in Data |
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
| All other events linked to an order | OrderId<br />OrderCode |
| All other events without an order | A list of `Id` and `Type` pairs, one for each entity involved in the event |

For the full list of events, see [Trigger events](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-events.md).

## Webhook Queue

After the trigger fires, the webhook will be added to the webhook queue and performed in the background. You can access the **Webhook Queue** table from the **System > Webhook Queue page**.
Here you have an overview of all webhooks sent, dates and response messages.

![webhook-queue](/img/webhook-queue.png)
