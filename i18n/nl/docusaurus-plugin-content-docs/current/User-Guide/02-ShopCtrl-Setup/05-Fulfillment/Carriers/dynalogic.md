---
sidebar_position: 4
slug: /docs/dynalogic
description: "Koppel de vervoerder Dynalogic aan ShopCtrl om zendingen te versturen, pdf-labels af te drukken, trackinggegevens te delen en verzendlabels te annuleren."
---
# Dynalogic 


<img src={require("/img/dynalogic_logo.png").default} height="" width="200" />

## Over Dynalogic {#about-dynalogic}

Dynalogic is een full-service bezorgspecialist en een aanvulling voor succesvolle bedrijven: Dynalogic verhoogt de waarde van het bestelde product.

Dynalogic biedt klanten een breed scala aan diensten:
* Levering op elk moment, 7 dagen per week (dezelfde dag, volgende dag, vroeg in de ochtend, 's middags of 's avonds)
* Levering op een tijdstip naar keuze
* Realtime track & trace via Dynalogic
* Zorgeloze diensten aan huis of aan de deur (reparatie, montage, assemblage, installatie)
* Distributienetwerk in de hele Benelux

ShopCtrl biedt een volledig geautomatiseerde integratie. U kunt zendingen rechtstreeks naar Dynalogic sturen, beperkingen voor de levertijd opgeven, pdf-verzendlabels ontvangen en afdrukken, uw klanten de trackingcode en tracking-URL geven, en aangemaakte pakketten beheren, inclusief het annuleren van verzendlabels bij Dynalogic.

3 ondersteunde typen verzendorders:
* Ophaalopdracht (Pick up order)
* Uitwisselen van documenten en apparaten met SWAP
* Ophalen bij de leverancier (Pick-up at Supplier)

## Aan de slag met de Dynalogic-integratie {#how-to-start-using-dynalogic-carrier-integration}
Om de Dynalogic-integratie te gebruiken, hebt u inloggegevens voor de API-integratie van de support van Dynalogic nodig, samen met het gegevensblad met aanvullende instellingen.
Een Dynalogic-testvervoerdersaccount aanmaken en configureren in ShopCtrl:
<img src={require("/img/carrier-dynalogic-settings.png").default} height="" width="800" />

1. Ga naar **Configuration > Transport > Carrier Accounts**.
2. Klik op **Add** en selecteer de vervoerder **Dynalogic** in de lijst.
3. Vul de gewenste **Name** voor de integratie in.
4. Stel de **Priority** van de vervoerder in.
5. Kies de **Shops** en/of **Warehouses** waarvoor de vervoerder beschikbaar is.
6. Controleer in het deelvenster **Specifics** of de vooraf ingevulde **Application** en **Version** overeenkomen met het gegevensblad van Dynalogic.
7.  **Application** - de naam van de applicatie die de Order Entry-verzoeken verstuurt
8.  **Version** - het versienummer van de methode (=1.1)
9. Vink het selectievakje **Use test environment** aan. De **Test url** is vooraf ingevuld met de standaardlink naar de stagingomgeving van Dynalogic.
10. Vul de **Login name** en het **Password** voor Ascima in die u van Dynalogic hebt gekregen.
11. Controleer of de vooraf ingevulde **Order entry version** en **Order change version** overeenkomen met het gegevensblad van Dynalogic.
12. (Optioneel) U kunt **Extended logging** inschakelen voor de testfase.
13. Vul de gegevens bij **Account info** in:
    1.  **Customer** - het klantnummer bij Dynalogic. Gebruik een van de klantnummers uit het gegevensblad dat u van uw accountmanager bij Dynalogic hebt gekregen.
    2.  **Supplier** - de leverancierscode. Deze bepaalt de leverancier van de geleverde producten, of bij een ophaalopdracht het retouradres voor de opgehaalde producten. Gebruik een van de leverancierscodes uit het gegevensblad dat u van uw accountmanager bij Dynalogic hebt gekregen.
    3.  **Earliest delivery time** - het begin van het afgesproken levervenster. Gebruik het tijdvak dat wordt voorgesteld in het gegevensblad van uw accountmanager bij Dynalogic.
    4.  **Latest delivery time** - het einde van het afgesproken levervenster.
    5.  **Warehouse location code** - de magazijncode van het magazijn van de leverancier. Gebruik een van de magazijncodes uit het gegevensblad dat u van uw accountmanager bij Dynalogic hebt gekregen.
