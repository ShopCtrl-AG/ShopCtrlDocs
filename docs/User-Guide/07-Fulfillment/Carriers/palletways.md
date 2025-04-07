---
sidebar_position: 5
slug: /docs/palletways
---

# Palletways 


<img src={require("/img/logo_palletways.png").default} height="" width="" />

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

## About Palletways
Express Pallet Delivery Services To Europe
Express palletised delivery within 24 European countries via a network of over 400 dedicated logistics members through a variety of services, including AM delivery, timed delivery, evening delivery, and all fully tracked via our industry-leading cloud-based technology. Palletways delivers within 24 – 72 hours, depending on location.
 

## About the integration
Fully automated pre-notification and pick-up instructions for all Palletways operations.

 

### Integration Settings
You can manage the settings of the Palletways Carrier account at:

Configuration -> Transport -> Carrier Accounts

You can add a new account by choosing the ‘add’ button and select ‘Palletways’.

<img src={require("/img/palletways_settings.png").default} height="" width="800" />

#### Test Mode
Enable test mode while configuring the plugin.

 

#### Palletways Account settings
Provide API key, account name, and account code. These can be requested at Palletways.

The tracking URL can point to your own website and will be used in transactional emails to the customer.
For example: 
```
http://www.yourwebsite.net/tracktrace/?track[]={0}
```
The placeholder {0} will be replaced by the actual tracking number.

Use the ‘test connection’ button to ensure your credentials are valid.
Please note the ‘test connection’ button can be used in both live and test mode.

 

#### Upload settings
ShopCtrl performs a daily upload to push all new parcels to the Palletways.

**Day offset**
The number of days before an order is uploaded to Palletways.
Some merchants need 1 or 2 business days to process modifications on the order.
The standard setting is one (1).
At the time of writing, Palletways is not supporting same-day pick-up.

**Upload time**
Defines the time of the actual upload.

 

#### Default values
These values are inherited by the parcel settings.

**Transaction Type:**
Collection / Delivery / 3th party (provided by Palletways)

**Tail Lift**
Does the pallet or package requires a lorry with a tail lift

**Book in request**
Select if the consignment required booking in before delivery.

**Collection service**
Economy / Premium

**Delivery service type**
Economy / Premium

**Manifest note**
This comment will be printed on the manifest. It also supports the use of ShopCtrl [merge fields](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md).

> For example: 
NOTE FOR DRIVER: When loading goods, ONLY mention reference number `$$OrderShipment.ShippingCode$$` please. 
Before unloading goods, please call: `$$Order.ShipToName$$`, Phone number `$$Order.ShipToPhone$$` / `$$Order.BillToPhone2$$`. 
In case of no answer, deliver anyway without booking/signature.


