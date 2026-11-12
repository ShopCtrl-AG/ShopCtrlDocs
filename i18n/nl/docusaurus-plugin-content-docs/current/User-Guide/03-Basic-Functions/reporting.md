---
sidebar_position: 3
slug: /docs/reporting
description: "Standaardrapporten en rapporten op maat in ShopCtrl, hoe toegang per rol werkt, en rapporten exporteren naar pdf, Excel of csv of ze per e-mail inplannen."
---

# Rapportages

Er zijn een aantal standaardrapporten beschikbaar over verschillende onderwerpen. U kunt ShopCtrl ook vragen om rapporten op maat te maken.
De meeste rapporten hebben een eigen autorisatie-item, zodat u de toegang tot deze rapporten alleen aan een bepaalde medewerkersrol kunt geven.
U kunt het rapport downloaden als **pdf**-, **Excel**- of **csv**-bestand, of het rechtstreeks vanuit het rapportvenster e-mailen.

Met de dienst **Mail Scheduler** kunt u ook een geplande taak instellen die automatisch gegenereerde rapporten met een bepaald interval per e-mail verstuurt.

De namen van de rapporten en hun parameters staan in het Engels, zoals ze in ShopCtrl worden weergegeven.

### Verkoop {#sales}

<details id="sales-overview-report">
  <summary> Sales overview report </summary>

Het rapport Sales overview geeft een overzicht van de totale en maandelijkse verkoop per shop en per opgegeven jaar, in de basisvaluta van de shop owner. Het rapport toont de totale verkoop van het lopende jaar en de lopende maand tot nu toe.
U ziet het totale aantal orders en de verkoop per maand, en de gemiddelde verkoop per dag in een maand.
Het rapport bevat twee kolomgrafieken: een met het verloop van de totale verkoop per maand en jaar, en een met het totale aantal verkopen per maand en jaar.

Parameters van het rapport:

- Shops
- Years
- Order type

![Rapport Sales overview](/img/sales-overview-report.png)

</details>

<details id="invoice-stats-overview-report">
  <summary> Invoice stats overview report </summary>

Het rapport geeft een overzicht van het totaal aan uitgebrachte facturen per maand en per jaar, en berekent het totaal gefactureerde bedrag van het lopende jaar en de lopende maand tot nu toe.
De totalen geven ook een beeld van de bedragen van openstaande facturen.

Twee grafieken tonen het verloop van het totaal gefactureerde orderbedrag per maand en jaar, en het totale aantal facturen per maand en jaar.

Parameters van het rapport:

- Shops
- Years

![Rapport Invoice stats overview](/img/invoice-stats-overview-report-1.png)

</details>

<details id="product-overview-report">
  <summary> Product overview report </summary>

Dit rapport toont de top 10 van meest verkochte producten en de top 10 van producten met de hoogste omzet per jaar.

Parameters van het rapport:

- Shop
- Years

![Rapport Product overview](/img/product-overview-report.png)

</details>

<details id="sold-products-per-day-report">
  <summary> Sold products per day report </summary>

Een lijst met producten die binnen de opgegeven periode in de geselecteerde shop(s) zijn verkocht.
Standaard is de periode 1 dag. Als u een langere periode kiest, kan het laden van de gegevens veel tijd kosten.

![Rapport Sold products per day](/img/sold-products-per-day-report.png)

</details>

<details id="affiliate-orders-report">
  <summary> Affiliate orders report </summary>

Het rapport toont en berekent het totaal, in de basisvaluta, van de orders die verschillende affiliates u hebben opgeleverd.

Parameters van het rapport:

- Shops
- Affiliates
- Date Range

![Rapport Affiliate orders](/img/affiliate-orders-report.png)

</details>

<details id="transport-costs">
  <summary> Transport costs </summary>

Het rapport groepeert verzonden orders per transportcategorie en telt de transportkosten per vervoerder op.
Parameters van het rapport:

- Date Range
- Shop

![Rapport Transport costs](/img/transport-costs-report-1.png)

</details>

<details id="cancelled-orders">
  <summary> Cancelled orders </summary>

Het rapport houdt alle geannuleerde orders van de opgegeven shop(s) en periode bij en toont het totaalbedrag in de basisvaluta.
Het rapport geeft ook een overzicht van de oorzaken van gemiste verkopen.
De tabel **Ratios** toont elke annuleringsreden met het bijbehorende percentage.

Om dit rapport te maken, legt u annuleringsredenen vast op de pagina **Configuration-> Statuses > Order cancel reasons**. Maak het opgeven van een reden bij het annuleren van orders verplicht voor medewerkers door op het tabblad **Shop Details page > Order Management** de optie **Requires a reason on cancelation** in te schakelen.

