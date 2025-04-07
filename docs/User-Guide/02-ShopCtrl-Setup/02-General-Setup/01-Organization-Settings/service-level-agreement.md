---
sidebar_position: 2
slug: /docs/sla-new
---

# Service Level Agreement

:::warning[Coming soon!]

The upcoming releases will introduce this new version of the Service Level Agreement configuration.

:::

The **Service Level Agreement (SLA)** is configured per communication channel at the shop level.
You can configure for each shop, the specific days of the week and hours during which a customer service team will be available. The SLA includes a set response time for each communication channel, as well as a specified time zone for each shop. Customer support statistics is gathered automatically, including the time spent on handling inbound mail, phone calls, and tickets per employees and employee groups.

Service level agreement performance data can be viewed and analyzed through a variety of reports - [Service Level Reporting](/docs/User-Guide/03-Basic-Functions/reporting.md#service-level-reporting).

For additional information, please refer to: [Ticket Configuration](/docs/User-Guide/06-Communication/Tickets/ticket-configuration.md) and [Working with Tickets](/docs/User-Guide/06-Communication/Tickets/working-with-tickets.md).

## How to set Service Level Agreement for a shop

The configuration of the Service Level Agreement per shop has undergone a number of recent changes. Now, you have the ability to configure not only the working hours for each shop but also the specific calendar days during which a customer support team is not available. You can also specify more precise response times for each communication channel.

Please follow the three steps outlined below to configure the new Service Level Agreement (SLA).

### Step 1. Create Office Hours records

:::info[**Required Permissions**]

To create and modify office hours records for a company, an employee must be granted the "**Edit office hours**" permission. The "**Delete**" permission is defined separately.

:::

The initial **Office Hours** records are generated based on the previously defined Service Levels configuration for each shop. To edit and manage these records, please navigate to the **Configuration > Office Hours** section.
Now, you have the option to create a unified Office Hours record for all the shops that operate on the same schedule. This allows you to create separate records for different work schedules followed by your shops in various countries.

![office-hours-grid](/img/office-hours-grid.png)

The Office hours record allows to set opening and closing working hours per day of the week, independently from the time zone the shop is located in. Time zone is defined on a shop configuration page.

![office-hours](/img/office-hours.png)

In order to add service day, mark the Service Day checkbox and set the working hours for this day. Or click the hour record to adjust the timing. Save the office hours record once done.
You can have a different office hours record for each of the communication channels of a shop.

### Step 2. Create Holiday Calendars

:::info[**Required Permissions**]

To create and modify Holiday calendars for a company, an employee must be granted the "**Edit holiday calendar**" permission. The "**Delete**" permission is defined separately.

:::

The holiday calendar is established by considering the specific days in each country when your company and support team are not operational. This approach enables efficient management of business operations across multiple countries.

![holidays-grid](/img/holidays-grid.png)

Holidays can be added manually to a calendar, allowing for expansion of the list each year. It is important to be aware that removing holidays from the calendar could impact the calculation of Service Level Agreement for previous records. Therefore, careful consideration should be given before making any changes to the holiday schedule.

![holidays-detail](/img/holidays-detail.png)

### Step 3. Configure Service Level Agreement per communication channel

:::info[**Required Permissions**]

In order to configure the SLA for a shop, an employee must be assigned to the shop with a **Shop Owner Admin** or **Shop Admin** role.

:::

Service Level Agreement per communication channel is configured at a shop level, based on a shop's region.

![shop-settings-sla-communication-channel](/img/shop-settings-sla-communication-channel.png)

To set the service level for a shop, follow these steps:

1.  Go to the **Shop Details Page > Service Level**.
2.  Start by selecting the **Time zone** for the shop's location.
3.  Choose a **Holiday Calendar** for the shop. This calendar will serve as the default if no specific ones are defined for communication channels.
4.  Proceed to set up the SLA for the **Default** communication channel. These settings will be used as a fallback if the specific communication channel's SLA is not defined.
    1.       Choose **Office Hours** during which your support desk operates throughout the week.
    2.       (Optional) Select **Holiday Calendar** for the shop locale.
    3.       Enter the **Percentage** of answered in time incoming request events per communication channel that identify that SLA is met. Could be later used for reporting.
    4.       Set the **Maximum response time** - time limit in working hours/minutes/seconds within which the customer request should be replied to and resolved.
    5.       Enable the configuration for the designated communication channel.
5.       You can now proceed with setting custom configuration for the other communication channels. These settings will take prejudice over the default configuration.
6.  When finished, click **Save** or **Save and Close** to apply changes to the shop.

Similarly, you can configure the SLA for other shops within your organization using the provided steps. Once the settings are applied, the SLA calculation will commence based on the newly established rules.
