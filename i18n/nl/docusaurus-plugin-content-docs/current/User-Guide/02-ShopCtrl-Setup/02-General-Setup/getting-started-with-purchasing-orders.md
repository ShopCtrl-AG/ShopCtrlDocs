---
sidebar_position: 7
slug: /docs/getting-started-with-purchasing-orders
description: "Richt ShopCtrl in voor inkoop door een aparte inkoopshop aan te maken en de bijbehorende document- en e-mailsjablonen in te stellen."
---

# Aan de slag met inkoop

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Om inkooporders te gebruiken en inkoopgegevens in ShopCtrl vast te leggen, maakt u een aparte shop aan die alleen voor inkoop wordt gebruikt, stelt u document- en e-mailsjablonen in en maakt u leveranciers aan.

## Stap 1. Een shop voor inkoop aanmaken en instellen {#step-1-create-and-set-shop-for-purchasing}

Een **inkoopshop** wordt gebruikt om inkooporders vast te leggen; vanuit deze shop worden geen verkooporders uitgegeven. Daarom hoeft u voor de inkoopshop maar een beperkt aantal instellingen te configureren.

Een shop voor inkoop aanmaken:

![Inkoopshop aanmaken](/img/create-purchasing-shop.png)

1. Open **Configuration > Shops** in het navigatievenster.
2. Klik op **Add** en selecteer een **shop group**.
3. De detailpagina van de nieuwe shop wordt in een apart tabblad geopend.
4. Vul de **Name** van de shop in.
5. Vul het **Country**, de **Culture** en de **Currency** van uw bedrijf in.
6. Selecteer het **Type** shop: **Purchasing**.
7. Klik op **Save** of **Save and Close**.

Om het instellen af te ronden, stelt u de nieuwe shop in als **hoofdshop voor inkoop**.
Ga hiervoor naar het tabblad **Shop owner details > Purchasing** en selecteer bij de bestelinstellingen een **Purchase order shop**.

![Inkoopinstellingen van de shop owner](/img/shopowner-purchasing-settings.png)

## Stap 2. Inkoopinstellingen configureren {#step-2-configure-purchasing-settings}

### Factuurgegevens van de shop owner invullen {#provide-bill-to-information-for-the-shop-owner}

Het **factuuradres** op inkooporderdocumenten wordt gevuld met de gegevens van **Shop Owner Bill to**. U kunt deze wijzigen op het tabblad **ShopOwner settings > Bill to**.

![Factuurgegevens van de shop owner](/img/shopowner-details-bill-to-info.png)

### Het documentsjabloon voor inkooporders configureren {#configure-purchase-order-document-template}

Het standaard **documentsjabloon voor inkooporders** kunt u wijzigen op de pagina **Configuration > Templates > Document Templates**.
Kies het standaardsjabloonbestand van het type **Purchase order** en open het om te bewerken. Zie [Documentsjablonen aanmaken en bewerken](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/creating-and-editing-document-templates.md) voor meer informatie.
Het standaardsjabloon voor de inkooporder wordt gekozen op basis van de cultuur (taal) van de shop owner. U kunt het sjabloon altijd handmatig wijzigen op de detailpagina van de inkooporder, voordat u de order naar de leverancier stuurt.

Sjablonen kunt u aanpassen aan de eisen van een bepaalde leverancier. Om het aangepaste sjabloon aan een bepaalde leverancier te koppelen, stelt u het als standaard in bij **Purchasing> Supplier Details Page > Topic Menu > Purchasing > Purchase order template**.

### Een e-mailsjabloon voor inkoop aanmaken en instellen {#create-and-set-purchasing-mail-template}

U kunt een universeel e-mailsjabloon aanmaken dat met de inkooporder wordt meegestuurd en via merge fields en voorwaardelijke blokken met de gegevens van de betreffende leverancier wordt gevuld.
Om voor inkooporders beschikbaar te zijn, moet een sjabloon **Mail kind: PurchaseOrder** en **Type: For Supplier** hebben.
![E-mailsjabloon voor inkooporders](/img/purchase-order-mail-template.png)

Zie [E-mailsjablonen aanmaken en bewerken](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/creating-and-editing-email-templates.md) voor meer informatie.

Om het nieuwe e-mailsjabloon als standaard in te stellen voor het versturen van inkooporders, gaat u naar het tabblad **Shop owner details page > Purchasing**.
Selecteer in de vervolgkeuzelijst bij **Default purchase order mail template** het sjabloon dat u wilt gebruiken. Sla de detailpagina van de shop owner op om de wijzigingen toe te passen.
Om voor een bepaalde leverancier een ander sjabloon in te stellen, gaat u naar **Supplier Details Page > Topic Menu > Purchasing > Purchase order mail template**.

### Instellingen voor Provisioning configureren {#configure-provisioning-settings}

Met de standaardinstellingen voor Provisioning wordt de hoeveelheid die wordt ontvangen vooraf ingevuld met de bestelde hoeveelheid, en is het niet toegestaan meer te ontvangen dan besteld. U kunt dit wijzigen op de pagina **ShopOwner Settings > Purchasing > Provisioning Settings**.

![Inkoopinstellingen van de shop owner](/img/shopowner-settings-purchasing.png)

**Ordering settings:**
**Can Dropship** - handig om in te schakelen als de meeste van uw leveranciers ook dropshipleveranciers zijn.
**Restrict selection to single supplier** - deze optie beperkt de selectie van producten op de pagina met inkoopordervoorstellen tot één leverancier.

**Provisioning Settings:**
**Default provisioning quantity** - als deze optie is ingeschakeld, wordt de hoeveelheid bij het ontvangen vooraf ingevuld met de bestelde hoeveelheid.
**Allow over provisioning** - als deze optie is uitgeschakeld, kunt u niet meer ontvangen dan er is besteld.
**Create product supplier on PO save** - als er voor het product nog geen leveranciersprijs was opgegeven, maakt deze instelling een record aan op
**Allow zero purchase price** - als dit niet is toegestaan, wordt een inkoopprijs van nul vervangen door de prijs van de voorkeursleverancier.

## Stap 3. Leveranciers aanmaken {#step-3-create-suppliers}

Zodra de basisinstellingen klaar zijn, kunt u leveranciers aanmaken en inkoopprijzen voor de producten invullen.

Zie [Leverancier aanmaken](/User-Guide/09-Purchasing/Suppliers/create-supplier.md) en [Dropshipleverancier](/User-Guide/09-Purchasing/Suppliers/dropship-supplier.md) voor meer informatie.
