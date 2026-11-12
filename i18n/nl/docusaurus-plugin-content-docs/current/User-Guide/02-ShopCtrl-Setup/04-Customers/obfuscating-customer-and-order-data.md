---
sidebar_position: 5
slug: /docs/obfuscating-customer-and-order-data
description: "Obfusceer persoonsgegevens in inactieve klant- en orderrecords in ShopCtrl, handmatig of als geplande nachttaak, om aan uw bewaarbeleid te voldoen."
---

# Klant- en ordergegevens obfusceren

ShopCtrl kan persoonsgegevens in inactieve klant- en orderrecords obfusceren, ter ondersteuning van uw bewaarbeleid en privacyregels. Bij obfuscatie worden persoonsgegevens (namen, adressen, telefoonnummers, e-mailadressen) vervangen door vaste tekst, terwijl de structuur van het record behouden blijft voor rapportage en audits.

Obfuscatie is beschikbaar op **klant**- en op **order**niveau, en kan handmatig worden gestart of automatisch als geplande nachttaak worden uitgevoerd. Anders dan [anonimisering volgens de AVG (GDPR)](processing-customer-gdpr-requests.md) houdt obfuscatie rekening met voorwaarden en heeft het geen invloed op actieve records.

:::warning[**Onomkeerbare actie**]

Obfuscatie kan niet ongedaan worden gemaakt. Na uitvoering zijn de oorspronkelijke persoonsgegevens definitief vervangen.

:::

## Welke gegevens worden geobfusceerd {#what-data-gets-obfuscated}

Bij obfuscatie worden de volgende gegevens aangepast:

| Gegevens | Wat er gebeurt |
| --- | --- |
| **Contactgegevens** (naam, bedrijf, adres, postcode, telefoonnummers, btw-nummer) | Vervangen door "GDPR: removed" |
| **E-mailadressen** | Vervangen door `removed@gdpr.eu` |
| **Contactpersonen** | Naam en e-mailadres geanonimiseerd, contactpersoon gemarkeerd als verwijderd |
| **E-mailberichten** | Onderwerp, inhoud en adressen geanonimiseerd. De inhoud wordt alleen geanonimiseerd bij e-mails aan één ontvanger; e-mails aan meerdere ontvangers behouden hun inhoud |
| **Chatberichten** | Berichten van de klant geanonimiseerd; naam, e-mailadres en telefoonnummer van de klant verwijderd uit gesprekken |
| **Notities bij orders en offertes** | Voorzien van een AVG-tijdstempel aan het begin |
| **Bijgevoegde bestanden** | Verzendlabels, picklijsten, pakbonnen en VoIP-opnamen worden verwijderd |
| **Zoekindex** | Fulltext-zoekinhoud gewist voor de betreffende klanten, orders, facturen, e-mails en tickets |

:::info[**Factuurbestanden blijven bewaard**]

Factuurdocumenten worden **niet** verwijderd bij obfuscatie, omdat ze nodig kunnen zijn voor wettelijke en boekhoudkundige doeleinden.

:::


## Geplande obfuscatie instellen {#setting-up-scheduled-obfuscation}

Obfuscatie wordt beheerd met de app-module **Customer Data Obfuscation**, die per shop wordt ingesteld. Ga naar de configuratie van de app-module voor uw shop om deze instellingen te openen.

Automatische obfuscatie instellen voor een shop:

1. Log in als gebruiker met **shop admin**-rechten.
1. Zet de schakelaar **Enabled** aan. Dit is de hoofdschakelaar voor de functie: zowel handmatige als geplande obfuscatie werkt alleen als deze aan staat.
1. Bepaal met **Obfuscate Inactive Customer** of klantrecords samen met hun orders worden geobfusceerd. Als deze optie aan staat, worden klant- en ordergegevens samen geobfusceerd. Als deze optie uit staat, worden alleen ordergegevens geobfusceerd en blijven klantrecords ongewijzigd.
1. Bepaal met **Force Manual Order Obfuscation** hoe handmatige obfuscatie werkt. Als deze optie aan staat, verwerkt handmatige obfuscatie vanaf een orderpagina de order ongeacht de leeftijd of de verzendstatus. Als deze optie uit staat, moet de order aan dezelfde voorwaarden voldoen als bij de geplande taak.
1. Vul in het veld **Obfuscate Order After Shipped Days** het aantal dagen na verzending in waarna een order in aanmerking komt voor obfuscatie. Deze waarde moet groter zijn dan 0, anders vindt de geplande taak geen geschikte orders. De waarde geldt ook voor de handmatige controle als Force Manual Order Obfuscation uit staat.
Na de configuratie wordt de geplande taak automatisch buiten de werkuren uitgevoerd. Voor elke shop waarvoor obfuscatie is ingeschakeld, haalt de taak de geschikte orders op en obfusceert deze. Als **Obfuscate Inactive Customer** aan staat, worden ook de bijbehorende klanten geobfusceerd die aan de voorwaarden voldoen.
    <img src={require("/img/obfuscation-shop-settings.png").default} height="" width="800" />


