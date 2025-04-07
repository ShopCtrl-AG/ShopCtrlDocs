---
sidebar_position: 1
slug: /docs/currency-exchange-rates
---

# Currency Exchange Rates

The currency exchange rates used throughout the system could be set in **Configuration > Currency exchange rate**.

The **Rate** column displays the actual conversion rate of the base currency to the foreign currency.
**Available rate** column displays the current (relevant to the current date) exchange rate. ShopCtrl retrieves the current **Available rates** daily using a [Currencylayer](https://currencylayer.com/) service.

![currency-exchange-rate](/img/currency-exchange-rate-01.png)

To update the **Rate** of the specific currency with the current **Available** rate, click on the accept <img src={require("/img/green-icon.png").default} /> button in the corresponding row.
You can also enter the **Rate** manually to your own exchange rate by double-clicking the rate cell.

### Update product prices

To recalculate product **Foreign prices** quoted in the currency different from the base currency, you can use the **Update prices** button.

To recalculate **Foreign price** of products using the latest rate set:

1. Select any rate row.
2. Click the **Update prices** button.
3. From the popup window, select the shop or several shops which products foreign prices you would like to recalculate.
   <img src={require("/img/update-prices.png").default} height="" width="400" />
4. Click the **Update** button to apply changes.

This action will recalculate the products **Foreign prices** based on the set exchange rates for all of the shops chosen. Synchronization request updating the prices on the webshop will be created and executed automatically in the background.

![retail-price](/img/retail-price.png)

:::warning[**Please note**]

If the **Autocalulate** retail price setting was turned off for the product, the price for this product would not be auto-calculated based on the changed rate. You will need to update the foreign price manually on the **Product Details > Retail price** tab.

:::

### Scheduled recalculation of the products foreign prices

Exchange rates are scheduled to update at a daily interval.
To enable the auto-update of the currency rates on product selection and corresponding foreign prices recalculation, turn on the setting on the Shop owner details page:
ShopOwner Details page > Order management > Auto-update ProductSelection ExchangeRates when the Exchange Rate module updates the exchange rates.

![product-selection-currency-rate-update](/img/product-selection-currency-rate-update.png)

Once the rates are updated, corresponding product foreign prices will be recalculated based on new values.
