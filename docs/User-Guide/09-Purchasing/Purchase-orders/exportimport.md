---
sidebar_position: 7
slug: /docs/exportimport
---

# Export/Import 


The export feature enables to export of the filtered purchase orders table into an Excel document. 
<img src={require("/img/PO_overview_06.png").default} height="" width="" />

| Action | Description |
| --- | --- |
| Export current page | Exports the first page of the filtered purchase orders. The number is based on the number of orders per page and could be defined in the footer menu |
| Export selection | Exports all selected purchase orders |
| Export All | Exports all filtered purchase orders |

Selecting one of the menu items prompts a **Save As** window to specify the name and destination where you want your file to be saved.

The orders will be saved in **.xlsx** format.

Here is a list of columns that will be exported:

| Column name | Description |
| --- | --- |
| Code | Purchase order code |
| SalesOrderCode | Sales order code (for dropship and back-to-back PO) |
| Date | Date the PO was created. |
| OurReference | Displays a reference. For back-to-back and dropship orders, the sales order code will be displayed here as well. |
| Supplier Company | Displays the supplier's company name and the supplier's full name in parentheses |
| Order Total | Total amount of the purchase order in a currency selected for the purchase order |
| Base Order Total | Total amount of the purchase order in shop owner currency |
| ExpectedDeliveryDate | Displays an expected delivery date if one was set for the PO |
| Supplier Name | Displays the supplier's full name |
| Currency | Currency of the purchase order |
| Shop | Displays a shop the purchase order is linked to |
| Main Status | The main status of the specific purchase order |
| Submit Status | Indicates whether the purchase order was sent to the supplier |
| Provision Status | Provision status of the particular purchase order. |
| Payment Status | Payment status of the particular purchase order |
| Main Status Action Date | The date a purchase order main status was changed |
| Submit Status Action Date | The date a purchase order submit status was changed |
| Provision Status Action Date | The date a purchase order provision status was changed |
| Payment Status Action Date | The date a purchase order payment status was changed |
| Type | The type of the purchase order |


## Import
ShopCtrl supports the option of creating purchase orders via API. Please see the API documentation for more details.