14. Kies de **Default order kind**. Deze bepaalt het type verzendorders dat wordt aangevraagd. Gebruik een van de ordersoorten uit het gegevensblad dat u van uw accountmanager bij Dynalogic hebt gekregen.
    *  STDAFH | Afhaalopdracht (Pick up order)
    *  SWAP1Q | Omruilopdracht met instructie (Swap order with instruction)
    *  PULEV | Pick-up bij Leverancier (STD) (Pick-up at Supplier) 
15. Sla het nieuwe vervoerdersaccount op met **Save**.
16. U kunt nu op **Test connection** klikken om te controleren of de verbindingsgegevens juist zijn om verzoeken te versturen.

Bij autorisatiefouten controleert u of de ingevulde gegevens overeenkomen met het gegevensblad van Dynalogic, of neemt u contact op met de support van Dynalogic.
 
:::info

U kunt tussen de test- en de live-omgeving wisselen door het selectievakje **Use test environment** aan of uit te vinken.

:::
 
## Aanvullende zendingsparameters opgeven {#providing-additional-shipment-parameters}
 
De Dynalogic-integratie ondersteunt momenteel een aantal aangepaste parameters die u per zending handmatig kunt instellen.
Standaard worden alleen de afmetingen en het gewicht van het pakket naar Dynalogic gestuurd. Het standaard **Order kind type** stelt u in bij de instellingen van de vervoerder. Aanvullende parameters zijn standaard leeg.
 
 Om bij Dynalogic een zending met aangepaste parameters aan te maken, moeten we deze parameters handmatig opgeven bij het aanmaken van de zending.
 Hieronder staan de mogelijke parameters en waarden:
 
| Parameter | Mogelijke waarden en omschrijving |
| --- | --- |
| Order kind type | Het standaard Order kind type stelt u in bij de instellingen van de vervoerder. U kunt het handmatig wijzigen. |
| Driver Note | Tekstnotitie voor de chauffeur |
| Legitimation Kind | Als een identiteitscontrole nodig is. Soorten: Burger service nummer, Other, Paspoort, Rijbewijs |
| Legitimation ID | Nummer van het opgegeven legitimatiebewijs |
| Max delivery date | De datum waarop het pakket uiterlijk moet zijn geleverd |
| Min delivery date | De eerste dag waarop het pakket mag worden geleverd |
| No delivery from time | Beperking van het tijdvak |
| No delivery to time | Beperking van het tijdvak |
| Insurance option | Geef aan of een verzekering nodig is. € 500 - € 4000 |
| Sms ETA | True of False. Met ETA-meldingen blijven klanten op de hoogte van de locatie en het tijdstip van hun komende levering. |
| Age check | Niet vereist, minimumleeftijd 16, minimumleeftijd 18 |
| Allow neighbour delivery | True of False |
| Allow Saturday delivery | True of False |
| Allow Sunday delivery | True of False |

:::info

Geef bij het opgeven van het levertijdvak altijd beide datums op.

:::
 
 
 
 Een verzendorder met aangepaste parameters aanmaken bij Dynalogic:
 
1. Selecteer een order met toegewezen voorraad en klik op **Create Shipment**.
2. Klik in het deelvenster **Parcel** op de knop **Options** om de labelparameters te openen.
3. Geef in het deelvenster **Additional settings** de parameters voor het pakket op.
4. Klik op **Ok** om het venster te sluiten.
5. Controleer of de instelling **Create parcel on save** op true staat.
6. Sla de zending op met **Save** om de order met de ingevulde parameters bij Dynalogic aan te maken.
 <img src={require("/img/dynalogic-additional-parameters.png").default} height="" width="800" />
 
 
 U kunt nu het pakket bekijken en het label met de barcode afdrukken. Alle parameters die voor het pakket zijn ingesteld, worden ook op pakketniveau opgeslagen:
 
<img src={require("/img/dynalogic-parcel.png").default} height="" width="800" />
 
### Een pakket annuleren {#canceling-parcel}

Om een zending bij Dynalogic te annuleren, verwijdert u het pakket (met verzendlabel) in ShopCtrl. Er wordt dan automatisch een verzoek naar Dynalogic gestuurd. Zodra het verzoek is verwerkt, krijgt het pakket een tijdstempel bij **CanceledAt**.
<img src={require("/img/dynalogic-parcel-cancelled.png").default} height="" width="800" />
