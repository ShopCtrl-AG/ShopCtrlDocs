---
sidebar_position: 6
slug: /docs/virtualstock-updating-product-mappings
description: "Koppel nieuw toegevoegde producten aan offers in Virtualstock en start een voorraadexport, zodat hun voorraadniveaus in Virtualstock terechtkomen."
---

# Productkoppelingen bijwerken

:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Het koppelen van producten aan offers is een doorlopend proces. Telkens wanneer er nieuwe producten worden toegevoegd in **zowel** ShopCtrl als Virtual Stock (Edge), moet u het koppelen herhalen om de verbinding voor deze nieuwe artikelen tot stand te brengen.

Na het aanmaken van nieuwe koppelingen moet u ook handmatig een voorraadexport starten, zodat de voorraadniveaus van de nieuwe producten in het systeem van Virtual Stock worden bijgewerkt.

Stappen om nieuwe producten te koppelen:

1.  **Voorwaarde:** zorg dat op beide platforms een product bestaat met een identieke **Product Code** in ShopCtrl en **Supplier Part Number (SKU)** in Virtual Stock.
2. Log in bij ShopCtrl met **Shop Owner Admin**-rechten.
3. Ga naar **Configuration > Shops**.
4. Selecteer uw Virtual Stock-shop en klik op **Edit**.
5.  Ga naar het tabblad **Shop synchronization > Edge Synchronization** en open het deelvenster **Products and Offers**.
6. Klik op **Download offers** om de nieuwste lijst met offers uit Virtual Stock op te halen.
7.  Klik op **Preview** om een bestand met de verwachte koppelingen te genereren. Bekijk de tabbladen **Create** en **Update** om nieuwe en gewijzigde koppelingen te zien.
8. Klik na controle op **Map** om het koppelen in ShopCtrl af te ronden.
9. **Voorraadexport starten:** klik handmatig op **Mark products for export**. Hiermee worden synchronisatieverzoeken aangemaakt om alle gekoppelde producten in Virtual Stock bij te werken.
:::info[Verwerkingstijd van de export]

Het kan tot 20 minuten duren voordat de export is voltooid, omdat producten in batches van 50 naar de API worden gestuurd om binnen de limieten te blijven.

:::
10. **Controle:** controleer of de voorraadexport is geslaagd door de productgegevens rechtstreeks in uw Virtual Stock-account te bekijken, of door in ShopCtrl een nieuw **Preview**-bestand te downloaden en de bijgewerkte status te bekijken.