## Handmatige obfuscatie {#manual-obfuscation}

### Vanuit een klantrecord {#from-a-customer-record}

1. Ga naar **Sales > Customers**.
1. Open het klantrecord.
1. Selecteer in het menu **Customer Data Obfuscation**.
1. Controleer of **Obfuscate Enabled** is aangevinkt. Als dit niet is aangevinkt, is de knop Obfuscate uitgeschakeld.
1. Klik op **Obfuscate**.
1. Bevestig de actie in het dialoogvenster.
    <img src={require("/img/obfuscate-customer.png").default} height="" width="800" />

Als u op klantniveau obfusceert, verzamelt ShopCtrl alle geschikte orders van die klant in alle shops en obfusceert deze. Als de instelling **Obfuscate Inactive Customer** aan staat en de klant aan de voorwaarden voldoet, wordt ook het klantrecord geobfusceerd.

Na afloop wordt de pagina vernieuwd (als de klant volledig is geobfusceerd) of verschijnt er een melding met het aantal geobfusceerde orders.

:::tip[**Afzonderlijke klanten uitsluiten**]

Om een specifieke klant uit te sluiten van geplande obfuscatie, vinkt u het selectievakje **Obfuscate Enabled** uit op de pagina Customer Data Obfuscation van die klant. De orders van de klant worden nog steeds geobfusceerd als ze aan de voorwaarden voldoen, maar het klantrecord zelf blijft ongewijzigd.

:::

### Vanuit een orderrecord {#from-an-order-record}

1. Open een orderrecord.
1. Selecteer in het menu **Customer Data Obfuscation**.
1. Klik op **Obfuscate**.
1. Bevestig de actie in het dialoogvenster.
    <img src={require("/img/obfuscated-customer-data.png").default} height="" width="800" />

Als **Force Manual Order Obfuscation** aan staat (de standaardinstelling), wordt de order direct geobfusceerd, zonder controle van de voorwaarden. Als de instelling uit staat, moet de order voldoen aan de voorwaarden die hieronder worden beschreven, en toont ShopCtrl een waarschuwing als de order niet kan worden geobfusceerd.

Als de instelling **Obfuscate Inactive Customer** aan staat en de bijbehorende klant aan de voorwaarden voldoet, wordt bij het obfusceren van één order ook het volledige klantrecord geobfusceerd (inclusief alle bijbehorende orders en gegevens).

## Voorwaarden {#eligibility-rules}

### Orders {#orders}

Een order komt in aanmerking voor obfuscatie als aan **alle** volgende voorwaarden is voldaan:

- De orderstatus is **Finished** of **Canceled**.
- De orderdatum is ouder dan het aantal dagen dat is ingesteld bij **Obfuscate Order After Shipped Days**.
- Voor afgeronde orders: de meest recente verzendactiviteit (datum van verzenden, inpakken of picken) is ook ouder dan de ingestelde termijn.
- De order is nog niet eerder geobfusceerd.

### Klanten {#customers}

Een klant komt in aanmerking voor obfuscatie als aan **alle** volgende voorwaarden is voldaan:

- **Obfuscate Enabled** is aangevinkt in het klantrecord.
- De klant is nog niet eerder geobfusceerd.
- De klant heeft geen **actieve of gepauzeerde orders**.
- De klant heeft geen **actieve of gepauzeerde offertes**.
- De klant heeft geen **openstaande tickets** (alle tickets moeten gesloten zijn).

:::warning[**Actieve records**]

Als een klant actieve orders, offertes of openstaande tickets heeft, wordt het klantrecord niet geobfusceerd. Geschikte orders van die klant worden wel gewoon geobfusceerd.

:::

## Obfuscatie of AVG "Forget Me" {#obfuscation-vs-gdpr-forget-me}

ShopCtrl biedt twee manieren om klantgegevens te anonimiseren. Kies de manier die bij uw situatie past:

| | Obfuscatie | AVG "Forget Me" |
| --- | --- | --- |
| **Doel** | Bewaarbeleid en opschonen van gegevens | Reageren op een AVG-verzoek om vergeten te worden |
| **Bereik** | Klant- en/of orderniveau | Alleen klantniveau (bijbehorende orders worden ook geanonimiseerd) |
| **Controleert actieve records** | Ja — slaat actieve orders, offertes en tickets over | Nee — wordt altijd uitgevoerd |
| **Kan worden ingepland** | Ja | Nee (alleen handmatig) |
| **Beschikbaar vanaf de orderpagina** | Ja | Nee |

Meer informatie over het verwerken van AVG-verzoeken vindt u in [AVG-verzoeken van klanten verwerken](/docs/processing-customer-gdpr-requests).
