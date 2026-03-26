---
sidebar_position: 9
slug: /docs/provisioning-with-udi-scan
---

# Provisioning with UDI Scan

ShopCtrl supports UDI (Unique Device Identification) scanning during the provisioning process to streamline data entry for stock items. While each stock item in ShopCtrl is tracked with a unique internal ID, you can now also store important identifiers such as serial numbers, lot numbers, expiry dates, and custom parameters directly through barcode scanning.

This functionality significantly reduces manual data entry errors and speeds up the provisioning workflow.

## How It Works

1. **Configure** the barcode format for each product based on its physical labeling
2. **Scan** UDI barcodes during provisioning
3. **Auto-populate** stock item fields with the extracted data
4. **Verify** and save the provisioned items


## Configuration Steps

### Prerequisites: Setting Up Stock Item Parameters

Before configuring UDI scanning, ensure your stock item parameters are set up correctly:

**Default Fields (Always Available):**
- Lot Number
- Serial Number
- Expiry Date

**Adding Custom Parameters**

If your products require additional fields:

1. Log in as a user with **shopowner admin** role permissions.
1. Navigate to **Configuration > Parameters > StockItem Parameter Def**.
1. Create new parameter definitions with appropriate names.
    <img src={require("/img/stock-item-parameter-def.png").default} height="" width="800" />
1. Select the data type (Text or Date).
1. Go to **Product > Stock settings > Stock item parameters > Custom parameters**.
1. Assign the created parameters to your product.
    <img src={require("/img/product-stock-item-parameters.png").default} height="" width="800" />
1. **Save** the product to apply changes. These fields will be available for each stock item the next time this product is provisioned.

**To save the complete scanned UDI string**: Create a parameter named **"FullUdiString"** (String type). This will store the entire raw barcode value for reference.
You do not need to assign this parameter as a product custom parameter—it will work automatically once defined.
If the FullUdiString parameter is not defined, scanning itself still works, but no stock item parameter is created to store the complete UDI string.


### Configuring UDI Barcode Format

1. Navigate to **Product > UDI Configuration**.
1. Build Your **Barcode Format**:
    - Select fields from the left column (Available Fields).
    - Click the arrow button to move them to the right column (Selected Fields).
    - Arrange fields in the exact order they appear on the physical barcode.
    - Use the arrow buttons at the start of each row to adjust the order if needed.
        <img src={require("/img/udi-config.png").default} height="" width="800" alt="UDI configuration" />
1. **Field-Specific Settings**:
    - For LOT Number, Serial Number and Product Variant: Specify the exact length (number of characters).
    - For Date fields: No length specification needed (standard format).
1. **Configure Format Literals**:
    - For fields that include literal characters in the barcode, select **ID prefix format** `(id)` from the top dropdown.
    - This supports various barcode standards including GS1 with different bracket styles.
1. **Test Your Configuration**:
    - Use the Test input field at the top of the configuration page.
    - Paste a sample barcode value.
    - Click Test to verify that values are correctly parsed to their corresponding fields.
    - Review the parsed results in the table below.
        <img src={require("/img/udi-config-test.png").default} height="" width="800" alt="UDI configuration test panel" />    
1. **Save** the product to apply changes.

**Common GS1-128 Format Example:**

`(01)`12345678901234 `(17)`250101 `(10)`LOT12345 `(21)`SN987654321

This example shows a typical UDI barcode with:
- `(01)` - GTIN (Global Trade Item Number)
- `(17)` - Expiry Date (YYMMDD format)
- `(10)` - Lot/Batch Number
- `(21)` - Serial Number

## Using UDI Scanning During Provisioning

Follow these steps to use UDI scanning when provisioning a purchase order:

1. **Navigate to the purchase order** and open the provisioning screen.
2. Click the **Specify** button to open the **Receive now** window.
3. Toggle the **UDI scan** checkbox to enable scanning mode.
4. **Select a row** by clicking its checkbox field.  
   :::info
   Do not manually edit any fields in the row before scanning, as this will disable the scan functionality for that row.
   :::
5. **Scan the UDI barcode** using your scanner. The system will automatically populate:
   - Lot number
   - Serial number
   - Expiry date
   - Any custom parameters configured for the product
6. **Review the populated data** to ensure accuracy.
7. **Repeat steps 4–6** for each additional stock item—select the next row and scan its barcode.
8. Once all items are scanned and verified, click **Save** to complete the provisioning process. All UDI data is stored against the respective stock items.


<img src={require("/img/provision-udi-scan.png").default} height="" width="800" />    
