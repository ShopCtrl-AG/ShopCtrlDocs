---
sidebar_position: 2
slug: /docs/messaging-interface
description: "Het berichtenvenster van ShopCtrl onder Communication > Messages: de lijst met gesprekken, berichtfilters en het deelvenster met het gesprek met de klant."
---

# De berichteninterface


Om de berichteninterface te openen, gaat u in het navigatiemenu naar **Communication > Messages**.

Het hoofdvenster voor berichten toont alle actieve sessies die aan de medewerker zijn toegewezen.

## Indeling van het berichtenvenster {#messaging-window-layout}
<img src={require("/img/messaging-window-layout.png").default} height="" width="800" />

### Lijst met ontvangen gesprekken {#list-of-conversations-received}
Het linkerdeelvenster toont de chats op basis van het geselecteerde filter en kanaal.

Met het **Message filter** kunt u verschillende weergaveopties toepassen.
<img src={require("/img/chatmessage_filter.png").default} height="" width="400" />

| Naam filter | Omschrijving |
| --- | --- |
| Mine & Open | Standaard. Alle gesprekken die aan de actieve gebruiker zijn toegewezen en nog niet zijn beantwoord. |
| Not assigned & Open | Alle gesprekken die niet zijn toegewezen en dus nog niet zijn beantwoord. |
| Mine & Closed | Alle gesloten gesprekken die aan de actieve gebruiker zijn toegewezen. |
| All | Alle gesprekken, open en gesloten, voor alle gebruikers. |



### Berichtgesprek {#message-dialog}
<img src={require("/img/messaging-conversation-dialog-pane.png").default} height="" width="400" />

Het middelste deelvenster bevat het eigenlijke berichtgesprek met de klant.
Berichten ontvangt en beantwoordt u in het chatvenster.
Inkomende berichten verschijnen in realtime in het gespreksvenster.
De supportmedewerker kan handmatig antwoorden of de wikifunctie gebruiken om snel antwoord te geven op veelgestelde vragen.
Het gesprek geeft een duidelijk overzicht van het verloop van de communicatie.

De knop **Send template message** verstuurt een sjabloonbericht dat door WhatsApp is goedgekeurd en in MessageBird is vastgelegd, om de klant om toestemming voor contact te vragen. Deze toestemming (opt-in) is nodig telkens wanneer een medewerker een gesprek met een klant begint of een gesprek voortzet nadat een sessie van 24 uur is verlopen.

### Berichtdetails {#message-details}
In het rechterdeelvenster kunt u [de berichtsessie koppelen aan een bepaalde order, klant of ticket](/User-Guide/06-Communication/Messaging/handling-incoming-messages.md#connecting-conversation-to-an-order-ticket-or-customer).
