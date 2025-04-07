---
sidebar_position: 2
slug: /docs/how-to-add-asin-and-ean-to-your-products
---
# Adding ASIN and EAN to Your Products 



For optimal management of your Amazon products in ShopCtrl, it's essential to store both **EAN** (European Article Number) and **ASIN** (Amazon Standard Identification Number).

In ShopCtrl, EAN is stored at a product level, and its uniqueness can be enforced based on shop group settings. This ensures that no two products with the same EAN can be saved, aligning with the unique product identifier nature of EAN codes. 

ASIN is stored as a text product property. To begin populating this field, create the ASIN property, preferably as part of the default Amazon property set. This is done to apply the ASIN property to all products in the system.

## Step 1: Create ASIN Property and Add to Default Property Set

How to create a new ASIN property:

1. Login as Shop owner admin.
2. Navigate to **Product Management > Product Properties**.
3. Click Add.
4. Select a Shop group.
5. Select property type: **Text**.
6. Enter property **Code** - **'ASIN'**.
7. (Optional) Add Caption translations to the languages used in your environment.
8. **Save** the property. 
<img src={require("/img/create-property-asin.png").default} height="" width="800" />


Next, update the default property set with the new ASIN property:

1. Login as **Shop owner admin**.
2. Open **Product Management > Product Property Sets**.
3. Access the **Default Property set** of your environment.
4. Locate **ASIN** from the list and mark the checkbox.
5. **Save** to update the Property set. 
 <img src={require("/img/update-property-set-with-asin.png").default} height="" width="800" />


## Step 2: Update Products with ASIN and EAN

For this guide, we'll focus on the minimum required properties assuming other data is already entered:
* Code (Product code in ShopCtrl)
* Ean 
* ASIN

<img src={require("/img/create-import-profile-asin-ean.png").default} height="" width="800" />

1. Login using a user account with power user privileges or higher.
2. Navigate to **Product Management > Product export/import profiles**.
3. Add an import profile, setting the profile type to Product.
4. Rename the profile for clarity, e.g., "Update EAN and ASIN."
5. Disable the **Can create new products** setting. 
6. Ensure the setting **Can update existing products** is set to true.
7. Change **Max groups**, **Max related products** and **Max multiselect options** settings to **0**. 
8. Select the appropriate **Property set**.
9. Choose the properties to update: **Code, EAN, and ASIN**.
10. Save the profile and download the **sample Excel document**.
11. Populate the table with the required data, ensuring products are mapped by ShopCtrl Product code. 
<img src={require("/img/image63.png").default} height="" width="" />


**Product Import**

1. Login using a user account with power user privileges or higher.
2. Access **Product Management > Product Import**. 
3. Select the created profile - "**Update EAN and ASIN**".
4. Browse and choose the file to be loaded.
5. Click **Preview** to review the result table.
6. If satisfied with the results, click **Save** to apply the changes.

<img src={require("/img/update-asin-product-import.png").default} height="" width="800" />

**Trouble shooting**
Identify and rectify possible issues, such as missing product codes or data columns.

**Review Changes**
Verify the updated EAN and ASIN for several products by checking their product details. Please note that the ASIN can be found on the properties tab.

<img src={require("/img/product-review-ean-asin.png").default} height="" width="800" />

For the final evaluation, you can use the same profile, such as 'Update EAN and ASIN,' for exporting products. This allows you to check at once that all products were updated.

Here's how to do it:

1. Navigate to **Product Management > Products** tab.
2. In the top action menu, select the **Product Group** node to view all products in the shop group.
3. Set the filter to show **All products**, including unpublished ones.
4. In the Export pane, select the created profile "**Update EAN and ASIN**."
5. Click the arrow at the end of the Export list button and choose the **Export all** option from the dropdown menu.
6. The file download will begin in the background. You can refresh the tab to check the result.

<img src={require("/img/product-export-products-for-review.png").default} height="" width="800" />


This streamlined process ensures accurate ASIN and EAN management within ShopCtrl, providing transparency and efficiency in your product listings.



