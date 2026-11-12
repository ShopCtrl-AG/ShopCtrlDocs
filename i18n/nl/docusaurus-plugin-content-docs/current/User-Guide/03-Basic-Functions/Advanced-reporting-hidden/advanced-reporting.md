---
sidebar_position: 1
slug: /docs/report-deep-links-ticketlist
description: "Bouw rapporten in ShopCtrl met deeplinks naar gefilterde ticketweergaven, met het argument additionalQueryParams van de functie OpenDetailTabForEdit."
---

# Dynamische rapporten bouwen met deeplinks naar gefilterde ticketweergaven

Met het rapportageframework van ShopCtrl kunt u uw rapporten nu nauwer koppelen aan uw operationele gegevens. Dankzij een nieuwe uitbreiding kunt u geavanceerde rapporten maken die niet alleen afzonderlijke tickets openen, maar de hele ticketlijst (Ticket List), met filters die al zijn toegepast op basis van de context van uw rapport. Zo maakt u **slimme deeplinks** die u naadloos van samengevatte rapportgegevens naar precies gefilterde operationele weergaven brengen.

Voor gevorderde gebruikers die eigen rapporten bouwen, beschrijft deze handleiding hoe u deze mogelijkheid gebruikt om uw rapporten bruikbaarder en inzichtelijker te maken.

## Rechtstreeks linken naar gefilterde weergaven {#direct-linking-to-filtered-views}

De kern van deze functie is het argument `additionalQueryParams` in de functie `OpenDetailTabForEdit`. Bouw URL's die automatisch bepaalde filtercriteria toepassen, zodat statische rapporten interactieve startpunten worden.

**Voorbeeld: een rapportlink maken voor "Open tickets in shop 2"**


```javascript
OpenDetailTabForEdit(
    'Tickets',
    null,
    'ShopID=2',
    true
);
```

**Uitgebreidere filters voor nauwkeurige rapporten**

Om zinvolle deeplinks te kunnen bouwen, hebben we de filtermogelijkheden uitgebreid met nieuwe velden en opties.

1. Nieuw criterium `Shop` voor gerichte rapporten
Standaard staat dit op 'Active Shops' en wordt SessionData.ActiveShops aan de ticketzoekopdracht doorgegeven.
Met het nieuwe filter Shop kunt u naar tickets van een bepaalde shop linken, zonder de globale lijst met actieve shops van de gebruiker te wijzigen. Dat is ideaal voor rapporten over één locatie.

2. Uitgebreid veld `Filter` voor geavanceerde logica.
We hebben een aantal speciale filters aan het veld 'Filter' toegevoegd, waarmee u nu complexere filterzoekopdrachten kunt opbouwen.

Belangrijke filterwaarden voor rapporten:

- All Tickets
- All Open Tickets
- All Closed Tickets
- All Expired Tickets
- All Expiring Tickets (verloopt binnen 120 min)
- All OnTime Tickets (alle openstaande tickets die nog niet zijn verlopen)
- All FollowUp Tickets
- All Unassigned Tickets (tickets die niet aan een medewerker zijn toegewezen; toewijzing aan een team wordt genegeerd)

Een deel van deze filters bestond al binnen de filters Employee en EmployeeGroup, maar was altijd gebaseerd op de huidige medewerker en de medewerkersgroepen waarvan die medewerker lid is. Nu kunt u ze combineren met andere filters, voor flexibelere combinaties.

**Parameters voor het opbouwen van deeplinks**

Gebruik deze sleutels en waarden (niet hoofdlettergevoelig) om de querystring voor uw rapportlinks op te bouwen.

| Parameter       | Waarden      | Omschrijving                         |
|-----------------|--------------|--------------------------------------|
| `EmployeeId`    | geheel getal | Filteren op een bepaalde medewerker  |
| `EmployeeGroupId`| geheel getal | Filteren op medewerkersgroep        |
| `TicketTypeId`  | geheel getal | Filteren op tickettype               |
| `ShopId`        | geheel getal | Filteren op een bepaalde shop        |
| `filter`        | tekstopties  | Vooraf ingestelde filterwaarden      |
| `startdate`     | `'today'`    | Begindatum op de huidige dag zetten  |


**Praktijkvoorbeelden voor het bouwen van rapporten**

```javascript
// Daily Expired Chats Report: A deep link showing all chats that expired today.
OpenDetailTabForEdit(
  'Tickets',
  null,
  'TicketTypeID=3&filter=expired&StartDate=today',
  true
);

// Escalation Report: A link to tickets expiring soon that are still unassigned.
OpenDetailTabForEdit(
  'Tickets',
  null,
  'filter=expiring&filter=unassigned',
  true
);

// Team Performance Report: Open tickets for specific employee group
OpenDetailTabForEdit(
  'Tickets',
  null,
  'EmployeeGroupID=5&filter=open',
  true
);
```

Deze functionaliteit biedt een robuuste API voor deeplinks, waarmee ontwikkelaars en ontwerpers van rapporten vanuit rapporten rechtstreeks naar de meest relevante gegevens kunnen linken.
