---
sidebar_position: 1
slug: /docs/understanding-employee-roles-and-permissions
description: "Hoe rollen de toegang tot functies in ShopCtrl beperken, en wat elke standaardrol, van System Admin tot Shop Owner Admin, mag doen."
---

# Rollen en rechten van medewerkers

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

::::

Met medewerkersrollen beperkt u de toegang tot de verschillende functies van ShopCtrl op basis van de rol van een medewerker in uw organisatie.
Het verkoopteam heeft bijvoorbeeld geen toegang tot de medewerkersinstellingen of de shopconfiguratie.

Op deze pagina ziet u de rechten van de standaardrollen.
U kunt zoveel gebruikersrollen aanmaken als u wilt en er verschillende sets rechten aan toekennen. Zie [Rollen en rechten beheren](./manage-roles-and-permissions.md) voor meer informatie.

## Standaardrollen {#predefined-roles}

**System Admin** - de beheerder heeft volledige toegang tot alle configuraties, logboeken, shop owners en shops. Het systeembeheer wordt uitgevoerd door ShopCtrl.

**Shop Owner Admin** - volledige toegang tot alle functies en configuraties van ShopCtrl, waaronder de shop en shop owner, de configuratie van vervoerdersaccounts, de synchronisatiestatus, instellingen voor triggers en webhooks, document- en e-mailsjablonen, rapportages en medewerkersbeheer.

**Admin** - de rol shop admin geeft toegang tot de meeste functies van ShopCtrl, waaronder de shopconfiguratie, maar alleen voor de shops waaraan de admin is gekoppeld. Een shop admin heeft toegang tot productbeheer, waaronder magazijnhandelingen, de configuratie van statussen, rapportages, het beheer van document- en e-mailsjablonen, Bulk Operations, e-mail en de Bulk Operations Scheduler.

**Power User** - heeft volledige toegang tot modules, waaronder financiële gegevens, inkoop en magazijnbeheer. Heeft echter maar toegang tot een zeer beperkt aantal shopinstellingen, zoals e-mailsjablonen, het beheer van de wiki en categorieën, en een deel van de rapporten (instelbaar).

**User** - heeft toegang tot de meeste modules en kan orders, zendingen en producten bewerken, inclusief publiceren, maar heeft geen toegang tot configuraties. Let op: een user mag geen items verwijderen en kan financiële gegevens alleen bekijken.

**Guest** - minimale toegang tot ShopCtrl: alleen het bekijken van enkele onderdelen, zoals communicatie, orders en zendingen van de shops waaraan de guest is gekoppeld.

De volledige lijst met standaardrollen en -rechten die in uw ShopCtrl-omgeving zijn ingesteld, vindt u op **Shop Owner details page > Authorization**.

:::info

In deze documentatie verwijzen we steeds naar de standaardrollen wanneer we beschrijven welke rechten nodig zijn voor bepaalde functies van ShopCtrl. U kunt de rollen aanpassen aan uw eigen behoeften en eisen, of nieuwe rollen aanmaken.

:::
