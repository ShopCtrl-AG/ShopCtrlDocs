---
sidebar_position: 2
slug: /docs/amazon-1p-orders-acknowledgement
---

# Amazon 1P Orders Acknowledgement 


Acknowledgment of Amazon 1P vendor central orders is an essential initial step in ShopCtrl workflow. It entails the confirmation of receipt and acceptance of purchase orders issued by Amazon through their Vendor Central platform. 
This acknowledgment is crucial as it indicates the seller's commitment to fulfilling the order within the specified terms and conditions outlined in the purchase order. Once acknowledged, the order can proceed through the fulfillment process, including packing, and shipping, ensuring timely delivery to the Amazon fulfillment center.

As per [Amazon's recommendation](https://developer-docs.amazon.com/sp-api/docs/vendor-retail-procurement-apis-v1-use-case-guide#submitacknowledgement), it is advisable to send the acknowledgment as soon as possible: 
> Amazon expects you to submit the acknowledgement as fast as possible; within 24 hours at the latest. The acknowledgement should be an accurate view of the actual shipment quantities and dates.

## Automatic order acknowledgement
ShopCtrl provides several ways to automatic order acknowledgement. It varies based on the type of the incoming order.

### Bulk Buy Orders acknowledgement

Bulk Buy orders are automatically acknowledged in full once they are identified and mapped to corresponding completed Bulk Buy offers.

Any changes that occur after picking the Bulk Buy offer are communicated to Amazon after the pick file is processed, triggering automatic re-acknowledgment.

To ensure accuracy and prevent incomplete bulk buy offers from participating in the auto-acknowledgment process, ShopCtrl does not map orders to bulk buy offers that are not completed. Only completed bulk buy offers are eligible for mapping and subsequent auto-acknowledgment of corresponding orders.

### Weekly orders acknowledgement

Weekly orders are auto-acknowledged after the order pick file from an external Warehouse Management System (WMS) is processed by ShopCtrl. The [Pick integration](/docs/User-Guide/02-ShopCtrl-Setup/05-Fulfillment/integration-with-wms-via-ftp.md) aims to correct order row quantities to the amount available for shipping and acknowledge the order to Amazon.

After processing the Pick file, order row quantities are corrected to match the quantities in the Pick file.
Credit rows are created for quantities that cannot be fulfilled, and quantity excess is not allowed.

<img src={require("/img/credited-order-rows-1p-acknowledgement.png").default} height="" width="800" />

If the product quantity is not set in the file, it's lowered to 0 and sent to Amazon with the 'TemporarilyUnavailable' reject reason to ensure the product remains in the Amazon catalog.

 In the case of errors during the processing of the order pick file, such as excess quantities, ShopCtrl generates an alert on the order. This alert serves to draw attention to the discrepancy and notify relevant employees that the order was picked with more quantity than expected.

<img src={require("/img/excess-qty-acknowledgement.png").default} height="" width="800" />

Automatic Shipment Creation: As part of the WMS integration, ShopCtrl offers the option to create shipments automatically upon processing the pick file. The order should be allocated by the moment shipment is created.
Allocation and shipment creation processes can also be managed by [triggers](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/index.md), allowing for customization based on internal processes and requirements.

Both shipment creation and also deletion of previously created shipment on reacknowledgement are configured on warehouse level.  Please check Picking configuration. [Integration with WMS via FTP](/docs/User-Guide/02-ShopCtrl-Setup/05-Fulfillment/integration-with-wms-via-ftp.md#shopctrl-warehouse-integration-configuration)


### Undefined orders acknowledgement

In the case of undefined orders, they can still be acknowledged after the pick file is processed, or manually at any point in the order workflow process by an employee. If adjustments are made to the order to resolve differences that prevented automatic mapping, and the order can be manually mapped to the bulk buy offer, the next step involves manually sending an acknowledgment to Amazon without waiting for the picking process to be completed. 

### Re-acknowledgment of Orders:

ShopCtrl allows for re-acknowledgment of orders after the initial acknowledgment, particularly when quantities have been changed. Subsequent pick files for the same order are treated as re-acknowledgment requests. 
Please note, that only lower quantities than those already acknowledged can be submitted.

## Manual order acknowledgement

This part of the process can be done manually - from the order details. Please note that all of the quantities in the order will be acknowledged, except the credited ones.
So to manually lower the quantity of the order row, you need to add a credit row to it and specify the rejected quantity.
This is done to keep track of how much was requested and how much is being sent.
If after manual avaluation, all the corrections were made to the order, proceed to acknowledgment:

1. Login in as an employee with permission to acknowledge the 1P orders.
2. Locate and open the order that requires acknowledgement.
3. Review the order quantities and ensure accuracy. Create credit rows for products that cannot be fulfilled and need to be rejected, specifying the rejected quantity.
4. If any adjustments were made, **save** the order.
5. Proceed to the Topic > Amazon 1P > General tab.
6. Click on the **Accept** button to send the acknowledgement to Amazon. 
7. Confirm the action when prompted. The acknowledgment status changes to 'In progress.'

The acknowledgement is sent to Amazon in the background through scheduled sync requests. Once submitted, the status changes to 'Submitted,' and buttons are disabled to prevent double submissions.
After receiving a response from Amazon, the status updates to either 'Success' or 'Error.' Check alerts for detailed information about any issues encountered.

<img src={require("/img/manual-acknowledge-order.png").default} height="" width="800" />

**Manually reject order**

Additionally, there's an option to manually **reject** the entire order if none of the products are available. This action credits all order rows and sends an acknowledgment with the 'temporarily unavailable' reason to Amazon for all items in the order.

These manual acknowledgment procedures offer flexibility and control over the acknowledgment process, ensuring accurate handling of orders and communication with Amazon regarding fulfillment status.

After the acknowledgment process is completed, the next step in the fulfillment process involves packing and shipping the products to the designated Amazon fulfillment center - [Amazon 1P Group Shipment](./amazon-1p-group-shipment.md)






