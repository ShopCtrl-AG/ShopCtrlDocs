---
sidebar_position: 1
slug: /docs/exporting-inventory
description: "Werk de voorraadniveaus van producten vanuit ShopCtrl bij in uw verkoopkanalen, inclusief realtime updates naar Shopify waarbij magazijnen aan locaties zijn gekoppeld."
---
# Voorraad exporteren 

Dit artikel beschrijft hoe u de voorraadniveaus van producten in verschillende verkoopkanalen bijwerkt.

## Voorraad in Shopify bijwerken {#updating-shopify-inventory}

Het bijwerken van de productvoorraad is een aparte functie van de Shopify-synchronisatiemodule. U kunt deze los van de productsynchronisatie inschakelen op het tabblad Shop Settings > Shopify Synchronization van de betreffende shop. Zie [synchronisatie-instellingen voor Shopify](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/synchronization-settings.md#configure-product-stock-export) voor meer informatie.


Meer informatie over locaties in Shopify vindt u op [Shopify Locations](https://help.shopify.com/en/manual/locations).


Beschikbare voorraadniveaus worden realtime bijgewerkt. Zodra ShopCtrl een wijziging in de beschikbare voorraad van een product registreert, wordt er een verzoek gestuurd om hetzelfde product in Shopify bij te werken. Wijzigingen worden meestal binnen enkele minuten verwerkt.

Omdat Shopify de voorraad per locatie bijhoudt, koppelen we de magazijnen in ShopCtrl aan de bijbehorende locaties in Shopify en werken we de voorraadniveaus per locatie bij.

Als er bijvoorbeeld twee magazijnen voor de shop zijn ingesteld, wordt de beschikbare productvoorraad voor beide locaties in Shopify bijgewerkt.

<img src={require("/img/stock-update-available-both-warehouses.png").default} height="" width="800" />

<img src={require("/img/stock-update-available-both-warehouses-shopify.png").default} height="" width="400" />

Wanneer een nieuw magazijn in ShopCtrl wordt ingeschakeld en aan de bijbehorende locatie in Shopify is gekoppeld, wordt de nieuwe locatie voor een product automatisch ingeschakeld bij de voorraadupdate van dat product. 
Als het bijhouden van de voorraad (inventory tracking) voor het product niet was ingeschakeld, wordt dit bij het eerste verzoek om de voorraad bij te werken vanuit ShopCtrl ook ingeschakeld.

Zodra de voorraadniveaus van het product worden gesynchroniseerd, neemt ShopCtrl de leiding in dit proces. Om het voorraadbeheer te vereenvoudigen, worden de voorraadniveaus van locaties die in ShopCtrl niet zijn gekoppeld of voor een shop zijn uitgeschakeld, in Shopify automatisch op nul gezet.
Als er in Shopify een nieuwe locatie wordt aangemaakt die nog niet aan een magazijn in ShopCtrl is gekoppeld, of als het magazijn in ShopCtrl voor een shop is uitgeschakeld, worden de voorraadniveaus van het product op de bijbehorende locatie op nul gezet zodra er een wijziging in de voorraad van dat product wordt geregistreerd.

## Voorraad op Amazon bijwerken {#updating-amazon-inventory}

Het bijwerken van de productvoorraad is een aparte functie van de Amazon-synchronisatiemodule. U kunt deze los van de productsynchronisatie inschakelen op het tabblad Shop Settings > Amazon Synchronization van de betreffende shop. Zie [De Amazon-shopsynchronisatie instellen in ShopCtrl](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-3P/index.md#2-setting-up-amazon-shop-synchronization-in-shopctrl) voor meer informatie.

De export van voorraadniveaus gebeurt automatisch op de achtergrond, met geplande verzoeken. Nadat een wijziging in de beschikbare productvoorraad is geregistreerd, wordt de bijbehorende voorraadaanbieding op Amazon bijgewerkt met de nieuwe waarde. 

:::warning[Let op]

Door de complexe bedrijfsregels die Amazon op aanbiedingen toepast, kan het lang duren voordat Amazon een wijziging in de voorraadniveaus heeft verwerkt (van 15 minuten tot enkele uren).

:::

Producten in ShopCtrl worden met voorraadaanbiedingen op Amazon gematcht op basis van de SKU, die in ShopCtrl de productcode is.
Zo wordt een productaanbieding op Amazon met SKU "003" gematcht met een product in ShopCtrl met dezelfde productcode "003".

Het beschikbare voorraadniveau voor de betreffende voorraadaanbieding op Amazon wordt berekend op basis van de beschikbare voorraad voor de specifieke Amazon-shop in ShopCtrl. 

<img src={require("/img/product-inventory-update-01.png").default} height="" width="800" />

Als het product bijvoorbeeld in meerdere magazijnen ligt en die allemaal aan de shop zijn gekoppeld, wordt de productaanbieding bijgewerkt met de opgetelde waarde.

<img src={require("/img/amazon-inventory-update-consolidated-01.png").default} height="" width="800" />

