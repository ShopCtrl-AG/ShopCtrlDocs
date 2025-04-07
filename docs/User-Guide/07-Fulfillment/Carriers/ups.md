---
sidebar_position: 8
slug: /docs/ups
---

# UPS 


:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::


<img src={require("/img/ups-logo.png").default} height="" width="100" />

## Setting up UPS integration

To start using UPS integration in ShopCtrl we need to get the following data about your UPS account:

*  User name
*  Password
* Access license number
* Shipper account number

User name and Password are the credentials you use for UPS.com and the shipper account number is your UPS account number. The access license number is provided by UPS when you request an access key.

To request Access Key, go to [UPS Developer Kit](https://www.ups.com/upsdeveloperkit) page, login under your UPS account and click **Request an access key**. 
You wil be asked to fill in several questions and choose an account number that will be connected to this access key.
- I need an access key because: "I was informed by a software vendor that I need an access key"
- Software/Vendor name: "ShopCtrl"
- Choose an account to associate with this access key: account you would like to connect to this integration

<img src={require("/img/request-access-key-form.png").default} height="" width="800" />

After going through the steps and submitting a request, UPS will issue an Access key. Please keep this key to enter it later on the carrier configuration page.

## Setting up UPS integration on ShopCtrl

Carrier synchronization for UPS is configured per shipping service you are planning to use.

<img src={require("/img/ups-carrier-details.png").default} height="" width="800" />

How to configure UPS carrier account:

1. Go to **Configuration > Transport > Carrier Accounts**.
2. Click **Add** and select **UPS** from the dropdown list. The new carrier details page will be opened on a new tab.
3. Enter the meaningful carrier **Name** preferrable mentioning the service used.
4. (Optional) Select **Shops** for which the carrier will be used.
5. (Optional) Select **Warehouses** for which the carrier will be available.
6. Proceed to providing **Shipper info** which are your company contact details and will be used for generating labels:
    1. Shipper name
    2. Shipper address
    3. Shipper postal code
    4. (Optional) Shipper state
    5. Shipper country code
    6. Shipper phone number
    7. Shipper mail address
    8. Goods description
7. Enter the **User name** of your UPS account.
8. Provide **Password** for this UPS account.
9. Enter the **Shipper attention name** that will be printed on shipping label.
10. Fill in the **Notification email address**.
11. Fill in the **Access license number** which is the access key obtained from UPS.
12. Enter your **Shipper account** number connected to the access key.
13. Click **Test credentials** to verify that the authentication was successful.
14. You can now choose the **Service code** to be used on this account.
15. **Save** or **Save and Close** carrier to apply changes.

Once ready, **Enable** the carrier to immediately include it to the carrier distribution.


