---
sidebar_position: 6
slug: /docs/carriers
description: "Vervoerdersaccounts in ShopCtrl, en de volledige lijst met beschikbare verzendintegraties, waaronder DHL, GLS, UPS, PostNL en Royal Mail."
---

import CarrierGrid from '@site/src/components/CarrierGrid';

# Vervoerders

Integraties met verzenddiensten stelt u in ShopCtrl in via vervoerdersaccounts. ShopCtrl koppelt met internationale pakketdiensten, regionale vervoerders en vrachtvervoerders.

## Beschikbare vervoerders {#available-carriers}

### Pakketvervoerders {#parcel-carriers}

<CarrierGrid carriers={[
  { name: "DHL", logo: "/img/DHL-LOGO.jpg", services: "Europlus, Express, For You, Parcel UK", guide: "/docs/dhl-parcel-uk" },
  { name: "DPD" },
  { name: "GLS", logo: "/img/gls-icon.png", services: "Business Parcel, Euro Business Parcel, Express Parcel", guide: "/docs/gls" },
  { name: "PostNL", logo: "/img/logo_postnl.png", services: "Parcels, Extra@Home", guide: "/docs/postnl" },
  { name: "Red je Pakketje" },
  { name: "Royal Mail", logo: "/img/uk-royal-mail-icon.png", services: "Click & Drop", guide: "/docs/royal-mail" },
  { name: "UPS", logo: "/img/ups-logo.png", guide: "/docs/ups" },
]} />

### Pallets en vracht {#pallet-and-freight}

<CarrierGrid carriers={[
  { name: "Bowker", logo: "/img/bowker_logo.png", guide: "/docs/bowker" },
  { name: "De Rooy" },
  { name: "Dobbe Transport" },
  { name: "DutchNed" },
  { name: "Dynalogic", logo: "/img/dynalogic_logo.png", guide: "/docs/dynalogic" },
  { name: "Hertgers" },
  { name: "JKB" },
  { name: "Mainfreight" },
  { name: "Palletways", logo: "/img/logo_palletways.png", guide: "/docs/palletways" },
  { name: "Raben" },
]} />

### Verzending via Amazon {#amazon-shipping}

<CarrierGrid carriers={[
  { name: "Amazon Seller Fulfilled Prime", logo: "/img/amazon.jpg", services: "Prime-verzendlabels voor Amazon 3P-orders", guide: "/docs/amazon-seller-fulfilled-prime" },
  { name: "Amazon Freight", logo: "/img/amazon.jpg", services: "Vrachtboekingen voor Amazon 1P-orders", guide: "/docs/amazon-freight" },
  { name: "Amazon Direct Fulfillment", logo: "/img/amazon.jpg", services: "Verzendlabels voor Amazon 1P-dropshiporders", guide: "/docs/setting-up-direct-fulfillment" },
]} />

### Andere verzendopties {#other-shipping-options}

<CarrierGrid carriers={[
  { name: "Bumbal", services: "Routeplanning voor uw eigen bezorgvloot" },
  { name: "Generic carrier", services: "Elke andere vervoerder: voer trackingcodes handmatig in of koppel via webhooks" },
  { name: "Pick up", services: "De klant haalt de order zelf op" },
]} />
