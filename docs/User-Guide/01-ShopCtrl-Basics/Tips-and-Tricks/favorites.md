---
sidebar_position: 2
slug: /docs/favorites
---

# Favorites

We're excited to introduce the upgraded version of Favorites in ShopCtrl, featuring enhanced tab management and the innovative capability to store tab history. Users can now save not only general tabs such as Orders, Tickets, and Products but also specific ones, making navigation even more efficient and personalized.

<img src={require("/img/favorites-overview.png").default} height="" width="400" />

## Adding tabs to Favorites

Favorites in ShopCtrl replicate the functionality of browser bookmarks but within the ShopCtrl environment, allowing users to add commonly used sections for quicker access.

To add a tab to the favorites group:

1. Open the desired page, such as an order or ticket.
2. Click star sign ⭐.
3. Select **Add active tab**. A notification confirms the addition, and the tab appears instantly in the list.
4. Alternatively, add all open tabs by selecting **Add all open tabs**.
5. For organized grouping, choose **Add all open tabs to group**.

Upon selection, a notification confirms the addition, and the tab or tabs will be readily accessible within your favorites list for streamlined navigation.

## Managing Favorites

Effortlessly manage your favorites with ShopCtrl's intuitive interface:

To edit a **single** favorite tab, right-click on the tab within the Favorites list. This will open a context menu with options such as opening the tab, setting it to auto-open, rearranging tabs, or removing them from favorites.

<img src={require("/img/context-menu-favorites(1).png").default} height="" width="400" />

For **bulk** editing, select multiple tabs by holding down the `Shift` or `Ctrl` key and clicking on the desired tabs. Once selected, use the star icon ⭐ button menu to apply changes collectively. Please note that the context menu only works for single favorites tabs.

<img src={require("/img/group-menu-favorites(1).png").default} height="" width="400" />

Customize your workspace by setting certain favorite sections to **auto-launch** after each login. Simply select a section and click on ⭐ **> Make Auto Open**.

To remove sections from favorites, individually select them and click on ⭐ **> Remove selected from Favorites**.

If you wish to hide the entire Favorites section from the navigation tree, click on ⭐ **> Hide Favorites**.

## Store Session: Auto-Open Tabs from Previous Work Sessions

A notable addition to the Favorites feature is session persistence, enabling the storage and automatic restoration of tabs from previous work sessions upon subsequent logins. By activating the "Auto-save session" feature within account settings, users can seamlessly resume their workflows, minimizing disruptions and enhancing productivity.

Follow these steps to enable this feature:

1. **Log in** to your ShopCtrl account.
2. Click on your name in the top-right corner and select **Settings** from the dropdown menu.
   <img src={require("/img/auto-save-session.png").default} height="" width="500" />
3. Enable the **Auto-save session** to store tabs from your current session.
4. Click **Save** to apply changes to your account.
5. Refresh the page to enable the Favorites tab, or the changes will be applied after re-login.

   <img src={require("/img/last-session-folder.png").default} height="" width="" />

Both specific order tabs and general ones will be added to the list, but new pages and changes within current tabs are not stored.
