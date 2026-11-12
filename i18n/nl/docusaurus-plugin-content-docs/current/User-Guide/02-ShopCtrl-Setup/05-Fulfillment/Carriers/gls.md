---
sidebar_position: 5
slug: /docs/gls
description: "Koppel GLS aan ShopCtrl met uw MyGLS-gegevens om pakket- en vrachtorders te versturen, expressdiensten te boeken en labels en trackinggegevens te ontvangen."
---

# GLS 


<img src={require("/img/gls-icon.png").default} height="" width="200" />

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

## Over GLS {#about-gls}

GLS Group biedt pakketdiensten aan in 40 Europese landen, 8 Amerikaanse staten en Canada, voornamelijk via eigen dochterondernemingen en daarnaast via betrouwbare partnerbedrijven.
GLS biedt bedrijven, van klein tot groot en uit alle sectoren, betrouwbare oplossingen voor pakketten, vracht en expresszendingen, nationaal en internationaal, zowel B2B als B2C.

## Over de integratie {#about-integration}
ShopCtrl biedt een volledig geautomatiseerde koppeling met uw MyGLS-gegevens. U kunt pakket- en vrachtorders rechtstreeks naar GLS sturen en extra expressdiensten voor uw zendingen boeken.
Na een geslaagde aanroep stuurt de GLS API een pdf met het verzendlabel terug, samen met de trackingcode en de tracking-URL. Deze worden automatisch aan de zendingen toegevoegd.

Meer informatie over de diensten van GLS NL vindt u op de pagina's [Parcel](https://gls-group.eu/NL/nl/over-ons/gls-netherlands/parcel), [Freight](https://gls-group.eu/NL/nl/over-ons/gls-netherlands/freight) en [Express services](https://gls-group.eu/NL/nl/over-ons/gls-netherlands/express) van GLS.

Ondersteunde verzendtypen en diensten.

**Pakketten (tot 32 kg)**:

* Regular parcel
* Economy parcel
* Time Definite Express Service T9 - levering vóór 09:00 uur op werkdagen
* Time Definite Express Service T17 - levering vóór 17:00 uur op werkdagen
* Saturday Service S9 - levering vóór 09:00 uur op zaterdag
* Saturday Service S12 - levering vóór 12:00 uur op zaterdag
* Saturday Service S17 - levering vóór 17:00 uur op zaterdag



## Aan de slag met de GLS-integratie {#how-to-start-using-gls-carrier-integration}

Om de GLS-integratie te gebruiken, hebt u een gebruikersnaam, wachtwoord en klant-ID voor [MyGLS NL](https://my.gls.nl/login) nodig.
Neem contact op met de support van GLS voor meer informatie over het aanmaken en configureren van een MyGLS-account.


In de tussentijd kunt u de GLS-integratie testen door verbinding te maken met de test-API. Neem contact op met GLS om de API-sleutel voor de testomgeving te krijgen. U kunt dan verzendlabels genereren en de labelgegevens controleren.

:::warning[]

De vervoerder **GLS V2** haalt de **Shipper info** uit het magazijn van waaruit de order wordt verzonden. Zorg dat de bedrijfsgegevens die u op het verzendlabel wilt afdrukken, zijn ingevuld op de pagina **Warehouse details > Address**.

:::

Verbinding maken met het GLS-testaccount en een testverzendlabel genereren:

1. Ga in uw acceptatieomgeving van ShopCtrl naar **Configuration > Transport > Carrier Accounts**.
2. Klik op **Add** en selecteer de vervoerder **GLS V2** in de lijst.
3. Vul een **Name** voor de GLS-vervoerder in.
4. Stel de **Priority** van de vervoerder in.
5. Kies de **Shops** en/of **Warehouses** waarvoor de vervoerder beschikbaar is.
6. Vul het **Customer number**, de **Username** en het **Password** in. Dit zijn de gegevens van uw MyGLS-account.
7. Vul de **Primary API subscription key** in die u van GLS hebt gekregen.
8. Vink **Test mode** aan.
9. Klik op **Save** of **Save and Close** om de vervoerder aan te maken.

U kunt nu testverzendlabels voor uw orders aanmaken.

:::warning[**Let op**]

Om fouten te voorkomen (bijvoorbeeld per ongeluk scannen), zet GLS GEEN barcodes op testlabels. Op productielabels staan wel barcodes.

:::


### Een GLS-vervoerdersaccount instellen in ShopCtrl {#setting-up-a-gls-carrier-account-in-shopctrl}

<img src={require("/img/create-gls-v2-carrier.png").default} height="" width="800" />

Een GLS-vervoerdersaccount aanmaken en configureren:

1. Ga naar **Configuration > Transport > Carrier Accounts**.
2. Klik op **Add** en selecteer de vervoerder **GLS V2** in de lijst.
3. Vul een **Name** voor de GLS-vervoerder in.
4. Stel de **Priority** van de vervoerder in.
5. Kies de **Shops** en/of **Warehouses** waarvoor de vervoerder beschikbaar is.
6. Vul in het deelvenster **GLS Account Configuration** het **Customer number** in dat u van GLS hebt gekregen.
7. Vul de **Username** in. Dit is de gebruikersnaam van uw MyGLS-account.
8. Vul het **Password** in. Dit is het wachtwoord van uw MyGLS-account.
9. Klik op **Test credentials** om te controleren of de verbinding met GLS is geslaagd.

11. (Optioneel) Vink het selectievakje **Economy parcel** aan om de economy-dienst voor uw zendingen te gebruiken (alleen beschikbaar voor het verzendtype Parcel).
12. (Optioneel) Kies een **Express service** (kan niet worden gecombineerd met Economy-verzending):

| Verzendtype | Beschikbare expressdienst |
| --- | --- |
| Parcel | Time Definite Express Service T9 - levering vóór 09:00 uur op werkdagen |
| Parcel | Time Definite Express Service T17 - levering vóór 17:00 uur op werkdagen |
| Parcel | Saturday Service S9 - levering vóór 09:00 uur op zaterdag |
| Parcel | Saturday Service S12 - levering vóór 12:00 uur op zaterdag |
| Parcel | Saturday Service S17 - levering vóór 17:00 uur op zaterdag |

12. Klik op **Save** of **Save and Close** om de vervoerder aan te maken.

:::warning[**Let op**]

Om een order met expresslevering te verzenden, moet het **telefoonnummer** van de klant zijn ingevuld.

:::
