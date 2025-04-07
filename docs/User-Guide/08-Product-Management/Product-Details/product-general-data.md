---
sidebar_position: 3
slug: /docs/product-general-data
---
# Product General Data 


## General
Depending on the shop synchronization settings of your ShopCtrl environment, the set of data synced with the product details page could differ.
The **General** tab contains all the main product details.

<img src={require("/img/product-general-tab.png").default} height="" width="800" />

**Description** short product description.
**Description Long** synced long description of a product. You can use the WYSIWYG editor or  HTML view to change the product description.
**Offer/Order Row comment** - adds a translatable comment to the offer/order row that contains this product. You could add comments in all languages used in your company. Use the Translation dropdown in the top menu to switch between languages.
<img src={require("/img/product-order-comment.png").default} height="" width="" />

**Note** - an internal note about the product that won't be synced and is the same among all translations.
**Fulfillment options** - **Is Shippable** checkbox defines whether a product is digital or physical.
**Dimensions:** Length, Width, Height, Diameter, Weight, and Volume - dimensions of the product that could be used for shipping cost calculations. Please note that measurements could be specified in different scales.

**Miscellaneous**

**Order Sync Ref** - The order synchronization uses this field to reference a product.
**Replacement period month** - This field is used only if the product needs additional after-sell service.
**Product Brand** - brand or manufacturer of the product. Select the brand of a product from a drop-down list. Click the icon <img src={require("/img/simple-go.png").default}  /> in the field to open the brand details page in a new tab.
**HS Code** and **HS Code 2** - enter a valid HS codes of a product. You can check the correctness of a code by clicking the **Look up code** link.
**Country of Origin** - apart from product brand, you can also specify the country the product was manufactured in.
**Create date** and **Change date** are updated automatically.

## Retail price

From the retail price pane, you can manage the prices, VAT tariffs, and publishing status of a product in different shops.

<img src={require("/img/product-details-retail-price-unpublish.png").default} height="" width="800" />

Select a row and use the **Publish** or **Unpublish** buttons to change the status of the product per shop. 

**Price ex vat** field enables you to edit the exclusive of VAT price in shopowner default currency across all sales channels.
The **Purchase price** displayed is a preferred supplier purchase price excluding VAT for a product. You can choose the preferred supplier on the Products details > Supplier tab.

Double-click on the specific shop record row to open it for editing.

<img src={require("/img/product-details-retail-price-edit-record-price-details.png").default} height="" width="400" />

The first **Details** tab contains the price settings per the shop selected. 
You can choose whether you want to **publish** the product, define a **Vat tariff** for a product on this shop, and change a **retail price**.

**Auto calc** checkbox - enables an automatic calculation of the foreign price including VAT based on the price excluding VAT in base currency, exchange rate, and Vat tariff set for a product on the particular shop.

You can disable the auto-calculation and set a price manually for a shop: 
**Foreign price ex (shop currency)** - retail price of a product on a shop excluding VAT.
**Foreign price inc (shop currency)** - retail price of a product on a shop including VAT.

On the **Profit** tab, you can view the profit margin per product on this sales channel based on a preferred supplier purchase price. 

<img src={require("/img/product-details-retail-price-edit-record-2.png").default} height="" width="400" />

## Translations

All of the product translations created or synced for different cultures are accumulated on this tab. To edit the product translation, you can click on the <img src={require("/img/pencil.png").default}  /> button in the record row. The corresponding fields set will be opened in a new tab for editing. 
<img src={require("/img/product-details-translation.png").default} height="" width="800" />

## Resources

In this tab, you can manage all of the product-related files, materials, and links. 
<img src={require("/img/product-details-resources.png").default} height="" width="800" /> 

## Product group

Here all the product groups the product is assigned to are listed. You can change the assignment by activating or deactivating the checkboxes.
See more on [Product Groups](/docs/User-Guide/08-Product-Management/product-groups.md).
<img src={require("/img/product-details-product-group.png").default} height="" width="800" />

## SEO

Here all the SEO product data from your webshops will be synced.
An icon at the end of the field identifies the culture of the metadata you are editing. You can change the translation culture in the top action menu **Translations** drop-down list.

<img src={require("/img/product-details-seo.png").default} height="" width="800" />

## Properties

Here you can manage all of the properties assigned to a product. [Properties](/docs/User-Guide/08-Product-Management/product-properties.md) could be assigned as a part of the properties set, independently, or both. 
You can combine a set of properties with any number of extra properties, that could be both independent or part of a different property set. 

<img src={require("/img/product-details-properties.png").default} height="" width="800" />

## Product relations

Here are displayed the relations the product being edited has with other products. 
Relation types:
* Contains product
* Cross-sell
* Upsell

You can edit the relation type, its sequence, product quantity or delete the relation. Click on the icon at the end of the row to open the related product in the new tab for editing.

<img src={require("/img/product-product-relations.png").default} height="" width="800" />

## Variant properties

This tab is present in the topic menu only if you edit a product with no variants or a parent product for a variant. It contains the properties that can be used for the generation of variants.
If there were no orders created for a product, you could turn it into a parent for product variants. Please see [Product Variants](/docs/User-Guide/08-Product-Management/product-variants.md) for more details.

Once the product is added to stock and shipped to the customer, it is no longer possible to change it into a product variant. In this case, this tab will be disabled, and a warning message will be displayed.

For a parent product for variants this tab will display the properties based on which variants were generated. For example:
<img src={require("/img/product-details-variant-properties.png").default} height="" width="800" />

## Product variants

This tab is visible only if you are editing a **parent product for variants**. It is used to create and manage product variants.
<img src={require("/img/product-details-product-variants.png").default} height="" width="800" />

Select a variant or several variants by activating the checkboxes. Now the **Bulk update** button is active, and you can perform an update on the selection: 

* Publish or unpublish variants on the shop selection chosen in the top menu dropbox.
* Upload an image from the local folder.
* Set a retail price: 
    * base price excluding VAT (shop owner currency)
    * you can also change the variant price in the selected shop. 

<img src={require("/img/product-details-product-variants-bulk-update-price.png").default} height="" width="400" />

## Synchronization status

You can check and manage the product sync status with different shops from this tab.

<img src={require("/img/product-details-sync-status.png").default} height="" width="800" />