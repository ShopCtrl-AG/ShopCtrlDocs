---
sidebar_position: 2
slug: /docs/amazon-3p
description: "Koppel Amazon 3P Seller Central aan ShopCtrl om orders en producten te importeren, trackingnummers bij te werken, annuleringen te exporteren en retouren aan te maken."
---

# Amazon 3P

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Met de Amazon-connector importeert u via een API-integratie orders en producten uit uw Amazon-verkopersaccount rechtstreeks in ShopCtrl.

## Functies van de Amazon-synchronisatiemodule {#amazon-synchronization-module-features}

Met de Amazon-module kunt u:

- [Nieuwe orders importeren](/User-Guide/04-Order-Management/02-Orders/Create-Orders/importing-orders.md#importing-orders-from-amazon)
- [Trackingnummers bijwerken voor verzonden orders](/User-Guide/07-Fulfillment/tracking-update.md#exporting-shipments-tracking-info-to-amazon)
- [Geannuleerde orders exporteren](/User-Guide/04-Order-Management/02-Orders/edit-order.md#update-cancelled-order-status-to-amazon)
- [Retouren aanmaken](/User-Guide/07-Fulfillment/Returns/manage-returns.md#exporting-returns-to-amazon)
- [De voorraad op Amazon bijwerken](/User-Guide/08-Product-Management/Product-Export/exporting-inventory.md#updating-amazon-inventory)
- [Gewijzigde productprijzen exporteren](/User-Guide/08-Product-Management/Product-Export/exporting-product-details-to-amazon.md#export-changed-product-prices)
- [De publicatiestatus van producten wijzigen](/User-Guide/08-Product-Management/Product-Export/exporting-product-details-to-amazon.md)

## De integratie met Amazon instellen {#setting-up-integration-with-amazon}

### Het Amazon-profiel configureren {#amazon-profile-configuration}

1. Log in bij uw Amazon Seller Central-account.
2. Selecteer in het navigatiemenu rechtsboven **Partner Network > Develop Apps**.
   ![Stap 1](/img/Step01.png)
3. Klik op **Your Developer Profile**.
   ![Stap 2](/img/Step02.png)
4. Vul op de nieuwe pagina de **Contact Information** van uw bedrijf in:
   ![Stap 3](/img/Step03.png)
5. Selecteer bij **Data Access** de volgende optie om uw organisatie te beschrijven:
   "My organisation participates in Amazon Services Europe, and I want to integrate to manage my own business only."
6. Selecteer de onderdelen van de Amazon-shop waarvoor u API-toegang wilt geven.
   _ Brand Analytics
   _ Product Listing
   _ Pricing
   _ Buyer Communication
   _ Inventory and Order Tracking
   _ Direct to Consumer Delivery
   ![Stap 4](/img/Step04-01.png)
7. Beschrijf de **Use Case** waarvoor u gegevens uit Amazon wilt ophalen.
8. Geef aan welke beveiligingsmaatregelen (Security controls) uw organisatie gebruikt.
   ![Stap 5](/img/Step05.png)
9. Lees en bevestig de overeenkomst en het beleid van Amazon.
10. Klik op **Register** om API-toegang aan te vragen.

Nadat u een profiel hebt aangemaakt, heeft Amazon enige tijd nodig om het te beoordelen en goed te keuren.

### Een applicatie aanmaken {#create-an-application}

Zodra Amazon uw ontwikkelaarsaccount heeft goedgekeurd, kunnen we de applicatie aanmaken om inloggegevens voor uw shop te genereren en ShopCtrl toegang te geven tot uw open API.

1. Open de pagina [Developer console](https://sellercentral.amazon.co.uk/sellingpartner/developerconsole).
   ![Stap 8](/img/Step08-01.png)
2. Klik op **Add new app client**.
3. De details van de nieuwe applicatie worden op een nieuwe pagina geopend. Vul de **App name** in.
   ![Stap 7](/img/Step07.png)
4. Selecteer bij **API Type** de optie **SP API**.
5. Vul de **IAM ARN** in die u van ShopCtrl hebt gekregen: `arn:aws:iam::883858241360:role/SellingPartnerRole`.
6. Selecteer de **Roles** waarvoor u API-toegang wilt geven.
7. Geef aan of u toegang tot persoonsgegevens (PII) wilt delegeren aan de applicatie van een andere ontwikkelaar: No, I will not delegate access to PII to another developer's application.
8. Laat de OAuth-velden leeg.
9. Klik op **Save**.

De nieuwe app verschijnt in uw Developer Central-account:
![Stap 8](/img/Step08.png)

### Inloggegevens voor de synchronisatie van Amazon met ShopCtrl ophalen {#getting-credentials-for-your-amazon-synchronization-with-shopctrl}

Om de API-verbinding met uw Amazon-account tot stand te brengen, hebben we de volgende gegevens nodig:

- Seller ID
- LWA Client ID
- LWA Client Secret
- Refresh token

#### Seller ID {#seller-id}

1. Log in bij uw Seller Partner-account.
2. Klik op het tandwielpictogram in het actiepaneel bovenaan en selecteer **Account Info**.
   ![Stap 12](/img/Step12.png)
3. U wordt doorgestuurd naar de pagina Seller Account Information. Klik in het deelvenster Business Information op de link **Your Merchant Token**.
   ![Stap 13](/img/Step13.png)
4. U wordt doorgestuurd naar de pagina Merchant Token. Dit token is uw Seller ID.
   ![Stap 14](/img/Step14-01.png)

#### LWA-gegevens {#lwa-credentials}

De LWA Client ID en het LWA Client Secret ophalen:

1. Ga naar de pagina [Developer console](https://sellercentral.amazon.co.uk/sellingpartner/developerconsole).
   ![Stap 8](/img/Step08.png)

2. Klik in de kolom LWA credentials op **View**. Zowel de **Client identifier** als het **Client secret** wordt weergegeven.
   ![Stap 9](/img/Step09.png)

#### Refresh Token {#refresh-token}

1. Open de pagina [Developer console](https://sellercentral.amazon.co.uk/sellingpartner/developerconsole).
2. Ga in de kolom Action naar het pijltje en klik erop. Selecteer in het vervolgkeuzemenu **Authorise**.
   ![Stap 10](/img/Step10.png)
3. U wordt doorgestuurd naar de pagina **Authorise application**.
   ![Stap 11](/img/Step11.png)
4. Selecteer de **Marketplace(s)** waarvoor u uw app wilt autoriseren.
5. Klik op de knop **Authorise app**.
6. Hiermee wordt de **Refresh Token** gegenereerd.

### De shopsynchronisatie instellen in ShopCtrl {#setting-up-shop-synchronization-in-shopctrl}

Zodra u de integratie in uw Amazon-account hebt ingeschakeld, kunt u de synchronisatie in ShopCtrl instellen. Dit gaat in twee stappen.

#### 1. De shop configureren in ShopCtrl {#1-configuring-shop-in-shopctrl}

:::warning[Voordat u begint]

Stel de bijbehorende valuta, btw-tarieven en betaalmethoden voor uw ShopCtrl-shop in voordat u de synchronisatie met Amazon inschakelt.

:::

Om verder te gaan met het instellen van de shop in ShopCtrl, bepalen we hoe de contactgegevens van klanten worden opgeslagen. Amazon stuurt klantnamen en klantadressen elk als één veld naar ShopCtrl. We wijzigen de betreffende shopinstellingen om deze gegevens goed te verwerken.

![Contactgegevens in de shopinstellingen](/img/shop-settings-contacts-contact-info.png)

Wijzigen hoe de contactgegevens van klanten in ShopCtrl worden opgeslagen:

1. Log in bij uw ShopCtrl-account als gebruiker met de rol **Shop Owner Admin**.
2. Open de pagina met **shopinstellingen** van de shop waarvoor de verbinding met Amazon is ingesteld.
3. Klap in het menu het onderdeel **Contacts** uit en klik op **Contact Info**.
4. Wijzig de instelling **Address detail** in **One field for street name, house number and extension**.
5. Wijzig de instelling **Name detail** in **One single field for contact person name**.
6. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.

#### 2. De Amazon-shopsynchronisatie instellen in ShopCtrl {#2-setting-up-amazon-shop-synchronization-in-shopctrl}

1. Log in bij uw ShopCtrl-account als gebruiker met de rol **Shop Owner Admin**.
2. Selecteer in het navigatiemenu **Configuration > Shops** om de lijst met aangemaakte shops te openen.
3. Selecteer de shop waarvoor u de Amazon-synchronisatie wilt instellen en klik op **Edit** om de shopinstellingen te openen.
4. Selecteer in het menu **Shop synchronization > Amazon Shop Synchronization**.
   ![Instellingen voor de Amazon-synchronisatie van de shop](/img/amazon-synchronization-shop-settings.png)

5. Selecteer een **Region** en een **Marketplace** waarvan u de orders via deze shop wilt importeren.
   :::(Warning) (Let op)
   U kunt de synchronisatie met maar één regio instellen, maar u kunt per regio meerdere marktplaatsen selecteren. Dit betekent dat orders van alle marktplaatsen in één shop in ShopCtrl worden geïmporteerd.
   :::
6. Selecteer de Authorization Kind **Self**.
7. Vul de **Seller ID** in (uw Amazon Merchant Token).
8. Vul de **LWA Client Id** en het **LWA Client Secret** in die voor de privé-app van ShopCtrl in Amazon zijn gegenereerd.
9. Vul de **Refresh Token** in.
10. Vink in het deelvenster Synchronization Customization de functies aan die u wilt gebruiken. Op dit moment zijn de volgende functies beschikbaar:
    - **Orders Integration** - een algemene instelling die de orderimport inschakelt
      - **PII Access** - importeert persoonlijk identificeerbare gegevens van uw klanten voor de orderverwerking
      - **Import new orders** - importeert nieuwe orders
      - **Import missing orders** - vink deze functie aan om alle mogelijke synchronisatiefouten uit te sluiten en orders te importeren die om welke reden dan ook ontbreken
      - **Export cancelled orders** - geeft in ShopCtrl geannuleerde orders door aan Amazon
      - **Export shipments** - exporteert trackingcodes naar Amazon
      - **Export returns** - exporteert retouren die in ShopCtrl zijn aangemaakt naar Amazon
    - **Products Integration**
      - **Export changed product stocks** - schakelt de voorraadexport naar Amazon in
      - **Export changed product prices** - werkt de bijbehorende prijzen van de aanbiedingen bij
      - **Sync product publish state** - sluit of opent aanbiedingen op basis van de publicatiestatus van het product in ShopCtrl
11. Selecteer in het deelvenster **Additional Settings** de hoofdorderstatus die bij het importeren wordt ingesteld voor orders die door Amazon worden afgehandeld (fulfilled by Amazon). Zo voorkomt u dat orders twee keer worden afgehandeld.
12. (Optioneel) Op het tabblad **Fulfillment Priority** kunt u de standaard **fulfilment-prioriteit** wijzigen die na de import wordt ingesteld voor gewone, premium- en Prime-orders.
13. (Optioneel) De **koppeling van orderstatussen** gebeurt automatisch, maar u kunt deze overschrijven door de statussen handmatig te koppelen:
    ![Koppeling van orderstatussen voor Amazon](/img/amazon-order-status-mapping.png)
    Ter informatie, het verloop van de orderstatussen bij Amazon:
    ![Orderstatussen van Amazon](/img/amazon-statuses.png)

14. Koppel elke **Shipment Category** die in uw Amazon-verkopersaccount is ingesteld aan het **Carrier Account** in ShopCtrl, de **Amazon Carrier Name** en de **Delivery Service**. U kunt een naam kiezen uit de lijst met vervoerders en bezorgdiensten, of deze handmatig invullen.
    :::info[Let op]

    Amazon controleert ingediende trackingcodes samen met de naam van de vervoerder en de verzendmethode waarmee de order is bezorgd.
    Om de vervoerder correct te laten verwerken, moeten de vervoerdersaccounts in ShopCtrl worden gekoppeld aan namen van vervoerders en bezorgdiensten die Amazon herkent.
    Een onjuiste koppeling kan de berekening van de VTR bij Amazon beïnvloeden. Zie ook [Valid Tracking Rate](https://sellercentral.amazon.com/gp/help/external/G201817070).

    :::
    ![Koppeling van vervoerdersaccounts voor Amazon](/img/amazon-carrier-account-mapping.png)

15. Zodra u alle stappen hebt doorlopen, kunt u de synchronisatie inschakelen (**Enable**) door het selectievakje bovenaan de instellingenpagina aan te vinken. Uw orders worden dan op de achtergrond gesynchroniseerd.
16. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.
