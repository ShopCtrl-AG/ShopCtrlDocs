---
sidebar_position: 4
slug: /docs/virtualstock-orders
description: "Stap 3 van het instellen van Virtualstock: schakel orderimport, bevestiging, backorderdatums en de export van track & trace in."
---

# Stap 3. Orderimport en -export instellen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Twee selectievakjes in **Functional Settings > Order features** bepalen wat er met orders gebeurt:

- **Order synchronization** importeert orders en annuleringsverzoeken uit Virtual Stock.
- **Order integration** stuurt informatie terug naar Virtual Stock: bevestigingen, backorderdatums en trackinggegevens.

Geen van beide werkt zolang de hoofdschakelaar **Enabled** uit staat. Zo kunt u eerst alles voorbereiden en daarna onderdeel voor onderdeel inschakelen.

Alle instellingen op deze pagina vindt u in **Configuration > Shops** > uw Virtual Stock-shop > **Edit** > **Shop Synchronization > Edge Synchronization**.

## 1. De instellingen voorbereiden {#1-prepare-the-settings}

Zolang **Enabled** uit staat, wordt er niets geïmporteerd of verstuurd. U kunt dus veilig alles instellen.

1. Vink in **Functional Settings** de optie **Order synchronization** aan en laat **Enabled** uit.
   <img src={require("/img/edge-functional-settings-order-synchronization-only.png").default} height="" width="400" />
2. Stel in het gedeelte **Orders** de waarde **Closed order prescription (days)** in. Openstaande orders worden altijd geïmporteerd; deze instelling geldt alleen voor gesloten orders:
   - **Leeg** - alle gesloten orders worden geïmporteerd.
   - **0** - er worden geen gesloten orders geïmporteerd.
   - **X** - alleen gesloten orders die in de afgelopen X dagen zijn geplaatst, worden geïmporteerd (aanbevolen bij het eerste instellen).
   <img src={require("/img/edge-functional-settings-orders.png").default} height="" width="800" />
3. Controleer of **Accept order at** op **OrderAllocated** staat. Orders worden bevestigd zodra ze volledig zijn toegewezen.
4. Maak een orderregelparameter aan met precies de naam `BackorderDate` (type date). **Backorder date configuration** bevestigt wanneer deze is gevonden.
5. Controleer de retailerspecifieke waarden. Deze worden ingevuld door het profiel dat u in [stap 2](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/retailer-product-field-names.md) hebt toegepast:

    | Instelling | Special | Standard |
    | --- | --- | --- |
    | **Backorder delivery date** | *(leeg - niet verstuurd)* | Aantal dagen tussen verzending en levering, of `0` |
    | **Acknowledge sub-status** | *(leeg - niets verstuurd)* | `Order Acknowledged` |
    | **Backorder sub-status** | `Pending` | `Stock Due In` |

    De substatussen zijn vrije tekst die u met de retailer afspreekt. Wijzig ze dus als uw retailer andere bewoordingen gebruikt. Sommige retailers weigeren een backorder zonder leverdatum; laat op een Standard-account daarom **Backorder delivery date** ingevuld.
6. Klik in **Carrier Mapping** op **Show carriers** en koppel elke vervoerder in ShopCtrl aan de bijbehorende **Edge Carrier code**. Gebruik alleen de codes, niet de ID's of namen.
   <img src={require("/img/edge-carrier-account-mapping.png").default} height="" width="800" />
7. **Track&Trace shipments** staat standaard aan. Laat deze optie aan als de vervoerders zijn gekoppeld; vink deze anders voorlopig uit.
8. Bepaal of u **Acknowledge cancellations** wilt gebruiken; zie [onderdeel 4](#4-acknowledge-cancellations-optional).
9. Klik op **Save** of **Save and Close**.

## 2. Orders importeren {#2-import-orders}

1. Vink **Enabled** aan. Laat **Order integration** uit.

   <img src={require("/img/edge-sync-enabled-main-flag.png").default} height="" width="400" />
2. Klik op **Save** of **Save and Close**.
3. Controleer de geïmporteerde orders in ShopCtrl. Op dit moment worden alleen imports uitgevoerd; er wordt nog niets naar Virtual Stock gestuurd.

## 3. Ordergegevens naar Virtualstock sturen {#3-send-order-information-to-virtualstock}

Als de geïmporteerde orders er goed uitzien:

1. Vink **Order integration** aan.

   <img src={require("/img/edge-functional-settings-order-integration.png").default} height="" width="400" />
2. Klik op **Save** of **Save and Close**.

Vanaf nu ziet de retailer wat ShopCtrl verstuurt:

- **Bevestiging** - verstuurd zodra een order volledig is toegewezen.
- **Backorderdatum** - als een order niet volledig kan worden toegewezen, vult u `BackorderDate` in bij de regels die niet beschikbaar zijn, in de interface of via de API. ShopCtrl stuurt de laatste datum naar Virtual Stock. Zonder datum wacht ShopCtrl tot de order volledig is toegewezen.
- **Tracking** - verstuurd wanneer een zending op verzonden wordt gezet, als **Track&Trace shipments** aan staat.

Controleer de eerste orders in het portaal van Virtual Stock om te zien of ze aankomen zoals verwacht.

## 4. Annuleringen bevestigen (optioneel) {#4-acknowledge-cancellations-optional}

Annuleringsverzoeken worden altijd geïmporteerd. U bepaalt zelf hoe ze aan Virtual Stock worden bevestigd:

- **Uit** (standaard) - u bevestigt elke annulering handmatig in het portaal van Virtual Stock.
- **Aan** - ShopCtrl bevestigt annuleringen automatisch, zolang de order nog niet in behandeling is.

Om dit in te schakelen, vinkt u **Acknowledge cancellations** aan in het gedeelte **Orders** en slaat u op. **Order integration** moet ook aan staan.

Elke geannuleerde regel wordt één keer bevestigd, zodat ook regels die de retailer later annuleert worden meegenomen.

:::caution

Orders waarvan de zendingen al worden afgehandeld, worden nooit automatisch bevestigd. Een bevestiging zou de retailer laten weten dat de order is geannuleerd terwijl de goederen al zijn verzonden, en dat kan niet worden teruggedraaid. ShopCtrl toont in dat geval een melding, zodat u de order handmatig kunt afhandelen.

:::

:::tip

Om de hele integratie te pauzeren, bijvoorbeeld terwijl u een probleem onderzoekt, vinkt u **Enabled** uit en slaat u op. De andere selectievakjes behouden hun waarde, dus als u **Enabled** weer aanvinkt, is alles weer zoals het was.

:::

Volgende stap: [Stap 4. Voorraadexport van producten instellen](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Edge/product-and-stock-export.md)
