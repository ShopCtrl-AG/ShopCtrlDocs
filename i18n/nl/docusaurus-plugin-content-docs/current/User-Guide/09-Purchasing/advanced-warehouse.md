---
sidebar_position: 3
slug: /docs/advanced-warehouse
description: "Registreer lotnummers, serienummers en vervaldatums per voorraaditem in ShopCtrl door van een product een geavanceerd product te maken."
---

# Advanced Warehouse 


ShopCtrl biedt nieuwe functionaliteit om meer gegevens te registreren en te beheren voor producten die op voorraad worden gehouden. 
U kunt nu aan elk voorraaditem in een magazijn een **Lot number**, **Serial number** en **Expiration date** toevoegen.

## Een geavanceerd product instellen {#setting-up-an-advanced-product}
Om het producttype te wijzigen in een **Advanced product**, controleert u de productinstellingen van het betreffende product.

<img src={require("/img/Setting_up_Expiry_01a.png").default} height="" width="800" />

Kies in het productmenu **Stock > Stock Settings**.

### Registratie van producteigenschappen {#product-property-registration}
Hier bepaalt u of het product een **Lot number**, **Serial number** of **Expiry date** vereist.

Zodra de vervaldatummodus voor een product is ingeschakeld, moet bij het inboeken via Provisioning een **Expiry date** worden opgegeven.
Voor elk product met een vervaldatum kunt u twee **Expiry warnings** instellen. Zodra het product de status **First expiry warning** of **Second expiry warning** krijgt, wordt de status van dat specifieke voorraaditem gewijzigd in **Almost expired**. 

| Veld | Beschrijving |
| --- | --- |
| Expire Warning Unit | Dag of maand |
| First Expiry Warning | Stel de eerste waarschuwingsdatum in waarop de productstatus wordt gewijzigd in bijna verlopen |
| Second Expiry Warning | Stel de tweede en laatste waarschuwingsdatum vóór de vervaldatum in. Laat het veld leeg als u geen tweede waarschuwing nodig hebt. |
:::warning[**Let op:**]

De First Expiry Warning moet vóór de Second Expiry Warning worden gegeven. 

:::

### Magazijnlabels instellen voor geavanceerde producten {#setting-up-warehouse-labels-for-advanced-products}

Op het niveau van de shop owner kunt u opgeven welke labels worden afgedrukt. 
**Shop owner details page > Warehouse settings**

| Sjabloonnaam | Beschrijving |
| --- | --- |
| Product label template | een sjabloon voor eenvoudige voorraaditems (producten) |
| Stock item label template | een sjabloon voor geavanceerde voorraaditems (waarvoor een lot-/serienummer of vervaldatum vereist is) |
| Warehouse location label template | een sjabloon om een specifieke locatie voor een voorraaditem in een magazijn aan te geven. |


<img src={require("/img/shop-owner-settings-warehouse.png").default} height="" width="800" />

Labelsjablonen worden door ShopCtrl geleverd en kunnen in de sjabloonconfiguratie worden gewijzigd. 
De standaarddocumentsjablonen gebruiken voorwaardelijke merge fields om velden te verbergen als ze niet beschikbaar zijn.

U kunt ook een ander type label toewijzen dat specifiek is voor een product.
Dit label stelt u in bij de voorraadinstellingen van het product:
**Product details page > Stock > Stock Settings > Warehouse**

<img src={require("/img/Setting_up_Expiry_04.png").default} height="" width="" />

Voor dit product wordt dan precies dit label gebruikt. 
:::warning[**Let op**]

Deze instellingen overschrijven de instellingen van de shop owner.

:::

Zie [Documentsjablonen aanmaken en bewerken](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/creating-and-editing-document-templates.md) en [Documentsjablonen beheren](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/managing-document-templates.md) voor meer informatie.

## Geavanceerde producten inkopen {#purchasing-advanced-products}

Volg deze stappen om geavanceerde producten voor uw magazijn in te kopen:

1. Maak een inkooporder aan en voeg een geavanceerd product toe zoals u gewend bent.
2. Boek de inkooporder na levering in via **Provision**. Er verschijnt een venster zoals dit:

<img src={require("/img/Provision_advanced_products_06.png").default} height="" width="800" />

Voor geavanceerde producten wordt de knop **Specify** weergegeven. Hiermee kunt u voor elk ontvangen voorraaditem een exact lotnummer, serienummer of vervaldatum opgeven.

3. Klik op de knop **Specify**. Er wordt een nieuw venster **Receive Now** geopend.

Schakel het selectievakje voor alles selecteren in om een vervaldatum en lotnummer in te stellen voor alle ontvangen producten. Voer de gegevens handmatig in of scan de items. 

<img src={require("/img/receive_now_01.png").default} height="300" width="" />

U kunt ook de ingevoerde gegevens voor specifieke items wijzigen en het aantal ontvangen items aanpassen.

<img src={require("/img/receive_now_03.png").default} height="300" width="" />

:::warning[Let op]

Het ShopCtrl-systeem staat niet toe dat u items inboekt die al verlopen zijn. 

:::

