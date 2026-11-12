---
sidebar_position: 5
slug: /docs/integration-with-wms-via-ftp
description: "Koppel een Warehouse Management System via FTP met csv-bestanden aan ShopCtrl om het picken en inpakken van Amazon 1P-inkooporders te automatiseren."
---

# Integratie met een WMS via FTP

ShopCtrl biedt een naadloze integratie met uw Warehouse Management System (WMS) via FTP, zodat u het pick- en pakproces efficiënt kunt automatiseren.
Deze handleiding gaat over de integratie met uw WMS via csv-bestanden, speciaal bedoeld voor het verwerken van Amazon 1P-inkooporders.


## Integratie voor het picken van orders {#order-picking-integration}

Voor de integratie maakt ShopCtrl een speciale map aan op de server van uw ShopCtrl-omgeving. In deze map komen de bestanden met de pick- en pakgegevens van uw orders binnen.

Kort gezegd worden bij het picken van orders artikelen in het magazijn gescand en gepickt. Het WMS genereert een bestand met de resultaten, dat in de daarvoor bestemde map op de ShopCtrl-server wordt geplaatst. ShopCtrl verwerkt het bestand op de achtergrond en werkt de orderregels bij. Als bepaalde producten ontbreken, maakt ShopCtrl creditregels voor deze artikelen aan, zodat de wijzigingen direct in de order zichtbaar zijn. Daarna worden deze wijzigingen via een bevestiging (acknowledgement) met Amazon gesynchroniseerd, voor een naadloze integratie met het Amazon-platform.

### WMS: csv-indeling en mappen {#wms-csv-format-and-folder-routing}

Om ShopCtrl te laten weten welke artikelen voor een order zijn gepickt, plaatst u een `.csv`-bestand in de daarvoor bestemde map op de server van uw productieomgeving.
Neem contact op met de support van ShopCtrl voor het **pad** naar de **Pick folder** op de server van uw ShopCtrl-omgeving.

Richtlijnen voor het aanleveren van csv-bestanden:

1. **Bestandsindeling en aanlevering:**
    * Lever per order één csv-bestand aan met de volledige ordergegevens.
    * Ontbrekende artikelen bij orderregels leiden tot creditregels, die in de order zichtbaar zijn.
    * Als bepaalde producten niet in het csv-bestand staan, worden die orderregels als volledig afgewezen beschouwd en dus gecrediteerd.
    * Overtollige artikelen in het pickbestand worden genegeerd, zodat aantallen niet onbedoeld worden verhoogd. Er worden meldingen aangemaakt om op afwijkingen in de order te wijzen.

:::info[**Amazon 1P-workflow**]

Nadat het pickbestand is verwerkt, wordt een bevestiging van de inkooporder (purchase order acknowledgement) aangemaakt en naar Amazon gestuurd.

:::
2. **Vervangen van bestanden en bevestiging:**
    * ShopCtrl beschouwt herhaalde bestanden voor dezelfde order als vervanging.
    * Overtollige artikelen in het pickbestand (ten opzichte van het vorige bestand) worden genegeerd, zodat aantallen niet onbedoeld worden verhoogd. Er worden meldingen aangemaakt om op afwijkingen in de order te wijzen.

:::info[**Amazon 1P-workflow:**]

Er wordt een vervangende bevestiging aangemaakt en naar Amazon gestuurd, zodat de informatie juist en actueel is.
Let op: Amazon staat niet toe dat bij een nieuwe bevestiging meer wordt bevestigd dan eerder is verstuurd. ShopCtrl controleert dit en houdt zich aan deze regel.

:::

3. **Structuur van het csv-bestand:**
    * Elke rij van een csv-bestand moet de volgende gegevens bevatten:
        - **Shop** - [string] - Geeft de doelshop aan (bijvoorbeeld "Amazon").
        - **PO_Code** - [string] - Ordercode in ShopCtrl (de code van de Amazon-inkooporder).
        - **EAN** - [string] - EAN van het product.
        - **Acknowledged_Quantity** - [number] - Aantal artikelen dat wordt bevestigd (gepickt).
        - **Pick_Timestamp** - [datetime] - Het UTC-tijdstempel van het moment waarop deze rij is gepickt.

