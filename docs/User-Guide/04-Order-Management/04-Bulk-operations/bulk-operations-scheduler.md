---
sidebar_position: 1
slug: /docs/bulk-operations-scheduler
---

# Bulk Operations Scheduler

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Admin** or **Shop Owner Admin** role to perform actions referred to in this article.

:::

## Overview

For certain bulk operation filter types, it is possible to create a **Scheduled task** that will be run automatically at the interval specified.

The settings of the particular scheduled task, in general, repeat the settings of the selected bulk operation except for the interval settings. 

## Setting up an interval for the bulk operation
<img src={require("/img/bulk-operaations-scheduler-interval-settings.png").default} height="" width="" />

To set up an **Interval** for the bulk operation:
1. Choose an **Interval**.
2. Set a starting point by choosing **Start Date** and **Time**.
3. (Optional) Set a date when the bulk operation task will stop executing - **Expire**.

Depending on a selection type you might want to choose a certain **Interval**. 
Starting point by default is set to be the current time. A starting point could be in the future or in the past, the interval will always be calculated beginning from the starting point in chosen periods.

Here is a list of intervals available with the examples of launches considering that the start date and time were set to be in the future the moment a task was created.

| Interval | Start date and time setting | 1st launch | 2nd launch| 3rd launch |
| --- | --- | --- | --- | --- |
| None | 1-7-2021 9:00 am | 1-7-2021 9:00:00 am | - | - |
| Every 5 seconds | 1-7-2021 9:00 am | 1-7-2021 <br/>9:00:00 am | 1-7-2021 <br/>9:00:05 am | 1-7-2021 <br/> 9:00:10 am |
| Every Minute | 1-7-2021 9:00 am | 1-7-2021 9:00 am | 1-7-2021 9:01 am  | 1-7-2021 9:02 am  |
| Every 5 Minutes | 1-7-2021 9:00 am | 1-7-2021 9:00 am | 1-7-2021 9:05 am | 1-7-2021 9:10 am |
| 10 minutes | 1-7-2021 9:00 am | 1-7-2021 9:00 am | 1-7-2021 9:10 am | 1-7-2021 9:20 am |
| Hourly | 1-7-2021 9:00 am | 1-7-2021 9:00 am | 1-7-2021 10:00 am | 1-7-2021 11:00 am |
| Daily | 1-7-2021 9:00 am | 1-7-2021 9:00 am | 2-7-2021 9:00 am | 3-7-2021 9:00 am |
| Weekly <br/> (Every 7 days) | 1-7-2021 9:00 am | 1-7-2021 9:00 am | 8-7-2021 9:00 am | 15-7-2021 9:00 am |
| Monthly | 1-7-2021 9:00 am | 1-7-2021 9:00 am | 1-8-2021 9:00 am | 1-9-2021 9:00 am |

**Monthly** **interval** - is very dependant on the starting date set. The operation will be repeated each month on the day set as a starting point. Please be careful with setting this date, cause a month could be 28-31 days. If the starting point is '31', for the months with days count 28-29-30, the operation won't be scheduled till next month. 

## How to schedule  preferred or actual shipping date operation

<img src={require("/img/bulk-operations-scheduler-actual-shipping-date-and-orderrow-params.png").default} height="" width="800" />


To create a scheduled task for the **Preferred or Actual shipping date and order parameters** bulk operation:

1.  Go to **Configuration > Bulk Operations Scheduler**.
2.  Click **Add** to create a new operation task.
3. Select **Shop** based on which the orders will be selected.
4. Enter **Description** of operation performed.
5. Choose an **Interval** at which you would like the operation to repeat. For the preferred shipping date filter type, the shortest interval applicable will be 'daily'.
6. Set a **Start Date** and **Time** from which the interval will be calculated.
7. (Optional) Set a **Date** when the bulk operation task will stop executing - **Expire**.
8.  Choose filter type: **Pref. Shipping Date & Order Params**.
9.  Choose **Shipment date type**: Actual Shipping Date or Preferred Shipping Date.
10.  Select an operation type: **Send Email**
11.  Select a **Mail Template** you would like to send to the customers.
12.  Specify the number of days **before** or **after** shipping date.
13.  (Optional) Enter and select specific **Product code**. Only orders with this product will be included in the selection.
14.  (Optional) Select **Product Group** to narrow the selection to a specific product group.
15.  (Optional) Specify the **Order Row Parameters**: **Key** (Name) and **Value** that should be **included** in the selection.
16.  (Optional) Specify the **Order Row Parameters** : **Key** (Name) and **Value** that should be **excluded** from the selection.
17.  Click **Test Filter**. Orders matching the query will be displayed in the popup window.
18.  Mark the **Active** checkbox to enable the bulk operation task.
19.  Click **Save** or **Save and Close** to apply the changes.

The newly created bulk operation task will run in the background. 
For the flow shown on the screenshot above, the timing will be as follows considering that the start date and time were set to be in the future:
| Interval | Start date and time setting | 1st launch | 2nd launch | 3rd launch |
| --- | --- | --- | --- | --- |
| Daily | 07-09-2022 12:15 am | 07-09-2022 12:15 am | 08-09-2022 12:15 am | 09-09-2022 12:15 am |

And after a certain amount of iterations, the task will stop executing on 10 September 2022.

The operation will be performed each day at the set time. A list of records could be viewed from the regular **General > Bulk Operations Tab**.
A new record will be created even if there will be no orders applicable for the filter. In this case, the orders list will be empty.
 