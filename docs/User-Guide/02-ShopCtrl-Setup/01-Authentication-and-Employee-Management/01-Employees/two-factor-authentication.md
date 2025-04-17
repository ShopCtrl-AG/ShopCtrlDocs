---
sidebar_position: 4
slug: /docs/two-factor-authentication
---

# Two Factor Authentication

After your first login, we suggest changing the password provided by the administrator.
You can also set a two-factor authentication to add another layer of security, supplementing the username and password model with a code that only you have access to.
ShopCtrl offers to set up a two factor authentication using an authenticator application.
Two-factor authentication can be configured as a mandatory requirement for users. Please contact our Support team to turn it on on your ShopCtrl environment. After the next login users will be prompted to set up two factor authentication.

## Authenticators

The first thing you need to do to set up two factor authentication is to choose a service to use.
[Authy](https://authy.com/) is a popular authenticator for various platforms, like [Android](https://play.google.com/store/apps/details?id=com.authy.authy) or [IOS](https://itunes.apple.com/us/app/authy/id494168017).
We recommend this authenticator because it allows you to synchronize your tokens with multiple devices. You can also backup your tokens and restore them later, for example, when you have a new phone.

Google Authenticator is probably the most famous authenticator out there. Google Authenticator comes for both [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en) and [IOS](https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8).

:::warning[**Note:**]

If you lose your phone or tablet, all Google authenticator tokens are lost, and you can no longer access any website for which you have stored a token. You also can not transfer your tokens to a new phone or tablet.

:::

## How to setup a two factor authentication

![enable-two-factor-authentication](/img/enable-two-factor-authentication.png)

To set up a two factor authentication:

1. Log in to your ShopCtrl account.
2. Click on your name in the right top corner and choose **Settings** in the dropdown menu,
3. In the topic menu below, open the **Two Factor Authentication** and click the **Setup Two Factor Authentication** button.
4. A QR code together with the secret key will be displayed in the new popup window.
5. Scan the QR code with your authenticator application of choice.
   Alternatively: enter the secret manually into your authenticator application.
6. Enter the generated code from the authenticator into the code field.
7. Click the **Verify** button to validate the code.

Now with the next login, after providing login and password, you will be required to enter the code to enter the system.

## How to disable the two factor authentication

![disable-two-factor-authentication](/img/disable-two-factor-authentication.png)

To disable two factor authentication, you will require a code:

1. Log in to your ShopCtrl account.
2. Click on your name in the right top corner and choose **Settings** in the dropdown menu,
3. In the topic menu below, open the **Two Factor Authentication** and click the **Disable** button.
4. Confirm disabling Two Factor Authentication by entering the code.
5. Click the **Verify** button to validate the code and confirm.
