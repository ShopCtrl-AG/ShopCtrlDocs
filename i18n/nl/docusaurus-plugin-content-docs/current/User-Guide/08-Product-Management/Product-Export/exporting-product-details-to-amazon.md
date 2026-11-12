---
sidebar_position: 2
slug: /docs/exporting-product-details-to-amazon
description: "Publiceer aanbiedingen op Amazon of trek ze in vanuit ShopCtrl, en exporteer gewijzigde productprijzen via de synchronisatie-instellingen van de Amazon-shop."
---
# Productgegevens exporteren naar Amazon 



Als deze functie is ingeschakeld, kunt u uw productaanbieding op Amazon sluiten of openen door het bijbehorende product in ShopCtrl te publiceren of de publicatie ervan in te trekken.
Schakel de functie in via Shop Settings > Amazon Shop Synchronization > Product Integrations settings > Sync product publish state.

<img src={require("/img/product-publish.png").default} height="" width="800" />

Om de publicatie van een product in alle verkoopkanalen in te trekken, vinkt u **Published** onder de productnaam uit.
Om het product alleen in het verkoopkanaal Amazon te deactiveren, opent u het tabblad Retail Price, selecteert u de Amazon-shop en klikt u op de knop **Unpublish**. De productaanbieding wordt dan alleen op Amazon gesloten.

ShopCtrl werkt Amazon direct bij nadat de publicatiestatus is gewijzigd. Let op: door de complexe bedrijfsregels die Amazon op aanbiedingen toepast, kan het lang duren voordat Amazon het sluiten en activeren van aanbiedingen heeft verwerkt (van 15 minuten tot enkele uren). 
Als Amazon de wijziging niet binnen de werkdag heeft verwerkt (wat in zeldzame gevallen kan gebeuren), wordt er een melding bij het product in ShopCtrl getoond. Controleer in dat geval het tabblad Inventory in uw Amazon Seller-account.

## Gewijzigde productprijzen exporteren {#export-changed-product-prices}

Met deze functie kunt u de prijzen van aanbiedingen op Amazon bijwerken vanuit ShopCtrl. Om deze functionaliteit te gebruiken, schakelt u deze in via Shop Settings > Amazon Shop Synchronization > Product Integrations settings > Export changed product prices. 

<img src={require("/img/amazon-inventory-listing-price.png").default} height="" width="800" />

De prijs van de productaanbieding op Amazon wordt gesynchroniseerd met de **Foreign Price Including VAT** van de bijbehorende shop.
In de schermafbeelding hieronder is de basisvaluta van de shop owner de euro en is de valuta van de Amazon-shop het pond.

<img src={require("/img/product-foreign-price-amazon.png").default} height="" width="800" />

De prijzen van productaanbiedingen op Amazon zijn inclusief btw, terwijl ShopCtrl meestal met prijzen exclusief btw werkt. U kunt de **Price excluding VAT** in de basisvaluta van de shop owner wijzigen; de prijzen in alle shops waarin het product is gepubliceerd, worden dan opnieuw berekend. U kunt ook de Foreign Price Including VAT van een specifiek product wijzigen door het selectievakje 'Auto calc' uit te vinken en een nieuwe waarde in te voeren.

<img src={require("/img/shop-settings-price-details.png").default} height="" width="400" />

Zodra het product is opgeslagen, wordt het verzoek om de prijs te wijzigen bij de volgende geplande synchronisatie, binnen 15 minuten, naar Amazon gestuurd.
Amazon hanteert een vaste procedure voor aanbiedingen: de prijzen moeten bijvoorbeeld voldoen aan de prijsregels van Amazon en binnen het bereik van de Min-Max-prijzen vallen. Let op: het kan lang duren (**tot 24 uur**) voordat Amazon een prijsupdate heeft verwerkt. 
Amazon valideert de prijs asynchroon en stuurt geen bericht terug over waarschuwingen of over producten die zijn gedeactiveerd omdat de prijsregels zijn overtreden. 
Als de prijs in strijd is met het prijsbeheer van Amazon, wordt de prijswijziging van de aanbieding toch verwerkt, maar wordt de status van de aanbieding gewijzigd in *Inactive*. Houd deze waarschuwingen over mogelijke prijsfouten bij in uw beheeromgeving van Seller Central. Amazon meldt de deactivering ook per e-mail.

:::warning

Let op: door beperkingen van de Amazon API ontvangen we geen rapport over de status van de prijswijziging.
Als er geen Min- en Max-prijzen zijn ingesteld voor de productaanbieding die u bewerkt, kan het verzoek om de prijs bij te werken zonder melding worden afgewezen. 

:::

Meer informatie over prijsbeheer vindt u op de helppagina's van Amazon:
[Prijs voor uw artikel instellen](https://sellercentral.amazon.com/gp/help/external/help-page.html?itemID=62551&language=en_US&ref=efph_62551_bred_G201995750)
[Prijs verandert niet: handleiding voor probleemoplossing](https://sellercentral.amazon.com/gp/help/external/help.html?itemID=202128960&language=en_US&ref=efph_202128960_relt_E85R4NP368X5KKB)
[Prijzen automatiseren](https://sellercentral.amazon.com/gp/help/external/help-page.html?itemID=201994820&language=en_US&ref=efph_201994820_bred_E85R4NP368X5KKB) 
Als u regels voor Automated Pricing (geautomatiseerde prijsbepaling) hebt ingesteld, heeft de prijsupdate vanuit ShopCtrl geen effect op de prijs van de aanbieding.