Parameters van het rapport:

- Shop
- Period

![Rapport Cancelled orders](/img/cancelled-orders-report.png)

</details>

<details id="order-credit-overview">
  <summary> Order credit overview </summary>

Het rapport Order credit overview toont een lijst met gecrediteerde orders voor de opgegeven shop(s) en periode. Als er bij het aanmaken van retouren of terugbetalingen creditredenen zijn gebruikt, worden ook die redenen getoond.
[Retour- en creditredenen configureren](/User-Guide/07-Fulfillment/Returns/configure-returns.md#return-reasons)
Parameters van het rapport:

- Shop
- Period

![Rapport Order credit overview](/img/order-credit-overview-report.png)

</details>

### Rapportage over serviceniveaus {#service-level-reporting}

<details id="service-level">
  <summary> Service level </summary>

Prestatiegegevens over de service level agreement voor de geselecteerde shops, gegroepeerd per medewerker. Dit rapport bevat gegevens over het aantal telefoongesprekken, de afhandeltijd van e-mails en het aantal SLA-uren tot het eerste antwoord.
De kolom met het totale serviceniveau in % toont het percentage vragen dat een medewerker binnen de SLA-uren heeft afgehandeld.

De reactietijd van de SLA wordt op shopniveau ingesteld. Zie [Serviceniveau](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/01-Organization-Settings/service-level.md) voor meer informatie.

Parameters van het rapport:

- Shop (selectie van shops in het deelvenster met verkoopkanalen)
- Date range

![Rapport Service level](/img/service-level-report.png)

![Rapport Service level, deel 2](/img/service-level-report-1.png)

</details>

<details id="ticket-statistics">
  <summary> Ticket statistics </summary>

Het rapport bestaat uit 13 grafieken met ticketstatistieken.

| Grafiek                          | Omschrijving                                                                                    |
| -------------------------------- | ---------------------------------------------------------------------------------------------- |
| Open tickets                     | Grafiek van het totaal aantal openstaande tickets in de opgegeven periode voor de geselecteerde shop(s) |
| Expired tickets                  | Grafiek van het totaal aantal verlopen tickets in de opgegeven periode voor de geselecteerde shop(s) |
| Closed tickets                   | Grafiek van het totaal aantal gesloten tickets in de opgegeven periode voor de geselecteerde shop(s) |
| Follow-up tickets                | Totaal aantal tickets per dag dat als follow-up is gemarkeerd, in de opgegeven periode voor de geselecteerde shop(s) |
| Unassigned tickets               | Totaal aantal niet-toegewezen tickets per dag voor de geselecteerde shop(s)                    |
| Avg ticket open minutes          | Gemiddelde tijd in minuten dat tickets openstonden, per categorie                              |
| Avg ticket open minutes by group | Gemiddelde tijd in minuten dat tickets openstonden, per medewerkersgroep                       |
| Avg first response time          | Gemiddelde tijd in minuten tot het eerste antwoord, per categorie                              |
| VoIP calls                       | Aantal VoIP-gesprekken per dag in een periode                                                  |
| Avg call duration                | Gemiddelde gespreksduur per dag in een periode                                                 |
| Mails                            | Totaal aantal uitgewisselde e-mails per dag in een periode                                     |
| Chat conversations               | Totaal aantal chatgesprekken per dag in een periode                                            |
| Chat messages                    | Totaal aantal chatberichten per dag in een periode                                             |
| Contact moments                  | Verdeling van contactmomenten over de tijd                                                     |

![Rapport Ticket statistics](/img/ticket-statistics-report-1.png)

</details>

<details id="actual-support-statistics">
  <summary> Actual support statistics </summary>

Actual support statistics geeft een momentopname van de dag met de actuele voortgang van de support.
Het rapport verzamelt gegevens over tickets en over chat- en VoIP-verzoeken die door medewerkers en klanten zijn gestart.
De grafiek toont de toename van het aantal openstaande tickets op de huidige dag.

![Rapport Actual support statistics](/img/actual-support-statistics-report-1.png)

</details>

<details id="nps-overview-report">
  <summary> NPS overview report </summary>

Het rapport **NPS overview** toont hoe klanten uw support in een gekozen periode hebben beoordeeld. Het rapport omvat alle tickets die in de geselecteerde periode zijn **gesloten**.
Verzoeken om feedback worden automatisch verstuurd nadat een ticket is gesloten; zie [Net Promoter Score (NPS)-feedback voor uw shops configureren](/User-Guide/06-Communication/Tickets/nps.md) voor meer informatie.

Parameters van het rapport:

- Shops
- Date range or period (standaard de huidige maand)

**Samenvatting**

Het rapport begint met vijf cijfers. Neem als voorbeeld één shop in september 2026:

| Cijfer          | Voorbeeld | Betekenis                                                     |
| --------------- | ------- | ------------------------------------------------------------- |
| NPS score       | 16,67   | De Net Promoter Score voor de periode                          |
| Response rate   | 60,00%  | Aandeel van de verstuurde feedbackverzoeken dat een beoordeling opleverde |
| Responses       | 6       | Ontvangen beoordelingen                                        |
| Closed tickets  | 10      | Alle tickets die in de periode zijn gesloten                   |
| Requests sent   | 10      | Feedbackverzoeken die voor die tickets zijn verstuurd          |

Van onder naar boven gelezen: er zijn 10 tickets gesloten, voor alle 10 is een feedbackverzoek verstuurd, en 6 klanten hebben hun support beoordeeld: een respons van 6 / 10 = 60%.

De score zelf krijgt een kleur volgens de legenda ernaast: **rood** onder 0 (aandacht nodig), **oranje** van 0 tot 30 (verbetert), **groen** boven 30 (uitstekend).

**Hoe de score wordt berekend**

Elke beoordeling valt in een van drie groepen, en de score is het percentage promotors min het percentage criticasters. Passives tellen mee in het totale aantal reacties, maar niet in de berekening zelf. Dat is bewust: de NPS meet de verhouding tussen enthousiastelingen en critici.

In het voorbeeld waren de 6 reacties:

| Groep      | Beoordelingen | Reacties | Aandeel |
| ---------- | ------- | --------- | ----- |
| Promotors  | 9-10    | 2         | 33%   |
| Passives   | 7-8     | 3         | 50%   |
| Criticasters | 1-6   | 1         | 17%   |

NPS = 33% promotors - 17% criticasters = **16,67**

De score loopt van -100 (alle respondenten zijn criticasters) tot +100 (alle respondenten zijn promotors). Een score van 0 betekent dat promotors en criticasters elkaar precies opheffen.

**Grafieken en uitsplitsing**

**Rating distribution** toont deze drie groepen in een cirkeldiagram, zodat u ziet waaruit de score bestaat. Een score van 0 met evenveel promotors als criticasters is een heel andere situatie dan een score van 0 die volledig uit passives bestaat.

**NPS trend over time** toont de score per maand. Omdat per maand wordt gegroepeerd, toont een periode korter dan een maand één waarde.

**NPS by sales channel** toont de score, het aantal gesloten tickets en het aantal reacties voor elke geselecteerde shop, zodat u kanalen in één overzicht kunt vergelijken.

:::note

Verzoeken om feedback worden een instelbaar aantal dagen nadat een ticket is gesloten verstuurd, en klanten hebben tijd nodig om te reageren. De cijfers voor de huidige periode blijven daarom nog een tijd na het einde van de periode stijgen. Vergelijk afgesloten perioden voor een eerlijk beeld.

:::

![Rapport NPS overview](/img/nps-report.png)

</details>

<details id="communication-per-order">
  <summary> Communication per Order </summary>

Een lijst met orders van een bepaalde shop binnen de geselecteerde periode, waarbij het aantal communicatiemomenten hoger is dan het opgegeven minimum.
Hoe vaak welk aantal communicatiemomenten per order voorkomt, ziet u in de grafiek **Order communication distribution**.

Parameters van het rapport:

- Shop
- Date range
- Min. Amount - minimaal totaal aantal communicatiemomenten per order

![Communicatie per order](/img/communications-per-order.png)

</details>

<details id="event-category-report">
  <summary> Event category report </summary>

Het rapport groepeert communicatiemomenten, zoals e-mails en VoIP-gesprekken, per e-mailcategorie over alle geselecteerde shops.

Parameters van het rapport:

- Shop
- Date range

![Rapport Event category](/img/event-category-report.png)

</details>

<details id="event-overview-report">
  <summary> Event overview report </summary>

Het rapport groepeert communicatiemomenten, zoals e-mails en VoIP-gesprekken, per shop en per categorie over een gekozen periode.

Parameters van het rapport:
*  Shop
*  Date range

![Rapport Event overview](/img/event-overview-report.png)

</details>

<details id="events-distribution-report">
  <summary> Events distribution report </summary>

Het rapport Events distribution bevat een vlakdiagram met de verdeling van communicatiemomenten per shop over een jaar. De drukste maanden zijn groen gemarkeerd.

![Rapport Events distribution](/img/events-distribution-report.png)

</details>

<details id="event-forecast-report">
  <summary> Event forecast report </summary>

 Het rapport Event Forecast bevat een lijndiagram met het totale aantal communicatiemomenten over een jaar, gegroepeerd per shop en maand.

![Rapport Event forecast](/img/event-forecast-report.png)

</details>

<details id="events-per-order-report">
  <summary> Events per order report </summary>

Het rapport bevat een samenvatting van alle communicatiemomenten, zoals VoIP-gesprekken en e-mails, en berekent het gemiddelde aantal communicatiemomenten per order.

![Rapport Events per order](/img/events-per-order-report.png)

</details>

<details id="events-per-sync-source">
  <summary> Events per sync source </summary>

 Het rapport Events per synchronization source geeft een overzicht van de communicatiemomenten die via synchronisatiekanalen zijn binnengekomen.

![Rapport Events per sync source](/img/events-per-syncsource-report.png)

</details>

<details id="shop-event-time">
  <summary> Shop event time </summary>

Het rapport **Shop event time** berekent voor een of meer shops de gemiddelde duur van VoIP-gesprekken en de tijd die aan het opstellen van e-mails is besteed, in een opgegeven periode.
 Parameters van het rapport:
*  Shop
*  Date range

![Rapport Shop event time](/img/shop-event-time-report.png)

</details>

### Prestaties en activiteiten van medewerkers {#employee-performance-and-activities}

<details id="activity-journal-report">
  <summary> Activity journal report </summary>

Het rapport vat samen hoeveel uur medewerkers in een bepaalde periode aan verschillende activiteiten hebben besteed. Activiteiten worden vastgelegd en bijgehouden op het tabblad **General > Activities**.
 U kunt een datumbereik of periode, het detailniveau en een categorie opgeven waarvoor u een gedetailleerd rapport wilt.

 Parameters van het rapport:
*  Shop
*  Date range or period
*  Level of detail
*  Category

![Rapport Activity journal](/img/activity-journal-report.png)

</details>

<details id="employee-performance-report">
  <summary> Employee performance report </summary>

Het rapport Employee performance geeft het totale aantal afgehandelde telefoongesprekken en e-mails, gegroepeerd per medewerker en shop(s).

Parameters van het rapport:

- Shop
- Date Range
- Detail (standaard 3)

![Rapport Employee performance](/img/employee-performance-report.png)

</details>

<details id="employee-productivity-report">
  <summary> Employee productivity report </summary>

Het rapport Employee productivity geeft het meest gedetailleerde overzicht van de communicatie per e-mail per medewerker. Het rapport is gegroepeerd per medewerker en toont de verstuurde e-mails en de bijbehorende gesloten tickets.

Voor de lijst met uitgewisselde e-mails zijn er een aantal subrapporten. Om een subrapport te openen, klikt u in het rapport op het bijbehorende aantal e-mails:

- Forwarded Mail
- Handled Mail
- New Mail
- Reply Mail
- Tickets Closed Detail
- Total Mail Sent

![Rapport Employee productivity](/img/employee-productivity-report.png)

Subrapport: nieuwe e-mails die de medewerker heeft verstuurd.
![Subrapport Employee productivity](/img/employee-productivity-sub-report.png)

</details>

<details id="employee-overview-report">
  <summary> Employee overview report </summary>

Dit rapport geeft een samenvatting van de communicatiemomenten die medewerkers hebben afgehandeld, met gedetailleerde gegevens over de duur van telefoongesprekken en de afhandeltijd van e-mails. Het rapport toont ook het aantal gesloten tickets per medewerker.
De gegevens zijn gegroepeerd per medewerkersgroep. Als een medewerker in meerdere groepen zit, tellen zijn of haar gegevens mee in het totaal van elke groep.

Parameters van het rapport:

- Employee group
- Date Range

![Rapport Employee overview](/img/employee-overview-report.png)

</details>

<details id="employee-event-time">
  <summary> Employee event time </summary>

Het rapport <b>Employee event time</b> geeft statistieken over het totale aantal communicatiemomenten (VoIP-gesprekken en e-mails) dat medewerkers in de geselecteerde periode hebben afgehandeld. Het rapport berekent ook de gemiddelde tijd die aan het afhandelen van e-mails en het beantwoorden van gesprekken is besteed.

Parameters van het rapport:

- Employee group
- Date Range

![Rapport Employee event time](/img/employee-event-time-report-1.png)

</details>

### Rapporten over communicatiestatistieken {#reports-on-communication-statistics}

#### Telefoon - VoIP {#phone---voip}

<details id="phone-calls-specification">
  <summary> Phone calls specification </summary>

Gedetailleerd rapport van ontvangen en beantwoorde gesprekken, met uitgebreide gespreksgegevens zoals de gespreksduur en de gebelde nummers.
Parameters van het rapport:

- Shop
- Date Range Or Period

![Rapport Phone calls specification](/img/phone-calls-specification-report.png)

</details>

<details id="phone-statistics">
  <summary> Phone statistics </summary>

Dagelijks rapport met wachtrijstatistieken.
Geeft het percentage onbeantwoorde gesprekken, met twee grafieken die het aandeel gemiste gesprekken tonen.
Standaard is de periode de huidige maand.

Parameters van het rapport:

- Shop
- Date Range Or Period

![Rapport Phone statistics](/img/phone-statistics-report.png)

</details>

<details id="phone-wait-times">
  <summary> Phone wait times </summary>

Het rapport vergelijkt de wachttijd van beantwoorde telefoongesprekken met een vooraf ingestelde normale reactietijd.

Parameters van het rapport:

- Shop
- Normal response time, opgegeven in seconden
- Date Range

![Rapport Phone wait times](/img/phone-waittimes-report.png)

</details>

#### Rapporten over het gebruik van wikiartikelen {#reports-on-wiki-item-usage}

<details id="wiki-item-usage">
  <summary> Wiki item usage </summary>

Het rapport geeft statistieken over de 5 meest en 5 minst gebruikte wikiartikelen. Standaard is de huidige maand geselecteerd.

Parameters van het rapport:

- Time period

![Rapport Wiki item usage](/img/wiki-item-usage-report.png)

</details>

### Rapporten over voorraad, inkoop en communicatie met leveranciers {#reports-on-inventory-purchasing-and-communication-with-suppliers}

<details id="average-delivery-time-per-supplier">
  <summary> Gemiddelde levertijd per leverancier - Average delivery time per supplier </summary>

Het rapport Gemiddelde levertijd per leverancier geeft statistieken over de laatste 4 leveringen van de leverancier.

![Rapport Gemiddelde levertijd per leverancier](/img/Gemiddelde-levertijd-per-leverancier-report.png)

</details>

<details id="purchase-order-detail-report">
  <summary> Purchase order detail report </summary>

Met het rapport <b>Purchase order detail</b> krijgt u eenvoudig een overzicht van een bepaalde inkooporder, met alle details over de ontvangen hoeveelheden en de producten die nog moeten binnenkomen.

Parameters van het rapport:

- Purchase order ID

Let op: het rapport zoekt niet op de code van de inkooporder, maar op het ID. Dit ID kunt u via de API ophalen, of in de interface uit de kolom ID van de tabel met inkooporders.

![Rapport Purchase order detail](/img/purchase-order-detail-report.png)

</details>

<details id="supplier-mail-statistics">
  <summary> Supplier mail statistics </summary>

Geeft de gemiddelde reactietijd op e-mails van leveranciers. In een apart subrapport staan ook de details van ontvangen e-mails en toegewezen tickets.
Parameters van het rapport:

- Date range
- Shop

![Rapport Supplier mail statistics](/img/supplier-mail-statistics-report.png)

![Subrapport Supplier mail statistics](/img/supplier-mail-statistics-sub-report-1.png)

</details>

<details id="product-stock-expiration-report">
  <summary> Product stock expiration report </summary>

Het rapport **Product stock expiration** maakt deel uit van [Advanced Warehouse](/User-Guide/09-Purchasing/advanced-warehouse.md). Producten worden gegroepeerd op basis van de tijd die resteert tot ze verlopen.

![Rapport Product stock expiration](/img/Product_stock_Expiration_report.png)

</details>

### Configuratierapporten {#configuration-reports}

<details id="authorization-report">
  <summary> Authorization report </summary>

Het rapport geeft een overzicht van de bestaande rollen en rechten. De lijst bevat alle gedetailleerde rechten die aan de rol zijn toegekend.
Zie [Rollen en rechten van medewerkers](/User-Guide/02-ShopCtrl-Setup/01-Authentication-and-Employee-Management/02-Roles-and-Permissions/understanding-employee-roles-and-permissions.md) voor meer informatie.

![Rapport Authorization](/img/authorization-report.png)

</details>


Geavanceerde rapportagemogelijkheden vindt u in onze aparte [Resources voor rapportontwikkelaars](/User-Guide/03-Basic-Functions/Advanced-reporting-hidden/advanced-reporting.md).
