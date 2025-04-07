---
sidebar_position: 1
slug: /docs/packing-instructions
---

# Packing instructions

ShopCtrl platform is proud to offer a powerful and flexible feature designed to streamline your packing process – Customized Packing Instructions. This innovative tool empowers users to create packing instructions tailored to specific countries, products, customers, or warehouses (suppliers) ensuring optimal packing efficiency and compliance.

With our customized Packing Instructions feature, you can easily generate detailed packing instructions that address the unique requirements of different destinations, products, or customers. Whether you need to account for varying regulations, specific product handling instructions, or customer preferences, this feature allows you to create customized instructions for every shipment.

As a shop owner, you have the ability to determine which users have the permission to view, add, and delete packing instructions.

Here's how it works:

## 1. Country-specific packing Instructions:

By selecting a destination country, our platform provides you with a comprehensive set of packing guidelines specific to that location. You can access detailed information about customs regulations, packaging standards, labeling requirements, and any other country-specific considerations to ensure your shipments comply with local regulations and smoothly pass through customs.
For example, for non-EU deliveries it is mandatory to have a commercial invoice, but each importing country defines the documents requirements differently. You can specify a customized commercial invoice document for each of the destination countries you are exporting goods to.

How to create country specific packing instruction:

Before creating packing instruction for a Commercial invoice for example, please create the document template first. You can use a number of corresponding merge fields that are available by the moment the shipment is beeing processed.

![create-packing-instruction-countries](/img/create-packing-instruction-countries.png)

1.  Log in as a user with permission to add new packing instructions.
2.  Go to **Configuration > Transport > Packing instructions**.
3.  Click **Add** to create a new instruction.
4.  Enter the **Name** of the packing instruction, which will be used as a name for the document on the shipment page.
5.  Choose **Document template** to create along with the packing documents.
6.  (Optional) Enter **Shipment Message** - warning to be displayed on a shipment level.
7.  (Optional) Enter **Shipment Row Message** - warning on an shipment row level. If none products or product parameters are configured for the packing instruction, this message will be displayed for each shipment row disregarding the products in the shipment.
8.  Proceed to the **Shops** tab and choose **Selected Shops** to specify for which shops this packing instruction rule is to be applied. Or leave **All Shops** to include all of the shops.
9.  On the **Countries** tab you can choose destination countries for which the document, like Commercial invoice will be created. You can choose among several options:
    1.        All Countries (default)
    2.        Countries Outside EU - a predefined not-editable list of non-European Union countries
    3.        Countries Inside EU - a predefined not-editable list of European Union countries
    4.        Selected Countries - editable list of countries.
10. **Enable** the instruction at the top of the page
11. Click **Save** or **Save and Close** to save the instruction.

You can test the feature by creating a new shipment for the order that fits the set packing instructions rules. The new document for printing is displayed in the **Pack** section.
![shipment-commercial-invoice](/img/shipment-commercial-invoice.png)

:::warning[Please note]

Packing instructions are applied only to the **new** shipments, that were not picked yet. If you would like to generate a document for the existing shipment, **save** the shipment to trigger the packing instructions matching.

:::

## 2. Product-specific packing Instructions:

Different products may have distinct packing requirements to ensure their safe transportation. With our feature, you can create packing instructions that are specific to individual products or product properties. This allows you to include details such as packaging materials, handling precautions, temperature requirements, or any other special instructions necessary for the particular item being shipped.

![create-packing-instruction-products](/img/create-packing-instruction-products.png)

How to create country specific packing instruction:

1. Log in as a user with permission to add new packing instructions.
2. Go to **Configuration > Transport > Packing instructions**.
3. Click **Add** to create a new instruction.
4. Enter the **Name** of the packing instruction, which will be used as a name for the document on the shipment page.
5. (Optional) Choose **Document template** to create along with the packing documents for the specific product.
6. (Optional) Enter **Shipment Message** - warning to be displayed on a shipment level.
7. Enter **Shipment Row Message** - warning on a product level.
8. Proceed to the **Shops** tab and choose **Selected Shops** to specify for which shops this packing instruction rule is to be applied. Or leave **All Shops** to include all of the shops.
9. (Optional) On the **Countries** tab you can choose destination countries for which the specific instructions will be displayed.
10. (Optional) On the **Products** tab you can specify for which product(s) to show the additional instructions and/or documents.
11. (Optional) On the **Product properties** tab you can select specific properties and it's values (like material, or certain product type). The properties in the list will be treated with an OR clause. Meaning, that instruction will be shown if a shipment row product has any of the properties listed.
12. (Optional) Limit the number of **Customers** for which you would like to display the previously selected warnings and documents. By default **All** are selected.
13. **Enable** the instruction at the top of the page
14. Click **Save** or **Save and Close** to save the instruction.

