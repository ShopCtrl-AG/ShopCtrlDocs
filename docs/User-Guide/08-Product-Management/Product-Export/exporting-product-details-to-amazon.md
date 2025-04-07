---
sidebar_position: 2
slug: /docs/exporting-product-details-to-amazon
---
# Exporting product details to Amazon 



With this feature enabled, you can close or open your product listing on Amazon by publishing or unpublishing the corresponding product in ShopCtrl.
Turn it on at Shop Settings > Amazon Shop Synchronization > Product Integrations settings > Sync product publish state.

<img src={require("/img/product-publish.png").default} height="" width="800" />

To unbublish product on all sales channels - uncheck **Published** under the product name.
To deactivate it selectively on the Amazon sales channel, open Retail Price tab, select Amazon shop, and click **Unpublish** button. Product listing will be closed only on Amazon.

ShopCtrl will update Amazon right away after the change in publication status. But please note, that due to Amazon's complex business rules applied to listings, closing and activating listings might take a significant amount of time for Amazon to process (from 15 minutes up to several hours). 
If the change was not processed by Amazon within the working day (which can happen in rare cases), an alert will be displayed on a product in ShopCtrl. In this case, please check the inventory tab on your Amazon Seller account.

## Export changed product prices

This feature allows updating Amazon listing prices from ShopCtrl. To start using this functionality, enable it at Shop Settings > Amazon Shop Synchronization > Product Integrations settings > Export changed product prices. 

<img src={require("/img/amazon-inventory-listing-price.png").default} height="" width="800" />

Amazon product listing price is synchronized to the corresponding shop **Foreign Price Including VAT**.
On the screenshot below, the shop owner's base currency is Euro, and the Amazon shop currency is pounds.

<img src={require("/img/product-foreign-price-amazon.png").default} height="" width="800" />

Amazon product listing prices already include VAT, while ShopCtrl mostly operates prices excluding VAT. You can change **Price excluding VAT** in base shop owner currency and the prices on all shops the product is published at, will be recalculated. You can also change the specific product Foreign Price Including VAT by unchecking the 'Auto calc' checkbox and entering a new value.

<img src={require("/img/shop-settings-price-details.png").default} height="" width="400" />

Once the product is saved, the request to change the price will be sent to Amazon with a next scheduled synchronization within the next 15 minutes.
Due to the certain procedure, Amazon applies to listings, e.g. the prices must correspond to Amazon pricing rules and fit into the Min-Max prices range. Please note, that an update of prices might take a significant amount of time (**up to 24 hours**) for Amazon to process. 
Amazon validates the price asynchronously and does not reply back about warnings or product deactivations due to a violation of the price rules. 
If the price violates Amazon's price management, the listing price change will be still processed, but the listing status will be changed to *Inactive*. Please track these warnings about potential pricing errors within your Seller Central admin. Amazon also notifies about deactivation via email.

:::warning

Please note, due to Amazon API limitations, we do not receive a report about the status of the price change.
If Min and Max prices are not set for the product listing you are editing, the price update request can silently be rejected. 

:::

See more about price management on Amazon's help pages:
[Price your item](https://sellercentral.amazon.com/gp/help/external/help-page.html?itemID=62551&language=en_US&ref=efph_62551_bred_G201995750)
[Price not changing: troubleshooting guide](https://sellercentral.amazon.com/gp/help/external/help.html?itemID=202128960&language=en_US&ref=efph_202128960_relt_E85R4NP368X5KKB)
[Automate Pricing](https://sellercentral.amazon.com/gp/help/external/help-page.html?itemID=201994820&language=en_US&ref=efph_201994820_bred_E85R4NP368X5KKB) 
If you have Automated Pricing rules applied, the price update from ShopCtrl won't take effect on the listing price.