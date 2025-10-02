---
sidebar_position: 1
slug: /docs/amazon-1p-setting-up-shopctrl-synchronization
---


# Setting up Shop Synchronization in ShopCtrl

Once you have enabled integration in your Amazon account, you can set up synchronization in ShopCtrl. It will consist of two steps.

## 1. Configuring shop in ShopCtrl

:::warning[Before start]

Before enabling synchronization with Amazon, please set up the corresponding shop currency, VAT tariffs, and payment types for your ShopCtrl shop.

:::

To continue setting up the shop in ShopCtrl, we need to determine how the customer contact information is stored. Amazon sends customer names as well as customer addresses as single fields to ShopCtrl. Adjust the designated shop settings to process this data correctly.

<img src={require("/img/shop-settings-contacts-contact-info.png").default} height="" width="800" />


To change the way customer contact information will be stored in ShopCtrl:

1. Log in to your ShopCtrl account as a user with the **Shop Owner Admin** role.
2. Open the **shop settings** page for which the Amazon connection was established.
3. Within the topic menu, expand the **Contacts** nod and click **Contact Info**.
4. Change the **Address detail** setting to **One field for street name, house number and extension**.
5. Change the **Name detail**setting to **One single field for contact person name**.
6. Click **Save** or **Save and Close** to apply changes to the shop.

## 2. Setting up Amazon shop synchronization in ShopCtrl



Amazon 1P appmodule has quite a number of features. We will break the setup process into several steps:

1. Establish connection to Amazon 1P
2. Prepare for importing orders: configure mapping and Fulfillment centers
3. Setup Bulk Buy (Optional) -  refer to a distinct feature within ShopCtrl, specifically designed for managing Bulk Buy Offers. You can configure these settings at your convenience as part of the comprehensive [setup process for Bulk Buy Offers](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-1P/setting-up-bulk-buy-offers.md).
4. Configure orders acknowledgement
5. Setup initial order import and start synching orders
6. ASN submission configuration

<details>
  <summary> Show full shop settings</summary>

<img src={require("/img/shop-amazon-1p-configuration.png").default} height="" width="800" />

</details>

### Step 1. Establish connection to Amazon 1P


    
1. Log in to ShopCtrl as a user with the **Shop Owner Admin** role.
2. Navigate to **Configuration > Shops** in the menu to access the list of created shops.
3. Choose a specific shop for which you want to configure Amazon synchronization and click **Edit** to access shop settings.
4. Within the topic menu, select **Shop synchronization > Amazon 1P Synchronization**.
        <img src={require("/img/shop-amazon-1p-configuration-sync-integration.png").default} height="" width="800" />
5. Specify a Region and a Marketplace from which you wish to import orders via this shop.
6. On the **Self Authorization** pane enter the **Vendor code**.
7. Provide the **LWA Client Id** and **LWA Client Secret** generated for the ShopCtrl private app on Amazon.
8. Enter the **Refresh Token**.
9. Click **Save** or **Save and Close** to apply changes to the shop.


### Step 2. Configure statuses mapping and Fulfillment centers

Amazon purchase orders have a singular main status. ShopCtrl uses a more detailed model with separate **Main** and **Payment** statuses. This mapping allows you to align Amazon's status updates with your preferred financial and operational workflow in ShopCtrl.

This step allows you to define how Amazon order statuses are translated into your ShopCtrl workflow.

**Before you begin,** please ensure the main order statuses you plan to use (e.g., **Acknowledged**, **Rejected**) are already created in your ShopCtrl settings.

When importing order from Amazon, ShopCtrl automatically mapps order statuses to the ones existing in ShopCtrl. ShopCtrl statuses are customizable. Please pre-create main statuses Acknowledged or Rejected before configuring mapping. 
Since Amazon purchase orders have a singular main status, and ShopCtrl introduces an additional layer of payment status, you can fine-tune the order status mapping to align the Payment status with the main status of the Amazon purchase order. This customization allows you to adapt the order status mapping to your specific workflow preferences.

 **Main Order Status mapping** Configure the mapping of order statuses by manually selecting the incoming Amazon purchase order status and aligning it with an appropriate ShopCtrl status.
 **Payment Order Status mapping** Amazon doesn't return payment status/payment when retrieving orders via API integration. Though for finilizing orders inside ShopCtrl you might need to configure the mapping rules. Assuming that closed order is a paid order, you can map it to ShopCtrl Paid status. 
Cancelled or Rejected orders can receive Fully credited status. 

        <img src={require("/img/shop-amazon-1p-configuration-statuses-mapping.png").default} height="" width="800" />

#### **Fulfillment centers**

When retrieving orders, Amazon provides only a code for the fulfillment center, not its full address. ShopCtrl handles this by using a built-in list to match these codes to physical addresses.

Upon importing a new order, ShopCtrl automatically matches the code provided by Amazon to an address in this list. 


:::info[]

If you have not configured any fulfillment centers here, ShopCtrl will still use its built-in predefined list to function correctly.

:::

You can **add new** fulfillment centers, override the addresses of existing ones or add mapping to your internal code directly from this pane.
* **Preload Default Centers:** To easily add your internal codes to the most common centers, use the **‘Add Default FCs’** button. This will populate the list with Amazon's standard fulfillment centers.
* **Add a New Fulfillment Center:** If Amazon notifies you of a new fulfillment center code, please add it to this list to ensure seamless order import.
* **Mapp Internal Codes (ShipToPartyRef):** This column allows you to map your internal codes to each fulfillment center. During order import, ShopCtrl will add this code as the ShipToPartyRef parameter to the order. This provides a unique identifier for integration when pushing orders further into your ERP or internal system.
* **Edit Information:** Edit the address or ShipToPartyRef fields for any entry.
* **Save Changes:** Save the shop settings to apply any changes immediately.
* **Clean Up:** After mapping your codes, you can click **‘Remove rows with empty ShipToPartyRef’** to clean up the list and remove any default centers you don't use.


:::warning[**Please note:**]

Changes to addresses or codes will only apply to orders imported **after** the settings are saved. Previously imported orders will not be updated.

:::

<img src={require("/img/shop-amazon-1p-configuration-amazon-fulfillment-centers.png").default} height="" width="800" alt="Configuration pane for Amazon fulfillment centers, showing the Add Default FCs and Remove Empty buttons" />


### Step 3. Setup Bulk Buy Offers

refer to a distinct feature within ShopCtrl, specifically designed for managing Bulk Buy Offers. If you participate in this Amazon program, you can configure and decide on the flows of handling Bulk Buy offers. You can configure these settings at your convenience as part of the comprehensive [setup process for Bulk Buy Offers](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-1P/setting-up-bulk-buy-offers.md).

### Step 4. Configure orders acknowledgement

    <img src={require("/img/shop-amazon-1p-configuration-order-sync-settings.png").default} height="" width="800" />



9. In the Synchronization Customization pane, check the features you would like to use. At the moment, the following features are available:
   - **Orders Integration** - a general setting that enables order import
     - **Import new orders** - imports new orders
     - **Import missing orders** - enables additional check for missing orders

### Step 5. Setup initial order import and start synching orders



### Step 6. ASN submission configuration

    <img src={require("/img/shop-amazon-1p-configuration-asn-sync.png").default} height="" width="800" />

Once all of the steps are finished, you can **Enable** synchronization by marking the checkbox at the top of the settings page. Your orders will be synced in the background.

Amazon synchronization streamlines the order management process, ensuring that your ShopCtrl environment stays updated with the latest orders from your Amazon store. It enhances efficiency and reduces the manual effort required to manage orders across different platforms.
