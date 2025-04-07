---
sidebar_position: 3
slug: /docs/messaging-configuration
---

# Messaging Configuration


:::info[**Required Permissions**]

In order to view content or perform actions referred to in this article, you need to have the appropriate permissions enabled. An employee must be assigned to the shop with a **Shop Owner Admin** or **Shop Admin** role.

:::

## Getting started

ShopCtrl provides integration with MessageBird widget service and WhatsApp Business messenger.

We will create a new workspace at MessageBird and send you an invitation link. After that you'll be able to start setting up your WhatsApp and Webwidget channels.

Please follow the [MessageBird Onboarding guide](https://support.messagebird.com/hc/en-us/articles/360008737818-Omnichannel-Widget-onboarding-guide-for-Inbox)  to configure the widget appearance and insert the widget code snippet on your website. 

To successfully install your WhatsApp channel, you'll need:
* Sign up for WhatsApp Business from the MessageBird dashboard.
* Access to [Facebook Business Manager](https://business.facebook.com/)
* A viable Phone Number for WhatsApp
* Your business' legal address and details

See more on the topic on the MessageBird Support pages:
[Getting Started with WhatsApp FAQ's](https://support.messagebird.com/hc/en-us/articles/360019700137)
[Getting an Official Business Account ("Green Tick") for WhatsApp](https://support.messagebird.com/hc/en-us/articles/360018698958)
[WhatsApp Business Step-by-Step Onboarding](https://support.messagebird.com/hc/en-us/articles/360000258437)


Note the following limitations with the chat widget and WhatsApp. These features are on our road map for the nearest versions:
* Both channels do not support files, or locations upload. An agent will see a notification that a client have sent a not supported message type.
* Response capture feature - Incoming customer data, like order Id, is not automatically extracted and linked to the existing customer. But customers are auto-recignized and assigned to the conversation by the phone number.

To start using ShopCtrl messenger, it is also necessary to update the communication settings of the designated shop on the ShopCtrl side. Please follow the instructions below to configure messaging module on the ShopCtrl side.

### How to authorize at MessageBird

To authorize at the MessageBird we'll need to get following credentials:

* Workspace id - could be found [here](https://dashboard.messagebird.com/en/account/workspaces).
* Access key - could be found [here](https://dashboard.messagebird.com/en/developers/access). Please use LIVE type of a key.
* Signing key - could be found [here](https://dashboard.messagebird.com/en/developers/settings).


<img src={require("/img/shop-settings-messaging-messagebird.png").default} height="" width="800" />

1. Open the **Configurations > Shop details page**.
2. In the Topic Menu pane select **Communication > Messaging > MessageBird**.
3. Enter the **Workspace id**.
4. Use the **Access key** and **Signing key** to authorize at the chat provider.
5. If you are not planning to use flows, click the **Assign employee on first message** checkbox.
6. (Optional) If you are launching with the flows, provide the **Event webhook url**, link to the flow that will be handling employee availability events - "Event webhook". 
7. (Optional) For **WhatsApp** channel template setup: 
    1. Enter the **WhatsApp default template name**.
    2. Provide the **[Default template namespace](https://dashboard.messagebird.com/en/channels/whatsapp)**.
8. Decide whether you want a new conversation to be created for the same customer after the previous was closed: **New conversation on message in closed conversation**. Might be usefull for different customer orders conversation tracking.
9. Click on **Save** or **Save and Close** to apply changes.


### How to assign employees to messaging 

Once the infrastructure settings are provided, we need to define which employees can receive chat requests and view the message dialogs list in the **Shop details page > Communication > Messaging** module.
<img src={require("/img/shop-settings-messaging-employees-permissions.png").default} height="" width="800" />

To assign an employee to Messaging:
1. Open the **Configurations > Shop details page**.
2. In the Topic menu pane select **Communication > Messaging > Permissions**. The permission pane displays all users that have a role at the specific shop.
3. Check the **Chat** boxes to enable the designated communication method for the selected employee.
4. Click on **Save** or **Save and Close** to apply changes.

An employee could be assigned to messaging in several shops. Employees not given permissions for messaging will not be able to view the shop message dialogs list. But the message dialogs linked to the customer, order, or ticket conversation history could be viewed by any employee with appropriate permissions that has a role at the shop.

:::warning[**Note:**]

When withdrawing a **Shop role** from an employee, please make sure to at first remove permission to **message** from the employee.

:::

### How to change the number of slots for open conversations
Each employee assigned to messaging in a specific shop has limited slots for concurrent chat requests. The number of free slots per employee is configurable per shop. 

<img src={require("/img/shop-settings-messaging-slots.png").default} height="" width="800" />

To change the number of concurrent open chat conversations:
1. Open the **Configurations > Shop details page**.
2. In the Topic menu pane, select **Communication > Messaging > General**. 
3. Change the number of **Conversation slots per employee** to the applicable value.
4. Click on **Save** or **Save and Close** to apply changes.

If the number of slots is set to be zero, new chat requests will be received and not assigned. Please filter the conversation list to **All** to view all of the not assigned dialogs.

An employee could be assigned to messaging on several shops. In this case, slots will be shared between shops as chat requests arrive.

The slots are not distinguished between shops. So, if the employee receives five conversations from one shop and the number of slots is limited to 5, he will be considered unavailable and will not receive incoming chat requests until he closes one of the open conversations assigned.

### System flows configuration at MessageBird

The basic Messaging configuration suggests that new conversations are handed over to employees the moment the dialog reaches ShopCtrl. This setup is turned on with the **Assign employee on first message** checkbox in the MessageBird settings.

To enable flows support we need to disable this auto-assignment feature and set up flows in MessageBird to handle the **Handover** scenario.

These basic system flows are provided by ShopCtrl and will be copied to your MessageBird environment as a part of the initial setup.
Below is a short description of these system flows.

**Check business hours flow**. You might want to use Date/time flow control to determine different flows outside and inside business hours.
DIAGRAM

To hand over a dialog to a ShopCtrl employee, call a Check business hours flow webhook from a different flow, to initialize the handover process. The Handover step is a HTTP request, that is sent to ShopCtrl. 

ShopCtrl checks if any employees are available and send a response back to MessageBird, to the Event webhook flow. 
The bot is not paused in both scenarios, so you can add other steps to improve your customers experience.

**Event webhook flow.**

DIAGRAM

:::warning[Please note]

The Event webhook is a ShopCtrl system flow that could not be triggered manually from any other flow. 
Do not delete this flow to guarantee the correct handover to agent event.

:::
