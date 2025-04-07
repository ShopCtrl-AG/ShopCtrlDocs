---
sidebar_position: 1
slug: /docs/import-supplier-products
---

# Import Supplier Products 


:::info[**Required permissions**]

In order to view content or perform actions referred to in this article, you need to have the appropriate permissions enabled. An employee must be assigned to the shop with a **Power User** role or higher. To view the request details page of a product import record an employee must be assigned to shop with **Shop Owner Admin** role.

:::

## How to import supplier products
ShopCtrl **Product Import** tool allows to:
* Import supplier product names, SKUs, prices, available stock, EAN, delivery days, and delivery date
* Automatically link products:
    * by SKU. If the supplier's SKU matches the product code, ShopCtrl will automatically link those products
    * by EAN. If the SKU field is blank, ShopCtrl will find matching EAN in the system and link the corresponding products
* Set scheduled import of the supplier price list and stock levels

### Create import profile

<img src={require("/img/supplier_product_import_manual_import_01.png").default} height="" width="500" />
:::info[**General file requirements**]

Supporting file formats: **.xlsx** and **.csv**

:::
To create an import profile:
1. Open the supplier's details page. Within the topic menu, choose **Product Import**
2. To create a new profile, select the **Import Profiles** tab
3. Click **Add**. A new pop-up window will be opened.
<img src={require("/img/supplier_product_import_new_profile.png").default} height="" width="500" />

4. Configure the profile according to your supplier price-list format.
    * Enter **Profile Name**
    * Enter the number of the header rows. ShopCtrl will skip the first **N** rows from the top and start processing with the next row.
    * Check the **Link products** - if this checkbox is marked, ShopCtrl will attempt to link products with matching SKU and product code. If the SKU cell is empty for the specific product row, ShopCtrl will try to map the products by EAN. 
    * Required fields for CSV files: Select a CSV separator, Choose Encoding and Culture.
    * Match import columns: specify the columns that will be imported to ShopCtrl. Leave the field blank if the information is not defined in the price list. SKU column is required. The columns order is not important.
5. Click **Save**. The new profile will be displayed in the table.

**Other settings:**
The **Currency** is chosen automatically - it is the supplier's main currency set in the Suppliers page details.
By default, ShopCtrl detects changes in the price list and updates only those products that were changed. 
**Force Update** - after the initial upload was done. With the next upload, ShopCTrl detects changes in the price list and updates only altered products. This option will turn on a force update of all items in the price list. Please note, this operation is rather time-consuming.  
ShopCtrl will automatically set supplier as **preferred supplier** if there are no other quotes for the product.



### Initial import of supplier purchase products

To initially upload the supplier **Purchase Products**:
1. Open **Suppliers Details Page**, within topic menu choose **Product Import**
3. In the manual import tab, select a **Profile** for the file to be imported.
4. Choose a source file and click **Import**. If the file was accepted, a message would appear: "Success: Import task created."
5. Go to the **Import History** tab. Select the newly created import request. The results will be displayed in the right pane.
Click the **Open Request Details** button in the import row to open the details of the specific sync request.
<img src={require("/img/supplier_product_import_import_history_update.png").default} height="" width="500" />
6. Open **Topic Menu > Products**. All purchase products imported will be listed in this tab

:::info[**Note:**]

The initial upload operation might be rather time-consuming, depending on the number of products being imported.
**Shop Owner Admin** permissions are required to open the request details tab.

:::

### How to import supplier stock levels

To import **Supplier Stock Level**:
1. [Create import profile](import-supplier-products.md#create-import-profile). Make sure to include columns: SKU, Available Stock Column.
2. Make sure that a supplier has a linked warehouse supplier type or dropship before importing the stock levels.
3. Import product using manual import tab.

**The Purchase Products stock level** will be displayed both:
* On Supplier level -  Supplier Details Page > Products
* On Product level - Product Details Page > Stock > Supplier Stock

### How to Link Purchase Products to your Products

After the supplier price list has been imported to ShopCtrl, there might appear some purchase products that are not yet linked to the existing products in the system.
<img src={require("/img/supplier_details_topic_menu_products.png").default} height="" width="800" />

To link the **Purchase product** to the product in ShopCtrl:
1. Go to **Supplier Details Page > Products**.
2. Select **Unlinked** in the top menu filter.
3. Click the **Product Code** cell of the particular product in the product code column. 
4. Start typing the product name or product code. ShopCtrl will search among all published products.
If the product has not been published yet, click the 🔎 icon, and a new window with applicable products will be opened.
5. Select the applicable product, and the products will be linked.

<img src={require("/img/supplier_details_product_link_product.gif").default} height="" width="500" />

To **unlink** purchase product from the product in ShopCtrl:
1. Go to Supplier Details Page > Products.
2. Search for a product by SKU/Product Code/Product Name/EAN. 
3. Select the product row of the applicable product and click the **Unlink** button. 
