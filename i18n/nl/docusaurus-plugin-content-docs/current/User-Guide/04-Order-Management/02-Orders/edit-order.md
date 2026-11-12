---
sidebar_position: 4
slug: /docs/edit-order
description: "Bewerk een order in ShopCtrl: wijzigingen opslaan, de klant e-mailen, handmatig factureren, fulfilment starten of een order annuleren die nog niet is gefactureerd of verzonden."
---

# Een order bewerken

U bewerkt een order door de order te selecteren of te filteren en daarna linksboven op de knop **Open** te klikken. U kunt ook op de order dubbelklikken.

Het venster met orderdetails verschijnt:
<img src={require("/img/order-details.png").default} height="" width="800" />

Vanuit het actiemenu bovenaan kunt u de order opslaan (**Save**), een **e-mail** naar de klant of leverancier sturen, de order handmatig factureren (**Invoice**), het **Fulfillment**-proces starten of de order zelfs verwijderen (**Delete**).

:::info[Let op]

Als de orderstatus "On hold" is, zijn de knoppen voor factureren en fulfilment uitgeschakeld, zodat er geen verdere acties met de order kunnen worden uitgevoerd.
Wilt u bijvoorbeeld een creditfactuur uitbrengen, zet de status dan terug op actief, breng de factuur uit en zet de order daarna weer in de wacht.

:::

## Een order annuleren {#cancel-order}

U annuleert een order door de hoofdstatus te wijzigen in '**Cancelled**'.

:::warning[Let op]

Een order die al is gefactureerd of verzonden, kan niet worden geannuleerd. Verwijder of annuleer eerst de factuur of facturen en de zending(en).

:::

### Eén order annuleren: {#cancel-single-order}

1. Open het tabblad **Sales > Orders**.
2. Zoek de order en **dubbelklik** erop om deze te bewerken.
3. Selecteer op de pagina met orderdetails in het menu **Order Statuses**.
<img src={require("/img/cancel-silngle-order.png").default} height="" width="800" />

4. Klik op de Main Status en selecteer Cancelled in de vervolgkeuzelijst.
5. (Optioneel) Selecteer een vooraf ingestelde **Cancel reason**. Of laat het veld leeg als redenen niet verplicht zijn.
6. (Optioneel) Vul een opmerking in.
7. Klik op **Save** of **Save and Close** om de wijzigingen toe te passen.


### Meerdere orders annuleren: {#cancel-several-orders}

1. Open het tabblad **Sales > Orders**.
2. Zoek en selecteer meerdere orders.
3. Klik in het deelvenster Actions op **More > Change > Order status > Main status > Cancelled**.
<img src={require("/img/cancel-several-orders.png").default} height="" width="800" />

### Geannuleerde orders uit Amazon importeren {#import-cancelled-orders-from-amazon}

Wanneer een klant een order plaatst op Amazon, kan de klant de order binnen 30 minuten annuleren zonder contact op te nemen met de verkoper. Daarna wordt de order doorgegeven aan de verkoper en kan de klant de order alleen nog annuleren via het supportteam van de verkoper.

ShopCtrl importeert orders zodra ze de status pending voorbij zijn en klaar zijn voor verzending. Zodra de order in ShopCtrl binnenkomt, start een automatisch proces.

Als de klant na de import in ShopCtrl een annuleringsverzoek stuurt en een medewerker dit in het Amazon Seller Central-account afhandelt, wordt deze wijziging kort daarna naar ShopCtrl gesynchroniseerd. Hoe de statuswijziging wordt verwerkt, hangt sterk af van de fase van het fulfilmentproces waarin de order zich bevindt. Het schema hieronder toont de verschillende fulfilmentfasen van de order en de mogelijke uitkomsten bij het importeren van het annuleringsverzoek:

<img src={require("/img/import-Amazon-cancel-order-status.png").default} height="" width="800" />

