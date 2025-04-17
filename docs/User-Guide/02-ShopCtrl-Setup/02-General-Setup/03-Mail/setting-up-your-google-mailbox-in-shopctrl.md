---
sidebar_position: 3
slug: /docs/setting-up-your-google-mailbox-in-shopctrl
---

# Setting up your Google mailbox in ShopCtrl

ShopCtrl suggests to use App password authentication to your Google mailbox, which is more secure compared to user password authentication. Below are the four steps you need to accomplish to set up a Google mailbox in your ShopCtrl environment.

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

For more information, please check [Turn on 2-Step Verification](https://support.google.com/accounts/answer/185839).

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

## Step 4. Set up mailbox 

Please check Google documentation to get the Incoming Mail (POP3 or IMAP) Server and Outgoing Mail (SMTP) server details:

[Read Gmail messages on other email clients using POP](https://support.google.com/mail/answer/7104828)

[Check Gmail through other email platforms using IMAP](https://support.google.com/mail/answer/7126229)


Follow the steps in this article to set up mail box in your ShopCtrl environment: [Setting up mailbox in ShopCtrl](./setting-up-mailbox-in-shopctrl.md).
