---
sidebar_position: 2
slug: /docs/amazon-1p-group-shipment
---

# Amazon 1P Group Shipment



Group shipments and submitting Advanced Shipment Notifications (ASNs) to Amazon are both crucial components of the logistics and supply chain management process, particularly for vendors selling products through Amazon's platform. 

A group shipment combines multiple individual shipments destined for the same location into a single shipment. Advanced Shipment Notification (ASN): ASNs serve as proactive notifications dispatched by vendors or suppliers to Amazon, signaling the dispatch and en route status of a shipment towards one of Amazon's fulfillment centers.

In ShopCtrl, the process of creating group shipments and submitting ASNs to Amazon is seamlessly integrated into the logistics and supply chain management workflow. 

###  Creating Group Shipments with Pack Integration

Under the [Pack integration feature](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/06-Fulfillment/integration-with-wms-via-ftp.md), ShopCtrl efficiently processes packing information relayed from external Warehouse Management Systems (WMS) and incorporates it into each shipment. Items can be packed into cartons and placed onto pallets, or items can be palletized directly without cartons. All relevant item data is encapsulated within the shipment pack information, which is then consolidated into the group shipment pack information.

Additionally, this integration facilitates the creation of new group shipments based on the provided pack files. The system operates under the assumption that a CSV document contains data for several orders, and based on this information creates group shipment.  It's important to note that individual shipments for each order should already be created and picked at this stage.
Group shipment with consolidated pack information:
<img src={require("/img/group-shipment-packed.png").default} height="" width="800" />

In the event of discrepancies during pack file processing, ShopCtrl generates alerts within the group shipment to notify designated employees of any issues:

<img src={require("/img/group-shipment-discrepancies-alert.png").default} height="" width="800" />

**Pack Information Management:** Within the group shipment creation process, users are empowered to manage and update pack information. This includes the ability to adjust the total weight of each row within the group shipment, ensuring precise and updated shipping data.

### How to Manually Create a Group Shipment:

1. **Log in** as employee with a permission to create group shipments.
2. Navigate to the **Fulfillment > Shipments**.
3. Locate and select several open shipments originating from the same warehouse and destined for the same location.
4. Proceed to the top menu and click on **Action**, then select **Add to group**.
5. A new screen will appear, presenting you with the option to either include the selected shipments in an existing group shipment or create a new group shipment based on these selections.
<img src={require("/img/add-several-shipments-to-group-shipments.png").default} height="" width="800" />

6. Opt to **Add to a new group shipment** to create new group shipment comprising the chosen shipments. It's important to ensure that the destination addresses for all selected shipments are identical.

By following these steps, you can manually create a group shipment, consolidating multiple individual shipments bound for the same destination into a unified shipment for streamlined logistics management.

### How to Edit Group Shipment

1. Log in as an employee authorized to create and edit group shipments.
2. Navigate to the **Fulfillment > Group shipments** page. 
3. Locate the desired group shipment that requires editing and open it for modification.
4. Verify the accuracy of the "**Ship From**" and "**Ship To**" addresses associated with the group shipment. If adjustments are necessary, click on the gear icon next to the "Ship To" address to access and modify the destination details.
5. To include an additional shipment within the group, click on the **Add** button located on the Shipments pane.
6. In the modal window that appears, enter the **shipment code** or locate and select the required shipment. Click **Add** to include the shipment in the group. It's essential to ensure that all added shipments share the same destination address.
7. If needed, you can update the **Carrier** by selecting a new one from the available list.
8. Within the Topic pane, adjust the **weight** and **dimensions** of the pallets and cartons as necessary. This information is crucial as it is transmitted to the carrier and included in the Advanced Shipment Notification (ASN) sent to Amazon.
9. Once all modifications are complete, **Save** the group shipment. 
10. If the group shipment is ready to be dispatched, generate a shipping label by clicking on the **Create Parcel** button located in the top menu.
11. Confirm your actions when prompted. The link to the parcel will be displayed.
<img src={require("/img/group-shipment-label-created.png").default} height="" width="800" />
12. Proceed with any additional steps such as **printing documents** and completing the packing process.

By following these steps, you can effectively edit a group shipment, ensuring accurate information and efficient logistics management.

## Submitting ASN to Amazon:

Once the group shipment is prepared and packed, users can conveniently submit an Advanced Shipment Notification (ASN) directly from within ShopCtrl.

The ASN serves as a comprehensive document detailing crucial information about the group shipment, including tracking details, contents, quantities, estimated delivery dates, and other data necessary for Amazon's efficient processing and inventory management.

By providing Amazon with advance notice of incoming shipments, ASNs enable the platform to make necessary preparations for receiving and processing inventory more effectively.

Submitting an ASN is a manual action, contingent upon the creation of a shipping label with a corresponding tracking code.

Here's how to submit an ASN:

1. Log in as an employee with permission to edit group shipments.
2. Navigate to the **Fulfillment > Group Shipment** page.
3. Locate and open the desired group shipment for editing.
4. Verify the accuracy of the packaging measurements.
5. Click the **Submit ASN** button.

Upon clicking the button, an ASN submission request is generated, which will be processed asynchronously. Once the request is submitted and accepted by Amazon, the submitted ASN will display a timestamp.

<img src={require("/img/group-shipment-asn-submitted.png").default} height="" width="800" />


Additionally, users have the option to re-submit the ASN for the group shipment by clicking the Submit ASN button again.

ShopCtrl is engineered to seamlessly integrate with Amazon's systems and APIs, facilitating efficient communication and data exchange between the two platforms.

Automation features within ShopCtrl may further streamline the ASN submission process, reducing manual effort and ensuring prompt and accurate communication with Amazon's fulfillment network.


