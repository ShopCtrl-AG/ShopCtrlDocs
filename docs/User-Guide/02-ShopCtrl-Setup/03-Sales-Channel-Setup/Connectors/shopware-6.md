---
sidebar_position: 8
slug: /docs/shopware-6
---

# Shopware v6

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

Shopware integration connector allows you to import orders and products from your Shopware sales channels using API integration directly to ShopCtrl.

## Setting up Shopware 6 Integration

To set up an integration with Shopware, you first need to create a user role and then configure the integration.

### Create role

To create an API User Role in Shopware 6

1. Login your Shopware account as user with admin rights.
2. Open **Settings > System > Users & permissions**.
   ![shopware-create-role](/img/shopware-create-role.png)
3. Enter a **Name**.
4. Select the **permissions** required for ShopCtrl integration:

| Area of Shopware (including the sub-areas) |  View   |  Edit   | Create  | Delete  |   All   |
| ------------------------------------------ | :-----: | :-----: | :-----: | :-----: | :-----: |
| Catalogues                                 | &#9745; | &#9745; | &#9745; | &#9745; | &#9745; |
| Orders                                     | &#9745; | &#9745; | &#9745; | &#9745; | &#9745; |
| Other - Sales Channels                     | &#9745; |         |         |         |         |
| Settings                                   | &#9745; | &#9745; | &#9745; | &#9745; | &#9745; |

5. Click **Save** to create new role.

For more information visit [Shopware 6 Users & Permissions documentation](https://docs.shopware.com/en/shopware-6-en/settings/system/user?category=shopware-6-en/settings/system#new-rolls).

### Create integration

To create a new integration in Shopware 6:

1. Log in to your Shopware account as a user with admin rights.
2. Open **Settings > System > Integrations**.
3. Click **Add integration**.
4. Enter the **Name**.
5. Select the **Role** created for ShopCtrl API integration at previous steps.
6. Copy and note down the **Access key ID** and **Secret access key**. These keys will be used later for the ShopCtrl synchronization module.
   ![shopware-create-integration](/img/shopware-create-integration.png)
7. Click **Save Integration**.

:::warning

Please write down the **Secret access key** and keep it in a secure place. The secret access key will no longer be visible after saving integration.

:::

For more information visit [Shopware 6 Integrations documentation](https://docs.shopware.com/en/shopware-6-en/settings/system/integrationen).

## Setting up Shopware v6 synchronization in ShopCtrl

:::warning[Before start]

Before enabling synchronization with Shopware, please set up the corresponding shop currency, VAT tariffs, and payment types for your ShopCtrl shop.

:::

Once you have enabled integration in your Shopware account, you can set up synchronization in ShopCtrl.

1. Log in to your ShopCtrl account as a user with the **Shop Owner Admin** role.
2. In the navigation menu, select **Configuration > Shops** to open the list of shops created.
3. Select a shop for which you would like to set up Shopware synchronization and click **Edit** to open shop settings.
4. Within topic menu select **Shop synchronization > Shopware v6 Synchronization**
   ![shopware-shop-settings-connection](/img/shopware-shop-settings-connection.png)
5. Provide the **Access key** and **Secret key** generated for the ShopCtrl integration in Shopware.
6. Provide an **Api url**, which is `https://{hostname}/api`.
7. Specify the **Token url** `https://{hostname}/api/oauth/token`.
8. In the **Functional settings** pane, check the features you would like to use:
   - Export Products to Shopware
   - Import Products from Shopware
   - Import Orders from Shopware
9. **Enable** the synchronization.
10. Click **Connect** to establish the connection. If connection was successful, the Sales Channels and mapping panes will be enabled.
    ![shopware-sync-status-mapping](/img/shopware-sync-status-mapping.png)
11. From the drop-down, select the **Sales channel** that you would like to synchronize your shop with.
12. Map the Shopware **taxes** to the **VATs** set at your ShopCtrl shop. Shopware VAT displayed is the one chosen according to the Shopware tax rules for the sales channel country. If no tax rule for the sales channel country is defined, the default one is displayed. Please see more on [Shopware taxes](https://docs.shopware.com/en/shopware-6-en/settings/taxes).
13. Add and map the **Main Order Statuses.**
14. Add and map the **Payment Order Statuses**.
15. Click **Save** or **Save and Close** to apply changes to the shop.
