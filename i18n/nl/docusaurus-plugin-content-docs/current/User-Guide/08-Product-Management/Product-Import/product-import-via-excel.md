---
sidebar_position: 1
slug: /docs/product-import-via-excel
description: "Importeer productgegevens, prijzen, beschikbaarheid en voorraadniveaus in ShopCtrl vanuit Excel, met aanpasbare importprofielen per shopgroep."
---
# Productimport via Excel 

:::info[**Vereiste rechten**]

Om de inhoud te bekijken of de acties uit te voeren die in dit artikel worden beschreven, moeten de juiste rechten voor u zijn ingeschakeld. Een medewerker moet aan de shop zijn gekoppeld met de rol **Shop Owner Admin**.

:::


Met de tool **Product Import** van ShopCtrl kunt u:

* Productgegevens per shopgroep importeren, zoals SKU/code, naam, omschrijving, EAN, merk en productgroepen, metadata, productafmetingen en eigenschapswaarden.
* Productprijzen importeren en de beschikbaarheid van producten per shop regelen.
* Voorraadniveaus van producten per magazijn en locatie importeren.

## Productgegevens importeren {#how-to-import-products-details}

U kunt productgegevens per shopgroep en vertaling importeren. Werk bestaande producten bij en maak nieuwe producten aan op basis van uw Excel-bestand. Het aantal velden dat u bijwerkt is aanpasbaar, en u kunt zoveel importprofielen aanmaken als u nodig hebt.

### Importprofiel voor productgegevens aanmaken {#create-import-profile-for-product-details}

:::warning[**Voordat u begint**]

**Properties** en **Property sets** moeten vooraf in ShopCtrl zijn aangemaakt om de eigenschappen correct bij te werken. 
Zie [Producteigenschappen](/User-Guide/08-Product-Management/product-properties.md) voor meer informatie.
Ook **Product brands** en  **Product groups** moeten vooraf in ShopCtrl zijn aangemaakt.

:::

<img src={require("/img/product-import-product-create-profile.png").default} height="" width="800" />

Zo maakt u een importprofiel aan dat productgegevens per shopgroep en vertaling bijwerkt:

1. Ga naar **Product Management > Product export/import profiles**.
2. Klik op **Add**.
3. Selecteer bij **Profile type**: **Product**.
4. Voer de **Profile Name** in.
5. Kies het aantal **Header Rows** dat tijdens de import wordt overgeslagen. 
6. Selecteer de **Culture** van het bestand dat u importeert.
7. Selecteer de **Translation** die moet worden bijgewerkt. Standaard is **Global** geselecteerd.
8. Kies de **Encoding** van het bestand dat u importeert.
9. Selecteer het **Field separator** van het Excel-bestand.
10. Kies de **Shop Group** waartoe de producten behoren.
11. **Max Groups** - het totale aantal productgroepen dat aan een product kan worden gekoppeld.
12. **Max related products** - het totale aantal relaties dat een product met andere producten kan hebben.
    Ondersteunde relatietypen: Cross Sell, Upsell, Contains Product.
13. (Optioneel) **Max multiselect options** - het maximale aantal opties dat kan worden geselecteerd voor eigenschappen van het type multi-select.
14. Schakel het selectievakje **Can create new product** in als u nieuwe producten wilt aanmaken wanneer er tijdens de productimport geen overeenkomende productcode wordt gevonden.
15. Schakel de instelling **Can update existing products** in om bestaande producten bij te werken die op productcode worden gematcht.
16. Selecteer in de vervolgkeuzelijst de **Property Set** die voor de producten wordt gebruikt. Na de selectie worden de eigenschappen uit de set toegevoegd aan de lijst met opgenomen eigenschappen.
17. Bewerk de lijst **Included properties**. Standaard bevat de lijst alle mogelijke eigenschappen:
    1. Sluit overbodige velden uit met de knop ◀.
    2. Gebruik de pijlen ⬆⬇ om de volgorde van de opgenomen eigenschappen aan te passen aan de volgorde van de kolommen in uw Excel-document.
    3. Neem velden weer op in de lijst met de knop ▶.
:::warning[**Let op**]

**Product Code** wordt gebruikt om de producten te matchen met bestaande productcodes in ShopCtrl. Dit veld is verplicht. Andere eigenschappen zijn optioneel. Als de producten al in ShopCtrl bestaan, kunt u daarnaast de ShopCtrl-**ID** gebruiken om producten te matchen.
De kolomvolgorde in het bestand is belangrijk. Het document moet beginnen met de eerste opgenomen eigenschap en doorgaan met de volgende eigenschappen. Kolomnamen worden tijdens de import genegeerd.

:::
11. Klik op **Download Sample** om een voorbeeldbestand in Excel te downloaden dat is gegenereerd op basis van de lijst met opgenomen eigenschappen. Het tabblad **Lookup** bevat de waarden die al in ShopCtrl bestaan; geef deze exact zo op als in het systeem. Zo weet u zeker dat de waarden tijdens de import worden gematcht.
<img src={require("/img/product-import-sample-file.png").default} height="" width="800" />
12.  Klik op **Save** of **Save and Close** om het profiel op te slaan.


