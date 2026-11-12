---
sidebar_position: 2
slug: /docs/packing-instructions
description: "Maak in ShopCtrl inpakinstructies op maat per land van bestemming, product of klant, inclusief eisen voor douane en documenten."
---

# Inpakinstructies

Het ShopCtrl-platform biedt een krachtige en flexibele functie om uw inpakproces te stroomlijnen: inpakinstructies op maat (Customized Packing Instructions). Hiermee maakt u inpakinstructies voor specifieke landen, producten, klanten of magazijnen (leveranciers), zodat u efficiënt inpakt en aan alle eisen voldoet.

Met inpakinstructies op maat stelt u eenvoudig gedetailleerde instructies op voor de specifieke eisen van verschillende bestemmingen, producten of klanten. Of u nu rekening moet houden met uiteenlopende regelgeving, specifieke instructies voor de omgang met producten of voorkeuren van klanten: met deze functie maakt u voor elke zending instructies op maat.

Als shop owner bepaalt u welke gebruikers het recht hebben om inpakinstructies te bekijken, toe te voegen en te verwijderen.

Zo werkt het:

## 1. Inpakinstructies per land {#1-country-specific-packing-instructions}

Door een land van bestemming te selecteren, krijgt u een volledige set inpakrichtlijnen voor die locatie. U vindt hier gedetailleerde informatie over douanevoorschriften, verpakkingsnormen, eisen voor etikettering en andere landspecifieke aandachtspunten, zodat uw zendingen aan de lokale regelgeving voldoen en vlot door de douane gaan.
Voor leveringen buiten de EU is bijvoorbeeld een handelsfactuur verplicht, maar elk importerend land stelt andere eisen aan de documenten. U kunt voor elk land van bestemming waarnaar u goederen exporteert een aangepast handelsfactuurdocument opgeven.

Een inpakinstructie per land aanmaken:

Voordat u bijvoorbeeld een inpakinstructie voor een handelsfactuur (Commercial invoice) aanmaakt, maakt u eerst het documentsjabloon aan. U kunt hierin een aantal merge fields gebruiken die beschikbaar zijn op het moment dat de zending wordt verwerkt.

![Inpakinstructie aanmaken: landen](/img/create-packing-instruction-countries.png)

1.  Log in als gebruiker met het recht om nieuwe inpakinstructies toe te voegen.
2.  Ga naar **Configuration > Transport > Packing instructions**.
3.  Klik op **Add** om een nieuwe instructie aan te maken.
4.  Vul de **Name** van de inpakinstructie in. Deze naam wordt gebruikt als naam van het document op de zendingspagina.
5.  Kies het **Document template** dat samen met de inpakdocumenten wordt aangemaakt.
6.  (Optioneel) Vul een **Shipment Message** in: een waarschuwing die op zendingsniveau wordt getoond.
7.  (Optioneel) Vul een **Shipment Row Message** in: een waarschuwing op het niveau van de zendingsregel. Als er voor de inpakinstructie geen producten of productparameters zijn ingesteld, wordt dit bericht bij elke zendingsregel getoond, ongeacht de producten in de zending.
8.  Ga naar het tabblad **Shops** en kies **Selected Shops** om op te geven voor welke shops deze inpakinstructie geldt. Of laat **All Shops** staan om alle shops mee te nemen.
9.  Op het tabblad **Countries** kiest u de landen van bestemming waarvoor het document, zoals de handelsfactuur, wordt aangemaakt. U kunt kiezen uit:
    1.        All Countries (standaard)
    2.        Countries Outside EU - een vaste, niet-bewerkbare lijst met landen buiten de Europese Unie
    3.        Countries Inside EU - een vaste, niet-bewerkbare lijst met landen binnen de Europese Unie
    4.        Selected Countries - een bewerkbare lijst met landen.
10. Schakel de instructie bovenaan de pagina in met **Enable**.
11. Klik op **Save** of **Save and Close** om de instructie op te slaan.

