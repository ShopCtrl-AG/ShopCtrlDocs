---
sidebar_position: 4
slug: /docs/edit-order
---

# Edit Order

You can edit an order by selecting/filter the order and then clicking the **Open** button in the top left-hand corner. You can also double-click on the order.

The order detail window will appear:
<img src={require("/img/order-details.png").default} height="" width="800" />

You can **Save** the order from the top action menu, send a **mail** to the customer or supplier, **Invoice** the order manually, start the **Fulfillment** process, or even **Delete** the order.

:::info[Please note]

If the order status is "On hold", the invoice and fulfillment buttons will be disabled to prevent further actions with the order. 
If you would like to issue a credit invoice, for example, please change the status back to active, issue an invoice, and then put it on hold again.

:::

## Cancel order

You can cancel an order by changing its main status to '**Cancelled**'. 

:::warning[Please note]

An order that was already invoiced or shipped could not be cancelled. Remove or cancel the invoice(s) and shipment(s) first.

:::

### Cancel single order:

1. Open the **Sales > Orders** tab.
2. Locate and **double-click** the order to open it for editing.
3. On the order details page in the topic menu select **Order Statuses**.
<img src={require("/img/cancel-silngle-order.png").default} height="" width="800" />

4. Click on the Main Status and select Cancelled from the dropdown.
5. (Optional) Select a predefined **Cancel reason**. Or leave the field blank if the reasons are not required.
6. (Optional) Enter a comment.
7. Click **Save** or **Save and Close** to apply changes.


### Cancel several orders:

1. Open the **Sales > Orders** tab.
2. Locate and select several orders.
3. On the Actions pane click **More > Change > Order status > Main status > Cancelled**.
<img src={require("/img/cancel-several-orders.png").default} height="" width="800" />

### Import cancelled orders from Amazon

When customer places an order at Amazon, there are up to 30 minutes within which he/she can cancel the order without contacting the seller. After that, the order is passed further to the seller and the customer can cancel the order only by contacting the seller support team.

ShopCtrl imports orders once they pass the pending state and are ready to be shipped. After the order reaches ShopCtrl, an automatic flow starts executing.

If customer sends a cancellation request after the order was imported to ShopCtrl and the request is fulfilled by employee at Amazon Seller Central account, this change is synced to ShopCtrl shortly. But how the status change is processed is very much dependant on the stage the order goes through in the fulfillment process. Please see the scheme below showing the different fulfillment stages of the order and possible outcomes of importing the cancel request:

<img src={require("/img/import-Amazon-cancel-order-status.png").default} height="" width="800" />

If no shipment was created, or shipment was created but not yet taken into work by the warehouse (picked or packed), the order status automatically changes to cancelled and shipment is deleted as well. This way the fulfillment team is immediately informed that the order should not be shipped - further actions with the shipment are not possible, error is displayed identifying that the shipment no longer exists.

If the shipment was created and already passed to the warehouse - shipment status is changed to 'Picked'/'Packed' or even the parcel is marked as 'Shipped', than the order could not be cancelled automatically. An **alert** that the order was cancelled at Amazon is displayed at the order level, informing employees that the order needs to be reviewed. 

<img src={require("/img/alert-on-order-not-cancelled.png").default} height="" width="800" />

If the parcel has not left the warehouse yet, it could be cancelled manually. If the shipment is already on the way to the customer, shipment data should not be deleted. In this case to keep the data correct, we need to create credit rows and issue a credit invoice.

### Update cancelled order status to Amazon

To start using this functionality, enable it at Shop Settings > Amazon Shop Synchronization > Orders Integration > Export cancelled orders. Check [Setting up Amazon 3P shop synchronization in ShopCtrl](/docs/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-3P/index.md#2-setting-up-amazon-shop-synchronization-in-shopctrl) for more information. 

To cancel the order, change the order main status to **Cancelled** in ShopCtrl. Amazon order will be updated shortly with the cancellation reason **Cancelled by customer request**. 

## Order rows
An important part of the order details are the order rows:
<img src={require("/img/orders-orderrow-screenshot.png").default} height="" width="800" />

By selecting any order row, the modify buttons will be enabled:

<img src={require("/img/Order_row_select_3.gif").default} height="" width="800" />

* **Add**
  You can always insert new order rows to an existing order by clicking the ‘Add’ button.
* **Edit**
  Change / Modify an existing order row
* **Delete**
  If an order was not invoiced yet, you could delete order rows.
* **More**
<img src={require("/img/orders-orderrow-menu-more.png").default} height="" width="200" />
* **Add Credit row:**
In case the order has been finalized (invoice created), you can only change and update the order by inserting a credit row.
* **Split row**
If an order consists of multiple quantities and stock is insufficient, you can decide to split the row and create a back-order for the non-available items.
* **Copy row**
Duplicate an order row
* **Allocate stock**
Reserve and allocate stock in a selected warehouse for the applicable items.
* **De-Allocate Stock**
Undo and release a previously performed stock allocation
* **Fulfillment**
  * **Set Shippable.**  Mark an order row as shippable (again)
  * **Set Not Shippable.**  In case an order row cannot be shipped, mark it as ‘not shippable’. ShopCtrl will now avoid any logistic actions for this specific order row.

:::warning[Important]

If you remove or edit line items within an order, then Amazon, Shopify, and eBay stores will no longer sync with that order. If you change the status of this edited order in ShopCtrl, you will have to also manually perform the same task on the store.

:::

