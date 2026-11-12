---
sidebar_position: 4
slug: /docs/conditions-in-document-templates
description: "Gebruik voorwaardelijke blokken in documentsjablonen van ShopCtrl om per shop of klant andere inhoud te tonen, op basis van de waarden van merge fields."
---

# Voorwaarden in documentsjablonen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Admin** of **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

## Voorwaardelijke blokken {#conditional-blocks}

Gebruik **Conditional blocks** in documentsjablonen om informatie te tonen die verschilt per shop of klant die hetzelfde sjabloon gebruikt.

Elk type [merge field](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md) van ShopCtrl kan als voorwaarde worden gebruikt. U kunt de waarde vergelijken met bepaalde gegevens, of controleren of het veld een waarde heeft.

Vergelijk de waarde van het merge field met een bepaalde tekst of een bepaald getal, afhankelijk van het type merge field. De tekst binnen de voorwaarde verschijnt alleen in het document als aan de voorwaarde is voldaan.

U kunt controleren of het merge field een waarde heeft. Afhankelijk van het type voorwaarde verschilt de teruggegeven waarde:

| Type merge field | Teruggegeven waarde **True** | Teruggegeven waarde **False** |
| ---------------- | --------------------- | ---------------------- |
| Boolean          | True                  | False                  |
| Getal            | Waarde die niet nul is | Nul                   |
| Tekst (string)   | Bevat gegevens        | Leeg                   |

Als het merge field dat u als voorwaarde gebruikt bijvoorbeeld een tekst- of getalveld is en leeg of nul is, is de waarde van de voorwaarde **False**. De tekst binnen de voorwaarde verschijnt dan niet in het document.

Er zijn drie manieren om in ShopCtrl een voorwaarde op te stellen:

- met de syntaxis voor voorwaardelijke reeksblokken (Range) van ShopCtrl
- met de syntaxis voor voorwaardelijke instructies van Microsoft Word
- door voorwaardelijke instructies van Microsoft Word te nesten binnen de syntaxis voor voorwaardelijke reeksblokken van ShopCtrl

### Syntaxis voor voorwaardelijke reeksblokken van ShopCtrl {#shopctrl-conditional-range-block-syntax}

Een **Condition** maken in het Word-documentsjabloon met de syntaxis voor voorwaardelijke reeksblokken van ShopCtrl:

1. Open het Word-documentsjabloon om het te bewerken.
2. Druk op `Ctrl` + `F9` om de veldaccolades `{}` in te voegen. Typ tussen de accolades `RangeStart:`, gevolgd door de naam van één merge field dat als voorwaarde wordt gebruikt. Bijvoorbeeld `$$Order.CustomerReference$$`. Hiermee geeft u het beginpunt van de voorwaarde aan.
3. Klik met de rechtermuisknop op het ingevoerde merge field en klik op **Update the field** om de wijzigingen toe te passen.
4. Voeg de inhoud van de voorwaarde in. Deze wordt alleen getoond als aan de voorwaarde is voldaan, en kan bestaan uit tekst en merge field(en).
5. Om het voorwaardelijke reeksblok af te sluiten, voegt u met `Ctrl` + `F9` de veldaccolades `{}` in. Typ tussen de accolades `RangeEnd:`, gevolgd door de naam van het merge field dat als voorwaarde is gebruikt, in ons voorbeeld `$$Order.CustomerReference$$`.
6. Klik met de rechtermuisknop op het ingevoerde merge field en klik op **Update the field** om de wijzigingen toe te passen.
7. Bewerk het sjabloon verder zoals gebruikelijk.

Hier is bijvoorbeeld een voorwaarde die de tekst binnen het blok alleen toont als het merge field `$$Order.CustomerReference$$` een waarde heeft:

```
{MERGEFIELD RangeStart:$$Order.CustomerReference$$ }
Customer reference: {MERGEFIELD $$Order.CustomerReference$$ }
{MERGEFIELD RangeEnd:$$Order.CustomerReference$$ }
```

