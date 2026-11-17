---
sidebar_position: 3
slug: /docs/shopify-connect
description: "Stap 2 van de Shopify-installatie: kies de authenticatiemethode, vul de inloggegevens van de app en de API-URL in en controleer de verbinding."
---

# Stap 2. ShopCtrl aan Shopify koppelen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

In deze stap vult u de inloggegevens van uw Shopify-app in ShopCtrl in en controleert u of de verbinding werkt.

:::warning[Voordat u begint]

Stel de bijbehorende valuta, btw-tarieven en betaalmethoden voor uw ShopCtrl-shop in voordat u de synchronisatie met Shopify inschakelt.

:::

## De Shopify-synchronisatie-instellingen openen {#open-the-shopify-synchronization-settings}

1. Log in bij uw ShopCtrl-account als gebruiker met de rol **Shop Owner Admin**.
2. Selecteer in het navigatiemenu **Configuration > Shops** om de lijst met aangemaakte shops te openen.
   ![Shopinstellingen in ShopCtrl](/img/shopctrl-shop-settings.png)
3. Selecteer de shop waarvoor u de Shopify-synchronisatie wilt instellen en klik op **Edit** om de shopinstellingen te openen.
4. Selecteer in het menu **Shop synchronization > Shopify Synchronization**.

## Koppelen met een Dev Dashboard-app {#connect-with-a-dev-dashboard-app}

Gebruik dit voor een app die in het Shopify Dev Dashboard is aangemaakt. Alle velden staan in het deelvenster **Connection settings**.

1. Selecteer bij **Authentication** **Client ID and secret (Dev Dashboard app)**.
2. Plak bij **Client ID** en **Client secret** de waarden die u uit de app in het Dev Dashboard hebt gekopieerd.
3. Vul bij **Api url** `https://{shop}.myshopify.com/admin/api/{version}/` in, waarbij `{shop}` de naam van uw shop is. Gebruik een actuele API-versie, bijvoorbeeld `https://yourstore.myshopify.com/admin/api/2026-10/`.

   <img src={require("/img/shopify-connection-settings.png").default} alt="Verbindingsinstellingen voor Shopify in ShopCtrl" width="800" />

4. Klik op **Connect**. Een pop-upvenster geeft aan of de verbinding is geslaagd of wat er mis is met de inloggegevens.
5. Klik op **Save** om de wijzigingen voor de shop toe te passen.

ShopCtrl gebruikt de Client ID en het Client secret om een toegangstoken bij Shopify aan te vragen. Het token is 24 uur geldig en ShopCtrl vernieuwt het automatisch, zodat u niets hoeft bij te werken wanneer het verloopt.

## Koppelen met een legacy custom app {#connect-with-a-legacy-custom-app}

Gebruik dit voor een app die vóór 2026 in het beheer van Shopify is aangemaakt. Shops die op deze manier zijn gekoppeld blijven werken, dus u hebt deze stappen alleen nodig om de inloggegevens te wijzigen. Alle velden staan in het deelvenster **Connection settings**.

1. Selecteer bij **Authentication** **Admin API access token (legacy custom app)**. Deze methode is standaard geselecteerd.
2. Vul bij **Api key** de API key van de app in.
3. Vul bij **Api password** het Admin API access token van de app in.
4. Vul bij **Api url** `https://{shop}.myshopify.com/admin/api/{version}/` in, waarbij `{shop}` de naam van uw shop is. Gebruik een actuele API-versie, bijvoorbeeld `https://yourstore.myshopify.com/admin/api/2026-10/`.

   <img src={require("/img/shopify-connection-settings-legacy.png").default} alt="Verbindingsinstellingen voor een legacy custom app in ShopCtrl" width="800" />

5. Klik op **Connect**. Een pop-upvenster geeft aan of de verbinding is geslaagd of wat er mis is met de inloggegevens.
6. Klik op **Save** om de wijzigingen voor de shop toe te passen.

## Problemen oplossen {#troubleshooting}

**`shop_not_permitted`**

- De app en de shop behoren niet tot dezelfde Shopify-organisatie.
- Maak de app aan in het Dev Dashboard van de organisatie waarvan de shop eigendom is.

**`app_not_installed`**

De volledige melding is *Shopify rejected the access token request (400 Bad Request). app_not_installed: The application is not installed on this shop.*

- De app is niet geïnstalleerd op de shop in **Api url**. [Installeer de app in uw shop](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/create-shopify-app.md#install-the-app-on-your-store) en klik opnieuw op **Connect**.
- Controleer of de **Client ID** en het **Client secret** horen bij de app die op deze shop is geïnstalleerd.

**Shopify heeft de aanvraag voor het toegangstoken geweigerd**

- Controleer of de **Client ID** en het **Client secret** volledig zijn gekopieerd en bij dezelfde app horen.
- Controleer of de app op de shop is geïnstalleerd. Zie [De app in uw shop installeren](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/create-shopify-app.md#install-the-app-on-your-store).
- Controleer of de **Api url** het `myshopify.com`-adres van de juiste shop bevat.

**Invalid API key or access token**

- Controleer bij een legacy custom app de **Api key** en het **Api password**.
- Controleer of **Authentication** overeenkomt met het type van uw app.

**De verbinding werkt, maar een functie mislukt met een toegangsfout**

- Er ontbreekt een scope. Vergelijk de scopes van de app met de [Vereiste API scopes](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/create-shopify-app.md#required-api-scopes).
- Zie [De API scopes wijzigen](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/create-shopify-app.md#change-the-api-scopes) om een ontbrekende scope toe te voegen.

Volgende: [Stap 3. De synchronisatie-instellingen instellen](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/synchronization-settings.md)