:::info[**Tip**]

U kunt een importprofiel voor één **Translation** aanmaken en het later voor andere vertalingen gebruiken. Kies gewoon een andere vertaling wanneer u een bestand importeert.

:::

### Productgegevens per shopgroep importeren {#import-product-details-per-shop-group}

Zo werkt u productgegevens per shopgroep en vertaling bij:

1. Ga naar **Product Management > Product import**.
3. Selecteer een importprofiel van het type **Product**.
4. (Optioneel) De weergegeven **Translation** is de vertaling die in het importprofiel is ingesteld. U kunt een andere vertaling kiezen.
5. Klik op **Browse** en kies het bestand dat u wilt importeren.
:::info[**Algemene bestandsvereisten**]

Ondersteunde bestandsformaten: **.xlsx** en **.csv**

:::
5. Als u een korte lijst met producten uploadt, kunt u de interactieve werkwijze gebruiken: 
    1. Klik op **Preview** om het bestand te uploaden en op mogelijke fouten te analyseren.
<img src={require("/img/import-product-details.png").default} height="" width="500" />
    2. (Optioneel) Corrigeer de fouten en upload het bestand opnieuw.
    3. Klik op **Save** om het bestand te verwerken en producten aan te maken of bij te werken.
7. Als het bestand veel gegevens bevat, kan het laden van de interactieve preview veel tijd kosten. Gebruik dan de optie **Sync Request** om de import op de achtergrond uit te voeren: 
    1. Selecteer **Sync Request**.
    2. Klik op **Import** om het proces op de achtergrond te starten.
    3. **Process result** wordt op een nieuw tabblad geopend. Klik op **Refresh** om de status van het proces te controleren.
<img src={require("/img/product-import-product-price-result-page.png").default} height="" width="500" />
    4. Zodra het proces is voltooid, toont het berichtveld de status van de import. Als er tijdens de import fouten zijn opgetreden, klikt u op **Download Report** om het gedetailleerde importresultaat in een Excel-bestand te bekijken.


## Productprijzen importeren en de beschikbaarheid van producten per shop wijzigen {#how-to-import-product-price-and-change-product-availability-per-shop}

Productprijzen worden in ShopCtrl per shop geïmporteerd, net als wijzigingen van de publicatiestatus en het btw-tarief van het product. 
Om productprijzen te importeren, maakt u eerst een shopspecifiek profiel aan.

U kunt de **Price including VAT**, **excluding VAT** of beide bijwerken. De bijbehorende prijzen **Foreign Price Inc** of **Ex** van de shop worden bijgewerkt. De globale prijs exclusief btw verandert niet. De automatische berekening van prijzen op basis van de globale prijs exclusief btw wordt voor het product in deze shop uitgeschakeld. 

Het **VAT tariff** moet zijn geconfigureerd voor gebruik in de shop die u bijwerkt. Anders gaat de import niet door. Controleer de geconfigureerde btw-tarieven op **Shop details page > Financial > VAT**.

### Importprofiel voor productprijs, btw en publicatiestatus aanmaken {#create-import-profile-for-product-price-vat-and-publication-status}

<img src={require("/img/product-import-product-price-create-profile-all.png").default} height="" width="800" />

Zo maakt u een importprofiel aan dat de productprijs exclusief btw en de beschikbaarheid per shop bijwerkt:

1. Ga naar **Product Management > Product export/import profiles**.
2. Klik op **Add**.
3. Selecteer bij **Profile type**: **Product price**.
4. Voer de **Profile Name** in.
5. Kies het aantal **Header Rows** dat tijdens de import wordt uitgesloten. 
6. Selecteer de **Culture** van het bestand dat u importeert.
7. Kies de **Encoding** van het bestand dat u importeert.
8. Selecteer het **Field separator** van het Excel-bestand.
9. Selecteer in de vervolgkeuzelijst de **Shop** waarvoor het profiel wordt gebruikt.
10. Bewerk de lijst **Included properties**. Standaard bevat de lijst alle mogelijke eigenschappen:
    1. Sluit overbodige velden uit met de knop ◀.
    2. Gebruik de pijlen ⬆⬇ om de volgorde van de opgenomen eigenschappen aan te passen aan de volgorde van de kolommen in uw Excel-document.
    3. Neem velden weer op met de knop ▶.
:::warning[**Let op**]

De SKU van het product wordt gebruikt om de producten te matchen met bestaande productcodes in ShopCtrl. Dit veld is verplicht. Andere eigenschappen zijn optioneel.
De kolomvolgorde in het bestand is belangrijk. Het document moet beginnen met de eerste opgenomen eigenschap en doorgaan met de volgende eigenschappen. Kolomnamen worden tijdens de import genegeerd.

:::
11. Klik op **Save** of **Save and Close** om het profiel op te slaan.

:::info[**Tip**]

U kunt een importprofiel voor één shop aanmaken en het later voor andere shops gebruiken. Kies gewoon een andere shop wanneer u het bestand importeert.

:::

### Productprijs, btw en beschikbaarheidsstatus importeren {#import-product-price-vat-and-availability-status}

