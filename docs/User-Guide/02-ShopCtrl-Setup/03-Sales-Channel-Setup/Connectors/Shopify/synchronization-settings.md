---
sidebar_position: 4
slug: /docs/shopify-settings
description: "Step 3 of the Shopify setup: configure order import per market, track and trace export and product stock export, then enable the synchronization."
---

# Step 3. Configure synchronization settings

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

In this step you choose what ShopCtrl synchronizes with Shopify and enable the synchronization. [Connect ShopCtrl to Shopify](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/connect-to-shopify.md) first.

All settings are in the shop settings under **Shop synchronization > Shopify Synchronization**, in the **Functional settings** pane. Configure only the features you need:

1. [Configure order import](#configure-order-import)
2. [Configure track and trace export](#configure-track-and-trace-export)
3. [Configure product stock export](#configure-product-stock-export)
4. [Enable the synchronization](#enable-the-synchronization)

## Configure order import

### One Shopify store, several ShopCtrl shops

In Shopify, one store can sell to many countries, each with its own VAT tariffs and currency. In ShopCtrl, VAT tariffs and currency are set per shop, so you usually create a separate shop per country, for example a BE shop and an NL shop.

To support this, every ShopCtrl shop can import only the orders of selected Shopify markets:

- **Same connection** - connect each shop to the same Shopify store with the same app credentials.
- **Different markets** - in each shop, enter the countries in **Markets**. For example, *NL* in the NL shop and *BE, LU* in the BE shop.
- **Order country** - ShopCtrl takes the country of the billing address of the order, or of the shipping address if the order has no billing address.
- **Currency** - orders are imported in the currency the customer paid in. Set the shop currency to the currency of its markets.

<div className="markets-diagram" role="img" aria-label="One Shopify store sends NL orders to the ShopCtrl NL shop, BE and LU orders to the BE shop, and DE orders to the DE shop.">
  <div className="markets-diagram__box markets-diagram__source">
    <strong>Shopify store</strong>
    <span>Orders from NL, BE, LU, DE</span>
  </div>
  <div className="markets-diagram__routes">
    <div className="markets-diagram__route">
      <span className="markets-diagram__arrow">NL →</span>
      <div className="markets-diagram__box"><strong>ShopCtrl NL shop</strong><span>Markets: NL</span></div>
    </div>
    <div className="markets-diagram__route">
      <span className="markets-diagram__arrow">BE, LU →</span>
      <div className="markets-diagram__box"><strong>ShopCtrl BE shop</strong><span>Markets: BE, LU</span></div>
    </div>
    <div className="markets-diagram__route">
      <span className="markets-diagram__arrow">DE →</span>
      <div className="markets-diagram__box"><strong>ShopCtrl DE shop</strong><span>Markets: DE</span></div>
    </div>
  </div>
</div>

:::warning[Every country in one shop only]

- If a country is entered in two shops, its orders are imported into both shops.
- If **Markets** is empty, the shop imports orders of all countries. Leave it empty only when you connect a single ShopCtrl shop.
- Orders from a country that is not entered in any shop are not imported.

:::

:::note

To select orders by the country of the shipping address instead of the billing address, contact ShopCtrl support. This is a system-wide setting.

:::

### Set whether prices include taxes

Set this before you turn on order import. ShopCtrl already uses it when it imports orders.

1. In the **Product import features** section, check **Taxes included into product price** if the prices in your Shopify store include taxes. Leave it cleared if they exclude taxes. Learn more on [Shopify Taxes](https://help.shopify.com/en/manual/taxes/).

   <img src={require("/img/shopify-product-import-features-taxes.png").default} alt="Taxes included into product price in the Shopify synchronization settings" width="600" />

2. Click **Save and Close**.

### Set up order import

In the **Order import features** section:

1. Check **Order syncronization** to import new orders from Shopify.
2. In **Markets**, enter the two-letter country codes of the orders this shop imports, separated by commas, for example `BE, LU`. Leave it empty to import orders of all countries.
3. Check **Auto-check missing orders for order import** to check for orders that went missing for any reason and import them.
4. In **Street address options**, select how the street name and house number are split over address lines 1 and 2 in Shopify.
5. Select a **Refund product**. Shopify may refund an amount without a link to an order row. ShopCtrl then adds an order row with this product and a credit row with the refunded amount.
6. Check **Credit rows for refunds without items** to create these rows automatically. Clear it if you credit such refunds manually in ShopCtrl. Then only the refund payment is imported.
7. Select a **VAT free tariff**. It is used for products that are not taxable in Shopify.
8. Optionally, in **Apply VAT**, enter the country codes that are not exempt from VAT, even when the order has a **VAT Registration Number** attribute with that country code. Leave it empty to skip this check.

   <img src={require("/img/shopify-order-import-sync.png").default} alt="Order import features in the Shopify synchronization settings" width="600" />

9. Click **Save and Close**.

:::info[Orders are imported only when the synchronization is enabled]

**Order syncronization** alone doesn't start the import. ShopCtrl imports the first orders only after you check the main **Enabled** flag at the top of the settings. See [Enable the synchronization](#enable-the-synchronization).

:::

## Configure track and trace export

ShopCtrl sends the tracking code, carrier and tracking URL to Shopify and marks the order as fulfilled. See [Fulfilling orders and exporting tracking info to Shopify](/User-Guide/07-Fulfillment/tracking-update.md#fulfilling-orders-and-exporting-tracking-info-to-shopify).

Map carriers and warehouses first, and turn on track and trace only after that.

### Map carriers

The carrier names in ShopCtrl and Shopify must match. The Shopify carrier is sent with the tracking code.

1. In **Carrier account mapping**, click **Add**.
2. Select the **ShopCtrl carrier** used for this shop.
3. In **Shopify carrier**, enter the carrier name exactly as Shopify writes it, for example `PostNL`, `DHL Parcel`, `DPD`, `GLS`, `UPS` or `BPost`. Shopify then builds the tracking link for the customer. See the [list of carriers supported by Shopify](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies).
4. In **Scope**, select whether the mapping applies to this **Shop** or to **All shops**.

   <img src={require("/img/shopify-carrier-account-mapping.png").default} alt="Carrier account mapping in the Shopify synchronization settings" width="800" />

### Map warehouses to Shopify locations

Each fulfillment in Shopify belongs to a location. Map every warehouse enabled for the shop to the corresponding Shopify location in **Warehouse to location mapping**.

<img src={require("/img/shopify-warehouse-location-mapping.png").default} alt="Warehouse to location mapping in the Shopify synchronization settings" width="800" />

The list of locations is loaded from Shopify, so the connection must be set up first.

If you ship all orders from one Shopify location, select it in **Default location** instead. The default location is used for every warehouse, and the mapping is ignored.

### Turn on track and trace

In the **Track&Trace features** section:

1. Check **Order integration** to enable track and trace.
2. Check **Send Track&Trace info** to send the tracking info to Shopify. ShopCtrl sends it at the moment the shipment is marked as **Shipped**.
3. Optionally, check **Repair manual fulfillment on Shopify**. If an order was accidentally fulfilled in the Shopify admin, ShopCtrl maps this fulfillment to the shipment and adds the missing tracking info in Shopify.

   <img src={require("/img/shopify-track-trace-sync.png").default} alt="Track&Trace features in the Shopify synchronization settings" width="600" />

4. Click **Save and Close**.

## Configure product stock export

ShopCtrl sends the available stock of products to Shopify. See [Updating Shopify inventory](/User-Guide/08-Product-Management/Product-Export/exporting-inventory.md#updating-shopify-inventory).

In the **Product export features** section:

1. Check **Product stock management** to export the available product stock.
2. Check **Use SKU for not mapped products** if the products were not imported from Shopify. ShopCtrl then finds the Shopify product by its SKU.
3. Check **Check only active products** to search only active Shopify products by SKU. This prevents the stock from going to an inactive product with the same SKU.
4. Optionally, check **Sync HS code when stock export** to send the HS code of the product together with the stock.
5. Check **Enable tracking inventory quantity when stock export** to turn on inventory tracking for a Shopify product that doesn't allow stock updates.

   <img src={require("/img/shopify-product-export-features.png").default} alt="Product export features in the Shopify synchronization settings" width="600" />

6. Click **Save and Close**.

The stock is exported per Shopify location, so [map warehouses to Shopify locations](#map-warehouses-to-shopify-locations) as well.

:::note[Only changed stock is sent]

ShopCtrl sends the stock of a product to Shopify only when it changes. Products whose stock doesn't change after you turn on the export keep their current stock in Shopify. To send the stock of all products once:

- Contact ShopCtrl support to start a full initial stock synchronization.
- Or [import the product stock via Excel](/User-Guide/08-Product-Management/Product-Import/product-import-via-excel.md#how-to-import-product-stock). The import updates the stock, and ShopCtrl then sends it to Shopify.

:::

## Enable the synchronization

1. At the top of the **Functional settings** pane, check **Enabled**.
2. Click **Save and Close**.

ShopCtrl starts the features you turned on, for example the import of the first orders.
