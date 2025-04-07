---
sidebar_position: 2
slug: /docs/issuing-free-replacement
---
# Issuing Free Replacement 


This article describes a scenario when a product ordered was damaged during transit and a replacement needs to be sent to a customer. Providing that the buyer can keep the product. 

## How to issue a free replacement to a customer

After receiving a notice from a customer, that an item was damaged, we need to follow several steps:

1. Go to **Sales > Orders**, locate and open an order for which you need to send a substitute.
2. On the order details page products pane click **Add**.
3. Find and select a product that needs to be sent.
<img src={require("/img/add-product-zero-price.png").default} height="" width="400" />
4. Adjust product quantity.
5. Change product price to 0.00 (supposing the replacement is free of charge).
6. **Save** the order to apply changes.
7. (Optional) Depending on your allocation settings, you might need to allocate the order row manually. For this, select the newly added order row, and click **More > Allocate stock** on the products pane.
<img src={require("/img/allocate-new-order-row.png").default} height="" width="800" />
8. To create a new shipment for the replacement product: 
  1. Click **Fulfillment > Create Shipment**.
  2. Change the **Carrier** if needed.
  3. **Save** the shipment. A new label will be auto-generated and linked to the parcel created.
<img src={require("/img/create-shipment-replacement.png").default} height="" width="800" />

      4. Proceed with picking, packing and shipping the parcel.
9. Communicate the new tracking number to the customer. 

   
