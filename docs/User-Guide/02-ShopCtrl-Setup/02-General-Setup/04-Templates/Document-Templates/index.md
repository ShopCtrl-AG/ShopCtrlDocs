---
slug: /docs/document-templates
---

# Document Templates

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Admin** or **Shop Owner Admin** role to perform actions referred to in this article.

:::

## Overview

The **Document Template** is a Word document file formatted according to your needs and auto-populated with **Merge Fields** provided by ShopCtrl.
Both the text, formatting, and images, along with the merge fields replaced by the actual data, will be reproduced by ShopCtrl each time the document will be generated.

When generating the file, ShopCtrl will automatically retrieve the information from the database and replace the placeholders with actual data, taking into consideration the rules and formatting applied to the Word file.

Use **Document Templates** to create customized documents depending on your customer's or partner's needs.
See [Creating and Editing Document Templates](./creating-and-editing-document-templates.md), [Merge Fields](./merge-fields-in-document-templates.md), [Collections](./collections-in-document-templates.md) and [Conditions](./conditions-in-document-templates.md) for more information.

## Types of document templates

Available **Document Template** types:

| Template Name          | ShopCtrl Entity    | Description                                                  |
| ---------------------- | ------------------ | ------------------------------------------------------------ |
| Invoice                | Invoice            | VAT included invoice                                         |
| VatFreeInvoice         | Invoice            | VAT-free invoice                                             |
| Credit Invoice         | Invoice            | Document detailing a refund to previously issued Invoice     |
| Reminder1st            | Invoice            | Used for setting automatic reminders                         |
| Reminder2nd            | Invoice            | Used for setting automatic reminders                         |
| Reminder3rd            | Invoice            | Used for setting automatic reminders                         |
| Offer                  | Offer              | Offer document template                                      |
| Order                  | Sales Order        | Sales order document template                                |
| PackingSlip            | Order Shipment     | Packing slip template generated for the sales order shipment |
| PickList               | Order Shipment     | Picking list generated for the warehouse department          |
| ShippingLabel          | Order Shipment     | Shipping label template                                      |
| PurchaseOrder          | Purchase Order     | Purchase order document generated for the supplier           |
| ReturnForm             | Return             | A template for the return form                               |
| ProductLabel           | Product            | Product barcode label                                        |
| StockItemLabel         | Stock Item         | Stock Item barcode label                                     |
| WarehouseLocationLabel | Warehouse location | Warehouse location barcode label                             |
| Undefined              | Free to use        | Undefined                                                    |
