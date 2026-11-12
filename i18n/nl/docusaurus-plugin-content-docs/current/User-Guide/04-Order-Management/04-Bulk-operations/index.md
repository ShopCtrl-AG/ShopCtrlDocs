---
slug: /docs/bulk-operations
description: "Met Bulk Operations in ShopCtrl filtert u orders op ordercode, product of verzenddatum en voert u daarna één actie uit op de hele selectie."
---

# Bulk Operations


:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Admin** of **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

## Overzicht {#overview}
Met **Bulk Operations** filtert u orders op bepaalde voorwaarden en voert u een actie uit op die selectie orders. De actie op de selectie is het versturen van een e-mail die automatisch wordt gegenereerd op basis van het gekozen e-mailsjabloon.

Er zijn drie filtertypen beschikbaar:
* Specifieke ordercodes
* Orders met bepaalde producten
* Gewenste verzenddatum en specifieke producten en/of orderregelparameters
* Werkelijke verzenddatum en specifieke producten en/of orderregelparameters

Een bulkbewerking kan niet opnieuw worden gestart. Maak een nieuwe bulkbewerking aan als u deze nog eens wilt uitvoeren.
De lijst met e-mailsjablonen voor Bulk Operations bevat alleen gepubliceerde sjablonen van het type order die als selecteerbaar zijn gemarkeerd. Zie [E-mailsjablonen aanmaken en bewerken](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/creating-and-editing-email-templates.md) en [E-mailsjablonen beheren](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/managing-email-templates.md) voor meer informatie.
Om de resultaten te bekijken, gaat u terug naar de lijst **Bulk Operations**. De voortgangsbalk laat zien of het proces al klaar is.
Om de resultaten van een bepaalde bulkbewerking te bekijken, selecteert en opent u deze door op de rij te dubbelklikken of op de knop **View** te klikken. De resultaten worden getoond in het deelvenster **Orders**, samen met eventuele foutmeldingen. U kunt de resultaten van de bulkbewerking ook naar een Excel-bestand exporteren.

<img src={require("/img/specific-order-codes-process-report.png").default} height="" width="800" />

De e-mails die naar de klanten worden verstuurd, worden automatisch toegevoegd aan de **Conversation history** van de betreffende klanten en orders.

## Specifieke ordercodes {#specific-order-codes}

Met dit type selectie filtert u orders op shop en op specifieke ordercodes, en verstuurt u een e-mail op basis van het gekozen e-mailsjabloon.

<img src={require("/img/bulk-operations-specific-order-codes.png").default} height="" width="800" />

Een bulkbewerking aanmaken voor specifieke **ordercodes**:
1.  Ga naar **General > Bulk Operations**.
2.  Klik op **New** om een nieuwe bewerking aan te maken.
3.  Selecteer een **Shop**.
4.  Vul een **Description** van de bewerking in.
5.  Kies het filtertype: **Specific Order Codes**.
6.  Selecteer het type bewerking: **Send Email**.
7.  Selecteer het **Mail Template** dat u naar de klanten wilt sturen.
8.  Vul de **Order codes** in, gescheiden door een komma of door na elke code op `Enter` te drukken.
9.  Klik op **Apply filter** om te controleren of de ingevulde codes juist zijn en bij de opgegeven shop horen. Er opent een pop-upvenster met de resultaten van de controle. Als de selectie geldig is, wordt de lijst ook in het deelvenster met orders getoond. U kunt de lijst met orders controleren of afzonderlijke orders of klanten openen door op de pictogrammen in de orderregel te klikken.
 7. Zodra de ordercodes in orde zijn, kunt u beginnen. Klik op de knop **Start processing**. Het proces start op de achtergrond, zodat u de pagina kunt sluiten.

:::warning[**Let op:**]

Als een ordercode met een '0' begint, moet u die ook invullen. Anders worden de orders niet gevonden.

:::


## Orders met bepaalde producten {#orders-containing-products}

Met dit type selectie filtert u orders op:
* Shop
* Besteld product
* Orderstatus
* Periode waarin de order is ontvangen

<img src={require("/img/orders-containing-products-bulk-operations.png").default} height="" width="800" />

