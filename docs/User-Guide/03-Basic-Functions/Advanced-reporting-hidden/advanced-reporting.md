---
sidebar_position: 1
slug: /docs/report-deep-links-ticketlist
---

# Building Dynamic Reports with Deep Links to Filtered Ticket Views

ShopCtrl's reporting framework now enables deeper integration between your reports and operational data. A new enhancement allows you to create advanced reports that can open not just individual tickets, but the entire Ticket List grid with  filters pre-applied based on your report context. This powerful feature enables the creation of **intelligent deep links** that transition seamlessly from aggregated report data to precisely filtered operational views.

For advanced users building custom reports, this guide details how to leverage this capability to make your reports more actionable and insightful.

## Direct Linking to Filtered Views

The core of this feature is the `additionalQueryParams` argument in the `OpenDetailTabForEdit` function. Construct URLs that automatically apply specific filter criteria, turning static reports into interactive launchpads.

**Example: Create a report link for "Open Tickets in Shop 2"**


```javascript
OpenDetailTabForEdit(
    'Tickets',
    null,
    'ShopID=2',
    true
);
```

**Enhanced Filtering for Precise Reports**

To build meaningful deep links, we've expanded the filtering capabilities with new fields and options.

1. New `Shop` Criteria for Focused Reports
By default this is set to 'Active Shops' and SessionData.ActiveShops is passed to ticket search. 
A new Shop filter allows you to link to tickets from a specific shop without changing the user's global active shop list. This is ideal for reports targeting a single location.

2. Expanded `Filter` Field for Advanced Logic. 
We added some specialized filters to the 'Filter' field, that can now be used to build more complex filter queries.

Key filter values for reports include:

- All Tickets
- All Open Tickets
- All Closed Tickets
- All Expired Tickets
- All Expiring Tickets (expires in < 120 min)
- All OnTime Tickets (All open tickets that not have been expired)
- All FollowUp Tickets
- All Unassigned Tickets (tickets not assigned to an employee, assignment to team is ignored)

Some of these filters already existed within Employee and EmployeeGroup filters, but were always based on the current employee and employee groups the employee is a member of. Now they can be combined with other filters giving more flexible combinations.

**Parameters for Deep Link Construction**

Use these **case-insensitive** keys and values to construct the query string for your report links.

| Parameter       | Values       | Description                          |
|-----------------|--------------|--------------------------------------|
| `EmployeeId`    | integer      | Filter by specific employee          |
| `EmployeeGroupId`| integer      | Filter by employee group             |
| `TicketTypeId`  | integer      | Filter by ticket type                |
| `ShopId`        | integer      | Filter by specific shop              |
| `filter`        | text options | Predefined filter values             |
| `startdate`     | `'today'`    | Set start date to current day        |


**Practical Examples for Report Building**

```javascript
// Daily Expired Chats Report: A deep link showing all chats that expired today.
OpenDetailTabForEdit(
  'Tickets',
  null,
  'TicketTypeID=3&filter=expired&StartDate=today',
  true
);

// Escalation Report: A link to tickets expiring soon that are still unassigned.
OpenDetailTabForEdit(
  'Tickets',
  null,
  'filter=expiring&filter=unassigned',
  true
);

// Team Performance Report: Open tickets for specific employee group
OpenDetailTabForEdit(
  'Tickets',
  null,
  'EmployeeGroupID=5&filter=open',
  true
);
```

This functionality provides a robust API for deep linking, allowing developers and report designers to create direct pathways to the most relevant data from reports. 