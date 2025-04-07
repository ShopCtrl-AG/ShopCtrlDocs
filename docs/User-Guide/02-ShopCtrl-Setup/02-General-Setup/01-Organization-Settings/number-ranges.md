---
sidebar_position: 3
slug: /docs/number-ranges
---

# Number Ranges

Number sequencing in ShopCtrl helps you keep track of sale and purchase orders, offers and invoices. Each time you create a new sale order or invoice, ShopCtrl will assign the next available number from your sequence.

There are different strategies to keep your numbers in order.

- Sequential numbering, for example INV00001, INV00002 for invoices.
- Starting with a unique shop code, for example BE00001 for orders.
- Chronological numbering, including the date of your offer, order or invoice. For example 2023-01-00001
- Reset period: numbers can be increased infinite, or reset each year.

Default number format can consist of alphabetical prefix and number itself containing 3-6 digits. Here are the default suggested formats:
`{Nr:000000}` - number sequence consisting of 6 digits.
`OF{Nr:000000} ` - number sequence with alphabetical prefix
`{CreateTime:yy}{Nr:000000}` - number sequence with chronological prefix

There are also other formats for chronological numbering. The code can be customizable with the use of the corresponding placeholders. Such as:

`{OfferDate}` - date of the Offer
`{OrderDate}` - date of the Order
`{InvoiceDate}` - date of the Invoice
`{CreateTime}` - date of the offer/invoice/order creation

For example, January 19th, 2023 can also be represented as 19012023-000001 (`{OrderDate:ddMMyyyy}-{Nr:000000}`), 23-000001 (`{OrderDate:yy}-{Nr:000000}`), etc.

Using the `{OrderDate}` type prefix you can create an order for a future year. Considering your code is reset each year, for example: `BE{OrderDate:yyyy}{Nr:000000}`. The automatic sequencing will take the next number from the future period in this case. ShopCtrl will make sure the number sequence is correct for both periods, keeping track of number incrementing per year.
The `{CreateTime}` placeholder, on the other hand, always returns the actual creation timestamp date and could not be manually changed to a future or past date.

Please see [.NET Date Time Formatting](https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings) for more information.

Number ranges for offers, orders and invoice codes can be set up at shop level. Or you can keep them unified throughout the company by setting them up at the shop owner level.

:::warning

These rules apply only to entities created within ShopCtrl. All orders imported from market places or shopping platforms keep the original codes.

:::

## How to change the number sequence

To change the default number sequence at shop owner level, follow these steps:
![number-ranges-shop-details](/img/number-ranges-shop-details.png)

1. Go to **Configuration > Shop Owners**.
2. Select Shop owner and click **Edit** to open its settings.
3. On the shop topic menu proceed to **Financial > Number ranges**.
4. Choose the type of the document which **Code format** you would like to edit: Offer, Order, or Invoice.
5. Choose the reset period: **Infinite** or **Yearly** for chronological numbering.
6. Change the **Code format** configuration to fit your needs.
7. You can set up a custom number to start the numeration. Enter a number of your choice in the **Last Number** field. Make sure to click '**Save**' icon after entering your number.
8. Click **Save** or **Save and close** to apply changes to the Shop owner numbering configuration.

Once you've changed the sequence definition, ShopCtrl will apply the new number format to future transactions created.
Codes for any orders, offers or invoices created before changing the numbering sequence settings here will not be updated.

The same way you can change the number sequence for a specific **Shop**. Follow the same steps on the Shop settings page.

:::warning

The numbering rules set on a Shop level **override** the ones set on a Shop Owner level.

:::
