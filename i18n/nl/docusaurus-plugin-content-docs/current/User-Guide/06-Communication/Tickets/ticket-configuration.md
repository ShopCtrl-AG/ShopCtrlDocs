---
sidebar_position: 5
slug: /docs/ticket-configuration
description: "Schakel tickets in voor een ShopCtrl-shop en configureer ze, inclusief het automatisch toewijzen van medewerkers en de communicatie-instellingen waar tickets van afhangen."
---

# Ticketconfiguratie

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::


Om de ticketfuncties van ShopCtrl te gebruiken, past u de communicatie-instellingen van de betreffende shop aan.
<img src={require("/img/shop-details-ticket-configuration.png").default} height="" width="400" />

Zie ook: [Het serviceniveau voor een shop instellen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/01-Organization-Settings/service-level.md).

### Algemene instellingen {#general-settings}

1. Open **Shop Details page > Communication > Tickets**.
3. De ticketfunctie staat aan of uit. Als deze niet is ingeschakeld, zijn inkomende e-mails zichtbaar in de module Mail van ShopCtrl. Om tickets in te schakelen, vinkt u het selectievakje **Enabled** aan.
4. Klik op **Save** om de wijzigingen toe te passen.
5. (Optioneel) Vink het selectievakje "**Auto assign Employee to Ticket**" aan als u een niet-toegewezen ticket automatisch wilt toewijzen aan de medewerker die het opent om te bekijken of te bewerken.
6. (Optioneel) Kies of een **categorie** een verplicht veld voor een ticket is.
8. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.

:::warning[]

Let op: sommige instellingen zijn pas beschikbaar nadat u de ticketoptie hebt ingeschakeld en de shopinstellingen voor de eerste keer hebt opgeslagen.

:::
### Wachten op de klant {#waiting-for-customer}

U kunt automatische herinneringen instellen voor tickets met de status **Wait for customer**, zodat de opvolging wordt geautomatiseerd.
In alle drie de gevallen begint de telling van de dagen op het moment dat een medewerker de status van het ticket wijzigt in **Wait for customer and close**.
U kunt de e-mailsjablonen opgeven waarmee de herinneringen automatisch worden gegenereerd.
Als de klant niet binnen het ingestelde aantal dagen antwoordt, verandert de status van het ticket automatisch in **Closed**.

### E-mailinstellingen {#mail-settings}
**Create ticket on incoming mail.** Vink dit selectievakje aan als u bij elke nieuwe e-mail een ticket wilt laten aanmaken.

U kunt een [tickettype](/User-Guide/06-Communication/Tickets/ticket-types.md) toewijzen aan nieuwe inkomende e-mails en de tickettypen beheren in de basisconfiguratie.

Bepaal of er een ticket nodig is voor nieuwe uitgaande e-mails:
* NotRequired - er is geen ticket nodig voor uitgaande e-mails
* AutoCreateTicket - er wordt een ticket aangemaakt en gesloten op het moment dat de e-mail wordt verstuurd.
* WarnUserWhenNoTicket - een medewerker krijgt bij het versturen van een e-mail een waarschuwing als er voor deze e-mail geen ticket is aangemaakt
* PreventSendingMail - een e-mail kan niet worden verstuurd zonder gekoppeld ticket.

### Opvolging - gedrag bij het (her)openen van tickets {#follow-up---ticket-reopen-behavior}
Zodra het systeem een ticket als open markeert, kan het aan dezelfde medewerker toegewezen blijven, of kan de toewijzing worden verwijderd.

> Voorbeeld: een medewerker beantwoordt de vraag van een klant en de klant is tevreden met het antwoord. De medewerker sluit het ticket. Een dag later stelt de klant een aanvullende vraag met hetzelfde ticket-ID.

Met de instellingen voor het gedrag bepaalt u hoe ShopCtrl hiermee omgaat:

**KeepEmployeeAssigned**: dezelfde medewerker blijft toegewezen
**UnassignEmployee**: het ticket wordt als **Open** gemarkeerd en aan een nieuwe medewerker gegeven.

**Default follow up time, in hours:** bepaalt de standaardtijd voor opvolging. Deze periode wordt bij de huidige tijd van de gebruiker opgeteld wanneer de status van het ticket in 'Follow up' wordt gewijzigd.
U kunt altijd de vervolgkeuzelijst **Mark follow up** in de ticketdetails gebruiken om een specifiekere opvolgdatum in te stellen.


