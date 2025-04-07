---
sidebar_position: 2
slug: /docs/importing-orders
---

# Importing Orders


ShopCtrl imports orders from various [Platforms](/docs/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/index.md). This article describes the specifics of order import from different sales channels.

:::warning[Please note]

After the order is imported to ShopCtrl, the further changes of the order on Sales channel won't be synchronized to ShopCtrl.  Exceptions are made only for cancelation requests from Amazon and Shopify. 

:::


## Importing orders from Amazon
ShopCtrl imports orders once they pass the pending state and are ready to be shipped. From that moment customer can no longer cancel the order without contacting the seller. 

ShopCtrl synchronizes the order totals in corresponding currency, product name, seller SKU, quantities, and VAT tariffs applied to the order into the system. Since the order is already paid, the corresponding payment will be auto-created in ShopCtrl.



### Importing orders with customized products

You can customize products you sell on Amazon with text, images, or configuration if you are registered to use this feature.
ShopCtrl imports this type of product customization chosen by the customer directly to order row properties. 


To ensure that property names and values will be imported according to your expectations, please make sure to give meaningful names to customization surfaces and option names. See the screenshot below.
<img src={require("/img/amazon-customization-import.png").default} height="" width="800" />

Each customization option of product listing has its name (not visible to customers) and its label (visible to customers).
To correctly process the data and parse it in a generic way for all listings, we take:

* the option name as property name ("Option Dropdown 1" on the screenshot)
* the option value as property value ("RED, GREEN, BLUE" on the screenshot)

<img src={require("/img/order-row-parameters-customization-one-option.png").default} height="" width="800" />

If customer selects several custom properties for the listing, property names will receive a `[{Surface name}]` prefix. 

<img src={require("/img/order-row-parameters-customization-two-options.png").default} height="" width="800" />

Please check Amazon Help pages [Offer customizable products](https://sell.amazon.com/programs/custom) for more information about how to configure custom products.

## Importing orders from Shopify

Orders are imported to ShopCtrl with scheduled sync requests approximately every 6 minutes. 
With the auto-check missing orders for order import feature turned on, ShopCtrl will also check regularly if any orders went missing.

ShopCtrl synchronizes the order totals in corresponding currency, discounts applied, product names, codes, quantities, and VAT tariffs applied to the order rows.
If the order is already paid, the corresponding payment record will be auto-created in ShopCtrl.