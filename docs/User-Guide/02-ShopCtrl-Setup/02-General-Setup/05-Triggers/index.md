---
sidebar_position: 1
slug: /docs/triggers
description: "What triggers are in ShopCtrl, how events, conditions and actions work together, and how to create a trigger."
---

import TriggerFlow from '@site/src/components/TriggerFlow';

# Triggers

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

A **Trigger** is an action or number of actions that ShopCtrl will perform on a configured event.
Triggers are used to send emails to customers, webhooks to external party applications, for setting up your own system of customized order statuses. With the triggers, you could set up your fulfillment process and define a moment when the stock will be allocated for order.

Triggers could be created on a shopowner level and applied to all shop groups. And could be as well shop-specific, for example, when it is needed to use different email templates for shops.

The diagram below shows a typical order flow that is automated with four triggers, from payment to invoice.

<TriggerFlow examplesUrl="/docs/trigger-examples" />

## How triggers work

Every trigger is made of three parts:

- **Event** - the change in ShopCtrl that starts the trigger, for example **New order added**. See [Trigger events](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-events.md).
- **Trigger condition** (optional) - options that narrow down when the trigger fires, for example only when the order reaches a specific status.
- **Actions** - what ShopCtrl does when the trigger fires, for example send an email or create a shipment. Actions run in the order they appear in the list. See [Trigger actions](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-actions.md).

## Create a trigger

1. Go to **Configuration > Triggers**.
2. Click **Add** to create a new trigger.
3. Enter a **Title**.
4. Select the **Event** that should start the trigger.
5. (Optional) Set the options in the **Trigger condition** panel. The options depend on the event.
6. Select the shop owner, or a **Shop** to make the trigger shop-specific.
7. Click **Add action** and select an action. Repeat for each action you need.
8. Check **Enabled**.
9. Click **Save** or **Save and close**.

For ready-made setups, see [Trigger examples](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-examples.md).
