---
sidebar_position: 8
slug: /docs/shopware-6
description: "Koppel Shopware 6 aan ShopCtrl om orders en producten te importeren, te beginnen met een API-gebruikersrol en een integratie in uw Shopware-account."
---

# Shopware v6

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Met de Shopware-connector importeert u via een API-integratie orders en producten uit uw Shopware-verkoopkanalen rechtstreeks in ShopCtrl.

## De integratie met Shopware 6 instellen {#setting-up-shopware-6-integration}

Om een integratie met Shopware in te stellen, maakt u eerst een gebruikersrol aan en configureert u daarna de integratie.

### Een rol aanmaken {#create-role}

Een API-gebruikersrol aanmaken in Shopware 6:

1. Log in bij uw Shopware-account als gebruiker met beheerdersrechten.
2. Open **Settings > System > Users & permissions**.
   ![Rol aanmaken in Shopware](/img/shopware-create-role.png)
3. Vul een **Name** in.
4. Selecteer de **permissions** die nodig zijn voor de integratie met ShopCtrl:

| Onderdeel van Shopware (inclusief subonderdelen) |  View   |  Edit   | Create  | Delete  |   All   |
| ------------------------------------------ | :-----: | :-----: | :-----: | :-----: | :-----: |
| Catalogues                                 | &#9745; | &#9745; | &#9745; | &#9745; | &#9745; |
| Orders                                     | &#9745; | &#9745; | &#9745; | &#9745; | &#9745; |
| Other - Sales Channels                     | &#9745; |         |         |         |         |
| Settings                                   | &#9745; | &#9745; | &#9745; | &#9745; | &#9745; |

5. Klik op **Save** om de nieuwe rol aan te maken.

Meer informatie vindt u in de [documentatie van Shopware 6 over Users & Permissions](https://docs.shopware.com/en/shopware-6-en/settings/system/user?category=shopware-6-en/settings/system#new-rolls).

### Een integratie aanmaken {#create-integration}

Een nieuwe integratie aanmaken in Shopware 6:

1. Log in bij uw Shopware-account als gebruiker met beheerdersrechten.
2. Open **Settings > System > Integrations**.
3. Klik op **Add integration**.
4. Vul de **Name** in.
5. Selecteer de **Role** die u in de vorige stappen voor de ShopCtrl API-integratie hebt aangemaakt.
6. Kopieer en noteer de **Access key ID** en de **Secret access key**. Deze sleutels hebt u later nodig voor de synchronisatiemodule in ShopCtrl.
   ![Integratie aanmaken in Shopware](/img/shopware-create-integration.png)
7. Klik op **Save Integration**.

:::warning

Noteer de **Secret access key** en bewaar deze op een veilige plek. Na het opslaan van de integratie is de secret access key niet meer zichtbaar.

:::

Meer informatie vindt u in de [documentatie van Shopware 6 over Integrations](https://docs.shopware.com/en/shopware-6-en/settings/system/integrationen).

## De synchronisatie met Shopware v6 instellen in ShopCtrl {#setting-up-shopware-v6-synchronization-in-shopctrl}

:::warning[Voordat u begint]

Stel de bijbehorende valuta, btw-tarieven en betaalmethoden voor uw ShopCtrl-shop in voordat u de synchronisatie met Shopware inschakelt.

:::

Zodra u de integratie in uw Shopware-account hebt ingeschakeld, kunt u de synchronisatie in ShopCtrl instellen.

1. Log in bij uw ShopCtrl-account als gebruiker met de rol **Shop Owner Admin**.
2. Selecteer in het navigatiemenu **Configuration > Shops** om de lijst met aangemaakte shops te openen.
3. Selecteer de shop waarvoor u de Shopware-synchronisatie wilt instellen en klik op **Edit** om de shopinstellingen te openen.
4. Selecteer in het menu **Shop synchronization > Shopware v6 Synchronization**.
   ![Verbindingsinstellingen voor Shopware in de shopinstellingen](/img/shopware-shop-settings-connection.png)
5. Vul de **Access key** en de **Secret key** in die in Shopware voor de ShopCtrl-integratie zijn gegenereerd.
6. Vul de **Api url** in: `https://{hostname}/api`.
7. Geef de **Token url** op: `https://{hostname}/api/oauth/token`.
8. Vink in het deelvenster **Functional settings** de functies aan die u wilt gebruiken:
   - Export Products to Shopware
   - Import Products from Shopware
   - Import Orders from Shopware
9. Schakel de synchronisatie in met **Enable**.
10. Klik op **Connect** om de verbinding tot stand te brengen. Als de verbinding is geslaagd, worden de deelvensters Sales Channels en de koppelingen beschikbaar.
    ![Synchronisatiestatus en koppelingen voor Shopware](/img/shopware-sync-status-mapping.png)
11. Selecteer in de vervolgkeuzelijst het **Sales channel** waarmee u uw shop wilt synchroniseren.
12. Koppel de **taxes** van Shopware aan de **VATs** van uw ShopCtrl-shop. De getoonde btw van Shopware is de btw die volgens de belastingregels van Shopware geldt voor het land van het verkoopkanaal. Als er voor dat land geen belastingregel is ingesteld, wordt de standaardbtw getoond. Zie [Shopware taxes](https://docs.shopware.com/en/shopware-6-en/settings/taxes) voor meer informatie.
13. Voeg de **Main Order Statuses** toe en koppel ze.
14. Voeg de **Payment Order Statuses** toe en koppel ze.
15. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.
