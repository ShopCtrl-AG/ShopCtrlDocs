---
sidebar_position: 4
slug: /docs/shipment-item-placement
description: "Leg in een groepszending in ShopCtrl vast waar elk artikel staat (op welke pallet en in welke doos), om de inpakgegevens op te bouwen die in de ASN naar Amazon gaan."
---

# Plaatsing van artikelen in groepszendingen

Als een zending deel uitmaakt van een groepszending, kunt u in ShopCtrl vastleggen **waar elk artikel fysiek staat** in de zending: op welke pallet, en in welke doos op die pallet. Deze structuur heet **plaatsing** (placement).

:::warning
Om de plaatsing aan te passen, hebt u zowel het recht **Shipments > Edit Shipments** als het recht **Group Shipments > Manage Placement Structure** nodig. Zonder deze rechten zijn de knoppen voor plaatsing verborgen of alleen-lezen.
:::

Met de plaatsing wordt een platte lijst met goederen omgezet in de inpakgegevens die in de groepszending worden samengevoegd en in de [Advanced Shipment Notification (ASN)](/docs/amazon-1p-group-shipment) naar Amazon worden gestuurd. Als uw magazijn pakbestanden via de [pakintegratie](/User-Guide/02-ShopCtrl-Setup/05-Fulfillment/integration-with-wms-via-ftp.md) stuurt, wordt deze structuur automatisch opgebouwd. Met de functies hieronder bouwt of corrigeert u de structuur handmatig.

## Een zending handmatig inpakken en plaatsen {#how-to-pack-and-place-a-shipment-manually}

