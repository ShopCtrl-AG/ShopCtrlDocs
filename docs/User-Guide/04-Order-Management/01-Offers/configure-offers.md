---
sidebar_position: 3
slug: /docs/configure-offers
---
# Configure Offers

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Owner Admin** role to perform actions referred to in this article.

:::

To start using offers, you need to set a document template to use on the shop, create email templates in the designated languages, and define the offer statuses that will help visualize offers management.

## Mail templates
To start using offers you need to create mail templates in each language you are planning to use while addressing your customers.

Create and save **offer type** mail templates from **Configuration > Templates > Mail templates**. With the help of the merge fields, you can set up a universal template for one language that could be used in different shops.
These mail templates will be loaded to the list of available templates when mailing an offer to a customer.
Learn more in [Email templates](/docs/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/index.md).

## Document templates
Default offer document template is provided by ShopCtrl. You can customize it to your needs, and create translated copies of templates in a language used in your shop. Learn more in [Document templates](/docs/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Document-Templates/index.md).

To set an offer document template:

<img src={require("/img/shop-settings-socument-templates.png").default} height="" width="800" />

1. On the sales channel pane click on the shop's icon, in the drop-down list select **Settings**.
2. Within the topic menu select **Document templates**.
3. Select a designated Offer template from a dropdown list.
4. **Save and Close** shop to apply changes.

## Setup offer statuses

The default offer statuses are described below. You can always change the status icon and name.
Access the statuses from the **Configuration > Statuses > Offer statuses** page. Double click the default status to change the status name or details. 

### Main Status 

| <img src={require("/img/house.png").default} height="18" width="18" /> | Main Status | Base Status | Definition |
| --- | --- | --- | --- |
| <img src={require("/img/image(15).png").default} height="" width="" /> | Active | Active | Active offers |
| <img src={require("/img/image(14).png").default} height="" width="" /> | Concept | Pause | Offers is being processed |
| <img src={require("/img/image(17).png").default} height="" width="" />  | Finished | Finished | The offer was accepted |
| <img src={require("/img/image(18).png").default} height="" width="" /> | Cancelled | Cancel | The offer was cancelled |
| <img src={require("/img/image(18).png").default} height="" width="" /> | Rejected | Cancel | The offer was rejected |

You can add any number of **Rejected** statuses to help manage the offer's rejected reasons.

### Custom status

Custom statuses do not influence the main offer status. Use these statuses to help visualize and ease your offer workflow.

| <img src={require("/img/tag_custom.png").default} height="18" width="18" /> | Custom Status | Base Status | Definition |
| --- | --- | --- | --- |
| <img src={require("/img/image(15).png").default} height="" width="" /> | Active | Active | Free to use |
| <img src={require("/img/image(14).png").default} height="" width="" /> | On hold | Pause | Free to use |
| <img src={require("/img/image(17).png").default} height="" width="" />  | Finished | Finished | Free to use |

## Sales source lead

To be able to define a **Sales source lead** for an offer, please first create a list of source leads to choose from.
Click **Add** and enter the sales source lead **name** to create a new source lead. Click save to add it to the list.

<img src={require("/img/sales-lead-source-create.png").default} height="" width="800" />


### Additional configuration

As a **Shopowner**, you can limit the period when offers can be copied to a year.
To apply this limitation, go to **Shop owner details** page and on the **Offers** tab enable the '**Allow copy offers of the current year only**' setting.
This way employees will be prevented from copying old offers with possibly outdated contact and financial data.

<img src={require("/img/allow-copy-offers-of-the-current-year.png").default} height="" width="800" />