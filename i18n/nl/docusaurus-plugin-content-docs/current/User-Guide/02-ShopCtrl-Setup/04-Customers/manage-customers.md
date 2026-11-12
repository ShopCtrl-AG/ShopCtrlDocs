---
sidebar_position: 2
slug: /docs/manage-customers
description: "Zoek, filter en open klanten in ShopCtrl om orderstatistieken, gespreksgeschiedenis, facturen, contracten en retouren te bekijken."
---

# Klanten beheren

Alle klanten die handmatig zijn aangemaakt of via de ordersynchronisatie zijn geïmporteerd, beheert u op de pagina **Sales > Customers**.
U kunt een klant zoeken, en klanten filteren op groep of op activeringsstatus.

![Overzichtstabel van klanten](/img/customers-overview-table.png)

## De detailpagina van een klant bekijken {#view-customer-details-page}

Om de detailpagina van een klant te bekijken, gaat u naar **Sales > Customers**.
Zoek de klant op met de zoekbalk en dubbelklik op de rij van de klant om de detailpagina te openen.

Op deze pagina kunt u de gegevens van de klant bewerken, orderstatistieken, de gespreksgeschiedenis en facturen bekijken, en contracten en retouren beheren.
De belangrijkste klantgegevens staan in het bovenste deelvenster. Alle bijbehorende informatie is verdeeld over de onderdelen van het menu.

![Detailpagina van een klant](/img/customers-details-page.png)

### Orders van de klant bekijken {#view-customer-orders}

De geschiedenis van de orders die de klant heeft geplaatst. U kunt een nieuwe order aanmaken door te klikken op
![Orders van de klant](/img/customer-details-orders.png)

### Facturen van de klant bekijken {#view-customer-invoices}

De geschiedenis van alle facturen die aan de klant zijn gestuurd.
![Facturen van de klant](/img/customer-details-invoices.png)

### De gespreksgeschiedenis met een klant bekijken {#view-conversation-history-with-a-customer}

Op dit tabblad staan alle e-mails die naar de geadresseerde zijn verstuurd, chatsessies met de klant en gesprekken die via VoIP zijn gevoerd.

![Gespreksgeschiedenis met de klant](/img/customer-details-conversation-history.png)

### Taken bekijken en beheren {#view-and-manage-tasks}

Op dit tabblad staan de taken die horen bij de klant en bij de orders, facturen, offertes of tickets van de klant.
Gebruik de linkknop aan het einde van de rij om de taak in een nieuw tabblad te openen. Of klik op het selectievakje ![Pictogram Gereed markeren](/img/mark-done-icon.png) om de taak als gereed te markeren.
![Taken van de klant](/img/customer-details-tasks.png)

### Retouren van de klant bekijken {#view-customer-returns}

Op dit tabblad vindt u alle retourverzoeken die de klant heeft ingediend. Dubbelklik op de rij van een retour om de detailpagina van de retour in een nieuw tabblad te openen.
![Retouren van de klant](/img/customer-details-returns.png)

### Offertes van de klant bekijken {#view-customer-offers}

Offertes die naar de klant zijn verstuurd. U kunt op dit tabblad een nieuwe offerte aanmaken door op **Add** te klikken en een shop te selecteren. De detailpagina van de nieuwe offerte wordt in een nieuw tabblad geopend.
_Dubbelklik op de rij van een offerte om deze in een nieuw tabblad te openen en te bewerken._
![Offertes van de klant](/img/customer-details-offers.png)

### Tickets van de klant bekijken {#view-customer-tickets}

Op dit tabblad ziet u een overzicht van alle tickets die bij de klant horen, en kunt u een nieuw ticket aanmaken.
![Tickets van de klant](/img/customer-details-tickets.png)

### Exportgegevens van de klant bekijken {#view-customer-export-info}

Bevat loggegevens over de export naar externe boekhouddiensten zoals [Exact](/User-Guide/05-Financial/Connectors/exact-online.md) en Twinfield.

