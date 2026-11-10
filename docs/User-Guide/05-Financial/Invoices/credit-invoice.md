---
sidebar_position: 7
slug: /docs/credit-invoice
description: "Create a credit invoice in ShopCtrl to cancel a previous invoice in full or in part — for refunds, returns, invoice errors or invoices issued by mistake."
---

# Credit Invoice

A credit invoice (credit note) cancels a previous invoice in full or in part. Use it when:

* The customer returns products and asks for a refund
* The customer gets a partial refund
* The amount on the original invoice is wrong
* The invoice was issued by mistake

To replace a wrong invoice with a correct one, see [Correct a wrong invoice](/User-Guide/05-Financial/Invoices/correct-wrong-invoice.md).

A credit invoice can also be created automatically when you [process a return](/User-Guide/07-Fulfillment/Returns/manage-returns.md#creating-return). The return reason is then used as the credit reason.

:::info[**Required Permissions**]

An employee needs the **Add Invoices** permission. See [Manage roles and permissions](/User-Guide/02-ShopCtrl-Setup/01-Authentication-and-Employee-Management/02-Roles-and-Permissions/manage-roles-and-permissions.md).

:::

## Create a credit invoice from the invoices table

1. Open the **Sales > Invoices** tab.
2. Select the invoice that needs to be credited.
3. Click **More > Create credit invoice**.
<img src={require("/img/create-credit-invoice-from-invoices-table.png").default} height="" width="800" />
4. The credit invoice details page opens in a new tab. If needed, assign or edit the **Invoice code**.
<img src={require("/img/create-credit-invoice.png").default} height="" width="800" />
5. Click **Save and close**. To also email the credit invoice to the customer, select **Save, close & mail** on the **Save and close** button.

The credit invoice PDF is generated and attached to the credit invoice and to the order.

## Create a credit invoice from the order details page

1. Open the order from the **Sales > Orders** table.
2. In the **Topics** section of the order details page, open **Invoices**.
3. Select the invoice and click **Create credit invoice**.
<img src={require("/img/create-credit-invoice-from-order-details.png").default} height="" width="800" />
4. In the popup window, select the **Reason** for the credit.
5. Select **Create credit invoice** and choose the status of the credit invoice:
    * **Draft** — the credit invoice is created without an invoice code
    * **Open** — the credit invoice gets an invoice code automatically

   <img src={require("/img/credit-invoice-popup.png").default} height="" width="400" />

6. Click **Create**.

If you created a draft credit invoice, assign an invoice code by changing its status to **Open**. Then send the credit invoice to the customer.

## Related articles

* [Credit invoice settings](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/configure-invoicing.md#credit-invoice-settings) — credit invoice template, credit reasons and shipping costs
* [Correct a wrong invoice](/User-Guide/05-Financial/Invoices/correct-wrong-invoice.md)
* [Manage returns](/User-Guide/07-Fulfillment/Returns/manage-returns.md)