### E-mail bij inactiviteit (Idle mail) {#idle-mail}

Hier stelt u een e-mailsjabloon in en een moment waarop de e-mail wordt gegenereerd en naar wachtende klanten wordt verstuurd.

### Ticketfilter {#ticket-filter}

Met het krachtige filteralgoritme van ShopCtrl kunt u reguliere expressies gebruiken om bepaalde berichten naar het juiste team of de juiste medewerker te leiden.
In het voorbeeldfilter hieronder lichten we een aantal filterfuncties toe:
<img src={require("/img/shop-details-tickets-add-filter-bookkeeping.png").default} height="" width="400" />

1. Klik op de knop **Add Filter** om een nieuwe filterregel aan te maken.
2. Vul een korte **Name** voor het filter in.
3. Selecteer een **Priority** (0 = hoogste prioriteit).
4. Geef op welke waarden moeten overeenkomen:
    1. Kies de voorwaardelijke operator voor het filter: **And**, **Or**.
    2. Vul uw zoekcriteria in voor **Title**: het onderwerp van de inkomende e-mail.
    3. Of voor **Content**: de tekst van de e-mail.
    4. (Optioneel) U kunt de geavanceerde zoekfunctie gebruiken en met reguliere expressies naar bepaalde patronen zoeken. Vink het selectievakje **Is Regex** aan en geef de zoekcriteria op in de syntaxis van reguliere expressies.
5. Bepaal welke **Actions to perform** worden uitgevoerd als de criteria overeenkomen:
    1.  Welke **Category** op het ticket wordt toegepast.
    2.  Aan welke **Group** of **Employee** het ticket wordt toegewezen.
    3.  Kies de **Priority** van het ticket: Low, Medium, High.
6. Klik op **Ok** om het filter op te slaan.

Meer informatie over de syntaxis van reguliere expressies vindt u in [.NET regular expressions](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions).

:::warning[**Let op:**]

**Prioriteit van filters**. Als het filter met prioriteit 0 overeenkomt, wordt dit altijd toegepast. Anders wordt het filter met de hoogste prioriteit toegepast.

:::

### Een spamfilter maken om tickets als spam te markeren {#how-to-create-a-spam-filter-for-marking-tickets-as-spam}

Om de functie "Mark as Spam" in de tickettabel te gebruiken, maakt en configureert u een apart spamfilter.

**Stappen om het spamfilter te maken:**

1. Ga naar **Shopowner > Communication > Tickets**.
2. Maak een nieuw filter aan op het niveau van de shop owner, zodat het voor alle shops geldt.
3. Klik op **Add Filter**.
    <img src={require("/img/configure-ticket-spam-filter.png").default} height="" width="400" />

4. Configureer de instellingen van het filter:
   - **Name**: vul "Spam" in (aanbevolen).
   - Selecteer in het gedeelte **Actions to perform** een ticketcategorie "Spam" die aan gefilterde tickets wordt toegewezen.
   - Schakel de optie **Close ticket** in.
   - Zorg dat het selectievakje **Enabled** is aangevinkt, zodat het filter actief is.
5. Klik op **Ok** om het filter toe te voegen.
6. Klik op **Save Shopowner** om uw wijzigingen op te slaan.

**Instellen als standaardspamfilter:**

1. Vernieuw het tabblad met de instellingen van de shop owner.
2. Ga naar het deelvenster **Shopowner > Communication > Tickets > General**.
3. Selecteer uw nieuwe filter "Spam" als standaard **Spam Filter**.
4. Klik op **Save** of **Save and Close**.

    <img src={require("/img/mark-as-spam-configuration.png").default} height="" width="400" />

U kunt het filter nu testen vanuit de tickettabel door tickets te selecteren en de knop ["Mark as Spam"](working-with-tickets.md#marking-tickets-as-spam) te gebruiken.

### Medewerkersgroepen {#employee-groups}

U kunt nieuwe medewerkersgroepen aanmaken in Configuration > Employee Groups, of bestaande groepen gebruiken om inkomende tickets over de juiste medewerkers te verdelen.
Schakel op de detailpagina van de medewerkersgroep de instelling "For ticket management" in, zodat tickets aan deze groep kunnen worden toegewezen.
<img src={require("/img/employee-group-setting.png").default} height="" width="800" />
