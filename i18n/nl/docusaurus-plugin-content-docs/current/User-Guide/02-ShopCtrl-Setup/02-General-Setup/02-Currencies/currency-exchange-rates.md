---
sidebar_position: 1
slug: /docs/currency-exchange-rates
description: "Beheer wisselkoersen in ShopCtrl, neem de dagelijkse koersen van de Europese Centrale Bank over of stel uw eigen koersen in, en herbereken prijzen in vreemde valuta."
---

# Wisselkoersen

De wisselkoersen die in het hele systeem worden gebruikt, stelt u in via **Configuration > Currency exchange rate**.

De kolom **Rate** toont de werkelijke omrekenkoers van de basisvaluta naar de vreemde valuta.
De kolom **Available rate** toont de actuele wisselkoers (voor de huidige datum). ShopCtrl haalt de actuele **Available rates** dagelijks op uit de feed met [referentiewisselkoersen van de Europese Centrale Bank (ECB) voor de euro](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html).

![Wisselkoersen](/img/currency-exchange-rate-01.png)

Om de **Rate** van een bepaalde valuta bij te werken met de actuele **Available** rate, klikt u in de betreffende rij op de knop voor accepteren <img src={require("/img/green-icon.png").default} />.
U kunt ook uw eigen wisselkoers handmatig als **Rate** invullen door op de cel met de koers te dubbelklikken.

### Productprijzen bijwerken {#update-product-prices}

Om de **Foreign prices** van producten opnieuw te berekenen die in een andere valuta dan de basisvaluta staan, gebruikt u de knop **Update prices**.

De **Foreign price** van producten opnieuw berekenen met de laatst ingestelde koers:

1. Selecteer een willekeurige koersrij.
2. Klik op de knop **Update prices**.
3. Selecteer in het pop-upvenster de shop of shops waarvan u de prijzen in vreemde valuta wilt herberekenen.
   <img src={require("/img/update-prices.png").default} height="" width="400" />
4. Klik op de knop **Update** om de wijzigingen toe te passen.

Met deze actie worden de **Foreign prices** van de producten voor alle gekozen shops opnieuw berekend op basis van de ingestelde wisselkoersen. Er wordt automatisch een synchronisatieverzoek aangemaakt en op de achtergrond uitgevoerd om de prijzen in de webshop bij te werken.

![Verkoopprijs](/img/retail-price.png)

:::warning[**Let op**]

Als de instelling **Autocalulate** voor de verkoopprijs van het product is uitgeschakeld, wordt de prijs van dit product niet automatisch berekend op basis van de gewijzigde koers. U moet de prijs in vreemde valuta dan handmatig bijwerken op het tabblad **Product Details > Retail price**.

:::

### Geplande herberekening van prijzen in vreemde valuta {#scheduled-recalculation-of-the-products-foreign-prices}

Wisselkoersen worden volgens een planning dagelijks bijgewerkt.
Om de wisselkoersen in de productselectie automatisch bij te werken en de bijbehorende prijzen in vreemde valuta te laten herberekenen, schakelt u de instelling in op de detailpagina van de shop owner:
ShopOwner Details page > Order management > Auto-update ProductSelection ExchangeRates when the Exchange Rate module updates the exchange rates.

![Bijwerken van wisselkoersen in de productselectie](/img/product-selection-currency-rate-update.png)

Zodra de koersen zijn bijgewerkt, worden de bijbehorende prijzen van producten in vreemde valuta opnieuw berekend op basis van de nieuwe waarden.
