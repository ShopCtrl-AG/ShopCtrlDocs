---
sidebar_position: 5
slug: /docs/contracts
---

# Contracts

:::info[**Required permissions**]

An employee must be assigned to the Shop with a **Power User** role or higher to perform actions referred to in this article. 

:::

Contracts functionality enables the auto-creation of orders on predefined periods based on prices quoted in the agreement. You can also configure how often the products should appear in the planned orders. 
For example, you can set product A to be added to the order each month and product B only once in three months.

## Create contract
<img src={require("/img/create-contract-details.png").default} height="" width="800" />

To create a new contract:

1. Open **Sales > Contracts** page. 
2. Click **Add** and select a **shop** from the drop-down list for which you would like to create a contract. A new contract details page will be opened in a new tab. The contract currency will be the currency of the shop chosen.
3. Select a **Customer**.
4. Enter **Contract name**.
5. Select a contract **Start** and **End** date. Or leave the end date default as "No end date" set if the end date is not stipulated.
6. (Optional) Provide a text description for the contract.
7. (Optional) Specify the **Order Customer Reference** that will be copied to the order details after the order creation.
:::info[**Please note**]

There is a number of **Contract Merge Fields** available for use as part of customer reference. Click on the plus sign to view a list. Select a merge field and click on it to insert it into the reference field. While generating the order, the merge field will be replaced with corresponding contract data. Merge fields list:
`$$PeriodFrom$$`
`$$PeriodFromMonthNameShort$$`
`$$PeriodFromMonthName$$`
`$$PeriodFromYear$$`
`$$PeriodUntil$$`
`$$PeriodUntilMonthNameShort$$`
`$$PeriodUntilMonthName$$`
`$$PeriodUntilYear$$`
`$$ContractCode$$`
`$$ContractName$$`

:::
8. Click **Add Product**, find and select a **Product** that will be added to the contract.
9. After the product was added, you can proceed with specifiing the product price settings. Click **Edit Row** to open the contract product row for editing.
<img src={require("/img/edit-contract-row.png").default} height="" width="400" />
    * Choose a **Price mode**:
        * Actual price - the order will be generated using an actual price set at the shop.
        * Fixed tier price - specify a price per 1 item based on a quantity ordered.
        *On the example below, the price will differ depending on the number of products ordered. For the quantity three and above, the latest quoted price will be used.*
    <img src={require("/img/edit-contract-row-tierprice.png").default} height="" width="400" />
    * Choose a **Quantity mode**:
        * Fixed quantity - a specified quantity will be added to each generated order.
        * Call service - this will identify that a customer confirmation is needed for the product quantity.
    * (Optional) Enter a **Comment** that will be added to the corresponding order row. You can also use contract-specific merge fields: `$$PeriodFrom$$`, `$$PeriodUntil$$`.
    *  (Optional) Enter an **Internal Comment** visible only within a contract details page.
    * Specify on which **Conditions** contract row will be added to the generated order:
<img src={require("/img/edit-contract-row-conditions.png").default} height="" width="400" />
        * **Always** - default. Always add to the order.
        * **Specified date is in the billing period**. In this case, you can set the start period date, select **Repeat** period (monthly or yearly, each 1, 2-18 months), and set when the period will end: never, after a certain amount of occurrences, or on a set date. The settings preview will be auto-generated and displayed at the bottom of the window.
    * Click **Ok** to save the product row settings. The product row will be updated with the configuration set.
10. Repeat with adding other products to the contract. Once all of the products were added, you can change the contract row sequence by clicking the **Move** buttons controls on each of the rows.
<img src={require("/img/contract-row-products.png").default} height="" width="800" />
11. Save the contract by clicking the **Save** or **Save and Close** button on the top action menu.

### Automatic order generation

After the products were added to the contract, we can proceed to **Order generation** settings:
<img src={require("/img/automatic-order-generation-settings.png").default} height="" width="800" />

1. Select an **Interval** with which the order will be generated: None (order not generated), Monthly, Quarterly, or Yearly.
2. Set a **moment** the order will be generated within the interval specified above: begin, middle, end. For month intervals, the period is enlarged with the 5th and 25th dates. The orders pane beneath will be updated with the next planned order row depending on the given settings.
3. Choose an **Order period** - the period to create an order for: current, previous, or next.
4. Select a **Date** that will be set for the auto-generated order. It could be the default **Date of creation** value or **Last date of the period**.
5. (Optional) Select what **main status** to set for the order after creation.
6. (Optional) You can select the **payment type** among those used on a shop.
7. (Optional) If the payment type used is **Invoice**, you can also configure to create and send an invoice along with creating an order:
    * Mark the **Create Invoice** checkbox.
    * Select what **status** to set for the invoice after creation.
    * Decide whether you want to auto-email the invoice right after creation by marking the **Mail Invoice** checkbox.
    * Select a **mail template** that will be used for the generation of the automatic mail.
 8. Check the order generation preview pane to make sure the periods were configured correctly. The next planned order row will be displayed in a grid and marked with a <img src={require("/img/clock.png").default}  /> icon.
 9. Mark the **Active** checkbox to enable the order generation.
 10. Click **Save** or **Save and Close** to save the contract.

:::info[**Note**]

The fulfillment status of the newly generated order will be "**Hold fulfillment**", to prevent the order from an automatic shipment before customer confirmation.

:::

## Manage contracts

Once the contracts are created, you can manage them from the **Sales > Contracts** tab.

<img src={require("/img/contracts-overview.png").default} height="" width="800" />

The contracts page shows the active contracts by default, and you can change the filter to 'All Contracts' to include the deactivated to the list.
The **Last generated** column indicates the date of the last order created upon a contract. And the **Next order** column displays the next planned order date. You can open the contract for editing by double-clicking the contract row. 


The whole list of contracts created for the customer is also available from the customer details page Topic menu > Contracts. 

<img src={require("/img/customer-details-contracts-list.png").default} height="" width="800" />