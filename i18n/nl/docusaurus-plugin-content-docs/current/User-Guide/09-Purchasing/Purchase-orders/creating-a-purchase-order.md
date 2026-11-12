---
sidebar_position: 2
slug: /docs/creating-a-purchase-order
description: "Maak in ShopCtrl gewone, dropship- en back-to-back-inkooporders aan en lees wat u vooraf moet instellen."
---

# Een inkooporder aanmaken 


ShopCtrl ondersteunt drie typen inkooporders:

* **Regular** - voor groothandelsorders waarmee u de voorraad aanvult.
* **Dropship** - de leverancier verzendt de goederen namens u rechtstreeks naar de klant
* **BacktoBack** - aangemaakt voor de verkooporder van een bepaalde klant. Back to Back gebruikt u vooral voor goederen die u niet op voorraad wilt houden, maar die u wilt laten aanleveren en daarna naar klanten wilt verzenden wanneer dat nodig is.

:::warning[Voordat u begint]

Zorg dat de basisconfiguratie is uitgevoerd: de producten zijn aangemaakt en de prijslijsten van de leveranciers zijn in ShopCtrl geïmporteerd. 

:::

## Een gewone inkooporder aanmaken {#creating-a-regular-purchase-order}

<img src={require("/img/New_PO_1.png").default} height="" width="800" />

1. Ga in het navigatiemenu links naar de module met inkooporders. Klik op **Add**
Er wordt een nieuw ordervenster geopend in een nieuw tabblad
2. Vul de verplichte velden in, die met rode stippen zijn gemarkeerd:
    * Zoek de leverancier in het veld **Supplier** en voeg deze toe.
    * **Order Date** - de datum van de inkooporder is standaard de huidige datum.
    * Kies een **Currency** voor de inkooporder. Standaard wordt de valuta-instelling van de leverancier gebruikt.
    * Selecteer bij **Destination** het magazijn waar de goederen worden geleverd.
3. Optionele velden:
**Expected Date**: selecteer de datum waarop de leverancier de goederen gaat leveren.
**Discount** voor een inkooporder kunt u opgeven in **%**. De korting geldt voor de hele order, inclusief de verzendkosten. Zodra de korting is berekend, wordt het bijbehorende bedrag in het kortingsveld hieronder getoond: 
    <img src={require("/img/new_po_discount.png").default} height="150" width="" />

4. Voeg producten toe door op de knop **Add** te klikken. Er verschijnt een productmenu dat lijkt op dat van de verkooporder.  
    <img src={require("/img/New_po_add_products.png").default} height="" width="400" />

5. Als de inkooporder in meerdere delen wordt geleverd, stelt u voor elke productregel een **Expected delivery date** in. 
    <img src={require("/img/new_regular_po_set_expected_date_row.png").default} height="" width="800" />

Er is een eenvoudigere en snellere manier om aan te geven welk product wanneer wordt geleverd. Zie [Leveringen aanmaken](/User-Guide/09-Purchasing/Purchase-orders/creating-deliveries.md) voor meer informatie. 

6. Klik op de knop **Preview PDF** om een voorbeeld van de inkooporderfactuur te bekijken. 
    <img src={require("/img/new_regular_po_1.png").default} height="" width="800" />

:::info[**Let op:**]

Zodra u op de knop **Preview PDF** klikt, wordt de nieuwe inkooporder opgeslagen.

:::

7. Er zijn meerdere opties om de inkooporder **op te slaan**. 
    <img src={require("/img/new_regular_po_3.png").default} height="" width="400" />

    * **Save and Close** - Slaat de inkooporder op en sluit het tabblad.
    * **Save** - Slaat de inkooporder op.
    * **Save, close & mail** - Slaat de nieuwe inkooporder op, sluit het tabblad en opent een venster met een nieuwe e-mail aan de leverancier, gegenereerd op basis van een e-mailsjabloon voor inkooporders.

:::info[**Let op:**]

De optie **Save, close & mail** is alleen beschikbaar voor nieuw aangemaakte inkooporders. Zodra de e-mail is verzonden, wordt de knop uitgeschakeld.

:::

<img src={require("/img/PO_email_autogenerate_03.png").default} height="" width="800" />

Het deelvenster **References** toont de leverancier waaraan deze inkooporder is gekoppeld.
Het inkooporderdocument wordt automatisch aan de e-mail toegevoegd en is zichtbaar in het deelvenster met bijlagen.

:::warning[Wisselkoersen]

