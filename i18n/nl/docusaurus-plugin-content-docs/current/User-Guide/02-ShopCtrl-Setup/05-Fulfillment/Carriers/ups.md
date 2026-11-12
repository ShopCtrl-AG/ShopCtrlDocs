---
sidebar_position: 9
slug: /docs/ups
description: "Stel de UPS-integratie in ShopCtrl in met uw gebruikersnaam, wachtwoord, access license number en shipper account number."
---

# UPS 


:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::


<img src={require("/img/ups-logo.png").default} height="" width="100" />

## De UPS-integratie instellen {#setting-up-ups-integration}

Om de UPS-integratie in ShopCtrl te gebruiken, hebben we de volgende gegevens van uw UPS-account nodig:

*  Gebruikersnaam
*  Wachtwoord
* Access license number
* Shipper account number

De gebruikersnaam en het wachtwoord zijn de inloggegevens die u voor UPS.com gebruikt, en het shipper account number is uw UPS-accountnummer. Het access license number krijgt u van UPS wanneer u een toegangssleutel (access key) aanvraagt.

Om een access key aan te vragen, gaat u naar de pagina [UPS Developer Kit](https://www.ups.com/upsdeveloperkit), logt u in met uw UPS-account en klikt u op **Request an access key**.
U moet een aantal vragen beantwoorden en een accountnummer kiezen dat aan deze access key wordt gekoppeld.
- I need an access key because: "I was informed by a software vendor that I need an access key"
- Software/Vendor name: "ShopCtrl"
- Choose an account to associate with this access key: het account dat u aan deze integratie wilt koppelen

<img src={require("/img/request-access-key-form.png").default} height="" width="800" />

Nadat u de stappen hebt doorlopen en de aanvraag hebt ingediend, geeft UPS een access key uit. Bewaar deze sleutel; u hebt hem later nodig op de configuratiepagina van de vervoerder.

## De UPS-integratie in ShopCtrl instellen {#setting-up-ups-integration-on-shopctrl}

De synchronisatie met UPS stelt u in per verzenddienst die u wilt gebruiken.

<img src={require("/img/ups-carrier-details.png").default} height="" width="800" />

Een UPS-vervoerdersaccount configureren:

1. Ga naar **Configuration > Transport > Carrier Accounts**.
2. Klik op **Add** en selecteer **UPS** in de vervolgkeuzelijst. De detailpagina van de nieuwe vervoerder wordt in een nieuw tabblad geopend.
3. Vul een duidelijke **Name** voor de vervoerder in, bij voorkeur met de gebruikte dienst erin.
4. (Optioneel) Selecteer de **Shops** waarvoor de vervoerder wordt gebruikt.
5. (Optioneel) Selecteer de **Warehouses** waarvoor de vervoerder beschikbaar is.
6. Vul daarna de **Shipper info** in. Dit zijn de contactgegevens van uw bedrijf, die worden gebruikt om labels te genereren:
    1. Shipper name
    2. Shipper address
    3. Shipper postal code
    4. (Optioneel) Shipper state
    5. Shipper country code
    6. Shipper phone number
    7. Shipper mail address
    8. Goods description
7. Vul de **User name** van uw UPS-account in.
8. Vul het **Password** van dit UPS-account in.
9. Vul de **Shipper attention name** in die op het verzendlabel wordt afgedrukt.
10. Vul het **Notification email address** in.
11. Vul het **Access license number** in. Dit is de access key die u van UPS hebt gekregen.
12. Vul het nummer van uw **Shipper account** in dat aan de access key is gekoppeld.
13. Klik op **Test credentials** om te controleren of de authenticatie is geslaagd.
14. U kunt nu de **Service code** kiezen die voor dit account wordt gebruikt.
15. Klik op **Save** of **Save and Close** om de wijzigingen voor de vervoerder toe te passen.

Zodra alles klaar is, schakelt u de vervoerder in met **Enable**, zodat deze direct wordt meegenomen in de verdeling over vervoerders.
