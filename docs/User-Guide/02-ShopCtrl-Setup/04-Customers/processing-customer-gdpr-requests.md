---
sidebar_position: 3
slug: /docs/processing-customer-gdpr-requests
---

# Processing Customer GDPR Requests

This guide explains how to process GDPR right-to-be-forgotten requests using the built-in anonymization feature in ShopCtrl.

:::info[**Required Permissions**]

To see and use the GDPR features, a user must have **permission to delete customers**. Without this permission, the GDPR section will not be visible in the menu.

:::

## Steps to Process GDPR Request

1. Log in to ShopCtrl with appropriate privileges.
1. Go to **Customers** in the main menu.
1. Locate the customer record requiring GDPR processing.
1. Go to the **GDPR** section in the topic menu. 
1. Click the **ForgetMe** button.
1. Confirm the action.
    <img src={require("/img/customer-gdpr-forget-me.png").default} height="" width="800" />

## What the ForgetMe Button Does

- **Anonymizes** the customer's sensitive personal data
- **Deletes** the customer record from the system
- Removes all personally identifiable information while maintaining data integrity for legal compliance


:::warning[**Irreversible Action**]


This action cannot be undone. Once executed, the customer's personal data is permanently anonymized.


:::

    <img src={require("/img/customer-processed-gdpr.png").default} height="" width="800" />

## Verification

After processing:
- The customer record will no longer appear in customer lists.
- Audit logs will track the GDPR compliance action.
- Any remaining order records will reference anonymized customer data.

