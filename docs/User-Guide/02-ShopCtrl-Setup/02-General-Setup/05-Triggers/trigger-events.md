---
sidebar_position: 2
slug: /docs/trigger-events
description: "The full list of trigger events in ShopCtrl, grouped by orders, invoices, shipments, returns, products, purchase orders, tickets, contracts and more."
---

# Trigger events

A trigger is raised by an **event**: a change in one of the areas of ShopCtrl. This page lists all events, grouped by area.

## Event filters

Some events let you narrow down when the trigger fires. You set these options in the **Trigger condition** panel after you select the event:

- **Status filter** - fire on all status changes, on a specific base status, or on a specific status.
- **Payment filter** - set the direction (Debit or Credit), the transfer type and the payment type.
- **Shipment filter** - limit the trigger to specific warehouses, carrier accounts or carrier modules.

## Orders

- New order added
- New order initialized
- Not shippable order fully shipped
- Order changed
- Order comment changed
- Order custom status changed - *status filter*
- Order customer rating changed
- Order down payment done
- Order fulfillment status changed - *status filter*
- Order fully delivered
- Order fully shipped
- Order has one or more order rows not in stock
- Order invoices all paid - *payment filter*
- Order invoices created - execute always, only when paid, or only when not paid
- Order invoices partial paid - *payment filter*
- Order invoices partly created
- Order main status changed - *status filter*
- Order needs refund - *payment filter*
- Order payment status changed - *status filter*
- Order payment type changed - payment type and transfer type
- Order payments done - *payment filter*
- Order payments not done - *payment filter*
- Order payments partial done - *payment filter*
- Order preferred delivery date changed
- Order purchase type changed - choose the purchase type
- Order shipment status changed - *status filter*
- Order stock status changed - *status filter*

## Invoices

- Invoice changed
- Invoice payments done - *payment filter*
- Invoice payments not done - *payment filter*
- Invoice payments partial done - *payment filter*
- Invoice reminder 1 - fires when the first reminder is sent. Reminder dates are set in the shop settings, see [Invoice reminders](/User-Guide/05-Financial/Invoices/invoice-reminders.md).
- Invoice reminder 2 - fires when the second reminder is sent
- Invoice reminder 3 - fires when the third reminder is sent
- Non-draft credit invoice saved
- Non-draft invoice saved

## Shipments and parcels

- New parcel added
- Parcel pickup done
- Parcel status change - *status filter*, carrier account and carrier module
- Shipment created - *shipment filter*
- Shipment delivered - *shipment filter*
- Shipment handover - *shipment filter*
- Shipment packed - *shipment filter*
- Shipment picked - *shipment filter*
- Shipment shipped - *shipment filter*

## Returns

- Return changed - choose warehouses
- Return created - choose warehouses
- Return main status changed - *status filter*

## Products

- Product available stock changed - choose a shop group
- Product brand changed
- Product brand deleted
- Product changed
- Product created
- Product deleted
- Product dimensions changed
- Product group changed
- Product group deleted
- Product locked
- Product package changed
- Product package created
- Product package deleted
- Product property definition changed
- Product property definition deleted
- Product selection product changed
- Product selection product deleted
- Product unlocked

## Purchase orders

- Purchase order created
- Purchase order custom status changed
- Purchase order delivery provisioned
- Purchase order delivery received
- Purchase order handed over
- Purchase order main status changed
- Purchase order payment status changed
- Purchase order provision status changed
- Purchase order provisioned
- Purchase order received
- Purchase order submit status changed

## Stock

- Stock count created

## Customers

- Customer company contact email address changed
- Customer email changed
- New customer added

## Tickets

- Ticket created
- Ticket handling employee changed
- Ticket handling employee group changed - choose the employee group
- Ticket incoming message
- Ticket main status changed - *status filter*
- Ticket outgoing message
- Ticket satisfaction score changed - set the score condition

## Service contracts

- New service contract added
- Service contract active status changed
- Service contract active status changed to active
- Service contract company contact email address changed

## Rental contracts

- New rental contract added
- Rental contract active status changed
- Rental contract active status changed to active
- Rental contract company contact email address changed
- Rental contract order created

## Shops

- Init new shop
- New shop saved

## Miscellaneous

- Voip call changed
