---
sidebar_position: 4
slug: /docs/two-factor-authentication
description: "Stel tweestapsverificatie in ShopCtrl in met een authenticator-app, en maak het verplicht voor alle gebruikers."
---

# Tweestapsverificatie

Na de eerste keer inloggen raden we u aan het wachtwoord te wijzigen dat u van de beheerder hebt gekregen.
U kunt ook tweestapsverificatie instellen voor een extra beveiligingslaag. Naast uw gebruikersnaam en wachtwoord hebt u dan een code nodig waar alleen u toegang toe hebt.
In ShopCtrl stelt u tweestapsverificatie in met een authenticator-app.
Tweestapsverificatie kan verplicht worden gesteld voor gebruikers. Neem contact op met ons Support-team om dit in uw ShopCtrl-omgeving in te schakelen. Bij de volgende keer inloggen wordt gebruikers gevraagd tweestapsverificatie in te stellen.

## Authenticators {#authenticators}

Om tweestapsverificatie in te stellen, kiest u eerst welke app u wilt gebruiken.
[Authy](https://authy.com/) is een populaire authenticator voor verschillende platforms, zoals [Android](https://play.google.com/store/apps/details?id=com.authy.authy) en [IOS](https://itunes.apple.com/us/app/authy/id494168017).
We raden deze authenticator aan, omdat u uw tokens ermee op meerdere apparaten kunt synchroniseren. U kunt uw tokens ook back-uppen en later herstellen, bijvoorbeeld wanneer u een nieuwe telefoon hebt.

Google Authenticator is waarschijnlijk de bekendste authenticator. Google Authenticator is beschikbaar voor zowel [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en) als [IOS](https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8).

:::warning[**Let op:**]

Als u uw telefoon of tablet kwijtraakt, gaan alle tokens in Google Authenticator verloren en hebt u geen toegang meer tot websites waarvoor u een token had opgeslagen. U kunt uw tokens ook niet naar een nieuwe telefoon of tablet overzetten.

:::

## Tweestapsverificatie instellen {#how-to-setup-a-two-factor-authentication}

![Tweestapsverificatie inschakelen](/img/enable-two-factor-authentication.png)

Tweestapsverificatie instellen:

1. Log in bij uw ShopCtrl-account.
2. Klik rechtsboven op uw naam en kies **Settings** in het vervolgkeuzemenu.
3. Open in het menu daaronder **Two Factor Authentication** en klik op de knop **Setup Two Factor Authentication**.
4. In een nieuw pop-upvenster verschijnen een QR-code en de geheime sleutel.
5. Scan de QR-code met de authenticator-app van uw keuze.
   U kunt de geheime sleutel ook handmatig in uw authenticator-app invoeren.
6. Vul de code die de authenticator genereert in het codeveld in.
7. Klik op de knop **Verify** om de code te controleren.

Voortaan moet u bij het inloggen, na uw login en wachtwoord, ook de code invoeren om toegang te krijgen.

## Tweestapsverificatie uitschakelen {#how-to-disable-the-two-factor-authentication}

![Tweestapsverificatie uitschakelen](/img/disable-two-factor-authentication.png)

Om tweestapsverificatie uit te schakelen, hebt u een code nodig:

1. Log in bij uw ShopCtrl-account.
2. Klik rechtsboven op uw naam en kies **Settings** in het vervolgkeuzemenu.
3. Open in het menu daaronder **Two Factor Authentication** en klik op de knop **Disable**.
4. Bevestig het uitschakelen van tweestapsverificatie door de code in te voeren.
5. Klik op de knop **Verify** om de code te controleren en te bevestigen.
