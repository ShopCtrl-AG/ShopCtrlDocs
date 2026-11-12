---
sidebar_position: 3
slug: /docs/number-ranges
description: "Stel nummerreeksen in ShopCtrl in voor orders, offertes en facturen, inclusief voorvoegsels, aantal cijfers, chronologische notaties en resetperioden."
---

# Nummerreeksen

Met nummerreeksen in ShopCtrl houdt u verkoop- en inkooporders, offertes en facturen overzichtelijk bij. Telkens wanneer u een nieuwe verkooporder of factuur aanmaakt, kent ShopCtrl het volgende beschikbare nummer uit uw reeks toe.

Er zijn verschillende manieren om uw nummers op orde te houden.

- Doorlopende nummering, bijvoorbeeld INV00001, INV00002 voor facturen.
- Beginnen met een unieke shopcode, bijvoorbeeld BE00001 voor orders.
- Chronologische nummering, met de datum van uw offerte, order of factuur. Bijvoorbeeld 2023-01-00001
- Resetperiode: nummers kunnen eindeloos oplopen of elk jaar opnieuw beginnen.

De standaardnummernotatie kan bestaan uit een voorvoegsel van letters en het nummer zelf, met 3 tot 6 cijfers. Dit zijn de voorgestelde standaardnotaties:

`{Nr:000000}` - nummerreeks van 6 cijfers.

`OF{Nr:000000} ` - nummerreeks met een voorvoegsel van letters

`{CreateTime:yy}{Nr:000000}` - nummerreeks met een chronologisch voorvoegsel


Er zijn ook andere notaties voor chronologische nummering. U kunt de code aanpassen met de bijbehorende placeholders, zoals:

`{OfferDate}` - datum van de offerte

`{OrderDate}` - datum van de order

`{InvoiceDate}` - datum van de factuur

`{CreateTime}` - aanmaakdatum van de offerte, factuur of order

19 januari 2023 kan bijvoorbeeld ook worden weergegeven als 19012023-000001 (`{OrderDate:ddMMyyyy}-{Nr:000000}`), 23-000001 (`{OrderDate:yy}-{Nr:000000}`), enzovoort.

Met een voorvoegsel van het type `{OrderDate}` kunt u een order voor een toekomstig jaar aanmaken. Stel dat uw code elk jaar opnieuw begint, bijvoorbeeld: `BE{OrderDate:yyyy}{Nr:000000}`. De automatische nummering neemt in dat geval het volgende nummer uit de toekomstige periode. ShopCtrl zorgt ervoor dat de nummerreeks voor beide perioden klopt en houdt per jaar bij hoe de nummers oplopen.
De placeholder `{CreateTime}` geeft daarentegen altijd de werkelijke aanmaakdatum terug en kan niet handmatig worden gewijzigd in een toekomstige of eerdere datum.

Zie [.NET Date Time Formatting](https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings) voor meer informatie.

Nummerreeksen voor offertes, orders en factuurcodes kunt u op shopniveau instellen. U kunt ze ook voor het hele bedrijf gelijk houden door ze op het niveau van de shop owner in te stellen.

:::warning

Deze regels gelden alleen voor records die in ShopCtrl worden aangemaakt. Alle orders die uit marktplaatsen of e-commerceplatforms worden geïmporteerd, behouden hun oorspronkelijke code.

:::

## De nummerreeks wijzigen {#how-to-change-the-number-sequence}

Volg deze stappen om de standaardnummerreeks op het niveau van de shop owner te wijzigen:
![Nummerreeksen in de shopdetails](/img/number-ranges-shop-details.png)

1. Ga naar **Configuration > Shop Owners**.
2. Selecteer de shop owner en klik op **Edit** om de instellingen te openen.
3. Ga in het menu naar **Financial > Number ranges**.
4. Kies het type document waarvan u het **Code format** wilt bewerken: Offer, Order of Invoice.
5. Kies de resetperiode voor chronologische nummering: **Infinite** of **Yearly**.
6. Pas de configuratie van het **Code format** aan uw wensen aan.
7. U kunt een eigen nummer instellen waarmee de nummering begint. Vul een nummer naar keuze in het veld **Last Number** in. Klik na het invullen op het pictogram '**Save**'.
8. Klik op **Save** of **Save and close** om de wijzigingen in de nummering van de shop owner toe te passen.

Nadat u de nummerreeks hebt gewijzigd, past ShopCtrl de nieuwe nummernotatie toe op toekomstige transacties.
De codes van orders, offertes of facturen die zijn aangemaakt voordat u de instellingen van de nummerreeks hier hebt gewijzigd, worden niet bijgewerkt.

Op dezelfde manier kunt u de nummerreeks voor een specifieke **Shop** wijzigen. Volg dezelfde stappen op de pagina met shopinstellingen.

:::warning

De nummeringsregels op shopniveau **overschrijven** de regels op het niveau van de shop owner.

:::
