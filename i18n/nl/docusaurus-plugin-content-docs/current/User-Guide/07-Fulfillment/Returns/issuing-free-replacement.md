---
sidebar_position: 2
slug: /docs/issuing-free-replacement
description: "Stuur in ShopCtrl een kosteloze vervangende levering naar een klant wanneer een product beschadigd aankomt en de koper het oorspronkelijke artikel houdt."
---
# Een kosteloze vervangende levering versturen


Dit artikel beschrijft de situatie waarin een besteld product tijdens het transport is beschadigd en er een vervangend product naar de klant moet worden gestuurd, terwijl de koper het oorspronkelijke product mag houden.

## Een kosteloze vervangende levering naar een klant sturen {#how-to-issue-a-free-replacement-to-a-customer}

Nadat een klant heeft gemeld dat een artikel beschadigd is, doorloopt u de volgende stappen:

1. Ga naar **Sales > Orders**, zoek de order waarvoor u een vervangend product moet sturen en open deze.
2. Klik in het deelvenster met producten op de pagina met orderdetails op **Add**.
3. Zoek en selecteer het product dat moet worden verstuurd.
<img src={require("/img/add-product-zero-price.png").default} height="" width="400" />
4. Pas de hoeveelheid van het product aan.
5. Wijzig de productprijs in 0.00 (ervan uitgaande dat de vervanging kosteloos is).
6. Sla de order op met **Save** om de wijzigingen toe te passen.
7. (Optioneel) Afhankelijk van uw instellingen voor toewijzing moet u de orderregel mogelijk handmatig toewijzen. Selecteer hiervoor de nieuwe orderregel en klik in het deelvenster met producten op **More > Allocate stock**.
<img src={require("/img/allocate-new-order-row.png").default} height="" width="800" />
8. Een nieuwe zending aanmaken voor het vervangende product:
  1. Klik op **Fulfillment > Create Shipment**.
  2. Wijzig zo nodig de **Carrier**.
  3. Sla de zending op met **Save**. Er wordt automatisch een nieuw label gegenereerd en aan het aangemaakte pakket gekoppeld.
<img src={require("/img/create-shipment-replacement.png").default} height="" width="800" />

      4. Pick, pak en verzend het pakket.
9. Geef het nieuwe trackingnummer door aan de klant.
