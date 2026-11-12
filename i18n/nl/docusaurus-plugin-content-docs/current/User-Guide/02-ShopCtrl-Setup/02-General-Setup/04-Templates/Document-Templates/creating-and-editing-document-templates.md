---
sidebar_position: 1
slug: /docs/creating-and-editing-document-templates
description: "Maak of bewerk een documentsjabloon in ShopCtrl door een Word-bestand met merge fields op te bouwen en dit te uploaden onder Configuration > Templates."
---

# Documentsjablonen aanmaken en bewerken

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Admin** of **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

## Een documentsjabloon bewerken of aanmaken {#how-to-edit-or-create-a-document-template}

Maak een Microsoft Word-document met de **Merge fields** van ShopCtrl, zodat het automatisch met de juiste gegevens wordt gevuld, en upload het naar ShopCtrl.

![Sjabloon voor een Nederlandse offerte aanmaken of bewerken](/img/create-edit-template-offerte-nl.png)

Een aangepast **Document Template** bewerken of aanmaken:

1. Ga naar **Configuration > Templates > Document Templates**.
1. Kopieer een bestaand sjabloon met **Copy**, of klik op **Add** om een leeg documentsjabloon aan te maken.
1. Vul de **Name** van het sjabloon in.
1. Selecteer een **Template type**.
1. Selecteer de **Culture** (taal) waarin het sjabloon is geschreven.
1. Geef een notatie voor de bestandscode van het automatisch gegenereerde pdf-bestand op.
   - Bijvoorbeeld `Invoice_{Code}` voor het nieuwe factuursjabloon, waarbij `{Code}` een teller is die bij elk nieuw gegenereerd document met 1 wordt verhoogd.
1. Geef de **Shop** op waarvoor het sjabloon wordt gebruikt, of laat het veld leeg om het voor meerdere shops te gebruiken.
1. Klik op de knop **Available MergeFields** en geef de code van een record op (order, factuur of zending) om de uitgebreide, dynamische lijst met beschikbare merge fields te bekijken. Er opent een pdf-bestand in een pop-upvenster met de lijst van alle merge fields voor dat record, met naast de veldnamen de waarden van het geselecteerde record.
1. Bewerk een Word-document of maak een nieuw document aan en vul het met de **MergeFields** van ShopCtrl.
1. Klik op de knop **Upload a new template**, kies een Word-bestand als sjabloon en klik op **Open** om het bestand te uploaden. Het geüploade sjabloon wordt getoond in het deelvenster **Template Preview**.
1. Test het sjabloon door op de knop **Test template** te klikken en de code van een bestaand record op te geven (bijvoorbeeld voor sjablonen van het type order: de code van een bestaande order).
1. Bepaal of u het nieuwe sjabloon wilt publiceren door het vakje **Publish** aan te vinken.
1. Klik op **Save** of **Save and Close** om de wijzigingen toe te passen.

Zie [Merge fields](./merge-fields-in-document-templates.md), [Collecties](./collections-in-document-templates.md) en [Voorwaarden](./conditions-in-document-templates.md) voor meer informatie over het maken van universele documentsjablonen voor een shop.
Meer informatie over de beschikbare merge fields vindt u in de [lijst met merge fields](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md).

:::warning[**Let op**]

Bestandseisen: Microsoft Word® 2007 of later (.docx)

:::

Voorbeeld van een getest sjabloon:

![Gegenereerd Nederlands offertesjabloon](/img/Offer-NL-template-generated.jpg)

:::warning[**Let op:**]

Als u een sjabloon bewerkt dat als standaard is ingesteld voor documenten van een shop, wordt het bijgewerkt zodra u het opslaat. Het eerstvolgende document dat wordt gegenereerd, gebruikt de bijgewerkte versie van het sjabloon.

:::
