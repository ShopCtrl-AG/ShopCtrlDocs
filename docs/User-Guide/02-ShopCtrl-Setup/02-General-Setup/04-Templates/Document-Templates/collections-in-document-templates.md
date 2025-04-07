---
sidebar_position: 3
slug: /docs/collections-in-document-templates
---

# Collections in Document Templates

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Admin** or **Shop Owner Admin** role to perform actions referred to in this article.

:::

Use **Collections** in document templates to loop through the multiple merge fields like order rows or invoice rows. The inner range text will be repeated for each collection element until all of them are included in the document.
Fields marked as **Collections** in the [Merge Fields list](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md) must be inserted in a certain collection.

## How to add a collection of merge fields

To insert a **Collection** of merge fields into a Word Document template:

1. Open the Word document file for editing.
2. Press `Ctrl` + `F9` to insert the field braces `{}`. In the braces, type: `RangeStart:`, followed by the collection name. This will identify the starting point of the collection.
3. Right-click on the entered merge field and click **Update the field** to apply the changes.
4. Insert the **Collection body** that could consist both of text and specific merge fields from the collection chosen. Format the merge fields, if required.
5. To close the range, insert the field braces `{}` by pressing `Ctrl` + `F9`. In the braces, type: `RangeEnd:`, followed by the respective collection name chosen above. This will identify the ending point of the collection.
6. Right-click on the entered merge field and click **Update the field** to apply the changes.
7. Continue editing the template as normal.

For example, an order rows collection range:
![order-row-range-schema](/img/order-row-range-schema.png)

:::warning[**Note:**]

Numeric or data switch formatting could be applied only to the specific merge fields inside the range. It is not possible to apply the formatting to the whole collection.

:::

### Nested collections of merge fields

Nest **Collections** inside other collections to show only values related to the current value of the parent collection.

For example, the SerialNumbers collection is nested inside the PackRow collection.

![nested-collectios-packbon](/img/nested-collectios-packbon.png)
