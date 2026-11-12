---
sidebar_position: 4
slug: /docs/product-variants
description: "Maak van een product in ShopCtrl een hoofdproduct en genereer de productvarianten op basis van een eigenschappenset, zoals maat of kleur."
---
# Productvarianten 


## Productvarianten aanmaken {#how-to-create-product-variants}

Als er voor een product nog geen voorraaditems en orders zijn aangemaakt, kunt u dit product omzetten in een hoofdproduct voor productvarianten.

Zo maakt u productvarianten aan:

1. Open het product dat u wilt omzetten in een hoofdproduct voor varianten.
2. Kies in het menu het tabblad **Properties** en selecteer een **eigenschappenset** (property set) waarop het product varieert (eigenschappen van het type vervolgkeuzelijst).
<img src={require("/img/create-product-variants-choose-property-set.png").default} height="" width="500" />
3. Ga naar het tabblad **Variant properties** en voeg uit de beschikbare eigenschappenset de eigenschappen toe waarop het product varieert.
<img src={require("/img/create-variant-product-variant-properties.png").default} height="" width="500" />

:::info[**Let op:**]

Nadat de eigenschappen zijn toegevoegd, wordt het bewerkte product omgezet in een hoofdproduct voor de varianten. Het kan dan niet meer in het magazijn worden opgeslagen of op de website worden gepubliceerd. Het veld Code bevat nu variabelen op basis waarvan de codes van de varianten worden gegenereerd.

:::
4. (Optioneel) Pas de **code** van het product aan op basis waarvan de codes voor de productvarianten worden gegenereerd.
5. Open het tabblad **Product Variants** om varianten op basis van eigenschappen aan te maken:
<img src={require("/img/create-product-variants-from-parent.png").default} height="" width="800" />
6. Selecteer een **selectie** van de shop waarvoor u een productvariant wilt aanmaken. U kunt de waarde ook op Global Price (ex) laten staan om varianten voor alle verkoopkanalen aan te maken.
7. Selecteer de waarden van de Variant properties in de vervolgkeuzelijsten. De lijst met varianten hieronder wordt daarop gefilterd.
8. Klik op de knop **Add Product Variant**.
9. Er verschijnt een nieuwe productrij in de tabel. U kunt nu de details van de variant bewerken: code, publicatiestatus en verkoopprijs.
10. Ga verder met de overige varianten. 
11. Sla het bewerkte product op als u klaar bent. Het wordt omgezet in een hoofdproduct voor varianten en de productvarianten worden bij het opslaan aangemaakt. 

<img src={require("/img/view-variants.png").default} height="" width="800" />

## Productvarianten bewerken {#how-to-edit-product-variants}

Aangemaakte productvarianten worden in de producttabel getoond en kunnen net als andere producten worden geopend om te bewerken. 

<img src={require("/img/edit-product-parent-and-variants.png").default} height="" width="800" />

Om de details van het hoofdproduct te bewerken, klikt u op de parameterlink in de kolom Name.
De details van het hoofdproduct worden in een nieuw tabblad geopend om te bewerken.
U kunt nieuwe productvarianten toevoegen en bestaande productvarianten in bulk bewerken via het menu > tabblad Product Variant. Zie [Productvarianten](/User-Guide/08-Product-Management/Product-Details/product-general-data.md#product-variants) voor meer informatie.
