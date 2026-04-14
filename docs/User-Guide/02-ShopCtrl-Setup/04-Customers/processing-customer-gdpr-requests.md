---
sidebar_position: 4
slug: /docs/processing-customer-gdpr-requests
---

# Processing Customer GDPR Requests

This guide explains how to process GDPR right-to-be-forgotten requests using the built-in anonymization feature in ShopCtrl.

:::info[**Required Permissions**]

To see and use the GDPR features, a user must have **permission to delete customers**. Without this permission, the GDPR section will not be visible in the menu.

:::

:::info[**Note**]

GDPR anonymization is only available at the customer level. There is no GDPR option on individual order records.

:::

## Steps to Process GDPR Request

1. Log in to ShopCtrl with appropriate privileges.
1. Go to **Customers** in the main menu.
1. Locate the customer record requiring GDPR processing.
1. Go to the **GDPR** section in the topic menu. 
1. Click the **Forget me** button.
1. Confirm the action.
    <img src={require("/img/customer-gdpr-forget-me.png").default} height="" width="800" />

## What the Forget Me Button Does

- **Anonymizes** the customer's sensitive personal data
- **Deletes** the customer record from the system
- Removes all personally identifiable information while maintaining data integrity for legal compliance


:::warning[**Irreversible Action**]


This action cannot be undone. Once executed, the customer's personal data is permanently anonymized.


:::

:::danger[**Important**]

The **Forget Me** button anonymizes the customer unconditionally. It does not check whether the customer has active orders, open tickets, or any other pending activity. All personal data is anonymized immediately regardless of the current state of associated records.

:::

    <img src={require("/img/customer-processed-gdpr.png").default} height="" width="800" />

After processing the customer record will no longer appear in customer lists. Any remaining order records will reference anonymized customer data.

