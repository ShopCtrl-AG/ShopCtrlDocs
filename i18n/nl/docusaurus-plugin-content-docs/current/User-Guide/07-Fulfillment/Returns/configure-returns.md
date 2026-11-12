---
sidebar_position: 3
slug: /docs/configure-returns
description: "Configureer retouren in ShopCtrl door de retourredenen en -condities van uw bedrijf vast te leggen, plus eigen statussen voor retouren en retourregels."
---
# Retouren configureren



:::info[**Vereiste rechten**]

Een medewerker moet met de rol **Shop Owner Admin** aan de shop gekoppeld zijn om de acties in dit artikel uit te voeren.

:::

Om retouren te gebruiken, legt u de **redenen** en **condities** voor retouren vast die uw bedrijf gebruikt. U kunt ook de statussen van retouren en retourregels vervangen door eigen statussen, of de standaardstatussen laten staan.

### Retourcondities {#return-conditions}

U begint met het vastleggen van de retourcondities in **Configuration > Returns > Return conditions**.

<img src={require("/img/configuring-returns-conditions.png").default} height="" width="800" />

Geef de condities of toestanden op waarin klanten een product kunnen retourneren.

Klik op Add en vul de naam van de conditie in om een nieuwe conditie aan te maken. Klik op Save om deze aan de lijst toe te voegen.
<img src={require("/img/new-return-condition.png").default} height="" width="800" />

### Retourredenen {#return-reasons}

Leg op dezelfde manier als bij condities de redenen vast die uw bedrijf gebruikt voor retouren en terugbetalingen.
**Configuration > Returns > Return reasons**

De redenen kunnen worden gebruikt als reden om de order te **crediteren**, als reden voor een **retour**, of allebei.

<img src={require("/img/returns-reasons-configuration.png").default} height="" width="800" />

Een nieuwe reden aanmaken:

1. Klik op **Add**.
<img src={require("/img/new-return-reason.png").default} height="" width="800" />
2. Vul de **Name** van de reden in.
3. **Can be used for credits** - vink dit selectievakje aan als u deze reden wilt gebruiken als reden om de order te **crediteren**.
4. **Can be used for returns** - vink dit selectievakje aan als u deze reden wilt gebruiken als reden voor een **retour** van de order.
5. Klik op **Save** om de nieuwe reden aan de lijst toe te voegen.

### Retourstatussen {#return-statuses}

De statussen van retouren en retourregels legt u vast in **Configuration > Returns > Return statuses**.
U kunt de definities van statussen bewerken, nieuwe statussen toevoegen en eigen pictogrammen voor de statussen instellen. Schakel een status uit om deze uit de lijst met selecteerbare statussen te verwijderen.
<img src={require("/img/returns-statuses-configurartion.png").default} height="" width="800" />

Regels voor het automatisch wijzigen van de retourstatus kunt u instellen met [triggers](/User-Guide/02-ShopCtrl-Setup/02-General-Setup/05-Triggers/index.md).

Hieronder staan de vooraf ingestelde standaardstatussen.

#### Hoofdstatus {#main-status}

| <img src={require("/img/house.png").default} height="18" width="18" /> | Main Status | Base Status | Betekenis |
| --- | --- | --- | --- |
| <img src={require("/img/image(15).png").default} height="" width="" /> | Active | Active | Actieve retouren die moeten worden verwerkt |
| <img src={require("/img/image(14).png").default} height="" width="" /> | Requested | Pause | Geeft aan dat de klant om een retour heeft gevraagd |
| <img src={require("/img/image(17).png").default} height="" width="" />  | Finished | Finished | De retour is afgerond |
| <img src={require("/img/image(18).png").default} height="" width="" /> | Cancelled | Cancel | De retour is geannuleerd |

#### Statussen van retourregels {#return-row-statuses}

| <img src={require("/img/product-icon.png").default} height="18" width="18" /> | Main Status | Base Status | Betekenis |
| --- | --- | --- | --- |
| <img src={require("/img/image(14).png").default} height="" width="" /> | New | Pause | De klant heeft aangegeven dat dit product wordt geretourneerd |
| <img src={require("/img/image(15).png").default} height="" width="" /> | Received | Active | Het product is in het magazijn ontvangen en moet worden beoordeeld |
| <img src={require("/img/image(17).png").default} height="" width="" />  | Accepted | Finished | Het product is beoordeeld en geaccepteerd |
| <img src={require("/img/image(18).png").default} height="" width="" /> | Rejected | Cancel | Het product is beoordeeld en afgewezen voor terugbetaling |
| <img src={require("/img/image(18).png").default} height="" width="" /> | Cancelled | Cancel | De retour van het product is geannuleerd |


### Aanvullende instellingen {#additional-settings}

Een aantal aanvullende instellingen voor **retourbeheer** vindt u op de detailpagina van de shop.
**Configuration > Shops > Shop details page > Returns**

:::info

Deze instellingen kunnen per shop, per shopgroep of voor het hele systeem gelden. Wijzig het niveau door op het pijltje aan het einde van de rij te klikken.

:::
<img src={require("/img/returns-settings-shop-details.png").default} height="" width="800" />

**Return form template** - momenteel niet in gebruik. U kunt een sjabloon selecteren waarmee bij het opslaan van een retour een retourformulier wordt gegenereerd, dat u na een verzoek handmatig naar de klant stuurt.
**Is reason required**, **Is condition required**
Geef aan of de **reden** en de **conditie** verplichte velden zijn bij het registreren van retouren.
**Allow receive date in past** - bepaal of u retouren met terugwerkende kracht wilt kunnen registreren.


Op het niveau van de shop owner, **Configuration > Shop Owners > Shop owner details page > Fulfillment > Return Settings**:
**Warehouse should be mandatory for Returns.** Standaardinstelling waardoor u geen retour kunt aanmaken zonder een magazijn op te geven.

<img src={require("/img/shopowner-warehouse-mandatory.png").default} height="" width="800" />
