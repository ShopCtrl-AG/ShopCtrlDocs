---
sidebar_position: 3
slug: /docs/duplicating-orders
description: "Dupliceer een bestaande order in ShopCtrl om de klant, producten en parameters naar een nieuwe order te kopiëren. Duplicaten worden niet met verkoopkanalen gesynchroniseerd."
---

# Orders dupliceren

Soms wilt u een bestaande order dupliceren om een nieuwe order aan te maken waar de klant om heeft gevraagd. De contactgegevens van de klant, de producten en de orderparameters worden naar een nieuwe order gekopieerd.

## Een order dupliceren {#how-to-duplicate-an-order}

Eén order kopiëren:

1. Open het tabblad **Sales > Orders**.
2. Zoek en **selecteer** de order die u wilt kopiëren.
3. Klik in het actiemenu bovenaan op **More** en selecteer **Copy** in de vervolgkeuzelijst.
4. De gekopieerde order wordt in een nieuw tabblad geopend om te bewerken. Klik op **Save** of **Save and Close** om de gekopieerde order op te slaan.

<img src={require("/img/Copy-single-order.png").default} height="" width="800" />

:::info[Let op]

Gedupliceerde orders worden niet teruggesynchroniseerd naar verkoopkanalen.

:::

## Meerdere orders kopiëren {#how-to-copy-multiple-orders}
Meerdere orders kopiëren:

1. Open het tabblad **Sales > Orders**.
2. **Selecteer** met `Shift` of `Ctrl` de orders die u wilt kopiëren.
3. Klik in het actiemenu bovenaan op **More** en selecteer **Copy** in de vervolgkeuzelijst.
4. De gekopieerde orders verschijnen in de ordertabel. U kunt ze nu elk openen om te bewerken.


### Aanvullende configuratie {#additional-configuration}

Als **shop owner** kunt u het kopiëren van orders beperken tot orders van het lopende jaar.
Ga hiervoor naar de pagina **Shop owner details** en schakel op het tabblad **Order Management** de instelling '**Allow copy orders of the current year only**' in.
Zo voorkomt u dat medewerkers oude orders kopiëren met mogelijk verouderde contact- en financiële gegevens.

<img src={require("/img/allow-copy-orders-of-the-current-year.png").default} height="" width="500" />