Een bulkbewerking aanmaken voor orders met een bepaald product:
1.  Ga naar **General > Bulk Operations**.
2.  Klik op **New** om een nieuwe bewerking aan te maken.
3.  Selecteer een **Shop**.
4.  Vul een **Description** van de bewerking in.
5.  Kies het filtertype: **Orders Containing Products**.
6.  Selecteer het type bewerking: **Send Email**.
7.  Selecteer het **Mail Template** dat u naar de klanten wilt sturen.
8.  Selecteer links een **Product Group**. Orders met ten minste één product uit deze groep worden gefilterd.
9.  (Optioneel) Standaard worden onderliggende groepen meegenomen in de zoekopdracht. U kunt dit wijzigen door de instelling **Search in child groups** uit te schakelen.
10.  (Optioneel) Vul een **Product Code** in. Als er ook een productgroep is geselecteerd, worden beide voorwaarden met AND gecombineerd (beide moeten gelden).
11.  (Optioneel) Klik op het pijltje in het filter **Status** en vink de orderstatussen aan die u in de selectie wilt opnemen.
>    Stel dat u alleen e-mails wilt sturen naar klanten die wachten tot een bepaald product in uw magazijn binnenkomt. Selecteer dan:
    >    * Main Status: Active, On hold
    >    * Stock Status: Unable to allocate, BackOrder.
12. (Optioneel) Selecteer een **Date Range** voor de orders die u in de selectie wilt opnemen.
13. Klik op **Apply filter**. De orders die aan de zoekopdracht voldoen, worden in het deelvenster met orders getoond.
14. Klik op de knop **Start processing** om het proces op de achtergrond te starten.
15. Vernieuw de pagina om de resultaten te bekijken, of exporteer de resultaten naar een Excel-bestand.

:::warning[**Let op:**]

Vul de **Product code** in zonder extra tekens, ook zonder spaties.
Orders die zijn geplaatst op de **Start**- en **End**-datum van het periodefilter, worden in de selectie opgenomen.

:::

## Verzenddatum en orderparameters {#shipping-date--order-parameters}

Bij dit filter worden orders geselecteerd op basis van de **Preferred shipping date** (gewenste verzenddatum) of **Actual shipping date** (werkelijke verzenddatum) van de zendingen van verkooporders. U kunt de selectie verder beperken op basis van **Product group**, **Product** en de waarden van **Order row parameters**.

<img src={require("/img/bulk-operations-preferable-shipping-date-actual-shipping-date.png").default} height="" width="800" />

Een bulkbewerking aanmaken voor orders op basis van de gewenste of werkelijke verzenddatum, het product en de orderparameters:
1.  Ga naar **General > Bulk Operations**.
2.  Klik op **New** om een nieuwe bewerking aan te maken.
3.  Selecteer een **Shop**.
4.  Vul een **Description** van de bewerking in.
5.  Kies het filtertype: **Pref. Shipping Date & Order Params**.
6.  Selecteer het **type verzenddatum**: **Actual Shipping Date** of **Preferred Shipping Date**.
7.  Geef het aantal dagen **vóór** of **na** de verzenddatum op.
8.  (Optioneel) Vul een bepaalde **Product Code** in en selecteer deze. Alleen orders met dit product worden in de selectie opgenomen.
9.  (Optioneel) Selecteer een **Product Group** om de selectie te beperken tot een bepaalde productgroep.
10.  (Optioneel) Geef de **Order Row Parameters** op: **Key** (naam) en **Value** die in de selectie moeten worden **opgenomen**.
11.  (Optioneel) Geef de **Order Row Parameters** op: **Key** (naam) en **Value** die van de selectie moeten worden **uitgesloten**.
12.  Klik op **Apply filter**. De orders die aan de zoekopdracht voldoen, worden in het deelvenster met orders getoond.
13.  Selecteer het type bewerking: **Send Email**.
14.  Selecteer het **Mail Template** dat u naar de klanten wilt sturen.
15.  Klik op de knop **Start processing** om het proces op de achtergrond te starten.
16.  Vernieuw de pagina om de resultaten te bekijken. Of klik op de knop **Export** om de verwerkte orders te downloaden.

:::info[]

U kunt het filter tussendoor testen nadat u een nieuw optioneel veld hebt toegevoegd, door op de knop **Apply filter** te klikken.

:::
:::warning[**Let op:**]

De getoonde orders hebben ten minste één **niet** verzonden zending met een gewenste verzenddatum vóór/na de hierboven ingestelde N dagen.
Vul de orderregelparameters precies zo in als ze bij het product zijn ingesteld, zonder extra spaties of tekens.
Er wordt naar orderregelparameters en producten gezocht, ongeacht de inhoud van de betreffende zending.

:::

U kunt dit filtertype voor bulkbewerkingen inplannen met de [Bulk Operation Scheduler](bulk-operations-scheduler.md).
