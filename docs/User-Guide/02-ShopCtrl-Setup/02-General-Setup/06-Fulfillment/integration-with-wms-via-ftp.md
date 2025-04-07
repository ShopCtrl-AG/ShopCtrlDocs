---
sidebar_position: 3
slug: /docs/integration-with-wms-via-ftp
---

# Integration with WMS via FTP

ShopCtrl provides a seamless integration solution for your Warehouse Management System (WMS) through FTP, enabling you to automate the pick and pack processes efficiently. 
This guide focuses on integrating with your WMS using CSV files, specifically designed for handling Amazon 1P purchase orders.


## Order Picking Integration

ShopCtrl facilitates the integration by creating a dedicated folder on your ShopCtrl environment server to receive files containing pick and pack data for your orders. 

In a nutshell, the order picking process involves scanning and picking items at the warehouse. The WMS generates a file with the results, which is then placed in the designated folder on the ShopCtrl server. ShopCtrl efficiently processes the file in the background, initiating updates to the order rows. In cases where certain products are found to be missing, ShopCtrl generates credit rows for these items, promptly reflecting the changes on the order. Subsequently, these updates are synchronized with Amazon through an acknowledgment process, ensuring a seamless integration with the Amazon platform.

### WMS: CSV Format and Folder Routing

To communicate information about picked items for an order to ShopCtrl, place a `.csv` file in the designated folder on your production environment server.
For the **route** to the designated **Pick folder** on your ShopCtrl environment server, contact ShopCtrl support.

Guidelines for CSV Submission:

1. **File Format and Submission:**
    * Submit a single CSV file per order, encompassing complete order data.
    * Missing items for order rows result in credit rows, reflecting changes on the order.
    * If certain products are not included in the CSV document, those order rows are treated as fully rejected and thus credited.
    * Excess items in the pick file are ignored, preventing unintended quantity increases. Alerts are generated to notify of discrepancies in the order.

:::info[**Amazon 1P workflow**]

Purchase order acknowledgement request is triggered and sent to Amazon after the pick file is processed.

:::
2. **File Replacement and Acknowledgement:**
    * ShopCtrl treats repeated files for the same order as replacements.
    * Excess items in the pick file (compared to those submitted with previous file) are ignored, preventing unintended quantity increases. Alerts are generated to notify of discrepancies in the order.

:::info[**Amazon 1P workflow:**]

An acknowledgement replacement is triggered and sent to Amazon, ensuring accurate and up-to-date information.
It's essential to note that Amazon restricts re-acknowledgment beyond what was previously sent. ShopCtrl validates and adheres to this rule. 

:::

3. **CSV File Structure:**
    * Each row of a CSV file should include the following data:
        - **Shop** - [string] - Identifies the target shop (e.g., "Amazon").
        - **PO_Code** - [string] - ShopCtrl Order Code (Amazon Purchase Order code).
        - **EAN** - [string] - Product EAN.
        - **Acknowledged_Quantity** - [number] - Number of items to be acknowledged (picked).
        - **Pick_Timestamp** - [datetime] - Represents the UTC timestamp of when this row was picked.

Sample CSV:

```csv
Amazon, TEST616302, 5010426736358, 930, 2023-12-14T12:10:00Z  
Amazon, TEST616302, 5010426739008, 60, 2023-12-14T12:15:00Z  
Amazon, TEST616302, 5010426739008, 10, 2023-12-14T12:20:00Z
```

### ShopCtrl: Warehouse Integration Configuration

Configure the Order Picking integration at the Warehouse level on ShopCtrl.

<img src={require("/img/warehouse-settings-amazon1p-pick.png").default} height="" width="800" />


Steps to enable integration:

* Log in to your ShopCtrl environment using the shopowner admin role.
* From the Navigation menu proceed to **Product details > Warehouses**.
* **Open** the Warehouse for configuration.
* On the Warehouse details topic menu, locate and select **UK - Amazon 1P Pick**.
* **Enable** integration.
* Configure Workflow:
    * Decide whether to  **Delete open shipment on order reacknowledge**. 
    * Decide whether to  **Create a new shipment on upload**.
* Create shop mapping between your WMS system and ShopCtrl
    * Click **Add** and select a shop in ShopCtrl 
    * Enter the corresponding name for the shop in your WMS.
* Click **Save** or **Save and Close** to apply the changes to the Warehouse.

