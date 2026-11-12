---
sidebar_position: 2
slug: /docs/sla-new
description: "Stel in ShopCtrl service level agreements in per shop en per communicatiekanaal, inclusief beschikbaarheid, reactietijden en tijdzones."
---

# Service level agreement

:::warning[Binnenkort beschikbaar!]

In de komende releases wordt deze nieuwe versie van de configuratie van de Service Level Agreement geïntroduceerd.

:::

De **Service Level Agreement (SLA)** stelt u per communicatiekanaal in op shopniveau.
U kunt per shop instellen op welke dagen van de week en op welke tijden er een klantenserviceteam beschikbaar is. De SLA bevat per communicatiekanaal een vaste reactietijd en per shop een tijdzone. Statistieken over de klantenservice worden automatisch verzameld, waaronder de tijd die medewerkers en medewerkersgroepen besteden aan inkomende e-mails, telefoongesprekken en tickets.

Prestatiegegevens over de service level agreement kunt u bekijken en analyseren in verschillende rapporten: [Rapportage over serviceniveaus](/User-Guide/03-Basic-Functions/reporting.md#service-level-reporting).

Zie voor meer informatie: [Ticketconfiguratie](/User-Guide/06-Communication/Tickets/ticket-configuration.md) en [Werken met tickets](/User-Guide/06-Communication/Tickets/working-with-tickets.md).

## De Service Level Agreement voor een shop instellen {#how-to-set-service-level-agreement-for-a-shop}

De configuratie van de Service Level Agreement per shop is onlangs op een aantal punten gewijzigd. U kunt nu niet alleen de werktijden per shop instellen, maar ook de kalenderdagen waarop er geen klantenserviceteam beschikbaar is. Ook kunt u per communicatiekanaal nauwkeurigere reactietijden opgeven.

Volg de drie stappen hieronder om de nieuwe Service Level Agreement (SLA) te configureren.

### Stap 1. Records voor kantooruren aanmaken {#step-1-create-office-hours-records}

:::info[**Vereiste rechten**]

Om records voor de kantooruren van een bedrijf aan te maken en te wijzigen, moet een medewerker het recht "**Edit office hours**" hebben. Het recht "**Delete**" wordt apart ingesteld.

:::

De eerste records voor **Office Hours** worden aangemaakt op basis van de configuratie van serviceniveaus die eerder per shop was ingesteld. Om deze records te bewerken en te beheren, gaat u naar het gedeelte **Configuration > Office Hours**.
U kunt nu één gezamenlijk record voor kantooruren aanmaken voor alle shops die volgens hetzelfde schema werken. Zo kunt u aparte records aanmaken voor de verschillende werkschema's die uw shops in verschillende landen volgen.

![Overzicht van kantooruren](/img/office-hours-grid.png)

In een record voor kantooruren stelt u per dag van de week de openings- en sluitingstijden in, los van de tijdzone waarin de shop zich bevindt. De tijdzone stelt u in op de configuratiepagina van de shop.

![Kantooruren](/img/office-hours.png)

Om een servicedag toe te voegen, vinkt u het selectievakje Service Day aan en stelt u de werktijden voor die dag in. U kunt ook op een tijdrecord klikken om de tijden aan te passen. Sla het record voor kantooruren op als u klaar bent.
U kunt voor elk communicatiekanaal van een shop een ander record voor kantooruren gebruiken.

### Stap 2. Feestdagenkalenders aanmaken {#step-2-create-holiday-calendars}

:::info[**Vereiste rechten**]

Om feestdagenkalenders voor een bedrijf aan te maken en te wijzigen, moet een medewerker het recht "**Edit holiday calendar**" hebben. Het recht "**Delete**" wordt apart ingesteld.

:::

De feestdagenkalender wordt opgesteld aan de hand van de dagen waarop uw bedrijf en supportteam in een bepaald land niet werken. Zo beheert u uw bedrijfsprocessen in meerdere landen efficiënt.

![Overzicht van feestdagen](/img/holidays-grid.png)

Feestdagen kunt u handmatig aan een kalender toevoegen, zodat u de lijst elk jaar kunt uitbreiden. Houd er rekening mee dat het verwijderen van feestdagen uit de kalender invloed kan hebben op de berekening van de Service Level Agreement voor eerdere records. Denk dus goed na voordat u het feestdagenschema wijzigt.

![Details van feestdagen](/img/holidays-detail.png)

### Stap 3. De Service Level Agreement per communicatiekanaal configureren {#step-3-configure-service-level-agreement-per-communication-channel}

:::info[**Vereiste rechten**]

Om de SLA voor een shop te configureren, moet een medewerker met de rol **Shop Owner Admin** of **Shop Admin** aan de shop gekoppeld zijn.

:::

De Service Level Agreement per communicatiekanaal stelt u in op shopniveau, op basis van de regio van de shop.

![SLA per communicatiekanaal in de shopinstellingen](/img/shop-settings-sla-communication-channel.png)

Volg deze stappen om het serviceniveau voor een shop in te stellen:

1.  Ga naar **Shop Details Page > Service Level**.
2.  Selecteer eerst de **Time zone** van de locatie van de shop.
3.  Kies een **Holiday Calendar** voor de shop. Deze kalender wordt standaard gebruikt als er voor communicatiekanalen geen eigen kalenders zijn ingesteld.
4.  Stel daarna de SLA in voor het communicatiekanaal **Default**. Deze instellingen worden gebruikt als terugvaloptie als er voor een communicatiekanaal geen eigen SLA is ingesteld.
    1.       Kies de **Office Hours** waarin uw supportdesk gedurende de week werkt.
    2.       (Optioneel) Selecteer de **Holiday Calendar** voor de locatie van de shop.
    3.       Vul het **Percentage** in: het percentage inkomende verzoeken per communicatiekanaal dat op tijd moet zijn beantwoord om aan de SLA te voldoen. Dit kan later voor rapportages worden gebruikt.
    4.       Stel de **Maximum response time** in: de termijn in werkuren, -minuten of -seconden waarbinnen het verzoek van de klant moet zijn beantwoord en opgelost.
    5.       Schakel de configuratie voor het betreffende communicatiekanaal in.
5.       U kunt nu aangepaste instellingen voor de andere communicatiekanalen configureren. Deze instellingen gaan vóór de standaardconfiguratie.
6.  Klik als u klaar bent op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.

Op dezelfde manier kunt u met deze stappen de SLA voor andere shops in uw organisatie configureren. Zodra de instellingen zijn toegepast, wordt de SLA berekend volgens de nieuwe regels.
