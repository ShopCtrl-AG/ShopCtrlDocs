---
sidebar_position: 1
slug: /docs/create-supplier
description: "Maak in ShopCtrl een leverancier aan met bedrijfs- en contactgegevens, het e-mailadres voor inkooporders en externe referentiecodes."
---

# Leverancier aanmaken 




:::info[**Vereiste rechten**]

Om de inhoud te bekijken of de handelingen uit te voeren die in dit artikel worden beschreven, moeten de juiste rechten zijn ingeschakeld. Een medewerker moet aan de shop zijn gekoppeld met de rol **Power User** of hoger.

:::

## Een leverancier aanmaken {#how-to-create-supplier}

<img src={require("/img/create_supplier_details.png").default} height="" width="800" />

Om een **Supplier** aan te maken:
1. Ga naar **Purchasing > Suppliers** en klik op **Add**.
2. Voer de **Company name** en de **Full name** van de leverancier in.
3. Voer de overige gegevens in:
    * **Email** - wordt standaard gebruikt om e-mails met inkooporders te versturen
    * **Reference (external)** - gebruikt door de contactpersoon
    * **Currency** - kies de valuta waarin u goederen inkoopt.
    * **Culture** - selecteer de taal en het land van de leverancier
    * **Company Url**
    * **Icon** - upload een pictogram om de leverancier eenvoudig te herkennen in de lijst met leveranciers
    * **Default PO discount**
4. Klik op **Save** of **Save and Close**.

### Gegevens van het hoofdcontact bewerken {#edit-main-contact-details}

<img src={require("/img/supplier_main_contact_info_details.png").default} height="" width="400" />

Ga in het menu van de leverancier naar het tabblad **Main Contact** om de betreffende gegevens in te vullen:
1. Voer zo nodig de **Name**-gegevens in:
    * De **Company**-naam van de leverancier
    * De **Full name** van de contactpersoon
2. Voer zo nodig de **Contact**-gegevens in:
    * **Phone**-nummers
    * Een extra **Email** van de leverancier
3. Vul het **Address** in:
    * Kies een **Country** uit de lijst met suggesties
    * Vul handmatig **City**, **State**, **Postal code** en **Address** in.
    * Voer zo nodig het **Additional address** in.
5. (Optioneel) Voer de aanvullende gegevens van de **Contact Person** in:
    * Voer de **Date of birth** in
    * Selecteer **Gender**
    * Vul zo nodig het **COC number** en de **COC city** in
    * Vul de naam van de **Bank** en het IBAN in
    * Voer zo nodig het **VAT number** in. 
    * Kies een **ID type** voor de persoon: Passport of Drivers License, en vul zo nodig het identiteitsnummer en de vervaldatum in.

:::info[]

Deze contactgegevens worden gebruikt om documenten voor de leverancier (inkooporder) aan te maken en als algemene kennisbank over de leverancier.

:::

### Extra bedrijfscontacten bewerken {#edit-additional-company-contacts}

Op het tabblad **Company Contacts** kunt u extra contactpersonen voor een leverancier aanmaken. 
Bedrijfscontacten zijn de mensen met wie u te maken hebt in het bedrijf van de leverancier. Dat kunnen bijvoorbeeld specifieke medewerkers van de afdeling boekhouding of IT zijn.

<img src={require("/img/supplier_details_topic_menu_company_contacts.png").default} height="" width="800" />

### Een privénotitie over de leverancier invoeren {#enter-private-supplier-note}

Ga naar het tabblad **Note** om privénotities over de leverancier in te voeren en op te maken. Deze notities zijn alleen voor intern gebruik.

<img src={require("/img/supplier_details_topic_menu_note.png").default} height="" width="800" />

Het actiemenu bovenaan bevat alle knoppen die u nodig hebt om tekst te bewerken. U kunt ook overschakelen naar HTML door op de knop **Source Edit** te klikken.
<img src={require("/img/supplier_details_topic_menu_note_writing_menu.png").default}  />


### E-mail- en documentsjablonen voor inkoop instellen voor een leverancier {#set-purchasing-email-and-document-templates-for-a-supplier}

Ga naar het tabblad **Purchasing** om het e-mailsjabloon en de documentsjablonen voor inkooporders in te stellen. Zorg ervoor dat de benodigde e-mail- en documentsjablonen eerst zijn aangemaakt en opgeslagen. Zie [Email Templates](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/index.md) en [Document Templates](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/index.md) voor meer informatie.

