---
sidebar_position: 4
slug: /docs/magento-2
description: "Koppel Magento 2 via de REST API aan ShopCtrl om orders te importeren, track & trace-gegevens te exporteren, producten te synchroniseren en voorraadniveaus door te sturen."
---

# Magento 2

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Met de Magento-connector kunt u:

- orders importeren
- track & trace-gegevens terug exporteren naar Magento
- producten synchroniseren
- voorraadniveaus exporteren

## De integratie met Magento instellen {#setting-up-magento-integration}

Om een integratie met Magento in te stellen, schakelt u eerst de REST API-integratie in uw Magento-account in.
Maak eerst een nieuwe gebruiker aan voor uw nieuwe ShopCtrl-integratie met de volgende stappen:

1. [Maak een nieuwe Magento-gebruiker aan](https://docs.magento.com/user-guide/system/permissions-users-all.html#create-a-new-user).

1. Wijs een beheerdersrol toe aan de nieuwe gebruiker. Zorg dat de nieuwe ShopCtrl API-integratie toegang krijgt tot deze onderdelen van uw Magento-stores:
   - Sales
   - Products
   - Carts
   - Customers
   - Marketing
   - Content
   - Stores
   - System
   - Global Search

Zie [Magento Role Resources](https://docs.magento.com/user-guide/system/permissions-role-resources.html) voor meer informatie.

## Uw Magento-synchronisatie instellen in ShopCtrl {#setup-your-magento-synchronization-in-shopctrl}

:::warning[Voordat u begint]

Stel de bijbehorende valuta, btw-tarieven en betaalmethoden voor uw ShopCtrl-shop in voordat u de synchronisatie met Magento inschakelt.

:::

Zodra u API-sleutels hebt gegenereerd in uw Magento-account, kunt u de synchronisatie in ShopCtrl instellen.

1. Log in bij uw ShopCtrl-account als gebruiker met de rol **Shop Owner Admin**.
2. Selecteer in het navigatiemenu **Configuration > Shops** om de lijst met aangemaakte shops te openen.
3. Selecteer de shop waarvoor u de Magento-synchronisatie wilt instellen en klik op **Edit** om de shopinstellingen te openen.
4. Selecteer in het menu **Shop synchronization > Magento V2.X Synchronization**.
   ![Verbindings- en functionele instellingen voor Magento](/img/magento-connection-functional-settings.png)
5. Vul de **Username** en het **Password** in die in Magento voor de ShopCtrl API-integratie zijn aangemaakt.
6. Vul de **API Url** in: `https://{hostname}/index.php/rest`.
7. Klik op **Connect to Magento and load available Store Views**. Als de gegevens juist zijn en de verbinding tot stand is gebracht, wordt het veld Store view beschikbaar.
8. Selecteer de **Store View** die u aan deze shop in ShopCtrl wilt koppelen.
9. Vink de functies aan die u wilt gebruiken:
   1. Import orders
   2. Export parcels
   3. Import products
   4. Export stock
   5. Export sales product stock
   6. Export sales product price
10. Selecteer het **Allowed product type**:
    1. Simple
    2. Bundle
    3. All - gebruik zowel Simple- als Bundle-producten
11. (Optioneel) Geef **Specific mappings** op voor het importeren van Magento-orders.
12. Koppel de **Main Order Statuses** van ShopCtrl aan de orderstatussen van Magento. Zie [Magento Order Statuses](https://docs.magento.com/user-guide/sales/order-status.html) voor meer informatie.
    ![Koppelingen voor de Magento-shop](/img/magento-shop-mapping.png)
13. Koppel de **Payment Statuses** van ShopCtrl aan de **Payment statuses** van Magento.
14. Koppel de **Payment Types** van ShopCtrl aan de **Payment Methods** van Magento. 14. Maak een **Carrier account mapping** aan, zodat de namen van de vervoerdersaccounts in ShopCtrl overeenkomen met de vervoerderscodes in Magento.
15. Schakel de synchronisatie in met **Enable**.
16. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.

:::info[Let op]

De synchronisatie van orders is standaard ingeschakeld zodra de Magento-synchronisatie is ingeschakeld.

:::
