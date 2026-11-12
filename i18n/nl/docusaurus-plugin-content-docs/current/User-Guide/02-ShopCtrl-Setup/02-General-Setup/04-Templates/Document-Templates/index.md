---
slug: /docs/document-templates
description: "Documentsjablonen in ShopCtrl zijn Word-bestanden met merge fields, waarmee u automatisch documenten op maat genereert, zoals offertes en facturen."
---

# Document Templates

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Admin** of **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

## Overzicht {#overview}

Een **Document Template** is een Word-document dat u naar wens opmaakt en dat automatisch wordt gevuld met **Merge Fields** van ShopCtrl.
Telkens wanneer het document wordt gegenereerd, neemt ShopCtrl de tekst, de opmaak en de afbeeldingen over, waarbij de merge fields worden vervangen door de werkelijke gegevens.

Bij het genereren van het bestand haalt ShopCtrl de gegevens automatisch uit de database en vervangt het de placeholders door de werkelijke gegevens, rekening houdend met de regels en de opmaak in het Word-bestand.

Gebruik **Document Templates** om documenten op maat te maken, afgestemd op de wensen van uw klant of partner.
Zie [Documentsjablonen aanmaken en bewerken](./creating-and-editing-document-templates.md), [Merge fields](./merge-fields-in-document-templates.md), [Collecties](./collections-in-document-templates.md) en [Voorwaarden](./conditions-in-document-templates.md) voor meer informatie.

## Typen documentsjablonen {#types-of-document-templates}

Beschikbare typen **Document Template**:

| Naam van het sjabloon  | Record in ShopCtrl | Omschrijving                                                 |
| ---------------------- | ------------------ | ------------------------------------------------------------ |
| Invoice                | Invoice            | Factuur inclusief btw                                        |
| VatFreeInvoice         | Invoice            | Factuur zonder btw                                           |
| Credit Invoice         | Invoice            | Document met een terugbetaling op een eerder verstuurde factuur |
| Reminder1st            | Invoice            | Voor het instellen van automatische herinneringen            |
| Reminder2nd            | Invoice            | Voor het instellen van automatische herinneringen            |
| Reminder3rd            | Invoice            | Voor het instellen van automatische herinneringen            |
| Offer                  | Offer              | Documentsjabloon voor offertes                               |
| Order                  | Sales Order        | Documentsjabloon voor verkooporders                          |
| PackingSlip            | Order Shipment     | Pakbonsjabloon dat voor de zending van de verkooporder wordt gegenereerd |
| PickList               | Order Shipment     | Picklijst die voor de magazijnafdeling wordt gegenereerd     |
| ShippingLabel          | Order Shipment     | Sjabloon voor verzendlabels                                  |
| PurchaseOrder          | Purchase Order     | Inkooporderdocument dat voor de leverancier wordt gegenereerd |
| ReturnForm             | Return             | Sjabloon voor het retourformulier                            |
| ProductLabel           | Product            | Barcodelabel voor een product                                |
| StockItemLabel         | Stock Item         | Barcodelabel voor een voorraaditem                           |
| WarehouseLocationLabel | Warehouse location | Barcodelabel voor een magazijnlocatie                        |
| Undefined              | Free to use        | Niet gedefinieerd                                            |
