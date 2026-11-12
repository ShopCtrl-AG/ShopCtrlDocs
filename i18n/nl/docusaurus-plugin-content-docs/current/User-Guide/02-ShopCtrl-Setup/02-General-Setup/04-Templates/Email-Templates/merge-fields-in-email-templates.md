---
sidebar_position: 2
slug: /docs/merge-fields-in-email-templates
description: "Voeg merge fields zoals $$Order.Date$$ in een e-mailsjabloon van ShopCtrl in, zodat de e-mail bij het genereren met actuele gegevens wordt gevuld."
---

# Merge fields in e-mailsjablonen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Power User** of hoger aan de shop gekoppeld zijn om sjablonen op het niveau van de shop owner aan te maken en te bewerken.

:::

Met merge fields voegt u gegevens uit ShopCtrl in het e-mailsjabloon in, zodat ze automatisch worden opgehaald wanneer u op basis van het sjabloon een e-mail aanmaakt.

## Een merge field invoegen {#how-to-insert-merge-field}

Een merge field in het e-mailsjabloon invoegen:

1. Open het sjabloon om het te bewerken.
2. Zet de cursor op de plek waar u het merge field wilt invoegen en typ de **naam van het merge field**: `$$EntityName.FieldName$$`. Of selecteer en voeg het in met de vervolgkeuzeknoppen voor merge fields in het menu boven de tekst van de e-mail.
3. Pas **opmaak** toe, afhankelijk van het type merge field.
4. Bewerk het e-mailsjabloon verder zoals gebruikelijk.

U kunt altijd de volledige lijst met merge fields ophalen door op de knop **Available MergeFields** te klikken. Zie de [lijst met merge fields](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md) voor meer informatie.

### De waarde van een merge field controleren {#how-to-check-the-value-of-a-merge-field}

Als een e-mail een onverwachte waarde toont, controleer dan eerst welk merge field de waarde geeft die u nodig hebt, voordat u het sjabloon wijzigt:

1. Open het e-mailsjabloon.
2. Klik op de knop **Available MergeFields** en vul de code van een bestaand record in, bijvoorbeeld een order, inkooporder of zending.
3. Genereer het bestand. Hierin staan alle merge fields die voor dat record beschikbaar zijn, met daarnaast de werkelijke waarden van dat record.
4. Zoek in het bestand (Ctrl+F) naar het merge field dat in het sjabloon wordt gebruikt, en naar vergelijkbare merge fields, om hun waarden te vergelijken.
5. Vervang het merge field in het sjabloon door het merge field met de juiste waarde.

:::tip[Voorbeeld]

