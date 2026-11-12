---
sidebar_position: 3
slug: /docs/setting-up-your-google-mailbox-in-shopctrl
description: "Koppel een Google-mailbox aan ShopCtrl met authenticatie via een app-wachtwoord, in vier stappen, te beginnen met verificatie in twee stappen in de beheerconsole."
---

# Uw Google-mailbox instellen in ShopCtrl

ShopCtrl raadt aan om voor uw Google-mailbox authenticatie met een app-wachtwoord te gebruiken. Dat is veiliger dan authenticatie met een gebruikerswachtwoord. Hieronder staan de vier stappen om een Google-mailbox in uw ShopCtrl-omgeving in te stellen.

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

## Stap 4. De mailbox instellen {#step-4-set-up-mailbox}

Raadpleeg de documentatie van Google voor de gegevens van de server voor inkomende e-mail (POP3 of IMAP) en de server voor uitgaande e-mail (SMTP):

[Read Gmail messages on other email clients using POP](https://support.google.com/mail/answer/7104828)

[Check Gmail through other email platforms using IMAP](https://support.google.com/mail/answer/7126229)


Volg de stappen in dit artikel om de mailbox in uw ShopCtrl-omgeving in te stellen: [Een mailbox instellen in ShopCtrl](./setting-up-mailbox-in-shopctrl.md).
