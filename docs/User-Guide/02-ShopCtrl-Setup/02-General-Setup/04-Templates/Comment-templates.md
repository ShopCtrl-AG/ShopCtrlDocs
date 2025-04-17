---
sidebar_position: 3
slug: /docs/comment-templates
---


ShopCtrl is excited to announce a new feature that enhances productivity and ensures a consistent format for comments throughout the platform: **Comment Templates**. 
Comment Templates are pre-configured snippets of text designed to streamline comment creation. This feature allows users to create pre-defined templates for comments on orders, order returns, tickets, and tasks. It helps teams maintain a unified structure in communication while addressing key points efficiently.

## Key Features:

**Entity-Specific Templates**
Templates can be created for:
- Order comments
- Order return comments
- Ticket comments
- Task comments

**Customizable Templates**
- Templates can be configured by employees with the appropriate permissions.
- Templates can be applied at the shop-specific level or globally throughout the system.
- Users can choose from a pre-configured list or manually change the suggested template when leaving a comment.

**Permission Control**
Only users with permissions set by the shop owner can add, edit, view, or delete comment templates. Permissions can be configured in the system's authorization settings.


## How to Configure Comment Templates

The shop owner can configure permissions for employees to manage comment templates. There are authorization items for the following actions:
 - Viewing Comment Templates
 - Adding Comment Templates
 - Editing Comment Templates
 - Deleting Comment Templates

By default, shop admins and power users have full permissions to manage comment templates. 

### Step 1: Create a Comment Template

1. Log in as a user with **Power User** permissions.
2. Navigate to **Configuration > Templates > Comment Templates**.

    <img src={require("/img/managing-comment-templates.png").default} height="" width="400" />
3. Click **Add** to create a new template.

    <img src={require("/img/create-comment-template-formatting.png").default} height="" width="400" />
4. (Optionally) Select a shop for which this template should be used. Or leave the field empty to be able to apply it to any shop.
5. Fill out the following fields:
    1. **Name**: Enter a descriptive name for the template.
    2. **Type**: Select the entity type (e.g., order, order return, ticket, task).
    3. **Content**: Provide the default text to be displayed in the comment.
    4. Use HTML formatting to enhance readability and structure your comments effectively. 
    5. (Optional) Internal Comment: Add any internal notes for the template.
6. Enable the **Publish** checkbox to make the template selectable from the list.
7. Click **Save or Save and Close** to finalize the template.

    <img src={require("/img/comment-template-example.png").default} height="" width="600" />

### Step 2: Configure Default Templates for the Shop

1. Log in as a user with **Shop Admin** permissions.
2. Navigate to **Shop Settings > Comment Templates**.

    <img src={require("/img/comment-template-ticket-type-shop-configuration.png").default} height="" width="400" />
3. Assign default templates for the following entities:
    1. **Order** comment template
    2. **Order return** comment template
    3. **Ticket** comment template
    4. **Task** comment template
4. At the end of each field, select the level to which the template should apply:
    1. **Shop-specific**: The template is specific to this shop.
    2. **Shop group**: The template is shared across a group of shops.
    3. **Shop owner**: The template applies globally across all shops in the system.
5. (Optional) Configure default templates for different ticket types at the shop level. If left blank, the default ticket comment template will be used.
6. Click **Save or Save and Close** to apply the changes.


## How to use Comment Template

When you're adding a comment for an entity (e.g., an order, order return, ticket, or task), the default template will automatically appear in the comment field. 
This pre-filled text provides a starting point for your comment. 

    <img src={require("/img/ticket-comment-template-prefilled.png").default} height="" width="400" />


If you wish to use a different template:
1. Click the **Select Comment Template** button near the comment field.
2. A list of all available templates for the selected entity will be displayed.
3. Use the search and filter options to quickly find the template that suits your needs.

    <img src={require("/img/select-different-comment-template.png").default} height="" width="400" />
4. Select the desired template, and its content will replace the default text in the comment field.
5. Review or edit the template text as needed to tailor it to the specific situation.
6. Once satisfied, submit the comment as usual.

### Benefits of Comment Templates

**Consistency:** Ensures comments across the system follow a unified format.
**Efficiency:** Saves time by pre-filling key information and structure.
**Flexibility:** Users can select or customize templates to suit specific needs.
**Control:** Permissions allow shop owners to manage who can create and edit templates.