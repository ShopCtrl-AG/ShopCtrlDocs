---
sidebar_position: 2
slug: /docs/create-offers
description: "Maak een offerte in ShopCtrl vanaf de pagina Sales > Offers of de detailpagina van een klant, en voeg de klant en de aangeboden producten toe."
---
# Offertes aanmaken


U kunt een offerte aanmaken vanaf de pagina **Sales > Offers** of vanuit het deelvenster **Customer details page > Offers**.
<img src={require("/img/create-new-offer.png").default} height="" width="800" />

## Een offerte aanmaken {#create-offer}
Een offerte aanmaken:
1. Ga naar **Sales > Offers**.
2. Klik op **Add** en selecteer de shop waarvoor u een offerte wilt uitbrengen.
3. Klik op de nieuwe offertepagina op **Select**.
4. Zoek in het pop-upvenster de gewenste **Customer** en dubbelklik op de naam om de klant aan de offerte toe te voegen.
5. (Of) klik op **Add** om een nieuwe klant aan te maken.
6. Klik in het deelvenster met producten op **Add**:
    1. Zoek en selecteer het **product**.
    2. Wijzig zo nodig de **hoeveelheid**.
    3. Klik op de knop <img src={require("/img/plus-sign.png").default}  /> om een **korting** aan de offerteregel toe te voegen.
7. (Optioneel) Wijzig het **Payment type** als dit afwijkt van de standaardbetaalmethode van de shop.
8. Selecteer de **Carrier** die de order verzendt.
9. Voeg **Shipping costs** toe.
10. (Optioneel) Kies een **Lead source**.
11. Wijs een **Handling employee** toe door op het teken '-' te klikken en een medewerker uit de lijst te selecteren.
:::info

Als u niet handmatig een behandelende medewerker instelt, wordt bij het opslaan de medewerker toegewezen die de offerte heeft aangemaakt.

:::
8. Wijzig zo nodig de datum **Valid until**. Standaard is dit 14 kalenderdagen.
9. (Optioneel) Wijzig het standaarddocumentsjabloon door een ander sjabloon te selecteren in de vervolgkeuzelijst **Template**.
10. Klik op **Save** of **Save and Close**.

### Een document genereren en naar de klant e-mailen {#generate-document-and-email-to-customer}

Het offertedocument wordt automatisch gegenereerd telkens wanneer een offerte wordt opgeslagen. Als er wijzigingen in de offerte zijn gemaakt, zijn de knoppen **Mail customer** en **Mail supplier** uitgeschakeld. Sla de offerte na elke wijziging op, zodat de wijzigingen in de offerte en het offertedocument worden doorgevoerd.
Klik op de knop **Preview PDF** om de automatisch gegenereerde offerte-pdf in een nieuw venster te openen. Het offertedocument zelf vindt u bij Topic menu > Attachments.

Een offerte naar een klant e-mailen:

1. Klik op het tabblad met offertedetails op **Mail customer** en selecteer een sjabloon. De standaard e-mailsjablonen in de lijst komen overeen met de cultuur (taal) van de klant.
2. (Of) kies een ander sjabloon:
    1.    Klik op **Mail Customer**.
    2.    Zoek een sjabloon.
    3.    Of klik op het pijltje naast de cultuur en selecteer de gewenste cultuur. De lijst met sjablonen wordt dan bijgewerkt.
    4.    Klik op het sjabloon om het te selecteren voor het automatisch genereren van de e-mail.
        <img src={require("/img/offer-select-template.png").default} height="" width="" />
3. Er wordt een nieuw, automatisch gegenereerd concept van de e-mail op basis van het gekozen sjabloon in een nieuw tabblad geopend. Het offertedocument is als bijlage toegevoegd.
4. Bewerk de e-mail zo nodig.
5. Klik op **Send** als u klaar bent.

De verstuurde e-mail wordt toegevoegd aan de gespreksgeschiedenis van zowel de klant als de offerte.
