---
sidebar_position: 3
slug: /docs/messaging-configuration
description: "Configureer berichten in ShopCtrl met de widget van MessageBird en WhatsApp Business, inclusief het instellen van de workspace en het installeren van kanalen."
---

# Berichten configureren


:::info[**Vereiste rechten**]

Om de inhoud te bekijken of de acties in dit artikel uit te voeren, moet u de juiste rechten hebben. Een medewerker moet met de rol **Shop Owner Admin** of **Shop Admin** aan de shop gekoppeld zijn.

:::

## Aan de slag {#getting-started}

ShopCtrl biedt een integratie met de widgetdienst van MessageBird en met WhatsApp Business.

Wij maken een nieuwe workspace voor u aan bij MessageBird en sturen u een uitnodigingslink. Daarna kunt u uw kanalen voor WhatsApp en de webwidget instellen.

Volg de [MessageBird Onboarding guide](https://support.messagebird.com/hc/en-us/articles/360008737818-Omnichannel-Widget-onboarding-guide-for-Inbox) om het uiterlijk van de widget in te stellen en de widgetcode op uw website te plaatsen.

Om uw WhatsApp-kanaal te installeren, hebt u nodig:
* Een aanmelding voor WhatsApp Business vanuit het dashboard van MessageBird.
* Toegang tot [Facebook Business Manager](https://business.facebook.com/)
* Een bruikbaar telefoonnummer voor WhatsApp
* Het officiële adres en de gegevens van uw bedrijf

Meer informatie vindt u op de supportpagina's van MessageBird:
[Getting Started with WhatsApp FAQ's](https://support.messagebird.com/hc/en-us/articles/360019700137)
[Getting an Official Business Account ("Green Tick") for WhatsApp](https://support.messagebird.com/hc/en-us/articles/360018698958)
[WhatsApp Business Step-by-Step Onboarding](https://support.messagebird.com/hc/en-us/articles/360000258437)


Let op de volgende beperkingen van de chatwidget en WhatsApp. Deze functies staan op onze planning voor de komende versies:
* Beide kanalen ondersteunen het uploaden van bestanden of locaties niet. Een medewerker ziet een melding dat de klant een niet-ondersteund type bericht heeft gestuurd.
* Response capture - inkomende klantgegevens, zoals een order-ID, worden niet automatisch uitgelezen en aan de bestaande klant gekoppeld. Klanten worden wel automatisch herkend aan hun telefoonnummer en aan het gesprek gekoppeld.

Om de berichtfunctie van ShopCtrl te gebruiken, past u ook de communicatie-instellingen van de betreffende shop in ShopCtrl aan. Volg de onderstaande instructies om de berichtmodule in ShopCtrl te configureren.

### Autoriseren bij MessageBird {#how-to-authorize-at-messagebird}

Om bij MessageBird te autoriseren, hebt u de volgende gegevens nodig:

* Workspace id - te vinden [hier](https://dashboard.messagebird.com/en/account/workspaces).
* Access key - te vinden [hier](https://dashboard.messagebird.com/en/developers/access). Gebruik een sleutel van het type LIVE.
* Signing key - te vinden [hier](https://dashboard.messagebird.com/en/developers/settings).


<img src={require("/img/shop-settings-messaging-messagebird.png").default} height="" width="800" />

1. Open **Configurations > Shop details page**.
2. Selecteer in het menu **Communication > Messaging > MessageBird**.
3. Vul de **Workspace id** in.
4. Gebruik de **Access key** en de **Signing key** om bij de chatprovider te autoriseren.
5. Als u geen flows wilt gebruiken, vinkt u het selectievakje **Assign employee on first message** aan.
6. (Optioneel) Als u met flows begint, vult u de **Event webhook url** in: de link naar de flow die gebeurtenissen over de beschikbaarheid van medewerkers afhandelt ("Event webhook").
7. (Optioneel) Voor het instellen van sjablonen voor het **WhatsApp**-kanaal:
    1. Vul de **WhatsApp default template name** in.
    2. Vul de **[Default template namespace](https://dashboard.messagebird.com/en/channels/whatsapp)** in.
8. Bepaal met **New conversation on message in closed conversation** of er voor dezelfde klant een nieuw gesprek wordt aangemaakt nadat het vorige is gesloten. Dit kan handig zijn om gesprekken over verschillende orders van een klant te volgen.
9. Klik op **Save** of **Save and Close** om de wijzigingen toe te passen.


### Medewerkers aan berichten koppelen {#how-to-assign-employees-to-messaging}

Zodra de technische instellingen zijn ingevuld, bepaalt u welke medewerkers chatverzoeken kunnen ontvangen en de lijst met berichtgesprekken kunnen zien in de module **Shop details page > Communication > Messaging**.
<img src={require("/img/shop-settings-messaging-employees-permissions.png").default} height="" width="800" />

Een medewerker aan Messaging koppelen:
1. Open **Configurations > Shop details page**.
2. Selecteer in het menu **Communication > Messaging > Permissions**. Het deelvenster met rechten toont alle gebruikers die een rol in de betreffende shop hebben.
3. Vink de vakjes **Chat** aan om de gewenste communicatiemethode voor de geselecteerde medewerker in te schakelen.
4. Klik op **Save** of **Save and Close** om de wijzigingen toe te passen.

Een medewerker kan in meerdere shops aan berichten worden gekoppeld. Medewerkers zonder rechten voor berichten kunnen de lijst met berichtgesprekken van de shop niet zien. Berichtgesprekken die aan de gespreksgeschiedenis van een klant, order of ticket zijn gekoppeld, kunnen wel worden bekeken door elke medewerker met de juiste rechten en een rol in de shop.

:::warning[**Let op:**]

Als u een **Shop role** van een medewerker intrekt, verwijder dan eerst het recht om **berichten** te sturen bij die medewerker.

:::

### Het aantal slots voor openstaande gesprekken wijzigen {#how-to-change-the-number-of-slots-for-open-conversations}
Elke medewerker die in een bepaalde shop aan berichten is gekoppeld, heeft een beperkt aantal slots voor gelijktijdige chatverzoeken. Het aantal vrije slots per medewerker stelt u per shop in.

<img src={require("/img/shop-settings-messaging-slots.png").default} height="" width="800" />

Het aantal gelijktijdige openstaande chatgesprekken wijzigen:
1. Open **Configurations > Shop details page**.
2. Selecteer in het menu **Communication > Messaging > General**.
3. Wijzig het aantal **Conversation slots per employee** in de gewenste waarde.
4. Klik op **Save** of **Save and Close** om de wijzigingen toe te passen.

Als het aantal slots op nul staat, worden nieuwe chatverzoeken wel ontvangen maar niet toegewezen. Zet het filter van de gesprekkenlijst op **All** om alle niet-toegewezen gesprekken te zien.

Een medewerker kan in meerdere shops aan berichten worden gekoppeld. In dat geval worden de slots tussen de shops gedeeld, naarmate er chatverzoeken binnenkomen.

De slots worden niet per shop onderscheiden. Als de medewerker dus vijf gesprekken uit één shop krijgt en het aantal slots op 5 staat, geldt de medewerker als niet beschikbaar en krijgt hij of zij geen inkomende chatverzoeken meer tot een van de toegewezen openstaande gesprekken is gesloten.

### Systeemflows configureren bij MessageBird {#system-flows-configuration-at-messagebird}

In de basisconfiguratie van berichten worden nieuwe gesprekken aan medewerkers overgedragen op het moment dat het gesprek ShopCtrl bereikt. Deze instelling wordt ingeschakeld met het selectievakje **Assign employee on first message** in de instellingen van MessageBird.

Om flows te ondersteunen, schakelt u deze automatische toewijzing uit en stelt u in MessageBird flows in die het scenario **Handover** afhandelen.

Deze basisflows van het systeem worden door ShopCtrl geleverd en tijdens de eerste configuratie naar uw MessageBird-omgeving gekopieerd.
Hieronder een korte beschrijving van deze systeemflows.

**Flow Check business hours.** U kunt de flowbesturing Date/time gebruiken om binnen en buiten de openingstijden verschillende flows te gebruiken.

<img src={require("/img/check-business-hours-flow.png").default} height="" width="400" />

Om een gesprek aan een medewerker in ShopCtrl over te dragen, roept u vanuit een andere flow de webhook van de flow Check business hours aan om de overdracht te starten. De stap Handover is een HTTP-verzoek dat naar ShopCtrl wordt gestuurd.

ShopCtrl controleert of er medewerkers beschikbaar zijn en stuurt een antwoord terug naar MessageBird, naar de flow Event webhook.
De bot wordt in beide gevallen niet gepauzeerd, zodat u andere stappen kunt toevoegen om de ervaring van uw klanten te verbeteren.

**Flow Event webhook.**

<img src={require("/img/check-employee-available-flow.png").default} height="" width="400" />



:::warning[Let op]

De Event webhook is een systeemflow van ShopCtrl die niet handmatig vanuit een andere flow kan worden gestart.
Verwijder deze flow niet, zodat de overdracht aan een medewerker correct blijft werken.

:::
