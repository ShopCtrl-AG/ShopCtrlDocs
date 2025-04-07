---
sidebar_position: 4
slug: /docs/product-variants
---
# Product Variants 


## How to create product variants

If there were no stock items and orders created for a product, you could turn this product into a parent for product variants.

To create product variants:

1. Open a product that you want to turn into a parent product for variants.
2. In the topic menu, choose **Properties** tab and select a **property set** that the product will vary on (dropdown type properties).
<img src={require("/img/create-product-variants-choose-property-set.png").default} height="" width="500" />
3. Go to the **Variant properties** tab and add the properties from the available properties set for the product to vary on.
<img src={require("/img/create-variant-product-variant-properties.png").default} height="" width="500" />

:::info[**Note:**]

After the properties were added, the product edited is turned into a parent product for the variants. It could no longer be stored at the warehouse or published on the website. The Code field now contains variables based on which the variants codes will be generated.

:::
4. (Optional) Adjust the products **code** based on which the codes for the product variants will be generated.
5. Open the **Product Variants** tab to start creating variants based on properties:
<img src={require("/img/create-product-variants-from-parent.png").default} height="" width="800" />
6. Select a shop **selection** for which you would like to create a variant product. Or leave its value to Global Price (ex) to create variants for all sales channels.
7. Select Variant properties values from the dropdowns. The list of variants below will be filtered accordingly.
8. Click the **Add Product Variant** button.
9. A new product record row will appear in the grid. You can now edit the variant details: code, publication status, retail price.
10. Proceed with the remaining variants. 
11. Once finished, save the product edited. It will be converted into a parent product for variants, and product variants will be created on save. 

<img src={require("/img/view-variants.png").default} height="" width="800" />

## How to edit product variants

Created product variants will be displayed in the products grid and could be opened for editing like other products. 

<img src={require("/img/edit-product-parent-and-variants.png").default} height="" width="800" />

To edit the parent variant product details, click on the parameters link in the name column.
The parent product details will be opened for editing in a new tab.
You can add new and bulk edit the existing product variants from the Topic menu > Product Variant tab. Please see [Product Variants](/docs/User-Guide/08-Product-Management/Product-Details/product-general-data.md#product-variants) for more information.
