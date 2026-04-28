---
sidebar_position: 4
slug: /docs/list-of-merge-fields
---

# List of Merge Fields

:::info[**Required permissions**]

An employee must be assigned to the Shop with a **Power User** role or higher to create and edit templates on a Shop Owner level.

:::

Use **Merge Fields** to auto-populate your [Document](./Document-Templates/index.md) and [Email](./Email-Templates/index.md) templates with the applicable data retrieved from ShopCtrl the moment the template will be generated.

A dynamic merge fields list applicable for the specific document or mail template type will be auto-generated when clicking the **Available MergeFields** button and providing an item code. Please check [Creating and Editing Document Templates]/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/creating-and-editing-document-templates.md and [Creating and Editing Email Templates](./Email-Templates/creating-and-editing-email-templates.md) for more information.

:::info[**Note:**]

Merge fields that are marked as belonging to a certain collection must be inserted following a collection block syntax. Please see more in [Collections in Document Templates](./Document-Templates/collections-in-document-templates.md) and [Collections in Email Templates](./Email-Templates/collections-in-email-templates.md).

:::

## Shop

<details>
  <summary> Show the list of Shop merge fields</summary>

| Merge field name              | Merge field type | Merge field                  | Data type |
| ----------------------------- | ---------------- | ---------------------------- | --------- |
| Shop Owner Company Name       | Single Item      | $$ShopOwner.CompanyName$$    | String    |
| Shop Company Name             | Single Item      | $$Shop.CompanyName$$         | String    |
| Shop Country Code             | Single Item      | $$Shop.CountryCode$$         | String    |
| Shop Icon Url                 | Single Item      | $$Shop.IconUrl$$             | String    |
| Shop Icon Url Img Tag         | Single Item      | $$Shop.IconUrlImgTag$$       | String    |
| Shop ID                       | Single Item      | $$Shop.Id$$                  | String    |
| Shop Logo                     | Single Item      | $$Shop.Logo$$                | Image     |
| Shop Logo Url                 | Single Item      | $$Shop.LogoUrl$$             | String    |
| Shop Logo Url Img Tag         | Single Item      | $$Shop.LogoUrlImgTag$$       | String    |
| Shop Name                     | Single Item      | $$Shop.Name$$                | String    |
| Shop SEPA Paymee ID           | Single Item      | $$Shop.SepapayeeId$$         | String    |
| Shop Site Address             | Single Item      | $$Shop.SiteAddress$$         | String    |
| Shop Site Bank Account        | Single Item      | $$Shop.SiteBankAccount$$     | String    |
| Shop Site Bank Account IBAN   | Single Item      | $$Shop.SiteBankAccountIban$$ | String    |
| Shop Site Bank Name           | Single Item      | $$Shop.SiteBankName$$        | String    |
| Shop Site Bank SWIFT BIC      | Single Item      | $$Shop.SiteBankSwiftBic$$    | String    |
| Shop Site City                | Single Item      | $$Shop.SiteCity$$            | String    |
| Shop Site Chamber of Commerce | Single Item      | $$Shop.SiteCoc$$             | String    |
| Shop Site Country Name        | Single Item      | $$Shop.SiteCountryName$$     | String    |
| Shop Site Director            | Single Item      | $$Shop.SiteDirector$$        | String    |
| Shop Site Disclaimer          | Single Item      | $$Shop.SiteDisclaimer$$      | String    |
| Shop Site Email               | Single Item      | $$Shop.SiteEmail$$           | String    |
| Shop Site Fax                 | Single Item      | $$Shop.SiteFax$$             | String    |
| Shop Site Opening Hours       | Single Item      | $$Shop.SiteOpeningHours$$    | String    |
| Shop Site Phone               | Single Item      | $$Shop.SitePhone$$           | String    |
| Shop Site Postal Code         | Single Item      | $$Shop.SitePostalCode$$      | String    |
| Shop Site VAT Number          | Single Item      | $$Shop.SiteVatNumber$$       | String    |
| Shop Url                      | Single Item      | $$Shop.Url$$                 | String    |
| Shop Url Secure               | Single Item      | $$Shop.UrlSecure$$           | String    |

</details>

## Customer

<details>
  <summary> Show the list of Customer merge fields</summary>

| Merge field name                          | Merge field type | Merge field                              | Data type     |
| ----------------------------------------- | ---------------- | ---------------------------------------- | ------------- |
| Customer Bill To And Ship To Are The Same | Single Item      | $$Customer.BillToAndShipToAreTheSame$$   | Boolean       |
| Customer Bill To VAT Number               | Single Item      | $$Customer.BillToVatNumber$$             | String        |
| Customer Company Name                     | Single Item      | $$Customer.CompanyName$$                 | String        |
| Customer Contact Ref                      | Single Item      | $$Customer.ContactRef$$                  | String        |
| Customer Customer Code                    | Single Item      | $$Customer.CustomerCode$$                | String        |
| Customer Customer Number                  | Single Item      | $$Customer.CustomerNumber$$              | String        |
| Customer Date Of Birth                    | Single Item      | $$Customer.DateOfBirth$$                 | Date and Time |
| Customer Email                            | Single Item      | $$Customer.Email$$                       | String        |
| Customer First Name                       | Single Item      | $$Customer.FirstName$$                   | String        |
| Customer Full Name                        | Single Item      | $$Customer.FullName$$                    | String        |
| Customer Invoice Email Address            | Single Item      | $$Customer.InvoiceEmailAddress$$         | String        |
| Customer Last Name                        | Single Item      | $$Customer.LastName$$                    | String        |
| Customer Last Name Prefix                 | Single Item      | $$Customer.LastNamePrefix$$              | String        |
| Customer Middle Name                      | Single Item      | $$Customer.MiddleName$$                  | String        |
| Customer Order Remark                     | Single Item      | $$Customer.OrderRemark$$                 | String        |
| Customer Personal Number                  | Single Item      | $$Customer.PersonalNumber$$              | String        |
| Customer Person Title                     | Single Item      | $$Customer.PersonTitle$$                 | String        |
| Customer Reminder Invoice Email Address   | Single Item      | $$Customer.ReminderInvoiceEmailAddress$$ | String        |

</details>

## Order

<details>
  <summary>Show the list of Order merge fields</summary>

