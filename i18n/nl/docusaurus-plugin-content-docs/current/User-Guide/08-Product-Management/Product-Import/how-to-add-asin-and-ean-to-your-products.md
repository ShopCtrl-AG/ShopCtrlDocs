---
sidebar_position: 2
slug: /docs/how-to-add-asin-and-ean-to-your-products
description: "Sla in ShopCtrl de EAN-code op productniveau op en de ASIN als producteigenschap, zodat Amazon-producten bij import en export correct worden gekoppeld."
---
# ASIN en EAN aan uw producten toevoegen 



Om uw Amazon-producten optimaal in ShopCtrl te beheren, is het essentieel dat u zowel de **EAN** (European Article Number) als de **ASIN** (Amazon Standard Identification Number) opslaat.

In ShopCtrl wordt de EAN-code op productniveau opgeslagen. Op basis van de instellingen van de shopgroep kunt u afdwingen dat deze uniek is. Zo kunnen er geen twee producten met dezelfde EAN-code worden opgeslagen, wat past bij het karakter van EAN-codes als unieke productidentificatie. 

De ASIN wordt opgeslagen als producteigenschap van het type tekst. Om dit veld te kunnen vullen, maakt u eerst de eigenschap ASIN aan, bij voorkeur als onderdeel van de standaard Amazon-eigenschappenset. Zo wordt de eigenschap ASIN op alle producten in het systeem toegepast.

## Stap 1: De eigenschap ASIN aanmaken en aan de standaard eigenschappenset toevoegen {#step-1-create-asin-property-and-add-to-default-property-set}

Zo maakt u een nieuwe eigenschap ASIN aan:

1. Log in als Shop owner admin.
2. Ga naar **Product Management > Product Properties**.
3. Klik op Add.
4. Selecteer een Shop group.
5. Selecteer het eigenschapstype **Text**.
6. Voer als **Code** van de eigenschap **'ASIN'** in.
7. (Optioneel) Voeg vertalingen van de Caption toe voor de talen die in uw omgeving worden gebruikt.
8. Klik op **Save** om de eigenschap op te slaan. 
<img src={require("/img/create-property-asin.png").default} height="" width="800" />


Werk vervolgens de standaard eigenschappenset bij met de nieuwe eigenschap ASIN:

1. Log in als **Shop owner admin**.
2. Open **Product Management > Product Property Sets**.
3. Open de **Default Property set** van uw omgeving.
4. Zoek **ASIN** in de lijst en vink het selectievakje aan.
5. Klik op **Save** om de eigenschappenset bij te werken. 
 <img src={require("/img/update-property-set-with-asin.png").default} height="" width="800" />


## Stap 2: Producten bijwerken met ASIN en EAN {#step-2-update-products-with-asin-and-ean}

In deze handleiding richten we ons op de minimaal vereiste eigenschappen, ervan uitgaande dat de overige gegevens al zijn ingevoerd:
* Code (productcode in ShopCtrl)
* Ean 
* ASIN

<img src={require("/img/create-import-profile-asin-ean.png").default} height="" width="800" />

1. Log in met een gebruikersaccount met Power User-rechten of hoger.
2. Ga naar **Product Management > Product export/import profiles**.
3. Voeg een importprofiel toe en stel het profieltype in op Product.
4. Geef het profiel voor de duidelijkheid een nieuwe naam, bijvoorbeeld "Update EAN and ASIN".
5. Schakel de instelling **Can create new products** uit. 
6. Zorg ervoor dat de instelling **Can update existing products** op true staat.
7. Wijzig de instellingen **Max groups**, **Max related products** en **Max multiselect options** in **0**. 
8. Selecteer de juiste **Property set**.
9. Kies de eigenschappen die u wilt bijwerken: **Code, EAN, and ASIN**.
10. Sla het profiel op en download het **voorbeeld-Excelbestand** (sample Excel document).
11. Vul de tabel met de vereiste gegevens en zorg ervoor dat de producten worden gematcht op basis van de productcode in ShopCtrl. 
<img src={require("/img/image63.png").default} height="" width="" />


**Productimport**

1. Log in met een gebruikersaccount met Power User-rechten of hoger.
2. Open **Product Management > Product Import**. 
3. Selecteer het aangemaakte profiel "**Update EAN and ASIN**".
4. Blader naar het bestand dat u wilt laden en selecteer het.
5. Klik op **Preview** om de resultatentabel te controleren.
6. Bent u tevreden met het resultaat, klik dan op **Save** om de wijzigingen toe te passen.

<img src={require("/img/update-asin-product-import.png").default} height="" width="800" />

**Probleemoplossing**
Spoor mogelijke problemen op en los ze op, zoals ontbrekende productcodes of gegevenskolommen.

**Wijzigingen controleren**
Controleer bij een aantal producten de bijgewerkte EAN en ASIN in de productdetails. Let op: de ASIN vindt u op het tabblad Properties.

<img src={require("/img/product-review-ean-asin.png").default} height="" width="800" />

Voor de eindcontrole kunt u hetzelfde profiel, zoals 'Update EAN and ASIN', gebruiken om producten te exporteren. Zo controleert u in één keer of alle producten zijn bijgewerkt.

Zo werkt het:

1. Ga naar het tabblad **Product Management > Products**.
2. Selecteer in het actiemenu bovenaan het onderdeel **Product Group** om alle producten in de shopgroep te bekijken.
3. Stel het filter in op **All products**, zodat ook niet-gepubliceerde producten worden getoond.
4. Selecteer in het deelvenster Export het aangemaakte profiel "**Update EAN and ASIN**".
5. Klik op de pijl aan het einde van de knop Export list en kies de optie **Export all** in het vervolgkeuzemenu.
6. Het bestand wordt op de achtergrond gedownload. U kunt het tabblad vernieuwen om het resultaat te controleren.

<img src={require("/img/product-export-products-for-review.png").default} height="" width="800" />


Met dit gestroomlijnde proces beheert u ASIN en EAN nauwkeurig in ShopCtrl, wat zorgt voor transparantie en efficiëntie in uw productaanbiedingen.



