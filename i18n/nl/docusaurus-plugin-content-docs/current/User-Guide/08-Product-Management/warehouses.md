---
sidebar_position: 10
slug: /docs/warehouses
description: "Magazijntypen in ShopCtrl (private, fulfilment, leverancier en dropship), magazijnadressen en de prioriteit die wordt gebruikt bij het toewijzen van voorraad."
---
# Magazijnen 



<img src={require("/img/Warehouses-overview.png").default} height="" width="800" />

## Overzicht van magazijnen {#warehouses-overview}
ShopCtrl ondersteunt verschillende typen magazijnen:
* Private
* Fulfilment
* Leveranciers:
    * Supplier
    * Dropship

Het factuur- en verzendadres van het magazijn stelt u in op de detailpagina van het magazijn. Deze adressen worden gebruikt voor het automatisch genereren van documenten en verzendlabels. 
U kunt ook de prioriteit van het magazijn instellen. Daarmee wordt rekening gehouden bij het toewijzen van producten die in verschillende magazijnen liggen.

### Magazijn van het type Private {#private-type-warehouse}
Het type **Private** is uw eigen magazijn, waar u uw goederen opslaat, voorraaditems ontvangt en inboekt, en orders inpakt en verzendt. Het private magazijn ondersteunt een voorraadbeheersysteem: u maakt locaties aan en legt precies vast waar een product ligt, tot op het vak in de stelling.
U kunt de functionaliteit ook uitbreiden door de optie [Advanced Warehouse](/User-Guide/09-Purchasing/advanced-warehouse.md) in te schakelen. Daarmee wordt elk voorraaditem uniek voor het voorraadbeheer.

#### Locatietypen {#location-types}
Standaard is een locatie van het type **Pick**: hier kunt u uw producten opslaan, toewijzen en picken. U kunt deze onderverdelen in gang, sectie, plank en vak.

U kunt ook locaties van het type **Bulk** aanmaken om een willekeurig aantal producten op te slaan voor later gebruik. Deze voorraad wordt niet automatisch aan verkooporders toegewezen, maar het toewijzingssysteem geeft aan dat er vrije voorraad is die niet gepickt kan worden. Om de voorraad voor verkooporders te gebruiken, verplaatst u deze naar een locatie van het type Pick.

Locaties van het type **Quarantine** worden vooral gebruikt voor producten die door klanten naar het magazijn zijn geretourneerd en beoordeeld moeten worden. De voorraadhoeveelheid houdt geen rekening met quarantainelocaties, en producten op deze locaties kunnen niet worden toegewezen. 
Om het product terug te brengen in de normale toewijzing, verplaatst u het naar een van de locaties van het type Pick.

Het locatietype **Purchase Order** is een systeemlocatie die wordt gebruikt om binnenkomende inkoopproducten bij te houden en de verandering in de voorraadhoeveelheid te voorspellen.

### Magazijn van het type Fulfilment {#fulfilment-type-warehouse}
**Fulfilment**: een koppeling met een fulfilmentcentrum van een derde partij. U kunt de voorraadniveaus ook realtime volgen en de orders verzenden via de gekoppelde vervoerders. 

ShopCtrl biedt een aantal koppelingen met verschillende Warehouse Management Systems, zoals:

| Warehouse Management System | WMS-type |
| --- | --- |
| Landis (US) | Veracore |
| Pacific Mountain Logistics (US) | 3PL Central |
| Seacon Logistics (NL) | Custom |
| B2C Europe (NL, DE) | Custom |
| Arvato (DE) | SAP Lite |
| FAR Group (CN) | Custom |
| DocData (NL) | Custom |

### Leveranciersmagazijnen {#supplier-warehouses}
Naast uw eigen voorraad kunt u in ShopCtrl ook de voorraad in de magazijnen van uw leveranciers volgen.
ShopCtrl ondersteunt twee typen magazijnen die aan een leverancier kunnen worden gekoppeld: 

**Supplier**: dit type magazijn wordt gebruikt om met uw leveranciers te synchroniseren en de voorraadniveaus van hun magazijnen in ShopCtrl te volgen. U kunt een regelmatige voorraadimport vanuit het WMS van de leverancier instellen, zodat u een duidelijk beeld hebt van de beschikbaarheid van producten.

**Dropship**: biedt deels dezelfde functionaliteit als het magazijntype Supplier, maar wordt gebruikt om dropshiporders toe te wijzen vanuit het magazijn van uw leverancier. 
Een dropshipmagazijn wordt automatisch aangemaakt als in de leveranciersinstellingen is aangegeven dat de leverancier dropshipment aanbiedt.

U kunt vervoerdersaccounts aan alle leveranciersmagazijnen koppelen om zendingen en alle bijbehorende documenten aan te maken en deze gebruiksklaar naar uw leverancier te sturen.

De voorraad in beide magazijnen wordt opgeteld in Product management > Stock Overview.
De voorraadniveaus van een product in alle magazijnen ziet u via Product > Stock > Supplier Stock.
