---
sidebar_position: 2
slug: /docs/manage-customers
---

# Manage customers

All customers that are created manually or imported with order synchronization are managed from the **Sales > Customers** page.
You can search for a customer, filter customers by group or activation status.

![customers-overview-table](/img/customers-overview-table.png)

## View customer details page

To view the customer details page, go to **Sales > Customers**.
Locate a customer using the search bar and double click customer row to open the customer details page.

From this page, you can edit customers' information, view orders statistics, conversation history, invoices, manage contracts and returns.
Main customers' information is placed in the top pane. All the related information is divided among the topic menu sections.

![customers-details-page](/img/customers-details-page.png)

### View customer orders

History of orders placed by the customer. You can create new order by clicking
![customer-details-orders](/img/customer-details-orders.png)

### View customer invoices

History of all invoices raised against the customer.
![customer-details-invoices](/img/customer-details-invoices.png)

### View conversation history with a customer

All of the emails sent to the addressee, chat sessions associated with the customer, or calls made via VoIP are accumulated on this tab.

![customer-details-conversation-history](/img/customer-details-conversation-history.png)

### View and manage tasks

Tasks associated with the customer, their orders, invoices, offers, or tickets are displayed on this tab.
Use the link button at the end of the task row to open the task on a new tab. Or click checkbox ![mark-done-icon](/img/mark-done-icon.png) to mark task as done.
![customer-details-tasks](/img/customer-details-tasks.png)

### View customer returns

From this tab, you can access all the returns requests submitted by the customer. Double-click the return row to open the return details page on a new tab.
![customer-details-returns](/img/customer-details-returns.png)

### View customer offers

Offers sent for a customer. You can create a new offer from this tab by clicking **Add** and selecting a shop. The new offer details page will be opened on a new tab.
_Double click an offer row to open it on a new tab for editing._
![customer-details-offers](/img/customer-details-offers.png)

### View customer tickets

You can get an overview of all customer-related tickets from this tab, as well as create a new ticket.
![customer-details-tickets](/img/customer-details-tickets.png)

### View customer export info

Keeps log data about the export to external accounting services like [Exact](/docs/User-Guide/05-Financial/Connectors/exact-online.md) and Twinfield.

![customer-details-export-info](/img/customer-details-export-info.png)

## Merge customers

If you find duplicate customers, you could remove duplicates by merging customers.

To merge a customer:

1. Go to **Sales > Customers**.
2. Find the customer you would like to merge and open for editing.
3. Click **Merge**.
4. In a new pop-up window, find and select a customer for merging.
5. Click **Merge**.

The customer will be deleted and all related data will be moved to another customer you chose.

:::warning

Please be careful when merging the customers. This action cannot be undone.

:::

## Deactivate customers

By default each new customer created manually or imported is activated. To remove not active customers from a list, deactivate them. It will no longer be possible to create an offer, order, or contract for this customer, or link them to a ticket.

To deactivate a customer:

1. Go to **Sales > Customers**. 
2. Find a customer and open for editing.
3. Uncheck the **Active** checkbox next to the company name field.
4. Click **Save** or **Save and Close**.

## Obfuscate customer data

Customer data obfuscation replaces customer data, like name and contact information with fake data. 
Not to keep personal customer information longer than needed, you could obfuscate the data on a shop level or manually on a customer level.

To keep certain customer contact information when obfuscating on a shop level, uncheck **Obfuscate enabled**.
<img src={require("/img/customer-details-customer-data-obfuscation.png").default} height="" width="800" />

To manually obfuscate customer:

1. Go to **Sales > Customers**. 
2. Find a customer and open for editing.
3. In the Topic menu select **Customer Data Obfuscation** topic. 
4. Click the **Obfuscate** button.
5. Click **Save** or **Save and Close**.

The obfuscation changes the customer contact information to fake data which affects all connected offers and orders. Customer emails, VoIP calls and chat conversations are permanently deleted from the system.  

:::warning[Please note]

Order, offer, tickets and customer contact information cannot be obfuscated while the corresponding entities are in the active status.

:::

## Send bulk email

You can generate and mail a number of your customers using a pre-created shop template.
To send a customized mail to a number of addresses at once:

1. Go to **Sales > Customers**. 
2. Select customers you would like to send an email to.
3. Click **Action > Auto mail**.
4. From a dropdown list select a **template** that will be used to autogenerate email. 

<img src={require("/img/customers-bulk-mail.png").default} height="" width="800" />

## Delete customers

Deleting a customer is a permanent action. Unlike deactivating a customer, deleting a customer cannot be undone.

To delete a customer:
1. Go to **Sales > Customers**. 
2. Find and select a customer you would like to delete.
3. Click **Delete** > **Yes**.

:::info[]

Customers linked to orders, could not be deleted.

:::