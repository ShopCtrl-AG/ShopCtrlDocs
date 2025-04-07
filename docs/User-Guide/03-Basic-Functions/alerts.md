---
sidebar_position: 1
slug: /docs/alerts
---

# Alerts

Alerts are vital mechanism for informing users about any kind of problems that have occurred in the system.

Alerts can vary by severity, where red flag Error has the highest severity, yellow warning - medium, and blue flag information - the lowest.

To immediately notify employees that something went wrong with the order, a yellow banner will appear on the orders overview grid. Clicking the banner will filter the orders with problems.

![alerts-on-orders-grid](/img/alerts-on-orders-grid.png)

When opening an order, there will also be a pop-up notification with a link, that will forward you to an alerts tab.
An alert contains all the information about the place an error occurred, the type of the error, and a short description of what happened. On the example below, a trigger that sends a track and trace email to the customer failed to execute, because there was no email address specified for the order.

![alerts-on-orders](/img/alerts-on-orders.png)

Once the problem has been tracked and solved, you can remove the notification by clicking the mark read button. Otherwise, please contact the ShopCtrl Support team to track down the issue.

As a shop owner, you can decide which types of alerts are visible for which employee role on the Shop Owner details page > Authorization tab. By default, only shop owner admins can view and mark read all types of alerts.

An alert notification count is displayed in the top right corner next to the employee name right after the login. Clicking it will open the Alerts tab, from which you can manage the notifications.

![alerts](/img/alerts.png)

## Create alert

As an admin, you can not only view alerts and mark them read, but also issue information type alerts to your employees.

How to create an alert notification to all your company employees:
![create-alert](/img/create-alert.png)

1. Go to **General > Alerts**.
2. Click **Add**.
3. In the Destination pane, choose **Send to**: **All Employees**.
4. Change the **Severity**: Information, Warning, Error.
5. On the **Content** tab enter the **Title**.
6. Use WYSWYG editor to fill in the text of the alert message.
7. Click **Create and close** to send out the message.

## Configure alert notifications via email

ShopCtrl offers for users to subscribe to the alert notifications. It is designed to send automatically notifications about new alerts at a predefined interval.
Do not rely on the notification interval itself and treat it as notification interval within which the alert notification will arrive.

For example, you might want to be notified about an alert within 15 minutes after alert is created. Or prefer to receive an accumulated alerts list once a day.
The alert is sent one-time to avoid unnecessary

Alert could be easily opened for viewing from the direct mail link. The alert mail template itself is also editable. Please check the available [Alerts merge fields](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md#alerts-notification) for editing the template.

Each employee can configure alert notifications to be sent directly to their email.
To set up a alert notifications:

1. Log in to your ShopCtrl account.
2. Click on your name in the right top corner and choose **Settings** in the dropdown menu.
3. In the topic menu below, open the **Email Notifications**.
4. **Enable** the feature.
5. Choose an interval within which you would like to be notified about an alert.
6. (Optional) Choose which are the **alert types** that you are interested in and subscribe for receiving only these kind of alerts.
7. Click **Save** or Save and Clode to apply changes.

Expect the first mail to arrive within first 15 minutes after notification is enabled.

![alerts-email-notifications](/img/alerts-email-notifications.png)
