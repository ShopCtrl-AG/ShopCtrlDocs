---
sidebar_position: 5
slug: /docs/managing-document-templates
---

# Managing Document Templates

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Admin** or **Shop Owner Admin** role to perform actions referred to in this article.

:::

## How to manage document templates

To open the templates list go to **Configuration > Templates > Document Templates**.

![managing-document-templates](/img/managing-document-templates.png)

You can **Edit** and **Copy** existing templates, and **Add** new ones. Delete template by selecting a template row and clicking the **Delete** button.
:::warning[**Note:**]

The **delete** operation could not be undone.

:::
You can also **search** by template name and **filter** templates by type.

Double click on the template row to open the template for editing in a new tab.
You can now:

- Edit the template. Learn more in [Creating and Editing document templates](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/creating-and-editing-document-templates.md).
- Mark the **Publish** checkbox to make a template available for selecting.
- Change a **Shop Owner** or **Shop** for which a template will be used

:::warning[**Note**]

The unpublishing of the template will remove the template from the list of available templates. But if the template was chosen for a particular document generation, it will remain in use.

:::

## How to set up document templates

You can set document templates on different levels:
| Document Template Type | Level | Path |
| --- | --- | --- |
| Invoice <br /> Vat Free Invoice | Shop | Shop Details Page > Topic Menu > Financial > Invoice |
| Invoice <br /> Vat Free Invoice | Customer <br />(overrides Shop) | Customer Details Page > Topic Menu > General Info |
| Reminder1st | Shop | Shop Details Page > Topic Menu > Financial > Invoice |
| Reminder2nd | Shop | Shop Details Page > Topic Menu > Financial > Invoice |
| Reminder3rd | Shop | Shop Details Page > Topic Menu > Financial > Invoice |
| Credit Invoice | Shop | Shop Details Page > Topic Menu > Financial > Invoice |
| Offer | Shop | Shop Details Page > Topic Menu > Document Templates |
| Order | Shop | Generate document via trigger. Manually create document from Orders grid > More > Create document |
| Picklist | Shop | Shop Details Page > Topic Menu > Document Templates |
| Packing Slip | Shop | Shop Details Page > Topic Menu > Document Templates |
| Return Form | Shop | Shop Details Page > Topic Menu > Returns |
| Purchase Order | Shop Owner | Shop Owner Details Page > Topic Menu > Purchasing |
| Purchase Order | Supplier <br />(overrides Shop Owner) | Supplier Details Page > Topic Menu > Purchasing |
| Dropship Purchase Order | Shop | Shop Details Page > Topic Menu > Document Templates |
| Shipping Label | Carrier | Configuration > Transport > Carrier Account Details Page |
| Product Label | Shop Owner | Shop Owner Details Page > Topic Menu >Warehouse Settings |
| Product Label | Product <br />(overrides Shop Owner) | Product Details Page > Topic Menu > Stock > Stock Settings |
| Stock Item Label | Shop Owner | Shop Owner Details Page > Topic Menu > Warehouse Settings |
| Warehouse Location Label | Shop Owner | Shop Owner Details Page > Topic Menu > Warehouse Settings |
