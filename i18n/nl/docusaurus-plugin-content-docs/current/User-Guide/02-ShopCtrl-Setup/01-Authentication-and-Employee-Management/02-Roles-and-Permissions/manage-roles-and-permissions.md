---
sidebar_position: 2
slug: /docs/manage-roles-and-permissions
description: "Maak en bewerk rollen in ShopCtrl door een standaardrol te kopiëren en de rechten aan te passen aan uw eigen toegangseisen."
---

# Rollen en rechten beheren

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

::::

ShopCtrl biedt een aantal standaardrollen, maar u kunt ook rollen aanmaken die passen bij uw eigen toegangseisen.

![Autorisatie-instellingen van de shop owner](/img/shopowner-settings-authorization-full-screen.png)

## Een nieuwe rol aanmaken {#how-to-create-a-new-role}

Een nieuwe rol aanmaken in de organisatie van de shop owner:

1. Ga naar het tabblad **Shop Owner details page > Authorization**.
2. Klik op **Copy** en selecteer in de vervolgkeuzelijst de rol waarvan de rechten het best passen bij de eisen voor uw nieuwe rol.
3. Vul in het pop-upvenster de **Name** van de nieuwe rol in en klik op **Ok** om deze op te slaan.
4. De gekopieerde rol en de bijbehorende rechten worden als nieuwe kolom aan de tabel hieronder toegevoegd.
5. Pas de rechten van de rol aan door de selectievakjes van de betreffende autorisatie-items aan of uit te vinken.
6. Klik op **Save** of **Save and Close** om de wijzigingen voor de shop owner toe te passen.

## Een rol bewerken {#how-to-edit-a-role}

In ShopCtrl kunt u de rechten van de standaardrollen bewerken. U kunt de namen van de standaardrollen echter niet wijzigen, en de standaardrollen ook niet uitschakelen of verwijderen.

### De rechten van een rol wijzigen {#how-to-modify-role-permissions}

Om de rechten van een rol en de toegang tot specifieke modules en functies in ShopCtrl aan te passen, gaat u naar de autorisatie-instellingen op de detailpagina van de shop owner. Hier bepaalt u per module en actie welke rechten worden toegekend of ingetrokken. Vink het selectievakje aan om een recht toe te kennen, of vink het uit om het recht in te trekken. Zo stemt u de rechten van rollen af op uw eigen behoeften in ShopCtrl.

![Rol van de shop owner wijzigen](/img/shop-owner-modify-role.png)

Rechten toevoegen aan of verwijderen uit een bestaande medewerkersrol:

1. Log in bij uw ShopCtrl-omgeving als **Shop owner admin**.
2. Klik in het navigatievenster links op **Configuration > Shop Owners**.
3. Selecteer de naam van de shop owner en klik op **edit**.
4. Ga op de detailpagina van de shop owner naar het menu en selecteer **Authorization**.
5. Kies de rol die u wilt bewerken. De rechten van elke rol worden als kolommen weergegeven.
6. Ken rechten toe aan de gekozen rol. Geef per recht aan of het voor die rol is toegestaan of geweigerd. Bijvoorbeeld:
   - Admin: sta "View, Add, Edit, Delete Offers" toe.
   - Power user: sta "View, Add, Edit" toe, maar weiger "Delete Offers".
7. Nadat u de nodige wijzigingen hebt gemaakt, kunt u de detailpagina van de shop owner sluiten. De rechten worden direct toegepast. U hoeft niet op te slaan, want het systeem slaat uw wijzigingen automatisch op.

:::warning[**Let op**]

Een medewerker moet het recht hebben om een module te bekijken om er acties mee te kunnen uitvoeren. Zonder het recht om de module Shipments te bekijken, kan een medewerker bijvoorbeeld geen zendingen bewerken.

:::

### De naam van een rol wijzigen {#how-to-change-role-name}

Om de naam van een rol die u eerder hebt aangemaakt te wijzigen, gaat u naar het tabblad **Shop Owner details page > Authorization** en klikt u op de knop **Edit**. Selecteer in de lijst de rol die u wilt aanpassen en vul in het pop-upvenster dat opent de nieuwe naam van de rol in.

### Rollen uitschakelen {#how-to-disable-roles}

Om een rol die u hebt aangemaakt uit te schakelen, gaat u naar het tabblad **Shop Owner details page > Authorization** en klikt u op de knop **Disable**. Selecteer een rol in de lijst. De kolom van de rol verdwijnt dan van het tabblad Authorization. De rol is ook niet meer zichtbaar in de instellingen van medewerkers.

:::warning[**Let op**]

Als u een rol uitschakelt, wordt deze niet ingetrokken bij medewerkers die met deze rol aan de shop zijn gekoppeld. Ga naar **Shop settings > Employees** of **Employee settings > Shop roles** en wijzig de rol handmatig.

:::

Om de rol weer in te schakelen, klikt u op de knop **Enable** en selecteert u in de lijst de naam van de rol die u weer wilt tonen. De kolom van de rol verschijnt weer op het tabblad Authorization en de rol is weer zichtbaar in de lijst met rollen in de medewerkersinstellingen.

## Rollen verwijderen {#how-to-delete-roles}

Om een rol die u eerder hebt aangemaakt te verwijderen, gaat u naar het tabblad **Shop Owner details page > Authorization** en klikt u op de knop **Delete**. Selecteer in de lijst de rol die u wilt verwijderen. De rol wordt direct verwijderd en er verschijnt een pop-upvenster ter bevestiging.

:::danger[**Let op**]

U kunt een rol niet verwijderen als er een medewerker met deze rol aan een shop is gekoppeld. Wijzig eerst de koppeling voordat u de rol verwijdert.

:::
