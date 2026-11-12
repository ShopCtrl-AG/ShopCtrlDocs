---
sidebar_position: 5
slug: /docs/manomano
description: "Koppel ManoMano aan ShopCtrl met een API-sleutel voor productie om orders te importeren en te accepteren en trackinggegevens terug te sturen naar ManoMano."
---

# Mano Mano

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Met de ManoMano-connector kunt u orders importeren en accepteren, en trackinggegevens rechtstreeks naar Mano Mano terugsturen.

## De integratie met ManoMano instellen {#setting-up-integration-with-manomano}

Om de integratie in te stellen, maakt u eerst een API-sleutel aan voor uw productieomgeving. Volg hiervoor de stappen in dit supportartikel van ManoMano: [How to generate my API key ?](https://somanomano.zohodesk.eu/portal/en/kb/articles/how-to-generate-my-api-key#How_can_I_generate_an_API_key_for_the_Production_environment_)

## De synchronisatie met Mano Mano instellen in ShopCtrl {#setting-up-mano-mano-synchronization-in-shopctrl}

:::warning[Voordat u begint]

Stel de bijbehorende valuta, btw-tarieven en betaalmethoden voor uw ShopCtrl-shop in voordat u de synchronisatie met Mano Mano inschakelt.

:::
![Verbindings- en functionele instellingen voor ManoMano](/img/connection-functional-settings-manomano.png)

De synchronisatie in ShopCtrl instellen:

1. Log in bij uw ShopCtrl-account als gebruiker met de rol **Shop Owner Admin**.
2. Selecteer in het navigatiemenu **Configuration > Shops** om de lijst met aangemaakte shops te openen.
3. Selecteer de shop waarvoor u de Mano Mano-synchronisatie wilt instellen en klik op **Edit** om de shopinstellingen te openen.
4. Selecteer in het menu **Shop synchronization > Mano Mano Synchronization**.
5. Vul eerst onder **Connection settings > Production** (groen gemarkeerd) de **API key** in die u voor de productieomgeving hebt gegenereerd.
6. Vul daaronder uw **Seller contract number** van ManoMano in.
7. Klik op de knop **Connect** om de verbinding te testen. Als alle gegevens juist zijn ingevuld, verschijnt er een pop-upvenster met de melding dat de verbinding is geslaagd.
8. (_Optioneel_) U kunt in ms een aangepaste pauze tussen API-aanroepen opgeven. Of laat het veld leeg om de standaardtime-out van 5 minuten voor API-aanroepen te gebruiken.
9. (_Optioneel_) Schakel API-logging in om de gedetailleerde logboeken van elke API-aanroep te kunnen bekijken.
10. Ga terug naar de bovenkant van het deelvenster, naar het gedeelte **Functional settings** - **Orders**. Vink de functies aan die u wilt gebruiken:
    - **Import Orders from Mano Mano** - nieuwe orders worden in ShopCtrl geïmporteerd.
    - **Order integration to ManoMano** - een instelling die nodig is om track & trace-gegevens naar ManoMano te sturen
    - **Auto-accept orders** - geïmporteerde orders met de status pending worden automatisch als geaccepteerd gemarkeerd
    - **Send Track&Trace info to ManoMano** - zodra de order in ShopCtrl als verzonden is gemarkeerd, wordt automatisch een verzoek verstuurd om een zending in Mano Mano aan te maken. De zending in Mano Mano wordt automatisch bijgewerkt met de trackingcode en de tracking-URL.

    :::warning


    Functies voor het bijwerken van **Products**, zoals **Export Stock to ManoMano** en **Export Price to ManoMano**, zijn nog in ontwikkeling en nog niet beschikbaar.

    :::
11. **Carrier account mapping**. Hier koppelt u de vervoerders van Mano Mano aan die van ShopCtrl. Deze koppeling wordt gebruikt voor automatische updates.
    ![Koppeling van vervoerdersaccounts voor ManoMano](/img/manomano-carrier-account-mapping.png)
12. Schakel de synchronisatie bovenaan het deelvenster Settings in met **Enable**.
13. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.
