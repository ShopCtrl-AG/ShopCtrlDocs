---
sidebar_position: 3
slug: /docs/setting-up-dropship-fulfillment
description: "Stel dropship-fulfilment in ShopCtrl in, zodat leveranciers rechtstreeks naar uw klanten verzenden, te beginnen met dropshipleveranciers en vervoerdersaccounts."
---

# Dropship-fulfilment instellen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::
 Bij dropshipping verzendt de leverancier orders namens uw bedrijf rechtstreeks naar uw klant. U kunt de dropshipstroom naast uw gewone fulfilmentprocessen en uw groothandelsinkoop inrichten.
Wanneer u in ShopCtrl een dropshipment voor een order aanmaakt, wordt er een inkooporder aangemaakt, samen met het inkooporderdocument, de picklijst en de paklijst. U kunt vervoerdersaccounts instellen die verzendlabels voor de dropshippakketten genereren. Al deze documenten worden rechtstreeks naar de leverancier doorgestuurd zodra het pakket is aangemaakt.
Anders dan gewone en back-to-back-inkooporders zijn dropship-inkooporders gekoppeld aan de shop waar de verkooporder vandaan kwam, en niet aan de algemene inkoopshop. Zo kunnen we de documenten en zelfs de verzendlabels die voor de dropshipments zijn aangemaakt op dezelfde manier beheren als wanneer ze vanuit uw eigen magazijn worden verzonden.

Volg deze stappen om dropship-fulfilment in te stellen:

### Stap 1. Dropshipleveranciers aanmaken. {#step-1-create-dropship-suppliers}

De eerste stap is het aanmaken van leveranciers en het configureren van hun dropshipinstellingen.
Volg de stappen in het artikel [Dropshipleverancier](/User-Guide/09-Purchasing/Suppliers/dropship-supplier.md) om uw gewone leveranciers om te zetten in dropshipleveranciers, of om nieuwe dropshipleveranciers aan te maken.

### Stap 2. Sjablonen voor inkoopdocumenten aanmaken en instellen. {#step-2-create-and-set-purchase-document-templates}

Meer informatie over het aanmaken van een **Dropship purchase order template** vindt u in [Documentsjablonen aanmaken en bewerken](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/creating-and-editing-document-templates.md).
U kunt ook shopspecifieke sjablonen voor pakbonnen en picklijsten ontwerpen, die samen met de inkooporder naar de leverancier worden gestuurd.

Documentsjablonen voor dropship-inkooporders stelt u in op shop- en leveranciersniveau.

Op **shopniveau**: Shop Details Page > Document templates

- Dropship purchase order template
- Packing slip
- Picklist

Op **leveranciersniveau**: Supplier Details Page > Purchasing > Purchase order template.

### Stap 3. E-mailsjablonen instellen {#step-3-set-email-templates}

Meer informatie over het aanmaken van leverancierspecifieke e-mailsjablonen voor dropshipping vindt u in [E-mailsjablonen aanmaken en bewerken](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/creating-and-editing-email-templates.md).

Het standaard e-mailsjabloon voor inkooporders dat op het niveau van de shop owner is ingesteld, kan ook als sjabloon voor dropship-inkooporders worden gebruikt.
Om het sjabloon te wijzigen, gaat u naar:
Shop Owner Details Page > Purchasing > Default purchase order mail template

Dit sjabloon wordt gebruikt voor het versturen van dropship-inkooporders als er voor een leverancier geen eigen sjabloon is opgegeven.

Om een leverancierspecifiek e-mailsjabloon voor dropship-inkooporders in te stellen, gaat u naar Supplier Details Page > Dropship > Dropship purchase order mail template.

### Stap 4. Magazijnprioriteit en toewijzingsregels bepalen {#step-4-decide-on-warehouse-priority-and-allocation-rules}

Dropshiporders worden toegewezen op basis van de prioriteit van de dropshipmagazijnen die voor een shop zijn ingesteld. Anders dan bij de gewone inkooporderstroom wordt in dit geval geen rekening gehouden met de leveranciersprioriteit die bij een product is ingesteld.
Als een product door verschillende leveranciers wordt gedropshipt en beide magazijnen beschikbaar zijn voor een shop, krijgt de leverancier van het magazijn met de hoogste prioriteit de order.
Stel de prioriteit van de betreffende dropshipmagazijnen in op **Shop details page > Warehouses page**.

![Prioriteit van dropshipmagazijnen](/img/dropship-warehouse-priority.png)

Als u processen voor **automatische toewijzing** hebt ingericht en wilt dat dropshiporders ook automatisch worden toegewezen, schakel dan deze instelling in op Shop Owner Details Page > Fulfillment > Allocation settings:
**Automatically allocate orders for dropshipments:** ✅

### Stap 5. Vervoerdersaccounts voor dropshipleveranciers aanmaken en configureren {#step-5-create-and-configure-carrier-accounts-for-dropship-suppliers}

Deze stap is optioneel. Maar als u een verzendlabel wilt genereren en dit samen met de andere inkooporderdocumenten naar uw leverancier wilt sturen, maakt u vervoerdersaccounts aan voor uw dropshiporders en configureert u deze.
Zie [Carriers](/User-Guide/02-ShopCtrl-Setup/05-Fulfillment/Carriers/index.md) voor meer informatie over de beschikbare vervoerdersintegraties en over manieren om de beste vervoerder voor een pakket te bepalen.

### Stap 6. Producten aanmaken en publiceren {#step-6-create-and-publish-products}

Om de inkoopprijzen van leveranciers bij te werken, maken we eerst in ShopCtrl de producten aan die alleen via dropshipping worden aangeboden. Publiceer deze producten pas als de inkoopprijzen zijn ingevuld.
Om inkoopprijzen in bulk te importeren, kunt u de functie uit [Leveranciersproducten importeren](User-Guide/09-Purchasing/Suppliers/import-supplier-products.md#initial-import-of-supplier-purchase-products) gebruiken.

U kunt ook de voorraad van uw leveranciers bijhouden door geplande imports van voorraadniveaus in te stellen. Zie [Voorraadniveaus van leveranciers importeren](/User-Guide/09-Purchasing/Suppliers/import-supplier-products.md#how-to-import-supplier-stock-levels) voor meer informatie.

Zodra de producten die via dropshipping worden aangeboden een of meer inkoopprijzen van leveranciers hebben, kunt u de producten op uw verkoopkanalen publiceren. Hoe dropshiporders over de verschillende leveranciers worden verdeeld, wordt bepaald door de prioriteit van het dropshipmagazijn voor de betreffende shop.

Om zeker te weten dat de processen goed zijn ingericht, maakt u voor een aantal producten [test-dropshipments](/User-Guide/07-Fulfillment/creating-dropshipment.md) aan.
