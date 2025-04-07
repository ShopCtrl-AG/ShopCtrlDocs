---
sidebar_position: 1
slug: /docs/understanding-employee-roles-and-permissions
---

# Understanding Employee Roles and Permissions

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

::::

The purpose of the employee roles is to restrict or limit access to different functions within ShopCtrl based on an employee role in your organization.
For example, the sales team doesn't have access to employee settings or shop configurations.

On this page, you can view the permissions of the predefined roles.
You can create any number of user roles and assign them with various sets of permissions. Please view [Manage Roles and Permissions](./manage-roles-and-permissions.md) for more information.

## Predefined roles

**System Admin** - administrator has the entire access to all of the configurations, logging, shop owners, and shops. Administration of the system is performed by Shopctrl.

**Shop Owner Admin** - full access to all ShopCtrl functionality and configuration, including shop and shop owner, carrier accounts configuration, sync status, trigger, webhook settings, document and mail templates, reporting, employee management.

**Admin** - shop admin role grants access to most ShopCtrl functionality, including shop configuration, but limits it to the shops an admin is assigned to. Shop Admin has access to product management, including warehouse operations, statuses configuration, reporting, document and mail templates management, bulk operations, mail and bulk operations scheduler.

**Power User** - has full access to modules including financial data, purchasing, and warehousing. But is granted access to a very limited number of shop configurations, e.g., mail templates, wiki and categories management, and some of the reports (configurable).

**User** - has access to most of the modules, can edit orders, shipments, products, including publishing, but has no access to any configurations. Note that the user is not allowed to delete items and can only view financial data.

**Guest** - minimal access to ShopCtrl, only viewing some of its elements, like communication, orders, and shipments of the shops they are assigned to.

The complete list of the default roles and permissions that are set in your ShopCtrl environment could be viewed in **Shop Owner details page > Authorization**.

:::info

Here and throughout the documentation, we will refer to default roles describing the permissions required for certain ShopCtrl features. You can adjust the roles according to your needs and requirements or create new ones.

:::