By providing clear and concise packing instructions tailored to each scenario, you can eliminate guesswork and minimize packing errors. This streamlines your packing process, reduces delays, and enhances overall operational efficiency.

![shipment-packing-instructions-warnings](/img/shipment-packing-instructions-warnings.png)

## 3. Customer-specific packing Instructions:

Understanding that each customer may have unique preferences or specific packaging needs, our Customized Packing Instructions feature enables you to generate customer-specific packing guidelines. By assigning specific instructions to each customer profile, you can ensure consistency in packaging and streamline the process based on their individual requirements.

Customer-specific packing instructions are configured the same way as country or product specific packing instructions. On the customers tab you can specify for which customers to display warnings or packing documents.

With customer-specific packing instructions, you can cater to your clients' preferences and requirements. By consistently meeting their expectations, you enhance customer satisfaction and strengthen relationships.

![create-packing-instruction-customers](/img/create-packing-instruction-customers.png)

## 4. Warehouse-specific packing Instructions:

Efficiently manage your warehouse operations and enhance collaboration with suppliers by utilizing warehouse-specific packing instructions. This feature allows you not only to create documents for your in-house processes but also to customize instructions specific to individual suppliers. These tailored documents seamlessly integrate into the automated **dropshipment** flow within your ShopCtrl environment, optimizing the efficiency of your entire supply chain.

Warehouse-specific packing instructions can encompass various rules, providing specificity for products, countries, and customers for your private warehouse. Alternatively, packing instructions can function as standalone guidelines for any dropshipment supplier. You have the flexibility to send these generated documents directly with the purchase order the moment you create a shipment for the order.

![create-packing-instruction-warehouse](/img/create-packing-instruction-warehouse.png)

Packing instructions can be configured to be dispatched alongside other purchasing documents to the supplier immediately upon the creation of a drop shipment. To enable the sending of packing instructions in an email to the supplier, kindly activate the **Dropship Create Packing Slip** setting on the supplier details page.

### Configuring packing documents

**Packing documents** accumulate all the documents that are put into the package: packing slip and the set of packing instructions documents applied to the shipment.
The **Packing slip template** is configured individually for each shop on **Shop settings > Document templates**.
Removing the template from the configuration means the document won't be auto-generated.

![shop-dettings-document-templates](/img/shop-dettings-document-templates.png)

You can also decide per shop whether to generate the packing documents by default the moment shipment is created on:
**Shop settings > Order Management > Default documents to generate for a shipment: Generate packingslip by default**.

![shop-settings-order-management](/img/shop-settings-order-management.png)

For **dropshipments**, you have the flexibility to choose whether to automatically generate packing documents at the moment the shipment is created for each supplier or opt for a manual action. Dropshipments operate independently of the shop setting; instead, the supplier setting takes precedence and overrides it.
You can configure whether to auto-create packing slip and packing instructions at shipment creation at **Supplier details> Dropship > Packing slip**.

![dropship-packing-instructions.png](/img/dropship-packing-instructions.png)

Please note, it is also possible to disable packing slip creation, but keep packing instructions generated. Remove document template fro the packing slip from the shop settings, and it won't be generated.

On the **Warehouse** level there is a possibility to make packing documents required to be printed before marking the shipment as packed:
**Warehouse settings > Require printing of packing documents**

![warehouse-settings](/img/warehouse-settings.png)

In summary, our Customized Packing Instructions feature offers a versatile solution for generating packing instructions tailored to different countries, products, or customers. By utilizing this tool, you can optimize your packing process, ensure compliance, enhance customer satisfaction, and mitigate risks associated with shipping.
