---
sidebar_position: 1
slug: /docs/import-supplier-products
---

# New easy way to Import Supplier Products 

ShopCtrl added a new way to edit supplier purchase prices.
It is done via excel product import. 
The important difference is that it could be done for multiple products and suppliers at once.
This type of import also supports update of tier-prices per supplier purchase prices.

Profile could be created from the Product > Product export/import profiles.

1. Log in as shopowner admin
1. Go to Product > Product export/import profiles.
1. Click Add to create new profile
1. Select Profile type: Product Purchase Price
1. Provide Profile name
1. Select how many rows does the Header take - default 1.
1. Select file Encoding
1. Enter field separator - default `;`
1. By default all of the properties are included. There are only few optional properties.
1. You can rearrange the fields to match your desired order. 
    - SupplierId
    - Sku
    - SupplierSku
    - PriceExVat
    - ForeignPriceExVat
    - QtyAndAbove
    - SupplierName (optional)
    - ProductName (optional)
1. Once finished - Save the profile.




The important notice is that Supplier Id is a required field in this profile. Tier prices are specified with new rows for the same Supplier. 
Leave the column QtyAndAbove empty if this is a regular price.

Supplier quoted regular price at 15 
above 10 qty - 14
above 100 - 13.
Those prices could be edited this way:
SupplierId	Sku	SupplierSku	PriceExVat	ForeignPriceExVat	QtyAndAbove	SupplierName	ProductName	
1235	AED-002	AED-002	15			Regular supplier	AED product 002 	
1235	AED-002	AED-002	14		10	Regular supplier	AED product 002 	
1235	AED-002	AED-002	13		100	Regular supplier	AED product 002 	

It will look like this after import:
pic.1

Important! Only provide either PriceExVat or ForeignPriceExVat. The empty one is being calculated based on current exchange rates.
Important! Make sure to include all tier-prices in the source file.
The import deletes existing tier-prices for the provided Supplier & Product combination if QtyAndAbove is specified.


You can use the same profile to export existing prices.

Go to Products. 
On the Export tab select the profile you created for Purchase Prices 
Select Export current page or Export All  
(Exporting Selection with profiles is currently not supported.)
File begins to be downloaded in the background. 

All the existing quoted Supplier purchase prices are downloaded in this profile.



How to delete price quoted by a supplier?
    quote 0 for the specific supplier id and ShopCtrl product code.

How to create  purchase price for new supplier?
    add new row, specifuy supplier id and provide price data


