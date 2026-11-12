---
sidebar_position: 3
slug: /docs/comment-templates
description: "Maak herbruikbare opmerkingsjablonen in ShopCtrl voor opmerkingen bij orders, retouren, tickets en taken, zodat u snel en consistent formuleert."
---

# Opmerkingsjablonen

ShopCtrl introduceert met trots een nieuwe functie die de productiviteit verhoogt en zorgt voor een consistente opmaak van opmerkingen in het hele platform: **Comment Templates**.
Comment Templates zijn vooraf ingestelde tekstfragmenten waarmee u sneller opmerkingen schrijft. Met deze functie maken gebruikers vooraf gedefinieerde sjablonen voor opmerkingen bij orders, orderretouren, tickets en taken. Zo houden teams hun communicatie eenduidig en behandelen ze de belangrijkste punten efficiënt.

## Belangrijkste functies: {#key-features}

**Sjablonen per type record**
Sjablonen kunnen worden aangemaakt voor:
- Opmerkingen bij orders
- Opmerkingen bij orderretouren
- Opmerkingen bij tickets
- Opmerkingen bij taken

**Aanpasbare sjablonen**
- Medewerkers met de juiste rechten kunnen sjablonen configureren.
- Sjablonen kunnen per shop of voor het hele systeem worden toegepast.
- Gebruikers kunnen bij het plaatsen van een opmerking kiezen uit een vooraf ingestelde lijst of het voorgestelde sjabloon handmatig aanpassen.

**Beheer van rechten**
Alleen gebruikers met de rechten die de shop owner heeft ingesteld, kunnen opmerkingsjablonen toevoegen, bewerken, bekijken of verwijderen. Rechten stelt u in bij de autorisatie-instellingen van het systeem.


## Opmerkingsjablonen configureren {#how-to-configure-comment-templates}

De shop owner kan de rechten van medewerkers voor het beheer van opmerkingsjablonen instellen. Er zijn autorisatie-items voor de volgende acties:
 - Opmerkingsjablonen bekijken
 - Opmerkingsjablonen toevoegen
 - Opmerkingsjablonen bewerken
 - Opmerkingsjablonen verwijderen

Standaard hebben shop admins en power users alle rechten om opmerkingsjablonen te beheren.

### Stap 1: een opmerkingsjabloon aanmaken {#step-1-create-a-comment-template}

1. Log in als gebruiker met **Power User**-rechten.
2. Ga naar **Configuration > Templates > Comment Templates**.

    <img src={require("/img/managing-comment-templates.png").default} height="" width="400" />
3. Klik op **Add** om een nieuw sjabloon aan te maken.

    <img src={require("/img/create-comment-template-formatting.png").default} height="" width="400" />
4. (Optioneel) Selecteer de shop waarvoor dit sjabloon wordt gebruikt. Of laat het veld leeg om het voor elke shop te kunnen gebruiken.
5. Vul de volgende velden in:
    1. **Name**: vul een duidelijke naam voor het sjabloon in.
    2. **Type**: selecteer het type record (bijvoorbeeld order, orderretour, ticket, taak).
    3. **Content**: vul de standaardtekst in die in de opmerking wordt getoond.
    4. Gebruik HTML-opmaak om uw opmerkingen leesbaarder te maken en goed te structureren.
    5. (Optioneel) Internal Comment: voeg interne notities bij het sjabloon toe.
6. Vink het selectievakje **Publish** aan om het sjabloon in de lijst selecteerbaar te maken.
7. Klik op **Save or Save and Close** om het sjabloon af te ronden.

    <img src={require("/img/comment-template-example.png").default} height="" width="600" />

### Stap 2: standaardsjablonen voor de shop instellen {#step-2-configure-default-templates-for-the-shop}

1. Log in als gebruiker met **Shop Admin**-rechten.
2. Ga naar **Shop Settings > Comment Templates**.

    <img src={require("/img/comment-template-ticket-type-shop-configuration.png").default} height="" width="400" />
3. Wijs standaardsjablonen toe voor de volgende records:
    1. Opmerkingsjabloon voor **Order**
    2. Opmerkingsjabloon voor **Order return**
    3. Opmerkingsjabloon voor **Ticket**
    4. Opmerkingsjabloon voor **Task**
4. Selecteer aan het einde van elk veld het niveau waarop het sjabloon geldt:
    1. **Shop-specific**: het sjabloon geldt alleen voor deze shop.
    2. **Shop group**: het sjabloon wordt gedeeld binnen een groep shops.
    3. **Shop owner**: het sjabloon geldt voor alle shops in het systeem.
5. (Optioneel) Stel op shopniveau standaardsjablonen in voor verschillende tickettypen. Als u dit leeg laat, wordt het standaardsjabloon voor ticketopmerkingen gebruikt.
6. Klik op **Save or Save and Close** om de wijzigingen toe te passen.


## Een opmerkingsjabloon gebruiken {#how-to-use-comment-template}

Wanneer u een opmerking toevoegt bij een record (bijvoorbeeld een order, orderretour, ticket of taak), verschijnt het standaardsjabloon automatisch in het opmerkingsveld.
Deze vooraf ingevulde tekst is het startpunt voor uw opmerking.

    <img src={require("/img/ticket-comment-template-prefilled.png").default} height="" width="400" />


Als u een ander sjabloon wilt gebruiken:
1. Klik op de knop **Select Comment Template** bij het opmerkingsveld.
2. Er verschijnt een lijst met alle beschikbare sjablonen voor het geselecteerde record.
3. Gebruik de zoek- en filteropties om snel het sjabloon te vinden dat u nodig hebt.

    <img src={require("/img/select-different-comment-template.png").default} height="" width="400" />
4. Selecteer het gewenste sjabloon. De inhoud vervangt de standaardtekst in het opmerkingsveld.
5. Controleer of bewerk de tekst van het sjabloon zo nodig, zodat deze bij de situatie past.
6. Als u tevreden bent, plaatst u de opmerking zoals gebruikelijk.

### Voordelen van opmerkingsjablonen {#benefits-of-comment-templates}

**Consistentie:** opmerkingen in het hele systeem hebben dezelfde opmaak.
**Efficiëntie:** bespaart tijd doordat belangrijke informatie en structuur al zijn ingevuld.
**Flexibiliteit:** gebruikers kunnen sjablonen kiezen of aanpassen aan hun behoeften.
**Controle:** met rechten bepalen shop owners wie sjablonen mag aanmaken en bewerken.
