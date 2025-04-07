---
sidebar_position: 1
slug: /docs/setting-up-mailbox-in-shopctrl
---

# Setting up mailbox in ShopCtrl

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

To set up the sending and receiving emails, we need to configure incoming and outcoming server settings for mail in shop settings.
Currently ShopCtrl supports both POP3 and IMAP protocols.
This section covers configuration of email protocols (pop imap smtp) using Basic authentication.

## Setting up incoming mail server

![setup-mailbox-incoing-pop-overview](/img/setup-mailbox-incoing-pop-overview.png)

1. On the sales channels panel, click the designated shop icon and select **Settings** from the list.
2. In the topic menu go to **Communication > E-mail > Receiving email**.
3. Click **Add** to create a new connection.

   <img src={require("/img/setup-mail-imap-basic-auth.png").default} height="" width="400" />

4. Select **Protocol** you are going to sync mail with: **POP3** or **IMAP**.
5. Provide the **Server** of your mail account (POP3 or IMAP accordingly).
6. Enter the **Port** to use for connecting to the mail server (POP3 or IMAP accordingly).
7. Mark the **Use SSL** checkbox.
8. Expand the **Auth parameters** pane and select **Basic** Auth method.
9. Enter the **Login** and **Password** for your mail account.
10. (Optional) You can set up an **Auto Reply mail** option for this mailbox.

    1. Select a **Mail template** based on which an auto-reply email will be generated.
    2. Provide the list of mail addresses separated by a comma to **exclude** from auto reply.
    3. You can also exclude emails with a specific subject. To do this, use regular expression syntax to specify the rule in the **Exclude Subject Expressions** field.
    4. Choose whether to postpone the delivery of auto-messages for a number of minutes or hours - **Auto reply delayed send enum value**.
       You can send reply right away by choosing **No Delay** option; within an hour - **Random Minutes**; or within a day - **Random Hours**.

    <img src={require("/img/setup-mail-auto-reply.png").default} height="" width="400" />

11. **Enable** the connection on the top of the window.
12. (Optional) You can **Delete mail from the server** after a set amount of days. This option needs to be enabled first in your mail account settings.
13. Click **Ok** to save settings.
14. Click **Save** to apply changes to the shop.

### Test connection to the mail box

To test if the mailbox was configured correctly, click the **Test MailBox** button. The popup message will inform you if the connection was successful. 
In case there were authentication errors, please verify the credentials provided. There is also a chance you will need to enable access of third parties to your mail account in the mail box account settings.

Once the connection is established, mark the **Check mail** checkbox to start receiving emails to ShopCtrl.

![receiving-email-test-maibox](/img/receiving-email-test-maibox.png)

## Setting up outcoming mail server

![setup-mailbox-outcoming-smtp](/img/setup-mailbox-outcoming-smtp.png)

1. On the sales channels panel, click the designated **Shop icon** and select **Settings** from the list.
2. In the topic menu go to **Communication > E-mail > Sending email**.
3. Provide the **Mail address** to be used as **Sent From** on this shop.
4. Choose the event to raise on replying to an email:
     1. Do not warn
     2. Warn when newer unread mail is available
     3. Warn only when mails are assigned to the same order
   5. Click **Add** to create a new SMTP connection.
   <img src={require("/img/setup-mail-smtp-basic-auth.png").default} height="" width="400" />
5. Select **Protocol:** SMTP.
6. (Optional) If you are using several smtp servers, set the **priority** to determine which server to use first.
7. Provide the SMTP **Server** for your mail account.
8. Enter the SMTP **Port** to use for connecting to the mail server.
9. Mark the **Use SSL** checkbox.
10. Expand the **Auth parameters** pane and select **Basic** Auth method.
11. Enter the **Login** and **Password** for your mail account.
12. Click **Ok** to save settings.
13. Click **Save** to apply changes to the shop.

#### Disable Chunking setting

When processing large messages, message chunking facilitates sending the message as multiple independent chunks. Message chunking is enabled by default for your mailbox. However, some legacy mail servers might not support chunked messages.
Should you receive an error in your Out mail box on sending your mail to a specific recipient saying that: " Socket connection has timed out. This could happen because the SMTP server does not support CHUNKING properly.", please consider disabling sending chunked messages for this mailbox.

### Send test mail

To check if outcoming server details were provided correctly, click **Send test mail** and enter an email address to send a test email to.

:::warning[**Mail override for outcoming mail on acceptance environment**]

To minimize the chance of automatically sending an email to a real customer, each acceptance server has a **Mail override** turned on by default. All email recipients are automatically changed to a fake email address.

:::
