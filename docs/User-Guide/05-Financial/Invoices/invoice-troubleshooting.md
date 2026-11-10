---
sidebar_position: 10
slug: /docs/invoice-troubleshooting
description: "Fix common errors when creating or mailing invoices in ShopCtrl: order on hold, rows already invoiced, missing payment terms, invoice status, document or mail template."
---

# Invoice Troubleshooting

## Errors when creating an invoice

| Message | What to do |
|---|---|
| Unable to create an invoice for order '…'. The order is OnHold or Cancelled. | Change the order main status to an active status. See [Edit order](/User-Guide/04-Order-Management/02-Orders/edit-order.md). |
| All order rows are already invoiced. Unable to create a new invoice. | Nothing left to invoice. To correct an invoice, create a [credit invoice](/User-Guide/05-Financial/Invoices/credit-invoice.md). |
| Unable to determine default payment terms for a new invoice. Please configure default Payment terms for the shop. | Set default payment terms in the shop settings. |
| There is no default Main status configured for Invoices. | Configure a default invoice main status. |
| There is no template available to create the Invoice document. | Set a default invoice document template in the shop settings. See [Configure invoicing](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/configure-invoicing.md#set-the-default-invoice-templates). |

## Errors when deleting an invoice

| Message | What to do |
|---|---|
| Can't delete an invoice when it does not have the status New. | Change the invoice main status to **Draft** first. See [Delete an invoice](/User-Guide/05-Financial/Invoices/delete-invoice.md). |

## Errors when mailing invoices

| Message | What to do |
|---|---|
| Not created. No mailtemplate defined. | Set an invoice mail template for the shop or the customer. |
