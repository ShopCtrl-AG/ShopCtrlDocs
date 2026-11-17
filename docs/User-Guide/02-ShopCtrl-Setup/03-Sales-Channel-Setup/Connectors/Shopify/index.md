---
sidebar_position: 1
slug: /docs/shopify
description: "Connect Shopify to ShopCtrl to import orders, send tracking info and fulfillments, and keep Shopify inventory in sync."
---

# Shopify

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in these articles.

:::

The Shopify connector imports orders from your Shopify store into ShopCtrl, sends tracking info back to Shopify, and keeps the stock in Shopify up to date.

## What the connector does

**Orders**

- [Importing orders from Shopify](/User-Guide/04-Order-Management/02-Orders/Create-Orders/importing-orders.md#importing-orders-from-shopify)
- [Fulfilling orders and exporting tracking info](/User-Guide/07-Fulfillment/tracking-update.md#fulfilling-orders-and-exporting-tracking-info-to-shopify)

**Stock**

- [Updating Shopify inventory](/User-Guide/08-Product-Management/Product-Export/exporting-inventory.md#updating-shopify-inventory)

## Before you start

Make sure you have:

**In ShopCtrl**

- The **Shop Owner Admin** role for the shop you want to connect.
- Shop currency, VAT tariffs, and payment types set up for the shop.

**In Shopify**

- The [App developer](https://help.shopify.com/en/manual/your-account/users/roles/roles-managed-by-shopify#app-developer) role, which is needed to create an app in the Shopify Dev Dashboard. Collaborators can't access the Dev Dashboard.
- Access to the Dev Dashboard of the Shopify organization that owns the store.

## Which Shopify app do I need?

ShopCtrl connects to your store through a custom app that you create in Shopify. Shopify changed the way custom apps are created and authenticated on January 1, 2026, and ShopCtrl supports both types.

**New connection**

- Create an app in the [Shopify Dev Dashboard](https://dev.shopify.com/dashboard/).
- ShopCtrl connects with a **Client ID** and **Client secret**.

**Already connected before 2026**

- Your shop uses a legacy custom app, created in the Shopify admin.
- ShopCtrl connects with an **API key** and **Admin API access token**.
- The integration keeps working without any changes. You don't need to create a new app or reconfigure ShopCtrl.

## Set up the integration

1. [Create a Shopify app](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/create-shopify-app.md) and copy its credentials.
2. [Connect ShopCtrl to Shopify](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/connect-to-shopify.md) with these credentials.
3. [Configure synchronization settings](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/synchronization-settings.md): choose the features, map carriers and warehouses, and enable the synchronization.