De tekst "Customer Reference" en de gegevens van het merge field CustomerReference worden alleen getoond als er gegevens in het veld Customer Reference zijn opgeslagen. Anders wordt er niets in het gegenereerde document getoond.

En hier is een voorbeeld van een voorwaarde die tekst alleen toont als het merge field de waarde false heeft:

```
{MERGEFIELD RangeStart:$$Order.IsPaid$$='False' }
Please proceed with the payment
{MERGEFIELD RangeEnd:$$Order.IsPaid$$='False' }
```

:::warning[**Let op**]

Voorwaardelijke reeksblokken ondersteunen geen else-instructie.

:::

### Syntaxis voor voorwaardelijke instructies van Microsoft Word {#microsoft-word-conditional-statements-syntax}

U kunt de voorwaardelijke syntaxis van de **IF-velden** van Microsoft Word (afdruk samenvoegen) gebruiken om velden te tonen of te verbergen op basis van de opgehaalde gegevens.

Een voorwaarde met een IF-veld van Microsoft Word maken:

1. Open het Word-documentsjabloon dat u wilt bewerken.
2. Druk op `Ctrl` + `F9` om de veldaccolades `{}` in te voegen.
3. Geef de **IF**-voorwaarde op met de syntaxis voor IF-velden van Microsoft Word: `{ IF Expression1OperatorExpression2TrueTextFalseText}`.
4. Selecteer het ingevoegde veld en werk het bij met `F9`.
5. Bewerk het sjabloon verder zoals gebruikelijk.

Een andere manier om een IF-voorwaarde aan het veld voor de klantreferentie toe te voegen is bijvoorbeeld:

```
{IF {MERGEFIELD $$Order.CustomerReference$$ } <> "" "Customer reference: {MERGEFIELD $$Order.CustomerReference$$ }" ""}
```

De tekst verschijnt alleen in het gegenereerde document als aan de voorwaarde is voldaan. In ons voorbeeld worden de tekst "Customer Reference:" en de waarde van het merge field alleen getoond als in het merge field voor de klantreferentie een waarde is opgeslagen.

Raadpleeg de artikelen van Microsoft voor meer informatie:

- [Field codes: IF field](https://support.microsoft.com/en-us/office/field-codes-if-field-9f79e82f-e53b-4ff5-9d2c-ae3b22b7eb5e?ui=en-US&rs=en-US&ad=US)
- [Word 2013 training Advanced mail merge Add formulas and conditional statements](https://support.microsoft.com/en-us/office/video-add-formulas-and-conditional-statements-1130d3c5-d0c4-4b6f-9b0e-3553c864f8dd#ID0EAABAAA=Overview)

## Voorwaarden nesten {#nesting-conditions}

**Voorwaarden met IF-velden van Word** kunnen worden genest binnen **voorwaardelijke reeksblokken**, zodat u complexere voorwaarden kunt maken.

Bijvoorbeeld:

```
{MERGEFIELD RangeStart:$$PaymentType.IsPaymentOnInvoice$$}
{ IF {MERGEFIELD $$Order.TotalInvoiced$$ } = {MERGEFIELD $$Order.TotalReceived$$ } "Your Order is fully paid, thank you"
"Total received: {MERGEFIELD $$Order.TotalReceived$$ \# €#,###.00 }
Due on Delivery: {MERGEFIELD MERGEFIELD $$Order.TotalDue$$ \# €#,###.00 }
Order Total: {MERGEFIELD $$Order.TotalInvoiced$$ \# €#,###.00 }" }
{MERGEFIELD RangeEnd:$$PaymentType.IsPaymentOnInvoice$$}
```

![Voorbeeld van een voorwaarde](/img/codition-example.png)

Bij volledig betaalde orders met de betaalmethode factuur wordt deze tekst getoond:

> "Your Order is fully paid, thank you."

Bij gedeeltelijk betaalde of onbetaalde orders met de betaalmethode factuur worden drie regels getoond:

> Total received: €20.00
> Due on Delivery: €37.19
> Order Total: €57.19
