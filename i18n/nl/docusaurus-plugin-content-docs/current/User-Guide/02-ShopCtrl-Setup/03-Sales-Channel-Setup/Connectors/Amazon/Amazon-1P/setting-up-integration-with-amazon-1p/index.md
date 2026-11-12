---
sidebar_position: 1
slug: /docs/setting-up-integration-with-amazon-1p
description: "Koppel Amazon 1P Vendor Central aan ShopCtrl om inkooporders te importeren, bulk buy offers goed te keuren en zendingen voor Amazon-fulfilmentcentra in te pakken."
---

# Integratie met Amazon 1P instellen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Met de Amazon-connector importeert u via een API-integratie inkooporders uit uw Amazon-verkopersaccount rechtstreeks in ShopCtrl.

## Functies van de synchronisatiemodule voor Amazon 1P {#amazon-1p-synchronization-module-features}

Met de Amazon 1P-module kunt u:

- Amazon-inkooporders importeren
- Alle interne goedkeuringsstappen doorlopen om te reageren op verzoeken voor [Amazon Bulk Buy Offers](/User-Guide/07-Fulfillment/Amazon-1P-Order-Fulfillment-Workflow/amazon-bulk-buy-offers-approval.md)
- Bijhouden welke inkooporders zijn gebaseerd op eerder goedgekeurde Bulk Buy Offers
- Zendingen voor Amazon-fulfilmentcentra picken en [inpakken](/User-Guide/07-Fulfillment/Amazon-1P-Order-Fulfillment-Workflow/amazon-1p-group-shipment.md).
- Handmatige of automatische bevestiging van orders aan Amazon instellen op basis van de pickgegevens uit uw magazijn.
- Verzendlabels die aan de eisen voldoen en documenten voor deze zendingen rechtstreeks vanuit ShopCtrl aanmaken.
- Automatisch ASN's naar Amazon sturen om Amazon te informeren over de structuur, inhoud en verwachte leverdatum van de zending.


## Configuratiehandleiding {#configuration-guide}

Om de integratie in te stellen, doorloopt u deze twee configuratiestappen:

1.  **[Amazon-profiel configureren](./amazon-1p-profile-configuration.md)**: om de integratie met Amazon 1P te starten, maakt u de applicatie aan en genereert u inloggegevens voor uw shop, waarmee ShopCtrl toegang krijgt tot uw open API.
2.  **[Shopsynchronisatie instellen](./amazon-1p-setting-up-shopctrl-synchronization.md)**: vul uw API-gegevens en verbindingsgegevens in ShopCtrl in. Stel de regels en koppelingen in die bepalen hoe gegevens tussen Amazon en uw shop worden gesynchroniseerd.
