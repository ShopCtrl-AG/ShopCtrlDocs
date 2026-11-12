---
sidebar_position: 5
slug: /docs/provisioning
description: "Provisioning in ShopCtrl is het ontvangen van goederen in uw magazijn, voor zowel eigen magazijnen als fulfilmentmagazijnen, en hoe u het scherm opent."
---

# Provisioning-overzicht 

Provisioning is het proces waarbij u goederen ontvangt en in uw magazijn opslaat.
Met ShopCtrl kunt u voorraad beheren voor twee soorten magazijnen: eigen magazijnen en fulfilmentmagazijnen. 

## Voorraad inboeken in een eigen magazijn {#provisioning-stock-to-a-private-warehouse}

### Overzicht van de Provisioning-pagina {#provisioning-page-overview}

Wanneer u goederen ontvangt, selecteert u de bijbehorende inkooporder en boekt u de goederen in via Provisioning. 

Er zijn meerdere manieren om het Provisioning-scherm te openen:
1) Vanuit de hoofdtabel met inkooporders: 
Selecteer een geleverde inkooporder en klik op de knop in het actiemenu bovenaan. Of klik op een Provision-knop in de rij van de inkooporder.
<img src={require("/img/provision_01.png").default} height="" width="800" />

2) Op de pagina van de inkooporder:
Open de ontvangen inkooporder en klik in het menu bovenaan op een Provision-knop.
<img src={require("/img/provision_03.png").default} height="" width="800" />

3) Als er voor de inkooporder een of meer [leveringen](/User-Guide/09-Purchasing/Purchase-orders/creating-deliveries.md) bestaan, zijn de Provision-knoppen per levering beschikbaar.
<img src={require("/img/provision_regular_order_deliveries_01.png").default} height="" width="800" />

:::info[]

Zodra u het Provisioning-proces start en de verzendstatus (submit status) van de inkooporder nog niet afgerond is (standaard "Send to supplier"), wordt deze automatisch gewijzigd in de standaard afgeronde status. Het ontvangen van goederen houdt namelijk in dat u de bestellijst naar de leverancier hebt gestuurd.

:::

Klik op een willekeurige **Provision**-knop. Er wordt een nieuw venster voor het inboeken van de inkooporder geopend in een nieuw tabblad. Er is geen verschil in het Provisioning-proces tussen gewone en back-to-back-inkooporders.

<img src={require("/img/provision_regular_order_02.png").default} height="" width="800" />



#### Actiemenu bovenaan {#top-action-menu}

<img src={require("/img/Provision_top_action_menu_not_provisioned.png").default} height="" width="800" />

| Actie | Beschrijving |
| --- | --- |
| Save and Close | Slaat de Provisioning op en sluit de pagina |
| Save | Slaat de Provisioning op |
| Save, Close and Print Labels | Slaat de Provisioning op, sluit de pagina en opent een nieuw venster om labels af te drukken voor elk geavanceerd voorraaditem. Zie [Advanced Warehouse](/User-Guide/09-Purchasing/advanced-warehouse.md) voor meer informatie |
| Finalize provisioning | Deze optie is beschikbaar voor inkooporders met de Provisioning-status "Partially received". |
| Cancel provisioning | Annuleert de Provisioning en wijzigt de hoofdstatus van de inkooporder in "Cancelled". |
| Print PO | Drukt de betreffende inkooporder af |

:::(Error) ()
Als de Provisioning in het Provisioning-scherm wordt geannuleerd (**Cancelled**), wordt de hoofdstatus van de inkooporder gewijzigd in "Cancelled". Dit kan niet ongedaan worden gemaakt. 
:::
:::info[**Let op:**]

Nadat de inkooporder gedeeltelijk is ingeboekt, kunt u de Provisioning niet meer annuleren.

:::
#### Gegevens van de inkooporder {#purchase-order-details}
Dit zijn de gegevens van de inkooporder die wordt ingeboekt.
Een **Comment** of **Supplier note** kunt u ook tijdens het Provisioning-proces bewerken en opslaan.

<img src={require("/img/provision_04a.png").default} height="" width="800" />

#### Producttabel {#products-table}

Het productdeelvenster toont een lijst met producten die moeten worden ingeboekt. Deze tabel kunt u aanpassen, net als alle andere tabellen in ShopCtrl. 
Om het Provisioning-proces eenvoudiger en sneller te maken, is er een zoekveld beschikbaar. Er wordt gezocht in de productcode, de productnaam en het SKU-nummer van de leverancier.
Klik op een pictogram in de kolom met de productcode om een product op een nieuwe pagina te openen. Klik op het locatiepictogram om een locatie op een nieuwe pagina te openen.

<img src={require("/img/provision_05.png").default} height="" width="800" />

De ontvangen hoeveelheid geeft u op in de kolom **Receive Now**. Standaard vult ShopCtrl hier de bestelde hoeveelheid in. 
Als de eerste zending al is geleverd, toont de kolom **Already Received** de ingeboekte hoeveelheid. 

<img src={require("/img/provision_overview_products_already_received.png").default} height="" width="800" />

:::warning[**Let op:**]

