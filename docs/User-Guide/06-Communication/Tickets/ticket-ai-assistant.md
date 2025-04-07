---
sidebar_position: 1
slug: /docs/ticket-ai-assistant
---

# Ticket AI Assistant

ShopCtrl has introduced an exciting new feature – the AI Assistant, now integrated with your customer support system.

On the ticket screen, you'll notice a collapsible panel labeled "AI Assistant." Once expanded, it gathers information from customer emails, ticket titles, and employee comments, sending this data to the AI. The result is a brief summary of the customer's issue and a list of categories that align with the problem.


<img src={require("/img/ai-assistant.png").default} height="" width="800" />



This AI Assistant is specifically trained on your unique categories and communication patterns. The goal is to provide suggestions that closely match the realities of your customer support work.

Once you've selected at least one category for the ticket, categories will no longer load, streamlining your workflow. However, you can easily load updates for both summary and categories by clicking the refresh button. 

Experience a more efficient and insightful customer support process with ShopCtrl's AI Assistant. It's designed to save you time, enhance categorization precision, and boost overall productivity. Welcome to the future of customer support with ShopCtrl!

## Configuring Ticket AI

The Ticket AI configuration is shop-specific, providing greater flexibility in terms of language and template setup.

To enable this integration, obtain and enter the OpenAI API Secret Key. Retrieve the **Secret Key**  from your [API keys page in your OpenAI account](https://platform.openai.com/account/api-keys). Additionally, please review the [Best practices for handling API keys](https://platform.openai.com/docs/guides/production-best-practices/api-keys) to ensure secure and efficient key management.

<img src={require("/img/ticket-ai-configuration.png").default} height="" width="800" />


### Connection settings
Shop>AI

#### **Chat Model**
**OpenAI Chat Model** 
The [OpenAI model](https://platform.openai.com/docs/models) used for text-based requests such as providing ticket summaries or suggesting actions to take for a ticket.
**OpenAI Chat Prompt Max Length** 
Specifies the maximum length of a string submitted to the OpenAI chat model. If a prompt exceeds this value, it will be truncated. Different OpenAI models have varying limitations on the context window. 
For more details, refer to  [What are tokens and how to count them?](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them) and [Managing tokens](https://platform.openai.com/docs/guides/text-generation/managing-tokens).

#### **Embedding Model**
**OpenAI Embedding Model** 
The OpenAI model preferred by ShopCtrl for categorization tasks due to its cost and performance efficiency. Refer to [this help page](https://platform.openai.com/docs/models/embeddings) for more details on embeddings.
**OpenAI Embedding Prompt Max Length:** 
Specifies the maximum length of a string submitted to the OpenAI chat model. If a prompt exceeds this value, it will be truncated.

#### **Test connection** 


### Specific Ticket related changes

Shop> Communication>Ticket AI

 **Ticket Summary**
**Summary Prompt Template**
The template used when requesting a ticket summary. The `{0}` substring is replaced with the ticket context by ShopCtrl. Change the language of the response by configuring different languages per shop, e.g.:
```
Generate a short summary description for the following support ticket. Write in Dutch. Ticket:```{0}```
```
#### **Categories Suggestions**
**Category Prompt Template** 
The template used when requesting a categorization vector (embedding) from the OpenAI model. The `{0}` substring is replaced with the category name, `{1}` with the category description, and `{2}` with a sample ticket context.
Examples:
```
Category '{0}' described as '{1}' matches the following support tickets '{2}'
Category '{0}' matches the following support tickets ```{2}```
```
To ensure correct values of the categories, both the category itself and all parent nodes, both selectable and not, are sent to OpenAI.
**Max Categories to Suggest** 
Specifies the maximum number of categories that ShopCtrl can suggest for a ticket.
**Match Factor Threshold** 
Category vector similarity percentage `[0..100]`. A value of `0` means no threshold.
**Deviation Factor Threshold** 
Category vector deviation factor percentage (category similarity - mean similarity) / standard deviation. Possible values: `[0..]`. A value of `0` means no threshold.

#### **Training**
**Category Sample Ticket Count**
Determines how many related tickets ShopCtrl should use for a single category to compute an embedding value during model training.
**Estimate**
Provides a summary of the data that will be sent to OpenAI for training purposes.
**Train Now!**
Initiates the training process by sending all shop and global categories to OpenAI. Analyzes the relationships between ticket categories and ticket content. Recalculates the ticket category index using the OpenAI API.

#### Post-Training Usage
After the training process, you and your team can seamlessly integrate the Ticket AI Assistant into your daily workflow. Leverage the trained model to generate ticket summaries and categorize tickets efficiently.

Feel free to utilize these training buttons to continually refine the Ticket AI's capabilities, ensuring it remains finely tuned to your evolving support landscape. For any further assistance or information, don't hesitate to explore the comprehensive [OpenAI documentation](https://platform.openai.com/docs/introduction) or reach out to our support team. 

Welcome to a more intelligent and streamlined approach to ticket management with ShopCtrl's Ticket AI!
