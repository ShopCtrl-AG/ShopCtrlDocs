---
sidebar_position: 2
slug: /docs/migrating-your-google-account-mailbox-to-use-app-passwords
description: "Zet in vier stappen de koppeling van een Google-mailbox met ShopCtrl om van authenticatie met een gewoon wachtwoord naar een veiliger app-wachtwoord van Google."
---

# Uw Google-mailbox overzetten naar app-wachtwoorden

In dit artikel leest u hoe u de authenticatie van uw Google-e-mailaccount in ShopCtrl omzet van een gewone gebruikersnaam en wachtwoord naar de veiligere authenticatie met een app-wachtwoord.

Google heeft [aangekondigd](https://support.google.com/accounts/answer/6010255?hl=en) dat het geen apps of apparaten van derden meer ondersteunt die u vragen om alleen met uw gebruikersnaam en wachtwoord in te loggen bij uw Google-account.

ShopCtrl raadt aan authenticatie met een app-wachtwoord te gebruiken. Dat is veiliger dan authenticatie met een gebruikerswachtwoord:

- App-wachtwoorden geven geen toegang tot het hele account en de instellingen ervan, maar alleen tot een bepaalde set diensten.
- App-wachtwoorden worden per applicatie of apparaat uitgegeven en bijgehouden
- Een app-wachtwoord kan afzonderlijk worden ingetrokken, zonder gevolgen voor andere geautoriseerde apps

Volg de vier stappen hieronder om over te stappen op een veiligere manier van inloggen bij uw mailbox, met een gegenereerd app-wachtwoord.

### Video-instructies: uw Google-mailbox overzetten naar app-wachtwoorden {#video-instructions-migrating-your-google-account-mailbox-to-use-app-passwords}

<iframe width="640" height="480" src="https://www.youtube.com/embed/CacNM2T4INE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Stap 1. Verificatie in twee stappen invoeren in uw beheerconsole {#step-1-deploy-2-step-verification-in-your-admin-console}

Deze stap is verplicht als u een Google-account van een organisatie gebruikt.

Sta gebruikers toe verificatie in twee stappen in te schakelen:
![Gebruikers toestaan verificatie in twee stappen in te schakelen](/img/allow-users-to-turn-on-2-step-verification.png)

1. Ga in uw Google-beheerconsole (op admin.google.com) naar [Security > 2 Step Verification](https://admin.google.com/ac/security/2sv).
2. Selecteer links een organisatie-eenheid of uitzonderingsgroep.
3. Sta gebruikers toe verificatie in twee stappen in te schakelen en elke verificatiemethode te gebruiken, maar maak verificatie in twee stappen nog niet verplicht:
   1. Vink **Allow users to turn on 2-Step Verification** aan.
   2. Selecteer Enforcement > Off.
4. Klik op **Save**.

We raden aan verificatie in twee stappen verplicht te stellen. Hoe u zorgt voor een soepele overgang, leest u in [Enforce 2-Step Verification (optional)](https://support.google.com/a/answer/9176657?hl=en&ref_topic=2759193#zippy=%2Callow-users-to-turn-on--step-verification%2Censure-a-smooth-transition-to-an-enforcement-policy).

## Stap 2. Verificatie in twee stappen activeren voor het e-mailaccount van uw shop {#step-2-activate-2-step-verification-for-your-shop-mail-account}

Activeer verificatie in twee stappen voor de mailbox die in ShopCtrl voor uw shop is ingesteld.

![Verificatie in twee stappen inschakelen voor een Google-account](/img/enable-2-step-verification-google-account.png)

1. Open uw [Google-account](https://myaccount.google.com/).
2. Selecteer in het navigatiepaneel **Security**.
3. Selecteer onder "Signing in to Google" de optie **2-Step Verification > Get started**.
4. Volg de stappen op het scherm.

Bevestig met een tweede stap dat u het bent.

Zie [Turn on 2-Step Verification](https://support.google.com/accounts/answer/185839) voor meer informatie.

:::warning[Let op]

Als u verificatie in twee stappen inschakelt, wordt [Less secure app access](https://support.google.com/accounts/answer/6010255?hl=en) voor uw Google-account uitgeschakeld. U moet dan een apart app-wachtwoord genereren voor elke applicatie die met het hoofdwachtwoord toegang heeft tot uw Google-account.

:::

## Stap 3. Een app-wachtwoord voor ShopCtrl aanmaken {#step-3-create-app-password-for-shopctrl}


1. Ga naar uw [Google-account](https://myaccount.google.com/).
2. Selecteer **Security**.
3. Klik onder "Signing in to Google" op **2-Step Verification**.
4. Selecteer onderaan de pagina **App Passwords**.
5. Kies onderaan **Select app**, kies **Mail** en daarna **Select device> Other (Custom name)**. Typ **ShopCtrl** en klik daarna op **Generate**.

   <img src={require("/img/create-app-password.png").default} height="" width="800" />

6. Kopieer het **App Password** en bewaar het op een veilige plek, net als een wachtwoord. Het app-wachtwoord is de code van 16 tekens in de gele balk op uw apparaat.
7. Tik op **Done**.

Zie [Create & use App Passwords](https://support.google.com/accounts/answer/185833?hl=en#) voor meer informatie.

:::warning[]

Houd er rekening mee dat app-wachtwoorden worden ingetrokken als het wachtwoord van het Google-account wordt gewijzigd.

:::

## Stap 4. Uw app-wachtwoord invullen in de mailboxinstellingen in ShopCtrl {#step-4-enter-your-app-password-in-your-mailbox-settings-in-shopctrl}

### Het wachtwoord voor het ontvangen van e-mail wijzigen: {#change-your-password-for-receiving-mails}

![Shopinstellingen voor het ontvangen van e-mail](/img/shop-settings-receiving-email.png)

1. Klik in het deelvenster met verkoopkanalen op het **pictogram van de shop** en selecteer **Settings** in de lijst.
2. Ga in het menu naar **Communication > E-mail > Receiving email**.
3. Selecteer de mailbox die u wilt wijzigen en open deze om te bewerken.

   <img src={require("/img/receiving-email-settings.png").default} height="" width="400" />

4. Wijzig het **Password** in uw nieuwe **app-wachtwoord** voor ShopCtrl.
5. Klik op **Ok** om de instellingen op te slaan.
6. Klik op **Test Mailbox** om te controleren of de autorisatie is geslaagd.
7. Klik op **Save** om de wijzigingen voor de shop toe te passen.

### Het wachtwoord voor het versturen van e-mail wijzigen: {#change-your-password-for-sending-mails}

![Shopinstellingen voor het versturen van e-mail](/img/shop-settings-sending-email.png)

1. Klik in het deelvenster met verkoopkanalen op het **pictogram van de shop** en selecteer **Settings** in de lijst.
2. Ga in het menu naar **Communication > E-mail > Sending email**.
3. Selecteer de mailbox die u wilt wijzigen en open deze om te bewerken.

   <img src={require("/img/smtp-server-details.png").default} height="" width="400" />

4. Wijzig het **Password** in uw nieuwe **app-wachtwoord** voor ShopCtrl.
5. Klik op **Ok** om de instellingen op te slaan.
6. Klik op **Send test mail** om te controleren of de autorisatie is geslaagd.
7. Klik op **Save** om de wijzigingen voor de shop toe te passen.
