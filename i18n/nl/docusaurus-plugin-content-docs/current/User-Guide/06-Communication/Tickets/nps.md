---
sidebar_position: 8
slug: /docs/nps
description: "Stel in ShopCtrl per shop automatische feedbackverzoeken voor de Net Promoter Score (NPS) in. Hiervoor is de rol Shop Admin vereist."
---
# Net Promoter Score (NPS)-feedback voor uw shops configureren

In deze handleiding leest u als shopbeheerder stap voor stap hoe u het automatische feedbacksysteem voor de Net Promoter Score (NPS) configureert. Zodra het systeem is ingeschakeld, stuurt het uw klanten na het oplossen van hun supporttickets een verzoek om feedback. Zo meet en verbetert u de klanttevredenheid.



## Configuratiehandleiding {#configuration-guide}

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

<img src={require("/img/nps-configuration.png").default} height="" width="800" />


Volg deze stappen om het NPS-systeem voor een shop in te schakelen en in te stellen:
1. Log in bij uw ShopCtrl-account als gebruiker met de rol **shop admin**.
1. Ga naar **Configuration > Shops**.
1. Selecteer de gewenste shop en klik op **Edit**.
1. Ga in het menu naar het gedeelte **NPS Configuration**.
1. Schakel de instelling **NPS Invitations** in.
1. **Stel de wachttijd voor feedback in:** vul in het veld **"Send feedback request (days)"** in hoeveel dagen na het sluiten van een ticket de feedbackmail wordt verstuurd. Er wordt geteld vanaf de datum waarop het ticket is gesloten.
1. Selecteer een **Email Template**: kies in de vervolgkeuzelijst een e-mailsjabloon van het type general voor de uitnodigingsmails.
1. Stel de redirect-URL's in (verplicht):
    1. **Success Redirect URL**: vul de volledige URL in van de bedankpagina in uw eigen omgeving, waar klanten terechtkomen nadat ze een beoordeling hebben ingediend.
    1. **Error Redirect URL**: vul de volledige URL in van de foutpagina in uw eigen omgeving, waar klanten terechtkomen als het indienen mislukt of als de beoordeling al eerder is ontvangen.
1. Klik op **Save** of **Save & Close** om alle wijzigingen toe te passen. Het systeem begint dan automatisch met het verwerken van tickets die in aanmerking komen.

### **Merge fields voor beoordelingslinks** {#merge-fields-for-rating-links}

Om werkende beoordelingsknoppen in uw e-mailsjabloon te maken, gebruikt u de volgende merge fields voor de scores 1-10:

| Score | Merge field |
|---|---|
| Score 1 | $$Ticket.RateUrl01$$ |
| Score 2 |	$$Ticket.RateUrl02$$ |
| Score 3 |	$$Ticket.RateUrl03$$ |
| Score 4 |	$$Ticket.RateUrl04$$ |
| Score 5 |	$$Ticket.RateUrl05$$ |
| Score 6 |	$$Ticket.RateUrl06$$ |
| Score 7 |	$$Ticket.RateUrl07$$ |
| Score 8 |	$$Ticket.RateUrl08$$ |
| Score 9 |	$$Ticket.RateUrl09$$ |
| Score 10 |	$$Ticket.RateUrl10$$ |

Bij het versturen van de e-mail worden deze velden automatisch vervangen door unieke API-links voor elke beoordelingsoptie.


### Fouten bij het indienen van beoordelingen afhandelen {#handling-rating-submission-errors}

Als het indienen van een NPS-beoordeling mislukt, wordt de klant doorgestuurd naar de ingestelde Error Redirect URL. De redirect-URL bevat queryparameters waarmee u de fout op uw pagina kunt herkennen en goed kunt afhandelen.

**URL-parameters die bij een fout worden meegestuurd**

| Parameter | Omschrijving | Voorbeeldwaarde |
|---|---|---|
| TicketId	| Het ID van het ticket dat wordt beoordeeld.	| TicketId=5436 |
| Token	| Het beveiligingstoken van het beoordelingsverzoek.	| Token=-53439989 |
| Rating	| De score (1-10) die de klant probeerde in te dienen.	| Rating=10 |
| Message	| Een URL-gecodeerde foutmelding met de reden van de fout.	| Message=The+ticket+is+already+rated |

**Veelvoorkomende foutmeldingen en oorzaken**
| Foutmelding (parameter Message) | Waarschijnlijke oorzaak | Voorgestelde tekst voor de klant |
|---|---|---|
| The token is invalid | De beoordelingslink is verlopen, onjuist of al gebruikt. | "Deze feedbacklink is verlopen of ongeldig." |
| The ticket is already rated | De klant heeft al feedback gegeven voor dit supportticket. | "Bedankt! We hebben uw feedback voor dit verzoek al ontvangen." |
| The rating value is invalid | Een technische fout: de parameter rating lag buiten het geldige bereik van 1-10. | "Er is een technisch probleem opgetreden. Probeer het opnieuw." |

##  Hoe het automatische systeem werkt {#how-the-automated-system-works}

Na de configuratie automatiseert een geplande taak op de achtergrond, die elk uur wordt uitgevoerd, het hele proces:

**Tickets doorzoeken:** het systeem zoekt naar tickets die meer dan [X] dagen geleden zijn gesloten (volgens uw instelling), maar controleert alleen tickets die in de afgelopen 7 dagen zijn gesloten.

**Voorwaarden controleren:** voor elk ticket wordt gecontroleerd of:
- Er een klant met een geldig e-mailadres aan het ticket is gekoppeld.
- Er tijdens het supportgesprek minstens één e-mailantwoord naar de klant is verstuurd.

**Uitnodiging versturen:** er wordt een NPS-uitnodiging per e-mail naar de klant gestuurd met het sjabloon dat u hebt gekozen.

**Gegevens verzamelen:** de beoordelingen van klanten (1-10) worden op ticketniveau vastgelegd. De e-mail wordt aan het ticket gekoppeld, zodat u deze kunt bekijken.

**Rapportage:** NPS-rapporten worden gegenereerd op basis van de verzamelde beoordelingen per ticket en zijn beschikbaar via de rapportagemodule van ShopCtrl. Zie de beschrijving van het [NPS overview report](/User-Guide/03-Basic-Functions/reporting.md#nps-overview-report) voor meer informatie.

<img src={require("/img/nps-feedback-request-mail.png").default} height="" width="800" />