Als uw inkooporder in een andere valuta is gedaan dan de basisvaluta van de shop owner. 

:::

## Een dropship-inkooporder aanmaken {#creating-a-dropship-purchase-order}

Het systeem maakt automatisch een dropship-inkooporder aan wanneer de [dropshipment](/User-Guide/07-Fulfillment/creating-dropshipment.md) voor de verkooporder wordt aangemaakt. Dit gebeurt op basis van de productprijs in de prijslijst van de leverancier. Ook het inkooporderdocument wordt automatisch gegenereerd en kan naar de leverancier worden verzonden.
U kunt de dropship-inkooporder openen om te bewerken of een e-mail naar de leverancier sturen.

<img src={require("/img/dropship_po_overview_02.png").default} height="" width="800" />

De belangrijkste verschillen met de gewone inkooporder:

* Het type wordt weergegeven als **Dropship**.
* Het veld **Our Reference** bevat de code van de verkooporder.
* Er is geen magazijn, omdat de inkooporder rechtstreeks aan de klant wordt geleverd.
* Het veld Order bevat een directe link naar de verkooporder waarvoor de inkooporder is aangemaakt. Klik op de knop **View** om de verkooporder in een nieuw tabblad te openen om te bewerken.

## Een back-to-back-inkooporder aanmaken {#creating-a-back-to-back-purchase-order}

    

Zo maakt u een back-to-back-inkooporder aan:
1. Open de **Sales order** waarvoor de back-to-back-inkooporder moet worden aangemaakt. 
Als het product niet op voorraad is, wordt het gemarkeerd als backorder. ShopCtrl bepaalt automatisch de leverancier van het product.
    <img src={require("/img/backToBack_PO_00.png").default} height="" width="800" />
2. Kies in het menu hieronder **Purchase Orders**. Klik op de knop **Create Purchase Order**.
    <img src={require("/img/back_to_back_new_order_2.png").default} height="" width="800" />
3. Er verschijnt een venster waarin u een **supplier**, het **Destination**-magazijn en de te bestellen **Products** kiest. 
Het voorstel is gebaseerd op de prioriteit van de leveranciers die op het product is ingesteld. De voorkeursleverancier wordt altijd als eerste gekozen. U kunt echter eenvoudig een andere beschikbare leverancier kiezen.
    <img src={require("/img/back_to_back_new_order_3.png").default} height="" width="400" />

4. Er zijn meerdere opties om een back-to-back-inkooporder aan te maken en op te slaan (**Create and Save**). 
    <img src={require("/img/back_to_back_new_order_4.png").default} height="" width="400" />

#### **Create and Mail** {#create-and-mail}
1. Maakt een nieuwe inkooporder aan en slaat deze op
2. Het inkooporderdocument wordt automatisch gegenereerd zodra de inkooporder is aangemaakt.
3. Opent een nieuw tabblad met een nieuwe e-mail aan de leverancier op basis van het ingestelde e-mailsjabloon. 
    <img src={require("/img/PO_email_autogenerate_02.png").default} height="" width="800" />


Het deelvenster **Reference** toont:
* Ordernummer van de verkooporder
* Naam van de klant 
* Leverancier
* Code in het ticketveld. Klik op de knop **Create ticket** om een nieuw ticket aan te maken dat aan deze verkooporder is gekoppeld.

Het inkooporderdocument wordt automatisch aan de e-mail toegevoegd en is zichtbaar in het deelvenster met bijlagen.

#### Create and Show {#create-and-show}
1. Maakt een nieuwe inkooporder aan en slaat deze op
2. Het inkooporderdocument wordt automatisch gegenereerd zodra de inkooporder is aangemaakt.
3. Opent een nieuw tabblad met de aangemaakte inkooporder om te bewerken.
    <img src={require("/img/backToBack_PO_03.png").default} height="" width="800" />

De belangrijkste verschillen met de gewone inkooporder:

* Het type wordt weergegeven als **BacktoBack**.
* Het veld Order bevat een directe link naar de verkooporder waarvoor de inkooporder is aangemaakt. Klik op de knop **View** om de verkooporder in een nieuw tabblad te openen om te bewerken.

#### Create {#create}
Maakt een nieuwe inkooporder aan en slaat deze op. Rechtsonder in het scherm verschijnt een pop-upbericht.
<img src={require("/img/backToBack_PO_create_pop_up_02.png").default} height="" width="" />

U kunt de nieuwe inkooporder bekijken en bewerken in de inkoopmodule.
