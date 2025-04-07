---
sidebar_position: 7
slug: /docs/woocommerce
---

# WooCommerce

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

WooCommerce integration connector allows you to:

- import orders
- synchronize products
- export stock levels

## Setting up WooCommerce Integration

To set up an integration with WooCommerce, you first need to enable REST API integration in your WooCommerce store.
Follow the steps to create new key for your ShopCtrl shop: [Generate API keys](https://woocommerce.com/document/woocommerce-rest-api/?quid=5cff6a57e7909a84f96e7ac31c10df74).
Please grant the new ShopCtrl API integraton a **Read/Write** access to your Woocommerce store.

## Setup your WooCommerce synchronization in ShopCtrl

:::warning[Before start]

Before enabling synchronization with WooCommerce, please set up the corresponding shop currency, VAT tariffs, and payment types for your ShopCtrl shop.

:::

Once you have generated API keys in your WooCommerce account, you can set up synchronization in ShopCtrl.

1. Log in to your ShopCtrl account as a user with the **Shop Owner Admin** role.
2. In the navigation menu select **Configuration > Shops** to open the list of shops created.
3. Select a shop you would like to set up WooCommerce synchronization for and click **Edit** to open shop settings.
4. Within topic menu select **Shop synchronization > WooCommerce V2 Synchronization**
   ![woocommerce-connection-settings](/img/woocommerce-connection-settings.png)
5. Enter the **API Url** of your Wocommerce store, which is `https://{hostname}`.
6. Provide the **Consumer Key** and **Consumer Secret** generated for the ShopCtrl API integration in WooCommerce.
7. (Optional) Specify the **Specific mappings** for importing WooCommerce orders.
   ![woocommerce-shop-mapping-settings](/img/woocommerce-shop-mapping-settings.png)
8. Map the ShopCtrl **Main Order Statuses** to the WooCommerce order statuses.
   Please see [WooCommerce Order statuses](https://woocommerce.com/document/managing-orders/#order-statuses) for more information.
9. Map the ShopCtrl **Payment Types** to the WooCommerce **Payment Methods**.
10. Create **Carrier account mapping** to guarantee that the ShopCtrl carrier account names correspond to the ones used in WooCommerce.
11. Map the **VAT tariffs** used on a shop to the ones used in WooCommerce.
12. In the **Product synchronization** pane, check the features you would like to use:
    - **Sync Products to WooCommerce** - export products included in active selection to WooCommerce
    - **Product sync mode - StockExport** - check this feature to export ShopCtrl stock levels to WooCommerce
13. **Enable** the synchronization.
14. Click **Save** or **Save and Close** to apply changes to the shop.

:::info[Note]

Orders synchronization feature is enabled by default once the WooCommerce synchronization is enabled.

:::