| Merge field name                                  | Merge field type               | Merge field                                      | Data type                   |
| ------------------------------------------------- | ------------------------------ | ------------------------------------------------ | --------------------------- |
| Order Bill To Address                             | Single Item                    | $$Order.BillToAddress$$                          | String                      |
| Order Bill To Address 2                           | Single Item                    | $$Order.BillToAddress2$$                         | String                      |
| Order Bill To AndShip To AreTheSame               | Single Item                    | $$Order.BillToAndShipToAreTheSame$$              | String                      |
| Order Bill To City                                | Single Item                    | $$Order.BillToCity$$                             | String                      |
| Order Bill To Company                             | Single Item                    | $$Order.BillToCompany$$                          | String                      |
| Order Bill To Country                             | Single Item                    | $$Order.BillToCountry$$                          | String                      |
| Order Bill To Country Code                        | Single Item                    | $$Order.BillToCountryCode$$                      | String                      |
| Order Bill To Email                               | Single Item                    | $$Order.BillToEmail$$                            | String                      |
| Order Bill To Fax                                 | Single Item                    | $$Order.BillToFax$$                              | String                      |
| Order Bill To First Name                          | Single Item                    | $$Order.BillToFirstName$$                        | String                      |
| Order Bill To Last Name                           | Single Item                    | $$Order.BillToLastName$$                         | String                      |
| Order Bill To Last Name Prefix                    | Single Item                    | $$Order.BillToLastNamePrefix$$                   | String                      |
| Order Bill To Name                                | Single Item                    | $$Order.BillToName$$                             | String                      |
| Order Bill To PersonTitle                         | Single Item                    | $$Order.BillToPersonTitle$$                      | String                      |
| Order Bill To Phone                               | Single Item                    | $$Order.BillToPhone$$                            | String                      |
| Order Bill To Phone2                              | Single Item                    | $$Order.BillToPhone2$$                           | String                      |
| Order Bill To State                               | Single Item                    | $$Order.BillToState$$                            | String                      |
| Order Bill To State Province                      | Single Item                    | $$Order.BillToStateProvince$$                    | String                      |
| Order Bill To Street Address                      | Single Item                    | $$Order.BillToStreetAddress$$                    | String                      |
| Order Bill To Street Address Additional Info      | Single Item                    | $$Order.BillToStreetAddressAdditionalInfo$$      | String                      |
| Order Bill To Street Address Extension            | Single Item                    | $$Order.BillToStreetAddressExtension$$           | String                      |
| Order Bill To VAT Number                          | Single Item                    | $$Order.BillToVatNumber$$                        | String                      |
| Order Bill To Zip                                 | Single Item                    | $$Order.BillToZip$$                              | String                      |
| Order Carrier Account Name                        | Single Item                    | $$Order.CarrierAccountName$$                     | String                      |
| Order Checkout Url                                | Single Item                    | $$Order.CheckoutUrl$$                            | String                      |
| Order Coupon Code                                 | Single Item                    | $$Order.CouponCode$$                             | String                      |
| Order CouponDiscount                              | Single Item                    | $$Order.CouponDiscount$$                         | String                      |
| Order Currency Code                               | Single Item                    | $$Order.CurrencyCode$$                           | String                      |
| Order Currency Symbol                             | Single Item                    | $$Order.CurrencySymbol$$                         | String                      |
| Order Customer Culture Code                       | Single Item                    | $$Order.CustomerCultureCode$$                    | String                      |
| Order Customer Note                               | Single Item                    | $$Order.CustomerNote$$                           | String                      |
| Order Customer Reference                          | Single Item                    | $$Order.CustomerReference$$                      | String                      |
| Order CustomOrder Status ActionDate               | Single Item                    | $$Order.CustomOrderStatusActionDate$$            | String                      |
| Order CustomOrder Status Comment                  | Single Item                    | $$Order.CustomOrderStatusComment$$               | String                      |
| Order Date                                        | Single Item                    | $$Order.Date$$                                   | Date and Time               |
| Order Discount Excluding VAT                      | Single Item                    | $$Order.DiscountExVat$$                          | Number                      |
| Order Discount Including VAT                      | Single Item                    | $$Order.DiscountIncVat$$                         | Number                      |
| Order Down Payment                                | Single Item                    | $$Order.DownPayment$$                            | Number                      |
| Order Down Payment In Base Currency               | Single Item                    | $$Order.DownPaymentInBaseCurrency$$              | Number                      |
| Order Down Payment Rest Amount                    | Single Item                    | $$Order.DownPaymentRestAmount$$                  | Number                      |
| Order Down Payment Rest Amount In Base Currency   | Single Item                    | $$Order.DownPaymentRestAmountInBaseCurrency$$    | Number                      |
| Order External Order Key                          | Single Item                    | $$Order.ExternalOrderKey$$                       | String                      |
| Order Has Registered Serial Numbers               | Single Item                    | $$Order.HasRegisteredSerialNumbers$$             | Boolean                     |
| Order Has Rows With Discount                      | Single Item                    | $$Order.HasRowsWithDiscount$$                    | Boolean                     |
| Order ID                                          | Single Item                    | $$Order.Id$$                                     | String                      |
| Order Is Paid                                     | Single Item                    | $$Order.IsPaid$$                                 | Boolean                     |
| Order MainOrder Status ActionDate                 | Single Item                    | $$Order.MainOrderStatusActionDate$$              | String                      |
| Order MainOrder Status Comment                    | Single Item                    | $$Order.MainOrderStatusComment$$                 | String                      |
| Order Code                                        | Single Item                    | $$Order.OrderCode$$                              | String                      |
| Order Products As HTML Table                      | Single Item                    | $$Order.OrderProductsAsHtmlTable$$               | HTML table - **_Outdated_** |
| Order Rows As HTML Table                          | Single Item                    | $$Order.OrderRowsAsHtmlTable$$                   | HTML table - **_Outdated_** |
| Order Rows As Plain HTML Table                    | Single Item                    | $$Order.OrderRowsAsPlainHtmlTable$$              | HTML table - **_Outdated_** |
| Order Rows Subtotal Excluding VAT                 | Single Item                    | $$Order.OrderRowsSubtotalExVat$$                 | Number                      |
| Order Rows Subtotal Including VAT                 | Single Item                    | $$Order.OrderRowsSubtotalIncVat$$                | Number                      |
| Order Rows Without Article Code As HTML Table     | Single Item                    | $$Order.OrderRowsWithoutArticleCodeAsHtmlTable$$ | HTML table - **_Outdated_** |
| Order Rows With Price Excluding VAT As HTML Table | Single Item                    | $$Order.OrderRowsWithPriceExVatAsHtmlTable$$     | HTML table - **_Outdated_** |
| Order Rows With Price Inc As Plain HTML Table     | Single Item                    | $$Order.OrderRowsWithPriceIncAsPlainHtmlTable$$  | HTML table - **_Outdated_** |
| Order Total                                       | Single Item                    | $$Order.OrderTotal$$                             | Number                      |
| Order Total Excluding VAT                         | Single Item                    | $$Order.OrderTotalExVat$$                        | Number                      |
| Order Total In Base Currency                      | Single Item                    | $$Order.OrderTotalInBaseCurrency$$               | Number                      |
| Order Total Including VAT In Base Currency        | Single Item                    | $$Order.OrderTotalIncVatInBaseCurrency$$         | Number                      |
| Order Payment Fee Excluding VAT                   | Single Item                    | $$Order.PaymentFeeExVat$$                        | Number                      |
| Order Payment Fee Including VAT                   | Single Item                    | $$Order.PaymentFeeIncVat$$                       | Number                      |
| Order Payment Order Status ActionDate             | Single Item                    | $$Order.PaymentOrderStatusActionDate$$           | String                      |
| Order Payment Order Status Comment                | Single Item                    | $$Order.PaymentOrderStatusComment$$              | String                      |
| Order Payment Type Code                           | Single Item                    | $$Order.PaymentTypeCode$$                        | String                      |
| Order Payment Type ID                             | Single Item                    | $$Order.PaymentTypeId$$                          | String                      |
| Order Preferred Delivery Date                     | Single Item                    | $$Order.PreferredDeliveryDate$$                  | Date and Time               |
| Order Registered Serial Numbers                   | Single Item                    | $$Order.RegisteredSerialNumbers$$                | String                      |
| Order Shipment Order Status ActionDate            | Single Item                    | $$Order.ShipmentOrderStatusActionDate$$          | String                      |
| Order Shipment Order Status Comment               | Single Item                    | $$Order.ShipmentOrderStatusComment$$             | String                      |
| Order Shipments Package Count                     | Single Item                    | $$Order.ShipmentsPackageCount$$                  | Number                      |
| Order Shipment Tracking Codes                     | Single Item                    | $$Order.ShipmentTrackingCodes$$                  | String                      |
| Order Shipping Costs Excluding VAT                | Single Item                    | $$Order.ShippingCostsExVat$$                     | Number                      |
| Order Shipping Costs Including VAT                | Single Item                    | $$Order.ShippingCostsIncVat$$                    | Number                      |
| Order Ship To Address                             | Single Item                    | $$Order.ShipToAddress$$                          | String                      |
| Order Ship To Address 2                           | Single Item                    | $$Order.ShipToAddress2$$                         | String                      |
| Order Ship To City                                | Single Item                    | $$Order.ShipToCity$$                             | String                      |
| Order Ship To Company                             | Single Item                    | $$Order.ShipToCompany$$                          | String                      |
| Order Ship To Country                             | Single Item                    | $$Order.ShipToCountry$$                          | String                      |
| Order Ship To Country Code                        | Single Item                    | $$Order.ShipToCountryCode$$                      | String                      |
| Order Ship To Email                               | Single Item                    | $$Order.ShipToEmail$$                            | String                      |
| Order Ship To Fax                                 | Single Item                    | $$Order.ShipToFax$$                              | String                      |
| Order Ship To First Name                          | Single Item                    | $$Order.ShipToFirstName$$                        | String                      |
| Order Ship To Last Name                           | Single Item                    | $$Order.ShipToLastName$$                         | String                      |
| Order Ship To Last Name Prefix                    | Single Item                    | $$Order.ShipToLastNamePrefix$$                   | String                      |
| Order Ship To Name                                | Single Item                    | $$Order.ShipToName$$                             | String                      |
| Order Ship To PersonTitle                         | Single Item                    | $$Order.ShipToPersonTitle$$                      | String                      |
| Order Ship To Phone                               | Single Item                    | $$Order.ShipToPhone$$                            | String                      |
| Order Ship To Phone2                              | Single Item                    | $$Order.ShipToPhone2$$                           | String                      |
| Order Ship To State                               | Single Item                    | $$Order.ShipToState$$                            | String                      |
| Order Ship To State Province                      | Single Item                    | $$Order.ShipToStateProvince$$                    | String                      |
| Order Ship To Street Address                      | Single Item                    | $$Order.ShipToStreetAddress$$                    | String                      |
| Order Ship To Street Address Additional Info      | Single Item                    | $$Order.ShipToStreetAddressAdditionalInfo$$      | String                      |
| Order Ship To Street Address Extension            | Single Item                    | $$Order.ShipToStreetAddressExtension$$           | String                      |
| Order Ship To Zip                                 | Single Item                    | $$Order.ShipToZip$$                              | String                      |
| Order Stock Order Status ActionDate               | Single Item                    | $$Order.StockOrderStatusActionDate$$             | String                      |
| Order Stock Order Status Comment                  | Single Item                    | $$Order.StockOrderStatusComment$$                | String                      |
| Order Sum Payments                                | Single Item                    | $$Order.SumPayments$$                            | Number                      |
| Order Total Due                                   | Single Item                    | $$Order.TotalDue$$                               | Number                      |
| Order Total Due In Base Currency                  | Single Item                    | $$Order.TotalDueInBaseCurrency$$                 | Number                      |
| Order Total Invoiced                              | Single Item                    | $$Order.TotalInvoiced$$                          | Number                      |
| Order Total Received                              | Single Item                    | $$Order.TotalReceived$$                          | Number                      |
| Order Total Received In Base Currency             | Single Item                    | $$Order.TotalReceivedInBaseCurrency$$            | Number                      |
| Order Tracking Url                                | Single Item                    | $$Order.TrackingUrl$$                            | String                      |
| Order Tracking Url Link                           | Single Item                    | $$Order.TrackingUrlLink$$                        | String                      |
| Order VAT Total                                   | Single Item                    | $$Order.VatTotal$$                               | Number                      |
| Order Bill To Bank Bic                            | Single Item                    | $$OrderBillTo.BankBic$$                          | String                      |
| Order Bill To Bank Iban                           | Single Item                    | $$OrderBillTo.BankIban$$                         | String                      |
| Order Bill To Bank Number                         | Single Item                    | $$OrderBillTo.BankNr$$                           | String                      |
| Order Bill To Chamber of Commerce                 | Single Item                    | $$OrderBillTo.ChamberOfCommerce$$                | String                      |
| Order Bill To Chamber of Commerce City            | Single Item                    | $$OrderBillTo.ChamberOfCommerceCity$$            | String                      |
| Order Bill To City                                | Single Item                    | $$OrderBillTo.City$$                             | String                      |
| Order Bill To Company Name                        | Single Item                    | $$OrderBillTo.CompanyName$$                      | String                      |
| Order Bill To Country Code                        | Single Item                    | $$OrderBillTo.CountryCode$$                      | String                      |
| Order Bill To Country Name                        | Single Item                    | $$OrderBillTo.CountryName$$                      | String                      |
| Order Bill To Display Name                        | Single Item                    | $$OrderBillTo.DisplayName$$                      | String                      |
| Order Bill To Email                               | Single Item                    | $$OrderBillTo.Email$$                            | String                      |
| Order Bill To Full Name                           | Single Item                    | $$OrderBillTo.FullName$$                         | String                      |
| Order Bill To Is Part Of The EU                   | Single Item                    | $$OrderBillTo.IsPartOfTheEu$$                    | Boolean                     |
| Order Bill To PersonTitle                         | Single Item                    | $$OrderBillTo.PersonTitle$$                      | String                      |
| Order Bill To Phone                               | Single Item                    | $$OrderBillTo.Phone$$                            | String                      |
| Order Bill To Phone2                              | Single Item                    | $$OrderBillTo.Phone2$$                           | String                      |
| Order Bill To Postal Code                         | Single Item                    | $$OrderBillTo.PostalCode$$                       | String                      |
| Order Bill To State Province                      | Single Item                    | $$OrderBillTo.StateProvince$$                    | String                      |
| Order Bill To State Province Code                 | Single Item                    | $$OrderBillTo.StateProvinceCode$$                | String                      |
| Order Bill To Street Address 1                    | Single Item                    | $$OrderBillTo.StreetAddress1$$                   | String                      |
| Order Bill To Street Address 2                    | Single Item                    | $$OrderBillTo.StreetAddress2$$                   | String                      |
| Order Bill To VAT Number                          | Single Item                    | $$OrderBillTo.VatNumber$$                        | String                      |
| Order Ship To Bank Bic                            | Single Item                    | $$OrderShipTo.BankBic$$                          | String                      |
| Order Ship To Bank Iban                           | Single Item                    | $$OrderShipTo.BankIban$$                         | String                      |
| Order Ship To Bank Number                         | Single Item                    | $$OrderShipTo.BankNr$$                           | String                      |
| Order Ship To Chamber of Commerce                 | Single Item                    | $$OrderShipTo.ChamberOfCommerce$$                | String                      |
| Order Ship To Chamber of Commerce City            | Single Item                    | $$OrderShipTo.ChamberOfCommerceCity$$            | String                      |
| Order Ship To City                                | Single Item                    | $$OrderShipTo.City$$                             | String                      |
| Order Ship To Company Name                        | Single Item                    | $$OrderShipTo.CompanyName$$                      | String                      |
| Order Ship To Country Code                        | Single Item                    | $$OrderShipTo.CountryCode$$                      | String                      |
| Order Ship To Country Name                        | Single Item                    | $$OrderShipTo.CountryName$$                      | String                      |
| Order Ship To Display Name                        | Single Item                    | $$OrderShipTo.DisplayName$$                      | String                      |
| Order Ship To Email                               | Single Item                    | $$OrderShipTo.Email$$                            | String                      |
| Order Ship To Full Name                           | Single Item                    | $$OrderShipTo.FullName$$                         | String                      |
| Order Ship To Is Part Of The EU                   | Single Item                    | $$OrderShipTo.IsPartOfTheEu$$                    | Boolean                     |
| Order Ship To PersonTitle                         | Single Item                    | $$OrderShipTo.PersonTitle$$                      | String                      |
| Order Ship To Phone                               | Single Item                    | $$OrderShipTo.Phone$$                            | String                      |
| Order Ship To Phone2                              | Single Item                    | $$OrderShipTo.Phone2$$                           | String                      |
| Order Ship To Postal Code                         | Single Item                    | $$OrderShipTo.PostalCode$$                       | String                      |
| Order Ship To State Province                      | Single Item                    | $$OrderShipTo.StateProvince$$                    | String                      |
| Order Ship To State Province Code                 | Single Item                    | $$OrderShipTo.StateProvinceCode$$                | String                      |
| Order Ship To Street Address 1                    | Single Item                    | $$OrderShipTo.StreetAddress1$$                   | String                      |
| Order Ship To Street Address 2                    | Single Item                    | $$OrderShipTo.StreetAddress2$$                   | String                      |
| Order Ship To VAT Number                          | Single Item                    | $$OrderShipTo.VatNumber$$                        | String                      |
| Order Row Allocation Item Quantity                | OrderRow Collection            | $$OrderRow.AllocationItemQuantity$$              | Number                      |
| Order Row Comment                                 | OrderRow Collection            | $$OrderRow.Comment$$                             | String                      |
| Order Row ID                                      | OrderRow Collection            | $$OrderRow.Id$$                                  | String                      |
| Order Row Item Base Price Excluding VAT           | OrderRow Collection            | $$OrderRow.ItemBasePriceExVat$$                  | Number                      |
| Order Row Item Base Price Including VAT           | OrderRow Collection            | $$OrderRow.ItemBasePriceIncVat$$                 | Number                      |
| Order Row Item Price Excluding VAT                | OrderRow Collection            | $$OrderRow.ItemPriceExVat$$                      | Number                      |
| Order Row Item Price Including VAT                | OrderRow Collection            | $$OrderRow.ItemPriceIncVat$$                     | Number                      |
| Order Row Item Purchase Price                     | OrderRow Collection            | $$OrderRow.ItemPurchasePrice$$                   | Number                      |
| Order Row Item Quantity                           | OrderRow Collection            | $$OrderRow.ItemQuantity$$                        | Number                      |
| Order Row Item VAT Amount                         | OrderRow Collection            | $$OrderRow.ItemVatAmount$$                       | Number                      |
| Order Row Number Of Items Invoiced                | OrderRow Collection            | $$OrderRow.NrOfItemsInvoiced$$                   | Number                      |
| Order Row Number Of Items Refunded                | OrderRow Collection            | $$OrderRow.NrOfItemsRefunded$$                   | Number                      |
| Order Row Order ID                                | OrderRow Collection            | $$OrderRow.OrderId$$                             | String                      |
| Order Row Order Shipment ID                       | OrderRow Collection            | $$OrderRow.OrderShipmentId$$                     | String                      |
| Order Row Product Code                            | OrderRow Collection            | $$OrderRow.ProductCode$$                         | String                      |
| Order Row Product Country Of Origin               | OrderRow Collection            | $$OrderRow.ProductCountryOfOrigin$$              | String                      |
| Order Row Product Description                     | OrderRow Collection            | $$OrderRow.ProductDescription$$                  | String                      |
| Order Row Product EAN                             | OrderRow Collection            | $$OrderRow.ProductEAN$$                          | String                      |
| Order Row Product HS Code                         | OrderRow Collection            | $$OrderRow.ProductHscode$$                       | String                      |
| Order Row Product HS Code2                        | OrderRow Collection            | $$OrderRow.ProductHscode2$$                      | String                      |
| Order Row Product Name                            | OrderRow Collection            | $$OrderRow.ProductName$$                         | String                      |
| Order Row Product Weight, Kg                      | OrderRow Collection            | $$OrderRow.ProductWeightKg$$                     | Number                      |
| Order Row Discount Excluding VAT                  | OrderRow Collection            | $$OrderRow.RowDiscountExVat$$                    | Number                      |
| Order Row Discount Including VAT                  | OrderRow Collection            | $$OrderRow.RowDiscountIncVat$$                   | Number                      |
| Order Row Total Excluding VAT                     | OrderRow Collection            | $$OrderRow.RowTotalExVat$$                       | Number                      |
| Order Row Total Including VAT                     | OrderRow Collection            | $$OrderRow.RowTotalIncVat$$                      | Number                      |
| Order Row VAT Amount                              | OrderRow Collection            | $$OrderRow.RowVatAmount$$                        | Number                      |
| Order Row Shop Product Image Url                  | OrderRow Collection            | $$OrderRow.ShopProductImageUrl$$                 | String                      |
| Order Row Stock Status                            | OrderRow Collection            | $$OrderRow.StockStatus$$                         | String                      |
| Order Row VAT perc                                | OrderRow Collection            | $$OrderRow.Vatperc$$                             | Number                      |
| Order Row Base Product Name                       | OrderRow Collection            | $$OrderRow.BaseProductName$$                     | String                      |
| Order Row Product Name Translation                | OrderRow Collection            | $$OrderRow.ProductNameTranslation$$              | String                      |
| Order Row Product DescriptionTranslation          | OrderRow Collection            | $$OrderRow.ProductDescriptionTranslation$$       | String                      |
| Fields                                            | OrderGroupedVatSum Collection  | Fields                                           |                             |
| Order Grouped VAT Sum Total Excluding VAT         | OrderGroupedVatSum Collection  | $$OrderGroupedVatSum.TotalExVat$$                | Number                      |
| Order Grouped VAT Sum Total Including VAT         | OrderGroupedVatSum Collection  | $$OrderGroupedVatSum.TotalIncVat$$               | Number                      |
| Order Grouped VAT Sum VAT Code                    | OrderGroupedVatSum Collection  | $$OrderGroupedVatSum.VatCode$$                   | Number                      |
| Order Grouped VAT Sum VAT Perc                    | OrderGroupedVatSum Collection  | $$OrderGroupedVatSum.VatPerc$$                   | Number                      |
| Order Grouped VAT Sum VAT TariffID                | OrderGroupedVatSum Collection  | $$OrderGroupedVatSum.VatTariffId$$               | Number                      |
| Order Grouped VAT Sum VAT Total                   | OrderGroupedVatSum Collection  | $$OrderGroupedVatSum.VatTotal$$                  | Number                      |
| Payment Type Code                                 | Single Item                    | $$PaymentType.Code$$                             | String                      |
| Payment Type ID                                   | Single Item                    | $$PaymentType.Id$$                               | String                      |
| Payment Type Is Auto Collect Type                 | Single Item                    | $$PaymentType.IsAutoCollectType$$                | Boolean                     |
| Payment Type Is Bank Transfer                     | Single Item                    | $$PaymentType.IsBankTransfer$$                   | Boolean                     |
| Payment Type Is Cash On Delivery                  | Single Item                    | $$PaymentType.IsCashOnDelivery$$                 | Boolean                     |
| Payment Type Is Direct Money Transfer             | Single Item                    | $$PaymentType.IsDirectMoneyTransfer$$            | Boolean                     |
| Payment Type Is Payment On Invoice                | Single Item                    | $$PaymentType.IsPaymentOnInvoice$$               | Boolean                     |
| Product Registration Comment                      | ProductRegistration Collection | $$ProductRegistration.Comment$$                  | String                      |
| Product Registration Order Row ID                 | ProductRegistration Collection | $$ProductRegistration.OrderRowId$$               | String                      |
| Product Registration Serial Number                | ProductRegistration Collection | $$ProductRegistration.SerialNumber$$             | String                      |
| Product Registration Use By Date                  | ProductRegistration Collection | $$ProductRegistration.UseByDate$$                | Date and Time               |

