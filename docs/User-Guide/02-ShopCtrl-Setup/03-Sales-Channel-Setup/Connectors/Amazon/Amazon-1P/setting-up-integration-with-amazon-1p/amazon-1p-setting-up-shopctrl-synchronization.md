---
sidebar_position: 1
slug: /docs/amazon-1p-setting-up-shopctrl-synchronization
---


# Setting up Shop Synchronization in ShopCtrl

Once you have enabled integration in your Amazon account, you can set up synchronization in ShopCtrl. 

## Before start: Configuring shop in ShopCtrl

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
5. Change the **Name detail** setting to **One single field for contact person name**.
6. Click **Save** or **Save and Close** to apply changes to the shop.

## Setting up Amazon shop synchronization in ShopCtrl



Amazon 1P appmodule has quite a number of features. We will break the setup process into several steps:

1. Establish connection to Amazon 1P
2. Prepare for importing orders: configure mapping and Fulfillment centers
3. [Setup Bulk Buy (Optional)](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-1P/setting-up-bulk-buy-offers.md). 
4. Configure orders acknowledgement
5. Setup initial order import and start synching orders
6. ASN submission configuration

<details>
  <summary> Show full shop settings</summary>

<img src={require("/img/shop-amazon-1p-configuration.png").default} height="" width="800" />

</details>

### **Step 1.** Establish connection to Amazon 1P

Connect your ShopCtrl shop to Amazon by providing your vendor credentials and API keys.
    
1. Log in to ShopCtrl as a user with the **Shop Owner Admin** role.
2. Navigate to **Configuration > Shops** in the menu to access the list of created shops.
3. Choose a specific shop for which you want to configure Amazon synchronization and click **Edit** to access shop settings.
4. Within the topic menu, select **Shop synchronization > Amazon 1P Synchronization**.
        <img src={require("/img/shop-amazon-1p-configuration-sync-integration.png").default} height="" width="800" />
5. Specify a Region and a Marketplace from which you wish to import orders via this shop.
6. Leave the Authorization kind - **Self**.
6. On the **Self Authorization** section enter the **Vendor code**.
7. Provide the **LWA Client Id** and **LWA Client Secret** [generated for the ShopCtrl private app on Amazon](amazon-1p-profile-configuration.md).
8. Enter the **Refresh Token**.
9. Click **Save** or **Save and Close** to apply changes to the shop.

You have now established the connection to Amazon, but synchronization is not yet active and no data has been imported.

### **Step 2.** Configure statuses mapping and Fulfillment centers

