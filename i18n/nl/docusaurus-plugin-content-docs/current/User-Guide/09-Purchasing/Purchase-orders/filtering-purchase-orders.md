---
sidebar_position: 3
slug: /docs/filtering-purchase-orders
description: "Alle filters voor de tabel met inkooporders in ShopCtrl, waaronder zoeken op trefwoord en filters op status, leverancier en datum."
---

# Inkooporders filteren 



Hier vindt u een uitgebreid overzicht van de filters voor de tabel met inkooporders.

## Zoeken op trefwoord {#search-by-keyword}
Het filter **Keyword** toont alle inkooporders die overeenkomen met het opgegeven trefwoord. Er wordt gezocht in de code van de inkooporder, de bedrijfsnaam van de leverancier, de volledige naam van de leverancier en de referentie (die bij dropship- en back-to-back-inkooporders de code van de verkooporder bevat),
> U kunt bijvoorbeeld zoeken op de code van een verkooporder om de dropship- of back-to-back-inkooporder te vinden die voor deze verkooporder is aangemaakt.

<img src={require("/img/PO_overview_05.png").default} height="" width="600" />

## Filteren op status {#filter-by-status}

| Status | Beschrijving |
| --- | --- |
| All | Alle aangemaakte inkooporders, ook afgeronde en geannuleerde |
| Active | Inkooporders met de hoofdstatus "Active" of "On Hold" |
| Not Sent | Inkooporders met de verzendstatus draft of ordered |
| Not Paid | Inkooporders met de betaalstatus "Not paid" of "Partially paid" |
| Not Provisioned | Inkooporders met de Provisioning-status "Not provisioned" of "Partially provisioned" |
| Not Received in Time | Te late inkooporders waarvoor een verwachte leverdatum is ingesteld |

Selecteer een status om alle bijbehorende orders te tonen. 
Standaard staat dit filter op **Active** en toont het inkooporders met de hoofdstatus "Active" of "On Hold".

<img src={require("/img/PO_filter_Status.png").default} height="" width="600" />

## Filteren op leverancier {#filter-by-supplier}
Begin met het typen van de bedrijfsnaam of de volledige naam van de leverancier. Het systeem toont dan een lijst met beschikbare leveranciers.
<img src={require("/img/PO_filter_Supplier_Search.png").default} height="" width="600" />

Een klik op <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill-rule="evenodd" d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"></path></svg> opent een nieuw venster met de volledige lijst met beschikbare leveranciers.

<img src={require("/img/PO_Select_Supplier.png").default} height="" width="400" />


Zodra de leverancier is gekozen, wordt een weergaveknop ingeschakeld. Een klik op <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M16.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L20.94 3h-3.69a.75.75 0 01-.75-.75z"></path><path d="M3.25 4a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 01.75.75v3.19l3.72-3.72a.75.75 0 01.53-.22h10a.25.25 0 00.25-.25v-6a.75.75 0 011.5 0v6a1.75 1.75 0 01-1.75 1.75h-9.69l-3.573 3.573A1.457 1.457 0 015 21.043V18.5H3.25a1.75 1.75 0 01-1.75-1.75V4.25c0-.966.784-1.75 1.75-1.75h11a.75.75 0 010 1.5h-11z"></path></svg>   opent een venster om de leverancier te bewerken in een nieuw tabblad.

<img src={require("/img/PO_filter_Supplier_View_Button.png").default} height="" width="600" />

Een klik op  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill-rule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"></path></svg>  maakt het veld met de leverancier leeg en zet het filter terug.

## Filteren op magazijn {#filter-by-warehouses}
Kies een ingeschakeld magazijn om alle bijbehorende inkooporders te tonen. Standaard staat het filter op **All Warehouses**. 

## Filteren op type inkooporder {#filter-by-purchase-order-type}
Standaard staat het filter op **All Types**. Kies een van de ondersteunde typen om de bijbehorende inkooporders te bekijken.
<img src={require("/img/PO_filter_Type.png").default} height="" width="600" />

:::info[**Let op:**]

De filters worden teruggezet naar hun standaardwaarden nadat de pagina is gesloten. Als u de pagina vernieuwt, blijven de toegepaste filters behouden.

:::