---
sidebar_position: 2
slug: /docs/setting-up-email-protocols-to-your-microsoft-office-365-mailbox-in-shopctrl
---

# Setting up Email protocols to your Microsoft Office 365 mailbox in ShopCtrl

This article describes the process of setting up your Microsoft Office 365 mailbox in ShopCtrl based on the OAuth authorization flow using pop3/imap and smtp protocols.

Below are the five steps you need to accomplish to set up a Microsoft Office 365 mailbox in your ShopCtrl environment.

### Video Instructions. Setting up your Microsoft Office 365 mailbox in ShopCtrl

<iframe width="640" height="480" src="https://www.youtube.com/embed/kNHqudFFHoI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Step 1. Configure your Microsoft Office 365 user apps access permissions

1. Log in to your [Microsoft admin console](https://admin.microsoft.com).
2. Click on the <span>&#9776;</span> menu in the top left corner and go to **Users > Active users**.
3. Select your shop user and click on the **User name** to open preferences.
4. Go to the **Mail tab** and click the **Manage email apps** link.

![configuring-microsoft-365-user-email-apps](/img/configuring-microsoft-365-user-email-apps.png)

5. Choose apps the user can use to access their Microsoft email:
6. Depending on a protocol you are planning to use, choose either **Pop** or **IMAP**.
7. (Optional) If you are going to use the Microsoft SMTP server to send emails, check the **Authenticated SMTP** as well.

![configuring-microsoft-365-user-email-apps-permissions](/img/configuring-microsoft-365-user-email-apps-permissions.png)

:::info[]

These are the minimum requirements for the ShopCtrl mail integration. Use your best judgment to decide on other apps available for this account.

:::

8. Click **Save changes**.

## Step 2. Create and configure an API application for ShopCtrl

1. Sign in to the Microsoft [Azure Active Directory administration console](https://aad.portal.azure.com/) as an admin.

:::info

You can also access the Azure Active Directory admin center from the [Microsoft Admin Console](https://admin.microsoft.com) by clicking the **<span>&#9776;</span> menu > Admin Console > Azure Active Directory**.

:::

2. In the Azure Active Directory admin center, go to the **Enterprise applications > All applications** and click **New application**.
3. On the Browse Azure AD Gallery page click **Create your own application**.

![](/img/create-your-own-application-azure-active-directory-admin-center.png)

4. In the **What's the name of your app field**, enter any name you want to use to find the added app in the list of Active Directory apps.
5. Select **Register an application to integrate with Azure AD (App you're developing)**.
6. Click **Create**. The added program will appear in the workspace in the Enterprise applications section. The **Register an application** window will open.

![](/img/register-an-application-azure-active-directory-admin-center.png)

7. On the **Supported account types** section select: **Accounts in this organizational directory only (Single tenant)**.
8. On the Redirect URI select **Web** and enter your ShopCtrl environment URL with a path to the mail authorization: `https://{HOST}/Mail/Microsoft365/Auth.aspx`.
9. Click **Register**.

:::info[**Check and change redirect URI**]

You can always check and change the link provided by entering application **Properties > application registration > Authentication**.
Please check Microsoft docs [Redirect URI (reply URL) restrictions and limitations](https://docs.microsoft.com/en-us/azure/active-directory/develop/reply-url) for more information.
If you are testing a connection in the acceptance environment and plan to use the same application in the production environment, just add another Redirect URI to your production HOST for the same application.

:::

### Grant permissions to the ShopCtrl application

To complete application registration, we need to grant new app API permissions to retrieve mail via Pop or IMAP, and (optional) send mail via SMTP protocol.

1. To add minimal required API permissions to the new app:
2. Go back to **Enterprise applications > All applications**.
3. Click on the app you just created. The application details will open.
4. On the left menu, select **Properties**.
5. Click on the **application registration** to manage additional properties.

![](/img/application-complete-registration-azure-active-directory-admin-center.png)

6. On the menu on the left select **API permissions**.
7. On the API permissions page click **Add a permission**.

![](/img/application-complete-registration-add-permissions.png)

8. On the new **Request API permissions** window on the **Microsoft APIs** tab select **Microsoft Graph API**.

![](/img/application-complete-registration-request-api-permissions.png)

9. Choose **Delegated permissions** for the Microsoft Graph.
10. Use the search in the **Select permissions** field to find and tick the following permissions:
    - offline_access
11. Depending on the protocol you are planning to use:
    - POP.AccessAsUser.All
    - or IMAP.AccessAsUser.All
12. If you are planning to use this mailbox to send emails:
    - SMTP.Send
13. Click **Add permissions**.

The added permissions will be displayed in the list:
![application-complete-registration-added-permissions](/img/application-complete-registration-added-permissions.png)

_Do not close the screen just yet. We will need to copy the application data to ShopCtrl._

## Step 4. Getting credentials for your Microsoft 365 mailbox synchronization with ShopCtrl

To get the incoming and outgoing server settings please visit Microsoft 365 documentation [POP, IMAP, and SMTP settings](https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-8361e398-8af4-4e97-b147-6c6c4ac95353)

To establish the API connection with your Microsoft 365 account, we need to provide the following information:

- Application (client) ID
- Directory (tenant) ID
- Client secret value

To create and get credentials:

1. Sign in to the Microsoft [Azure Active Directory administration console](https://aad.portal.azure.com/) as an admin.
2. In the Azure Active Directory admin center go to the **Enterprise applications > All applications**
3. Click on the app you created for integration with ShopCtrl. The application details will open.
4. On the left menu, select **Properties**.
5. Proceed to manage additional properties by clicking on the **application registration**: "If this application resides in your tenant, you can manage additional properties on the application registration."
6. On the left menu, select **Overview**.
7. Copy the **Application (client) ID** and save it to a secure place. It is your **Client ID**.
8. Copy the **Directory (tenant) ID** and save it to the secure place. It is your **Tenant ID**.

![](/img/application-complete-registration-getting-client-id-tenant-id.png)

9. On the left menu, select **Certificates & secrets**.
10. Click **New client secret**.
11. On the **Add a client secret pane**, enter the **Description** for a secret.

![](/img/application-complete-registration-generate-client-secret.png)

12. Select the **Expires** period for the secret. Consider setting up a bigger period.

:::warning[**Attention**]

Once the client secret expires, the mail synchronization in ShopCtrl will **stop**. To restart the synchronization, you need to issue a new client secret and enter it into the corresponding mailbox settings in ShopCtrl. There is no need to create and register a new application, but the client secret needs to be replaced with a valid one for the existing application.

:::

13. Click **Add** to generate the client secret.
14. Copy the **Value** field of the client secret and save it as you would normally do with passwords.

![](/img/application-complete-registration-getting-client-secret-value.png)

:::warning[**Note**]

Client secret values cannot be viewed, except for immediately after creation. Be sure to save the secret when created before leaving the page.

:::

## Step 5. Setting up Microsoft Office 365 mailbox synchronization in ShopCtrl

The next step is to enter the credentials for the created application into ShopCtrl and authorize it on Microsoft 365.
Please check [Microsoft support pages](https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-8361e398-8af4-4e97-b147-6c6c4ac95353) to get the up-to date server settings.

### Setting up the outcoming mail server

![sending-email-smtp-microsoft-365](/img/sending-email-smtp-microsoft-365.png)

1. Log in to your ShopCtrl environment as a user with Shop Owner admin role.
2. On the sales channels panel, click the designated shop icon and select **Settings** from the list.
3. In the topic menu go to **Communication > E-mail > Sending email**.
4. Enter the **Mail address** you are configuring.
5. Click **Add** to create a new connection.
   ![setup-sending-email-smtp-not-authorized-microsoft-365](/img/setup-sending-email-smtp-not-authorized-microsoft-365.png)
6. Provide the **SMTP** Server for your Microsoft 365 mail account.
7. Enter the SMTP **Port** to use for connecting to the mail server.
8. Mark the **Use SSL** checkbox.
9. Expand **Auth Parameters** pane and select **Microsoft 365** as an **Auth method**.
10. Enter the **Tenant ID** of the application you created.
11. Provide **Client ID**.
12. Enter **Client Secret**. The **Status** field will be changed to **Not authorized**.
13. Click **Save and Authorize**. You will be redirected to authorization confirmation. Please make sure there are no unsaved changes on the other tabs. If you proceed, progress on other tabs will be lost.
14. Login to your **Microsoft 365** account under the user you are configuring. Review the permissions and confirm granting access.
    :::(Warning) (**Important**)
    To set up the integration with the Microsoft , it is essential to **authenticate as the user account** associated with the application, rather than logging in as the Active Directory admin.
    :::
15. After confirmation a **Success** window will be displayed confirming that access has been granted successfully for the account. In case any of the auth parameters were provided wrong, a corresponding window will be displayed. Correct the errors and proceed with the same steps.
16. Click the **Back to Shop Settings** button and you will be redirected back to your ShopCtrl environment.
17. On the shop settings page, the **Status** of your connection will change to **Authorized**
18. **Enable** the connection on the top of the window.
19. Click **Ok** to close settings.

#### Send test mail

To check if outcoming server details were provided correctly, click **Send test mail** and enter an email address to send a test email to.

### Setting up the incoming mail server

![receiving-email-imap-microsoft-365](/img/receiving-email-imap-microsoft-365.png)

1. On the sales channels panel, click the designated shop icon and select **Settings** from the list.
2. In the topic menu go to **Communication > E-mail > Receiving email**.
3. Click **Add** to create a new connection.
   :::(Warning) (Important)
   If you have your mailbox configured already in ShopCtrl, open and modify the **exisitng connection** instead of creating new one.
   :::

![receiving-email-imap-connection-office365](/img/receiving-email-imap-connection-office365.png)

4. Select **Protocol** you are going to sync mail with: **POP3** or **IMAP**.
5. Provide the **Server** of your mail account (POP3 or IMAP accordingly).
6. Enter the **Port** to use for connecting to the mail server (POP3 or IMAP accordingly).
7. Mark the **Use SSL** checkbox.
8. Expand **Auth Parameters** pane and select **Microsoft 365** as an **Auth method**.
   ![](/img/receiving-email-imap-not-authorized-office365.png)
9. Enter the **Tenant ID** of the application you created.
10. Provide **Client ID**.
11. Enter **Client Secret**. The **Status** field will be changed to **Not authorized**.
12. Click **Save and Authorize**. You will be redirected to authorization confirmation. Please make sure there are no unsaved changes on the other tabs. If you proceed, progress on other tabs will be lost.
13. Login to your **Microsoft 365** account under the user you are configuring. Review the permissions and confirm granting access.

:::warning[**Important**]

To set up the integration with the Microsoft , it is essential to **authenticate as the user account** associated with the application, rather than logging in as the Active Directory admin.

:::

14. After confirmation a **Success** window will be displayed confirming that access has been granted successfully for the account. In case any of the auth parameters were provided wrong, a corresponding window will be displayed. Correct the errors and proceed with the same steps.
15. Click the **Back to Shop Settings** button and you will be redirected back to your ShopCtrl environment.
16. On the shop settings page, the **Status** of your connection will change to **Authorized**.
    ![receiving-email-imap-authorized-office-365](/img/receiving-email-imap-authorized-office-365.png)
17. **Enable** the connection on the top of the window.
18. Click **Ok** to close settings.

#### Test connection to the mailbox

To test if the mailbox was configured correctly, click the **Test MailBox** button. The popup message will inform you if the connection was successful.
Once the connection is established, mark the **Check mail** checkbox to start receiving emails to ShopCtrl.
