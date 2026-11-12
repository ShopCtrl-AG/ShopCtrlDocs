---
sidebar_position: 2
slug: /docs/creating-parcel
description: "Pakketten in ShopCtrl leggen de vervoerder, de dienst, de trackingcode, het verzendlabel en de afmetingen van het pakket vast, ook bij zendingen met meerdere pakketten."
---
# Een pakket aanmaken



In de standaard fulfilmentprocessen wordt bij het [aanmaken van een zending](/User-Guide/07-Fulfillment/creating-shipment.md) ook een **pakket** (Parcel) en een **verzendlabel** (Shipping label) aangemaakt via een integratie met een [vervoerder](/User-Guide/02-ShopCtrl-Setup/05-Fulfillment/Carriers/index.md).
Een magazijn kan zo worden ingesteld dat verzendlabels automatisch worden gegenereerd met vooraf ingestelde vervoerders.

Een **pakket** legt vast met welke vervoerder en dienst de zending is verzonden, en bevat de trackingcode, het verzendlabel en de afmetingen van het pakket.
Dankzij de geïntegreerde PIM-functionaliteit kan ShopCtrl niet alleen [de beste vervoerder voor een order kiezen](/User-Guide/02-ShopCtrl-Setup/05-Fulfillment/Carriers/managing-carriers.md), maar ook eenvoudig bepalen of een order in één doos past of over meerdere pakketten moet worden verdeeld.
Als de vervoerdersintegratie dit ondersteunt, wordt de trackingstatus van het pakket gevolgd en verandert de **pakketstatus** mee.

<img src={require("/img/parcel-overview.png").default} height="" width="800" />

Als er **meerdere pakketten** nodig zijn, kan ShopCtrl het gewicht en/of de afmetingen van het pakket schatten, zodat de vervoerder de juiste informatie krijgt. Een pakket kan, afhankelijk van de configuratie van de vervoerder, uit meerdere colli bestaan. Als de vervoerder dit ondersteunt, maakt deze meerdere labels en trackingreferenties aan.

:::warning[Let op]

Niet alle vervoerders ondersteunen meerdere pakketten in combinatie met tools van derden zoals ShopCtrl.

:::

## Verzendlabels afdrukken en doorsturen {#printing-and-forwarding-shipping-label}

Nadat het **verzendlabel** is gegenereerd en er een afbeeldingsbestand in ShopCtrl beschikbaar is, zijn de volgende scenario's mogelijk:

* Een magazijnmedewerker drukt het label af op de eigen werkplek.
* ShopCtrl stuurt het label naar een printdienst in de cloud.
* ShopCtrl uploadt het label naar een FTP-locatie voor verder gebruik in externe applicatie(s), zoals een WMS.
* ShopCtrl meldt een externe applicatie dat het label is gegenereerd (via een [webhook](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/webhooks.md)). De externe applicatie vraagt het label op via de API.
* ShopCtrl e-mailt het label naar een bepaalde leverancier of andere partij.

Het pakket wordt ook direct gekoppeld aan de oorspronkelijke verkooporder, en de trackinggegevens kunnen [naar de klant worden doorgestuurd](/User-Guide/07-Fulfillment/tracking-update.md).


### Een pakket handmatig aan een zending koppelen {#how-to-manually-assign-a-parcel-to-a-shipment}

Het kan gebeuren dat een pakket handmatig is aangemaakt en nog aan een zending moet worden gekoppeld.

Een pakket aan een zending koppelen:

<img src={require("/img/assign-parcel-to-shipment.png").default} height="" width="800" />

1. Ga naar **Fulfillment > Shipments**.
2. Zoek een zending en open deze om te bewerken.
3. Klik in het deelvenster **Parcels** op **Select**. Er opent een pop-upvenster met alle niet-gekoppelde pakketten van de shop in het systeem.
4. Typ een deel van de trackingcode om het juiste pakket te vinden.
<img src={require("/img/select-parcel.png").default} height="" width="800" />
5. Dubbelklik op de rij van het pakket of klik op **Apply**.
6. Het geselecteerde pakket en de trackinggegevens worden in het deelvenster met pakketten getoond.
<img src={require("/img/assigned-parcel.png").default} height="" width="" />
7. Klik op **Save** of **Save and Close** om de wijzigingen voor de zending toe te passen.
