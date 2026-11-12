---
sidebar_position: 1
slug: /docs/purchase-price-import-with-tiers
description: "Een vereenvoudigd importprofiel in ShopCtrl voor inkoopprijzen van leveranciers en staffelprijzen op basis van volume. Uw Excel-bestand moet de productcode bevatten."
---

# Import van inkoopprijzen (met staffels)

ShopCtrl ondersteunt standaard [productimports](import-supplier-products.md), maar dit specifieke profiel is bedoeld om **inkoopprijzen van leveranciers** en **staffelprijzen op basis van volume** in bulk te beheren.

Anders dan de uitgebreidere "Supplier Product Import" is deze methode bedoeld voor snelle, handmatige prijsaanpassingen. 

**Belangrijkste vereiste:** om dit profiel te gebruiken, **moet uw Excel-bestand de productcode (SKU) van ShopCtrl expliciet bevatten**. De [uitgebreide import](import-supplier-products.md) kan producten matchen op alleen de SKU van de leverancier, maar deze vereenvoudigde prijsimport heeft de interne productcode van ShopCtrl nodig om ervoor te zorgen dat prijzen aan het juiste productrecord worden gekoppeld.

## 1. Een import-/exportprofiel aanmaken {#1-create-an-importexport-profile}

Het profiel kunt u aanmaken via Product > Product export/import profiles. Het profiel kan voor meerdere leveranciers worden gebruikt.

1. Log in als **Shopowner Admin**.
2. Ga naar **Product Management > Product export/import profiles**.
3. Klik op **Add** om een nieuw profiel aan te maken.
4. Selecteer het profieltype: **Product Purchase Price**.
5. Voer een **Profile Name** in (bijv. "Supplier Price Update").
6. Configureer de bestandsinstellingen:
   - **Header rows**: standaard is dit `1`.
   - **Encoding**: kies de codering van uw bestand (meestal UTF-8).
   - **Field Separator**: standaard is dit `;`.
1. Standaard zijn alle eigenschappen opgenomen.
    <img src={require("/img/product-purchase-price-import-profile.png").default} height="" width="800" />
7. **Mapping Fields**: u kunt deze velden in een andere volgorde zetten, zodat ze overeenkomen met uw spreadsheet:
   - `Sku` (interne SKU van ShopCtrl)
   - `SupplierSku`
   - `PriceExVat`
   - `ForeignPriceExVat`
   - `QtyAndAbove` (te gebruiken voor staffelprijzen)
   - `Priority`
8. Klik op **Save**.


## 2. Een bestand voor de import maken {#2-create-file-for-import}

De eenvoudigste manier om te beginnen is uw huidige gegevens te exporteren en als sjabloon te gebruiken.

### Bestaande prijzen exporteren {#how-to-export-existing-prices}

1. Ga naar het menu **Products**.
2. Open het tabblad **Export** en selecteer uw nieuwe **Purchase Prices**-profiel.
3. Selecteer **Export All** of pas eerst filters toe om een specifieke selectie te exporteren. 
   *(Let op: "Export Selection" via selectievakjes wordt voor dit profieltype momenteel niet ondersteund).*
4. Het bestand wordt op de achtergrond aangemaakt.

### Staffelprijzen opmaken {#formatting-tier-prices}
Om staffelprijzen in te stellen (bijv. een lagere prijs bij inkoop in grotere hoeveelheden), maakt u voor elke staffel een aparte rij aan:

| Sku(Product Code) | SupplierSku | PriceExVat | ForeignPriceExVat | QtyAndAbove | Opmerking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 001A | 001A-ns | 15.00 | - |  | Gewone prijs |
| 001A | 001A-ns | 14.00 | - |  10 | Prijs vanaf 10 stuks |
| 001A | 001A-ns | 13.00 | - | 100 | Prijs vanaf 100 stuks |

Geef alleen `PriceExVat` of `ForeignPriceExVat` op. Het lege veld wordt automatisch berekend op basis van de actuele wisselkoersen.
Neem altijd de "gewone" prijs (waarbij `QtyAndAbove` leeg is) op naast uw staffelprijzen.

## 3. Uploaden en prijzen bijwerken {#3-upload--update-prices}

1. Ga naar **Product Management > Product Import**.
2. Selecteer uw **Product Purchase Price**-profiel in de vervolgkeuzelijst.
3. **Selecteer de leverancier** die u bijwerkt.
4. Upload uw bestand.

    <img src={require("/img/product-purchase-price-import.png").default} height="" width="800" />

:::warning[Let op]

De import verwijdert bestaande prijzen en staffelprijzen van de opgegeven leverancier als ze niet in het bestand staan.

:::

### Uw resultaten controleren {#verifying-your-results}

Zodra de upload klaar is, kunt u op drie manieren controleren of de prijzen en staffels correct zijn toegepast:

1.  **Rapport downloaden:**  hier kunt u het bestand **Results Excel** downloaden om te zien of er rijen zijn mislukt, of om een overzicht van de verwerkte gegevens te bekijken.
2.  **Productexport:** gebruik hetzelfde profiel **Manual Price & Tier Update** om de prijzen voor die leverancier opnieuw te exporteren. Zo ziet u precies wat er op dit moment in het systeem is opgeslagen.
3.  **Productweergave:** open een product in de tabel **Products** en controleer het tabblad **Suppliers** om de bijgewerkte prijslijst en staffelstructuur te zien.

    <img src={require("/img/purchase-product-import-result-excel.png").default} height="" width="800" />



