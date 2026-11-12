---
sidebar_position: 3
slug: /docs/creating-dropshipment
description: "Maak in ShopCtrl een dropshipment aan, zodat een leverancier een order rechtstreeks naar uw klant verzendt, met ingestelde dropshipleveranciers en inkoopprijzen."
---
# Een dropshipment aanmaken



:::info[Voordat u begint]

Controleer of de instellingen voor [Dropshipleverancier](/User-Guide/09-Purchasing/Suppliers/dropship-supplier.md) zijn geconfigureerd en of er inkoopprijzen voor de producten zijn ingevuld.

:::

## Een dropshippakket aanmaken {#how-to-create-a-dropshipment-parcel}

1. Ga naar **Sales > Order**.
2. Open de order die u door uw leverancier wilt laten dropshippen.
3. Klik in het actiemenu bovenaan op **Fulfilment > Create shipment**.
4. Er opent een nieuwe detailpagina voor de zending in een nieuw tabblad.

<img src={require("/img/create-shipment-dropship.png").default} height="" width="800" />


5. Selecteer in het deelvenster **Ship from** de optie **Dropship**.
6. Selecteer de **Supplier** van wie u een pakket wilt laten verzenden.
7. De producten die deze leverancier kan verzenden, worden geladen in het deelvenster **Goods to ship**. Het adres bij **Ship From** wordt bijgewerkt met het adres van het magazijn van uw leverancier, tenzij er een ander adres is ingesteld.
8. Klik op de knop **Save** om de zending op te slaan, automatisch de inkooporder, het verzendlabel en eventueel een ingestelde pakbon te genereren, en de benodigde documenten naar de leverancier te e-mailen.

De aangemaakte inkooporder vindt u in het gedeelte **Purchasing > Purchase Orders**. De e-mail wordt samen met de inkoopdocumenten aan de verkooporder en de inkooporder toegevoegd.

Het toewijzingspictogram van de order laat zien dat dit product door de leverancier rechtstreeks naar uw klant is verzonden.

<img src={require("/img/allocated-dropship-status-order-row.png").default} height="" width="800" />

Het bijwerken van trackingnummers kunt u instellen via webhooks of rechtstreeks via de vervoerdersintegratie.
