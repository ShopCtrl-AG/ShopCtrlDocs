---
sidebar_position: 3
slug: /docs/duplicating-orders
---

# Duplicating Orders

In some situations you might want to duplicate an existing order to create a new order requested by the customer. The customer contact information, products, and order parameters will be copied to a new order.

## How to duplicate an order

To copy a single order:

1. Open the **Sales > Orders** tab.
2. Locate and **select** the order you would like to copy.
3. In the actions menu above, click **More**, and in the dropdown list select **Copy**.
4. The copied order will be opened in a new tab for editing. Click **Save** or **Save and Close** to save the copied order.

<img src={require("/img/Copy-single-order.png").default} height="" width="800" />

:::info[Please note]

Duplicated orders are not synced back to any sales channels.

:::

## How to copy multiple orders
To copy multiple orders:

1. Open the **Sales > Orders** tab.
2. Using `Shift` or `Ctrl` **select** the orders you would like to copy.
3. In the actions menu above, click **More**, and in the dropdown list, select **Copy**.
4. The copied orders will appear in the orders table. You can now open each of them for editing.


### Additional configuration

As a **Shopowner**, you can limit the period when orders can be copied to a year.
To apply this limitation, go to **Shop owner details** page and on the **Order Management** tab enable the '**Allow copy orders of the current year only**' setting.
This way employees will be prevented from copying old orders with possibly outdated contact and financial data.

<img src={require("/img/allow-copy-orders-of-the-current-year.png").default} height="" width="500" />