Workflow settings depend on existing triggers in your ShopCtrl environment, providing flexibility for adjustments.
**Delete open shipment on order reacknowledge:** While useful for testing and refining workflows, regular deletion is not recommended. Handling such exceptional actions, like the deletion of a shipment, is usually managed by an employee.

For further details on purchase order acknowledgment to Amazon, refer to the article: **Amazon 1P Order Fulfillment Workflow**.

## Order Packing Integration

Once an order is picked at the warehouse, the subsequent step involves packing the order. The results are recorded in a file generated by the external Warehouse Management System (WMS) and placed in the designated folder on the ShopCtrl server. ShopCtrl processes this file in the background, updating the shipment with essential packing information.

At this stage, quantity changes are not processed. If any items are missing or excess items are packed, alerts are generated on the order, and the corresponding group shipment is identified, highlighting errors. By this point, the order is acknowledged to Amazon, preventing the inclusion of excess items, which could lead to fines.

### WMS: CSV Format and Folder Routing

To inform ShopCtrl about the items packed for an order, a `.csv` file must be placed in the folder on your ShopCtrl production environment server.
For the **route** to the designated **Pack folder** on your ShopCtrl environment server, contact ShopCtrl support.

A CSV pack document may include details for one or multiple orders.
Depending on the configuration, the system may or may not create a group shipment after upload. Regardless, packing information is consistently saved within a single order shipment.
When a group shipment needs to be created, the CSV file serves as a full description of the planned shipment. The Bill-of-Lading (BOL) acts as a unique identifier for the group shipment.
Repeated files for the same Bill of Lading ID override previous pack files. This ensures the most recent packing details are accurately represented.


- **Shop** - [string] - Identifies the target shop (e.g., "Amazon 1P").
- **BOL** - [string] - Bill of Lading ID received from external WMS (AS400).
- **PO_Code** - [string] - Amazon Purchase Order code.
- **Pallet** - [string] - A unique identifier of a pallet (SSCC).
- **Carton** - [string] - A unique identifier of a carton, or an empty value if items were stacked directly on a pallet.
- **EAN** - [string] - Product EAN.
- **Quantity** - [number] - Number of items packed into this carton/pallet.
- **Unit_Weight** - [number] - Weight of one unit of product.
- **Pack_Timestamp** - [datetime] - Represents the UTC timestamp when this row was packed.

Sample CSV:  

```csv
Amazon, bol0001, TEST616302, pallet01, carton01, 5010426736358, 10, 4.33, 2023-12-14T12:10:00Z
Amazon, bol0001, TEST616302, pallet01, carton02, 5010426736358, 10, 2.01, 2023-12-14T12:10:00Z
Amazon, bol0001, TEST616302, pallet01, carton03, 5010426736358, 4, 3.50, 2023-12-14T12:20:00Z 
Amazon, bol0001, TEST616303, pallet01, carton03, 5010426739008, 6, 6.12, 2023-12-14T12:20:00Z 
Amazon, bol0001, TEST616303, pallet02, carton04, 5010426739008, 8, 2.10, 2023-12-14T12:20:00Z
```

### ShopCtrl: Warehouse Integration Configuration

Configure the Order Packing integration at the Warehouse level on ShopCtrl.
<img src={require("/img/warehouse-settings-amazon1p-pack.png").default} height="" width="800" />


To enable the Pack integration:

* Log in to your ShopCtrl environment using the shopowner admin role.
* From the Navigation menu proceed to **Product details > Warehouses**.
* **Open** the Warehouse for configuration.
* On the Warehouse details topic menu, locate and select **UK - Amazon 1P Pack**.
* **Enable** integration.
* Configure Workflow:
    * Decide whether to  **Delete from an old group shipment on upload**. 
    * Decide whether to  **Add to a new group shipment on upload**.
* Create shop mapping between your WMS system and ShopCtrl
    * Click **Add** and select a shop in ShopCtrl 
    * Enter the corresponding name for the shop in your WMS.
* Click **Save** or **Save and Close** to apply the changes to the Warehouse.


Workflow configuration allows for flexible adjustments based on existing triggers in your ShopCtrl environment. It is advised not to regularly delete previously packed shipments from a group shipment, as this setting is primarily useful for testing and refining workflow processes.

Group shipment auto-creation is a standard part of the workflow. To pack items and create a group shipment, single orders should already have shipments created and picked before the pack file arrives.

For further details on ASN submission to Amazon, refer to the article: [Amazon 1P Order Fulfillment Workflow](/docs/User-Guide/07-Fulfillment/Amazon-1P-Order-Fulfillment-Workflow/index.md).
