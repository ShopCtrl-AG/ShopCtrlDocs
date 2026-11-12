---
sidebar_position: 2
slug: /docs/merge-fields-in-document-templates
description: "Voeg merge fields van ShopCtrl in een Word-documentsjabloon in met Snelonderdelen (Quick Parts) in Word, met de juiste veldnamen en opmaak."
---

# Merge fields in documentsjablonen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Admin** of **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Gebruik de functie **Add Merge Field** van Microsoft Word om een nieuw merge field aan het ShopCtrl-sjabloon toe te voegen. Download een standaard Word-documentsjabloon uit ShopCtrl en open het om te bewerken. Of begin met een lege Word-pagina.

## Een merge field invoegen {#how-to-insert-merge-field}

Een enkelvoudig **Merge Field** invoegen in een Word-documentsjabloon:

1. Ga naar het tabblad **Insert** **> Quick Parts > Field**.
2. Kies het veldtype **MergeField**.
3. Vul bij **Field Name** de naam van het **Merge Field** van ShopCtrl in, tussen dollartekens. Bijvoorbeeld `$$Order.Id$$`.
4. Kies de juiste **Format**.
5. Klik op **Ok** om het merge field in te voegen.
6. Druk op `Alt` + `F9` om de veldcodes te tonen. Of klik met de rechtermuisknop op het veld en kies de optie **Toggle Field Codes**.
7. In de codeweergave ziet het merge field er zo uit:
   ```
   {MERGEFIELD $$Order.OrderTotal$$ \* MERGEFORMAT }
   ```
8. Verwijder de tekst `\* MERGEFORMAT`.
9. (Optioneel) Bij merge fields van het type getal en tekst kunt u lettertype, kleur, vet, cursief enzovoort toepassen, net als bij gewone tekst.
10. (Optioneel) Maak, afhankelijk van het type merge field, de uitvoer van het merge field op.

