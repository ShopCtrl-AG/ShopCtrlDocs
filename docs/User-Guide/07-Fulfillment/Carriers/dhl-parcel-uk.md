---
sidebar_position: 2
slug: /docs/dhl-parcel-uk
---
# DHL Parcel UK 


<img src={require("/img/DHL-LOGO.jpg").default} height="" width="150" />

DHL is an American-founded German logistics company providing courier, package delivery and express mail services, delivering over 1.8 billion parcels per year.

ShopCtrl provides integration with a number of DHL divisions:

* DHL Europlus
* DHL Express
* DHL For You
* DHL Parcel UK

The number of functions supported by the integration differs based on the DHL API methods.

## DHL Parcel UK

Region: United Kingdom. Creating Domestic (UK) and International parcel shipments (UK pickup) 
[Parcel UK shipping and tracking](https://www.dhl.com/gb-en/parcel/business-users.html) 

ShopCtrl provides a fully automated setup. You can dynamically retrieve available services by parcel ship to address and size, receive and print shipping labels along with the tracking codes and urls, cancel shipping labels and get tracking information for your parcels. 

The current DHL carrier integration is focused on domestic UK shipments and also supports shipments to the three island territories in the British Islands (Bailiwick of Guernsey, the Bailiwick of Jersey, Isle of Man). To support shipments to the channel islands, additional information is added to the label: order value and goods description. 
Please contact our support team if you would like to use DHL for international shipments.

DHL Parcel UK offers a wide selection of services for your domestic and international shipments. Below is the list of services available.

**DHL Parcel UK Domestic Services**

Bagit Next Day
Bagit Next Day 09:00
Bagit Next Day 10:30
Bagit Next Day 12:00
Bagit Next Day - ServicePoint Delivery
Bagit Saturday 09:00
Bagit Saturday 10:30 (Specified Address / Leave Safe)
Bagit Saturday 10:30 (Specified Address / Neighbour)
Bagit Saturday 10:30
Bagit Saturday (Specified Address / Leave Safe)
Bagit Saturday (Specified Address / Neighbour)
Bagit Saturday
Pallet 48 Hours
Pallet Next Day
Parcel 48 Hours (Specified Address / Neighbour)
Parcel 48 Hours - ServicePoint Delivery
Parcel 72 Hours (Specified Address / Leave Safe)
Parcel 72 Hours - ServicePoint Delivery
Parcel Next Day
Parcel Next Day 09:00
Parcel Next Day 10:30
Parcel Next Day 12:00
Parcel Next Day - ServicePoint Delivery
Parcel Saturday 09:00
Parcel Saturday 10:30 (Specified Address / Leave Safe)
Parcel Saturday 10:30 (Specified Address / Neighbour)
Parcel Saturday 10:30
Parcel Saturday (Specified Address / Leave Safe)
Parcel Saturday (Specified Address / Neighbour)
Parcel Saturday

**DHL Parcel UK International Services**

DHL Parcel Connect
International Road Economy
Parcel 48 Hours (Specified Address / Neighbour) - Channel Islands
Parcel 48 Hours - ServicePoint Delivery to Channel Islands
Worldwide Air

### Setting up DHL Parcel UK Integration

To start using DHL Parcel UK integration, please follow the [DHL API onboarding process](https://developer.dhl.com/api-reference/parcel-uk#get-started-section/user-guide--get-access).
To set up the DHL carrier integration, you'll need to obtain [**Client ID** and **Client Password**](https://developer.dhl.com/api-reference/parcel-uk#get-started-section/user-guide--using-the-api) from your DHL Parcel UK API account, as well as Pickup Account number. 

To check the setup and generate the first test labels, we suggest to start with configuring connection to the UAT environment first. 
According to the [DHL](https://developer.dhl.com/api-reference/parcel-uk#get-started-section/user-guide--environments):
> The UAT environment can be used for testing and development freely. Only the production environment will trigger underlying processes such as billing and operational procedures.



### Setting up a DHL UK carrier account in ShopCtrl
 
:::info[Required Permissions]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

DHL Parcel UK integration allows to dynamically retrieve available products and services by parcel address and size. You can still limit the services ordered to a number of preferable ones and prioritize the ordered products.
This means, that before creating a label ShopCtrl requests a list of available products for the specific parcel. Then chooses the service to use among those specified in the carrier settings, according to the priority. If none of the services chosen is available, the error is displayed identifying which services could ship the parcel. 
Currently only 'Package' type shipments are supported - ShopCtrl 'Box' type.

<img src={require("/img/dhl-parcel-uk-carrier-configuration.png").default} height="" width="800" />

How to create and configure a DHL Parcel UK carrier account:

1. Go to **Configuration > Transport > Carrier Accounts**.
2. Click **Add** and select **DHL UK Parcel** carrier from the list.
3. Type in DHL carrier **Name**.
4. Set carrier **Priority**.
5. Choose **Shops** and/or **Warehouses** for which the carrier will be available.
6. Enter the **Default goods description** that will be printed on the labels when needed.
7. On the **DHL Specifics > Connection** pane uncheck the **Use UAT environment** checkbox to switch to live environment. You can always enable it back for testing purposes.
:::info[UAT environment]

By default, the test credentials to the DHL UAT environment are pre-filled with the test credentials provided by DHL. By enabling Use UAT environment mode, you can generate test labels with different parameters, check configuration and services availability.

:::
7. Enter the **Client ID (prod)** and **Client password (prod)** provided by DHL.
8. Click **Test connection** button to verify that the credentials are correct and connection to DHL is successful. In case of authentication error, please crosscheck the credentials entered.
9. On the **Account info** pane enter the **Pickup Account** number provided by DHL during the onboarding process.
10. Change the default **Ordered products** list codes according to your preferences. 
:::info[DHL Ordered products codes]

The default pre-selected codes are:
`220` - Parcels Next day
`48` - Parcel 48 Hours to Specified Address - Channel Islands

:::
11. **Dropoff type** - specify how shipments will be handed over to DHL.
12. Choose the **Recipent type**, who is the consignee of the parcel: residential or business.
13. Select consignee **Address type**: Doorstep or Service point.
14. **Weekend pickup date** - check if you would like to set the pick up date on a weekend. Otherwise a day after a weekend will be used.
15. Click **Save** or **Save and Close** to create a carrier.


#### Additional advanced settings

**Get available products.** This feature allows to check the available DHL UK services for the specific parcel without actually creating a shipping label.

To get the possible domestic or international shipping variants available for your shipment:
1. Fill in the **Origin (From)** address of the warehouse you will be shipping from: Country code and Postal code.
2. Fill in the **Destination (To)** address: Country code and Postal code.
3. Select destination **Address type**: Doorstep or Service Point.
4. Select destination **Recipient type**: Residential or Business.
5. Provide the **Parcel** details: Packages count and Weight in kilograms.
6. Click Get available products to dynamically retrieve the suitable services list from DHL Parcel UK.

You can now decide which service to use to ship your parcel and update the **Ordered product(s)** field with the code of the selected service. 

Enable the **Extended logging** to ease the configuration errors detection for the first launch phase.

**Retry if API timeout**. Due to the rate limits applied by DHL to the amount of API requests, it is recommended to have this setting enabled by default. 
The recommended **API timeout**, an interval between API calls, is set in ms and is 5000 by default. You can increase the interval if required.

**No check for available services** - this setting disables the default label creation setup, when for each shipment first the list of available services is retrieved from DHL. When this check is disabled, the first code specified in the Ordered products field is applied for each parcel.

**Default template parameters** - Here you can customize the default shipping label margins and size. Enter or change the values in a whitespace-separated format: `Top Right Bottom Left Size`. Click **Check** button to get the parsed values of the template.



