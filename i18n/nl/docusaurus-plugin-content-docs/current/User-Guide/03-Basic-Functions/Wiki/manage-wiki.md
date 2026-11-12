---
sidebar_position: 1
slug: /docs/manage-wiki
description: "Maak en beheer wikiartikelen in ShopCtrl voor interne bedrijfskennis, inclusief de typen gewoon en privé en de publicatiestatus."
---

# De wiki beheren

De Wiki of het Knowledge center is een verzameling artikelen waarin interne bedrijfsinformatie wordt vastgelegd.
Wikiartikelen kunnen, net als [e-mailsjablonen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/index.md), worden gebruikt in de communicatie met klanten. Zo bespaart u tijd en maakt u minder fouten.

Een wikiartikel is een HTML-pagina met een optionele bijlage.

Typen wikiartikelen:

- **gewoon** (regular) - zichtbaar op de pagina Wiki en in de lijst met artikelen die u in een e-mail of chat kunt invoegen
- **privé** (private) 🔒 - te openen vanaf de pagina Wiki, maar niet in te voegen in een e-mail of chat

Privéartikelen hebben een 🔒-teken en een melding voor medewerkers: "This is a private wiki item. Content should not be shared outside the company."

U kunt ook de **publicatiestatus** (publish) van een artikel wijzigen. Dat werkt in de praktijk hetzelfde als bij privé- en gewone artikelen.
Zowel privéartikelen als niet-gepubliceerde artikelen zijn zichtbaar op het tabblad **View Wiki**. Maar privéartikelen en niet-gepubliceerde artikelen kunnen niet in e-mails en chats worden opgenomen.

## Wikiartikelen beheren {#manage-wiki-articles}

![Wikibeheer](/img/wiki-management.png)

Op het tabblad **Wiki Management** kunt u nieuwe artikelen **aanmaken**, bestaande artikelen **bewerken** en **publiceren**, of artikelen die niet meer worden gebruikt **verwijderen**.

Selecteer een artikel en klik op 🔍 **View** om het artikel in een nieuw tabblad te openen. Dubbelklik op een artikel om het te **bewerken**.

Een artikel naar een andere shop **kopiëren**:

1. Selecteer de rij van een artikel.
2. Klik op **More > Copy to** en selecteer een shop in de vervolgkeuzelijst.

Een artikel naar een andere shop **verplaatsen**:

1. Selecteer de rij van een artikel.
2. Klik op **More > Move to** en selecteer een shop in de vervolgkeuzelijst.

U kunt artikelen zoeken op trefwoord en filteren op categorie, cultuur (taal) en publicatiestatus.

### Een artikel aanmaken {#create-article}

![Wikiartikel aanmaken](/img/create-article-wiki.png)

Een wikiartikel aanmaken:

1. Ga naar **General > Wiki Management**.
2. Klik op **Add** en selecteer in de vervolgkeuzelijst:
   1. **Generic** om een wikiartikel voor het hele bedrijf aan te maken
   2. **Een specifieke shop** om een artikel voor die shop aan te maken
3. Typ de **Title** van het artikel.
4. (Optioneel) Wijzig de shop waarvoor het artikel wordt aangemaakt, of klik op het teken ✖ om de shop te verwijderen en het artikel algemeen te maken.
5. Selecteer de **Culture**: de taal waarin het artikel wordt geschreven.
6. Vul **Keywords** in, gescheiden door komma's, zodat het artikel beter wordt gevonden.
7. Voeg de **tekst** van het artikel in. Maak de tekst op met de HTML-editor.
8. Kies in het deelvenster met categorieën bij welke **categorie** of categorieën het artikel hoort.
9. (Optioneel) Klik op **Add attachment** en selecteer een bestand om aan het artikel toe te voegen.
10. (Optioneel) Selecteer de **periode** waarin het artikel gepubliceerd moet zijn.
11. Vink het selectievakje **Published** aan om de tekst en/of de bijlage van dit artikel beschikbaar te maken voor invoegen in een e-mail of chatgesprek.
12. (Optioneel) Vink het selectievakje **Private** aan om het artikel te verbergen in de lijst met beschikbare artikelen.
13. (Optioneel) Vul een **Sequence**-nummer in om de positie van het artikel in de lijst binnen de categorie te wijzigen. Hoe hoger het nummer, hoe lager het artikel in de lijst staat. Of laat de standaardwaarde '0' staan om de artikelen alfabetisch te sorteren.
14. Klik op **Save** of **Save and Close**.

