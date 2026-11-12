---
sidebar_position: 6
slug: /docs/mirakl
description: "Koppel Mirakl aan ShopCtrl om orders te importeren en te accepteren, verzendgegevens te versturen en voorraad te synchroniseren, met producten gekoppeld via de Offer SKU."
---

# Mirakl

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Met de Mirakl-connector kunt u orders importeren en accepteren, verzendgegevens naar Mirakl sturen en uw voorraadniveaus synchroniseren.
De export van voorraadniveaus gebeurt automatisch op de achtergrond, met geplande verzoeken. Zodra een wijziging in de beschikbare productvoorraad is geregistreerd, wordt het bijbehorende productaanbod (offer) in Mirakl bijgewerkt met de nieuwe waarde.

Producten in ShopCtrl worden aan producten in Mirakl gekoppeld via de **Offer SKU**, die gelijk is aan de productcode in ShopCtrl.
Een offer in Mirakl met SKU "S2081" wordt dus gekoppeld aan het product in ShopCtrl met dezelfde productcode "S2081".

## De integratie met Mirakl instellen {#setting-up-integration-with-mirakl}

Om de integratie in te stellen, maakt u eerst een API-sleutel aan voor uw productieomgeving. Volg hiervoor de stappen in dit supportartikel van Mirakl: [Generating or retrieving your API key](https://help.mirakl.net/bundle/sellers/page/topics/Mirakl/service_features/managing_MMS_BO/provider/get_api_key_services.htm).

## De synchronisatie met Mirakl instellen in ShopCtrl {#setting-up-mirakl-synchronization-in-shopctrl}

:::warning[Voordat u begint]

Stel de bijbehorende valuta, btw-tarieven en betaalmethoden voor uw [ShopCtrl-shop](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/create-shop.md) in voordat u de synchronisatie met Mirakl inschakelt.

:::

![Shopinstellingen voor Mirakl](/img/mirakl-shop-settings.png)

De synchronisatie met de pre-productieomgeving van Mirakl instellen in ShopCtrl:

1. Log in bij uw ShopCtrl-account als gebruiker met de rol **Shop Owner Admin**.
2. Selecteer in het navigatiemenu **Configuration > Shops** om de lijst met aangemaakte shops te openen.
3. Selecteer de shop waarvoor u de Mirakl-synchronisatie wilt instellen en klik op **Edit** om de shopinstellingen te openen.
4. Selecteer in het menu **Shop synchronization > Mirakl Synchronization**.
5. Vul eerst onder **Connection settings > Test** (groen gemarkeerd) de **API key test** in die u voor de pre-productieomgeving hebt gegenereerd. De URL is al vooraf ingevuld.
6. Klik op de knop **Connect** om de verbinding te testen. Als alle gegevens juist zijn ingevuld, verschijnt er een pop-upvenster met de melding dat de verbinding is geslaagd. Controleer anders of de ingevulde gegevens geldig zijn en bij de pre-productieomgeving horen.
7. (_Optioneel_) U kunt in ms een aangepaste pauze tussen API-aanroepen opgeven. Of laat het veld leeg om de **API call timeout** op de standaardwaarde van 5 minuten te zetten.
8. (_Optioneel_) Schakel API-logging in om de gedetailleerde logboeken van elke API-aanroep te kunnen bekijken.
9. Ga terug naar de bovenkant van het deelvenster, naar het gedeelte **Functional settings** - **Order features**. Vink de functies aan die u wilt gebruiken:
   - **Orders synchronization** - nieuwe orders worden in ShopCtrl geïmporteerd.
   - **Order integration** - een instelling die nodig is om orders te accepteren en track & trace-gegevens naar Mirakl te sturen
10. In het deelvenster Product features:
    - **Product integration** - om de export van voorraad en prijzen in te schakelen
    - **Product stock management** - schakelt de voorraadexport naar Mirakl in
11. Bepaal in het gedeelte **Orders** op welk moment ShopCtrl aan Mirakl doorgeeft dat de order is geaccepteerd. Op dit moment zijn er de volgende opties:
    - **Order Import** - het moment waarop een order in ShopCtrl binnenkomt.
    - **Order Allocated** - het moment waarop voorraad is toegewezen om de order te verzenden. Als er niet genoeg voorraad is, wordt het synchronisatieverzoek pas aangemaakt als de order volledig is toegewezen.
    - **Order Shipped** - de order wordt in Mirakl geaccepteerd op het moment dat de zending in ShopCtrl als verzonden wordt gemarkeerd.
12. **Track&Trace shipments** - zodra de order in ShopCtrl als verzonden is gemarkeerd, wordt automatisch een verzoek aangemaakt om de trackinggegevens bij te werken. De zending in Mirakl wordt automatisch bijgewerkt met de trackingcode en de tracking-URL, en de order wordt als verzonden gemarkeerd.
13. **Carrier account mapping**. Hier koppelt u de vervoerderscodes van Mirakl aan de vervoerders in ShopCtrl. Deze koppeling wordt gebruikt om trackinggegevens automatisch naar Mirakl te sturen.
    - Klik op **Show Carriers** om de lijst met vervoerders-ID's van Mirakl te laden. Kopieer alleen de vervoerderscodes voor de koppeling (de namen van de vervoerders zijn alleen ter informatie).
    - Voeg met **Add** koppelregels toe voor de vervoerders in ShopCtrl, zodat Mirakl de juiste trackinggegevens krijgt.
![Koppeling van vervoerdersaccounts voor Mirakl](/img/mirakl-carrier-account-mapping.png)
14. Schakel de synchronisatie bovenaan het deelvenster Functional Settings in met **Enable**.
15. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.

## Export van voorraad en prijzen {#stock-and-price-export}

Zie [Voorraad- en prijsexport naar Mirakl](/User-Guide/08-Product-Management/Product-Export/mirakl-stock-price-export.md) om voorraad en prijzen in ShopCtrl te vergelijken met de huidige offers in Mirakl en correcties in bulk of per rij door te sturen.

## Master-SKU Map {#master-sku-map}

Met de **Master-SKU map** stuurt u meerdere offers in Mirakl aan vanuit één **masterproduct** in ShopCtrl. De functie is bedoeld voor de situatie waarin het masterproduct in ShopCtrl staat en de **varianten als afzonderlijke offers in Mirakl zijn aangemaakt**, elk herkenbaar aan een **kleurcode**: een kort achtervoegsel van letters en cijfers achter de master-SKU.

Bij het bijwerken van voorraad en prijs wordt de waarde van het masterproduct naar **alle** gekoppelde kleurcodes gestuurd.

:::note

Dit is een specifieke functie die u zelf moet inschakelen. Standaard is deze **uitgeschakeld** en bevat de tabel **geen records**. De connector koppelt dan elk offer aan het product met dezelfde SKU.

:::

![Master-SKU map voor Mirakl](/img/mirakl-master-sku-map.png)

De tabel toont de **master-SKU** (de eigen code van het product in ShopCtrl) en de **gekoppelde offer-SKU's op de marktplaats** die het aanstuurt: eerst de eigen code van de master, daarna de varianten met kleurcode.

### Nieuwe masters en kleurcodekoppelingen toevoegen {#adding-new-masters-and-colour-code-mappings}

Als er in Mirakl nieuwe masters of kleurcodes zijn die nog niet in de tabel staan:

1. Klik op **Adjust SKU map from marketplace → Merge new offers**. Hiermee worden de nieuw gevonden offers uit Mirakl binnengehaald, terwijl alle bestaande koppelingen behouden blijven: er wordt niets verwijderd.
2. Klik op **Suggest masters**. De nieuwe mogelijke masters en hun kleurcodes worden eerst in een aparte lijst geladen om te controleren; ze staan dan **nog niet** in de koppeltabel.
3. Controleer de voorstellen en kies **add selected** of **add all**. Alleen de items die u toevoegt, worden naar de koppeltabel verplaatst.
4. Klik op **Save map** om het resultaat op te slaan.

### Mogelijke problemen en oplossingen {#possible-problems-and-solutions}

Standaard is de **master** de bron: deze exporteert voorraad en prijs naar alle kleurcodes. Bij een offer kan een klein label (badge) verschijnen als er iets aandacht nodig heeft. Klik op het label om de oplossing toe te passen.

| Label | Probleem | Oplossing |
|---|---|---|
| 🟠 **not on marketplace** | Het gekoppelde offer bestaat niet meer in Mirakl (verouderde koppeling). | Klik om de verouderde sleutel te verwijderen. |
| 🔵 **direct product** | Het offer bestaat ook als afzonderlijk product. U wilt van de standaard afwijken en dat product, en niet de master, deze kleurcode laten aansturen. | Klik op **Use direct product as source** om het product als bron in te stellen. Het product beheert dan het offer en de master stuurt het niet meer aan. |
| 🔴 **missing product** | Het masterproduct van deze rij bestaat niet meer in ShopCtrl. | Klik om de ongeldige rij te verwijderen. |
| ⚠ **conflict** | Het offer is gekoppeld aan een master **en** komt overeen met een ander, afzonderlijk product. U moet de bron kiezen. | Klik op **Resolve conflict** en kies de bron. |
