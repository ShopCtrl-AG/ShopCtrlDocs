---
sidebar_position: 4
slug: /docs/tracking-update
description: "Stuur vanuit ShopCtrl trackinginformatie naar klanten met triggers, en exporteer track & trace-gegevens terug naar het verkoopkanaal waar de order vandaan kwam."
---

# Trackingupdate


Zodra de order is verzonden, kan ShopCtrl de klant met vooraf ingestelde [triggers](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/index.md) per e-mail de trackinginformatie sturen.
Het is ook mogelijk de trackinginformatie terug te sturen naar het verkoopkanaal waar de order vandaan kwam, of dat nu een marktplaats of een e-commerceplatform is.

## Orders afhandelen en trackinginformatie exporteren naar Shopify {#fulfilling-orders-and-exporting-tracking-info-to-shopify}

Om zendingen die in ShopCtrl voor de order zijn aangemaakt terug te synchroniseren naar Shopify, schakelt u de functie **Send Track&Trace info to Shopify** in. Let op: voor de shop in ShopCtrl moet de [koppeling van locaties en vervoerders](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Shopify/synchronization-settings.md#configure-track-and-trace-export) zijn ingesteld.
In Shopify moet de **Automatic fulfillment** voor uw shop zijn uitgeschakeld.
Hoe u Automatic fulfillment uitschakelt, leest u op de helppagina's van Shopify: [Configure your order fulfillment settings](https://help.shopify.com/en/manual/checkout-settings/order-processing#configure-your-order-fulfillment-settings)


Bij het handmatig afhandelen van orders in Shopify wordt onderscheid gemaakt tussen het aanmaken van een fulfilment voor de order en het toevoegen van trackinginformatie aan die fulfilment. [Helppagina's van Shopify: Fulfill your orders manually](https://help.shopify.com/en/manual/orders/fulfillment/fulfilling-orders/fulfill-your-own#fulfill-our-own-orders-manually)

:::warning[**Let op**]

Nadat u de functie **Send Track&Trace info to Shopify** hebt ingeschakeld, neemt ShopCtrl het **volledige fulfilmentproces** in Shopify over: van het aanmaken van fulfilment(s) voor de order in Shopify tot het toevoegen van trackinginformatie aan die fulfilment.
Bij deze automatisering mogen orders niet meer in Shopify worden bewerkt of afgehandeld. Zodra de order naar ShopCtrl is gesynchroniseerd, voert u verdere wijzigingen alleen nog in ShopCtrl uit.

:::

Alle zending(en) en de bijbehorende trackinginformatie worden naar Shopify teruggestuurd zodra de orderstatus verandert in volledig verzonden.

Per zending worden de volgende gegevens naar Shopify gesynchroniseerd:
*  het magazijn (de locatie) van waaruit de order is verzonden
*  de naam van de vervoerder die de zending heeft verzonden
*  de verzonden producten
*  de trackingcode en de tracking-URL

Een fulfilment in Shopify is vergelijkbaar met een zending in ShopCtrl. Als een order in meerdere pakketten vanaf verschillende locaties wordt verzonden, wordt de fulfilment van de order in Shopify met de bijbehorende gegevens bijgewerkt zodra de orderstatus verandert in volledig verzonden.


## Trackinginformatie van zendingen exporteren naar Amazon {#exporting-shipments-tracking-info-to-amazon}

Om trackingcodes die in ShopCtrl voor de order zijn aangemaakt terug te synchroniseren naar Amazon, schakelt u de functie **Export shipments** in en stelt u de koppeling van vervoerders in. Zie ook [De Amazon-shopsynchronisatie instellen](/User-Guide/02-ShopCtrl-Setup/03-Sales-Channel-Setup/Connectors/Amazon/Amazon-3P/index.md#2-setting-up-amazon-shop-synchronization-in-shopctrl).

Alle zendingen en de bijbehorende trackinginformatie worden met regelmatige synchronisatieverzoeken naar Amazon gestuurd zodra de trackingcode beschikbaar is.
Op basis van de koppeling van vervoerders stuurt ShopCtrl per order de volgende zendingsgegevens:

* Naam van de vervoerder en de bezorgdienst waarmee de order is verzonden
* Trackingcode
* Tracking-URL

Als een order in meerdere pakketten vanaf verschillende locaties wordt verzonden, worden de trackingcodes in volgorde van verzending per bijbehorende orderregel op Amazon bijgewerkt.
