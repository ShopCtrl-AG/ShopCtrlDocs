---
sidebar_position: 3
slug: /docs/collections-in-email-templates
description: "Gebruik collecties met RangeStart en RangeEnd in e-mailsjablonen van ShopCtrl om merge fields zoals orderregels te herhalen."
---

# Collecties in e-mailsjablonen

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Power User** of hoger aan de shop gekoppeld zijn om sjablonen op het niveau van de shop owner aan te maken en te bewerken.

:::

## Een collectie merge fields toevoegen {#how-to-add-merge-field-collection}

Een collectie merge fields in een e-mailsjabloon invoegen:

1. Open het e-mailsjabloon om het te bewerken.
2. Begin de collectie door `RangeStart:` in te voegen, gevolgd door de naam van de collectie. Hiermee geeft u het beginpunt van de collectie aan.
3. Zet het merge field voor het begin van de reeks tussen commentaartags `<!--` `-->`, zodat het niet in het uiteindelijke document wordt weergegeven.
4. Voeg daarna de inhoud van de collectie in. Deze kan bestaan uit tekst en uit specifieke merge fields uit de gekozen collectie. Maak de merge fields zo nodig op.
5. Om de collectie af te sluiten, voegt u `RangeEnd:` in, gevolgd door de naam van de betreffende collectie.
6. Zet `RangeEnd:CollectionName` tussen commentaartags.
7. Bewerk het sjabloon verder zoals gebruikelijk.

Bijvoorbeeld een tabel met bestelde producten:

```html
<table>
  <tr>
    <th>Product Code</th>
    <th>Product Name</th>
    <th>Quantity</th>
    <th>Price(Inc)</th>
    <th>Row Total($$Order.CurrencySymbol$$)</th>
  </tr>
  <!-- RangeStart:OrderRow-->
  <tr>
    <td>$$OrderRow.ProductCode$$</td>
    <td>$$OrderRow.ProductName$$</td>
    <td>$$OrderRow.ItemQuantity##,##.$$</td>
    <td>$$OrderRow.ItemPriceIncVat###,##.00$$</td>
    <td>$$OrderRow.RowTotalIncVat##,###.00$$</td>
  </tr>
  <!-- RangeEnd:OrderRow-->
</table>
```

Voorbeeld van een gegenereerde productlijst:

![Producttabel in een e-mailsjabloon](/img/email-template-product-table.png)

### Geneste collecties {#nested-field-collections}

Plaats collecties binnen andere collecties om alleen waarden te tonen die horen bij de huidige waarde van de bovenliggende collectie.

De collectie ProductRegistration is bijvoorbeeld genest binnen de collectie OrderRow.

```html
<table>
  <tr>
    <th>Product Code</th>
    <th>Product Name</th>
    <th>Product Registration</th>
    <th>Quantity</th>
    <th>Price(Inc)</th>
    <th>Row Total($$Order.CurrencySymbol$$)</th>
  </tr>
  <!-- RangeStart:OrderRow-->
  <tr>
    <td>$$OrderRow.ProductCode$$</td>
    <td>$$OrderRow.ProductName$$</td>
    <!-- RangeStart:ProductRegistration-->
    <td>$$ProductRegistration.SerialNumber$$</td>
    <!-- RangeEnd:ProductRegistration-->
    <td>$$OrderRow.ItemQuantity##,##.$$</td>
    <td>$$OrderRow.ItemPriceIncVat###,##.00$$</td>
    <td>$$OrderRow.RowTotalIncVat##,###.00$$</td>
  </tr>
  <!-- RangeEnd:OrderRow-->
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <p style="text-align: right;"></p>
      $$Order.CurrencySymbol$$$$Order.TotalDue##,###.00$$
    </td>
  </tr>
</table>
```
