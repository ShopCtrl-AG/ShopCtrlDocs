---
sidebar_position: 1
slug: /docs/bulk-operations-scheduler
description: "Plan in ShopCtrl een bulkbewerking die automatisch met een vast interval wordt uitgevoerd, met dezelfde instellingen als de handmatige bewerking."
---

# Bulk Operations Scheduler

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Admin** of **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

## Overzicht {#overview}

Voor bepaalde filtertypen van Bulk Operations kunt u een **Scheduled task** (geplande taak) aanmaken die automatisch met het opgegeven interval wordt uitgevoerd.

De instellingen van een geplande taak zijn grotendeels gelijk aan die van de gekozen bulkbewerking, met uitzondering van de instellingen voor het interval.

## Een interval voor de bulkbewerking instellen {#setting-up-an-interval-for-the-bulk-operation}
<img src={require("/img/bulk-operaations-scheduler-interval-settings.png").default} height="" width="" />

Een **Interval** voor de bulkbewerking instellen:
1. Kies een **Interval**.
2. Stel een startpunt in door een **Start Date** en **Time** te kiezen.
3. (Optioneel) Stel met **Expire** een datum in waarop de geplande bulkbewerking stopt.

Afhankelijk van het type selectie kiest u een bepaald **Interval**.
Het startpunt staat standaard op het huidige tijdstip. Het startpunt kan in de toekomst of in het verleden liggen; het interval wordt altijd vanaf het startpunt in de gekozen perioden berekend.

Hieronder staan de beschikbare intervallen, met voorbeelden van de uitvoeringen als de startdatum en -tijd bij het aanmaken van de taak in de toekomst lagen.

| Interval | Instelling startdatum en -tijd | 1e uitvoering | 2e uitvoering | 3e uitvoering |
| --- | --- | --- | --- | --- |
| None | 1-7-2021 9:00 am | 1-7-2021 9:00:00 am | - | - |
| Every 5 seconds | 1-7-2021 9:00 am | 1-7-2021 <br/>9:00:00 am | 1-7-2021 <br/>9:00:05 am | 1-7-2021 <br/> 9:00:10 am |
| Every Minute | 1-7-2021 9:00 am | 1-7-2021 9:00 am | 1-7-2021 9:01 am  | 1-7-2021 9:02 am  |
| Every 5 Minutes | 1-7-2021 9:00 am | 1-7-2021 9:00 am | 1-7-2021 9:05 am | 1-7-2021 9:10 am |
| 10 minutes | 1-7-2021 9:00 am | 1-7-2021 9:00 am | 1-7-2021 9:10 am | 1-7-2021 9:20 am |
| Hourly | 1-7-2021 9:00 am | 1-7-2021 9:00 am | 1-7-2021 10:00 am | 1-7-2021 11:00 am |
| Daily | 1-7-2021 9:00 am | 1-7-2021 9:00 am | 2-7-2021 9:00 am | 3-7-2021 9:00 am |
| Weekly <br/> (elke 7 dagen) | 1-7-2021 9:00 am | 1-7-2021 9:00 am | 8-7-2021 9:00 am | 15-7-2021 9:00 am |
| Monthly | 1-7-2021 9:00 am | 1-7-2021 9:00 am | 1-8-2021 9:00 am | 1-9-2021 9:00 am |

**Interval Monthly** - hangt sterk af van de ingestelde startdatum. De bewerking wordt elke maand herhaald op de dag die als startpunt is ingesteld. Wees voorzichtig met deze datum, want een maand kan 28 tot 31 dagen hebben. Als het startpunt de '31e' is, wordt de bewerking in maanden met 28, 29 of 30 dagen pas in de volgende maand uitgevoerd.

## Een bewerking op basis van de gewenste of werkelijke verzenddatum plannen {#how-to-schedule--preferred-or-actual-shipping-date-operation}

<img src={require("/img/bulk-operations-scheduler-actual-shipping-date-and-orderrow-params.png").default} height="" width="800" />


Een geplande taak aanmaken voor de bulkbewerking **Preferred or Actual shipping date and order parameters**:

1.  Ga naar **Configuration > Bulk Operations Scheduler**.
2.  Klik op **Add** om een nieuwe taak aan te maken.
3. Selecteer de **Shop** op basis waarvan de orders worden geselecteerd.
4. Vul een **Description** van de bewerking in.
5. Kies het **Interval** waarmee u de bewerking wilt herhalen. Voor het filtertype gewenste verzenddatum is het kortste mogelijke interval 'daily'.
6. Stel een **Start Date** en **Time** in, vanaf wanneer het interval wordt berekend.
7. (Optioneel) Stel met **Expire** een **datum** in waarop de geplande bulkbewerking stopt.
8.  Kies het filtertype: **Pref. Shipping Date & Order Params**.
9.  Kies het **Shipment date type**: Actual Shipping Date of Preferred Shipping Date.
10.  Selecteer het type bewerking: **Send Email**.
11.  Selecteer het **Mail Template** dat u naar de klanten wilt sturen.
12.  Geef het aantal dagen **vóór** of **na** de verzenddatum op.
13.  (Optioneel) Vul een bepaalde **Product code** in en selecteer deze. Alleen orders met dit product worden in de selectie opgenomen.
14.  (Optioneel) Selecteer een **Product Group** om de selectie te beperken tot een bepaalde productgroep.
15.  (Optioneel) Geef de **Order Row Parameters** op: **Key** (naam) en **Value** die in de selectie moeten worden **opgenomen**.
16.  (Optioneel) Geef de **Order Row Parameters** op: **Key** (naam) en **Value** die van de selectie moeten worden **uitgesloten**.
17.  Klik op **Test Filter**. De orders die aan de zoekopdracht voldoen, worden in het pop-upvenster getoond.
18.  Vink het selectievakje **Active** aan om de geplande bulkbewerking in te schakelen.
19.  Klik op **Save** of **Save and Close** om de wijzigingen toe te passen.

De nieuwe geplande bulkbewerking wordt op de achtergrond uitgevoerd.
Voor het proces in de schermafbeelding hierboven is de planning als volgt, ervan uitgaande dat de startdatum en -tijd in de toekomst lagen:
| Interval | Instelling startdatum en -tijd | 1e uitvoering | 2e uitvoering | 3e uitvoering |
| --- | --- | --- | --- | --- |
| Daily | 07-09-2022 12:15 am | 07-09-2022 12:15 am | 08-09-2022 12:15 am | 09-09-2022 12:15 am |

Na een aantal herhalingen stopt de taak op 10 september 2022.

De bewerking wordt elke dag op het ingestelde tijdstip uitgevoerd. De lijst met records ziet u op het gewone tabblad **General > Bulk Operations**.
Er wordt ook een nieuw record aangemaakt als er geen orders aan het filter voldoen. De lijst met orders is dan leeg.
