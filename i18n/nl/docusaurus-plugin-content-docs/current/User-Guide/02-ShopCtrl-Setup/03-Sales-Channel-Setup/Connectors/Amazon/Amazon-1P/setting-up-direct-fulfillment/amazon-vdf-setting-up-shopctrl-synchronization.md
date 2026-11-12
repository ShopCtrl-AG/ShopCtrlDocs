---
sidebar_position: 1
slug: /docs/amazon-vdf-setting-up-shopctrl-synchronization
description: "Configureer de synchronisatie met Amazon Direct Fulfillment in ShopCtrl, inclusief valuta, btw-tarieven, betaalmethoden en de verwerking van contactgegevens."
---

# VDF-synchronisatie instellen in ShopCtrl

Zodra u de integratie in uw Amazon-account hebt ingeschakeld, kunt u de synchronisatie voor Direct Fulfillment in ShopCtrl instellen.

## Voordat u begint: de shop configureren in ShopCtrl {#before-start-configuring-shop-in-shopctrl}

:::warning[Voordat u begint]

Stel de bijbehorende valuta, btw-tarieven en betaalmethoden voor uw ShopCtrl-shop in voordat u de synchronisatie met Amazon Direct Fulfillment inschakelt.

:::

Amazon stuurt klantnamen en adressen elk als één veld. Pas de betreffende shopinstellingen aan om deze gegevens goed te verwerken.

<img src={require("/img/shop-settings-contacts-contact-info.png").default} height="" width="800" />

Wijzigen hoe de contactgegevens van klanten in ShopCtrl worden opgeslagen:

1. Log in bij uw ShopCtrl-account als gebruiker met de rol **Shop Owner Admin**.
2. Open de pagina met **shopinstellingen** van de shop waarvoor de verbinding met Amazon is ingesteld.
3. Klap in het menu het onderdeel **Contacts** uit en klik op **Contact Info**.
4. Wijzig de instelling **Address detail** in **One field for street name, house number and extension**.
5. Wijzig de instelling **Name detail** in **One single field for contact person name**.
6. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.

## De synchronisatie met Amazon Direct Fulfillment instellen {#setting-up-amazon-direct-fulfillment-synchronization}

We verdelen het instellen in de volgende stappen:

1. Een VDF-vervoerdersaccount aanmaken
2. Verbinding maken met de Amazon SP-API
3. De orderinstellingen (Order Sync Settings) configureren
4. Magazijn- en statuskoppelingen configureren
5. Synchronisatiefuncties inschakelen

<details>
  <summary>Alle shopinstellingen tonen</summary>

<img src={require("/img/shop-amazon-vdf-full-settings.png").default} height="" width="800" />

</details>

### **Stap 1.** Een VDF-vervoerdersaccount aanmaken {#step-1-create-vdf-carrier-account}

Maak, voordat u de synchronisatiemodule configureert, het vervoerdersaccount voor Amazon VDF aan, zodat u het later in de shopinstellingen kunt selecteren.

1. Log in bij ShopCtrl als gebruiker met de rol **Shop Owner Admin**.
2. Ga in het menu naar **Configuration > Carrier Accounts**.
3. Klik op **Add new** om een nieuw vervoerdersaccount aan te maken. Selecteer "Amazon VDF Carrier" in de lijst met beschikbare integraties.
4. Geef het vervoerdersaccount een herkenbare naam in het veld **Name** (bijvoorbeeld "Amazon VDF Carrier").
5. Zet **Shop owner** op uw bedrijf en selecteer onder **Available for** het magazijn dat voor Amazon Direct Fulfillment wordt gebruikt.
6. Klik op **Save** of **Save and Close**.

<img src={require("/img/shop-amazon-vdf-carrier-account-setup.png").default} height="" width="800" />


### **Stap 2.** Verbinding maken met de Amazon SP-API {#step-2-establish-connection-to-amazon-sp-api}

Koppel uw ShopCtrl-shop aan Amazon door uw leveranciersgegevens en API-sleutels in te vullen in het gedeelte **General Settings**.

1. Ga in het menu naar **Configuration > Shops** om de lijst met aangemaakte shops te openen.
2. Kies de shop waarvoor u Amazon Direct Fulfillment wilt configureren en klik op **Edit** om de shopinstellingen te openen.
3. Selecteer in het menu **Shop synchronization > Amazon 1P Direct Fulfillment Synchronization**.
    <img src={require("/img/shop-amazon-vdf-configuration-connection.png").default} height="" width="800" />
4. Geef een **Seller Region** en de **Marketplace Ids** op waarvan u orders via deze shop wilt importeren.
5. Laat **Authorization Kind** op **Self** staan.
6. Vul in het gedeelte **Self Authorization** de **Vendor Code** in.
7. Vul de **LWA Client Id** en het **LWA Client Secret** in die [voor de privé-app van ShopCtrl in Amazon zijn gegenereerd](../setting-up-integration-with-amazon-1p/amazon-1p-profile-configuration.md).
8. Vul de **Refresh Token** in.
9. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.

U hebt nu verbinding gemaakt met Amazon, maar er zijn nog geen functies ingeschakeld.

### **Stap 3.** De orderinstellingen (Order Sync Settings) configureren {#step-3-configure-order-sync-settings}

Leg in het gedeelte **Order Sync Settings** vast vanaf welke datum orders worden geïmporteerd en volgens welke regels orders aan Amazon worden bevestigd.
    <img src={require("/img/shop-amazon-vdf-configuration-acknowledgement.png").default} height="" width="800" />

