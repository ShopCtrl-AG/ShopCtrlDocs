---
sidebar_position: 4
slug: /docs/creating-return-label
description: "Genereer in ShopCtrl een retourlabel als pakket met de optie Return ingeschakeld, inclusief de voorwaarden voor de vervoerder en het afzendadres."
---
# Een retourlabel aanmaken

Een klant neemt contact met u op en wil een hele order of een paar artikelen daaruit terugsturen. Om de klant de goederen op uw kosten (of met uw vervoerderscontract) te laten terugsturen, kunt u in ShopCtrl een **retourlabel** genereren, afdrukken of naar de klant e-mailen.

Een retourlabel is een gewoon [pakket](/User-Guide/07-Fulfillment/creating-parcel.md) waarbij de optie **Return** is ingeschakeld. Het verschil met een gewoon verzendlabel is de richting: het pakket gaat **van de klant naar uw magazijn (of retouradres)**, dus het afzend- en het afleveradres zijn omgedraaid.

## Voordat u begint {#before-you-start}

Controleer of het volgende is ingesteld:

* Het **vervoerdersaccount** dat voor de retour wordt gebruikt, ondersteunt retourlabels. Niet elke vervoerdersintegratie kan via een tool van derden een retourlabel aanmaken. Raadpleeg de documentatie over [vervoerders](/User-Guide/02-ShopCtrl-Setup/05-Fulfillment/Carriers/index.md) voor uw vervoerder.
* Voor de shop is een **Default ship from address** ingevuld (**Shop Settings > Shipping > Default ship from address**). Dit adres wordt als retourbestemming gebruikt wanneer u handmatig een pakket aanmaakt.
* (Optioneel) Op het vervoerdersaccount is een apart **Return label template** geselecteerd (**Fulfillment > Carriers > carrier account**). Als er geen retoursjabloon is ingesteld, wordt het gewone sjabloon voor verzendlabels gebruikt.

:::warning[Let op]

Het veld **Default return address** in **Shop Settings > Shipping** wordt alleen gebruikt wanneer een retourpakket automatisch wordt gegenereerd (bijvoorbeeld via de API). Wanneer u het pakket zelf aanmaakt vanuit de order of de lijst met pakketten, vult ShopCtrl de retourbestemming in met het **Default ship from address** van de shop. Als de twee adressen verschillen, past u het adres op het pakket aan voordat u het opslaat.

:::

## Welke adressen worden gebruikt {#which-addresses-are-used}

Wanneer u op een order op **Create parcel** klikt, vult ShopCtrl het nieuwe pakket als volgt vooraf in:

| Veld | Waarde overgenomen van |
| --- | --- |
| Shop | De shop van de order |
| Carrier | Het vervoerdersaccount dat op de order is geselecteerd; anders het eerste vervoerdersaccount van de shop |
| Ship from | Het **Default ship from address** van de shop (**Shop Settings > Shipping**) |
| Ship to | Het **verzendadres (afleveradres) van de order**, niet het factuuradres |

Als u het selectievakje **Is return** aanvinkt, verwisselt ShopCtrl deze twee adressen bij het opslaan van het pakket. Het afleveradres van de klant wordt de afzender, en het afzendadres van uw shop wordt de ontvanger.

## Een retourlabel aanmaken vanuit de order {#creating-a-return-label-from-the-order}

<img src={require("/img/parcel-return-label.png").default} height="" width="800" />


1. Open de order die de klant wil retourneren en ga naar **Topic menu > Parcels**.
2. Klik op **Create parcel** en bevestig. De order wordt eerst opgeslagen en er opent een tabblad **New label**.
3. Selecteer de **Carrier** die de retour ophaalt.
4. Vink het selectievakje **Is return** aan. De deelvensters **Ship from** en **Ship to** wisselen van plaats: de klant wordt de afzender en uw magazijn of retouradres wordt de ontvanger.
5. Controleer beide adressen:
    * Alleen het **adres van de klant** kunt u rechtstreeks bewerken: gebruik het gereedschapspictogram op dat deelvenster om de straat, postcode, plaats of het land te corrigeren. De adresvelden in het andere deelvenster kunt u niet overschrijven.
    * De retourbestemming wordt overgenomen van de shop en hoeft normaal niet te worden gewijzigd. Als de goederen naar een **leverancier** moeten in plaats van naar uw eigen magazijn, bijvoorbeeld omdat de order is gedropshipt, selecteert u die leverancier in het veld **Ship to location** (dat **Ship from location** heet zolang **Is return** niet is aangevinkt). Het hoofdadres van de leverancier wordt dan als ontvanger gebruikt.
6. Vul de **Goods description** in en corrigeer het **gewicht** en de **afmetingen** van het pakket in de tabel met colli. Vervoerders controleren deze waarden, dus vul de gegevens in van het pakket dat de klant echt terugstuurt.
7. Stel eventuele extra **Carrier settings** in die de integratie nodig heeft.
8. Klik op **Save**. ShopCtrl vraagt de trackingcode en het label bij de vervoerder op.
9. Open het gedeelte **Label** van het pakket om de gegenereerde pdf te bekijken. Hier kunt u het label afdrukken, of downloaden en per e-mail naar de klant sturen.

:::tip

De knop **Create parcel** is niet beschikbaar bij een nieuwe order, een order in de wacht of een gearchiveerde order. Sla de order eerst op of haal deze uit de wacht.

:::

Een retourpakket staat in **Fulfillment > Parcels** met de kolom **Return** aangevinkt, en in het deelvenster **Parcels** van de order met de bezorgstatus **Return labels**. Gebruik het filter **Status** met de optie **Only return labels** in **Fulfillment > Parcels** om alle retourlabels te vinden.

## Een retourlabel aanmaken vanuit de lijst met pakketten {#creating-a-return-label-from-the-parcels-list}

U kunt ook vanuit de lijst met pakketten beginnen in plaats van vanuit de order, bijvoorbeeld als u meerdere retouren na elkaar afhandelt.

1. Ga naar **Fulfillment > Parcels**.
2. Klik op **Add** en selecteer de shop. Er opent een tabblad **New label**.
3. Typ en selecteer in het veld **Order** de code van de order waar de retour bij hoort. Het adres van de klant wordt ingevuld vanuit de order, net als wanneer u vanuit de order zelf begint.
4. Vink **Is return** aan en ga verder met stap 3 van de procedure hierboven.

:::warning[Let op]

U kunt het veld **Order** leeg laten, maar dan blijft het afleveradres leeg en moet u het adres van de klant handmatig invullen, en wordt het label niet aan een order gekoppeld. Selecteer altijd de order als de retour bij een order hoort.

:::

## Nadat de klant het pakket heeft verzonden {#after-the-customer-ships-the-parcel}

* Als de vervoerdersintegratie tracking ondersteunt, wordt de **pakketstatus** van het retourlabel automatisch bijgewerkt, zodat u ziet wanneer de klant het pakket echt heeft afgegeven. U kunt de status ook handmatig vernieuwen met **Refresh delivery status** op het pakket, of met **Check delivery status** in **Fulfillment > Parcels**.
* Registreer de terugkomende goederen in **Fulfillment > Returns** en verwerk de reden, de conditie en de afhandeling zoals beschreven in [Retouren beheren](./manage-returns.md).
* Als de klant het product houdt en alleen een vervangend product krijgt, volgt u in plaats daarvan [Een kosteloze vervangende levering versturen](./issuing-free-replacement.md).
