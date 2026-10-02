---
sidebar_position: 6
slug: /docs/trigger-examples
description: "Ready-made ShopCtrl trigger setups: order confirmation emails, automatic invoices and shipments, stock allocation after payment and backorder alerts."
---

import TriggerFlow from '@site/src/components/TriggerFlow';

# Trigger examples

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

These examples show common ways to automate your order flow with triggers. To create a trigger, see [Create a trigger](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/index.md#create-a-trigger).

## Typical order flow

Most shops automate the path from payment to invoice with four triggers. Each trigger fires on its own event, so together they move the order forward without manual steps.

<TriggerFlow />

### Allocate stock after payment

Reserve stock only once the customer has paid.

- **Event:** Order payments done
- **Action:** Allocate stock

You can also allocate on Order invoices all paid, Order invoices partial paid or Order down payment done.

### Create a shipment when stock is fully allocated

Create the shipment automatically once the whole order is allocated.

- **Event:** Order stock status changed
- **Trigger condition:** Fire trigger on specific base status: **Finished**
- **Action:** Create shipment

### Create an alert for backorders

Create an alert when an order is partly or fully backordered, so it's handled right away. Once the missing stock arrives and the order is fully allocated, the shipment trigger above creates the shipment.

- **Event:** Order has one or more order rows not in stock
- **Action:** Create alert. Set the alert type, severity, title and message.

### Create an invoice when an order is shipped

- **Event:** Shipment shipped
- **Action 1:** Create invoice. Create invoice for: **Shipped items**.
- **Action 2:** Send email. Mail template: invoice type. Requires attachment. Single execute.

## More examples

### Send an order confirmation email

Send the customer a confirmation as soon as an order is imported or created manually.

- **Event:** New order added
- **Action:** Send email. Select your order confirmation mail template and check **Single execute**, so the email is sent only once.

### Create an invoice when an order is added

- **Event:** New order added
- **Action 1:** Create invoice. Create invoice for: **Complete order** (default).
- **Action 2:** Send email. Mail template: invoice type. Requires attachment. Single execute.

### Release stock when an order is paused

- **Event:** Order main status changed
- **Trigger condition:** Fire trigger on specific base status: **Pause**
- **Action:** Deallocate stock
