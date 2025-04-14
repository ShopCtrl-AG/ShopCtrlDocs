---
sidebar_position: 2
slug: /docs/manage-roles-and-permissions
---

# Manage Roles and Permissions

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

::::

ShopCtrl offers a set of predefined roles, but it is also possible to create roles specific to your access requirements.

![shopowner-settings-authorization-full-screen](/img/shopowner-settings-authorization-full-screen.png)

## How to create a new role

To create a new role in the shop owner organization:

1. Go to **Shop Owner details page > Authorization** tab.
2. Click **Copy** and from a drop-down list, select a role, which permissions settings suit your new role requirements the most.
3. In the popup window, enter the **Name** of the new role and click **Ok** to save it.
4. The copied role and permissions will be added as a new column to the grid below.
5. Adjust the role permissions by activating and deactivating the certain auth items checkboxes.
6. Click **Save** or **Save and Close** to apply changes to the shop owner.

## How to edit a role

In ShopCtrl, you have the capability to edit the permissions associated with default roles. However, you cannot modify the default role names, disable, or delete them.

### How to modify role permissions

To adjust role permissions and access to specific modules and features in ShopCtrl, navigate to the Shopowner details page authorization settings. Within these settings, you can specify which permissions are assigned or revoked for each module and action. Activate the checkbox to grant permission or deactivate it to withdraw permission. This flexibility allows you to tailor role permissions according to your specific needs within ShopCtrl.

![shop-owner-modify-role](/img/shop-owner-modify-role.png)

How to add or remove permissions from an existing employee role:

1. Log in to your ShopCtrl environment as a **Shop owner admin**.
2. On the left navigation panel, click on **Configuration > Shop Owners**.
3. Select the shop owner's name and click **edit**.
4. On the shop owner details page, go to the Topic menu and select **Authorization**.
5. Choose the role you would like to edit. Each role's permissions are represented as columns.
6. Assign permissions to the designated role. For each permission, specify whether it's allowed or denied for that role. For example:
   - Admin: Allow "View, Add, Edit, Delete Offers".
   - Power user: Allow "View, Add, Edit" but deny "Delete Offers".
7. Once you've made the necessary changes, you can close the shop owner details page. The permissions will be applied immediately, and there's no need to save, as the system will automatically save your changes.

:::warning[**Please note**]

An employee should be granted with view permissions to a certain module to be able to perform actions with it. For example, without permission to view the shipments module, an employee won't be able to edit shipments.

:::

### How to change role name

To change the name of the role that you previously created, go to the **Shop Owner details page > Authorization** tab and click the **Edit** button. Select a role from the list that you would like to adjust, and in the popup window opened, enter the new name of the role.

### How to disable roles

To disable the role you created, go to the **Shop Owner details page > Authorization** tab and click the **Disable** button. Select a role from the list, and the role column will disappear from the authorization tab. It also won't be visible in the employee's settings.

:::warning[**Please note**]

Disabling the role doesn't withdraw it from the employees assigned to the shop with this role. Please go to **Shop settings > Employees** or **Employee settings > Shop roles** and change the role manually.

:::

To enable back the role click the **Enable** button and select a role name that you wish to show from the list. The role column will appear in the authorization tab and will be visible in the list of roles in employee settings.

## How to delete roles

To delete the previously created role, go to the **Shop Owner details page > Authorization** tab and click the **Delete** button. Select a role from the list that you would like to delete. The role will be deleted immediately, and a confirming popup window will be displayed.

:::danger[**Please note**]

It is not possible to delete the role if an employee is assigned to shop with this role. Please change the assignment before proceeding with deleting the role.

:::