<img src={require("/img/product-import-product-price.png").default} height="" width="800" />

Zo werkt u productprijzen, btw-tarieven en de publicatiestatus per shop bij:

1. Ga naar **Product Management > Product import**.
2. Selecteer een importprofiel van het type **Product price**.
3. (Optioneel) De weergegeven **Shop** is de shop die in het importprofiel is ingesteld. U kunt een andere shop kiezen.
4. Klik op **Browse** en kies het bestand dat u wilt importeren.
:::info[**Algemene bestandsvereisten**]

Ondersteunde bestandsformaten: **.xlsx** en **.csv**

:::
5. Klik op **Start** om het importproces te starten.
6. **Process result** wordt op een nieuw tabblad geopend. Het importproces wordt op de achtergrond uitgevoerd. Klik op **Refresh** om de status van het proces te controleren.
<img src={require("/img/product-import-product-price-result-page.png").default} height="" width="500" />
7. Zodra het proces is voltooid, toont het berichtveld de status van de import. Als er tijdens de import fouten zijn opgetreden, klikt u op **Download Report** om het gedetailleerde importresultaat in een Excel-bestand te bekijken.

Om de **publicatiestatus** van een product te wijzigen, zet u de waarde in de kolom **Active** van het Excel-bestand op `true` of `false`.

Als resultaat van de import worden de shopspecifieke Product Price Excluding VAT, Foreign Price Excluding VAT, Foreign Price Including VAT en het Product VAT tariff bijgewerkt. De publicatiestatus in de betreffende shop wordt dienovereenkomstig gewijzigd.

<img src={require("/img/product-foreign-price-update.png").default} height="" width="800" />

## Productvoorraad importeren {#how-to-import-product-stock}

U kunt de voorraadniveaus van producten per magazijn en locatie importeren via een Excel-bestand. Met hetzelfde importprofiel kunt u ook een geplande import via FTP of HTTP instellen. 

### Importprofiel voor het bijwerken van productvoorraad aanmaken {#create-import-profile-for-product--stock-update}

<img src={require("/img/product-import-product-stock-create-profile.png").default} height="" width="800" />

Zo maakt u een importprofiel aan dat de productvoorraad per magazijnlocatie bijwerkt:

1. Ga naar **Product Management > Product export/import profiles**.
2. Klik op **Add**.
3. Selecteer bij **Profile type**: **Product stock**.
4. Voer de **Profile Name** in.
5. Kies het aantal **Header Rows** dat tijdens de import wordt uitgesloten. 
6. Selecteer de **Culture** van het bestand dat u importeert.
7. Kies de **Encoding** van het bestand dat u importeert.
8. Selecteer het **Field separator** van het Excel-bestand.
9. Selecteer in de vervolgkeuzelijst het **Warehouse** waarvoor het profiel wordt gebruikt.
10. (Optioneel) Schakel **Auto-create location** in om een locatie aan te maken als er geen overeenkomende locatie wordt gevonden.
11. Bewerk de lijst **Included properties**. Standaard bevat de lijst alle mogelijke eigenschappen:
    1. Sluit overbodige velden uit met de knop ◀.
    2. Gebruik de pijlen ⬆⬇ om de volgorde van de opgenomen eigenschappen aan te passen aan de volgorde van de kolommen in uw Excel-document.
    3. Neem velden weer op met de knop ▶.
:::warning[**Let op**]

De SKU van het product wordt gebruikt om de producten te matchen met bestaande productcodes in ShopCtrl. SKU en QtyOnHand (aanwezige hoeveelheid) zijn verplichte velden. Andere velden zijn optioneel.
De kolomvolgorde in het bestand is belangrijk. Het document moet beginnen met de eerste opgenomen eigenschap en doorgaan met de volgende eigenschappen. Kolomnamen worden tijdens de import genegeerd.

:::
11. Klik op **Save** of **Save and Close** om het profiel op te slaan.

### Productvoorraad in het magazijn importeren {#import-product-stock-to-the-warehouse}

<img src={require("/img/product-import-product-stock.png").default} height="" width="500" />

Zo werkt u de productvoorraad per magazijnlocatie bij:

1. Ga naar **Product Management > Product import**.
2. Selecteer een importprofiel van het type **Product stock**.
3. (Optioneel) Het weergegeven **Warehouse** is het magazijn dat in het importprofiel is ingesteld. U kunt een ander magazijn kiezen.
4. Klik op **Browse** en kies het bestand dat u wilt importeren.
:::info[**Algemene bestandsvereisten**]

Ondersteunde bestandsformaten: **.xlsx** en **.csv**

:::
5. Klik op **Start** om het importproces te starten.
6. **Process result** wordt op een nieuw tabblad geopend. Het importproces wordt op de achtergrond uitgevoerd. Klik op **Refresh** om de status van het proces te controleren.
<img src={require("/img/product-stock-import-result.png").default} height="" width="500" />
7. Zodra het proces is voltooid, toont het berichtveld de status van de import. Als er tijdens de import fouten zijn opgetreden, klikt u op **Download Report** om het gedetailleerde importresultaat in een Excel-bestand te bekijken.


