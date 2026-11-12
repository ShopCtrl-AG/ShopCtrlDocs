---
sidebar_position: 4
slug: /docs/product-fulfillment
description: "Het tabblad Fulfillment van een ShopCtrl-product: vervoerders die voor het product beschikbaar zijn, referentieprijzen voor verzending en de afmetingen van de productverpakking."
---
# Productfulfilment 


## Vervoerders {#carriers}

Hier ziet u een lijst met vervoerders die in het systeem zijn ingeschakeld en voor het product beschikbaar zijn.

<img src={require("/img/product-details-categories.png").default} height="" width="800" />
Om verzendprijzen van vervoerders op deze pagina te tonen, moeten er tarieven zijn opgegeven voor de meest gebruikte verzendroutes. 
Dit doet u door de prijzen te configureren op **Carrier account > Prices tab**. 

Vervoerdersprijzen geven de voorkeursvervoerder voor een bepaalde bestemming aan (van land naar land). Bij het aanmaken van een zending wordt de beste vervoerder bepaald op basis van de prioriteit van de vervoerder en de laagste prijs voor de route. Het systeem wijst die vervoerder automatisch aan de zending toe, tenzij de vervoerder is uitgeschakeld voor de shop of het magazijn van waaruit het product wordt verzonden.

Let op: de prijzen op dit tabblad zijn alleen ter referentie. De prijzen zijn voor alle producten in het systeem gelijk.

## Productverpakking {#product-package}

Als een product in een specifieke verpakking naar de klant moet worden verzonden, kunt u op dit tabblad de afmetingen van de verpakking opgeven. 
<img src={require("/img/product-details-product-package.png").default} height="" width="800" />

Voeg een rij toe door op de knop **Add** te klikken. Alle weergegeven velden zijn bewerkbaar.
Kies een **Unit** voor de afmetingen en voer de **Length**, **Width**, **Height** en **Weight** van de verpakking in. Kies een **Cargo Holder** en geef aan of u het pakket zelf inpakt of een verpakkingsservice nodig hebt - **Own Parcel Pkg**.
Deze informatie wordt later gebruikt: de afmetingen worden automatisch aan de vervoerders doorgegeven voor de berekening van de verzendkosten. 
Klik op **Save** of **Save and Close** boven aan het producttabblad om de wijzigingen op te slaan.
Om een verpakkingsrij te verwijderen, selecteert u de rij en klikt u op **Remove**.

## Transportcategorieën {#transport-categories}
Op basis van de productafmetingen kunt u in de vervolgkeuzelijst een transportcategorie selecteren die later wordt gebruikt voor de berekening van de transportkosten.
<img src={require("/img/product-details-transport-categories.png").default} height="" width="800" />


## Magazijnen {#warehouses}

Op dit tabblad staan de magazijnen waar het product ligt: private, fulfillment, supplier type en dropship.
De gemiddelde inkoopprijs wordt alleen berekend voor de magazijnen waarnaar inkooporders zijn verstuurd.
<img src={require("/img/product-details-warehouses.png").default} height="" width="800" />

## Voorraad {#stock}

Het tabblad Stock bundelt zes tabbladen die allemaal over voorraadbeheer en magazijnhandelingen gaan.

### Eigen voorraad {#private-stock}

Als het product dat u bekijkt in uw eigen magazijn ligt (private of fulfillment), vindt u op dit tabblad gedetailleerde informatie over de locatie waar het ligt en over de voorraadtransacties.

Afhankelijk van de modus waarin uw magazijn op dat moment werkt, eenvoudig of geavanceerd, kan de interface van dit tabblad verschillen.

#### Eenvoudig magazijnbeheer {#simple-warehousing}

<img src={require("/img/product-details-private-stock-simple-warehousing.png").default} height="" width="800" />

Bij eenvoudig magazijnbeheer kunt u voorraad verplaatsen en het voorraadniveau van het product aanpassen zonder een inkooporder aan te maken en de voorraad via Provisioning in te boeken. De voorraad kan vanuit uw magazijnsysteem worden gesynchroniseerd via een geplande Excel-import of via de API.

