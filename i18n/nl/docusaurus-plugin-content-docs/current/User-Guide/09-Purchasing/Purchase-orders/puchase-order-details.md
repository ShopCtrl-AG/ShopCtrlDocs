---
sidebar_position: 4
slug: /docs/puchase-order-details
description: "Een rondleiding door de detailpagina van een inkooporder in ShopCtrl, met alle acties in het menu bovenaan en de gegevens op elk tabblad."
---
# Details van een inkooporder 


Overzicht van de detailpagina van een inkooporder

<img src={require("/img/PO_description_4.png").default} height="" width="800" />

## Actiemenu bovenaan {#top-action-menu}
<img src={require("/img/po_overview_top_action_menu.png").default} height="" width="800" />

| Actie | Beschrijving |
| --- | --- |
| Save and Close | Slaat de geopende inkooporder op en sluit het tabblad. |
| Save | Slaat de geopende inkooporder op. |
| Save, close & mail... | Slaat de nieuwe inkooporder op, sluit het tabblad en opent een venster met een nieuwe e-mail op basis van een vooraf ingesteld e-mailsjabloon. |
| Template | Hier wordt het [standaardsjabloon voor het inkooporderdocument](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/index.md) ingesteld. |
| Preview PDF | Klik op deze knop en geef een inkoopordercode op om een voorbeeld van het automatisch gegenereerde inkooporderdocument te bekijken. |
| Mail Supplier | Klik op de pijl om de lijst met [e-mailsjablonen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/index.md) voor de inkooporder te tonen. Klik op een van de sjablonen om in een nieuw tabblad een nieuwe e-mail aan de leverancier te openen, gegenereerd op basis van dat sjabloon. |
| Provision | Opent in een nieuw tabblad de pagina om de inkooporder in te boeken. De knop Provision is alleen ingeschakeld voor opgeslagen inkooporders zonder leveringen. |
| Delete | Verwijdert de geopende inkooporder. |
:::info

De optie **'Save, close & mail'** is alleen beschikbaar voor nieuw aangemaakte inkooporders. Zodra de eerste e-mail naar een leverancier is verzonden, wordt de knop uitgeschakeld. Gebruik dan de knop **Mail Supplier**.

:::

## Gegevens van de inkooporder {#purchase-order-details}

<img src={require("/img/PO_overview_main_details_border.png").default} height="" width="800" />

| Veld | Beschrijving |
| --- | --- |
| Supplier | (Verplicht) De leverancier die de inkooporder gaat leveren. |
| Our Reference | (Optioneel) Kan worden gebruikt als merge field bij het aanmaken van inkooporderdocumenten en is ook zichtbaar op de Provisioning-pagina. |
| Comment | (Optioneel) Kan worden gebruikt als merge field bij het aanmaken van inkooporderdocumenten en is ook zichtbaar en bewerkbaar op de Provisioning-pagina. |
| Supplier note | (Optioneel) Kan worden gebruikt als merge field bij het aanmaken van inkooporderdocumenten en is ook zichtbaar en bewerkbaar op de Provisioning-pagina. |
| PO Code | De code van de inkooporder wordt automatisch gegenereerd wanneer de order wordt opgeslagen. U kunt de code wijzigen totdat de status van de inkooporder is gewijzigd in "Sent to Supplier". |
| Type | Het type van de inkooporder wordt vastgelegd op het moment dat de order wordt aangemaakt. ShopCtrl ondersteunt [drie typen inkooporders](/User-Guide/09-Purchasing/Purchase-orders/creating-a-purchase-order.md): Regular, back-to-back, dropship. |
| Order Date | (Verplicht) De datum waarop de inkooporder is aangemaakt. U kunt deze niet meer wijzigen zodra de inkooporder naar de leverancier is verzonden of er een levering voor de inkooporder is aangemaakt. |
| Handover | De datum waarop het inkooporderdocument naar de leverancier is verzonden. |
| Expected | De verwachte leverdatum wordt ingesteld op basis van aankomende [leveringen](/User-Guide/09-Purchasing/Purchase-orders/creating-deliveries.md). U kunt deze ook handmatig instellen bij het aanmaken van een order. |
| Received | De datum van ontvangst. |
| Currency | (Verplicht) De valuta van de inkooporder. U kunt de valuta wijzigen totdat de inkooporder is goedgekeurd. |
| Destination | (Verplicht) Het magazijn waar de inkooporder naartoe gaat. |
| Supplier Invoice | Het nummer van de factuur van de leverancier, handmatig ingevoerd. |

### Totalen (excl. btw) {#totals-ex-vat}
Totale kosten van de inkooporder exclusief btw in de valuta van de shop

