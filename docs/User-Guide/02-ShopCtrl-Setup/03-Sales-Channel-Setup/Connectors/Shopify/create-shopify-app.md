---
sidebar_position: 2
slug: /docs/shopify-app
description: "Step 1 of the Shopify setup: create an app in the Shopify Dev Dashboard with the required API scopes, install it on your store and copy the Client ID and Client secret."
---

# Step 1. Create a Shopify app

ShopCtrl connects to your store through a custom app that you create in Shopify. The app defines which parts of your store ShopCtrl can access and gives you the credentials for the connection.

:::info[Already connected?]

If your shop was connected before 2026, it uses a legacy custom app and keeps working without any changes. You can skip this step. See [Legacy custom apps](#legacy-custom-apps).

:::

## Create an app in the Shopify Dev Dashboard

1. Open the [Shopify Dev Dashboard](https://dev.shopify.com/dashboard/) and make sure **Apps** is selected in the navigation menu.
2. Click **Create app**.
3. In the dropdown, select **Create app manually** (*Use the Dev Dashboard form instead*). You don't need the Shopify CLI option.

   <img src={require("/img/shopify-create-app-manually.png").default} alt="Create app manually in the Shopify Dev Dashboard" width="800" />

4. Fill in the **Create an app** form:
   - **App name** - for example *ShopCtrl*.
   - **App URL** - enter the address of your ShopCtrl, the one you open in the browser to log in, for example `https://yourcompany.shopctrl.com`. Shopify opens this page after the app is installed and when you open the app from the Shopify admin.
   - **Embed app in Shopify admin** - leave it cleared.
   - **Scopes** - copy the list below with the copy button in its top-right corner, and paste it into the field. See [Required API scopes](#required-api-scopes) for what each scope is used for.

     ```text
     write_inventory,read_inventory,read_locations,read_merchant_managed_fulfillment_orders,write_merchant_managed_fulfillment_orders,read_orders,write_orders,read_products,write_products
     ```

   - **Webhooks API version** - keep the newest version.

   <img src={require("/img/shopify-admin-create-custom-app-details.png").default} alt="Create an app form in the Shopify Dev Dashboard" width="800" />

5. Click **Create app**. The **Release version** window opens.
6. Optionally, enter a **Description** for the version, then click **Release**. The app needs a released version before it can be installed.

   <img src={require("/img/shopify-admin-create-app-release-version.png").default} alt="Release version window in the Shopify Dev Dashboard" width="400" />

The app is created and the **Versions** page of the app opens.

## Install the app on your store

For more information, see [Install a custom app in the Dev Dashboard](https://help.shopify.com/en/manual/apps/install-setup-apps#install-custom-app-dev-dashboard) in the Shopify Help Center.

1. In the Dev Dashboard, click **Apps** in the navigation menu.
2. In the row of the new app, click the three dots (**⋮**) and select **Install app**.

   <img src={require("/img/shopify-admin-install-app.png").default} alt="Install app in the Apps list of the Shopify Dev Dashboard" width="800" />

3. You are redirected to your Shopify store. The **Install app** page shows the data the app needs access to. Click **Install**.

   The warning *This app hasn't been reviewed* is expected: Shopify reviews only public apps, not custom apps.

   <img src={require("/img/shopify-install-app.png").default} alt="Confirm the app permissions in the Shopify admin" width="800" />

The app is installed and Shopify opens your ShopCtrl, the **App URL** entered when creating the app. In the **Apps** list of the Dev Dashboard, the **Installs** column of the app shows *1*.

## Copy the Client ID and Client secret

1. In the [Shopify Dev Dashboard](https://dev.shopify.com/dashboard/), click the name of the app. The **Overview** page of the app opens.
2. In the **Credentials** card, copy the **Client ID** and **Client secret** with the copy buttons next to them. Save them in a secure place like you would normally do with passwords.

   <img src={require("/img/shopify-admin-app-credentials.png").default} alt="Client ID and Client secret on the app overview in the Shopify Dev Dashboard" width="800" />

You now have the Client ID and Client secret that ShopCtrl needs.

For more information, see these Shopify guides:

- [Create apps using the Dev Dashboard](https://shopify.dev/docs/apps/build/dev-dashboard/create-apps-using-dev-dashboard)
- [Client credentials grant](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/client-credentials-grant)
- [Shopify Help Center: Custom apps](https://help.shopify.com/en/manual/apps/app-types/custom-apps)

## Required API scopes

Scopes determine which parts of your store the ShopCtrl app can access. Copy the list and paste it into the **Scopes** field:

```text
write_inventory,read_inventory,read_locations,read_merchant_managed_fulfillment_orders,write_merchant_managed_fulfillment_orders,read_orders,write_orders,read_products,write_products
```

**Orders and fulfillment**

- read_orders, write_orders - import orders and their payments.
- read_merchant_managed_fulfillment_orders, write_merchant_managed_fulfillment_orders - fulfill orders and send tracking info.

**Products and stock**

- read_products, write_products - find products by SKU and enable track quantity for them.
- read_inventory, write_inventory - update stock in Shopify.
- read_locations - map warehouses to Shopify locations.

## Change the API scopes

Change the scopes of an installed app, for example when ShopCtrl needs a new scope after an update. Scope changes are not applied automatically to a store where the app is already installed: you release a new version of the app, and then install the app again to approve the new scopes in your store.

For more information, see [Manage access scopes](https://shopify.dev/docs/apps/build/authentication-authorization/manage-access-scopes) in the Shopify documentation.

1. In the [Shopify Dev Dashboard](https://dev.shopify.com/dashboard/), click the name of the app. The **Overview** page of the app opens.
2. On the **Versions** card, click **New version**.
3. In **Scopes**, add or remove scopes. Compare the list with [Required API scopes](#required-api-scopes).
4. Release the new version: click **Release**, optionally enter a **Description**, and click **Release** again.
5. Install the app again to approve the new scopes: in the Dev Dashboard, click **Apps**, then in the row of the app click the three dots (**⋮**) and select **Install app**. See [Install the app on your store](#install-the-app-on-your-store).
6. You are redirected to your Shopify store. The **Install app** page shows the new scopes. Click **Install** to approve them.

## Legacy custom apps

Legacy custom apps were created in the Shopify admin before January 1, 2026. Shopify no longer allows creating them, but existing ones keep working. ShopCtrl connects to them with an **API key** and an **Admin API access token**.

<details>
<summary>Find the credentials of a legacy custom app</summary>

1. Log in to your Shopify admin.
2. On the navigation menu click **Settings ⚙ > Apps**.

   ![Apps in the Shopify settings](/img/shopify-apps-and-sales-channels.png)

3. Click **Develop apps**. The list of your existing custom apps opens.
4. Open the app created for ShopCtrl.
5. To check or change the scopes, find the **Access scopes** section and click **Manage scopes**. The app needs the same [Required API scopes](#required-api-scopes).

   <img src={require("/img/shopify-admin-legacy-custom-app-settings.png").default} alt="Access scopes and Admin API access token of a legacy custom app" width="800" />

6. To find the **API key**, click **Open in Dev Dashboard** and open **Settings**. The API key is shown there as the **Client ID**.

The **Admin API access token** section shows the token masked. Shopify reveals it only once, so you can't view it again. If you no longer have the token, create a new app in the Dev Dashboard instead.

For more information, see [Manage legacy custom apps](https://help.shopify.com/en/manual/apps/managing-apps#manage-legacy-custom-apps) in the Shopify Help Center.

</details>

Next: [Step 2. Connect ShopCtrl to Shopify](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/connect-to-shopify.md)
