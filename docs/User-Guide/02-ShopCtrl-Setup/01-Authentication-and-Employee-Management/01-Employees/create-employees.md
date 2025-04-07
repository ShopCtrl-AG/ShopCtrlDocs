---
sidebar_position: 1
slug: /docs/create-employees
---

# Create Employees

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

A user account in ShopCtrl is called an employee account. It could be created and managed by a supervisor. An employee could be assigned to the shop with a role according to his responsibilities in this shop. Employees can update their account data themself from the personal account settings.

## How to create an employee account

![create-employee-details-page](/img/create-employee-details-page.png)

To create an employee account:

1. Go to **Configuration > Employees** and click the **Add** button.
2. Fill in the employee **Login**, by default an email is required to be used as a login.
3. Enter **Full name** and **Public alias**. Both could be used as merge fields for mail templates generation.
4. Enter the **Password** twice, that you need to communicate to the employee for the first login.
5. Check the **Must change password at next login** to prompt an employee to change password right after the login.
6. Select an employee **Culture**.
7. (Optional) Upload an employee **Photo**.
8. Select the employee's **Birthdate** and **Gender**.
9. Fill in the employee's contact details: **Email** and **Mobile Phone**.
10. Fill in the **Job Title**, **Office** location.
11. (Optional) Select applicable **Employee groups**.
12. Choose whether the account should be enabled by activating the **Enabled** checkbox.
13. Proceed with assigning the employee to a shop:
    <img src={require("/img/shop-roles.png").default} height="" width="800" />
    1. Go to **Employee details page > Shop Roles**.
    2. Select a shop in the right pane - Available Shops.
    3. Click **Add As** and select a role you would like to assign to an employee in this shop.
    4. The new assignment will appear in the left pane, reflecting a shop and the employee's role in the shop.
14. If messaging option is enabled for the shops, an employee should be assigned to messaging to view, receive and send messages. Open the **Messaging Permissions** tab and activate the chat checkboxes against the applicable shops. Alternatively, you can do it later from the shop configuration.
    <img src={require("/img/messaging-permissions.png").default} height="" width="800" />

15. You can add information to other tabs, like **Phone Extensions**, **Addresses** and **Phone books**, **Parameters**.
16. Click **Save** or **Save and Close** to create a new employee account.

:::warning[]

Please note that some settings are only available after you have saved the employee account for the first time.

:::

## How to enforce password complexity

You can regulate the password complexity requirements from the **Shop Owner Details > Password Settings** page.
The default recommended settings are set as below:

<img src={require("/img/enforce-password-complexity.png").default} height="" width="800" />

To add another layer of security it is recommended to enable [Two factor authentication](./two-factor-authentication.md) for your users.
