---
sidebar_position: 1
slug: /docs/triggers
---

# Triggers

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

A **Trigger** is an action or number of actions that ShopCtrl will perform on a configured event.
Triggers are used to send emails to customers, webhooks to external party applications, for setting up your own system of customized order statuses. With the triggers, you could set up your fulfillment process and define a moment when the stock will be allocated for order.

Triggers could be created on a shopowner level and applied to all shop groups. And could be as well shop-specific, for example, when it is needed to use different email templates for shops.
![general-trigger-overview](/img/general-trigger-overview.png)

## Events

A trigger could be raised for different **events** connected with a change in different areas of ShopCtrl. Please see a complete list below.

Shops

1. Init new shop.
1. New shop saved.

Invoices

1. Invoice changed.
1. Invoice payments done. You can specify Direction: Debit, Credit; Transfer type; and Payment type.
1. Invoice payments not done. You can specify Direction: Debit, Credit; Transfer type; and Payment type.
1. Invoice payments partial done. You can specify Direction: Debit, Credit; Transfer type; and Payment type.
1. Invoice reminder. Executes trigger when the first reminder is sent. Reminder dates are configured in shop settings [Invoice reminders](/User-Guide/05-Financial/Invoices/invoice-reminders.md).
1. Invoice reminder. Executes trigger when the second reminder is sent.
1. Invoice reminder. Executes trigger when the third reminder is sent.
1. Non-draft invoice saved.

Orders

1. New order added.
1. New order initialized.
1. Not shippable order fully shipped
1. Order changed.
1. Order comment changed.
1. Order custom status changed. Fire trigger on: all status changes, specific base status, specific status.
1. Order customer rating changed.
1. Order down payment done.
1. Order fulfillment status changed. Fire trigger on: all status changes, specific base status, specific status.
1. Order fully delivered.
1. Order fully shipped.
1. Order has one or more order rows not in stock.
1. Order invoices all paid. Direction: Debit, Credit; Transfer type; Payment type.
1. Order invoices created. Execute condition: always, only when paid, only when not paid.
1. Order invoices partial paid. Direction: Debit, Credit; Transfer type; Payment type.
1. Order invoices partly created.
1. Order main status changed. Fire trigger on: all status changes, specific base status, specific status
1. Order needs refund. You can specify Direction: Debit, Credit; Transfer type; and Payment type.
1. Order payment status changed. Fire trigger on: all status changes, specific base status, specific status
1. Order payment type changed. Payment type, Transfer type
1. Order payments done. You can specify Direction: Debit, Credit; Transfer type; and Payment type.
1. Order payments not done. You can specify Direction: Debit, Credit; Transfer type; and Payment type.
1. Order payments partial done. You can specify Direction: Debit, Credit; Transfer type; and Payment type.
1. Order preferred delivery date changed.
1. Order shipment status changed. Fire trigger on: all status changes, specific base status, specific status.
1. Order stock status changed. Fire trigger on: all status changes, specific base status, specific status.

Products

1. Product available stock changed. Possible to specify a Shop group.
1. Product brand changed.
1. Product brand deleted.
1. Product changed.
1. Product deleted.
1. Product group changed.
1. Product group deleted.
1. Product property def changed.
1. Product property def deleted .
1. Product selection product changed.
1. Product selection product deleted.

Purchase orders

1. Purchase order created.
1. Purchase order custom status changed.
1. Purchase order delivery provisioned.
1. Purchase order delivery received.
1. Purchase order handed over.
1. Purchase order main status changed.
1. Purchase order payment status changed.
1. Purchase order provision status changed.
1. Purchase order provisioned.
1. Purchase order received.
1. Purchase order submit status changed.

Returns

1. Return changed. Specify Warehouses.
2. Return created. Specify Warehouses.
3. Return main status changed. Fire trigger on: all status changes, specific base status, specific status.

Shipments and Parcels

1. New parcel added.
1. Parcel pickup done.
1. Parcel status change. Fire trigger on: all status changes, specific base status, specific status; Carrier account, Carrier module.
1. Shipment created. Specify Warehouses, Carrier accounts, Carrier Modules.
1. Shipment delivered. Specify Warehouses, Carrier accounts, Carrier Modules.
1. Shipment handover. Specify Warehouses, Carrier accounts, Carrier Modules.
1. Shipment packed. Specify Warehouses, Carrier accounts, Carrier Modules.
1. Shipment picked. Specify Warehouses, Carrier accounts, Carrier Modules.
1. Shipment shipped. Specify Warehouses, Carrier accounts, Carrier Modules.

Miscellaneous

1. Ticket main status changed. Fire trigger on: all status changes, specific base status, specific status.
1. Voip call changed.

