---
sidebar_position: 1
slug: /docs/manage-returns
description: "Registreer en verwerk retouren van klanten in ShopCtrl via Fulfilment > Returns, met afhandelingen voor opnieuw verzenden, repareren, terugboeken op voorraad en creditfacturen."
---
# Retouren beheren



Retourverzoeken van uw klanten registreert en beheert u op de pagina **Fulfilment > Returns**.
Hier registreert u de producten die opnieuw moeten worden verzonden of gerepareerd. U boekt artikelen die terugkomen in het magazijn weer op voorraad en maakt automatisch een creditfactuur en de bijbehorende terugbetaling aan de klant aan.

<img src={require("/img/returns-table-overview.png").default} height="" width="800" />

U kunt eigen redenen en condities instellen voor de artikelen die worden geretourneerd. Meer informatie vindt u in [Retouren configureren](./configure-returns.md).

### Afhandelingen van retouren {#return-resolutions}

Er zijn verschillende **afhandelingen** (resolutions) die u op een geretourneerd product kunt toepassen:

- **Resend** - voor geretourneerde pakketten die opnieuw naar de klant moeten worden verzonden.
- **Repair** - voor producten die moeten worden gerepareerd en teruggestuurd naar de klant.

    *Bij de afhandelingen Resend en Repair wordt het product niet terug op voorraad in het magazijn geboekt.*
- **Exchange** - bij deze optie kunt u het geretourneerde artikel weer op voorraad in het magazijn boeken (ook als een ander product).
- **Refund** - hiermee boekt u het product weer op voorraad en betaalt u de klant terug.

## Een retour aanmaken {#creating-return}

Als u een retourmelding van een klant ontvangt, registreert u dit verzoek als eerste stap.

<img src={require("/img/create-return-product.png").default} height="" width="800" />

U kunt een retour aanmaken vanaf het tabblad **Fulfillment > Returns** of rechtstreeks via **Order details page > Topic menu > Returns** van de betreffende order.

Een retourverzoek registreren door een retour aan te maken:

1. Ga naar **Fulfillment > Returns**.
2. Klik op **Add** en selecteer in de vervolgkeuzelijst de shop van waaruit de order is verzonden. Er wordt een nieuwe retour op een nieuwe pagina geopend.
3. Typ en selecteer de code van de **Order** in het veld voor orders.
4. Selecteer het **magazijn** waar de retour naartoe gaat. Standaard is het magazijn geselecteerd van waaruit de order is verzonden.
5. U kunt nu een **opmerking** van de klant en **notities** invullen, of een **ticket** koppelen of aanmaken.
6. Selecteer zo nodig een **Follow Up**-datum.
7. Klik op **Save and close** om de wijzigingen in de retour toe te passen.

Zodra de retour in uw magazijn is aangekomen, kunt u de registratie afronden. De volgende stappen verschillen afhankelijk van of het product weer op voorraad moet worden geboekt of niet.

1. Open de retour om deze te bewerken.
2. Selecteer de datum en tijd bij **Received**.
3. Klik op **Add product** om een bepaald product uit de order te selecteren dat wordt geretourneerd. U kunt voor elk geretourneerd voorraaditem een aparte regel toevoegen.
4. (Of) klik op **Add All Products** om alle producten toe te voegen die voor de order zijn verzonden.
5. Voeg zo nodig een **notitie** aan de retour toe, en voeg **documenten** of andere relevante informatie bij.
6. Selecteer de regel van een ontvangen product en open deze om te bewerken.
<img src={require("/img/edit-return-row.png").default} height="" width="600" />
7. Selecteer een **Reason**: de reden waarom het product wordt geretourneerd.
8. Selecteer een **Condition**: de staat waarin het product is aangekomen.
9. Bepaal welke **Resolution** op het product wordt toegepast.
    * Als het product moet worden omgeruild (**Exchanged**) of terugbetaald (**Refunded**) en dus weer op voorraad moet worden geboekt, geeft u de locatie op waar het product naartoe gaat. Dat kan een quarantainelocatie zijn om het artikel van de gewone voorraad te scheiden.
    * (Optioneel) U kunt het artikel ook als een ander product op voorraad boeken.
    * Als de klant om een terugbetaling (**Refund**) vraagt, vult u het bedrag in dat wordt gecrediteerd, of laat u de standaardwaarde "Same as in Order" staan.
10. Klik op **Ok** om de wijziging op te slaan. Of klik op **Ok & Accept** om de status van de regel te wijzigen in **Accepted**.
11. Herhaal dit voor de andere geretourneerde producten.
12. Klik op **Save and Close** om de wijzigingen toe te passen.

### Een retour afronden {#finalizing-return}
Zodra voor elke retourregel een beslissing is genomen, kunt u de retour afronden en een creditfactuur aanmaken.

De retour afronden en de order terugbetalen:

1. Open de retour om deze te bewerken.
2. Klik op de knop **Finalize** in het actiemenu bovenaan.
<img src={require("/img/finalize-return.png").default} height="" width="600" />
4. Kies of u een creditfactuur wilt aanmaken (**Create credit invoice**) en een betaling voor de terugbetaling (**Сreate the payment for refund**).
5. Klik op **Finalize** om de creditfactuur te genereren, een betaling aan te maken, de ontvangen voorraaditems in het magazijn op te nemen en de status van de retour te wijzigen in afgerond.

De creditfactuur wordt gegenereerd op basis van het sjabloon dat voor de betreffende shop is ingesteld. De retourreden wordt samen met de retourcode bij de creditregel op de pagina met orderdetails getoond.
<img src={require("/img/order-credit-row-return.png").default} height="" width="800" />

De **retour**reden wordt ook als **credit**reden op de orderregel gebruikt.

<img src={require("/img/returns-credit-row.png").default} height="" width="800" />



:::warning[**Let op**]

Nadat de retour is afgerond, kunt u deze niet meer bewerken.

:::

## Retouren exporteren naar Amazon {#exporting-returns-to-amazon}

Om retouren die in ShopCtrl zijn aangemaakt naar Amazon te synchroniseren, schakelt u de functie **Export returns** in op het tabblad Shop Settings > Amazon Synchronization van de betreffende shop. Zie [Uw Amazon-synchronisatie instellen in ShopCtrl](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-3P/index.md#2-setting-up-amazon-shop-synchronization-in-shopctrl) voor meer informatie.

Nadat de functie **Export returns** is ingeschakeld, worden retouren die in ShopCtrl zijn aangemaakt naar Amazon gesynchroniseerd.
Op dit moment wordt alleen de afhandeling **Refund** ondersteund, en worden alleen retouren met deze afhandeling naar Amazon gesynchroniseerd.

Zodra u het geretourneerde artikel of de hele order ontvangt, registreert u deze in uw magazijn door een retour aan te maken met de bijbehorende reden en afhandeling. Bij het afronden van een retour kiest u of u een of meer artikelen of de hele order terugbetaalt.

Afgeronde retouren worden terug naar Amazon gesynchroniseerd, waarna Amazon de klant geheel of gedeeltelijk terugbetaalt.
