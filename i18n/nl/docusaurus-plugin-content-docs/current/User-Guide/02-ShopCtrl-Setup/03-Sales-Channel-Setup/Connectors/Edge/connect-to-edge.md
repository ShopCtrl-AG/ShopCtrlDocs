---
sidebar_position: 2
slug: /docs/virtualstock-connect
description: "Stap 1 van het instellen van Virtualstock: vul de Client ID en het Client Secret in, controleer de API-URL's en test de verbinding."
---

# Stap 1. Verbinding maken met Virtualstock

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

De verbinding maakt u op dezelfde manier voor de sandbox- en de productieomgeving. Alleen het selectievakje "Use sandbox environment" bepaalt met welke omgeving u verbinding maakt.

1. Log in bij uw ShopCtrl-account als gebruiker met de rol Shop Owner Admin.
2. Ga naar **Configuration > Shops**.
3. Selecteer de gewenste shop en klik op **Edit** om de shopinstellingen te openen.
4. Ga in het menu naar **Shop Synchronization > Edge Synchronization**.
5. Scrol in de instellingen omlaag naar het gedeelte **Connection Settings**. Controleer of het selectievakje 'Use sandbox environment' niet is aangevinkt.
6. In de **Connection Settings**:
   - Vul uw gegevens in:
     - **Client ID**
     - **Client Secret**
   - Controleer de standaard-URL's:
     - API URL: `https://api.virtualstock.com`
     - OAuth Token URL: `https://api.virtualstock.com/restapi/v4/token`
    <img src={require("/img/edge-connection-settings.png").default} height="" width="800" />
7. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.
8. Klik op **Connect** om de inloggegevens te controleren.

Volgende stap: [Stap 2. Productveldnamen van retailers instellen](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/retailer-product-field-names.md)
