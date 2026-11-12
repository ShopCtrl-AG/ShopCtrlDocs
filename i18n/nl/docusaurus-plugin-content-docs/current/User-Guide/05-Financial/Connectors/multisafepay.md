---
sidebar_position: 2
slug: /docs/multisafepay
description: "Koppel MultiSafepay aan ShopCtrl voor een eigen afrekenpagina en betaallinks op basis van merge fields, met meerdere transacties per order."
---

# MultiSafepay en de afrekenpagina van ShopCtrl

ShopCtrl biedt een integratie met de betaalprovider **MultiSafepay**, zodat uw klanten uit een aantal betaalmethoden kunnen kiezen.
Onderdeel van deze integratie is een eigen **afrekenpagina** (checkout page) en de mogelijkheid om in ShopCtrl met merge fields betaallinks te genereren. U kunt uw klanten een betaallink sturen om het totaal van de order te betalen, een aanbetaling op de order te doen of een factuur te betalen.
:::info

De **afrekenpagina** van ShopCtrl en het genereren van betaallinks kunnen ook met andere betaalproviders worden gekoppeld.

:::

Betalingen worden verwerkt in de standaardvaluta van de shop. De taal van de afrekenpagina wordt bepaald op basis van de cultuur van de order en de klant.

<img src={require("/img/checkout-page-en.png").default} height="" width="800" />

Als de klant doorgaat naar de betaling, opent een nieuwe pagina met alle beschikbare betaalmethoden. Welke betaalmethoden beschikbaar zijn, wordt bepaald door de instellingen van uw MultiSafepay-account.

<img src={require("/img/Proceed-to-payment-list.png").default} height="" width="800" />

Het systeem ondersteunt meerdere MultiSafepay-transacties per order. Een ontvangen betaling wordt direct gekoppeld aan de order of factuur waarvoor deze bedoeld is. Er verschijnt een bijbehorend record op het tabblad met betalingen en bij de betalingstoewijzingen in de orderdetails.


## Instellen {#setup}
Om de integratie met MultiSafepay en het genereren van betaallinks in te stellen, doorloopt u de onderstaande stappen.

### Stap 1. Een testintegratie met MultiSafepay configureren {#step-1-configure-test-integration-with-multisafepay}

Om een integratie met de betaalprovider MultiSafepay in te stellen, maakt u eerst een MultiSafepay-testaccount aan en configureert u dit.
In de testmodus ('Test mode') wordt de test-API van MultiSafepay gebruikt. In combinatie met een testaccount (verplicht) kunt u het betaalsysteem naar wens testen: bij deze transacties wordt **geen echt** geld gebruikt.

