---
sidebar_position: 1
slug: /docs/creating-and-editing-email-templates
description: "Maak of bewerk een e-mailsjabloon in ShopCtrl op algemeen of shopniveau, met naam, soort en type, onder Configuration > Templates."
---

# E-mailsjablonen aanmaken en bewerken

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Power User** of hoger aan de shop gekoppeld zijn om sjablonen op het niveau van de shop owner aan te maken en te bewerken.

:::

## Een e-mailsjabloon bewerken of aanmaken {#how-to-edit-or-create-an-email-template}

![Nieuw e-mailsjabloon voor een factuur](/img/new-mail-template-inoice-en.png)

Een aangepast e-mailsjabloon bewerken of aanmaken:

1. Ga naar **Configuration > Templates > Mail Templates**.
2. Klik op **Add** en selecteer het niveau van het e-mailsjabloon: **Generic** of specifiek voor een **Shop**.
3. Vul de **Name** van het sjabloon in. De Code van het sjabloon wordt automatisch ingevuld.
4. Selecteer de **Mail Kind** en het **Type** van het sjabloon.
5. Selecteer een specifieke **Shop** waarvoor het sjabloon wordt gebruikt, of laat het veld leeg als het e-mailsjabloon voor meerdere shops wordt gebruikt.
   :::info[**Let op**]

   Alleen medewerkers met de rechten van Shop Owner Admin of hoger kunnen algemene e-mailsjablonen aanmaken die voor alle shops gelden.

   :::

6. Selecteer de **Culture** (taal) waarin het sjabloon is geschreven.
7. Optioneel: kies een **Group of employees** waarvoor het sjabloon beschikbaar is. Of laat het veld op de standaardwaarde "For all Groups" staan.
8. Voor sjablonen van het type Supplier: selecteer een specifieke **Supplier** waarvoor het sjabloon wordt gebruikt, of laat het veld leeg als het e-mailsjabloon voor meerdere leveranciers wordt gebruikt.
9. Vul de onderwerpregel (**Subject**) in. Ook deze kan met merge fields worden gevuld.
10. Pas de tekst van de e-mail (**mail body**) aan met de opmaakopties in het menu bovenaan. Of schakel over naar Code View om de HTML-versie van het e-mailsjabloon te bewerken.
11. Vul het onderwerp en de tekst van de e-mail met de juiste **merge fields**. Met de vervolgkeuzeknoppen voor merge fields boven de tekst van de e-mail hebt u snel toegang tot de meestgebruikte merge fields. Of klik op de knop **Available MergeFields** en geef de code van een record op (order, factuur of zending) om de uitgebreide, dynamische lijst met beschikbare merge fields te bekijken. Er opent een pdf-bestand in een pop-upvenster met de lijst van alle relevante merge fields voor dat record, met naast de veldnamen de waarden van het geselecteerde record.
12. _(Optioneel)_ Voor interne e-mailsjablonen: voeg een **Attachment** toe of voeg een **Report** toe dat automatisch wordt gegenereerd op het moment dat de e-mail wordt aangemaakt.
13. Selecteer een **Category** voor het e-mailsjabloon. De e-mail die met het sjabloon wordt aangemaakt, krijgt automatisch deze categorie.
14. Klik op de knop **Test Template** en geef de code van een bijbehorend record op om het nieuwe sjabloon te testen.
15. Klik als u klaar bent met het e-mailsjabloon op **Save** of **Save and Close**.

Zie [Merge fields](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/merge-fields-in-email-templates.md), [Collecties](collections-in-email-templates.md) en [Voorwaarden](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/conditions-in-email-templates.md) voor meer informatie over het maken van universele sjablonen voor een shop.
Meer informatie over de beschikbare merge fields vindt u in de [lijst met merge fields](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md).
:::info[**Let op** ]

Factuur- en orderdocumenten worden automatisch gegenereerd en als pdf-bestanden aan de e-mail toegevoegd, afhankelijk van het gekozen type e-mailsjabloon.

:::

In plaats van de URL van uw shop uit te typen, kunt u bijvoorbeeld het merge field `$$Shop.UrlSecure$$` selecteren in de vervolgkeuzelijst **Shop** in het menu van de editor. ShopCtrl haalt de URL van de shop dan automatisch op uit het veld Shop Details Page > URL.

:::warning[**Let op**]

Tekst kopiëren en plakken in de opmaakeditor, vooral merge fields, kan de code van de merge fields beschadigen. Controleer of de merge fields kloppen door van de weergave naar de codeweergave over te schakelen.

:::