U begint met een zending die al deel uitmaakt van een groepszending; zie [Handmatig een groepszending aanmaken](/docs/amazon-1p-group-shipment#how-to-manually-create-a-group-shipment).

Open de zending. Omdat deze bij een groepszending hoort, toont de tabel **Goods to ship** nu de functies voor plaatsing: de kolom **Placed**, de knop **i** (Show placement) aan het einde van elke rij, het filter **Filter by placed…**, en de knoppen **Place to**, **Unplace** en **Move unplaced**.

![Plaatsing in een zending, stap 1](/img/shipment-placement-step-01.png)

### Stap 1. Een hele rij op een pallet plaatsen {#step-1-place-a-whole-row-on-a-pallet}

1. Selecteer de productrij die u wilt plaatsen.
2. Klik op **Place to**.
3. Typ de identificatie van de **Pallet**. Als de pallet al in deze zending bestaat, kiest u deze in de lijst.
4. Typ of selecteer eventueel de identificatie van de **Carton**. Gebruik dit als de artikelen in een doos gaan die op die pallet staat. Laat het leeg om de artikelen rechtstreeks op de pallet te plaatsen.

![Plaatsing in een zending, stap 2](/img/shipment-placement-step-02.png)

5. Klik op **Place**. De hele rij staat nu op die pallet en de kolom **Placed** is gelijk aan de hoeveelheid van de rij.
6. Klik op **Save** om de wijzigingen in de zending toe te passen.

Klik op de knop **i** aan het einde van de rij om het resultaat te controleren.

**Place to** plaatst altijd alleen de artikelen die nog niet zijn geplaatst. Rijen die al volledig zijn geplaatst, blijven dus ongewijzigd en u kunt de actie gerust twee keer uitvoeren. Als u geen rijen selecteert voordat u klikt, vraagt ShopCtrl of de actie op alle rijen moet worden toegepast. Zo zet u snel een hele zending op één pallet. Hetzelfde geldt voor **Unplace**, dat de plaatsing van de geselecteerde rijen wist en elke pallet of doos verwijdert die daardoor leeg is.

:::tip
Gebruik het filter **Filter by placed… > With unplaced items** om in één oogopslag te zien wat nog moet worden geplaatst, en selecteer en plaats die rijen daarna in één keer.
:::

### Stap 2. Een rij over meerdere pallets verdelen {#step-2-split-a-row-over-several-pallets}

Als de artikelen van één rij op meer dan één pallet of in meer dan één doos gaan:

1. Klik op de knop **i** aan het einde van de rij om het venster **Placement** te openen.
2. Klik op **Add** en pas de **Quantity**, de **Pallet** en eventueel de **Carton** van de nieuwe regel aan.

![Plaatsing in een zending, stap 3](/img/shipment-placement-step-03.png)

3. Herhaal dit tot alles is verdeeld. De teller in de werkbalk toont **Items: placed / total**, en **Add** is niet meer beschikbaar zodra de rij volledig is geplaatst.
4. Klik op **Ok** om het venster **Placement** te sluiten.
5. Klik op **Save** om de wijzigingen in de zending toe te passen.

Houd bij het invullen van de regels rekening met het volgende:

* **Een pallet is verplicht.** Een artikel kan rechtstreeks op een pallet staan, of in een doos die op een pallet staat.
* U kunt een nieuwe identificatie typen in plaats van een bestaande te kiezen. ShopCtrl maakt die pallet of doos dan aan voor de zending.
* Als u eerst een bestaande **Carton** kiest, vult ShopCtrl de pallet in waarop die doos al staat. Als u daarna de **Pallet** wijzigt, wordt de doos gewist, omdat een doos bij precies één pallet hoort.
* Een nieuwe regel wordt vooraf ingevuld met alle artikelen die nog niet zijn geplaatst, en een regel kan het totaal nooit boven de hoeveelheid van de rij brengen.
* Om een regel te verwijderen, selecteert u deze, klikt u op **Delete** en bevestigt u.

### Stap 3. Verwijderen wat niet wordt verzonden {#step-3-move-out-what-is-not-being-shipped}

Als er na het plaatsen artikelen overblijven die niet zijn ingepakt en niet worden verzonden, klikt u op **Move unplaced**.

Kies of u die artikelen naar een nieuwe zending (**New Shipment**) verplaatst of naar een van de bestaande zendingen van de order. De lijst toont alleen zendingen die niet zijn verwijderd en nog niet zijn verzonden, elk met de status: *(Not picked)*, *(Picked)* of *(Packed)*.

![Plaatsing in een zending, stap 4](/img/shipment-placement-step-04.png)

Klik op **Move** en bevestig. Alleen de artikelen zonder plaatsing worden verplaatst, zodat de zending precies bevat wat er fysiek wordt verzonden.

:::caution
Met deze actie worden alle openstaande wijzigingen van de huidige zending opgeslagen voordat de zending wordt gesplitst.
:::

### Stap 4. De structuur in de groepszending controleren {#step-4-check-the-structure-in-the-group-shipment}

Zodra alles is ingepakt en geplaatst, slaat u de zending op en opent u de groepszending. De tabbladen **Pallets** en, als u ze hebt gebruikt, **Cartons** tonen de samengevoegde structuur van alle zendingen.

![Handmatig geplaatste groepszending](/img/manualy-placed-group-shipment.png)

Hier kunt u de gewichten en afmetingen van pallets en dozen controleren, het verzendlabel aanmaken en de ASN versturen.

## Veelvoorkomende correcties {#common-corrections}

Pallets en dozen bestaan alleen zolang er artikelen op of in zijn geplaatst. Er is geen aparte actie om een pallet te verwijderen: zodra het laatste artikel niet meer is geplaatst, verwijdert ShopCtrl de pallet of doos automatisch uit de zending.

:::warning
Met uitzondering van **Move unplaced**, dat de zending zelf opslaat, moet u alle onderstaande wijzigingen bevestigen door de zending op te slaan.
:::

### De zending vinden waar het artikel bij hoort {#find-the-shipment-the-item-belongs-to}

Een groepszending kan veel orders bevatten. Begin daarom bij de groepszending om te achterhalen welke u nodig hebt:

1. Open de groepszending en ga naar het onderdeel **Items**.
2. Vul de **EAN** of **ASIN** van het product in het zoekveld in. U kunt ook op SKU zoeken.
3. De kolom **Order** toont bij welke order het artikel hoort, en de kolommen **Pallet** en **Carton** tonen precies waar het staat.
4. Klik op de ordercode om de order in een nieuw tabblad te openen, en open vanuit de order de zending.

![EAN zoeken in een groepszending](/img/find-ean-in-group-shipment.png)


### Eén artikel van een ingepakte pallet halen {#remove-one-item-from-a-packed-pallet}

Gebruik dit als er één artikel te veel op de pallet staat, bijvoorbeeld een beschadigd exemplaar dat eraf wordt gehaald voordat de vrachtwagen vertrekt.

1. Open de zending en klik op de knop **i** aan het einde van de productrij.
2. Verlaag in het venster **Placement** de **Quantity** op de regel van die pallet met één en klik op **Ok**. De teller toont dat de rij niet meer volledig is geplaatst, en de kolom **Placed** komt onder **Qty** uit.

![Eén artikel verplaatsen in de plaatsing van een zending](/img/move-1-item-shipment-placement.png)

![Aangepaste plaatsing met Move unplaced](/img/placement-adjusted-move-unplaced.png)

3. Bepaal wat er met het verwijderde artikel gebeurt:
   * om het op een andere pallet van deze zending mee te sturen, plaatst u het met **Place to** of met een extra regel in het venster **Placement**;
   * om het uit deze zending te halen, klikt u op **Move unplaced**, kiest u **New Shipment** of een van de bestaande zendingen van de order, klikt u op **Move** en bevestigt u.

:::tip
Een plaatsingsregel kan niet onder één artikel komen. Als de hele regel weg moet, selecteert u deze en klikt u op **Delete** in plaats van de hoeveelheid te verlagen.
:::

### Een productrij van een ingepakte pallet halen {#remove-one-product-row-from-a-packed-pallet}

Gebruik dit als een heel product van de pallet wordt gehaald.

1. Open de zending en selecteer de productrij in de tabel **Goods to ship**.
2. Klik op **Unplace**. Alle plaatsingen van die rij worden verwijderd, de waarde bij **Placed** wordt 0, en elke pallet of doos die daardoor leeg is, wordt uit de zending verwijderd.

![Plaatsing van een hele rij ongedaan maken](/img/unplace-whole-row-placement-shipment.png)

3. Plaats de rij ergens anders met **Place to**, of haal deze uit de zending met **Move unplaced**.

U kunt hetzelfde doen vanuit het venster **Placement**: klik op **i**, selecteer de regels, klik op **Delete** en daarna op **Ok**.

### Een hele pallet uit een zending verwijderen {#remove-a-whole-pallet-from-a-shipment}

Een pallet verdwijnt zodra er niets meer op is geplaatst. Een pallet verwijderen betekent dus de plaatsing ongedaan maken van elke rij die erop staat.

1. Zoek uit wat er op de pallet staat: open in de groepszending het onderdeel **Items** en zoek op de palletcode. De tabel toont dan elk artikel op die pallet, samen met de order waar het bij hoort. Binnen een zending toont de knop **i** op een rij hetzelfde vanuit de andere kant.

![Artikelen op een pallet in een groepszending](/img/items-on-a-pallet-groupshipment.png)

2. Open elk van die zendingen, selecteer de rijen die op de pallet staan en klik op **Unplace**. Als alle rijen van een zending op die pallet staan, klikt u op **Unplace** zonder iets te selecteren en bevestigt u dat de actie op alle rijen moet worden toegepast.
3. De pallet is nu verdwenen, samen met de dozen die erop stonden. Controleer het resultaat in de groepszending op het tabblad **Pallets**.
4. Plaats de artikelen opnieuw op de juiste pallet met **Place to**, of verplaats ze uit de zending met **Move unplaced**.

## Probleemoplossing {#troubleshooting}

Als ShopCtrl een plaatsing niet wil opslaan, legt het uit waarom. Dit is wat de meldingen betekenen:

| Melding | Betekenis |
| --- | --- |
| *Pallet identifier is required.* | Een regel heeft een doos of een hoeveelheid, maar geen pallet. |
| *Quantity must be greater than 0.* | Verwijder de regel in plaats van de hoeveelheid op nul te zetten. |
| *The identifier 'X' is used both for a carton and pallet.* | Identificaties van pallets en dozen moeten binnen de zending uniek zijn. |
| *The carton 'X' is placed on different pallets.* | Eén doos kan niet op twee pallets staan. |
| *Changing the parent pallet 'A' → 'B' for the carton 'X' is not supported in this view. Use the Shipment Packages window instead.* | Een hele doos naar een andere pallet verplaatsen is een wijziging van de verpakking, geen wijziging van de plaatsing. Doe dit in het venster Shipment Packages. |