**Product Collection** (nested on OrderRow — each order row links to a Product; iterate within the OrderRow collection)

| Merge field name                                  | Merge field type               | Merge field                                      | Data type                   |
| ------------------------------------------------- | ------------------------------ | ------------------------------------------------ | --------------------------- |
| Product ID                                        | Product Collection (on OrderRow) | $$Product.Id$$                                   | String                      |
| Product Code                                      | Product Collection (on OrderRow) | $$Product.Code$$                                 | String                      |
| Product Ref Code                                  | Product Collection (on OrderRow) | $$Product.RefCode$$                              | String                      |
| Product Scan Code                                 | Product Collection (on OrderRow) | $$Product.ScanCode$$                             | String                      |
| Product Type                                      | Product Collection (on OrderRow) | $$Product.ProductType$$                          | String                      |
| Product Property Def Set ID                       | Product Collection (on OrderRow) | $$Product.ProductPropertyDefSetId$$              | String                      |
| Product Price Excluding VAT                       | Product Collection (on OrderRow) | $$Product.PriceExVat$$                           | Number                      |
| Product Price UOM ID                              | Product Collection (on OrderRow) | $$Product.PriceUomId$$                           | String                      |
| Product Published                                 | Product Collection (on OrderRow) | $$Product.Published$$                            | Boolean                     |
| Product Keep Stock                                | Product Collection (on OrderRow) | $$Product.KeepStock$$                            | Boolean                     |
| Product Is Shippable                              | Product Collection (on OrderRow) | $$Product.IsShippable$$                          | Boolean                     |
| Product Is Advanced Product                       | Product Collection (on OrderRow) | $$Product.IsAdvancedProduct$$                    | Boolean                     |
| Product Has Advanced Properties                   | Product Collection (on OrderRow) | $$Product.HasAdvancedProperties$$                | Boolean                     |
| Product Requires Lot Number                       | Product Collection (on OrderRow) | $$Product.RequiresLotNumber$$                    | Boolean                     |
| Product Requires Expiry Date                      | Product Collection (on OrderRow) | $$Product.RequiresExpiryDate$$                   | Boolean                     |
| Product Requires Serial Number                    | Product Collection (on OrderRow) | $$Product.RequiresSerialNumber$$                 | Boolean                     |
| Product Requires Scan When Picking                | Product Collection (on OrderRow) | $$Product.RequiresScanWhenPicking$$              | Boolean                     |
| Product Creation Date                             | Product Collection (on OrderRow) | $$Product.CreationDate$$                         | Date and Time               |
| Product Changed Timestamp                         | Product Collection (on OrderRow) | $$Product.ChangedTimestamp$$                     | Date and Time               |
| Product Qty Available                             | Product Collection (on OrderRow) | $$Product.QtyAvailable$$                         | Number                      |
| Product Qty On Hand                               | Product Collection (on OrderRow) | $$Product.QtyOnHand$$                            | Number                      |
| Product Qty Ordered                               | Product Collection (on OrderRow) | $$Product.QtyOrdered$$                           | Number                      |
| Product Qty Reserved                              | Product Collection (on OrderRow) | $$Product.QtyReserved$$                          | Number                      |
| Product Weight                                    | Product Collection (on OrderRow) | $$Product.Weight$$                               | Number                      |
| Product Weight UOM ID                             | Product Collection (on OrderRow) | $$Product.WeightUomId$$                          | String                      |
| Product Length                                     | Product Collection (on OrderRow) | $$Product.Length$$                               | Number                      |
| Product Width                                     | Product Collection (on OrderRow) | $$Product.Width$$                                | Number                      |
| Product Height                                    | Product Collection (on OrderRow) | $$Product.Height$$                               | Number                      |
| Product Size UOM ID                               | Product Collection (on OrderRow) | $$Product.SizeUomId$$                            | String                      |
| Product Diameter                                  | Product Collection (on OrderRow) | $$Product.Diameter$$                             | Number                      |
| Product Volume                                    | Product Collection (on OrderRow) | $$Product.Volume$$                               | Number                      |
| Product Volume UOM ID                             | Product Collection (on OrderRow) | $$Product.VolumeUomId$$                          | String                      |
| Product Storage Life                              | Product Collection (on OrderRow) | $$Product.StorageLife$$                          | Number                      |
| Product Storage Life Unit                         | Product Collection (on OrderRow) | $$Product.StorageLifeUnit$$                      | String                      |
| Product HS Code                                   | Product Collection (on OrderRow) | $$Product.Hscode$$                               | String                      |
| Product Origin Country Code                       | Product Collection (on OrderRow) | $$Product.OriginCountryCode$$                    | String                      |
| Product UN Class                                  | Product Collection (on OrderRow) | $$Product.UnClass$$                              | String                      |
| Product UN Number                                 | Product Collection (on OrderRow) | $$Product.UnNumber$$                             | String                      |
| Product UN Packing Group                          | Product Collection (on OrderRow) | $$Product.UnPackingGroup$$                       | String                      |
| Product Brand Name                                | Product Collection (on OrderRow) | $$Product.ProductBrandName$$                     | String                      |
| Product Brand Ref 1                               | Product Collection (on OrderRow) | $$Product.ProductBrandRef1$$                     | String                      |
| Product Brand Ref 2                               | Product Collection (on OrderRow) | $$Product.ProductBrandRef2$$                     | String                      |

**ProductGroup Collection** (nested on Product — each product links to a ProductGroup; iterate within the Product collection)

| Merge field name                                  | Merge field type                     | Merge field                                      | Data type                   |
| ------------------------------------------------- | ------------------------------------ | ------------------------------------------------ | --------------------------- |
| Product Group ID                                  | ProductGroup Collection (on Product) | $$ProductGroup.Id$$                              | String                      |
| Product Group Name                                | ProductGroup Collection (on Product) | $$ProductGroup.Name$$                            | String                      |
| Product Group Comment                             | ProductGroup Collection (on Product) | $$ProductGroup.Comment$$                         | String                      |
| Product Group Is Active                           | ProductGroup Collection (on Product) | $$ProductGroup.IsActive$$                        | Boolean                     |
| Product Group Sequence                            | ProductGroup Collection (on Product) | $$ProductGroup.Sequence$$                        | Number                      |

**Relations based on current Order Row item**

'ProductRegistration' links to ProductRegistration

'Product' links to Product (nested collection — each OrderRow contains a Product)

**Relations based on current Product item**

'ProductGroup' links to ProductGroup (nested collection — each Product contains a ProductGroup)

**Relations**

'PaymentType' links to Order

'OrderRow' links to OrderRow


</details>

### Order expected delivery date change

<details>
  <summary> Show the list of Order expected delivery date change merge fields</summary>
  
| Merge field name | Merge field type | Merge field | Data type |
| --- | --- | --- | -- |
| Order Expected Delivery Date | Single Item | $$Order.ExpectedDeliveryDate$$ | Date |
| Order Expected Delivery Date Week | Single Item | $$Order.ExpectedDeliveryWeek$$ | Number |
| Order Row Expected Delivery Date | Order Row Collection | $$Order Row.ExpectedDeliveryDate$$ | Date |
| Order Row Expected Delivery Date Change Status | Order Row Collection | $$Order Row.ExpectedDeliveryDateChange$$ | String |
| Order Row Expected Delivery Date Status value | Order Row Collection | $$Order Row.ExpectedDeliveryDateStatusEnumValue$$ | Number |
| Order Row Expected Delivery Date Week | Order Row Collection | $$Order Row.ExpectedDeliveryWeek$$ | Number |
| Order Row Previous Expected Delivery Date | Order Row Collection | $$Order Row.PreviousExpectedDeliveryDate$$ | Date |
| Expected Delivery Date Change Allocation Item Quantity | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.AllocationItemQuantity$$ | Number |
| Expected Delivery Date Change Comment | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.Comment$$ | String |
| Expected Delivery Date Change Expected Delivery Date | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ExpectedDeliveryDate$$ | Date |
| Expected Delivery Date Change Expected Delivery Date Change | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ExpectedDeliveryDateChange$$ | String |
| Expected Delivery Date Change Expected Delivery Date Status Enum Value | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ExpectedDeliveryDateStatusEnumValue$$ | Number |
| Expected Delivery Date Change Expected Delivery Week | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ExpectedDeliveryWeek$$ | Number |
| Expected Delivery Date Change Id | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.Id$$ | Number |
| Expected Delivery Date Change Item Base PriceExVat | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ItemBasePriceExVat$$ | Number |
| Expected Delivery Date Change Item Base PriceIncVat | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ItemBasePriceIncVat$$ | Number |
| Expected Delivery Date Change Item Price ExVat | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ItemPriceExVat$$ | Number |
| Expected Delivery Date Change Item Price Inc Vat | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ItemPriceIncVat$$ | Number |
| Expected Delivery Date Change Item Purchase Price | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ItemPurchasePrice$$ | Number |
| Expected Delivery Date Change Item Quantity | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ItemQuantity$$ | Number |
| Expected Delivery Date Change Item Vat Amount | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ItemVatAmount$$ | Number |
| Expected Delivery Date Change NrOfItems Invoiced | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.NrOfItemsInvoiced$$ | Number |
| Expected Delivery Date Change NrOfItems Refunded | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.NrOfItemsRefunded$$ | Number |
| Expected Delivery Date Change OrderId | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.OrderId$$ | Number |
| Expected Delivery Date Change Order Shipment Id | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.OrderShipmentId$$ | Number |
| Expected Delivery Date Change PreviousExpectedDeliveryDate | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.PreviousExpectedDeliveryDate$$ | Date |
| Expected Delivery Date Change Product Code | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ProductCode$$ | String |
| Expected Delivery Date Change Product Country Of Origin | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ProductCountryOfOrigin$$ | String |
| Expected Delivery Date Change Product Description | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ProductDescription$$ | String |
| Expected Delivery Date Change Product EAN | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ProductEAN$$ | Number |
| Expected Delivery Date Change Product Hscode | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ProductHscode$$ | Number |
| Expected Delivery Date Change Product Hscode2 | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ProductHscode2$$ | Number |
| Expected Delivery Date Change Product Name | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ProductName$$ | String |
| Expected Delivery Date Change Product WeightKg | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ProductWeightKg$$ | Number |
| Expected Delivery Date Change Row Discount ExVat | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.RowDiscountExVat$$ | Number |
| Expected Delivery Date Change Row Discount IncVat | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.RowDiscountIncVat$$ | Number |
| Expected Delivery Date Change Row Total ExVat | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.RowTotalExVat$$ | Number |
| Expected Delivery Date Change Row Total IncVat | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.RowTotalIncVat$$ | Number |
| Expected Delivery Date Change Row Vat Amount | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.RowVatAmount$$ | Number |
| Expected Delivery Date Change Shipped | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.Shipped$$ | Boolean |
| Expected Delivery Date Change Shop Product Image Url | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.ShopProductImageUrl$$ | Url |
| Expected Delivery Date Change Stock Status | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.StockStatus$$ | String |
| Expected Delivery Date Change Vat perc | Expected Delivery Date Change Collection | $$ExpectedDeliveryDateChange.Vatperc$$ | Number |

**Relations**
'ExpectedDeliveryDateChangeRows' links to ExpectedDeliveryDateChange

</details>

## Invoice

<details>
  <summary> Show the list of Invoice merge fields</summary>

