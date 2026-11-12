---
sidebar_position: 3
slug: /docs/whats-new-in-tickets-statuses-and-filters
description: "De vernieuwde ticketstatussen in ShopCtrl: Open wordt Todo, er zijn nieuwe wachtstatussen, en de bijbehorende filtervakken bovenaan."
---

# Nieuw in tickets: ticketstatussen en filters


We hebben het systeem van ticketstatussen vernieuwd, zodat u meer overzicht en controle hebt over uw supportwerk. Met deze update komen er nieuwe statussen bij, krijgen bestaande statussen een nieuwe betekenis en zijn er krachtige nieuwe mogelijkheden voor filteren en het bijhouden van de geschiedenis.

## 1. Vernieuwde statussen: van "Open" naar "Todo" {#1-redesigned-statuses-from-open-to-todo}

Om duidelijker te maken wat direct actie nodig heeft, hebben we de ticketstatus hernoemd en de filtervakken bovenaan bijgewerkt:

**Todo**: tickets waaraan actief wordt gewerkt. Dit zijn uw directe prioriteiten.

**Open (filter)**: dit is nu een filtervak bovenaan dat alle niet-gesloten tickets omvat, waaronder Todo, Follow up, Wait for Customer, Waiting for Supplier en Waiting for Internal Team.

<img src={require("/img/tickets-top-filter-boxes-with-open.png").default} height="" width="800" />

**Wat u moet weten:**

Bestaande tickets met de status "Open" zijn omgezet naar de nieuwe status **Todo**.

Het filter **"Open"** is standaard verborgen in de filtervakken bovenaan. U kunt het inschakelen door de kolommen van de filtervakken aan te passen, net als bij elke andere tabel in ShopCtrl. De hele filterbalk bovenaan is nu aan te passen. U kunt bepaalde vakken en kolommen tonen of verbergen, afhankelijk van wat uw team nodig heeft.

<img src={require("/img/tickets-top-filter-boxes-customize.png").default} height="" width="800" />


### Overzicht van statuswijzigingen {#status-change-reference-table}

| Oude status | Nieuwe status / uitleg |
|------------|------------------------------|
| Closed | **Closed** (ongewijzigd) |
| Closed – Waited for customer | Status **Auto-closed**, niet handmatig te selecteren |
| Follow up | **Follow up** (ongewijzigd) |
| Open | **Todo** (tickets die actief werk vereisen) |
| Open – From close | **Todo**, maar te volgen via de nieuwe kolom en het nieuwe filter "Previous Status" |
| Open – From follow up | **Todo**, maar te volgen via de nieuwe kolom en het nieuwe filter "Previous Status" |
| Waiting for customer | **Wait for Customer** (ongewijzigd) |
| *N.v.t.* | **Waiting for Supplier** (nieuw) |
| *N.v.t.* | **Waiting for Internal Team** (nieuw) |

De volledige geschiedenis van alle statuswijzigingen van een ticket vindt u op de detailpagina van het ticket.


## 2. Nieuwe wachtstatussen en instelbare opvolgtijden {#2-new-waiting-statuses--configurable-follow-up-times}

We hebben twee nieuwe statussen toegevoegd, zodat u nauwkeuriger kunt bijhouden waar uw team op wacht:

*   **Waiting for Supplier**
*   **Waiting for Internal Team**

Deze nieuwe statussen werken precies zoals de bestaande status **Follow up**, maar maken nauwkeurigere rapportages en een beter beheer van het werkproces mogelijk.
U kunt de nieuwe wachtstatussen (**Waiting for Internal Team, Waiting for Supplier**) uitschakelen als u ze niet nodig hebt.


### Standaardtijden instellen {#setting-default-times}

U kunt nu standaardtijden voor opvolging instellen voor de statussen **Follow up**, Waiting for Supplier en Waiting for Internal Team.

De standaardwachttijd voor alle drie de statussen kunt u op twee niveaus instellen:
  1.  **Niveau van de shop owner:** een globale standaard voor alle shops.
  2.  **Shopniveau:** een instelling voor een afzonderlijke shop, die de standaard van de shop owner overschrijft.

<img src={require("/img/ticket-waiting-configuration.png").default} height="" width="800" />


#### Reactietijden per leverancier {#supplier-specific-response-times}

Voor nauwkeurige controle kunt u per leverancier een eigen reactietijd instellen.
De opvolgtijd van een leverancier is gebaseerd op een SLA met standaard **werktijden: 9:00 tot 18:00 uur, alleen op werkdagen**. Buiten deze tijden staat het aftellen tot het tijdstempel `Remove from follow up` stil.

**Deze functie gebruiken:**

