---
sidebar_position: 5
slug: /docs/provisioning
---

# Provisioning Overview 

Provisioning is the process of receiving goods and storing them in your warehouse.
ShopCtrl allows managing stock for two types of warehouses: private and fulfillment. 

## Provisioning stock to a private warehouse

### Provisioning page overview

When you receive goods, you select the associated purchase order and proceed to provision. 

There are several ways to open the provisioning screen:
1) From the main purchase order table: 
Select a delivered purchase order and click the button on the top action menu. Or click a provision button in the purchase order row.
<img src={require("/img/provision_01.png").default} height="" width="800" />

2) Within the purchase order page:
Open the received purchase order, and on the top menu, click a provision button.
<img src={require("/img/provision_03.png").default} height="" width="800" />

3) If there exists one or more [Delivery](/User-Guide/09-Purchasing/Purchase-orders/creating-deliveries.md) for the purchase order, the provision buttons are available for each delivery.
<img src={require("/img/provision_regular_order_deliveries_01.png").default} height="" width="800" />

:::info[]

Once you start the provision process and the submit status of the purchase order is not finished ("Send to supplier" by default), it will automatically be changed to the default finished status. Since receiving goods implies that you have sent the order list to the supplier.

:::

Click any **Provision** button, and a new provision purchase order window will open in a new tab. There is no difference in the provisioning process of regular and back-to-back purchase orders.

<img src={require("/img/provision_regular_order_02.png").default} height="" width="800" />



#### Top action menu 

<img src={require("/img/Provision_top_action_menu_not_provisioned.png").default} height="" width="800" />

| Action | Description |
| --- | --- |
| Save and Close | Saves provision and closes the page |
| Save | Saves provision |
| Save, Close and Print Labels | Saves provision, closes the page, and opens a new window to print labels for each advanced stock item. Please check [Advanced Warehouse]/User-Guide/09-Purchasing/advanced-warehouse.md for more information |
| Finalize provisioning | This option is available for purchase orders with provision status "Partially received". |
| Cancel provisioning | Cancells provision and changes the main status of the purchase order to "Cancelled". |
| Print PO | Prints the respective purchase order |

:::(Error) ()
If the provision is **Cancelled** within the provisioning screen, the purchase order main status will be changed to "Cancelled". This could not be undone. 
:::
:::info[**Note:**]

After the purchase order was partially provisioned, it is not possible to cancel provisioning.

:::
#### Purchase order details
These are the details of the purchase order that is being provisioned.
**Comment** or a **Supplier note** could also be edited and saved during the provisioning process.

<img src={require("/img/provision_04a.png").default} height="" width="800" />

#### Products table

The products pane shows a list of products that need to be provisioned. This table is customizable like all of the ShopCtrl tables are. 
In order to ease and fasten the provisioning process, a search field is available. The search is performed within the product code, product name, or supplier SKU.
Click an icon in the product code column to open a product on a new page. Click the location icon to open a location on a new page.

<img src={require("/img/provision_05.png").default} height="" width="800" />

The quantity received is specified in the **Receive Now** column. By default, ShopCtrl pre-fills it with the ordered amount. 
If the first shipment was already delivered, the **Already Received** column will show the provisioned amount. 

<img src={require("/img/provision_overview_products_already_received.png").default} height="" width="800" />

:::warning[**Note:**]

The total received amount may not exceed the ordered quantity on the purchase order. This is a standard-setting. 
ShopCtrl also suggests defining a percentage that is allowed for over-provisioning. Please contact your support manager for more information.

:::

### Provisioning purchase order in two parts

Suppose the purchase order will be delivered by the supplier with two shipments.  

After receipt of the **first** part, please proceed to provision:
1. Open the provisioning page.
2. Manually amend the quantity received or specify with a barcode scanner the [Advanced Stock Items]/User-Guide/09-Purchasing/advanced-warehouse.md.

<img src={require("/img/provision_private_warehouse_first_part_amend_qty.png").default} height="" width="800" />

3. Select a **Location** per product where the goods will be stored. 

<img src={require("/img/provision_private_warehouse_first_part_select_location.png").default} height="" width="800" />

4. Click **Save** or **Save and Close** to finish the provision process of the basic stock items. Click **Save, Close and Print Labels** to finish the registration process to storing the [Advanced Stock Items]/User-Guide/09-Purchasing/advanced-warehouse.md.

5. ShopCtrl automatically creates a delivery for the received shipment. It could be viewed in the topic menu of the purchase order. 
The provision status of the purchase order is changed to "Partially provisioned".

After the **second** shipment is delivered, please follow the same steps.
1. Open the provisioning page.
The provision status of the purchase order is displayed as "Partially received". Products that were received with the first shipment are displayed in the "Already Received" column. Receive now field for the fully received products is disabled.
<img src={require("/img/provision_private_warehouse_second_part.png").default} height="" width="800" />

2. Enter the quantity received.
3. Select a **Location** per product where the goods will be stored.
4. Click **Save** or **Save and Close**.

ShopCtrl will automatically create a second delivery for the purchase order. This way it is always possible to trace which shipment delivered the product.
<img src={require("/img/provision_private_warehouse_autocreated_deliveries.png").default} height="" width="800" />

After the purchase order is fully received, ShopCtrl will change the provision status to **Provisioned**.



If by that moment the purchase order was fully paid, the main status will also be changed to "Finished". Provision buttons will be disabled.


#### Finalizing provisioning

It could happen that some items are still pending because the purchase order was not updated after the supplier's confirmation. 
Some items could be received in damaged condition and returned to the supplier. Or part of the goods that are still pending are "End of Life," and the rest won't be delivered. In order to automatically adjust the purchase order and deduct these products, please click the **Finalize provisioning** button.

:::info[ShopCtrl Tip]

Finalize provisioning button becomes active when a purchase order has a partial provisioning status. 
So in order to finalize the provisioning of the just received purchase order, please save it first and refresh a page.

:::

<img src={require("/img/provision_finalize_provisioning.png").default} height="" width="800" />

Clicking the **Finalize provisioning** button prompts a confirmation message:

<img src={require("/img/provision_finalize_provisioning_message.png").default} height="" width="" />

After the confirmation, the purchase order rows will be adjusted to the quantities that were received. And the provisioning status of the purchase order will be changed to "Provisioned".

## Provisioning stock to a fulfillment warehouse

The provisioning process for both types of warehouses within ShopCtrl is pretty much the same. The main difference between the two warehouses is that when you are provisioning a fulfillment warehouse, there is no need to specify where the goods are stored. 

### Provisioning page overview

Top action menu repeats the one for the Private Warehouse. Purchase order details represent the details of the purchase order that is being provisioned.

The product pane is simpler compared to the one for the private warehouse. Since here, the provisioning process is actually fulfilled on the supplier's warehouse.
<img src={require("/img/provision_fulfilment_warehouse.png").default} height="" width="800" />

### Provisioning process
After the supplier confirms that the goods were moved to your stock, please proceed to the provisioning of the purchase order.

1. Open the provision page.
2. Correct the amount received.
3. Save and close the provision page.

It is also possible to **Finalize provisioning**.
