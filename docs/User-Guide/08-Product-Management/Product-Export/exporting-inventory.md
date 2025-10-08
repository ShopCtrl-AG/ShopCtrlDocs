---
sidebar_position: 1
slug: /docs/exporting-inventory
---
# Exporting Inventory 

This article describes ways to update the product stock level to different sales channels.

## Updating Shopify inventory

Update of the product stock is a separate feature of the Shopify synchronization module and can be enabled apart from product synchronization in Shop Settings > Shopify Synchronization tab of the designated shop. Please check the [Setup your Shopify synchronization in ShopCtrl](/docs/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/shopify.md#setup-your-shopify-synchronization-in-shopctrl) for more information.


For more information about Shopify Locations, please visit [Shopify Locations](https://help.shopify.com/en/manual/locations).


Available stock levels are updated in real-time. Once ShopCtrl registers a change in the available stock of a certain product, a request is sent to update the same product in Shopify. Changes are usually processed within minutes.

Since inventory in Shopify is kept per location, we map the Warehouses in ShopCtrl to the corresponding Locations in Shopify and update product levels per location.

For example, if there are two warehouses configured for the shop, available product stock will be updated for both locations in Shopify.

<img src={require("/img/stock-update-available-both-warehouses.png").default} height="" width="800" />

<img src={require("/img/stock-update-available-both-warehouses-shopify.png").default} height="" width="400" />

When a new warehouse is enabled in ShopCtrl and mapped to the corresponding location in Shopify, the new location for a product will be enabled automatically with the stock update of the corresponding product. 
In case inventory tracking was not enabled for the product, it will also be turned on with the first stock update request from ShopCtrl.

Once the product's stock levels start to be synchronized, ShopCtrl will take the lead in this process. To help manage stock, the stock levels of locations that are not mapped or are disabled for a shop in ShopCtrl will be automatically zeroed in Shopify.
If a new location is created in Shopify, but not mapped to a warehouse in ShopCtrl yet, or the warehouse in ShopCtrl is disabled for a shop; the product stock levels on the corresponding location will be zeroed once a change in the stock of the certain product is registered.

## Updating Amazon inventory

Update of the product stock is a separate feature of the Amazon synchronization module and can be enabled apart from product synchronization in Shop Settings > Amazon Synchronization tab of the designated shop. Please check the [Setting up Amazon shop synchronization in ShopCtrl](/docs/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-3P/index.md#2-setting-up-amazon-shop-synchronization-in-shopctrl) for more information.

Export of stock levels is performed automatically in the background, with scheduled requests. After the change in available product stock is registered, the corresponding Amazon inventory listing is updated with a new value. 

:::warning[Please note]

Due to Amazon complex business rules applied to listings, changing inventory levels might take a significant amount of time for Amazon to process (from 15 minutes up to several hours).

:::

Products in ShopCtrl are mapped to Amazon inventory listings by SKU, which is the product code in ShopCtrl.
This way, a product listing in Amazon with SKU "003", is mapped to a product in ShopCtrl with the same product code "003".

The available stock level for the exact product inventory listing at Amazon will be calculated based on the availability of the stock for the particular Amazon shop in ShopCtrl. 

<img src={require("/img/product-inventory-update-01.png").default} height="" width="800" />

For example, if the product is kept at several warehouses, and all of them are connected to the shop, the product listing will be updated with a consolidated value.

<img src={require("/img/amazon-inventory-update-consolidated-01.png").default} height="" width="800" />

