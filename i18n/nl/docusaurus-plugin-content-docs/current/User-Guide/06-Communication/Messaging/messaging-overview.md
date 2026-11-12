---
sidebar_position: 1
slug: /docs/messaging-overview
description: "Berichten in ShopCtrl via WhatsApp en webchat: inkomende chats verdelen, berichten koppelen aan orders, tickets en klanten, en de geschiedenis op één plek bewaren."
---

# Overzicht van berichten

ShopCtrl ondersteunt meerdere berichtkanalen:
* WhatsApp
* Webchat

Rechtstreeks berichten sturen via een webchatwidget zorgt voor een persoonlijk contact met klanten die hulp zoeken. Het is een snelle en effectieve manier om te helpen zonder hun ervaring te onderbreken. En met WhatsApp biedt u uitstekende klantenservice na de verkoop.
Met de integratie met MessageBird kunt u chatbots maken en de klantenservice automatiseren.

Met de berichtfuncties van ShopCtrl kunt u:
* Inkomende chatverzoeken verdelen over beschikbare medewerkers
* Inkomende berichten koppelen aan bestaande orders, tickets en klanten
* De communicatiegeschiedenis met een klant over alle kanalen op één plek bijhouden
* Chats overdragen tussen medewerkers
* De wachttijd van klanten bijhouden

### Verdeling van chatverzoeken {#chat-requests-distribution}
De huidige instellingen voor chatverdeling werken zo: inkomende chatverzoeken worden gelijk verdeeld over alle beschikbare medewerkers. Medewerkers met de minste openstaande gesprekken krijgen nieuwe vragen tot ze gelijk zijn met de andere teamleden.
U kunt de werkbelasting per medewerker aanpassen door het aantal slots te wijzigen in [de configuratie van de shop](./messaging-configuration.md#how-to-change-the-number-of-slots-for-open-conversations).

Een medewerker geldt als **beschikbaar** als aan deze voorwaarden is voldaan:
- De medewerker heeft chatrechten voor de shop.
- De medewerker is ingelogd.
- De status van de medewerker staat op beschikbaar.
- De medewerker heeft minstens één vrij slot voor een nieuw chatverzoek.

Als er geen medewerkers beschikbaar zijn voor berichten, krijgt de klant de melding "No employee available". Deze melding kunt u instellen in de FlowAI-flows van de betreffende shop. Het bericht kan verschillen afhankelijk van de ingestelde openingstijden.

:::warning[**Let op**]

Als er geen medewerkers beschikbaar zijn of alle medewerkers volle slots hebben, worden inkomende chatverzoeken wel ontvangen maar niet toegewezen. Open het filter **Not Assigned & Open** om de lijst met niet-toegewezen chatverzoeken te bekijken.

:::

Een medewerker die niet beschikbaar is:
* Krijgt geen inkomende chatverzoeken.
* Kan geen gesprekken overgedragen krijgen.
* Krijgt wel heropende gesprekken van terugkerende klanten.

#### Heropende gesprekken {#reopened-conversations}
Nadat een gesprek is afgerond en gesloten, kan een klant terugkomen met extra vragen. Na een nieuw bericht van de klant wordt het gesprek heropend en getoond in de lijst met gesprekken van de toegewezen medewerker, ongeacht de beschikbaarheid van de medewerker en het aantal vrije slots. Het aantal heropende gesprekken is ook niet beperkt tot het aantal slots. Zo worden terugkerende chatverzoeken nooit gemist en kunnen ze direct worden opgepakt.

:::warning[**Let op**]

Als de medewerker die aan berichten is gekoppeld op een bepaalde dag afwezig is, controleer dan zijn of haar heropende, ongelezen gesprekken en draag ze over aan beschikbare medewerkers.

:::
