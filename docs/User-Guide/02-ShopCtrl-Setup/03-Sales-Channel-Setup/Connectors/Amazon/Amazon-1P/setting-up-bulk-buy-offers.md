---
sidebar_position: 3
slug: /docs/setting-up-bulk-buy-offers
---

# Setting up Bulk Buy Offers

To get started using Bulk Buy Offers, you'll need to accomplish three steps:

**Setup Authorization:** Authorization is at the core of controlling access and ensuring security within our system. With the setup of authorization, you'll define who has access to what parts of the feature, ensuring that only the right individuals can use and manage it.

**Setup Alert notifications:** By configuring notifications through alerts, you'll be able to receive timely alerts about the possible expiration of the Bulk Buy Offers.

**Ensure Your Products Have ASIN and EAN in ShopCtrl:** This step is crucial to guarantee the mapping of products during the Bulk Buy Offers import.

## Step 1. Setting up Authorization and Role Permissions for Shop Employees

In this section, we will walk you through the process of configuring authorization for the approval of bulk buy offers. This includes defining supplementary permissions for the roles and designating roles for your team members in your ShopCtrl system.

To distinguish the company departments involved in bulk buy offer approvals, the initial requirement is to create distinct employee roles with different set of permissions. Alternatively, you may choose to expand the existing employee roles by introducing a new array of authorization items dedicated to managing bulk buy offers.

Here is a list of permissions related to the Bulk Buy offers approval process:

- VIew BulkBuy Offers
- Add BulkBuy Offers
- Edit BulkBuy Offers
- Delete BulkBuy Offers
- BulkBuy Offer Commerce Approval
- BulkBuy Offer Manufacture Approval
- BulkBuy Offer Warehouse Approval

### Modifying Existing Roles to Include Bulk Buy Offers Permissions

Within the default setup, ShopCtrl offers a range of pre-configured roles. You can find more details about these roles in our documentation on [Understanding Employee Roles and Permissions](/docs/User-Guide/02-ShopCtrl-Setup/01-Authentication-and-Employee-Management/02-Roles-and-Permissions/understanding-employee-roles-and-permissions.md).
To grant an employee specific permissions for Bulk Buy Offers approval in the Amazon 1P shop within the ShopCtrl environment, you may need to edit the existing default role to which the employee is assigned.
Amazon 1P Bulk Buy Offers permissions are self-contained. However, users might also require permissions to edit products in order to effectively utilize the Bulk Buy feature. Please refer to the instructions on [How to modify role permissions](/docs/User-Guide/02-ShopCtrl-Setup/01-Authentication-and-Employee-Management/02-Roles-and-Permissions/manage-roles-and-permissions.md#how-to-modify-role-permissions) for guidance.

It's possible for an employee to possess permissions for both commerce, manufacture, and warehouse roles, allowing them to represent multiple departments simultaneously.

### Creating Custom Roles for Various Departments

On the other hand, to create a clear distinction between the three departments, it's advisable to establish three distinct roles: Commerce, Manufacturing, and Warehouse. To do this, Please follow the instructions on [How to create a new role](/docs/User-Guide/02-ShopCtrl-Setup/01-Authentication-and-Employee-Management/02-Roles-and-Permissions/manage-roles-and-permissions.md#how-to-create-a-new-role).
Depending on the additional permissions required for employees, you may need to duplicate the user, power user or admin role and then assign these duplicated roles with the supplementary bulk buy permissions.

![authorization-bulk-buy-roles](/img/authorization-bulk-buy-roles.png)

### Assigning Roles to Employees

After creating the roles, the next step is to assign an employee to the Amazon 1P shop with the designated role. To do this, follow these steps:

1. Navigate to the **Configuration > Employees** section.
2. For each employee, open their profile for editing.
3. Assign the employee to the shop with the appropriate role (Commerce, Manufacture, or Warehouse) based on their responsibilities.
4. Save employee profile.

If an employee has previously been assigned to the shop with a different role, you will need to [adjust their role](/docs/User-Guide/02-ShopCtrl-Setup/01-Authentication-and-Employee-Management/01-Employees/manage-employees.md#change-the-employee-role-on-the-shop) to the chosen one.



## Step 2: Set Up Notifications for Bulk Buy Offers Expiry and Configure Timeframe for Mapping Incoming Purchase Orders

Notifications regarding the expiration of bulk buy offers are configured one time for all employees who are assigned to the shop with integrated Amazon 1P functionality.

Notifications are facilitated through the ShopCtrl [Alerts](/docs/User-Guide/03-Basic-Functions/alerts.md) system. This implies that alerts regarding potential expirations are generated at the shop level for all employees assigned to the Amazon 1P shop. As an employee, you also have the option to set up [alert notifications](/docs/User-Guide/03-Basic-Functions/alerts.md#configure-alert-notifications-via-email) to be delivered to your email address.

Bulk buy offers are typically valid for a week, and you can set up notifications to alert shop administrators when these offers are about to expire and/or have already expired.

Additionally, it's essential to configure the timeframe for mapping incoming purchase orders to bulk buy offers. You can specify the minimum number of days until the purchase order ship window, typically around 30 days. This setting plays a crucial role in auto-detecting incoming purchase orders as bulk buy order types.

![amazon-1p-bulk-buy-shop-settings.png](/img/amazon-1p-bulk-buy-shop-settings.png)

To configure Bulk Buy offers notifications and timeframe for mapping, follow these steps:

1. Log in to ShopCtrl as a user with the **Shop Admin** role or higher.
2. Navigate to **Configuration > Shops** in the menu to view the list of created shops.
3. Choose a specific shop with Amazon 1P synchronization configured and click **Edit** to access shop settings.
4. Within the topic menu, select **Shop synchronization > Amazon 1P Synchronization**.
5. Head to the **BulkBuy Settings** pane.
6. (Optional) **Auto-create missing products** - This feature allows the creation of products if they are not found during Bulk Buy Offer creation. It's recommended to use this feature primarily for testing purposes.
7. Enable alerts for **expired** offers, which are bulk buy offers created more than 7 days ago.
8. Enable alerts for **offers about to expire**.
9. **Set number of days until expiration** for the alert to be created.
10. Click **Save** or **Save and Close** to apply the changes to the shop.

## Step 3: Ensure your products have Asin and EAN in ShopCtrl

Continuing with the setup of Bulk Buy Offers, the next crucial step is to add ASIN and EAN to your products. During the Bulk Buy Offers import, products are mapped by **EAN** and **ASIN** since these are the primary identifiers provided by Amazon in the Bulk Buy Offer export file.

This step is essential for enhancing the accuracy and efficiency of the Bulk Buy Offers process. For a detailed guide on how to perform this step, please refer to the [Adding ASIN and EAN to Your Products](/docs/User-Guide/08-Product-Management/Product-Import/how-to-add-asin-and-ean-to-your-products.md) article.
