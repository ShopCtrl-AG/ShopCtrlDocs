---
sidebar_position: 6
slug: /docs/creating-deliveries
description: "Maak leveringen aan voor een inkooporder in ShopCtrl om deelzendingen te plannen en op te geven welke producten wanneer en op welke verwachte datum aankomen."
---

# Leveringen aanmaken 


Met **Deliveries** (leveringen) beheert u op een nieuwe manier groothandelszendingen van bestelde goederen naar uw magazijn. 
Als de inkooporder in één keer wordt geleverd, hoeft u niet handmatig een levering voor de inkooporder aan te maken. Boek de ontvangen goederen in via Provisioning. ShopCtrl maakt dan automatisch een levering aan voor de bijbehorende inkooporder.
Stel dat een inkooporder in delen wordt geleverd. Dan is het belangrijk om te weten welke producten wanneer worden geleverd, en de verwachte datum daarop af te stemmen. 
Door een levering voor de inkooporder aan te maken, kunt u per levering opgeven welke producten u verwacht.

## Een levering aanmaken voor een inkooporder {#creating-a-delivery-for-a-purchase-order}
Zo maakt u een levering aan voor de inkooporder:

1. Ga op de detailpagina van de inkooporder naar **Topic Menu > Deliveries**. 
<img src={require("/img/delivery_04.png").default} height="" width="800" />

2. Klik op **Add delivery**. Er verschijnt een pop-upvenster.
<img src={require("/img/delivery_03.png").default} height="" width="800" />

3. Voer een **Expected Delivery Date** in of kies er een. Dit is een verplicht veld voor leveringen.
4. Voer in de lijst met bestelde producten de verwachte hoeveelheid per product in. Laat 0 staan als het product met de volgende levering wordt verwacht. 
5. Klik op **Ok** om de levering op te slaan. De eerste levering staat nu in de lijst.
<img src={require("/img/delivery_06.png").default} height="" width="800" />
6. Klik nogmaals op **Add** delivery om de tweede levering aan te maken. Daarna staan beide leveringen in de lijst.
<img src={require("/img/delivery_08.png").default} height="" width="800" />
7. Ga verder met andere leveringen. Het aantal leveringen is onbeperkt.
7. Wanneer alle producten aan leveringen zijn toegevoegd, wordt de knop **Add Delivery** uitgeschakeld. Klik op **Save** of **Save and Close** om de inkooporder op te slaan.


## Menu Deliveries {#deliveries-menu}

:::info[]

De knoppen worden zichtbaar wanneer een rij met een levering is geselecteerd.

:::

| Knop | Beschrijving |
| --- | --- |
| Add delivery | Maakt een nieuwe levering aan voor de inkooporder|
| Edit delivery | Bewerkt de bestaande levering |
| Delete delivery | Verwijdert de bestaande levering |
| Provision | Opent een nieuwe Provisioning-pagina voor de geselecteerde levering |
| Recalculate Expected delivery Date | De verwachte leverdatum wordt automatisch berekend wanneer de eerste levering wordt ingeboekt. Met deze knop berekent u de verwachte datum in de tussenliggende periode handmatig opnieuw. |

### Berekening van de verwachte leverdatum {#the-expected-delivery-date-calculation}

Bij het aanmaken van een levering voor de inkooporder wordt per levering de verwachte leverdatum ingesteld. Volgens de huidige instellingen van ShopCtrl wordt de verwachte leverdatum van de inkooporder ingesteld op de vroegste leverdatum. 
Nadat het eerste pakket is ingeboekt, wordt de verwachte leverdatum van de hele inkooporder gewijzigd in de datum van het volgende pakket. Zo heeft de inkooporder altijd de verwachte datum van de eerstvolgende levering.

:::info[]

Op dit moment ondersteunt ShopCtrl alleen de berekeningsmethode op basis van de vroegste verwachte datum. Het is wel mogelijk een andere methode toe te voegen, afhankelijk van uw wensen.

:::

## Inkooporders met meerdere leveringen inboeken {#provisioning-purchase-orders-with-several-deliveries}

<img src={require("/img/provision_delivery_04.png").default} height="" width="800" />

Zo boekt u een inkooporder met twee of meer leveringen in:
1. Open de Provisioning-pagina:
    * Vanuit de hoofdtabel met inkooporders:
        1.  Zoek de inkooporder die u wilt inboeken en klik op de knop **Provision** in de rij van de inkooporder. 
        2. U kunt ook een inkooporder zoeken en selecteren en op de knop **Provision** in het actiemenu bovenaan klikken. Als er voor de inkooporder twee of meer leveringen bestaan, kiest u voordat u verdergaat de levering die u wilt inboeken. 
    * Op de detailpagina van een inkooporder:
        1. Ga naar Topic menu > Deliveries. Kies de levering die is aangekomen.
2. Er wordt een Provisioning-pagina voor de levering geopend in een nieuw tabblad. Voer de ontvangen goederen in of scan ze. 
3.  Selecteer een **Location** waar de goederen worden opgeslagen.
4.  Klik op **Save**, sluit de pagina en druk zo nodig labels af.

Nadat de eerste levering is ingeboekt, wordt de lijst met leveringen bijgewerkt:

<img src={require("/img/provision_delivery_05.png").default} height="" width="800" />

De verwachte datum van de inkooporder wordt automatisch ingesteld op de datum van de volgende levering. De Provisioning-status van de inkooporder wordt gewijzigd in "Partially delivered".
