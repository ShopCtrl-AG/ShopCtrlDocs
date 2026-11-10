---
sidebar_position: 6
slug: /docs/delete-invoice
description: "Delete an invoice in ShopCtrl: only invoices in Draft status can be deleted. The order rows become available for a new invoice."
---

# Delete an Invoice

You can delete an invoice that was created by mistake, as long as it has the **Draft** main status. After you delete it, the order rows are no longer invoiced, so you can create a new invoice for them.

:::info[**Required Permissions**]

An employee needs the **Delete Invoices** permission. If the invoice was already exported to your accounting system, only an admin can delete it. See [Manage roles and permissions](/User-Guide/02-ShopCtrl-Setup/01-Authentication-and-Employee-Management/02-Roles-and-Permissions/manage-roles-and-permissions.md).

:::

## Delete an invoice

1. Open the invoice from the **Sales > Invoices** table.
2. If the invoice is not a draft, change the main status to **Draft** and click **Save**. See [Invoice statuses](/User-Guide/05-Financial/Invoices/invoice-statuses.md).
3. Click **Delete** in the top actions menu.
   <img src={require("/img/delete-invoice-button.png").default} height="" width="800" />
4. Click **OK** to confirm.

The invoice is removed from the invoices table, and its PDF is archived. The order rows of the invoice are available again for a new invoice.

:::warning[Please note]

* Only **Draft** invoices can be deleted. For other invoices you get the message *Can't delete an invoice when it does not have the status New.*
* If the invoice already has an invoice number, deleting it leaves a gap in your invoice numbering. To fill the gap, note the number before you delete the invoice. When you create the next invoice, enter this number manually in the **Invoice code** field before you save it. The number of a deleted invoice can be reused.
* If the invoice was already sent to the customer, do not delete it. [Correct the invoice](/User-Guide/05-Financial/Invoices/correct-wrong-invoice.md) with a credit invoice instead.

:::

## Related articles

* [Create invoices](/User-Guide/05-Financial/Invoices/create-invoices.md)
* [Credit invoice](/User-Guide/05-Financial/Invoices/credit-invoice.md)
