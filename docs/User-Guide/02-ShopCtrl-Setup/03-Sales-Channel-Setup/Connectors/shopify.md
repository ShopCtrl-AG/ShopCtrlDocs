---
sidebar_position: 5
slug: /docs/shopify
---

# Shopify

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

Shopify integration connector lets you import orders and products from your Shopify online store using API integration directly to ShopCtrl.

## Shopify module synchronization features

Shopify integration connector lets you import orders and products from your Shopify online store using API integration directly to ShopCtrl.

- [Importing orders from Shopify](/docs/User-Guide/04-Order-Management/02-Orders/Create-Orders/importing-orders.md#importing-orders-from-shopify)
- [Tracking update](/User-Guide/07-Fulfillment/tracking-update.md#fulfilling-orders-and-exporting-tracking-info-to-shopify)
- [Updating Shopify inventory](/docs/User-Guide/08-Product-Management/Product-Export/exporting-inventory.md#updating-shopify-inventory)
- Importing product details
- Exporting product details

## Setting up integration with Shopify

### Create a custom app in your Shopify account

To set up the integration, you first need to create a new ShopCtrl App within your Shopify admin panel and grant it access to the API of your store. For more information on Shopify Custom Apps, visit [Shopify Help Center Custom apps](https://help.shopify.com/en/manual/apps/app-types/custom-apps).

You might need to enable the possibility to create a new custom app in your Shopify admin settings first. Please check [Enable custom app development from the Shopify admin](https://help.shopify.com/en/manual/apps/custom-apps#enable-custom-app-development-from-the-shopify-admin) for more information.

To generate credentials to your store and give ShopCtrl access to your open API, you need to create and install a custom app:

1. Log in to your Shopify admin.
2. On the navigation menu click **Settings ⚙ > Apps and sales channels**.
   ![shopify-apps-and-sales-channels](/img/shopify-apps-and-sales-channels.png)
3. Click **Develop apps**.
4. Click **Create an app**.
5. In the pop up window, enter the **App name** and select an **App developer**.
   ![shopify-admin-create-a-custom-app](/img/shopify-admin-create-a-custom-app.png)
6. Click **Create app**.
7. You need to set **API scopes** to determine which parts of your store the ShopCtrl custom app can access. To do this click **Configure Admin API scopes**.
8. You can now filter and grant ShopCtrl app with access to the following scopes:
   - read_assigned_fulfillment_orders
   - write_assigned_fulfillment_orders
   - read_fulfillments
   - write_fulfillments
   - read_inventory
   - write_inventory
   - read_locations
   - read_merchant_managed_fulfillment_orders
   - write_merchant_managed_fulfillment_orders
   - read_third_party_fulfillment_orders
   - write_third_party_fulfillment_orders
   - read_orders
   - write_orders
   - read_products
   - write_products
   - read_shipping
   - (optional) read_content
   - (optional) write_content
9. After you've set API scopes for your app, you can install the app to get the API access tokens. Click **Install app**.
10. In the modal window, click **Install app**.
11. The API key, secret, and Admin API access token are now displayed on the screen. To get the access token: Go to the Admin API access token section and click **Reveal token once**. Save it in a secure place like you would normally do with passwords.

To establish a connection to ShopCtrl you will need Api key and Admin API access token.

According to Shopify:

> The app developer can be the store owner, or any staff or collaborator account with the [Develop apps permission](https://help.shopify.com/en/manual/your-account/staff-accounts/staff-permissions/staff-permissions-descriptions).

### Setup your Shopify synchronization in ShopCtrl

:::warning[Before start]

Before enabling synchronization with Shopify, please set up the corresponding shop currency, VAT tariffs, and payment types for your ShopCtrl shop.

:::

Once you have enabled integration in your Shopify account, you can set up synchronization in ShopCtrl.

1. Log in to your ShopCtrl account as a user with the **Shop Owner Admin** role.
2. In the navigation menu select **Configuration > Shops** to open the list of shops created.
   ![shopctrl-shop-settings](/img/shopctrl-shop-settings.png)
3. Select a shop you would like to set up Shopify synchronization for and click **Edit** to open shop settings.
4. Within topic menu select **Shop synchronization > Shopify Synchronization**
   ![shopify-settings-with-refund](/img/shopify-settings-with-refund.png)
5. In the **Connection settings** pane, provide the **API key** and **API password (API access token)** generated for the ShopCtrl app in Shopify.
6. Provide an **Api url**, which is `https://{hostname}/admin/api/{version}/`. The current supported API version is **'2023-01'**.
7. Click the **Connect** button to check the connection settings. A popup window will appear identifying whether the connection was established successfully or if there is a problem with credentials provided incorrectly.
8. In the **Functional settings** pane, check the features you would like to use:
   _ **Import Orders** from Shopify - imports new orders at the specified interval
   _ **Auto-check missing orders for order import** - check this feature to exclude all possible synchronization mistakes and import orders that went missing for any reasons
   _ **Send Track&Trace info** - exports tracking code, carrier and tracking url to Shopify
   _ **Repair manual fulfillment on Shopify side** - in case the orders were accidentally fulfilled in Shopify admin, this fulfillment is mapped to the ShopCtrl shipment and missing tracking information is auto-updated at Shopify.
   _ **Export Products** - exports new and updates existing products to Shopify
   _ **Export Products stock to Shopify** - export available product stock
   _ Use sku for not mapped product when export product stock - required if initial product import was not performed via Shopify module.
   _ **Check active only products when using sku for not mapped products** - this setting helps avoid the situation, when one of your product stock doesn't get updated
   _ Sync hs code along with product stock
   _ Enable Inventory track quantity when export product stock - enables track quantity for a product in Shopify, if stock for this product increases in ShopCtrl
   _ **Import Products** - imports new and updates existing products from Shopify
   _ **Refund product** - this is the not synchronized system product that will be created in case the refund imported from Shopify does not have a link to a certain order row.
   :::(Warning) (**Note**)
   **Send Track&Trace info**. To enable this feature, you also need to map **Warehouses** to Shopify **Locations** and create a **Carrier** mapping below.
   :::
9. Choose whether **Taxes are included in product price**. This setting depends on your Shopify store settings. Learn more on [Shopify Taxes](https://help.shopify.com/en/manual/taxes/).
10. To guarantee that the ShopCtrl carrier account names correspond to the ones used in Shopify, we need to create a **Carrier account mapping**.
    - Click **Add** and in the new row select from a dropdown a **ShopCtrl Carrier** account used for this shop.
    - Type in a **Shopify Carrier** account name. This carrier will be sent along with the tracking code back to Shopify when the order is marked as shipped.
11. Configure **Warehouse** to **Location** mapping: Choose a warehouse enabled for the shop and a corresponding Shopify location.
    ![shopify-warehouse-to-location-mapping-config](/img/shopify-warehouse-to-location-mapping-config.png)
12. **Enable** the synchronization.
13. Click **Save** or **Save and Close** to apply changes to the shop.
