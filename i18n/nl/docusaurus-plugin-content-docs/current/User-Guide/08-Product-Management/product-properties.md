---
sidebar_position: 7
slug: /docs/product-properties
description: "Producteigenschappen in ShopCtrl beschrijven de kenmerken van een product, synchroniseren met uw verkoopkanalen en bepalen productvarianten."
---
# Producteigenschappen 


Productkenmerken zijn de eigenschappen van een product die de specifieke kenmerken ervan beschrijven.
Producteigenschappen in ShopCtrl zijn gekoppeld aan uw verkoopkanalen en worden meestal vanuit uw online shops geïmporteerd en gesynchroniseerd. Producteigenschappen worden ook intern gebruikt om een product te definiëren, te filteren, bulkbewerkingen op orders uit te voeren en in diverse verzendinstellingen. 

Het importeren en exporteren van producteigenschappen maakt deel uit van de import- en exportfunctionaliteit voor producten van de synchronisatiemodule die u gebruikt. 

## Producteigenschap aanmaken {#creating-product-property}
:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop zijn gekoppeld om de acties in dit artikel uit te voeren.

:::

<img src={require("/img/create-product-property.png").default} height="" width="800" />

Een eigenschap aanmaken:
1. Ga naar **Product Management > Product Properties**.
2. Klik op **Add**.
3. Selecteer een **Shop group**.
4. Selecteer het type eigenschap:

| Type eigenschap | Omschrijving |
| --- | --- |
| Text | Een veld van één regel voor tekst. |
| TextArea | Een veld van meerdere regels voor tekst, zonder opmaakopties. |
| HtmlEditor | Een veld met een WYSWYG-editor voor tekst met HTML-opmaak. |
| Date | Een datumveld. |
| YesNo | Toont een vervolgkeuzelijst met de vaste opties Yes/No. |
| MultipleSelect | Toont een vervolgkeuzelijst met items waarin u meerdere waarden kunt selecteren. |
| DropDown | Toont een vervolgkeuzelijst met items waarin u slechts één waarde kunt selecteren. |
| Number | Een veld voor een getalswaarde. |
5. Voer de **Code** van de eigenschap in, zonder spaties.
6. Klik in het deelvenster Captions op <img src={require("/img/pencil.png").default}  /> en bewerk in het pop-upvenster de **General caption** van de eigenschap, dat is de naam van de eigenschap, en de **vertalingen** ervan.
7. Als u wilt dat deze eigenschap (als die voor een product is gekozen) verplicht is bij het aanmaken van een product, schakel dan het selectievakje **Is required** in.
8. Schakel het selectievakje **Copy to order row** in om de eigenschap zichtbaar te maken in de orderdetails wanneer het product wordt besteld.
9. Als u wilt dat deze eigenschap wordt gekopieerd bij het dupliceren van de order, schakel dan **Copy to clone** in.
10. Schakel het selectievakje **Is important shipment info** in om de eigenschap op de zendingenpagina weer te geven en te markeren.
11. (Optioneel) Deze instellingen zijn specifiek voor de **Magento**-integratie:

| Type eigenschap | Omschrijving |
| --- | --- |
| Is hidden | De eigenschap is verborgen in de front-end. |
| Is comparable | De eigenschap kan in de front-end worden vergeleken. |
| Is searchable | De eigenschap kan worden gebruikt in Quick Search. |
| Is visible on front | De eigenschap is zichtbaar in de front-end. |
11. Als u een eigenschap van het type **Yes/No** aanmaakt, selecteer dan de **Default value**: False, True of Undefined.
12. Voor de typen **Text**, **Text area** of **Number** kunt u ook de **Default values** invoeren.
13. Voor eigenschappen van het type **Dropdown** en **Multiselect** moet u **opties** aanmaken:
    1. Klik in het deelvenster met opties op **Add**.
    2. Klik in de nieuw toegevoegde rij op <img src={require("/img/pencil.png").default}  />. 
    3. Voer de **Value**, de vertaling **General** en de andere vertalingen van de optie in die op uw verkoopkanalen worden gebruikt.
    4. Klik op **Ok** om de optie aan de lijst toe te voegen.
    5. Klik op de knop ⛔ aan het einde van de rij om een optie te verwijderen.
    6. Gebruik de pijlen ⬆⬇ om de volgorde van de opties in de lijst te wijzigen.
    7. Ga verder met de andere opties voor de eigenschap.
14. Klik op **Save** of **Save and Close**.

U kunt op een eigenschap dubbelklikken om deze te openen voor **bewerking**. Wijzig een naam of de opgenomen eigenschappen. Of **verwijder** een set die niet meer wordt gebruikt.

:::warning[Let op]

Het wijzigen van een eigenschap kan gevolgen hebben voor de producten en productvarianten die deze eigenschap gebruiken. Afhankelijk van de synchronisatiemodules die voor uw verkoopkanalen zijn geconfigureerd, wordt de eigenschap in uw online shops automatisch bijgewerkt of moet de update handmatig worden ingepland. Neem voor meer informatie contact op met ons supportteam. 

:::

## Eigenschappensets {#property-sets}
:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop zijn gekoppeld om de acties in dit artikel uit te voeren.

:::

Producteigenschappen kunnen in sets worden samengevoegd en worden gebruikt om bepaalde productgroepen op uw verkoopkanalen te definiëren en om productvarianten aan te maken.
In eerste instantie worden eigenschappensets vanuit uw verkoopkanalen geïmporteerd. U kunt eigenschappensets ook in ShopCtrl aanmaken en beheren.

Een eigenschappenset aanmaken:

1. Ga naar **Product Management > Product Property sets**.
2. Klik op **Add**.
3. Selecteer een **Shop group** waarin de eigenschappenset wordt gebruikt.
4. Voer een **Name** in.
5. Schakel de selectievakjes in van de **eigenschappen** die samen de nieuwe eigenschappenset vormen.
6. Klik op **Save** of **Save and Close**.

De nieuwe eigenschappenset verschijnt in de lijst met sets en is beschikbaar voor selectie bij het aanmaken van een nieuw product.

U kunt op een eigenschappenset dubbelklikken om deze te openen voor **bewerking**. Wijzig de naam van de set of de opgenomen eigenschappen. Of **verwijder** een set die niet meer wordt gebruikt.

:::warning[Let op]

Het wijzigen van een eigenschappenset kan gevolgen hebben voor de producten en productvarianten die deze set gebruiken of op basis van deze set zijn aangemaakt. Afhankelijk van de synchronisatiemodules die voor uw verkoopkanalen zijn geconfigureerd, wordt de eigenschappenset in uw online shops automatisch bijgewerkt of moet de update handmatig worden ingepland. Neem voor meer informatie contact op met ons supportteam. 

:::

