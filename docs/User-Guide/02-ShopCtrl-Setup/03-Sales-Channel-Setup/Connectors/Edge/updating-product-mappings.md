---
sidebar_position: 6
slug: /docs/virtualstock-updating-product-mappings
description: "Map newly added products to Virtualstock offers and trigger a stock export so their inventory levels reach Virtualstock."
---

# Updating product mappings

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

Product-offer mapping is an ongoing process. Whenever new products are added to **both** ShopCtrl and Virtual Stock (Edge), you must repeat the mapping process to establish the connection for these new items.

After creating new mappings, you must also manually trigger a stock export to ensure the new products inventory levels are updated in Virtual Stock's system.

Steps to Map New Products:

1.  **Prerequisite:** Ensure a product with an identical **Product Code** in ShopCtrl and **Supplier Part Number (SKU)** in Virtual Stock exists on both platforms.
2. Log in to ShopCtrl with **Shop Owner Admin** permissions.
3. Navigate to **Configuration > Shops**.
4. Select your Virtual Stock shop and click **Edit**.
5.  Go to the **Shop synchronization > Edge Synchronization** tab and open the **Products and Offers** pane.
6. Click **Download offers** to fetch the latest list of offers from Virtual Stock.
7.  Click **Preview** to generate a mapping estimation file. Review the **Create** and **Update** tabs to identify new and modified mappings.
8. Once confirmed, click **Map** to finalize the mapping process in ShopCtrl.
9. **Trigger Stock Export:** Manually click **Mark products for export**. This creates sync requests to update all mapped products in Virtual Stock.
:::info[Export Processing Time]

The export process may take up to 20 minutes to complete, as products are sent to the API in batches of 50 to comply with rate limits.

:::
10. **Verification:** Confirm the successful stock export by checking the product information directly in your Virtual Stock account or by downloading a new **Preview** file in ShopCtrl to review the updated status.
