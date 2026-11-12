---
sidebar_position: 1
slug: /docs/alerts
description: "Meldingen (Alerts) in ShopCtrl signaleren fouten, waarschuwingen en informatie over problemen in het systeem, met banners in de ordertabel en een tabblad met meldingen per order."
---

# Meldingen

Meldingen (alerts) zijn een belangrijk middel om gebruikers te informeren over allerlei problemen die in het systeem zijn opgetreden.

Meldingen verschillen in ernst: een rode vlag (Error) heeft de hoogste ernst, een gele waarschuwing (Warning) een gemiddelde en een blauwe vlag (Information) de laagste.

Om medewerkers direct te laten weten dat er iets mis is gegaan met een order, verschijnt er een gele banner in de overzichtstabel met orders. Als u op de banner klikt, worden de orders met problemen gefilterd.

![Meldingen in de ordertabel](/img/alerts-on-orders-grid.png)

Als u een order opent, verschijnt er ook een pop-upmelding met een link naar het tabblad met meldingen.
Een melding bevat alle informatie over waar de fout is opgetreden, het type fout en een korte beschrijving van wat er is gebeurd. In het voorbeeld hieronder kon een trigger die een track & trace-e-mail naar de klant stuurt niet worden uitgevoerd, omdat er voor de order geen e-mailadres was opgegeven.

![Meldingen bij orders](/img/alerts-on-orders.png)

Zodra het probleem is gevonden en opgelost, kunt u de melding verwijderen door op de knop mark read te klikken. Neem anders contact op met het supportteam van ShopCtrl om het probleem op te sporen.

Als shop owner bepaalt u op de pagina Shop Owner details > tabblad Authorization welke typen meldingen voor welke medewerkersrol zichtbaar zijn. Standaard kunnen alleen shop owner admins alle typen meldingen bekijken en als gelezen markeren.

Direct na het inloggen ziet u rechtsboven naast de naam van de medewerker het aantal meldingen. Als u hierop klikt, opent het tabblad Alerts, waar u de meldingen kunt beheren.

![Meldingen](/img/alerts.png)

## Een melding aanmaken {#create-alert}

Als beheerder kunt u meldingen niet alleen bekijken en als gelezen markeren, maar ook informatieve meldingen naar uw medewerkers sturen.

Een melding aanmaken voor alle medewerkers van uw bedrijf:
![Melding aanmaken](/img/create-alert.png)

1. Ga naar **General > Alerts**.
2. Klik op **Add**.
3. Kies in het deelvenster Destination bij **Send to** de optie **All Employees**.
4. Wijzig de **Severity**: Information, Warning, Error.
5. Vul op het tabblad **Content** de **Title** in.
6. Vul met de WYSIWYG-editor de tekst van de melding in.
7. Klik op **Create and close** om de melding te versturen.

## Meldingen per e-mail instellen {#configure-alert-notifications-via-email}

In ShopCtrl kunnen gebruikers zich abonneren op meldingen. Ze krijgen dan automatisch, met een vooraf ingesteld interval, bericht over nieuwe meldingen.
Beschouw het interval niet als een exact tijdstip, maar als de periode waarbinnen het bericht over de melding binnenkomt.

U wilt bijvoorbeeld binnen 15 minuten na het aanmaken van een melding een bericht krijgen. Of u ontvangt liever één keer per dag een verzamellijst met meldingen.
Een melding wordt maar één keer verstuurd, om onnodige berichten te voorkomen.

U kunt een melding eenvoudig openen via de directe link in de e-mail. Ook het e-mailsjabloon voor meldingen kunt u bewerken. Bekijk de beschikbare [merge fields voor meldingen](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/list-of-merge-fields.md#alerts-notification) om het sjabloon te bewerken.

Elke medewerker kan instellen dat meldingen rechtstreeks naar zijn of haar e-mailadres worden gestuurd.
Meldingen per e-mail instellen:

1. Log in bij uw ShopCtrl-account.
2. Klik rechtsboven op uw naam en kies **Settings** in het vervolgkeuzemenu.
3. Open in het menu daaronder **Email Notifications**.
4. Schakel de functie in met **Enable**.
5. Kies het interval waarbinnen u bericht wilt krijgen over een melding.
6. (Optioneel) Kies de **typen meldingen** waarin u geïnteresseerd bent en abonneer u alleen op die meldingen.
7. Klik op **Save** of Save and Close om de wijzigingen toe te passen.

U kunt de eerste e-mail binnen 15 minuten na het inschakelen verwachten.

![Meldingen per e-mail](/img/alerts-email-notifications.png)
