---
sidebar_position: 1
slug: /docs/amazon-1p-profile-configuration
description: "Maak een app-client aan in Amazon Vendor Central en genereer de API-gegevens waarmee ShopCtrl toegang krijgt tot uw Amazon 1P-account."
---

# Amazon 1P-profiel configureren

Om de integratie met Amazon 1P te starten, maakt u de applicatie aan en genereert u inloggegevens voor uw shop, waarmee ShopCtrl toegang krijgt tot uw open API.

1. Log in bij uw account op [Vendor Central Amazon](https://vendorcentral.amazon.com/).
2. Selecteer in het navigatiemenu rechtsboven **Integration > API Integration**.
   ![API-integratie aanmaken in Amazon 1P, stap 1](/img/Amazon-1p-create-api-integration-001.png)
3. Klik op **Add new app client**.
   ![API-integratie aanmaken in Amazon 1P, stap 2](/img/Amazon-1p-create-api-integration-002.png)
4. Vul op de nieuwe pagina de **App name** in:
   ![API-integratie aanmaken in Amazon 1P, stap 3](/img/Amazon-1p-create-api-integration-003.png)
5. Kies **API type - SP API**.
6. Vink de rol **Amazon fulfillment** aan waarvoor u API-toegang wilt geven.
7. Bevestig dat u geen toegang tot persoonsgegevens (PII) delegeert: **will not delegate access to PII to another developer's application**.
8. Klik op **Save and exit** om de applicatie aan te maken.

De nieuwe app verschijnt in uw Developer Central-account:
![API-integratie aanmaken in Amazon 1P, stap 4](/img/Amazon-1p-create-api-integration-004.png)

### Inloggegevens voor de synchronisatie van Amazon met ShopCtrl ophalen {#getting-credentials-for-your-amazon-synchronization-with-shopctrl}

Om de API-verbinding met uw Amazon-account tot stand te brengen, verzamelt u de volgende gegevens:

- Vendor code
- LWA Client ID
- LWA Client Secret
- Refresh token

#### Vendor code {#vendor-code}

1. Log in bij uw account op [Vendor Central Amazon](https://vendorcentral.amazon.com/).
2. Klik in het actiepaneel bovenaan op Settings > Contacts.
   ![API-integratie aanmaken in Amazon 1P, stap 5](/img/Amazon-1p-create-api-integration-005.png)
3. Uw **Vendor code** wordt in de keuzelijst weergegeven.

#### LWA-gegevens {#lwa-credentials}

De LWA Client ID en het LWA Client Secret ophalen:

1. Log in bij uw account op [Vendor Central Amazon](https://vendorcentral.amazon.com/).
2. Selecteer in het navigatiemenu rechtsboven **Integration > API Integration**.
3. Zoek de applicatie die u voor de integratie hebt aangemaakt en klik in de kolom LWA credentials op **View**.
   ![API-integratie aanmaken in Amazon 1P, stap 6](/img/Amazon-1p-create-api-integration-006.png)
4. Zowel de **Client identifier** als het **Client secret** wordt weergegeven.
   ![API-integratie aanmaken in Amazon 1P, stap 7](/img/Amazon-1p-create-api-integration-007.png)

#### Refresh Token {#refresh-token}

1. Log in bij uw account op [Vendor Central Amazon](https://vendorcentral.amazon.com/).
2. Selecteer in het navigatiemenu rechtsboven **Integration > API Integration**.
3. Ga in de kolom Action naar de knop Edit App en klik op het pijltje. Selecteer in het vervolgkeuzemenu **Authorise**.
   ![API-integratie aanmaken in Amazon 1P, stap 8](/img/Amazon-1p-create-api-integration-008.png)
4. U wordt doorgestuurd naar de pagina **Authorise application**.
   ![API-integratie aanmaken in Amazon 1P, stap 9](/img/Amazon-1p-create-api-integration-009.png)
5. Klik op de knop **Authorise app**. Hiermee wordt de **Refresh Token** gegenereerd.
