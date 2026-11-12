---
sidebar_position: 7
slug: /docs/virtualstock-master-sku-map
description: "Stuur met de master SKU map meerdere Virtualstock-producten (één per kleur) aan vanuit één masterproduct in ShopCtrl, en geef de kleurcode door aan geïmporteerde orders."
---

# Master SKU map

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Sommige retailers zetten één fysiek product op Virtualstock als meerdere producten (één per kleur of variant), terwijl u in ShopCtrl de voorraad voor maar één product beheert. De **master SKU map** verbindt ze: één **masterproduct** in ShopCtrl stuurt al zijn **varianten** op Virtualstock aan.

:::note

De master SKU map is standaard niet actief. Neem contact op met de support van ShopCtrl om deze voor uw shop in te schakelen. Zonder de map wordt elk Virtualstock-product gekoppeld aan het product in ShopCtrl met dezelfde SKU van de leverancier, zoals beschreven in [stap 4](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/product-and-stock-export.md).

:::

## Master, varianten en kleurcodes {#master-variants-and-colour-codes}

De SKU van een variant bestaat uit de master-SKU, gevolgd door een scheidingsteken en een **kleurcode**:

| ShopCtrl | Virtualstock | Kleurcode |
| --- | --- | --- |
| Masterproduct `LMP-2048` | `LMP-2048 WH` | `WH` |
| | `LMP-2048 BK` | `BK` |
| | `LMP-2048 GY` | `GY` |

- **Master-SKU** - de code van het product in ShopCtrl. Hier wordt de voorraad beheerd.
- **Variant-SKU** - de SKU van de leverancier voor één Virtualstock-product. Deze wordt gelezen uit het veld **Supplier SKU** dat in [stap 2](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/retailer-product-field-names.md) is ingesteld, en bevat de master-SKU.
- **Kleurcode** - het deel van de variant-SKU na het scheidingsteken. Ondanks de naam kan het voor elke variant staan: een kleur, een afwerking of een maat.
- **Scheidingsteken** - het teken tussen de master-SKU en de kleurcode: een spatie, een streepje of een teken naar keuze.

## Hoe het werkt {#how-it-works}

### Voorraadexport: één master, alle varianten {#stock-export-one-master-all-variants}

![Uw systeem stuurt de voorraad van master LMP-2048 naar ShopCtrl, dat deze naar alle drie de Virtualstock-varianten stuurt](/img/master-sku-stock-export.svg)

Als de voorraad of de levertijd van de master wijzigt, stuurt ShopCtrl dezelfde waarden naar **elke** variant in de map.

:::tip[Voorraad uit uw eigen systeem]

Als uw eigen systeem (bijvoorbeeld een ERP- of magazijnsysteem) via de ShopCtrl API voorraad naar ShopCtrl stuurt, werkt u **alleen het masterproduct** bij, in het voorbeeld `LMP-2048`. ShopCtrl geeft die voorraad door aan alle varianten op Virtualstock. De varianten hoeven niet in uw eigen systeem te bestaan.

:::

### Orderimport: van variant terug naar master {#order-import-variant-back-to-master}

![Een orderregel voor LMP-2048 BK wordt geboekt op master LMP-2048 met kleurcode BK en geëxporteerd naar uw systeem](/img/master-sku-order-import.svg)

Virtualstock stuurt een order voor een variant-SKU. ShopCtrl zoekt de master op in de map en boekt de orderregel op het **masterproduct**. De kleurcode blijft op de orderregel bewaard als eigenschap **Colour code**, zodat u weet welke variant u moet verzenden.

:::tip[Orders die naar uw eigen systeem gaan]

Wanneer ShopCtrl de order naar uw eigen systeem exporteert, bevat de orderregel het **masterproduct** (`LMP-2048`) met de eigenschap **Colour code** (`BK`). Gebruik de kleurcode om de juiste variant te picken en te verzenden.

:::

## Hoe varianten aan een master worden gekoppeld {#how-variants-are-matched-to-a-master}

Een SKU van de leverancier hoort bij een master als deze:

- precies gelijk is aan de master-SKU, **of**
- begint met de master-SKU, gevolgd door een van de ingeschakelde scheidingstekens.

Als meerdere masters overeenkomen, wint de **langste**. Met de masters `LMP-2048` en `LMP-2048 XL` hoort de SKU `LMP-2048 XL WH` bijvoorbeeld bij `LMP-2048 XL`, en niet bij `LMP-2048`.

Elke variant hoort bij maar één master.

## De master SKU map instellen {#setting-up-the-master-sku-map}

De map vindt u in **Configuration > Shops** > uw Virtualstock-shop > **Edit** > **Shop Synchronization > Edge Synchronization**, in het gedeelte **Master sku**. Dit gedeelte is standaard ingeklapt; klap het uit om de instellingen en de productkoppelingen te zien.

<img src={require("/img/edge-master-sku.png").default} height="" width="800" />

### 1. De scheidingstekens kiezen {#1-choose-the-separators}

Vink in het gedeelte **Split rule**, onder **Variant separators**, de tekens aan die in de SKU's van uw leverancier tussen de master-SKU en de kleurcode staan: **Whitespace**, **Dash ( - )** of een **Custom separator**. U kunt er meerdere tegelijk inschakelen. **Whitespace** staat standaard aan.

