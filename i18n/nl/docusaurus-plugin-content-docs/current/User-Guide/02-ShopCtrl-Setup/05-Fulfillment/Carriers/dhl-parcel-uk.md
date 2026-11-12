---
sidebar_position: 3
slug: /docs/dhl-parcel-uk
description: "De integratie van ShopCtrl met DHL, voor DHL Europlus, Express, For You en Parcel UK, en de functies die elke API ondersteunt."
---
# DHL Parcel UK 


<img src={require("/img/DHL-LOGO.jpg").default} height="" width="150" />

DHL is een Duits logistiek bedrijf van Amerikaanse oorsprong dat koeriers-, pakket- en expresspostdiensten levert en jaarlijks meer dan 1,8 miljard pakketten bezorgt.

ShopCtrl biedt integratie met een aantal divisies van DHL:

* DHL Europlus
* DHL Express
* DHL For You
* DHL Parcel UK

Welke functies de integratie ondersteunt, hangt af van de methoden van de betreffende DHL API.

## DHL Parcel UK {#dhl-parcel-uk}

Regio: Verenigd Koninkrijk. Aanmaken van binnenlandse (VK) en internationale pakketzendingen (ophalen in het VK)
[Parcel UK shipping and tracking](https://www.dhl.com/gb-en/parcel/business-users.html) 

ShopCtrl biedt een volledig geautomatiseerde koppeling. U kunt de beschikbare diensten dynamisch ophalen op basis van het afleveradres en de grootte van het pakket, verzendlabels met trackingcodes en tracking-URL's ontvangen en afdrukken, verzendlabels annuleren en trackinginformatie voor uw pakketten opvragen.

De huidige DHL-integratie is gericht op binnenlandse zendingen in het VK en ondersteunt ook zendingen naar de drie eilandgebieden binnen de Britse Eilanden (Bailiwick of Guernsey, Bailiwick of Jersey en Isle of Man). Voor zendingen naar de Kanaaleilanden wordt extra informatie aan het label toegevoegd: de orderwaarde en de goederenomschrijving.
Neem contact op met ons supportteam als u DHL wilt gebruiken voor internationale zendingen.

DHL Parcel UK biedt een ruime keuze aan diensten voor uw binnenlandse en internationale zendingen. Hieronder staat de lijst met beschikbare diensten.

**Binnenlandse diensten van DHL Parcel UK**

- Bagit Next Day
- Bagit Next Day 09:00
- Bagit Next Day 10:30
- Bagit Next Day 12:00
- Bagit Next Day - ServicePoint Delivery
- Bagit Saturday 09:00
- Bagit Saturday 10:30 (Specified Address / Leave Safe)
- Bagit Saturday 10:30 (Specified Address / Neighbour)
- Bagit Saturday 10:30
- Bagit Saturday (Specified Address / Leave Safe)
- Bagit Saturday (Specified Address / Neighbour)
- Bagit Saturday
- Pallet 48 Hours
- Pallet Next Day
- Parcel 48 Hours (Specified Address / Neighbour)
- Parcel 48 Hours - ServicePoint Delivery
- Parcel 72 Hours (Specified Address / Leave Safe)
- Parcel 72 Hours - ServicePoint Delivery
- Parcel Next Day
- Parcel Next Day 09:00
- Parcel Next Day 10:30
- Parcel Next Day 12:00
- Parcel Next Day - ServicePoint Delivery
- Parcel Saturday 09:00
- Parcel Saturday 10:30 (Specified Address / Leave Safe)
- Parcel Saturday 10:30 (Specified Address / Neighbour)
- Parcel Saturday 10:30
- Parcel Saturday (Specified Address / Leave Safe)
- Parcel Saturday (Specified Address / Neighbour)
- Parcel Saturday

**Internationale diensten van DHL Parcel UK**

- DHL Parcel Connect
- International Road Economy
- Parcel 48 Hours (Specified Address / Neighbour) - Channel Islands
- Parcel 48 Hours - ServicePoint Delivery to Channel Islands
- Worldwide Air

### De integratie met DHL Parcel UK instellen {#setting-up-dhl-parcel-uk-integration}

Om de integratie met DHL Parcel UK te gebruiken, volgt u het [onboardingproces voor de DHL API](https://developer.dhl.com/api-reference/parcel-uk#get-started-section/user-guide--get-access).
Om de DHL-integratie in te stellen, hebt u een [**Client ID** en **Client Password**](https://developer.dhl.com/api-reference/parcel-uk#get-started-section/user-guide--using-the-api) van uw DHL Parcel UK API-account nodig, en daarnaast een Pickup Account-nummer.

Om de configuratie te controleren en de eerste testlabels te genereren, raden we aan eerst de verbinding met de UAT-omgeving in te stellen.
Volgens [DHL](https://developer.dhl.com/api-reference/parcel-uk#get-started-section/user-guide--environments):
> De UAT-omgeving kan vrij worden gebruikt voor testen en ontwikkeling. Alleen de productieomgeving zet onderliggende processen in gang, zoals facturering en operationele procedures.



### Een DHL UK-vervoerdersaccount instellen in ShopCtrl {#setting-up-a-dhl-uk-carrier-account-in-shopctrl}
 
:::info[Vereiste rechten]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Met de integratie met DHL Parcel UK worden de beschikbare producten en diensten dynamisch opgehaald op basis van het adres en de grootte van het pakket. U kunt de bestelde diensten wel beperken tot een aantal voorkeursdiensten en de bestelde producten een prioriteit geven.
Dit betekent dat ShopCtrl vóór het aanmaken van een label een lijst met beschikbare producten voor het specifieke pakket opvraagt. Daarna kiest ShopCtrl, volgens de prioriteit, de dienst uit de diensten die in de instellingen van de vervoerder zijn opgegeven. Als geen van de gekozen diensten beschikbaar is, verschijnt er een foutmelding met de diensten waarmee het pakket wel kan worden verzonden.
Op dit moment worden alleen zendingen van het type 'Package' ondersteund (in ShopCtrl het type 'Box').

<img src={require("/img/dhl-parcel-uk-carrier-configuration.png").default} height="" width="800" />

Een DHL Parcel UK-vervoerdersaccount aanmaken en configureren:

1. Ga naar **Configuration > Transport > Carrier Accounts**.
2. Klik op **Add** en selecteer de vervoerder **DHL UK Parcel** in de lijst.
3. Vul een **Name** voor de DHL-vervoerder in.
4. Stel de **Priority** van de vervoerder in.
5. Kies de **Shops** en/of **Warehouses** waarvoor de vervoerder beschikbaar is.
6. Vul de **Default goods description** in die indien nodig op de labels wordt afgedrukt.
7. Vink in het deelvenster **DHL Specifics > Connection** het selectievakje **Use UAT environment** uit om naar de live-omgeving over te schakelen. U kunt het later altijd weer inschakelen om te testen.
:::info[UAT-omgeving]

Standaard zijn de testgegevens voor de UAT-omgeving van DHL vooraf ingevuld met de testgegevens die DHL verstrekt. Als u Use UAT environment inschakelt, kunt u testlabels met verschillende parameters genereren en de configuratie en de beschikbaarheid van diensten controleren.

:::
7. Vul de **Client ID (prod)** en het **Client password (prod)** in die u van DHL hebt gekregen.
8. Klik op de knop **Test connection** om te controleren of de gegevens juist zijn en de verbinding met DHL slaagt. Controleer bij een authenticatiefout de ingevulde gegevens.
9. Vul in het deelvenster **Account info** het **Pickup Account**-nummer in dat u tijdens het onboardingproces van DHL hebt gekregen.
10. Pas de standaardcodes in de lijst **Ordered products** naar wens aan.
:::info[Codes voor Ordered products van DHL]

De standaard vooraf geselecteerde codes zijn:
`220` - Parcels Next day
`48` - Parcel 48 Hours to Specified Address - Channel Islands

:::
11. **Dropoff type** - geef aan hoe zendingen aan DHL worden overgedragen.
12. Kies het **Recipent type**, oftewel de ontvanger van het pakket: particulier (residential) of zakelijk (business).
13. Selecteer het **Address type** van de ontvanger: Doorstep of Service point.
14. **Weekend pickup date** - vink dit aan als u de ophaaldatum in het weekend wilt kunnen plannen. Anders wordt de eerste dag na het weekend gebruikt.
15. Klik op **Save** of **Save and Close** om de vervoerder aan te maken.


#### Aanvullende geavanceerde instellingen {#additional-advanced-settings}

**Get available products.** Met deze functie controleert u welke diensten van DHL UK beschikbaar zijn voor een specifiek pakket, zonder echt een verzendlabel aan te maken.

De mogelijke binnenlandse of internationale verzendopties voor uw zending opvragen:
1. Vul het adres van herkomst (**Origin (From)**) in van het magazijn van waaruit u verzendt: landcode en postcode.
2. Vul het bestemmingsadres (**Destination (To)**) in: landcode en postcode.
3. Selecteer het **Address type** van de bestemming: Doorstep of Service Point.
4. Selecteer het **Recipient type** van de bestemming: Residential of Business.
5. Vul de gegevens van het **Parcel** in: het aantal pakketten en het gewicht in kilogram.
6. Klik op Get available products om de lijst met geschikte diensten dynamisch op te halen bij DHL Parcel UK.

U kunt nu bepalen met welke dienst u uw pakket verzendt en het veld **Ordered product(s)** bijwerken met de code van de gekozen dienst.

Schakel **Extended logging** in om configuratiefouten in de beginfase gemakkelijker op te sporen.

**Retry if API timeout**. Omdat DHL limieten stelt aan het aantal API-verzoeken, raden we aan deze instelling standaard ingeschakeld te laten.
De aanbevolen **API timeout**, de pauze tussen API-aanroepen, wordt opgegeven in ms en is standaard 5000. U kunt de pauze indien nodig verlengen.

**No check for available services** - deze instelling schakelt de standaardwerkwijze uit waarbij voor elke zending eerst de lijst met beschikbare diensten bij DHL wordt opgevraagd. Als deze controle is uitgeschakeld, wordt voor elk pakket de eerste code uit het veld Ordered products gebruikt.

**Default template parameters** - hier past u de standaardmarges en het standaardformaat van het verzendlabel aan. Vul de waarden in of wijzig ze, gescheiden door spaties: `Top Right Bottom Left Size`. Klik op de knop **Check** om de verwerkte waarden van het sjabloon te zien.


### Dagen zonder DHL-dienstverlening (feestdagen) instellen {#setting-up-dhl-non-operating-days-holidays}

Om fouten bij het genereren van labels op feestdagen te voorkomen (bijvoorbeeld `pickup date cannot be a public holiday`), moet u handmatig opgeven op welke dagen DHL niet werkt.

**Configuratiestappen**

1. Ga in het beheerpaneel van ShopCtrl naar **Configuration > Transport > Carrier Accounts**.
2. Zoek de instellingen van uw **DHL Parcel UK**-vervoerder en open deze om te bewerken.
3. Zoek het tekstveld **"Delivery days-off"**.
4. Vul de feestdagen in met de vereiste notatie: `YYYY.MM.DD`
   - Scheid meerdere datums met komma's
   - **Voorbeeld:** `2026.04.03,2026.04.06`

5. Klik op de knop **Check** om uw invoer te controleren
   - Het systeem verwerkt en bevestigt elke datum
   - **Voorbeeldresultaat:** `03 April 2026`, `06 April 2026`
6. Sla de vervoerder op met **Save** om de wijzigingen toe te passen.


<img src={require("/img/dhl-parcel-uk-holidays.png").default} height="" width="800" />

**Aanbevolen werkwijze**

Stel dit **één keer per jaar** in: vul alle bekende feestdagen voor het komende jaar vooraf in. Zo voorkomt u dat het genereren van labels gedurende het jaar wordt onderbroken.
