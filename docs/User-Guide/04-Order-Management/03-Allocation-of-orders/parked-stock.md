---
sidebar_position: 1
slug: /docs/parked-stock
---

# Parked Stock

When your system is set so that products are automatically allocated for the orders after certain triggers, you might need to reserve part of the stock for specific orders and manually allocate the products to orders.
**Parked stock** is a reserved stock set aside and not included in normal allocation flow. But it could be manually allocated to the orders.

If the product was damaged or missing, this is also the way to put stock aside to prevent automatic allocation.

:::info[Please note]

The parked stock feature is not included in the basic ShopCtrl configuration. Please get in touch with the Support desk for more information.

:::

## How to deallocate and park the stock

If the products were already allocated to the orders, you can deallocate the product and reserve the freed stock.
The process of deallocating and parking is the same for simple and advanced stock items.

You can deallocate and reserve the **whole order** including all of it products from the orders page:
<img src={require("/img/deallocate-and-reserve-whole-order.png").default} height="" width="" />

1. Go to the **Sales > Orders**.
2. Select an order you want to deallocate.
3. Click **More > Fulfillment > Deallocate stock and park reserved stock**.

All of the order products will be parked; order row statuses will be changed to **DeAllocated**.


Or park only a **certain product** from the order details page:
<img src={require("/img/deallocate-and-park-order-row.png").default} height="" width="800" />

1. Go to the **Sales > Orders**.
2. Select an order you want to deallocate and double-click on the order row to open it for editing.
3. Select an order row you would like to reserve.
4. Click **More > Deallocate stock > Deallocate and park stock**.
5. Confirm the action.

Certain product stock will be parked; order row status will be changed to **DeAllocated**.

## How to park free stock

The process differs depending on whether you are parking a simple product or an advanced one.

### How to park simple products

If the products you would like to park are not allocated to orders, you can park them from the product details tab.

<img src={require("/img/park-free-stock-private-stock-tab.png").default} height="" width="800" />

To reserve part of the free stock:

1. Open **Product Management > Products**.
2. Locate and open the product which you would like to park.
3. On product details page go to **Topic menu > Stock > Private stock** tab.
4. Click on the <img src={require("/img/shopping-trolley.png").default}  /> icon at the end of the location record row.
5. In a pop-up dialog window, specify the number of the stock items you would like to park. A hint in brackets will display the total amount of items available for parking.
<img src={require("/img/park-stock-dialog.png").default}  />
6. Click **Save** to park the selected quantity.

### How to park advanced product

For the advanced products where each stock item is unique at the warehouse, we need to scan and mark each specific item you would like to park.

<img src={require("/img/warehouse-operations-scan-item.png").default} height="" width="800" />

To park an advanced stock item:

1. Open **Product Management > Warehouse Operations > Scan Product** tab.
2. Scan a barcode of the stock item you would like to park. 
(Alternatively) Enter a stock item code in the **Scan code** field and click a <img src={require("/img/magnifier-color.png").default}  /> icon.
3. Click the **Mark As Parked** button.

The status of the advanced stock item will be changed to "Parked". Related product available quantity will be decreased by one.

## How to manage parked stock

The parked stock for a specific product could be managed from the product details page.

<img src={require("/img/product-details-parked-stock.png").default} height="" width="800" />

Open the Product Details > Stock > Parked Stock tab and select a parked stock location row.
You can now:
**Remove** selected stock. 
Advanced stock items will be marked as deleted and not available for allocation. Product quantity decreased accordingly.

**Release as available stock** 
Remove the reserved status from the stock items to make the selected items available for allocation again.

**Assign to orders**
Click this button to assign parked stock to the backorders manually.
A new pop-up window will be opened, offering to choose which order to allocate. 
<img src={require("/img/parked-stock-allocation.png").default} height="" width="800" />

Mark the orders checkboxes you would like to allocate and click the **Allocate** button. 
You can set the priority of the backorders on the Product Details > Backorders tab. 

