---
sidebar_position: 3
slug: /docs/filtering-purchase-orders
---

# Filtering Purchase Orders 



Here is a detailed overview of the filters available for the purchase orders table.

## Search by keyword
The **Keyword** filter shows all the purchase orders which match the provided keyword. The search is performed within the PO code, supplier company name, supplier full name, and reference (which contains sales order code for dropship and back-to-back purchase orders),
> For example, you can search by the sales order code to find a particular dropship or back-to-back purchase order created for this sales order.

<img src={require("/img/PO_overview_05.png").default} height="" width="600" />

## Filter by status

| Status | Description |
| --- | --- |
| All | All purchase orders created, including finished and canceled |
| Active | Purchase orders with main status "Active" or "On Hold" |
| Not Sent | Purchase orders with submit status: draft or ordered |
| Not Paid | Purchase orders with payment status: "Not paid" or "Partially paid" |
| Not Provisioned | Purchase orders with provision status: "Not provisioned" or "Partially provisioned" |
| Not Received in Time | Overdue purchase orders with a set expected delivery date |

Select a status to show all the applicable orders. 
By default, this filter is set to **Active**, showing purchase orders with the main status: "Active" or "On Hold".

<img src={require("/img/PO_filter_Status.png").default} height="" width="600" />

## Filter by supplier
Start typing the ыupplier's company name or supplier's full name, and the system will show you a list of suppliers available.
<img src={require("/img/PO_filter_Supplier_Search.png").default} height="" width="600" />

Clicking a <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill-rule="evenodd" d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"></path></svg> opens a new window with a whole list of suppliers available.

<img src={require("/img/PO_Select_Supplier.png").default} height="" width="400" />


Once the supplier is chosen, a view button is enabled. Clicking a <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M16.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L20.94 3h-3.69a.75.75 0 01-.75-.75z"></path><path d="M3.25 4a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 01.75.75v3.19l3.72-3.72a.75.75 0 01.53-.22h10a.25.25 0 00.25-.25v-6a.75.75 0 011.5 0v6a1.75 1.75 0 01-1.75 1.75h-9.69l-3.573 3.573A1.457 1.457 0 015 21.043V18.5H3.25a1.75 1.75 0 01-1.75-1.75V4.25c0-.966.784-1.75 1.75-1.75h11a.75.75 0 010 1.5h-11z"></path></svg>   opens an edit supplier window in a new tab.

<img src={require("/img/PO_filter_Supplier_View_Button.png").default} height="" width="600" />

Clicking  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill-rule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"></path></svg>  clears the supplier field and resets a filter.

## Filter by warehouses
Please choose a particular enabled warehouse, and all the applicable purchase orders will be displayed. By default, the filter is set to **All Warehouses**. 

## Filter by purchase order type
By default, the filter is set to **All Types**. Please choose one of the supported types to review the applicable purchase orders.
<img src={require("/img/PO_filter_Type.png").default} height="" width="600" />

:::info[**Note:**]

The filters are reset to their defaults after the page is closed. Refreshing a page does not reset the filters applied.

:::