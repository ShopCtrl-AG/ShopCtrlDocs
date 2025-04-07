---
sidebar_position: 1
slug: /docs/orders-introduction
---

# Orders Introduction

One of the core features of ShopCtrl is order management (fulfillment and shipping of orders).

The system features a complete order management cycle from an order, printing invoice, and marking it shipped. Which is capable of downloading orders automatically from many different channels (eBay, Amazon, Magento, wooCommerce, and other websites), merge the orders with payment files, and follow up on the sale (where the facility exists).


![Order processing](/img/order-processing-300x265.jpg)

One of the system's unique features is the ability to link order management to your inventory control. Whenever the order is placed and processed, the stock level will be modified accordingly and then pushed back to all of the other channels that you sell the same item on, therefore reducing the risk of overselling.
___
## Incoming orders
ShopCtrl imports orders from all your [sales channels](/docs/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/index.md). Examples of sales channels are:

  + Marketplaces like eBay and Amazon
  + Shopping platforms (i.e., Shopify, Magento, BigCommerce etc.)
  + Custom-developed shopping platforms
  + Manual / Phone orders

The orders grid window is fully customizable and is the starting point of any actions around the order process:
<img src={require("/img/orders-grid.png").default} height="" width="800" />

## Filtering orders
The ShopCtrl order filter is a compelling feature to help you create selections based on predefined filters. ShopCtrl even enables you to define unlimited preset filters.

The filter panel is located in the orders section.

**Search by keyword**

The ‘keyword’ filter shows you all the orders which match the provided keyword.

**Filter by date range**

Retrieve a list of specific orders within a specific date range.
<img src={require("/img/order_filter_date.png").default} height="" width="200" />

**Filter by status**

ShopCtrl supports dozens of order statuses. You can even define custom order statuses.
<img src={require("/img/order_filter_status.png").default} height="" width="200" />

Select a status and/or several statuses to show all the applicable orders.

**Filter by product**
Shows all of the orders containing product defined.

**Filter by product group**
Shows all orders containg products from the product group selected.

**Filter presets**
You can even create your own preset filters based on a custom conditions and save them for future use. Preset filters can be personal or company-wide.

<img src={require("/img/order_filter_preset_panel.png").default} height="" width="300" />

In the example above, two preset filters are defined.

#### How to create a new preset filter

Click the ‘Add’ button to create a new preset filter.

<img src={require("/img/order_filter_preset_conditions.png").default} height="" width="600" />

1. Provide a valid name
2. Choose the preset level
    * Personal - Only displayed in your own ShopCtrl environment. The preset filter is not shown to other users within your organization.
    * Global - Display the preset filter for all users within an organization.
3. Please note, the preset level may not be visible at all times. Only the admin account can create global presets.
4. Define filter conditions. Add unlimited rules with custom conditions
5. Click ‘Save and Apply’ to store the preset.

