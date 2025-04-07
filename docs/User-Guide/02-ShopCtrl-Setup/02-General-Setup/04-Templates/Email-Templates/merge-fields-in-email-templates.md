---
sidebar_position: 2
slug: /docs/merge-fields-in-email-templates
---

# Merge Fields in Email Templates

:::info[**Required permissions**]

An employee must be assigned to the Shop with a **Power User** role or higher to create and edit templates on a Shop Owner level.

:::

You can use merge fields to insert data from ShopCtrl into the mail template to automatically retrieve it when you create an email based on the template.

## How to insert merge field

To insert a merge field into the mail template:

1. Open template for editing.
2. Place cursor where you would like to insert the merge field and type the **merge field name** `$$EntityName.FieldName$$`. Or select and insert it using the pull-down merge field buttons in the menu above the mail body.
3. Apply **formatting** depending on the merge field type.
4. Proceed to edit the mail template as usual.

You can always retrieve the whole list of merge fields by clicking the **Available MergeFields** button. Please see the [List of Merge fields](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md) for more information.

### How to apply numeric merge field formatting

To configure the output format of the numeric merge field in the mail template:

1. Select the **Numeric** type merge field you would like to edit.
2. Before the closing dollar signs, type: `#` and follow by the decimal format, for example: `0,00`.
3. Proceed to edit the mail template as normal.

Examples of numeric fields formatting:
| Field Code | Generated Output |
| --- | --- |
| $$Order.OrderTotalExVat$$ | 1,559,917.36 |
| $$Order.OrderTotalExVat#0.0000$$ | 1559917.3600 |
| $$Order.OrderTotalExVat##,#.00$$ | 1,559,917.36 |
| $$Order.OrderTotalExVat##,###.$$ | 1,559,917 |
| $$Order.OrderTotalExVat#€#,###.00$$ | €1,559,917.36 |
| $$Order.OrderTotalExVat####,0.00kg$$ | 1,559,917.36kg |

Please view [.NET Custom numeric format strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings) for more information.

### How to apply date merge field formatting

To configure the output format of the date merge field in the Word document template:

1. Select the **Date and Time Merge Field** you would like to edit.
2. Before the closing dollar signs, type `#` and the format you would like the date to be displayed. For example, `yyyy-MM-dd`.
3. Continue editing template as normal.

Examples of Date and Time fields formatting:
| Field Code | Generated Output <br />en-US | Generated Output <br /> nl-NL | Generated Output <br /> fr-FR |
| --- | --- | --- | --- |
| $$Order.Date$$ | 6/25/2021 | 25-6-2021 | 25/06/2021 |
| $$Order.Date#F$$ | Friday, June 25, 2021 3:06:22 PM | vrijdag 25 juni 2021 15:06:22 | vendredi 25 juin 2021 15:06:22 |
| $$Order.Date#MMMM d$$ | June 25 | juni 25 | juin 25 |
| $$Order.Date#d-MM-yy$$ | 25-06-21 | 25-06-21 | 25-06-21 |
| $$Order.Date#dd/MMM/yy$$ | 25/Jun/21 | 25-jun-21 | 25/juin/21 |
| $$Order.Date#ddd, d MMMM yyyy$$ | Fri, 25 June 2021 | vr, 25 juni 2021 | ven., 25 juin 2021 |
| $$Order.Date#dddd dd, MMMM yyyy HH:mm$$ | Friday 25, June 2021 15:06 | vrijdag 25, juni 2021 15:06 | vendredi 25, juin 2021 15:06 |

Please see [.NET Date Time Formatting](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings) for more information.

## Email templates as merge fields

Email templates themselves can be used as merge fields. For example, you can create a footer template or header template and use it throughout the other templates.

The syntax of the mail template merge field is as follows: `$$MailTemplate.{Template-code}$$`.
Where `{Template-code}` is the code of the existing mail template.

To insert a merge field mail template click the **Templates** drop-down button in the menu above the body and select the field from the list. Or type it according to the format shown above.
