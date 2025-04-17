---
sidebar_position: 3
slug: /docs/ebay
---

# eBay

This guide provides step-by-step instructions for integrating your eBay shop with ShopCtrl to enable seamless order synchronization and management.


## Configuring eBay Integration with ShopCtrl. Prerequisites.

1. **Register with eBay**: [Join the eBay Developers Program](https://developer.ebay.com/api-docs/static/gs_join-the-ebay-developers-program.html).
   *Note: Processing time may vary for eBay registrations.*
2. **Create an eBay Shop in ShopCtrl**: [Set up your eBay shop](/docs/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/create-shop.md) before proceeding.

## Step 1: Prepare for Integration - Obtain eBay API Keys.

To receive Production API keys, you must complete eBay's account deletion/closure notification process. This ensures GDPR compliance when ShopCtrl processes customer data from eBay.

Please check [eBay Policy Notice](https://developer.ebay.com/marketplace-account-deletion) for more information.

###  Configure Account Deletion Notifications.

**In ShopCtrl:**

1. Log in to your ShopCtrl account as a user with the Shop Owner Admin role.
2. Go to **eBay shop settings > Shop synchronization >eBay Synchronization**.
3. Navigate to **eBay Marketplace Account Deletion/Closure Notifications**.
4. For **Notification Endpoint**:
   - Click **Default** to generate your unique URL.
5. For **Verification Token**:
   - Click **Generate** to create your token.
6. Click **Save**.
<img src={require("/img/ebay-sync-gdpr-configuration.png").default} height="" width="800" />

**In eBay Developer Portal:**

1. Log in to your [eBay Developer Account](https://developer.ebay.com/).
2. From the top-right menu, select **Alerts & Notifications**.
3. Set environment to **Production**.
4. Go to **[Alerts & Notifications](https://developer.ebay.com/my/push?env=production\&index=0)** tab.
5. Select **Marketplace Account Deletion**.
<img src={require("/img/ebay-notification-endpoint-configuration.png").default} height="" width="800" />
6. Configure:
   - Notification email (for outage alerts).
   - Your ShopCtrl **Notification Endpoint** URL.
   - Your ShopCtrl **Verification Token**.
7. Click **Save**. Upon save you will be informed whether the test notification went well. 
<img src={require("/img/ebay-successful-notification-endpoint-configuration.png").default} height="" width="800" />

###  Request Production API Keys.

After completing the notification setup, request your Production API keys:

1. Follow eBay's guide:  
   [Create eBay API Keysets](https://developer.ebay.com/api-docs/static/gs_create-the-ebay-api-keysets.html).
2. Save these keys - you'll need them to connect ShopCtrl to your eBay orders.

## Step 2: Configure OAuth Redirect URL on eBay.

The eBay **Redirect URL** is required for OAuth authentication. Follow these steps to set it up.

### In eBay Developer Portal:

1. Log in to your eBay Developer Account.
2. From the top-right menu, select [User Access Tokens](https://developer.ebay.com/my/auth?env=production&index=0).
3. Review eBay's [Redirect URI documentation](https://developer.ebay.com/api-docs/static/oauth-redirect-uri.html).
4. Create a new **Redirect URL** configuration in Production environment.
5. Provide your eBay shop's **Privacy Policy URL**.
<img src={require("/img/ebay-redirect-urls.png").default} height="" width="800" />

### In ShopCtrl:

1. Log in to your ShopCtrl account.
2. Go to **eBay shop settings > eBay Synchronization > eBay User Consent OAuth Settings**.
3. Locate your:
   - **Auth Accepted URL**.
   - **Auth Declined URL**.
<img src={require("/img/ebay-sync-oauth-settings.png").default} height="" width="800" />

### Final Configuration in eBay:

1. Return to your [eBay Developer Account](https://developer.ebay.com/my/auth?env=production&index=0).
2. Enter the **Auth Accepted URL** from ShopCtrl.
3. Enter the **Auth Declined URL** from ShopCtrl.
4. Save your Redirect URL configuration.


## Step 3: Complete Authorization Process in ShopCtrl

Follow this sequence to establish the connection between ShopCtrl and your eBay store:

### Configuration in ShopCtrl:

1. **Access Settings**:
   - Log in to your ShopCtrl account.
   - Navigate to **eBay Shop Settings → Shop synchronization → eBay Synchronization → Connection Settings**.
<img src={require("/img/ebay-sync-connection-settings.png").default} height="" width="800" />
2. **Environment Settings**:
   - Ensure **Use Sandbox Environment** is disabled (unchecked).
   - Confirm production fields are active (green).
3. **Enter API Credentials**:
   - Input your **Client ID** from eBay production keys.
   - Enter your **Client Secret** from the same key set.
   - *Source*: [eBay API Keys Dashboard](https://developer.ebay.com/my/keys).
4. **Configure OAuth**:
   - Add your **RuName** (from eBay Redirect URL setup) in the **OAuth RuName** field.
   - *Verify*: [eBay Redirect URL Settings](https://developer.ebay.com/my/auth/?env=production&index=0).
5. Click **Save** to store your credentials


### Authorization Workflow:

6. **Initiate Authorization**: 
   - within ShopCtrl shop Connection settings click **Authorize (on eBay)** button.
   - You'll be redirected to eBay's secure login page.
<img src={require("/img/ebay-sync-connection-settings.png").default} height="" width="800" />

7. **eBay Authentication**:
   - Enter your eBay seller account credentials.
   - Carefully review the permission request screen.
<img src={require("/img/ebay-grant-access.png").default} height="" width="800" />

8. **Grant Permissions** by clicking **Agree and Continue**:
   - Click Back to shop settings to go back to ShopCtrl eBay shop settings.
   
### Post-Authorization Steps:

9. **Verify Connection**:
   - Observe the **OAuth Tokens** section updates:
     - Current timestamp
     - **Status: Serviceable**

10. **Test Integration**:
    - Click **Check Connection** to validate the setup.
    - Successful test shows "Connected successfully" message.


