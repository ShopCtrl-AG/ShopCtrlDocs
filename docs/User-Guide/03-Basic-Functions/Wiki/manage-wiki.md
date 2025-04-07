---
sidebar_position: 1
slug: /docs/manage-wiki
---

# Manage Wiki

Wiki or Knowledge center is a collection of articles used for storing company internal information.
Wiki articles along with [email templates](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/04-Templates/Email-Templates/index.md) could be used while communicating with customers, saving time and reducing errors.

The wiki article is an HTML page with an optional attachment.

Wiki article types:

- **regular** - visible on Wiki page and in the list available to insert to mail/chat
- **private** 🔒 - accessible from a Wiki page, but not available to insert to mail/chat

Private articles will have a 🔒 sign and a notification informing employees that: "This is a private wiki item. Content should not be shared outside the company."

You can also change the article **publish** status. Which works practically the same as private and regular articles.
Both private and unpublished articles are visible from the **View Wiki** tab. But nor private, nor unpublished articles could be included in emails and chats.

## Manage Wiki articles

![wiki-management](/img/wiki-management.png)

From the **Wiki Management** tab you can **create** new articles, **edit** and **publish** existing, or **delete** no longer used articles.

Select an article and click 🔍 **View** to open an article on a new tab. Double click an article to open it for **editing**.

To **copy** an article to a different shop:

1. Select an article row.
2. Click **More > Copy to** and from a drop-down select a shop.

To **move** an article to a different shop:

1. Select an article row.
2. Click **More > Move to** and from a drop-down select a shop.

You can search an article by keyword, filter by category, culture, and publication status.

### Create article

![create-article-wiki](/img/create-article-wiki.png)

To create a wiki article:

1. Go to **General > Wiki Management**.
2. Click **Add**, and from a drop-down list, select:
   1. **Generic** to create a company wiki article
   2. **Specific shop** to create an article for this shop
3. Type the article **Title**.
4. (Optional) Change the shop an article is created for, or click ✖ sign to remove shop and make the article generic.
5. Select **Culture** - the language in which the article will be written.
6. Enter the **Keywords** separated by a comma to improve the article's search.
7. Insert the article **body**. Use the HTML editor to format the text.
8. Choose what **category** or several categories the article refers to in the categories pane.
9. (Optional) Click **Add attachment** and select a file to be attached to the article.
10. (Optional) Select the **period** for which the article should be published.
11. Click the **Published** checkbox to make this article text and/or attachment available for inserting to mail or chat dialog.
12. (Optional) Click the **Private** checkbox to hide the article from the list of available articles.
13. (Optional) Enter a **Sequence** number to change the article position on the list within the category. The higher the number, the lower an article will be in the list. Or leave the default '0' value to sort the articles alphabetically.
14. Click **Save** or **Save and Close**.

### Delete article

Deleting an article is a permanent action. Unlike unpublishing an article, deleting an article could not be undone.

To delete an article:

1. Go to **General > Wiki Management**.
2. Find and select an article you would like to delete.
3. Click **Delete > Yes**.

## Use Wiki

### View Wiki

All of the wiki articles could be viewed from the **General > View Wiki** page.

Knowledge Center (Wiki) page is divided into several blocks:

- Filters menu,
- View Articles by Category - only articles assigned to categories
- Most recent - recently created or edited articles
- Most used - articles sorted by usage count

![view-wiki](/img/view-wiki.png)

You can **search** for an article, filter articles by **Culture** and **Shop** the articles are assigned to. Click on the articles' name to open it for viewing.

The sales channel pane filter on the right also determines articles of which shops will be displayed in the view articles by category pane.

### Include wiki articles in an email or chat dialogue.

You can use the wiki articles as out-of-the-box customer FAQs when sending an email or responding to a chat message.

#### How to insert wiki article to **email**:

1. When you are writing a new email click an **Insert Wiki** button at the end of the subject row.
   ![mail-insert-wiki](/img/mail-insert-wiki.png)
2. On a **Search Wiki item** tab select an article to be inserted.
   ![insert-wiki-window](/img/insert-wiki-window.png)
   :::(Info)
   By default, the list displays the articles assigned to a shop you are writing a letter from and generic articles written in a language chosen as default for the shop. To view all languages articles click an arrow next to the language and select **All cultures**.
   :::
3. Click **Insert** to copy wiki text to mail body and add wiki attachment to mail attachments.
4. (Alternatively) You can insert only text or only attachment to an email: click an arrow on the Insert button and select the needed option.
5. Proceed with editing an email as usual.

#### How to insert wiki article to **chat** conversation:

1. While answering a customer on a chat pane, click the **Wiki** link.
   ![insert-wiki-chat](/img/insert-wiki-chat.png)
2. Search and select an article.
3. Click insert to copy article body text to the message box.
4. Edit a message and click **Send**.

:::warning[]

Sending files via message dialogs is currently not supported.

:::