| Merge field name                             | Merge field type            | Merge field                                  | Data type     |
| -------------------------------------------- | --------------------------- | -------------------------------------------- | ------------- |
| Invoice Auto Collect Date                    | Single Item                 | $$Invoice.AutoCollectDate$$                  | Date and Time |
| Invoice Auto Collect Days                    | Single Item                 | $$Invoice.AutoCollectDays$$                  | Date and Time |
| Invoice Currency Symbol                      | Single Item                 | $$Invoice.CurrencySymbol$$                   | String        |
| Invoice Customer Reference                   | Single Item                 | $$Invoice.CustomerReference$$                | String        |
| Invoice Discount Excluding VAT               | Single Item                 | $$Invoice.DiscountExVat$$                    | Number        |
| Invoice Discount Including VAT               | Single Item                 | $$Invoice.DiscountIncVat$$                   | Number        |
| Invoice External Invoice Code                | Single Item                 | $$Invoice.ExternalInvoiceCode$$              | String        |
| Invoice Has Rows With Discount               | Single Item                 | $$Invoice.HasRowsWithDiscount$$              | Boolean       |
| Invoice ID                                   | Single Item                 | $$Invoice.Id$$                               | String        |
| Invoice Code                                 | Single Item                 | $$Invoice.InvoiceCode$$                      | String        |
| Invoice Date                                 | Single Item                 | $$Invoice.InvoiceDate$$                      | Date and Time |
| Invoice Rows Subtotal Excluding VAT          | Single Item                 | $$Invoice.InvoiceRowsSubtotalExVat$$         | Number        |
| Invoice Rows Subtotal Including VAT          | Single Item                 | $$Invoice.InvoiceRowsSubtotalIncVat$$        | Number        |
| Invoice Total Excluding VAT                  | Single Item                 | $$Invoice.InvoiceTotalExVat$$                | Number        |
| Invoice Total Including VAT                  | Single Item                 | $$Invoice.InvoiceTotalIncVat$$               | Number        |
| Invoice Total Including VAT In Base Currency | Single Item                 | $$Invoice.InvoiceTotalIncVatInBaseCurrency$$ | Number        |
| Invoice Is Concept                           | Single Item                 | $$Invoice.IsConcept$$                        | Boolean       |
| Invoice Is CreditInvoice                     | Single Item                 | $$Invoice.IsCreditInvoice$$                  | Boolean       |
| Invoice Is Must Pay Before Expired           | Single Item                 | $$Invoice.IsMustPayBeforeExpired$$           | Boolean       |
| Invoice Is Not Credit Invoice                | Single Item                 | $$Invoice.IsNotCreditInvoice$$               | Boolean       |
| Invoice Is NotPaid                           | Single Item                 | $$Invoice.IsNotPaid$$                        | Boolean       |
| Invoice Is Paid                              | Single Item                 | $$Invoice.IsPaid$$                           | Boolean       |
| Invoice Is Reminder Invoice                  | Single Item                 | $$Invoice.IsReminderInvoice$$                | Boolean       |
| Invoice Is VAT FreeInvoice                   | Single Item                 | $$Invoice.IsVatFreeInvoice$$                 | Boolean       |
| Invoice Is Zero Amount Invoice               | Single Item                 | $$Invoice.IsZeroAmountInvoice$$              | Boolean       |
| Invoice Must Pay Before                      | Single Item                 | $$Invoice.MustPayBefore$$                    | Date and Time |
| Invoice Note                                 | Single Item                 | $$Invoice.Note$$                             | String        |
| Invoice Payment Fee Excluding VAT            | Single Item                 | $$Invoice.PaymentFeeExVat$$                  | Number        |
| Invoice Payment Fee Including VAT            | Single Item                 | $$Invoice.PaymentFeeIncVat$$                 | Number        |
| Invoice Payment Terms Days To Pay            | Single Item                 | $$Invoice.PaymentTermsDaysToPay$$            | Number        |
| Invoice Payment Terms Name                   | Single Item                 | $$Invoice.PaymentTermsName$$                 | String        |
| Invoice Payment Type Code                    | Single Item                 | $$Invoice.PaymentTypeCode$$                  | String        |
| Invoice Reminder Create Date                 | Single Item                 | $$Invoice.ReminderCreateDate$$               | Date and Time |
| Invoice Shipping Costs Excluding VAT         | Single Item                 | $$Invoice.ShippingCostsExVat$$               | Number        |
| Invoice Shipping Costs Including VAT         | Single Item                 | $$Invoice.ShippingCostsIncVat$$              | Number        |
| Invoice Shipping Costs VAT                   | Single Item                 | $$Invoice.ShippingCostsVat$$                 | Number        |
| Invoice Sum Payments                         | Single Item                 | $$Invoice.SumPayments$$                      | Number        |
| Invoice Total Due                            | Single Item                 | $$Invoice.TotalDue$$                         | Number        |
| Invoice Total Due In Base Currency           | Single Item                 | $$Invoice.TotalDueInBaseCurrency$$           | Number        |
| Invoice VAT Total                            | Single Item                 | $$Invoice.VatTotal$$                         | Number        |
| Invoice Row Comment                          | InvoiceRow Collection       | $$InvoiceRow.Comment$$                       | String        |
| Invoice Row Discount Excluding VAT           | InvoiceRow Collection       | $$InvoiceRow.DiscountExVat$$                 | Number        |
| Invoice Row Discount Including VAT           | InvoiceRow Collection       | $$InvoiceRow.DiscountIncVat$$                | Number        |
| Invoice Row ID                               | InvoiceRow Collection       | $$InvoiceRow.Id$$                            | String        |
| Invoice Row Invoice ID                       | InvoiceRow Collection       | $$InvoiceRow.InvoiceId$$                     | String        |
| Invoice Row Item Price Excluding VAT         | InvoiceRow Collection       | $$InvoiceRow.ItemPriceExVat$$                | Number        |
| Invoice Row Item Price Including VAT         | InvoiceRow Collection       | $$InvoiceRow.ItemPriceIncVat$$               | Number        |
| Invoice Row Item Quantity                    | InvoiceRow Collection       | $$InvoiceRow.ItemQuantity$$                  | Number        |
| Invoice Row Item VAT Amount                  | InvoiceRow Collection       | $$InvoiceRow.ItemVatAmount$$                 | Number        |
| Invoice Row Order Row ID                     | InvoiceRow Collection       | $$InvoiceRow.OrderRowId$$                    | String        |
| Invoice Row Product Code                     | InvoiceRow Collection       | $$InvoiceRow.ProductCode$$                   | String        |
| Invoice Row Product Country Of Origin        | InvoiceRow Collection       | $$InvoiceRow.ProductCountryOfOrigin$$        | String        |
| Invoice Row Product HS Code                  | InvoiceRow Collection       | $$InvoiceRow.ProductHsCode$$                 | String        |
| Invoice Row Product HS Code 2                | InvoiceRow Collection       | $$InvoiceRow.ProductHsCode2$$                | String        |
| Invoice Row Product Name                     | InvoiceRow Collection       | $$InvoiceRow.ProductName$$                   | String        |
| Invoice Row Total Excluding VAT              | InvoiceRow Collection       | $$InvoiceRow.RowTotalExVat$$                 | Number        |
| Invoice Row Total Including VAT              | InvoiceRow Collection       | $$InvoiceRow.RowTotalIncVat$$                | Number        |
| Invoice Row VAT Amount                       | InvoiceRow Collection       | $$InvoiceRow.RowVatAmount$$                  | Number        |
| Invoice Row VAT perc                         | InvoiceRow Collection       | $$InvoiceRow.Vatperc$$                       | Number        |
| Invoice Row Stock Item Row Count             | InvoiceRow Collection       | $$InvoiceRow.StockItemRowCount$$             | Number        |
| Invoice Row Base Product Name                | InvoiceRow Collection       | $$InvoiceRow.BaseProductName$$               | String        |
| Invoice Row Product Name Translation         | InvoiceRow Collection       | $$InvoiceRow.ProductNameTranslation$$        | String        |
| Invoice Row Product DescriptionTranslation   | InvoiceRow Collection       | $$InvoiceRow.ProductDescriptionTranslation$$ | String        |
| Invoice Stock Item Expiry Date               | InvoiceStockItem Collection | $$InvoiceStockItem.ExpiryDate$$              | String        |
| Invoice Stock Item ID                        | InvoiceStockItem Collection | $$InvoiceStockItem.Id$$                      | String        |
| Invoice Stock Item Lot Number                | InvoiceStockItem Collection | $$InvoiceStockItem.LotNumber$$               | String        |
| Invoice Stock Item Order Row ID              | InvoiceStockItem Collection | $$InvoiceStockItem.OrderRowId$$              | String        |
| Invoice Stock Item Serial Number             | InvoiceStockItem Collection | $$InvoiceStockItem.SerialNumber$$            | String        |
| Grouped VAT Sum Total Excluding VAT          | GroupedVatSum Collection    | $$GroupedVatSum.TotalExVat$$                 | Number        |
| Grouped VAT Sum Total Including VAT          | GroupedVatSum Collection    | $$GroupedVatSum.TotalIncVat$$                | Number        |
| Grouped VAT Sum VAT Code                     | GroupedVatSum Collection    | $$GroupedVatSum.VatCode$$                    | Number        |
| Grouped VAT Sum VAT Perc                     | GroupedVatSum Collection    | $$GroupedVatSum.VatPerc$$                    | Number        |
| Grouped VAT Sum VAT TariffID                 | GroupedVatSum Collection    | $$GroupedVatSum.VatTariffId$$                | Number        |
| Grouped VAT Sum VAT Total                    | GroupedVatSum Collection    | $$GroupedVatSum.VatTotal$$                   | Number        |
| Invoice Shipment Invoice ID                  | InvoiceShipment Collection  | $$InvoiceShipment.InvoiceId$$                | String        |
| Invoice Shipment Order Shipment ID           | InvoiceShipment Collection  | $$InvoiceShipment.OrderShipmentId$$          | String        |
| Invoice Shipment Packed Timestamp            | InvoiceShipment Collection  | $$InvoiceShipment.PackedTimestamp$$          | Date and Time |
| Invoice Shipment Shipped Timestamp           | InvoiceShipment Collection  | $$InvoiceShipment.ShippedTimestamp$$         | Date and Time |
| Invoice Shipment Shipping Code               | InvoiceShipment Collection  | $$InvoiceShipment.ShippingCode$$             | String        |

**Relations**
'Invoice Row' links to 'InvoiceRow'
'Invoice Invoice Shipment ' links to 'InvoiceShipment'
'Invoice Stock Items ' links to 'InvoiceStockItem'

</details>

## Offer

<details>
  <summary> Show the list of Offer merge fields</summary>
  
