---
sidebar_position: 4
slug: /docs/conditions-in-email-templates
description: "Voeg voorwaardelijke blokken toe aan e-mailsjablonen in ShopCtrl, zodat inhoud alleen verschijnt als een merge field een waarde heeft of overeenkomt met een bepaalde tekst."
---

# Voorwaarden in e-mailsjablonen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Power User** of hoger aan de shop gekoppeld zijn om sjablonen op het niveau van de shop owner aan te maken en te bewerken.

:::

## Voorwaardelijke blokken {#conditional-blocks}

Een voorwaarde in het e-mailsjabloon invoegen:

1. Open het e-mailsjabloon om het te bewerken.
2. Begin de voorwaarde door `RangeStart:` in te voegen, gevolgd door het merge field dat u als voorwaarde wilt gebruiken: `$$Entity.Field$$`.
3. Geef de voorwaarde op waaronder de inhoud van het blok in de e-mail wordt getoond:
   - als u geen voorwaarde opgeeft, wordt de inhoud alleen getoond als het merge field dat als voorwaarde dient een waarde heeft.
   - controleren of het veld een bepaalde tekst bevat: `RangeStart:$$Entity.Field$$='text'`
   - controleren of het veld gelijk is aan een bepaald getal: `RangeStart:$$Entity.Field$$='0'`
4. Zet het merge field voor het begin van de reeks tussen commentaartags `<!--` `-->`, zodat het niet in het uiteindelijke document wordt weergegeven.
5. Voeg de inhoud van het blok in. Deze wordt alleen getoond als aan de voorwaarde is voldaan, en kan bestaan uit tekst en merge fields. Maak de uitvoer van de merge fields zo nodig op.
6. Om de voorwaarde af te sluiten, voegt u `RangeEnd:` in, gevolgd door de naam die u hierboven hebt gekozen en dezelfde voorwaarde, als u die hebt opgegeven.
7. Zet de afsluitende constructie tussen commentaartags.
8. Bewerk het sjabloon verder zoals gebruikelijk.

:::warning[Let op]

Voor merge fields van het type getal kunt u geen andere vergelijkingsoperatoren gebruiken dan het gelijkteken `=`. Het is ook niet mogelijk een merge field met een ander merge field te vergelijken.

:::


### 1. Eenvoudige controle op een waarde (tonen als deze bestaat) {#1-basic-value-check-show-if-exists}

Hier is bijvoorbeeld een voorwaarde die de tekst binnen het blok alleen toont als het merge field $$Order.CustomerReference$$ een waarde heeft:

```html
<!-- RangeStart:$$Order.CustomerReference$$ -->
<p>CustomerReference: $$Order.CustomerReference$$</p>
<!-- RangeEnd:$$Order.CustomerReference$$ -->
```

Voor merge fields van het type getal: de tekst wordt getoond als het merge field een waarde heeft die niet nul is.

```html
<!-- RangeStart:$$Order.DiscountExVat$$ -->
<p>Discount: $$Order.DiscountExVat$$</p>
<!-- RangeEnd:$$Order.DiscountExVat$$ -->
```
### 2. Controleren op bepaalde waarden {#2-checking-for-specific-values}

Hier is een voorbeeld van een voorwaarde die tekst alleen toont als het merge field de waarde false heeft:

```
<!-- RangeStart:$$Order.IsPaid$$='False' -->
<p>Please proceed with the payment</p>
<!-- RangeEnd:$$Order.IsPaid$$='False' -->
```

### 3. Controleren op lege gegevens of null {#3-checking-for-empty-or-null-data}

Lege tekst (=''). Gebruik deze syntaxis voor tekstvelden (zoals URL's, namen of notities) om te controleren of het veld helemaal leeg is.

```html
<!-- Display a message while the order is processing (Value is Null) -->
<!-- RangeStart:$$Order.TrackingUrl$$='null' -->
<p>Your order is being prepared. Tracking will be available shortly.</p>
<!-- RangeEnd:$$Order.TrackingUrl$$='null' -->
```
Zo werkt het: de inhoud tussen deze tags verschijnt alleen als het veld TrackingUrl geen waarde heeft.

Voor velden van het type getal of datum werkt een gewone controle op "leeg" niet altijd goed. Controleer in die gevallen op de waarde null.

```html
<!-- RangeStart:$$Order.DownPayment$$='null' -->
<p>No down payment recorded for this order.</p>
<!-- RangeEnd:$$Order.DownPayment$$='null' -->
```
:::tip Tip

Als een veld met `=''` niet werkt zoals verwacht, probeer dan `='null'` om te zien of het onderliggende gegevenstype dat vereist.

:::

### Voorwaarden nesten {#nesting-сonditions}

Voorwaardelijke blokken kunnen binnen andere voorwaardelijke blokken worden genest:

```html
<!-- RangeStart:$$PaymentType.IsPaymentOnInvoice$$='True' -->
<!-- RangeStart:$$Order.TotalDue$$='0.0000' -->
<p>Your Order is fully paid, thank you.</p>
<!-- RangeEnd:$$Order.TotalDue$$='0.0000' -->
<!-- RangeEnd:$$PaymentType.IsPaymentOnInvoice$$='True' -->
```

Ook collecties kunnen binnen voorwaardelijke blokken worden genest:

```html
<!-- RangeStart:$$PaymentType.IsPaymentOnInvoice$$='True' -->
<!-- RangeStart:OrderRow-->
<p>$$OrderRow.ProductName$$</p>
<!-- RangeEnd:OrderRow-->
<!-- RangeEnd:$$PaymentType.IsPaymentOnInvoice$$='True' -->
```
