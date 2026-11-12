---
sidebar_position: 1
slug: /docs/amazon-1p-setting-up-shopctrl-synchronization
description: "Stel de shopsynchronisatie met Amazon 1P in ShopCtrl in, inclusief valuta, btw-tarieven, betaalmethoden en de manier waarop contactgegevens van klanten worden opgeslagen."
---


# Shopsynchronisatie instellen in ShopCtrl

Zodra u de integratie in uw Amazon-account hebt ingeschakeld, kunt u de synchronisatie in ShopCtrl instellen.

## Voordat u begint: de shop configureren in ShopCtrl {#before-start-configuring-shop-in-shopctrl}

:::warning[Voordat u begint]

Stel de bijbehorende valuta, btw-tarieven en betaalmethoden voor uw ShopCtrl-shop in voordat u de synchronisatie met Amazon inschakelt.

:::

Om verder te gaan met het instellen van de shop in ShopCtrl, bepalen we hoe de contactgegevens van klanten worden opgeslagen. Amazon stuurt klantnamen en klantadressen elk als één veld naar ShopCtrl. Pas de betreffende shopinstellingen aan om deze gegevens goed te verwerken.

<img src={require("/img/shop-settings-contacts-contact-info.png").default} height="" width="800" />


Wijzigen hoe de contactgegevens van klanten in ShopCtrl worden opgeslagen:

1. Log in bij uw ShopCtrl-account als gebruiker met de rol **Shop Owner Admin**.
2. Open de pagina met **shopinstellingen** van de shop waarvoor de verbinding met Amazon is ingesteld.
3. Klap in het menu het onderdeel **Contacts** uit en klik op **Contact Info**.
4. Wijzig de instelling **Address detail** in **One field for street name, house number and extension**.
5. Wijzig de instelling **Name detail** in **One single field for contact person name**.
6. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.

## De Amazon-shopsynchronisatie instellen in ShopCtrl {#setting-up-amazon-shop-synchronization-in-shopctrl}



De app-module voor Amazon 1P heeft veel functies. We verdelen het instellen daarom in een aantal stappen:

1. Verbinding maken met Amazon 1P
2. Het importeren van orders voorbereiden: koppelingen en fulfilmentcentra configureren
3. [Bulk Buy instellen (optioneel)](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-1P/setting-up-bulk-buy-offers.md).
4. De bevestiging van orders configureren
5. De eerste orderimport instellen en beginnen met het synchroniseren van orders
6. Het versturen van ASN's configureren

<details>
  <summary> Alle shopinstellingen tonen</summary>

<img src={require("/img/shop-amazon-1p-configuration.png").default} height="" width="800" />

</details>

### **Stap 1.** Verbinding maken met Amazon 1P {#step-1-establish-connection-to-amazon-1p}

Koppel uw ShopCtrl-shop aan Amazon door uw leveranciersgegevens en API-sleutels in te vullen.
    
1. Log in bij ShopCtrl als gebruiker met de rol **Shop Owner Admin**.
2. Ga in het menu naar **Configuration > Shops** om de lijst met aangemaakte shops te openen.
3. Kies de shop waarvoor u de Amazon-synchronisatie wilt configureren en klik op **Edit** om de shopinstellingen te openen.
4. Selecteer in het menu **Shop synchronization > Amazon 1P Synchronization**.
        <img src={require("/img/shop-amazon-1p-configuration-sync-integration.png").default} height="" width="800" />
5. Geef een Region en een Marketplace op waarvan u orders via deze shop wilt importeren.
6. Laat Authorization kind op **Self** staan.
6. Vul in het gedeelte **Self Authorization** de **Vendor code** in.
7. Vul de **LWA Client Id** en het **LWA Client Secret** in die [voor de privé-app van ShopCtrl in Amazon zijn gegenereerd](amazon-1p-profile-configuration.md).
8. Vul de **Refresh Token** in.
9. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.

U hebt nu verbinding gemaakt met Amazon, maar de synchronisatie is nog niet actief en er zijn nog geen gegevens geïmporteerd.

