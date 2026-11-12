---
sidebar_position: 1
slug: /docs/create-customers
description: "Maak in ShopCtrl handmatig een klant aan voor een particulier of een bedrijf, naast de klanten die automatisch uit uw verkoopkanalen worden geïmporteerd."
---

# Klanten aanmaken

Meestal worden klanten aangemaakt tijdens het synchroniseren van orders uit verkoopkanalen. U kunt klanten echter ook handmatig aanmaken of klantspecifieke instellingen bewerken, zodat u efficiënter werkt.

![Detailpagina van een klant](/img/customers-details-page.png)

## Een klant aanmaken {#create-a-customer}

Een klant handmatig aanmaken:

1. Ga naar **Sales > Customers**.
2. Klik op **Add**.
3. Maakt u een particuliere klant aan, vul dan de **Full name** van de klant in. Voor een zakelijke klant vult u de **Company name** in.
4. Vul het **Email**-adres van de klant in.
5. (Optioneel) Selecteer een **Customer group**.
6. Selecteer de **Culture** van de klant.
7. Vul onder **Topic menu > Contact info** de factuurgegevens (**Bill to**) van de klant in: **Phone, Address, Postal code, City, Country**.
8. Als de contactgegevens voor **Ship to** en Bill to niet hetzelfde zijn: 1. Vink het selectievakje **Bill to and ship to are the same** uit. 2. Vul de verzendgegevens in, waaronder **Company/Full name, Phone, Address, Postal code, City, Country**.
   ![Contactgegevens van de klant: Ship to](/img/customer-details-contact-info-ship-to.png)
9. Klik op **Save** of **Save and Close**.

## Contactpersonen van een bedrijf toevoegen {#add-company-contacts}

Om een contactpersoon binnen een zakelijke klant aan te maken, gaat u naar **Customer details page > Company Contacts**, klikt u op **Add** en vult u de naam, het telefoonnummer, het e-mailadres en de functie in. Om een contactpersoon te verwijderen, klikt u op het **delete**-teken ⛔ aan het einde van de rij van de contactpersoon.

![Contactpersonen van een zakelijke klant](/img/customer-details-company-contacts.png)

## Financiële instellingen van klanten instellen {#set-up-customers-financial-settings}

Op het tabblad **Customers > General info** kunt u klantspecifieke instellingen vastleggen, zodat u efficiënter werkt.

![Algemene gegevens van de klant](/img/customer-details-general-info.png)

Op het tabblad General info legt u aanvullende klantgegevens vast, en wijzigt of overschrijft u bepaalde financiële instellingen voor een specifieke klant.
U kunt de **birthday**, het **gender** en het **personal number** (bijvoorbeeld het burgerservicenummer) van de klant invullen.
**Receive newsletter**: bepaal of u deze klant wilt opnemen in de verzendlijst van uw nieuwsbrieven.

### Financieel {#financial}

**VAT free tariff:** - selecteer een klantspecifiek 0%-btw-tarief per land dat op de orders van de klant wordt toegepast.
**Max outstanding** - overschrijft de standaardinstelling van de ShopOwner voor het aantal onbetaalde orders of facturen waarna een melding wordt getoond.
**Payment terms** - stelt klantspecifieke betalingsvoorwaarden in.

### Factuur {#invoice}

**Invoice email** - vul indien nodig een e-mailadres van de klant in waarnaar automatisch gegenereerde facturen worden verstuurd.
**Reminder email** - vul een apart e-mailadres van de klant in waarnaar automatisch gegenereerde betalingsherinneringen worden verstuurd.
**Invoice mail template** - stel een klantspecifiek e-mailsjabloon voor facturen in, waarmee automatisch e-mails met facturen voor de klant worden gegenereerd.
**Invoice template** - stel een klantspecifiek documentsjabloon voor facturen in, waarmee automatisch facturen voor de klant worden gegenereerd.
**Auto-send invoice reminder** - bepaal of u betalingsherinneringen automatisch naar de klant wilt versturen.
Meer informatie vindt u in [Betalingsherinneringen](/User-Guide/05-Financial/Invoices/invoice-reminders.md).

:::info[]

Als deze velden niet zijn ingevuld, worden de standaardwaarden uit de shopinstellingen gebruikt.

:::

## Een notitie bij een klant toevoegen {#add-a-customer-note}

Op het tabblad Note kunt u privénotities over de klant invoeren en opmaken, alleen voor intern gebruik.
Het actiemenu bovenaan bevat alle knoppen die u nodig hebt om tekst te bewerken. U kunt ook naar HTML overschakelen door op de knop voor het bewerken van de broncode te klikken.

![Notitie bij een klant](/img/customer-details-note.png)

## Bijlagen van klanten beheren {#manage-customers-attachments}

Documenten die bij de klant horen, staan op het tabblad **Attachments**. Hier kunt u bijlagen van een klant downloaden, ordenen en toevoegen.

## Parameters toevoegen {#add-parameters}

Parameters zijn klantspecifieke parameters die u kunt gebruiken om de verwerking van orders te automatiseren.

## Contracten aanmaken {#create-contracts}

Op dit tabblad staan de contracten die voor een klant zijn aangemaakt. U kunt bestaande contracten beheren, nieuwe toevoegen en contracten die niet meer actief zijn verwijderen. Meer informatie vindt u in [Contracten](/User-Guide/04-Order-Management/contracts.md).

![Lijst met contracten van de klant](/img/customer-details-contracts-list.png)