<img src={require("/img/supplier_details_topic_menu_purchasing_0.png").default} height="" width="800" />

**E-mailadres voor inkooporders.**
Als u inkooporders naar een ander e-mailadres stuurt dan het adres in de gegevens van het hoofdcontact, voert u het in dit veld in. Anders wordt het standaard e-mailadres van de leverancier gebruikt.

**E-mailsjabloon voor inkooporders**

Kies een e-mailsjabloon waarmee automatisch nieuwe e-mails met inkoopverzoeken voor deze leverancier worden aangemaakt. Nadat u op de pijl hebt geklikt, worden alle e-mailsjablonen van het soort "purchase order" met het type "for supplier" weergegeven. Op basis van dit sjabloon worden automatisch e-mails aangemaakt voor gewone inkooporders en back-to-back-inkooporders.
Anders wordt het standaard e-mailsjabloon voor inkooporders gebruikt dat in de shop owner-instellingen is ingesteld.

**Sjabloon voor inkooporders**

Kies welk documentsjabloon wordt gebruikt om automatisch inkooporderdocumenten aan te maken voor gewone inkooporders, back-to-back-inkooporders en dropship-inkooporders (als er geen ander sjabloon is ingesteld). Nadat u op de pijl hebt geklikt, worden alle documentsjablonen met het type "purchase order" weergegeven.
Anders wordt het standaard e-mailsjabloon voor inkooporders gebruikt dat in de inkoopinstellingen van de shop is ingesteld.

:::warning[Let op]

De e-mail- en documentsjablonen voor dropshipment worden ingesteld op een tabblad Dropship en op shopniveau. Zie [Dropshipleverancier](/User-Guide/09-Purchasing/Suppliers/dropship-supplier.md) voor meer informatie

:::

### Een dropshipleverancier aanmaken {#create-dropship-supplier}

Om de dropshipinstellingen voor een specifieke leverancier te configureren, maakt u eerst een leverancier aan. Volg daarna de stappen voor de dropshipconfiguratie. Zie [Dropshipleverancier](/User-Guide/09-Purchasing/Suppliers/dropship-supplier.md) voor meer informatie.

### Inkoopproducten van een leverancier handmatig aanmaken {#manually-create-supplier-purchase-products}

<img src={require("/img/manually-add-purchase-product.png").default} height="" width="800" />

Om handmatig een inkoopproduct van een leverancier aan te maken:
1. Ga naar **Product Management > Products**. Selecteer het product dat u wilt bewerken en open het in een nieuw tabblad.
2. Ga op de detailpagina van het product naar **Topic Menu > Supplier**
3. Klik op **Add** om een nieuw gekoppeld inkoopproduct voor dit product toe te voegen
4. Kies de leverancier waarvan u de prijslijst wilt bijwerken en dubbelklik op de naam van de leverancier.
5. Voer handmatig de gegevens van het inkoopproduct in:
    * **SKU, Product Name**
    * **Price Ex** - prijs exclusief btw in de valuta van de shop owner. De 'Foreign Price Ex' wordt automatisch berekend op basis van een koers die in de shop is ingesteld.
    * OF **Foreign Price Ex** - productprijs in de valuta van de leverancier, exclusief btw. 'Price Ex' wordt automatisch berekend.
    * (Optioneel) Voer de **Unit Qty** en de **Minimum Qty** in die nodig zijn voor een order.
6. Geef aan of de leverancier dit inkoopproduct kan dropshippen door het selectievakje **Droship** in te schakelen.
7. Kies de **Priority** van de leverancier voor dit product.
8. Klik op **Save** of **Save and Close**.


### Staffelprijzen van een leverancier voor een product opgeven {#specify-supplier-tiered-pricing-for-a-product}

Soms bieden leveranciers verschillende prijsniveaus voor verschillende hoeveelheden producten. In dat geval kunt u staffelprijzen per hoeveelheid opgeven, die later worden toegepast bij het aanmaken van inkooporders.

<img src={require("/img/product-details-supplier-tier-pricing.png").default} height="" width="800" />

Om een nieuwe staffelprijs toe te voegen:

