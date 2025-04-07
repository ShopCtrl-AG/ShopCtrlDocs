---
sidebar_position: 3
slug: /docs/collections-in-email-templates
---

# Collections in Email Templates

:::info[**Required permissions**]

An employee must be assigned to the Shop with a **Power User** role or higher to create and edit templates on a Shop Owner level.

:::

## How to add merge field collection

To insert a collection of merge fields into a mail template:

1. Open mail template for editing.
2. Start the collection by inserting `RangeStart:` and follow it by the collection name. This will identify the starting point of the collection.
3. Use comment tags `<!--` `-->` to comment the range start merge field and prevent it from rendering on the final document.
4. Proceed with inserting the collection body that could consist both of text and specific merge fields from the collection chosen. Format the merge fields, if required.
5. To close the collection, insert the `RangeEnd:`and follow by the respective collection name.
6. Enclose the `RangeEnd:CollectionName` in a comment tags.
7. Proceed with editing the template as usual.

For example, a table with products ordered:

```html
<table>
  <tr>
    <th>Product Code</th>
    <th>Product Name</th>
    <th>Quantity</th>
    <th>Price(Inc)</th>
    <th>Row Total($$Order.CurrencySymbol$$)</th>
  </tr>
  <!-- RangeStart:OrderRow-->
  <tr>
    <td>$$OrderRow.ProductCode$$</td>
    <td>$$OrderRow.ProductName$$</td>
    <td>$$OrderRow.ItemQuantity##,##.$$</td>
    <td>$$OrderRow.ItemPriceIncVat###,##.00$$</td>
    <td>$$OrderRow.RowTotalIncVat##,###.00$$</td>
  </tr>
  <!-- RangeEnd:OrderRow-->
</table>
```

Example of generated products list:
![email-template-product-table](/img/email-template-product-table.png)

### Nested field collections

Nest collections inside other collections to show only values that are related to the current value of the parent collection.

For example, the ProductRegistration collection is nested inside the OrderRow collection.

```html
<table>
  <tr>
    <th>Product Code</th>
    <th>Product Name</th>
    <th>Product Registration</th>
    <th>Quantity</th>
    <th>Price(Inc)</th>
    <th>Row Total($$Order.CurrencySymbol$$)</th>
  </tr>
  <!-- RangeStart:OrderRow-->
  <tr>
    <td>$$OrderRow.ProductCode$$</td>
    <td>$$OrderRow.ProductName$$</td>
    <!-- RangeStart:ProductRegistration-->
    <td>$$ProductRegistration.SerialNumber$$</td>
    <!-- RangeEnd:ProductRegistration-->
    <td>$$OrderRow.ItemQuantity##,##.$$</td>
    <td>$$OrderRow.ItemPriceIncVat###,##.00$$</td>
    <td>$$OrderRow.RowTotalIncVat##,###.00$$</td>
  </tr>
  <!-- RangeEnd:OrderRow-->
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <p style="text-align: right;"></p>
      $$Order.CurrencySymbol$$$$Order.TotalDue##,###.00$$
    </td>
  </tr>
</table>
```
