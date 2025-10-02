---
sidebar_position: 4
slug: /docs/gls
---

# GLS 


<img src={require("/img/gls-icon.png").default} height="" width="200" />

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

## About GLS

The GLS Group offers its parcel services in 40 European countries, 8 U.S. states, and Canada. Mostly through its subsidiaries and also through reliable partner companies.
GLS offers companies - from small to large and from all sectors - reliable parcel, freight, and express solutions, nationally and internationally, both B2B and B2C.

## About integration
ShopCtrl provides a fully automated setup using your MyGLS credentials. You can send parcel and freight orders directly to GLS and book additional express services for your shipments.
After a successful call, the GLS API returns a shipping label PDF, along with the tracking code and tracking URL, which is automatically added to the shipments.

For more information about GLS NL services, please visit GLS [Parcel](https://gls-group.eu/NL/nl/over-ons/gls-netherlands/parcel), [Freight](https://gls-group.eu/NL/nl/over-ons/gls-netherlands/freight), [Express services](https://gls-group.eu/NL/nl/over-ons/gls-netherlands/express) pages.

Supported ship types and services.

**Parcels (up to 32 kg)**:

* Regular parcel
* Economy parcel
* Time Definite Express Service T9 - Delivery before 09:00 on weekdays
* Time Definite Express Service T17 - Delivery before 17:00 on weekdays
* Saturday Service S9 - Delivery before 09:00 on Saturday
* Saturday Service S12 - Delivery before 12:00 on Saturday
* Saturday Service S17 - Delivery before 17:00 on Saturday



## How to start using GLS carrier integration

To start using GLS carrier integration, you need to obtain [MyGLS NL](https://my.gls.nl/login) user name, password, and customer ID. 
Please contact GLS support for more information about how to create and configure a MyGLS account.


Meanwhile, you can test GLS integration by connecting to the test API. Please contact GLS to get the API key for the test environment. You can generate shipping labels and verify the label data.

:::warning[]

**GLS V2** carrier takes the **Shipper info** from the warehouse the order is shipped from. Make sure the company details you would like to be printed on the shipping label are provided on the **Warehouse details > Address** page.

:::

To connect to the GLS test API account and generate a test shipping label:

1. Go to **Configuration > Transport > Carrier Accounts** in your acceptance ShopCtrl environment.
2. Click **Add** and select **GLS V2** carrier from the list.
3. Type in a GLS carrier **Name**.
4. Set carrier **Priority**.
5. Choose **Shops** and/or **Warehouses** for which the carrier will be available.
6. Fill in the **Customer number, Username, and Password** which are your MyGLS account credentials.
7. Fill in the **Primary API subscription key** provided by GLS.
8. Check the **Test mode**.
9. Click **Save** or **Save and Close** to create a carrier.

You can now create test shipping labels for your orders. 

:::warning[**Note**]

To prevent user error (e.g. accidental scanning), GLS does NOT include barcodes on test labels. Barcodes are present on production labels.

:::


### Setting up a GLS carrier account in ShopCtrl

<img src={require("/img/create-gls-v2-carrier.png").default} height="" width="800" />

How to create and configure a GLS carrier account:

1. Go to **Configuration > Transport > Carrier Accounts**.
2. Click **Add** and select **GLS V2** carrier from the list.
3. Type in GLS carrier **Name**.
4. Set carrier **Priority**.
5. Choose **Shops** and/or **Warehouses** for which the carrier will be available.
6. On the **GLS Account Configuration** pane enter the **Customer number** provided by GLS.
7. Fill in **Username**, which is your MyGLS account user name.
8. Enter **Password**, which is your MyGLS account password.
9. Click **Test credentials** to verify that the connection to GLS was successful.

11. (Optional) Mark the **Economy parcel** checkbox to use the economy service for your shipments (Only available for parcel ship type).
12. (Optional) Choose **Express service** (can not be used in combination with the Economy shipping): 

| Ship type | Express service available |
| --- | --- |
| Parcel | Time Definite Express Service T9 - Delivery before 09:00 on weekdays |
| Parcel | Time Definite Express Service T17 - Delivery before 17:00 on weekdays |
| Parcel | Saturday Service S9 - Delivery before 09:00 on Saturday |
| Parcel | Saturday Service S12 - Delivery before 12:00 on Saturday |
| Parcel | Saturday Service S17 - Delivery before 17:00 on Saturday |

12. Click **Save** or **Save and Close** to create a carrier.

:::warning[**Please note**]

To ship an order via express shipping, it is necessary to provide the customer's **phone number**.

:::