1. Open **Product Management > Products**.
2. Zoek en selecteer een product en open het om het te bewerken.
3. Ga op de detailpagina van het product naar het tabblad **Supplier** in het menu.
4. Selecteer een record met een inkoopprijs van een leverancier en klik op het tandwielpictogram &#x2699; in de kolom Price Ex.
<img src={require("/img/product-details-supplier-add-tier-pricing.png").default} height="" width="400" />
5. Voer in het venster **Tier Pricing** de **Quantity** in waarboven de nieuwe staffelprijs wordt toegepast.
6. Voer in een van de velden de **Price** per stuk exclusief btw in. De andere prijs wordt automatisch berekend op basis van de huidige wisselkoers:
    *     **Price Ex** - in de basisvaluta van de shop owner
    *     **Foreign Price Ex** - in de valuta van de leverancier
7. Voeg de nieuwe staffelprijs toe met **Add**.
8. Ga verder met andere hoeveelheden. Klik op **Close** wanneer u klaar bent.
9. Sla het product op met **Save** of **Save and Close** om de wijzigingen toe te passen.



### Automatische import van inkoopproducten en voorraad instellen {#set-automatic-purchase-products-and-stock-import}

Ga op de detailpagina van de leverancier naar het tabblad **Product Import** om inkoopproducten te importeren (namen, SKU's, prijzen en leverdatums), de voorraad van inkoopproducten in het magazijn van de leverancier bij te werken en een automatische productimport in te plannen. Lees meer in [Leveranciersproducten importeren](/User-Guide/09-Purchasing/Suppliers/import-supplier-products.md).

:::warning

**Product import** - dit menu-item wordt pas zichtbaar nadat de leverancier is opgeslagen. 
Als dit menu-item nog steeds niet in uw menu staat nadat de leverancier is opgeslagen en de pagina is vernieuwd, neem dan contact op met het supportteam van ShopCtrl voor meer informatie.

:::

### Historie van inkooporders bekijken {#view-purchase-orders-history}

Op dit tabblad worden alle inkooporders weergegeven die bij deze leverancier zijn geplaatst.
De kolommen komen grotendeels overeen met de kolommen in de tabel met inkooporders. 
<img src={require("/img/supplier_details_topic_menu_purchase_orders.png").default} height="" width="800" />

Dubbelklik op de rij van de inkooporder of klik op het pictogram in de kolom Code om de inkooporder in een nieuw tabblad te openen voor bewerking.

### Gespreksgeschiedenis bekijken {#view-conversation-history}

Met de gespreksgeschiedenis houdt u eenvoudig de e-mailcorrespondentie met een leverancier bij. 
Standaard wordt de gespreksgeschiedenis weergegeven in een gedetailleerde weergave, gegroepeerd op datum. De nieuwste gesprekken staan bovenaan.

<img src={require("/img/supplier_details_topic_menu_conversation_history.png").default} height="" width="800" />

Dubbelklik op de tekst van het gesprek of klik op de knop **Envelope** om het bericht hieronder uit te vouwen. Klik in de e-mail op de knop **View** om de verzonden e-mail in een nieuw tabblad te openen. 
<img src={require("/img/supplier_details_topic_menu_conversation_history_expand_email_00.png").default} height="" width="800" />

Alle bijlagen kunt u in hetzelfde dialoogvenster downloaden of bekijken. 
<img src={require("/img/supplier_details_topic_menu_conversation_history_attachments_00.png").default} height="" width="800" />

E-mails waarbij een fout is opgetreden tijdens het verzenden, worden in het rood weergegeven. Beweeg de muis over de e-mail om de details te bekijken. Of klik op de knop **Edit** om de e-mail in een nieuw tabblad te openen voor bewerking.
<img src={require("/img/supplier_details_topic_menu_conversation_history_not_sent.png").default} height="" width="800" />

:::info[ShopCtrl-tip]

Zo vouwt u alle gesprekken samen behalve het gesprek dat u wilt bekijken.
Houd de toets `Ctrl` ingedrukt en klik op het uitvouwpictogram om de gesprekken van een bepaalde datum uit te vouwen en alle andere samen te vouwen.

:::

Schakel over naar de eenvoudige weergave voor een lijst met alle e-mails die naar de leverancier zijn verzonden en van de leverancier zijn ontvangen.
<img src={require("/img/supplier_details_topic_menu_conversation_history_simple_view_00.png").default} height="" width="800" />
