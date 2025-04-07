---
sidebar_position: 1
slug: /docs/messaging-overview
---

# Messaging Overview

ShopCtrl supports multiple message channels:
* WhatsApp
* Webchat

Direct messaging via a webchat widget creates a personal connection with customers looking for support. It is a fast and effective way to offer help without interrupting their experience. And with WhatsApp you can provide excellent after-sales support.
Integration with MessageBird allows the creation of chatbots and automates customer service.

ShopCtrl messaging features allow you to:
* Distribute incoming chat requests among available employees 
* Link incoming messages to the existing orders, tickets, and customers
* Keep track of communication history with a customer among all channels in one place
* Hand over chats between employees
* Track customers waiting time

### Chat requests distribution
Current chat distribution settings define the following flow: incoming chat requests are distributed equally among all available employees. At the same time the employees with the lowest amount of open conversations, will receive new enquirries until they are leveled off with the other team members.
You can adjust the per-employee workload by changing the slots number in [the Configuration of the shop](./messaging-configuration.md#how-to-change-the-number-of-slots-for-open-conversations). 

An employee is considered **available** if these conditions are met:
- Employee has chat permission on the shop.
- Employee is logged in.
- Employee status is changed to available.
- Employee has at least one free slot for a new chat request.

When there are no employees available for messaging, a client will receive a "No employee available" notification, which can be defined in the FlowAI flows of the specific shop. The message could differ depending on the business hours set. 

:::warning[**Note**]

If no employees are available or all employees have full slots, incoming chat requests will be received but not assigned. Please open the **Not Assigned & Open** filter to view the list of not assigned chat requests.

:::

Unavailable employee:
* Will not receive incoming chat requests.
* Will not be possible to hand over a conversation to them.
* Will still receive reopened dialogs from returning customers.

#### Reopened conversations
After a conversation is rounded up and closed, a customer may return with some additional questions. After receiving a new message from the customer, the conversation will be reopened and displayed in the assigned employee dialog list, no matter the employee availability status and amount of the free slots left. The number of reopened conversations is not limited to slots count as well. That guarantees that no returning chat requests will be missed and could be addressed right away.

:::warning[**Note**]

If the employee assigned to messaging is out of the office on a particular day, please remember to check their reopened unread conversations and handover to the available employees.

:::


