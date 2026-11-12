---
sidebar_position: 7
slug: /docs/exportimport
description: "Exporteer de gefilterde tabel met inkooporders in ShopCtrl naar een Excel-bestand en maak inkooporders aan via de API."
---

# Export/import 


Met de exportfunctie exporteert u de gefilterde tabel met inkooporders naar een Excel-document. 
<img src={require("/img/PO_overview_06.png").default} height="" width="" />

| Actie | Beschrijving |
| --- | --- |
| Export current page | Exporteert de eerste pagina van de gefilterde inkooporders. Het aantal hangt af van het aantal orders per pagina, dat u in het menu onderaan kunt instellen |
| Export selection | Exporteert alle geselecteerde inkooporders |
| Export All | Exporteert alle gefilterde inkooporders |

Als u een van de menuopties selecteert, verschijnt een venster **Save As** waarin u de naam en de locatie opgeeft waar u het bestand wilt opslaan.

De orders worden opgeslagen in de indeling **.xlsx**.

Dit zijn de kolommen die worden geëxporteerd:

| Kolomnaam | Beschrijving |
| --- | --- |
| Code | Code van de inkooporder |
| SalesOrderCode | Code van de verkooporder (voor dropship- en back-to-back-inkooporders) |
| Date | Datum waarop de inkooporder is aangemaakt. |
| OurReference | Toont een referentie. Bij back-to-back- en dropshiporders wordt hier ook de code van de verkooporder getoond. |
| Supplier Company | Toont de bedrijfsnaam van de leverancier en de volledige naam van de leverancier tussen haakjes |
| Order Total | Totaalbedrag van de inkooporder in de valuta die voor de inkooporder is geselecteerd |
| Base Order Total | Totaalbedrag van de inkooporder in de valuta van de shop owner |
| ExpectedDeliveryDate | Toont de verwachte leverdatum als die voor de inkooporder is ingesteld |
| Supplier Name | Toont de volledige naam van de leverancier |
| Currency | Valuta van de inkooporder |
| Shop | Toont de shop waaraan de inkooporder is gekoppeld |
| Main Status | De hoofdstatus van de inkooporder |
| Submit Status | Geeft aan of de inkooporder naar de leverancier is verstuurd |
| Provision Status | Provisioning-status van de inkooporder. |
| Payment Status | Betaalstatus van de inkooporder |
| Main Status Action Date | De datum waarop de hoofdstatus van de inkooporder is gewijzigd |
| Submit Status Action Date | De datum waarop de verzendstatus (submit status) van de inkooporder is gewijzigd |
| Provision Status Action Date | De datum waarop de Provisioning-status van de inkooporder is gewijzigd |
| Payment Status Action Date | De datum waarop de betaalstatus van de inkooporder is gewijzigd |
| Type | Het type inkooporder |


## Import {#import}
ShopCtrl biedt de mogelijkheid om inkooporders aan te maken via de API. Zie de API-documentatie voor meer informatie.