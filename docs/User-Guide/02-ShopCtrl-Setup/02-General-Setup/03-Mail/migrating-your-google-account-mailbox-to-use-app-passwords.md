---
sidebar_position: 2
slug: /docs/migrating-your-google-account-mailbox-to-use-app-passwords
---

# Migrating your Google Account mailbox to use App passwords

This article describes a process of changing your basic user and password authentication to Google mail account through ShopCtrl, to a more secure App password authentication.

Google [announced](https://support.google.com/accounts/answer/6010255?hl=en) that will no longer support the use of third-party apps or devices which ask you to sign in to your Google Account using only your username and password.

ShopCtrl suggests using App password authentication, which is more secure compared to user password authentication:

- App passwords do not provide access to the entire account and its settings. Only a certain set of services are accessible.
- App passwords are granted and tracked per application/device
- An App password can be revoked individually without affecting other authorized apps

Please follow the four steps below to migrate to a more secure way to authenticate to your mailbox using a generated App password.

### Video instructions. Migrating your Google Account mailbox to use App passwords

<iframe width="640" height="480" src="https://www.youtube.com/embed/CacNM2T4INE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Step 1. Deploy 2-Step verification in your admin console

This is a required step if you use an organization Google account

Allow users to turn on 2-Step Verification:
![allow-users-to-turn-on-2-step-verification](/img/allow-users-to-turn-on-2-step-verification.png)

1. In your Google Admin console (at admin.google.com) go to [Security > 2 Step Verification](https://admin.google.com/ac/security/2sv).
2. On the left, select an organizational unit or exception group.
3. Let users turn on 2-Step Verification and use any verification method, but don't require 2-Step Verification yet:
   1. Check **Allow users to turn on 2-Step Verification**.
   2. Select Enforcement > Off.
4. Click **Save**.

It is recommended to enforce 2-Step Verification. See more on how to ensure a smooth transition [Enforce 2-Step Verification (optional)](https://support.google.com/a/answer/9176657?hl=en&ref_topic=2759193#zippy=%2Callow-users-to-turn-on--step-verification%2Censure-a-smooth-transition-to-an-enforcement-policy).

## Step 2. Activate 2-Step verification for your shop mail account.

Activate 2-Step Verification for the mailbox configured for your shop in ShopCtrl

![enable-2-step-verification-google-account](/img/enable-2-step-verification-google-account.png)

1. Open your [Google Account](https://myaccount.google.com/).
2. In the navigation panel, select **Security**.
3. Under "Signing in to Google," select **2-Step Verification > Get started**.
4. Follow the on-screen steps.

Verify it's you with a second step.

For more information, please check [Turn on 2-Step Verification](https://support.google.com/accounts/answer/185839).

:::warning[Please note]

Enabling 2-step verification will disable [Less secure app access](https://support.google.com/accounts/answer/6010255?hl=en) to your google account. You will need to generate a separate App password for each application configured to access your Google account using the main password.

:::

## Step 3. Create App Password for ShopCtrl


1. Go to your [Google Account](https://myaccount.google.com/).
2. Select **Security**.
3. Under "Signing in to Google," click on **2-Step Verification**.
4. At the bottom of the page select **App Passwords**.
5. At the bottom, choose **Select app** and choose **Mail** and then **Select device> Other (Custom name)**. Type **ShopCtrl** and then **Generate**.

   <img src={require("/img/create-app-password.png").default} height="" width="800" />

6. Copy the **App Password** and save it in a secure place like you would normally do with passwords. The App Password is the 16-character code in the yellow bar on your device.
7. Tap **Done**.

For more information, please see [Create & use App Passwords](https://support.google.com/accounts/answer/185833?hl=en#).

:::warning[]

Please keep in mind, that App Passwords are revoked after Google account password change.

:::

## Step 4. Enter your app password in your mailbox settings in ShopCtrl

### Change your password for receiving mails:

![shop-settings-receiving-email](/img/shop-settings-receiving-email.png)

1. On the sales channels panel, click the designated **Shop icon** and select **Settings** from the list.
2. In the topic menu go to **Communication > E-mail > Receiving email**.
3. Select a mailbox to change and open for editing.

   <img src={require("/img/receiving-email-settings.png").default} height="" width="400" />

4. Change the **Password** to your newly created ShopCtrl **App password**.
5. Click **Ok** to save settings.
6. Click **Test Mailbox** to check if the authorization was successful.
7. Click **Save** to apply changes to the Shop.

### Change your password for sending mails:

![shop-settings-sending-email](/img/shop-settings-sending-email.png)

1. On the sales channels panel, click the designated **Shop icon** and select **Settings** from the list.
2. In the topic menu go to **Communication > E-mail > Sending email**.
3. Select a mailbox to change and open for editing.

   <img src={require("/img/smtp-server-details.png").default} height="" width="400" />

4. Change the **Password** to your newly created ShopCtrl **App password**.
5. Click **Ok** to save settings.
6. Click **Send test mail** to check if authorization was successful.
7. Click **Save** to apply changes to the Shop.
