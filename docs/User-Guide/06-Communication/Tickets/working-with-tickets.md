---
sidebar_position: 4
slug: /docs/working-with-tickets
---

# Working with Tickets

ShopCtrl's Ticket Feature is a powerful tool designed to streamline communication, task management, and issue resolution within your organization. ??*This guide provides insights into key functionalities and best practices for working with tickets.*

<img src={require("/img/ticket-table-overview.png").default} height="" width="800" />

1. Enabling the Ticket System:
Begin by configuring the ticket system in ShopCtrl through the shopowner settings. For step-by-step instructions, refer to this article: [[Ticket Configuration]](ticket-configuration.md). Once activated, the Tickets pane becomes your central hub for managing incoming emails. 
2. Handling Incoming Mail:
Upon enabling the ticket system, it's recommended to manage your incoming emails directly from the Tickets pane. This allows for a more organized and systematic approach to handling customer inquiries, support requests, or any other communication.
3. Closing Tickets After Work Completion
It is essential to mark tickets as closed only when the associated work is completed, and the response has been sent to the customer. This practice ensures that your Tickets pane accurately reflects the status of each communication thread. If a new email arrives from the same customer, the ticket will automatically reopen, allowing you to seamlessly continue the conversation and maintain a comprehensive record of interactions. 
When a ticket is closed, the associated email is moved from the Unhandled to the Handled folder. This approach promotes transparency and accountability, ensuring that closed tickets signify resolved issues and not prematurely concluded conversations.


It's important to note that marking a ticket as closed does not affect open conversations on platforms like Amazon. This ensures that your communication channels remain open and responsive to ongoing customer interactions. 


## Ticket Actions

* **Add** tickets manually to capture various types of communication and tasks.
* **Assign** colleagues, team members, or even a team. If you assign a team, a dispatcher or a team member can decide which agent matches the best for the ticket
* Utilize the "**More**" menu for bulk actions like **delete**, **change status**, and **exporting** tickets. 
* Adjust the **sorting** of the ticket grid to prioritize based on priority.
* Double-click on a ticket row to open ticket details for viewing or editing.
* Click on customer or order icons to open corresponding items in new tabs.
* Leverage powerful **filters** to gain a comprehensive overview of existing tickets. Filter by teams, customers, status types, or categories.
* 
:::info[Auto-assignment]

When an employee opens an unassigned ticket, it automatically gets assigned to the employee who opened the ticket, saving time in the everyday workflows.

:::

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
Shows tickets associated with specific tasks.
 
 
 ## Optimizing the Ticket Workflow: A Guide for Employees

1. Receiving and Reviewing Tickets:

Employees typically start by receiving new tickets in the "Open" status, representing incoming queries or issues.
Review the ticket details, ensuring a clear understanding of the customer's request or concern.
2. Responding and Taking Action:

Craft a thoughtful and detailed response to the customer's inquiry or address the issue.
If more information is required, consider changing the status to "Open from Follow-up" to signal that further action is needed.
3. Closing Tickets:

Once the issue is resolved and the customer is satisfied, change the ticket status to "Closed."
If the ticket requires follow-up from the customer, consider "Closed - Waited for Customer" status, indicating that the ball is in their court.
4. Follow-Up Actions:

Utilize the "Follow-up" status to schedule future actions or reminders related to a specific ticket.
Ensure that assigned follow-up tasks are completed promptly to maintain a proactive approach.
5. Waiting for Customer Response:

When additional information or clarification is needed from the customer, change the status to "Waiting for Customer."
Keep an eye on tickets in this status to promptly address customer responses when received.
6. Reopening Closed Tickets:

If a previously closed ticket requires further attention, switch the status to "Open from Closed" to reopen the communication thread.
7. Efficient Use of "Waiting for Customer" Status:

Assign the "Waiting for Customer" status judiciously when awaiting customer input or feedback.
Regularly check tickets in this status to provide timely responses once the customer responds.
8. Collaboration and Internal Notes:

Encourage collaboration by leaving internal notes within tickets to keep team members informed of updates or important details.
Ensure that all team members are aware of the ticket's status and any ongoing actions.
9. Proactive Ticket Management:

Leverage the "Follow-up" status to stay organized and set reminders for necessary actions.
Regularly review ticket statuses and prioritize tasks based on urgency and importance.
10. Closing Thoughts:

