---
sidebar_position: 3
slug: /docs/creating-dropshipment
---
# Creating Dropshipment 



:::info[Before you start]

Please make sure that the [Dropship Suppliers]/User-Guide/09-Purchasing/Suppliers/dropship-supplier.md settings are configured, and purchase prices are provided for the products. 

:::

## How to create a dropshipment parcel

1. Go to the **Sales > Order**.
2. Open the order that you would like your supplier to dropship.
3. Click **Fulfilment > Create shipment** in the top action menu.
4. A new shipment details page will open in a new tab.

<img src={require("/img/create-shipment-dropship.png").default} height="" width="800" />


5. In the **Ship from** pane, select the **Dropship** option. 
6. Select a **Supplier** from whom you would like to ship a parcel.
7. The products available for shipment from this supplier will be loaded in the **Goods to ship** pane. **Ship From** address will be updated with the address of your supplier warehouse unless a different is configured.
8. Click **Save** button to save the shipment, autogenerate the purchase order, shipping label, or even a packing slip if any were set, and email the supplier the needed documents.

You can check the purchase order created in the **Purchasing > Purchase Orders** section. The mail, along with the purchasing documents, will be attached to the sales order and purchase order.

The order allocation icon will identify that this particular product was dropshipped by the supplier to your customer.

<img src={require("/img/allocated-dropship-status-order-row.png").default} height="" width="800" />

The tracking numbers update can be configured through the webhooks system or directly through the carrier integration. 