Een e-mail bij een dropship-inkooporder toont een aantal palletplaatsen dat oploopt bij elke nieuwe inkoop binnen dezelfde order. In het gegenereerde bestand voor de inkooporder toont `$$Order.ShipmentsPackageCount$$` de pakketten van alle zendingen in de order, terwijl `$$OrderShipment.PackageCount$$` alleen de pakketten van de huidige zending toont. Door `$$OrderShipment.PackageCount$$` in het sjabloon te gebruiken, is het probleem opgelost. Zie [Merge fields voor Order Shipment](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md#order-shipment).

:::

### Opmaak toepassen op een merge field met een getal {#how-to-apply-numeric-merge-field-formatting}

De uitvoeropmaak van een merge field met een getal in het e-mailsjabloon instellen:

1. Selecteer het merge field van het type **Numeric** dat u wilt bewerken.
2. Typ vóór de sluitende dollartekens `#`, gevolgd door de decimale notatie, bijvoorbeeld: `0,00`.
3. Bewerk het e-mailsjabloon verder zoals gebruikelijk.

Voorbeelden van de opmaak van getalvelden:
| Veldcode | Gegenereerde uitvoer |
| --- | --- |
| $$Order.OrderTotalExVat$$ | 1,559,917.36 |
| $$Order.OrderTotalExVat#0.0000$$ | 1559917.3600 |
| $$Order.OrderTotalExVat##,#.00$$ | 1,559,917.36 |
| $$Order.OrderTotalExVat##,###.$$ | 1,559,917 |
| $$Order.OrderTotalExVat#€#,###.00$$ | €1,559,917.36 |
| $$Order.OrderTotalExVat####,0.00kg$$ | 1,559,917.36kg |

Zie [.NET Custom numeric format strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings) voor meer informatie.

### Opmaak toepassen op een merge field met een datum {#how-to-apply-date-merge-field-formatting}

De uitvoeropmaak van een merge field met een datum in het e-mailsjabloon instellen:

1. Selecteer het **Date and Time Merge Field** dat u wilt bewerken.
2. Typ vóór de sluitende dollartekens `#`, gevolgd door de notatie waarin u de datum wilt tonen. Bijvoorbeeld `yyyy-MM-dd`.
3. Bewerk het sjabloon verder zoals gebruikelijk.

Voorbeelden van de opmaak van datum- en tijdvelden:
| Veldcode | Gegenereerde uitvoer <br />en-US | Gegenereerde uitvoer <br /> nl-NL | Gegenereerde uitvoer <br /> fr-FR |
| --- | --- | --- | --- |
| $$Order.Date$$ | 6/25/2021 | 25-6-2021 | 25/06/2021 |
| $$Order.Date#F$$ | Friday, June 25, 2021 3:06:22 PM | vrijdag 25 juni 2021 15:06:22 | vendredi 25 juin 2021 15:06:22 |
| $$Order.Date#MMMM d$$ | June 25 | juni 25 | juin 25 |
| $$Order.Date#d-MM-yy$$ | 25-06-21 | 25-06-21 | 25-06-21 |
| $$Order.Date#dd/MMM/yy$$ | 25/Jun/21 | 25-jun-21 | 25/juin/21 |
| $$Order.Date#ddd, d MMMM yyyy$$ | Fri, 25 June 2021 | vr, 25 juni 2021 | ven., 25 juin 2021 |
| $$Order.Date#dddd dd, MMMM yyyy HH:mm$$ | Friday 25, June 2021 15:06 | vrijdag 25, juni 2021 15:06 | vendredi 25, juin 2021 15:06 |

Zie [.NET Date Time Formatting](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings) voor meer informatie.

## E-mailsjablonen als merge fields {#email-templates-as-merge-fields}

E-mailsjablonen kunnen zelf ook als merge field worden gebruikt. U kunt bijvoorbeeld een sjabloon voor een voettekst of koptekst maken en dit in de andere sjablonen gebruiken.

De syntaxis van een merge field voor een e-mailsjabloon is: `$$MailTemplate.{Template-code}$$`.
Hierbij is `{Template-code}` de code van het bestaande e-mailsjabloon.

Om een e-mailsjabloon als merge field in te voegen, klikt u op de vervolgkeuzeknop **Templates** in het menu boven de tekst en selecteert u het veld in de lijst. Of typ het in de notatie hierboven.

## De eigen tag Report {#report-custom-tag}

Met de eigen tag `<Report>` kunt u rapporten rechtstreeks in e-mailsjablonen opnemen. Het rapport wordt dynamisch gegenereerd wanneer de e-mail wordt verstuurd.

**Syntaxis:**

```html
<Report ReportCode="{report-code}" OutputType="{Image|HTML}">{parameters}</Report>
```

| Attribuut | Omschrijving |
| --- | --- |
| `ReportCode` | De code van de rapportconfiguratie (Report Configuration; hieronder leest u hoe u deze vindt). |
| `OutputType` | `HTML` toont het rapport als HTML-tabel. `Image` voegt het in als PNG-afbeelding. |

**Parameters** geeft u door als paren van sleutel en waarde, gescheiden door `&amp;`, binnen de tag. U kunt ze combineren met merge fields. De sleutels van de parameters moeten overeenkomen met de interne **Name** van de parameter in de rapportconfiguratie, niet met het label in de interface.

Voor parameters van het type `DateRange` kunt u expliciete datums in de notatie `yyyy-MM-dd` doorgeven, of een trefwoord zoals `this year`, `last month`, `last7days` enzovoort.

**Voorbeelden:**

Ticketstatistieken, gefilterd op periode en shop:
```html
<Report ReportCode="Ticket_statistics" OutputType="HTML">FromPeriod=2026-04-01&amp;TillPeriod=2026-04-30&amp;Shops=$$Shop.Id$$</Report>
```

Factuurstatistieken met een parameter voor shop en jaar:
```html
<Report ReportCode="InvoiceStatsOverview" OutputType="HTML">ShopIdParam=$$Shop.Id$$&amp;YearsParam=2026</Report>
```

<details>
<summary><b>Volledig voorbeeld van een e-mailsjabloon</b></summary>

```html
<html>
<head>
    <meta charset="utf-8">
    <title>Weekly Ticket Statistics</title>
    <style>
        body { font-family: Arial, Helvetica, sans-serif; color: #333; font-size: 13px; margin: 0; padding: 20px; }
        .wrapper { max-width: 720px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e5e5; border-radius: 4px; }
        .header { background: #2f4f6f; color: #ffffff; padding: 16px 20px; border-radius: 4px 4px 0 0; }
        .header h1 { margin: 0; font-size: 18px; font-weight: 600; }
        .content { padding: 20px; line-height: 1.5; }
        .report-block { margin: 20px 0; padding: 12px; background: #f7f9fc; border: 1px solid #e2e7ee; border-radius: 4px; overflow-x: auto; }
        .report-block h2 { margin: 0 0 10px 0; font-size: 15px; color: #2f4f6f; }
        .report-block img { max-width: 100% !important; height: auto !important; display: block; }
        .report-block span { max-width: 100% !important; }
        .footer { padding: 14px 20px; font-size: 11px; color: #888; border-top: 1px solid #eee; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="header">
            <h1>Weekly Ticket Statistics — $$Shop.Name$$</h1>
        </div>
        <div class="content">
            <p>Hi $$Employee.FirstName$$,</p>
            <p>
                Please find below the ticket statistics for <strong>$$Shop.Name$$</strong>
                covering the reporting period ending <strong>$$Current.Date##yyyy-MM-dd$$</strong>.
            </p>
            <div class="report-block">
                <h2>Ticket statistics</h2>
                <Report ReportCode="Ticket_statistics" OutputType="HTML">FromPeriod=2026-04-01&amp;TillPeriod=2026-04-30&amp;Shops=$$Shop.Id$$</Report>
            </div>
            <p>Kind regards,<br>ShopCtrl Reporting</p>
        </div>
        <div class="footer">
            Generated automatically on $$Current.Date##yyyy-MM-dd HH:mm$$ ·
            $$Shop.Name$$
        </div>
    </div>
</body>
</html>
```

![De eigen tag Report in de praktijk](/img/report-custom-tag-in-action.png)

</details>

**De rapportcode en de namen van parameters vinden:**

Gebruik het endpoint voor rapporten van de API van uw ShopCtrl-omgeving om de lijst met beschikbare rapporten, met hun codes en parameters, op te halen:

```
GET https://{your-shopctrl-domain}/v1/Reports
```

Vervang `{your-shopctrl-domain}` door de URL van uw ShopCtrl-omgeving (bijvoorbeeld `https://mycompany.shopctrl.com`).

Het antwoord bevat de `Code` (gebruik deze als `ReportCode`) en een array `ReportParameters`, waarbij het veld `Name` van elk item de sleutel van de parameter is die u in de tag gebruikt.

:::note
Bij parameters van het type `DateRange` bevat het veld `Name` twee sleutels, gescheiden door een komma (bijvoorbeeld `StartDateParam,EndDateParam`). Geef ze door als aparte parameters: `StartDateParam=2026-01-01&amp;EndDateParam=2026-12-31`, of als trefwoord: `StartDateParam,EndDateParam=this year`.
:::
