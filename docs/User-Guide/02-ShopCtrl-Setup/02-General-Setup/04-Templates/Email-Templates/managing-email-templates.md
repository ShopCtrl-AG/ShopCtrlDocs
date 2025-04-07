---
sidebar_position: 5
slug: /docs/managing-email-templates
---

# Managing Email Templates

:::info[**Required permissions**]

An employee must be assigned to the Shop with a **Power User** role or higher to create and edit templates on a Shop Owner level.

:::

## How to manage email templates

To open the templates list, go to Configuration > Templates > Mail Templates.

![managing-mail-templates](/img/managing-mail-templates.png)

You can **Edit** and **Copy** existing templates, and **Add** new ones. Delete template by selecting a template row and clicking the **Delete** button.
:::warning[**Note:**]

The **delete** operation could not be undone. Please make sure not to delete templates that are used as merge fields.

:::
You can also **search** by template name and **filter** templates by kind and publication status. By default, the filter is set to be all published templates.

Double click on the template row to open the template for editing in a new tab.
You can now:

- Edit the template. Learn more in [Creating and Editing Email Templates](creating-and-editing-email-templates.md).
- Mark the **Publish** checkbox to make the template available for selection. Or hide system email templates from the normal flow of customer support by unpublishing them.
- Set an employees group for whom the template will be available for selecting manually.
- Change a Shop Owner or Shop for which the template will be used.

:::warning[**Note**]

The unpublishing of the template will remove the template from the list of available templates. But if the template was chosen for a particular document generation, it will remain in use.

:::

## How to set up email templates

You can set document templates on different levels:

| Addressed to            | Mail Kind                       | Level                                  | Path                                                                       |
| ----------------------- | ------------------------------- | -------------------------------------- | -------------------------------------------------------------------------- |
| For Customer (Default)  | General                         | Shop                                   | Shop details page > Topic menu > Communication > E-mail > E-mail templates |
| For Customer (Reply)    | General                         | Shop                                   | Shop details page > Topic menu > Communication > E-mail > E-mail templates |
| For Customer (Forward)  | General                         | Shop                                   | Shop details page > Topic menu > Communication > E-mail > E-mail templates |
| Generic                 | NonCustomer                     | Shop                                   | Shop details page > Topic menu > Communication > E-mail > E-mail templates |
| For Customer            | Offer                           | Shop                                   | Shop details page > Topic menu > Communication > E-mail > E-mail templates |
| For Customer            | Order                           | -                                      | Can select manually, use for trigger actions and bulk operations           |
| For Customer            | Invoice                         | Shop                                   | Shop Details Page > Topic Menu > Financial > Invoice                       |
| For Customer            | Invoice                         | Customer <br /> (overrides Shop)       | Customer Details Page > Topic Menu > General Info                          |
| For Customer            | Credit Invoice                  | Shop                                   | Shop Details Page > Topic Menu > Financial > Invoice                       |
| For Customer            | Invoice Reminder 1              | Shop                                   | Shop Details Page > Topic Menu > Financial > Invoice                       |
| For Customer            | Invoice Reminder 2              | Shop                                   | Shop Details Page > Topic Menu > Financial > Invoice                       |
| For Customer            | Invoice Reminder 3              | Shop                                   | Shop Details Page > Topic Menu > Financial > Invoice                       |
| For Customer            | Pre Expiration Invoice Reminder | Shop                                   | Shop Details Page > Topic Menu > Financial > Invoice                       |
| For Customer            | After Expiration Invoice Mail   | Shop                                   | Shop Details Page > Topic Menu > Financial > Invoice                       |
| For Customer            | Order Shipment                  | Carrier                                | Configuration > Transport > Carrier Account Details Page                   |
| For Customer            | Service Contract                | -                                      | Available for selection on Service Contract Details Page                   |
| For Customer            | Order Return                    | -                                      | Can select manually, use for trigger actions and bulk operations           |
| For Supplier            | Purchase Order                  | Shop Owner                             | Shop Owner Details Page > Topic Menu > Purchasing                          |
| For Supplier            | Purchase Order                  | Supplier <br /> (overrides Shop Owner) | Supplier Details Page > Topic Menu > Purchasing                            |
| For Supplier (Dropship) | Purchase order                  | Shop                                   | Shop details page > Topic menu > Communication > E-mail > E-mail templates |
| For Supplier (Dropship) | Purchase order                  | Supplier <br /> (overrides Shop)       | Supplier Details Page > Topic Menu > Dropship                              |
| For Supplier            | Stock Confirm                   | -                                      | Available for selection only whithin a specific Stock Confirm module       |
