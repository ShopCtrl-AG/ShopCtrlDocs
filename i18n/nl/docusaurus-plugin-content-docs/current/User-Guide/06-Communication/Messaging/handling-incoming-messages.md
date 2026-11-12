---
sidebar_position: 4
slug: /docs/handling-incoming-messages
description: "Handel inkomende chats af in ShopCtrl: stel uw beschikbaarheid in, ontvang meldingen over nieuwe berichten en antwoord vanuit de berichteninterface."
---

# Inkomende berichten afhandelen


Om inkomende berichten te kunnen ontvangen, moet de medewerker zich op **Available** zetten.
Als de medewerker na het inloggen 5 minuten of langer niet beschikbaar blijft, toont ShopCtrl een pop-upvenster om de beschikbaarheid bij te werken.

<img src={require("/img/messages-main-screen-availability.png").default} height="" width="800" />

:::warning[**Let op**:]

Om onverwacht inkomend berichtverkeer te voorkomen, staat een medewerker standaard altijd op **Unavailable**.

:::

Als u uw werkplek verlaat, zet uw status dan handmatig op **unavailable**, zodat er geen nieuwe gespreksverzoeken aan u worden toegewezen terwijl u weg bent.

## Melding bij een nieuw bericht {#new-message-notification}

Een medewerker krijgt een pop-upmelding wanneer er een nieuwe berichtsessie wordt aangevraagd. Het vervolgkeuzemenu voor beschikbaarheid toont ook het aantal nieuwe berichten.

<img src={require("/img/messaging-notification.png").default} height="" width="800" />

Om de [berichteninterface](./messaging-interface.md) te openen, klikt u op de melding of op het vervolgkeuzemenu voor berichten.

## Een nieuw bericht beantwoorden {#replying-to-a-new-message}
Inkomende berichten verschijnen in realtime in het gespreksvenster.
De supportmedewerker kan handmatig antwoorden of de wikifunctie gebruiken om snel antwoord te geven op veelgestelde vragen.

## Gesprekken sluiten {#closing-conversations}
Tijdens of na het afronden van een berichtgesprek wilt u de sessie misschien archiveren.
Om de sessie te archiveren, wijzigt u de status van het gesprek in gesloten.
Zodra u de status **Closed** selecteert, verdwijnt het bericht direct uit de inbox.

Als u een gesloten sessie wilt heropenen, gebruikt u in het linkerdeelvenster het berichtfilter Mine & Closed om alle afgeronde sessies te tonen. U kunt de status dan weer wijzigen in **Open**.

## Notities aan gesprekken toevoegen {#adding-notes-to-conversations}
U kunt een eenvoudige interne notitie aan het gesprek toevoegen, en ook een naam en e-mailadres als er nog geen bestaande relatie is. Bijvoorbeeld bij een bezoeker die alleen informatie wil en nog niets heeft gekocht.

## Een gesprek koppelen aan een order, ticket of klant {#connecting-conversation-to-an-order-ticket-or-customer}

In ShopCtrl kunt u een gesprek aan meerdere records koppelen. De toegewezen medewerker kan een chatsessie aan een order, ticket of klant koppelen.

Als u een gesprek bijvoorbeeld aan een bepaalde order koppelt, wordt het automatisch ook aan de gespreksgeschiedenis van de klant gekoppeld.

U kunt ook een ticket aan het gesprek koppelen. Afhankelijk van de bestaande koppelingen tussen ticket, order en klant worden ook de bijbehorende records bijgewerkt.

:::warning[**Let op**]

Als u een ticket aan het berichtgesprek koppelt, wordt een gesloten ticket niet automatisch heropend. Klik op de knop view en wijzig de status handmatig.

:::

## Een categorie aan een gesprek toewijzen {#assigning-a-category-to-conversation}
Klik op het vervolgkeuzemenu in het veld **Category** om een passende categorie voor het gesprek te selecteren en op te slaan.

## Een gesprek overdragen {#handing-over-a-conversation}
Als de toegewezen medewerker een bepaald verzoek niet kan afhandelen, kan hij of zij het gesprek aan een andere beschikbare medewerker overdragen door op de knop **Hand over** te klikken.

Het volgende venster verschijnt:

<img src={require("/img/messaging-hand-over.png").default} height="250" width="" />

Selecteer de juiste collega en klik op het symbool voor overdragen.
Op dezelfde manier kunt u ook een niet-toegewezen gesprek aan uzelf overdragen.
