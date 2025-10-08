---
sidebar_position: 1
slug: /docs/amazon-1p-profile-configuration
---

# Amazon 1P Profile Configuration

To initiate Amazon 1P integration, create the application and generate credentials for your store, granting ShopCtrl access to your open API.

1. Login to your [Vendor Central Amazon](https://vendorcentral.amazon.com/) account.
2. From the top right navigation menu, select **Integration > API Integration**.
   ![Amazon-1p-create-api-integration-001](/img/Amazon-1p-create-api-integration-001.png)
3. Click **Add new app client**.
   ![Amazon-1p-create-api-integration-002](/img/Amazon-1p-create-api-integration-002.png)
4. On a new page fill in the **App name**:
   ![Amazon-1p-create-api-integration-003](/img/Amazon-1p-create-api-integration-003.png)
5. Choose **API type - SP API**.
6. Check the **Amazon fulfillment** role you would like to grant API access to.
7. Confirm that you **will not delegate access to PII to another developer's application**.
8. Click **Save and exit** to create application

The new app will be displayed on your Developer Central account:
![Amazon-1p-create-api-integration-004](/img/Amazon-1p-create-api-integration-004.png)

### Getting credentials for your Amazon synchronization with ShopCtrl

To establish the API connection with your Amazon account, collect the following information:

- Vendor code
- LWA Client ID
- LWA Client Secret
- Refresh token

#### Vendor code

1. Login to your [Vendor Central Amazon](https://vendorcentral.amazon.com/) account.
2. Click on the Settings > Contacts in the top action panel.
   ![Amazon-1p-create-api-integration-005](/img/Amazon-1p-create-api-integration-005.png)
3. Your **Vendor code** will be displayed in the combobox.

#### LWA Credentials

To retrieve the LWA Client ID and LWA Client Secret:

1. Login to your [Vendor Central Amazon](https://vendorcentral.amazon.com/) account.
2. From the top right navigation menu, select **Integration > API Integration**.
3. Locate the application you created for the integration and click **View** in the LWA credentials column.
   ![Amazon-1p-create-api-integration-006](/img/Amazon-1p-create-api-integration-006.png)
4. Both **Client identifier** and **Client secret** will be displayed.
   ![Amazon-1p-create-api-integration-007](/img/Amazon-1p-create-api-integration-007.png)

#### Refresh Token

1. Login to your [Vendor Central Amazon](https://vendorcentral.amazon.com/) account.
2. From the top right navigation menu, select **Integration > API Integration**.
3. In the Action column navigate to Edit App button and click on the arrow. In the drop-down menu select **Authorise**.
   ![Amazon-1p-create-api-integration-008](/img/Amazon-1p-create-api-integration-008.png)
4. You will be redirected to the **Authorise application** page.
   ![Amazon-1p-create-api-integration-009](/img/Amazon-1p-create-api-integration-009.png)
5. Click the **Authorise app** button. This will generate the **Refresh Token**.