According to the [Amazon SP-API documentation](https://developer-docs.amazon.com/sp-api/reference/getpurchaseorders), Amazon 1P provides two key concepts for tracking order progression: **`purchaseOrderState`** and  **`PurchaseOrdersStatus`**.
ShopCtrl consolidates both the Amazon `purchaseOrderState` and `PurchaseOrdersStatus` information, translating them into the appropriate ShopCtrl **Main Order Status**. This ensures that key state changes from Amazon - such as an order being acknowledged, rejected, or cancelled - are accurately represented in your ShopCtrl workflow.

:::warning[Before you begin]

Please ensure you have created two main order statuses in ShopCtrl: "**Acknowledged**" (Base status Active) and "**Rejected**"(Base status Cancel), as they will be required for the status mapping configuration. 

:::


 **Main Order Status mapping** Configure the mapping of order statuses by manually selecting the incoming Amazon purchase order status and aligning it with an appropriate ShopCtrl status.
 For example: 
- Map Amazon's `ACKNOWLEDGED` state to your ShopCtrl **Acknowledged** status
- Map Amazon's `CANCELLED` state or `REJECTED` status to your ShopCtrl **Rejected** status

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
* **Add a New Fulfillment Center:** If Amazon notifies you of a new fulfillment center code, please **add** it to this list to ensure seamless order import.
* **Mapp Internal Codes (ShipToPartyRef):** This column allows you to map your internal codes to each fulfillment center. During order import, ShopCtrl will add this code as the ShipToPartyRef parameter to the order. This provides a unique identifier for integration when pushing orders further into your internal system.
* **Edit Information:** Edit the address or ShipToPartyRef fields for any entry.
* **Save Changes:** Save the shop settings to apply any changes immediately.
* **Clean Up:** After mapping your codes, you can click **‘Remove rows with empty ShipToPartyRef’** to clean up the list and remove any default centers you don't use.


:::warning[**Please note:**]

Changes to addresses or codes will only apply to orders imported **after** the settings are saved. Previously imported orders will not be updated.

:::

<img src={require("/img/shop-amazon-1p-configuration-amazon-fulfillment-centers.png").default} height="" width="800" alt="Configuration pane for Amazon fulfillment centers, showing the Add Default FCs and Remove Empty buttons" />


### **Step 3.** Configure Bulk Buy Offers (Optional)

If you participate in Amazon's Bulk Buy Offers program, you can manage the approval workflow within ShopCtrl.
For detailed setup instructions, see the dedicated guide:
[Setting up Bulk Buy Offers](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-1P/setting-up-bulk-buy-offers.md).

### **Step 4.** Configure orders acknowledgement

Set the rules for how and when orders are confirmed back to Amazon.

1. Navigate to **Shop configuration > Amazon 1P Synchronization** and go to the **Order Sync Settings** section.
    <img src={require("/img/shop-amazon-1p-configuration-order-sync-settings.png").default} height="" width="800" />
2. **Configure Credit Reasons:** At the end of the section, select the reasons for crediting that will be used when acknowledging orders:
   - **Credit Row Reject Reason**: We suggest creating a 'Rejected' credit reason.
   - **Credit Row Cancel Reason**: We suggest creating a 'Cancelled' credit reason.
3. **Select Acknowledgeable Statuses:** In **Acknowledgeable Main Order Statuses**, choose which main order statuses allow acknowledgement. Orders will only be acknowledged to Amazon when they are in one of these statuses. By default, we recommend selecting main order statuses with an Active base status.
4. **Configure Bulk Buy Auto-Acknowledgement:** Enable the **Auto acknowledge new bulk orders** checkbox if you want orders matching registered Bulk Buy offers in ShopCtrl to be acknowledged immediately upon import.
5. **Set Up Bulk Order Automation:** Configure these settings to establish an automated workflow for Bulk Orders:
   - **Allocate Bulk Buy Orders on acknowledgement**: Reserve stock for Bulk Orders immediately after acknowledgement to Amazon.
   - **Create shipment for Bulk Orders on acknowledgement**: Automatically create shipments for acknowledged bulk orders.
6. **Enable Orders Acknowledgement:** Finally, enable the Orders Acknowledgement feature by checking **Acknowledge orders** in the **Synchronization Customization** pane at the top of the Amazon synchronization tab.
7. Click **Save** or **Save and Close** to apply your configuration changes to the shop.

### **Step 5.** Setup initial order import and start synching orders

Begin the process of bringing existing orders from Amazon into ShopCtrl and activating ongoing synchronization.

1. Navigate to **Shop configuration > Amazon 1P Synchronization** and go to the **Order Sync Settings** section.
    <img src={require("/img/shop-amazon-1p-configuration-order-sync-settings.png").default} height="" width="800" />
1. **Set Import Start Date:** Use the **Ignore Orders Before Timestamp** setting to select the date from which you want to start importing historical orders. This prevents older, irrelevant orders from cluttering your system.
1. **Manage Order Updates:** Enable **Skip updated orders on import** to filter out historical orders that Amazon has marked as changed (e.g., due to cancellations of undelivered or damaged items). This is recommended because ShopCtrl currently does not support continuous import for order updates
1. **Process Historical Orders:** Handle orders already acknowledged in Amazon by choosing to finalize them within ShopCtrl:
    - **Allocate historical Acknowledged Orders:** Check this to reserve stock for these past orders.
    - **Create Shipment for Historical Acknowledged orders:** Check this to generate shipments, helping to synchronize fulfillment status.
1. **Activate Order Import:** In the **Synchronization Customization** pane at the top of the page, enable the features to:
    - Check **Orders integration** feature.
    - Check **Import new orders** for ongoing synchronization of new orders.
    - Check **Import missing orders** to attempt to import any orders that may have been missed previously.
7. Click **Save** or **Save and Close** to apply your configuration changes to the shop.

**New orders will not start importing until you enable the entire synchronization.** Once you check the main synchronization checkbox at the top of the Amazon 1P Synchronization page, the import will begin based on your settings. Depending on your configuration, historical orders will also be processed at this time.

### **Step 6.** Configure ASN (Advanced Shipment Notice) Submission

Set up the automatic creation and sending of Advanced Shipment Notices to Amazon.

1. Navigate to **Shop configuration > Amazon 1P Synchronization** and go to the **ASN Sync Settings** section.
    <img src={require("/img/shop-amazon-1p-configuration-asn-sync.png").default} height="" width="800" />
2. **Configure ASN Number Source:** Enable **Use BillOfLading ID as ASN Number** if you prefer to use the Bill of Lading identifier instead of the default GroupShipment code as your ASN number when submitting to Amazon.
3. **Set Up Label Templates:** Configure the templates that will be used during the shipment process:
   - **ASN Label Template**: For labels printed during the group-shipment pack process
   - **Pallet Label Template**: For pallet identification labels
4. **Configure Pallet Settings:** Define how pallets are handled in your ASN:
   - **Print ASN label per pallet**: Enable this to generate separate ASN labels for each pallet
   - **Pallet Own Weight**: Specify the default weight of an empty pallet in kilograms
   - **Configure Carton Weight:** Set the **Carton Own Weight** in kilograms to specify the default weight of empty cartons/boxes.
5. **Activate Shipments Export:** In the **Synchronization Customization** pane at the top of the page, enable **Export Shipments** to begin sending ASN data to Amazon.
6. Click **Save** or **Save and Close** to apply your configuration changes.


## Completing the Setup

Once all six configuration steps are finished, **enable synchronization** by checking the main synchronization checkbox at the top of the Amazon 1P Synchronization settings page. 

Your integration is now active! Amazon purchase orders will begin syncing in the background, and depending on your configuration, ASNs will be automatically submitted as you process shipments.

This integration streamlines your order management process by ensuring your ShopCtrl environment stays synchronized with your Amazon store, enhancing efficiency and reducing manual effort across platforms.