---
sidebar_position: 2
slug: /docs/ticket-details
description: "Het venster met ticketdetails in ShopCtrl: actieknoppen, communicatiegeschiedenis, toewijzing aan medewerkers, gekoppelde producten en weergaveopties."
---

# Ticketdetails

Het venster met ticketdetails toont alle informatie over een ticket. Hier beheert u de communicatie, wijst u medewerkers toe, houdt u producten bij en meer. Om het venster te openen, dubbelklikt u op een ticket of klikt u op de knop edit in het hoofdscherm met tickets.

![Nieuw venster met ticketdetails](/img/ticket-detail-window-new.png)

## Actieknoppen {#action-buttons}

Bovenaan staan de belangrijkste actieknoppen:

- **Save and Close** — sla het ticket op en sluit het detailvenster. Gebruik het pijltje om **Save** te kiezen (zonder te sluiten).
- **Mark Closed and Close** — zet de status van het ticket op *Closed* en sluit het venster.
- **Delete** — verwijder het ticket.
- **Old Layout** — schakel over naar de vorige indeling van de ticketdetails. Deze voorkeur wordt per medewerker opgeslagen: alle tickets openen in de oude indeling tot u weer terugschakelt. In de oude indeling staat een knop **New Layout** om terug te gaan naar de huidige weergave.


<details>
<summary><b>Oude indeling van de ticketdetails</b></summary>

![Oud venster met ticketdetails](/img/ticket-detail-window-old.png)

</details>


## Ticketkop {#ticket-header}

![Kop van de ticketdetails](/img/ticket-detail-header.png)

In de kop staat de belangrijkste informatie van het ticket in een compacte indeling:

| Veld | Omschrijving |
| --- | --- |
| **Ticket ID** | Uniek ticketnummer (bijvoorbeeld 1852). |
| **Title** | Onderwerp van het ticket. Rechtstreeks in de kop te bewerken. |
| **Company** | Het bedrijf van de klant dat aan dit ticket is gekoppeld. Klik op de pictogrammen om het bedrijf te openen of te bewerken, of om een ander bedrijf te zoeken. |
| **Order** | Het gekoppelde ordernummer (indien van toepassing). |
| **Status folder** | Huidige statusmap (bijvoorbeeld Todo, Closed). |
| **Ticket type** | Het type ticket (bijvoorbeeld Incident Ticket). Selecteer het in de vervolgkeuzelijst. |
| **Priority** | Prioriteitsvlag van het ticket. |
| **Language** | Taal van het ticket, weergegeven als landenvlag. |
| **Return / Offer / Service contract** | Vervolgkeuzelijsten om het ticket snel aan een retour, offerte of servicecontract te koppelen. |

### Toewijzing {#assignment}

- **Toewijzing aan een medewerker** — klik op de vervolgkeuzelijst voor medewerkers (met *No employee assigned* of de naam van de toegewezen medewerker) om het ticket aan een bepaalde medewerker toe te wijzen. Met de knop **Assign me** wijst u het ticket snel aan uzelf toe. Deze knop is verborgen als het ticket al aan u is toegewezen.
- **Toewijzing aan een groep** — selecteer een supportteam of groep in de vervolgkeuzelijst voor groepen (met *No team assigned* of de naam van het toegewezen team).

### Categorieën {#categories}

![Categorieën in de ticketdetails](/img/ticket-detail-categories.png)

Met de vervolgkeuzelijst voor categorieën wijst u een of meer categorieën aan het ticket toe. Als de AI Assistant is ingeschakeld, stelt deze automatisch categorieën voor op basis van de inhoud van het ticket. Deze voorstellen verschijnen direct in de vervolgkeuzelijst. U kunt de voorgestelde categorieën toepassen of zelf categorieën kiezen uit de volledige lijst.

### Datums {#dates}

- **Opened date** — de datum en tijd waarop het ticket is aangemaakt (slotpictogram).
- **Closed date** — de datum en tijd waarop het ticket is gesloten, of `-` als het nog open is.

:::tip
Zodra u minstens één categorie hebt geselecteerd, laadt de AI niet meer automatisch nieuwe voorstellen. Gebruik de knop voor vernieuwen in het deelvenster AI Assistant om op elk moment nieuwe voorstellen op te vragen.
:::

## AI Assistant {#ai-assistant}


Het deelvenster AI Assistant staat direct onder de ticketkop. Het analyseert automatisch de inhoud van het ticket (berichten, titel, opmerkingen) en geeft:

- **Tevredenheidsscore** — een tevredenheidsbeoordeling (bijvoorbeeld 2/5) met een emoji in de kop van het deelvenster.
- **AI-samenvatting** — een korte samenvatting van het probleem van de klant, op basis van de inhoud van het ticket.

Gebruik de **knop voor vernieuwen** in de kop van het deelvenster om de AI-analyse opnieuw te genereren. Het deelvenster is inklapbaar: klik op de pijltjes om het in of uit te klappen.

:::tip
De AI Assistant moet worden geconfigureerd. Zie [Ticket AI Assistant](/User-Guide/06-Communication/Tickets/ticket-ai-assistant.md) voor instructies, waaronder het instellen van de API-sleutel en het trainen op categorieën.
:::

## Tabbladen {#tabs}



Alle informatie over het ticket is verdeeld over tabbladen onder het deelvenster AI Assistant. Elke tabbladtitel toont een label met het aantal items (bijvoorbeeld *Messages (2)*, *Comments (1)*, *Parameters (1)*). De inhoud van een tabblad wordt pas geladen als u er de eerste keer op klikt, zodat de pagina sneller is.

