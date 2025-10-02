---
sidebar_position: 1
slug: /docs/setting-up-integration-with-amazon-1p
---

# Setting up Integration with Amazon 1P

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

Amazon integration connector lets you import purchase orders from your Amazon seller account using API integration directly to ShopCtrl.

## Amazon 1P Synchronization Module Features

With the Amazon 1P module you can:

- Import Amazon Purchase Orders
- Go through all stages of internal approval to respond to [Amazon Bulk Buy Offers](/docs/User-Guide/07-Fulfillment/Amazon-1P-Order-Fulfillment-Workflow/amazon-bulk-buy-offers-approval.md) requests
- Track which Purchase Orders are based on previously approved Bulk Buy Offers
- Pick and [Pack shipments](/docs/User-Guide/07-Fulfillment/Amazon-1P-Order-Fulfillment-Workflow/amazon-1p-group-shipment.md) heading to Amazon fulfillment centers.
- Configure manual or automatic acknowledgement of orders back to Amazon based on your warehouse pick data.
- Create compliant shipping labels and generate documents for these shipments directly from ShopCtrl.
- Automatically submit ASNs to Amazon to inform them of the shipment's structure, contents, and future delivery date.


## Configuration Guide

To set up the integration, you need to complete these two configuration steps:

1.  **[Amazon Profile Configuration](./amazon-1p-profile-configuration.md)**: To initiate Amazon 1P integration, create the application and generate credentials for your store, granting ShopCtrl access to your open API.
2.  **[Setting Up Shop Synchronization](./amazon-1p-setting-up-shopctrl-synchronization.md)**: Set up your API credentials and connection details within ShopCtrl. Configure the specific rules and mappings for how data syncs between Amazon and your shop.




