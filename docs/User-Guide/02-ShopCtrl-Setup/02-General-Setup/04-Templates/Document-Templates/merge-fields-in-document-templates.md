---
sidebar_position: 2
slug: /docs/merge-fields-in-document-templates
---

# Merge Fields in Document Templates

:::info[**Required Permissions**]

An employee must be assigned to the shop with a **Shop Admin** or **Shop Owner Admin** role to perform actions referred to in this article.

:::

Proceed with the Microsoft Word **Add Merge Field** function to add a new merge field to the ShopCtrl template. Download a default Word document template from ShopCtrl and open it for edit. Or start with a blank Word document page.

## How to insert merge field

To insert a single type **Merge Field** into Word document template:

1. Go to **Insert** tab **> Quick Parts > Field**.
2. Choose a Field type: **MergeField**.
3. Enter the ShopCtrl **Merge Field** name wrapped in dollar signs in the **Field Name**. For example, `$$Order.Id$$`.
4. Choose the applicable **Format**.
5. Click **Ok** to enter the merge field.
6. Press `Alt` + `F9` to reveal the field coding. Or, right-click on the field and choose the **Toggle Field Codes** option.
7. The merge field will be displayed as follows in the code view:
   ```
   {MERGEFIELD $$Order.OrderTotal$$ \* MERGEFORMAT }
   ```
8. Delete the `\* MERGEFORMAT` text.
9. (Optional) For number and text type merge fields, it is possible to apply font, color, bold, italics, etc., as you would typically do to the text.
10. (Optional) Depending on the type of the merge field you are working with, proceed with formatting the merge field output.

