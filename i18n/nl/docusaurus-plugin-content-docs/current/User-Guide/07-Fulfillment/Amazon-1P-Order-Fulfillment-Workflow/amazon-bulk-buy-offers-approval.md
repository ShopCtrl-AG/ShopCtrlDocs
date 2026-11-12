---
sidebar_position: 1
slug: /docs/amazon-bulk-buy-offers-approval
description: "Het goedkeuringsproces voor Bulk Buy Offers in ShopCtrl in vier fasen: Commerce, Manufacture, Warehouse en het terug uploaden naar Amazon."
---

# Goedkeuring van Amazon Bulk Buy Offers

Het **Bulk Buy Offers-programma van Amazon** is een programma op uitnodiging waarmee leveranciers eenmalige bulkorders voor hun ASIN's kunnen aanvragen, waarbij u zelf het moment, de hoeveelheid en de kosten bepaalt die het best bij uw bedrijf passen.
Amazon beoordeelt de inzending van de leverancier en koopt, na goedkeuring, de aangevraagde hoeveelheid tegen de aangevraagde kosten.

Als eerste stap in dit programma downloadt de leverancier het bestand **Bulk Buy Offers Requests**. Daarna bepaalt de leverancier, volgens het interne goedkeuringsproces van het bedrijf, de prijs, de hoeveelheid en de termijn waarbinnen het bedrijf aan het verzoek kan voldoen. Het resultaat van dit besluitvormingsproces is het bijgewerkte bestand dat weer naar Amazon wordt geüpload.

Het goedkeuringsproces, essentieel voor een efficiënte levering van goederen, bestaat uit meerdere fasen die elk door een andere afdeling in de organisatie worden uitgevoerd. Om deze procedure te stroomlijnen, heeft ShopCtrl de functie **Bulk Buy Offers** geïntroduceerd. Daarmee verbetert u het interne beheer en legt u elke goedkeuringsstap volledig vast.

Het **goedkeuringsproces voor Bulk Buy Offers** in ShopCtrl bestaat uit vier fasen: Commerce, Manufacture, Warehouse en het uiteindelijke uploaden naar Amazon. Bij deze gestructureerde workflow zijn meerdere goedkeurders betrokken, en wijzigingen zijn mogelijk tot de afronding. Goedkeurders kunnen in elke fase alle artikelen goedkeuren of alleen de artikelen die nog openstaan.
De laatste, vierde fase, waarin het definitieve bestand wordt gedownload en weer naar Amazon wordt geüpload, kan door elk van de drie afdelingen worden uitgevoerd.

![Goedkeuringsproces voor Amazon Bulk Buy Offers](/img/AmazonBulkBuyOffersApprovalProcess.png)

## Fase 1. Goedkeuring door Commerce {#stage-1-commerce-approval}

De eerste stap in het goedkeuringsproces voor bulk buy offers begint bij de afdeling Commerce. De workflow ziet er zo uit:

1.  **Bestand importeren:** Commerce start het proces door het oorspronkelijke Excel-bestand van Amazon te importeren, met twee extra kolommen: **'R'** voor de status **Approved** en **'S'** voor een optionele **Comment**. Deze kolommen zijn nodig om de goedkeuringsstatus aan te geven en opmerkingen toe te voegen. \* **Goedkeuringsstatus toekennen:** Commerce kent aan de hele rij een goedkeuringsstatus (Yes/No) toe, zonder onderscheid tussen fasen. Rijen die niet zijn ingevuld, gelden automatisch als openstaand.
    ![Voorbeeld van een Excel-bestand voor Commerce](/img/commerce-excel-file-example.png)

        * **Interface voor Commerce:** ga hiervoor naar **Sales > Amazon Bulk Buy**. Klik op "**Add**", selecteer de shop voor Amazon 1P en upload het bestand om de import te starten.

    ![Fase Commerce](/img/commerce-stage.png)

:::warning[Let op]

