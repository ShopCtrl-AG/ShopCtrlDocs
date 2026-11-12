---
sidebar_position: 1
slug: /docs/exact-online
description: "Koppel ShopCtrl aan Exact Online met de Sync-connector voor een volledig geautomatiseerde koppeling, of met de Export-connector voor XML-facturen die u handmatig importeert."
---

# Exact Online

Exact is een koploper in financiële en zakelijke software voor kleine en middelgrote bedrijven en accountants.

ShopCtrl biedt twee kant-en-klare Exact Online-connectors:

* Exact Online Sync
* Exact Online Export

Exact Online Sync is een volledig geautomatiseerde koppeling met geavanceerde autorisatie. Met de Export-connector maakt u eenvoudig facturen in XML aan, die u handmatig kunt importeren.

## Aan de slag {#getting-started}
Voordat u ShopCtrl en Exact Online kunt configureren:

* Zorg dat u een Exact Online-account hebt
* Vraag de support van ShopCtrl om de app-modules ‘Exact Online’ en ‘Invoice export, Exact XML’ in te schakelen
* Log in bij ShopCtrl met uw ‘admin’-account (zo hebt u toegang tot de geavanceerde opties)

### ShopCtrl voorbereiden {#prepare-shopctrl}

1. Open de shopinstellingen van de betreffende webshop (Configuration → Shops).
2. Klap in het menu (‘Topic’) het gedeelte ‘Financial → Invoice export’ uit. Dit ziet er ongeveer zo uit:

<img src={require("/img/exact-online-shop-settings.png").default} height="" width="800" />
:::warning[Let op:]

Als de onderdelen voor Exact Online niet worden getoond, neem dan contact op met de supportdesk van ShopCtrl om de betreffende app-module te laten activeren.

:::

3. Klik op de knop ‘Authenticate’ om de autorisatie te starten. Het volgende venster verschijnt:

<img src={require("/img/exact-online-authentication-welcome.png").default} height="" width="400" />


4. Klik op de link ‘Authorize with Exact’ om de authenticatie te starten.
Exact vraagt om uw inloggegevens:

<img src={require("/img/exact-online-authenticate-uid-pwd.png").default} height="" width="800" />

5. Vul uw gebruikersnaam en wachtwoord in en klik op de knop ‘inloggen’.
Meestal volgt nu de tweestapsverificatie:

<img src={require("/img/exact-online-2-factor.png").default} height="" width="800" />

Genereer de gevraagde code met uw telefoon of een ander authenticatieapparaat.

6. Als deze stap is geslaagd, vraagt Exact ten slotte om uw toestemming om ShopCtrl met uw Exact-account te laten verbinden:

<img src={require("/img/exact-online-oauth-message.png").default} height="" width="800" />

Klik op ‘Toestaan’ om de verbinding te accepteren.

7. Als alles is gelukt, verschijnt het volgende venster:

<img src={require("/img/exact-online-auth-successfull.png").default} height="" width="600" />

Exact Online is nu gekoppeld aan uw ShopCtrl-shop.

U kunt deze stappen herhalen voor elke betreffende shop in uw ShopCtrl-platform.

### De verbinding in ShopCtrl controleren {#check-the-connection-in-shopctrl}
Om te controleren of de verbinding goed werkt, bekijkt u het configuratievenster voor Exact Online in uw shopconfiguratie. Het gedeelte ‘Authorized by’ ziet er dan ongeveer zo uit:

<img src={require("/img/exact-online-shopctrl-ready.png").default} height="" width="600" />

U kunt de autorisatie altijd intrekken door op de knop ‘Remove’ te klikken.
