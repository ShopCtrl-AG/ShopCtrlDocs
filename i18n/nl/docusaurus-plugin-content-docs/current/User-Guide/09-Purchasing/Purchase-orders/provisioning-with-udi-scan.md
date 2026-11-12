---
sidebar_position: 9
slug: /docs/provisioning-with-udi-scan
description: "Gebruik UDI-barcodescans tijdens Provisioning in ShopCtrl om velden van voorraaditems automatisch in te vullen en fouten bij handmatige invoer te beperken."
---

# Provisioning met UDI-scan

ShopCtrl ondersteunt UDI-scans (Unique Device Identification) tijdens het Provisioning-proces om het invoeren van gegevens voor voorraaditems te stroomlijnen. Elk voorraaditem in ShopCtrl wordt gevolgd met een unieke interne ID, maar u kunt nu ook belangrijke identificatiegegevens zoals serienummers, lotnummers, vervaldatums en aangepaste parameters direct via een barcodescan opslaan.

Deze functionaliteit vermindert fouten bij handmatige invoer aanzienlijk en versnelt het Provisioning-proces.

## Hoe het werkt {#how-it-works}

1. **Configureer** het barcodeformaat voor elk product op basis van het fysieke label
2. **Scan** UDI-barcodes tijdens Provisioning
3. **Vul automatisch** de velden van voorraaditems in met de uitgelezen gegevens
4. **Controleer** en sla de ingeboekte items op


## Configuratiestappen {#configuration-steps}

### Voorwaarden: parameters voor voorraaditems instellen {#prerequisites-setting-up-stock-item-parameters}

Controleer voordat u UDI-scans configureert of de parameters voor voorraaditems correct zijn ingesteld:

**Standaardvelden (altijd beschikbaar):**
- Lot Number
- Serial Number
- Expiry Date

**Aangepaste parameters toevoegen**

Als uw producten extra velden nodig hebben:

1. Log in als gebruiker met de rechten van de rol **shopowner admin**.
1. Ga naar **Configuration > Parameters > StockItem Parameter Def**.
1. Maak nieuwe parameterdefinities aan met passende namen.
    <img src={require("/img/stock-item-parameter-def.png").default} height="" width="800" />
1. Selecteer het gegevenstype (Text of Date).
1. Ga naar **Product > Stock settings > Stock item parameters > Custom parameters**.
1. Wijs de aangemaakte parameters toe aan uw product.
    <img src={require("/img/product-stock-item-parameters.png").default} height="" width="800" />
1. Sla het product op (**Save**) om de wijzigingen toe te passen. Deze velden zijn beschikbaar voor elk voorraaditem wanneer dit product de volgende keer wordt ingeboekt.

**De volledige gescande UDI-string opslaan**: maak een parameter aan met de naam **"FullUdiString"** (type String). Hierin wordt de volledige ruwe barcodewaarde ter referentie opgeslagen.
U hoeft deze parameter niet als aangepaste parameter aan het product toe te wijzen. Zodra de parameter is gedefinieerd, werkt hij automatisch.
Als de parameter FullUdiString niet is gedefinieerd, werkt het scannen wel, maar wordt er geen parameter voor het voorraaditem aangemaakt om de volledige UDI-string op te slaan.


### UDI-barcodeformaat configureren {#configuring-udi-barcode-format}

1. Ga naar **Product > UDI Configuration**.
1. Stel uw **Barcode Format** samen:
    - Selecteer velden in de linkerkolom (Available Fields).
    - Klik op de pijlknop om ze naar de rechterkolom (Selected Fields) te verplaatsen.
    - Zet de velden in precies dezelfde volgorde als op de fysieke barcode.
    - Pas de volgorde zo nodig aan met de pijlknoppen aan het begin van elke rij.
        <img src={require("/img/udi-config.png").default} height="" width="800" alt="UDI-configuratie" />
1. **Instellingen per veld**:
    - Voor LOT Number, Serial Number en Product Variant: geef de exacte lengte op (aantal tekens).
    - Voor datumvelden: geen lengte nodig (standaardformaat).
1. **Vaste tekens in het formaat configureren**:
    - Selecteer voor velden met vaste tekens in de barcode **ID prefix format** `(id)` in de vervolgkeuzelijst bovenaan.
    - Dit ondersteunt verschillende barcodestandaarden, waaronder GS1 met verschillende soorten haakjes.
1. **Test uw configuratie**:
    - Gebruik het invoerveld Test bovenaan de configuratiepagina.
    - Plak een voorbeeldwaarde van een barcode.
    - Klik op Test om te controleren of de waarden correct aan de bijbehorende velden worden toegewezen.
    - Bekijk de uitgelezen resultaten in de tabel eronder.
        <img src={require("/img/udi-config-test.png").default} height="" width="800" alt="Testdeelvenster van de UDI-configuratie" />    
1. Sla het product op (**Save**) om de wijzigingen toe te passen.

**Voorbeeld van een gangbaar GS1-128-formaat:**

`(01)`12345678901234 `(17)`250101 `(10)`LOT12345 `(21)`SN987654321

Dit voorbeeld toont een typische UDI-barcode met:
- `(01)` - GTIN (Global Trade Item Number)
- `(17)` - Vervaldatum (formaat JJMMDD)
- `(10)` - Lot-/batchnummer
- `(21)` - Serienummer

## UDI-scans gebruiken tijdens Provisioning {#using-udi-scanning-during-provisioning}

Volg deze stappen om UDI-scans te gebruiken bij het inboeken van een inkooporder:

1. **Ga naar de inkooporder** en open het Provisioning-scherm.
2. Klik op de knop **Specify** om het venster **Receive now** te openen.
3. Schakel het selectievakje **UDI scan** in om de scanmodus te activeren.
4. **Selecteer een rij** door op het selectievakje te klikken.  
   :::info
   Bewerk geen velden in de rij handmatig voordat u scant. Daardoor wordt de scanfunctie voor die rij uitgeschakeld.
   :::
5. **Scan de UDI-barcode** met uw scanner. Het systeem vult automatisch in:
   - Lotnummer
   - Serienummer
   - Vervaldatum
   - Eventuele aangepaste parameters die voor het product zijn geconfigureerd
6. **Controleer de ingevulde gegevens** op juistheid.
7. **Herhaal stap 4–6** voor elk volgend voorraaditem: selecteer de volgende rij en scan de barcode.
8. Klik op **Save** zodra alle items zijn gescand en gecontroleerd om het Provisioning-proces af te ronden. Alle UDI-gegevens worden bij de betreffende voorraaditems opgeslagen.


<img src={require("/img/provision-udi-scan.png").default} height="" width="800" />    