Als u het onderdeel Amazon Bulk Buy niet ziet in de navigatiestructuur onder Sales, hebt u mogelijk niet de juiste rechten. Zie de handleiding [Bulk Buy Offers instellen](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-1P/setting-up-bulk-buy-offers.md) voor instructies over het instellen van de benodigde rechten.

:::

3. **Producten koppelen:** ShopCtrl leest het geïmporteerde bestand in en koppelt producten op basis van EAN of ASIN. Producten die niet kunnen worden gekoppeld of niet in het systeem bestaan, leiden tot foutmeldingen, waardoor het bestand niet kan worden geüpload.

4. **Goedkeuringsopties:** Commerce kan het goedkeuringsproces voortzetten door op de knop "Approve" te klikken. Daarmee geeft Commerce aan dat het bestand klaar is voor de afdeling Manufacturing. Daarnaast zijn er handige opties:
   - Met "Approve All" worden alle rijen overschreven met goedkeuring.
   - Met "Approve Pending" worden alleen de openstaande rijen goedgekeurd, zonder bestaande waarden te wijzigen.

![Bulk buy offer in de fase Commerce](/img/bulk-buy-offer-commerce.png)

## Fase 2. Goedkeuring door Manufacture {#stage-2-manufacture-approval}

1. **Inloggen en het vooraf goedgekeurde bestand downloaden:** log in bij ShopCtrl met de gegevens van de goedkeurdersrol Manufacture. Ga daarna naar het gedeelte Amazon Bulk Buy, open de actieve Bulk buy offer en **download** het bestand met de producten die Commerce vooraf heeft goedgekeurd. Het bestand van ShopCtrl is anders opgebouwd dan dat van Amazon, maar volgt dezelfde validatieregels. Let op: producten die Commerce heeft afgewezen, zijn wel zichtbaar in de tabel Bulk Buy Products, maar worden niet in het bestand voor Manufacture opgenomen.
   :::(Info) (Tip)
   Als u meerdere rollen hebt, vernieuwt u het tabblad met de details van de Bulk Buy Offer. U krijgt dan een venster waarin u de rol van goedkeurder kiest.
   :::

2. **Controleren en goedkeuren of afwijzen:** werk het gedownloade bestand bij met de hoeveelheden die de afdeling voor de opgegeven leveringsfasen kan leveren. Als er niets kan worden geleverd, vult u **'0'** in. Rijen zonder waarde gelden als openstaand. Upload het bestand naar de details van de Bulk Buy Offer. U kunt het bestand meerdere keren bijwerken.
   ![Goedkeuring van een Bulk Buy Offer door Manufacture](/img/BulkBuyOfferApproval_Manufacture_v1.png)
3. **Doorgeven aan Warehouse:** zodra het bestand klaar is, geeft u de bulk buy offer door aan de goedkeurder van Warehouse door 'Move (to W)' te selecteren. De knoppen voor alles goedkeuren en openstaande regels goedkeuren zijn in alle fasen beschikbaar en geven de bulk buy offer door aan de volgende goedkeurder.
   ![Fase Manufacture](/img/manufacture-stage.png)

## Fase 3. Goedkeuring door Warehouse {#stage-3-warehouse-approval}

De afdeling Warehouse is verantwoordelijk voor de definitieve goedkeuring van producten en hoeveelheden. Zo werkt deze fase:

1. **Inloggen en het vooraf goedgekeurde bestand downloaden:** log in bij ShopCtrl met de gegevens van de goedkeurdersrol Warehouse. Ga naar het gedeelte Amazon Bulk Buy, open de actieve Bulk buy offer en **download** het bestand met de producten die Commerce en Manufacture vooraf hebben goedgekeurd.
2. **Controleren en goedkeuren of afwijzen:** controleer elk product in het bestand zorgvuldig en vul de hoeveelheden voor de leveringsfasen in op basis van de situatie in het magazijn. Ook hier vult u **'0'** in als er niets kan worden geleverd. Rijen zonder waarde gelden als openstaand. Upload het bestand daarna naar de details van de Bulk Buy Offer.
3. **De goedkeuring afronden:** klik op de knop "Complete". Net als in de vorige fasen kunt u alle producten of alleen de openstaande artikelen goedkeuren, zonder het bestand te wijzigen en opnieuw te uploaden.
   ![Fase Warehouse](/img/warehouse-stage.png)

