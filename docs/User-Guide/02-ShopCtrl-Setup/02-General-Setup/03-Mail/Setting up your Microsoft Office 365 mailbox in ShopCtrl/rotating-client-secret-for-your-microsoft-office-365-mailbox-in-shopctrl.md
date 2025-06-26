---
sidebar_position: 3
slug: /docs/rotating-client-secret-for-your-microsoft-office-365-mailbox-in-shopctrl
---


# Rotating Client Secret for Your Microsoft Office 365 Mailbox in ShopCtrl

After configuring synchronization with your Microsoft 365 mailbox, it's recommended to note your client secret expiration date. Several days before expiration, you'll need to reissue the client secret and reauthorize the ShopCtrl application in Microsoft 365.

Once the client secret expires, the mail synchronization in ShopCtrl will stop. To restart the synchronization, you need to issue a new client secret and enter it into the corresponding mailbox settings in ShopCtrl. There is no need to create and register a new application, but the client secret needs to be replaced with a valid one for the existing application.

This process applies equally to:
- [Graph API connections](setting-up-graph-api-connection-for-your-microsoft-office-365-mailbox-in-shopctrl.md)
- [Email protocol connections](setting-up-email-protocols-to-your-microsoft-office-365-mailbox-in-shopctrl.md)
- Both sending and receiving mail functions


## Step 1. Issue a New Client Secret in Microsoft 365

1. Log in to your [Microsoft Entra admin center](https://entra.microsoft.com/).
2. Proceed to **Applications > App registrations**.
3. Locate your ShopCtrl integration record.

    <img src={require("/img/microsoft-admin-center-expired-client-secret.png").default} height="" width="400" />
4. Open it for editing.
5. Go to **Certificated & secrets** section.
    <img src={require("/img/microsoft-admin-center-expired-client-secret-change.png").default} height="" width="400" />
5. Click **New client secret**.
6. In the **Add a client secret pane**:
    - enter a **Description** for a secret.
    - Select **expiration period** (consider setting a longer duration)
    <img src={require("/img/microsoft-admin-center-create-new-client-secret-for-existing-app.png").default} height="" width="400" />
8. Click **Add** to generate the client secret.
9. Copy the **Value** field and save it securely as you would normally do with passwords.
    <img src={require("/img/application-complete-registration-getting-client-secret-value.png").default} height="" width="400" />

:::warning[**Important**]

Client secret values cannot be viewed except immediately after creation. Be sure to save the secret before leaving the page.

:::

## Step 2. Reauthorize your connection to Microsoft 365 Mailbox in ShopCtrl

For best results, perform authorization in a private browser tab to avoid account conflicts.

### For receiving mail:

1. Open ShopCtrl in a **private browser tab**.
2. Log in as a user with **Shop owner admin permissions**.
3. Navigate to:
   - Sales Channels panel → Shop icon → **Settings**
   - **Communication > E-mail > Receiving email**
3. Locate your Microsoft 365 to ShopCtrl connection and click **Edit**
    <img src={require("/img/edit-receiving-mail-graph-api-microsoft-365-mailbox.png").default} height="" width="400" />
5. On the new Mailbox details window expand **Auth Parameters** pane and enter the new **Client Secret**.
    <img src={require("/img/edit-receiving-mail-client-secret-graph-api-microsoft-365-mailbox.png").default} height="" width="400" />
9. Click **Save and Authorize**. 
10. Confirm authorization (Note: unsaved changes on other tabs will be lost).
    <img src={require("/img/authorize-mail-graph-api-microsoft-365-mailbox-confirmation-window.png").default} height="" width="400" />
11. Log in to Microsoft 365 using your **shop mail credentials** (not personal account).

    :::danger[**Important**]

    Make sure you use the **email address** you would like to configure for the integration. If your organization uses a Single sign-on (SSO), make sure you use the shop mail address and not your personal account.

    :::

12. Review and approve permissions.
13. After confirmation a **Success** window will be displayed confirming that access has been granted successfully for the account. In case any of the auth parameters were provided wrong, a corresponding window will be displayed. Correct the errors and proceed with the same steps.
14. Upon success, click **Back to Shop Settings**.
15. Test the connection by selecting the mailbox and clicking **Test MailBox**. The popup message will inform you if the connection was successful.

### For sending mail:
Repeat the same process at:
**Shop Settings > Communication > E-mail > Sending email**

Use the same client secret. Send a test email to verify functionality.

## Conclusion

You've successfully rotated your Microsoft 365 client secret and reauthorized ShopCtrl's mail synchronization. To maintain uninterrupted email functionality:

1. Note the expiration date of your new client secret.
2. Set a reminder for at least 7 days before expiration.
3. Repeat this process before the secret expires.