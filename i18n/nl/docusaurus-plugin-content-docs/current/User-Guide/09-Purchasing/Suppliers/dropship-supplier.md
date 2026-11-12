---
sidebar_position: 2
slug: /docs/dropship-supplier
description: "Maak van een ShopCtrl-leverancier een dropshipleverancier, waarbij een gekoppeld dropshipmagazijn wordt aangemaakt, of maak alle nieuwe leveranciers standaard dropshipleverancier."
---

# Dropshipleverancier 


:::info[**Vereiste rechten**]

Een medewerker moet aan de shop zijn gekoppeld met de rol **Power user** om de handelingen uit te voeren die in dit artikel worden beschreven.

:::

Dit artikel beschrijft hoe u een gewone leverancier omzet in een dropshipleverancier. 
Om overbodige stappen bij het instellen van de dropshipmentflow te voorkomen en alle nieuwe leveranciers standaard **dropship** te maken, kunt u deze instelling inschakelen op **Shop Owner Details Page >  Purchasing**: 
**Can dropship**  ✅

## Een gewone leverancier omzetten in een dropshipleverancier {#how-to-turn-a-regular-supplier-into-a-dropship-supplier}

<img src={require("/img/supplier_details_topic_menu_dropship_00.png").default} height="" width="450" />

1. Open de **Supplier details page** en ga in het menu naar het tabblad **Dropship**
2. Schakel de dropshipinstellingen van de leverancier in: schakel het selectievakje **Can dropship** in, sla de detailpagina van de leverancier op en vernieuw deze. 
ShopCtrl maakt automatisch een nieuw dropshipmagazijn aan dat aan de leverancier is gekoppeld.
3. Schakel het selectievakje **Can dropship products** in, zodat alle nieuwe inkoopproducten die voor deze leverancier worden geïmporteerd standaard als beschikbaar voor dropshipment worden gemarkeerd. 
U kunt de dropshipinstelling ook per product handmatig wijzigen op de detailpagina van het product.
4. Als u de leverancier een verzendlabel van een bepaalde vervoerder wilt geven, geeft u de opties op in de sectie **Shipping label**: 
    * Schakel het selectievakje **Shipping label** in om verzendlabels automatisch te laten aanmaken.
    * Selecteer een dropship-**Carrier**-account dat uw leverancier gebruikt voor de dropshipment van uw orders. ShopCtrl maakt automatisch verzendlabels aan op basis van de eisen van de vervoerder. Bekijk de [lijst met vervoerders](/User-Guide/02-ShopCtrl-Setup/05-Fulfillment/Carriers/index.md) waarmee ShopCtrl een integratie biedt.
    * Selecteer de **ShipFrom**-gegevens die worden gebruikt om het verzendlabel aan te maken. 
        * Default Supplier Main Contact Info - ingesteld op de detailpagina van de leverancier
        * Warehouse Main Contact Info - ingesteld op de detailpagina van het dropshipmagazijn
        * Shop Ship From Contact Info - ingesteld op de detailpagina van de shop
5. Schakel de instelling **Dropship create packing slip** in om voor elke dropshiporder automatisch een pakbon aan te maken.
6. Selecteer de methode waarmee dropship-inkooporders en de bijbehorende documenten automatisch naar de leverancier worden verstuurd:
    * **None** - de documenten van de dropshiporder worden automatisch aangemaakt, maar de e-mail wordt niet automatisch aangemaakt en dus ook niet verstuurd.
    * **Email** - de documenten van de dropshiporder worden automatisch aangemaakt en per e-mail naar de leverancier verstuurd met een vooraf ingesteld sjabloon, op het moment dat de dropshipment wordt opgeslagen.
7. Voer het **Email address** in waarnaar de inkooporders worden verstuurd, of laat het veld leeg om het standaard e-mailadres van de leverancier te gebruiken.
8. Selecteer een vooraf ingesteld **Dropship purchase order mail template** waarmee de nieuwe dropshipment-e-mails automatisch worden aangemaakt. Laat het veld leeg om het standaard e-mailsjabloon voor dropship-inkooporders van de shop te gebruiken, ingesteld op **Shop Details Page > Communication > E-mail > E-mail templates**.

    :::tip[Zendingspecifieke informatie in de dropshipmail]

    De e-mail voor de dropship-inkooporder wordt aangemaakt voor de zending die wordt opgeslagen. Gebruik de `OrderShipment` merge fields om alleen informatie over die zending te tonen, zoals het aantal colli of palletplaatsen, bijvoorbeeld `$$OrderShipment.PackageCount$$` en `$$OrderShipment.PreferredShipDate$$`. De `Order` merge fields, zoals `$$Order.ShipmentsPackageCount$$`, hebben betrekking op de hele order, dus hun waarden worden bij elkaar opgeteld wanneer een order meerdere zendingen heeft.

    Om een waarde te controleren voordat u het sjabloon wijzigt, opent u het e-mailsjabloon, gebruikt u **Available MergeFields**, voert u de inkooporder in, genereert u het bestand en zoekt u het merge field op. Zie de [lijst met merge fields](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md#order-shipment).

    :::
9. Send PO pdf as mail attachment - geef aan of de leverancier bij elke dropshiporder een inkooporderdocument moet ontvangen. Als dit niet is ingeschakeld en het verzendlabel of de pakbon is ingeschakeld (ON), worden alleen die documenten meegestuurd.
10. **Shop availability**. Selecteer de shops waarvoor deze dropshipleverancier zijn dienst levert. De wijzigingen worden ook toegepast op het dropshipmagazijn van de leverancier.

:::warning[]

Sla de pagina op om de instellingen toe te passen en vernieuw daarna het tabblad voordat u verdergaat, zodat alle wijzigingen correct worden toegepast.

:::

:::info[Let op]

De standaard inkoopsjablonen worden ingesteld op Supplier Details Page > Purchasing. 
De hierboven voor een specifieke leverancier opgegeven instellingen voor e-mail- en documentsjablonen **overschrijven** de documentsjablonen en e-mailsjablonen van de shop owner en de shop.
Het e-mailadres voor inkooporders van de leverancier is hetzelfde als het adres dat voor de gewone inkoop is ingesteld.

:::
