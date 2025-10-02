---
sidebar_position: 3
slug: /docs/setting-up-dropship-fulfillment
---

# Setting up Dropship Fulfillment

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::
 Dropshipping process suggests that supplier ships orders directly to your customer on behalf of your company. Dropshipping flow can be set in parallel with your regular fulfillment flows and wholesale purchasing process.
In ShopCtrl, when creating dropshipment for the order, a purchase order is created along with the purchase order document, picking and packing lists. You can set up carrier accounts that will generate shipping labels for the dropship parcels. All of these documents are forwarded directly to the supplier, the moment the parcel is created. 
Unlike regular and back-to-back purchase orders, dropship purchase orders are linked to the shop the sales order came from, and not to the general shop for purchasing. This gives us the opportunity to manage the documents and even shipping labels, created for the dropshipments the same way as if they were shipped from your warehouse.

To set up dropshipment fulfillment, please follow these steps:

### Step 1. Create dropship suppliers.

The first step will be to create suppliers and configure the suppliers dropship settings.
Please follow the steps in this article to transform your regular suppliers into a dropship supplier, or create new dropship suppliers: Create [dropship suppliers](/User-Guide/09-Purchasing/Suppliers/dropship-supplier.md).

### Step 2. Create and set purchase document templates.

To create a **Dropship purchase order template**, please check [Creating and Editing Document Templates](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/creating-and-editing-document-templates.md) for more information. 
You can also design shop-specific packing slips and picklist templates to be sent along with the purchase order to the supplier.

Dropship purchase order document templates are configured on shop and supplier levels.

On the **Shop** level: Shop Details Page > Document templates

- Dropship purchase order template
- Packing slip
- Picklist

On **Supplier** level: Supplier Details Page > Purchasing > Purchase order template.

### Step 3. Set email templates

To get more information about how to create supplier-specific dropship mail templates please see [Creating and editing email templates](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/creating-and-editing-email-templates.md).

The default purchase order mail template that is configured on a shopowner level, could also be used as a dropship purchase order template. 
To change the template, please go to:
Shop Owner Details Page > Purchasing > Default purchase order mail template

This template is used when sending dropship purchase orders, if a custom template is not specified for a supplier.

To set the supplier specific dropship purchase order mail template, go to Supplier Details Page > Dropship > Dropship purchase order mail template.

### Step 4. Decide on warehouse priority and allocation rules

The allocation of the dropshipment orders is performed based on the priority of the dropship warehouses configured for a shop. Unlike the regular purchase order flow, supplier priority set on a product is not taken into account in this case.
If a product is dropshipped by different suppliers, and both warehouses are available for a shop, a supplier whose warehouse has a higher priority will receive the order.
Please set a priority of the corresponding dropship warehouses on the **Shop details page > Warehouses page**.

![dropship-warehouse-priority](/img/dropship-warehouse-priority.png)

If you have your **auto-allocation** flows set up, and would like dropship orders to be automatically allocated as well, please enable this setting on Shop Owner Details Page > Fulfillment > Allocation settings:
**Automatically allocate orders for dropshipments:** ✅

### Step 5. Create and configure carrier accounts for dropship suppliers

This step is optional. But if you would like to generate a shipping label and send it, along with the other purchase order documents to your supplier, create and configure carrier accounts to be used for your dropship orders. 
Please check [Carriers]/User-Guide/07-Fulfillment/Carriers/index.md for more information about available carriers integrations and ways to determine the best carrier to ship the parcel.

### Step 6. Create and publish products

To update suppliers purchase product prices, we first need to create products in ShopCtrl that will be offered for dropshipment only. Do not publish those products, until the purchase prices are specified.
To import purchase prices in bulk, you could use [Import Supplier Products](User-Guide/09-Purchasing/Suppliers/import-supplier-products.md#initial-import-of-supplier-purchase-products) feature.

You can also track your suppliers inventory by setting scheduled stock level imports. Please check [How to import supplier stock levels](/User-Guide/09-Purchasing/Suppliers/import-supplier-products.md#how-to-import-supplier-stock-levels) for more information.

After products offered for dropshipment have one or more supplier purchase prices specified, you can publish products on your sales channels. The distribution of dropship orders between different suppliers will be determined by the priority of the dropship warehouse for the specific shop.

To guarantee the flows are set correctly, [create test dropshipment](/User-Guide/07-Fulfillment/creating-dropshipment.md) orders for several products.