### Tabbladen herschikken {#reordering-tabs}

U kunt tabbladen in elke gewenste volgorde slepen. De volgorde van de tabbladen wordt per medewerker opgeslagen, zodat elk teamlid de eigen werkruimte kan inrichten.

### Een tabblad vastzetten {#pinning-a-tab}

U kunt één tabblad vastzetten, zodat het altijd zichtbaar blijft terwijl u in andere tabbladen werkt. Om een tabblad vast te zetten, beweegt u de muis over het actieve tabblad en klikt u op het speldpictogram rechts in de tabbladkop. De weergave wordt dan in twee kolommen verdeeld: het vastgezette tabblad links en de overige tabbladen rechts.

- Alleen het actieve tabblad toont het speldpictogram.
- U kunt maar één tabblad tegelijk vastzetten. Als u een ander tabblad vastzet, vervangt dat het huidige.
- Sleep de scheidingslijn tussen de kolommen om de breedte aan te passen.
- Het vastgezette tabblad en de kolombreedte worden per medewerker opgeslagen en bij het volgende bezoek automatisch hersteld.
- Om een tabblad los te maken, klikt u op het speldpictogram in de kop van het vastgezette deelvenster.

![Een tabblad vastzetten in de ticketdetails](/img/ticket-details-pin-tab.png)


### Messages {#messages}

Het tabblad Messages is de standaardweergave en toont alle communicatie rond het ticket.

**Tijdlijn van berichten:**

![Tijdlijn van berichten in de ticketdetails](/img/ticket-detail-message-timeline.png)

Berichten zijn gegroepeerd per datum en worden in een tijdlijn getoond. Bij elk bericht ziet u:
- Naam en e-mailadres van de afzender
- Tijdstempel
- Voorbeeld van het bericht (klik om de volledige inhoud te tonen)
- Actielinks: **Reply All**, **Forward**, **View**

De kleur van het bericht geeft het type aan:
- **Lichtgrijs** — inkomend bericht van een klant
- **Lichtgroen** — antwoord van een supportmedewerker
- **Blauw** — communicatie met anderen dan de klant (bijvoorbeeld een leverancier of intern)

Het meest recente bericht dat geen automatisch antwoord is, wordt automatisch uitgeklapt wanneer u het ticket opent.

**Berichten opstellen:**

Gebruik de knoppen in de werkbalk om een nieuw bericht te beginnen:
- **New Customer Mail** — stel een antwoord aan de klant op.
- **New Supplier Mail** — stel een bericht aan een leverancier of andere partij op.

Het venster voor het opstellen van berichten kunt u minimaliseren, herstellen en sluiten. Als u het minimaliseert, wordt het linksonder in het scherm ingeklapt, zodat u het ticket kunt blijven bekijken terwijl u een antwoord schrijft. Als u het venster sluit met niet-opgeslagen wijzigingen, wordt u om bevestiging gevraagd.

![AI in het venster voor het opstellen van berichten](/img/ticket-detail-compose-ai.png)

De AI Assistant is ook beschikbaar in het venster voor het opstellen van berichten. Gebruik de assistent als hulp bij het schrijven van uw antwoord, bijvoorbeeld om een antwoord te genereren op basis van de context van het ticket of om de toon van uw bericht aan te passen.

**Opties in de werkbalk:**
- **Search** — berichten filteren op trefwoord.
- **Type filter** — filteren op type bericht (e-mail, notitie, telefoon, chat).
- **Sort** — de volgorde van de berichten wijzigen.
- **Detailed View** — wisselen tussen een compacte en een gedetailleerde weergave van berichten.

### Comments {#comments}

Interne opmerkingen die niet zichtbaar zijn voor klanten. Gebruik opmerkingen voor interne notities, informatie bij een overdracht of afstemming in het team.

### Attachments {#attachments}

Bijlagen bij het ticket bekijken, uploaden en beheren.

### Products {#products}

![Producten in de ticketdetails](/img/ticket-detail-products.png)

Het tabblad Products toont welke producten bij het ticket horen. Het label op het tabblad toont het aantal als *geselecteerd/totaal* (bijvoorbeeld *Products (0/3)*).

Producten kunnen uit twee bronnen komen:
- **Producten uit de order** — automatisch geladen uit de gekoppelde order (indien aanwezig).
- **Handmatig toegevoegde producten** — toegevoegd met de zoek- en toevoegfunctie in het tabblad.

De producttabel toont:
- Miniatuur van de productafbeelding
- SKU
- Productnaam
- Leverancier (direct te bewerken)

Vink met de selectievakjes de producten aan waarop het ticket betrekking heeft.

### Child Tickets {#child-tickets}

Bekijk en beheer tickets die als onderliggend ticket aan het huidige ticket zijn gekoppeld. Gebruik de functie **Merge** om dubbele tickets samen te voegen.

### Tasks {#tasks}

Houd activiteiten en taken bij die bij het ticket horen. Het label toont het aantal actieve taken ten opzichte van het totaal (bijvoorbeeld *Tasks (1/3)*).

### Parameters {#parameters}

Bekijk en bewerk eigen parameters van het ticket. Het label toont het aantal parameters met een waarde.

### History {#history}

Het tabblad History bevat drie subtabbladen:
- **History** — volledig logboek van alle wijzigingen in het ticket.
- **Employee History** — tijdlijn van toewijzingen en acties van medewerkers.
- **Status History** — logboek van alle statuswijzigingen.
