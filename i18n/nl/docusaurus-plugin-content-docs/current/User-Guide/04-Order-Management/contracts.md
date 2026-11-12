---
sidebar_position: 5
slug: /docs/contracts
description: "Met contracten in ShopCtrl worden volgens een vast schema automatisch orders aangemaakt tegen afgesproken prijzen, met per product een eigen frequentie, zoals maandelijks of per kwartaal."
---

# Contracten

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Power User** of hoger aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Met contracten worden orders automatisch aangemaakt in vooraf ingestelde perioden, op basis van de prijzen die in de overeenkomst zijn afgesproken. U kunt ook instellen hoe vaak de producten in de geplande orders voorkomen.
U kunt bijvoorbeeld instellen dat product A elke maand aan de order wordt toegevoegd en product B maar één keer per drie maanden.

## Een contract aanmaken {#create-contract}
<img src={require("/img/create-contract-details.png").default} height="" width="800" />

Een nieuw contract aanmaken:

1. Open de pagina **Sales > Contracts**.
2. Klik op **Add** en selecteer in de vervolgkeuzelijst de **shop** waarvoor u een contract wilt aanmaken. De detailpagina van het nieuwe contract wordt in een nieuw tabblad geopend. De valuta van het contract is de valuta van de gekozen shop.
3. Selecteer een **Customer**.
4. Vul de **Contract name** in.
5. Selecteer een **Start**- en **End**-datum voor het contract. Of laat de einddatum op de standaardwaarde "No end date" staan als er geen einddatum is afgesproken.
6. (Optioneel) Vul een omschrijving van het contract in.
7. (Optioneel) Geef de **Order Customer Reference** op die na het aanmaken van de order naar de orderdetails wordt gekopieerd.
:::info[**Let op**]

Er zijn een aantal **merge fields voor contracten** die u in de klantreferentie kunt gebruiken. Klik op het plusteken om de lijst te bekijken. Selecteer een merge field en klik erop om het in het referentieveld in te voegen. Bij het genereren van de order wordt het merge field vervangen door de bijbehorende contractgegevens. Lijst met merge fields:
`$$PeriodFrom$$`
`$$PeriodFromMonthNameShort$$`
`$$PeriodFromMonthName$$`
`$$PeriodFromYear$$`
`$$PeriodUntil$$`
`$$PeriodUntilMonthNameShort$$`
`$$PeriodUntilMonthName$$`
`$$PeriodUntilYear$$`
`$$ContractCode$$`
`$$ContractName$$`

:::
8. Klik op **Add Product**, en zoek en selecteer het **Product** dat aan het contract wordt toegevoegd.
9. Nadat het product is toegevoegd, kunt u de prijsinstellingen van het product opgeven. Klik op **Edit Row** om de productregel van het contract te bewerken.
    <img src={require("/img/edit-contract-row.png").default} height="" width="400" />
    * Kies een **Price mode**:
        * Actual price - de order wordt aangemaakt met de actuele prijs van de shop.
        * Fixed tier price - geef een prijs per stuk op, afhankelijk van de bestelde hoeveelheid.
        *In het voorbeeld hieronder verschilt de prijs afhankelijk van het aantal bestelde producten. Vanaf een hoeveelheid van drie wordt de laatst opgegeven prijs gebruikt.*
          <img src={require("/img/edit-contract-row-tierprice.png").default} height="" width="400" />
        * Stacked tier price - geef een prijs per staffel op. De totale hoeveelheid wordt over de staffels verdeeld, en elke staffel levert een eigen orderregel op. Bijvoorbeeld: met staffels vanaf 1 (€ 0,50), vanaf 51 (€ 0,35) en vanaf 101 (€ 0,20) levert een hoeveelheid van 133 drie orderregels op: 50 × € 0,50, 50 × € 0,35 en 33 × € 0,20.
        * Flat-fee tier price - geef een vast bedrag per staffel op. De totale hoeveelheid bepaalt welke staffel geldt, en er wordt één orderregel met hoeveelheid 1 tegen de prijs van die staffel aangemaakt. Bijvoorbeeld: met staffels vanaf 1 (€ 50), vanaf 51 (€ 75) en vanaf 101 (€ 100) levert een hoeveelheid van 133 één orderregel op: 1 × € 100.
    * Kies een **Quantity mode**:
        * Fixed quantity - aan elke gegenereerde order wordt een vaste hoeveelheid toegevoegd.
        * Call service - geeft aan dat de klant de hoeveelheid van het product moet bevestigen.
    * (Optioneel) Vul een **Comment** in die aan de bijbehorende orderregel wordt toegevoegd. U kunt ook merge fields voor contracten gebruiken: `$$PeriodFrom$$`, `$$PeriodUntil$$`. Bij de prijsmodi Stacked en Flat-fee tier zijn er extra merge fields beschikbaar: `$$TierQtyFrom$$`, `$$TierQtyTill$$`, `$$TierRange$$`, `$$TierQty$$`, `$$TierPriceExVat$$`, `$$TierPriceIncVat$$`.
    *  (Optioneel) Vul een **Internal Comment** in, die alleen op de detailpagina van het contract zichtbaar is.
    * Geef bij **Conditions** aan wanneer de contractregel aan de gegenereerde order wordt toegevoegd:
      <img src={require("/img/edit-contract-row-conditions.png").default} height="" width="400" />
        * **Always** - standaard. Altijd aan de order toevoegen.
        * **Specified date is in the billing period**. In dat geval stelt u de begindatum van de periode in, selecteert u de herhaalperiode bij **Repeat** (maandelijks of jaarlijks, elke 1 of 2 tot 18 maanden) en stelt u in wanneer de periode eindigt: nooit, na een bepaald aantal keren of op een bepaalde datum. Onderaan het venster verschijnt automatisch een voorbeeld van de instellingen.
    * Klik op **Ok** om de instellingen van de productregel op te slaan. De productregel wordt bijgewerkt met de ingestelde configuratie.
