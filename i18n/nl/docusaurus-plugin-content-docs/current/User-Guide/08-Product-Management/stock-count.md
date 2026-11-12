---
sidebar_position: 11
slug: /docs/stock-count
description: "Tel de magazijnvoorraad in ShopCtrl per locatie met een barcodescanner en registreer en verwerk de gevonden verschillen."
---
# Voorraadtelling 


De voorraadtellingsfunctionaliteit maakt deel uit van de module voor geavanceerd magazijnvoorraadbeheer. 
U kunt de voorraad in uw magazijn tellen met een barcodescanner en de verschillen registreren en beheren.

## De voorraad per locatie tellen {#how-to-count-the-inventory-per-location}

<img src={require("/img/stock-count-location.png").default} height="" width="800" />

:::warning[]

Controleer voordat u de telling aanmaakt dat er geen openstaande voorraadtransacties zijn: er worden geen orders vanaf deze locatie ingepakt en verzonden.

:::

### Voorraadtelling aanmaken {#create-stock-count}

Een **voorraadtelling aanmaken** voor een bepaalde locatie in het magazijn:
1. Open de pagina **Product Management > Stock Count**.
2. Klik op **Add**. Er wordt een nieuwe voorraadtellingspagina geopend in een nieuw tabblad.
3. (Optioneel) Als de voorraadtelling door iemand anders wordt uitgevoerd, selecteer dan de **Employee** aan wie u de taak wilt toewijzen.
4. (Optioneel) Als u deze telling aan een bepaalde voorraadtellingsgroep wilt toevoegen, selecteer dan deze groep in de vervolgkeuzelijst.
5. Selecteer een **Warehouse** en een **Location**. Een lijst met de voorraaditems op deze locatie wordt geladen in het productdeelvenster eronder. 
6. Klik op **Save** of **Save and Close** om de telling op te slaan.

### De voorraad tellen {#count-the-stock}
Nu kunt u beginnen met het **tellen van de voorraad**. 

Afhankelijk van de inrichting van uw magazijn kunt u de getelde waarden handmatig invoeren of de barcodes op de labels van de voorraaditems scannen.
De werkelijke hoeveelheid wordt bij elke scan in de tabel bijgewerkt. Als een geavanceerd voorraaditem ontbreekt, zet de werkelijke hoeveelheid dan op "0" om de status te wijzigen in "Counted and partially available". Bij eenvoudige producten wordt de status automatisch bijgewerkt wanneer de werkelijke hoeveelheid wordt gewijzigd.

Als alle voorraaditems van het product aanwezig zijn, klikt u op de knop <img src={require("/img/tick.png").default}  /> aan het einde van de productrij. De hoeveelheid **Actual** wordt dan bijgewerkt met de waarde **Expected**.

:::warning[]

Vergeet niet de voorraadtelling tussentijds **op te slaan**. 

:::
Volledig getelde itemrijen worden in de tabel verborgen. Schakel het selectievakje **Hide counted** uit om de volledige lijst met items te zien.

Zodra alle items zijn geteld en de voorraadtelling is opgeslagen, wordt de telling als **gesloten** beschouwd en kunt u deze afronden. U kunt een **Note** aan de voorraadtelling toevoegen, die in de tabel met voorraadtellingen wordt weergegeven.

### De telling afronden {#finalize-the-count}

De voorraadtelling **afronden** en de verschillen uit de telling verwerken:

1. Open de opgeslagen telling vanaf de pagina **Product Management > Stock Count**.
2. Klik op de knop **Finalize** in het bovenste actiemenu. Er wordt een overzichtspagina van de voorraadtelling geopend in een nieuw pop-upvenster.
3. Selecteer, afhankelijk van de resultaten van de telling, een actie die op elk voorraaditem moet worden toegepast. 
4. Klik op **Save** om de geselecteerde acties op te slaan.
5. Klik op **Save and Apply** om de voorraadtelling af te ronden en de wijzigingen toe te passen.

Dit zijn de acties die op de voorraaditems kunnen worden toegepast:

#### Eenvoudige producten {#simple-products}
<img src={require("/img/stock-count-summary-simple-products.png").default} height="" width="800" />
 | Actie | Omschrijving |
 | --- | --- |
| Do nothing | Past geen actie toe op het voorraaditem |
| Create | Maakt het eenvoudige voorraaditem aan en plaatst het op de locatie waarvoor de telling is aangemaakt |
| Missing | De status van het voorraaditem verandert in missing en het item wordt uit de beschikbare voorraad verwijderd |


#### Geavanceerde producten {#advanced-products}
<img src={require("/img/stock-count-summary-advanced-products.png").default} height="" width="800" />

| Actie | Omschrijving |
| --- | --- |
| Do nothing | Past geen actie toe op het voorraaditem |
| Move here | Als het gescande geavanceerde voorraaditem eerder op een andere locatie lag, verplaatst deze actie het naar de huidige locatie |
| Missing | De status van het voorraaditem verandert in missing en het item wordt uit de beschikbare voorraad verwijderd |

:::warning[**Let op:**]

Zodra de voorraadtelling is afgerond, kan deze niet meer worden bewerkt.

:::

## De voorraad van het hele magazijn tellen {#how-to-count-inventory-on-the-whole-warehouse}

<img src={require("/img/stock-count-group.png").default} height="" width="600" />

Een voorraadtelling voor het hele magazijn aanmaken:
1. Open de pagina **Product Management > Stock Count**.
2. Klik op **Add Group**.
3. Voer in het vervolgkeuzemenu de **Name** van de tellingsgroep in.
4. Selecteer een **Warehouse** waarvoor u de voorraadtelling wilt uitvoeren.
5. Klik op **Save** om voorraadtellingen aan te maken voor alle locaties van dit magazijn.

Nu kunt u de voorraad per locatie tellen.

:::warning[**Let op:**]

Deze bewerking is vrij tijdrovend en kan, afhankelijk van de hoeveelheid voorraad in het magazijn, veel tijd in beslag nemen.

:::