### Een artikel verwijderen {#delete-article}

Het verwijderen van een artikel is definitief. Anders dan bij het intrekken van de publicatie kan het verwijderen niet ongedaan worden gemaakt.

Een artikel verwijderen:

1. Ga naar **General > Wiki Management**.
2. Zoek en selecteer het artikel dat u wilt verwijderen.
3. Klik op **Delete > Yes**.

## De wiki gebruiken {#use-wiki}

### De wiki bekijken {#view-wiki}

Alle wikiartikelen kunt u bekijken op de pagina **General > View Wiki**.

De pagina Knowledge Center (Wiki) bestaat uit een aantal blokken:

- Het filtermenu
- View Articles by Category - alleen artikelen die aan categorieën zijn toegewezen
- Most recent - onlangs aangemaakte of bewerkte artikelen
- Most used - artikelen gesorteerd op het aantal keren dat ze zijn gebruikt

![Wiki bekijken](/img/view-wiki.png)

U kunt een artikel **zoeken** en artikelen filteren op **Culture** en op de **Shop** waaraan ze zijn toegewezen. Klik op de naam van een artikel om het te bekijken.

Het filter in het deelvenster met verkoopkanalen rechts bepaalt ook van welke shops de artikelen in het deelvenster View Articles by Category worden getoond.

### Wikiartikelen opnemen in een e-mail of chatgesprek {#include-wiki-articles-in-an-email-or-chat-dialogue}

U kunt de wikiartikelen gebruiken als kant-en-klare veelgestelde vragen voor klanten wanneer u een e-mail verstuurt of een chatbericht beantwoordt.

#### Een wikiartikel invoegen in een **e-mail**: {#how-to-insert-wiki-article-to-email}

1. Klik bij het schrijven van een nieuwe e-mail op de knop **Insert Wiki** aan het einde van de onderwerpregel.
   ![Wiki invoegen in een e-mail](/img/mail-insert-wiki.png)
2. Selecteer op het tabblad **Search Wiki item** het artikel dat u wilt invoegen.
   ![Venster voor het invoegen van een wikiartikel](/img/insert-wiki-window.png)
   :::(Info)
   Standaard toont de lijst de artikelen van de shop van waaruit u schrijft en de algemene artikelen in de standaardtaal van de shop. Om artikelen in alle talen te zien, klikt u op het pijltje naast de taal en selecteert u **All cultures**.
   :::
3. Klik op **Insert** om de tekst van het wikiartikel naar de tekst van de e-mail te kopiëren en de bijlage van het artikel aan de e-mail toe te voegen.
4. (Als alternatief) U kunt alleen de tekst of alleen de bijlage in de e-mail invoegen: klik op het pijltje van de knop Insert en selecteer de gewenste optie.
5. Bewerk de e-mail verder zoals gebruikelijk.

#### Een wikiartikel invoegen in een **chatgesprek**: {#how-to-insert-wiki-article-to-chat-conversation}

1. Klik tijdens het beantwoorden van een klant in het chatvenster op de link **Wiki**.
   ![Wiki invoegen in een chat](/img/insert-wiki-chat.png)
2. Zoek en selecteer een artikel.
3. Klik op Insert om de tekst van het artikel naar het berichtvak te kopiëren.
4. Bewerk het bericht en klik op **Send**.

:::warning[]

Het versturen van bestanden via berichtvensters wordt momenteel niet ondersteund.

:::