## Actions

You can trigger a number of corresponding actions for the event. Actions will be executed according to the order in the list.

### Set Order status

Sets order status of the corresponding order to a certain value. You can select one or several statuses to change.
![trigger-action-set-order-status](/img/trigger-action-set-order-status.png)

For example, suppose the order was created manually (and not imported from one of the shops). In that case, you might want to automatically change the order status to "Manual", for example, to distinguish these orders from the ones imported from the shops.

### Set Invoice status

Sets invoice status of the corresponding invoice to a certain value.
Select a status or several statuses to change. The status will be updated to the status selected, disregarding the invoice's current status.
![trigger-action-set-invoice-status](/img/trigger-action-set-invoice-status.png)

### Set Purchase Order Status

In the same way, you could change the purchase order status as a result of a certain event.
![trigger-action-set-purchase-order-status](/img/trigger-action-set-purchase-order-status.png)

### Send email

You can select a mail template to use, decide whether a mail needs attachment (like invoice document auto-generated). Check the single execute checkbox to exclude repetition. The email will be sent only once.

![trigger-action-send-email](/img/trigger-action-send-email.png)

For example, you can set up an order confirmation email that will be sent after the order was imported or created manually.
You can use any shop, customer, or order-related merge fields to populate the mail with relevant data. See more on [Email templates](/docs/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/creating-and-editing-email-templates.md).

### Call Webhook

You can configure webhooks to be sent to your external target applications after a certain event in ShopCtrl.
![trigger-action-webhook](/img/trigger-action-webhook.png)

For more information on the webhooks setup, please see [Webhooks](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/webhooks.md).

### Create Shipment

It could be used to automatically create shipments when an order is fully allocated.

![trigger-action-create-shipment](/img/trigger-action-create-shipment.png)

Once the Order stock status is changed to finished, the shipment will be created automatically.
Settings example:
Event: Order stock status changed
Trigger condition: Fire trigger on specific base status: Finished
Action: Create shipment.

### Create Invoice

With this action, you can configure the moment an invoice is generated.
What items will be included in the invoice is configurable: You could also specify what items will be included in the invoice:

- Complete order (Default)
- Shipped items

![trigger-action-create-invoice](/img/trigger-action-create-invoice.png)

Depending on your internal processes, you could define the moment an invoice will be automatically created. For example:

1. Create invoice when new order is added
   Event: New order added
   Action 1: Create invoice. Create invoice for: Default (Complete Order)
   Action 2: Send email. Mail template: Invoice type. Requires attachment. Single execute.

2. Create invoice when order is shipped
   Event: Shipment shipped.
   Action 1: Create invoice. Create invoice for: Shipped items
   Action 2: Send email. Mail template: Invoice type. Requires attachment. Single execute.

### Allocate stock

With this action, you could specify when you would like to reserve (allocate) the stock for the order.
You could also specify whether to allocate the previously deallocated order rows.
![trigger-action-allocate-stock](/img/trigger-action-allocate-stock.png)

Depending on your internal processes, you could set this moment to be when:

- Order invoices all paid
- Order invoices partial paid
- Order down payment done
- Order payments done

### Deallocate Stock

Sets the moment to deallocate stock. Handles the scenarious with the orders put on hold by any reason.
For example, you could use it together with the "Order main status changed, Base status: Pause" event.

### Set Carrier Account

You can configure a trigger to change a carrier account to a specific one for a certain shop.
![trigger-action-set-carrier-account](/img/trigger-action-set-carrier-account.png)

### Set Shipment Shipped

Sets a corresponding shipment status to shipped.

### Create Document

You can set this trigger to generate the event-related document using the template chosen. Follow it with sending email action to auto send a document to the addressee.

![trigger-action-create-document](/img/trigger-action-create-document.png)

### Create Alert

You can specify the alert type, severity, title, and message that will be displayed after a certain event.
![trigger-action-create-alert](/img/trigger-action-create-alert.png)

The most common use is to create an alert when handling backorders. You could use the "Order has one or more order rows not in stock" event to configure this. The alert will be created for each new backorder to guarantee that the situation will be addressed immediately.

### Create ticket

After any order-related event, you can configure trigger to create a ticket of a certain type and assign it to a certain employee group to handle.

![trigger-action-create-ticket-assign-group](/img/trigger-action-create-ticket-assign-group.png)

### Trigger Condition

With the Trigger condition action, you can control whether the remaining actions in a trigger should execute based on entity properties. This allows you to build conditional workflows without creating separate triggers for each scenario.

For more information, see [Trigger Action: Condition](trigger-action-condition.md).