10. Voeg op dezelfde manier andere producten aan het contract toe. Zodra alle producten zijn toegevoegd, kunt u de volgorde van de contractregels wijzigen met de knoppen **Move** op elke regel.
    <img src={require("/img/contract-row-products.png").default} height="" width="800" />
11. Sla het contract op met de knop **Save** of **Save and Close** in het actiemenu bovenaan.

### Automatisch orders genereren {#automatic-order-generation}

Nadat de producten aan het contract zijn toegevoegd, stelt u het genereren van orders in (**Order generation**):
<img src={require("/img/automatic-order-generation-settings.png").default} height="" width="800" />

1. Selecteer het **Interval** waarmee de order wordt gegenereerd: None (er wordt geen order gegenereerd), Monthly, Quarterly of Yearly.
2. Stel het **moment** in waarop de order binnen het hierboven gekozen interval wordt gegenereerd: begin, middle, end. Bij maandintervallen zijn ook de 5e en de 25e beschikbaar. Het deelvenster met orders eronder wordt bijgewerkt met de volgende geplande order, afhankelijk van de instellingen.
3. Kies een **Order period** - de periode waarvoor een order wordt aangemaakt: current, previous of next.
4. Selecteer de **Date** die de automatisch gegenereerde order krijgt. Dat kan de standaardwaarde **Date of creation** zijn of **Last date of the period**.
5. (Optioneel) Selecteer welke **hoofdstatus** de order na het aanmaken krijgt.
6. (Optioneel) U kunt een **betaalmethode** kiezen uit de betaalmethoden van de shop.
7. (Optioneel) Als de betaalmethode **Invoice** is, kunt u ook instellen dat er samen met de order een factuur wordt aangemaakt en verstuurd:
    * Vink het selectievakje **Create Invoice** aan.
    * Selecteer welke **status** de factuur na het aanmaken krijgt.
    * Bepaal of u de factuur direct na het aanmaken automatisch wilt e-mailen door het selectievakje **Mail Invoice** aan te vinken.
    * Selecteer het **e-mailsjabloon** waarmee de automatische e-mail wordt gegenereerd.
 8. Controleer in het voorbeeldvenster voor het genereren van orders of de perioden goed zijn ingesteld. De volgende geplande order verschijnt in de tabel en is gemarkeerd met het pictogram <img src={require("/img/clock.png").default}  />.
 9. Vink het selectievakje **Active** aan om het genereren van orders in te schakelen.
 10. Klik op **Save** of **Save and Close** om het contract op te slaan.

:::info[**Let op**]

De fulfilmentstatus van een nieuw gegenereerde order is "**Hold fulfillment**", zodat de order niet automatisch wordt verzonden voordat de klant heeft bevestigd.

:::

### Een voorbeeld van de order bekijken {#preview-order}

U kunt de orderregels die voor een bepaalde periode zouden worden gegenereerd vooraf bekijken, zonder de order echt aan te maken.

1. Klik op de knop **Preview Order** in de werkbalk bovenaan.
2. Stel de datums **From** en **Till** in voor de periode die u wilt bekijken. Standaard staan de datums op de vorige maand.
3. Klik op **Run preview** om een voorbeeld van de orderregels te genereren. De tabel toont per regel de productnaam, de hoeveelheid, de prijs, de totalen en de opmerking.
4. Controleer de resultaten. Als het voorbeeld klopt, kunt u op **Create order** klikken om de order direct vanuit het voorbeeldvenster aan te maken en op te slaan.

<img src={require("/img/contracts-order-preview.png").default} height="" width="800" />

## Contracten beheren {#manage-contracts}

Zodra de contracten zijn aangemaakt, beheert u ze vanaf het tabblad **Sales > Contracts**.

<img src={require("/img/contracts-overview.png").default} height="" width="800" />

De pagina met contracten toont standaard de actieve contracten. U kunt het filter wijzigen in 'All Contracts' om ook gedeactiveerde contracten in de lijst op te nemen.
De kolom **Last generated** toont de datum van de laatste order die op basis van een contract is aangemaakt. De kolom **Next order** toont de datum van de volgende geplande order. Dubbelklik op de rij van een contract om het te bewerken.


De volledige lijst met contracten van een klant vindt u ook op de detailpagina van de klant, via Topic menu > Contracts.

<img src={require("/img/customer-details-contracts-list.png").default} height="" width="800" />
