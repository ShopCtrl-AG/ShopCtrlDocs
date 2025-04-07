---
sidebar_position: 2
slug: /docs/product-purchasing
---
# Product Purchasing 


### Supplier
<img src={require("/img/product-details-supplier.png").default} height="" width="800" />

Supplier tab stores all of the purchase prices excluding VAT that your suppliers quoted for the product. And within this tab, you can manage the prices and decide what supplier will be a preferred supplier for the product by changing the supplier priority. The purchase price of the supplier with the highest priority will be considered a default for the product.
For example, on the image above the Supplier *Alex Alex* with the priority *3* is a prefered supplier for the product.
The preferred supplier with dropship option enabled will be the first to be assigned to the dropship purchase order.
You can change the quoted prices, SKUs, purchase product names manually. Click the icon at the end of the purchase product row to open the supplier details page in a new tab. 
Or you can upload the supplier's price list on the supplier's details page, set a scheduled import, and all of the purchase products imported will be updated for the applicable products automatically. 

Please see [Import Supplier Products](/User-Guide/09-Purchasing/Suppliers/import-supplier-products.md) for more information about importing suppliers price-list.

**New**
To manage the price change updates coming from your suppliers, there is a possibility to add several prices and set a period withing which the price is active. 
When supplier quotes a new price for the prducts, we need to either upload new price-list the day the prices are changed, or upload it beforehead and set the start and end dates for the purchase prices. The day new price should be applied, background task will deactivate the old and activate new price. You can always check which price is currently active on the Product>Supplier tab.

To enable the possibility to keep several price quotes from one supplier, you need to allow duplicate values for the shopgroup.
On the shopgroup settings > Allow duplicate supplier for product

The same way, we can add the prices manually, or use product import to update prices in bulk.


### Purchase Orders
<img src={require("/img/product-details-purchase-orders-tab.png").default} height="" width="800" />

This tab gives an overview of all of the purchase orders that delivered this product to your warehouses (regular or back to backorders) or to the customers (dropship purchase orders). All of the canceled orders are listed in the grid as well.
You can click the icon in the order code column to open the corresponding purchase order in the new tab for editing.
