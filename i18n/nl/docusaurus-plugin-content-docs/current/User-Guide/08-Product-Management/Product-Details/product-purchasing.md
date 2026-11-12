---
sidebar_position: 2
slug: /docs/product-purchasing
description: "Het tabblad Supplier van een product in ShopCtrl: inkoopprijzen van leveranciers, leveranciersprioriteit, voorkeursleveranciers en tijdgebonden prijswijzigingen."
---
# Productinkoop 


### Leverancier {#supplier}
<img src={require("/img/product-details-supplier.png").default} height="" width="800" />

Het tabblad Supplier bevat alle inkoopprijzen exclusief btw die uw leveranciers voor het product hebben opgegeven. Op dit tabblad kunt u de prijzen beheren en bepalen welke leverancier de voorkeursleverancier voor het product is, door de prioriteit van de leveranciers te wijzigen. De inkoopprijs van de leverancier met de hoogste prioriteit geldt als standaard voor het product.
In de afbeelding hierboven is bijvoorbeeld leverancier *Alex Alex* met prioriteit *3* de voorkeursleverancier voor het product.
De voorkeursleverancier waarvoor de dropshipoptie is ingeschakeld, wordt als eerste aan de dropship-inkooporder toegewezen.
U kunt de opgegeven prijzen, SKU's en namen van inkoopproducten handmatig wijzigen. Klik op het pictogram aan het einde van de rij van het inkoopproduct om de detailpagina van de leverancier in een nieuw tabblad te openen. 
U kunt ook de prijslijst van de leverancier uploaden op de detailpagina van de leverancier en een geplande import instellen. Alle geïmporteerde inkoopproducten worden dan automatisch bijgewerkt voor de betreffende producten. 

Zie [Leveranciersproducten importeren](/User-Guide/09-Purchasing/Suppliers/import-supplier-products.md) voor meer informatie over het importeren van prijslijsten van leveranciers.

**Nieuw**
Om prijswijzigingen van uw leveranciers te beheren, kunt u meerdere prijzen toevoegen en een periode instellen waarin de prijs actief is. 
Wanneer een leverancier een nieuwe prijs voor de producten opgeeft, uploadt u de nieuwe prijslijst op de dag waarop de prijzen wijzigen, of uploadt u deze vooraf en stelt u de begin- en einddatum van de inkoopprijzen in. Op de dag dat de nieuwe prijs moet ingaan, deactiveert een achtergrondtaak de oude prijs en activeert de nieuwe. Op het tabblad Product>Supplier kunt u altijd zien welke prijs op dat moment actief is.

Om meerdere prijsopgaven van één leverancier te kunnen bewaren, moet u dubbele waarden voor de shopgroep toestaan.
In de shopgroepinstellingen > Allow duplicate supplier for product

Op dezelfde manier kunt u de prijzen handmatig toevoegen, of de productimport gebruiken om prijzen in bulk bij te werken.


### Inkooporders {#purchase-orders}
<img src={require("/img/product-details-purchase-orders-tab.png").default} height="" width="800" />

Dit tabblad geeft een overzicht van alle inkooporders waarmee dit product aan uw magazijnen is geleverd (gewone inkooporders of inkooporders voor backorders) of aan de klanten (dropship-inkooporders). Ook alle geannuleerde orders staan in de tabel.
U kunt op het pictogram in de kolom met de ordercode klikken om de bijbehorende inkooporder in een nieuw tabblad te openen voor bewerking.
