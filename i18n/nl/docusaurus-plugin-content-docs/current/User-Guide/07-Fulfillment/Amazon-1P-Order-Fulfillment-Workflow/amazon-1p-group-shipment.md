---
sidebar_position: 3
slug: /docs/amazon-1p-group-shipment
description: "Combineer zendingen in ShopCtrl tot een Amazon 1P-groepszending en verstuur Advanced Shipment Notifications, inclusief integratie met pakbestanden."
---

# Amazon 1P-groepszending



Groepszendingen en het versturen van Advanced Shipment Notifications (ASN's) naar Amazon zijn beide essentiële onderdelen van logistiek en ketenbeheer, vooral voor leveranciers die producten via het platform van Amazon verkopen.

Een groepszending (Group Shipment) combineert meerdere afzonderlijke zendingen met dezelfde bestemming tot één zending. Advanced Shipment Notification (ASN): een ASN is een vooraankondiging die leveranciers naar Amazon sturen om te melden dat een zending is verzonden en onderweg is naar een van de fulfilmentcentra van Amazon.

In ShopCtrl zijn het aanmaken van groepszendingen en het versturen van ASN's naar Amazon naadloos geïntegreerd in de workflow voor logistiek en ketenbeheer.

###  Groepszendingen aanmaken met de pakintegratie {#creating-group-shipments-with-pack-integration}

Met de [pakintegratie](/User-Guide/02-ShopCtrl-Setup/05-Fulfillment/integration-with-wms-via-ftp.md) verwerkt ShopCtrl efficiënt de inpakgegevens die een extern Warehouse Management System (WMS) doorgeeft, en neemt deze op in elke zending. Artikelen kunnen in dozen worden verpakt en op pallets worden geplaatst, of zonder dozen rechtstreeks op pallets worden gestapeld. Alle relevante artikelgegevens worden vastgelegd in de inpakgegevens van de zending, die daarna worden samengevoegd in de inpakgegevens van de groepszending.

Daarnaast maakt deze integratie het mogelijk nieuwe groepszendingen aan te maken op basis van de aangeleverde pakbestanden. Het systeem gaat ervan uit dat een csv-bestand gegevens voor meerdere orders bevat, en maakt op basis daarvan een groepszending aan. Let op: de afzonderlijke zendingen voor elke order moeten in deze fase al zijn aangemaakt en gepickt.
Groepszending met samengevoegde inpakgegevens:
<img src={require("/img/group-shipment-packed.png").default} height="" width="800" />

Als er bij het verwerken van het pakbestand verschillen optreden, maakt ShopCtrl meldingen aan in de groepszending om de betrokken medewerkers op de problemen te wijzen:

<img src={require("/img/group-shipment-discrepancies-alert.png").default} height="" width="800" />

**Beheer van inpakgegevens:** bij het aanmaken van een groepszending kunt u de inpakgegevens beheren en bijwerken. Zo kunt u het totale gewicht van elke rij in de groepszending aanpassen, zodat de verzendgegevens nauwkeurig en actueel zijn.

### Handmatig een groepszending aanmaken: {#how-to-manually-create-a-group-shipment}

1. **Log in** als medewerker met het recht om groepszendingen aan te maken.
2. Ga naar **Fulfillment > Shipments**.
3. Zoek en selecteer meerdere openstaande zendingen die uit hetzelfde magazijn komen en dezelfde bestemming hebben.
4. Klik in het menu bovenaan op **Action** en selecteer **Add to group**.
5. Er verschijnt een nieuw scherm waarin u kiest of u de geselecteerde zendingen aan een bestaande groepszending toevoegt of er een nieuwe groepszending van maakt.
<img src={require("/img/add-several-shipments-to-group-shipments.png").default} height="" width="800" />

6. Kies **Add to a new group shipment** om een nieuwe groepszending met de gekozen zendingen aan te maken. Zorg dat de afleveradressen van alle geselecteerde zendingen identiek zijn.

Met deze stappen maakt u handmatig een groepszending aan, waarin meerdere afzonderlijke zendingen met dezelfde bestemming tot één zending worden samengevoegd voor een gestroomlijnde logistiek.

### Een groepszending bewerken {#how-to-edit-group-shipment}

1. Log in als medewerker met het recht om groepszendingen aan te maken en te bewerken.
2. Ga naar de pagina **Fulfillment > Group shipments**.
3. Zoek de groepszending die u wilt bewerken en open deze.
4. Controleer of de adressen bij "**Ship From**" en "**Ship To**" van de groepszending kloppen. Om ze aan te passen, klikt u op het tandwielpictogram naast het adres bij "Ship To" en wijzigt u de gegevens van de bestemming.
5. Om nog een zending aan de groep toe te voegen, klikt u op de knop **Add** in het deelvenster Shipments.
6. Vul in het venster dat verschijnt de **zendingscode** in, of zoek en selecteer de gewenste zending. Klik op **Add** om de zending aan de groep toe te voegen. Zorg dat alle toegevoegde zendingen hetzelfde afleveradres hebben.
7. Kies zo nodig een andere **Carrier** uit de beschikbare lijst.
8. Pas in het deelvenster Topic zo nodig het **gewicht** en de **afmetingen** van de pallets en dozen aan. Deze gegevens zijn belangrijk, omdat ze naar de vervoerder worden gestuurd en in de Advanced Shipment Notification (ASN) aan Amazon worden opgenomen.
9. Sla de groepszending op met **Save** zodra alle wijzigingen klaar zijn.
10. Als de groepszending klaar is voor verzending, genereert u een verzendlabel door op de knop **Create Parcel** in het menu bovenaan te klikken.
11. Bevestig uw acties wanneer daarom wordt gevraagd. De link naar het pakket wordt getoond.
<img src={require("/img/group-shipment-label-created.png").default} height="" width="800" />
12. Voer eventuele verdere stappen uit, zoals **documenten afdrukken** en het inpakken afronden.

Met deze stappen bewerkt u een groepszending, zodat de gegevens kloppen en de logistiek efficiënt verloopt.

## De ASN naar Amazon sturen: {#submitting-asn-to-amazon}

Zodra de groepszending klaar en ingepakt is, kunt u eenvoudig een Advanced Shipment Notification (ASN) rechtstreeks vanuit ShopCtrl versturen.

De ASN is een volledig document met belangrijke informatie over de groepszending, waaronder trackinggegevens, inhoud, hoeveelheden, verwachte leverdatums en andere gegevens die Amazon nodig heeft voor een efficiënte verwerking en voorraadbeheer.

Doordat Amazon vooraf wordt geïnformeerd over binnenkomende zendingen, kan het platform zich beter voorbereiden op het ontvangen en verwerken van de voorraad.

Het versturen van een ASN is een handmatige actie, en kan pas nadat er een verzendlabel met bijbehorende trackingcode is aangemaakt.

Zo verstuurt u een ASN:

1. Log in als medewerker met het recht om groepszendingen te bewerken.
2. Ga naar de pagina **Fulfillment > Group Shipment**.
3. Zoek de gewenste groepszending en open deze om te bewerken.
4. Controleer of de afmetingen van de verpakking kloppen.
5. Klik op de knop **Submit ASN**.

Na het klikken op de knop wordt een verzoek om de ASN te versturen aangemaakt, dat op de achtergrond wordt verwerkt. Zodra het verzoek is verstuurd en door Amazon is geaccepteerd, toont de verstuurde ASN een tijdstempel.

<img src={require("/img/group-shipment-asn-submitted.png").default} height="" width="800" />


U kunt de ASN voor de groepszending ook opnieuw versturen door nogmaals op de knop Submit ASN te klikken.

ShopCtrl is ontworpen om naadloos met de systemen en API's van Amazon samen te werken, voor een efficiënte communicatie en gegevensuitwisseling tussen beide platforms.

Automatiseringsfuncties in ShopCtrl kunnen het versturen van ASN's verder stroomlijnen, zodat u minder handwerk hebt en het fulfilmentnetwerk van Amazon snel en juist wordt geïnformeerd.
