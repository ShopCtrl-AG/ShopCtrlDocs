---
sidebar_position: 2
slug: /docs/magento-2
---

# Magento 2

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

Magento integration connector allows you to:

- import orders
- export track and trace information back to Magento
- synchronize products
- export stock levels

## Setting up Magento Integration

To set up an integration with Magento, you first need to enable REST API integration in your Magento account.
First, create a new user for your new ShopCtrl integration following these steps:

1. [Create new Magento user](https://docs.magento.com/user-guide/system/permissions-users-all.html#create-a-new-user).

1. Assign an admin role to the newly created user. Please make sure to grant the new ShopCtrl API integration access to these resources on your Magento stores:
   - Sales
   - Products
   - Carts
   - Customers
   - Marketing
   - Content
   - Stores
   - System
   - Global Search

Please check [Magento Role Resources](https://docs.magento.com/user-guide/system/permissions-role-resources.html) for mre information.

## Setup your Magento synchronization in ShopCtrl

:::warning[Before start]

Before enabling synchronization with Magento, please set up the corresponding shop currency, VAT tariffs, and payment types for your ShopCtrl shop.

:::

Once you have generated API keys in your Magento account, you can set up synchronization in ShopCtrl.

1. Log in to your ShopCtrl account as a user with the **Shop Owner Admin** role.
2. In the navigation menu, select **Configuration > Shops** to open the list of shops created.
3. Select a shop you would like to set up Magento synchronization for and click **Edit** to open shop settings.
4. Within topic menu select **Shop synchronization > Magento V2.X Synchronization**
   ![magento-connection-functional-settings](/img/magento-connection-functional-settings.png)
5. Provide the **Username** and **Password** created for the ShopCtrl API integration in Magento.
6. Enter the **API Url** which is `https://{hostname}/index.php/rest`.
7. Click **Connect to Magento and load available Store Views**. If credentials were correct and the connection was established, the Store view field will be enabled.
8. Select the **Store View** that you would like to connect to this shop in ShopCtrl.
9. Check the features you would like to use:
   1. Import orders
   2. Export parcels
   3. Import products
   4. Export stock
   5. Export sales product stock
   6. Export sales product price
10. Select the **Allowed product type**:
    1. Simple
    2. Bundle
    3. All - use both Simple and Bundle products
11. (Optional) Specify the **Specific mappings** for importing Magento orders.
12. Map the ShopCtrl **Main Order Statuses** to the Magento order statuses.
    ![magento-shop-mapping](/img/magento-shop-mapping.png)

Please, see [Magento Order Statuses](https://docs.magento.com/user-guide/sales/order-status.html) for more information. 12. Map the ShopCtrl **Payment Statuses** to the Magento **Payment statuses**. 13. Map the ShopCtrl **Payment Types** to the Magento **Payment Methods**. 14. Create **Carrier account mapping** to guarantee that the ShopCtrl carrier account names correspond to the Magento carrier codes. 17. **Enable** the synchronization. 18. Click **Save** or **Save and Close** to apply changes to the shop.

:::info[Note]

Orders synchronization feature is enabled by default once the Magento synchronization is enabled.

:::
