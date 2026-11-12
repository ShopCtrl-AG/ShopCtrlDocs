---
sidebar_position: 2
slug: /docs/bol
description: "Koppel Bol.com aan ShopCtrl met inloggegevens voor de Retailer API om orders te importeren, trackingnummers bij te werken en de voorraad gelijk te houden."
---

# Bol.com

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

<img src={require("/img/bol.com.png").default} height="" width="100" />

De integratie met Bol.com biedt de volgende functies:
- Nieuwe orders importeren
- Trackingnummers bijwerken voor verzonden orders
- De voorraad op Bol.com bijwerken

## De integratie met Bol.com instellen {#setting-up-integration-with-bolcom}

Om de integratie te configureren, heeft ShopCtrl inloggegevens voor de Retailer API van Bol.com nodig.


1. Vraag de Client ID en het Client Secret aan volgens het proces in [Step 1: Acquiring API credentials](https://api.bol.com/retailer/public/Retailer-API/authentication.html#_step_1_acquiring_api_credentials).
2. Zie [Creating API credentials for the Retailer API](https://api.bol.com/retailer/public/Retailer-API/credentials_for_retailer_api.html) voor gedetailleerde instructies.

## De shopsynchronisatie instellen in ShopCtrl {#setting-up-shop-synchronization-in-shopctrl}

<img src={require("/img/bol-synchronization-settings.png").default} height="" width="400" />

### Verbinding maken met Bol.com: {#connecting-to-bolcom}

1. Log in bij uw ShopCtrl-account als gebruiker met de rol Shop Owner Admin.
2. Selecteer in het navigatiemenu **Configuration > Shops** om de lijst met aangemaakte shops te openen.
3. Selecteer de gewenste shop en klik op **Edit** om de shopinstellingen te openen.
4. Ga in het menu naar **Shop Synchronization > Bol Synchronization**.
5. In het deelvenster **Connection Settings**:
<img src={require("/img/bol-connection-settings.png").default} height="" width="800" />
    - Vul uw **Client ID** van Bol.com in het veld **Access Key** in.
    - Vul uw **Client Secret** van Bol.com in het veld **Secret Key** in.
7. Controleer de standaardwaarden in de velden **API URL** (`https://api.bol.com`) en **Token URL** (`https://login.bol.com/token?grant_type=client_credentials`).
8. Klik op de knop **Connect** om de inloggegevens te controleren en verbinding te maken met Bol.com.
9. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.

### De orderimport configureren: {#configuring-order-import}

1. Schakel in het deelvenster **Functional settings** de gewenste functies in:
    - **Orders synchronization**: schakelt de orderimport in.
    - **Import open orders or update existing**: sluit afgehandelde orders uit van de import (standaard ingeschakeld). Alleen nieuwe orders en annuleringsverzoeken voor bestaande orders worden geïmporteerd.
    - **Export shipments**: exporteert trackingcodes en vervoerdersgegevens naar Bol.com.
<img src={require("/img/bol-functional-settings.png").default} height="" width="800" />
2. Om verzendgegevens van orders naar Bol.com te exporteren, stelt u de koppeling van vervoerdersaccounts in via het betreffende deelvenster onderaan de configuratiepagina van Bol.com:
    -  Klik op **Add** en selecteer een vervoerdersaccount dat voor deze shop beschikbaar is.
    -  Selecteer in de vervolgkeuzelijst de bijbehorende **Bol.com Carrier code**.
<img src={require("/img/bol-carrier-account-mapping.png").default} height="" width="800" />
3.  Schakel de integratie met Bol.com bovenaan het deelvenster Functional settings in met **Enable**.
4. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.

### De voorraadexport van producten configureren {#configuring-product-stock-export}

Controleer het volgende voordat u de synchronisatie start:
- De producten bestaan in ShopCtrl.
- De bijbehorende aanbiedingen (offers) zijn op Bol.com gepubliceerd.

#### Producten en offers koppelen {#linking-products-and-offers}

ShopCtrl heeft een koppeling nodig tussen producten in ShopCtrl en offers op Bol.com. Die koppeling ontstaat door de **ShopCtrl Product Code** te matchen met de **Bol.com Offer Reference Code**.

Volg deze stappen om producten te koppelen:
1. Log in bij uw ShopCtrl-account als gebruiker met de rol Shop Owner Admin.
2. Selecteer in het deelvenster met verkoopkanalen rechts de shop waarvoor de Bol.com-synchronisatie is ingesteld en klik op Settings.
3. Selecteer in het menu **Shop synchronization > Bol Synchronization**.
<img src={require("/img/bol-product-offer-mapping.png").default} height="" width="800" />
4. **Bekijk de mogelijke koppelingen**:
    - Klik in het deelvenster **Product-Offer Mapping** op **Preview** om een Excel-bestand met de details van het koppelen te downloaden.
5. **Controleer en herstel fouten**:
    - Open het gedownloade bestand en los eventuele afwijkingen op. Het bestand bevat de volgende werkbladen:
        - **Offers**: alle offers op Bol.com.
        - **Errors** (indien aanwezig): kritieke problemen die koppelen onmogelijk maken, zoals ontbrekende referentiecodes in offers op Bol.com.
        - **Warnings** (indien aanwezig): problemen die mogelijk aandacht nodig hebben, zoals producten die niet in ShopCtrl zijn gevonden.
        - **Remain**: bestaande koppelingen tussen producten en offers.
        - **Update**: wijzigingen die op bestaande koppelingen worden toegepast.
        - **Create**: nieuwe koppelingen die worden aangemaakt.
        - **Delete**: koppelingen die worden verwijderd omdat het bijbehorende product niet meer bestaat.
<img src={require("/img/bol-product-offer-mapping-create.png").default} height="" width="800" />
6. **Maak de koppelingen aan**:
    - Klik, zodra de fouten zijn opgelost, op de knop **Map** om de overeenkomsten te bevestigen en de koppelingen aan te maken.

#### De voorraadexport van producten inschakelen {#enabling-product-stock-export}

Schakel na het koppelen de voorraadexport van producten vanuit ShopCtrl in:
schakel in het deelvenster **Bol Synchronization tab > Functional settings > Product features** de functie **Product stock management** in.
<img src={require("/img/bol-functional-settings.png").default} height="" width="800" />

Let op:
- ShopCtrl stuurt alleen voorraadupdates naar Bol.com wanneer de productvoorraad wijzigt in het ShopCtrl-magazijn dat aan de Bol.com-shop is gekoppeld.
- Als de voorraadniveaus in ShopCtrl en op Bol.com verschillen, wordt het verschil pas opgelost nadat de voorraad in ShopCtrl is bijgewerkt.
- Gebruik de bestanden die u in de vorige stappen hebt gedownload om te controleren of de productvoorraad in ShopCtrl overeenkomt met de voorraadniveaus op Bol.com.


Door uw ShopCtrl-account aan Bol.com te koppelen, stroomlijnt u het beheer van orders, voorraad en productsynchronisatie, zodat uw voorraadniveaus kloppen en u orders efficiënt verwerkt.
