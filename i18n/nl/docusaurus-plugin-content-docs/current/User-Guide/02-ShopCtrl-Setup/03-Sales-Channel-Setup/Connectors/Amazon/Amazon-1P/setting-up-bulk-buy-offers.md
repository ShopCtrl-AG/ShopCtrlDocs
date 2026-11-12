---
sidebar_position: 3
slug: /docs/setting-up-bulk-buy-offers
description: "Bereid ShopCtrl voor op Amazon Bulk Buy Offers: autorisatie per rol, meldingen bij het verlopen van offers, en ASIN- en EAN-koppeling bij uw producten."
---

# Bulk Buy Offers instellen

Om met Bulk Buy Offers aan de slag te gaan, doorloopt u drie stappen:

**Autorisatie instellen:** autorisatie is de basis voor toegangsbeheer en beveiliging in ons systeem. Bij het instellen van de autorisatie bepaalt u wie toegang heeft tot welke onderdelen van de functie, zodat alleen de juiste personen deze kunnen gebruiken en beheren.

**Meldingen instellen:** door meldingen (alerts) te configureren, wordt u tijdig gewaarschuwd wanneer Bulk Buy Offers dreigen te verlopen.

**Zorgen dat uw producten een ASIN en EAN hebben in ShopCtrl:** deze stap is essentieel om producten te kunnen koppelen tijdens de import van Bulk Buy Offers.

## Stap 1. Autorisatie en rolrechten voor medewerkers van de shop instellen {#step-1-setting-up-authorization-and-role-permissions-for-shop-employees}

In dit gedeelte leest u hoe u de autorisatie voor het goedkeuren van bulk buy offers configureert. Dit omvat het vastleggen van aanvullende rechten voor de rollen en het toewijzen van rollen aan uw teamleden in ShopCtrl.

Om onderscheid te maken tussen de afdelingen die betrokken zijn bij het goedkeuren van bulk buy offers, maakt u eerst afzonderlijke medewerkersrollen aan met verschillende sets rechten. U kunt ook de bestaande medewerkersrollen uitbreiden met een nieuwe reeks autorisatie-items voor het beheer van bulk buy offers.

Dit zijn de rechten die bij het goedkeuringsproces voor Bulk Buy Offers horen:

- VIew BulkBuy Offers
- Add BulkBuy Offers
- Edit BulkBuy Offers
- Delete BulkBuy Offers
- BulkBuy Offer Commerce Approval
- BulkBuy Offer Manufacture Approval
- BulkBuy Offer Warehouse Approval

### Bestaande rollen uitbreiden met rechten voor Bulk Buy Offers {#modifying-existing-roles-to-include-bulk-buy-offers-permissions}

