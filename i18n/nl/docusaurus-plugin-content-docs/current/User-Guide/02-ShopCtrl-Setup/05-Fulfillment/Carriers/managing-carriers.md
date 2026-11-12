---
sidebar_position: 1
slug: /docs/managing-carriers
description: "Verdeel zendingen in ShopCtrl over vervoerders op basis van magazijn, shop, verzendprijs, prioriteit van de vervoerder en productafmetingen."
---

# Vervoerders beheren

U kunt orders efficiënt over vervoerders verdelen op basis van:

* Gewicht van het pakket
* Prioriteit van de vervoerder
* Verzendprijs

Ten eerste kunt u verschillende vervoerdersaccounts instellen voor verschillende **magazijnen**. De vervoerder kan aan een magazijn of aan meerdere **shops** worden gekoppeld.

U kunt ook per land **verzendprijzen** voor de vervoerder opgeven. Met deze prijzen wordt rekening gehouden bij de verdeling over vervoerders: als er geen andere parameters zijn ingesteld, krijgt de goedkoopste vervoerder de voorkeur.

<img src={require("/img/carrier-prices.png").default} height="" width="800" />

:::warning[Let op]

De verzendtarieven van een vervoerder bepalen ook naar welke landen de vervoerder wordt ingezet. Orders naar een land dat niet op het tabblad met prijzen staat, worden niet aan deze vervoerder toegewezen.

:::

Geef een vervoerder een hogere prioriteit (een hoger getal) als u wilt dat deze voorrang krijgt boven andere vervoerders met vergelijkbare servicevoorwaarden.

## Zendingen verdelen op basis van productafmetingen {#distribute-shipments-based-on-product-dimensions}

In ShopCtrl hoort een vervoerder bij een specifieke dienst van die vervoerder. Zo kunnen we orders niet alleen over verschillende vervoerders verdelen, maar ook over verschillende diensten van dezelfde vervoerder, op basis van productafmetingen.

De toewijzing van vervoerders op basis van productafmetingen instellen:

1) Schakel deze functie in bij de instellingen van de shop owner: **Configurations > Shop Owners > Shop owner details page > Fulfillment > Shipment Settings > Allow Product General Dimensions to be used for parcel dimensions.**
<img src={require("/img/shopwner-settings-shipment-settings-dimensions.png").default} height="" width="500" />
2) Leg de **productafmetingen** vast voor alle producten die u verkoopt. U kunt afmetingen samen met andere gegevens importeren via de synchronisatie met uw verkoopkanaal of via de [productimport via Excel](/User-Guide/08-Product-Management/Product-Import/product-import-via-excel.md).
3) Stel de limieten voor het vervoerdersaccount in:
    1) Ga naar **Transport > Carrier Accounts** en open een vervoerder.
    2) Klik op het tabblad Limits.
    3) Stel de minimale en maximale waarde voor **Weight** in, in kg of gram.
    4) (Optioneel) Stel de minimale en maximale **Length** in, en de maximale omtrek (belt size) in meter, centimeter of millimeter.
    5) (Optioneel) Stel de maximale waarde voor **Volume** in, in liter.
    6) Klik op **Save** of **Save and Close** om het vervoerdersaccount op te slaan.
<img src={require("/img/carrier-limits-small-package.png").default} height="" width="500" />
4) Stel daarna de limieten voor de andere vervoerdersaccounts in.

:::info[Let op]

De grenswaarden tellen mee in de berekening. Als u een product van 3 kg verzendt en de gewichtslimiet van de vervoerder op 3 kg zet, wordt de zending aan die vervoerder toegewezen.
Als meerdere vervoerders vergelijkbare of overlappende limieten hebben, kunt u de toewijzing sturen door verzendprijzen toe te voegen en/of de prioriteit van de vervoerders in te stellen.

:::
