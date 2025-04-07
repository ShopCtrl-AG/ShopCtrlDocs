---
sidebar_position: 4
slug: /docs/tracking-update
---

# Tracking Update 


Once the order is shipped, ShopCtrl can update the customer with the tracking information by sending an email using preset [Triggers](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/index.md).
It is also possible to update tracking information back to the Sales Channel it was received from. Should it be a marketplace or a shopping platform.

## Fulfilling orders and exporting tracking info to Shopify

To synchronize shipments created for the order in ShopCtrl back to Shopify, we need to enable **Send Track&Trace info to Shopify** feature. Please note, that [Location and Carrier mapping](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/shopify.md#setup-your-shopify-synchronization-in-shopctrl) should be set up for the shop in ShopCtrl. 
The required setup at Shopify implies that the **Automatic fulfillment** is disabled for your shop. 
For more information on how to disable Automatic fulfillment, please check Shopify help pages - [Configure your order fulfillment settings](https://help.shopify.com/en/manual/checkout-settings/order-processing#configure-your-order-fulfillment-settings)


The manual process of fulfilling orders at Shopify distinguishes creating a fulfillment for the order and adding tracking information to the fulfillment. [Shopify Help pages. Fulfill your orders manually](https://help.shopify.com/en/manual/orders/fulfillment/fulfilling-orders/fulfill-your-own#fulfill-our-own-orders-manually)

:::warning[**Please note**]

After enabling the **Send Track&Trace info to Shopify** feature, ShopCtrl takes control over the **whole fulfillment process** at Shopify, starting with creating fulfillment(s) for the order at Shopify and adding tracking information to this fulfillment.
The automation flow implies that orders should not be edited, or fulfilled from Shopify anymore. Once the order is synchronized to ShopCtrl, the following changes are to be performed only from Shopctrl.

:::

All the shipment(s) and the corresponding tracking information are updated back to Shopify once the order status changes to fully shipped.

The shipment data synchronized to Shopify per shipment:
*  warehouse (location) the order was shipped from
*  carrier name that shipped the particular shipment
*  Shipped products
*  Tracking code and tracking URL

Order fulfillment at Shopify is similar to the order shipment at Shopctrl. If an order is shipped in several packages from different locations, the Shopify order fulfillment will be updated with the corresponding information once the order status is changed to fully shipped. 


## Exporting shipments tracking info to Amazon

To synchronize tracking codes created for the order in ShopCtrl back to Amazon; enable **Export shipments** feature and set up carrier mapping. See more [Setting up Amazon synchronization](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/amazon-3p.md#2-setting-up-amazon-shop-synchronization-in-shopctrl). 

All the shipments and the corresponding tracking information will be updated to Amazon with regular sync requests once the tracking code is provided.
Based on carrier mapping, ShopCtrl will send shipment data for each order:

* Carrier name and delivery service used to ship the order
* Tracking code
* Tracking URL

If an order is shipped in several packages from different locations, the tracking codes will be updated in order of dispatch per corresponding order row on Amazon.