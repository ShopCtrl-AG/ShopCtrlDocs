---
sidebar_position: 3
slug: /docs/advanced-warehouse
---

# Advanced Warehouse 


ShopCtrl offers new functionality on registering and managing more details for products that are kept in stock. 
Now it is possible to add a **Lot number**, **Serial number**, and **Expiration date** to each stock item at a warehouse.

## Setting up an advanced product
To change the product type to an **Advanced product**, please check the product settings of the respective product.

<img src={require("/img/Setting_up_Expiry_01a.png").default} height="" width="800" />

In a product menu, choose **Stock > Stock Settings**.

### Product property registration
Here you can define whether the product requires a **Lot number**, **Serial number**, or **Expiry date**.

Once the expiry mode is on for a product, an **Expiry date** should be set while provisioning it.
For each product with an expiry date, it is possible to set two **Expiry warnings**. Once the product receives a status **First expiry warning** or **Second expiry warning**, the stock item status will be changed to **Almost expired** for this particular stock Item. 

| Field | Description |
| --- | --- |
| Expire Warning Unit | Day or month |
| First Expiry Warning | Please set the first warning date the product status will be changed to almost expired |
| Second Expiry Warning | Please set the second and last warning date before expiry. Please leave the field blank if a second warning is not required. |
:::warning[**Note:**]

First Expiry Warning should be issued before the Second Expiry Warning. 

:::

### Setting up warehouse labels for advanced products

On the shop owner level, it is possible to specify which labels to use for printing. 
**Shop owner details page > Warehouse settings**

| Template name | Description |
| --- | --- |
| Product label template | a template used for basic stock items (products) |
| Stock item label template | a template used for advanced stock Items (which require Lot / serial number or expiry date) |
| Warehouse location label template | a template used to define a specific location for a stock item in a warehouse. |


<img src={require("/img/shop-owner-settings-warehouse.png").default} height="" width="800" />

Label templates are provided by ShopCtrl and could be changed in templates configuration. 
The default document templates use conditional merge fields to hide fields if not available.

It is also possible to assign another type of label which is specific to a product.
You could define this label in a Product Stock Settings
**Product details page > Stock > Stock Settings > Warehouse**

<img src={require("/img/Setting_up_Expiry_04.png").default} height="" width="" />

So for this particular product, this exact label will be used. 
:::warning[**Note**]

These settings will override the shop owner settings.

:::

Please view [Creating and editing document templates]/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/creating-and-editing-document-templates.md and [Managing document templates]/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/managing-document-templates.md for more information.

## Purchasing advanced products

To purchase advanced products to your warehouse, please follow these steps:

1. Create a purchase order and add an advanced product as you would normally do.
2. Once the purchase order is delivered, please proceed to **Provision**. A window similar to this will be shown:

<img src={require("/img/Provision_advanced_products_06.png").default} height="" width="800" />

The **Specify** button will be displayed for the advanced products, offering to specify an exact lot number, serial number, or expiry date for each stock Item received.

3. Click the **Specify** button. A new **Receive Now** window will be opened.

Please check the select all checkbox to set an expiry date and lot number for all products received. Enter the data manually, or scan the items. 

<img src={require("/img/receive_now_01.png").default} height="300" width="" />

It is also possible to change the entered data for the specific items and change the number of items received.

<img src={require("/img/receive_now_03.png").default} height="300" width="" />

:::warning[Please note]

ShopCtrl system doesn't allow to provision of already expired items. 

:::

4. Click **Ok** once finished entering data.
5. On a provision page, click **Save, Close and Print Labels**. 
Now each stock item in the warehouse will be labeled accordingly.

## Stock items overview for an advanced product

Once advanced products are provisioned to stock, it is possible to check the Stock Level for a particular product in product settings. **Product > Stock > Stock Items.**

<img src={require("/img/product-details-stock-items-list.png").default} height="" width="800" />

Expired products will be marked with a red exclamation icon  <img src={require("/img/image_danger.png").default}  />. Stock items that received a nearly expired warning will be marked with a yellow triangle <img src={require("/img/image_13.png").default}  />. 
It is also possible to filter and search through the Stock Items. By default, the filter is set to Only Available Stock Items.
Please click the pencil in the stock items grid to edit the particular stock Item.

:::warning[**Note:**]

Once a stock item receives a status **Expired**, it could no longer be allocated for the sales order.

:::

Stock items received with a particular purchase order could be viewed within a specific purchase order. **Purchase order details page > Stock Items.**

<img src={require("/img/Stock_items_for_PO_01.png").default} height="" width="800" />

You could also apply all the filters listed above here.  
To reprint the labels, click the **Print All** button. Or please select certain stock items for which the new labels should be printed and click the **Print Selected** button.

## Shipping advanced products to a customer

Once you receive a new sales order for the allocated advanced product, please proceed to the **Order details page > Fulfilment > Create Shipment**.

The new **Shipment** page will be opened in a new tab. 

<img src={require("/img/shipping_sales_order_advanced_products_01.png").default} height="" width="800" />

:::warning[**Note:**]

The **Interactive Pick List** window is intended to use only with a barcode scanner. Scanning the correct label will pick a specific stock item. This will help eliminate mistakes with manually picking the wrong stock item.

:::

If the sales order contains one or more advanced products, an **Interactive Pick Button** is available. Please save the shipment and click the **Interactive Picklist** button. A new pop-up window will be opened. 

:::info[**Note:**]

The **Interactive Pick List** window will be opened automatically after scanning the picklist barcode. 

:::

<img src={require("/img/Interactive_pick_01a.png").default} height="" width="800" />

Scanning the specific stock item labels will also help to eliminate the errors associated with shipping a wrong product to the customer.
Here one can scan the specific stock items with a particular expiry date shown in the picklist. After scanning, the products are picked, and the **Ok** button is enabled.
If a stock Item with a later expiry date is scanned, an error warning message will appear.
Therefore, products that have an earlier sell-by date will be shipped first.

:::warning[**The First expired, first out**]

The stock items are swapped the moment the shipment is created. That guarantees that the products with the nearest expiry date will be first to be shipped. 

:::

It is also possible to pick an alternative for a specific stock item. Select a stock item that needs to be replaced and click a **Pick Alternative** button.
A list of items available in stock will be displayed grouped by expiry date and lot number.


<img src={require("/img/Interactive_pick_02.png").default} height="" width="800" />

It is always possible to check which exact stock items were shipped for a particular customer.
Open shipped sales order for editing. In the topic menu, select **Stock Items**

<img src={require("/img/sales_order_stock_items_01.png").default} height="" width="800" />

## Product stock expiration report

The **Product Stock Expiration Report** gives a clear visualization of what is going on with the management of the products with a set of expiry dates.
In the **Reporting** section, please select a **Product Stock Expiration Report**
Here the products are grouped based on the expiration date.

<img src={require("/img/Product_stock_Expiration_report.png").default} height="" width="800" />

The products are listed in the following order:
1. Already expired products.
2. Almost expired products, i.e., products that received the first expiry warning.
3. Products that are about to expire, i.e., products that received the second expiry warning.

