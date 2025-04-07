---
sidebar_position: 3
slug: /docs/dynalogic
---
# Dynalogic 


<img src={require("/img/dynalogic_logo.png").default} height="" width="200" />

## About Dynalogic

Dynalogic is a full-service delivery specialist and an adjunct to successful companies, Dynalogic increases the value of the product ordered. 

Dynalogic provides a wide range of services to customers:
* Delivery any time 7 days a week (same day, next day, early morning, afternoon or evening)
* Time of choice
* Real-time track & trace via Dynalogic
* Carefree in-home/doorstep services (repair, fitting, assembly, installation)
* Distribution network throughout the Benelux region

ShopCtrl provides fully automated integration. You can send shipments directly to Dynalogic, specify the delivery time limitations, receive and print PDF shipping labels, provide your customers with the tracking code and tracking URL, manage created parcels with the ability to cancel shipping labels at Dynalogic.

3 types of supported shipping orders:
* Pick up order
* Exchanging documents and devices with SWAP
* Pick-up at Supplier

## How to start using Dynalogic carrier integration
To start using Dynalogic carrier integration, you need to obtain credentials for API integration from Dynalogic support along with the data sheet with additional settings.
How to create and configure a test Dynalogic carrier account at ShopCtrl:
<img src={require("/img/carrier-dynalogic-settings.png").default} height="" width="800" />

1. Go to **Configuration > Transport > Carrier Accounts**.
2. Click **Add** and select **Dynalogic** carrier from the list.
3. Type in preferred **Name** for the integration.
4. Set carrier **Priority**.
5. Choose **Shops** and/or **Warehouses** for which the carrier will be available.
6. On the **Specifics** pane verify the pre-filled **Application** and **Version** with the data sheet provided by Dynalogic.
7.  **Application** - The name of the application that is sending Order Entry requests
8.  **Version** - Version number of the method (=1.1)
9. Check the **Use test environment** checkbox. The **Test url** is prefilled with the default link to the stagging Dynalogic environment.
10. Enter the **Login name** and **Password** from Ascima provided by Dynalogic.
11. Verify the pre-filled **Order entry version** and **Order change version** with the data sheet provided by Dynalogic.
12. (Optional) You can enable **Extended logging** for the testing phase.
13. Provide the **Account info** data:
    1.  **Customer** - Customer number at Dynalogic. Please use one of the customer numbers from the data sheet you got from your Dynalogic account representative.
    2.  **Supplier** - The supplier code. It defines the supplier of the supplied products, or in case of a pick up order, the return address for the products which are picked up. Please use one of the supplier codes from the data sheet you got from your Dynalogic account representative.
    3.  **Earliest delivery time** - The start of the agreed delivery window. Please use the time frame suggested in the data sheet you got from your Dynalogic account representative.
    4.  **Latest delivery time** - The end of the agreed delivery window.
    5.  **Warehouse location code**. The warehouse code for the supplier's warehouse. Please use one of the warehouse codes from the data sheet you got from your Dynalogic account representative.
14. Specify the **Default order kind** that will define the type of the shipping orders requested. Please use one of the order kinds from the data sheet you got from your Dynalogic account representative.
    *  STDAFH | Afhaalopdracht (Pick up order)
    *  SWAP1Q | Omruilopdracht met instructie (Swap order with instruction)
    *  PULEV | Pick-up bij Leverancier (STD) (Pick-up at Supplier) 
15. **Save** the new carrier account.
16. You can now **Test connection** to verify if connection info is correct to make requests. 

In case of authorization errors, please verify the credentials entered with the data sheet provided by Dynalogic, or contact Dynalogic support.
 
:::info

You can switch between test and live environments by clicking the **Use test environment** checkbox. 

:::
 
 ## Providing additional shipment parameters
 
Currently Dynalogic carrier integration supports a number of custom parameters that could be set manually per shipment.
By default only package dimensions and weight are passed to Dynalogic. Default **Order kind type** is configured in the carrier settings. Additional parameters are set blank.
 
 To create a shipment at Dynalogic with custom parameters, we need to specify these parameters manually when creating a shipment.
 Here is a list of possible parameters and values:
 
| Parameter | Possible values and description |
| --- | --- |
| Order kind type | Default Order kind type is configured in the carrier settings. You can change it manually. |
| Driver Note | Text note for a driver |
| Legitimation Kind | In case the identity check is required. Kinds: Burger service nummer, Other, Paspoort, Rijbewijs |
| Legitimation ID | Id of the specified legitimation kind document |
| Max delivery date | The date the parcel should be delivered |
| Min delivery date | The starting day the parcel could be delivered |
| No delivery from time | Time slot limitation |
| No delivery to time | Time slot limitation |
| Insurance option | Specify whether insurance is needed. €500 - €4000 |
| Sms ETA | True or False. ETA alerts keep customers updated on the location and timing of their upcoming deliveries. |
| Age check | Nor required, minimum age of 16, minimum age of 18 |
| Allow neighbour delivery | True or False |
| Allow Saturday delivery | True or False |
| Allow Sunday delivery | True or False |

:::info

When specifying the delivery time frame, make sure to specify both dates.

:::
 
 
 
 How to create a shipping order at Dynalogic with custom parameters specified:
 
1. Select an order with allocated stock and click **Create Shipment**.
2. On the **Parcel** pane click on the **Options** button to open the label parameters.
3. On the **Additional settings** pane, specify or enter the parameters for the parcel.
4. Click **Ok** to close the window.
5. Make sure the setting **Create parcel on save** is set to true.
6. **Save** the shipment to create the order at Dynalogic with the parameters entered.
 <img src={require("/img/dynalogic-additional-parameters.png").default} height="" width="800" />
 
 
 You can now view the parcel and print the label with the barcode. All the parameters configured for the parcel are stored at parcel level as well:
 
<img src={require("/img/dynalogic-parcel.png").default} height="" width="800" />
 
### Canceling parcel

To cancel a shipment at Dynalogic you need to delete the parcel (with a shipping label) at ShopCtrl. A request will be automatically sent to Dynalogic. Once a request is processed, the parcel will be updated with a **CanceledAt** timestamp.
<img src={require("/img/dynalogic-parcel-cancelled.png").default} height="" width="800" />