4. Klik op **Ok** zodra u klaar bent met het invoeren van de gegevens.
5. Klik op de Provisioning-pagina op **Save, Close and Print Labels**. 
Nu krijgt elk voorraaditem in het magazijn het juiste label.

## Overzicht van voorraaditems voor een geavanceerd product {#stock-items-overview-for-an-advanced-product}

Zodra geavanceerde producten op voorraad zijn ingeboekt, kunt u het voorraadniveau van een product bekijken in de productinstellingen: **Product > Stock > Stock Items.**

<img src={require("/img/product-details-stock-items-list.png").default} height="" width="800" />

Verlopen producten worden gemarkeerd met een rood uitroeptekenpictogram  <img src={require("/img/image_danger.png").default}  />. Voorraaditems die een waarschuwing hebben gekregen dat ze bijna verlopen, worden gemarkeerd met een geel driehoekje <img src={require("/img/image_13.png").default}  />. 
U kunt de voorraaditems ook filteren en doorzoeken. Standaard staat het filter op Only Available Stock Items.
Klik op het potloodpictogram in de tabel met voorraaditems om een specifiek voorraaditem te bewerken.

:::warning[**Let op:**]

Zodra een voorraaditem de status **Expired** krijgt, kan het niet meer aan de verkooporder worden toegewezen.

:::

Voorraaditems die met een bepaalde inkooporder zijn ontvangen, kunt u bekijken in die inkooporder: **Purchase order details page > Stock Items.**

<img src={require("/img/Stock_items_for_PO_01.png").default} height="" width="800" />

Ook hier kunt u alle hierboven genoemde filters toepassen.  
Klik op de knop **Print All** om de labels opnieuw af te drukken. Of selecteer specifieke voorraaditems waarvoor nieuwe labels moeten worden afgedrukt en klik op de knop **Print Selected**.

## Geavanceerde producten naar een klant verzenden {#shipping-advanced-products-to-a-customer}

Zodra u een nieuwe verkooporder ontvangt voor het toegewezen geavanceerde product, gaat u naar **Order details page > Fulfilment > Create Shipment**.

De nieuwe pagina **Shipment** wordt geopend in een nieuw tabblad. 

<img src={require("/img/shipping_sales_order_advanced_products_01.png").default} height="" width="800" />

:::warning[**Let op:**]

Het venster **Interactive Pick List** is uitsluitend bedoeld voor gebruik met een barcodescanner. Door het juiste label te scannen, wordt een specifiek voorraaditem gepickt. Zo voorkomt u dat u handmatig het verkeerde voorraaditem pickt.

:::

Als de verkooporder een of meer geavanceerde producten bevat, is er een **Interactive Pick Button** beschikbaar. Sla de zending op en klik op de knop **Interactive Picklist**. Er wordt een nieuw pop-upvenster geopend. 

:::info[**Let op:**]

Het venster **Interactive Pick List** wordt automatisch geopend nadat de barcode van de picklijst is gescand. 

:::

<img src={require("/img/Interactive_pick_01a.png").default} height="" width="800" />

Door de labels van specifieke voorraaditems te scannen, voorkomt u ook fouten waarbij een verkeerd product naar de klant wordt verzonden.
Hier scant u de specifieke voorraaditems met de vervaldatum die in de picklijst wordt getoond. Na het scannen zijn de producten gepickt en wordt de knop **Ok** ingeschakeld.
Als een voorraaditem met een latere vervaldatum wordt gescand, verschijnt er een foutmelding.
Zo worden producten met een eerdere uiterste verkoopdatum als eerste verzonden.

:::warning[**First expired, first out**]

De voorraaditems worden omgewisseld op het moment dat de zending wordt aangemaakt. Zo worden de producten met de dichtstbijzijnde vervaldatum altijd als eerste verzonden. 

:::

U kunt ook een alternatief kiezen voor een specifiek voorraaditem. Selecteer het voorraaditem dat moet worden vervangen en klik op de knop **Pick Alternative**.
Er wordt een lijst met beschikbare voorraaditems getoond, gegroepeerd op vervaldatum en lotnummer.


<img src={require("/img/Interactive_pick_02.png").default} height="" width="800" />

U kunt altijd nagaan welke voorraaditems precies naar een bepaalde klant zijn verzonden.
Open de verzonden verkooporder om deze te bewerken. Selecteer in het menu **Stock Items**

<img src={require("/img/sales_order_stock_items_01.png").default} height="" width="800" />

## Rapport over vervallende productvoorraad {#product-stock-expiration-report}

Het **Product Stock Expiration Report** geeft een duidelijk beeld van de stand van zaken rond producten met vervaldatums.
Selecteer in het onderdeel **Reporting** het **Product Stock Expiration Report**
Hier worden de producten gegroepeerd op vervaldatum.

<img src={require("/img/Product_stock_Expiration_report.png").default} height="" width="800" />

De producten worden in de volgende volgorde weergegeven:
1. Producten die al verlopen zijn.
2. Bijna verlopen producten, dat wil zeggen producten die de eerste vervalwaarschuwing hebben gekregen.
3. Producten die op het punt staan te verlopen, dat wil zeggen producten die de tweede vervalwaarschuwing hebben gekregen.