Als er nog geen zending is aangemaakt, of als de zending wel is aangemaakt maar nog niet door het magazijn is opgepakt (gepickt of ingepakt), verandert de orderstatus automatisch in geannuleerd en wordt ook de zending verwijderd. Zo weet het fulfilmentteam direct dat de order niet moet worden verzonden: verdere acties met de zending zijn niet mogelijk en er verschijnt een foutmelding dat de zending niet meer bestaat.

Als de zending al is aangemaakt en aan het magazijn is doorgegeven (de status van de zending is 'Picked'/'Packed' of het pakket is zelfs als 'Shipped' gemarkeerd), kan de order niet automatisch worden geannuleerd. Op orderniveau verschijnt dan een **melding** dat de order op Amazon is geannuleerd, zodat medewerkers weten dat de order moet worden gecontroleerd.

<img src={require("/img/alert-on-order-not-cancelled.png").default} height="" width="800" />

Als het pakket het magazijn nog niet heeft verlaten, kan het handmatig worden geannuleerd. Als de zending al onderweg is naar de klant, mogen de zendingsgegevens niet worden verwijderd. Om de gegevens dan juist te houden, maakt u creditregels aan en brengt u een creditfactuur uit.

### De status van geannuleerde orders doorgeven aan Amazon {#update-cancelled-order-status-to-amazon}

Om deze functie te gebruiken, schakelt u deze in bij Shop Settings > Amazon Shop Synchronization > Orders Integration > Export cancelled orders. Zie [De Amazon 3P-shopsynchronisatie instellen in ShopCtrl](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-3P/index.md#2-setting-up-amazon-shop-synchronization-in-shopctrl) voor meer informatie.

Om de order te annuleren, wijzigt u de hoofdstatus van de order in ShopCtrl in **Cancelled**. De order op Amazon wordt kort daarna bijgewerkt met de annuleringsreden **Cancelled by customer request**.

## Orderregels {#order-rows}
Een belangrijk onderdeel van de orderdetails zijn de orderregels:
<img src={require("/img/orders-orderrow-screenshot.png").default} height="" width="800" />

Als u een orderregel selecteert, worden de knoppen voor wijzigen beschikbaar:

<img src={require("/img/Order_row_select_3.gif").default} height="" width="800" />

* **Add**
  Met de knop ‘Add’ kunt u altijd nieuwe orderregels aan een bestaande order toevoegen.
* **Edit**
  Een bestaande orderregel wijzigen
* **Delete**
  Als een order nog niet is gefactureerd, kunt u orderregels verwijderen.
* **More**
<img src={require("/img/orders-orderrow-menu-more.png").default} height="" width="200" />
* **Add Credit row:**
Als de order is afgerond (de factuur is aangemaakt), kunt u de order alleen nog wijzigen door een creditregel toe te voegen.
* **Split row**
Als een orderregel meerdere stuks bevat en de voorraad onvoldoende is, kunt u de regel splitsen en een backorder aanmaken voor de artikelen die niet beschikbaar zijn.
* **Copy row**
Een orderregel dupliceren
* **Allocate stock**
Voorraad in een geselecteerd magazijn reserveren en toewijzen aan de betreffende artikelen.
* **De-Allocate Stock**
Een eerder uitgevoerde voorraadtoewijzing ongedaan maken en de voorraad vrijgeven
* **Fulfillment**
  * **Set Shippable.** Een orderregel (weer) als verzendbaar markeren
  * **Set Not Shippable.** Als een orderregel niet kan worden verzonden, markeert u deze als ‘not shippable’. ShopCtrl voert dan geen logistieke acties meer uit voor deze orderregel.

:::warning[Belangrijk]

Als u regels binnen een order verwijdert of bewerkt, wordt die order niet meer gesynchroniseerd met Amazon-, Shopify- en eBay-shops. Als u de status van deze bewerkte order in ShopCtrl wijzigt, moet u dezelfde handeling ook handmatig in de shop uitvoeren.

:::
