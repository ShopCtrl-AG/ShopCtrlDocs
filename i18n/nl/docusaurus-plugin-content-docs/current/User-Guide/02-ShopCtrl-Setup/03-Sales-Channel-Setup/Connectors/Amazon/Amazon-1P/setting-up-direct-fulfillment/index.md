---
sidebar_position: 1
slug: /docs/setting-up-direct-fulfillment
description: "Amazon 1P Direct Fulfillment (VDF) in ShopCtrl: importeer dropship-inkooporders, accepteer of weiger ze, vraag labels aan en bevestig zendingen."
---

# Direct Fulfillment instellen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Met Amazon 1P Direct Fulfillment (ook wel Vendor Direct Fulfillment of VDF genoemd) verzenden leveranciers inkooporders namens Amazon rechtstreeks naar de eindklant, in plaats van voorraad naar de fulfilmentcentra van Amazon te sturen. Dit wordt ook wel een dropshipmodel genoemd.

## Functies van de Direct Fulfillment-module {#direct-fulfillment-module-features}

Met de module Amazon 1P Direct Fulfillment kunt u:

- Dropship-inkooporders importeren uit Amazon Vendor Central
- Inkooporders accepteren of weigeren en dit aan Amazon terugmelden
- Verzendlabels bij Amazon aanvragen via de VDF Carrier
- Na verzending verzendbevestigingen naar Amazon sturen
- Updates van de voorraadbeschikbaarheid naar Amazon exporteren
- De volledige levenscyclus van de order volgen: New → Accepted → Shipped / Cancelled

## Belangrijkste verschillen met Amazon 1P {#key-differences-from-amazon-1p}

| Onderdeel | Amazon 1P | Direct Fulfillment (VDF) |
|---|---|---|
| Verzonden naar | Amazon-fulfilmentcentrum | Eindklant |
| Type inkoop | Bulk buy / wekelijks | Dropship |
| Orderbevestiging | Automatisch of handmatig, gedeeltelijk mogelijk via picken | Alles of niets (accepteren of weigeren) |
| Verzendlabels | Gegenereerd door de vervoerdersintegratie | Aangevraagd via de Amazon API |
| Verzendmelding | ASN via groepszending | Verzendbevestiging per zending |
| Bulk buy offers | Ondersteund | Niet van toepassing |

## Configuratiehandleiding {#configuration-guide}

Om de integratie in te stellen, doorloopt u deze twee configuratiestappen:

1. **[Amazon-profiel configureren](../setting-up-integration-with-amazon-1p/amazon-1p-profile-configuration.md)**: maak de applicatie aan en genereer inloggegevens voor uw shop, waarmee ShopCtrl toegang krijgt tot uw open API. Volg dezelfde stappen als voor de standaardintegratie met Amazon 1P.
2. **[VDF-synchronisatie instellen in ShopCtrl](./amazon-vdf-setting-up-shopctrl-synchronization.md)**: configureer het vervoerdersaccount, de API-verbinding en de synchronisatieregels voor Direct Fulfillment-orders.
