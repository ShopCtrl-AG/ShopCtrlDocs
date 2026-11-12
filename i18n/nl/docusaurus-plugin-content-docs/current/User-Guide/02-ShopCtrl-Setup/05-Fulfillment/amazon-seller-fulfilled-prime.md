---
sidebar_position: 4
slug: /docs/amazon-seller-fulfilled-prime
description: "Stel Amazon Seller Fulfilled Prime in ShopCtrl in, te beginnen met een Amazon SFP-vervoerdersaccount, om verzenddiensten van Amazon te kopen voor Prime-orders."
---
# Amazon Seller Fulfilled Prime 


Om in ShopCtrl verzenddiensten van Amazon voor Prime-orders te kopen, doorloopt u een aantal stappen.

## Stap 1. Een Amazon SFP-vervoerdersaccount aanmaken {#step-1-create-an-amazon-sfp-carrier-account}

Een Amazon SFP-vervoerdersaccount aanmaken en configureren:

1. Ga naar **Configuration > Transport > Carrier Accounts**.
2. Klik op **Add** en selecteer **Amazon Prime** in de lijst.
<img src={require("/img/create-amazon-prime-carrier-01.png").default} height="" width="800" />
3. Vul op de detailpagina van de nieuwe vervoerder de **Name** van de vervoerder in.
<img src={require("/img/create-amazon-prime-carrier-02.png").default} height="" width="800" />
4. Selecteer een **Amazon-shop** waarvoor deze vervoerder beschikbaar is.
5. Configureer op het tabblad **Specifics** de instellingen voor **Shipping Service**. Deze instellingen bepalen direct welke vervoerders worden voorgesteld:
    1. Methode voor **Delivery confirmation**:
        * Delivery confirmation with adult signature.
        * Delivery confirmation with signature.
        * Delivery confirmation without signature.
        * No tracking.
    2. **Parcel pickup**:
        * Carrier will pickup
        * Shipper will drop off
6. Klik op **Save** of **Save and Close** om het vervoerdersaccount aan te maken.


### Koppeling van tracking-URL's instellen voor de Amazon SFP-vervoerder {#setting-up-tracking-url-mapping-for-amazon-sfp-carrier}

Omdat de Amazon API geen tracking-URL's teruggeeft voor verzendlabels die bij Amazon zijn gekocht, biedt ShopCtrl een functie waarmee u tracking-URL's kunt instellen voor pakketten die via Amazon SFP worden verzonden.

Om tracking-URL's te kunnen genereren voor pakketten die via Amazon SFP zijn gekocht, geven we sjablonen voor tracking-URL's op voor de vervoerders die het pakket kunnen verzenden.
In de sjablonen kunnen we verschillende jokertekens (wildcards) gebruiken. Met wildcards wordt de inhoud van een tracking-URL dynamisch gevuld op basis van de gegevens van de klant.

Hieronder staan de beschikbare wildcards:

| Wildcard | Omschrijving |
| --- | --- |
| `{TrackingCode}` | Trackingcode van het pakket |
| `{PostalCode}` | Postcode van 'Ship to' |
| `{CountryCode}` | Landcode van 'Ship to' |
| `{OriginPostalCode}` | Postcode van 'Ship from' |
| `{OriginCountryCode}` | Landcode van 'Ship from' |
| `{CultureCode}` | Cultuurcode van de klant |
| `{CultureCodeU}` | Cultuurcode van de klant, gescheiden door underscores |
| `{OrderDate}` | Aanmaakdatum van de order |
| `{ParcelDate}` | Aanmaakdatum van het pakket |

Bij het genereren van een tracking-URL voor bijvoorbeeld het sjabloon `https://www.royalmail.com/track-your-item?trackNumber={TrackingCode}` wordt `{TrackingCode}` voor elke zending vervangen.

