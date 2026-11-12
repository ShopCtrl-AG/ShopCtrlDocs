---
sidebar_position: 4
slug: /docs/trigger-action-condition
description: "Gebruik de actie Condition in een trigger in ShopCtrl om eigenschappen van records te controleren en de overige acties te stoppen of door te laten gaan."
---

# Trigger-actie: Condition

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Met de actie **Condition** bepaalt u het verloop van een trigger op basis van eigenschappen van records. In plaats van eigen code te schrijven of voor elke situatie een aparte trigger aan te maken, voegt u voorwaarden toe die tijdens de uitvoering worden gecontroleerd en bepalen of de overige acties doorgaan of stoppen.

## Hoe het werkt {#how-it-works}

Wanneer een trigger wordt uitgevoerd, worden de acties van boven naar beneden uitgevoerd. Wanneer een actie Condition aan de beurt is, controleert deze een of meer regels aan de hand van de actuele gegevens. Afhankelijk van het resultaat gaan de overige acties door of stopt de uitvoering.

![Trigger-voorwaarde voor een product](/img/trigger-condition-product.png)

### Actiemodus {#action-mode}

| Modus | Werking |
| --- | --- |
| **Continue executing when** | De overige acties worden alleen uitgevoerd als aan de voorwaarde is voldaan. Zo niet, dan stopt de uitvoering. |
| **Stop executing when** | De overige acties worden overgeslagen als aan de voorwaarde is voldaan. Zo niet, dan gaat de uitvoering door. |

![Stoppen of doorgaan met Trigger-voorwaarden](/img/stop-continue-trigger-conditions.png)

### Voorwaarden {#conditions}

Elke voorwaarde bestaat uit:

- **Entity** — het record dat wordt gecontroleerd (bijvoorbeeld Order, Customer, Ticket, Product)
- **Property** — een bepaald veld van dat record (bijvoorbeeld Main Status, Order Code, Total Due)
- **Operator** — de manier van vergelijken (bijvoorbeeld Equals, Contains, Before, Is Null)
- **Value** — de waarde waarmee wordt vergeleken

Als er meerdere voorwaarden zijn ingesteld, kunt u ze combineren met:

- **AND** — aan alle voorwaarden moet zijn voldaan
- **OR** — aan minstens één voorwaarde moet zijn voldaan

### Bronnen voor de waarde {#value-sources}

De waarde waarmee wordt vergeleken, kan uit verschillende bronnen komen:

| Bron | Omschrijving |
| --- | --- |
| **Value** (vast) | Een vaste waarde die u typt of in een vervolgkeuzelijst selecteert |
| **Property** | Vergelijken met een eigenschap van een ander record op het moment van uitvoeren |
| **Date Variable** | Een relatieve datum zoals "Today + 7 Days" (alleen beschikbaar voor datumeigenschappen) |

### Beschikbare operatoren {#available-operators}

Welke operatoren beschikbaar zijn, hangt af van het gegevenstype van de eigenschap:

| Gegevenstype | Operatoren |
| --- | --- |
| **Tekst** | Equals, Not Equal, Contains, Doesn't Contain, Starts With, Ends With, In List, Not In List, Is Empty, Is Not Empty, Is Null, Is Not Null |
| **Getal** | Equals, Not Equal, Greater Than, Greater Than or Equal, Less Than, Less Than or Equal, Between, Is Null, Is Not Null |
| **Datum** | Equals, Not Equal, Before, After, On or Before, On or After, Between, Is Null, Is Not Null |
| **Boolean** | Equals, Not Equal, Is True, Is False, Is Null, Is Not Null |
| **Lookup** (status, type) | Equals, Not Equal, In List, Not In List, Is Null, Is Not Null |

Voor **Order Parameters**, **Order Row Parameters** en **Product Properties** zijn twee extra operatoren beschikbaar:

| Operator | Omschrijving |
| --- | --- |
| **Has Param** | Controleert of de parametersleutel bij het record bestaat (ongeacht de waarde) |
| **Has No Param** | Controleert of de parametersleutel niet bij het record bestaat |

### Speciale operatoren {#special-operators}

Met **In List / Not In List** controleert u of een waarde overeenkomt met een van meerdere opties:
- Voor **Lookup**-eigenschappen (statussen, typen): er verschijnt een veld waarin u meerdere waarden uit een vervolgkeuzelijst kunt kiezen.
- Voor **tekst**eigenschappen: er verschijnt een tekstveld waarin u waarden invult, gescheiden door komma's (bijvoorbeeld `ORD-001, ORD-002, ORD-003`).

![Operator In List in een Trigger-voorwaarde](/img/trigger-condition-inlist-operator.png)

**Between** is beschikbaar voor getal- en datumeigenschappen. Er verschijnen twee invoervelden (From en To) waarmee u een bereik opgeeft. Aan de voorwaarde is voldaan als de waarde binnen het opgegeven bereik valt.

