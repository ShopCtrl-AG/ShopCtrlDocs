---
sidebar_position: 1
slug: /docs/webhooks
---

# Webhooks

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

## Overview

**Webhooks** are part of the ShopCtrl **Triggers** functionality. There is a possibility to send webhooks to your external target applications after a certain event in ShopCtrl.

A trigger could be raised for different events connected with change on:

- orders
- products
- invoices
- shipments
- parcels
- purchase orders
- returns

Webhook main features:

- Support of basic HTTP authentication
- Prioritizing webhooks in the queue
- Customize payload using merge fields
- There is a possibility to add an HMAC signature and /or Client Certificate
- Retry mechanism If a webhook response was unsuccessful, it would retry up to 10 times. If the response still returns an error, an alert will be created.

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

Leave the payload empty to send the default payload in JSON. The default payload depends on the **event** type of the trigger.
For example, for order type event, the `{"OrderId":"$$Order.ID$$","OrderCode":"$$Order.OrderCode$$"}` of the order on which the trigger fired will be sent.

:::

### Default webhook payloads

When webhooks are triggered, the payload sent by our system can vary depending on the type of entity and the event. If the payload configuration is not manually set, the system sends the default JSON payload for the event.

Key Notes:
* Payload fields differ based on the event and entity type.
* Fields are populated only if the relevant data is available at the time of the event. If not, they will appear as null.

Below is a detailed list of the trigger events and their corresponding fields in the entityData object:

| Trigger Event | Fields in entityData |
| --- | --- |
| Product Created<br />Product Changed<br />Product Deleted<br />Product Available Stock Changed<br />Product Locked<br />Product Unlocked<br />Product Dimensions Changed | ProductId<br /> ProductCode<br /> ShopGroupId |
| Product Package Created<br />Product Package Changed | ProductPackageId<br /> ProductId<br /> ShopGroupId |
| Product Package Deleted | ProductPackageId<br /> ProductId<br /> ShopGroupId |
| Product Selection Product Changed<br />Product Selection Product Deleted | ProductId<br /> ProductCode<br /> ProductSelectionProductId<br /> ShopId |
| Product Group Changed<br />Product Group Deleted | ProductGroupId<br /> ProductGroupName |
| Order Customer Rating Changed | OrderId<br /> OrderCode<br /> CustomerRating |
| Order Comment Changed | OrderCommentId<br /> OrderId<br /> OrderCode<br /> TicketId<br /> TicketCode |
| Invoice Payments Done<br />Order Invoices All Paid<br />Invoice Payments Not Done<br />Invoice Payments Partial Done<br />Non Draft Invoice Saved<br />Non Draft Credit Invoice Saved<br />Order Invoices Created | InvoiceId<br /> InvoiceCode<br /> OrderId<br /> OrderCode |
| New Shop Saved<br />Init New Shop | ShopId |
| Purchase Order Created<br />Purchase Order Delivery Provisioned<br />Purchase Order Delivery Received<br />Purchase Order Handed Over<br />Purchase Order Provisioned<br />Purchase Order Received<br />Purchase Order Main Status Changed<br />Purchase Order Submit Status Changed<br />Purchase Order Payment Status Changed<br />Purchase Order Provision Status Changed<br />Purchase Order Custom Status Changed | PurchaseOrderId<br /> PurchaseOrderCode<br /> SupplierId<br /> WarehouseId<br /> OrderId<br /> OrderCode<br /> ShopId |
| Shipment Created<br />Shipment Delivered<br />Parcel Status Change<br />Parcel Pickup Done<br />New Parcel Added<br />Shipment Picked<br />Shipment Packed<br />Shipment Shipped<br />Order Shipment Status hanged<br />Order Fully Shipped<br />Shipment Handover | ParcelId<br /> TrackingCode<br /> OrderShipmentId<br /> OrderShipmentCode<br /> OrderId<br /> OrderCode |
| Main Order Return Status Changed<br />Order Return Changed<br />Order Return Created | OrderReturnId<br /> OrderReturnCode<br /> OrderId<br /> OrderCode |
| Product Property Def Changed<br />Product Property Def Deleted | Id<br /> Code |
| Product Brand Changed<br />Product Brand Deleted | Id<br /> Name |
| Voip Call Changed | Id |
| Ticket Main Status Changed<br />Ticket Created | TicketId<br /> TicketCode<br /> OrderId<br /> OrderCode<br /> ShopId |
| Ticket Handling Employee Group Changed<br />Ticket Handling Employee Changed | TicketId<br /> TicketCode<br /> OrderId<br /> OrderCode<br /> HandlingEmployeeGroupId<br /> HandlingEmployeeId<br /> OldHandlingEmployeeGroupId<br /> OldHandlingEmployeeId |
| Ticket Incoming Message<br />Ticket Outcoming Message | TicketId<br /> TicketCode<br /> OrderId<br /> OrderCode<br /> ShopId<br /> TicketMessageDirection |
| Default (other events) | OrderId<br /> OrderCode |

## Webhook Queue

After the trigger fires, the webhook will be added to the webhook queue and performed in the background. You can access the **Webhook Queue** table from the **System > Webhook Queue page**.
Here you have an overview of all webhooks sent, dates and response messages.

![webhook-queue](/img/webhook-queue.png)
