---
sidebar_position: 1
slug: /docs/bowker
---

# Bowker 


<img src={require("/img/bowker_logo.png").default} height="" width="150" />

## About Bowker

[Bowker Transport](https://www.bowkertransport.co.uk/), a family-owned logistics operator established in 1919, offers a comprehensive range of transport and warehousing services in the UK. 
As a member of Palletline, the only UK pallet network selected for Amazon's Inbound Preferred Carrier Program (IPCP), Bowker Transport ensures [reliable and cost-effective delivery](https://www.bowkertransport.co.uk/palletline) to Amazon Fulfillment Centers with fixed time slots. Their extensive network of strategically located distribution centers across the UK and a dedicated support team simplifies and speeds up the inbound freight process, providing customers with seamless transportation solutions.

ShopCtrl integration with Bowker API allows to send shipments directly to Bowker, specify the delivery time limitations, receive and print PDF shipping labels per pallet, tracking codes and tracking URLs.

The Bowker carrier integration is compatible with half-pallet and pallet-sized packages, and supports 2 delivery types:
* Economy
* Next day

## How to start using Bowker carrier integration

:::info[Required Permissions]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::
To start using Bowker carrier integration, you need to obtain credentials for API integration (user name and password) from Bowker support.

How to create and configure a Bowker carrier account at ShopCtrl:

<img src={require("/img/bowker-settings.png").default} height="" width="800" />

1. Log in as a user with shop owner permissions.
2. Go to **Configuration > Transport > Carrier Accounts**.
3. Click **Add** and select **Bowker** carrier from the list.
4. Type in preferred **Name** for the integration.
5. Set carrier **Priority**.
6. Choose **Shops** and/or **Warehouses** for which the carrier will be available.
7. On the right provide the **Default goods description** for your shipments. You can override it later for particular shipments.
8. (Optional) On the **Specifics** pane check the **Sandmox mode**, if you would like to create a label with `TEST` order prefix in the production environment.
:::warning[**Please note:**]

Bowker doesn't provide a dedicated sandbox environment. To **test** the label creation you can use this checkbox to create a label in the production enviroment with the TEST number prefix. This will identify that the label was created for testing purposes and should not be routed.

:::
9. Verify the pre-filled **Production url**  with the data provided by Bowker.
10. Enter **Username** and **Password** provided to you by Bowker support team.
11. (Optional) Enable the **Extended logging** for the starting period.
12. You can now **Test connection** to verify if authorization at Bowker is successful.
:::warning

In case of authorization errors, please verify the credentials entered with the data provided by Bowker, or contact Bowker support.

:::
13. On the **Account info** section specify the preferred **Collection date**:
    * Do not specify- could be specified later for a specific shipment in the package parameters.
    * Today regardless of weekend/holiday
    * Next day checking if weekend/holiday setting enabled
14. Enable the **Weekend collection date** if needed.
15. Choose **Delivery type**:
    * **Economy**
    * **Next day**
16. Choose the default **Delivery window**:
    * During day
    * AM (incurs extra charges)
    * PM (incurs extra charges)
    * Book in
    * At (delivery time is required for this option for the specific shipment, incurs extra charges)
17. Decide whether **Tail lift is required** for loading.
18. **Default template parameters** are predefined. All of the parameters could be adjusted:
    * Paper type 
    * Orientation
    * Page margins
    * Label size
    * Add or remove page break between labels
19. **Save** the new carrier account.


You can test and print the example Bowker shipping label template by enabling the **Test mode**. In the test mode ShopCtrl will use the same sample Bowker label each time you create a shipment. You can adjust the label size and margins as many times as you need till it fits your requirements. No real labels will be created while testing.
**Disable** the Test mode and Sandbox mode when the testing phase is over.