The procedure described above is valid for Word 2007 and later. Please view the Microsoft Support [Insert mail merge fields](https://support.microsoft.com/en-us/office/insert-mail-merge-fields-9a1ab5e3-2d7a-420d-8d7e-7cc26f26acff) article for more information.

### How to apply numeric merge field formatting

To configure the output format of the **Numeric Merge Field** in the Word document template:

1. Press the `Alt` + `F9` to reveal the field coding.
2. Select the **Numeric Merge Field** you would like to edit.
3. Before the closing curly bracket type space and: `\# `, this begins the switch.
4. To designate thousands, enter `#,###`.
5. Specify the number of decimal places you want to display using `.00`. If the merged field doesn't include decimals, it will be displayed with zeros.
6. The result will look like this:

```
{MERGEFIELD $$Order.OrderTotal$$ \# #,###.00 }
```

:::info[**Note:**]

The format used is of an invariant culture. For the different cultures, ShopCtrl will change the rendering result accordingly.

:::

Examples of **Numeric Fields** formatting:
| Field code | Generated output, <br />en-US | Generated output, <br />nl-NL | Generated output, <br />fr-FR |
| --- | --- | --- | --- |
| `{MERGEFIELD $$Order.OrderTotalExVat$$ }` | 1559917.3600 | 1559917,3600 | 1559917,3600 |
| `{MERGEFIELD $$Order.OrderTotalExVat$$ \# #.00 }` | 1559917.36 | 1559917,36 | 1559917,36 |
| `{MERGEFIELD $$Order.OrderTotalExVat$$ \# €#,###.00 }` | €1,559,917.36 | €1.559.917,36 | €1 559 917,36 |
| `{MERGEFIELD $$Order.OrderTotalExVat$$ \# #,###.0 }` | 1,559,917.4 | 1.559.917,4 | 1 559 917,4 |
| `{MERGEFIELD $$Order.OrderTotalExVat$$ \# #,###. }` | 1,559,917 | 1.559.917 | 1 559 917 |
| `{MERGEFIELD $$Order.OrderTotalExVat$$ \* Upper \# ####,0.00kg }` | 1,559,917.36KG | 1.559.917,36KG | 1 559 917,36KG |

Please see the Microsoft Support [Word Numeric Picture Switch](https://support.microsoft.com/en-us/topic/date-phone-number-and-currency-fields-are-merged-incorrectly-when-you-use-an-access-or-excel-data-source-in-word-34131aae-dddb-98a1-bd58-6b89994a357e) and [Intermediate mail merge tips](https://support.microsoft.com/en-us/office/video-take-mail-merge-to-the-next-level-ca30f6af-8ea0-4d20-832b-97bdefdc307b) articles for more information.

### How to apply date merge field formatting

To configure the output format of the **Date Merge Field** in the Word document template:

1. Press the `Alt` + `F9` to reveal the field coding.
2. Select the **Date Merge Field** you would like to edit.
3. Before the closing curly bracket, type a space and: `\@`, this begins the switch.
4. Enter space, and follow by date format in quotes `"d-MM-yy"`
5. The result will look like this: `{MERGEFIELD $$Order.Date$$ \@ "d-MM-yy" }`

Examples of **Date and Time Fields** formatting:
| Field code | Generated output, <br />en-US | Generated output, <br />nl-NL | Generated output, <br />fr-FR |
| --- | --- | --- | --- |
| `{MERGEFIELD $$Order.Date$$ }` | 7/1/2021 7:06:05 PM | 1-7-2021 19:06:05 | 01/07/2021 19:06:05 |
| `{MERGEFIELD $$Order.Date$$ \@ "d-MM-yy" }` | 1-07-21 | 1-07-21 | 1-07-21 |
| `{MERGEFIELD $$Order.Date$$ \@ "ddd, d MMMM yyyy"}` | Thursday, 1 July 2021 | donderdag, 1 juli 2021 | jeudi, 1 juillet 2021 |
| `{MERGEFIELD $$Order.Date$$ \@ "MMMM d" }` | July 1 | juli 1 | juillet 1 |

Please check the Microsoft Support [Picture switch](https://support.microsoft.com/en-us/topic/date-phone-number-and-currency-fields-are-merged-incorrectly-when-you-use-an-access-or-excel-data-source-in-word-34131aae-dddb-98a1-bd58-6b89994a357e) and [Intermediate mail merge tips](https://support.microsoft.com/en-us/office/video-take-mail-merge-to-the-next-level-ca30f6af-8ea0-4d20-832b-97bdefdc307b) articles for more information.

### How to apply image merge field formatting

For **Image Type Merge Fields**, you can change the dimensions of the populated image and rotate it clockwise. Namely:

- Adjust an image width, height, or both in pixels or mm
- Rotate an image by 90, 180, or 270 degrees

To configure the output format of the **Image Merge Field** in the Word document template:

1. Include a numeric picture switch `\#` after the merge field name and before the closing curly bracket.
2. Follow by image parameters:

- Define image size:

| Size             | mm      | pixels |
| ---------------- | ------- | ------ |
| Width            | W0mm    | W0     |
| Height           | H0mm    | H0     |
| Width and Height | 0mmx0mm | 0x0    |

- Or rotate the image:

| Rotation angle | 90 degrees | 180 degrees | 270 degrees |
| -------------- | ---------- | ----------- | ----------- |
| Rotate         | R90        | R180        | R270        |

:::info[**Note**]

It is possible both to rotate the image and specify size, only if image size is specified in mm.

:::
**Examples**:
| Field code | Output description |
| --- | --- |
| `{MERGEFIELD $$Shop.Logo$$ \# w14mm }` | Image will be resized proportionally to 14mm width |
| `{MERGEFIELD $$Shop.Logo$$ \# H100 }` | Image will be resized proportionally to 100px height |
| `{MERGEFIELD $$Shop.Logo$$ \# 100x100 }` | Image will be resized to a 100px square |
| `{MERGEFIELD $$Shop.Logo$$ \# r90 }` | Image will be rotated 90 degrees clockwise |
| `{MERGEFIELD $$Shop.Logo$$  \# 30mmx10mm,R270 }` | Image will be reseized to be 30mm x 10mm and rotated 270 degrees clockwise |

### How to apply barcode merge field formatting

To configure the output format of the **Barcode Merge Field**:

1. Start with entering the opening tag `<barcode Height=0 Width=0>`.
2. Specify the barcode size in pixels and follow by inserting the **Merge Field** wrapped in dollar signs that you want to display as a barcode. The mergefield type should be **scan code**.
3. Finally, add a closing tag `</barcode>`.

For example:

```
<barcode Height=50 Width=250>$$OrderShipment.OpenPickListScanCode$$</barcode>
```

To turn any type of mergefield into a barcode, use this syntax:

```
<barcode Height=50 Width=250>sa: {MERGEFIELD $$Order.OrderCode$$ }</barcode>
```

:::warning[**Note**]

The **Merge Field** used for generating a barcode should contain data. Otherwise, the document will not be autogenerated.

:::

### How to apply QR code merge field formatting

To configure the output format of the **QR code Merge Field**:

1. Enter the opening tag `<qrcode Height=0 Width=0>`.
2. Specify the barcode size in pixels and follow by inserting the **Merge Field** wrapped in dollar signs that you want to display as a barcode.
3. Finally, add a closing tag `</qrcode>`.

For example:

```
<qrcode Height=50 Width=50>$$OrderShipment.OpenPickListScanCode$$</qrcode>
```

:::warning[**Note**]

The **Merge Field** used for generating a QR code should contain data. Otherwise, the document will not be autogenerated.

:::
