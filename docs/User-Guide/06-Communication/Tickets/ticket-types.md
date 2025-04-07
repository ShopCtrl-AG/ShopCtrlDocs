---
sidebar_position: 3
slug: /docs/ticket-types
---

# Ticket Types

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

## Configuring ticket types

Each ticket that comes into ShopCtrl automatically receives a ticket type.
Ticket types are mandatory. 

The default '**Issue**' ticket type is predefined. You can create more types to efficiently handle customer support requests. Ticket types can be used to route tickets to a particular department or employee if required.

<img src={require("/img/ticket-types.png").default} height="" width="800" />

You can add custom ticket types using the global configuration: 

1. Log in as a Shop Owner admin.
2. In the Navigation tree on the left select **Configuration > Ticket Types**.
3. Click **Add** to create a new ticket type. 
<img src={require("/img/create-ticket-type.png").default} height="" width="800" />

4. Enter a ticket type **Name**.
5. (Optional) Select a **Custom icon** image file.
6. Choose **Sequence** of the ticket type in the dropdown list. The most frequently used types could be moved higher in the list.
7. For automatic ticket assignment configuration: 
    1.     Enter **Ticket title** - text that will be added by default to the ticket title when a ticket is created automatically.
    2.     Choose an **Employee group** to whom the ticket will be assigned.
    3.     Select a **Category** to apply to a ticket.
8. (Optional) You can create **Custom parameters** that will be added to each ticket of this type: 
<img src={require("/img/add-ticket-parameter.png").default} height="" width="800" />

    1.     Click **Add** to create a new parameter.
    2.     Choose **Sequence** of the parameter in the list.
    3.     **Enable** parameter.
    4.     Enter the parameter **Key**.
    5.     Enter **Caption** that will be displayed as parameter name in ticket details.
    6.     Select parameter Data type:
        *         String
        *         RichText
        *         Date
        *         Boolean
        *         Number
        *         Lookup - for this type, you will need to additionally predefine the possible values.
    6.      Save the parameter by clicking **Ok**.

9. You can now **Enable** ticket type to make it available for manual selection and in configuration.
10.  **Save** or **Save and Close** to create new ticket type.

## Working with Ticket Types
 
Let's assume your ShopCtrl install has two ticket types: question and problem.

An agent will mark a ticket as a **Question** if it's asking a question about product or delivery, as opposed to reporting a problem or an incident. An example of a question might be: How do I reset my password?

A **Problem** is used when a customer/end-user has reported a problem that they're having with your product or service. A problem ticket could be anything from "My order had an error in it" to "I can't access the calendar page".

An agent can select the ticket type when they are completing their first review of a ticket.
To automate customer support and efficiently handle certain customer requests via email, you can set up [Filters](/docs/User-Guide/06-Communication/Tickets/ticket-configuration.md#ticket-filter) to distribute certain requests among different departments. You can also use [Triggers](/docs/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/index.md#create-ticket) to create a ticket after certain [Events](/docs/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/index.md#events). Tickets of a certain type can also be created as part of [Invoice Reminders](/User-Guide/05-Financial/Invoices/invoice-reminders.md) automatic configuration.

