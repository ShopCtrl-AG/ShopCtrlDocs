---
sidebar_position: 4
slug: /docs/whats-new-in-tickets-statuses-and-filters
---

# What's New in Tickets: Ticket Statuses and Filters


We have redesigned the ticket status system to provide more clarity and control over your support workflow. This update introduces new statuses, redefines existing ones, and adds powerful new filtering and history tracking capabilities.

## 1. Redesigned Statuses: From "Open" to "Todo"

To clarify what needs immediate action, we have renamed the ticket status and updated the top box filters:

**Todo**: Tickets where active work is in progress. These are your immediate priorities.

**Open (Filter)**: This is now a top-box filter that encompasses all non-closed tickets, including Todo, Follow up, Wait for Customer, Waiting for Supplier, and Waiting for Internal Team.

<img src={require("/img/tickets-top-filter-boxes-with-open.png").default} height="" width="800" />

**What you need to know:**

Existing tickets with the "Open" status have been converted to the new **Todo** status.

The **"Open"** filter is hidden by default in the top box. You can enable it by customizing the top box filter columns, just like any other table in ShopCtrl. The entire top filter bar is now customizable. You can choose to hide or show specific boxes and columns according to your team's needs.

<img src={require("/img/tickets-top-filter-boxes-customize.png").default} height="" width="800" />


### Status Change Reference Table

| Old Status | New Equivalent / Explanation |
|------------|------------------------------|
| Closed | **Closed** (Unchanged) |
| Closed – Waited for customer | **Auto-closed** status, not available for manual selection |
| Follow up | **Follow up** (Unchanged) |
| Open | **Todo** (Tickets requiring active work) |
| Open – From close | **Todo**, but trackable via the new "Previous Status" column and filter|
| Open – From follow up | **Todo**, but trackable via the new "Previous Status" column and filter |
| Waiting for customer | **Wait for Customer** (Unchanged) |
| *N/A* | **Waiting for Supplier** (New) |
| *N/A* | **Waiting for Internal Team** (New) |

For a complete history of all status changes on a specific  ticket, please refer to the ticket details page.


## 2. New Waiting Statuses & Configurable Follow-up Times

We've introduced two new statuses to provide greater granularity for tracking what your team is waiting on:

*   **Waiting for Supplier**
*   **Waiting for Internal Team**

These new statuses function identically to the existing **Follow up** status but allow for more precise reporting and workflow management.
You can choose to disable the new waiting statuses (**Waiting for Internal Team, Waiting for Supplier**) if they are not needed for your workflow.


### Setting Default Times

You can now set default follow-up durations for the **Follow up**, Waiting for Supplier, and Waiting for Internal Team statuses.

The default waiting time for all three statuses can be configured at two levels:
  1.  **Shopowner Level:** A global default for all shops.
  2.  **Shop Level:** A specific setting for an individual shop, which overrides the shopowner default.

<img src={require("/img/ticket-waiting-configuration.png").default} height="" width="800" />


#### Supplier-Specific Response Times

For precise control, you can set custom response times for individual suppliers.
The supplier's follow-up time is based on a SLA that considers default **working hours: 9:00 to 18:00 on business days only**. The countdown to the `Remove from follow up` timestamp pauses outside of these hours.

**To use this feature:**

1.  Navigate to the supplier's details page and configure their expected response time.
2.  When you link a ticket to that supplier and set its status to **Waiting for Supplier** (without manually choosing a time), the system will automatically calculate the target date and time based on the supplier's configured waiting time and default SLA.
3.  A badge on the ticket will display when it is scheduled to automatically revert to **`Todo`**.

<img src={require("/img/ticket-details-follow-up-time-badge.png").default} height="" width="800" />

:::info[Tip]

If the supplier field is not visible on your ticket details page, enable it at Shop > Communication > Tickets > Visibility of Fields Settings.

:::

#### Waiting for Internal Team

The Waiting for Internal Team status uses the SLA configured for the specific shop where the ticket was created.
For example, if you set an 8-hour "remove from follow up" time, the system will calculate the target timestamp by counting only the remaining working hours on the current day and continuing into subsequent business days until the 8 working-hour duration is met.


## 4. Enhanced Tracking and Visibility

**Previous Status Column**

A new **"Previous Status"** column has been added to the tickets grid. You can also filter tickets by both their current and previous status, making it easy to find, for example, all tickets that were "Reopened from Closed."

<img src={require("/img/tickets-top-filter-boxes.png").default} height="" width="800" />

**Expiring vs. Expired States**

The top boxes now provide more detail by differentiating between tickets that are expiring and those that have expired.

* **Todo** tickets use the SLA timestamp set when the ticket is created or reopened.
* **Follow up, Waiting for Supplier, and Waiting for Internal Team** tickets are marked as "Expiring" when there are less than 2 hours remaining until they automatically move back to Todo.

**Waiting for Customer Reminders**

The **"Wait for Customer"** status no longer receives a "Closed" timestamp. The top box filter can now display two additional columns showing the count of customer-waiting tickets that have received their 1st or 2nd reminder email.

## 5. Enhanced Tickets Grid Filter

The filter on the Tickets grid has been significantly updated for greater clarity and power, specifically regarding status filtering.

### What Remains the Same

The following filter fields remain mostly unchanged:
- Employee and Employee Group (Team)
- Customer
- Priority
- Type
- Categories
- Task
- Date Range

### What Has Been Improved: Status Filtering

**Before:** The old filter had separate, often confusing fields:
- A field for **"All Open Tickets," "All Closed Tickets," "All Tickets"**
- A separate field to filter by specific **Ticket Status**

This caused confusion; for example, selecting "All Open Tickets" and a "Closed" status would return no results.

**Now:** We have consolidated and enhanced this into a single, powerful **Status** field.

- **Base Statuses:** The status list now displays both your custom statuses and the fundamental **Base Statuses** (e.g., `Todo`, `Closed`, `Wait for Customer`).
- **"All Open Statuses" Button:** A single button allows you to instantly select all non-closed statuses.
- **Negation Checkbox:** You can invert your selection. For example, select the "All Open Statuses" and tick the negation box to filter for **only Closed tickets**.
- **Filter by Previous Status:** A new field allows you to filter tickets based on what their status was *before* the current one, enabling powerful workflow analysis (e.g., "Find all tickets that were previously Closed").
- **Due State** field allows you to filter tickets based on their expiration timeline. You can now easily find tickets that are **On time**, **Expiring** or have **Expired**.

<img src={require("/img/tickets-filters-updated-not-closed.png").default} height="" width="800" />


These changes make it easier to see what needs to be done with each ticket. Now you can track your support work more clearly and get things done faster.