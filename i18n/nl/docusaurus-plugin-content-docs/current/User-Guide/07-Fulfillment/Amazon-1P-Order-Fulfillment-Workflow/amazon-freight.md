---
sidebar_position: 5
slug: /docs/amazon-freight
description: "Koppel Amazon Freight via SFTP aan ShopCtrl om inkomende en uitgaande logistieke gegevens te automatiseren, met een sandbox- en een productieomgeving."
---



# Integratie met Amazon Freight

ShopCtrl ondersteunt nu een rechtstreekse integratie met **Amazon Freight**. Met deze koppeling automatiseert u de uitwisseling van inkomende en uitgaande logistieke gegevens, waaronder het automatisch downloaden van verzenddocumenten en het uploaden van zendingsstatussen.

## Overzicht {#overview}

De integratie gebruikt een beveiligde verbinding via SFTP om met de vrachtservers van Amazon te communiceren. Er is een **Sandbox**-omgeving om te testen en een **Production**-omgeving voor het echte werk.

## 1. Verbindingsinstellingen {#1-connection-settings}
Om een verbinding tot stand te brengen, configureert u zowel de instellingen voor downloaden (inkomend) als voor uploaden (uitgaand) die u van uw accountmanager bij Amazon Freight hebt gekregen.

### Vereisten: {#requirements}

*   **Host & Port**: het adres en de poort van de SFTP-server.
*   **Authenticatie**: u moet een **Username**, een **Passphrase** en een bestand met de **Private Key (.key)** opgeven.
*   **Mappen**: de paden van de mappen waarin Amazon bestanden klaarzet om te downloaden en waarin ShopCtrl antwoorden moet uploaden.

### De verbinding instellen: {#setting-up-the-connection}

1.  Ga naar **Carrier Accounts > Amazon Freight**.
2.  Kies het tabblad van de omgeving **Production** of **Sandbox**.
3.  Vul uw SFTP-inloggegevens in.
4.  Upload uw **Private Key (.key)** met de knop **Upload** naast het sleutelveld.
5.  Klik op **Check Download Connection** of **Check Upload Connection** om de gegevens te controleren.

<img src={require("/img/amazon-freight-connection-settings.png").default} height="" width="800" />

## 2. Accountgegevens en functionele instellingen {#2-account-info--functional-settings}

In dit gedeelte legt u de standaardwaarden vast die bij elk verzendverzoek naar Amazon Freight worden gestuurd. Zo worden uw logistieke eisen correct aan de vervoerder doorgegeven.

*   **Shipper ID & SCAC**: vul uw unieke leverancierscode bij Amazon in. De Standard Carrier Alpha Code (SCAC) voor Amazon Freight is meestal **'AFXN'**.
*   **Equipment Code (optioneel)**: het type container.
    *   `CT` – 13,6 m schuifzeiltrailer (standaard)
    *   `SD` – trailer met één laadvloer
*   **Equipment Length (optioneel)**: vul indien nodig de lengte van de container in.
*   **Lading Type**: het type lading (bijvoorbeeld `FREIGHT` of `PALLETS`).
*   **Palletgegevens**:
    *   **Pallet Type**: kies uit `EU_PALLET`, `UK_PALLET` of `LOOSE`.
    *   **Pallet Grade**: geef de kwaliteit op (bijvoorbeeld `GRADE_A`, `GRADE_B` of `GRADE_C`).
* **Special Services Codes**
Met deze codes geeft u specifieke afhandelingseisen voor uw zendingen op:

| Code | Omschrijving van de dienst |
| :--- | :--- |
| **CU** | Customer Unload (SLP Customer) |
| **CC** | Carrier Unload (Non SLP Customer) |
| **DH** | Drop and Hook |
| **EU** | Exclusive Use of Equipment |
| **H1** | Temperature Protection |
| **LL** | Loading Service |
| **V1** | Drop Yard |

    <img src={require("/img/amazon-freight-admin-account-info-and-functional-settings.png").default} height="" width="800" />

## 3. Planning en tijdvensters {#3-scheduling--windows}

Met deze instellingen legt u de tijdvakken vast die aan Amazon worden doorgegeven: wanneer een vrachtwagen moet aankomen en wanneer de goederen op hun bestemming moeten zijn.

*   **Pickup Windows**: het tijdvenster waarin de vrachtwagen bij uw locatie aankomt.
    *   **Earliest/Latest Pickup Hour**: de ophaal**datum** wordt overgenomen van de pagina **Group Shipment**; met deze instellingen bepaalt u de uren.
    *   **Vensters over meerdere dagen**: standaard wordt aangenomen dat het venster binnen één dag valt. Om een venster in te stellen dat meerdere dagen beslaat, geeft u voor de periode "End" een waarde **groter dan 24** op.
*   **Delivery Windows**: het tijdvenster voor de aankomst bij het fulfilmentcentrum van Amazon.
    *   **Earliest/Latest Delivery Hour**: net als bij het ophalen wordt de datum bepaald op de pagina **Group Shipment**.
    *   **Langere vensters**: als het leveringsvenster meer dan één dag moet beslaan, geeft u voor de periode "End" een waarde **> 24 uur** op.

    <img src={require("/img/amazon-freight-scheduling-windows-settings.png").default} height="" width="800" />


## 4. Handmatige beheertools {#4-admin-manual-tools}
Gebruik deze tools onderaan de pagina om handmatig in te grijpen of bestanden opnieuw te verwerken:

*   **Demo mode**: schakel dit in om het proces te simuleren. Het eigenlijke uploaden en downloaden van bestanden naar en van de SFTP-server wordt dan overgeslagen.
*   **Download inbound file**: haal een bepaald bestand op door het pad op de server en de bestandsnaam in te vullen.
*   **Delete inbound file**: verwijdert een bestand op de SFTP-server van Amazon.
*   **Create Sync Request for manual inbound file**: start handmatig een verwerkingstaak voor een bepaald document.

    <img src={require("/img/amazon-freight-admin-manual-mode-settings.png").default} height="" width="800" />
