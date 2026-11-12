---
sidebar_position: 1
slug: /docs/setting-up-graph-api-connection-for-your-microsoft-office-365-mailbox-in-shopctrl
description: "Koppel in vier stappen een Microsoft Office 365-mailbox aan ShopCtrl via de Microsoft Graph API en OAuth. Gedeelde mailboxen worden niet ondersteund."
---

# Een Graph API-verbinding instellen voor uw Microsoft Office 365-mailbox in ShopCtrl

In dit artikel leest u hoe u uw Microsoft Office 365-mailbox in ShopCtrl instelt met het OAuth-autorisatieproces via de Microsoft Graph API.

Hieronder staan de vier stappen om een Microsoft Office 365-mailbox in uw ShopCtrl-omgeving in te stellen.

:::warning[**Belangrijk:**]

Gedeelde mailboxen worden momenteel niet ondersteund voor de integratie met de Microsoft Graph API. Alleen gebruikersmailboxen kunnen via de API worden gebruikt voor e-mailfuncties en -gegevens.

:::

## Stap 1. Een API-applicatie voor ShopCtrl aanmaken en configureren {#step-1-create-and-configure-an-api-application-for-shopctrl}

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

U kunt de ingestelde link altijd controleren en wijzigen via de **Properties > application registration > Authentication** van de applicatie.
Zie de documentatie van Microsoft [Redirect URI (reply URL) restrictions and limitations](https://docs.microsoft.com/en-us/azure/active-directory/develop/reply-url) voor meer informatie.
Als u een verbinding in de acceptatieomgeving test en dezelfde applicatie in de productieomgeving wilt gebruiken, voegt u voor dezelfde applicatie gewoon nog een Redirect URI naar uw productie-HOST toe.

:::

## Stap 2. Rechten toekennen aan de ShopCtrl-applicatie {#step-2-grant-permissions-to-the-shopctrl-application}

Om de registratie van de applicatie af te ronden, geeft u de nieuwe app API-rechten om e-mail op te halen en te versturen.

De minimaal vereiste API-rechten aan de nieuwe app toevoegen:

1. Ga terug naar **Enterprise applications > All applications**.
2. Klik op de app die u net hebt aangemaakt. De details van de applicatie worden geopend.
3. Selecteer in het linkermenu **Properties**.
4. Klik op **application registration** om aanvullende eigenschappen te beheren.
![](/img/application-complete-registration-azure-active-directory-admin-center.png)
5. Selecteer in het linkermenu **API permissions**.
6. Klik op de pagina API permissions op **Add a permission**.
![](/img/application-complete-registration-add-permissions.png)
7. Selecteer in het nieuwe venster **Request API permissions** op het tabblad **Microsoft APIs** de optie **Microsoft Graph API**.
![](/img/application-registration-request-graph-api-permissions.png)
8. Kies **Delegated permissions** voor Microsoft Graph.
9. Zoek in het veld **Select permissions** de volgende rechten en vink ze aan:
   - User.Read
   - offline_access
   - Mail.Read
10. Als u deze mailbox ook wilt gebruiken om e-mails te versturen:
    - Mail.Send
11. Klik op **Add permissions**.

De toegevoegde rechten verschijnen in de lijst:
![Toegevoegde Graph API-rechten bij de registratie van de applicatie](/img/application-registration-added-graph-api-permissions.png)

_Sluit het scherm nog niet. U moet de gegevens van de applicatie nog naar ShopCtrl kopiëren._

## Stap 3. Inloggegevens voor de synchronisatie van uw Microsoft 365-mailbox met ShopCtrl ophalen {#step-3-getting-credentials-for-your-microsoft-365-mailbox-synchronization-with-shopctrl}

Om de Graph API-verbinding met uw Microsoft 365-account tot stand te brengen, hebt u de volgende gegevens nodig:

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

:::warning[**Belangrijk**]

Zodra het client secret verlopen is, **stopt** de e-mailsynchronisatie in ShopCtrl. Om de synchronisatie weer te starten, vraagt u een nieuw client secret aan en vult u dit in bij de betreffende mailboxinstellingen in ShopCtrl. U hoeft geen nieuwe applicatie aan te maken en te registreren: alleen het client secret van de bestaande applicatie moet worden vervangen door een geldig exemplaar.

:::

13. Klik op **Add** om het client secret te genereren.
14. Kopieer het veld **Value** van het client secret en bewaar het, net als een wachtwoord.
![](/img/application-complete-registration-getting-client-secret-value.png)

:::warning[**Let op**]

De waarde van een client secret is alleen direct na het aanmaken zichtbaar. Sla het secret dus op voordat u de pagina verlaat.

:::

## Stap 4. De synchronisatie met de Microsoft Office 365-mailbox instellen in ShopCtrl {#step-4-setting-up-microsoft-office-365-mailbox-synchronization-in-shopctrl}

De volgende stap is het invullen van de gegevens van de aangemaakte applicatie in ShopCtrl en het autoriseren ervan in Microsoft 365.

### Het ophalen van e-mail instellen {#setting-up-retrieval-of-the-mail}

![Ontvangen van e-mail via IMAP voor Microsoft 365](/img/receiving-email-imap-microsoft-365.png)

1. Klik in het deelvenster met verkoopkanalen op het pictogram van de shop en selecteer **Settings** in de lijst.
2. Ga in het menu naar **Communication > E-mail > Receiving email**.
3. Klik op **Add** om een nieuwe verbinding aan te maken.
   :::danger[Belangrijk]

   Als uw mailbox al in ShopCtrl is ingesteld, opent en wijzigt u de **bestaande verbinding** in plaats van een nieuwe aan te maken.

   :::

4. Selecteer het **Protocol**, in ons geval **Microsoft Graph API**.
   ![](/img/receiving-email-graph-api-microsoft-365.png)
5. Klap het deelvenster **Auth Parameters** uit en selecteer **Microsoft 365** als **Auth method**.
6. Vul in het deelvenster **Auth Parameters** de **Tenant ID** van de aangemaakte applicatie in.
7. Vul de **Client ID** in.
8. Vul het **Client Secret** in. Het veld **Status** verandert in **Not authorized**.
9. Klik op **Save and Authorize**. U wordt doorgestuurd naar de bevestiging van de autorisatie. Zorg dat er op de andere tabbladen geen niet-opgeslagen wijzigingen zijn. Als u doorgaat, gaan wijzigingen op andere tabbladen verloren.
10. Log in bij uw **Microsoft 365**-account met de gebruiker die u instelt. Controleer de rechten en bevestig dat u toegang verleent.

    :::danger[**Belangrijk**]

    Om de integratie met de Microsoft Graph API in te stellen, moet u zich **aanmelden met het gebruikersaccount** dat bij de applicatie hoort, en niet als beheerder van Active Directory.
Gebruik het e-mailadres dat u voor de integratie wilt instellen. Als uw organisatie eenmalige aanmelding (Single Sign On) gebruikt, gebruik dan het adres van de shop en niet uw persoonlijke account.
    :::

11. Na de bevestiging verschijnt het venster **Success**, waarin staat dat de toegang voor het account is verleend. Als een van de autorisatieparameters onjuist was, verschijnt er een venster met de betreffende melding. Herstel de fouten en doorloop dezelfde stappen opnieuw.
12. Klik op de knop **Back to Shop Settings**. U wordt teruggestuurd naar uw ShopCtrl-omgeving.
13. Op de pagina met shopinstellingen verandert de **Status** van uw verbinding in **Authorized**.
14. Schakel de verbinding bovenaan het venster in met **Enable**.
15. Klik op **Ok** om de instellingen te sluiten.


#### De verbinding met de mailbox testen {#test-connection-to-the-mailbox}

Om te testen of de mailbox goed is ingesteld, klikt u op de knop **Test MailBox**. In een pop-upmelding ziet u of de verbinding is geslaagd.
Zodra de verbinding tot stand is gebracht, vinkt u het selectievakje **Check mail** aan om e-mails in ShopCtrl te gaan ontvangen.

### Het versturen van e-mail instellen {#setting-up-sending-mail}

![Versturen van e-mail via SMTP voor Microsoft 365](/img/sending-email-smtp-microsoft-365.png)

1. Klik in het deelvenster met verkoopkanalen op het pictogram van de shop en selecteer **Settings** in de lijst.
2. Ga in het menu naar **Communication > E-mail > Sending email**.
3. Klik op **Add** om een nieuwe verbinding aan te maken.

   ![](/img/sending-email-graph-api-microsoft-365.png)

4. Selecteer het **Protocol**, in ons geval **Microsoft Graph API**.
5. Klap het deelvenster **Auth Parameters** uit en selecteer **Microsoft 365** als **Auth method**.
6. Vul de **Tenant ID** van de aangemaakte applicatie in.
7. Vul de **Client ID** in.
8. Vul het **Client Secret** in. Het veld **Status** verandert in **Not authorized**.
9. Klik op **Save and Authorize**. U wordt doorgestuurd naar de bevestiging van de autorisatie. Zorg dat er op de andere tabbladen geen niet-opgeslagen wijzigingen zijn. Als u doorgaat, gaan wijzigingen op andere tabbladen verloren.
10. Log in bij uw **Microsoft 365**-account met de gebruiker die u instelt. Controleer de rechten en bevestig dat u toegang verleent.

:::warning[**Belangrijk**]

Om de integratie met de Microsoft Graph API in te stellen, moet u zich **aanmelden met het gebruikersaccount** dat bij de applicatie hoort, en niet als beheerder van Active Directory.

:::

12. Na de bevestiging verschijnt het venster **Success**, waarin staat dat de toegang voor het account is verleend. Als een van de autorisatieparameters onjuist was, verschijnt er een venster met de betreffende melding. Herstel de fouten en doorloop dezelfde stappen opnieuw.
13. Klik op de knop **Back to Shop Settings**. U wordt teruggestuurd naar uw ShopCtrl-omgeving.
14. Op de pagina met shopinstellingen verandert de **Status** van uw verbinding in **Authorized**.
15. Schakel de verbinding bovenaan het venster in met **Enable**.
16. Klik op **Ok** om de instellingen te sluiten.

#### Een testmail versturen {#send-test-mail}

Om te controleren of de gegevens van de uitgaande server juist zijn ingevuld, klikt u op **Send test mail** en vult u een e-mailadres in waarnaar een testmail wordt gestuurd.