De procedure hierboven geldt voor Word 2007 en later. Zie het artikel [Insert mail merge fields](https://support.microsoft.com/en-us/office/insert-mail-merge-fields-9a1ab5e3-2d7a-420d-8d7e-7cc26f26acff) van Microsoft Support voor meer informatie.

### Opmaak toepassen op een merge field met een getal {#how-to-apply-numeric-merge-field-formatting}

De uitvoeropmaak van een **Numeric Merge Field** in het Word-documentsjabloon instellen:

1. Druk op `Alt` + `F9` om de veldcodes te tonen.
2. Selecteer het **Numeric Merge Field** dat u wilt bewerken.
3. Typ vóór de sluitende accolade een spatie en `\# `. Hiermee begint de schakeloptie.
4. Typ `#,###` om duizendtallen aan te geven.
5. Geef met `.00` aan hoeveel decimalen u wilt tonen. Als het samengevoegde veld geen decimalen bevat, worden er nullen getoond.
6. Het resultaat ziet er zo uit:

```
{MERGEFIELD $$Order.OrderTotal$$ \# #,###.00 }
```

:::info[**Let op:**]

De gebruikte notatie is cultuuronafhankelijk (invariant culture). Voor de verschillende culturen past ShopCtrl de weergave van het resultaat aan.

:::

Voorbeelden van de opmaak van **getalvelden**:
| Veldcode | Gegenereerde uitvoer, <br />en-US | Gegenereerde uitvoer, <br />nl-NL | Gegenereerde uitvoer, <br />fr-FR |
| --- | --- | --- | --- |
| `{MERGEFIELD $$Order.OrderTotalExVat$$ }` | 1559917.3600 | 1559917,3600 | 1559917,3600 |
| `{MERGEFIELD $$Order.OrderTotalExVat$$ \# #.00 }` | 1559917.36 | 1559917,36 | 1559917,36 |
| `{MERGEFIELD $$Order.OrderTotalExVat$$ \# €#,###.00 }` | €1,559,917.36 | €1.559.917,36 | €1 559 917,36 |
| `{MERGEFIELD $$Order.OrderTotalExVat$$ \# #,###.0 }` | 1,559,917.4 | 1.559.917,4 | 1 559 917,4 |
| `{MERGEFIELD $$Order.OrderTotalExVat$$ \# #,###. }` | 1,559,917 | 1.559.917 | 1 559 917 |
| `{MERGEFIELD $$Order.OrderTotalExVat$$ \* Upper \# ####,0.00kg }` | 1,559,917.36KG | 1.559.917,36KG | 1 559 917,36KG |

Zie de artikelen [Word Numeric Picture Switch](https://support.microsoft.com/en-us/topic/date-phone-number-and-currency-fields-are-merged-incorrectly-when-you-use-an-access-or-excel-data-source-in-word-34131aae-dddb-98a1-bd58-6b89994a357e) en [Intermediate mail merge tips](https://support.microsoft.com/en-us/office/video-take-mail-merge-to-the-next-level-ca30f6af-8ea0-4d20-832b-97bdefdc307b) van Microsoft Support voor meer informatie.

### Opmaak toepassen op een merge field met een datum {#how-to-apply-date-merge-field-formatting}

De uitvoeropmaak van een **Date Merge Field** in het Word-documentsjabloon instellen:

1. Druk op `Alt` + `F9` om de veldcodes te tonen.
2. Selecteer het **Date Merge Field** dat u wilt bewerken.
3. Typ vóór de sluitende accolade een spatie en `\@`. Hiermee begint de schakeloptie.
4. Typ een spatie, gevolgd door de datumnotatie tussen aanhalingstekens: `"d-MM-yy"`
5. Het resultaat ziet er zo uit: `{MERGEFIELD $$Order.Date$$ \@ "d-MM-yy" }`

Voorbeelden van de opmaak van **datum- en tijdvelden**:
| Veldcode | Gegenereerde uitvoer, <br />en-US | Gegenereerde uitvoer, <br />nl-NL | Gegenereerde uitvoer, <br />fr-FR |
| --- | --- | --- | --- |
| `{MERGEFIELD $$Order.Date$$ }` | 7/1/2021 7:06:05 PM | 1-7-2021 19:06:05 | 01/07/2021 19:06:05 |
| `{MERGEFIELD $$Order.Date$$ \@ "d-MM-yy" }` | 1-07-21 | 1-07-21 | 1-07-21 |
| `{MERGEFIELD $$Order.Date$$ \@ "ddd, d MMMM yyyy"}` | Thursday, 1 July 2021 | donderdag, 1 juli 2021 | jeudi, 1 juillet 2021 |
| `{MERGEFIELD $$Order.Date$$ \@ "MMMM d" }` | July 1 | juli 1 | juillet 1 |

Zie de artikelen [Picture switch](https://support.microsoft.com/en-us/topic/date-phone-number-and-currency-fields-are-merged-incorrectly-when-you-use-an-access-or-excel-data-source-in-word-34131aae-dddb-98a1-bd58-6b89994a357e) en [Intermediate mail merge tips](https://support.microsoft.com/en-us/office/video-take-mail-merge-to-the-next-level-ca30f6af-8ea0-4d20-832b-97bdefdc307b) van Microsoft Support voor meer informatie.

### Opmaak toepassen op een merge field met een afbeelding {#how-to-apply-image-merge-field-formatting}

Bij **merge fields van het type afbeelding** kunt u de afmetingen van de ingevoegde afbeelding wijzigen en de afbeelding met de klok mee draaien:

- De breedte, de hoogte of beide aanpassen, in pixels of mm
- De afbeelding 90, 180 of 270 graden draaien

De uitvoeropmaak van een **Image Merge Field** in het Word-documentsjabloon instellen:

1. Voeg na de naam van het merge field en vóór de sluitende accolade de schakeloptie `\#` toe.
2. Laat deze volgen door de parameters voor de afbeelding:

- Stel de grootte van de afbeelding in:

| Afmeting         | mm      | pixels |
| ---------------- | ------- | ------ |
| Breedte          | W0mm    | W0     |
| Hoogte           | H0mm    | H0     |
| Breedte en hoogte | 0mmx0mm | 0x0    |

- Of draai de afbeelding:

| Draaihoek | 90 graden | 180 graden | 270 graden |
| -------------- | ---------- | ----------- | ----------- |
| Draaien        | R90        | R180        | R270        |

:::info[**Let op**]

U kunt de afbeelding alleen tegelijk draaien en een grootte opgeven als de grootte in mm is opgegeven.

:::
**Voorbeelden**:
| Veldcode | Beschrijving van de uitvoer |
| --- | --- |
| `{MERGEFIELD $$Shop.Logo$$ \# w14mm }` | De afbeelding wordt naar verhouding verkleind of vergroot tot 14 mm breed |
| `{MERGEFIELD $$Shop.Logo$$ \# H100 }` | De afbeelding wordt naar verhouding verkleind of vergroot tot 100 px hoog |
| `{MERGEFIELD $$Shop.Logo$$ \# 100x100 }` | De afbeelding wordt aangepast tot een vierkant van 100 px |
| `{MERGEFIELD $$Shop.Logo$$ \# r90 }` | De afbeelding wordt 90 graden met de klok mee gedraaid |
| `{MERGEFIELD $$Shop.Logo$$  \# 30mmx10mm,R270 }` | De afbeelding wordt aangepast tot 30 mm x 10 mm en 270 graden met de klok mee gedraaid |

### Opmaak toepassen op een merge field met een barcode {#how-to-apply-barcode-merge-field-formatting}

De uitvoeropmaak van een **Barcode Merge Field** instellen:

1. Begin met de openingstag `<barcode Height=0 Width=0>`.
2. Geef de grootte van de barcode in pixels op en voeg daarna het **Merge Field** tussen dollartekens in dat u als barcode wilt tonen. Het merge field moet van het type **scan code** zijn.
3. Voeg ten slotte de sluitende tag `</barcode>` toe.

Bijvoorbeeld:

```
<barcode Height=50 Width=250>$$OrderShipment.OpenPickListScanCode$$</barcode>
```

Om elk type merge field als barcode te tonen, gebruikt u deze syntaxis:

```
<barcode Height=50 Width=250>sa: {MERGEFIELD $$Order.OrderCode$$ }</barcode>
```

:::warning[**Let op**]

Het **Merge Field** waarmee de barcode wordt gegenereerd, moet gegevens bevatten. Anders wordt het document niet automatisch gegenereerd.

:::

### Opmaak toepassen op een merge field met een QR-code {#how-to-apply-qr-code-merge-field-formatting}

De uitvoeropmaak van een **QR code Merge Field** instellen:

1. Typ de openingstag `<qrcode Height=0 Width=0>`.
2. Geef de grootte van de QR-code in pixels op en voeg daarna het **Merge Field** tussen dollartekens in dat u als QR-code wilt tonen.
3. Voeg ten slotte de sluitende tag `</qrcode>` toe.

Bijvoorbeeld:

```
<qrcode Height=50 Width=50>$$OrderShipment.OpenPickListScanCode$$</qrcode>
```

:::warning[**Let op**]

Het **Merge Field** waarmee de QR-code wordt gegenereerd, moet gegevens bevatten. Anders wordt het document niet automatisch gegenereerd.

:::
