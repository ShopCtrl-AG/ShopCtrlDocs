---
sidebar_position: 4
slug: /docs/handling-incoming-messages
---

# Handling Incoming Messages


To start accepting incoming messages, the agent must mark them as **Available**.
If the agent remains unavailable for 5+ minutes after a successful login, ShopCtrl displays a popup to update availability.

<img src={require("/img/messages-main-screen-availability.png").default} height="" width="800" />

:::warning[**Note**:]

To avoid unexpected incoming messaging traffic, by default, an agent is always marked as **Unavailable**. 

:::

If you are leaving your workplace, please set the status to **unavailable** manually. So that new conversation requests won't be assigned to you while you are absent. 

## New message notification

An employee receives a popup notification when a new message session is requested. The availability pulldown also displays the number of new messages.

<img src={require("/img/messaging-notification.png").default} height="" width="800" />

To open the [message interface](./messaging-interface.md), click on the notification or the message pulldown menu.

## Replying to a new message
Incoming messages are displayed in real-time within the dialog window. 
The support agent can reply manually or use the wiki feature to provide a fast answer to frequently asked questions.

## Closing conversations
During or after rounding up a message conversation, you might want to archive the session.
To achieve the session, change the conversation status to closed. 
Once selecting the **Closed** status, the message will disappear instantly from the message inbox.

If you want to reopen a closed session, use the message filter Mine & Closed on the left pane to display all finished sessions. You can now change the status to **Open** again.

## Adding notes to conversations
You can add a simple internal text note to the conversation. As well as name and e-mail, in case there is no existing relationship. For example, just a visitor who wants some information and did not make a purchase earlier. 

## Connecting conversation to an order, ticket, or customer

ShopCtrl enables linking a conversation to multiple entities. The assignee can attach a chat session to an order, ticket, or customer.

For example, you can connect a conversation to a certain order, and it will be automatically linked to the customer conversation history record as well. 

You can also link a ticket to the conversation. Depending on the existing connections between ticket, order, and customer, the corresponding records will be updated as well.

:::warning[**Note**]

Linking a Ticket to the message conversation will not automatically reopen the closed ticket. Please click the view button and change the status manually.

:::

## Assigning a category to conversation
Click on a pulldown menu in the **Category** field to select and save a relevant category to the conversation page.

## Handing over a conversation
When the assigned agent cannot handle a specific incoming request, they can hand over the conversation to another available agent by clicking the **Hand over** button.

The following dialog appears:

<img src={require("/img/messaging-hand-over.png").default} height="250" width="" />

Select the applicable co-worker and click the handover symbol. 
In the same way, you can also hand over an unassigned conversation to yourself.

