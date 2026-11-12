---
sidebar_position: 3
slug: /docs/configure-offers
description: "Bereid ShopCtrl voor op offertes door een documentsjabloon, e-mailsjablonen per taal en de offertestatussen voor het volgen van de voortgang in te stellen."
---
# Offertes configureren

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Om offertes te gebruiken, stelt u een documentsjabloon voor de shop in, maakt u e-mailsjablonen aan in de gewenste talen en legt u de offertestatussen vast die het beheer van offertes overzichtelijk maken.

## E-mailsjablonen {#mail-templates}
Om offertes te gebruiken, maakt u e-mailsjablonen aan in elke taal waarin u uw klanten wilt benaderen.

Maak e-mailsjablonen van het **type Offer** aan en sla ze op via **Configuration > Templates > Mail templates**. Met merge fields kunt u per taal één universeel sjabloon maken dat in verschillende shops kan worden gebruikt.
Deze e-mailsjablonen worden geladen in de lijst met beschikbare sjablonen wanneer u een offerte naar een klant e-mailt.
Meer informatie vindt u bij [E-mailsjablonen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/index.md).

## Documentsjablonen {#document-templates}
ShopCtrl levert een standaarddocumentsjabloon voor offertes. U kunt dit naar wens aanpassen en vertaalde kopieën maken in de taal die in uw shop wordt gebruikt. Meer informatie vindt u bij [Documentsjablonen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/index.md).

Een documentsjabloon voor offertes instellen:

<img src={require("/img/shop-settings-socument-templates.png").default} height="" width="800" />

1. Klik in het deelvenster met verkoopkanalen op het pictogram van de shop en selecteer **Settings** in de vervolgkeuzelijst.
2. Selecteer in het menu **Document templates**.
3. Selecteer het gewenste offertesjabloon in de vervolgkeuzelijst.
4. Klik op **Save and Close** om de wijzigingen voor de shop toe te passen.

## Offertestatussen instellen {#setup-offer-statuses}

Hieronder staan de standaardstatussen voor offertes. U kunt het pictogram en de naam van een status altijd wijzigen.
U vindt de statussen op de pagina **Configuration > Statuses > Offer statuses**. Dubbelklik op een standaardstatus om de naam of de details ervan te wijzigen.

### Hoofdstatus {#main-status}

| <img src={require("/img/house.png").default} height="18" width="18" /> | Main Status | Base Status | Betekenis |
| --- | --- | --- | --- |
| <img src={require("/img/image(15).png").default} height="" width="" /> | Active | Active | Actieve offertes |
| <img src={require("/img/image(14).png").default} height="" width="" /> | Concept | Pause | De offerte wordt nog verwerkt |
| <img src={require("/img/image(17).png").default} height="" width="" />  | Finished | Finished | De offerte is geaccepteerd |
| <img src={require("/img/image(18).png").default} height="" width="" /> | Cancelled | Cancel | De offerte is geannuleerd |
| <img src={require("/img/image(18).png").default} height="" width="" /> | Rejected | Cancel | De offerte is afgewezen |

U kunt een onbeperkt aantal statussen van het type **Rejected** toevoegen om de redenen voor afwijzing van offertes bij te houden.

### Aangepaste status {#custom-status}

Aangepaste statussen hebben geen invloed op de hoofdstatus van de offerte. Gebruik deze statussen om uw werkproces voor offertes overzichtelijker en eenvoudiger te maken.

| <img src={require("/img/tag_custom.png").default} height="18" width="18" /> | Custom Status | Base Status | Betekenis |
| --- | --- | --- | --- |
| <img src={require("/img/image(15).png").default} height="" width="" /> | Active | Active | Vrij te gebruiken |
| <img src={require("/img/image(14).png").default} height="" width="" /> | On hold | Pause | Vrij te gebruiken |
| <img src={require("/img/image(17).png").default} height="" width="" />  | Finished | Finished | Vrij te gebruiken |

## Herkomst van leads (Sales source lead) {#sales-source-lead}

Om bij een offerte een **Sales source lead** te kunnen opgeven, maakt u eerst een lijst met bronnen waaruit u kunt kiezen.
Klik op **Add** en vul de **naam** van de bron in om een nieuwe bron aan te maken. Klik op Save om deze aan de lijst toe te voegen.

<img src={require("/img/sales-lead-source-create.png").default} height="" width="800" />


### Aanvullende configuratie {#additional-configuration}

Als **shop owner** kunt u het kopiëren van offertes beperken tot offertes van het lopende jaar.
Ga hiervoor naar de pagina **Shop owner details** en schakel op het tabblad **Offers** de instelling '**Allow copy offers of the current year only**' in.
Zo voorkomt u dat medewerkers oude offertes kopiëren met mogelijk verouderde contact- en financiële gegevens.

<img src={require("/img/allow-copy-offers-of-the-current-year.png").default} height="" width="800" />
