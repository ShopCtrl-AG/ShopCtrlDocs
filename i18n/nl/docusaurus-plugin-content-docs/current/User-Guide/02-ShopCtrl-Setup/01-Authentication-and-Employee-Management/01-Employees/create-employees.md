---
sidebar_position: 1
slug: /docs/create-employees
description: "Maak een medewerkersaccount aan in ShopCtrl: login, volledige naam, openbare alias, koppeling aan een shop en rol. Hiervoor is de rol Shop Owner Admin vereist."
---

# Medewerkers aanmaken

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Een gebruikersaccount in ShopCtrl heet een medewerkersaccount. Een leidinggevende kan dit account aanmaken en beheren. Een medewerker kan aan de shop worden gekoppeld met een rol die past bij zijn of haar verantwoordelijkheden in die shop. Medewerkers kunnen hun accountgegevens zelf bijwerken via hun persoonlijke accountinstellingen.

## Een medewerkersaccount aanmaken {#how-to-create-an-employee-account}

![Detailpagina van een nieuwe medewerker](/img/create-employee-details-page.png)

Een medewerkersaccount aanmaken:

1. Ga naar **Configuration > Employees** en klik op de knop **Add**.
2. Vul de **Login** van de medewerker in. Standaard moet een e-mailadres als login worden gebruikt.
3. Vul **Full name** en **Public alias** in. Beide kunnen als merge fields in e-mailsjablonen worden gebruikt.
4. Vul het **Password** twee keer in. Dit wachtwoord geeft u door aan de medewerker voor de eerste keer inloggen.
5. Vink **Must change password at next login** aan om de medewerker direct na het inloggen te vragen het wachtwoord te wijzigen.
6. Selecteer de **Culture** van de medewerker.
7. (Optioneel) Upload een **Photo** van de medewerker.
8. Selecteer de **Birthdate** en het **Gender** van de medewerker.
9. Vul de contactgegevens van de medewerker in: **Email** en **Mobile Phone**.
10. Vul de **Job Title** en de locatie bij **Office** in.
11. (Optioneel) Selecteer de bijbehorende **Employee groups**.
12. Bepaal of het account actief moet zijn door het selectievakje **Enabled** aan te vinken.
13. Koppel de medewerker vervolgens aan een shop:
    <img src={require("/img/shop-roles.png").default} height="" width="800" />
    1. Ga naar **Employee details page > Shop Roles**.
    2. Selecteer een shop in het rechterdeelvenster Available Shops.
    3. Klik op **Add As** en selecteer de rol die u de medewerker in deze shop wilt geven.
    4. De nieuwe koppeling verschijnt in het linkerdeelvenster, met de shop en de rol van de medewerker in die shop.
14. Als berichten (messaging) voor de shops zijn ingeschakeld, moet de medewerker aan messaging worden gekoppeld om berichten te kunnen bekijken, ontvangen en versturen. Open het tabblad **Messaging Permissions** en vink bij de betreffende shops de selectievakjes voor chat aan. U kunt dit ook later doen vanuit de shopconfiguratie.
    <img src={require("/img/messaging-permissions.png").default} height="" width="800" />

15. U kunt informatie toevoegen op andere tabbladen, zoals **Phone Extensions**, **Addresses**, **Phone books** en **Parameters**.
16. Klik op **Save** of **Save and Close** om het nieuwe medewerkersaccount aan te maken.

:::warning[]

Let op: sommige instellingen zijn pas beschikbaar nadat u het medewerkersaccount voor de eerste keer hebt opgeslagen.

:::

## Wachtwoordcomplexiteit afdwingen {#how-to-enforce-password-complexity}

U kunt de eisen voor wachtwoordcomplexiteit instellen op de pagina **Shop Owner Details > Password Settings**.
De standaard aanbevolen instellingen zijn als volgt:

<img src={require("/img/enforce-password-complexity.png").default} height="" width="800" />

Voor een extra beveiligingslaag raden we aan [tweestapsverificatie](./two-factor-authentication.md) in te schakelen voor uw gebruikers.
