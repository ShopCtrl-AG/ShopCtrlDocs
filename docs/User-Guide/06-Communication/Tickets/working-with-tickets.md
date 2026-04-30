---
sidebar_position: 1
slug: /docs/working-with-tickets
---

# Working with Tickets

Once the ShopCtrl Ticket Feature is configured, all incoming messages will be visible in the main ticket window.

A ticket is an option of the Communication menu.

<img src={require("/img/ticket-table-overview.png").default} height="" width="800" />

## Actions

* Add tickets manually
* Assign colleagues, team members, or even a team. If you assign a team, a dispatcher or a team member can decide which agent matches the best for the ticket
* Using the **More** menu, some bulk options are available like delete, change status, and export tickets. You can also change the sorting of the tickets grid to show tickets with the highest priority first.
* Open the ticket details for viewing or editing by double-clicking on the ticket row.
* You can also click on the customer or order icons to open the corresponding items in a new tab.

:::info[Auto-assignment]

Once an employee opens a ticket that doesn't have an assignment yet, it automatically gets assigned to the employee who opened the ticket, saving time in the everyday workflows.

:::

### Marking Tickets as Spam

Select tickets and use the **Mark as Spam** button to automatically close them and filter future emails from the same sender.

<img src={require("/img/mark-as-spam.png").default} height="" width="800" />

**Before you begin:** A [Spam ticket filter](./ticket-configuration.md#how-to-create-a-spam-filter-for-marking-tickets-as-spam) must be configured for this feature to work.

When used, this action:
- Closes the selected tickets
- Assigns the Spam category
- Adds the sender's email to the spam filter
- Prevents future emails from this address from creating tickets in your Todo grid

## Filters

The powerful filter option helps you to gain a better overview of the existing tickets.
Select teams, customer(s), status-types, or categories.

<img src={require("/img/ticket-filter.png").default} height="" width="" />

## Ticket status & filter boxes

We introduced the status and filter boxes to provide a better overview of the statistics of the current tickets.
Clicking a status sets the filter accordingly.

<img src={require("/img/ticket-statuses-panel.png").default} height="" width="" />

* **All Open**
Filters all open tickets, whether they are expired, expiring, or requires a follow-up.
* **Expired**
Tickets that have not been resolved within the SLA deadline.
* **Expiring**
Display all tickets which have two hours left to be resolved.
* **Follow up**
Filters all tickets which are not solved yet, but are pending because of external input (for example, a supplier who needs to respond about a delivery timeframe).
* **Due Tasks**
 Shows tickets with a set task.
 
 