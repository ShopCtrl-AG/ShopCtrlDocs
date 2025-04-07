---
sidebar_position: 10
slug: /docs/warehouses
---
# Warehouses 



<img src={require("/img/Warehouses-overview.png").default} height="" width="800" />

## Warehouses Overview
There are several supported types of Warehouses in ShopCtrl:
* Private
* Fulfilment
* Suppliers:
    * Supplier
    * Dropship

The warehouse billing and shipping addresses are specified on the warehouse details page. It will be used for autogenerating documents and shipping labels. 
You can also set the priority of the warehouse that will be taken into account while allocating products kept at different warehouses.

### Private type warehouse
**Private** type is your warehouse, where you store your goods, receive and provision stock items, and pack and ship orders from. The private warehouse supports an inventory control system, creating locations and pinpointing where the product is stored down to the bin on the shelf.
It is also possible to enlarge its functionality by enabling the [Advanced Warehouse]/User-Guide/09-Purchasing/advanced-warehouse.md option, which will make each of the stock items unique for inventory control.

#### Location types
The default is a **Pick** type location, where you can store, allocate and pick your products. You can break it down by aisle, bay, shelf, and bin.

But you can also create a **Bulk** type locations to store any amount of products for later use. This stock won't be allocated automatically for the sales orders, but the allocation system will indicate that there is some free stock not possible to pick. To use the stock for the sales orders, you will need to move it to the pick-type location.

**Quarantine** type locations are mainly used to store products returned to the warehouse from the customers and need evaluation. The stock quantity ignores quarantine locations, and it is impossible to allocate the products kept at these locations. 
To return the product to the normal allocation flow, please move it to one of the pick-type locations.

**Purchase Order** location type is a system type location used to keep a record of arriving purchase products and predict product quantity change on a stock level.

### Fulfilment type warehouse
**Fulfilment**  - integration with a third-party fulfillment center. You can also monitor the stock levels in real-time and dispatch the orders through carriers connected. 

ShopCtrl provides a number of integrations with different Warehouse Management Systems, like:

| Warehouse Management System | WMS Type |
| --- | --- |
| Landis (US) | Veracore |
| Pacific Mountain Logistics (US) | 3PL Central |
| Seacon Logistics (NL) | Custom |
| B2C Europe (NL, DE) | Custom |
| Arvato (DE) | SAP Lite |
| FAR Group (CN) | Custom |
| DocData (NL) | Custom |

### Supplier warehouses
Apart from your stock, ShopCtrl also offers to monitor the inventory of your supplier's warehouses.
ShopCtrl supports two types of warehouses that could be linked to the supplier: 

**Supplier** - this type of warehouse is used to synchronize with your suppliers and monitor the stock levels of their warehouses within ShopCtrl. You can set up a regular stock import from the supplier WMS to have a clear picture of products availability.

**Dropship** - partially replicates the functionality of the supplier type warehouse but is used for allocating dropship orders from your supplier's warehouse. 
Dropship warehouse is created automatically when supplier settings indicate that the supplier has a dropship option.

You can connect carrier accounts to any supplier warehouses to create shipments and all the corresponding documents and send them to your supplier ready to use.

The stock kept on both of the warehouses is accumulated on the Product management > Stock Overview.
The product stock levels on all of the warehouses are visible from Product > Stock > Supplier Stock.