| Veld | Beschrijving |
| --- | --- |
| Subtotal | Wordt automatisch berekend op basis van de totale productkosten |
| Shipping cost | Kan handmatig worden ingevoerd op basis van een factuur van de leverancier |
| Discount, % | Het percentage geldt voor de hele order, inclusief de verzendkosten.  |
| Discount | Wordt berekend op basis van het vorige veld en in dit veld getoond. |
| Order total | Totaalbedrag van de inkooporder |

## Productdeelvenster {#products-pane}

### Actiemenu {#action-menu}
| Actie | Beschrijving |
| --- | --- |
| Add | Voegt een nieuwe productregel toe aan een inkooporder |
| Edit | Bewerkt de productregel |
| Delete | Verwijdert de productregel |
| More > Copy Row | Kopieert de productregel |


<img src={require("/img/po_overview_product_pane.png").default} height="" width="800" />

### Producttabel {#products-table}

Hier legt u de producten, het aantal, de prijs en de verwachte leverdatum vast.
Klik op de link van de productcode om de detailpagina van het product in een nieuw tabblad te openen. 

Beweeg de muis over het pictogram <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg>. Er verschijnt een pop-upvenster met de laatste 10 inkooporders voor dit product.

<img src={require("/img/po_overview_product_pane_last_10_purchases.png").default} height="" width="800" />

## Menu {#topic-menu}
### Contactgegevens {#contact-info}
#### Factuuradres {#bill-to}

Hier worden de contactgegevens van de **Buyer** (koper) vastgelegd. 
De inkooporder wordt aangemaakt op het niveau van de shop owner, en de gegevens bij 'Bill to' komen in eerste instantie uit de instellingen van de shop owner. 
De contactgegevens worden per inkooporder opgeslagen. U kunt de verzendgegevens van de order aanpassen zonder de contactgegevens van de shop owner bij te werken.

<img src={require("/img/PO_topic_menu_contact_info_bill_to.png").default} height="" width="600" />



#### Afleveradres {#ship-to}
Dit is het adres van het magazijn dat als bestemming voor de inkooporder is gekozen. 
Bewerk de velden en sla de inkooporder op om de contactgegevens van het gekozen magazijn bij te werken.

<img src={require("/img/PO_topic_menu_contact_info_ship_to.png").default} height="" width="800" />

### Status van de inkooporder {#purchase-order-status}

Hier kunt u een opmerking invoeren (optioneel) en de status van de inkooporder wijzigen.

<img src={require("/img/PO_topic_menu_po_statuses.png").default} height="" width="800" />

### (Vooraf) toegewezen orderregels {#pre-allocated-order-rows}
Nadat de gewone of back-to-back-inkooporder volledig of gedeeltelijk is ingeboekt, begint ShopCtrl de ontvangen voorraaditems toe te wijzen. 
Zo kunt u eenvoudig nagaan welke verkooporders met deze inkooporder worden uitgeleverd.
<img src={require("/img/PO_overview_topic_menu_preallocated_orderrows.png").default} height="" width="800" />

Klik op het pictogram <img src={require("/img/image30.png").default}  /> in de kolom met de ordercode om de verkooporder in een nieuw tabblad te openen.
Selecteer een orderregel van een verkooporder en klik op de knop **Deallocate** om de voorraad voor de gekozen order handmatig vrij te geven. De orderregel verdwijnt uit het deelvenster. Ga naar de pagina van de verkooporder om de voorraad opnieuw handmatig toe te wijzen.

### E-mail {#mail}

In dit deelvenster staan alle e-mails die voor deze inkooporder zijn aangemaakt en naar de leverancier zijn verzonden.
Dubbelklik op de rij van een e-mail om deze in een nieuw tabblad te openen.

<img src={require("/img/PO_topic_menu_mail.png").default} height="" width="800" />

### Leveringen {#deliveries}

Zodra de levering is aangemaakt (automatisch bij het inboeken of handmatig), kunt u deze hier bekijken.
Zie [Leveringen aanmaken](/User-Guide/09-Purchasing/Purchase-orders/creating-deliveries.md) voor meer informatie.

<img src={require("/img/PO_overview_topic_menu_Deliveries.png").default} height="" width="800" />

### Parameters {#parameters}

Hier ziet u een overzicht van de parameters die op deze inkooporder zijn toegepast. U kunt parameters op inkooporders vrij gebruiken. 
Voer een naam en waarde(n) in. 

<img src={require("/img/PO_overview_topic_menu_parametres.png").default} height="" width="800" />


### Voorraaditems {#stock-items}

Hier ziet u een overzicht van de geavanceerde voorraaditems die met deze inkooporder zijn geleverd.
Zie [Advanced Warehouse](/User-Guide/09-Purchasing/advanced-warehouse.md) voor meer informatie.

<img src={require("/img/PO_topic_menu_stock_items.png").default} height="" width="800" />