![Exportgegevens van de klant](/img/customer-details-export-info.png)

## Klanten samenvoegen {#merge-customers}

Als u dubbele klanten vindt, kunt u de dubbele records verwijderen door de klanten samen te voegen.

Een klant samenvoegen:

1. Ga naar **Sales > Customers**.
2. Zoek de klant die u wilt samenvoegen en open deze om te bewerken.
3. Klik op **Merge**.
4. Zoek en selecteer in het nieuwe pop-upvenster de klant waarmee u wilt samenvoegen.
5. Klik op **Merge**.

De klant wordt verwijderd en alle bijbehorende gegevens worden verplaatst naar de andere klant die u hebt gekozen.

:::warning

Wees voorzichtig met het samenvoegen van klanten. Deze actie kan niet ongedaan worden gemaakt.

:::

## Klanten deactiveren {#deactivate-customers}

Standaard is elke nieuwe klant, handmatig aangemaakt of geïmporteerd, actief. Om inactieve klanten uit een lijst te verwijderen, deactiveert u ze. U kunt dan geen offerte, order of contract meer voor deze klant aanmaken, en de klant niet meer aan een ticket koppelen.

Een klant deactiveren:

1. Ga naar **Sales > Customers**.
2. Zoek een klant en open deze om te bewerken.
3. Vink het selectievakje **Active** naast het veld voor de bedrijfsnaam uit.
4. Klik op **Save** of **Save and Close**.

## Klantgegevens obfusceren {#obfuscate-customer-data}

Bij het obfusceren van klantgegevens worden gegevens zoals de naam en contactgegevens van de klant vervangen door fictieve gegevens.
Om persoonlijke klantgegevens niet langer te bewaren dan nodig, kunt u de gegevens op shopniveau of handmatig per klant obfusceren.

Om bepaalde contactgegevens van een klant te bewaren wanneer u op shopniveau obfusceert, vinkt u **Obfuscate enabled** uit.
<img src={require("/img/customer-details-customer-data-obfuscation.png").default} height="" width="800" />

Een klant handmatig obfusceren:

1. Ga naar **Sales > Customers**.
2. Zoek een klant en open deze om te bewerken.
3. Selecteer in het menu het onderdeel **Customer Data Obfuscation**.
4. Klik op de knop **Obfuscate**.
5. Klik op **Save** of **Save and Close**.

Door de obfuscatie worden de contactgegevens van de klant vervangen door fictieve gegevens. Dit geldt voor alle gekoppelde offertes en orders. E-mails, VoIP-gesprekken en chatgesprekken van de klant worden definitief uit het systeem verwijderd.

:::warning[Let op]

Orders, offertes, tickets en contactgegevens van de klant kunnen niet worden geobfusceerd zolang de betreffende records de status actief hebben.

:::

## Een bulkmail versturen {#send-bulk-email}

U kunt met een vooraf gemaakt shopsjabloon e-mails genereren en naar een aantal van uw klanten versturen.
Een gepersonaliseerde e-mail in één keer naar meerdere adressen versturen:

1. Ga naar **Sales > Customers**.
2. Selecteer de klanten naar wie u een e-mail wilt sturen.
3. Klik op **Action > Auto mail**.
4. Selecteer in de vervolgkeuzelijst een **template** waarmee de e-mail automatisch wordt gegenereerd.

<img src={require("/img/customers-bulk-mail.png").default} height="" width="800" />

## Klanten verwijderen {#delete-customers}

Het verwijderen van een klant is definitief. Anders dan bij het deactiveren van een klant kan het verwijderen niet ongedaan worden gemaakt.

Een klant verwijderen:
1. Ga naar **Sales > Customers**.
2. Zoek en selecteer de klant die u wilt verwijderen.
3. Klik op **Delete** > **Yes**.

:::info[]

Klanten die aan orders zijn gekoppeld, kunnen niet worden verwijderd.

:::
