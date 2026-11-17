---
sidebar_position: 1
slug: /docs/shopify
description: "Koppel Shopify aan ShopCtrl om orders te importeren, trackinginformatie en fulfilments te versturen en de voorraad in Shopify gelijk te houden."
---

# Shopify

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in deze artikelen uit te voeren.

:::

De Shopify-connector importeert orders uit uw Shopify-shop in ShopCtrl, stuurt trackinginformatie terug naar Shopify en houdt de voorraad in Shopify up-to-date.

## Wat de connector doet {#what-the-connector-does}

**Orders**

- [Orders importeren uit Shopify](/User-Guide/04-Order-Management/02-Orders/Create-Orders/importing-orders.md#importing-orders-from-shopify)
- [Orders afhandelen en trackinginformatie exporteren](/User-Guide/07-Fulfillment/tracking-update.md#fulfilling-orders-and-exporting-tracking-info-to-shopify)

**Voorraad**

- [De voorraad in Shopify bijwerken](/User-Guide/08-Product-Management/Product-Export/exporting-inventory.md#updating-shopify-inventory)

## Voordat u begint {#before-you-start}

Zorg dat u het volgende hebt:

**In ShopCtrl**

- De rol **Shop Owner Admin** voor de shop die u wilt koppelen.
- De valuta, btw-tarieven en betaalmethoden van de shop zijn ingesteld.

**In Shopify**

- De rol [App developer](https://help.shopify.com/en/manual/your-account/users/roles/roles-managed-by-shopify#app-developer), die nodig is om een app aan te maken in het Shopify Dev Dashboard. Samenwerkers (collaborators) hebben geen toegang tot het Dev Dashboard.
- Toegang tot het Dev Dashboard van de Shopify-organisatie waarvan de shop eigendom is.

## Welke Shopify-app heb ik nodig? {#which-shopify-app-do-i-need}

ShopCtrl maakt verbinding met uw shop via een custom app die u in Shopify aanmaakt. Shopify heeft op 1 januari 2026 de manier gewijzigd waarop custom apps worden aangemaakt en geauthenticeerd. ShopCtrl ondersteunt beide soorten.

**Nieuwe koppeling**

- Maak een app aan in het [Shopify Dev Dashboard](https://dev.shopify.com/dashboard/).
- ShopCtrl maakt verbinding met een **Client ID** en **Client secret**.

**Al gekoppeld vóór 2026**

- Uw shop gebruikt een legacy custom app, aangemaakt in het beheer van Shopify.
- ShopCtrl maakt verbinding met een **API key** en **Admin API access token**.
- De integratie blijft zonder wijzigingen werken. U hoeft geen nieuwe app aan te maken en ShopCtrl niet opnieuw in te stellen.

## De integratie instellen {#set-up-the-integration}

1. [Maak een Shopify-app aan](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/create-shopify-app.md) en kopieer de inloggegevens.
2. [Koppel ShopCtrl aan Shopify](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/connect-to-shopify.md) met deze inloggegevens.
3. [Stel de synchronisatie-instellingen in](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/synchronization-settings.md): kies de functies, koppel vervoerders en magazijnen en schakel de synchronisatie in.
