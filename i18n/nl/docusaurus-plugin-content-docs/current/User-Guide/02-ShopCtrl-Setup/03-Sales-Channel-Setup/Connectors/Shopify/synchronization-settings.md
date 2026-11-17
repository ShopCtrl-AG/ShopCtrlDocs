---
sidebar_position: 4
slug: /docs/shopify-settings
description: "Stap 3 van de Shopify-installatie: stel de orderimport per markt, de export van track & trace en de export van productvoorraad in en schakel de synchronisatie in."
---

# Stap 3. De synchronisatie-instellingen instellen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

In deze stap kiest u wat ShopCtrl met Shopify synchroniseert en schakelt u de synchronisatie in. [Koppel ShopCtrl eerst aan Shopify](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/connect-to-shopify.md).

Alle instellingen staan in de shopinstellingen onder **Shop synchronization > Shopify Synchronization**, in het deelvenster **Functional settings**. Stel alleen de functies in die u nodig hebt:

1. [De orderimport instellen](#configure-order-import)
2. [De export van track & trace instellen](#configure-track-and-trace-export)
3. [De export van productvoorraad instellen](#configure-product-stock-export)
4. [De synchronisatie inschakelen](#enable-the-synchronization)

## De orderimport instellen {#configure-order-import}

### Eén Shopify-shop, meerdere ShopCtrl-shops {#one-shopify-store-several-shopctrl-shops}

In Shopify kan één shop aan veel landen verkopen, elk met eigen btw-tarieven en een eigen valuta. In ShopCtrl worden btw-tarieven en valuta per shop ingesteld. Daarom maakt u meestal per land een aparte shop aan, bijvoorbeeld een BE-shop en een NL-shop.

Daarom kan elke ShopCtrl-shop alleen de orders van geselecteerde Shopify-markten importeren:

- **Dezelfde koppeling** - koppel elke shop aan dezelfde Shopify-shop met dezelfde inloggegevens van de app.
- **Verschillende markten** - vul in elke shop de landen in bij **Markets**. Bijvoorbeeld *NL* in de NL-shop en *BE, LU* in de BE-shop.
- **Land van de order** - ShopCtrl gebruikt het land van het factuuradres van de order, of van het verzendadres als de order geen factuuradres heeft.
- **Valuta** - orders worden geïmporteerd in de valuta waarin de klant heeft betaald. Stel de valuta van de shop in op de valuta van de bijbehorende markten.

<div className="markets-diagram" role="img" aria-label="Eén Shopify-shop stuurt NL-orders naar de NL-shop in ShopCtrl, BE- en LU-orders naar de BE-shop en DE-orders naar de DE-shop.">
  <div className="markets-diagram__box markets-diagram__source">
    <strong>Shopify-shop</strong>
    <span>Orders uit NL, BE, LU, DE</span>
  </div>
  <div className="markets-diagram__routes">
    <div className="markets-diagram__route">
      <span className="markets-diagram__arrow">NL →</span>
      <div className="markets-diagram__box"><strong>NL-shop in ShopCtrl</strong><span>Markets: NL</span></div>
    </div>
    <div className="markets-diagram__route">
      <span className="markets-diagram__arrow">BE, LU →</span>
      <div className="markets-diagram__box"><strong>BE-shop in ShopCtrl</strong><span>Markets: BE, LU</span></div>
    </div>
    <div className="markets-diagram__route">
      <span className="markets-diagram__arrow">DE →</span>
      <div className="markets-diagram__box"><strong>DE-shop in ShopCtrl</strong><span>Markets: DE</span></div>
    </div>
  </div>
</div>

:::warning[Elk land in slechts één shop]

- Als een land in twee shops is ingevuld, worden de orders uit dat land in beide shops geïmporteerd.
- Als **Markets** leeg is, importeert de shop orders uit alle landen. Laat het veld alleen leeg als u één ShopCtrl-shop koppelt.
- Orders uit een land dat in geen enkele shop is ingevuld, worden niet geïmporteerd.

:::

:::note

Neem contact op met de support van ShopCtrl als u orders wilt selecteren op het land van het verzendadres in plaats van het factuuradres. Dit is een systeembrede instelling.

:::

### Instellen of prijzen inclusief belasting zijn {#set-whether-prices-include-taxes}

Stel dit in voordat u de orderimport inschakelt. ShopCtrl gebruikt deze instelling al bij het importeren van orders.

1. Vink in het gedeelte **Product import features** **Taxes included into product price** aan als de prijzen in uw Shopify-shop inclusief belasting zijn. Laat het uitgevinkt als ze exclusief belasting zijn. Meer informatie vindt u bij [Shopify Taxes](https://help.shopify.com/en/manual/taxes/).

   <img src={require("/img/shopify-product-import-features-taxes.png").default} alt="Taxes included into product price in de Shopify-synchronisatie-instellingen" width="600" />

2. Klik op **Save and Close**.

### De orderimport instellen {#set-up-order-import}

In het gedeelte **Order import features**:

1. Vink **Order syncronization** aan om nieuwe orders uit Shopify te importeren.
2. Vul bij **Markets** de landcodes van twee letters in van de orders die deze shop importeert, gescheiden door komma's, bijvoorbeeld `BE, LU`. Laat het veld leeg om orders uit alle landen te importeren.
3. Vink **Auto-check missing orders for order import** aan om te controleren op orders die om welke reden dan ook ontbreken en deze te importeren.
4. Selecteer bij **Street address options** hoe de straatnaam en het huisnummer in Shopify over adresregel 1 en 2 zijn verdeeld.
5. Selecteer een **Refund product**. Shopify kan een bedrag terugbetalen zonder koppeling aan een orderregel. ShopCtrl voegt dan een orderregel met dit product toe en een creditregel met het terugbetaalde bedrag.
6. Vink **Credit rows for refunds without items** aan om deze regels automatisch aan te maken. Vink het uit als u zulke terugbetalingen handmatig in ShopCtrl crediteert. Dan wordt alleen de terugbetaling geïmporteerd.
7. Selecteer een **VAT free tariff**. Dit tarief wordt gebruikt voor producten die in Shopify niet belast zijn.
8. Vul eventueel bij **Apply VAT** de landcodes in die niet van btw worden vrijgesteld, ook als de order een attribuut **VAT Registration Number** met die landcode heeft. Laat het veld leeg om deze controle over te slaan.

   <img src={require("/img/shopify-order-import-sync.png").default} alt="Order import features in de Shopify-synchronisatie-instellingen" width="600" />

9. Klik op **Save and Close**.

:::info[Orders worden alleen geïmporteerd als de synchronisatie is ingeschakeld]

**Order syncronization** alleen start de import niet. ShopCtrl importeert de eerste orders pas nadat u de hoofdinstelling **Enabled** bovenaan de instellingen hebt aangevinkt. Zie [De synchronisatie inschakelen](#enable-the-synchronization).

:::

## De export van track & trace instellen {#configure-track-and-trace-export}

ShopCtrl stuurt de trackingcode, de vervoerder en de tracking-URL naar Shopify en markeert de order als afgehandeld (fulfilled). Zie [Orders afhandelen en trackinginformatie naar Shopify exporteren](/User-Guide/07-Fulfillment/tracking-update.md#fulfilling-orders-and-exporting-tracking-info-to-shopify).

Koppel eerst de vervoerders en magazijnen en schakel pas daarna track & trace in.

### Vervoerders koppelen {#map-carriers}

De namen van de vervoerders in ShopCtrl en Shopify moeten overeenkomen. De vervoerder uit Shopify wordt samen met de trackingcode verstuurd.

1. Klik bij **Carrier account mapping** op **Add**.
2. Selecteer de **ShopCtrl carrier** die voor deze shop wordt gebruikt.
3. Vul bij **Shopify carrier** de naam van de vervoerder in, precies zoals Shopify deze schrijft, bijvoorbeeld `PostNL`, `DHL Parcel`, `DPD`, `GLS`, `UPS` of `BPost`. Shopify maakt dan de trackinglink voor de klant aan. Zie de [lijst met vervoerders die Shopify ondersteunt](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#supported-tracking-companies).
4. Selecteer bij **Scope** of de koppeling geldt voor deze **Shop** of voor **All shops**.

   <img src={require("/img/shopify-carrier-account-mapping.png").default} alt="Carrier account mapping in de Shopify-synchronisatie-instellingen" width="800" />

### Magazijnen aan Shopify-locaties koppelen {#map-warehouses-to-shopify-locations}

Elke afhandeling in Shopify hoort bij een locatie. Koppel bij **Warehouse to location mapping** elk magazijn dat voor de shop is ingeschakeld aan de bijbehorende locatie in Shopify.

<img src={require("/img/shopify-warehouse-location-mapping.png").default} alt="Warehouse to location mapping in de Shopify-synchronisatie-instellingen" width="800" />

De lijst met locaties wordt uit Shopify geladen, dus de verbinding moet eerst zijn ingesteld.

Als u alle orders vanaf één Shopify-locatie verzendt, selecteert u die in plaats daarvan bij **Default location**. De standaardlocatie wordt dan voor elk magazijn gebruikt en de koppeling wordt genegeerd.

### Track & trace inschakelen {#turn-on-track-and-trace}

In het gedeelte **Track&Trace features**:

1. Vink **Order integration** aan om track & trace in te schakelen.
2. Vink **Send Track&Trace info** aan om de trackinginformatie naar Shopify te versturen. ShopCtrl verstuurt deze op het moment dat de zending als **Shipped** wordt gemarkeerd.
3. Vink eventueel **Repair manual fulfillment on Shopify** aan. Als een order per ongeluk in het beheer van Shopify is afgehandeld, koppelt ShopCtrl deze afhandeling aan de zending en vult de ontbrekende trackinginformatie in Shopify aan.

   <img src={require("/img/shopify-track-trace-sync.png").default} alt="Track&Trace features in de Shopify-synchronisatie-instellingen" width="600" />

4. Klik op **Save and Close**.

## De export van productvoorraad instellen {#configure-product-stock-export}

ShopCtrl stuurt de beschikbare voorraad van producten naar Shopify. Zie [De voorraad in Shopify bijwerken](/User-Guide/08-Product-Management/Product-Export/exporting-inventory.md#updating-shopify-inventory).

In het gedeelte **Product export features**:

1. Vink **Product stock management** aan om de beschikbare productvoorraad te exporteren.
2. Vink **Use SKU for not mapped products** aan als de producten niet uit Shopify zijn geïmporteerd. ShopCtrl zoekt het Shopify-product dan op SKU.
3. Vink **Check only active products** aan om alleen actieve Shopify-producten op SKU te zoeken. Zo gaat de voorraad niet naar een inactief product met dezelfde SKU.
4. Vink eventueel **Sync HS code when stock export** aan om de HS-code van het product samen met de voorraad te versturen.
5. Vink **Enable tracking inventory quantity when stock export** aan om het bijhouden van de voorraad in te schakelen voor een Shopify-product dat geen voorraadupdates toestaat.

   <img src={require("/img/shopify-product-export-features.png").default} alt="Product export features in de Shopify-synchronisatie-instellingen" width="600" />

6. Klik op **Save and Close**.

De voorraad wordt per Shopify-locatie geëxporteerd, dus [koppel ook magazijnen aan Shopify-locaties](#map-warehouses-to-shopify-locations).

:::note[Alleen gewijzigde voorraad wordt verstuurd]

ShopCtrl stuurt de voorraad van een product alleen naar Shopify wanneer deze verandert. Producten waarvan de voorraad na het inschakelen van de export niet verandert, houden hun huidige voorraad in Shopify. Zo stuurt u de voorraad van alle producten één keer:

- Neem contact op met de support van ShopCtrl om een volledige eerste voorraadsynchronisatie te starten.
- Of [importeer de productvoorraad via Excel](/User-Guide/08-Product-Management/Product-Import/product-import-via-excel.md#how-to-import-product-stock). De import werkt de voorraad bij en ShopCtrl stuurt deze daarna naar Shopify.

:::

## De synchronisatie inschakelen {#enable-the-synchronization}

1. Vink bovenaan het deelvenster **Functional settings** **Enabled** aan.
2. Klik op **Save and Close**.

ShopCtrl start de functies die u hebt ingeschakeld, bijvoorbeeld de import van de eerste orders.
