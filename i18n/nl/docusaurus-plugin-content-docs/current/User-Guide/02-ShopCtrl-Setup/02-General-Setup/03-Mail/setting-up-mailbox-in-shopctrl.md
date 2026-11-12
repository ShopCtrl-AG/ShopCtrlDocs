---
sidebar_position: 1
slug: /docs/setting-up-mailbox-in-shopctrl
description: "Stel de servers voor inkomende en uitgaande e-mail in voor een ShopCtrl-shop met POP3, IMAP en SMTP en basisauthenticatie."
---

# Een mailbox instellen in ShopCtrl

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Om e-mails te kunnen versturen en ontvangen, stelt u in de shopinstellingen de servers voor inkomende en uitgaande e-mail in.
ShopCtrl ondersteunt momenteel zowel het POP3- als het IMAP-protocol.
Dit gedeelte gaat over het configureren van e-mailprotocollen (POP, IMAP, SMTP) met basisauthenticatie (Basic).

## De server voor inkomende e-mail instellen {#setting-up-incoming-mail-server}

![Overzicht van een inkomende POP-mailbox](/img/setup-mailbox-incoing-pop-overview.png)

1. Klik in het deelvenster met verkoopkanalen op het pictogram van de shop en selecteer **Settings** in de lijst.
2. Ga in het menu naar **Communication > E-mail > Receiving email**.
3. Klik op **Add** om een nieuwe verbinding aan te maken.

   <img src={require("/img/setup-mail-imap-basic-auth.png").default} height="" width="400" />

4. Selecteer het **Protocol** waarmee u e-mail gaat synchroniseren: **POP3** of **IMAP**.
5. Vul de **Server** van uw e-mailaccount in (respectievelijk POP3 of IMAP).
6. Vul de **Port** in waarmee verbinding wordt gemaakt met de mailserver (respectievelijk POP3 of IMAP).
7. Vink het selectievakje **Use SSL** aan.
8. Klap het deelvenster **Auth parameters** uit en selecteer de authenticatiemethode **Basic**.
9. Vul de **Login** en het **Password** van uw e-mailaccount in.
10. (Optioneel) U kunt voor deze mailbox een **Auto Reply mail** instellen.

    1. Selecteer een **Mail template** waarmee de automatische antwoordmail wordt gegenereerd.
    2. Vul een lijst met e-mailadressen in, gescheiden door komma's, die van automatische antwoorden worden **uitgesloten**.
    3. U kunt ook e-mails met een bepaald onderwerp uitsluiten. Geef hiervoor de regel op met de syntaxis van reguliere expressies in het veld **Exclude Subject Expressions**.
    4. Kies of de bezorging van automatische berichten een aantal minuten of uren wordt uitgesteld: **Auto reply delayed send enum value**.
       U kunt direct antwoorden met de optie **No Delay**, binnen een uur met **Random Minutes**, of binnen een dag met **Random Hours**.

    <img src={require("/img/setup-mail-auto-reply.png").default} height="" width="400" />

11. Schakel de verbinding bovenaan het venster in met **Enable**.
12. (Optioneel) U kunt e-mail na een ingesteld aantal dagen van de server laten verwijderen met **Delete mail from the server**. Deze optie moet eerst in de instellingen van uw e-mailaccount zijn ingeschakeld.
13. Klik op **Ok** om de instellingen op te slaan.
14. Klik op **Save** om de wijzigingen voor de shop toe te passen.

### De verbinding met de mailbox testen {#test-connection-to-the-mail-box}

Om te testen of de mailbox goed is ingesteld, klikt u op de knop **Test MailBox**. In een pop-upmelding ziet u of de verbinding is geslaagd.
Controleer bij authenticatiefouten de ingevulde gegevens. Mogelijk moet u in de instellingen van uw e-mailaccount ook toegang voor derden toestaan.

Zodra de verbinding tot stand is gebracht, vinkt u het selectievakje **Check mail** aan om e-mails in ShopCtrl te gaan ontvangen.

![Mailbox testen bij het ontvangen van e-mail](/img/receiving-email-test-maibox.png)

## De server voor uitgaande e-mail instellen {#setting-up-outcoming-mail-server}

![Uitgaande SMTP-mailbox instellen](/img/setup-mailbox-outcoming-smtp.png)

   <img src={require("/img/setup-mail-smtp-basic-auth.png").default} height="" width="400" />

1. Klik in het deelvenster met verkoopkanalen op het **pictogram van de shop** en selecteer **Settings** in de lijst.
2. Ga in het menu naar **Communication > E-mail > Sending email**.
3. Vul het **Mail address** in dat voor deze shop als afzender (**Sent From**) wordt gebruikt.
4. Kies wat er gebeurt wanneer iemand op een e-mail antwoordt:
    1. Do not warn
    2. Warn when newer unread mail is available
    3. Warn only when mails are assigned to the same order
5. Klik op **Add** om een nieuwe SMTP-verbinding aan te maken.
6. Selecteer **Protocol:** SMTP.
7. (Optioneel) Als u meerdere SMTP-servers gebruikt, stelt u de **priority** in om te bepalen welke server eerst wordt gebruikt.
8. Vul de SMTP-**Server** van uw e-mailaccount in.
9. Vul de SMTP-**Port** in waarmee verbinding wordt gemaakt met de mailserver.
10. Vink het selectievakje **Use SSL** aan.
11. Klap het deelvenster **Auth parameters** uit en selecteer de authenticatiemethode **Basic**.
12. Vul de **Login** en het **Password** van uw e-mailaccount in.
13. Klik op **Ok** om de instellingen op te slaan.
14. Klik op **Save** om de wijzigingen voor de shop toe te passen.

#### De instelling Disable Chunking {#disable-chunking-setting}

Bij grote berichten zorgt chunking ervoor dat het bericht in meerdere losse delen wordt verstuurd. Chunking is standaard ingeschakeld voor uw mailbox. Sommige oudere mailservers ondersteunen echter geen berichten in delen.
Als u in uw Out-mailbox bij het versturen naar een bepaalde ontvanger de foutmelding " Socket connection has timed out. This could happen because the SMTP server does not support CHUNKING properly." krijgt, overweeg dan het versturen van berichten in delen voor deze mailbox uit te schakelen.

### Een testmail versturen {#send-test-mail}

Om te controleren of de gegevens van de uitgaande server juist zijn ingevuld, klikt u op **Send test mail** en vult u een e-mailadres in waarnaar een testmail wordt gestuurd.

:::warning[**Mail override voor uitgaande e-mail in de acceptatieomgeving**]

Om de kans zo klein mogelijk te maken dat er automatisch een e-mail naar een echte klant wordt gestuurd, staat **Mail override** op elke acceptatieserver standaard aan. Alle ontvangers van e-mails worden automatisch vervangen door een fictief e-mailadres.

:::
