---
sidebar_position: 4
slug: /docs/puchase-order-details
---
# Purchase Order Details 


Overview of the purchase order details page

<img src={require("/img/PO_description_4.png").default} height="" width="800" />

## Top Action Menu
<img src={require("/img/po_overview_top_action_menu.png").default} height="" width="800" />

| Action | Description |
| --- | --- |
| Save and Close | Saves the opened purchase order and closes the tab. |
| Save | Saves opened purchase order. |
| Save, close & mail... | Saves the newly created purchase order. Closes the tab and opens a new email window with a predefined email template. |
| Template | Here the default [template for the purchase order document](/docs/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/index.md) is defined. |
| Preview PDF | Click this button and provide a purchase order code to preview the auto-generated purchase order document. |
| Mail Supplier | Clicking the arrow will show the list of [email templates](/docs/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/index.md) available for the purchase order. By clicking one of them, a new email to the supplier is opened in a new tab, generated based on the specified template. |
| Provision | Opens a provision purchase order page in a new tab. The provision button is enabled only for saved purchase orders without deliveries. |
| Delete | Deletes opened purchase order. |
:::info

**'Save, close & mail'** option is available only for the newly created purchase orders. Once the first email is sent to a supplier, the button is disabled. Please use **Mail Supplier** button instead.

:::

## Purchase order details

<img src={require("/img/PO_overview_main_details_border.png").default} height="" width="800" />

| Field | Description |
| --- | --- |
| Supplier | (Required) The supplier who is going to deliver the purchase order. |
| Our Reference | (Optional) Could be used as a merged field for creating a purchase order documentation and is also visible from the provisioning page. |
| Comment | (Optional) Could be used as a merged field for creating a purchase order documentation and is also visible and editable from the provisioning page. |
| Supplier note | (Optional) Could be used as a merged field for creating a purchase order documentation and is also visible and editable from the provisioning page. |
| PO Code | Purchase order code is generated automatically when the order is saved. It could be amended before the purchase order status is changed to "Sent to Supplier". |
| Type | The type of the purchase order is defined the moment the order is created. ShopCtrl supports [three Purchase Order types](/User-Guide/09-Purchasing/Purchase-orders/creating-a-purchase-order.md): Regular, back-to-back, dropship. |
| Order Date | (Required) The date the purchase order was created. You could not change it once the PO was sent to the supplier or delivery for this particular PO is created. |
| Handover | The date the purchase order document was sent to a supplier. |
| Expected | Expected delivery date is set based on an upcoming [Deliveries](/User-Guide/09-Purchasing/Purchase-orders/creating-deliveries.md). Or could be set manually while creating an order. |
| Received | The Date of receipt. |
| Currency | (Required) The currency of the particular purchase order. You can change currency information until the purchase order is approved. |
| Destination | (Required) Destination warehouse where the purchase order is heading to. |
| Supplier Invoice | Entered manually, the number of the supplier's invoice. |

### Totals (ex VAT)
Total purchase order cost excluding VAT in a shop currency

| Field | Description |
| --- | --- |
| Subtotal | Is calculated automatically based on the total products cost |
| Shipping cost | Could be entered manually based on a supplier Invoice |
| Discount, % | The number in % is applied to the whole order, including the shipping cost.  |
| Discount | Is calculated based on a previous field and displayed in this field. |
| Order total | Total calculation of the purchase order |

## Products pane

### Action menu
| Action | Description |
| --- | --- |
| Add | Adds a new product row to a purchase order |
| Edit | Edits the product row |
| Delete | Deletes product row |
| More > Copy Row | Copies product row |


<img src={require("/img/po_overview_product_pane.png").default} height="" width="800" />

### Products table

Here the products, quantity, price, and expected delivery date are defined.
Click the product code link to open a product details window in a new tab. 

Hover a mouse over the <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg> icon and a pop-up window will show the last 10 purchase orders for this product.

<img src={require("/img/po_overview_product_pane_last_10_purchases.png").default} height="" width="800" />

## Topic menu 
### Contact info 
#### Bill to

Here the contact information of the **Buyer** is defined. 
The purchase order is created on a shop owner level, and initially, the 'Bill to' details are also specified in a shop owner's settings. 
The contact information is stored per purchase order. You can modify the exact order shipping details without having to update the shop owner contact info.

<img src={require("/img/PO_topic_menu_contact_info_bill_to.png").default} height="" width="600" />



#### Ship to
This is the address of the warehouse that was chosen as a target warehouse for the purchase order. 
Please edit the fields and save the purchase order to update the contact information of the warehouse chosen .

<img src={require("/img/PO_topic_menu_contact_info_ship_to.png").default} height="" width="800" />

### Purchase order status

From this control, it is possible to enter a comment (optional) and change the purchase order status.

<img src={require("/img/PO_topic_menu_po_statuses.png").default} height="" width="800" />

### (Pre) allocated order rows
After the regular or back-to-back purchase order was fully or partially provisioned, ShopCtrl starts to allocate the stock items that were received. 
It is easy to trace the sales orders that this purchase order is going to fulfill.
<img src={require("/img/PO_overview_topic_menu_preallocated_orderrows.png").default} height="" width="800" />

Please click the icon <img src={require("/img/image30.png").default}  /> in the order code column to open the sales order window in a new tab.
Select a sales order row and click the **Deallocate** button to deallocate stock for the chosen order manually. The sales order row will disappear from the pane. Please go to the sales order page to manually allocate the stock for it again.

### Mail

All the correspondent emails created and sent to the supplier of this particular purchase order are shown in this pane.
Double click an email row to open it in a new tab.

<img src={require("/img/PO_topic_menu_mail.png").default} height="" width="800" />

### Deliveries

Once the delivery is created (automatically upon provisioning or manually), you could view it here.
Please view [Creating Delivery for the Purchase Order](/User-Guide/09-Purchasing/Purchase-orders/creating-deliveries.md) for more information.

<img src={require("/img/PO_overview_topic_menu_Deliveries.png").default} height="" width="800" />

### Parameters

Here is an overview of the parameters that are applied to this particular purchase order. Parameters on purchase orders are free to use. 
Please enter a name and value(s). 

<img src={require("/img/PO_overview_topic_menu_parametres.png").default} height="" width="800" />


### Stock items

Here is an overview of the advanced stock items that were delivered by this purchase order.
View [Advanced Warehouse](/User-Guide/09-Purchasing/advanced-warehouse.md) for details.

<img src={require("/img/PO_topic_menu_stock_items.png").default} height="" width="800" />