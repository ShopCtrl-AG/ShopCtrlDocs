---
sidebar_position: 2
slug: /docs/create-invoices
description: "Create invoices for orders in ShopCtrl: from the order details page, for a shipment, in bulk from the orders table, or automatically with triggers."
---

# Create Invoices

In ShopCtrl, every invoice is based on an order. You can create an invoice in the following ways:

* **Manually** from the order details page — with full control over which order rows are included
* **In one click** from the order details page, using **Auto create**
* **For a shipment** — to invoice only what was shipped
* **In bulk** for a selection of orders from the orders table
* **Automatically** with a [trigger](#create-invoices-automatically-with-triggers), for example when an order is added or shipped

:::info[**Required Permissions**]

To create invoices, an employee needs the **Add Invoice** permission for **Orders** and the **Add Invoices** permission for **Invoices**. See [Manage roles and permissions](/User-Guide/02-ShopCtrl-Setup/01-Authentication-and-Employee-Management/02-Roles-and-Permissions/manage-roles-and-permissions.md).

:::

A new invoice includes all order rows that are not invoiced yet, unless you select specific rows or a shipment. To learn what goes into an invoice and what happens after it is created, see [How invoicing works](/User-Guide/05-Financial/Invoices/how-invoicing-works.md).

## Create an invoice from the order details page

Use this option when you want to check or change the invoice before saving it, for example to select specific order rows or set a different invoice date.

1. Open the **Sales > Orders** tab and double-click the order.
2. In the top actions menu, click **Add invoice**. If the order has unsaved changes, ShopCtrl saves them first — click **OK** to continue.
   <img src={require("/img/create-invoice-button-order-details.png").default} height="" width="800" />
3. A new invoice details page opens in a new tab. The invoice is not saved yet.
   <img src={require("/img/manually-create-invoice-new-invoice-details.png").default} height="" width="800" />
4. Check the **Invoice rows**. Use the checkboxes in the first column to add or remove order rows. In the **Select rows** list you can choose:
    * **Not invoiced order rows** — all rows that are not invoiced yet
    * **Shipment: [shipment code]** — only the rows of that shipment
5. If needed, change the invoice details: **Invoice date**, **Payment type**, **Payment terms**, **Customer reference**. To use a specific invoice number instead of the next number in the range — for example, to fill a gap left by a [deleted invoice](/User-Guide/05-Financial/Invoices/delete-invoice.md) — enter it in the **Invoice code** field.
6. Save the invoice using one of the options on the **Save and close** button:

   <img src={require("/img/create-manual-invoice-save-and-close-buttons.png").default} height="" width="400" />
    * **Save and close** / **Save**
    * **Save, close & print** — opens the invoice PDF for printing
    * **Save, close & mail** — opens a new email to the customer with the invoice attached

The invoice number is assigned and the invoice PDF is generated from your invoice [document template](/User-Guide/05-Financial/Invoices/how-invoicing-works.md#the-invoice-document) when the invoice is saved.

### Auto create an invoice

To create and save an invoice for all rows not yet invoiced in one click:

1. Open the order details page.
2. Click the arrow next to **Add invoice** and select **Auto create**.
   <img src={require("/img/auto-create-invoice-button-order-details.png").default} height="" width="800" />
3. Click **OK** to confirm. The order is saved, the invoice is created, and the page is refreshed.

The new invoice appears under **Invoices** in the **Topics** section of the order details page. It is not sent to the customer automatically.

## Create an invoice for a shipment

To invoice only the items that were shipped:

1. Open the shipment from the **Shipments** table, or from the **Shipments** tab of the order details page.
2. Click **Create invoice**.
   <img src={require("/img/create-invoice-from-shipment-button.png").default} height="" width="800" />
3. A new invoice details page opens with the rows of this shipment selected. Order rows that are not shipped by nature (for example, services) are also included.
4. Check the invoice and click **Save and close**.

The **Create invoice** button is not available when all rows of the shipment are already invoiced or when the order is on hold.

## Create invoices in bulk

To create invoices for several orders at once:

1. Open the **Sales > Orders** tab.
2. Select or [filter](/User-Guide/04-Order-Management/02-Orders/orders-introduction.md#filtering-orders) the orders. Tip: filter on **Not invoiced** to see only orders without an invoice.
3. In the **Actions** menu, click **More > Create invoice**.
   <img src={require("/img/create-invoices-in-bulk-button.png").default} height="" width="800" />
4. The **Create invoices** window opens and shows the status of each order:
    * **Ready to create invoice**
    * **Order partially invoiced.** — an invoice is created for the remaining rows
    * **Order already invoiced.** — the order is skipped
    * **The Order is not active** / **The Order has no rows** — the order is skipped

   <img src={require("/img/create-invoices-in-bulk.png").default} height="" width="600" />
5. Click one of the buttons:
    * **Create invoices** — creates the invoices
    * **Create invoices and mail** — creates the invoices and emails each one to the customer
6. Follow the progress in the **Message** column. Click **Stop** to interrupt the process.
7. When it is finished, the **Message** column shows **Invoice created.** for each invoiced order. Click **Pdf** to open all created invoices.
   <img src={require("/img/create-invoices-in-bulk-result.png").default} height="" width="600" />

In bulk, each invoice includes all rows of the order that are not invoiced yet and uses today's date.

When you use **Create invoices and mail**:

* The email uses the customer's invoice mail template, or the shop's default invoice mail template if the customer has none.
* The email is sent to the customer's invoice email address. If it is empty, ShopCtrl uses the order's billing email address, and then the customer's email address.
* The invoice sent status is set to **Sent**.

## Create invoices automatically with triggers

Use the [Create invoice](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-actions.md#create-invoice) trigger action to create invoices automatically, for example when an order is added or shipped. The action does not send the invoice — to email it, add a **Send email** action to the same trigger.

Ready-to-use setups:

* [Create an invoice when an order is shipped](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-examples.md#create-an-invoice-when-an-order-is-shipped)
* [Create an invoice when an order is added](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-examples.md#create-an-invoice-when-an-order-is-added)
* [Auto-invoice only for orders with a specific parameter](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-action-condition.md#4-auto-invoice-only-for-orders-with-a-specific-parameter)

Orders generated from a [customer contract](/User-Guide/04-Order-Management/contracts.md) can also be invoiced and mailed automatically, based on the contract's invoice settings.

## Troubleshooting

If an invoice cannot be created or mailed, see [Invoice troubleshooting](/User-Guide/05-Financial/Invoices/invoice-troubleshooting.md).
