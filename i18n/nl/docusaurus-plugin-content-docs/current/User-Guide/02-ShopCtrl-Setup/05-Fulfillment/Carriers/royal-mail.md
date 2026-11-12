---
sidebar_position: 8
slug: /docs/royal-mail
description: "Koppel Royal Mail Click & Drop aan ShopCtrl om verzendlabels te genereren, met een apart vervoerdersaccount voor elke dienst van Royal Mail."
---
# Royal Mail 


<img src={require("/img/uk-royal-mail-icon.png").default} height="" width="" />

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::



Met de Royal Mail Click & Drop-connector genereert u in ShopCtrl de labels voor uw orders.

## De integratie met Royal Mail (VK) instellen {#setting-up-uk-royal-mail--integration}

Om een integratie tussen ShopCtrl en uw Royal Mail-account in te stellen, maakt u eerst een integratie aan in uw Royal Mail Click & Drop [Online Business Account](https://www.royalmail.com/discounts-payment/credit-account/online-business-account).

Volg deze instructies van Royal Mail om een integratie aan te maken en een **authorization key** te verkrijgen: [How to import orders with the Click & Drop API](https://help.parcel.royalmail.com/hc/en-gb/articles/360011462338-How-to-import-orders-with-the-Click-Drop-API).


## De synchronisatie met Royal Mail Click & Drop (VK) instellen in ShopCtrl {#setting-up-uk-royal-mail-click--drop-synchronization-in-shopctrl}

De synchronisatie met Royal Mail Click & Drop stelt u in per verzenddienst die u wilt gebruiken.
Voor verschillende diensten van Royal Mail moeten we in ShopCtrl verschillende Royal Mail Click & Drop-vervoerdersaccounts configureren. Ze maken allemaal verbinding met hetzelfde Royal Mail Click & Drop OBA.
ShopCtrl bepaalt met welke vervoerder de order wordt verzonden op basis van de afmetingen van de productverpakking en de limieten en prijzen die in de vervoerdersaccounts zijn ingesteld. Wanneer u in ShopCtrl een zending aanmaakt, wordt de pakketgrootte automatisch berekend op basis van de afmetingen van de productverpakking, en worden de pakketafmetingen naar Royal Mail gestuurd.

:::warning[**Voordat u begint**]

Zorg dat u **contactgegevens** hebt ingevuld voor alle **Warehouses** in ShopCtrl van waaruit u orders wilt verzenden met Royal Mail Click & Drop. De contactgegevens uit de magazijndetails worden gebruikt als afzendergegevens ("Ship From") wanneer verzendlabels automatisch worden aangevraagd.

:::

<img src={require("/img/uk-royal-mail.png").default} height="" width="800" />

De synchronisatie met de vervoerder instellen in ShopCtrl:

1. Ga naar **Configuration > Transport > Carrier Accounts**.
2. Klik op **Add** en selecteer **Royal Mail Click&Drop** in de vervolgkeuzelijst.
3. Vul een duidelijke **Name** voor de vervoerder in, bij voorkeur met de gebruikte dienst erin.
4. (Optioneel) Selecteer de **Shops** waarvoor de vervoerder wordt gebruikt.
5. (Optioneel) Selecteer de **Warehouses** waarvoor de vervoerder beschikbaar is.
6. Vul op het tabblad Specifics de API Base URL in: `https://api.parcel.royalmail.com/api/v1`.
7. Vul de **API key** in die u eerder in uw Royal Mail-account hebt gegenereerd.
8. Klik op **Test credentials** om de verbinding te controleren.
9. Vul de **Channel name** in. Dit is de naam van uw bedrijf in het Royal Mail Click & Drop OBA.
10. Selecteer in de vervolgkeuzelijst de **Service code**. Dit is de verzenddienst van Royal Mail.
11. (Optioneel) Selecteer het gewenste **Parcel format** dat past bij de gekozen dienst. Of laat het veld op **Undefined** staan.
12. Schakel de vervoerder in met **Enable**, zodat deze direct beschikbaar is voor orders.
13. Klik op **Save** of **Save and Close** om de wijzigingen toe te passen.


De lijst met verzenddiensten is een standaardlijst. Als uw Royal Mail OBA een uitgebreidere lijst met verzenddiensten ondersteunt, neem dan contact op met ons supportteam om extra diensten aan de lijst toe te voegen. Zie ook [Royal Mail - Manage your shipping services](https://help.parcel.royalmail.com/hc/en-gb/articles/360016578253-Manage-your-shipping-services).
