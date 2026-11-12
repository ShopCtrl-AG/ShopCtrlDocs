---
sidebar_position: 10
slug: /docs/woocommerce
description: "Koppel WooCommerce aan ShopCtrl met REST API-sleutels om orders te importeren, producten te synchroniseren en voorraadniveaus te exporteren."
---

# WooCommerce

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Met de WooCommerce-connector kunt u:

- orders importeren
- producten synchroniseren
- voorraadniveaus exporteren

## De integratie met WooCommerce instellen {#setting-up-woocommerce-integration}

Om een integratie met WooCommerce in te stellen, schakelt u eerst de REST API-integratie in uw WooCommerce-shop in.
Volg de stappen om een nieuwe sleutel voor uw ShopCtrl-shop aan te maken: [Generate API keys](https://woocommerce.com/document/woocommerce-rest-api/?quid=5cff6a57e7909a84f96e7ac31c10df74).
Geef de nieuwe ShopCtrl API-integratie **Read/Write**-toegang tot uw WooCommerce-shop.

## Uw WooCommerce-synchronisatie instellen in ShopCtrl {#setup-your-woocommerce-synchronization-in-shopctrl}

:::warning[Voordat u begint]

Stel de bijbehorende valuta, btw-tarieven en betaalmethoden voor uw ShopCtrl-shop in voordat u de synchronisatie met WooCommerce inschakelt.

:::

Zodra u API-sleutels hebt gegenereerd in uw WooCommerce-account, kunt u de synchronisatie in ShopCtrl instellen.

1. Log in bij uw ShopCtrl-account als gebruiker met de rol **Shop Owner Admin**.
2. Selecteer in het navigatiemenu **Configuration > Shops** om de lijst met aangemaakte shops te openen.
3. Selecteer de shop waarvoor u de WooCommerce-synchronisatie wilt instellen en klik op **Edit** om de shopinstellingen te openen.
4. Selecteer in het menu **Shop synchronization > WooCommerce V2 Synchronization**.
   ![Verbindingsinstellingen voor WooCommerce](/img/woocommerce-connection-settings.png)
5. Vul de **API Url** van uw WooCommerce-shop in: `https://{hostname}`.
6. Vul de **Consumer Key** en het **Consumer Secret** in die in WooCommerce voor de ShopCtrl API-integratie zijn gegenereerd.
7. (Optioneel) Geef **Specific mappings** op voor het importeren van WooCommerce-orders.
   ![Koppelingsinstellingen voor de WooCommerce-shop](/img/woocommerce-shop-mapping-settings.png)
8. Koppel de **Main Order Statuses** van ShopCtrl aan de orderstatussen van WooCommerce.
   Zie [WooCommerce Order statuses](https://woocommerce.com/document/managing-orders/#order-statuses) voor meer informatie.
9. Koppel de **Payment Types** van ShopCtrl aan de **Payment Methods** van WooCommerce.
10. Maak een **Carrier account mapping** aan, zodat de namen van de vervoerdersaccounts in ShopCtrl overeenkomen met de namen in WooCommerce.
11. Koppel de **VAT tariffs** van de shop aan de btw-tarieven in WooCommerce.
12. Vink in het deelvenster **Product synchronization** de functies aan die u wilt gebruiken:
    - **Sync Products to WooCommerce** - exporteer de producten in de actieve selectie naar WooCommerce
    - **Product sync mode - StockExport** - vink deze functie aan om voorraadniveaus van ShopCtrl naar WooCommerce te exporteren
13. Schakel de synchronisatie in met **Enable**.
14. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.

:::info[Let op]

De synchronisatie van orders is standaard ingeschakeld zodra de WooCommerce-synchronisatie is ingeschakeld.

:::
