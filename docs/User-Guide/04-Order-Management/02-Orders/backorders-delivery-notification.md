---
sidebar_position: 7
slug: /docs/backorders-delivery-notification
---

# Backorders Delivery Notification


Backorder customers could be notified about the change in the arrival of their products with a semi-automated process.

Once a purchase order is created for the backorder product(s) and expected delivery set, the subsequent changes of the backorder and purchase order will be registered.

Expected delivery date changes of the purchase order are registered per purchase order and supplier. And the records of all affected backorders are displayed on the **Fulfillment > Orders delivery date changes** page.

<img src={require("/img/orders-delivery-date-changes.png").default} height="" width="800" />

From this page, employees could update customers about the new products' availability dates using mail templates with corresponding order delivery dates auto-populated via merge fields.

The updated order expected delivery date could be communicated to the customer via a merge field. This date is calculated by adding a workdays offset (number of working days that are needed to deliver the order) to the changed purchase order date delivery of the backorder product. This offset is configured per shop.

The delivery of the purchase order that is being delayed should be updated with the new expected delivery date.
The record of the expected delivery date changes of the purchase order is registered both for the purchase order and the supplier. It could be viewed from the **Delivery date changes** tab. Supplier statistics could be analyzed later through a report.

<img src={require("/img/delivery-date-changes.png").default} height="" width="800" />


## Customer notification mail template set up

You can create a universal mail template to be used across all shops to notify customers about the backorder expected delivery date change.

A number of merge fields could be used for creating a mail template. 
```
$$Order.ExpectedDeliveryDate$$
$$Order.ExpectedDeliveryWeek$$
```
These dates are calculated by adding a **delivery offset** in working days that is manually set on the shop to the updated date when the product is arriving at the warehouse. 

The offset is configured per shop:
**Shop settings > Delivery workdays offset in days** - a number of business days it usually takes to process, ship, and deliver the sales order.


There is also a number of merge fields that are part of the Order row collection. Through these merge fields, we could clearly identify which product's expected delivery date has changed.

```
$$OrderRow.ExpectedDeliveryDate$$
$$OrderRow.ExpectedDeliveryDateChange$$
$$OrderRow.ExpectedDeliveryDateStatusEnumValue$$
$$OrderRow.ExpectedDeliveryWeek$$
$$OrderRow.PreviousExpectedDeliveryDate$$
```

For the full list of order expected delivery date change merge fields, please visit [List of merge fields Order expected delivery date change](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md#order-expected-delivery-date-change). Or use the available merge fields button on the template details page to retrieve the dynamically generated merge fields list for the specific order.

The template that will be used for notifying customers on the orders delivery date changes page could be configured on the shop settings page:
**Shop settings > Expected delivery date notification**
Use the arrow at the end of the field to choose the area of ShopCtrl on which the setting will apply: shop, shop group, or shop owner.

<img src={require("/img/shop-settings-expected-delivery-date-notification-and-offset.png").default} height="" width="800" />


## Managing order's delivery date changes

All the backorders that are waiting for a delivery of the purchase order and were affected by the changes of the purchase order(s), could be viewed from the **Fulfillment > Orders delivery date changes**.

<img src={require("/img/orders-delivery-date-changes.png").default} height="" width="800" />

The list could be filtered by status:

* Later - orders whose delivery is postponed
* Earlier - orders which deliveries arrive earlier than expected
* Undetermined - intermediate status during the transition period when the date cannot be calculated due to the lack of data

Select order(s) and click the **Send mail** button to notify customers using a template set on the corresponding shops.
You can also use a custom order kind template by clicking on the **Send customer mail** button and selecting a template from the list. You can use custom templates only for the selection of orders from the same shop.

**Mark not changed** button removes the record about the backorder delivery change from this list. 