Om het resultaat te controleren, typt u een SKU van de leverancier in het veld **SKU to split** en klikt u op **Split**. De test gebruikt de opgeslagen instellingen, dus sla eerst op nadat u een scheidingsteken hebt gewijzigd.

### 2. Masters toevoegen {#2-add-masters}

1. Klik op **Suggest masters**. ShopCtrl doorzoekt de SKU's van de leverancier op Virtualstock en toont bestaande producten in ShopCtrl die master kunnen worden, met per product het aantal SKU's dat erbij zou horen en een paar voorbeelden.
    <img src={require("/img/edge-master-sku-suggest-masters.png").default} height="" width="800" />
2. Controleer de lijst. De voorstellen staan **nog niet** in de map. **Variants only** is standaard aangevinkt en verbergt producten die geen varianten op Virtualstock hebben.
3. Klik op **Add selected & merge** of **Add all & merge**. De producten worden als masters toegevoegd, en in dezelfde stap worden hun SKU's uit Virtualstock samengevoegd.

U kunt een master ook handmatig toevoegen: typ de productcode in het veld **add master product**.

### 3. Controleren en opslaan {#3-review-and-save}

1. Klik op **Load stored** om de huidige map te tonen.
2. Controleer de tabel. Deze toont één rij per master, met de gekoppelde SKU's van de leverancier: de eigen code van de master grijs weergegeven, de kleurcodes vetgedrukt. Om de varianten van een master te wijzigen, bewerkt u de lijst: één SKU per regel.
3. Klik op **Save map**.

U kunt de tabel ook naar Excel exporteren, of masters verwijderen met **Delete selected** of **Delete all (clear map)**. Verwijderingen worden toegepast wanneer u op **Save map** klikt.

### 4. Nieuwe varianten uit Virtualstock laden {#4-load-new-variants-from-virtualstock}

Als er nieuwe varianten op Virtualstock verschijnen, klikt u op **Adjust from Virtualstock** en kiest u:

- **Merge new supplier SKUs** - voegt nieuwe varianten toe aan de masters en behoudt alles wat al in de map staat, inclusief uw handmatige wijzigingen. Gebruik dit in het dagelijkse werk.
- **Rebuild (replaces manual edits)** - vervangt de hele map door wat Virtualstock nu stuurt. Handmatige wijzigingen gaan verloren.

Als er bij het samenvoegen varianten aan een master worden toegevoegd, markeert ShopCtrl die master voor voorraadexport, zodat de nieuwe varianten bij de volgende export de voorraad van de master krijgen.

### Automatische import {#automatic-import}

Stel **Import interval (hours)** onder **Automatic import** in om de map up-to-date te houden zonder op **Adjust from Virtualstock** te klikken. ShopCtrl voegt dan vlak voor het exporteren van voorraad nieuwe SKU's van de leverancier uit Virtualstock samen, hooguit één keer per interval. Laat het veld leeg als u alleen handmatig wilt samenvoegen.

De automatische import **voegt** altijd **samen**: uw handmatige wijzigingen blijven behouden. **Rebuild** gebeurt alleen als u daar zelf voor kiest.

:::note

De automatische import voegt alleen nieuwe varianten toe aan masters die **al in de map staan**. Er worden geen nieuwe masters toegevoegd. Gebruik daarvoor **Suggest masters** of voeg ze handmatig toe; zie [stap 2](#2-add-masters).

:::

## Problemen en oplossingen {#problems-and-fixes}

Bij een master of SKU in de tabel kan een label verschijnen als er iets aandacht nodig heeft. Klik op het label om de oplossing toe te passen.

| Label | Probleem | Oplossing |
| --- | --- | --- |
| **not on Virtualstock** | De SKU van de leverancier staat niet in de huidige catalogus van Virtualstock. Wordt getoond nadat u op **Reload from Virtualstock** hebt geklikt. | Klik om de SKU bij de master te verwijderen. |
| **own product** | De SKU van de leverancier is ook een eigen product in ShopCtrl. Standaard stuurt de master deze SKU aan, en wordt de eigen voorraadexport van dat product overgeslagen. | Klik om dat product in plaats daarvan als bron te gebruiken. **Use direct product as source** doet hetzelfde voor al deze SKU's tegelijk. |
| **standalone** | Een variant is een eigen master geworden en volgt de oorspronkelijke master daardoor niet meer. | Klik om de variant weer onder de oorspronkelijke master te plaatsen. |
| **no REST id** | ShopCtrl kent het Virtualstock-ID van deze SKU nog niet, dus de voorraadexport slaat deze over. | Voer **Adjust from Virtualstock > Merge new supplier SKUs** uit, of wacht op de volgende automatische import. |
| **⚠ missing product** | Het masterproduct bestaat niet meer in ShopCtrl. | Klik om de rij te verwijderen. |

:::tip

**Reload from Virtualstock** haalt de catalogus van Virtualstock op, zodat de tabel kan tonen welke SKU's niet op Virtualstock staan. De map wordt hierdoor niet gewijzigd, en de catalogus wordt 5 minuten bewaard.

:::
