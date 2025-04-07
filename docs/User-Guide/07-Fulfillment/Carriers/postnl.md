---
sidebar_position: 6
slug: /docs/postnl
---

# PostNL 


<img src={require("/img/logo_postnl.png").default} height="" width="" />

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::
## About PostNL
PostNL delivers for everyone. They deliver parcels every day and mail five days a week. On a weekday, they deliver on average 900,000 parcels and 6.8 million letters throughout the Benelux. PostNL is the indispensable link for their customers between senders and recipients, and the connector between the physical and the digital world.

 

## About the integration
Fully automated set-up using your PostNL (API) credentials.
After a successful call, the PostNL API returns a PDF which is automatically added to the shipment(s).

 

### Integration Settings
You can manage the settings of the PostNL Carrier account at:

Configuration -> Transport -> Carrier Accounts

You can add a new account by choosing the ‘add’ button and select ‘PostNL’.

<img src={require("/img/postnl_settings.png").default} height="" width="800" />

#### PostNL Account info
Provide API key, customer code, and account number. These can be requested at PostNL.

Use the ‘test credentials’ button to ensure your credentials are valid.
Please note the ‘test credentials’ button can be used in both live and test mode.

 

#### Default settings
In this frame, you can manage specific carrier settings.

**Barcode Type**
Depending on the parcel/shipping/from-to country, PostNL works with different barcode types.|
The most frequent used types are:

<img src={require("/img/postnl_labeltypes.png").default} height="" width="800" />

Collection location
Provided by PostNL integration team or account manager.

Default Product code
Allows you to select the designated PostNL service type.

Available service types:

| Code | Service Description |
| --- | --- |
| 33084 | Grocery zending rbgg / avondbezorging |
| 22928 | Brievenbuspakje Extra NL |
| 33085 | Standaard Verzending |
| 33086 | Rembours |
| 33087 | Verhoogd Aansprakelijk |
| 33089 | Handtekening voor Ontvangst + Alleen huisadres |
| 33090 | Burenbelevering + Retour bij geen gehoor |
| 33091 | Rembours + Verhoogd aansprakelijk |
| 33093 | Rembours + Retour bij geen gehoor |
| 33094 | Verhoogd Aansprakelijk + Retour bij geen gehoor |
| 33096 | Handtekening voor ontvangst + Alleen huisadres + Retour bij geen gehoor |
| 33097 | Rembours + Verhoogd Aansprakelijk + Retour bij geen gehoor |
| 33189 | Handtekening voor ontvangst |
| 33288 | Rembours + Alleen Distributie |
| 33289 | Handtekening voor ontvangst + Alleen Distributie |
| 33385 | Alleen Huisadres |
| 33389 | Handtekening voor ontvangst + Retour bij geen gehoor |
| 33390 | Alleen Huisadres + Retour bij geen gehoor |
| 44945 | Global Pack |
| 44946 | EPS Standard delivery |
| 44960 | Belgium Deliver to stated address only |
| 44961 | Belgium Delivery to neighbour |
| 44962 | Belgium Signature on delivery + Deliver to stated address only |
| 44963 | Belgium Signature on delivery |
| 44964 | Belgium COD + Return when not home |
| 44965 | Belgium Extra cover (EUR 500) and Deliver to stated address only |
| 44966 | Belgium COD + Extra cover (EUR 500) + Return when not home |
| 44878 | Pickup at PostNL Location Belgium insured (commercial partner) |
| 44880 | Pickup at PostNL Location Belgium, no insurance (commercial partner) |
| 44940 | EU Pack Special to business |
| 44944 | EU Pack Special to consumer |
| 44992 | Direct Parcel to China |

**Use Sandbox**
Check this box in case you are still in the test modus.
