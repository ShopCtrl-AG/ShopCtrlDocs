---
sidebar_position: 2
slug: /docs/setting-up-email-protocols-to-your-microsoft-office-365-mailbox-in-shopctrl
description: "Koppel in vijf stappen, met video-instructies, een Microsoft Office 365-mailbox aan ShopCtrl via POP3, IMAP en SMTP met OAuth-autorisatie."
---

# E-mailprotocollen instellen voor uw Microsoft Office 365-mailbox in ShopCtrl

In dit artikel leest u hoe u uw Microsoft Office 365-mailbox in ShopCtrl instelt met het OAuth-autorisatieproces en de protocollen POP3/IMAP en SMTP.

Hieronder staan de vijf stappen om een Microsoft Office 365-mailbox in uw ShopCtrl-omgeving in te stellen.

### Video-instructies: uw Microsoft Office 365-mailbox instellen in ShopCtrl {#video-instructions-setting-up-your-microsoft-office-365-mailbox-in-shopctrl}

<iframe width="640" height="480" src="https://www.youtube.com/embed/kNHqudFFHoI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Stap 1. De toegangsrechten voor apps van uw Microsoft Office 365-gebruiker instellen {#step-1-configure-your-microsoft-office-365-user-apps-access-permissions}

1. Log in bij uw [Microsoft-beheerconsole](https://admin.microsoft.com).
2. Klik linksboven op het menu <span>&#9776;</span> en ga naar **Users > Active users**.
3. Selecteer de gebruiker van uw shop en klik op de **User name** om de voorkeuren te openen.
4. Ga naar het tabblad **Mail** en klik op de link **Manage email apps**.
        ![E-mailapps van een Microsoft 365-gebruiker instellen](/img/configuring-microsoft-365-user-email-apps.png)
5. Kies de apps waarmee de gebruiker toegang heeft tot de e-mail van Microsoft:
6. Kies, afhankelijk van het protocol dat u wilt gebruiken, **Pop** of **IMAP**.
7. (Optioneel) Als u de SMTP-server van Microsoft gebruikt om e-mails te versturen, vinkt u ook **Authenticated SMTP** aan.
![Rechten voor e-mailapps van een Microsoft 365-gebruiker](/img/configuring-microsoft-365-user-email-apps-permissions.png)
8. Klik op **Save changes**.

:::info[]

Dit zijn de minimale vereisten voor de e-mailintegratie van ShopCtrl. Bepaal zelf welke andere apps u voor dit account beschikbaar stelt.

:::

## Stap 2. Een API-applicatie voor ShopCtrl aanmaken en configureren {#step-2-create-and-configure-an-api-application-for-shopctrl}

1. Log als beheerder in bij de [beheerconsole van Azure Active Directory](https://aad.portal.azure.com/) van Microsoft.

:::info

U kunt het beheercentrum van Azure Active Directory ook openen vanuit de [Microsoft Admin Console](https://admin.microsoft.com) door te klikken op **<span>&#9776;</span> menu > Admin Console > Azure Active Directory**.

:::

2. Ga in het beheercentrum van Azure Active Directory naar **Enterprise applications > All applications** en klik op **New application**.
3. Klik op de pagina Browse Azure AD Gallery op **Create your own application**.
![](/img/create-your-own-application-azure-active-directory-admin-center.png)
4. Vul in het veld **What's the name of your app** een naam naar keuze in, waarmee u de toegevoegde app in de lijst met Active Directory-apps terugvindt.
5. Selecteer **Register an application to integrate with Azure AD (App you're developing)**.
6. Klik op **Create**. Het toegevoegde programma verschijnt in de werkruimte in het gedeelte Enterprise applications. Het venster **Register an application** wordt geopend.
![](/img/register-an-application-azure-active-directory-admin-center.png)
7. Selecteer in het gedeelte **Supported account types**: **Accounts in this organizational directory only (Single tenant)**.
8. Selecteer bij Redirect URI de optie **Web** en vul de URL van uw ShopCtrl-omgeving in met het pad naar de e-mailautorisatie: `https://{HOST}/Mail/Microsoft365/Auth.aspx`.
9. Klik op **Register**.

:::info[**De redirect-URI controleren en wijzigen**]

U kunt de ingevulde link altijd controleren en wijzigen via de **Properties > application registration > Authentication** van de applicatie.
Zie de documentatie van Microsoft [Redirect URI (reply URL) restrictions and limitations](https://docs.microsoft.com/en-us/azure/active-directory/develop/reply-url) voor meer informatie.
Als u een verbinding in de acceptatieomgeving test en dezelfde applicatie in de productieomgeving wilt gebruiken, voegt u voor dezelfde applicatie gewoon nog een Redirect URI naar uw productie-HOST toe.

:::

### Rechten toekennen aan de ShopCtrl-applicatie {#grant-permissions-to-the-shopctrl-application}

Om de registratie van de applicatie af te ronden, geeft u de nieuwe app API-rechten om e-mail op te halen via POP of IMAP en (optioneel) e-mail te versturen via het SMTP-protocol.

1. De minimaal vereiste API-rechten aan de nieuwe app toevoegen:
2. Ga terug naar **Enterprise applications > All applications**.
3. Klik op de app die u net hebt aangemaakt. De details van de applicatie worden geopend.
4. Selecteer in het linkermenu **Properties**.
5. Klik op **application registration** om aanvullende eigenschappen te beheren.
![](/img/application-complete-registration-azure-active-directory-admin-center.png)
6. Selecteer in het linkermenu **API permissions**.
7. Klik op de pagina API permissions op **Add a permission**.
![](/img/application-complete-registration-add-permissions.png)
8. Selecteer in het nieuwe venster **Request API permissions** op het tabblad **Microsoft APIs** de optie **Microsoft Graph API**.
![](/img/application-complete-registration-request-api-permissions.png)
9. Kies **Delegated permissions** voor Microsoft Graph.
10. Zoek in het veld **Select permissions** de volgende rechten en vink ze aan:
    - offline_access
11. Afhankelijk van het protocol dat u wilt gebruiken:
    - POP.AccessAsUser.All
    - of IMAP.AccessAsUser.All
12. Als u deze mailbox ook wilt gebruiken om e-mails te versturen:
    - SMTP.Send
13. Klik op **Add permissions**.

De toegevoegde rechten verschijnen in de lijst:
![Toegevoegde rechten bij de registratie van de applicatie](/img/application-complete-registration-added-permissions.png)

_Sluit het scherm nog niet. U moet de gegevens van de applicatie nog naar ShopCtrl kopiëren._

## Stap 4. Inloggegevens voor de synchronisatie van uw Microsoft 365-mailbox met ShopCtrl ophalen {#step-4-getting-credentials-for-your-microsoft-365-mailbox-synchronization-with-shopctrl}

De instellingen voor de inkomende en uitgaande server vindt u in de documentatie van Microsoft 365: [POP, IMAP, and SMTP settings](https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-8361e398-8af4-4e97-b147-6c6c4ac95353)

Om de API-verbinding met uw Microsoft 365-account tot stand te brengen, hebt u de volgende gegevens nodig:

- Application (client) ID
- Directory (tenant) ID
- Waarde van het client secret

De gegevens aanmaken en ophalen:

1. Log als beheerder in bij de [beheerconsole van Azure Active Directory](https://aad.portal.azure.com/) van Microsoft.
2. Ga in het beheercentrum van Azure Active Directory naar **Enterprise applications > All applications**.
3. Klik op de app die u voor de integratie met ShopCtrl hebt aangemaakt. De details van de applicatie worden geopend.
4. Selecteer in het linkermenu **Properties**.
5. Beheer aanvullende eigenschappen door op **application registration** te klikken: "If this application resides in your tenant, you can manage additional properties on the application registration."
6. Selecteer in het linkermenu **Overview**.
7. Kopieer de **Application (client) ID** en bewaar deze op een veilige plek. Dit is uw **Client ID**.
8. Kopieer de **Directory (tenant) ID** en bewaar deze op een veilige plek. Dit is uw **Tenant ID**.
![](/img/application-complete-registration-getting-client-id-tenant-id.png)
9. Selecteer in het linkermenu **Certificates & secrets**.
10. Klik op **New client secret**.
11. Vul in het deelvenster **Add a client secret pane** een **Description** voor het secret in.
![](/img/application-complete-registration-generate-client-secret.png)
12. Selecteer de geldigheidsduur (**Expires**) van het secret. Overweeg een langere periode in te stellen.

    :::warning[**BELANGRIJK**]

    Zodra het client secret verlopen is, **stopt** de e-mailsynchronisatie in ShopCtrl. Om de synchronisatie weer te starten, vraagt u een nieuw client secret aan en vult u dit in bij de betreffende mailboxinstellingen in ShopCtrl. U hoeft geen nieuwe applicatie aan te maken en te registreren: alleen het client secret van de bestaande applicatie moet worden vervangen door een geldig exemplaar.

    :::

13. Klik op **Add** om het client secret te genereren.
14. Kopieer het veld **Value** van het client secret en bewaar het, net als een wachtwoord.
![](/img/application-complete-registration-getting-client-secret-value.png)
:::warning[**Let op**]

De waarde van een client secret is alleen direct na het aanmaken zichtbaar. Sla het secret dus op voordat u de pagina verlaat.

:::

## Stap 5. De synchronisatie met de Microsoft Office 365-mailbox instellen in ShopCtrl {#step-5-setting-up-microsoft-office-365-mailbox-synchronization-in-shopctrl}

De volgende stap is het invullen van de gegevens van de aangemaakte applicatie in ShopCtrl en het autoriseren ervan in Microsoft 365.
Raadpleeg de [supportpagina's van Microsoft](https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-8361e398-8af4-4e97-b147-6c6c4ac95353) voor de actuele serverinstellingen.

### De server voor uitgaande e-mail instellen {#setting-up-the-outcoming-mail-server}

![Versturen van e-mail via SMTP voor Microsoft 365](/img/sending-email-smtp-microsoft-365.png)

1. Log in bij uw ShopCtrl-omgeving als gebruiker met de rol Shop Owner admin.
2. Klik in het deelvenster met verkoopkanalen op het pictogram van de shop en selecteer **Settings** in de lijst.
3. Ga in het menu naar **Communication > E-mail > Sending email**.
4. Vul het **Mail address** in dat u instelt.
5. Klik op **Add** om een nieuwe verbinding aan te maken.

    <img src={require("/img/setup-sending-email-smtp-not-authorized-microsoft-365.png").default} height="" width="400" />

6. Vul de **SMTP**-server van uw Microsoft 365-e-mailaccount in.
7. Vul de SMTP-**Port** in waarmee verbinding wordt gemaakt met de mailserver.
8. Vink het selectievakje **Use SSL** aan.
9. Klap het deelvenster **Auth Parameters** uit en selecteer **Microsoft 365** als **Auth method**.
10. Vul de **Tenant ID** van de aangemaakte applicatie in.
11. Vul de **Client ID** in.
12. Vul het **Client Secret** in. Het veld **Status** verandert in **Not authorized**.
13. Klik op **Save and Authorize**. U wordt doorgestuurd naar de bevestiging van de autorisatie. Zorg dat er op de andere tabbladen geen niet-opgeslagen wijzigingen zijn. Als u doorgaat, gaan wijzigingen op andere tabbladen verloren.
14. Log in bij uw **Microsoft 365**-account met de gebruiker die u instelt. Controleer de rechten en bevestig dat u toegang verleent.
    :::warning[**Belangrijk**]

    Om de integratie met Microsoft in te stellen, moet u zich **aanmelden met het gebruikersaccount** dat bij de applicatie hoort, en niet als beheerder van Active Directory.
    
    :::
15. Na de bevestiging verschijnt het venster **Success**, waarin staat dat de toegang voor het account is verleend. Als een van de autorisatieparameters onjuist was, verschijnt er een venster met de betreffende melding. Herstel de fouten en doorloop dezelfde stappen opnieuw.
16. Klik op de knop **Back to Shop Settings**. U wordt teruggestuurd naar uw ShopCtrl-omgeving.
17. Op de pagina met shopinstellingen verandert de **Status** van uw verbinding in **Authorized**.
18. Schakel de verbinding bovenaan het venster in met **Enable**.
19. Klik op **Ok** om de instellingen te sluiten.

#### Een testmail versturen {#send-test-mail}

Om te controleren of de gegevens van de uitgaande server juist zijn ingevuld, klikt u op **Send test mail** en vult u een e-mailadres in waarnaar een testmail wordt gestuurd.

### De server voor inkomende e-mail instellen {#setting-up-the-incoming-mail-server}

 :::warning[**Belangrijk**]

   Als uw mailbox al in ShopCtrl is ingesteld, opent en wijzigt u de **bestaande verbinding** in plaats van een nieuwe aan te maken.

   :::

![Ontvangen van e-mail via IMAP voor Microsoft 365](/img/receiving-email-imap-microsoft-365.png)

1. Klik in het deelvenster met verkoopkanalen op het pictogram van de shop en selecteer **Settings** in de lijst.
2. Ga in het menu naar **Communication > E-mail > Receiving email**.
3. Klik op **Add** om een nieuwe verbinding aan te maken.
    <img src={require("/img/receiving-email-imap-connection-office365.png").default} height="" width="400" />

4. Selecteer het **Protocol** waarmee u e-mail gaat synchroniseren: **POP3** of **IMAP**.
5. Vul de **Server** van uw e-mailaccount in (respectievelijk POP3 of IMAP).
6. Vul de **Port** in waarmee verbinding wordt gemaakt met de mailserver (respectievelijk POP3 of IMAP).
7. Vink het selectievakje **Use SSL** aan.
8. Klap het deelvenster **Auth Parameters** uit en selecteer **Microsoft 365** als **Auth method**.
    <img src={require("/img/receiving-email-imap-not-authorized-office365.png").default} height="" width="400" />
9. Vul de **Tenant ID** van de aangemaakte applicatie in.
10. Vul de **Client ID** in.
11. Vul het **Client Secret** in. Het veld **Status** verandert in **Not authorized**.
12. Klik op **Save and Authorize**. U wordt doorgestuurd naar de bevestiging van de autorisatie. Zorg dat er op de andere tabbladen geen niet-opgeslagen wijzigingen zijn. Als u doorgaat, gaan wijzigingen op andere tabbladen verloren.
13. Log in bij uw **Microsoft 365**-account met de gebruiker die u instelt. Controleer de rechten en bevestig dat u toegang verleent.

    :::warning[**Belangrijk**]

    Om de integratie met Microsoft in te stellen, moet u zich **aanmelden met het gebruikersaccount** dat bij de applicatie hoort, en niet als beheerder van Active Directory.

    :::

14. Na de bevestiging verschijnt het venster **Success**, waarin staat dat de toegang voor het account is verleend. Als een van de autorisatieparameters onjuist was, verschijnt er een venster met de betreffende melding. Herstel de fouten en doorloop dezelfde stappen opnieuw.
15. Klik op de knop **Back to Shop Settings**. U wordt teruggestuurd naar uw ShopCtrl-omgeving.
16. Op de pagina met shopinstellingen verandert de **Status** van uw verbinding in **Authorized**.
        <img src={require("/img/receiving-email-imap-authorized-office-365.png").default} height="" width="400" />
17. Schakel de verbinding bovenaan het venster in met **Enable**.
18. Klik op **Ok** om de instellingen te sluiten.

#### De verbinding met de mailbox testen {#test-connection-to-the-mailbox}

Om te testen of de mailbox goed is ingesteld, klikt u op de knop **Test MailBox**. In een pop-upmelding ziet u of de verbinding is geslaagd.
Zodra de verbinding tot stand is gebracht, vinkt u het selectievakje **Check mail** aan om e-mails in ShopCtrl te gaan ontvangen.
