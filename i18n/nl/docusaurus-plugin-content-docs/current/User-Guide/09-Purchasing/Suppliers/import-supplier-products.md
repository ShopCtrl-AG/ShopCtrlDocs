---
sidebar_position: 1
slug: /docs/import-supplier-products
description: "Importeer productnamen, SKU's, prijzen, voorraad en levertijden van leveranciers in ShopCtrl, met automatische koppeling op SKU of EAN volgens een planning."
---

# Leveranciersproducten importeren 


:::info[**Vereiste rechten**]

Om de inhoud te bekijken of de handelingen uit te voeren die in dit artikel worden beschreven, moeten de juiste rechten zijn ingeschakeld. Een medewerker moet aan de shop zijn gekoppeld met de rol **Power User** of hoger. Om de detailpagina van het verzoek van een productimportrecord te bekijken, moet een medewerker aan de shop zijn gekoppeld met de rol **Shop Owner Admin**.

:::

## Leveranciersproducten importeren {#how-to-import-supplier-products}
Met de tool **Product Import** van ShopCtrl kunt u:
* Productnamen, SKU's, prijzen, beschikbare voorraad, EAN, levertijd in dagen en leverdatum van de leverancier importeren
* Producten automatisch koppelen:
    * op SKU. Als de SKU van de leverancier overeenkomt met de productcode, koppelt ShopCtrl die producten automatisch
    * op EAN. Als het SKU-veld leeg is, zoekt ShopCtrl de overeenkomende EAN in het systeem en koppelt de betreffende producten
* Een geplande import van de prijslijst en voorraadniveaus van de leverancier instellen

### Een importprofiel aanmaken {#create-import-profile}

<img src={require("/img/supplier_product_import_manual_import_01.png").default} height="" width="500" />
:::info[**Algemene bestandsvereisten**]

Ondersteunde bestandsformaten: **.xlsx** en **.csv**

:::
Om een importprofiel aan te maken:
1. Open de detailpagina van de leverancier. Kies in het menu **Product Import**
2. Selecteer het tabblad **Import Profiles** om een nieuw profiel aan te maken
3. Klik op **Add**. Er wordt een nieuw pop-upvenster geopend.
<img src={require("/img/supplier_product_import_new_profile.png").default} height="" width="500" />

4. Configureer het profiel volgens het formaat van de prijslijst van uw leverancier.
    * Voer de **Profile Name** in
    * Voer het aantal kopregels in. ShopCtrl slaat de eerste **N** rijen bovenaan over en begint met de verwerking bij de volgende rij.
    * Schakel **Link products** in - als dit selectievakje is ingeschakeld, probeert ShopCtrl producten met een overeenkomende SKU en productcode te koppelen. Als de SKU-cel voor een productrij leeg is, probeert ShopCtrl de producten op EAN te matchen. 
    * Verplichte velden voor CSV-bestanden: selecteer een CSV-scheidingsteken en kies de codering en de cultuur.
    * Importkolommen matchen: geef de kolommen op die in ShopCtrl worden geïmporteerd. Laat het veld leeg als de informatie niet in de prijslijst staat. De SKU-kolom is verplicht. De volgorde van de kolommen is niet van belang.
5. Klik op **Save**. Het nieuwe profiel wordt in de tabel weergegeven.

**Overige instellingen:**
De **Currency** wordt automatisch gekozen: dit is de hoofdvaluta van de leverancier die in de gegevens op de pagina Suppliers is ingesteld.
Standaard detecteert ShopCtrl wijzigingen in de prijslijst en werkt alleen de gewijzigde producten bij. 
**Force Update** - na de eerste upload. Bij de volgende upload detecteert ShopCtrl wijzigingen in de prijslijst en werkt alleen de gewijzigde producten bij. Met deze optie schakelt u een geforceerde update van alle items in de prijslijst in. Let op: deze bewerking kost vrij veel tijd.  
ShopCtrl stelt de leverancier automatisch in als **voorkeursleverancier** als er geen andere prijsopgaven voor het product zijn.



### Eerste import van inkoopproducten van een leverancier {#initial-import-of-supplier-purchase-products}

Om de **Purchase Products** van de leverancier voor het eerst te uploaden:
1. Open de **Suppliers Details Page** en kies in het menu **Product Import**
3. Selecteer op het tabblad voor handmatige import een **Profile** voor het bestand dat u wilt importeren.
4. Kies een bronbestand en klik op **Import**. Als het bestand is geaccepteerd, verschijnt het bericht: "Success: Import task created."
5. Ga naar het tabblad **Import History**. Selecteer het nieuw aangemaakte importverzoek. De resultaten worden in het rechterdeelvenster weergegeven.
Klik op de knop **Open Request Details** in de importrij om de details van het betreffende synchronisatieverzoek te openen.
<img src={require("/img/supplier_product_import_import_history_update.png").default} height="" width="500" />
6. Open **Topic Menu > Products**. Alle geïmporteerde inkoopproducten worden op dit tabblad weergegeven

:::info[**Let op:**]

De eerste upload kan vrij veel tijd kosten, afhankelijk van het aantal producten dat wordt geïmporteerd.
Om het tabblad met de verzoekdetails te openen, zijn **Shop Owner Admin**-rechten vereist.

:::

### Voorraadniveaus van leveranciers importeren {#how-to-import-supplier-stock-levels}

Om het **voorraadniveau van de leverancier** te importeren:
1. [Maak een importprofiel aan](import-supplier-products.md#create-import-profile). Zorg ervoor dat u de kolommen SKU en Available Stock Column opneemt.
2. Zorg ervoor dat de leverancier een gekoppeld magazijn van het type leverancier of dropship heeft voordat u de voorraadniveaus importeert.
3. Importeer de producten via het tabblad voor handmatige import.

**Het voorraadniveau van de inkoopproducten** wordt op twee plaatsen weergegeven:
* Op leveranciersniveau - Supplier Details Page > Products
* Op productniveau - Product Details Page > Stock > Supplier Stock

### Inkoopproducten aan uw producten koppelen {#how-to-link-purchase-products-to-your-products}

Nadat de prijslijst van de leverancier in ShopCtrl is geïmporteerd, kunnen er inkoopproducten zijn die nog niet aan bestaande producten in het systeem zijn gekoppeld.
<img src={require("/img/supplier_details_topic_menu_products.png").default} height="" width="800" />

Om het **inkoopproduct** aan het product in ShopCtrl te koppelen:
1. Ga naar **Supplier Details Page > Products**.
2. Selecteer **Unlinked** in het filter in het bovenste menu.
3. Klik op de **Product Code**-cel van het betreffende product in de kolom met productcodes. 
4. Begin met het typen van de productnaam of productcode. ShopCtrl zoekt in alle gepubliceerde producten.
Als het product nog niet is gepubliceerd, klikt u op het pictogram 🔎. Er wordt dan een nieuw venster met de betreffende producten geopend.
5. Selecteer het betreffende product. De producten worden dan gekoppeld.

<img src={require("/img/supplier_details_product_link_product.gif").default} height="" width="500" />

Om het inkoopproduct **los te koppelen** van het product in ShopCtrl:
1. Ga naar Supplier Details Page > Products.
2. Zoek een product op SKU/Product Code/Product Name/EAN. 
3. Selecteer de productrij van het betreffende product en klik op de knop **Unlink**. 
