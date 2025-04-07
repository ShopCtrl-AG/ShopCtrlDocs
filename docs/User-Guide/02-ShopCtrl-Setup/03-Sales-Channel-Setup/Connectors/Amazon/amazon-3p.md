---
sidebar_position: 2
slug: /docs/amazon-3p
---

# Amazon 3P

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

Amazon integration connector lets you import orders and products from your Amazon seller account using API integration directly to ShopCtrl.

## Amazon Synchronization Module Features

With the Amazon module you can:

- [Import new orders](/User-Guide/04-Order-Management/02-Orders/Create-Orders/importing-orders.md#importing-orders-from-amazon)
- [Update tracking numbers for the shipped orders](/User-Guide/07-Fulfillment/tracking-update.md#exporting-shipments-tracking-info-to-amazon)
- [Export cancelled orders](/User-Guide/04-Order-Management/02-Orders/edit-order.md#update-cancelled-order-status-to-amazon)
- [Create returns](/User-Guide/07-Fulfillment/Returns/manage-returns.md#exporting-returns-to-amazon)
- [Update Amazon inventory](/User-Guide/08-Product-Management/Product-Export/exporting-inventory.md#updating-amazon-inventory)
- [Export changed product prices](/User-Guide/08-Product-Management/Product-Export/exporting-product-details-to-amazon.md#export-changed-product-prices)
- [Change product publication status](/User-Guide/08-Product-Management/Product-Export/exporting-product-details-to-amazon.md#change-product-publication-status)

## Setting up integration with Amazon

### Amazon Profile Configuration

1. Login to your Seller Central Amazon account.
2. From the top right navigation menu, select **Partner Network > Develop Apps**.
   ![Step01](/img/Step01.png)
3. Click **Your Developer Profile**.
   ![Step02](/img/Step02.png)
4. On a new page fill in your company **Contact Information**:
   ![Step03](/img/Step03.png)
5. In the **Data Access** select this option to describe your organization:
   "My organisation participates in Amazon Services Europe, and I want to integrate to manage my own business only."
6. Select the areas of the Amazon store to which you would like to grant API access.
   _ Brand Analytics
   _ Product Listing
   _ Pricing
   _ Buyer Communication
   _ Inventory and Order Tracking
   _ Direct to Consumer Delivery
   ![Step04](/img/Step04-01.png)
7. Describe the **Use Case** for which you would like to retrieve data from Amazon.
8. Specify the Security controls used in your organization.
   ![Step05](/img/Step05.png)
9. Read and confirm the Amazon Agreement and Policies.
10. Click **Register** to apply for API access.

After creating a profile, Amazon will take some time to review and approve it.

### Create an application

Once Amazon approves your developer account, we could proceed with creating the application to generate credentials to your store and give ShopCtrl access to your open API

1. Open the [Developer console](https://sellercentral.amazon.co.uk/sellingpartner/developerconsole) page.
   ![Step08](/img/Step08-01.png)
2. Click **Add new app client**.
3. The new application details will be opened on a new page. Fill in the **App name**.
   ![Step07](/img/Step07.png)
4. Select an **API Type** - **SP API**.
5. Fill in the **IAM ARN** provided by ShopCtrl: `arn:aws:iam::883858241360:role/SellingPartnerRole`.
6. Select the **Roles** you would like to grant API access to.
7. Select whether you would like to delegate access to PII to another developer's application: No, I will not delegate access to PII to another developer's application.
8. Leave the OAuth fields empty.
9. Click **Save**.

The new app will be displayed on your Developer Central account:
![Step08](/img/Step08.png)

### Getting credentials for your Amazon synchronization with ShopCtrl

To establish the API connection with your Amazon account, we need to provide the following information:

- Seller ID
- LWA Client ID
- LWA Client Secret
- Refresh token

#### Seller ID

1. Login to your Seller Partner account.
2. Click on the gear icon in the top action panel. And select **Account Info**.
   ![Step12](/img/Step12.png)
3. You will be redirected to the Seller Account Information page. within Business Information pane, click on **Your Merchant Token** link.
   ![Step13](/img/Step13.png)
4. You will be redirected to the Merchant Token page. Which is your Seller ID.
   ![Step14-01](/img/Step14-01.png)

#### LWA Credentials

To retrieve the LWA Client ID and LWA Client Secret:

1. Go to your [Developer console](https://sellercentral.amazon.co.uk/sellingpartner/developerconsole) page.
   ![Step08](/img/Step08.png)

2. Click **View** in the LWA credentials column. Both **Client identifier** and **Client secret** will be displayed.
   ![Step09](/img/Step09.png)

#### Refresh Token

1. Open the [Developer console](https://sellercentral.amazon.co.uk/sellingpartner/developerconsole) page.
2. In the Action column navigate and click on the arrow. In the drop-down menu select **Authorise**.
   ![Step10](/img/Step10.png)
3. You will be redirected to the **Authorise application** page.
   ![Step11](/img/Step11.png)
4. Select **Marketplace(s)** that you would like to authorise your app at.
5. Click **Authorise app** button.
6. This will generate the **Refresh Token**.

### Setting up shop synchronization in ShopCtrl

Once you have enabled integration in your Amazon account, you can set up synchronization in ShopCtrl. It will consist of two steps.

#### 1. Configuring shop in ShopCtrl

:::warning[Before start]

Before enabling synchronization with Amazon, please set up the corresponding shop currency, VAT tariffs, and payment types for your ShopCtrl shop.

:::

To continue setting up the shop in ShopCtrl, we need to determine how the customer contact information is stored. Amazon sends customer names as well as customer addresses as single fields to ShopCtrl. We need to change the designated shop settings to process this data correctly.

![shop-settings-contact-info](/img/shop-settings-contacts-contact-info.png)

To change the way customer contact information will be stored in ShopCtrl:

1. Log in to your ShopCtrl account as a user with the **Shop Owner Admin** role.
2. Open the **shop settings** page for which the Amazon connection was established.
3. Within the topic menu, expand the **Contacts** nod and click **Contact Info**.
4. Change the **Address detail** setting to **One field for street name, house number and extension**.
5. Change the **Name detail**setting to **One single field for contact person name**.
6. Click **Save** or **Save and Close** to apply changes to the shop.

#### 2. Setting up Amazon shop synchronization in ShopCtrl

1. Log in to your ShopCtrl account as a user with the **Shop Owner Admin** role.
2. In the navigation menu, select **Configuration > Shops** to open the list of shops created.
3. Select a shop for which you would like to set up Amazon synchronization and click **Edit** to open shop settings.
4. Within the topic menu, select **Shop synchronization > Amazon Shop Synchronization**.
   ![amazon-synchronization-shop-settings(1)](/img/amazon-synchronization-shop-settings.png)

5. Select a **Region** and a **Marketplace** which orders you would like to import through this shop.
   :::(Warning) (Please note)
   You can set up synchronization with only one region, but it is possible to select several marketplaces per region. This means that orders from all marketplaces will be imported in one shop in ShopCtrl.
   :::
6. Select **Self** Authorization Kind.
7. Provide the **Seller ID** (Your Amazon Merchant Token).
8. Provide the **LWA Client Id** and **LWA Client Secret** generated for the ShopCtrl private app in Amazon.
9. Provide the **Refresh Token**.
10. In the Synchronization Customization pane, check the features you would like to use. At the moment, the following features are available:
    - **Orders Integration** - a general setting that enables order import
      - **PII Access** - imports your customer's personal identifiable information for order processing
      - **Import new orders** - imports new orders
      - **Import missing orders** - check this feature to exclude all possible synchronization mistakes and import orders that went missing for any reason
      - **Export cancelled orders** - updates orders cancelled in ShopCtrl to Amazon
      - **Export shipments** - exports tracking codes to Amazon
      - **Export returns** - exports returns created in ShopCtrl to Amazon
    - **Products Integration**
      - **Export changed product stocks** - enables inventory export to Amazon
      - **Export changed product prices** - updates corresponding listing prices
      - **Sync product publish state** - closes or opens listings based on product publication status in ShopCtrl
11. In the **Additional Settings** pane, select the main order status that will be set while importing for the orders fulfilled by Amazon. To guarantee that the orders won't be fulfilled twice.
12. (Optional) In the **Fulfillment Priority** tab you can change the default **fulfilment priority** which is set for regular, premium and prime orders after import.
13. (Optional) The **order statuses mapping** is performed automatically, but you could override it by setting up statuses mapping manually:
    ![amazon-order-status-mapping](/img/amazon-order-status-mapping.png)
    Here is the Amazon order statuses flow for your reference:
    ![amazon-statuses](/img/amazon-statuses.png)

14. Map each of the **Shipment Categories** configured in your Amazon seller account to the ShopCtrl **Carrier Account** and **Amazon Carrier Name** and **Delivery Service**. You could choose a name from the carriers and delivery services list or enter it manually.
    :::info[Please note]

    Amazon verifies submitted tracking codes along with the carrier name and shipment method used to deliver the order.
    In order to get the carrier processed correctly, ShopCtrl carrier accounts need to be mapped to corresponding carrier names and delivery services recognizable by Amazon.
    The incorrect mapping might affect the Amazon VTR calculation. See more [Valid Tracking Rate](https://sellercentral.amazon.com/gp/help/external/G201817070)

    :::
    ![amazon-carrier-account-mapping](/img/amazon-carrier-account-mapping.png)

15. Once all of the steps are finished, you can **Enable** synchronization by marking the checkbox at the top of the settings page. Your orders will be synced in the background.
16. Click **Save** or **Save and Close** to apply changes to the shop.
