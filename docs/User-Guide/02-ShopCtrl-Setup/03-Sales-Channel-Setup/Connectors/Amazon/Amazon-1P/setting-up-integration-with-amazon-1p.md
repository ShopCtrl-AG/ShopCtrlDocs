---
sidebar_position: 2
slug: /docs/setting-up-integration-with-amazon-1p
---

# Setting up Integration with Amazon 1P

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

Amazon integration connector lets you import purchase orders from your Amazon seller account using API integration directly to ShopCtrl.

## Amazon 1P Synchronization Module Features

With the Amazon 1P module you can:

- Import Amazon Bulk Purchase Orders
- Go through all stages of internal approval to respond to Amazon Bulk Buy Offers requests
- Track which Purchase Orders are based on previously approved Bulk Buy Offers

## Setting up integration with Amazon

### Amazon Profile Configuration

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

### Setting up shop synchronization in ShopCtrl

Once you have enabled integration in your Amazon account, you can set up synchronization in ShopCtrl. It will consist of two steps.

#### 1. Configuring shop in ShopCtrl

:::warning[Before start]

Before enabling synchronization with Amazon, please set up the corresponding shop currency, VAT tariffs, and payment types for your ShopCtrl shop.

:::

To continue setting up the shop in ShopCtrl, we need to determine how the customer contact information is stored. Amazon sends customer names as well as customer addresses as single fields to ShopCtrl. Adjust the designated shop settings to process this data correctly.

![shop-settings-contact-info](/img/shop-settings-contacts-contact-info.png)

To change the way customer contact information will be stored in ShopCtrl:

1. Log in to your ShopCtrl account as a user with the **Shop Owner Admin** role.
2. Open the **shop settings** page for which the Amazon connection was established.
3. Within the topic menu, expand the **Contacts** nod and click **Contact Info**.
4. Change the **Address detail** setting to **One field for street name, house number and extension**.
5. Change the **Name detail**setting to **One single field for contact person name**.
6. Click **Save** or **Save and Close** to apply changes to the shop.

#### 2. Setting up Amazon shop synchronization in ShopCtrl

![shop-amazon-1p-configuration.png](/img/shop-amazon-1p-configuration.png)

1. Log in to ShopCtrl as a user with the **Shop Owner Admin** role.
2. Navigate to **Configuration > Shops** in the menu to access the list of created shops.
3. Choose a specific shop for which you want to configure Amazon synchronization and click **Edit** to access shop settings.
4. Within the topic menu, select **Shop synchronization > Amazon 1P Synchronization**.
5. Specify a Region and a Marketplace from which you wish to import orders via this shop.
6. On the **Self Authorization** pane enter the **Vendor code**.
7. Provide the **LWA Client Id** and **LWA Client Secret** generated for the ShopCtrl private app on Amazon.
8. Enter the **Refresh Token**.
9. In the Synchronization Customization pane, check the features you would like to use. At the moment, the following features are available:
   - **Orders Integration** - a general setting that enables order import
     - **Import new orders** - imports new orders
     - **Import missing orders** - enables additional check for missing orders
10. **BulkBuy Settings** refer to a distinct feature within ShopCtrl, specifically designed for managing Bulk Buy Offers. You can configure these settings at your convenience as part of the comprehensive [setup process for Bulk Buy Offers](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-1P/setting-up-bulk-buy-offers.md).
11. **Main Order Status mapping** Configure the mapping of order statuses by manually selecting the incoming Amazon purchase order status and aligning it with an appropriate ShopCtrl status.
12. **Payment Order Status mapping** Since Amazon purchase orders have a singular main status, and ShopCtrl introduces an additional layer of payment status, you can fine-tune the order status mapping to align the Payment status with the main status of the Amazon purchase order. This customization allows you to adapt the order status mapping to your specific workflow preferences.
13. Once all of the steps are finished, you can **Enable** synchronization by marking the checkbox at the top of the settings page. Your orders will be synced in the background.
14. Click **Save** or **Save and Close** to apply changes to the shop.

Amazon synchronization streamlines the order management process, ensuring that your ShopCtrl environment stays updated with the latest orders from your Amazon store. It enhances efficiency and reduces the manual effort required to manage orders across different platforms.
