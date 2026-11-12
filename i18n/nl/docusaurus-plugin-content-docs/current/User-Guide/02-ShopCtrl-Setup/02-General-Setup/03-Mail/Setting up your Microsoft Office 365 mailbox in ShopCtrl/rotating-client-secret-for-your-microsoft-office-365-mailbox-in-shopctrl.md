---
sidebar_position: 3
slug: /docs/rotating-client-secret-for-your-microsoft-office-365-mailbox-in-shopctrl
description: "Vraag een nieuw client secret aan voor Microsoft 365 voordat het oude verloopt, en werk het bij in ShopCtrl, zodat de e-mailsynchronisatie zonder onderbreking blijft werken."
---


# Het client secret van uw Microsoft Office 365-mailbox vervangen in ShopCtrl

Nadat u de synchronisatie met uw Microsoft 365-mailbox hebt ingesteld, raden we aan de vervaldatum van uw client secret te noteren. Enkele dagen voor die datum moet u een nieuw client secret aanvragen en de ShopCtrl-applicatie in Microsoft 365 opnieuw autoriseren.

Zodra het client secret verlopen is, stopt de e-mailsynchronisatie in ShopCtrl. Om de synchronisatie weer te starten, vraagt u een nieuw client secret aan en vult u dit in bij de betreffende mailboxinstellingen in ShopCtrl. U hoeft geen nieuwe applicatie aan te maken en te registreren: alleen het client secret van de bestaande applicatie moet worden vervangen door een geldig exemplaar.

Dit geldt voor:
- [Verbindingen via de Graph API](setting-up-graph-api-connection-for-your-microsoft-office-365-mailbox-in-shopctrl.md)
- [Verbindingen via e-mailprotocollen](setting-up-email-protocols-to-your-microsoft-office-365-mailbox-in-shopctrl.md)
- Zowel het versturen als het ontvangen van e-mail


## Stap 1. Een nieuw client secret aanmaken in Microsoft 365 {#step-1-issue-a-new-client-secret-in-microsoft-365}

1. Log in bij uw [Microsoft Entra-beheercentrum](https://entra.microsoft.com/).
2. Ga naar **Applications > App registrations**.
3. Zoek de registratie van uw ShopCtrl-integratie.

    <img src={require("/img/microsoft-admin-center-expired-client-secret.png").default} height="" width="400" />
4. Open deze om te bewerken.
5. Ga naar het gedeelte **Certificated & secrets**.
    <img src={require("/img/microsoft-admin-center-expired-client-secret-change.png").default} height="" width="400" />
5. Klik op **New client secret**.
6. In het deelvenster **Add a client secret pane**:
    - vul een **Description** voor het secret in.
    - Selecteer de **expiration period** (overweeg een langere geldigheidsduur)
    <img src={require("/img/microsoft-admin-center-create-new-client-secret-for-existing-app.png").default} height="" width="400" />
8. Klik op **Add** om het client secret te genereren.
9. Kopieer het veld **Value** en bewaar het veilig, net als een wachtwoord.
    <img src={require("/img/application-complete-registration-getting-client-secret-value.png").default} height="" width="400" />

:::warning[**Belangrijk**]

De waarde van een client secret is alleen direct na het aanmaken zichtbaar. Sla het secret dus op voordat u de pagina verlaat.

:::

## Stap 2. Uw verbinding met de Microsoft 365-mailbox opnieuw autoriseren in ShopCtrl {#step-2-reauthorize-your-connection-to-microsoft-365-mailbox-in-shopctrl}

Voer de autorisatie bij voorkeur uit in een privévenster van uw browser, om conflicten tussen accounts te voorkomen.

### Voor het ontvangen van e-mail: {#for-receiving-mail}

1. Open ShopCtrl in een **privévenster**.
2. Log in als gebruiker met **Shop owner admin-rechten**.
3. Ga naar:
   - Deelvenster met verkoopkanalen → pictogram van de shop → **Settings**
   - **Communication > E-mail > Receiving email**
3. Zoek de verbinding van Microsoft 365 met ShopCtrl en klik op **Edit**.
    <img src={require("/img/edit-receiving-mail-graph-api-microsoft-365-mailbox.png").default} height="" width="400" />
5. Klap in het nieuwe venster met mailboxdetails het deelvenster **Auth Parameters** uit en vul het nieuwe **Client Secret** in.
    <img src={require("/img/edit-receiving-mail-client-secret-graph-api-microsoft-365-mailbox.png").default} height="" width="400" />
9. Klik op **Save and Authorize**.
10. Bevestig de autorisatie (let op: niet-opgeslagen wijzigingen op andere tabbladen gaan verloren).
    <img src={require("/img/authorize-mail-graph-api-microsoft-365-mailbox-confirmation-window.png").default} height="" width="400" />
11. Log in bij Microsoft 365 met de **inloggegevens van het e-mailadres van de shop** (niet met uw persoonlijke account).

    :::danger[**Belangrijk**]

    Gebruik het **e-mailadres** dat u voor de integratie wilt instellen. Als uw organisatie eenmalige aanmelding (SSO) gebruikt, gebruik dan het e-mailadres van de shop en niet uw persoonlijke account.

    :::

12. Controleer de rechten en keur ze goed.
13. Na de bevestiging verschijnt het venster **Success**, waarin staat dat de toegang voor het account is verleend. Als een van de autorisatieparameters onjuist was, verschijnt er een venster met de betreffende melding. Herstel de fouten en doorloop dezelfde stappen opnieuw.
14. Klik na een geslaagde autorisatie op **Back to Shop Settings**.
15. Test de verbinding door de mailbox te selecteren en op **Test MailBox** te klikken. In een pop-upmelding ziet u of de verbinding is geslaagd.

### Voor het versturen van e-mail: {#for-sending-mail}
Herhaal dezelfde stappen bij:
**Shop Settings > Communication > E-mail > Sending email**

Gebruik hetzelfde client secret. Verstuur een testmail om te controleren of alles werkt.

## Conclusie {#conclusion}

U hebt het client secret van Microsoft 365 vervangen en de e-mailsynchronisatie van ShopCtrl opnieuw geautoriseerd. Zo blijft uw e-mail zonder onderbreking werken:

1. Noteer de vervaldatum van uw nieuwe client secret.
2. Stel een herinnering in voor minstens 7 dagen voor de vervaldatum.
3. Herhaal deze procedure voordat het secret verloopt.
