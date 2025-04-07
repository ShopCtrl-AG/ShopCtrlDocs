---
sidebar_position: 7
slug: /docs/product-properties
---
# Product Properties 


Product attributes are the characteristics of a product that describe its specific features.
Product properties in ShopCtrl are integrated with your sales channels and mostly are imported and synchronized from your online shops. Product properties are also used internally to define a product, filter, perform bulk operations on orders, and in various shipping settings. 

Import and export of product properties is part of the product Import/Export functionality of the synchronization module you are using. 

## Creating product property
:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

<img src={require("/img/create-product-property.png").default} height="" width="800" />

To create a property:
1. Go to **Product Management > Product Properties**.
2. Click **Add**.
3. Select a **Shop group**.
4. Select property type:

| Property type | Description |
| --- | --- |
| Text | A one-line field for text. |
| TextArea | A multiple-line field for text, without formatting options. |
| HtmlEditor | A field having WYSWYG editor for HTML formatted text. |
| Date | A date field. |
| YesNo | Displays a drop-down with predefined Yes/No options. |
| MultipleSelect | Displays a drop-down list of items where you can select multiple values. |
| DropDown | Displays a drop-down list of items where you can select only a single value. |
| Number | A field for number value. |
5. Enter property **Code** without spaces.
6. In the Captions pane click the <img src={require("/img/pencil.png").default}  /> and in the pop-up window edit the property **General caption** which is the name of the property and its **translations**.
7. If you would like this property to be required (if chosen for a product) for creating a product, mark the **Is required** checkbox.
8. To make property visible in order details when product is ordered, mark **Copy to order row** checkbox.
9. If you would like this property to be copied when creating a duplicate of the order, mark **Copy to clone**.
10. To display and also highlight the property on the shipments page, mark the **Is important shipment info** checkbox.
11. (Optional) These settings are specific for **Magento** integration:

| Property type | Description |
| --- | --- |
| Is hidden | The property is hidden on the front-end. |
| Is comparable | The property can be compared on the front-end. |
| Is searchable | The property can be used in Quick Search. |
| Is visible on front | The property is visible on the front-end. |
11. If you are creating a **Yes/No** property, select the **Default value**: False, True, or Undefined.
12. For the **Text**, **Text area** or **Number**types you could also enter the **Default values**.
13. For the **Dropdown** and **Multiselect** properties types you need to create **options**:
    1. In the options pane click **Add**.
    2. On the newly added row click <img src={require("/img/pencil.png").default}  />. 
    3. Enter **Value**, **General** translation, and other translations of the option used on your sales channels.
    4. Click **Ok** to add the option to the list.
    5. To delete an option click on the ⛔ button at the end of the row.
    6. Use arrows ⬆⬇ to change options order in the list.
    7. Proceed with other options for the property.
14. Click **Save** or **Save and Close**.

You can double-click a property to open it for **editing**. Change a name or properties included. Or **delete** a set that is no more in use.

:::warning[Please note]

Changing a property might influence the products and products variants that are using this property. Depending on the synchronization modules configured for your sales channels, the update of the property on your online stores will happen automatically or will require manual scheduling. Please contact our support team for more information. 

:::

## Property sets
:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

Product properties could be united in sets and used to define certain product groups on your sales channels and to create product variants.
Initially, property sets are imported from your sales channels. It is also possible to create and manage property sets within ShopCtrl.

To create a property set:

1. Go to **Product Management > Product Property sets**.
2. Click **Add**.
3. Select a **Shop group** where a property set will be used.
4. Enter **Name**.
5. Mark checkboxes of the **properties** that will form a new property set.
6. Click **Save** or **Save and Close**.

The new property set will appear in a list of sets and will become available for selection when creating a new product.

You can double-click a property set to open it for **editing**. Change a set name or properties included. Or **delete** a set that is no more in use.

:::warning[Please note]

Changing a property set might influence the products and products variants that are using this set or were created based on this set. Depending on the synchronization modules configured for your sales channels, the update of the property set on your online stores will happen automatically or will require manual scheduling. Please contact our support team for more information. 

:::