Een koppeling van tracking-URL's (Tracking URL Mapping) aanmaken:
1. Ga op de detailpagina van de Amazon Prime-vervoerder naar het deelvenster **Tracking URL mapping**.
2. Klik op **Add** om een nieuwe rij toe te voegen.
3. Selecteer een **Carrier** in de linkerkolom.
4. Vul een **Tracking URL template** in. Een aantal bekende tracking-URL's kunt u selecteren in de lijst met beschikbare sjablonen.
5. Ga verder met de andere vervoerders.
6. Klik op **Save** of **Save and Close** om de wijzigingen voor de vervoerder toe te passen.

<img src={require("/img/tracking-url-mapping.png").default} height="" width="800" />

### Sluitingstijd instellen voor bepaalde diensten {#configure-cut-off-time-for-certain-services}

U kunt openings- en sluitingstijden instellen voor bepaalde vervoerders, op basis van hun werktijden in uw regio.
<img src={require("/img/amazon-carrier-opening-hours-filter.png").default} height="" width="800" />

U kunt bijvoorbeeld een sluitingstijd instellen voor vervoerders die in het weekend niet werken. De pakketten gaan dan naar de volgende voorkeursvervoerder in de lijst.
Selecteer bij het instellen van de openingstijden uw huidige tijdzone.

## Stap 2. Controleren of de contactgegevens van het magazijn zijn ingevuld {#step-2-ensure-warehouse-contact-information-is-provided}

Om verzendlabels bij Amazon op te halen, geeft ShopCtrl de contactgegevens door van het magazijn van waaruit de order wordt verzonden. Het is belangrijk dat het juiste **Address** is ingevuld in de magazijndetails.

## Stap 3. De instellingen van de Amazon-shop configureren {#step-3-configure-amazon-shop-settings}

Eerst selecteren we een standaardvervoerder voor Amazon Prime-orders.
Selecteer in het deelvenster **PRIME Settings** een eerder aangemaakt **Prime Carrier Account** dat voor deze shop wordt gebruikt.
Vervoerders voor orders met een lagere prioriteit worden geselecteerd op basis van de standaard [verdeling over vervoerders](/User-Guide/02-ShopCtrl-Setup/05-Fulfillment/Carriers/index.md) in ShopCtrl. Stel deze apart in.


Maak in het deelvenster **Prime Shipping Service Preferences** voorkeursregels voor het kiezen van een vervoerder. De regels kunnen gelden voor alle producten (**Default**) of voor een specifieke **Product group**.
U kunt het aantal artikelen dat via Amazon SFP wordt verzonden beperken tot één artikel door het selectievakje **Skip orders having more than 1 item** aan te vinken.

Om voorkeuren in te stellen die voor alle producten gelden, maken we een set regels aan voor de productgroep **Default** (bevat alle producten).
Sets met regels kunt u instellen voor zowel bovenliggende als onderliggende productgroepen. Als er voor een product geen regels zijn opgegeven, wordt de standaardset regels als terugvaloptie gebruikt.

De **Priority** van een set regels bepaalt welke set wordt gebruikt als de order meerdere producten uit verschillende productgroepen bevat.

De voorkeuren worden achtereenvolgens op de lijst met vervoerders toegepast. Stel bijvoorbeeld dat de regel voor de productgroep zwarte jassen zo is ingesteld: DPD-Parcel Next Day > DPD > Lowest Price.
Als de Amazon Prime-order zwarte jassen bevat, wordt de volgende logica toegepast:
Eerst zoekt ShopCtrl naar de dienst "DPD UK-Parcel Next Day" in de lijst met vervoerders en diensten die Amazon aanbiedt, en kiest deze voor de order zodra die is gevonden. Als deze dienst niet beschikbaar is voor de order, zoekt ShopCtrl naar een willekeurige DPD_UK-dienst en kiest de optie met de laagste prijs. Als de vervoerder DPD helemaal niet wordt aangeboden voor de order, wordt de verzendoptie met de laagste prijs gekozen.

<img src={require("/img/shop-settings-amazon-prime-shipping-service-preference.png").default} height="" width="800" />

Voorkeursregels voor verzenddiensten configureren:

