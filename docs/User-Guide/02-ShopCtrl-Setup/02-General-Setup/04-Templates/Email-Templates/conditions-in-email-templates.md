---
sidebar_position: 4
slug: /docs/conditions-in-email-templates
---

# Conditions in Email Templates

:::info[**Required permissions**]

An employee must be assigned to the Shop with a **Power User** role or higher to create and edit templates on a Shop Owner level.

:::

## Conditional blocks

To insert a condition in the email template:

1. Open mail template for editing.
2. Start the condition by inserting `RangeStart:` and follow it by the merge field that you want to use as a condition `$$Entity.Field$$`.
3. Specify the condition on which the condition body will be shown in the mail:
   - if the condition is not specified, the condition body will be displayed only if there is a value in the merge field used as a condition.
   - check if the field contains a certain text value: `RangeStart:$$Entity.Field$$='text'`
   - check if the field equals to a certain number: `RangeStart:$$Entity.Field$$='0'`
4. Use comment tags `<!--` `-->` to comment the range start merge field and prevent it from rendering on the final document.
5. Insert the condition body, which will be displayed only if the condition will be met. It could consist of both text and merge fields. Format the merge fields output, if required.
6. To close the condition, insert the `RangeEnd:` and follow by the name chosen above and the same condition if any was specified.
7. Enclose the range end construction in the comment tags.
8. Proceed with editing the template as usual.

:::warning[Note]

It is not possible to use any comparison operators for the number type merge fields, except for the "equal to" sign `=`. Or to compare a merge field to another merge field.

:::


### 1. Basic Value Check (Show if Exists)

For example, here is a condition that will show inner text only if there is a value in the $$Order.CustomerReference$$ merge field:

```html
<!-- RangeStart:$$Order.CustomerReference$$ -->
<p>CustomerReference: $$Order.CustomerReference$$</p>
<!-- RangeEnd:$$Order.CustomerReference$$ -->
```

For numeric type merge fields: inner text will be displayed if the value of the merge field exists and is not zero.

```html
<!-- RangeStart:$$Order.DiscountExVat$$ -->
<p>Discount: $$Order.DiscountExVat$$</p>
<!-- RangeEnd:$$Order.DiscountExVat$$ -->
```
### 2. Checking for Specific Values

Here is a condition example that will show text only if the merge field value is false:

```
<!-- RangeStart:$$Order.IsPaid$$='False' -->
<p>Please proceed with the payment</p>
<!-- RangeEnd:$$Order.IsPaid$$='False' -->
```

### 3. Checking for Empty or Null Data

Empty Text (=''). Use this syntax for text-based fields (such as URLs, Names, or Notes) to check if the field is completely empty.

```html
<!-- Display a message while the order is processing (Value is Null) -->
<!-- RangeStart:$$Order.TrackingUrl$$='null' -->
<p>Your order is being prepared. Tracking will be available shortly.</p>
<!-- RangeEnd:$$Order.TrackingUrl$$='null' -->
```
How it works: The content inside these tags will only appear if the TrackingUrl field has no value.

For Number or Date type fields, a standard "empty" check may not always trigger correctly. In these cases, you should check for a null value.

```html
<!-- RangeStart:$$Order.DownPayment$$='null' -->
<p>No down payment recorded for this order.</p>
<!-- RangeEnd:$$Order.DownPayment$$='null' -->
```
:::tip Pro-Tip

If a field isn't behaving as expected with `=''`, try switching to `='null'` to see if the underlying data type requires it.

:::

### Nesting сonditions

Conditional blocks could be nested inside other conditional blocks:

```html
<!-- RangeStart:$$PaymentType.IsPaymentOnInvoice$$='True' -->
<!-- RangeStart:$$Order.TotalDue$$='0.0000' -->
<p>Your Order is fully paid, thank you.</p>
<!-- RangeEnd:$$Order.TotalDue$$='0.0000' -->
<!-- RangeEnd:$$PaymentType.IsPaymentOnInvoice$$='True' -->
```

And collections could be nested inside conditional blocks as well:

```html
<!-- RangeStart:$$PaymentType.IsPaymentOnInvoice$$='True' -->
<!-- RangeStart:OrderRow-->
<p>$$OrderRow.ProductName$$</p>
<!-- RangeEnd:OrderRow-->
<!-- RangeEnd:$$PaymentType.IsPaymentOnInvoice$$='True' -->
```
