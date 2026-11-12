---
sidebar_position: 4
slug: /docs/rotating-your-amazon-1p-connectors-credentials
description: "Vervang in twee stappen het client secret van Login with Amazon (LWA) voor uw ShopCtrl-applicatie voor Amazon 1P, zodat de connector blijft werken."
---
# De inloggegevens van uw Amazon 1P-connector vervangen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Amazon heeft aangekondigd de beveiliging voor ontwikkelaars van de Amazon Services API te verbeteren: de inloggegevens voor Login with Amazon (LWA), de client secrets, moeten elke 180 dagen worden vervangen (geroteerd).
> Door LWA-clientgegevens regelmatig en tijdig te vervangen, beperkt u hoe lang de gegevens van uw applicatie bruikbaar zijn als ze worden blootgesteld of gecompromitteerd.

Zie voor meer informatie Rotating your application's LWA credentials in de [documentatie van de Amazon Services API](https://developer-docs.amazon.com/sp-api/docs/rotating-your-apps-lwa-credentials).

## De inloggegevens voor Login With Amazon (LWA) van uw ShopCtrl 1P-applicatie vervangen {#how-to-rotate-the-login-with-amazon-lwa-credential-for-your-shopctrl-1p-application}

Dit gaat in twee stappen.

### Stap 1. Een nieuw LWA client secret voor uw ShopCtrl-applicatie aanmaken in Amazon Vendor Central {#step-1-issue-a-new-lwa-client-secret-for-your-shopctrl-application-in-amazon-vendor-central}

1. Log in bij uw ontwikkelaarsaccount op [Vendor Central](https://vendorcentral.amazon.co.uk).
2. Selecteer in het navigatiemenu rechtsboven **Integration > API integration**.
    <img src={require("/img/amazon-go-to-api-integration.png").default} height="" width="800" />
3. Op de pagina **API Integration Developer Central** ziet u al uw applicaties.
    <img src={require("/img/Amazon-api-integrations-list.png").default} height="" width="800" /> 
4. Zoek de ShopCtrl-applicatie en klik in de kolom **LWA credentials** op **View**.
    <img src={require("/img/amazon-lwa-creds-not-rotated.png").default} height="" width="400" />
5. Kies **Rotate secret**, lees de waarschuwing en kies daarna nogmaals **Rotate secret**.
    <img src={require("/img/amazon-rotate-lwa-creds-confirm.png").default} height="" width="400" /> 
6. Kopieer het nieuw gegenereerde **Client Secret**. Bewaar het net zo zorgvuldig als een wachtwoord.
    <img src={require("/img/amazon-rotate-lwa-creds-new.png").default} height="" width="400" />


:::danger[**Amazon vereist:**]

 > Nadat u nieuwe LWA-inloggegevens (een client secret) hebt gegenereerd, moet u de gegevens bijwerken in alle applicaties die de Amazon API's aanroepen. Uw oude gegevens verlopen 7 dagen nadat u nieuwe gegevens hebt gegenereerd.

:::


### Stap 2. ShopCtrl bijwerken zodat het nieuwe LWA client secret wordt gebruikt voor de synchronisatie met Amazon Vendor Central {#step-2-update-shopctrl-to-use-new--lwa-client-secret-to-synchronize-to-amazon-vendor-central}

De shopsynchronisatie in ShopCtrl bijwerken met een nieuw LWA client secret:
1. Log in bij uw ShopCtrl-account als gebruiker met de rol **Shop Owner Admin**.
2. Klik in het deelvenster met verkoopkanalen op het pictogram van de Amazon 1P-shop (de shop waarvoor de Amazon 1P-synchronisatie is ingesteld) en selecteer **Settings**.
3. Ga op de detailpagina van de shop naar het menu en selecteer **Shop synchronization > Amazon 1P Synchronization**.
    <img src={require("/img/amazon-shopctrl-1p-shop-sync.png").default} height="" width="800" />
4. Vul in het veld **LWA Client Secret** de nieuwe waarde in die u voor de privé-app van ShopCtrl in Amazon hebt gegenereerd.
5. Klik op **Save and Close** om de wijzigingen voor de Amazon 1P-synchronisatie toe te passen.


Om uw integratie met de Amazon Services API veilig te houden, is het belangrijk dat u uw inloggegevens voor Login with Amazon (LWA) regelmatig vervangt en in ShopCtrl bijwerkt. Met de stappen hierboven genereert u eenvoudig nieuwe gegevens in Amazon Vendor Central en houdt u uw ShopCtrl-synchronisatie up-to-date.
