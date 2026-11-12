---
sidebar_position: 4
slug: /docs/processing-customer-gdpr-requests
description: "Verwerk AVG-verzoeken (GDPR) om vergeten te worden in ShopCtrl met anonimisering op klantniveau. Hiervoor is het recht om klanten te verwijderen vereist."
---

# AVG-verzoeken van klanten verwerken

In deze handleiding leest u hoe u AVG-verzoeken (GDPR) om vergeten te worden verwerkt met de ingebouwde anonimiseringsfunctie van ShopCtrl.

:::info[**Vereiste rechten**]

Om de AVG-functies te zien en te gebruiken, moet een gebruiker het **recht hebben om klanten te verwijderen**. Zonder dit recht is het onderdeel GDPR niet zichtbaar in het menu.

:::

:::info[**Let op**]

Anonimisering volgens de AVG is alleen beschikbaar op klantniveau. In afzonderlijke orderrecords is geen GDPR-optie beschikbaar.

:::

## Een AVG-verzoek verwerken {#steps-to-process-gdpr-request}

1. Log in bij ShopCtrl met de juiste rechten.
1. Ga in het hoofdmenu naar **Customers**.
1. Zoek het klantrecord dat u volgens de AVG wilt verwerken.
1. Ga in het menu naar het onderdeel **GDPR**.
1. Klik op de knop **Forget me**.
1. Bevestig de actie.
    <img src={require("/img/customer-gdpr-forget-me.png").default} height="" width="800" />

## Wat de knop Forget Me doet {#what-the-forget-me-button-does}

- **Anonimiseert** de gevoelige persoonsgegevens van de klant
- **Verwijdert** het klantrecord uit het systeem
- Verwijdert alle persoonlijk identificeerbare informatie, terwijl de gegevensintegriteit behouden blijft voor wettelijke naleving


:::warning[**Onomkeerbare actie**]


Deze actie kan niet ongedaan worden gemaakt. Na uitvoering zijn de persoonsgegevens van de klant definitief geanonimiseerd.


:::

:::danger[**Belangrijk**]

De knop **Forget Me** anonimiseert de klant zonder voorwaarden. Er wordt niet gecontroleerd of de klant actieve orders, openstaande tickets of andere lopende activiteiten heeft. Alle persoonsgegevens worden direct geanonimiseerd, ongeacht de status van de bijbehorende records.

:::

    <img src={require("/img/customer-processed-gdpr.png").default} height="" width="800" />

Na de verwerking verschijnt het klantrecord niet meer in klantlijsten. Eventuele resterende orderrecords verwijzen naar geanonimiseerde klantgegevens.
