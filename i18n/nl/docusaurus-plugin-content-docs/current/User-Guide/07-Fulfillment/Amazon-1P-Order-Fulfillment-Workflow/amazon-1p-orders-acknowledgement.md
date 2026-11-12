---
sidebar_position: 2
slug: /docs/amazon-1p-orders-acknowledgement
description: "Bevestig Amazon 1P-inkooporders in ShopCtrl binnen de termijn van 24 uur van Amazon, inclusief automatische bevestiging van bulk buy-orders."
---

# Bevestiging van Amazon 1P-orders


Het bevestigen (acknowledgement) van orders uit Amazon 1P Vendor Central is een essentiële eerste stap in de workflow van ShopCtrl. Hiermee bevestigt u de ontvangst en acceptatie van inkooporders die Amazon via het platform Vendor Central uitbrengt.
Deze bevestiging is belangrijk, omdat de verkoper zich daarmee verplicht de order uit te voeren volgens de voorwaarden in de inkooporder. Na de bevestiging kan de order verder door het fulfilmentproces, met inpakken en verzenden, zodat deze op tijd bij het fulfilmentcentrum van Amazon aankomt.

Volgens de [aanbeveling van Amazon](https://developer-docs.amazon.com/sp-api/docs/vendor-retail-procurement-apis-v1-use-case-guide#submitacknowledgement) verstuurt u de bevestiging zo snel mogelijk:
> Amazon verwacht dat u de bevestiging zo snel mogelijk indient, uiterlijk binnen 24 uur. De bevestiging moet een nauwkeurig beeld geven van de werkelijke verzendhoeveelheden en -datums.

## Automatische bevestiging van orders {#automatic-order-acknowledgement}
ShopCtrl biedt verschillende manieren om orders automatisch te bevestigen, afhankelijk van het type inkomende order.

### Bevestiging van Bulk Buy-orders {#bulk-buy-orders-acknowledgement}

Bulk Buy-orders worden automatisch volledig bevestigd zodra ze zijn herkend en gekoppeld aan de bijbehorende afgeronde Bulk Buy Offers.

Wijzigingen die na het picken van de Bulk Buy-offer optreden, worden aan Amazon doorgegeven nadat het pickbestand is verwerkt. Dit leidt tot een automatische nieuwe bevestiging.

Om nauwkeurigheid te garanderen en te voorkomen dat onvolledige bulk buy offers meedoen in de automatische bevestiging, koppelt ShopCtrl geen orders aan bulk buy offers die niet zijn afgerond. Alleen afgeronde bulk buy offers komen in aanmerking voor koppeling en daarna voor automatische bevestiging van de bijbehorende orders.

### Bevestiging van wekelijkse orders {#weekly-orders-acknowledgement}

Wekelijkse orders worden automatisch bevestigd nadat ShopCtrl het pickbestand van de order uit een extern Warehouse Management System (WMS) heeft verwerkt. De [pickintegratie](/User-Guide/02-ShopCtrl-Setup/05-Fulfillment/integration-with-wms-via-ftp.md) corrigeert de hoeveelheden van orderregels naar de hoeveelheid die beschikbaar is voor verzending en bevestigt de order aan Amazon.

Na het verwerken van het pickbestand worden de hoeveelheden van de orderregels aangepast aan de hoeveelheden in het pickbestand.
Voor hoeveelheden die niet kunnen worden geleverd, worden creditregels aangemaakt. Meer dan besteld is niet toegestaan.

<img src={require("/img/credited-order-rows-1p-acknowledgement.png").default} height="" width="800" />

Als de hoeveelheid van een product niet in het bestand staat, wordt deze verlaagd naar 0 en met de afwijzingsreden 'TemporarilyUnavailable' naar Amazon gestuurd, zodat het product in de catalogus van Amazon blijft.

 Bij fouten tijdens het verwerken van het pickbestand, zoals te grote hoeveelheden, maakt ShopCtrl een melding bij de order aan. Deze melding vestigt de aandacht op de afwijking en laat de betrokken medewerkers weten dat er meer is gepickt dan verwacht.

<img src={require("/img/excess-qty-acknowledgement.png").default} height="" width="800" />

Automatisch zendingen aanmaken: als onderdeel van de WMS-integratie kan ShopCtrl bij het verwerken van het pickbestand automatisch zendingen aanmaken. De order moet zijn toegewezen op het moment dat de zending wordt aangemaakt.
Het toewijzen en het aanmaken van zendingen kunt u ook met [triggers](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/index.md) regelen, zodat u ze kunt afstemmen op uw interne processen en eisen.

Zowel het aanmaken van zendingen als het verwijderen van eerder aangemaakte zendingen bij een nieuwe bevestiging stelt u op magazijnniveau in. Zie de pickconfiguratie in [Integratie met een WMS via FTP](/User-Guide/02-ShopCtrl-Setup/05-Fulfillment/integration-with-wms-via-ftp.md#shopctrl-warehouse-integration-configuration).


### Bevestiging van niet-gedefinieerde orders {#undefined-orders-acknowledgement}

Niet-gedefinieerde orders (Undefined) kunnen ook worden bevestigd nadat het pickbestand is verwerkt, of op elk moment in de workflow handmatig door een medewerker. Als de order wordt aangepast om de verschillen op te lossen die automatische koppeling verhinderden, en de order handmatig aan de bulk buy offer kan worden gekoppeld, stuurt u vervolgens handmatig een bevestiging naar Amazon, zonder te wachten tot het picken is afgerond.

### Orders opnieuw bevestigen: {#re-acknowledgment-of-orders}

In ShopCtrl kunt u orders na de eerste bevestiging opnieuw bevestigen, vooral als de hoeveelheden zijn gewijzigd. Latere pickbestanden voor dezelfde order worden behandeld als verzoeken om een nieuwe bevestiging.
Let op: u kunt alleen lagere hoeveelheden doorgeven dan de hoeveelheden die al zijn bevestigd.

## Orders handmatig bevestigen {#manual-order-acknowledgement}

Dit deel van het proces kunt u handmatig uitvoeren vanuit de orderdetails. Let op: alle hoeveelheden in de order worden bevestigd, behalve de gecrediteerde.
Om de hoeveelheid van een orderregel handmatig te verlagen, voegt u er dus een creditregel aan toe en geeft u de afgewezen hoeveelheid op.
Zo houdt u bij hoeveel er is gevraagd en hoeveel er wordt verzonden.
Als na handmatige controle alle correcties in de order zijn doorgevoerd, gaat u verder met de bevestiging:

1. Log in als medewerker met het recht om 1P-orders te bevestigen.
2. Zoek en open de order die moet worden bevestigd.
3. Controleer de hoeveelheden in de order. Maak creditregels aan voor producten die niet kunnen worden geleverd en moeten worden afgewezen, met de afgewezen hoeveelheid.
4. Als u wijzigingen hebt gemaakt, slaat u de order op met **save**.
5. Ga naar het tabblad Topic > Amazon 1P > General.
6. Klik op de knop **Accept** om de bevestiging naar Amazon te sturen.
7. Bevestig de actie wanneer daarom wordt gevraagd. De status van de bevestiging verandert in 'In progress'.

De bevestiging wordt op de achtergrond via geplande synchronisatieverzoeken naar Amazon gestuurd. Na het versturen verandert de status in 'Submitted' en worden de knoppen uitgeschakeld om dubbele verzending te voorkomen.
Na het antwoord van Amazon verandert de status in 'Success' of 'Error'. Bekijk de meldingen voor gedetailleerde informatie over eventuele problemen.

<img src={require("/img/manual-acknowledge-order.png").default} height="" width="800" />

**Een order handmatig afwijzen**

U kunt de hele order ook handmatig **afwijzen** als geen van de producten beschikbaar is. Hiermee worden alle orderregels gecrediteerd en wordt voor alle artikelen in de order een bevestiging met de reden 'temporarily unavailable' naar Amazon gestuurd.

Met deze handmatige procedures hebt u flexibiliteit en controle over het bevestigen, zodat orders nauwkeurig worden afgehandeld en Amazon juist wordt geïnformeerd over de fulfilmentstatus.

Na het bevestigen is de volgende stap in het fulfilmentproces het inpakken en verzenden van de producten naar het betreffende fulfilmentcentrum van Amazon: [Amazon 1P-groepszending](./amazon-1p-group-shipment.md).
