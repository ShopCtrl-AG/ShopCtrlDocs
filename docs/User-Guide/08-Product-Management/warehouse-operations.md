---
sidebar_position: 12
slug: /docs/warehouse-operations
---
# Warehouse Operations 


The warehouse operations module is part of the [Advanced Warehouse]/User-Guide/09-Purchasing/advanced-warehouse.md.
To open this page go to **Product Management > Warehouse Operations** tab. 
From these page, you can:
* scan and manage stock item
* get an overview of the stock counts performed for locations
* move advanced stock items between locations

## Scan product
<img src={require("/img/warehouse-operations-scan-product-tab.png").default} height="" width="800" />

To get stock item details, you can:
* **scan** a stock item barcode
* enter stock item code manually in the **Scan code** field

Stock item details include: 
* Stock item ID
* Product code
* Product name
* Status of the stock item scanned
* (Optional) Lot number
* (Optional) Expiry Date
* (Optional) Serial number

Once the stock item details are loaded, you can **manage** the status of the particular stock item by clicking the buttons in the top menu panel:

* **Mark As Available** - stock item becomes available for allocation. For example, if the item was mistakenly marked as **Missing**, **Deleted**, or **Damaged**, you can change the status back to **Available**. You can also release the reserved **Parked** item this way.
* **Mark As Parked** - sets aside the chosen item from the normal automatic allocation flow. You can now manually allocate this item from the **Product details page > Stock > Parked stock** tab.
* **Mark As Deleted** - changes stock item status to **Deleted**.  The item becomes unavailable for allocation, and product **On hand** (and **Available**) quantity is decreased by **1**.
* **Mark As Damaged** changes stock item status to **Damaged**.  The item becomes unavailable for allocation, and product **On hand** (and **Available**) quantity is decreased by **1**.
* **Mark As Missing** changes stock item status to **Missing**.  The item becomes unavailable for allocation, and product **On hand** (and **Available**) quantity is decreased by **1**.


## Stock counting

This page gives an overview of all stock counts performed and closed for warehouses and locations.
<img src={require("/img/warehouse-operations-stock-count.png").default} height="" width="800" />

You can click the <img src={require("/img/icon-location.png").default}  /> icon near the warehouse or location name to open its details in a new tab.
Or create a new count for a specific location by clicking the **Add count** button in the location row. The new stock count will be opened in a new tab.

## Stock move

From this page you can scan one or multiple stock items and move them to the selected warehouse location.

<img src={require("/img/stock-move.png").default} height="" width="800" />
