---
sidebar_position: 10
slug: /docs/migrating-to-the-new-oauth-for-ups-integration
description: "Zet de UPS-integratie van ShopCtrl over naar OAuth 2.0, dat UPS sinds augustus 2024 verplicht stelt, door een applicatie aan te maken in de UPS Developer Portal."
---


# Overstappen op de nieuwe OAuth voor de UPS-integratie

Sinds 2024 stapt UPS voor alle API's over op het beveiligingsmodel OAuth 2.0. Deze overstap moet de beveiliging verbeteren, fraude verminderen en betere API-mogelijkheden bieden. OAuth 2.0 vervangt het huidige authenticatiesysteem met toegangssleutels door een veiliger mechanisme met een client ID en client secret.

:::warning[[Belangrijke update van UPS](https://developer.ups.com/)]

> UPS heeft authenticatie met toegangssleutels uitgefaseerd ten gunste van het beveiligingsmodel OAuth 2.0 voor alle API's. Na 5 augustus 2024 moeten alle integraties het authenticatiemodel OAuth 2.0 gebruiken om met de API's van UPS te kunnen blijven werken.

:::

## De UPS-integratie instellen {#setting-up-ups-integration}

Om aan deze nieuwe autorisatie-eisen te voldoen, heeft ShopCtrl een nieuwe methode ontwikkeld om de applicatie bij UPS te autoriseren met het OAuth-granttype auth-code. Volg deze stappen om uw UPS-integratie in te stellen:

Maak een applicatie aan in de UPS Developer Portal:
    1. Ga naar de [UPS Developer Portal](https://developer.ups.com/apps).
    2. Volg de stappen in de [UPS Get Started-handleiding](https://developer.ups.com/get-started) om een nieuwe applicatie aan te maken.
    3. Kies een account dat u aan deze app-gegevens wilt koppelen. U kunt de app aan uw bestaande account koppelen of een nieuw account aanmaken.
    4. Nadat u de applicatie hebt aangemaakt, geeft UPS u een **client ID** en een **client secret**. Bewaar deze gegevens net zo zorgvuldig als wachtwoorden; u hebt ze later nodig op de configuratiepagina van de vervoerder in ShopCtrl.

Zie de [UPS OAuth Developer Guide](https://developer.ups.com/oauth-developer-guide) voor meer informatie over de details van OAuth-autorisatie.

## De UPS-integratie in ShopCtrl bijwerken {#updating-ups-integration-in-shopctrl}

Volg deze stappen om uw UPS-integratie in ShopCtrl bij te werken naar OAuth 2.0:

1. Ga naar **Configuration > Transport > Carrier Accounts**.
2. Selecteer uw bestaande **UPS-vervoerdersaccount**.
3. Wijzig in het deelvenster met de UPS-accountgegevens de **Authentication method** in OAuth 2.0 credentials (Client ID + Client Secret).
4. Vul de **Client ID** en het **Client Secret** van uw UPS-app in.
5. Klik op **Test credentials** om te controleren of de authenticatie slaagt.
6. Klik op **Save** of **Save and Close** om de wijzigingen toe te passen.

**De verbinding testen**

Schakel de **Test mode** in en maak een testlabel aan voor een van uw zendingen. In de testmodus maakt UPS verbinding met de sandboxomgeving en genereert het een voorbeeldlabel. Schakel de testmodus uit zodra alles correct is ingesteld.
