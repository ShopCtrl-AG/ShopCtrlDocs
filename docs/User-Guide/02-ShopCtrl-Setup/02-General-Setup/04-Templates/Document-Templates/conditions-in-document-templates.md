---
sidebar_position: 4
slug: /docs/conditions-in-document-templates
---

# Conditions in Document Templates

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Admin** or **Shop Owner Admin** role to perform actions referred to in this article.

:::

## Conditional blocks

Use **Conditional blocks** in document templates to display information that differs for shops or customers using the same template.

Any type of ShopCtrl [merge field](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md) could be used as a condition. You can either compare the value to a certain data or check if there is value for the field.

Compare the merge field value to be a certain text or number, depending on the merge field type. The inner text of the condition will appear in the document only if the condition is fulfilled.

You can check if there exists a value in the merge field. Depending on the condition type return value will differ:

| Merge field type | Return value **True** | Return value **False** |
| ---------------- | --------------------- | ---------------------- |
| Boolean          | True                  | False                  |
| Number           | Non-zero value        | Zero                   |
| String           | Contains data         | Empty                  |

For example, if the merge field selected to use as a condition is a string or number field type, and it is empty or zero, the condition value will be **False**, and therefore the inner text won't appear in the document.

There are three ways to define a condition in ShopCtrl:

- using ShopCtrl Range Conditional Block Syntax
- using Microsoft Word Conditional Statements Syntax
- nesting Microsoft Conditional Statements inside the ShopCtrl Range Conditional Block Syntax

### ShopCtrl conditional range block syntax

To create a **Condition** in the Word document template using ShopCtrl range conditional block syntax:

1. Open the Word document template file for editing.
2. Press `Ctrl` + `F9` to insert the field braces `{}`. In the braces type: `RangeStart:`, followed by a single type merge field name that will be used as a condition. For example, `$$Order.CustomerReference$$`. This will identify the start point of the condition.
3. Right-click on the entered merge field and click **Update the field** to apply the changes.
4. Insert the condition body, which will be displayed only if the condition will be met. It could be both text and merge field(s).
5. To close the conditional range block insert the field braces `{}` by pressing `Ctrl` + `F9`. In the braces type: `RangeEnd:`, followed by the merge field name that was used as a condition. `$$Order.CustomerReference$$` in our example.
6. Right-click on the entered merge field and click **Update the field** to apply the changes.
7. Continue editing the template as normal.

For example, here is a condition that will show inner text only if there is a value in the `$$Order.CustomerReference$$` merge field:

```
{MERGEFIELD RangeStart:$$Order.CustomerReference$$ }
Customer reference: {MERGEFIELD $$Order.CustomerReference$$ }
{MERGEFIELD RangeEnd:$$Order.CustomerReference$$ }
```

The "Customer Reference" text and the data of the CustomerReference merge field will be displayed only if there exists any saved data in the Customer Reference field. Otherwise, nothing will be displayed in the generated document.

And here is a condition example that will show text only if the merge field value is false:

```
{MERGEFIELD RangeStart:$$Order.IsPaid$$='False' }
Please proceed with the payment
{MERGEFIELD RangeEnd:$$Order.IsPaid$$='False' }
```

:::warning[**Note**]

The else statement is not supported by the range conditional blocks.

:::

### Microsoft Word conditional statements syntax

You can use the conditional syntax of MailMerge Microsoft Word **IF Fields** to either show or conceal fields based on the data retrieved.

To create a Microsoft Word IF field condition:

1. Open the Word document template you would like to edit.
2. Press `Ctrl` + `F9` to insert the field braces `{}`.
3. Specify the **IF** condition using the Microsoft word IF field condition syntax `{ IF Expression1OperatorExpression2TrueTextFalseText}`.
4. Select and update the inserted field by clicking `F9`.
5. Continue editing the template as normal.

For example, another way of adding an IF condition to the customer reference field will be:

```
{IF {MERGEFIELD $$Order.CustomerReference$$ } <> "" "Customer reference: {MERGEFIELD $$Order.CustomerReference$$ }" ""}
```

The text will appear in the generated document only if the condition is met. In our example, the "Customer Reference:" text and merge field value will be displayed only if the customer reference merge field has a value saved in it.

Please view the Microsoft articles for more information:

- [Field codes: IF field](https://support.microsoft.com/en-us/office/field-codes-if-field-9f79e82f-e53b-4ff5-9d2c-ae3b22b7eb5e?ui=en-US&rs=en-US&ad=US)
- [Word 2013 training Advanced mail merge Add formulas and conditional statements](https://support.microsoft.com/en-us/office/video-add-formulas-and-conditional-statements-1130d3c5-d0c4-4b6f-9b0e-3553c864f8dd#ID0EAABAAA=Overview)

## Nesting conditions

The **Word IF field conditions** could be nested inside the **Range conditional** blocks, enabling the creation of more complex conditions.

For Example:

```
{MERGEFIELD RangeStart:$$PaymentType.IsPaymentOnInvoice$$}
{ IF {MERGEFIELD $$Order.TotalInvoiced$$ } = {MERGEFIELD $$Order.TotalReceived$$ } "Your Order is fully paid, thank you"
"Total received: {MERGEFIELD $$Order.TotalReceived$$ \# €#,###.00 }
Due on Delivery: {MERGEFIELD MERGEFIELD $$Order.TotalDue$$ \# €#,###.00 }
Order Total: {MERGEFIELD $$Order.TotalInvoiced$$ \# €#,###.00 }" }
{MERGEFIELD RangeEnd:$$PaymentType.IsPaymentOnInvoice$$}
```

![codition-example](/img/codition-example.png)

For fully paid orders with payment type invoice, there will be displayed a text:

> "Your Order is fully paid, thank you."

For partially paid or not paid orders with payment type invoice, there will be displayed three lines:

> Total received: €20.00
> Due on Delivery: €37.19
> Order Total: €57.19