1. Ga naar het tabblad **Shop details page > Shop synchronization > Amazon Shop Synchronization**.
2. Klik in het deelvenster **Prime Shipping Service Preference** op **Add**.
3. Selecteer **Default** om de regel op alle producten toe te passen, of een specifieke **Product group** om de regel alleen op de producten in die groep toe te passen.
4. Kies de **Priority** voor de set regels. Hoe hoger het getal, hoe hoger de prioriteit.
5. Klik op de knop <img src={require("/img/pencil(1).png").default}  /> om het venster **Prime Shipping Service Preference Configuration** te openen. Links ziet u de mogelijke criteria (**Criteria**). Rechts staat de uiteindelijke lijst met criteria die wordt gebruikt om vervoerders voor deze productgroep te kiezen.
6. Bewerk de lijst **Order of preference**. Standaard bevat de lijst alle mogelijke criteria:
      1. Sluit overbodige velden uit met de knop ◀.
      2. Wijzig de prioriteit van de opgenomen criteria met de pijlen ⬆⬇.
      3. Neem criteria weer op in de lijst met de knop ▶.
<img src={require("/img/prime-shipping-service-preference-configuration.png").default} height="" width="400" />
6. Voeg een **Preferred Carrier** toe door een vervoerder in de vervolgkeuzelijst te selecteren en op de pijl ▶ te klikken om deze aan de lijst Order of Preference toe te voegen.
7. Verfijn de keuze van de vervoerder door een **Preferred Carrier Service** op te geven: selecteer een vervoerder, kies een dienst van die vervoerder en klik op de pijl ▶ naast de naam van de dienst om deze aan de lijst toe te voegen.
8. Klik op **Save** als u klaar bent.
9. (Optioneel) U kunt de regel ook als **Strict** markeren. Als geen van de vervoerders en diensten die Amazon aanbiedt aan de opgegeven criteria voldoet, wordt het label dan niet gekocht. De order krijgt een melding dat er verdere actie nodig is.
10. Maak eventueel nog andere regels aan.
11. Klik op **Save** of **Save and Close** om de instellingen voor de shop toe te passen.

## Stap 4. De keuze van de vervoerder testen door een Prime-order te verzenden {#step-4-test-carrier-selection-by-shipping-prime-order}

Zodra de voorkeuren voor alle productgroepen zijn ingesteld, kunnen we testen of de voorstellen werken zoals verwacht door handmatig zendingen voor Prime-orders aan te maken.

Een zending voor een Prime-order aanmaken:

1. Zoek een Prime-order en open deze om te bewerken.
2. Wijs de voorraad automatisch of handmatig toe aan de order (**Allocate**).
3. Klik op **Fulfillment > Create Shipment** om een zending voor de order aan te maken.
<img src={require("/img/create-shipment-amazon-sfp.png").default} height="" width="800" />
4. In het deelvenster **Parcels** ziet u dat een Amazon SFP-vervoerder is geselecteerd. Klik op **Options** om de voorgestelde vervoerder en verzenddienst te bekijken.
5. In het deelvenster **Additional Settings** ziet u de voorkeursvervoerder en de verzenddienst waarmee deze Prime-order wordt verzonden.
<img src={require("/img/choose-carrier-manually-amazon-sfp.png").default} height="" width="400" />
6. Klik op de geselecteerde **Shipping Service** om een andere dienst te kiezen uit de opties die Amazon aanbiedt. Controleer of de voorkeursvervoerder aan de opgegeven criteria voldoet.
7. U kunt de **Package size** handmatig wijzigen. Let op: u moet daarna op de knop **Refresh Settings** klikken om de lijst met voorgestelde Amazon-vervoerders bij te werken.
8. Sluit het tabblad **Create label**.

U kunt nu ofwel het **pakket verzenden**:
  1. Vink de optie Create parcel on save ✅ aan.
  2. Sla de zending op.
Het verzendlabel wordt bij Amazon opgehaald en aan het bijbehorende pakket toegevoegd.
    
Of de **zending annuleren** door de zendingspagina te sluiten. Er worden dan geen verzendlabels gegenereerd.
