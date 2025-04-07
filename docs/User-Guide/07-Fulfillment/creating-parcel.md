---
sidebar_position: 2
slug: /docs/creating-parcel
---
# Creating Parcel 



Default fulfillment flows imply that [creating a shipment](/User-Guide/07-Fulfillment/creating-shipment.md) also creates a **Parcel** and a **Shipping label** using a [Carrier](/User-Guide/07-Fulfillment/Carriers/index.md) integration. 
A warehouse could be configured to automatically generate shipping labels using pre-configured carriers. 

A **Parcel** keeps a record about a carrier and service used to ship the shipment, tracking code, shipping label, and package dimensions.
Using the integrated PIM functionality, ShopCtrl can not only [choose the best carrier to ship an order](/User-Guide/07-Fulfillment/Carriers/index.md managing-carriers), but also easily determine whether an order will fit in one box, or needs to be divided in a multi packages shipment. 
When supported by the carrier integration, the parcel tracking status is monitored and **parcel status** changes accordingly. 

<img src={require("/img/parcel-overview.png").default} height="" width="800" />

When **multiple packages** are required, ShopCtrl can calculate an estimated parcel weight and/or dimension(s), in order to send the correct information to the carrier. A parcel can have several packages depending on the carrier configuration. When supported, the carrier will create multiple labels and tracking references.

:::warning[Please note]

Not all carriers support multiple parcels in combination with third party tools like ShopCtrl.

:::

## Printing and forwarding shipping label

After the **shipping label** is generated and a physical image file is available in ShopCtrl, the following scenarios are possible:

* A warehouse employee prints the label on their own workstation.
* ShopCtrl sends the label to a cloud printer service.
* ShopCtrl uploads the label to an FTP location for further use in external (WMS) application(s).
* ShopCtrl notifies an external application about the generated label (via [webhook](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/webhooks.md)). The external application requests the label using the API.
* ShopCtrl emails the label to a certain supplier or other third party.

The parcel is also immediately linked to the original sales order and tracking information can be [forwarded to the customer](/User-Guide/07-Fulfillment/tracking-update.md).


### How to manually assign a parcel to a shipment

It could happen, that a parcel was created manually and needs to be assigned to a shipment.

To assign a parcel to shipment:

<img src={require("/img/assign-parcel-to-shipment.png").default} height="" width="800" />

1. Go to **Fulfillment > Shipments**.
2. Locate and open a shipment for editing.
3. In the **Parcels** pane click **Select**. A new pop-up window will open showing all unassigned parcels existing for the shop in the system.
4. Type in part of the tracking code to locate the needed parcel.
<img src={require("/img/select-parcel.png").default} height="" width="800" />
5. Double click the parcel row or click **Apply**.
6. Selected parcel and tracking data will be displayed in the parcels pane.
<img src={require("/img/assigned-parcel.png").default} height="" width="" />
7. Click **Save** or **Save and Close** to apply changes to the shipment.
