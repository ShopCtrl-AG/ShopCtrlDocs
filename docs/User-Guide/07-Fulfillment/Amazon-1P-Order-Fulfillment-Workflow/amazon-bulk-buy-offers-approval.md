---
sidebar_position: 1
slug: /docs/amazon-bulk-buy-offers-approval
---

# Amazon Bulk Buy Offers Approval

**Amazon's Bulk Buy Offers Program** is an invite-only program that allows vendors to request one-time bulk orders on their ASINs, deciding on timing, quantity, and costs that work best for your business.
Amazon will review vendors submission and - if approved - will buy as per your requested quantity and cost.

As the initial step in this program, the vendor is required to download the **Bulk Buy Offers Requests** file. Subsequently, following the company's internal approval process, the vendor must determine the pricing, quantity, and timeframe within which the company can fulfill the request. The outcome of this decision-making process is to upload the updated file back to Amazon.

The approval process, integral to the efficient supply of goods, involves multiple stages, each of which is executed by distinct departments within the organization. To streamline this procedure, ShopCtrl has introduced the **Bulk Buy Offers** feature, aimed at enhancing internal management and preserving a comprehensive record of every approval step.

The **Bulk Buy Offers approval process** in ShopCtrl is divided into four distinct phases: Commerce, Manufacture, Warehouse and Final Upload back to Amazon. This structured workflow involves multiple approvers and allows for modifications until finalization. Approvers at each stage can either give the green light to all items or specifically address pending ones.
The conclusive fourth stage, which involves downloading the finalized file and uploading it back to Amazon, can be carried out by any of the three departments.

![AmazonBulkBuyOffersApprovalProcess.png](/img/AmazonBulkBuyOffersApprovalProcess.png)

## Stage 1. Commerce Approval

The initial step in the bulk buy offers approval process starts with the Commerce department, the workflow is structured as follows:

1.  **File Import:** Commerce initiates the process by importing the original Amazon Excel file, which includes two additional columns: **'R'** for **Approved** status and **'S'** for an optional **Comment**. These columns are essential for indicating approval status and providing additional comments. \* **Approval Status Assignment:** Commerce assigns an approval status (Yes/No) to the entire row without differentiating between stages. Rows left unfilled are automatically considered pending.
    ![commerce-excel-file-example.png](/img/commerce-excel-file-example.png)

        * **Commerce Interface:** This can be done by entering **Sales > Amazon Bulk Buy**. Click "**Add**," select the shop for Amazon 1P, and upload the file to initiate the import process.

    ![commerce-stage.png](/img/commerce-stage.png)

:::warning[Please note]

If you do not see the Amazon Bulk Buy node in the Navigation tree under Sales, you might be lacking the necessary permissions. please refer to the [Setting up Bulk Buy Offers](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-1P/setting-up-bulk-buy-offers.md) guide for instructions on configuring the required permissions..

:::

3. **Product Mapping:** ShopCtrl then parses the imported file, using a mapping mechanism based on EAN or ASIN. Any products that cannot be mapped or do not exist in the system trigger error notifications, preventing the upload of the file.

4. **Approval Options:** Commerce has the flexibility to proceed with the approval process by pressing the "Approve" button, signaling the readiness to move the file to the Manufacturing department. Additionally, for convenience:
   - The "Approve All" option allows for the overwrite of all rows with approval.
   - The "Approve Pending" option selectively approves pending rows without affecting existing values.

![bulk-buy-offer-commerce.png](/img/bulk-buy-offer-commerce.png)

## Stage 2. Manufacture Approval

1. **Log In and Download the Preapproved File:** Begin by logging into the ShopCtrl using the credentials associated with the Manufacture approval role. Once logged in, navigate to the Amazon Bulk Buy section, open the active Bulk buy offer and **download** the file containing products preapproved by the Commerce department. The ShopCtrl file structure differs from Amazon's, but adheres to the same validation rules. Note that products rejected by Commerce are visible in the Bulk Buy Products grid, but not exported to the Manufacture file.
   :::(Info) (Tip)
   If you have multiple roles, refresh the Bulk Buy Offer details tab to be prompted with a dialog to choose a role of approver.
   :::

