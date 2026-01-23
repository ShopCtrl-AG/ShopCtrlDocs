---
sidebar_position: 8
slug: /docs/nps
---
# Configure Net Promoter Score (NPS) Feedback for Your Shops

This guide provides step-by-step instructions for shop administrators to configure the automated Net Promoter Score (NPS) feedback system. Once activated, this system sends feedback requests to your customers after their support tickets are resolved, helping you measure and improve customer satisfaction.



## Configuration Guide

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Admin** role to perform actions referred to in this article.

:::

<img src={require("/img/nps-configuration.png").default} height="" width="800" />


To activate and set up the NPS system for a shop, follow these steps:
1. Log in to your ShopCtrl account as a user with the **shop admin** role.
1. Navigate to **Configuration > Shops**.
1. Select the desired shop and click **Edit**.
1. From the topic menu, go to **NPS Configuration** section.
1. Enable the setting for **NPS Invitations**.
1. **Set the Feedback Delay:** In the **"Send feedback request (days)"** field, enter the number of days to wait after a ticket is closed before sending the feedback email. The count starts from the ticket's close date.
1. Select an **Email Template**: From the dropdown, choose a general-type mail template to use for the invitation emails.
1. Configure Redirect URLs (Required):
    1. **Success Redirect URL**: Enter the full URL of the "Thank You" page hosted in your environment, where customers land after successfully submitting a rating.
    1. **Error Redirect URL**: Enter the full URL of the error page hosted in your environment, where customers are directed if the submission fails, or rate was already acepted.
1. Click **Save** or **Save & Close** to apply all changes. The system will automatically begin processing eligible tickets.

### **Merge Fields for Rating Links**

To create functional rating buttons in your email template, use the following merge fields for scores 1-10:

| Rating Score | Merge Field |
|---|---|
| Score 1 | $$Ticket.RateUrl01$$ |
| Score 2 |	$$Ticket.RateUrl02$$ |
| Score 3 |	$$Ticket.RateUrl03$$ |
| Score 4 |	$$Ticket.RateUrl04$$ |
| Score 5 |	$$Ticket.RateUrl05$$ |
| Score 6 |	$$Ticket.RateUrl06$$ |
| Score 7 |	$$Ticket.RateUrl07$$ |
| Score 8 |	$$Ticket.RateUrl08$$ |
| Score 9 |	$$Ticket.RateUrl09$$ |
| Score 10 |	$$Ticket.RateUrl10$$ |

These fields will automatically be replaced with unique API links for each rating option when the email is sent.


##  How the Automated System Works

Once configured, a background scheduled task runs every hour to automate the entire process:

**Ticket Scan:** The system scans for tickets closed more than [X] days ago (per your setting), but only checks tickets that have been closed within the last 7 days.

**Eligibility Check:** For each ticket, it confirms that:
- A customer with a valid email address is linked to the ticket.
- At least one email response was sent to the customer during the support conversation.

**Invitation Dispatch:** An NPS invitation email is sent to the customer using your selected template.

**Data Collection:** Customer ratings (1-10) are recorded at the ticket level. The mail is linked to the ticket, so you can view it. 

**Report Generation:** NPS reports are generated based on the aggregated ratings per ticket, accessible via the ShopCtrl reporting module.

<img src={require("/img/nps-feedback-request-mail.png").default} height="" width="800" />