1. **Ignore Orders Before Timestamp:** stel de datum in vanaf wanneer u orders wilt importeren (bijvoorbeeld `01.05.2026`). Zo worden oudere orders niet geïmporteerd.
2. **VDF Carrier Account:** selecteer het vervoerdersaccount dat u in stap 1 hebt aangemaakt. Wanneer een order wordt geaccepteerd, wordt deze vervoerder automatisch aan de order toegewezen.
3. **Acknowledgeable Main Order Statuses:** kies bij welke hoofdorderstatussen de knoppen Accept en Reject op de detailpagina van de order beschikbaar zijn (bijvoorbeeld *Active, New Order, Acknowledged, Rejected*). Orders worden alleen aan Amazon bevestigd als ze een van deze statussen hebben.
4. **Credit Row Reject Reason:** selecteer de creditreden die wordt gebruikt bij het weigeren van orders. We raden aan een creditreden "Rejected" aan te maken als die nog niet bestaat.
5. **Credit Row Cancel Reason:** selecteer de creditreden voor geannuleerde orders. We raden aan een creditreden "Cancelled" aan te maken.
6. Klik op **Save** of **Save and Close** om de wijzigingen toe te passen.

:::info[]

Bij Direct Fulfillment wordt een order in zijn geheel bevestigd of geweigerd. Als u een order accepteert, worden alle orderregels volledig bevestigd. Als u een order weigert, worden voor elke orderregel creditregels voor het volledige aantal aangemaakt. Gedeeltelijk accepteren of weigeren is niet mogelijk.

:::

### **Stap 4.** Magazijn- en statuskoppelingen configureren {#step-4-configure-warehouse-and-status-mappings}

Onderaan de pagina staan drie deelvensters voor koppelingen. Gebruik in elk deelvenster de knop **Add** om een nieuwe koppelregel aan te maken.

<img src={require("/img/shop-amazon-vdf-configuration-status-mapping.png").default} height="" width="800" />

**Warehouse Code mapping** - koppel elk magazijn in ShopCtrl aan de bijbehorende Amazon Warehouse Code, zodat orders en voorraad naar de juiste locatie worden geleid.

**Main Order Status mapping** - de orderstatussen van Amazon Direct Fulfillment zijn standaard al gekoppeld aan statussen in ShopCtrl. U kunt deze koppelingen aanpassen aan uw werkwijze. De kolom **Scope** bepaalt waar de koppeling geldt (standaard: *Shop*). Standaardkoppelingen:

| Status bij Amazon | Orderstatus in ShopCtrl |
|---|---|
| Accepted | Acknowledged |
| Cancelled | Cancelled |
| New | New Order |
| Rejected | Rejected |
| Shipped | Finished |

**Payment Order Status mapping** - Amazon geeft bij het ophalen van orders via de API geen betaalstatus terug, dus de betaalstatus wordt afgeleid van de status van de order. Standaardkoppelingen:

| Status bij Amazon | Orderstatus in ShopCtrl |
|---|---|
| New | Not Paid |
| Shipped | Paid |

Klik op **Save** of **Save and Close** om de wijzigingen toe te passen.

### **Stap 5.** Synchronisatiefuncties inschakelen {#step-5-enable-synchronization-features}

Gebruik het deelvenster **Synchronization Customization** (rechtsboven op de pagina) om de functies in te schakelen die u nodig hebt. Als u een hoofdschakelaar inschakelt, worden de onderliggende opties beschikbaar.

<img src={require("/img/shop-amazon-vdf-configuration-sync.png").default} height="" width="800" />

1. Schakel **Orders Integration** (hoofdschakelaar) in en selecteer daarna:
    - **Import new orders** - doorlopende synchronisatie van nieuwe orders.
    - **Import missing orders** - importeert orders die mogelijk zijn gemist (aanbevolen).
    - **Acknowledge orders** - stuurt uw beslissingen om orders te accepteren of te weigeren terug naar Amazon (ingesteld in stap 3).
    - **Export Shipments** - stuurt na verzending verzendbevestigingen naar Amazon.
2. Om voorraadniveaus te exporteren, schakelt u **Inventory Integration** (hoofdschakelaar) en **Export Inventory** in.
3. Vink de bovenste schakelaar **Enabled** aan in het gedeelte **General Settings**. Deze hoofdschakelaar start de synchronisatie daadwerkelijk: zodra deze aan staat, worden de ingestelde functies op de achtergrond uitgevoerd.
<img src={require("/img/shop-amazon-vdf-configuration-master-switch.png").default} height="" width="800" />
4. Klik op **Save** of **Save and Close** om uw configuratie toe te passen.

## Het instellen afronden {#completing-the-setup}

Zodra de configuratiestappen zijn afgerond en de module is ingeschakeld, is uw integratie met Direct Fulfillment actief. Dropship-inkooporders van Amazon worden automatisch op de achtergrond gesynchroniseerd.

Een binnenkomende order verschijnt met het inkooptype Dropship en de status New. Vanaf de detailpagina van de order kunt u de order accepteren of weigeren, een zending aanmaken, verzendlabels aanvragen via de VDF-vervoerder en de order verzenden. Verzendbevestigingen worden automatisch naar Amazon gestuurd nadat de zending als verzonden is gemarkeerd.
