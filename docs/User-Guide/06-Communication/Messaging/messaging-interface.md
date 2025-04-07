---
sidebar_position: 2
slug: /docs/messaging-interface
---

# Messaging Interface


To open the messaging interface, navigate to the **Communication > Messages** in the navigation menu.

The main messaging window displays all active sessions assigned to the employee.

## Messaging window layout
<img src={require("/img/messaging-window-layout.png").default} height="" width="800" />

### List of conversations received
The left pane displays the chats based on the selected filter and selected channel.

Using the **Message filter** you can apply several viewing options
<img src={require("/img/chatmessage_filter.png").default} height="" width="400" />

| Filter Name | Description |
| --- | --- |
| Mine & Open | Default. All conversations are assigned to the active user and not answered yet. |
| Not assigned & Open | All not assigned and thus not responded to conversations. |
| Mine & Closed |All closed conversations assigned to the active user. |
| All | All conversations, both open and closed. For all users. |



### Message dialog
<img src={require("/img/messaging-conversation-dialog-pane.png").default} height="" width="400" />

The middle pane contains the actual messaging dialog with the customer.
Receiving and responding to messages is handled through the chat message dialog.
Incoming messages are displayed realtime within the dialog window.
The support agent can reply manually or use the wiki feature to provide a fast answer on frequently asked questions.
The dialog provides a clear overview of the communication timeline.

**Send template message** button sends an approved by WhatsApp and defined at MessageBird template message to ask customer consent for interaction. Opt-in is required each time an agent initiates a conversation with a customer or continues a conversation after a 24-hour session expiries. 

### Message details
The right pane allows you to [connect the messaging session to a particular order, customer or ticket](/User-Guide/06-Communication/Messaging/handling-incoming-messages.md#connecting-conversation-to-an-order-ticket-or-customer).