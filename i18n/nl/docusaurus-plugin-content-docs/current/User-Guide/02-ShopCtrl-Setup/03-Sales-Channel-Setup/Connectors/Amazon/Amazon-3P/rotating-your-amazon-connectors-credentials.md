---
sidebar_position: 4
slug: /docs/rotating-your-amazon-connectors-credentials
description: "Vervang in twee stappen het client secret van Login with Amazon (LWA) voor uw ShopCtrl-applicatie voor Amazon 3P, zodat de connector blijft werken."
---

# De inloggegevens van uw Amazon 3P-connector vervangen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Amazon heeft aangekondigd de beveiliging voor ontwikkelaars van de Amazon Services API te verbeteren: de inloggegevens voor Login with Amazon (LWA), de client secrets, moeten elke 180 dagen worden vervangen (geroteerd).

> Door LWA-clientgegevens regelmatig en tijdig te vervangen, beperkt u hoe lang de gegevens van uw applicatie bruikbaar zijn als ze worden blootgesteld of gecompromitteerd.

Zie voor meer informatie Rotating your application's LWA credentials in de [documentatie van de Amazon Services API](https://developer-docs.amazon.com/sp-api/docs/rotating-your-apps-lwa-credentials).

## De inloggegevens voor Login With Amazon (LWA) van uw ShopCtrl-applicatie vervangen {#how-to-rotate-the-login-with-amazon-lwa-credential-for-your-shopctrl-application}

Dit gaat in twee stappen.

### Stap 1. Een nieuw LWA client secret voor uw ShopCtrl-applicatie aanmaken in Amazon {#step-1-issue-a-new-lwa-client-secret-for-your-shopctrl-application-in-amazon}

1. Log in bij uw ontwikkelaarsaccount op [Seller Central](https://sellercentral-europe.amazon.com/sellingpartner/developerconsole).
2. Selecteer in het navigatiemenu rechtsboven **Apps and Services > Develop Apps**.
   ![Naar Develop Apps gaan in Amazon](/img/Amazon-go-to-develop-apps.png)
3. Op de pagina **Developer Central** ziet u al uw applicaties.
   ![Applicaties in Amazon Developer Central](/img/amazon-developer-central-applications.png)
4. Zoek de ShopCtrl-applicatie en klik in de kolom **LWA credentials** op **View**.
   ![LWA client secret vervangen in Amazon](/img/amazon-rotate-lwa-client-secret.png)
5. Kies **Rotate secret**, lees de waarschuwing en kies daarna nogmaals **Rotate secret**.
   ![Client secret vervangen, stap 2](/img/amazon-rotate-client-secret-2-step.png)
6. Kopieer het nieuw gegenereerde **Client Secret**. Bewaar het net zo zorgvuldig als een wachtwoord.


:::danger[**Amazon vereist:**]

> Nadat u nieuwe LWA-inloggegevens (een client secret) hebt gegenereerd, moet u de gegevens bijwerken in alle applicaties die de Amazon API's aanroepen. Uw oude gegevens verlopen 7 dagen nadat u nieuwe gegevens hebt gegenereerd.

:::

### Stap 2. ShopCtrl bijwerken zodat het nieuwe LWA client secret wordt gebruikt voor de synchronisatie met Amazon {#step-2-update-shopctrl-to-use-new-lwa-client-secret-to-synchronize-to-amazon}

De shopsynchronisatie in ShopCtrl bijwerken met een nieuw LWA client secret:

1. Log in bij uw ShopCtrl-account als gebruiker met de rol **Shop Owner Admin**.
2. Klik in het deelvenster met verkoopkanalen op het pictogram van de Amazon-shop (de shop waarvoor de Amazon-synchronisatie is ingesteld) en selecteer **Settings**.
3. Ga op de detailpagina van de shop naar het menu en selecteer **Shop synchronization > Amazon Shop Synchronization**.
   ![Veld voor het LWA-secret in de shopinstellingen](/img/shop-settings-lwa-secret-field.png)
4. Vul in het veld **LWA Client Secret** de nieuwe waarde in die u voor de privé-app van ShopCtrl in Amazon hebt gegenereerd.
5. Klik op **Save and Close** om de wijzigingen voor de Amazon-synchronisatie toe te passen.