1.  Ga naar de detailpagina van de leverancier en stel de verwachte reactietijd in.
2.  Als u een ticket aan die leverancier koppelt en de status op **Waiting for Supplier** zet (zonder zelf een tijd te kiezen), berekent het systeem automatisch de streefdatum en -tijd op basis van de ingestelde wachttijd van de leverancier en de standaard-SLA.
3.  Een label op het ticket toont wanneer het automatisch terugkeert naar **`Todo`**.

<img src={require("/img/ticket-details-follow-up-time-badge.png").default} height="" width="800" />

:::info[Tip]

Als het veld voor de leverancier niet zichtbaar is op de detailpagina van het ticket, schakelt u het in bij Shop > Communication > Tickets > Visibility of Fields Settings.

:::

#### Waiting for Internal Team {#waiting-for-internal-team}

De status Waiting for Internal Team gebruikt de SLA die is ingesteld voor de shop waarin het ticket is aangemaakt.
Als u bijvoorbeeld een tijd van 8 uur voor "remove from follow up" instelt, berekent het systeem het streeftijdstip door alleen de resterende werkuren van de huidige dag te tellen en verder te tellen in de volgende werkdagen, tot de 8 werkuren zijn bereikt.


## 4. Beter volgen en meer zicht {#4-enhanced-tracking-and-visibility}

**Kolom Previous Status**

Aan de tickettabel is een nieuwe kolom **"Previous Status"** toegevoegd. U kunt tickets ook filteren op zowel hun huidige als hun vorige status. Zo vindt u eenvoudig bijvoorbeeld alle tickets die vanuit Closed zijn heropend ("Reopened from Closed").

<img src={require("/img/tickets-top-filter-boxes.png").default} height="" width="800" />

**Bijna verlopen of verlopen**

De filtervakken bovenaan geven nu meer detail door onderscheid te maken tussen tickets die bijna verlopen (Expiring) en tickets die zijn verlopen (Expired).

* **Todo**-tickets gebruiken het SLA-tijdstempel dat wordt ingesteld wanneer het ticket wordt aangemaakt of heropend.
* Tickets met **Follow up, Waiting for Supplier en Waiting for Internal Team** worden als "Expiring" gemarkeerd als er minder dan 2 uur over is voordat ze automatisch teruggaan naar Todo.

**Herinneringen bij Wait for Customer**

De status **"Wait for Customer"** krijgt niet meer het tijdstempel "Closed". Het filtervak bovenaan kan nu twee extra kolommen tonen met het aantal tickets dat op de klant wacht en waarvoor de 1e of 2e herinneringsmail is verstuurd.

## 5. Verbeterd filter in de tickettabel {#5-enhanced-tickets-grid-filter}

Het filter in de tickettabel is flink verbeterd en duidelijker en krachtiger geworden, vooral bij het filteren op status.

### Wat hetzelfde blijft {#what-remains-the-same}

De volgende filtervelden zijn grotendeels ongewijzigd:
- Employee en Employee Group (Team)
- Customer
- Priority
- Type
- Categories
- Task
- Date Range

### Wat is verbeterd: filteren op status {#what-has-been-improved-status-filtering}

**Voorheen:** het oude filter had aparte velden die vaak verwarrend waren:
- Een veld voor **"All Open Tickets," "All Closed Tickets," "All Tickets"**
- Een apart veld om op een bepaalde **Ticket Status** te filteren

Dat zorgde voor verwarring: als u bijvoorbeeld "All Open Tickets" en de status "Closed" selecteerde, kreeg u geen resultaten.

**Nu:** we hebben dit samengevoegd en uitgebreid tot één krachtig veld **Status**.

- **Basisstatussen:** de lijst met statussen toont nu zowel uw eigen statussen als de onderliggende **basisstatussen** (bijvoorbeeld `Todo`, `Closed`, `Wait for Customer`).
- **Knop "All Open Statuses":** met één knop selecteert u direct alle niet-gesloten statussen.
- **Selectievakje voor omkeren:** u kunt uw selectie omkeren. Selecteer bijvoorbeeld "All Open Statuses" en vink het vakje voor omkeren aan om **alleen gesloten tickets** te filteren.
- **Filteren op vorige status:** met een nieuw veld filtert u tickets op hun status *vóór* de huidige status, voor een krachtige analyse van het werkproces (bijvoorbeeld "Zoek alle tickets die eerder gesloten waren").
- Met het veld **Due State** filtert u tickets op hun termijn. U vindt nu eenvoudig tickets die op tijd zijn (**On time**), bijna verlopen (**Expiring**) of verlopen (**Expired**).

<img src={require("/img/tickets-filters-updated-not-closed.png").default} height="" width="800" />


Met deze wijzigingen ziet u eenvoudiger wat er met elk ticket moet gebeuren. U volgt uw supportwerk duidelijker en krijgt dingen sneller gedaan.