2. **Review and Approve/Reject:** Once the file is downloaded, update it with the quantities the department is prepared to supply for the specified delivery stages. If no quantity can be supplied, enter **'0'**. Rows without a value will be considered pending. Upload the file to the Bulk Buy Offer details. The file can be updated multiple times.
   ![BulkBuyOfferApproval_Manufacture_v1.png](/img/BulkBuyOfferApproval_Manufacture_v1.png)
3. **Pass to Warehouse:** After finalizing the file, move the bulk buy offer to the Warehouse approver, by selecting 'Move (to W)'. Approve all and pending buttons are available at all stages, advancing the bulk buy offer to the next approver.
   ![manufacture-stage.png](/img/manufacture-stage.png)

## Stage 3. Warehouse Approval

The Warehouse department is responsible for the final approval of products and quantities. Here's how this stage works:

1. **Log In and Download the Preapproved File:** Begin by logging into the ShopCtrl using the credentials associated with the Warehouse approval role. Navigate to the Amazon Bulk Buy section, open the active Bulk buy offer and **download** the file containing products preapproved by the Commerce and Manufacture department.
2. **Review and Approve/Reject:** Thoroughly review each product in the file and input quantities for the delivery stages based on warehouse considerations. Same way, if no quantity can be supplied, enter **'0'**. Rows without a value will be considered pending. Once ready, upload the file to the Bulk Buy Offer details.
3. **Complete the Approval:** Press the "Complete" button. As in previous phases, you have the option to approve all products or only pending items without the need to modify and re-upload the file.
   ![warehouse-stage.png](/img/warehouse-stage.png)

:::warning[Please note]

After pressing "Complete," the Bulk Buy Offer is considered **finalized** and cannot be edited further. You can only download the file for Amazon upload, providing a comprehensive summary of departmental decisions on product supply.

:::

![bulk-buy-offer-completed.png](/img/bulk-buy-offer-completed.png)

### Making Changes and Revising Approvals

Before the Warehouse completes the approval process, both the Commerce and Manufacture departments have the flexibility to revoke their approvals and make necessary changes. Here's how the process works:

1. **Revoking Approval:**

- The concerned department wanting to make changes can revoke their approval by accessing the Bulk Buy Offer stage.
- Click on 'Revoke Approval' to open the opportunity for updating the offer by uploading a file with different quantities.

2. **Highlighting Changes:**
   Any changes made are highlighted for subsequent approvers, who have already entered their data.
   Later approvers will see the highlighted changes and need to revise their approvals accordingly.
   The file of the previous version cannot be uploaded by Manufacture or Warehouse in this case.

3. **Revised Approvals:**

- Subsequent approvers download the file, review the highlighted changes, and adjust their approvals as necessary.
- This ensures a smooth and transparent process, allowing all approvers to stay informed and aligned with the latest modifications.

![BulkBuyOfferApproval_Warehouse_v4.png](/img/BulkBuyOfferApproval_Warehouse_v4.png)

## Stage 4. Download and Submit the File with Final Quantities to Amazon

In the concluding stage of the Bulk Buy Offers approval process, any department member can execute the following steps:

1. **Download Final File:**

- Log in to the ShopCtrl environment as a user with Commerce, Manufacture or Warehouse approval permissions.
- Navigate to the Bulk Buy Offer page and download the finalized file with quantities approved by all relevant departments by pressing the '**Export for Amazon**' button. The final file is the original Amazon file uploaded by Commerce on initial stage with the final approved quantities.

2. **Submit to Amazon:**

- Use the downloaded file to submit the final quantities to Amazon.
- This step marks the completion of the Bulk Buy Offers approval process, ensuring that the approved quantities are communicated to Amazon for further processing.
  ![AmazonBulkBuyOfferRequest_Completed_v5.png](/img/AmazonBulkBuyOfferRequest_Completed_v5.png)

By following this approval process, you can efficiently manage and finalize the approval of bulk buy offers. It allows different departments to collaborate, make changes as needed, and ensure that the final decision is based on the latest information. This flexible approach streamlines the approval process for your organization.
