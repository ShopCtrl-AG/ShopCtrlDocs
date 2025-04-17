---
sidebar_position: 1
slug: /docs/create-shop
---

# Create Shop

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

A **Shop** in ShopCtrl is a sales channel through which you generate orders. It could be a webshop, a marketplace, or an offline point of sale - 'In Store'.
Each shop has its own currency, branding, company contact information, document and email templates, and synchronization with a webshop or a marketplace. Employees could be assigned to a shop with certain roles that will grant them a defined set of permissions limited to this shop only.

## How to create a shop

You can create a new shop both from the **Configuration > Shop Owners** and **Configuration > Shops** tabs.

![create-shop-site-information](/img/create-shop-site-information.png)
:::warning[**Please note**]

Some settings in the Topic menu will be available only after the shop is saved for the first time.

:::

To create a shop:

1. Go to **Configuration > Shops** tab.
2. Click **Add** and select a **Shop group** to which you want to add a new shop.
3. Fill in the shop **Name**.
4. (Optional) Provide **URL**.
5. Select shop **Country**.
6. Change pre-selected **Culture** and **Currency** if needed.
7. Choose shop **type**: **Webshop**, **Marketplace** or **In Store**.
8. Upload a **Logo** by clicking the choose file button and selecting an image file. The logo could be used for branding document templates.
9. Upload an **Icon** image, for internal use only.
10. Provide the necessary company **Site Information** that could be used later to populate the merged document templates:
    1. Company name
    2. Site contact information
    3. Site address details
    4. Site bank and payment details
11. On the **Financial > Payment types** tab, select the main **Payment types** that will be used in your shop and default payment terms.
    ![shop-settings-payment-types](/img/shop-settings-payment-types.png)
12. On the **Financial > Payment terms** tab, Select the **Default Payment terms** for the shop.
    ![shop-settings-payment-terms](/img/shop-settings-payment-terms.png)
13. On the On the **Financial > VAT** tab, mark available all the **VAT tariffs** used in the shop.
    ![shop-settings-vat-tariffs](/img/shop-settings-vat-tariffs.png)
14. Specify the **Default VAT tariff** used for most of the products.
15. Decide whether to display prices including or excluding VAT by marking the checkbox **Display Inc VAT**.
16. On the **Financial > Payment** tab you can specify **Max payment deviation**, which is the maximum allowed difference for under- and overpayments. If the outstanding amount or overpayment fits in the payment tolerance limit, the payment is allocated and the order/invoice will be considered as paid.

    :::info[Info]

    The **Max payment deviation** limit depends on the currency used in the shop. For example, for Euros the deviation is specified in decimals. While the deviation for Norwegian crones can be specified only in whole numbers.
    
    :::


    ![shop-settings-payment-allocations](/img/shop-settings-payment-allocations.png)

17. On the Warehouses tab select **Warehouses** available for the shop.
    ![shop-settings-warehouses](/img/shop-settings-warehouses.png)
18. Click **Save and Close** to create a shop.
