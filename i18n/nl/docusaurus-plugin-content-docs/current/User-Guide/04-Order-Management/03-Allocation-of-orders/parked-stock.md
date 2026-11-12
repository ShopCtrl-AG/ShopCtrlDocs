---
sidebar_position: 1
slug: /docs/parked-stock
description: "Parkeer voorraad in ShopCtrl om deze buiten de normale toewijzing te reserveren, en maak de toewijzing van producten aan orders ongedaan."
---

# Parked Stock

Als uw systeem zo is ingesteld dat producten na bepaalde triggers automatisch aan orders worden toegewezen, wilt u misschien een deel van de voorraad reserveren voor bepaalde orders en de producten handmatig aan orders toewijzen.
**Parked stock** (geparkeerde voorraad) is gereserveerde voorraad die apart wordt gehouden en niet meedoet in de normale toewijzing. Deze voorraad kan wel handmatig aan orders worden toegewezen.

Als een product beschadigd is of ontbreekt, kunt u voorraad op deze manier ook apart zetten om automatische toewijzing te voorkomen.

:::info[Let op]

De functie Parked stock zit niet in de basisconfiguratie van ShopCtrl. Neem contact op met de Support desk voor meer informatie.

:::

## Voorraad vrijgeven en parkeren {#how-to-deallocate-and-park-the-stock}

Als de producten al aan orders zijn toegewezen, kunt u de toewijzing ongedaan maken en de vrijgekomen voorraad reserveren.
Het vrijgeven en parkeren werkt hetzelfde voor eenvoudige en geavanceerde voorraaditems.

U kunt de **hele order** met alle producten vrijgeven en reserveren vanaf de pagina met orders:
<img src={require("/img/deallocate-and-reserve-whole-order.png").default} height="" width="" />

1. Ga naar **Sales > Orders**.
2. Selecteer de order waarvan u de toewijzing ongedaan wilt maken.
3. Klik op **More > Fulfillment > Deallocate stock and park reserved stock**.

Alle producten van de order worden geparkeerd; de status van de orderregels verandert in **DeAllocated**.


Of parkeer alleen een **bepaald product** vanaf de pagina met orderdetails:
<img src={require("/img/deallocate-and-park-order-row.png").default} height="" width="800" />

1. Ga naar **Sales > Orders**.
2. Selecteer de order waarvan u de toewijzing ongedaan wilt maken en dubbelklik op de orderregel om deze te bewerken.
3. Selecteer de orderregel die u wilt reserveren.
4. Klik op **More > Deallocate stock > Deallocate and park stock**.
5. Bevestig de actie.

De voorraad van het betreffende product wordt geparkeerd; de status van de orderregel verandert in **DeAllocated**.

## Vrije voorraad parkeren {#how-to-park-free-stock}

Hoe dit werkt, hangt ervan af of u een eenvoudig of een geavanceerd product parkeert.

### Eenvoudige producten parkeren {#how-to-park-simple-products}

Als de producten die u wilt parkeren niet aan orders zijn toegewezen, kunt u ze parkeren vanaf het tabblad met productdetails.

<img src={require("/img/park-free-stock-private-stock-tab.png").default} height="" width="800" />

Een deel van de vrije voorraad reserveren:

1. Open **Product Management > Products**.
2. Zoek en open het product dat u wilt parkeren.
3. Ga op de detailpagina van het product naar het tabblad **Topic menu > Stock > Private stock**.
4. Klik op het pictogram <img src={require("/img/shopping-trolley.png").default}  /> aan het einde van de rij met de locatie.
5. Geef in het pop-upvenster op hoeveel voorraaditems u wilt parkeren. Tussen haakjes ziet u het totale aantal items dat beschikbaar is om te parkeren.
<img src={require("/img/park-stock-dialog.png").default}  />
6. Klik op **Save** om het gekozen aantal te parkeren.

### Een geavanceerd product parkeren {#how-to-park-advanced-product}

Bij geavanceerde producten, waarbij elk voorraaditem in het magazijn uniek is, scant en markeert u elk afzonderlijk item dat u wilt parkeren.

<img src={require("/img/warehouse-operations-scan-item.png").default} height="" width="800" />

Een geavanceerd voorraaditem parkeren:

1. Open het tabblad **Product Management > Warehouse Operations > Scan Product**.
2. Scan de barcode van het voorraaditem dat u wilt parkeren.
(Of) vul de code van het voorraaditem in het veld **Scan code** in en klik op het pictogram <img src={require("/img/magnifier-color.png").default}  />.
3. Klik op de knop **Mark As Parked**.

De status van het geavanceerde voorraaditem verandert in "Parked". De beschikbare hoeveelheid van het product wordt met één verlaagd.

## Geparkeerde voorraad beheren {#how-to-manage-parked-stock}

De geparkeerde voorraad van een bepaald product beheert u vanaf de detailpagina van het product.

<img src={require("/img/product-details-parked-stock.png").default} height="" width="800" />

Open het tabblad Product Details > Stock > Parked Stock en selecteer een rij met een locatie van geparkeerde voorraad.
U kunt nu:
**Remove** - de geselecteerde voorraad verwijderen.
Geavanceerde voorraaditems worden als verwijderd gemarkeerd en zijn niet beschikbaar voor toewijzing. De hoeveelheid van het product wordt dienovereenkomstig verlaagd.

**Release as available stock**
De reservering van de voorraaditems opheffen, zodat de geselecteerde items weer beschikbaar zijn voor toewijzing.

**Assign to orders**
Klik op deze knop om geparkeerde voorraad handmatig aan backorders toe te wijzen.
Er opent een nieuw pop-upvenster waarin u kiest aan welke order u de voorraad toewijst.
<img src={require("/img/parked-stock-allocation.png").default} height="" width="800" />

Vink de orders aan die u wilt toewijzen en klik op de knop **Allocate**.
U kunt de prioriteit van de backorders instellen op het tabblad Product Details > Backorders.