![Between voor datum en getal in een Trigger-voorwaarde](/img/order-trigger-condition-date-number-between.png)

### Vergelijkingsmodus voor datums {#date-comparison-mode}

Als u een datumeigenschap selecteert, verschijnt een schakelaar **"Date only" / "Date + time"**. Hiermee bepaalt u of de tijd wordt meegenomen in de vergelijking:
- **Date only** (standaard): de tijd wordt genegeerd. Twee datums op dezelfde dag gelden als gelijk, ongeacht de tijd.
- **Date + time**: de volledige datum en tijd worden vergeleken. Handig wanneer het precieze moment ertoe doet.

### Beschikbare records {#entity-availability}

De voorwaarde kan alleen records controleren die in de context van de trigger beschikbaar zijn. Welke records beschikbaar zijn, hangt af van de Trigger-gebeurtenis:

| Trigger-gebeurtenis | Beschikbare records |
| --- | --- |
| Gebeurtenissen voor orders | Order, Customer |
| Gebeurtenissen voor tickets | Ticket, Customer, Order (als het ticket aan een order is gekoppeld) |
| Gebeurtenissen voor facturen | Invoice |
| Gebeurtenissen voor inkooporders | Purchase Order |

![Vergelijking van ticketeigenschappen in een Trigger-voorwaarde](/img/ticket-property-comparison-trigger-condition.png)

:::tip
Als een voorwaarde verwijst naar een record dat niet in de context van de trigger beschikbaar is, hangt het resultaat af van de operator: **Is Null** geeft true, **Is Not Null** geeft false, en elke andere operator leidt tot een fout.
:::

## Voorbeelden van workflows {#workflow-examples}

### 1. Geen e-mail voor interne orders {#1-skip-email-for-internal-orders}

Stuur alleen een orderbevestiging naar externe klanten, niet bij interne orders of testorders.

**Instellingen:**
- Event: New order added
- Action 1: **Condition** — Continue executing when Order → Order Code → Doesn't Contain → "TEST"
- Action 2: Send email — sjabloon voor orderbevestigingen

![Trigger-voorwaarde: geen e-mail voor interne orders](/img/trigger-condition-skip-email-for-internal-orders.png)

### 2. Orders met een hoge waarde laten controleren {#2-route-high-value-orders-for-review}

Maak een melding aan voor orders boven een bepaald bedrag, zodat ze vóór de verwerking kunnen worden gecontroleerd.

**Instellingen:**
- Event: New order added
- Action 1: **Condition** — Continue executing when Order → Total Due → Greater Than → 1000
- Action 2: Create alert — "High-value order requires review"

![Orders met een hoge waarde laten controleren](/img/route-high-value-orders-for-review.png)

### 3. Andere afhandeling per ordertype {#3-different-handling-based-on-order-type}

Voorkom dat de trigger een zending aanmaakt als de order een serviceorder is (die niet fysiek hoeft te worden verzonden).

**Instellingen:**
- Event: Order main status changed (specifieke status: "Approved")
- Action 1: **Condition** — Stop executing when Order → Order Type → Equals → "Service Order"
- Action 2: Allocate stock
- Action 3: Create shipment

![Trigger-voorwaarde: andere afhandeling per ordertype](/img/different-handling-based-on-order-type-trigger-condition.png)

### 4. Alleen automatisch factureren bij orders met een bepaalde parameter {#4-auto-invoice-only-for-orders-with-a-specific-parameter}

Maak alleen een factuur aan als de order een eigen parameter "auto-invoicing" met de waarde true heeft. Zo bepaalt u per order of er wordt gefactureerd, zonder aparte triggers aan te maken.

**Instellingen:**
- Event: Order shipment status changed
- Action 1: **Condition** — Continue executing when Order → Order Parameter → "auto-invoicing" → Equals → "true"
- Action 2: Create invoice
- Action 3: Send Invoice

![Trigger-voorwaarde: alleen automatisch factureren bij orders met een bepaalde parameter](/img/auto-invoice-only-for-orders-with-a-specific-parameter-trigger-condition.png)

### 5. Alleen orders met bepaalde statussen verwerken {#5-process-only-orders-in-specific-statuses}

Verwerk alleen orders met een van de toegestane statussen, en sla orders over die in de wacht staan of zijn gepauzeerd.

**Instellingen:**
- Event: Order changed
- Action 1: **Condition** — Stop executing when Order → Main Status → In List → "On Hold, Paused"
- Action 2: Allocate stock
- Action 3: Create shipment

U kunt ook de omgekeerde aanpak gebruiken en alleen bepaalde statussen expliciet toestaan:

- Action 1: **Condition** — Continue executing when Order → Main Status → In List → "New, Approved, Processing"

![Trigger-voorwaarde: alleen orders met bepaalde statussen verwerken](/img/trigger-condition-process-only-orders-in-specific-statuses.png)