De totale ontvangen hoeveelheid mag de bestelde hoeveelheid op de inkooporder niet overschrijden. Dit is een standaardinstelling. 
ShopCtrl biedt ook de mogelijkheid een percentage in te stellen dat u te veel mag inboeken. Neem voor meer informatie contact op met uw supportmanager.

:::

### Een inkooporder in twee delen inboeken {#provisioning-purchase-order-in-two-parts}

Stel dat de leverancier de inkooporder in twee zendingen levert.  

Boek na ontvangst van het **eerste** deel de goederen in via Provisioning:
1. Open de Provisioning-pagina.
2. Pas de ontvangen hoeveelheid handmatig aan of geef de [geavanceerde voorraaditems](/User-Guide/09-Purchasing/advanced-warehouse.md) op met een barcodescanner.

<img src={require("/img/provision_private_warehouse_first_part_amend_qty.png").default} height="" width="800" />

3. Selecteer per product een **Location** waar de goederen worden opgeslagen. 

<img src={require("/img/provision_private_warehouse_first_part_select_location.png").default} height="" width="800" />

4. Klik op **Save** of **Save and Close** om het inboeken van de eenvoudige voorraaditems af te ronden. Klik op **Save, Close and Print Labels** om de registratie voor het opslaan van de [geavanceerde voorraaditems](/User-Guide/09-Purchasing/advanced-warehouse.md) af te ronden.

5. ShopCtrl maakt automatisch een levering aan voor de ontvangen zending. U kunt deze bekijken in het menu van de inkooporder. 
De Provisioning-status van de inkooporder wordt gewijzigd in "Partially provisioned".

Volg na levering van de **tweede** zending dezelfde stappen.
1. Open de Provisioning-pagina.
De Provisioning-status van de inkooporder wordt weergegeven als "Partially received". Producten die met de eerste zending zijn ontvangen, staan in de kolom "Already Received". Het veld Receive now is uitgeschakeld voor producten die volledig zijn ontvangen.
<img src={require("/img/provision_private_warehouse_second_part.png").default} height="" width="800" />

2. Voer de ontvangen hoeveelheid in.
3. Selecteer per product een **Location** waar de goederen worden opgeslagen.
4. Klik op **Save** of **Save and Close**.

ShopCtrl maakt automatisch een tweede levering aan voor de inkooporder. Zo kunt u altijd nagaan met welke zending het product is geleverd.
<img src={require("/img/provision_private_warehouse_autocreated_deliveries.png").default} height="" width="800" />

Zodra de inkooporder volledig is ontvangen, wijzigt ShopCtrl de Provisioning-status in **Provisioned**.



Als de inkooporder op dat moment volledig is betaald, wordt ook de hoofdstatus gewijzigd in "Finished". De Provision-knoppen worden dan uitgeschakeld.


#### Provisioning afronden {#finalizing-provisioning}

Het kan voorkomen dat sommige artikelen nog openstaan omdat de inkooporder niet is bijgewerkt na de bevestiging van de leverancier. 
Sommige artikelen kunnen beschadigd zijn ontvangen en naar de leverancier zijn teruggestuurd. Of een deel van de openstaande goederen is "End of Life" en de rest wordt niet geleverd. Klik op de knop **Finalize provisioning** om de inkooporder automatisch aan te passen en deze producten eraf te halen.

:::info[ShopCtrl-tip]

De knop Finalize provisioning wordt actief wanneer een inkooporder een gedeeltelijke Provisioning-status heeft. 
Om de Provisioning van een zojuist ontvangen inkooporder af te ronden, slaat u deze dus eerst op en vernieuwt u de pagina.

:::

<img src={require("/img/provision_finalize_provisioning.png").default} height="" width="800" />

Als u op de knop **Finalize provisioning** klikt, verschijnt een bevestigingsbericht:

<img src={require("/img/provision_finalize_provisioning_message.png").default} height="" width="" />

Na de bevestiging worden de regels van de inkooporder aangepast aan de ontvangen hoeveelheden. De Provisioning-status van de inkooporder wordt gewijzigd in "Provisioned".

## Voorraad inboeken in een fulfilmentmagazijn {#provisioning-stock-to-a-fulfillment-warehouse}

Het Provisioning-proces is in ShopCtrl voor beide soorten magazijnen grotendeels hetzelfde. Het belangrijkste verschil is dat u bij het inboeken in een fulfilmentmagazijn niet hoeft op te geven waar de goederen worden opgeslagen. 

### Overzicht van de Provisioning-pagina {#provisioning-page-overview-1}

Het actiemenu bovenaan is hetzelfde als dat voor het eigen magazijn. De gegevens van de inkooporder zijn de gegevens van de inkooporder die wordt ingeboekt.

Het productdeelvenster is eenvoudiger dan dat voor het eigen magazijn. Het inboeken vindt hier namelijk in feite plaats in het magazijn van de leverancier.
<img src={require("/img/provision_fulfilment_warehouse.png").default} height="" width="800" />

### Provisioning-proces {#provisioning-process}
Boek de inkooporder in via Provisioning nadat de leverancier heeft bevestigd dat de goederen naar uw voorraad zijn verplaatst.

1. Open de Provisioning-pagina.
2. Corrigeer de ontvangen hoeveelheid.
3. Sla de Provisioning-pagina op en sluit deze.

U kunt ook **Finalize provisioning** gebruiken.