Voorbeeld-csv:

```csv
Amazon, TEST616302, 5010426736358, 930, 2023-12-14T12:10:00Z  
Amazon, TEST616302, 5010426739008, 60, 2023-12-14T12:15:00Z  
Amazon, TEST616302, 5010426739008, 10, 2023-12-14T12:20:00Z
```

### ShopCtrl: configuratie van de magazijnintegratie {#shopctrl-warehouse-integration-configuration}

U configureert de integratie voor het picken van orders op magazijnniveau in ShopCtrl.

<img src={require("/img/warehouse-settings-amazon1p-pick.png").default} height="" width="800" />


De integratie inschakelen:

* Log in bij uw ShopCtrl-omgeving met de rol shopowner admin.
* Ga in het navigatiemenu naar **Product details > Warehouses**.
* Open het magazijn (**Open**) om het te configureren.
* Zoek en selecteer in het menu van de magazijndetails **UK - Amazon 1P Pick**.
* Schakel de integratie in met **Enable**.
* Configureer de workflow:
    * Bepaal of u **Delete open shipment on order reacknowledge** wilt gebruiken.
    * Bepaal of u **Create a new shipment on upload** wilt gebruiken.
* Leg de koppeling van shops tussen uw WMS en ShopCtrl vast:
    * Klik op **Add** en selecteer een shop in ShopCtrl.
    * Vul de bijbehorende naam van de shop in uw WMS in.
* Klik op **Save** of **Save and Close** om de wijzigingen voor het magazijn toe te passen.

De workflowinstellingen hangen af van de bestaande triggers in uw ShopCtrl-omgeving, zodat u flexibel kunt bijsturen.
**Delete open shipment on order reacknowledge:** dit is handig voor het testen en verfijnen van workflows, maar we raden af om zendingen regelmatig te verwijderen. Uitzonderlijke acties zoals het verwijderen van een zending worden meestal door een medewerker afgehandeld.

Meer informatie over het bevestigen van inkooporders aan Amazon vindt u in het artikel **Amazon 1P-workflow voor orderfulfilment**.

## Integratie voor het inpakken van orders {#order-packing-integration}

Nadat een order in het magazijn is gepickt, wordt de order ingepakt. De resultaten worden vastgelegd in een bestand dat het externe Warehouse Management System (WMS) genereert en in de daarvoor bestemde map op de ShopCtrl-server plaatst. ShopCtrl verwerkt dit bestand op de achtergrond en werkt de zending bij met de benodigde inpakgegevens.

In deze fase worden wijzigingen in aantallen niet verwerkt. Als er artikelen ontbreken of te veel artikelen zijn ingepakt, worden er meldingen bij de order aangemaakt en wordt de bijbehorende groepszending (group shipment) gemarkeerd, zodat de fouten zichtbaar zijn. Op dit moment is de order al aan Amazon bevestigd, zodat er geen overtollige artikelen worden meegestuurd die tot boetes kunnen leiden.

### WMS: csv-indeling en mappen {#wms-csv-format-and-folder-routing-1}

Om ShopCtrl te laten weten welke artikelen voor een order zijn ingepakt, moet een `.csv`-bestand in de map op de server van uw ShopCtrl-productieomgeving worden geplaatst.
Neem contact op met de support van ShopCtrl voor het **pad** naar de **Pack folder** op de server van uw ShopCtrl-omgeving.

Een csv-pakbestand kan gegevens voor één of meerdere orders bevatten.
Afhankelijk van de configuratie maakt het systeem na de upload wel of geen groepszending aan. De inpakgegevens worden in elk geval altijd binnen één orderzending opgeslagen.
Als er een groepszending moet worden aangemaakt, dient het csv-bestand als volledige beschrijving van de geplande zending. Het Bill-of-Lading (BOL) is de unieke identificatie van de groepszending.
Herhaalde bestanden voor hetzelfde Bill of Lading-ID overschrijven eerdere pakbestanden. Zo zijn altijd de meest recente inpakgegevens vastgelegd.


