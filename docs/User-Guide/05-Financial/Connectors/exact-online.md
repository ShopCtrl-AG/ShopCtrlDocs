---
sidebar_position: 1
slug: /docs/exact-online
---

# Exact Online

Exact is a frontrunner in financial and business software for small to medium sized businesses and accountants.

ShopCtrl offers two "out of the box" - Exact Online Connectors:

* Exact Online Sync
* Exact Online Export

The Exact Online Sync is a fully automated connection using advanced authorization. The export connector is an easy way to create invoices using XML, which can be imported manually.

## Getting started
Before we can configure both ShopCtrl and Exact Online:

* Make sure you have an Exact Online account
* Ask ShopCtrl Support to enable the appmodule ‘Exact Online’ and ‘Invoice export, Exact XML’
* Login to ShopCtrl using your ‘admin’ account (this allows you access the advanced options)

### Prepare ShopCtrl

1. Open the shop settings for the applicable webshop (Configuration → Shops)
2. In the ‘Topic’ Menu, expand the ‘Financial → Invoice export’ section. It should look similar like this:

<img src={require("/img/exact-online-shop-settings.png").default} height="" width="800" />
:::warning[Note:]

In case the Exact Online items are not shown, please contact the ShopCtrl Support desk to request activation of the designated AppModule.

:::

3. To start the authorization process, click the ‘Authenticate’ button, the following window will appear:

<img src={require("/img/exact-online-authentication-welcome.png").default} height="" width="400" />


4. Click the link ‘Authorize with Exact’, to start the authentication process.
Exact will request for your credentials:

<img src={require("/img/exact-online-authenticate-uid-pwd.png").default} height="" width="800" />

5. Provide your login-name and password, and press the ‘submit (inloggen)’ button.
Usually, now the 2-factor authentication kicks in:

<img src={require("/img/exact-online-2-factor.png").default} height="" width="800" />

Use your phone or other authentication device to generate the requested code.

6. Once this step is successful, Exact finally asks for your approval to let ShopCtrl connect to your Exact account:

<img src={require("/img/exact-online-oauth-message.png").default} height="" width="800" />

Click ‘Toestaan’, to accept the connection.

7. If the process was successful, the following window will appear:

<img src={require("/img/exact-online-auth-successfull.png").default} height="" width="600" />

Exact Online is now connected to your ShopCtrl shop.

You can repeat this process for each applicable shop within your ShopCtrl platform.

### Check the connection in ShopCtrl
To ensure a proper connection, you can verify the Exact Online config window in your shop configuration. The section ‘Authorized by’ should show something similar like this:

<img src={require("/img/exact-online-shopctrl-ready.png").default} height="" width="600" />

You can always disable the authorization by clicking the ‘Remove’ button.

