---
sidebar_position: 1
slug: /docs/working-with-tickets
description: "Werk met tickets in ShopCtrl: tickets handmatig toevoegen, collega's of teams toewijzen, bulkacties uitvoeren en gekoppelde klanten en orders openen."
---

# Werken met tickets

Zodra de ticketfunctie van ShopCtrl is geconfigureerd, zijn alle inkomende berichten zichtbaar in het hoofdvenster met tickets.

Tickets vindt u in het menu Communication.

<img src={require("/img/ticket-table-overview.png").default} height="" width="800" />

## Acties {#actions}

* Tickets handmatig toevoegen
* Collega's, teamleden of zelfs een heel team toewijzen. Als u een team toewijst, kan een dispatcher of teamlid bepalen welke medewerker het best bij het ticket past
* Via het menu **More** zijn een aantal bulkopties beschikbaar, zoals tickets verwijderen, de status wijzigen en tickets exporteren. U kunt ook de sortering van de tickettabel wijzigen, zodat tickets met de hoogste prioriteit bovenaan staan.
* Open de ticketdetails om ze te bekijken of te bewerken door op de rij van het ticket te dubbelklikken.
* U kunt ook op de pictogrammen voor de klant of de order klikken om die in een nieuw tabblad te openen.

:::info[Automatisch toewijzen]

Zodra een medewerker een ticket opent dat nog niet is toegewezen, wordt het automatisch toegewezen aan de medewerker die het ticket heeft geopend. Dat bespaart tijd in het dagelijkse werk.

:::

### Tickets als spam markeren {#marking-tickets-as-spam}

Selecteer tickets en gebruik de knop **Mark as Spam** om ze automatisch te sluiten en toekomstige e-mails van dezelfde afzender te filteren.

<img src={require("/img/mark-as-spam.png").default} height="" width="800" />

**Voordat u begint:** er moet een [spamfilter voor tickets](./ticket-configuration.md#how-to-create-a-spam-filter-for-marking-tickets-as-spam) zijn ingesteld om deze functie te laten werken.

Deze actie:
- Sluit de geselecteerde tickets
- Wijst de categorie Spam toe
- Voegt het e-mailadres van de afzender toe aan het spamfilter
- Voorkomt dat toekomstige e-mails van dit adres tickets aanmaken in uw Todo-tabel

## Filters {#filters}

Met de uitgebreide filteroptie krijgt u een beter overzicht van de bestaande tickets.
Selecteer teams, klant(en), statustypen of categorieën.

<img src={require("/img/ticket-filter.png").default} height="" width="" />

## Ticketstatussen en filtervakken {#ticket-status--filter-boxes}

De status- en filtervakken geven een beter overzicht van de statistieken van de huidige tickets.
Als u op een status klikt, wordt het filter daarop ingesteld.

<img src={require("/img/ticket-statuses-panel.png").default} height="" width="" />

* **All Open**
Filtert alle openstaande tickets, of ze nu verlopen zijn, bijna verlopen of opvolging nodig hebben.
* **Expired**
Tickets die niet binnen de SLA-termijn zijn opgelost.
* **Expiring**
Toont alle tickets die nog twee uur hebben om te worden opgelost.
* **Follow up**
Filtert alle tickets die nog niet zijn opgelost, maar wachten op externe input (bijvoorbeeld een leverancier die moet reageren over een levertermijn).
* **Due Tasks**
 Toont tickets waarvoor een taak is ingesteld.
