---
sidebar_position: 7
slug: /docs/postnl
description: "Koppel PostNL aan ShopCtrl met uw PostNL API-gegevens om zendingen aan te maken en de teruggestuurde pdf-labels automatisch toe te voegen."
---

# PostNL 


<img src={require("/img/logo_postnl.png").default} height="" width="" />

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::
## Over PostNL {#about-postnl}
PostNL bezorgt voor iedereen: elke dag pakketten en vijf dagen per week post. Op een doordeweekse dag bezorgt PostNL gemiddeld 900.000 pakketten en 6,8 miljoen brieven in de Benelux. PostNL is voor zijn klanten de onmisbare schakel tussen afzenders en ontvangers, en de verbinding tussen de fysieke en de digitale wereld.

 

## Over de integratie {#about-the-integration}
Volledig geautomatiseerde koppeling met uw PostNL (API)-gegevens.
Na een geslaagde aanroep stuurt de PostNL API een pdf terug, die automatisch aan de zending(en) wordt toegevoegd.

 

### Integratie-instellingen {#integration-settings}
U beheert de instellingen van het PostNL-vervoerdersaccount via:

Configuration -> Transport -> Carrier Accounts

U voegt een nieuw account toe door op de knop ‘add’ te klikken en ‘PostNL’ te selecteren.

<img src={require("/img/postnl_settings.png").default} height="" width="800" />

#### PostNL-accountgegevens {#postnl-account-info}
Vul de API-sleutel, de klantcode en het accountnummer in. Deze kunt u bij PostNL aanvragen.

Gebruik de knop ‘test credentials’ om te controleren of uw gegevens geldig zijn.
Let op: de knop ‘test credentials’ werkt zowel in de live- als in de testmodus.

 

#### Standaardinstellingen {#default-settings}
In dit kader beheert u specifieke instellingen voor de vervoerder.

**Barcode Type**
Afhankelijk van het pakket, de verzending en het land van herkomst en bestemming werkt PostNL met verschillende barcodetypen.|
De meest gebruikte typen zijn:

<img src={require("/img/postnl_labeltypes.png").default} height="" width="800" />

Collection location
Wordt verstrekt door het integratieteam of de accountmanager van PostNL.

Default Product code
Hiermee selecteert u het gewenste type PostNL-dienst.

Beschikbare diensttypen:

| Code | Omschrijving van de dienst |
| --- | --- |
| 33084 | Grocery zending rbgg / avondbezorging |
| 22928 | Brievenbuspakje Extra NL |
| 33085 | Standaard Verzending |
| 33086 | Rembours |
| 33087 | Verhoogd Aansprakelijk |
| 33089 | Handtekening voor Ontvangst + Alleen huisadres |
| 33090 | Burenbelevering + Retour bij geen gehoor |
| 33091 | Rembours + Verhoogd aansprakelijk |
| 33093 | Rembours + Retour bij geen gehoor |
| 33094 | Verhoogd Aansprakelijk + Retour bij geen gehoor |
| 33096 | Handtekening voor ontvangst + Alleen huisadres + Retour bij geen gehoor |
| 33097 | Rembours + Verhoogd Aansprakelijk + Retour bij geen gehoor |
| 33189 | Handtekening voor ontvangst |
| 33288 | Rembours + Alleen Distributie |
| 33289 | Handtekening voor ontvangst + Alleen Distributie |
| 33385 | Alleen Huisadres |
| 33389 | Handtekening voor ontvangst + Retour bij geen gehoor |
| 33390 | Alleen Huisadres + Retour bij geen gehoor |
| 44945 | Global Pack |
| 44946 | EPS Standard delivery |
| 44960 | Belgium Deliver to stated address only |
| 44961 | Belgium Delivery to neighbour |
| 44962 | Belgium Signature on delivery + Deliver to stated address only |
| 44963 | Belgium Signature on delivery |
| 44964 | Belgium COD + Return when not home |
| 44965 | Belgium Extra cover (EUR 500) and Deliver to stated address only |
| 44966 | Belgium COD + Extra cover (EUR 500) + Return when not home |
| 44878 | Pickup at PostNL Location Belgium insured (commercial partner) |
| 44880 | Pickup at PostNL Location Belgium, no insurance (commercial partner) |
| 44940 | EU Pack Special to business |
| 44944 | EU Pack Special to consumer |
| 44992 | Direct Parcel to China |

**Use Sandbox**
Vink dit vakje aan als u zich nog in de testfase bevindt.