De knop **Add new location** voegt voorraad toe op een andere locatie dan de locatie in de tabel. 
Zonder inkooporder of opgegeven inkoopprijs (de inkoopprijs van de voorkeursleverancier wordt gebruikt) kunt u een nieuw eenvoudig voorraaditem van het product in het magazijn aanmaken.
**Stock update** - hiermee bewerkt u de voorraad op een specifieke locatie.
**Stock move** - hiermee verplaatst u voorraad van de ene locatie naar de andere.
U kunt voorraad ook [**parkeren**](/User-Guide/04-Order-Management/03-Allocation-of-orders/parked-stock.md) door op de winkelwagenknop aan het eind van de locatierij te klikken.

#### Geavanceerd magazijnbeheer {#advanced-warehousing}
Nadat het product is omgezet naar een geavanceerd product, krijgt elk voorraaditem een uniek barcodelabel. Het is dan niet meer mogelijk om een product aan de voorraad toe te voegen zonder inkooporder en zonder de vereiste gegevens voor elk voorraaditem op te geven. 
Sommige extra handelingen, zoals het verplaatsen van voorraad, kunt u uitvoeren vanaf de pagina [Magazijnhandelingen](/User-Guide/08-Product-Management/warehouse-operations.md).

### Leveranciersvoorraad {#supplier-stock}

<img src={require("/img/product-details-stock-supplier-stock.png").default} height="" width="800" />

Hier wordt de informatie verzameld over de beschikbaarheid van dit product in de magazijnen van uw leveranciers. U kunt het voorraadsaldo direct op deze pagina bijwerken door op de knop voor bijwerken te klikken. Of u uploadt een Excel-bestand met prijs- en voorraadgegevens op de detailpagina van de leverancier. Zie [Leveranciersproducten importeren](/User-Guide/09-Purchasing/Suppliers/import-supplier-products.md) voor meer informatie.

### Geparkeerde voorraad {#parked-stock}

<img src={require("/img/product-details-parked-stock.png").default} height="" width="800" />

Als uw systeem zo is ingesteld dat producten automatisch aan orders worden toegewezen, kan het voorkomen dat u een deel van de voorraad voor specifieke orders moet reserveren.

U kunt een deel van de niet-toegewezen voorraad parkeren vanaf het tabblad Private Stock. Of gebruik de optie **Deallocate and park stock** op het tabblad met orders. 
Op deze pagina ziet u hoeveel voorraaditems van het product zijn geparkeerd en kunt u deze items beheren.

**Remove** - verwijdert de volledige hoeveelheid van de geselecteerde geparkeerde items. Alle geselecteerde voorraaditems krijgen in het magazijn de markering verwijderd en zijn niet meer beschikbaar voor toewijzing.
**Release as available stock** - wijzigt de status van de geparkeerde voorraaditems naar beschikbaar, zodat de producten automatisch aan eventuele backorders worden toegewezen.
**Assign to orders** - opent een nieuw scherm waarin u bepaalt aan welke backorders het geparkeerde product wordt toegewezen. 

**Stock move** - opent een nieuw venster waarin u voorraad van de huidige locatie naar een andere kunt verplaatsen. 


Zie [Parked Stock](/User-Guide/04-Order-Management/03-Allocation-of-orders/parked-stock.md) voor meer informatie over het parkeren en toewijzen van gereserveerde voorraad.
 
### Voorraadhistorie {#stock-history}

Het tabblad Stock History toont alleen informatie als de instelling Keep stock is ingeschakeld op het tabblad Stock Settings.

<img src={require("/img/product-details-stock-history.png").default} height="" width="800" />

Dit tabblad toont drie grafieken: Quantity available, Quantity on hand en Quantity reserved.
U kunt de periode en het magazijn wijzigen waarvoor u de grafiek wilt bekijken. Standaard zijn alle magazijnen geselecteerd. Een andere consolidatieoptie voor de grafieken is alle dropshipmagazijnen.

### Voorraadtransacties {#stock-transactions}

Op dit tabblad volgt u de bewegingen van de voorraaditems van dit product in uw magazijn. Gebruik de zoekfunctie om te filteren op magazijn, locatie of reden van de voorraadbeweging.
<img src={require("/img/product-details-stock-transactions.png").default} height="" width="800" />