Zie de documentatie van MultiSafepay: [Create a test account](https://docs.multisafepay.com/docs/create-account#test-accounts) en [Site ID, API key, and secure code](https://docs.multisafepay.com/docs/sites#site-id-api-key-and-security-code).
Neem zodra het account is aangemaakt contact met ons op om samen MultiSafepay in uw omgeving te activeren en de `Hosting URL` voor de afrekenpagina in te stellen.

<img src={require("/img/multisafepay-shop-settings-test.png").default} height="" width="800" />

Een **test**integratie met MultiSafepay instellen voor een shop:

1. Ga naar **Shop settings > MultiSafepay**.
2. Vul bij **Hosting URL** de URL in waarop de afrekenpagina wordt gehost (wordt door ShopCtrl verstrekt).
3. Vul de **API key** van de eerder aangemaakte integratie in.
4. Selecteer de betaalmethode in ShopCtrl die wordt gekoppeld aan de betalingen via het portaal: **MultiSafepay**.
5. Vink het selectievakje **Test mode** aan om verbinding te maken met de testomgeving van MultiSafepay.
6. Klik op **Save** of **Save and Close**.


### Stap 2. De afrekenpagina configureren {#step-2-configure-checkout-page}

De afrekenpagina is meertalig. De taal van de afrekenpagina wordt bepaald op basis van de cultuur van de order en de klant. Het logo en de naam van de shop worden automatisch getoond op basis van de instellingen van de shop waarvoor de betaallink is aangemaakt. Afhankelijk van het doel van de betaling zijn er drie indelingen van de afrekenpagina: order, aanbetaling op een order of factuur. De overige placeholders voor alle pagina's kunt u instellen op het tabblad Resources.

<img src={require("/img/checkout-with-placeholders.png").default} height="" width="800" />

De labels kunt u vertalen via het tabblad Configuration > Resources. ShopCtrl levert standaardwaarden in het Nederlands (nl-NL) voor de labels. U kunt de standaardwaarden wijzigen en een onbeperkt aantal talen toevoegen.

:::info

De volledige lijst met labels van de afrekenpagina vindt u op `{Hosting URL}/Checkout/TranslationLabels`.

:::

Een nieuwe vertaling voor de afrekenpagina maken:

1. Ga naar **Configuration > Resources**.
2. Klik op **Add**.
<img src={require("/img/resources-checkout-placeholders.png").default} height="" width="800" />

3. Selecteer in de nieuwe regel de **Shop group**.
4. Selecteer de **Culture** van de vertaling die u toevoegt.
5. Vul de **Key** in (de placeholder van de afrekenpagina) en een **value**. Hieronder de versie in nl-NL:

| Key (placeholder) | Value |
| --- | --- |
| `CustomerCheckout.VatLabel` | BTW |
| `CustomerCheckout.ThereAreNoInvoicesForThisOrder` | Er zijn geen facturen voor deze bestelling. |
| `CustomerCheckout.ThankYouForPaying` | Bedankt voor uw betaling! |
| `CustomerCheckout.ShippingCostsLabel` | Transportkosten |
| `CustomerCheckout.ProductNameLabel` | Product naam |
| `CustomerCheckout.ProductCodeLabel` | Product code |
| `CustomerCheckout.ProceedToThePaymentProvider` | Naar de betaalprovider gaan |
| `CustomerCheckout.PriceTotalLabel` | Totaal |
| `CustomerCheckout.PriceLabel` | Prijs |
| `CustomerCheckout.PortalTitle` | Betalen |
| `CustomerCheckout.PaymentFeeLabel` | Betaalkosten |
| `CustomerCheckout.OrderPaymentPriceTotalLabel` | Order betaling totaal |
| `CustomerCheckout.OrderPaymentNothingToPayLabel` | Er staat geen order betaling open. |
| `CustomerCheckout.OrderPaymentLabel` | Order betaling |
| `CustomerCheckout.OrderDownPaymentPriceTotalLabel` | Order aanbetaling totaal |
| `CustomerCheckout.OrderDownPaymentNothingToPayLabel` | Er staat geen order aanbetaling open. |
| `CustomerCheckout.OrderDownPaymentLabel` | Order aanbetaling |
| `CustomerCheckout.OrderCode` | Bestelnummer |
| `CustomerCheckout.ItemQuantity` | Aantal |
| `CustomerCheckout.InvoicePaymentPriceTotalLabel` | Factuurbetaling totaal |
| `CustomerCheckout.InvoicePaymentNothingToPayLabel` | Er staat geen factuur betaling open. |
| `CustomerCheckout.InvoicePaymentLabel` | Factuur betaling |
| `CustomerCheckout.InvoiceCode` | Factuurnummer |
| `CustomerCheckout.InvoiceAddressLabel` | Factuuradres |
| `CustomerCheckout.IncVAT` | Inc. BTW |
| `CustomerCheckout.ExVAT` | Ex. BTW |
| `CustomerCheckout.DiscountLabel` | Korting |
| `CustomerCheckout.DeliveryAddressLabel` | Afleveradress |
| `CustomerCheckout.Date` | Datum |
| `CustomerCheckout.AnErrorHasOccurred` | Er is een fout opgetreden. |
| `CustomerCheckout.AllInvoicesArePaidForTheOrder` | Alle facturen voor deze bestelling zijn betaald. |
6. Klik op **Update** om het record op te slaan.
7. Herhaal dit voor alle placeholders in de gewenste taal.

:::warning

Vul voor alle placeholders van de cultuur die u bewerkt een vertaling in.

:::

### Stap 3. E-mailsjablonen aanmaken {#step-3-create-email-templates}

Voor het aanmaken van e-mailsjablonen voor betalingen zijn er een aantal merge fields waarmee u e-mails met betaallinks vult.
ShopCtrl biedt drie soorten betaallinks met bijbehorende merge fields:
- **Order** - het totaal openstaande bedrag van de order - `$$Order.CustomerCheckoutOrderCheckoutUrl$$`
- **Order Down Payment** - aanbetaling op de order - `$$Order.CustomerCheckoutOrderDownPaymentCheckoutUrl$$`
- **Invoice** - het totaal openstaande bedrag van de factuur - `$$Invoice.CustomerCheckoutInvoiceCheckoutUrl$$`

### Stap 4. De integratie met MultiSafepay in uw productieomgeving configureren {#step-4-configure-integration-with-multisafepay-on-your-production-environment}

Nadat de basisinstellingen klaar zijn en de integratie in de acceptatieomgeving is getest, kunt u de integratie in de productieomgeving instellen.
Zie de documentatie van MultiSafepay: [Onboard my account](https://docs.multisafepay.com/docs/onboarding).
Op dezelfde manier haalt u nu de API-sleutel voor uw live-dashboard op. Zie de documentatie van MultiSafepay: [Site ID, API key, and secure code](https://docs.multisafepay.com/docs/sites#site-id-api-key-and-security-code).

Een **productie**integratie met MultiSafepay instellen voor een shop:

1. Ga naar **Shop settings > MultiSafepay**.
2. Vul bij **Hosting URL** de URL in waarop de afrekenpagina wordt gehost (wordt door ShopCtrl verstrekt).
3. Vul de **API key** van de eerder aangemaakte integratie in.
4. Selecteer de betaalmethode in ShopCtrl die wordt gekoppeld aan de betalingen via het portaal: **MultiSafepay**.
5. Klik op **Save** of **Save and Close**.

Uw shop kan nu betalingen accepteren via MultiSafepay.


:::warning[]

Als u deze betaalmethode in meerdere shops wilt gebruiken, configureert u de MultiSafepay-module in alle shops waarin MultiSafepay actief moet zijn. Elke website die bij MultiSafepay is ingesteld, moet met een API-sleutel aan een bijbehorende shop in ShopCtrl worden gekoppeld.
Zie de documentatie van MultiSafepay: [Sites](https://docs.multisafepay.com/docs/sites).

:::


<img src={require("/img/configure-multisafepay-for-all-shops.png").default} height="" width="800" />

De instellingen naar alle shops in het systeem kopiëren:

1. Klik op het pijltje aan het einde van elke instelling en selecteer het niveau waarop deze moet gelden.
2. Herhaal dit voor alle instellingen.
3. Sla de shopinstellingen op om de wijzigingen op het gekozen niveau toe te passen.
