---
sidebar_position: 10
slug: /docs/invoice-troubleshooting
description: "Los veelvoorkomende fouten op bij het aanmaken of mailen van facturen in ShopCtrl: order in de wacht, regels al gefactureerd, ontbrekende betalingsvoorwaarden, factuurstatus, document- of e-mailsjabloon."
---

# Probleemoplossing bij facturen

De foutmeldingen staan in het Engels, zoals ShopCtrl ze toont.

## Fouten bij het aanmaken van een factuur {#errors-when-creating-an-invoice}

| Melding | Wat u kunt doen |
|---|---|
| Unable to create an invoice for order '…'. The order is OnHold or Cancelled. | Wijzig de hoofdstatus van de order in een actieve status. Zie [Een order bewerken](/User-Guide/04-Order-Management/02-Orders/edit-order.md). |
| All order rows are already invoiced. Unable to create a new invoice. | Er valt niets meer te factureren. Om een factuur te corrigeren, maakt u een [creditfactuur](/User-Guide/05-Financial/Invoices/credit-invoice.md) aan. |
| Unable to determine default payment terms for a new invoice. Please configure default Payment terms for the shop. | Stel standaardbetalingsvoorwaarden in bij de shopinstellingen. |
| There is no default Main status configured for Invoices. | Stel een standaardhoofdstatus voor facturen in. |
| There is no template available to create the Invoice document. | Stel in de shopinstellingen een standaarddocumentsjabloon voor facturen in. Zie [Facturatie configureren](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/configure-invoicing.md#set-the-default-invoice-templates). |

## Fouten bij het verwijderen van een factuur {#errors-when-deleting-an-invoice}

| Melding | Wat u kunt doen |
|---|---|
| Can't delete an invoice when it does not have the status New. | Wijzig eerst de hoofdstatus van de factuur in **Draft**. Zie [Een factuur verwijderen](/User-Guide/05-Financial/Invoices/delete-invoice.md). |

## Fouten bij het mailen van facturen {#errors-when-mailing-invoices}

| Melding | Wat u kunt doen |
|---|---|
| Not created. No mailtemplate defined. | Stel een e-mailsjabloon voor facturen in voor de shop of de klant. |
