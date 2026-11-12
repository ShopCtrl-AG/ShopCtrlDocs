---
sidebar_position: 3
slug: /docs/virtualstock-retailer-product-field-names
description: "Kies het profiel met productveldnamen van de retailer voor een Virtualstock-shop, en vergelijk de veldnamen van de profielen Standard en Special."
---

# Stap 2. Productveldnamen van retailers instellen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Virtual Stock gebruikt niet voor elke retailer dezelfde productstructuur. Elk product heeft een set attributen die de retailer zelf bepaalt, en de namen van die attributen verschillen per retailer. Dezelfde waarde kan daardoor onder verschillende namen binnenkomen: de ene retailer publiceert de SKU van de leverancier als `supplier_part_no`, de andere als `supplier_part_number`.

Dit is belangrijk, omdat ShopCtrl de SKU van de leverancier gebruikt als sleutel om offers in Virtual Stock aan producten in ShopCtrl te koppelen. Als de naam niet klopt, worden er geen offers gekoppeld en werken de product- en voorraadexport niet voor de shop.

Om het instellen eenvoudig te maken, biedt ShopCtrl twee kant-en-klare profielen:

- **Standard** - een gangbare implementatie van Virtual Stock, met de veldnamen uit de gepubliceerde voorbeelden van Virtual Stock zelf. Kies dit profiel voor een retailer die op de gebruikelijke manier is aangesloten.
- **Special** - een speciale set velden, waarvoor de connector oorspronkelijk is gebouwd. Dit is de standaardinstelling, zodat een bestaande shop die nooit is geconfigureerd precies zo blijft werken als voorheen.

Als uw retailer geen van beide sets precies volgt, past u het profiel toe dat er het dichtst bij komt en corrigeert u daarna de afzonderlijke veldnamen. De shop krijgt dan het profiel **Custom**.

## Een profiel selecteren {#selecting-a-profile}

1. Log in bij ShopCtrl met **Shop Owner Admin**-rechten.
2. Ga naar **Configuration > Shops**.
3. Selecteer uw Virtual Stock-shop en klik op **Edit**.
4. Ga naar **Shop synchronization > Edge Synchronization** en klap het gedeelte **Retailer product field names** uit.
5. Bekijk bij **Current profile** met welk profiel de opgeslagen instellingen van de shop overeenkomen.
6. Selecteer bij **Apply profile** het profiel **Standard** of **Special**. De veldnamen hieronder worden direct ingevuld, samen met de bijbehorende orderinstellingen (substatus voor bevestiging en backorder, leverdatum voor backorders en de optie voor de datum waarop een product weer op voorraad is).
7. Pas afzonderlijke velden aan die uw retailer anders noemt. Laat een veld **leeg** als de retailer het niet heeft: een leeg veld wordt nooit gelezen en nooit geschreven.
    <img src={require("/img/edge-retailer-product-field-names.png").default} height="" width="800" />
8. Klik op **Save** of **Save and Close**.

:::note

**Current profile** wordt bij elke keer opslaan opnieuw berekend op basis van de werkelijke instellingen. Als u na het toepassen van een profiel een waarde wijzigt, wordt de shop opgeslagen als **Custom**. U kunt Custom niet zelf selecteren: het is het gevolg van uw wijzigingen, geen keuze.

:::

:::important

Als u de veldnaam voor **Supplier SKU** wijzigt bij een shop die al is gekoppeld, voert u het [koppelen](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/product-and-stock-export.md) opnieuw uit en klikt u daarna op **Mark products for export**. Bestaande koppelingen zijn met de vorige sleutel gemaakt en worden niet automatisch bijgewerkt.

:::

## De profielen Standard en Special vergeleken {#standard-and-special-profiles-compared}

De tabel hieronder toont welke productveldnaam elk profiel gebruikt en wat ShopCtrl met het veld doet. Een lege cel betekent dat de retailer dit veld niet heeft, zodat het niet wordt gelezen of geschreven.

| Veld | Inhoud | Hoe ShopCtrl het gebruikt | Standard | Special |
| --- | --- | --- | --- | --- |
| **Supplier SKU** | De eigen SKU van de leverancier | Verplicht. De sleutel om offers aan producten te koppelen; zonder deze sleutel wordt niets gekoppeld | `supplier_part_number` | `supplier_part_no` |
| **Free stock** | Een attribuut van de retailer met een voorraadaantal | Gelezen bij het importeren van offers, en geschreven wanneer voorraad samen met een productupdate wordt verstuurd | `supplier_free_stock` | `free_stock` |
| **Lead time** | Levertijd van de leverancier, in dagen | Geschreven bij een productupdate, en gebruikt als bron voor de datum waarop een product weer op voorraad is | `lead_time_days` | `supplier_lead_time` |
| **Product name** | De productnaam | Alleen gelezen. Gekoppeld zodat het beschikbaar is, maar nog niet gebruikt | `product_name` | `name` |
| **Stock updated at** | Tijdstip van de laatste voorraadupdate | Alleen gelezen. Getoond in de export van de offer-/productkoppelingen | `stock_updated_at` | `stock_updated_at` |
| **Enrolment status** | De aanmeldstatus bij de retailer | Alleen gelezen. Getoond in de export van de offer-/productkoppelingen | *(leeg)* | `enrolment_status` |
| **Discontinued flag** | De markering van de retailer voor producten uit het assortiment | Alleen gelezen. Gereserveerd voor de afhandeling van producten uit het assortiment, nog niet gebruikt | `discontinued` | *(leeg)* |

Bij het toepassen van een profiel worden ook de volgende order- en voorraadinstellingen ingevuld:

| Instelling | Betekenis | Standard | Special |
| --- | --- | --- | --- |
| **Acknowledge sub-status** | Optionele tekst die wordt verstuurd wanneer een order wordt bevestigd. Leeg betekent dat er niets wordt verstuurd | `Order Acknowledged` | *(leeg)* |
| **Backorder sub-status** | Verplicht voor Virtual Stock, dus er wordt altijd een waarde verstuurd. Als het veld leeg is, wordt `Pending` gebruikt | `Stock Due In` | `Pending` |
| **Backorder delivery date** | Aantal dagen tussen verzending en levering, dat bij de backorderdatum wordt opgeteld en als leverdatum van de leverancier wordt verstuurd. Leeg betekent dat het veld niet wordt verstuurd; `0` verstuurt de backorderdatum ongewijzigd | `0` | *(leeg)* |
| **Back-in-stock date on zero stock** | Als voorraad als 0 wordt geëxporteerd, wordt ook een datum verstuurd waarop het product weer op voorraad is: vandaag plus de levertijd van het product | Ingeschakeld | Uitgeschakeld |

:::note

Sommige retailers weigeren een backorder zonder leverdatum van de leverancier. Als Virtual Stock backorders weigert, controleer dan eerst de instelling **Backorder delivery date**.

:::

Volgende stap: [Stap 3. Orderimport en -export instellen](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/order-synchronization.md)
