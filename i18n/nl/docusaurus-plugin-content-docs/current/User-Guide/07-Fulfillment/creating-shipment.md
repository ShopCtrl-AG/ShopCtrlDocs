---
sidebar_position: 1
slug: /docs/creating-shipment
description: "Verzend een order in ShopCtrl door voorraad toe te wijzen uit een of meer magazijnen of van dropshipleveranciers, en daarna de zending aan te maken."
---
# Een zending aanmaken



Het afhandelen van een order begint met het toewijzen van voorraad aan de order. De order kan uit één magazijn worden toegewezen of worden verdeeld over meerdere magazijnen of dropshipleveranciers. U kunt pick- en paklijsten maken en labels voor de pakketten genereren. Nadat de zending aan een vervoerder is overgedragen, markeert u deze als laatste stap als verzonden. Op dat moment krijgt de klant, afhankelijk van de integratie met een verkoopkanaal of de ingestelde triggers, een trackingnummer.

## Een order handmatig verzenden vanuit een eigen magazijn: {#how-to-manually-ship-an-order-from-a-private-warehouse}

1. Ga naar **Sales > Orders**.
2. Zoek en open de **order** die u wilt verzenden.
3. Als er nog geen voorraad aan de order is toegewezen, doet u dat handmatig. Klik op **Fulfillment > Allocate stock**:
  1. Selecteer **Automatic**. ShopCtrl bepaalt dan welk magazijn wordt gebruikt.
  2. Of klik op de naam van een magazijn om voorraad uit een bepaald magazijn toe te wijzen.
<img src={require("/img/allocate-order.png").default} height="" width="800" />
6. Kies in het menu bovenaan **Fulfillment > Create Shipment**.
<img src={require("/img/create-shipment.png").default} height="" width="800" />
9. Bepaal of de **Picklist** en de **Packingslip** automatisch worden gegenereerd na de eerste keer opslaan van de zending.
10. (Optioneel) Wijzig de **Carrier** die het pakket verzendt:
  1. Klik op de knop **Select** in het deelvenster **Parcels**.
  2. Kies de nieuwe **Carrier** uit de lijst met vervoerders die bij de afmetingen van het pakket passen.
<img src={require("/img/choose-carrier.png").default} height="" width="400" />
10. Bepaal of er een **pakket wordt aangemaakt**, en daarmee een verzendlabel wordt gegenereerd, op het moment dat de zending wordt opgeslagen.
12. Sla de zending op met **Save**, **Save and Close** of **Save, close & print**.


Nadat de zending is opgeslagen, kunt u het pakket of de pakketten picken, inpakken en aan een vervoerder overdragen. Op dat moment is het belangrijk de zending als verzonden (**Shipped**) te markeren.
