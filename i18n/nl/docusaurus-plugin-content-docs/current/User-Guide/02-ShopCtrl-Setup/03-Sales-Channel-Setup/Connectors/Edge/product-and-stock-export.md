---
sidebar_position: 5
slug: /docs/virtualstock-product-stock-export
description: "Stap 4 van het instellen van Virtualstock: koppel producten aan offers, stel levertijden in en schakel de voorraadsynchronisatie in."
---

# Stap 4. Voorraadexport van producten instellen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Drie selectievakjes in **Functional Settings > Product features** bepalen de productexport:

- **Product integration** - de schakelaar voor alle productexports. Zonder deze schakelaar werkt niets van wat hieronder staat.
- **Product stock management** - exporteert voorraadniveaus.
- **Shop product management** - exporteert levertijden.

Controleer voordat u begint of:

- De producten in ShopCtrl bestaan en hun offers op Virtual Stock zijn gepubliceerd.
- [Stap 2](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/retailer-product-field-names.md) is afgerond. Het profiel bepaalt het SKU-veld van de leverancier waarop de koppeling is gebaseerd. Als u dit later wijzigt, moet u de koppeling opnieuw uitvoeren.

Alle instellingen op deze pagina vindt u in **Configuration > Shops** > uw Virtual Stock-shop > **Edit** > **Shop Synchronization > Edge Synchronization**.

## 1. Levertijden voorbereiden {#1-prepare-lead-times}

Virtual Stock heeft voor elk product een levertijd nodig.

1. Maak een producteigenschap aan met de naam `VirtualStock.LeadTime` (type Number) en vul voor uw producten de levertijd in dagen in. [Meer informatie over producteigenschappen.](/User-Guide/08-Product-Management/product-properties.md)
2. Controleer in **Product features** of **Leadtime configuration** bevestigt dat de eigenschap is gevonden.
3. Stel **Leadtime** in: de terugvalwaarde in dagen voor producten zonder eigen levertijd.
4. Laat **Product export batch size** op 50 staan, tenzij u een reden hebt om dit te wijzigen.
    <img src={require("/img/edge-functional-settings-product.png").default} height="" width="800" />
5. Klik op **Save** of **Save and Close**.

## 2. Producten aan offers koppelen {#2-map-products-to-offers}

ShopCtrl koppelt elk product aan zijn offer in Virtual Stock door deze velden te vergelijken:

**Product Code in ShopCtrl** → **Supplier Part Number (SKU) in Virtual Stock**

1. Klik in het deelvenster **Products and Offers** op **Download offers** om de huidige offers uit Virtual Stock op te halen.
    <img src={require("/img/edge-product-offer-mapping.png").default} height="" width="800" />
2. Klik op **Preview** om een bestand te downloaden waarin staat wat de koppeling gaat doen:

    | Werkblad | Toont |
    | --- | --- |
    | **Offers** | Alle offers in Virtual Stock |
    | **Errors** | Kritieke problemen die moeten worden opgelost |
    | **Warnings** | Problemen om te controleren, zoals producten die niet in ShopCtrl zijn gevonden |
    | **Remain** | Bestaande koppelingen die ongewijzigd blijven |
    | **Update** | Bestaande koppelingen die worden gewijzigd |
    | **Create** | Nieuwe koppelingen |
    | **Delete** | Koppelingen die worden verwijderd omdat het product niet meer bestaat |

    <img src={require("/img/edge-product-offer-mapping-create.png").default} height="" width="800" />
3. Los eventuele fouten op en klik daarna opnieuw op **Download offers** en **Preview**, tot het bestand geen fouten meer bevat.
4. Klik op **Map** om de koppelingen aan te maken.
5. Klik op **Save** of **Save and Close**.

## 3. De productexport inschakelen {#3-turn-on-product-export}

**Enabled** moet al aan staan; deze schakelaar is ingeschakeld in [stap 3](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/order-synchronization.md#2-import-orders).

1. Vink in **Product features** de opties **Product integration**, **Product stock management** en **Shop product management** aan.
2. Klik op **Save** of **Save and Close**.

Vanaf nu exporteert ShopCtrl de voorraad van een product telkens wanneer deze wijzigt.

## 4. De beginvoorraad versturen {#4-send-the-initial-stock}

Voorraad wordt geëxporteerd wanneer deze wijzigt, maar direct na het instellen is de voorraad van de meeste producten nog niet gewijzigd. Verstuur de beginvoorraad daarom één keer handmatig:

1. Klik in het deelvenster **Products and Offers** op **Mark products for export**.

Alle gekoppelde producten worden geëxporteerd. De export kan tot 20 minuten duren, omdat producten in batches worden verstuurd om binnen de limieten van Virtual Stock te blijven.

:::caution

Gekoppelde producten die **niet actief** zijn, worden geëxporteerd met **nulvoorraad**. Als **Back-in-stock date on zero stock** aan staat, krijgen ze ook een datum waarop ze weer op voorraad zijn. Controleer welke gekoppelde producten inactief zijn voordat u klikt.

:::

## Datum waarop uitverkochte producten weer op voorraad zijn {#back-in-stock-date-for-out-of-stock-products}

Sommige retailers willen een datum waarop een product weer op voorraad is zodra de voorraad op nul staat, zodat ze klanten kunnen laten zien wanneer het product weer beschikbaar is.

- **Wanneer de datum wordt verstuurd:** alleen als de voorraad van een product als **0** wordt geëxporteerd, en alleen als **Back-in-stock date on zero stock** aan staat.
- **Hoe de datum wordt berekend:** vandaag plus de `VirtualStock.LeadTime` van het product. Als het product geen levertijd heeft, wordt de terugvalwaarde **Leadtime** gebruikt.

Een product met een levertijd van 10 dagen dat op 1 oktober niet meer op voorraad is, krijgt bijvoorbeeld 11 oktober. Een product zonder eigen levertijd gebruikt de terugvalwaarde, standaard 5 dagen, en krijgt dus 6 oktober.

De optie staat in het gedeelte **Retailer product field names**. Het profiel **Standard** schakelt deze in en het profiel **Special** laat deze uit; zie [stap 2](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/retailer-product-field-names.md).

:::tip

Houd `VirtualStock.LeadTime` up-to-date. De datum waarop een product weer op voorraad is, is maar zo nauwkeurig als de levertijd waarop deze is gebaseerd.

:::

U hebt het instellen van de integratie met Virtual Stock (Edge) nu afgerond. Koppelen is geen eenmalige taak: zie [Productkoppelingen bijwerken](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/updating-product-mappings.md) wanneer er producten worden toegevoegd.
