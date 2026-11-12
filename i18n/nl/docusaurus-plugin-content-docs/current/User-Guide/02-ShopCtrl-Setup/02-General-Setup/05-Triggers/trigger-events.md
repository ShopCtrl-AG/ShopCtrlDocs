---
sidebar_position: 2
slug: /docs/trigger-events
description: "De volledige lijst met Trigger-gebeurtenissen in ShopCtrl, gegroepeerd per onderdeel: orders, facturen, zendingen, retouren, producten, inkooporders, tickets, contracten en meer."
---

# Trigger-gebeurtenissen

Een trigger wordt gestart door een **gebeurtenis (event)**: een wijziging in een van de onderdelen van ShopCtrl. Op deze pagina staan alle gebeurtenissen, gegroepeerd per onderdeel. De namen van de gebeurtenissen staan in het Engels, zoals ze in ShopCtrl worden weergegeven.

## Filters voor gebeurtenissen {#event-filters}

Bij sommige gebeurtenissen kunt u nauwkeuriger bepalen wanneer de trigger wordt uitgevoerd. Deze opties stelt u in het deelvenster **Trigger condition** in nadat u de gebeurtenis hebt geselecteerd:

- **Statusfilter** - uitvoeren bij alle statuswijzigingen, bij een bepaalde basisstatus of bij een bepaalde status.
- **Betalingsfilter** - stel de richting (Debit of Credit), het type overboeking en de betaalmethode in.
- **Zendingsfilter** - beperk de trigger tot bepaalde magazijnen, vervoerdersaccounts of vervoerdersmodules.

## Orders {#orders}

- New order added
- New order initialized
- Not shippable order fully shipped
- Order changed
- Order comment changed
- Order custom status changed - *statusfilter*
- Order customer rating changed
- Order down payment done
- Order fulfillment status changed - *statusfilter*
- Order fully delivered
- Order fully shipped
- Order has one or more order rows not in stock
- Order invoices all paid - *betalingsfilter*
- Order invoices created - altijd uitvoeren, alleen als betaald, of alleen als niet betaald
- Order invoices partial paid - *betalingsfilter*
- Order invoices partly created
- Order main status changed - *statusfilter*
- Order needs refund - *betalingsfilter*
- Order payment status changed - *statusfilter*
- Order payment type changed - betaalmethode en type overboeking
- Order payments done - *betalingsfilter*
- Order payments not done - *betalingsfilter*
- Order payments partial done - *betalingsfilter*
- Order preferred delivery date changed
- Order purchase type changed - kies het inkooptype
- Order shipment status changed - *statusfilter*
- Order stock status changed - *statusfilter*

## Facturen {#invoices}

- Invoice changed
- Invoice payments done - *betalingsfilter*
- Invoice payments not done - *betalingsfilter*
- Invoice payments partial done - *betalingsfilter*
- Invoice reminder 1 - wordt uitgevoerd wanneer de eerste herinnering wordt verstuurd. De datums van herinneringen stelt u in bij de shopinstellingen; zie [Betalingsherinneringen](/User-Guide/05-Financial/Invoices/invoice-reminders.md).
- Invoice reminder 2 - wordt uitgevoerd wanneer de tweede herinnering wordt verstuurd
- Invoice reminder 3 - wordt uitgevoerd wanneer de derde herinnering wordt verstuurd
- Non-draft credit invoice saved
- Non-draft invoice saved

## Zendingen en pakketten {#shipments-and-parcels}

- New parcel added
- Parcel pickup done
- Parcel status change - *statusfilter*, vervoerdersaccount en vervoerdersmodule
- Shipment created - *zendingsfilter*
- Shipment delivered - *zendingsfilter*
- Shipment handover - *zendingsfilter*
- Shipment packed - *zendingsfilter*
- Shipment picked - *zendingsfilter*
- Shipment shipped - *zendingsfilter*

## Retouren {#returns}

- Return changed - kies magazijnen
- Return created - kies magazijnen
- Return main status changed - *statusfilter*

## Producten {#products}

- Product available stock changed - kies een shopgroep
- Product brand changed
- Product brand deleted
- Product changed
- Product created
- Product deleted
- Product dimensions changed
- Product group changed
- Product group deleted
- Product locked
- Product package changed
- Product package created
- Product package deleted
- Product property definition changed
- Product property definition deleted
- Product selection product changed
- Product selection product deleted
- Product unlocked

## Inkooporders {#purchase-orders}

- Purchase order created
- Purchase order custom status changed
- Purchase order delivery provisioned
- Purchase order delivery received
- Purchase order handed over
- Purchase order main status changed
- Purchase order payment status changed
- Purchase order provision status changed
- Purchase order provisioned
- Purchase order received
- Purchase order submit status changed

## Voorraad {#stock}

- Stock count created

## Klanten {#customers}

- Customer company contact email address changed
- Customer email changed
- New customer added

## Tickets {#tickets}

- Ticket created
- Ticket handling employee changed
- Ticket handling employee group changed - kies de medewerkersgroep
- Ticket incoming message
- Ticket main status changed - *statusfilter*
- Ticket outgoing message
- Ticket satisfaction score changed - stel de voorwaarde voor de score in

## Servicecontracten {#service-contracts}

- New service contract added
- Service contract active status changed
- Service contract active status changed to active
- Service contract company contact email address changed

## Huurcontracten {#rental-contracts}

- New rental contract added
- Rental contract active status changed
- Rental contract active status changed to active
- Rental contract company contact email address changed
- Rental contract order created

## Shops {#shops}

- Init new shop
- New shop saved

## Overig {#miscellaneous}

- Voip call changed
