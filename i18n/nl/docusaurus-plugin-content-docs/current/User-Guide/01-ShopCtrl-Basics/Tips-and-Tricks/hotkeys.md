---
sidebar_position: 2
slug: /docs/hotkeys
description: "Sneltoetsen en deeplinks in ShopCtrl, waaronder snelle acties om ID's te kopiëren en rechtstreeks naar een record te linken."
---

# Sneltoetsen en deeplinks

We hebben verschillende sneltoetsen en deeplinkfuncties in het platform ingebouwd, zodat u sneller navigeert en efficiënter samenwerkt. Hieronder leest u hoe u ze gebruikt.

---

## Sneltoetsen {#hotkeys}

:::note
De volgende sneltoetsen werken op de meeste, maar niet op alle pagina's van het platform.
:::

| Sneltoets | Actie |
|----------|--------|
| **Esc** | Sluit het huidige tabblad. Als er een dialoogvenster open is, wordt in plaats daarvan het dialoogvenster gesloten. |

---
## Snel kopiëren {#quick-copy-actions}

Belangrijke ID's kopieert u nu met één klik. Deze sneltoetsen werken op **alle pagina's**.

### Een ID kopiëren {#copy-an-entity-id}

| Sneltoets | Actie | Resultaat |
|----------|--------|--------|
| **Shift** + klik | Houd `Shift` ingedrukt en klik op een detailtabblad (bijvoorbeeld een specifieke order, factuur of e-mail) | Het ID van het record wordt direct naar uw klembord gekopieerd. |

### ID's kopiëren uit tabellen {#copying-ids-from-grids}

Als u met tabellen werkt, kunt u één of meerdere ID's rechtstreeks uit de **kolom ID** kopiëren:

| Actie | Stappen | Resultaat |
|--------|-------|--------|
| Eén ID kopiëren | Klik direct op de ID-cel | Eén ID naar het klembord gekopieerd |
| Meerdere opeenvolgende ID's kopiëren | 1. Klik op de eerste ID-cel<br/>2. Houd de toets `Shift` ingedrukt<br/>3. Klik op de laatste ID-cel van de reeks | Geselecteerde ID's naar het klembord gekopieerd, gescheiden door komma's (bijvoorbeeld `12345, 12346, 12347`) |
| Meerdere niet-opeenvolgende ID's kopiëren | 1. Klik op de eerste ID-cel<br/>2. Houd de toets `Ctrl` ingedrukt<br/>3. Klik in willekeurige volgorde op afzonderlijke ID-cellen | Elk geselecteerd ID wordt aan het klembord toegevoegd, gescheiden door komma's (bijvoorbeeld `12345, 12348, 12352`) |

#### Tip: werken met voorraaditems {#pro-tip-working-with-stock-items}

Deze functie is vooral handig bij het beheren van voorraaditems:

1. Ga naar **Order > Stock items**.
2. Klik op één ID om het te kopiëren, of gebruik `Shift + Click` om een reeks items te selecteren.
3. Plak de ID's direct in het zoekveld om de resultaten te filteren (bijvoorbeeld bij de productdetails).

:::tip
Het zoekveld voor voorraaditems bij de order- of productdetails accepteert meerdere waarden, gescheiden door komma's. De functie voor het kopiëren van meerdere ID's zet de ID's precies in dit formaat.
:::

![ID's van voorraaditems kopiëren](/img/copy-stock-item-ids.png)

---

## Deeplinks: deel exacte locaties met collega's {#deep-links-share-exact-locations-with-colleagues}

Een van de krachtigste functies voor samenwerking is de mogelijkheid om een link te sturen die het platform op een heel specifieke plek opent. Zo ziet uw collega precies wat u ziet.

### Link naar een specifieke pagina {#link-to-a-specific-page}

| Sneltoets | Actie | Resultaat |
|----------|--------|--------|
| **Ctrl** + klik op de tabbladnaam | Open de pagina die u wilt delen (bijvoorbeeld een order of product) | Directe link naar het klembord gekopieerd |

**Voorbeeldlinks:**


Link naar de orderlijst: `https://{your-shopctrl-domain}?tab=OrderList`

![Link naar de orderlijst](/img/link-to-order-list.png)

Link naar een specifieke order: `https://{your-shopctrl-domain}?tab=Order|4923`

![Link naar een order](/img/link-to-order.png)

Als uw collega deze link opent, wordt het platform in een nieuw venster gestart en gaat het direct naar die specifieke order.


### Link naar een specifiek onderdeel van een detailpagina {#link-to-a-specific-topic-on-a-detail-page}

U kunt nog een stap verder gaan met een link die een specifieke detailpagina **en** een specifiek onderdeel daarvan opent (bijvoorbeeld het onderdeel Invoices van een order).

| Sneltoets | Actie | Resultaat |
|----------|--------|--------|
| **Ctrl + Shift** + klik op de tabbladnaam | Open de detailpagina (bijvoorbeeld een order) | Deeplink naar het klembord gekopieerd |

**Voorbeeldlink:**

Opent order 10983 en het onderdeel Invoices
`https://{your-shopctrl-domain}?tab=Order|10983&control=Invoices`

![Link naar een order](/img/link-to-order-and-topic.png)
