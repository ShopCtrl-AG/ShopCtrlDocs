---
sidebar_position: 3
slug: /docs/configure-returns
---
# Configure Returns 



:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

To start using returns, you need to provide the return **reasons** and **conditions** used in your company. You could also change the return and return row statuses to custom ones or leave them default.

### Return Conditions

The first part of configuring returns starts from defining the Return conditions within the **Configuration > Returns > Return conditions**.

<img src={require("/img/configuring-returns-conditions.png").default} height="" width="800" />

Specify the conditions or states in which the customers could return the product. 

Click add and enter the condition name to create a new condition. Click save to add it to the list.
<img src={require("/img/new-return-condition.png").default} height="" width="800" />

### Return reasons

Same way as with defining conditions, please enter the reasons for returning products and refunds used in your company.
**Configuration > Returns > Return reasons**

The return reasons could be used as reasons to **credit** the order or **return** reasons, or both.

<img src={require("/img/returns-reasons-configuration.png").default} height="" width="800" />

To create a new reason:

1. Click **Add**.
<img src={require("/img/new-return-reason.png").default} height="" width="800" />
2. Enter the reason **Name**
3. **Can be used for credits** mark this checkbox if you would like this reason to be used as a reason to **credit** the order.
4. **Can be used for returns** mark this checkbox if you would like this reason to be used as a reason to **return** the order.
5. Click **Save** to add new reason to the list.

### Return statuses

You can define the statuses that both return and return rows will have within **Configuration > Returns > Return statuses**.
You can edit status definitions, add new statuses, and set custom icons for the statuses. Disable the status to remove it from the list of selectable statuses.
<img src={require("/img/returns-statuses-configurartion.png").default} height="" width="800" />

Return status automatic change rules could be set up through [Triggers](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/index.md).

The default pre-configured statuses are as follows.

#### Main Status 

| <img src={require("/img/house.png").default} height="18" width="18" /> | Main Status | Base Status | Definition |
| --- | --- | --- | --- |
| <img src={require("/img/image(15).png").default} height="" width="" /> | Active | Active | Active returns which need processing  |
| <img src={require("/img/image(14).png").default} height="" width="" /> | Requested | Pause | Used to indicate that return was requested by the customer |
| <img src={require("/img/image(17).png").default} height="" width="" />  | Finished | Finished | The return was finilized |
| <img src={require("/img/image(18).png").default} height="" width="" /> | Cancelled | Cancel | The return was cancelled |

#### Return row statuses

| <img src={require("/img/product-icon.png").default} height="18" width="18" /> | Main Status | Base Status | Definition |
| --- | --- | --- | --- |
| <img src={require("/img/image(14).png").default} height="" width="" /> | New | Pause | Customer indicated that this product is going to be returned |
| <img src={require("/img/image(15).png").default} height="" width="" /> | Received | Active | Product was received to the warehouse and needs evaluation |
| <img src={require("/img/image(17).png").default} height="" width="" />  | Accepted | Finished | The product was evaluated and accepted |
| <img src={require("/img/image(18).png").default} height="" width="" /> | Rejected | Cancel | The product was evaluated and rejected for refund |
| <img src={require("/img/image(18).png").default} height="" width="" /> | Cancelled | Cancel | The return of the product was cancelled |


### Additional settings

Some additional settings for **return management** could be found on the shop details page.
**Configuration > Shops > Shop details page > Returns**

:::info

These settings could be applied per shop, shop group, or system-wide. Change the area by clicking the arrow at the end of the row.

:::
<img src={require("/img/returns-settings-shop-details.png").default} height="" width="800" />

**Return form template** - currently not in use. You can select a template to generate a return form document while saving a return to send to a customer after a request manually. 
**Is reason required**, **Is condition required** 
Specify whether you would like the **reason** and **condition** to be required fields while registering returns. 
**Allow receive date in past** Decide whether you would like to register returns at a later date. 


At Shop Owner level **Configuration > Shop Owners > Shop owner details page > Fulfillment > Return Settings**
**Warehouse should be mandatory for Returns.** Default setting that doesn't allow to create a Return without a Warehouse specified.

<img src={require("/img/shopowner-warehouse-mandatory.png").default} height="" width="800" />