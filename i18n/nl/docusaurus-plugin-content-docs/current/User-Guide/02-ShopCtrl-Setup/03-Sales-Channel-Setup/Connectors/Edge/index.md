---
sidebar_position: 1
slug: /docs/virtualstock
description: "Stel de integratie van ShopCtrl met Virtualstock in om orders te importeren, tracking bij te werken, backorderdatums door te geven en voorraad te synchroniseren."
---

# Virtualstock

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in deze artikelen uit te voeren.

:::

In deze handleiding leest u hoe u de app-module voor de integratie van ShopCtrl met Virtualstock configureert. Virtualstock is een modulair SaaS-platform dat de samenwerking tussen retailers en hun leveranciers ondersteunt. De integratie koppelt ShopCtrl aan de Supplier API van Virtualstock.

## Wat de integratie doet {#what-the-integration-does}

**Orders**
- Nieuwe orders en annuleringsverzoeken importeren
- Annuleringen bevestigen *(optioneel)*
- Verzenddatums doorgeven voor artikelen in backorder
- Trackingnummers bijwerken voor verzonden orders

**Producten**
- Voorraadniveaus synchroniseren
- Levertijden van producten exporteren
- Voor producten die niet op voorraad zijn een datum doorgeven waarop ze weer op voorraad zijn *(optioneel)*

## De integratie met Virtualstock instellen {#setting-up-the-integration-with-virtualstock}

VirtualStock beheert de API-toegang. Mogelijk moet u contact opnemen met hun supportteam om inloggegevens (Client ID en Client secret) te krijgen.

U hebt nodig:
- Inloggegevens voor de sandbox (om te testen)
- Inloggegevens voor productie (na afronding van de UAT)

## De shopsynchronisatie configureren in ShopCtrl {#configuring-shop-synchronization-in-shopctrl}

Het instellen bestaat uit vier stappen.
Maak voordat u begint een nieuwe Virtual Stock-shop aan: [Een shop aanmaken](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/create-shop.md)

<details>
  <summary> Configuratie van de Virtual Stock-shop (Edge)</summary>

<img src={require("/img/edge-shop-sync-settings.png").default} height="" width="800" />

</details>

| Stap | Wat u instelt |
| --- | --- |
| [Stap 1. Verbinding maken met Virtualstock](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/connect-to-edge.md) | Client ID, Client Secret en de API-URL's, waarna u de verbinding test. |
| [Stap 2. Productveldnamen van retailers instellen](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/retailer-product-field-names.md) | Welke productveldnamen uw retailer gebruikt, toegepast via het profiel **Standard** of **Special**. |
| [Stap 3. Orderimport en -export instellen](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/order-synchronization.md) | Orderimport, bevestiging, annuleringen, backorders en track & trace, en het activeren van de integratie. |
| [Stap 4. Voorraadexport van producten instellen](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/product-and-stock-export.md) | Koppeling van producten aan offers, levertijden en voorraadsynchronisatie. |

:::important

Rond stap 2 af vóór de stappen voor orders en producten. Het retailerprofiel bepaalt de substatussen en de leverdatum voor backorders die in stap 3 met orders worden meegestuurd, en het SKU-veld van de leverancier waarop de koppeling van producten aan offers in stap 4 is gebaseerd.

:::

## Aanbevolen volgorde voor het inschakelen van de synchronisatie {#recommended-order-for-turning-on-synchronization}

Stel eerst alles in en schakel daarna de functies één voor één in: imports vóór exports. Imports lezen alleen gegevens uit Virtual Stock, dus een fout blijft binnen ShopCtrl. Exports zijn zichtbaar voor de retailer, en bevestigingen kunnen niet worden teruggedraaid.

1. **Begin in de sandbox** met alle selectievakjes uit. Herhaal de volgorde in productie na de UAT.
2. **Maak verbinding** en klik op **Check connection**.
3. **Bereid de instellingen voor** - geen van deze stappen verstuurt zelf iets:
    - Pas het retailerprofiel toe.
    - Stel **Closed order prescription (days)** in. Als u dit leeg laat, haalt de eerste import de volledige geschiedenis van gesloten orders van de retailer binnen.
    - Maak de orderregelparameter `BackorderDate` aan.
    - Koppel de vervoerders.
    - Stel de producteigenschap `VirtualStock.LeadTime` en de terugvalwaarde **Leadtime** in.
4. **Enabled** + **Order synchronization** - **Enabled** is de hoofdschakelaar; zolang deze uit staat, gebeurt er niets. Schakel deze in met alleen **Order synchronization** aangevinkt, zodat orders worden geïmporteerd maar er niets wordt teruggestuurd. Controleer de geïmporteerde orders voordat u verdergaat.
5. **Order integration** - begint met het versturen van bevestigingen, backorderdatums en trackinggegevens. **Track&Trace shipments** staat standaard aan, dus koppel eerst de vervoerders of vink deze optie uit.
6. **Acknowledge cancellations** *(optioneel)* - schakel dit in als u wilt dat ShopCtrl annuleringen automatisch bevestigt, of laat het uit om ze handmatig in het portaal te bevestigen.
7. **Koppel de producten** - **Download offers**, **Preview**, **Map**.
8. **Product integration**, daarna **Product stock management** en **Shop product management**. Voorraad en levertijden worden alleen geëxporteerd zolang **Product integration** aan staat.
9. Klik één keer op **Mark products for export** om de eerste voorraadniveaus te versturen.

:::caution

**Mark products for export** exporteert ook **nulvoorraad** voor gekoppelde producten die niet actief zijn. Als **Back-in-stock date on zero stock** is ingeschakeld, krijgen die producten ook een datum waarop ze weer op voorraad zijn. Controleer welke gekoppelde producten inactief zijn voordat u op deze knop klikt.

:::

Er is nog één artikel over een taak die na het instellen terugkomt:

- [Productkoppelingen bijwerken](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/updating-product-mappings.md) - nieuw toegevoegde producten koppelen.

Zodra alle vier de stappen zijn afgerond, houdt de integratie de gegevens in ShopCtrl en Virtual Stock automatisch op elkaar afgestemd, zodat uw toeleveringsketen soepel verloopt. Houd voor het doorlopende beheer de synchronisatiestatus in de gaten en werk de productkoppelingen bij wanneer dat nodig is.
