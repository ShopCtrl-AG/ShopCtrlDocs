---
sidebar_position: 4
slug: /docs/product-fulfillment
---
# Product Fulfillment 


## Carriers

Here you can view a list of carriers enabled in the system and available for the product.
<img src={require("/img/product-details-categories.png").default} height="" width="800" />


## Product package

If a product needs to be shipped in a specific package to the customer, you can specify the package measurements in this tab. 
<img src={require("/img/product-details-product-package.png").default} height="" width="800" />

Add a row by clicking the **Add** button. All of the fields displayed are editable.
Choose a **Unit** for the measurements and enter the **Length**, **Width**, **Height**, and **Weight** of the package. Choose a **Cargo Holder** and specify whether you will pack the parcel package or you need a packaging service - **Own Parcel Pkg**.
This information will be used later - automatically providing measurements to the carriers for shipping cost calculation. 
To save the changes, click the **Save** or **Save and Close** buttons at the top of the product tab.
To remove a package row, select the row and click the **Remove** button.

## Transport categories
Based on the product measurements, you can select a transport category from the drop-down list that will be used for transport cost calculations later.
<img src={require("/img/product-details-transport-categories.png").default} height="" width="800" />


## Warehouses

The warehouses the product is kept at are listed in this tab: private, fulfillment, supplier type, and dropship.
The average purchase price is calculated only for the warehouses where the purchase orders were sent.
<img src={require("/img/product-details-warehouses.png").default} height="" width="800" />

## Stock

Stock tab unites six tabs, all concerning stock management and warehouse operations.

### Private stock

If the product you are viewing is stored at your warehouse (private or fulfillment), detailed information about the location it is kept at, and stock transactions can be found on this tab.

Depending on which mode your warehouse is functioning at the moment, simple or advanced, the interface of this tab could differ.

#### Simple warehousing

<img src={require("/img/product-details-private-stock-simple-warehousing.png").default} height="" width="800" />

For simple warehousing, you can move the stock and adjust the product's stock level without creating a purchase order and provisioning it to the store. The stock could be syncronized from your warehousing system using scheduled excel import or via API.

A button **Add new location** adds stock to a different location from the one listed in a grid. 
Without a purchase order or specifying the purchase price (it takes the purchase price of the preferred supplier), you can create a new simple product stock item at the warehouse.
**Stock update** - enables editing stock on a specific location.
**Stock move** - moves stock from one location to another.
You can also [**Park**](/docs/User-Guide/04-Order-Management/03-Allocation-of-orders/parked-stock.md) stock by clicking the shopping cart button at the end of the location row.

#### Advanced warehousing
After the product is turned into an advanced product, each stock item receives a unique barcode label. It won't be possible to add a product to stock without a purchase order and specifying the required details for each stock item. 
Some additional operations, like stock move can be done from the [Warehouse operations](/docs/User-Guide/08-Product-Management/warehouse-operations.md) page.

### Supplier stock

<img src={require("/img/product-details-stock-supplier-stock.png").default} height="" width="800" />

Here the information about the availability of this product in your supplier's warehouses is accumulated. You can update the stock balance directly on this page by clicking the update button. Or upload an Excel file with price and stock data on the supplier's details page. Please see [Import Supplier Products](docs/User-Guide/09-Purchasing/Suppliers/import-supplier-products.md) for more details.

### Parked stock

<img src={require("/img/product-details-parked-stock.png").default} height="" width="800" />

When your system is set the way that products are automatically allocated for the orders, it might happen that you need to reserve part of the stock for specific orders.

You can park part of the not-allocated stock from the private stock tab. Or use **Deallocate and park stock** option on the orders tab. 
From this page, you can view how many stock items of the product were parked and manage these items.

**Remove** - deletes the whole quantity of the selected parked items. All of the stock items selected will receive the deleted stamp in the warehouse and won't be available for allocation anymore.
**Release as available stock** - changes the status of the parked stock items to available so that products will be automatically allocated to the backorders if there are any.
**Assign to orders** - opens a new screen where you can decide which of the backorders to allocate the parked product. 

**Stock move** - opens a new window offering to move stock from the current location to the other. 


Please see [Parked Stock](/docs/User-Guide/04-Order-Management/03-Allocation-of-orders/parked-stock.md) to learn more on how to park and allocate reserved stock.
 
### Stock history

The stock history tab will provide information only if the Keep stock setting is enabled in the stock settings tab.

<img src={require("/img/product-details-stock-history.png").default} height="" width="800" />

This tab will display three charts: Quantity available, Quantity on hand, and Quantity reserved.
You can change the period and the warehouse for which you want to view the chart. By default, it is set to all warehouses. Another consolidation option for the charts is all dropship warehouses.

### Stock transactions 

From this tab you can track movement of the particular product stock items at your warehouse. Use search to filter by warehouse, location or reason for stock movement.
<img src={require("/img/product-details-stock-transactions.png").default} height="" width="800" />

Stock transactions  track not only the transactions of your private or fulfillment warehouses but also the purchase products transactions linked to this product on your supplier warehouse. So if you update the supplier price list through the [supplier import](docs/User-Guide/09-Purchasing/Suppliers/import-supplier-products.md), the change in stock will be reflected on this page as well.

### Stock settings

The number of settings located on this page is dependant on the mode of your private warehouse. 

#### Simple warehousing settings

<img src={require("/img/product-details-stock-settings-simple.png").default} height="" width="800" />

You can decide whether you would like to keep stock of this product and thus keep a history of stock changes  (visible on the Stock History tab). Set the minimum and maximum stock values that will be used in calculating the purchase order suggestions.

Mark the product as End of life if you no longer plan to order it or it was withdrawn from the market. This will remove the product from the purchase order suggestions calculation.

**Allocation. Prevent auto deallocation.**
If there is a trigger set for certain events to deallocate stock after execution, this checkbox will prevent the execution of deallocation action for this particular product.

**Storage settings**: for the products with a storage life. It is possible to define the number of storage life days and specify when to send a reminder.

#### Advanced warehousing settings
For [**Advanced** warehousing](/User-Guide/09-Purchasing/advanced-warehouse.md), the number of options configurable per product is enlarged.
You can configure whether the product requires a lot, serial number, or expiry date. Set an expiry warning issuing date and change a warehouse label printed for a specific product. 
 
<img src={require("/img/product-details-stock-settings-advanced.png").default} height="" width="800" />

**Product property registration**
Here you can define whether the product requires a **Lot number**, **Serial number**, or **Expiry date**.

Once the expiry mode is on for a product, an **Expiry date** should be set while provisioning it.
For each product with an expiry date, it is possible to set two **Expiry warnings**. Once the product receives a status **First expiry warning** or **Second expiry warning**, the stock item status will be changed to **Almost expired** for this particular stock Item. 

:::warning[**Note:**]

First Expiry Warning should be issued before the Second Expiry Warning. 

:::

**Warehouse**
Here you can decide whether you want to print a unique warehouse label for each of the stock items stored at the warehouse. The default prinitng label will be set on the shop owner level.  **Shop owner details page > Warehouse settings.**
On this page, you can override that setting and select a specific label for this particular product. 

### Stock items

After the advanced warehousing mode is turned on for the system and simple products are transformed into an advanced, each stock item will be registered to the warehouse with a new record containing lot/serial/expiry date. All of the stock items registered for the product are listed on this tab.

<img src={require("/img/product-details-stock-stock-items.png").default} height="" width="800" />

For more details on the data display, please see: [Advanced Warehouse](/docs/User-Guide/09-Purchasing/advanced-warehouse.md#stock-items-overview-for-an-advanced-product).