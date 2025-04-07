---
sidebar_position: 4
slug: /docs/rotating-your-amazon-connectors-credentials
---

# Rotating your Amazon 3P connector's credentials

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

In accordance with Amazon's recent announcement, Amazon is improving security for Amazon Services API Developers by requiring the rotation of Login with Amazon (LWA) credentials (client secrets) every 180 days.

> Regular and timely rotation of LWA client credentials limits the duration of your application's credentials in the event that credentials are exposed or compromised.

For more information, refer to Rotating your application's LWA credentials in the [Amazon Services API documentation](https://developer-docs.amazon.com/sp-api/docs/rotating-your-apps-lwa-credentials).

## How to rotate the Login With Amazon (LWA) credential for your ShopCtrl application.

This process will consist of two steps.

### Step 1. Issue a new LWA client secret for your ShopCtrl application in Amazon.

1. Sign in to your developer account on [Seller Central](https://sellercentral-europe.amazon.com/sellingpartner/developerconsole).
2. From the top right navigation menu, select **Apps and Services > Develop Apps**.
   ![Amazon-go-to-develop-apps](/img/Amazon-go-to-develop-apps.png)
3. On the **Developer Central** page you can see all of your applications listed.
   ![amazon-developer-central-applications](/img/amazon-developer-central-applications.png)
4. Locate the ShopCtrl application and on the **LWA credentials** column click **View**.
   ![amazon-rotate-lwa-client-secret](/img/amazon-rotate-lwa-client-secret.png)
5. Choose **Rotate secret**, read the warning, then choose **Rotate secret** again.
   ![amazon-rotate-client-secret-2-step](/img/amazon-rotate-client-secret-2-step.png)
6. Copy the newly generated **Client Secret**. Store it like you would normally do with passwords.

:::(Error) (**Amazon requires:**)

> After you generate a new LWA credential (client secret), you must update your credentials for any applications that call the Amazon APIs. Your old credentials expire 7 days after you generate new credentials.
> :::

### Step 2. Update ShopCtrl to use new LWA client secret to synchronize to Amazon.

To update ShopCtrl shop Synchronization with a new LWA client secret;

1. Log in to your ShopCtrl account as a user with the **Shop Owner Admin** role.
2. In the sales channel pane click on the Amazon shop icon (a shop for which Amazon synchronization is configured) and select **Settings**.
3. On the shop details page go the topic menu, select **Shop synchronization > Amazon Shop Synchronization**.
   ![shop-settings-lwa-secret-field](/img/shop-settings-lwa-secret-field.png)
4. In the **LWA Client Secret** field enter the new value generated for the ShopCtrl private app in Amazon.
5. Click **Save and Close** to apply changes to the Amazon synchronization.