The key to an effective ticket workflow lies in clear communication, timely responses, and proactive management.
Regularly assess and refine your ticket management processes based on feedback and evolving business needs.
By following this comprehensive workflow, employees can ensure a streamlined and efficient ticket management process, resulting in improved customer satisfaction and a more organized work environment.

 
### Effective Ticket Management Practices:

Regularly review and update the status of tickets to keep track of ongoing and resolved issues.
Utilize ticket types and categories to classify tickets, making it easier to filter and prioritize tasks.
Provide clear and concise internal notes within tickets to facilitate seamless collaboration among team members.

** Effective Ticket Categorization:**
Establish a standardized set of categories and subcategories for tickets to streamline the sorting and assignment process.
Regularly review and update categories based on emerging trends or changes in the organization.

**Ticket auto-filtering**

 Streamline your ticket management further by utilizing the "Auto assign Employee to Ticket" setting. Enabling this feature automatically assigns tickets to specific employees or employee groups. You can also use Filter setting to assign specific email subjects to a certain employee/employee group. It 
You can use filter setting on Tickets configuration, to assign certain types of emails highest priority, set ticket type, and assign directly to the employee, who can handle it the best.


Invoice request from Amazon customer
Enquiry from Amazon customer
Package didn't arrive
Your email to
Delivery enquiry from Amazon customer
Order cancellation request for
Order delivery inquiry from Amazon customer
Different from what I ordered
Damaged or defective item
Update from Seller

## Understanding Ticket 

In ShopCtrl, a ticket is a comprehensive entity with several crucial parameters that collectively define its characteristics and management. These parameters include:

Name or Title:

The name or title of a ticket provides a concise yet descriptive overview of the subject or issue it represents. It serves as a quick reference for team members to understand the nature of the ticket.
Status:

The status of a ticket indicates its current position in the workflow. Whether it's "Open" for new issues, "In Progress" for active resolution, or "Closed" for successfully addressed matters, the status helps in tracking the progress of each ticket.
Priority:

Priority levels categorize tickets based on their urgency and importance. This ensures that high-priority issues receive immediate attention, helping teams effectively manage their workload and address critical matters promptly.
Type:

The type of ticket defines the nature of the request or problem. Whether it's a customer inquiry, technical issue, or a general request, categorizing tickets by type aids in efficient sorting and allocation of resources.
Assigned Customer and Order:

Associating a ticket with a specific customer and order provides context to the communication. It helps in personalizing the support or resolution process and ensures that team members are aware of the customer's history and recent transactions.
Category:

Categorizing tickets by specific themes or topics allows for better organization and streamlined management. This helps in grouping related issues together, making it easier for teams to address similar concerns efficiently.
Understanding and effectively utilizing these parameters in ShopCtrl not only enhances the clarity and organization of your ticketing system but also contributes to a more streamlined and customer-centric approach to issue resolution and communication.


## Understanding Ticket Statuses and When to Assign Them:

1. Open:

When to Assign: Use the "Open" status when a new ticket is created, and no resolution or response has been provided yet. This indicates that the ticket is actively being worked on.
2. Open from Closed:

When to Assign: Reassign a ticket to "Open from Closed" status when a previously closed ticket needs further attention or when additional follow-up is required. This status reopens the ticket for continued resolution.
3. Open from Follow-up:

When to Assign: Apply the "Open from Follow-up" status when additional actions or responses are needed based on a previous follow-up. This status ensures that the ticket is actively revisited for ongoing communication.
4. Waiting for Customer:

When to Assign: The "Waiting for Customer" status is equivalent to an "On Hold" status. Assign this when you are awaiting additional information or feedback from the customer. This temporarily removes the ticket from the main grid but does not close it, allowing for efficient handling of pending customer responses.
5. Follow-up:

When to Assign: Use the "Follow-up" status when you need to schedule a future follow-up for a specific ticket. This helps in setting reminders and ensuring that no ticket is overlooked during ongoing communication.
6. Closed:

When to Assign: Assign the "Closed" status when the ticket has been successfully resolved, and a response or solution has been provided to the customer. This indicates that the communication thread is concluded.
7. Closed - Waited for Customer:

When to Assign: Apply the "Closed - Waited for Customer" status when a ticket has been resolved, but it is contingent on customer feedback or action. This status signifies that the resolution is complete on your end, and the ticket is considered closed, pending the customer's response.
Understanding and utilizing these ticket statuses effectively ensures a systematic approach to managing your communication workflow, providing clarity on the current state of each ticket and promoting efficient collaboration within your team.