| Merge field name | Merge field type | Merge field | Data type |
| --- | --- | --- | -- |
| Offer Bill To Address | Single Item | $$Offer.BillToAddress$$ | String |
| Offer Bill To Address 2 | Single Item | $$Offer.BillToAddress2$$ | String |
| Offer Bill To And Ship To Are The Same | Single Item | $$Offer.BillToAndShipToAreTheSame$$ | Boolean |
| Offer Bill To City | Single Item | $$Offer.BillToCity$$ | String |
| Offer Bill To Company | Single Item | $$Offer.BillToCompany$$ | String |
| Offer Bill To Country | Single Item | $$Offer.BillToCountry$$ | String |
| Offer Bill To Country Code | Single Item | $$Offer.BillToCountryCode$$ | String |
| Offer Bill To Email | Single Item | $$Offer.BillToEmail$$ | String |
| Offer Bill To Fax | Single Item | $$Offer.BillToFax$$ | String |
| Offer Bill To First Name | Single Item | $$Offer.BillToFirstName$$ | String |
| Offer Bill To Last Name | Single Item | $$Offer.BillToLastName$$ | String |
| Offer Bill To Last Name Prefix | Single Item | $$Offer.BillToLastNamePrefix$$ | String |
| Offer Bill To Name | Single Item | $$Offer.BillToName$$ | String |
| Offer Bill To Person Title | Single Item | $$Offer.BillToPersonTitle$$ | String |
| Offer Bill To Phone | Single Item | $$Offer.BillToPhone$$ | String |
| Offer Bill To Phone2 | Single Item | $$Offer.BillToPhone2$$ | String |
| Offer Bill To State | Single Item | $$Offer.BillToState$$ | String |
| Offer Bill To State Province | Single Item | $$Offer.BillToStateProvince$$ | String |
| Offer Bill To Street Address | Single Item | $$Offer.BillToStreetAddress$$ | String |
| Offer Bill To Street Address Additional Info | Single Item | $$Offer.BillToStreetAddressAdditionalInfo$$ | String |
| Offer Bill To Street Address Extension | Single Item | $$Offer.BillToStreetAddressExtension$$ | String |
| Offer Bill To VAT Number | Single Item | $$Offer.BillToVatNumber$$ | String |
| Offer Bill To Zip | Single Item | $$Offer.BillToZip$$ | String |
| Offer Carrier Account Name | Single Item | $$Offer.CarrierAccountName$$ | String |
| Offer Currency Code | Single Item | $$Offer.CurrencyCode$$ | String |
| Offer Currency Symbol | Single Item | $$Offer.CurrencySymbol$$ | String |
| Offer Customer Reference | Single Item | $$Offer.CustomerReference$$ | String |
| Offer Discount Excluding VAT | Single Item | $$Offer.DiscountExVat$$ | String |
| Offer Discount Including VAT | Single Item | $$Offer.DiscountIncVat$$ | String |
| Offer Has Rows With Discount | Single Item | $$Offer.HasRowsWithDiscount$$ | Boolean |
| Offer ID | Single Item | $$Offer.Id$$ | String |
| Offer Note | Single Item | $$Offer.Note$$ | String |
| Offer Code | Single Item | $$Offer.OfferCode$$ | String |
| Offer Date | Single Item | $$Offer.OfferDate$$ | Date and Time |
| Offer Products As HTML Table | Single Item | $$Offer.OfferProductsAsHtmlTable$$ | HTML table - ***Outdated*** |
| Offer Rows As HTML Table | Single Item | $$Offer.OfferRowsAsHtmlTable$$ | HTML table - ***Outdated*** |
| Offer Rows Subtotal Excluding VAT | Single Item | $$Offer.OfferRowsSubtotalExVat$$ | Number |
| Offer Rows Subtotal Including VAT | Single Item | $$Offer.OfferRowsSubtotalIncVat$$ | Number |
| Offer Total Excluding VAT | Single Item | $$Offer.OfferTotalExVat$$ | Number |
| Offer Total Including VAT | Single Item | $$Offer.OfferTotalIncVat$$ | Number |
| Offer Total Including VAT In Base Currency | Single Item | $$Offer.OfferTotalIncVatInBaseCurrency$$ | Number |
| Offer Payment Type Code | Single Item | $$Offer.PaymentTypeCode$$ | String |
| Offer Shipping Costs Excluding VAT | Single Item | $$Offer.ShippingCostsExVat$$ | Number |
| Offer Shipping Costs Including VAT | Single Item | $$Offer.ShippingCostsIncVat$$ | Number |
| Offer Ship To Address | Single Item | $$Offer.ShipToAddress$$ | String |
| Offer Ship To Address 2 | Single Item | $$Offer.ShipToAddress2$$ | String |
| Offer Ship To City | Single Item | $$Offer.ShipToCity$$ | String |
| Offer Ship To Company | Single Item | $$Offer.ShipToCompany$$ | String |
| Offer Ship To Country | Single Item | $$Offer.ShipToCountry$$ | String |
| Offer Ship To Country Code | Single Item | $$Offer.ShipToCountryCode$$ | String |
| Offer Ship To Email | Single Item | $$Offer.ShipToEmail$$ | String |
| Offer Ship To Fax | Single Item | $$Offer.ShipToFax$$ | String |
| Offer Ship To First Name | Single Item | $$Offer.ShipToFirstName$$ | String |
| Offer Ship To Last Name | Single Item | $$Offer.ShipToLastName$$ | String |
| Offer Ship To Last Name Prefix | Single Item | $$Offer.ShipToLastNamePrefix$$ | String |
| Offer Ship To Name | Single Item | $$Offer.ShipToName$$ | String |
| Offer Ship To PersonTitle | Single Item | $$Offer.ShipToPersonTitle$$ | String |
| Offer Ship To Phone | Single Item | $$Offer.ShipToPhone$$ | String |
| Offer Ship To Phone2 | Single Item | $$Offer.ShipToPhone2$$ | String |
| Offer Ship To State | Single Item | $$Offer.ShipToState$$ | String |
| Offer Ship To State Province | Single Item | $$Offer.ShipToStateProvince$$ | String |
| Offer Ship To Street Address | Single Item | $$Offer.ShipToStreetAddress$$ | String |
| Offer Ship To Street Address Additional Info | Single Item | $$Offer.ShipToStreetAddressAdditionalInfo$$ | String |
| Offer Ship To Street Address Extension | Single Item | $$Offer.ShipToStreetAddressExtension$$ | String |
| Offer Ship To Zip | Single Item | $$Offer.ShipToZip$$ | String |
| Offer Validity Days | Single Item | $$Offer.ValidityDays$$ | Number |
| Offer Valid Until | Single Item | $$Offer.ValidUntil$$ | Date and Time |
| Offer VAT Total | Single Item | $$Offer.VatTotal$$ | Number |
| Offer Row Comment | OfferRow Collection | $$OfferRow.Comment$$ | String |
| Offer Row ID | OfferRow Collection | $$OfferRow.Id$$ | String |
| Offer Row Item Price Excluding VAT | OfferRow Collection | $$OfferRow.ItemPriceExVat$$ | Number |
| Offer Row Item Price Including VAT | OfferRow Collection | $$OfferRow.ItemPriceIncVat$$ | Number |
| Offer Row Item Quantity | OfferRow Collection | $$OfferRow.ItemQuantity$$ | Number |
| Offer Row Offer ID | OfferRow Collection | $$OfferRow.OfferId$$ | String |
| Offer Row Product Code | OfferRow Collection | $$OfferRow.ProductCode$$ | String |
| Offer Row Product Description | OfferRow Collection | $$OfferRow.ProductDescription$$ | String |
| Offer Row Product Name | OfferRow Collection | $$OfferRow.ProductName$$ | String |
| Offer Row Discount Excluding VAT | OfferRow Collection | $$OfferRow.RowDiscountExVat$$ | Number |
| Offer Row Discount Including VAT | OfferRow Collection | $$OfferRow.RowDiscountIncVat$$ | Number |
| Offer Row Total Excluding VAT | OfferRow Collection | $$OfferRow.RowTotalExVat$$ | Number |
| Offer Row Total Including VAT | OfferRow Collection | $$OfferRow.RowTotalIncVat$$ | Number |
| Offer Row VAT Amount | OfferRow Collection | $$OfferRow.RowVatAmount$$ | Number |
| Offer Row VAT perc | OfferRow Collection | $$OfferRow.Vatperc$$ | Number |
| Grouped VAT Sum Total Excluding VAT | GroupedVatSum Collection | $$GroupedVatSum.TotalExVat$$ | Number |
| Grouped VAT Sum Total Including VAT | GroupedVatSum Collection | $$GroupedVatSum.TotalIncVat$$ | Number |
| Grouped VAT Sum VAT Perc | GroupedVatSum Collection | $$GroupedVatSum.VatPerc$$ | Number |
| Grouped VAT Sum VAT Total | GroupedVatSum Collection | $$GroupedVatSum.VatTotal$$ | Number |
| Offer Bill To Bank BIC | Single Item | $$OfferBillTo.BankBic$$ | String |
| Offer Bill To Bank IBAN | Single Item | $$OfferBillTo.BankIban$$ | String |
| Offer Bill To Bank Number | Single Item | $$OfferBillTo.BankNr$$ | String |
| Offer Bill To Chamber of Commerce | Single Item | $$OfferBillTo.ChamberOfCommerce$$ | String |
| Offer Bill To Chamber of Commerce City | Single Item | $$OfferBillTo.ChamberOfCommerceCity$$ | String |
| Offer Bill To City | Single Item | $$OfferBillTo.City$$ | String |
| Offer Bill To Company Name | Single Item | $$OfferBillTo.CompanyName$$ | String |
| Offer Bill To Country Code | Single Item | $$OfferBillTo.CountryCode$$ | String |
| Offer Bill To Country Name | Single Item | $$OfferBillTo.CountryName$$ | String |
| Offer Bill To Display Name | Single Item | $$OfferBillTo.DisplayName$$ | String |
| Offer Bill To Email | Single Item | $$OfferBillTo.Email$$ | String |
| Offer Bill To Full Name | Single Item | $$OfferBillTo.FullName$$ | String |
| Offer Bill To Is Part Of The EU | Single Item | $$OfferBillTo.IsPartOfTheEu$$ | Boolean |
| Offer Bill To PersonTitle | Single Item | $$OfferBillTo.PersonTitle$$ | String |
| Offer Bill To Phone | Single Item | $$OfferBillTo.Phone$$ | String |
| Offer Bill To Phone2 | Single Item | $$OfferBillTo.Phone2$$ | String |
| Offer Bill To Postal Code | Single Item | $$OfferBillTo.PostalCode$$ | String |
| Offer Bill To State Province | Single Item | $$OfferBillTo.StateProvince$$ | String |
| Offer Bill To State Province Code | Single Item | $$OfferBillTo.StateProvinceCode$$ | String |
| Offer Bill To Street Address 1 | Single Item | $$OfferBillTo.StreetAddress1$$ | String |
| Offer Bill To Street Address 2 | Single Item | $$OfferBillTo.StreetAddress2$$ | String |
| Offer Bill To VAT Number | Single Item | $$OfferBillTo.VatNumber$$ | String |
| Offer Ship To Bank BIC | Single Item | $$OfferShipTo.BankBic$$ | String |
| Offer Ship To Bank IBAN | Single Item | $$OfferShipTo.BankIban$$ | String |
| Offer Ship To Bank Number | Single Item | $$OfferShipTo.BankNr$$ | String |
| Offer Ship To Chamber of Commerce | Single Item | $$OfferShipTo.ChamberOfCommerce$$ | String |
| Offer Ship To Chamber of Commerce City | Single Item | $$OfferShipTo.ChamberOfCommerceCity$$ | String |
| Offer Ship To City | Single Item | $$OfferShipTo.City$$ | String |
| Offer Ship To Company Name | Single Item | $$OfferShipTo.CompanyName$$ | String |
| Offer Ship To Country Code | Single Item | $$OfferShipTo.CountryCode$$ | String |
| Offer Ship To Country Name | Single Item | $$OfferShipTo.CountryName$$ | String |
| Offer Ship To Display Name | Single Item | $$OfferShipTo.DisplayName$$ | String |
| Offer Ship To Email | Single Item | $$OfferShipTo.Email$$ | String |
| Offer Ship To Full Name | Single Item | $$OfferShipTo.FullName$$ | String |
| Offer Ship To Is Part Of The EU | Single Item | $$OfferShipTo.IsPartOfTheEu$$ | Boolean |
| Offer Ship To PersonTitle | Single Item | $$OfferShipTo.PersonTitle$$ | String |
| Offer Ship To Phone | Single Item | $$OfferShipTo.Phone$$ | String |
| Offer Ship To Phone2 | Single Item | $$OfferShipTo.Phone2$$ | String |
| Offer Ship To Postal Code | Single Item | $$OfferShipTo.PostalCode$$ | String |
| Offer Ship To State Province | Single Item | $$OfferShipTo.StateProvince$$ | String |
| Offer Ship To State Province Code | Single Item | $$OfferShipTo.StateProvinceCode$$ | String |
| Offer Ship To Street Address 1 | Single Item | $$OfferShipTo.StreetAddress1$$ | String |
| Offer Ship To Street Address 2 | Single Item | $$OfferShipTo.StreetAddress2$$ | String |
| Offer Ship To VAT Number | Single Item | $$OfferShipTo.VatNumber$$ | String |

**Relations**
'OfferRow' links to 'OfferRow'

</details>

## Order Shipment

<details>
  <summary> Show the list of Order Shipment merge fields</summary>

