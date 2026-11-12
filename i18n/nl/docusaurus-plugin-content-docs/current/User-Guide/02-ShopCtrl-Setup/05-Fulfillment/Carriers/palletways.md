---
sidebar_position: 6
slug: /docs/palletways
description: "Koppel Palletways aan ShopCtrl voor geautomatiseerde vooraanmeldingen en ophaalinstructies voor express palletleveringen in heel Europa."
---

# Palletways 


<img src={require("/img/logo_palletways.png").default} height="" width="" />

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

## Over Palletways {#about-palletways}
Express palletbezorging naar Europa
Express palletbezorging in 24 Europese landen via een netwerk van meer dan 400 logistieke partners, met verschillende diensten zoals bezorging in de ochtend, bezorging op een vast tijdstip en avondbezorging, allemaal volledig te volgen via de toonaangevende cloudtechnologie van Palletways. Palletways levert binnen 24 tot 72 uur, afhankelijk van de locatie.
 

## Over de integratie {#about-the-integration}
Volledig geautomatiseerde vooraanmeldingen en ophaalinstructies voor alle Palletways-zendingen.

 

### Integratie-instellingen {#integration-settings}
U beheert de instellingen van het Palletways-vervoerdersaccount via:

Configuration -> Transport -> Carrier Accounts

U voegt een nieuw account toe door op de knop ‘add’ te klikken en ‘Palletways’ te selecteren.

<img src={require("/img/palletways_settings.png").default} height="" width="800" />

#### Testmodus {#test-mode}
Schakel de testmodus in terwijl u de plug-in configureert.

 

#### Palletways-accountinstellingen {#palletways-account-settings}
Vul de API-sleutel, de accountnaam en de accountcode in. Deze kunt u bij Palletways aanvragen.

De tracking-URL kan naar uw eigen website verwijzen en wordt gebruikt in transactionele e-mails aan de klant.
Bijvoorbeeld:
```
http://www.yourwebsite.net/tracktrace/?track[]={0}
```
De placeholder {0} wordt vervangen door het werkelijke trackingnummer.

Gebruik de knop ‘test connection’ om te controleren of uw gegevens geldig zijn.
Let op: de knop ‘test connection’ werkt zowel in de live- als in de testmodus.

 

#### Uploadinstellingen {#upload-settings}
ShopCtrl voert dagelijks een upload uit om alle nieuwe pakketten naar Palletways te sturen.

**Day offset**
Het aantal dagen voordat een order naar Palletways wordt geüpload.
Sommige verkopers hebben 1 of 2 werkdagen nodig om wijzigingen in de order te verwerken.
De standaardinstelling is één (1).
Op het moment van schrijven ondersteunt Palletways ophalen op dezelfde dag niet.

**Upload time**
Bepaalt het tijdstip van de upload.

 

#### Standaardwaarden {#default-values}
Deze waarden worden overgenomen in de pakketinstellingen.

**Transaction Type:**
Collection / Delivery / 3th party (geleverd door Palletways)

**Tail Lift**
Of voor de pallet of het pakket een vrachtwagen met laadklep nodig is.

**Book in request**
Selecteer deze optie als voor de zending vóór levering een afspraak moet worden gemaakt.

**Collection service**
Economy / Premium

**Delivery service type**
Economy / Premium

**Manifest note**
Deze opmerking wordt op het manifest afgedrukt. U kunt hierin ook [merge fields](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md) van ShopCtrl gebruiken.

> Bijvoorbeeld:
OPMERKING VOOR DE CHAUFFEUR: vermeld bij het laden ALLEEN referentienummer `$$OrderShipment.ShippingCode$$`.
Bel vóór het lossen: `$$Order.ShipToName$$`, telefoonnummer `$$Order.ShipToPhone$$` / `$$Order.BillToPhone2$$`.
Als er niet wordt opgenomen, toch leveren zonder afspraak/handtekening.
