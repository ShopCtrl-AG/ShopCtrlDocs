---
sidebar_position: 9
slug: /docs/edge
---

# Virtual Stock (Edge)

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

This guide explains how to configure the ShopCtrl integration app module with VirtualStock (now part of Edge by Ascential). VirtualStock is a modular SaaS platform that facilitates collaboration between retailers and their suppliers. The integration connects ShopCtrl to VirtualStock's Supplier API, enabling seamless data exchange for:


- Importing new orders
- Updating tracking numbers for shipped orders
- Providing shipping dates for backordered items
- Synchronizing inventory levels

## Setting up the integration with Virtual Stock (Edge)

VirtualStock manages API access - you may need to contact their support team to obtain credentials (Client ID and Client secret).

You'll need:
- Sandbox credentials (for testing)
- Production credentials (after UAT completion)

## Configuring Shop Synchronization in ShopCtrl

The setup process consists of three steps.
Before proceeding, create a new Virtual Stock shop: [Create Shop](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/create-shop.md)

<details>
  <summary> Virtual Stock (Edge) shop configuration</summary>

<img src={require("/img/edge-shop-sync-settings.png").default} height="" width="800" />

</details>

### Step 1. Connect to Virtual Stock (Edge)

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


### Step 2: Configure Order Import and Export


#### **1. Enabling Order Synchronization**
To begin importing orders from Virtual Stock (Edge):

1. Log in to ShopCtrl with **Shop Owner Admin** privileges.
2. Navigate to **Configuration > Shops**.
3. Select your Virtual Stock shop and click **Edit**.
4. Go to **Shop Synchronization > Edge Synchronization**.
5. In the **Functional Settings** section:
   - Enable the **Order synchronization** checkbox.
   <img src={require("/img/edge-functional-settings-order-sync.png").default} height="" width="400" />
6. Toggle **Enabled** to activate the app module.
7. Lower in the **Orders** section, configure order import preferences:
   - To **exclude** historical closed orders: Set "Import closed orders older than" to **0 days**.
   - **[X] days** to import recent closed orders (recommended for initial setup).
   <img src={require("/img/edge-functional-settings-orders.png").default} height="" width="800" />
8. Click **Save** or **Save and Close**.

#### **2. Order Processing Workflow**

The **Order integration** checkbox enables three key features:
1. Order acknowledgement
2. Backorder management
3. Track & trace updates

**How it works:**

When orders synchronize, ShopCtrl automatically allocates stock. 
- For **fully allocated orders**:
  - Acknowledgement is immediately sent to Virtual Stock.
- For **partial allocations**:
  - System waits for full allocation
- OR provide a `BackorderDate` for unavailable items:
    - Set via UI or API per order row
    - ShopCtrl communicates the latest backorder date to Virtual Stock
    
:::important

Create an Order Row Parameter named exactly `BackorderDate` (date type) for backorder functionality.

:::

#### **3. Exporting Tracking Information**

Sending of the tracking information is done automatically and it is triggered by setting shipment as shipped. 

To set up automatic tracking exports:

1. In the **Carrier Mapping** section:
   - Click **Show carriers** to view Virtual Stock's codes
   - Map each ShopCtrl carrier to its corresponding **Edge Carrier code**
     (Use only the codes, ignore IDs/names)
    <img src={require("/img/edge-carrier-account-mapping.png").default} height="" width="800" /> 
2. Enable **Track & Trace shipments** in the Orders section
    <img src={require("/img/edge-functional-settings-orders-track-trace.png").default} height="" width="800" />  
3. Click **Save** or **Save and Close**.

#### **4. Activating Full Integration**

Enable all features simultaneously by:
1. Going to **Functional Settings**
2. Checking the **Order integration** master switch
   (This enables acknowledgements, backorders, and tracking)
    <img src={require("/img/edge-functional-settings-order-integration.png").default} height="" width="400" />  

### Step 3. Configure product stock export

Before starting synchronization, ensure the following:
- Products exist in ShopCtrl.
- Corresponding offers are published on Virtual Stock (Edge).

#### Linking Products and Offers

To synchronize inventory, ShopCtrl products must be mapped to Virtual Stock (Edge) offers by matching:

**ShopCtrl Product Code** → **Virtual Stock Supplier Part Number (SKU)**


**Mapping Process:**
1. Log in to your ShopCtrl account as a user with the Shop Admin role.
2. In the sales channels pane on the right, select the shop for which the Virtual Stock (Edge) synchronization has been configured and click Settings.
3. Within the topic menu, select **Shop synchronization > Edge Synchronization**.
4. Go to the **Products and Offers** pane.
    <img src={require("/img/edge-product-offer-mapping.png").default} height="" width="800" />
4. Click **Download offers** to get current Virtual Stock offers.
5. Click **Preview** to generate an estimation file showing the details of the mapping process.
5. **Review and Correct Errors**:
    - Open the downloaded file and address any discrepancies. The file includes the following sheets:
        - **Offers**: Lists all Virtual Stock (Edge) offers.
        - **Errors** (if any): Identifies critical issues.
        - **Warnings** (if any): Highlights issues, such as products not found in ShopCtrl, which may require attention.
        - **Remain**: Displays existing product-offer mappings.
        - **Update**: Shows updates to be applied to current mappings.
        - **Create**: Lists new mappings to be created.
        - **Delete**: Indicates mappings to be removed because the corresponding product no longer exists.
            <img src={require("/img/edge-product-offer-mapping-create.png").default} height="" width="800" />
6. Once errors are resolved, repeat steps to download the latest products list and click the **Map** button to confirm the matches and generate the mappings.
7. Click **Save** or **Save and Close**.



#### Configuring Product Lead Times

Virtual Stock requires lead time data for each product:

1. Create a product property named `VirtualStock.LeadTime` (Number type).
2. Populate values for all products.
3. Set a default fallback value (in days) for products without specified lead times.

In order to support this scenario ShopCtrl exports the value of the custom product property `VirtualStock.LeadTime` for each of the product published at the shop.
[Learn more about Product Properties.](/User-Guide/08-Product-Management/product-properties.md)


#### Enabling Stock Synchronization

To activate product data export:

1. Log in to ShopCtrl with **Shop Owner Admin** privileges.
2. Navigate to **Configuration > Shops**.
3. Select your Virtual Stock shop and click **Edit**.
1. On the **Edge Synchronization tab > Functional settings > Product features** pane:
    - Enable **Product integration**.
    - Enable **Product stock management**.
    - Enable **Shop product management**.
    - Configure the **Lead time** fallback value.
    - Verify that the **Leadtime property** is correctly configured for the system.
    - Set Product Export batch size (recommended: 50 products/request).
        <img src={require("/img/edge-functional-settings-product.png").default} height="" width="800" />
4. Click **Save** or **Save and Close** to apply changes to the shop.
5. The final step is to **Mark products for export**. All mapped products will have their current stock levels exported. 
This establishes the baseline inventory data in Virtual Stock's system

:::important

After initial export, only stock changes will be synchronized automatically.

:::

## Conclusion

You've now completed the Virtual Stock (Edge) integration setup, enabling:

- **Order processing** (import, acknowledgement, tracking)
- **Product synchronization** (mapping, lead times)
- **Inventory management** (stock level updates)

The integration will automatically maintain data consistency between ShopCtrl and Virtual Stock, streamlining your supply chain operations. For ongoing management, monitor the synchronization status and update product mappings as needed.
