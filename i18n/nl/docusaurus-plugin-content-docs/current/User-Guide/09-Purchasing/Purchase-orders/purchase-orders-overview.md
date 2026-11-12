---
sidebar_position: 1
slug: /docs/purchase-orders-overview
description: "Een rondleiding door het scherm met inkooporders in ShopCtrl: de ordertabel, het actiepaneel en de bulkacties die beschikbaar zijn voor een selectie."
---
# Overzicht van inkooporders 


Met deze module beheert u de inkoop van producten bij externe leveranciers. Het hoofdscherm met de tabel met inkooporders geeft een duidelijk beeld van wat er speelt in uw inkoopbeheer. 
In dit artikel worden de onderdelen en panelen van het scherm met inkooporders besproken.

<img src={require("/img/PO_overview_01.png").default} height="" width="800" />

## Actiepaneel {#actions-panel}

Hier staan alle belangrijke handelingen die u op de inkooporders kunt toepassen. 
:::info[Let op]

De knoppen worden zichtbaar wanneer een rij met een inkooporder is geselecteerd.

:::

<img src={require("/img/PO_overview_08.png").default} height="" width="400" />

Hier is de volledige lijst met **acties** voor inkooporders:
| Actie | Beschrijving |
| --- | --- |
| Add | Opent een nieuw tabblad voor [Een gewone inkooporder aanmaken](/User-Guide/09-Purchasing/Purchase-orders/creating-a-purchase-order.md#creating-a-regular-purchase-order) |
| Edit | Opent een bestaande inkooporder om te bewerken. |
| Mail Supplier | Maakt een e-mail aan de leverancier aan op basis van een gekozen e-mailsjabloon. Zie [E-mailsjablonen beheren](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/managing-email-templates.md) voor meer informatie. |
| Provision | Opent een nieuw venster voor [Provisioning](/User-Guide/09-Purchasing/Purchase-orders/provisioning.md) van een bepaalde inkooporder. |
| Copy | Kopieert de geselecteerde inkooporder en opent deze in een nieuw tabblad om te bewerken. |
| Delete | Verwijdert de geselecteerde inkooporder. |
| Mark paid | Zet de betaalstatus van de geselecteerde inkooporder op "Paid" |

### Bulkacties {#bulk-actions}

Houd de toets `Shift` ingedrukt om meerdere opeenvolgende inkooporders te selecteren. Gebruik de toets `Ctrl` om meerdere niet-opeenvolgende orders te selecteren.
De knoppen voor bulkbewerkingen worden zichtbaar wanneer rijen met orders zijn geselecteerd.
Gebruik bulkbewerkingen wanneer u dezelfde wijziging snel in meerdere orders wilt doorvoeren.

| Actie | Beschrijving |
| --- | --- |
| Mark paid | Zet de betaalstatus van de geselecteerde inkooporders op "Paid" |
| Mail Supplier | De gekozen inkooporders moeten aan dezelfde shop zijn gekoppeld en dezelfde leverancier hebben |

## Filterpaneel {#filter-panel}
Het filter voor inkooporders in ShopCtrl is een krachtige functie waarmee u selecties maakt op basis van vooraf gedefinieerde filters.
U kunt zoeken op trefwoord en filteren op status, leverancier, magazijn en type van de inkooporder. Zie [Inkooporders filteren](/User-Guide/09-Purchasing/Purchase-orders/filtering-purchase-orders.md) voor meer informatie.
Standaard toont het filter alle actieve inkooporders van alle leveranciers, voor alle magazijnen en van alle typen.

<img src={require("/img/PO_overview_05.png").default} height="" width="" />

## Exportpaneel {#export-panel}
Met de [exportfunctie](/User-Guide/09-Purchasing/Purchase-orders/exportimport.md) exporteert u de gefilterde tabel met inkooporders naar een Excel-document. 

<img src={require("/img/PO_overview_07.png").default} height="" width="" />

## Tabel met inkooporders {#purchase-orders-table}
Hier staan alle bestaande inkooporders. Inkooporders die aan verschillende shops zijn gekoppeld, herkent u eenvoudig aan het pictogram. 
Houd de voortgang van de inkoop bij met behulp van de statussen van de inkooporders. Orders die aandacht nodig hebben, zijn rood of oranje gemarkeerd. Beweeg de muis over de status van een inkooporder om een uitgebreide beschrijving van de huidige status te zien.
Dubbelklik op het **Sales order icon** om een nieuw venster te openen waarin u de betreffende verkooporder kunt bewerken.
Klik op het pictogram **PDF** in de rij van de order om het automatisch gegenereerde inkooporderdocument in een pop-upvenster te openen.
U kunt ook direct opgeven welke producten voor de inkooporder zijn ontvangen door in de rij van de order op de knop **Provision** te klikken.
De tabel met inkooporders is volledig aan te passen. Zie [De tabelindeling aanpassen](/User-Guide/01-ShopCtrl-Basics/Tips-and-Tricks/customizing-the-table-layout.md) voor meer informatie.

<img src={require("/img/PO_overview_13.png").default} height="" width="800" />

Kort overzicht van de standaardindeling van de tabel met inkooporders:
| Kolomnaam | Beschrijving |
| --- | --- |
| Shop icon  | Pictogram van de shop waaraan de inkooporder is gekoppeld |
| Main status | De hoofdstatus van de inkooporder |
| Submit status | Geeft aan of de inkooporder naar de leverancier is verzonden |
| Provision status | Provisioning-status van de inkooporder |
| Payment status | Betaalstatus van de inkooporder |
| Code | Code van de inkooporder |
| Date / Time | Datum en tijd waarop de inkooporder is aangemaakt |
| Expected | Toont de geplande leverdatum als die voor de inkooporder is ingesteld |
| Supplier | Toont de bedrijfsnaam van de leverancier en tussen haakjes de volledige naam van de leverancier |
| Sales order | Toont de code van de verkooporder bij dropship- en back-to-back-orders. Dubbelklik om een nieuw venster te openen waarin u de betreffende verkooporder kunt bewerken |
| Type | Geeft het type van de inkooporder aan. ShopCtrl ondersteunt drie typen inkooporders: [Regular](/User-Guide/09-Purchasing/Purchase-orders/creating-a-purchase-order.md#creating-a-regular-purchase-order), [Dropship](/User-Guide/09-Purchasing/Purchase-orders/creating-a-purchase-order.md#creating-a-dropship-purchase-order) en [Back-to-Back](/User-Guide/09-Purchasing/Purchase-orders/creating-a-purchase-order.md#creating-a-back-to-back-purchase-order) |
| Warehouse | Geeft het magazijn aan waar de order naartoe gaat |
| Custom status | Aangepaste status van de inkooporder |
| Total | Totaalbedrag van de inkooporder in de valuta van de leverancier |
| PDF | Een automatisch gegenereerd factuurdocument. Door op een pdf-pictogram te klikken, wordt een automatisch gegenereerde inkooporderfactuur geopend in |
| Provision | De knop [Provision](/User-Guide/09-Purchasing/Purchase-orders/provisioning.md) is beschikbaar voor alle inkooporders die nog niet zijn ingeboekt |

Hier is een lijst met alle extra kolommen die u in de tabel met inkooporders kunt weergeven:
| Kolomnaam | Beschrijving |
| --- | --- |
| ID | Interne ShopCtrl-ID van de inkooporder  |
| Shop | De naam van de shop waaraan de inkooporder is gekoppeld |
| Shop ID | Interne ShopCtrl-ID van de shop |
| Base Total | Basistotaal van de inkooporder in de standaardvaluta van de shop owner |
| Main Status Date | De datum van de laatste wijziging van de hoofdstatus |
| Custom Status Date | De datum van de laatste wijziging van de aangepaste status |
