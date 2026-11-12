---
sidebar_position: 3
slug: /docs/how-to-set-up-price-export-to-amazon-3p
description: "Stel de prijsexport van ShopCtrl naar Amazon 3P in, inclusief prijscontrole en prijsvalidatie op de achtergrond met meldingen bij afwijkingen."
---

# De prijsexport naar Amazon 3P instellen


Een goed ingerichte prijsexport is essentieel om prijzen op al uw verkoopkanalen consistent en juist te houden. ShopCtrl is de centrale bron: het exporteert prijzen naar alle marktplaatsen en verkoopkanalen, zodat het productinformatiebeheer (PIM) op alle verkooppunten klopt. In deze handleiding leest u stap voor stap hoe u de prijsexport naar Amazon 3P instelt, zodat uw prijzen altijd actueel zijn en gelijklopen met Amazon. Volg de onderstaande stappen om te beginnen.

## Stap 1. Productprijzen in ShopCtrl controleren {#step-1-verify-product-prices-in-shopctrl}
Controleer voordat u de prijsexport instelt of alle producten die op Amazon zijn gepubliceerd de juiste prijzen in ShopCtrl hebben. Prijzen kunt u bijwerken via de productimport via Excel: [Productprijzen importeren en de beschikbaarheid van producten per shop wijzigen](/User-Guide/08-Product-Management/Product-Import/product-import-via-excel.md#how-to-import-product-price-and-change-product-availability-per-shop).

U kunt hetzelfde profiel gebruiken om producten te exporteren en te controleren op ontbrekende gegevens. Gebruik voor een laatste controle hetzelfde shopspecifieke profiel 'Price update' om producten uit ShopCtrl te exporteren, zodat u zeker weet dat alle producten zijn bijgewerkt.

Nu kunnen we naar de volgende stap.

## Stap 2. Prijsvalidatie in ShopCtrl configureren en testen {#step-2-configure-and-test-price-validation-in-shopctrl}

U kunt de prijsvalidatie los van de prijsexport gebruiken. Deze functie controleert op de achtergrond of er verschillen in productprijzen zijn. Voor alle producten waarvan de prijs afwijkt van die in ShopCtrl, worden meldingen aangemaakt.

<img src={require("/img/amazon-price-validation.png").default} height="" width="800" />


Stappen om de prijsvalidatie in te schakelen:

1. Zoek in ShopCtrl de shop waarvoor de Amazon 3P-synchronisatie is ingesteld en open de instellingen.
2. Selecteer in het menu **Synchronization settings > Amazon 3P Synchronization**.
3. Schakel in het deelvenster **Synchronization Customization** onder **Products Integration** het volgende in:
    * **Validate Amazon product prices:** vraagt periodiek een rapport op bij Amazon en controleert op prijsverschillen.
4. Configureer het deelvenster Amazon Price Validation:
    * **Period in minutes:** geef het interval (in minuten) op waarmee het prijs- en voorraadrapport bij Amazon wordt opgevraagd. De aanbevolen instelling is 8 uur.
    * **Set unmatched after minutes:** geef de periode (in minuten) op waarna een prijs in Amazon Seller Central als afwijkend wordt beschouwd. De gebruikelijke instelling is 24 uur (1440 min). ShopCtrl geldt als de leidende bron.
   * **Create unmatched price alerts:** bepaal of er na de opgegeven periode meldingen worden aangemaakt voor afwijkende prijzen. Deze meldingen bevatten gedetailleerde informatie over het product en het prijsverschil met Amazon Seller Central.
    * **Validate inactive product price:** kies of de prijzen van inactieve producten op Amazon ook worden vergeleken. Als u dit niet selecteert, worden deze producten niet in het rapport opgenomen en hoeven er minder producten te worden vergeleken.
5. Klik op **Save or Save and Close** om de wijzigingen voor de shop toe te passen.

### De prijsvalidatie testen {#testing-the-price-validation-feature}
Om de prijsvalidatie te testen, hoeft de prijsexport niet te zijn ingeschakeld.
Om te testen raden we aan de perioden **Set unmatched after minutes** en **Period in minutes** tijdelijk op 1 uur te zetten. Zo kunt u de prijsvalidatie binnen één werkdag testen.

Als alle productprijzen overeenkomen met de prijzen op Amazon, kunt u testen met een paar speciaal gekozen producten. Wijzig de productprijs in ShopCtrl in een bedrag dat afwijkt van Amazon (met de prijsexport naar Amazon uitgeschakeld in ShopCtrl, zodat de wijziging niet naar Amazon wordt gesynchroniseerd). ShopCtrl vraagt een rapport op bij Amazon, analyseert het en maakt na de ingestelde periode een melding aan.

<img src={require("/img/alert-unmatched-amazon-price.png").default} height="" width="800" />

Zet de perioden en prijzen na het testen terug op hun standaardwaarden. Het vaak ophalen van rapporten kan de prestaties van alle Amazon 3P-functies in de omgeving beïnvloeden.


## Stap 3. De prijsexport vanuit ShopCtrl configureren en testen {#step-3-configure-and-test-price-export-from-shopctrl}


Na het inschakelen van de synchronisatie begint ShopCtrl met het vastleggen van prijswijzigingen. Let op: prijswijzigingen van vóór het inschakelen van deze functie worden niet naar Amazon gesynchroniseerd. Zo kunt u de wijzigingen volgen en testen met een beperkt aantal testproducten.

### De functie testen: {#to-test-the-feature}

Zorg dat andere medewerkers tijdens de testperiode geen productprijzen in dezelfde omgeving wijzigen.
U kunt eventueel testen op een manier die uw verkoop niet beïnvloedt. Kies een of meer producten op Amazon die **niet op voorraad** zijn en de status **inactive** hebben. Amazon accepteert geen updates voor **gesloten** aanbiedingen (closed listings), maar de prijzen van aanbiedingen die niet op voorraad zijn, kunnen wel worden bijgewerkt.


**De export van productprijzen inschakelen:**
<img src={require("/img/export-product-price.png").default} height="" width="800" />

1. Zoek in ShopCtrl de shop waarvoor de Amazon 3P-synchronisatie is ingesteld en open de instellingen.
2. Selecteer in het menu **Synchronization settings > Amazon 3P Synchronization**.
3. Schakel in het deelvenster **Synchronization Customization** onder **Products Integration** het volgende in:
    * **Export changed product prices:** werkt de bijbehorende prijzen van de aanbiedingen bij.
4. Controleer of de functie **Sync product publish state** voor de shop is uitgeschakeld.
5. Klik op **Save or Save and Close** om de wijzigingen voor de shop toe te passen.

Nu kunnen we de productprijs in ShopCtrl wijzigen.

**Werk de productprijs handmatig bij of via de productimport via Excel.**

**De productprijs handmatig bijwerken:**

1. Open het product in ShopCtrl en ga naar het tabblad Retail price.
2. Dubbelklik op de rij Amazon 3P en wijzig de waarde Foreign Price Including VAT voor de Amazon-shop.
3. Sla het product op.

De gewijzigde productprijs wordt binnen 15 minuten naar Amazon gesynchroniseerd. Het kan echter langer duren voordat Amazon de wijziging heeft verwerkt.
Log na 1 tot 12 uur in bij Seller Central en controleer of de prijswijziging voor het betreffende product is doorgevoerd. Als de prijswijziging in strijd was met de prijsregels van Amazon, bekijk dan de melding bij het product.

ShopCtrl vraagt ook op de achtergrond een productrapport op bij Amazon en maakt meldingen aan als prijzen niet binnen de opgegeven periode (standaard 24 uur) zijn gewijzigd.

Als er vóór het inschakelen van de synchronisatie veel prijzen niet gelijk lopen, neem dan contact op met de support van ShopCtrl om een eerste bulkexport uit te voeren.
