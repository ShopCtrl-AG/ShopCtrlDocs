---
sidebar_position: 7
slug: /docs/ticket-types
description: "Maak en configureer tickettypen in ShopCtrl om supportverzoeken naar de juiste afdeling te leiden. Elk inkomend ticket krijgt een type."
---

# Tickettypen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

## Tickettypen configureren {#configuring-ticket-types}

Elk ticket dat in ShopCtrl binnenkomt, krijgt automatisch een tickettype.
Tickettypen zijn verplicht.

Het standaardtickettype '**Issue**' is vooraf ingesteld. U kunt meer typen aanmaken om supportverzoeken van klanten efficiënt af te handelen. Met tickettypen kunt u tickets indien nodig naar een bepaalde afdeling of medewerker leiden.

<img src={require("/img/ticket-types.png").default} height="" width="800" />

U voegt eigen tickettypen toe via de globale configuratie:

1. Log in als Shop Owner admin.
2. Selecteer in de navigatiestructuur links **Configuration > Ticket Types**.
3. Klik op **Add** om een nieuw tickettype aan te maken.
<img src={require("/img/create-ticket-type.png").default} height="" width="800" />

4. Vul de **Name** van het tickettype in.
5. (Optioneel) Selecteer een afbeelding voor **Custom icon**.
6. Kies met **Sequence** de positie van het tickettype in de vervolgkeuzelijst. De meest gebruikte typen kunt u hoger in de lijst zetten.
7. Voor automatische toewijzing van tickets:
    1. Vul de **Ticket title** in: tekst die standaard aan de titel van het ticket wordt toegevoegd wanneer een ticket automatisch wordt aangemaakt.
    2. Kies de **Employee group** waaraan het ticket wordt toegewezen.
    3. Selecteer de **Category** die op het ticket wordt toegepast.
8. (Optioneel) U kunt **Custom parameters** aanmaken die aan elk ticket van dit type worden toegevoegd:
<img src={require("/img/add-ticket-parameter.png").default} height="" width="800" />

    1. Klik op **Add** om een nieuwe parameter aan te maken.
    2. Kies met **Sequence** de positie van de parameter in de lijst.
    3. Schakel de parameter in met **Enable**.
    4. Vul de **Key** van de parameter in.
    5. Vul de **Caption** in die als naam van de parameter in de ticketdetails wordt getoond.
    6. Selecteer het gegevenstype van de parameter:
       * String
       * RichText
       * Date
       * Boolean
       * Number
       * Lookup - voor dit type moet u ook de mogelijke waarden vooraf vastleggen.
    6. Sla de parameter op door op **Ok** te klikken.

9. Schakel het tickettype nu in met **Enable**, zodat het beschikbaar is voor handmatige selectie en in de configuratie.
10.  Klik op **Save** of **Save and Close** om het nieuwe tickettype aan te maken.

## Werken met tickettypen {#working-with-ticket-types}

Stel dat uw ShopCtrl-omgeving twee tickettypen heeft: vraag (question) en probleem (problem).

Een medewerker markeert een ticket als **Question** als de klant een vraag stelt over een product of levering, in plaats van een probleem of incident te melden. Een voorbeeld van een vraag is: Hoe stel ik mijn wachtwoord opnieuw in?

Het type **Problem** wordt gebruikt wanneer een klant of eindgebruiker een probleem meldt met uw product of dienst. Een probleemticket kan van alles zijn, van "Er zat een fout in mijn order" tot "Ik kan de kalenderpagina niet openen".

Een medewerker kan het tickettype selecteren bij de eerste beoordeling van een ticket.
Om de klantenservice te automatiseren en bepaalde verzoeken per e-mail efficiënt af te handelen, kunt u [filters](/User-Guide/06-Communication/Tickets/ticket-configuration.md#ticket-filter) instellen die bepaalde verzoeken over verschillende afdelingen verdelen. U kunt ook [triggers](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-actions.md#create-ticket) gebruiken om na bepaalde [gebeurtenissen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/trigger-events.md) een ticket aan te maken. Tickets van een bepaald type kunnen ook worden aangemaakt als onderdeel van de automatische configuratie van [betalingsherinneringen](/User-Guide/05-Financial/Invoices/invoice-reminders.md).
