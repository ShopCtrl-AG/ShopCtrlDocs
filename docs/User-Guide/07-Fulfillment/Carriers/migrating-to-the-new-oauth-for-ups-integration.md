---
sidebar_position: 9
slug: /docs/migrating-to-the-new-oauth-for-ups-integration
---


# Migrating to the New OAuth for UPS Integration

As of 2024, UPS has initiated the transition to the OAuth 2.0 security model for all APIs. This move aims to enhance security, reduce fraud, and provide improved API capabilities. OAuth 2.0 will replace the current access key authentication system with a more secure client ID and client secret mechanism.

:::warning[[Important Update from UPS](https://developer.ups.com/)]

> UPS has deprecated access key authentication in favor of an OAuth 2.0 security model for all APIs. After August 5, 2024, all integrations must utilize the OAuth 2.0 authentication model to continue to transact with UPS APIs. 

:::

## Setting up UPS Integration

To comply with these new authorization requirements, ShopCtrl has developed a new method for authorizing its application with UPS using the OAuth auth-code grant type. Follow these steps to set up your UPS integration:

Create an Application on the UPS Developer Portal:
    1. Visit [UPS Developer Portal](https://developer.ups.com/apps).
    2. Follow the steps on this [UPS Get Started guide](https://developer.ups.com/get-started) to create a new application.
    3. Choose an account to associate with these app credentials. You can link it to your existing account or create a new one.
    4. After creating the application, UPS will issue a **client ID** and **client secret**. Please keep these data as you would normally do with passwords to enter it later on the ShopCtrl carrier configuration page.

Refer to the [UPS OAuth Developer Guide](https://developer.ups.com/oauth-developer-guide) for more information on the specifics of OAuth authorization.

## Updating UPS Integration in ShopCtrl

To update your UPS integration in ShopCtrl to use OAuth 2.0, follow these steps:

1. Go to **Configuration > Transport > Carrier Accounts**.
2. Select your existing **UPS carrier account**.
3. In the UPS account info pane, change the **Authentication method** to OAuth 2.0 credentials (Client ID + Client Secret).
4. Enter the **Client ID** and **Client Secret** of your UPS app.
5. Click **Test credentials** to verify that the authentication is successful.
6. **Save** or **Save and Close** to apply the changes.

**Testing the Connection**

Enable the **Test mode** and create a test label for one of your shipments. In test mode, UPS will connect to the sandbox environment and generate a sample label. Once everything is set up correctly, disable the test mode.