| Merge field name                                                      | Merge field type                      | Merge field                                                      | Data type                   |
| --------------------------------------------------------------------- | ------------------------------------- | ---------------------------------------------------------------- | --------------------------- |
| Order Shipment Carrier Account Name                                   | Single Item                           | $$OrderShipment.CarrierAccountName$$                             | String                      |
| Order Shipment Cash On Delivery Payment                               | Single Item                           | $$OrderShipment.CashOnDeliveryPayment$$                          | String                      |
| Order Shipment Create Timestamp                                       | Single Item                           | $$OrderShipment.CreateTimestamp$$                                | Date and Time               |
| Order Shipment Delivery Date                                          | Single Item                           | $$OrderShipment.DeliveryDate$$                                   | Date and Time               |
| Order Shipment HandOver Timestamp                                     | Single Item                           | $$OrderShipment.HandOverTimestamp$$                              | Date and Time               |
| Order Shipment ID                                                     | Single Item                           | $$OrderShipment.Id$$                                             | String                      |
| Order Shipment Open Pick List Scan Code                               | Single Item                           | $$OrderShipment.OpenPickListScanCode$$                           | Scan Code                   |
| Order Shipment Order Rows As HTML Table                               | Single Item                           | $$OrderShipment.OrderRowsAsHtmlTable$$                           | HTML table - **_Outdated_** |
| Order Shipment Order Shipment Rows Without Article Code As HTML Table | Single Item                           | $$OrderShipment.OrderShipmentRowsWithoutArticleCodeAsHtmlTable$$ | HTML table - **_Outdated_** |
| Order Shipment PackageCount                                           | Single Item                           | $$OrderShipment.PackageCount$$                                   | Number                      |
| Order Shipment Parcel Carrier AppModule ID                            | Single Item                           | $$OrderShipment.ParcelCarrierAppModuleId$$                       | String                      |
| Order Shipment Preferred Ship Date                                    | Single Item                           | $$OrderShipment.PreferredShipDate$$                              | Date and Time               |
| Order Shipment Scan Code                                              | Single Item                           | $$OrderShipment.ScanCode$$                                       | Scan Code                   |
| Order Shipment Shipment Status                                        | Single Item                           | $$OrderShipment.ShipmentStatus$$                                 | String                      |
| Order Shipment Shipment Type                                          | Single Item                           | $$OrderShipment.ShipmentType$$                                   | String                      |
| Order Shipment Shipped Timestamp                                      | Single Item                           | $$OrderShipment.ShippedTimestamp$$                               | Date and Time               |
| Order Shipment Shipping Code                                          | Single Item                           | $$OrderShipment.ShippingCode$$                                   | String                      |
| Order Shipment Total Excluding VAT                                    | Single Item                           | $$OrderShipment.TotalExVat$$                                     | Number                      |
| Order Shipment Total Including VAT                                    | Single Item                           | $$OrderShipment.TotalIncVat$$                                    | Number                      |
| Order Shipment Total Item Quantity                                    | Single Item                           | $$OrderShipment.TotalItemQuantity$$                              | Number                      |
| Order Shipment Total VAT                                              | Single Item                           | $$OrderShipment.TotalVat$$                                       | Number                      |
| Order Shipment Total Volume, M3                                       | Single Item                           | $$OrderShipment.TotalVolumeM3$$                                  | Number                      |
| Order Shipment Total Weight, Kg                                       | Single Item                           | $$OrderShipment.TotalWeightKg$$                                  | Number                      |
| Order Shipment Tracking Code                                          | Single Item                           | $$OrderShipment.TrackingCode$$                                   | String                      |
| Order Shipment Weight                                                 | Single Item                           | $$OrderShipment.Weight$$                                         | Number                      |
| Pick Row Comment                                                      | PickRow Collection                    | $$PickRow.Comment$$                                              | String                      |
| Pick Row Ean                                                          | PickRow Collection                    | $$PickRow.Ean$$                                                  | String                      |
| Pick Row Expiry Date                                                  | PickRow Collection                    | $$PickRow.ExpiryDate$$                                           | Date and Time               |
| Pick Row Has Advanced Stock Items                                     | PickRow Collection                    | $$PickRow.HasAdvancedStockItems$$                                | Boolean                     |
| Pick Row Is Hard Expired                                              | PickRow Collection                    | $$PickRow.IsHardExpired$$                                        | Boolean                     |
| Pick Row Is Soft Expired                                              | PickRow Collection                    | $$PickRow.IsSoftExpired$$                                        | Boolean                     |
| Pick Row Location                                                     | PickRow Collection                    | $$PickRow.Location$$                                             | String                      |
| Pick Row Lot Number                                                   | PickRow Collection                    | $$PickRow.LotNumber$$                                            | String                      |
| Pick Row Order Code                                                   | PickRow Collection                    | $$PickRow.OrderCode$$                                            | String                      |
| Pick Row Order ID                                                     | PickRow Collection                    | $$PickRow.OrderId$$                                              | String                      |
| Pick Row Order Row ID                                                 | PickRow Collection                    | $$PickRow.OrderRowId$$                                           | String                      |
| Pick Row Order Shipment ID                                            | PickRow Collection                    | $$PickRow.OrderShipmentId$$                                      | String                      |
| Pick Row Product Code                                                 | PickRow Collection                    | $$PickRow.ProductCode$$                                          | String                      |
| Pick Row Product ID                                                   | PickRow Collection                    | $$PickRow.ProductId$$                                            | String                      |
| Pick Row Product Name                                                 | PickRow Collection                    | $$PickRow.ProductName$$                                          | String                      |
| Pick Row Product Requires Expiry Date                                 | PickRow Collection                    | $$PickRow.ProductRequiresExpiryDate$$                            | Boolean                     |
| Pick Row Product Requires Lot Number                                  | PickRow Collection                    | $$PickRow.ProductRequiresLotNumber$$                             | Boolean                     |
| Pick Row Product Requires Serial Number                               | PickRow Collection                    | $$PickRow.ProductRequiresSerialNumber$$                          | Boolean                     |
| Pick Row Qty Needed                                                   | PickRow Collection                    | $$PickRow.QtyNeeded$$                                            | Number                      |
| Pick Row Qty Picked                                                   | PickRow Collection                    | $$PickRow.QtyPicked$$                                            | Number                      |
| Pick Row Serial Number                                                | PickRow Collection                    | $$PickRow.SerialNumber$$                                         | String                      |
| Pick Row Stock Item ID                                                | PickRow Collection                    | $$PickRow.StockItemId$$                                          | String                      |
| Pick Row Warehouse LocationID                                         | PickRow Collection                    | $$PickRow.WarehouseLocationId$$                                  | String                      |
| Order Shipment Package Belt Size, M                                   | OrderShipmentPackage Collection       | $$OrderShipmentPackage.BeltSizeM$$                               | Number                      |
| Order Shipment Package Description                                    | OrderShipmentPackage Collection       | $$OrderShipmentPackage.Description$$                             | String                      |
| Order Shipment Package Height, Cm                                     | OrderShipmentPackage Collection       | $$OrderShipmentPackage.HeightCm$$                                | Number                      |
| Order Shipment Package Length, Cm                                     | OrderShipmentPackage Collection       | $$OrderShipmentPackage.LengthCm$$                                | Number                      |
| Order Shipment Package Order Shipment ID                              | OrderShipmentPackage Collection       | $$OrderShipmentPackage.OrderShipmentId$$                         | String                      |
| Order Shipment Package Tracking Code                                  | OrderShipmentPackage Collection       | $$OrderShipmentPackage.TrackingCode$$                            | String                      |
| Order Shipment Package Volume, M3                                     | OrderShipmentPackage Collection       | $$OrderShipmentPackage.VolumeM3$$                                | Number                      |
| Order Shipment Package Weight, Kg                                     | OrderShipmentPackage Collection       | $$OrderShipmentPackage.WeightKg$$                                | Number                      |
| Order Shipment Package Width, Cm                                      | OrderShipmentPackage Collection       | $$OrderShipmentPackage.WidthCm$$                                 | Number                      |
| Pack Row Allocation Item Quantity                                     | PackRow Collection                    | $$PackRow.AllocationItemQuantity$$                               | Number                      |
| Pack Row Comment                                                      | PackRow Collection                    | $$PackRow.Comment$$                                              | String                      |
| Pack Row ID                                                           | PackRow Collection                    | $$PackRow.Id$$                                                   | String                      |
| Pack Row Item Base Price Excluding VAT                                | PackRow Collection                    | $$PackRow.ItemBasePriceExVat$$                                   | Number                      |
| Pack Row Item Base Price Including VAT                                | PackRow Collection                    | $$PackRow.ItemBasePriceIncVat$$                                  | Number                      |
| Pack Row Item Price Excluding VAT                                     | PackRow Collection                    | $$PackRow.ItemPriceExVat$$                                       | Number                      |
| Pack Row Item Price Including VAT                                     | PackRow Collection                    | $$PackRow.ItemPriceIncVat$$                                      | Number                      |
| Pack Row Item Purchase Price                                          | PackRow Collection                    | $$PackRow.ItemPurchasePrice$$                                    | Number                      |
| Pack Row Item Quantity                                                | PackRow Collection                    | $$PackRow.ItemQuantity$$                                         | Number                      |
| Pack Row Item VAT Amount                                              | PackRow Collection                    | $$PackRow.ItemVatAmount$$                                        | Number                      |
| Pack Row Number Of Items Invoiced                                     | PackRow Collection                    | $$PackRow.NrOfItemsInvoiced$$                                    | Number                      |
| Pack Row Number Of Items Refunded                                     | PackRow Collection                    | $$PackRow.NrOfItemsRefunded$$                                    | Number                      |
| Pack Row OrderID                                                      | PackRow Collection                    | $$PackRow.OrderId$$                                              | String                      |
| Pack Row Order Shipment ID                                            | PackRow Collection                    | $$PackRow.OrderShipmentId$$                                      | String                      |
| Pack Row Product Code                                                 | PackRow Collection                    | $$PackRow.ProductCode$$                                          | String                      |
| Pack Row Product Country Of Origin                                    | PackRow Collection                    | $$PackRow.ProductCountryOfOrigin$$                               | String                      |
| Pack Row Product Description                                          | PackRow Collection                    | $$PackRow.ProductDescription$$                                   | String                      |
| Pack Row Product EAN                                                  | PackRow Collection                    | $$PackRow.ProductEAN$$                                           | String                      |
| Pack Row Product HS Code                                              | PackRow Collection                    | $$PackRow.ProductHscode$$                                        | String                      |
| Pack Row Product HS Code2                                             | PackRow Collection                    | $$PackRow.ProductHscode2$$                                       | String                      |
| Pack Row Product Name                                                 | PackRow Collection                    | $$PackRow.ProductName$$                                          | String                      |
| Pack Row Product Weight, Kg                                           | PackRow Collection                    | $$PackRow.ProductWeightKg$$                                      | Number                      |
| Pack Row Discount Excluding VAT                                       | PackRow Collection                    | $$PackRow.RowDiscountExVat$$                                     | Number                      |
| Pack Row Discount Including VAT                                       | PackRow Collection                    | $$PackRow.RowDiscountIncVat$$                                    | Number                      |
| Pack Row Total Excluding VAT                                          | PackRow Collection                    | $$PackRow.RowTotalExVat$$                                        | Number                      |
| Pack Row Total Including VAT                                          | PackRow Collection                    | $$PackRow.RowTotalIncVat$$                                       | Number                      |
| Pack Row VAT Amount                                                   | PackRow Collection                    | $$PackRow.RowVatAmount$$                                         | Number                      |
| Pack Row Shop Product Image Url                                       | PackRow Collection                    | $$PackRow.ShopProductImageUrl$$                                  | String                      |
| Pack Row Stock Status                                                 | PackRow Collection                    | $$PackRow.StockStatus$$                                          | String                      |
| Pack Row VAT perc                                                     | PackRow Collection                    | $$PackRow.Vatperc$$                                              | Number                      |
| Pack Row Supplier SKU                                                 | PackRow Collection                    | $$PackRow.SupplierSKU$$                                          | String                      |
| Pack Row Base Product Name                                            | PackRow Collection                    | $$PackRow.BaseProductName$$                                      | String                      |
| Ship From Bank BIC                                                    | Single Item                           | $$ShipFromContactInfo.BankBic$$                                  | String                      |
| Ship From Bank IBAN                                                   | Single Item                           | $$ShipFromContactInfo.BankIban$$                                 | String                      |
| Ship From Bank Number                                                 | Single Item                           | $$ShipFromContactInfo.BankNr$$                                   | String                      |
| Ship From Chamber of Commerce                                         | Single Item                           | $$ShipFromContactInfo.ChamberOfCommerce$$                        | String                      |
| Ship From Chamber of Commerce City                                    | Single Item                           | $$ShipFromContactInfo.ChamberOfCommerceCity$$                    | String                      |
| Ship From City                                                        | Single Item                           | $$ShipFromContactInfo.City$$                                     | String                      |
| Ship From Company Name                                                | Single Item                           | $$ShipFromContactInfo.CompanyName$$                              | String                      |
| Ship From Country Code                                                | Single Item                           | $$ShipFromContactInfo.CountryCode$$                              | String                      |
| Ship From Country Name                                                | Single Item                           | $$ShipFromContactInfo.CountryName$$                              | String                      |
| Ship From Display Name                                                | Single Item                           | $$ShipFromContactInfo.DisplayName$$                              | String                      |
| Ship From Email                                                       | Single Item                           | $$ShipFromContactInfo.Email$$                                    | String                      |
| Ship From Full Name                                                   | Single Item                           | $$ShipFromContactInfo.FullName$$                                 | String                      |
| Ship From Is Part Of The EU                                           | Single Item                           | $$ShipFromContactInfo.IsPartOfTheEu$$                            | Boolean                     |
| Ship From Person Title                                                | Single Item                           | $$ShipFromContactInfo.PersonTitle$$                              | String                      |
| Ship From Phone                                                       | Single Item                           | $$ShipFromContactInfo.Phone$$                                    | String                      |
| Ship From Phone2                                                      | Single Item                           | $$ShipFromContactInfo.Phone2$$                                   | String                      |
| Ship From Postal Code                                                 | Single Item                           | $$ShipFromContactInfo.PostalCode$$                               | String                      |
| Ship From State Province                                              | Single Item                           | $$ShipFromContactInfo.StateProvince$$                            | String                      |
| Ship From State Province Code                                         | Single Item                           | $$ShipFromContactInfo.StateProvinceCode$$                        | String                      |
| Ship From Street Address 1                                            | Single Item                           | $$ShipFromContactInfo.StreetAddress1$$                           | String                      |
| Ship From Street Address 2                                            | Single Item                           | $$ShipFromContactInfo.StreetAddress2$$                           | String                      |
| Ship From VAT Number                                                  | Single Item                           | $$ShipFromContactInfo.VatNumber$$                                | String                      |
| Transport Category Code                                               | TransportCategory Collection          | $$TransportCategory.Code$$                                       | String                      |
| Transport Category ID                                                 | TransportCategory Collection          | $$TransportCategory.Id$$                                         | String                      |
| Pack Row Product Registration Comment                                 | PackRowProductRegistration Collection | $$PackRowProductRegistration.Comment$$                           | String                      |
| Pack Row Product Registration Order Row ID                            | PackRowProductRegistration Collection | $$PackRowProductRegistration.OrderRowId$$                        | String                      |
| Pack Row Product Registration Serial Number                           | PackRowProductRegistration Collection | $$PackRowProductRegistration.SerialNumber$$                      | String                      |
| Pack Row Product Registration Use By Date                             | PackRowProductRegistration Collection | $$PackRowProductRegistration.UseByDate$$                         | Date and Time               |

**Relations**
'OrderShipmentPickRow' links to 'PickRow'
'OrderShipmentOrderShipmentPackage' links to 'OrderShipmentPackage'
'PackRows' links to 'PackRow'
**Relations based on current PackRow item**
'PackRowProductRegistration' links to 'PackRowProductRegistration'

</details>

## Parcel

<details>
  <summary> Show the list of Parcel merge fields</summary>

