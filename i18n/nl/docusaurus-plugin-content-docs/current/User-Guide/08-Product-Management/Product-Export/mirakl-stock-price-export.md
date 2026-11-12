---
sidebar_position: 3
slug: /docs/mirakl-stock-price-export
description: "Vergelijk de voorraad en prijzen in ShopCtrl met de actuele offers op Mirakl, corrigeer de verschillen en exporteer de vergelijking naar Excel."
---

# Voorraad- en prijsexport naar Mirakl

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop zijn gekoppeld om de acties in dit artikel uit te voeren.

:::

Zie [Mirakl](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/mirakl.md) voor het instellen van de koppeling en de synchronisatie. 

ShopCtrl stuurt regelmatig voorraad- en prijsupdates naar een marktplaats, maar **alleen als er iets aan het product verandert**. Na verloop van tijd kunnen offers echter uit de pas gaan lopen: producten worden op verschillende momenten in ShopCtrl en op Mirakl aangemaakt, sommige zijn niet gekoppeld en sommige zijn inactief.

Het scherm **Stock-price export** is er om **die verschillen te herstellen** en om **handmatig de gezondheid te controleren** van uw offers op de marktplaats. Het toont een actuele vergelijking tussen uw voorraad/prijs in **ShopCtrl** en de huidige offers op **Mirakl**, en u kunt correcties in bulk of rij voor rij doorsturen.

![mirakl-stock-price-export-state](/img/mirakl-stock-price-export-state.png)

## Wat u ziet {#what-youre-looking-at}

Elke rij vergelijkt één offer: de kant van ShopCtrl (actueel) met de laatst opgehaalde momentopname van Mirakl. Er is **één rij per offer**.

| Kolom | Betekenis |
|---|---|
| **ShopCtrl product** | Het product, met een klein rollabel: *master*, *mapped* of *standalone*. |
| **Marketplace SKU** | De `shop_sku` van het offer op Mirakl. |
| **Offer id** | De offer-id op Mirakl. **Klik erop** om alle details van het offer op de marktplaats te openen. |
| **Status** | De gezondheid van het offer: gesynchroniseerd, of wat er verschilt (voorraad, prijs, of ontbreekt aan één kant). |
| **Sync state** | Labels per onderdeel, *Stock …* en *Price …*, met tijdstempels in de tooltip. |
| **Export ref** | De import-id van Mirakl voor de laatst verzonden export. Typ deze in het filter om de hele batch op te halen. |
| **ShopCtrl (live)** | Qty / Price zoals ShopCtrl ze nu zou doorsturen. |
| **Marketplace (snapshot)** | Qty / Price zoals ze nu op Mirakl staan. |
| **Action** | Een oplossing met één klik voor de rij, als die van toepassing is. |

Gebruik **Refresh** om nieuwe offers van Mirakl op te halen en de vergelijking opnieuw op te bouwen, het **statusfilter** of het **tekstfilter** om de lijst te beperken, en **Download export state as Excel** om alles wat aan de huidige filters voldoet te exporteren.

## Verschillen in voorraad of prijs herstellen {#fixing-stock-or-price-differences}

Ziet u een rij waarin de voorraad of prijs in ShopCtrl en Mirakl verschilt, stuur dan de waarde uit ShopCtrl door naar de marktplaats. Dit is een **geforceerde export**: deze wordt verzonden, ook als de geplande synchronisatie dat niet zou doen (de geplande synchronisatie wordt alleen uitgevoerd als een waarde, voorraad of prijs, van een product verandert).

Er zijn drie manieren om te exporteren: **Export stock & price**, **Export stock** of **Export price**. Elk is een gesplitste knop met een menu voor het **bereik**:

- **Selected**: alleen de rijen die u hebt aangevinkt.
- **All drifting (DIFF)**: alle rijen die op dit moment niet gesynchroniseerd zijn.
- **All mapped (ALL)**: alle gekoppelde rijen, gesynchroniseerd of niet.

:::note

Welke knoppen beschikbaar zijn, hangt af van de instellingen **Product stock management** (voorraad) en **Shop product management** (prijs) van de shop.

:::
![mirakl-stock-price-diffs](/img/mirakl-stock-price-diffs.png)

Na het doorsturen ziet u in de kolommen **Export ref** en **Sync state** de import-id en of Mirakl de export heeft geaccepteerd.

## Producten die maar aan één kant bestaan {#products-that-exist-on-only-one-side}

In ShopCtrl worden producten per shop gepubliceerd (een **PSP**, *product selection product*). Soms komen er te veel producten in de selectie terecht: ze staan wel op uw andere marktplaatsen, maar niet op deze. Die verschijnen hier als **Missing in Marketplace**.

- Hoort het product echt **niet** op deze marktplaats, kies dan **Make inactive**. Het product wordt niet meer geëxporteerd en vervuilt de tabel niet langer.
- **Hoort** het product wel op de marktplaats, **maak het offer dan handmatig aan op Mirakl**. Bij de volgende synchronisatie wordt het gematcht met het product in ShopCtrl en wordt het mapped.

Het omgekeerde kan ook gebeuren: als een product in ShopCtrl een label **inactive** heeft, maar u ziet dat het offer wel op Mirakl bestaat, **activeer het dan handmatig** in ShopCtrl, zodat het weer wordt geëxporteerd.

Heeft Mirakl tot slot een offer **zonder bijbehorend product in ShopCtrl**, gebruik dan de actie **Create product** in de rij om er een aan te maken, zodat het offer kan worden gekoppeld.
![mirakl-products-with-actions](/img/mirakl-products-with-actions.png)
