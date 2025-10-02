---
sidebar_position: 6
slug: /docs/carriers
---
# Carriers 

Integrations with different shipping services in ShopCtrl are configured through carrier accounts.
There is a number of integrations available with world-leading logistics companies and international parcel delivery services. 

Here is a list of available integrations:

* DHL
    * DHL Europlus
    * DHL Express
    * DHL For You
    * [DHL Parcel UK](./dhl-parcel-uk.md)
* DPD
* [GLS](./gls.md)
* [UPS](./ups.md)
* [UK Royal Mail](./royal-mail.md)
* [Post NL](./postnl.md)
* [Palletways](./palletways.md)
* JKB service
* Raben
* De Rooy
* DutchNed
* [Dynalogic](./dynalogic.md)


## Managing carriers

You can effectively distribute orders among carriers based on:

* Parcel weight
* Carrier priority
* Shipping price

First of all, you can set up different carrier accounts for different **warehouses**. The carrier could be linked to a warehouse or several **shops**.

You can also specify shipping **prices** per country for the carrier. These prices will be taken into account in carrier distribution and a cheaper carrier will be a preferred one if other parameters are not specified.

<img src={require("/img/carrier-prices.png").default} height="" width="800" />

:::warning[Please note]

Carrier shipping rates also limit carrier assignment based on the country of destination. Orders to a country that is not listed in the prices tab, won't be assigned to this carrier.

:::

Set carrier priority to a higher number if you would like this carrier to have an advantage over other carriers with similar service terms.

### Distribute shipments based on product dimensions

Carriers in ShopCtrl are specific to the carrier service. This way we could differentiate orders not only between different carriers but also between different services offered by the same carrier based on product dimensions.

How to set up carrier assignment based on product dimensions:

1) Turn on this feature on a shop owner settings: **Configurations > Shop Owners > Shop owner details page > Fulfillment > Shipment Settings > Allow Product General Dimensions to be used for parcel dimensions.**
<img src={require("/img/shopwner-settings-shipment-settings-dimensions.png").default} height="" width="500" />
2) Specify **product dimensions** for all of the products you are selling. You can import dimensions along with other details using your sales channel synchronization or [Excel product import](/User-Guide/08-Product-Management/Product-Import/product-import-via-excel.md) option.
3) Configure limits for the carrier account:
    1) Go to **Transport > Carrier Accounts** and open a Carrier.
    2) Click on the Limits tab.
    3) Set Min and Max **Weight** values in kg or grams.
    4) (Optional) Set Min and Max **Length**, and max belt size in meters, centimeters, or millimeters.
    5) (Optional) Set the max **Volume** value in liters.
    6) **Save** or **Save and Close** carrier account.
<img src={require("/img/carrier-limits-small-package.png").default} height="" width="500" />
4) Proceed with configuring limits on other carrier accounts.

:::info[Please note]

Border values are included in the calculation. So if you ship a 3 kg product and set the carrier weight limit to 3 kg, the shipment will be distributed to that carrier.
If there are several carriers with similar or overlapping limits, you can regulate carrier assignment by adding shipping prices and/or setting carriers' priority.

:::