:::warning[Let op]

Nadat u op "Complete" hebt geklikt, geldt de Bulk Buy Offer als **definitief** en kan deze niet meer worden bewerkt. U kunt alleen nog het bestand downloaden om naar Amazon te uploaden. Dit bestand geeft een volledig overzicht van de beslissingen van de afdelingen over de levering van producten.

:::

![Afgeronde Bulk Buy Offer](/img/bulk-buy-offer-completed.png)

### Wijzigingen aanbrengen en goedkeuringen herzien {#making-changes-and-revising-approvals}

Voordat Warehouse de goedkeuring afrondt, kunnen zowel Commerce als Manufacture hun goedkeuring intrekken en wijzigingen aanbrengen. Zo werkt dit:

1. **Goedkeuring intrekken:**

- De afdeling die iets wil wijzigen, kan de goedkeuring intrekken via de fase van de Bulk Buy Offer.
- Klik op 'Revoke Approval'. U kunt de offer dan bijwerken door een bestand met andere hoeveelheden te uploaden.

2. **Wijzigingen markeren:**
   Alle wijzigingen worden gemarkeerd voor de volgende goedkeurders die hun gegevens al hebben ingevuld.
   Latere goedkeurders zien de gemarkeerde wijzigingen en moeten hun goedkeuring daarop aanpassen.
   Manufacture en Warehouse kunnen in dat geval het bestand van de vorige versie niet uploaden.

3. **Herziene goedkeuringen:**

- De volgende goedkeurders downloaden het bestand, bekijken de gemarkeerde wijzigingen en passen hun goedkeuring zo nodig aan.
- Zo verloopt het proces soepel en transparant, en blijven alle goedkeurders op de hoogte van de nieuwste wijzigingen.

![Goedkeuring van een Bulk Buy Offer door Warehouse](/img/BulkBuyOfferApproval_Warehouse_v4.png)

## Fase 4. Het bestand met de definitieve hoeveelheden downloaden en naar Amazon sturen {#stage-4-download-and-submit-the-file-with-final-quantities-to-amazon}

In de laatste fase van het goedkeuringsproces voor Bulk Buy Offers kan elke medewerker van de betrokken afdelingen de volgende stappen uitvoeren:

1. **Het definitieve bestand downloaden:**

- Log in bij de ShopCtrl-omgeving als gebruiker met goedkeuringsrechten voor Commerce, Manufacture of Warehouse.
- Ga naar de pagina van de Bulk Buy Offer en download het definitieve bestand met de hoeveelheden die alle betrokken afdelingen hebben goedgekeurd, door op de knop '**Export for Amazon**' te klikken. Het definitieve bestand is het oorspronkelijke bestand van Amazon dat Commerce in de eerste fase heeft geüpload, met de definitief goedgekeurde hoeveelheden.

2. **Naar Amazon sturen:**

- Gebruik het gedownloade bestand om de definitieve hoeveelheden bij Amazon in te dienen.
- Hiermee is het goedkeuringsproces voor Bulk Buy Offers afgerond, en worden de goedgekeurde hoeveelheden voor verdere verwerking aan Amazon doorgegeven.
  ![Afgerond Amazon Bulk Buy Offer-verzoek](/img/AmazonBulkBuyOfferRequest_Completed_v5.png)

Met dit goedkeuringsproces beheert u bulk buy offers efficiënt en rondt u de goedkeuring goed af. Verschillende afdelingen kunnen samenwerken en zo nodig wijzigingen aanbrengen, en de uiteindelijke beslissing is altijd gebaseerd op de nieuwste informatie. Deze flexibele aanpak stroomlijnt het goedkeuringsproces in uw organisatie.