| Merge field name                          | Merge field type         | Merge field                              | Data type     |
| ----------------------------------------- | ------------------------ | ---------------------------------------- | ------------- |
| Parcel Carrier Account Additional Info1   | Single Item              | $$Parcel.CarrierAccountAdditionalInfo1$$ | String        |
| Parcel Carrier Account Additional Info2   | Single Item              | $$Parcel.CarrierAccountAdditionalInfo2$$ | String        |
| Parcel Carrier Account ID                 | Single Item              | $$Parcel.CarrierAccountId$$              | String        |
| Parcel Carrier Account Name               | Single Item              | $$Parcel.CarrierAccountName$$            | String        |
| Parcel Carrier AppModule ID               | Single Item              | $$Parcel.CarrierAppModuleId$$            | String        |
| Parcel Create Timestamp                   | Single Item              | $$Parcel.CreateTimestamp$$               | Date and Time |
| Parcel Delivered Date                     | Single Item              | $$Parcel.DeliveredDate$$                 | Date and Time |
| Parcel ID                                 | Single Item              | $$Parcel.Id$$                            | String        |
| Parcel Is Return                          | Single Item              | $$Parcel.IsReturn$$                      | Boolean       |
| Parcel Last Carrier Update                | Single Item              | $$Parcel.LastCarrierUpdate$$             | String        |
| Parcel Ship From Bank Bic                 | Single Item              | $$ParcelShipFrom.BankBic$$               | String        |
| Parcel Ship From Bank Iban                | Single Item              | $$ParcelShipFrom.BankIban$$              | String        |
| Parcel Ship From Bank Number              | Single Item              | $$ParcelShipFrom.BankNr$$                | String        |
| Parcel Ship From Chamber of Commerce      | Single Item              | $$ParcelShipFrom.ChamberOfCommerce$$     | String        |
| Parcel Ship From Chamber of Commerce City | Single Item              | $$ParcelShipFrom.ChamberOfCommerceCity$$ | String        |
| Parcel Ship From City                     | Single Item              | $$ParcelShipFrom.City$$                  | String        |
| Parcel Ship From Company Name             | Single Item              | $$ParcelShipFrom.CompanyName$$           | String        |
| Parcel Ship From Country Code             | Single Item              | $$ParcelShipFrom.CountryCode$$           | String        |
| Parcel Ship From Country Name             | Single Item              | $$ParcelShipFrom.CountryName$$           | String        |
| Parcel Ship From Display Name             | Single Item              | $$ParcelShipFrom.DisplayName$$           | String        |
| Parcel Ship From Email                    | Single Item              | $$ParcelShipFrom.Email$$                 | String        |
| Parcel Ship From Full Name                | Single Item              | $$ParcelShipFrom.FullName$$              | String        |
| Parcel Ship From Is Part Of The EU        | Single Item              | $$ParcelShipFrom.IsPartOfTheEu$$         | Boolean       |
| Parcel Ship From PersonTitle              | Single Item              | $$ParcelShipFrom.PersonTitle$$           | String        |
| Parcel Ship From Phone                    | Single Item              | $$ParcelShipFrom.Phone$$                 | String        |
| Parcel Ship From Phone2                   | Single Item              | $$ParcelShipFrom.Phone2$$                | String        |
| Parcel Ship From Postal Code              | Single Item              | $$ParcelShipFrom.PostalCode$$            | String        |
| Parcel Ship From State Province           | Single Item              | $$ParcelShipFrom.StateProvince$$         | String        |
| Parcel Ship From State Province Code      | Single Item              | $$ParcelShipFrom.StateProvinceCode$$     | String        |
| Parcel Ship From Street Address 1         | Single Item              | $$ParcelShipFrom.StreetAddress1$$        | String        |
| Parcel Ship From Street Address 2         | Single Item              | $$ParcelShipFrom.StreetAddress2$$        | String        |
| Parcel Ship From VAT Number               | Single Item              | $$ParcelShipFrom.VatNumber$$             | String        |
| Parcel Ship To Bank Bic                   | Single Item              | $$ParcelShipTo.BankBic$$                 | String        |
| Parcel Ship To Bank Iban                  | Single Item              | $$ParcelShipTo.BankIban$$                | String        |
| Parcel Ship To Bank Number                | Single Item              | $$ParcelShipTo.BankNr$$                  | String        |
| Parcel Ship To Chamber of Commerce        | Single Item              | $$ParcelShipTo.ChamberOfCommerce$$       | String        |
| Parcel Ship To Chamber of Commerce City   | Single Item              | $$ParcelShipTo.ChamberOfCommerceCity$$   | String        |
| Parcel Ship To City                       | Single Item              | $$ParcelShipTo.City$$                    | String        |
| Parcel Ship To Company Name               | Single Item              | $$ParcelShipTo.CompanyName$$             | String        |
| Parcel Ship To Country Code               | Single Item              | $$ParcelShipTo.CountryCode$$             | String        |
| Parcel Ship To Country Name               | Single Item              | $$ParcelShipTo.CountryName$$             | String        |
| Parcel Ship To Display Name               | Single Item              | $$ParcelShipTo.DisplayName$$             | String        |
| Parcel Ship To Email                      | Single Item              | $$ParcelShipTo.Email$$                   | String        |
| Parcel Ship To Full Name                  | Single Item              | $$ParcelShipTo.FullName$$                | String        |
| Parcel Ship To Is Part Of The EU          | Single Item              | $$ParcelShipTo.IsPartOfTheEu$$           | Boolean       |
| Parcel Ship To Person Title               | Single Item              | $$ParcelShipTo.PersonTitle$$             | String        |
| Parcel Ship To Phone                      | Single Item              | $$ParcelShipTo.Phone$$                   | String        |
| Parcel Ship To Phone2                     | Single Item              | $$ParcelShipTo.Phone2$$                  | String        |
| Parcel Ship To Postal Code                | Single Item              | $$ParcelShipTo.PostalCode$$              | String        |
| Parcel Ship To State Province             | Single Item              | $$ParcelShipTo.StateProvince$$           | String        |
| Parcel Ship To State Province Code        | Single Item              | $$ParcelShipTo.StateProvinceCode$$       | String        |
| Parcel Ship To Street Address 1           | Single Item              | $$ParcelShipTo.StreetAddress1$$          | String        |
| Parcel Ship To Street Address 2           | Single Item              | $$ParcelShipTo.StreetAddress2$$          | String        |
| Parcel Ship To VAT Number                 | Single Item              | $$ParcelShipTo.VatNumber$$               | String        |
| Parcel Package Height, Cm                 | ParcelPackage Collection | $$ParcelPackage.HeightCm$$               | Number        |
| Parcel Package Label Image                | ParcelPackage Collection | $$ParcelPackage.LabelImage$$             | Image         |
| Parcel Package Length, Cm                 | ParcelPackage Collection | $$ParcelPackage.LengthCm$$               | Number        |
| Parcel Package Parcel ID                  | ParcelPackage Collection | $$ParcelPackage.ParcelId$$               | String        |
| Parcel Package Tracking Code              | ParcelPackage Collection | $$ParcelPackage.TrackingCode$$           | String        |
| Parcel Package Tracking Url               | ParcelPackage Collection | $$ParcelPackage.TrackingUrl$$            | String        |
| Parcel Package Weight, Kg                 | ParcelPackage Collection | $$ParcelPackage.WeightKg$$               | Number        |
| Parcel Package Width, Cm                  | ParcelPackage Collection | $$ParcelPackage.WidthCm$$                | Number        |

**Relations**
'ParcelPackage' links to 'ParcelPackage'

</details>

## Purchase Order

<details>
  <summary> Show the list of Purchase Order merge fields</summary>

| Merge field name                                | Merge field type            | Merge field                                   | Data type                   |
| ----------------------------------------------- | --------------------------- | --------------------------------------------- | --------------------------- |
| Purchase Order Comment                          | Single Item                 | $$PurchaseOrder.Comment$$                     | String                      |
| Purchase Order Currency Symbol                  | Single Item                 | $$PurchaseOrder.CurrencySymbol$$              | String                      |
| Purchase Order Date                             | Single Item                 | $$PurchaseOrder.Date$$                        | Date and Time               |
| Purchase Order Dropship Order Code              | Single Item                 | $$PurchaseOrder.DropshipOrderCode$$           | String                      |
| Purchase Order Expected Delivery Date           | Single Item                 | $$PurchaseOrder.ExpectedDeliveryDate$$        | Date and Time               |
| Purchase Order ID                               | Single Item                 | $$PurchaseOrder.Id$$                          | String                      |
| Purchase Order Code                             | Single Item                 | $$PurchaseOrder.OrderCode$$                   | Number                      |
| Purchase Order Rows As HTML Table               | Single Item                 | $$PurchaseOrder.OrderRowsAsHtmlTable$$        | HTML table - **_Outdated_** |
| Purchase Order Rows Subtotal Excluding VAT      | Single Item                 | $$PurchaseOrder.OrderRowsSubtotalExVat$$      | Number                      |
| Purchase Order Total Excluding VAT              | Single Item                 | $$PurchaseOrder.OrderTotalExVat$$             | Number                      |
| Purchase Order Our Reference                    | Single Item                 | $$PurchaseOrder.OurReference$$                | String                      |
| Purchase Order Shipping Costs Excluding VAT     | Single Item                 | $$PurchaseOrder.ShippingCostsExVat$$          | Number                      |
| Purchase Order Supplier Invoice Code            | Single Item                 | $$PurchaseOrder.SupplierInvoiceCode$$         | String                      |
| Purchase Order Supplier Note                    | Single Item                 | $$PurchaseOrder.SupplierNote$$                | String                      |
| Purchase Order Row Comment                      | PurchaseOrderRow Collection | $$PurchaseOrderRow.Comment$$                  | String                      |
| Purchase Order Row ID                           | PurchaseOrderRow Collection | $$PurchaseOrderRow.Id$$                       | String                      |
| Purchase Order Row Is Delivered                 | PurchaseOrderRow Collection | $$PurchaseOrderRow.IsDelivered$$              | Boolean                     |
| Purchase Order Row Item Price Excluding VAT     | PurchaseOrderRow Collection | $$PurchaseOrderRow.ItemPriceExVat$$           | Number                      |
| Purchase Order Row Item Quantity                | PurchaseOrderRow Collection | $$PurchaseOrderRow.ItemQuantity$$             | Number                      |
| Purchase Order Row Item Quantity Delivered      | PurchaseOrderRow Collection | $$PurchaseOrderRow.ItemQuantityDelivered$$    | Number                      |
| Purchase Order Row Item Quantity Outstanding    | PurchaseOrderRow Collection | $$PurchaseOrderRow.ItemQuantityOutstanding$$  | Number                      |
| Purchase Order Row Product Code                 | PurchaseOrderRow Collection | $$PurchaseOrderRow.ProductCode$$              | String                      |
| Purchase Order Row Product Description          | PurchaseOrderRow Collection | $$PurchaseOrderRow.ProductDescription$$       | String                      |
| Purchase Order Row Product Name                 | PurchaseOrderRow Collection | $$PurchaseOrderRow.ProductName$$              | String                      |
| Purchase Order Row Purchase Order ID            | PurchaseOrderRow Collection | $$PurchaseOrderRow.PurchaseOrderId$$          | String                      |
| Purchase Order Row Total Excluding VAT          | PurchaseOrderRow Collection | $$PurchaseOrderRow.RowTotalExVat$$            | Number                      |
| Purchase Order Row Supplier Sku                 | PurchaseOrderRow Collection | $$PurchaseOrderRow.SupplierSku$$              | String                      |
| Purchase Order Bill To Bank BIC                 | Single Item                 | $$PurchaseOrderBillTo.BankBic$$               | String                      |
| Purchase Order Bill To Bank IBAN                | Single Item                 | $$PurchaseOrderBillTo.BankIban$$              | String                      |
| Purchase Order Bill To Bank Number              | Single Item                 | $$PurchaseOrderBillTo.BankNr$$                | String                      |
| Purchase Order Bill To Chamber of Commerce      | Single Item                 | $$PurchaseOrderBillTo.ChamberOfCommerce$$     | String                      |
| Purchase Order Bill To Chamber of Commerce City | Single Item                 | $$PurchaseOrderBillTo.ChamberOfCommerceCity$$ | String                      |
| Purchase Order Bill To City                     | Single Item                 | $$PurchaseOrderBillTo.City$$                  | String                      |
| Purchase Order Bill To Company Name             | Single Item                 | $$PurchaseOrderBillTo.CompanyName$$           | String                      |
| Purchase Order Bill To Country Code             | Single Item                 | $$PurchaseOrderBillTo.CountryCode$$           | String                      |
| Purchase Order Bill To Country Name             | Single Item                 | $$PurchaseOrderBillTo.CountryName$$           | String                      |
| Purchase Order Bill To Display Name             | Single Item                 | $$PurchaseOrderBillTo.DisplayName$$           | String                      |
| Purchase Order Bill To Email                    | Single Item                 | $$PurchaseOrderBillTo.Email$$                 | String                      |
| Purchase Order Bill To Full Name                | Single Item                 | $$PurchaseOrderBillTo.FullName$$              | String                      |
| Purchase Order Bill To Is Part Of The EU        | Single Item                 | $$PurchaseOrderBillTo.IsPartOfTheEu$$         | Boolean                     |
| Purchase Order Bill To Person Title             | Single Item                 | $$PurchaseOrderBillTo.PersonTitle$$           | String                      |
| Purchase Order Bill To Phone                    | Single Item                 | $$PurchaseOrderBillTo.Phone$$                 | String                      |
| Purchase Order Bill To Phone2                   | Single Item                 | $$PurchaseOrderBillTo.Phone2$$                | String                      |
| Purchase Order Bill To Postal Code              | Single Item                 | $$PurchaseOrderBillTo.PostalCode$$            | String                      |
| Purchase Order Bill To State Province           | Single Item                 | $$PurchaseOrderBillTo.StateProvince$$         | String                      |
| Purchase Order Bill To State Province Code      | Single Item                 | $$PurchaseOrderBillTo.StateProvinceCode$$     | String                      |
| Purchase Order Bill To Street Address 1         | Single Item                 | $$PurchaseOrderBillTo.StreetAddress1$$        | String                      |
| Purchase Order Bill To Street Address 2         | Single Item                 | $$PurchaseOrderBillTo.StreetAddress2$$        | String                      |
| Purchase Order Bill To VAT Number               | Single Item                 | $$PurchaseOrderBillTo.VatNumber$$             | String                      |
| Purchase Order Bank BIC                         | Single Item                 | $$PurchaseOrderShipTo.BankBic$$               | String                      |
| Purchase Order Bank IBAN                        | Single Item                 | $$PurchaseOrderShipTo.BankIban$$              | String                      |
| Purchase Order Bank Number                      | Single Item                 | $$PurchaseOrderShipTo.BankNr$$                | String                      |
| Purchase Order Chamber of Commerce              | Single Item                 | $$PurchaseOrderShipTo.ChamberOfCommerce$$     | String                      |
| Purchase Order Chamber of Commerce City         | Single Item                 | $$PurchaseOrderShipTo.ChamberOfCommerceCity$$ | String                      |
| Purchase Order City                             | Single Item                 | $$PurchaseOrderShipTo.City$$                  | String                      |
| Purchase Order Company Name                     | Single Item                 | $$PurchaseOrderShipTo.CompanyName$$           | String                      |
| Purchase Order Country Code                     | Single Item                 | $$PurchaseOrderShipTo.CountryCode$$           | String                      |
| Purchase Order Country Name                     | Single Item                 | $$PurchaseOrderShipTo.CountryName$$           | String                      |
| Purchase Order Display Name                     | Single Item                 | $$PurchaseOrderShipTo.DisplayName$$           | String                      |
| Purchase Order Email                            | Single Item                 | $$PurchaseOrderShipTo.Email$$                 | String                      |
| Purchase Order Full Name                        | Single Item                 | $$PurchaseOrderShipTo.FullName$$              | String                      |
| Purchase Order Is Part Of The EU                | Single Item                 | $$PurchaseOrderShipTo.IsPartOfTheEu$$         | Boolean                     |
| Purchase Order PersonTitle                      | Single Item                 | $$PurchaseOrderShipTo.PersonTitle$$           | String                      |
| Purchase Order Phone                            | Single Item                 | $$PurchaseOrderShipTo.Phone$$                 | String                      |
| Purchase Order Phone2                           | Single Item                 | $$PurchaseOrderShipTo.Phone2$$                | String                      |
| Purchase Order Postal Code                      | Single Item                 | $$PurchaseOrderShipTo.PostalCode$$            | String                      |
| Purchase Order State Province                   | Single Item                 | $$PurchaseOrderShipTo.StateProvince$$         | String                      |
| Purchase Order State Province Code              | Single Item                 | $$PurchaseOrderShipTo.StateProvinceCode$$     | String                      |
| Purchase Order Street Address 1                 | Single Item                 | $$PurchaseOrderShipTo.StreetAddress1$$        | String                      |
| Purchase Order Street Address 2                 | Single Item                 | $$PurchaseOrderShipTo.StreetAddress2$$        | String                      |
| Purchase Order VAT Number                       | Single Item                 | $$PurchaseOrderShipTo.VatNumber$$             | String                      |

