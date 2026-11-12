---
sidebar_position: 2.5
slug: /docs/purchase-order-suggestions
description: "Gebruik inkoopordervoorstellen in ShopCtrl om te zien welke producten u moet nabestellen en hoeveel, op basis van backorders, minimale voorraad en openstaande inkooporders."
---

# Inkoopordervoorstellen

:::info[**Vereiste rechten**]

Een medewerker heeft het recht nodig om inkoopordervoorstellen voor ten minste één shop te bekijken om deze pagina te kunnen openen.

:::

De pagina **Purchase order suggestions** toont welke producten u moet nabestellen en hoeveel. ShopCtrl berekent het aantal op basis van uw backorders, uw minimale voorraadniveaus, de voorraad die u hebt en wat al besteld is. Vanaf dezelfde pagina maakt u met een paar klikken een inkooporder voor een leverancier aan.

Ga naar **Purchasing > Purchase order suggestions** om de pagina te openen.

De pagina bestaat uit twee delen: links de voorgestelde **Products** en rechts de **Purchase order** die u aanmaakt.

<img src={require("/img/purchase-order-suggestions.png").default} height="" width="800" />

## Welke producten worden voorgesteld {#which-products-are-suggested}

Een product wordt voorgesteld wanneer **Keep stock** is ingeschakeld, het product niet is verwijderd en ten minste een van de volgende situaties van toepassing is:

- **Backorders** - het product staat op actieve orders waarvoor niet volledig voorraad kon worden toegewezen.
- **Lage voorraad** - de beschikbare voorraad is lager dan de **Minimum stock** van het product.

Een product wordt niet voorgesteld wanneer:

- Het is gemarkeerd als **End of life**.
- De voorraad die u hebt en de bestelde voorraad de behoefte al dekken. Zie [Hoe het benodigde aantal wordt berekend](#how-the-needed-quantity-is-calculated).

### Welke orders tellen als backorder {#which-orders-count-as-backorders}

Een orderregel telt alleen mee wanneer:

- De hoofdstatus van de order de basisstatus **Active** heeft.
- De voorraadstatus van de orderregel **Not enough stock**, **Not in stock** of **Pre allocated** is.

Orderregels met de status **Awaiting allocation** of **Deallocated** tellen niet mee. Als u bijvoorbeeld pas voorraad toewijst na betaling, worden onbetaalde orders pas in de voorstellen opgenomen wanneer er voorraad aan is toegewezen.

## Hoe het benodigde aantal wordt berekend {#how-the-needed-quantity-is-calculated}

ShopCtrl berekent voor elk product het aantal bij **Needed**:

> **Needed** = Unallocated + Min stock − Ordered − Available

Als u **Order to maximum stock level** aanvinkt, gebruikt ShopCtrl **Max stock** in plaats van **Min stock** voor producten waarvoor een maximaal voorraadniveau is ingesteld.

Voorbeeld: een product heeft 200 stuks in backorder, een minimale voorraad van 10, 50 stuks op een openstaande inkooporder en 5 stuks beschikbaar:

> 200 + 10 − 50 − 5 = **155** stuks nodig

### Kolommen {#columns}

| Kolom | Wat de kolom toont |
| --- | --- |
| **Needed** | Het te bestellen aantal, berekend zoals hierboven. |
| **Code** / **Name** | Het product. Klik op de code om het product te openen. |
| **Supplier** / **Price** | De leverancier van het product met de hoogste prioriteit en de inkoopprijs van die leverancier. |
| **Forecast PO** | Voorraad op prognose-inkooporders. Deze wordt ter informatie getoond en telt **niet** mee in **Ordered**. Klap de rij uit om de verwachte leverdatums te zien. |
| **Unallocated** | Het aantal op orderregels in backorder. |
| **Available** | Voorraad in huis min gereserveerde voorraad. |
| **Min stock** | Het minimale voorraadniveau dat op het product is ingesteld. Zie [Productfulfilment](/User-Guide/08-Product-Management/Product-Details/product-fulfillment.md). |
| **Ordered** | Voorraad op openstaande gewone en back-to-back-inkooporders die nog niet is ontvangen. |
| **On hand** | Voorraad op pick- en bulklocaties van uw eigen magazijnen en fulfilmentmagazijnen. |
| **Reserved** | Het deel van de voorraad in huis dat voor orders is gereserveerd. |

## Een inkooporder aanmaken vanuit voorstellen {#create-a-purchase-order-from-suggestions}

1. Ga naar **Purchasing > Purchase order suggestions**.
2. (Optioneel) Filter de producten:
    - Selecteer **All** of **Preferred supplier**.
    - Zoek op productcode of naam.
3. Selecteer de **Supplier** en het **Destination**-magazijn.
4. Selecteer producten in de lijst en klik op **Add selected**.
5. (Optioneel) Wijzig de **Quantity** of **Item price** van de regels. Aantallen worden afgerond op de besteleenheid van het product.
6. (Optioneel) Stel de opties in:
    - **Order to maximum stock level** - bestel tot **Max stock** in plaats van **Min stock**.
    - **Restrict selection to single supplier** - u kunt alleen producten van één leverancier aan de inkooporder toevoegen, en hun inkoopprijzen worden ingevuld.
    - **Mark as preferred supplier** - maakt deze leverancier de voorkeursleverancier voor de bestelde producten.
7. Klik op **Create**, of klik op de pijl ernaast voor meer opties:
    - **Create** - maakt de inkooporder aan.
    - **Create & show** - maakt de inkooporder aan en opent deze.
    - **Create & mail** - maakt de inkooporder aan en opent een e-mail aan de leverancier met het inkooporderdocument.

Nadat de inkooporder is aangemaakt, wordt de pagina leeggemaakt, zodat u de volgende kunt aanmaken.

## Instellingen die invloed hebben op voorstellen {#settings-that-affect-suggestions}

- **Product:** **Keep stock**, **Minimum stock**, **Maximum stock** en **End of life**. Zie [Productfulfilment](/User-Guide/08-Product-Management/Product-Details/product-fulfillment.md).
- **Leveranciers van het product:** de leverancier met de hoogste prioriteit wordt voorgesteld. Alleen actieve leveranciers worden gebruikt.
- **Magazijn:** het bestemmingsmagazijn moet een **Ship To**-adres hebben.

## Probleemoplossing {#troubleshooting}

### Een product staat niet in de lijst {#a-product-is-not-in-the-list}

Controleer het volgende:

- **Keep stock** is ingeschakeld voor het product en het product is niet gemarkeerd als **End of life**.
- De orderregels in backorder hebben de status **Not enough stock**, **Not in stock** of **Pre allocated**, en niet **Awaiting allocation** of **Deallocated**.
- De hoofdstatus van de orders heeft de basisstatus **Active**.
- Het benodigde aantal is groter dan 0. Voorraad op openstaande inkooporders en beschikbare voorraad verlagen dit aantal.
- Het filter staat op **All** en het zoekveld is leeg.
- Het product is nog niet toegevoegd aan de inkooporder rechts.
- Als de pagina al open was, sluit u deze en opent u de pagina opnieuw om de nieuwste gegevens te laden.

### De knop Create is uitgeschakeld {#the-create-button-is-disabled}

Selecteer een **Supplier** en een **Destination**-magazijn en voeg ten minste één product toe.

### Foutmeldingen {#error-messages}

| Bericht | Wat te doen |
| --- | --- |
| Unable to create a Purchase Order, please specify Bill To information for the Shop Owner. | Vul de **Bill To**-gegevens van de shop owner in. |
| The selected Warehouse does not have a ShipTo address specified. | Voeg een **Ship To**-adres toe aan het bestemmingsmagazijn. |