Voorraadtransacties volgen niet alleen de transacties in uw eigen magazijnen of fulfilmentmagazijnen, maar ook de transacties van inkoopproducten die aan dit product zijn gekoppeld in het magazijn van uw leverancier. Als u de prijslijst van de leverancier bijwerkt via de [leveranciersimport](/User-Guide/09-Purchasing/Suppliers/import-supplier-products.md), is de voorraadwijziging dus ook op deze pagina zichtbaar.

### Voorraadinstellingen {#stock-settings}

Het aantal instellingen op deze pagina hangt af van de modus van uw eigen magazijn. 

#### Instellingen voor eenvoudig magazijnbeheer {#simple-warehousing-settings}

<img src={require("/img/product-details-stock-settings-simple.png").default} height="" width="800" />

U kunt bepalen of u voorraad van dit product wilt bijhouden en daarmee een historie van voorraadwijzigingen (zichtbaar op het tabblad Stock History). Stel de minimale en maximale voorraadwaarden in die worden gebruikt bij de berekening van de inkoopordervoorstellen.

Markeer het product als End of life als u het niet meer wilt bestellen of als het uit de markt is genomen. Het product wordt dan niet meer meegenomen in de berekening van de inkoopordervoorstellen.

**Allocation. Prevent auto deallocation.**
Als er een Trigger is ingesteld die bij bepaalde gebeurtenissen na uitvoering voorraad vrijgeeft, voorkomt dit selectievakje dat de actie voor het vrijgeven van de toewijzing voor dit product wordt uitgevoerd.

**Storage settings**: voor producten met een houdbaarheid. U kunt het aantal dagen houdbaarheid opgeven en instellen wanneer er een herinnering wordt verstuurd.

#### Instellingen voor geavanceerd magazijnbeheer {#advanced-warehousing-settings}
Voor [**Advanced** magazijnbeheer](/User-Guide/09-Purchasing/advanced-warehouse.md) zijn er meer opties die u per product kunt configureren.
U kunt instellen of het product een lot, serienummer of vervaldatum vereist. Stel in wanneer een vervalwaarschuwing wordt gegeven en wijzig het magazijnlabel dat voor een specifiek product wordt afgedrukt. 
 
<img src={require("/img/product-details-stock-settings-advanced.png").default} height="" width="800" />

**Product property registration**
Hier bepaalt u of het product een **Lot number**, **Serial number** of **Expiry date** vereist.

Zodra de vervaldatummodus voor een product is ingeschakeld, moet bij het inboeken via Provisioning een **Expiry date** worden opgegeven.
Voor elk product met een vervaldatum kunt u twee **Expiry warnings** instellen. Zodra het product de status **First expiry warning** of **Second expiry warning** krijgt, wordt de status van dat specifieke voorraaditem gewijzigd in **Almost expired**. 

:::warning[**Let op:**]

De First Expiry Warning moet vóór de Second Expiry Warning worden gegeven. 

:::

**Warehouse**
Hier bepaalt u of u voor elk voorraaditem in het magazijn een uniek magazijnlabel wilt afdrukken. Het standaardlabel wordt ingesteld op het niveau van de shop owner:  **Shop owner details page > Warehouse settings.**
Op deze pagina kunt u die instelling overschrijven en een specifiek label voor dit product selecteren. 

### Voorraaditems {#stock-items}

Nadat de modus voor geavanceerd magazijnbeheer in het systeem is ingeschakeld en eenvoudige producten zijn omgezet naar geavanceerde producten, wordt elk voorraaditem in het magazijn geregistreerd met een nieuw record met lot/serienummer/vervaldatum. Alle voorraaditems die voor het product zijn geregistreerd, staan op dit tabblad.

<img src={require("/img/product-details-stock-stock-items.png").default} height="" width="800" />

Zie voor meer informatie over de weergegeven gegevens: [Advanced Warehouse](/User-Guide/09-Purchasing/advanced-warehouse.md#stock-items-overview-for-an-advanced-product).