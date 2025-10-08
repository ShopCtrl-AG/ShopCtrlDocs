---
sidebar_position: 2
slug: /docs/rotating-your-amazon-1p-connectors-credentials
---
# Rotating your Amazon 1P connector's credentials

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

In accordance with Amazon's recent announcement, Amazon is improving security for Amazon Services API Developers by requiring the rotation of Login with Amazon (LWA) credentials (client secrets) every 180 days. 
> Regular and timely rotation of LWA client credentials limits the duration of your application's credentials in the event that credentials are exposed or compromised.

For more information, refer to Rotating your application's LWA credentials in the [Amazon Services API documentation](https://developer-docs.amazon.com/sp-api/docs/rotating-your-apps-lwa-credentials).

## How to rotate the Login With Amazon (LWA) credential for your ShopCtrl 1P application.

This process will consist of two steps. 

### Step 1. Issue a new LWA client secret for your ShopCtrl application in Amazon Vendor Central.

1. Sign in to your developer account on [Vendor Central](https://vendorcentral.amazon.co.uk).
2. From the top right navigation menu, select **Integration > API integration**.
    <img src={require("/img/amazon-go-to-api-integration.png").default} height="" width="800" />
3. On the **API Integration Developer Central** page you can see all of your applications listed.
    <img src={require("/img/Amazon-api-integrations-list.png").default} height="" width="800" /> 
4. Locate the ShopCtrl application and on the **LWA credentials** column  click **View**.
    <img src={require("/img/amazon-lwa-creds-not-rotated.png").default} height="" width="400" />
5. Choose **Rotate secret**, read the warning, then choose **Rotate secret** again.
    <img src={require("/img/amazon-rotate-lwa-creds-confirm.png").default} height="" width="400" /> 
6. Copy the newly generated **Client Secret**. Store it like you would normally do with passwords.
    <img src={require("/img/amazon-rotate-lwa-creds-new.png").default} height="" width="400" />


:::danger[**Amazon requires:**]

 > After you generate a new LWA credential (client secret), you must update your credentials for any applications that call the Amazon APIs. Your old credentials expire 7 days after you generate new credentials.

:::


### Step 2. Update ShopCtrl to use new  LWA client secret to synchronize to Amazon Vendor Central.

To update ShopCtrl shop Synchronization with a new LWA client secret;
1. Log in to your ShopCtrl account as a user with the **Shop Owner Admin** role.
2. In the sales channel pane click on the Amazon 1P shop icon (a shop for which Amazon 1P synchronization is configured) and select **Settings**.
3. On the shop details page go the topic menu, select **Shop synchronization > Amazon 1P Synchronization**.
    <img src={require("/img/amazon-shopctrl-1p-shop-sync.png").default} height="" width="800" />
4. In the **LWA Client Secret** field enter the new value generated for the ShopCtrl private app in Amazon.
5. Click **Save and Close** to apply changes to the Amazon 1P synchronization.


To maintain the security of your Amazon Services API integration, it's important to regularly rotate your Login with Amazon (LWA) credentials and update them in ShopCtrl. By following the steps outlined above, you can easily generate new credentials in Amazon Vendor Central and ensure that your ShopCtrl synchronization remains up to date.