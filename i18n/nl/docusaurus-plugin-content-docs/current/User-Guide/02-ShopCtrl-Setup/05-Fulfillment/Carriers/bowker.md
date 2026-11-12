---
sidebar_position: 2
slug: /docs/bowker
description: "Koppel de vervoerder Bowker Transport aan ShopCtrl om palletzendingen te versturen, levertijden in te stellen en pdf-labels met trackingcodes af te drukken."
---

# Bowker 


<img src={require("/img/bowker_logo.png").default} height="" width="150" />

## Over Bowker {#about-bowker}

[Bowker Transport](https://www.bowkertransport.co.uk/) is een logistiek familiebedrijf, opgericht in 1919, dat een breed scala aan transport- en opslagdiensten in het Verenigd Koninkrijk biedt.
Als lid van Palletline, het enige Britse palletnetwerk dat is geselecteerd voor het Inbound Preferred Carrier Program (IPCP) van Amazon, zorgt Bowker Transport voor [betrouwbare en kostenefficiënte levering](https://www.bowkertransport.co.uk/palletline) aan Amazon Fulfillment Centers met vaste tijdsloten. Met een uitgebreid netwerk van strategisch gelegen distributiecentra in het VK en een toegewijd supportteam maakt Bowker het inkomende vrachtproces eenvoudiger en sneller, met naadloze transportoplossingen voor klanten.

Met de integratie van ShopCtrl met de Bowker API kunt u zendingen rechtstreeks naar Bowker sturen, beperkingen voor de levertijd opgeven, en per pallet pdf-verzendlabels, trackingcodes en tracking-URL's ontvangen en afdrukken.

De integratie met Bowker is geschikt voor zendingen op halve pallets en hele pallets, en ondersteunt 2 leveringstypen:
* Economy
* Next day

## Aan de slag met de Bowker-integratie {#how-to-start-using-bowker-carrier-integration}

:::info[Vereiste rechten]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::
Om de Bowker-integratie te gebruiken, hebt u inloggegevens voor de API-integratie (gebruikersnaam en wachtwoord) van de support van Bowker nodig.

Een Bowker-vervoerdersaccount aanmaken en configureren in ShopCtrl:

<img src={require("/img/bowker-settings.png").default} height="" width="800" />

1. Log in als gebruiker met shop owner-rechten.
2. Ga naar **Configuration > Transport > Carrier Accounts**.
3. Klik op **Add** en selecteer de vervoerder **Bowker** in de lijst.
4. Vul de gewenste **Name** voor de integratie in.
5. Stel de **Priority** van de vervoerder in.
6. Kies de **Shops** en/of **Warehouses** waarvoor de vervoerder beschikbaar is.
7. Vul rechts de **Default goods description** voor uw zendingen in. U kunt deze later per zending overschrijven.
8. (Optioneel) Vink in het deelvenster **Specifics** de **Sandmox mode** aan als u in de productieomgeving een label wilt aanmaken met het ordervoorvoegsel `TEST`.
:::warning[**Let op:**]

Bowker heeft geen aparte sandboxomgeving. Om het aanmaken van labels te **testen**, kunt u met dit selectievakje in de productieomgeving een label aanmaken met het voorvoegsel TEST in het nummer. Zo is duidelijk dat het label voor testdoeleinden is aangemaakt en niet moet worden verwerkt.

:::
9. Controleer of de vooraf ingevulde **Production url** overeenkomt met de gegevens die u van Bowker hebt gekregen.
10. Vul de **Username** en het **Password** in die u van het supportteam van Bowker hebt gekregen.
11. (Optioneel) Schakel **Extended logging** in voor de beginperiode.
12. U kunt nu op **Test connection** klikken om te controleren of de autorisatie bij Bowker slaagt.
:::warning

Bij autorisatiefouten controleert u of de ingevulde gegevens overeenkomen met de gegevens van Bowker, of neemt u contact op met de support van Bowker.

:::
13. Geef in het gedeelte **Account info** de gewenste **Collection date** op:
    * Do not specify - kan later per zending worden opgegeven in de pakketparameters.
    * Today regardless of weekend/holiday
    * Next day checking if weekend/holiday setting enabled
14. Schakel indien nodig **Weekend collection date** in.
15. Kies het **Delivery type**:
    * **Economy**
    * **Next day**
16. Kies het standaard **Delivery window**:
    * During day
    * AM (extra kosten)
    * PM (extra kosten)
    * Book in
    * At (voor deze optie moet per zending een levertijd worden opgegeven, extra kosten)
17. Bepaal of voor het laden een laadklep nodig is (**Tail lift is required**).
18. De **Default template parameters** zijn vooraf ingesteld. U kunt alle parameters aanpassen:
    * Papiertype
    * Afdrukstand
    * Paginamarges
    * Labelformaat
    * Pagina-einde tussen labels toevoegen of verwijderen
19. Sla het nieuwe vervoerdersaccount op met **Save**.


U kunt het voorbeeldsjabloon voor Bowker-verzendlabels testen en afdrukken door de **Test mode** in te schakelen. In de testmodus gebruikt ShopCtrl bij elke zending die u aanmaakt hetzelfde voorbeeldlabel van Bowker. U kunt het labelformaat en de marges zo vaak aanpassen als nodig, tot het label aan uw eisen voldoet. Tijdens het testen worden geen echte labels aangemaakt.
Schakel de Test mode en de Sandbox mode uit (**Disable**) wanneer de testfase voorbij is.
