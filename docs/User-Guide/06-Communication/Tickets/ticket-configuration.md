---
sidebar_position: 2
slug: /docs/ticket-configuration
---

# Ticket Configuration

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::


To start using the ShopCtrl ticketing features, it is necessary to update the communication settings of the designated shop.
<img src={require("/img/shop-details-ticket-configuration.png").default} height="" width="400" />

See also: [Setting Service Level for a shop](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/01-Organization-Settings/service-level.md).

### General settings

1. Open the **Shop Details page > Communication > Tickets**
3. The ticket feature is either on or off. When it is not activated, incoming mails will be visible in the ShopCtrl Mail module. To enable the ticketing functionality, mark the **Enabled** checkbox.
4. Click **Save** to apply the changes.
5. (Optional) Mark the "**Auto assign Employee to Ticket**" checkbox if you would like to auto-assign a non-assigned ticket to the employee who opens it for viewing or editing.
6. (Optional) Choose whether you would like a **category** to be a required field for a ticket.
8. Click **Save** or **Save and Close** to apply the changes to the shop.

:::warning[]

Please note that some settings are only available after you have enabled the ticket option and saved the shop settings for the first time.

:::
### Waiting for customer

You can set up auto-reminders for the **Wait for customer** status tickets to automate the follow-up work.
The days' calculation in all three cases starts from the moment an employee changes the ticket status to **Wait for customer and close**. 
You can specify the mail templates that will be used for autogenerating reminders. 
If the customer doesn't answer within the set period of days, the ticket status will be automatically changed to **Closed**.

### Mail settings
**Create ticket on incoming mail.** If you want to have a ticket created with each new email, mark the checkbox.

You can assign a [ticket type](/User-Guide/06-Communication/Tickets/ticket-types.md) on new incoming emails and manage the ticket types within the basic configuration.

Decide whether the ticket is required for the new outbound mail:
* NotRequired - ticket is not required for the outgoing emails
* AutoCreateTicket - a ticket will be created and closed the moment the email is sent.
* WarnUserWhenNoTicket - an employee will receive a warning when sending an email if there is no ticket created for this email
* PreventSendingMail - it won't be possible to send an email without a ticket linked to it.

### Follow up - ticket (re)open behavior 
Once the system marks a ticket as open, it can be assigned to the same agent, or the assignment can be removed.

> Example: Agent answers a customer's question, and the customer is satisfied with the reply. Agent closes the ticket. One day later, the customer asks an additional question using the same ticket ID.

Using the behavior settings, you can determine how you want ShopCtrl to manage this:

**KeepEmployeeAssigned**: The same agent remains assigned
**UnassignEmployee**: The ticket will be marked as **Open** and given to a new agent.

**Default follow up time, in hours:** determines default follow up time. This period will be added to the current user time when changing ticket status to 'Follow up'. 
You can always use a **Mark follow up** drop-down on ticket details to set a more specific follow up date.


### Idle mail
Here you can set a mail template and a date when the email will be generated and sent to the waiting customers.

### Ticket filter
Using the robust filtering algorithm, ShopCtrl enables you to use regular expressions to route specific messages to the correct team or agent.
In the sample filter below, we will point out some of the filter features:
<img src={require("/img/shop-details-tickets-add-filter-bookkeeping.png").default} height="" width="400" />

1. Click the **Add Filter** button to start creating a new filter rule.
2. Provide a brief **Name** of the filter.
3. Select a **Priority** (0 = highest priority).
4. Specify what values to match:
    1. Choose conditional operator for the following filter: **And**,  **Or**.
    2. Enter your search criteria for **Title** - a subject of the incoming email.
    3. Or for the **Content** - email body.
    4. (Optional) You can use the advanced search and look for specific patterns using regular expressions. Check the **Is Regex** checkbox and specify the search criteria using regex syntax.
5. Decide which **Actions to perform** when the criteria match:
    1.  What **Category** to apply to the ticket.
    2.  Which **Group** or **Employee** the ticket should be assigned to.
    3.  Choose ticket **Priority**: Low, Medium, High.  
6. Click **Ok** to save the filter.

For more information on Regular expressions syntax please view [.NET regular expressions](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions).

:::warning[**Note:**]

**Filter Priority**. When match, the filter with 0 priority will always be applied. Otherwise, the filter with the highest priority.

:::

### Employee groups
You can create new employee groups in Configuration > Employee Groups or use the existing ones to distribute the inbound tickets between applicable employees.
Please make sure to turn on the "For ticket management" checkbox setting on the Employee group details page to make this group available for assigning tickets.
<img src={require("/img/employee-group-setting.png").default} height="" width="800" />