U kunt de functie testen door een nieuwe zending aan te maken voor een order die aan de regels van de inpakinstructie voldoet. Het nieuwe document om af te drukken verschijnt in het gedeelte **Pack**.
![Handelsfactuur bij de zending](/img/shipment-commercial-invoice.png)

:::warning[Let op]

Inpakinstructies worden alleen toegepast op **nieuwe** zendingen die nog niet zijn gepickt. Als u een document voor een bestaande zending wilt genereren, slaat u de zending op (**save**), zodat opnieuw wordt bepaald welke inpakinstructies van toepassing zijn.

:::

## 2. Inpakinstructies per product {#2-product-specific-packing-instructions}

Verschillende producten kunnen verschillende verpakkingseisen hebben om veilig te worden vervoerd. Met deze functie maakt u inpakinstructies voor afzonderlijke producten of producteigenschappen. Zo kunt u details opnemen zoals verpakkingsmateriaal, voorzorgsmaatregelen bij het hanteren, temperatuureisen of andere speciale instructies voor het artikel dat wordt verzonden.

![Inpakinstructie aanmaken: producten](/img/create-packing-instruction-products.png)

Een inpakinstructie per product aanmaken:

1. Log in als gebruiker met het recht om nieuwe inpakinstructies toe te voegen.
2. Ga naar **Configuration > Transport > Packing instructions**.
3. Klik op **Add** om een nieuwe instructie aan te maken.
4. Vul de **Name** van de inpakinstructie in. Deze naam wordt gebruikt als naam van het document op de zendingspagina.
5. (Optioneel) Kies het **Document template** dat samen met de inpakdocumenten voor het specifieke product wordt aangemaakt.
6. (Optioneel) Vul een **Shipment Message** in: een waarschuwing die op zendingsniveau wordt getoond.
7. Vul een **Shipment Row Message** in: een waarschuwing op productniveau.
8. Ga naar het tabblad **Shops** en kies **Selected Shops** om op te geven voor welke shops deze inpakinstructie geldt. Of laat **All Shops** staan om alle shops mee te nemen.
9. (Optioneel) Op het tabblad **Countries** kiest u de landen van bestemming waarvoor de specifieke instructies worden getoond.
10. (Optioneel) Op het tabblad **Products** geeft u op voor welk(e) product(en) de aanvullende instructies en/of documenten worden getoond.
11. (Optioneel) Op het tabblad **Product properties** kunt u specifieke eigenschappen en hun waarden selecteren (zoals materiaal of een bepaald producttype). De eigenschappen in de lijst worden met OF gecombineerd. Dit betekent dat de instructie wordt getoond als het product in een zendingsregel een van de genoemde eigenschappen heeft.
12. (Optioneel) Beperk het aantal **Customers** waarvoor u de eerder gekozen waarschuwingen en documenten wilt tonen. Standaard is **All** geselecteerd.
13. Schakel de instructie bovenaan de pagina in met **Enable**.
14. Klik op **Save** of **Save and Close** om de instructie op te slaan.

Met duidelijke en beknopte inpakinstructies voor elke situatie hoeft er niet meer te worden gegokt en maakt u minder inpakfouten. Zo stroomlijnt u uw inpakproces, vermindert u vertragingen en werkt u efficiënter.

![Waarschuwingen van inpakinstructies bij de zending](/img/shipment-packing-instructions-warnings.png)

## 3. Inpakinstructies per klant {#3-customer-specific-packing-instructions}

Elke klant kan eigen voorkeuren of specifieke verpakkingswensen hebben. Met inpakinstructies op maat maakt u inpakrichtlijnen per klant. Door specifieke instructies aan elk klantprofiel toe te wijzen, zorgt u voor consistente verpakking en stemt u het proces af op de wensen van elke klant.

