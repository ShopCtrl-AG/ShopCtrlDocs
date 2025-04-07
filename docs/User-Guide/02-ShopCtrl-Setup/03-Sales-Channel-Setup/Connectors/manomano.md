---
sidebar_position: 3
slug: /docs/manomano
---

# Mano Mano

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

ManoMano integration connector allows you to import and accept orders and send back tracking information directly to Mano Mano.

## Setting up integration with ManoMano

To set up the integration, you first need to create an API key for your production environment. To do this, please follow the steps in this ManoMano support article: [How to generate my API key ?](https://somanomano.zohodesk.eu/portal/en/kb/articles/how-to-generate-my-api-key#How_can_I_generate_an_API_key_for_the_Production_environment_)

## Setting up Mano Mano synchronization in ShopCtrl

:::warning[Before start]

Before enabling synchronization with Mano Mano, please set up the corresponding shop currency, VAT tariffs, and payment types for your ShopCtrl shop.

:::
![connection-functional-settings-manomano](/img/connection-functional-settings-manomano.png)

To set up synchronization in ShopCtrl:

1. Log in to your ShopCtrl account as a user with the **Shop Owner Admin** role.
2. In the navigation menu, select **Configuration > Shops** to open the list of shops created.
3. Select a shop for which you would like to set up Mano Mano synchronization and click **Edit** to open shop settings.
4. Within the topic menu, select **Shop synchronization > Mano Mano Synchronization**.
5. First, within **Connection settings > Production** (highlighted green) enter the **API key** generated for the production environment.
6. Below enter your ManoMano **Seller contract number**.
7. Click the **Connect** button to test the connection. If all credentials were provided correctly, a pop-up window would open informing that the connection was successful.
8. (_Optional_) You can determine in ms the custom interval between API calls. Or leave the field blank to set API call timeout to default 5 minutes.
9. (_Optional_) Enable API logging to check the detailed logs on each API call performed.
10. Move back to the top of the pane to the **Functional settings** - **Orders** section. Check the features you would like to use:
    _ **Import Orders from Mano Mano** - new orders will be imported to ShopCtrl.
    _ **Order integration to ManoMano** - a setting required for sending T&T info to ManoMano
    _ **Auto-accept orders** - Pending orders imported will be automatically marked as accepted
    _ **Send Track&Trace info to ManoMano** - once the order is marked as shipped in Shopctrl, an automatic request to create a shipment within Mano Mano will be created. The Mano Mano shipment will be automatically updated with the tracking code and Url.
    :::(Warning)
    Update **Products** features like **Export Stock to ManoMano** and **Export Price to ManoMano** are currently under development and not yet available.
    :::
11. **Carrier account mapping**. Here you can map the Mano Mano carriers to the ShopCtrl ones. This mapping is used for auto-updating
    ![manomano-carrier-account-mapping](/img/manomano-carrier-account-mapping.png)
12. **Enable** the synchronization at the top of the Settings pane.
13. Click **Save** or **Save and Close** to apply changes to the shop.