In de standaardconfiguratie biedt ShopCtrl een aantal vooraf ingestelde rollen. Meer informatie over deze rollen vindt u in onze documentatie over [Rollen en rechten van medewerkers](/User-Guide/02-ShopCtrl-Setup/01-Authentication-and-Employee-Management/02-Roles-and-Permissions/understanding-employee-roles-and-permissions.md).
Om een medewerker specifieke rechten te geven voor het goedkeuren van Bulk Buy Offers in de Amazon 1P-shop in ShopCtrl, moet u mogelijk de bestaande standaardrol bewerken waaraan de medewerker is gekoppeld.
De rechten voor Amazon 1P Bulk Buy Offers staan op zichzelf. Gebruikers hebben echter mogelijk ook rechten nodig om producten te bewerken om de Bulk Buy-functie goed te kunnen gebruiken. Zie de instructies in [De rechten van een rol wijzigen](/User-Guide/02-ShopCtrl-Setup/01-Authentication-and-Employee-Management/02-Roles-and-Permissions/manage-roles-and-permissions.md#how-to-modify-role-permissions).

Een medewerker kan rechten hebben voor de rollen commerce, manufacture en warehouse tegelijk, en zo meerdere afdelingen vertegenwoordigen.

### Eigen rollen aanmaken voor verschillende afdelingen {#creating-custom-roles-for-various-departments}

Om de drie afdelingen duidelijk van elkaar te scheiden, is het daarentegen raadzaam drie aparte rollen aan te maken: Commerce, Manufacturing en Warehouse. Volg hiervoor de instructies in [Een nieuwe rol aanmaken](/User-Guide/02-ShopCtrl-Setup/01-Authentication-and-Employee-Management/02-Roles-and-Permissions/manage-roles-and-permissions.md#how-to-create-a-new-role).
Afhankelijk van de extra rechten die medewerkers nodig hebben, kunt u de rol user, power user of admin kopiëren en aan deze kopieën de aanvullende rechten voor bulk buy toekennen.

![Bulk buy-rollen in de autorisatie-instellingen](/img/authorization-bulk-buy-roles.png)

### Rollen aan medewerkers toewijzen {#assigning-roles-to-employees}

Na het aanmaken van de rollen koppelt u medewerkers met de gekozen rol aan de Amazon 1P-shop. Volg hiervoor deze stappen:

1. Ga naar het gedeelte **Configuration > Employees**.
2. Open voor elke medewerker het profiel om het te bewerken.
3. Koppel de medewerker met de juiste rol (Commerce, Manufacture of Warehouse) aan de shop, op basis van zijn of haar verantwoordelijkheden.
4. Sla het profiel van de medewerker op.

Als een medewerker al met een andere rol aan de shop is gekoppeld, moet u [de rol wijzigen](/User-Guide/02-ShopCtrl-Setup/01-Authentication-and-Employee-Management/01-Employees/manage-employees.md#change-the-employee-role-on-the-shop) naar de gekozen rol.



## Stap 2: meldingen instellen voor het verlopen van Bulk Buy Offers en de termijn voor het koppelen van inkomende inkooporders configureren {#step-2-set-up-notifications-for-bulk-buy-offers-expiry-and-configure-timeframe-for-mapping-incoming-purchase-orders}

Meldingen over het verlopen van bulk buy offers stelt u één keer in voor alle medewerkers die zijn gekoppeld aan de shop met de Amazon 1P-integratie.

Meldingen lopen via het systeem voor [meldingen (Alerts)](/User-Guide/03-Basic-Functions/alerts.md) van ShopCtrl. Dit betekent dat meldingen over mogelijk verlopen offers op shopniveau worden aangemaakt voor alle medewerkers die aan de Amazon 1P-shop zijn gekoppeld. Als medewerker kunt u ook instellen dat [meldingen](/User-Guide/03-Basic-Functions/alerts.md#configure-alert-notifications-via-email) naar uw e-mailadres worden gestuurd.

Bulk buy offers zijn meestal een week geldig. U kunt meldingen instellen om shopbeheerders te waarschuwen wanneer deze offers bijna verlopen en/of al verlopen zijn.

Daarnaast is het belangrijk de termijn in te stellen voor het koppelen van inkomende inkooporders aan bulk buy offers. U kunt het minimale aantal dagen tot het verzendvenster van de inkooporder opgeven, meestal ongeveer 30 dagen. Deze instelling is essentieel om inkomende inkooporders automatisch als bulk buy-orders te herkennen.

![Bulk buy-instellingen van de Amazon 1P-shop](/img/amazon-1p-bulk-buy-shop-settings.png)

Meldingen voor Bulk Buy Offers en de termijn voor het koppelen configureren:

1. Log in bij ShopCtrl als gebruiker met de rol **Shop Admin** of hoger.
2. Ga in het menu naar **Configuration > Shops** om de lijst met aangemaakte shops te bekijken.
3. Kies een shop waarvoor de Amazon 1P-synchronisatie is ingesteld en klik op **Edit** om de shopinstellingen te openen.
4. Selecteer in het menu **Shop synchronization > Amazon 1P Synchronization**.
5. Ga naar het deelvenster **BulkBuy Settings**.
6. (Optioneel) **Auto-create missing products** - met deze functie worden producten aangemaakt als ze niet worden gevonden bij het aanmaken van een Bulk Buy Offer. We raden aan deze functie vooral voor testdoeleinden te gebruiken.
7. Schakel meldingen in voor **verlopen** offers: bulk buy offers die meer dan 7 dagen geleden zijn aangemaakt.
8. Schakel meldingen in voor **offers die bijna verlopen**.
9. Stel bij **Set number of days until expiration** in hoeveel dagen vóór het verlopen de melding wordt aangemaakt.
10. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop toe te passen.

## Stap 3: zorgen dat uw producten een ASIN en EAN hebben in ShopCtrl {#step-3-ensure-your-products-have-asin-and-ean-in-shopctrl}

De volgende belangrijke stap bij het instellen van Bulk Buy Offers is het toevoegen van ASIN en EAN aan uw producten. Bij de import van Bulk Buy Offers worden producten gekoppeld via **EAN** en **ASIN**, omdat dit de belangrijkste identificatiecodes zijn die Amazon in het exportbestand voor Bulk Buy Offers meelevert.

Deze stap is essentieel voor een nauwkeurig en efficiënt Bulk Buy Offers-proces. Een gedetailleerde handleiding voor deze stap vindt u in het artikel [ASIN en EAN aan uw producten toevoegen](/User-Guide/08-Product-Management/Product-Import/how-to-add-asin-and-ean-to-your-products.md).