Inpakinstructies per klant stelt u op dezelfde manier in als inpakinstructies per land of per product. Op het tabblad Customers geeft u op voor welke klanten waarschuwingen of inpakdocumenten worden getoond.

Met inpakinstructies per klant speelt u in op de voorkeuren en eisen van uw klanten. Door consequent aan hun verwachtingen te voldoen, verhoogt u de klanttevredenheid en versterkt u de relatie.

![Inpakinstructie aanmaken: klanten](/img/create-packing-instruction-customers.png)

## 4. Inpakinstructies per magazijn {#4-warehouse-specific-packing-instructions}

Beheer uw magazijnprocessen efficiënt en werk beter samen met leveranciers met inpakinstructies per magazijn. Met deze functie maakt u niet alleen documenten voor uw interne processen, maar ook instructies op maat voor afzonderlijke leveranciers. Deze documenten sluiten naadloos aan op de geautomatiseerde **dropshipment**-stroom in uw ShopCtrl-omgeving, zodat uw hele toeleveringsketen efficiënter werkt.

Inpakinstructies per magazijn kunnen verschillende regels bevatten, met specifieke instructies voor producten, landen en klanten voor uw eigen magazijn. Inpakinstructies kunnen ook als losstaande richtlijnen dienen voor elke dropshipleverancier. U kunt deze gegenereerde documenten direct met de inkooporder meesturen op het moment dat u een zending voor de order aanmaakt.

![Inpakinstructie aanmaken: magazijn](/img/create-packing-instruction-warehouse.png)

U kunt instellen dat inpakinstructies samen met de andere inkoopdocumenten naar de leverancier worden gestuurd zodra een dropshipment is aangemaakt. Om inpakinstructies in een e-mail naar de leverancier te sturen, schakelt u op de detailpagina van de leverancier de instelling **Dropship Create Packing Slip** in.

### Inpakdocumenten configureren {#configuring-packing-documents}

**Packing documents** zijn alle documenten die in het pakket gaan: de pakbon en de set documenten van de inpakinstructies die op de zending zijn toegepast.
Het **Packing slip template** stelt u per shop in op **Shop settings > Document templates**.
Als u het sjabloon uit de configuratie verwijdert, wordt het document niet automatisch gegenereerd.

![Documentsjablonen in de shopinstellingen](/img/shop-dettings-document-templates.png)

U kunt ook per shop bepalen of de inpakdocumenten standaard worden gegenereerd op het moment dat de zending wordt aangemaakt:
**Shop settings > Order Management > Default documents to generate for a shipment: Generate packingslip by default**.

![Orderbeheer in de shopinstellingen](/img/shop-settings-order-management.png)

Voor **dropshipments** kunt u per leverancier kiezen of inpakdocumenten automatisch worden gegenereerd op het moment dat de zending wordt aangemaakt, of dat dit handmatig gebeurt. Voor dropshipments geldt de shopinstelling niet: de leveranciersinstelling gaat voor en overschrijft deze.
Bij **Supplier details> Dropship > Packing slip** stelt u in of de pakbon en de inpakinstructies automatisch worden aangemaakt bij het aanmaken van de zending.

![Inpakinstructies voor dropshipping](/img/dropship-packing-instructions.png)

Let op: u kunt ook het aanmaken van de pakbon uitschakelen en de inpakinstructies wel laten genereren. Verwijder het documentsjabloon voor de pakbon uit de shopinstellingen, dan wordt de pakbon niet gegenereerd.

Op **magazijnniveau** kunt u instellen dat de inpakdocumenten moeten zijn afgedrukt voordat de zending als ingepakt kan worden gemarkeerd:
**Warehouse settings > Require printing of packing documents**

![Magazijninstellingen](/img/warehouse-settings.png)

Kortom: met inpakinstructies op maat genereert u inpakinstructies voor verschillende landen, producten of klanten. Zo optimaliseert u uw inpakproces, voldoet u aan de regels, verhoogt u de klanttevredenheid en beperkt u de risico's van verzending.
