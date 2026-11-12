---
sidebar_position: 1
slug: /docs/create-shop
description: "Maak een shop aan in ShopCtrl (een webshop, marktplaats of fysieke winkel) met een eigen valuta, huisstijl, contactgegevens en sjablonen."
---

# Een shop aanmaken

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Een **Shop** in ShopCtrl is een verkoopkanaal waarlangs u orders binnenkrijgt. Dat kan een webshop zijn, een marktplaats of een fysiek verkooppunt ('In Store').
Elke shop heeft een eigen valuta, huisstijl, bedrijfscontactgegevens, document- en e-mailsjablonen, en een eigen synchronisatie met een webshop of marktplaats. Medewerkers kunnen met bepaalde rollen aan een shop worden gekoppeld. Die rollen geven hen een vaste set rechten die alleen voor die shop gelden.

## Een shop aanmaken {#how-to-create-a-shop}

U kunt een nieuwe shop aanmaken vanaf zowel het tabblad **Configuration > Shop Owners** als het tabblad **Configuration > Shops**.

![Site-informatie bij het aanmaken van een shop](/img/create-shop-site-information.png)
:::warning[**Let op**]

Sommige instellingen in het menu zijn pas beschikbaar nadat de shop voor de eerste keer is opgeslagen.

:::

Een shop aanmaken:

1. Ga naar het tabblad **Configuration > Shops**.
2. Klik op **Add** en selecteer de **Shop group** waaraan u de nieuwe shop wilt toevoegen.
3. Vul de **Name** van de shop in.
4. (Optioneel) Vul de **URL** in.
5. Selecteer het **Country** van de shop.
6. Wijzig indien nodig de vooraf geselecteerde **Culture** en **Currency**.
7. Kies het **type** shop: **Webshop**, **Marketplace** of **In Store**.
8. Upload een **Logo** door op de knop voor het kiezen van een bestand te klikken en een afbeelding te selecteren. Het logo kan worden gebruikt in de huisstijl van documentsjablonen.
9. Upload een **Icon**, alleen voor intern gebruik.
10. Vul de benodigde **Site Information** van het bedrijf in. Deze kan later worden gebruikt om samengevoegde documentsjablonen te vullen:
    1. Bedrijfsnaam
    2. Contactgegevens van de site
    3. Adresgegevens van de site
    4. Bank- en betaalgegevens van de site
11. Selecteer op het tabblad **Financial > Payment types** de belangrijkste **Payment types** die in uw shop worden gebruikt, en de standaardbetalingsvoorwaarden.
    ![Betaalmethoden in de shopinstellingen](/img/shop-settings-payment-types.png)
12. Selecteer op het tabblad **Financial > Payment terms** de **Default Payment terms** voor de shop.
    ![Betalingsvoorwaarden in de shopinstellingen](/img/shop-settings-payment-terms.png)
13. Markeer op het tabblad **Financial > VAT** alle **VAT tariffs** die in de shop worden gebruikt als beschikbaar.
    ![Btw-tarieven in de shopinstellingen](/img/shop-settings-vat-tariffs.png)
14. Geef het **Default VAT tariff** op dat voor de meeste producten wordt gebruikt.
15. Bepaal of prijzen inclusief of exclusief btw worden getoond door het selectievakje **Display Inc VAT** aan of uit te vinken.
16. Op het tabblad **Financial > Payment** kunt u de **Max payment deviation** opgeven: het maximaal toegestane verschil bij te weinig of te veel betalen. Als het openstaande bedrag of de te veel betaalde som binnen deze tolerantie valt, wordt de betaling toegewezen en wordt de order of factuur als betaald beschouwd.

    :::info[Info]

    De limiet voor **Max payment deviation** hangt af van de valuta van de shop. Voor euro's geeft u de afwijking bijvoorbeeld op in decimalen, terwijl u de afwijking voor Noorse kronen alleen in hele getallen kunt opgeven.
    
    :::


    ![Toewijzing van betalingen in de shopinstellingen](/img/shop-settings-payment-allocations.png)

17. Selecteer op het tabblad Warehouses de **Warehouses** die voor de shop beschikbaar zijn.
    ![Magazijnen in de shopinstellingen](/img/shop-settings-warehouses.png)
18. Klik op **Save and Close** om de shop aan te maken.
