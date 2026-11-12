---
sidebar_position: 3
slug: /docs/ebay
description: "Stapsgewijze instructies voor het koppelen van een eBay-shop aan ShopCtrl, van aanmelden bij het eBay Developers Program tot het verkrijgen van API-sleutels voor productie."
---

# eBay

In deze handleiding leest u stap voor stap hoe u uw eBay-shop aan ShopCtrl koppelt, zodat u orders naadloos kunt synchroniseren en beheren.


## De integratie met eBay in ShopCtrl configureren: voorwaarden {#configuring-ebay-integration-with-shopctrl-prerequisites}

1. **Registreer u bij eBay**: [meld u aan bij het eBay Developers Program](https://developer.ebay.com/api-docs/static/gs_join-the-ebay-developers-program.html).
   *Let op: de verwerkingstijd van registraties bij eBay kan verschillen.*
2. **Maak een eBay-shop aan in ShopCtrl**: [stel uw eBay-shop in](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/create-shop.md) voordat u verdergaat.

## Stap 1: de integratie voorbereiden - API-sleutels van eBay verkrijgen {#step-1-prepare-for-integration---obtain-ebay-api-keys}

Om API-sleutels voor productie te krijgen, moet u het meldingsproces van eBay voor het verwijderen of sluiten van accounts afronden. Zo voldoet ShopCtrl aan de AVG (GDPR) wanneer het klantgegevens uit eBay verwerkt.

Zie de [eBay Policy Notice](https://developer.ebay.com/marketplace-account-deletion) voor meer informatie.

###  Meldingen over het verwijderen van accounts configureren {#configure-account-deletion-notifications}

**In ShopCtrl:**

1. Log in bij uw ShopCtrl-account als gebruiker met de rol Shop Owner Admin.
2. Ga naar **eBay shop settings > Shop synchronization >eBay Synchronization**.
3. Ga naar **eBay Marketplace Account Deletion/Closure Notifications**.
4. Voor **Notification Endpoint**:
   - Klik op **Default** om uw unieke URL te genereren.
5. Voor **Verification Token**:
   - Klik op **Generate** om uw token aan te maken.
6. Klik op **Save**.
<img src={require("/img/ebay-sync-gdpr-configuration.png").default} height="" width="800" />

**In het eBay Developer Portal:**

1. Log in bij uw [eBay Developer Account](https://developer.ebay.com/).
2. Selecteer in het menu rechtsboven **Alerts & Notifications**.
3. Zet de omgeving op **Production**.
4. Ga naar het tabblad **[Alerts & Notifications](https://developer.ebay.com/my/push?env=production\&index=0)**.
5. Selecteer **Marketplace Account Deletion**.
<img src={require("/img/ebay-notification-endpoint-configuration.png").default} height="" width="800" />
6. Configureer:
   - Het e-mailadres voor meldingen (bij storingen).
   - De URL van uw ShopCtrl **Notification Endpoint**.
   - Uw ShopCtrl **Verification Token**.
7. Klik op **Save**. Na het opslaan ziet u of de testmelding is geslaagd.
<img src={require("/img/ebay-successful-notification-endpoint-configuration.png").default} height="" width="800" />

###  API-sleutels voor productie aanvragen {#request-production-api-keys}

Nadat u de meldingen hebt ingesteld, vraagt u uw API-sleutels voor productie aan:

1. Volg de handleiding van eBay:
   [Create eBay API Keysets](https://developer.ebay.com/api-docs/static/gs_create-the-ebay-api-keysets.html).
2. Bewaar deze sleutels; u hebt ze nodig om ShopCtrl aan uw eBay-orders te koppelen.

## Stap 2: de OAuth Redirect URL in eBay instellen {#step-2-configure-oauth-redirect-url-on-ebay}

De **Redirect URL** van eBay is nodig voor OAuth-authenticatie. Volg deze stappen om deze in te stellen.

### In het eBay Developer Portal: {#in-ebay-developer-portal}

1. Log in bij uw eBay Developer Account.
2. Selecteer in het menu rechtsboven [User Access Tokens](https://developer.ebay.com/my/auth?env=production&index=0).
3. Lees de [documentatie van eBay over Redirect URI's](https://developer.ebay.com/api-docs/static/oauth-redirect-uri.html).
4. Maak in de productieomgeving een nieuwe configuratie voor de **Redirect URL** aan.
5. Vul de **Privacy Policy URL** van uw eBay-shop in.
<img src={require("/img/ebay-redirect-urls.png").default} height="" width="800" />

### In ShopCtrl: {#in-shopctrl}

1. Log in bij uw ShopCtrl-account.
2. Ga naar **eBay shop settings > eBay Synchronization > eBay User Consent OAuth Settings**.
3. Zoek uw:
   - **Auth Accepted URL**.
   - **Auth Declined URL**.
<img src={require("/img/ebay-sync-oauth-settings.png").default} height="" width="800" />

### Laatste configuratie in eBay: {#final-configuration-in-ebay}

1. Ga terug naar uw [eBay Developer Account](https://developer.ebay.com/my/auth?env=production&index=0).
2. Vul de **Auth Accepted URL** uit ShopCtrl in.
3. Vul de **Auth Declined URL** uit ShopCtrl in.
4. Sla de configuratie van de Redirect URL op.


## Stap 3: de autorisatie in ShopCtrl afronden {#step-3-complete-authorization-process-in-shopctrl}

Volg deze volgorde om de verbinding tussen ShopCtrl en uw eBay-shop tot stand te brengen:

### Configuratie in ShopCtrl: {#configuration-in-shopctrl}

1. **Instellingen openen**:
   - Log in bij uw ShopCtrl-account.
   - Ga naar **eBay Shop Settings → Shop synchronization → eBay Synchronization → Connection Settings**.
<img src={require("/img/ebay-sync-connection-settings.png").default} height="" width="800" />
2. **Omgevingsinstellingen**:
   - Controleer of **Use Sandbox Environment** is uitgeschakeld (niet aangevinkt).
   - Controleer of de productievelden actief zijn (groen).
3. **API-gegevens invullen**:
   - Vul uw **Client ID** uit de productiesleutels van eBay in.
   - Vul uw **Client Secret** uit dezelfde set sleutels in.
   - *Bron*: [eBay API Keys Dashboard](https://developer.ebay.com/my/keys).
4. **OAuth configureren**:
   - Vul uw **RuName** (uit de instelling van de Redirect URL in eBay) in het veld **OAuth RuName** in.
   - *Controleren*: [eBay Redirect URL Settings](https://developer.ebay.com/my/auth/?env=production&index=0).
5. Klik op **Save** om uw gegevens op te slaan.


### Autorisatieproces: {#authorization-workflow}

6. **Autorisatie starten**:
   - Klik in de Connection settings van de shop in ShopCtrl op de knop **Authorize (on eBay)**.
   - U wordt doorgestuurd naar de beveiligde inlogpagina van eBay.
<img src={require("/img/ebay-sync-connection-settings.png").default} height="" width="800" />

7. **Authenticatie bij eBay**:
   - Vul de inloggegevens van uw eBay-verkopersaccount in.
   - Lees het scherm met het verzoek om toestemming goed door.
<img src={require("/img/ebay-grant-access.png").default} height="" width="800" />

8. **Geef toestemming** door op **Agree and Continue** te klikken:
   - Klik op Back to shop settings om terug te gaan naar de eBay-shopinstellingen in ShopCtrl.
   
### Stappen na de autorisatie: {#post-authorization-steps}

9. **Verbinding controleren**:
   - Controleer of het gedeelte **OAuth Tokens** is bijgewerkt:
     - Huidig tijdstempel
     - **Status: Serviceable**

10. **Integratie testen**:
    - Klik op **Check Connection** om de configuratie te controleren.
    - Bij een geslaagde test verschijnt de melding "Connected successfully".
