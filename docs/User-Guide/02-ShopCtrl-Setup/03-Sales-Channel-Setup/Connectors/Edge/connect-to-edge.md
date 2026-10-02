---
sidebar_position: 2
slug: /docs/virtualstock-connect
description: "Step 1 of the Virtualstock setup: enter the Client ID and Client Secret, verify the API URLs and validate the connection."
---

# Step 1. Connect to Virtualstock

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

The connection process is the same for both sandbox and production - only the "Use sandbox environment" checkbox determines the target environment.

1. Log in to your ShopCtrl account as a user with the Shop Owner Admin role.
2. Navigate to **Configuration > Shops**.
3. Select the desired shop and click **Edit** to open the shop settings.
4. From the topic menu, go to **Shop Synchronization > Edge Synchronization**.
5. Scroll down the setings to the **Connection Settings** section. Make sure the 'Use sandbox environment' checkbox is not activated.
6. In the **Connection Settings**:
   - Enter your:
     - **Client ID**
     - **Client Secret**
   - Verify default URLs:
     - API URL: `https://api.virtualstock.com`
     - OAuth Token URL: `https://api.virtualstock.com/restapi/v4/token`
    <img src={require("/img/edge-connection-settings.png").default} height="" width="800" />
7. Click **Save** or **Save and Close** to apply changes to the shop.
8. Click **Connect** to validate credentials.

Next: [Step 2. Configure retailer product field names](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/retailer-product-field-names.md)
