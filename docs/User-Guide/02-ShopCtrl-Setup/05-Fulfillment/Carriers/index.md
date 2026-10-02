---
sidebar_position: 6
slug: /docs/carriers
description: "Carrier accounts in ShopCtrl, and the full list of available shipping integrations including DHL, GLS, UPS, PostNL and Royal Mail."
---

import CarrierGrid from '@site/src/components/CarrierGrid';

# Carriers 

Integrations with shipping services in ShopCtrl are configured through carrier accounts. ShopCtrl connects to international parcel services, regional carriers and freight companies.

## Available carriers

### Parcel carriers

<CarrierGrid carriers={[
  { name: "DHL", logo: "/img/DHL-LOGO.jpg", services: "Europlus, Express, For You, Parcel UK", guide: "/docs/dhl-parcel-uk" },
  { name: "DPD" },
  { name: "GLS", logo: "/img/gls-icon.png", services: "Business Parcel, Euro Business Parcel, Express Parcel", guide: "/docs/gls" },
  { name: "PostNL", logo: "/img/logo_postnl.png", services: "Parcels, Extra@Home", guide: "/docs/postnl" },
  { name: "Red je Pakketje" },
  { name: "Royal Mail", logo: "/img/uk-royal-mail-icon.png", services: "Click & Drop", guide: "/docs/royal-mail" },
  { name: "UPS", logo: "/img/ups-logo.png", guide: "/docs/ups" },
]} />

### Pallet and freight

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

### Amazon shipping

<CarrierGrid carriers={[
  { name: "Amazon Seller Fulfilled Prime", logo: "/img/amazon.jpg", services: "Prime shipping labels for Amazon 3P orders", guide: "/docs/amazon-seller-fulfilled-prime" },
  { name: "Amazon Freight", logo: "/img/amazon.jpg", services: "Freight bookings for Amazon 1P orders", guide: "/docs/amazon-freight" },
  { name: "Amazon Direct Fulfillment", logo: "/img/amazon.jpg", services: "Shipping labels for Amazon 1P dropship orders", guide: "/docs/setting-up-direct-fulfillment" },
]} />

### Other shipping options

<CarrierGrid carriers={[
  { name: "Bumbal", services: "Route planning for your own delivery fleet" },
  { name: "Generic carrier", services: "Any other carrier: enter tracking codes by hand or connect through webhooks" },
  { name: "Pick up", services: "The customer collects the order" },
]} />