**Relations**
PurchaseOrderRow' links to 'PurchaseOrderRow'

</details>

## Supplier

<details>
  <summary> Show the list of Supplier merge fields</summary>

| Merge field name                  | Merge field type | Merge field                                   | Data type |
| --------------------------------- | ---------------- | --------------------------------------------- | --------- |
| Supplier Company Name             | Single Item      | $$Supplier.CompanyName$$                      | String    |
| Supplier Contact Ref              | Single Item      | $$Supplier.ContactRef$$                       | String    |
| Supplier First Name               | Single Item      | $$Supplier.FirstName$$                        | String    |
| Supplier Full Name                | Single Item      | $$Supplier.FullName$$                         | String    |
| Supplier Last Name                | Single Item      | $$Supplier.LastName$$                         | String    |
| Supplier Last Name Prefix         | Single Item      | $$Supplier.LastNamePrefix$$                   | String    |
| Supplier Middle Name              | Single Item      | $$Supplier.MiddleName$$                       | String    |
| Supplier Person Title             | Single Item      | $$Supplier.PersonTitle$$                      | String    |
| Supplier Bank BIC                 | Single Item      | $$SupplierContactInfo.BankBic$$               | String    |
| Supplier Bank IBAN                | Single Item      | $$SupplierContactInfo.BankIban$$              | String    |
| Supplier Bank Number              | Single Item      | $$SupplierContactInfo.BankNr$$                | String    |
| Supplier Chamber of Commerce      | Single Item      | $$SupplierContactInfo.ChamberOfCommerce$$     | String    |
| Supplier Chamber of Commerce City | Single Item      | $$SupplierContactInfo.ChamberOfCommerceCity$$ | String    |
| Supplier City                     | Single Item      | $$SupplierContactInfo.City$$                  | String    |
| Supplier Company Name             | Single Item      | $$SupplierContactInfo.CompanyName$$           | String    |
| Supplier Country Code             | Single Item      | $$SupplierContactInfo.CountryCode$$           | String    |
| Supplier Country Name             | Single Item      | $$SupplierContactInfo.CountryName$$           | String    |
| Supplier Display Name             | Single Item      | $$SupplierContactInfo.DisplayName$$           | String    |
| Supplier Email                    | Single Item      | $$SupplierContactInfo.Email$$                 | String    |
| Supplier Full Name                | Single Item      | $$SupplierContactInfo.FullName$$              | String    |
| Supplier Is Part Of The EU        | Single Item      | $$SupplierContactInfo.IsPartOfTheEu$$         | Boolean   |
| Supplier PersonTitle              | Single Item      | $$SupplierContactInfo.PersonTitle$$           | String    |
| Supplier Phone                    | Single Item      | $$SupplierContactInfo.Phone$$                 | String    |
| Supplier Phone2                   | Single Item      | $$SupplierContactInfo.Phone2$$                | String    |
| Supplier Postal Code              | Single Item      | $$SupplierContactInfo.PostalCode$$            | String    |
| Supplier State Province           | Single Item      | $$SupplierContactInfo.StateProvince$$         | String    |
| Supplier State Province Code      | Single Item      | $$SupplierContactInfo.StateProvinceCode$$     | String    |
| Supplier Street Address 1         | Single Item      | $$SupplierContactInfo.StreetAddress1$$        | String    |
| Supplier Street Address 2         | Single Item      | $$SupplierContactInfo.StreetAddress2$$        | String    |
| Supplier VAT Number               | Single Item      | $$SupplierContactInfo.VatNumber$$             | String    |

</details>

## Warehouse

<details>
  <summary> Show the list of Warehouse merge fields</summary>

| Merge field name             | Merge field type | Merge field                    | Data type |
| ---------------------------- | ---------------- | ------------------------------ | --------- |
| Warehouse Name               | Single Item      | $$Warehouse.Name$$             | String    |
| Warehouse Priority           | Single Item      | $$Warehouse.Priority$$         | String    |
| Warehouse Type               | Single Item      | $$Warehouse.WarehouseType$$    | String    |
| Warehouse Location Aisle     | Single Item      | $$WarehouseLocation.Aisle$$    | String    |
| Warehouse Location Bay       | Single Item      | $$WarehouseLocation.Bay$$      | String    |
| Warehouse Location Bin       | Single Item      | $$WarehouseLocation.Bin$$      | String    |
| Warehouse Location ID        | Single Item      | $$WarehouseLocation.Id$$       | String    |
| Warehouse Location Name      | Single Item      | $$WarehouseLocation.Name$$     | String    |
| Warehouse Location Scan Code | Single Item      | $$WarehouseLocation.ScanCode$$ | Scan Code |
| Warehouse Location Shelf     | Single Item      | $$WarehouseLocation.Shelf$$    | String    |

### Stock Item

| Merge field name             | Merge field type | Merge field                   | Data type     |
| ---------------------------- | ---------------- | ----------------------------- | ------------- |
| Stock Item Comment           | Single Item      | $$StockItem.Comment$$         | String        |
| Stock Item Expiry Date       | Single Item      | $$StockItem.ExpiryDate$$      | Date and Time |
| Stock Item ID                | Single Item      | $$StockItem.Id$$              | String        |
| Stock Item Lot Number        | Single Item      | $$StockItem.LotNumber$$       | String        |
| Stock Item Scan Code         | Single Item      | $$StockItem.ScanCode$$        | Scan Code     |
| Stock Item Serial Number     | Single Item      | $$StockItem.SerialNumber$$    | String        |
| Stock Item Stock Item Status | Single Item      | $$StockItem.StockItemStatus$$ | String        |

</details>

## Product

<details>
  <summary> Show the list of Product merge fields</summary>

| Merge field name                      | Merge field type | Merge field                           | Data type     |
| ------------------------------------- | ---------------- | ------------------------------------- | ------------- |
| Product Changed Timestamp             | Single Item      | $$Product.ChangedTimestamp$$          | Date and Time |
| Product Code                          | Single Item      | $$Product.Code$$                      | String        |
| Product Creation Date                 | Single Item      | $$Product.CreationDate$$              | Date and Time |
| Product Diameter                      | Single Item      | $$Product.Diameter$$                  | Number        |
| Product Height                        | Single Item      | $$Product.Height$$                    | Number        |
| Product Is Shippable                  | Single Item      | $$Product.IsShippable$$               | Boolean       |
| Product Keep Stock                    | Single Item      | $$Product.KeepStock$$                 | Boolean       |
| Product Length                        | Single Item      | $$Product.Length$$                    | Number        |
| Product Price Excluding VAT           | Single Item      | $$Product.PriceExVat$$                | Number        |
| Product Price UoM ID                  | Single Item      | $$Product.PriceUomId$$                | String        |
| Product Group                         | Single Item      | $$Product.ProductProductGroup$$       | String        |
| Product Property Def Set ID           | Single Item      | $$Product.ProductPropertyDefSetId$$   | String        |
| Product Published                     | Single Item      | $$Product.Published$$                 | Boolean       |
| Product Qty Available                 | Single Item      | $$Product.QtyAvailable$$              | Number        |
| Product Qty On Hand                   | Single Item      | $$Product.QtyOnHand$$                 | Number        |
| Product Qty Ordered                   | Single Item      | $$Product.QtyOrdered$$                | Number        |
| Product Qty Reserved                  | Single Item      | $$Product.QtyReserved$$               | String        |
| Product Ref Code                      | Single Item      | $$Product.RefCode$$                   | String        |
| Product Requires Expiry Date          | Single Item      | $$Product.RequiresExpiryDate$$        | Boolean       |
| Product Requires Lot Number           | Single Item      | $$Product.RequiresLotNumber$$         | Boolean       |
| Product Requires Serial Number        | Single Item      | $$Product.RequiresSerialNumber$$      | Boolean       |
| Product Scan Code                     | Single Item      | $$Product.ScanCode$$                  | Scan Code     |
| Product Size UoM ID                   | Single Item      | $$Product.SizeUomId$$                 | String        |
| Product Storage Life Pre-Warning Days | Single Item      | $$Product.StorageLifePreWarningDays$$ | Number        |
| Product Volume                        | Single Item      | $$Product.Volume$$                    | Number        |
| Product Volume UoM ID                 | Single Item      | $$Product.VolumeUomId$$               | String        |
| Product Weight                        | Single Item      | $$Product.Weight$$                    | Number        |
| Product Weight UoM ID                 | Single Item      | $$Product.WeightUomId$$               | String        |
| Product Width                         | Single Item      | $$Product.Width$$                     | Number        |
| Product Name                          | Single Item      | $$Product.Name$$                      | String        |
| Product Description                   | Single Item      | $$Product.Description$$               | String        |
| Product Description Long              | Single Item      | $$Product.DescriptionLong$$           | String        |

</details>

## Alerts notification

<details>
  <summary> Show the list of Alerts merge fields</summary>

| Merge field name                | Merge field type  | Merge field                              | Data type     |
| ------------------------------- | ----------------- | ---------------------------------------- | ------------- |
| Unread alert notification count | Single Item       | $$UnreadAlertNotification.Count$$        | Number        |
| Alert url                       | Single Item       | $$UnreadAlertNotification.AlertPageUrl$$ | Url           |
| Main Shop name                  | Single Item       | $$UnreadAlertNotification.MainShopName$$ | String        |
| Single or plural suffix         | Single Item       | $$UnreadAlertNotification.PluralSuffix$$ | String        |
| Alert Id                        | Alerts Collection | $$Alerts.Id$$                            | Number        |
| Alerts Title                    | Alerts Collection | $$Alerts.Title$$                         | String        |
| Alerts Category                 | Alerts Collection | $$Alerts.Category$$                      | String        |
| Alerts Severity                 | Alerts Collection | $$Alerts.SeverityStr$$                   | String        |
| Alerts Create Timestamp         | Alerts Collection | $$Alerts.CreateTimestamp$$               | Date and Time |
| Alerts ChangedTimestamp         | Alerts Collection | $$Alerts.ChangedTimestamp$$              | Date and Time |

</details>

## Order Return

<details>
  <summary> Show the list of Order Return merge fields</summary>

| Merge field name                       | Merge field type | Merge field                           | Data type             |
| -------------------------------------- | ---------------- | ------------------------------------- | --------------------- |
| Order Return CloseDate                 | Single item      | $$OrderReturn.CloseDate$$             | Date/Time             |
| Order Return CreatedTimestamp          | Single item      | $$OrderReturn.CreatedTimestamp$$      | Date/Time             |
| Order Return FollowUpDate              | Single item      | $$OrderReturn.FollowUpDate$$          | Date/Time             |
| Order Return Id                        | Single item      | $$OrderReturn.Id$$                    | Number                |
| Order Return Received Date             | Single item      | $$OrderReturn.ReceivedDate$$          | Date/Time             |
| Order Return Return Code               | Single item      | $$OrderReturn.ReturnCode$$            | String                |
| Order Return Return Rows As Html Table | Single item      | $$OrderReturn.ReturnRowsAsHtmlTable$$ | HTML table - Outdated |
| Order Return ScanCode                  | Single item      | $$OrderReturn.ScanCode$$              | String                |
| Order Return Row Approved Quantity     | Collection       | $$OrderReturnRow.ApprovedQuantity$$   | Number                |
| Order Return Row Id                    | Collection       | $$OrderReturnRow.Id$$                 | Number                |
| Order Return Row Order Return Id       | Collection       | $$OrderReturnRow.OrderReturnId$$      | Number                |
| Order Return Row Product Code          | Collection       | $$OrderReturnRow.ProductCode$$        | String                |
| Order Return Row Product Name          | Collection       | $$OrderReturnRow.ProductName$$        | String                |
| Order Return Row Refund Amount         | Collection       | $$OrderReturnRow.RefundAmount$$       | Number                |
| Order Return Row Returned Quantity     | Collection       | $$OrderReturnRow.ReturnedQuantity$$   | Number                |

</details>
