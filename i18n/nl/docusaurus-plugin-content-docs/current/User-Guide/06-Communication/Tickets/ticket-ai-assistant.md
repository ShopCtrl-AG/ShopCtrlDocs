---
sidebar_position: 4
slug: /docs/ticket-ai-assistant
description: "De Ticket AI Assistant van ShopCtrl vat tickets samen en deelt ze in categorieën in op basis van e-mails, titels en opmerkingen. Per shop in te stellen met een OpenAI API-sleutel."
---

# Ticket AI Assistant

ShopCtrl heeft een nieuwe functie geïntroduceerd: de AI Assistant, die nu in uw klantenservicesysteem is geïntegreerd.

Op het ticketscherm ziet u een inklapbaar deelvenster met de naam "AI Assistant". Als u het uitklapt, verzamelt het informatie uit e-mails van klanten, tickettitels en opmerkingen van medewerkers, en stuurt het deze gegevens naar de AI. Het resultaat is een korte samenvatting van het probleem van de klant en een lijst met categorieën die bij het probleem passen.


<img src={require("/img/ai-assistant.png").default} height="" width="800" />



De AI Assistant is speciaal getraind op uw eigen categorieën en communicatiepatronen. Het doel is om voorstellen te doen die zo goed mogelijk aansluiten bij de praktijk van uw klantenservice.

Zodra u minstens één categorie voor het ticket hebt geselecteerd, worden er geen categorieën meer geladen, wat uw werk eenvoudiger maakt. U kunt de samenvatting en de categorieën wel eenvoudig opnieuw laden door op de knop voor vernieuwen te klikken.

Met de AI Assistant van ShopCtrl werkt uw klantenservice efficiënter en met meer inzicht. De assistent bespaart u tijd, maakt de indeling in categorieën nauwkeuriger en verhoogt de productiviteit. Welkom in de toekomst van klantenservice met ShopCtrl!

## Ticket AI configureren {#configuring-ticket-ai}

De configuratie van Ticket AI is shopspecifiek, wat meer flexibiliteit geeft in taal en sjablonen.

Om deze integratie in te schakelen, haalt u de geheime API-sleutel van OpenAI op en vult u deze in. Haal de **Secret Key** op van de [pagina met API-sleutels in uw OpenAI-account](https://platform.openai.com/account/api-keys). Lees ook de [Best practices for handling API keys](https://platform.openai.com/docs/guides/production-best-practices/api-keys) om uw sleutels veilig en efficiënt te beheren.

<img src={require("/img/ticket-ai-configuration.png").default} height="" width="800" />


### Verbindingsinstellingen {#connection-settings}
Shop>AI

#### **Chat Model** {#chat-model}
**OpenAI Chat Model**
Het [model van OpenAI](https://platform.openai.com/docs/models) dat wordt gebruikt voor tekstverzoeken, zoals het samenvatten van tickets of het voorstellen van acties voor een ticket.
**OpenAI Chat Prompt Max Length**
De maximale lengte van een tekst die naar het chatmodel van OpenAI wordt gestuurd. Als een prompt langer is, wordt deze ingekort. Verschillende modellen van OpenAI hebben verschillende limieten voor het contextvenster.
Meer informatie vindt u in [What are tokens and how to count them?](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them) en [Managing tokens](https://platform.openai.com/docs/guides/text-generation/managing-tokens).

#### **Embedding Model** {#embedding-model}
**OpenAI Embedding Model**
Het model van OpenAI dat ShopCtrl voor categorisatie gebruikt, vanwege de lage kosten en goede prestaties. Zie [deze helppagina](https://platform.openai.com/docs/models/embeddings) voor meer informatie over embeddings.
**OpenAI Embedding Prompt Max Length:**
De maximale lengte van een tekst die naar het chatmodel van OpenAI wordt gestuurd. Als een prompt langer is, wordt deze ingekort.

#### **Test connection** {#test-connection}


### Instellingen voor tickets {#specific-ticket-related-changes}

Shop> Communication>Ticket AI

 **Ticket Summary**
**Summary Prompt Template**
Het sjabloon dat wordt gebruikt bij het opvragen van een samenvatting van een ticket. ShopCtrl vervangt de tekst `{0}` door de context van het ticket. U kunt de taal van het antwoord per shop instellen, bijvoorbeeld:
```
Generate a short summary description for the following support ticket. Write in Dutch. Ticket:```{0}```
```
#### **Voorgestelde categorieën** {#categories-suggestions}
**Category Prompt Template**
Het sjabloon dat wordt gebruikt bij het opvragen van een categorievector (embedding) bij het model van OpenAI. De tekst `{0}` wordt vervangen door de naam van de categorie, `{1}` door de omschrijving van de categorie en `{2}` door de context van een voorbeeldticket.
Voorbeelden:
```
Category '{0}' described as '{1}' matches the following support tickets '{2}'
Category '{0}' matches the following support tickets ```{2}```
```
Om ervoor te zorgen dat de categorieën de juiste waarden krijgen, worden zowel de categorie zelf als alle bovenliggende onderdelen, selecteerbaar of niet, naar OpenAI gestuurd.
**Max Categories to Suggest**
Het maximale aantal categorieën dat ShopCtrl voor een ticket kan voorstellen.
**Match Factor Threshold**
Percentage overeenkomst van de categorievector `[0..100]`. Een waarde van `0` betekent geen drempel.
**Deviation Factor Threshold**
Percentage van de afwijkingsfactor van de categorievector: (overeenkomst van de categorie - gemiddelde overeenkomst) / standaardafwijking. Mogelijke waarden: `[0..]`. Een waarde van `0` betekent geen drempel.

#### **Training** {#training}
**Category Sample Ticket Count**
Bepaalt hoeveel gerelateerde tickets ShopCtrl per categorie gebruikt om tijdens de training van het model een embeddingwaarde te berekenen.
**Estimate**
Geeft een samenvatting van de gegevens die voor de training naar OpenAI worden gestuurd.
**Train Now!**
Start de training door alle categorieën van de shop en alle globale categorieën naar OpenAI te sturen. Analyseert de verbanden tussen ticketcategorieën en de inhoud van tickets. Berekent de categorie-index van tickets opnieuw met de OpenAI API.

#### Gebruik na de training {#post-training-usage}
Na de training kunnen u en uw team de Ticket AI Assistant naadloos in het dagelijkse werk gebruiken. Gebruik het getrainde model om efficiënt samenvattingen van tickets te maken en tickets in categorieën in te delen.

Gebruik de knoppen voor training gerust regelmatig om de mogelijkheden van Ticket AI steeds verder te verfijnen, zodat de assistent goed blijft aansluiten bij uw veranderende supportpraktijk. Voor meer hulp of informatie kunt u de uitgebreide [documentatie van OpenAI](https://platform.openai.com/docs/introduction) raadplegen of contact opnemen met ons supportteam.

Welkom bij een slimmere en efficiëntere aanpak van ticketbeheer met Ticket AI van ShopCtrl!
