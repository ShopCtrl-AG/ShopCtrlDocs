---
sidebar_position: 7
slug: /docs/royal-mail
---
# Royal Mail 


<img src={require("/img/uk-royal-mail-icon.png").default} height="" width="" />

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::



With the Royal Mail Click & Drop connector, you can generate the labels for your orders with ShopCtrl.

## Setting up UK Royal Mail  Integration

To set up an integration between ShopCtrl and your Royal Mail account, you first need to create an integration within your Royal mail Click & Drop [Online Business Account](https://www.royalmail.com/discounts-payment/credit-account/online-business-account).

Follow these instructions from Royal Mail to create integration and obtain **authorization key**: [How to import orders with the Click & Drop API](https://help.parcel.royalmail.com/hc/en-gb/articles/360011462338-How-to-import-orders-with-the-Click-Drop-API).


## Setting up UK Royal Mail Click & Drop synchronization in ShopCtrl

Carrier synchronization for UK Royal Mail Click & Drop is configured per shipping service you are planning to use.
For different Royal Mail services, we need to configure different Royal Mail Click & Drop carrier accounts within ShopCtrl. All of them will connect to the same Royal Mail Click & Drop OBA. 
ShopCtrl will decide which carrier to use to ship the order based on the product package's dimensions, limits, and prices set on carrier accounts. When creating a shipment in ShopCtrl, the parcel size is auto-calculated based on the product package size, and the parcel dimensions are sent to Royal Mail.

:::warning[**Before you start**]

Make sure to provide **contact information** for all of the ShopCtrl **Warehouses** from which you are planning to ship orders using the UK Royal Mail Click & Drop service. Contact information from warehouse details will be used as sender "Ship From" information when auto-requesting shipping labels.

:::

<img src={require("/img/uk-royal-mail.png").default} height="" width="800" />

To set up carrier synchronization within ShopCtrl:

1. Go to **Configuration > Transport > Carrier Accounts**.
2. Click **Add** and from the drop-down list select **Royal Mail Click&Drop**.
3. Enter the meaningful carrier **Name** preferrable mentioning the service used.
4. (Optional) Select **Shops** for which the carrier will be used.
5. (Optional) Select **Warehouses** for which the carrier will be available.
6. On the Specifics tab specify the API Base URL: `https://api.parcel.royalmail.com/api/v1`.
7. Enter the **API key** that you generated earlier within your Royal mail account.
8. Click **Test credentials** to check the connection.
9. Specify the **Channel name** which is the name of your company in the Royal Mail Click & Drop OBA.
10. From the drop-down list select **Service code** which is the UK Royal Mail shipping service.
11. (Optional) Select the preferable **Parcel format** suitable for the service selected. Or leave the field **Undefined**.
12. **Enable** the carrier to make it available for the orders right away.
13. **Save** or **Save and Close** to apply changes.


The shipping service list is a standard one. If your Royal Mail OBA supports an extended list of shipping services, please contact our support team to add additional services to the list. See more on [Royal Mail - Manage your shipping services](https://help.parcel.royalmail.com/hc/en-gb/articles/360016578253-Manage-your-shipping-services).