### **Stap 2.** Statuskoppelingen en fulfilmentcentra configureren {#step-2-configure-statuses-mapping-and-fulfillment-centers}

Volgens de [documentatie van de Amazon SP-API](https://developer-docs.amazon.com/sp-api/reference/getpurchaseorders) gebruikt Amazon 1P twee begrippen om de voortgang van orders te volgen: **`purchaseOrderState`** en **`PurchaseOrdersStatus`**.
ShopCtrl combineert de informatie uit `purchaseOrderState` en `PurchaseOrdersStatus` van Amazon en vertaalt deze naar de juiste **Main Order Status** in ShopCtrl. Zo worden belangrijke statuswijzigingen bij Amazon, zoals een order die wordt bevestigd, geweigerd of geannuleerd, correct weergegeven in uw workflow in ShopCtrl.

:::warning[Voordat u begint]

Zorg dat u in ShopCtrl twee hoofdorderstatussen hebt aangemaakt: "**Acknowledged**" (basisstatus Active) en "**Rejected**" (basisstatus Cancel). U hebt ze nodig voor de configuratie van de statuskoppelingen.

:::


 **Main Order Status mapping** Configureer de koppeling van orderstatussen door handmatig de binnenkomende status van de Amazon-inkooporder te selecteren en deze aan een passende status in ShopCtrl te koppelen.
 Bijvoorbeeld:
- Koppel de status `ACKNOWLEDGED` van Amazon aan uw status **Acknowledged** in ShopCtrl
- Koppel de status `CANCELLED` of `REJECTED` van Amazon aan uw status **Rejected** in ShopCtrl

 **Payment Order Status mapping** Amazon geeft bij het ophalen van orders via de API-integratie geen betaalstatus of betaling terug. Om orders in ShopCtrl af te ronden, moet u mogelijk toch koppelregels instellen. Als u ervan uitgaat dat een gesloten order een betaalde order is, kunt u deze koppelen aan de status Paid in ShopCtrl.
Geannuleerde of geweigerde orders kunnen de status Fully credited krijgen.

        <img src={require("/img/shop-amazon-1p-configuration-statuses-mapping.png").default} height="" width="800" />

#### **Fulfilmentcentra** {#fulfillment-centers}

Bij het ophalen van orders geeft Amazon alleen de code van het fulfilmentcentrum door, niet het volledige adres. ShopCtrl lost dit op met een ingebouwde lijst die deze codes aan fysieke adressen koppelt.

Bij het importeren van een nieuwe order koppelt ShopCtrl de code van Amazon automatisch aan een adres in deze lijst.


:::info[]

Als u hier geen fulfilmentcentra hebt ingesteld, gebruikt ShopCtrl de ingebouwde, vooraf ingestelde lijst, zodat alles goed blijft werken.

:::

In dit deelvenster kunt u nieuwe fulfilmentcentra **toevoegen**, de adressen van bestaande centra overschrijven of een koppeling met uw interne code toevoegen.
* **Standaardcentra vooraf laden:** om uw interne codes eenvoudig aan de meest gebruikte centra toe te voegen, gebruikt u de knop **‘Add Default FCs’**. Hiermee wordt de lijst gevuld met de standaard fulfilmentcentra van Amazon.
* **Een nieuw fulfilmentcentrum toevoegen:** als Amazon u een nieuwe code voor een fulfilmentcentrum doorgeeft, voeg deze dan met **add** aan de lijst toe, zodat orders probleemloos worden geïmporteerd.
* **Interne codes koppelen (ShipToPartyRef):** in deze kolom koppelt u uw interne codes aan elk fulfilmentcentrum. Bij het importeren van orders voegt ShopCtrl deze code als parameter ShipToPartyRef aan de order toe. Dit geeft een unieke identificatie voor de integratie wanneer u orders verder naar uw interne systeem doorstuurt.
* **Gegevens bewerken:** bewerk bij elk item het adres of het veld ShipToPartyRef.
* **Wijzigingen opslaan:** sla de shopinstellingen op om wijzigingen direct toe te passen.
* **Opschonen:** nadat u uw codes hebt gekoppeld, kunt u op **‘Remove rows with empty ShipToPartyRef’** klikken om de lijst op te schonen en standaardcentra die u niet gebruikt te verwijderen.


:::warning[**Let op:**]

Wijzigingen in adressen of codes gelden alleen voor orders die **na** het opslaan van de instellingen worden geïmporteerd. Eerder geïmporteerde orders worden niet bijgewerkt.

:::

<img src={require("/img/shop-amazon-1p-configuration-amazon-fulfillment-centers.png").default} height="" width="800" alt="Configuratievenster voor Amazon-fulfilmentcentra, met de knoppen Add Default FCs en Remove Empty" />


### **Stap 3.** Bulk Buy Offers configureren (optioneel) {#step-3-configure-bulk-buy-offers-optional}

Als u deelneemt aan het programma Bulk Buy Offers van Amazon, kunt u het goedkeuringsproces in ShopCtrl beheren.
Gedetailleerde instructies vindt u in de aparte handleiding:
[Bulk Buy Offers instellen](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-1P/setting-up-bulk-buy-offers.md).

### **Stap 4.** De bevestiging van orders configureren {#step-4-configure-orders-acknowledgement}

Stel de regels in voor hoe en wanneer orders aan Amazon worden bevestigd.

1. Ga naar **Shop configuration > Amazon 1P Synchronization** en open het gedeelte **Order Sync Settings**.
    <img src={require("/img/shop-amazon-1p-configuration-order-sync-settings.png").default} height="" width="800" />
2. **Creditredenen configureren:** selecteer onderaan het gedeelte de creditredenen die bij het bevestigen van orders worden gebruikt:
   - **Credit Row Reject Reason**: we raden aan een creditreden 'Rejected' aan te maken.
   - **Credit Row Cancel Reason**: we raden aan een creditreden 'Cancelled' aan te maken.
3. **Statussen voor bevestiging selecteren:** kies bij **Acknowledgeable Main Order Statuses** bij welke hoofdorderstatussen bevestigen mogelijk is. Orders worden alleen aan Amazon bevestigd als ze een van deze statussen hebben. Standaard raden we aan hoofdorderstatussen met de basisstatus Active te selecteren.
4. **Automatische bevestiging van Bulk Buy configureren:** vink **Auto acknowledge new bulk orders** aan als u wilt dat orders die overeenkomen met geregistreerde Bulk Buy Offers in ShopCtrl direct bij het importeren worden bevestigd.
5. **Automatisering voor bulkorders instellen:** configureer deze instellingen voor een geautomatiseerde workflow voor bulkorders:
   - **Allocate Bulk Buy Orders on acknowledgement**: reserveer direct na de bevestiging aan Amazon voorraad voor bulkorders.
   - **Create shipment for Bulk Orders on acknowledgement**: maak automatisch zendingen aan voor bevestigde bulkorders.
6. **Bevestiging van orders inschakelen:** schakel ten slotte de bevestiging van orders in door **Acknowledge orders** aan te vinken in het deelvenster **Synchronization Customization** bovenaan het tabblad voor de Amazon-synchronisatie.
7. Klik op **Save** of **Save and Close** om uw configuratiewijzigingen voor de shop toe te passen.

### **Stap 5.** De eerste orderimport instellen en beginnen met het synchroniseren van orders {#step-5-setup-initial-order-import-and-start-synching-orders}

Haal bestaande orders uit Amazon binnen in ShopCtrl en activeer de doorlopende synchronisatie.

1. Ga naar **Shop configuration > Amazon 1P Synchronization** en open het gedeelte **Order Sync Settings**.
    <img src={require("/img/shop-amazon-1p-configuration-order-sync-settings.png").default} height="" width="800" />
1. **Startdatum van de import instellen:** kies met de instelling **Ignore Orders Before Timestamp** de datum vanaf wanneer u historische orders wilt importeren. Zo voorkomt u dat oudere, niet-relevante orders uw systeem vervuilen.
1. **Orderwijzigingen beheren:** schakel **Skip updated orders on import** in om historische orders over te slaan die Amazon als gewijzigd heeft gemarkeerd (bijvoorbeeld door annuleringen van niet-geleverde of beschadigde artikelen). Dit raden we aan, omdat ShopCtrl momenteel geen doorlopende import van orderwijzigingen ondersteunt.
1. **Historische orders verwerken:** rond orders die al in Amazon zijn bevestigd af in ShopCtrl:
    - **Allocate historical Acknowledged Orders:** vink dit aan om voorraad voor deze eerdere orders te reserveren.
    - **Create Shipment for Historical Acknowledged orders:** vink dit aan om zendingen aan te maken, zodat de fulfilmentstatus gelijk loopt.
1. **Orderimport activeren:** schakel in het deelvenster **Synchronization Customization** bovenaan de pagina de volgende functies in:
    - Vink de functie **Orders integration** aan.
    - Vink **Import new orders** aan voor de doorlopende synchronisatie van nieuwe orders.
    - Vink **Import missing orders** aan om te proberen orders te importeren die eerder mogelijk zijn gemist.
7. Klik op **Save** of **Save and Close** om uw configuratiewijzigingen voor de shop toe te passen.

**Nieuwe orders worden pas geïmporteerd als u de volledige synchronisatie inschakelt.** Zodra u het hoofdselectievakje voor de synchronisatie bovenaan de pagina Amazon 1P Synchronization aanvinkt, begint de import op basis van uw instellingen. Afhankelijk van uw configuratie worden op dat moment ook historische orders verwerkt.

### **Stap 6.** Het versturen van ASN's (Advanced Shipment Notices) configureren {#step-6-configure-asn-advanced-shipment-notice-submission}

Stel het automatisch aanmaken en versturen van Advanced Shipment Notices naar Amazon in.

1. Ga naar **Shop configuration > Amazon 1P Synchronization** en open het gedeelte **ASN Sync Settings**.
    <img src={require("/img/shop-amazon-1p-configuration-asn-sync.png").default} height="" width="800" />
2. **Bron van het ASN-nummer configureren:** schakel **Use BillOfLading ID as ASN Number** in als u bij het versturen naar Amazon liever het Bill of Lading-ID dan de standaardcode van de GroupShipment als ASN-nummer gebruikt.
3. **Labelsjablonen instellen:** configureer de sjablonen die tijdens het verzendproces worden gebruikt:
   - **ASN Label Template**: voor labels die tijdens het inpakken van de groepszending worden afgedrukt
   - **Pallet Label Template**: voor labels om pallets te identificeren
4. **Palletinstellingen configureren:** bepaal hoe pallets in uw ASN worden verwerkt:
   - **Print ASN label per pallet**: schakel dit in om voor elke pallet een apart ASN-label te genereren
   - **Pallet Own Weight**: geef het standaardgewicht van een lege pallet op in kilogram
   - **Gewicht van dozen configureren:** stel met **Carton Own Weight** het standaardgewicht van lege dozen in kilogram in.
5. **Export van zendingen activeren:** schakel in het deelvenster **Synchronization Customization** bovenaan de pagina **Export Shipments** in om ASN-gegevens naar Amazon te gaan sturen.
6. Klik op **Save** of **Save and Close** om uw configuratiewijzigingen toe te passen.


## Het instellen afronden {#completing-the-setup}

Zodra alle zes de configuratiestappen zijn afgerond, **schakelt u de synchronisatie in** door het hoofdselectievakje voor de synchronisatie bovenaan de instellingenpagina Amazon 1P Synchronization aan te vinken.

Uw integratie is nu actief. Inkooporders van Amazon worden op de achtergrond gesynchroniseerd, en afhankelijk van uw configuratie worden ASN's automatisch verstuurd wanneer u zendingen verwerkt.

Deze integratie stroomlijnt uw orderbeheer, doordat uw ShopCtrl-omgeving gelijk blijft lopen met uw Amazon-shop. Zo werkt u efficiënter en hebt u minder handwerk op de verschillende platforms.