- **Shop** - [string] - Geeft de doelshop aan (bijvoorbeeld "Amazon 1P").
- **BOL** - [string] - Bill of Lading-ID uit het externe WMS (AS400).
- **PO_Code** - [string] - Code van de Amazon-inkooporder.
- **Pallet** - [string] - Unieke identificatie van een pallet (SSCC).
- **Carton** - [string] - Unieke identificatie van een doos, of een lege waarde als de artikelen rechtstreeks op een pallet zijn gestapeld.
- **EAN** - [string] - EAN van het product.
- **Quantity** - [number] - Aantal artikelen dat in deze doos of op deze pallet is ingepakt.
- **Unit_Weight** - [number] - Gewicht van één producteenheid.
- **Pack_Timestamp** - [datetime] - Het UTC-tijdstempel van het moment waarop deze rij is ingepakt.

Voorbeeld-csv:

```csv
Amazon, bol0001, TEST616302, pallet01, carton01, 5010426736358, 10, 4.33, 2023-12-14T12:10:00Z
Amazon, bol0001, TEST616302, pallet01, carton02, 5010426736358, 10, 2.01, 2023-12-14T12:10:00Z
Amazon, bol0001, TEST616302, pallet01, carton03, 5010426736358, 4, 3.50, 2023-12-14T12:20:00Z 
Amazon, bol0001, TEST616303, pallet01, carton03, 5010426739008, 6, 6.12, 2023-12-14T12:20:00Z 
Amazon, bol0001, TEST616303, pallet02, carton04, 5010426739008, 8, 2.10, 2023-12-14T12:20:00Z
```

### ShopCtrl: configuratie van de magazijnintegratie {#shopctrl-warehouse-integration-configuration-1}

U configureert de integratie voor het inpakken van orders op magazijnniveau in ShopCtrl.
<img src={require("/img/warehouse-settings-amazon1p-pack.png").default} height="" width="800" />


De pakintegratie inschakelen:

* Log in bij uw ShopCtrl-omgeving met de rol shopowner admin.
* Ga in het navigatiemenu naar **Product details > Warehouses**.
* Open het magazijn (**Open**) om het te configureren.
* Zoek en selecteer in het menu van de magazijndetails **UK - Amazon 1P Pack**.
* Schakel de integratie in met **Enable**.
* Configureer de workflow:
    * Bepaal of u **Delete from an old group shipment on upload** wilt gebruiken.
    * Bepaal of u **Add to a new group shipment on upload** wilt gebruiken.
* Leg de koppeling van shops tussen uw WMS en ShopCtrl vast:
    * Klik op **Add** en selecteer een shop in ShopCtrl.
    * Vul de bijbehorende naam van de shop in uw WMS in.
* Klik op **Save** of **Save and Close** om de wijzigingen voor het magazijn toe te passen.


Met de workflowconfiguratie kunt u flexibel bijsturen op basis van de bestaande triggers in uw ShopCtrl-omgeving. We raden af om eerder ingepakte zendingen regelmatig uit een groepszending te verwijderen; deze instelling is vooral bedoeld voor het testen en verfijnen van workflows.

Het automatisch aanmaken van groepszendingen is een standaardonderdeel van de workflow. Om artikelen in te pakken en een groepszending aan te maken, moeten voor de afzonderlijke orders al zendingen zijn aangemaakt en gepickt voordat het pakbestand binnenkomt.

Meer informatie over het versturen van ASN's naar Amazon vindt u in het artikel [Amazon 1P-workflow voor orderfulfilment](/User-Guide/07-Fulfillment/Amazon-1P-Order-Fulfillment-Workflow/index.md).
