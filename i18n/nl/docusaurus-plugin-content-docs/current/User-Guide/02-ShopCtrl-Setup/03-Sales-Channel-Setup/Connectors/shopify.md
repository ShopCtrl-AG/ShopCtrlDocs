---
sidebar_position: 7
slug: /docs/shopify
description: "Koppel Shopify aan ShopCtrl om orders en productgegevens te importeren, tracking en fulfilment bij te werken en de voorraad in Shopify gelijk te houden."
---

# Shopify

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Met de Shopify-connector importeert u via een API-integratie orders en producten uit uw Shopify-webshop rechtstreeks in ShopCtrl.

## Synchronisatiefuncties van de Shopify-module {#shopify-module-synchronization-features}

Met de Shopify-connector importeert u via een API-integratie orders en producten uit uw Shopify-webshop rechtstreeks in ShopCtrl.

- [Orders importeren uit Shopify](/User-Guide/04-Order-Management/02-Orders/Create-Orders/importing-orders.md#importing-orders-from-shopify)
- [Trackingupdate](/User-Guide/07-Fulfillment/tracking-update.md#fulfilling-orders-and-exporting-tracking-info-to-shopify)
- [De voorraad in Shopify bijwerken](/User-Guide/08-Product-Management/Product-Export/exporting-inventory.md#updating-shopify-inventory)
- Productgegevens importeren
- Productgegevens exporteren

## De integratie met Shopify instellen {#setting-up-integration-with-shopify}

### Een custom app aanmaken in uw Shopify-account {#create-a-custom-app-in-your-shopify-account}

Om de integratie in te stellen, maakt u eerst in het beheerpaneel van Shopify een nieuwe ShopCtrl-app aan en geeft u deze toegang tot de API van uw shop. Meer informatie over custom apps in Shopify vindt u in het [Shopify Help Center: Custom apps](https://help.shopify.com/en/manual/apps/app-types/custom-apps).

Mogelijk moet u eerst in de beheerinstellingen van Shopify toestaan dat er nieuwe custom apps worden aangemaakt. Zie [Enable custom app development from the Shopify admin](https://help.shopify.com/en/manual/apps/custom-apps#enable-custom-app-development-from-the-shopify-admin) voor meer informatie.

Om inloggegevens voor uw shop te genereren en ShopCtrl toegang te geven tot uw open API, maakt u een custom app aan en installeert u deze:

1. Log in bij het beheer van Shopify.
2. Klik in het navigatiemenu op **Settings ⚙ > Apps and sales channels**.
   ![Apps en verkoopkanalen in Shopify](/img/shopify-apps-and-sales-channels.png)
3. Klik op **Develop apps**.
4. Klik op **Create an app**.
5. Vul in het pop-upvenster de **App name** in en selecteer een **App developer**.
   ![Een custom app aanmaken in het beheer van Shopify](/img/shopify-admin-create-a-custom-app.png)
6. Klik op **Create app**.
7. U moet **API scopes** instellen om te bepalen tot welke onderdelen van uw shop de ShopCtrl-app toegang heeft. Klik hiervoor op **Configure Admin API scopes**.
8. U kunt nu filteren en de ShopCtrl-app toegang geven tot de volgende scopes:
   - read_assigned_fulfillment_orders
   - write_assigned_fulfillment_orders
   - read_fulfillments
   - write_fulfillments
   - read_inventory
   - write_inventory
   - read_locations
   - read_merchant_managed_fulfillment_orders
   - write_merchant_managed_fulfillment_orders
   - read_third_party_fulfillment_orders
   - write_third_party_fulfillment_orders
   - read_orders
   - write_orders
   - read_products
   - write_products
   - read_shipping
   - (optioneel) read_content
   - (optioneel) write_content
9. Nadat u de API scopes voor uw app hebt ingesteld, kunt u de app installeren om de API-toegangstokens te krijgen. Klik op **Install app**.
10. Klik in het dialoogvenster op **Install app**.
11. De API-sleutel, het secret en het Admin API-toegangstoken worden nu op het scherm weergegeven. Om het toegangstoken te krijgen, gaat u naar het gedeelte Admin API access token en klikt u op **Reveal token once**. Bewaar het token op een veilige plek, net als een wachtwoord.

Om een verbinding met ShopCtrl tot stand te brengen, hebt u de API-sleutel en het Admin API-toegangstoken nodig.

Volgens Shopify:

> De app-ontwikkelaar kan de eigenaar van de shop zijn, of elk medewerkers- of samenwerkersaccount met het [recht Develop apps](https://help.shopify.com/en/manual/your-account/staff-accounts/staff-permissions/staff-permissions-descriptions).

### Uw Shopify-synchronisatie instellen in ShopCtrl {#setup-your-shopify-synchronization-in-shopctrl}

:::warning[Voordat u begint]

Stel de bijbehorende valuta, btw-tarieven en betaalmethoden voor uw ShopCtrl-shop in voordat u de synchronisatie met Shopify inschakelt.

:::

Zodra u de integratie in uw Shopify-account hebt ingeschakeld, kunt u de synchronisatie in ShopCtrl instellen.

1. Log in bij uw ShopCtrl-account als gebruiker met de rol **Shop Owner Admin**.
2. Selecteer in het navigatiemenu **Configuration > Shops** om de lijst met aangemaakte shops te openen.
   ![Shopinstellingen in ShopCtrl](/img/shopctrl-shop-settings.png)
3. Selecteer de shop waarvoor u de Shopify-synchronisatie wilt instellen en klik op **Edit** om de shopinstellingen te openen.
4. Selecteer in het menu **Shop synchronization > Shopify Synchronization**.
   ![Shopify-instellingen met terugbetaling](/img/shopify-settings-with-refund.png)
5. Vul in het deelvenster **Connection settings** de **API key** en het **API password (API access token)** in die in Shopify voor de ShopCtrl-app zijn gegenereerd.
6. Vul de **Api url** in: `https://{hostname}/admin/api/{version}/`. De momenteel ondersteunde API-versie is **'2023-01'**.
7. Klik op de knop **Connect** om de verbindingsinstellingen te controleren. Er verschijnt een pop-upvenster dat aangeeft of de verbinding is geslaagd, of dat er een probleem is met onjuist ingevulde gegevens.
8. Vink in het deelvenster **Functional settings** de functies aan die u wilt gebruiken:
   - **Import Orders** from Shopify - importeert nieuwe orders met het opgegeven interval
   - **Auto-check missing orders for order import** - vink deze functie aan om alle mogelijke synchronisatiefouten uit te sluiten en orders te importeren die om welke reden dan ook ontbreken
   - **Send Track&Trace info** - exporteert de trackingcode, de vervoerder en de tracking-URL naar Shopify
   - **Repair manual fulfillment on Shopify side** - als orders per ongeluk in het beheer van Shopify zijn afgehandeld (fulfilled), wordt deze afhandeling gekoppeld aan de zending in ShopCtrl en wordt ontbrekende trackinginformatie in Shopify automatisch bijgewerkt.
   - **Export Products** - exporteert nieuwe producten naar Shopify en werkt bestaande producten bij
   - **Export Products stock to Shopify** - exporteert de beschikbare productvoorraad
   - Use sku for not mapped product when export product stock - vereist als de eerste productimport niet via de Shopify-module is uitgevoerd.
   - **Check active only products when using sku for not mapped products** - deze instelling voorkomt dat de voorraad van een van uw producten niet wordt bijgewerkt
   - Sync hs code along with product stock
   - Enable Inventory track quantity when export product stock - schakelt het bijhouden van aantallen (track quantity) in voor een product in Shopify als de voorraad van dit product in ShopCtrl toeneemt
   - **Import Products** - importeert nieuwe producten uit Shopify en werkt bestaande producten bij
   - **Refund product** - een niet-gesynchroniseerd systeemproduct dat wordt aangemaakt als een terugbetaling die uit Shopify is geïmporteerd niet aan een bepaalde orderregel is gekoppeld.

   :::warning[**Let op**]

   **Send Track&Trace info**. Om deze functie in te schakelen, moet u ook **Warehouses** koppelen aan **Locations** in Shopify en hieronder een koppeling voor **Carrier** aanmaken.

   :::
9. Kies of **Taxes are included in product price**. Deze instelling hangt af van de instellingen van uw Shopify-shop. Meer informatie vindt u bij [Shopify Taxes](https://help.shopify.com/en/manual/taxes/).
10. Om ervoor te zorgen dat de namen van de vervoerdersaccounts in ShopCtrl overeenkomen met die in Shopify, maakt u een **Carrier account mapping** aan.
    - Klik op **Add** en selecteer in de nieuwe rij in de vervolgkeuzelijst een **ShopCtrl Carrier**-account dat voor deze shop wordt gebruikt.
    - Typ de naam van het **Shopify Carrier**-account. Deze vervoerder wordt samen met de trackingcode teruggestuurd naar Shopify wanneer de order als verzonden wordt gemarkeerd.
11. Stel de koppeling van **Warehouse** aan **Location** in: kies een magazijn dat voor de shop is ingeschakeld en de bijbehorende locatie in Shopify.
    ![Koppeling van magazijnen aan locaties in Shopify](/img/shopify-warehouse-to-location-mapping-config.png)
12. Schakel de synchronisatie in met **Enable**.
13. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.
