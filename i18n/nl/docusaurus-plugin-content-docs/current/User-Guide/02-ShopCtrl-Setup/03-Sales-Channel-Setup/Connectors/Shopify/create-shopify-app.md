---
sidebar_position: 2
slug: /docs/shopify-app
description: "Stap 1 van de Shopify-installatie: maak een app aan in het Shopify Dev Dashboard met de vereiste API scopes, installeer deze in uw shop en kopieer de Client ID en het Client secret."
---

# Stap 1. Een Shopify-app aanmaken

ShopCtrl maakt verbinding met uw shop via een custom app die u in Shopify aanmaakt. De app bepaalt tot welke onderdelen van uw shop ShopCtrl toegang heeft en levert de inloggegevens voor de verbinding.

:::info[Al gekoppeld?]

Als uw shop vóór 2026 is gekoppeld, gebruikt deze een legacy custom app en blijft alles zonder wijzigingen werken. U kunt deze stap overslaan. Zie [Legacy custom apps](#legacy-custom-apps).

:::

## Een app aanmaken in het Shopify Dev Dashboard {#create-an-app-in-the-shopify-dev-dashboard}

1. Open het [Shopify Dev Dashboard](https://dev.shopify.com/dashboard/) en controleer of **Apps** is geselecteerd in het navigatiemenu.
2. Klik op **Create app**.
3. Selecteer in de vervolgkeuzelijst **Create app manually** (*Use the Dev Dashboard form instead*). De optie met de Shopify CLI hebt u niet nodig.

   <img src={require("/img/shopify-create-app-manually.png").default} alt="Create app manually in het Shopify Dev Dashboard" width="800" />

4. Vul het formulier **Create an app** in:
   - **App name** - bijvoorbeeld *ShopCtrl*.
   - **App URL** - vul het adres van uw ShopCtrl in, het adres dat u in de browser opent om in te loggen, bijvoorbeeld `https://yourcompany.shopctrl.com`. Shopify opent deze pagina nadat de app is geïnstalleerd en wanneer u de app vanuit het beheer van Shopify opent.
   - **Embed app in Shopify admin** - laat dit uitgevinkt.
   - **Scopes** - kopieer de onderstaande lijst met de kopieerknop rechtsboven en plak deze in het veld. Zie [Vereiste API scopes](#required-api-scopes) voor waarvoor elke scope wordt gebruikt.

     ```text
     write_inventory,read_inventory,read_locations,read_merchant_managed_fulfillment_orders,write_merchant_managed_fulfillment_orders,read_orders,write_orders,read_products,write_products
     ```

   - **Webhooks API version** - laat de nieuwste versie staan.

   <img src={require("/img/shopify-admin-create-custom-app-details.png").default} alt="Het formulier Create an app in het Shopify Dev Dashboard" width="800" />

5. Klik op **Create app**. Het venster **Release version** wordt geopend.
6. Vul eventueel een **Description** voor de versie in en klik op **Release**. De app heeft een uitgebrachte versie nodig voordat deze kan worden geïnstalleerd.

   <img src={require("/img/shopify-admin-create-app-release-version.png").default} alt="Het venster Release version in het Shopify Dev Dashboard" width="400" />

De app is aangemaakt en de pagina **Versions** van de app wordt geopend.

## De app in uw shop installeren {#install-the-app-on-your-store}

Meer informatie vindt u bij [Install a custom app in the Dev Dashboard](https://help.shopify.com/en/manual/apps/install-setup-apps#install-custom-app-dev-dashboard) in het Shopify Help Center.

1. Klik in het Dev Dashboard op **Apps** in het navigatiemenu.
2. Klik in de rij van de nieuwe app op de drie puntjes (**⋮**) en selecteer **Install app**.

   <img src={require("/img/shopify-admin-install-app.png").default} alt="Install app in de lijst Apps van het Shopify Dev Dashboard" width="800" />

3. U wordt doorgestuurd naar uw Shopify-shop. De pagina **Install app** toont tot welke gegevens de app toegang nodig heeft. Klik op **Install**.

   De waarschuwing *This app hasn't been reviewed* is normaal: Shopify beoordeelt alleen openbare apps, geen custom apps.

   <img src={require("/img/shopify-install-app.png").default} alt="De rechten van de app bevestigen in het beheer van Shopify" width="800" />

De app is geïnstalleerd en Shopify opent uw ShopCtrl, de **App URL** die u bij het aanmaken van de app hebt ingevuld. In de lijst **Apps** van het Dev Dashboard toont de kolom **Installs** van de app *1*.

## De Client ID en het Client secret kopiëren {#copy-the-client-id-and-client-secret}

1. Klik in het [Shopify Dev Dashboard](https://dev.shopify.com/dashboard/) op de naam van de app. De pagina **Overview** van de app wordt geopend.
2. Kopieer op de kaart **Credentials** de **Client ID** en het **Client secret** met de kopieerknoppen ernaast. Bewaar deze op een veilige plek, net als een wachtwoord.

   <img src={require("/img/shopify-admin-app-credentials.png").default} alt="Client ID en Client secret op het overzicht van de app in het Shopify Dev Dashboard" width="800" />

U hebt nu de Client ID en het Client secret die ShopCtrl nodig heeft.

Meer informatie vindt u in deze Shopify-handleidingen:

- [Create apps using the Dev Dashboard](https://shopify.dev/docs/apps/build/dev-dashboard/create-apps-using-dev-dashboard)
- [Client credentials grant](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/client-credentials-grant)
- [Shopify Help Center: Custom apps](https://help.shopify.com/en/manual/apps/app-types/custom-apps)

## Vereiste API scopes {#required-api-scopes}

Scopes bepalen tot welke onderdelen van uw shop de ShopCtrl-app toegang heeft. Kopieer de lijst en plak deze in het veld **Scopes**:

```text
write_inventory,read_inventory,read_locations,read_merchant_managed_fulfillment_orders,write_merchant_managed_fulfillment_orders,read_orders,write_orders,read_products,write_products
```

**Orders en fulfilment**

- read_orders, write_orders - orders en de betalingen ervan importeren.
- read_merchant_managed_fulfillment_orders, write_merchant_managed_fulfillment_orders - orders afhandelen en trackinginformatie versturen.

**Producten en voorraad**

- read_products, write_products - producten op SKU zoeken en het bijhouden van aantallen (track quantity) voor ze inschakelen.
- read_inventory, write_inventory - de voorraad in Shopify bijwerken.
- read_locations - magazijnen aan locaties in Shopify koppelen.

## De API scopes wijzigen {#change-the-api-scopes}

Wijzig de scopes van een geïnstalleerde app, bijvoorbeeld wanneer ShopCtrl na een update een nieuwe scope nodig heeft. Wijzigingen in scopes worden niet automatisch toegepast op een shop waar de app al is geïnstalleerd: u brengt een nieuwe versie van de app uit en installeert de app daarna opnieuw om de nieuwe scopes in uw shop goed te keuren.

Meer informatie vindt u bij [Manage access scopes](https://shopify.dev/docs/apps/build/authentication-authorization/manage-access-scopes) in de Shopify-documentatie.

1. Klik in het [Shopify Dev Dashboard](https://dev.shopify.com/dashboard/) op de naam van de app. De pagina **Overview** van de app wordt geopend.
2. Klik op de kaart **Versions** op **New version**.
3. Voeg bij **Scopes** scopes toe of verwijder ze. Vergelijk de lijst met [Vereiste API scopes](#required-api-scopes).
4. Breng de nieuwe versie uit: klik op **Release**, vul eventueel een **Description** in en klik nogmaals op **Release**.
5. Installeer de app opnieuw om de nieuwe scopes goed te keuren: klik in het Dev Dashboard op **Apps**, klik in de rij van de app op de drie puntjes (**⋮**) en selecteer **Install app**. Zie [De app in uw shop installeren](#install-the-app-on-your-store).
6. U wordt doorgestuurd naar uw Shopify-shop. De pagina **Install app** toont de nieuwe scopes. Klik op **Install** om ze goed te keuren.

## Legacy custom apps {#legacy-custom-apps}

Legacy custom apps zijn vóór 1 januari 2026 aangemaakt in het beheer van Shopify. Shopify staat het aanmaken ervan niet meer toe, maar bestaande apps blijven werken. ShopCtrl maakt er verbinding mee met een **API key** en een **Admin API access token**.

<details>
<summary>De inloggegevens van een legacy custom app vinden</summary>

1. Log in bij het beheer van Shopify.
2. Klik in het navigatiemenu op **Settings ⚙ > Apps**.

   ![Apps in de instellingen van Shopify](/img/shopify-apps-and-sales-channels.png)

3. Klik op **Develop apps**. De lijst met uw bestaande custom apps wordt geopend.
4. Open de app die voor ShopCtrl is aangemaakt.
5. Ga naar het gedeelte **Access scopes** en klik op **Manage scopes** om de scopes te controleren of te wijzigen. De app heeft dezelfde [Vereiste API scopes](#required-api-scopes) nodig.

   <img src={require("/img/shopify-admin-legacy-custom-app-settings.png").default} alt="Access scopes en Admin API access token van een legacy custom app" width="800" />

6. Klik op **Open in Dev Dashboard** en open **Settings** om de **API key** te vinden. De API key wordt daar weergegeven als **Client ID**.

In het gedeelte **Admin API access token** wordt het token gemaskeerd weergegeven. Shopify toont het slechts één keer, dus u kunt het niet opnieuw bekijken. Als u het token niet meer hebt, maakt u in plaats daarvan een nieuwe app aan in het Dev Dashboard.

Meer informatie vindt u bij [Manage legacy custom apps](https://help.shopify.com/en/manual/apps/managing-apps#manage-legacy-custom-apps) in het Shopify Help Center.

</details>

Volgende: [Stap 2. ShopCtrl aan Shopify koppelen](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/connect-to-shopify.md)
