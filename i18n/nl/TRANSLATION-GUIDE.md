# Dutch translation guide (nl)

This guide is for whoever translates or reviews the Dutch docs (people and AI agents).
Docusaurus does not read this file, so it is not published.

## Where things live

| What | English source | Dutch file |
|---|---|---|
| Pages | `docs/<path>.md` | `i18n/nl/docusaurus-plugin-content-docs/current/<same path>.md` |
| Sidebar category labels and descriptions | `_category_.json` files | `i18n/nl/docusaurus-plugin-content-docs/current.json` |
| Navbar and footer | `docusaurus.config.js` | `i18n/nl/docusaurus-theme-classic/navbar.json`, `footer.json` |
| Text inside React components | `src/components/*` | `i18n/nl/code.json` |

In the JSON files, translate only the `"message"` values. Never change the keys or the `"description"` values.

## Workflow

1. `node scripts/i18n-nl.mjs prepare User-Guide/<folder>` copies the English pages that have no Dutch
   version yet and adds an explicit ID to every heading, for example `## Before you start {#before-you-start}`.
2. Translate the copied files in place.
3. Review against the English source and this guide.
4. Check the result with `npx docusaurus build` (both languages; must end with 0 errors and 0 warnings) and preview with `npm run start:nl`. Do not use `npm start -- --locale nl`: PowerShell drops the `--`.
5. `node scripts/i18n-nl.mjs status` lists pages that are still untranslated and pages whose English
   source changed after the Dutch version was written.

## Rules

### Never change

- Front matter keys and these values: `id`, `slug`, `sidebar_position`, `sidebar_class_name`, `hide_title`,
  `pagination_*`. Translate only `description`, `sidebar_label`, `title` and `keywords`.
- Heading IDs: `{#...}` at the end of a heading stays exactly as it is.
- Link targets: everything inside `(...)` of a link, including `#anchors`. Translate only the link text.
  One exception: a target starting with `/docs/User-Guide/` becomes `/User-Guide/` (the prepare script
  does this). The `/docs/` form points at the English source file and breaks the Dutch build once the
  target page is translated.
- Image paths. Translate the alt text inside `![...]`.
- Code blocks, inline `code`, merge fields (for example `{{Order.Number}}`, `[OrderNumber]`), URLs,
  email addresses, file names, API field names, and any HTML/JSX attributes and component props
  (`className`, `src`, `examplesUrl`, `carriers={...}` data, and so on).
- `import` lines, JSX tags and admonition syntax (`:::info`, `:::warning`, `:::tip`, `:::`).
- Markdown structure: same headings, lists, tables, numbering, line breaks within tables.
- Copy odd-looking source syntax exactly, such as `::::` (four colons) closing an admonition.
- Component props: keep `name`, `logo`, `guide` and other data as is, but translate descriptive
  text meant for readers (for example the `services` text in `<CarrierGrid>` when it is a sentence,
  not a product name).
- Headings without a `{#id}` (for example a heading indented by a space, which the prepare script
  skips): remove the leading space and add the English ID by hand. MDX fails to build when a `{#id}`
  sits on an indented heading.

### Keep in English

ShopCtrl's interface is only available in English, so the reader sees English labels on screen.

- **Everything the user sees in ShopCtrl**: buttons, menu items, menu paths, tab names, field names,
  column names, statuses, dropdown values, checkbox labels, permission names, role names, trigger events
  and actions, message texts. Keep the original formatting (usually **bold**). Example:
  - EN: Click **Save and Close**.
  - NL: Klik op **Save and Close**.
  - EN: Go to **Sales > Orders** and open the order.
  - NL: Ga naar **Sales > Orders** en open de order.
- When a UI label is used inside a sentence as a status or value, keep it in English and, where needed,
  add the Dutch word for clarity once: "de factuur krijgt de status **Paid** (betaald)". Do not do this
  repeatedly on the same page.
- **Product, feature and module names**: ShopCtrl, Virtualstock, Master SKU, Order Pick List,
  Sales Channel, Bulk Operations, Bulk Operations Scheduler, Parked Stock, Advanced Warehouse,
  Trigger(s), Webhooks, Wiki, Merge Fields (also in running text: "merge field", "merge fields"), Document Templates, Email Templates, Ticket AI Assistant,
  Provisioning, Group Shipment, Direct Fulfillment, Bulk Buy Offers, and the names of the menu sections
  (Sales, Fulfillment, Purchasing, Product Management, Configuration, Communication, Financial),
  Favorites (as the name of the UI section).
- Exception: the categories of this documentation (sidebar labels and the section list on the intro page)
  are translated, for example "Orderbeheer", "Inkoop", "Financieel". Section and feature names stay
  English only when they refer to what the user sees in the ShopCtrl menu or screens.
- Section headings that name a screen tab or pane may be Dutch ("Algemeen", "Verkoopprijs") as long as the
  body text keeps the English label (**General**, **Retail price**).
- A page title may use the Dutch word for a feature ("Favorieten") while the body keeps the UI name
  (**Favorites**) when it points at the screen.
- Names of third-party products and companies: Amazon 1P/3P, Vendor Central, Seller Central, Bol.com,
  eBay, Shopify, Magento, Shopware, WooCommerce, Mirakl, Mano Mano, Exact Online, MultiSafepay,
  Microsoft 365, Google, PostNL, DHL, UPS, GLS, Royal Mail, Palletways, and so on.
- Standard abbreviations: SKU, EAN, ASIN, UDI, VAT, API, FTP, WMS, SLA, GDPR, NPS, OAuth, 2FA.
  (In running text you may use "btw" for VAT and "AVG" for GDPR, followed by the English term in
  brackets the first time on a page: "AVG (GDPR)".)

### Translate

- All explanatory text, headings, admonition titles, table headers and alt text.
- Common admonition titles:
  - Required Permissions → Vereiste rechten
  - Note / Note: → Let op / Let op:
  - Please note → Let op
  - Important → Belangrijk
  - Tip → Tip
  - Example → Voorbeeld
- Page titles (`# Heading`) and sidebar labels, except where the title is a product or feature name
  (for example "Virtualstock", "Triggers", "Webhooks", "Wiki" stay as they are).

### Special cases

- Quotes from third parties (`>` blocks quoting Amazon, UPS, DHL, and so on): translate them outright.
- Titles of other articles mentioned in running text, with or without a link: use the Dutch title.
- Obvious mistakes in the English prose (a wrong heading, a typo) may be corrected in the Dutch.
  UI labels are never corrected: copy them exactly, typos included.
- Third-party screens (Amazon, eBay, Shopify, Google, Microsoft and so on) are English too: keep their
  bold button and option labels in English, exactly like ShopCtrl labels.

- A short translator note is allowed on pages that list many UI names (events, actions, merge fields),
  saying the names are shown in English as in ShopCtrl. Keep it to one sentence.

## Style

- Address the reader with **u** (formal), consistently. Use "uw" for "your".
- English "we" that means the reader ("we need to create…") becomes "u". "We raden aan…" (ShopCtrl
  recommending something) may stay.
  <!-- If the team prefers informal "je/jouw", change this line before translating more pages. -->
- Write natural, plain Dutch. Do not translate word for word; Dutch sentence order differs.
- Use the imperative for instructions: "Klik op **Save**.", "Open de order.", "Selecteer de shop."
- Keep sentences short, like the English source. Do not add or remove information.
- Use Dutch number and price formats in running-text examples (€ 0,50; 1.559.917); never in code or UI values. Use Dutch date conventions only in running text; do not change numbers in examples,
  screenshots descriptions or code.
- Compound words: write them as one word in Dutch ("orderregel", "verzendlabel"). When a compound mixes
  an English UI term with a Dutch word, use a hyphen: "**Order Pick List**-instellingen", "SKU-nummer",
  "API-sleutel".

## Glossary

Use these Dutch terms for generic concepts in running text. When the same word appears as a UI label,
it stays English (see above).

| English | Dutch |
|---|---|
| order | order (de order, de orders) |
| order row / order line | orderregel — never "orderrij" |
| customer | klant |
| customer group | klantgroep |
| shop / store / webshop | shop (not "winkel") |
| sales channel (generic) | verkoopkanaal |
| marketplace | marktplaats (marketplace for a named platform is fine) |
| connector | connector |
| integration | integratie / koppeling |
| product | product |
| product variant | productvariant |
| product group | productgroep |
| brand | merk |
| property | eigenschap |
| stock | voorraad |
| stock count | voorraadtelling |
| in stock / out of stock | op voorraad / niet op voorraad |
| allocate stock / allocation | voorraad toewijzen / toewijzing |
| backorder | backorder |
| warehouse | magazijn |
| location (in warehouse) | locatie |
| pick, pack and ship | picken, inpakken en verzenden |
| fulfillment | fulfilment (generic) — keep **Fulfillment** as menu name |
| shipment | zending |
| parcel | pakket |
| pallet | pallet |
| carton | doos |
| carrier | vervoerder |
| shipping label | verzendlabel |
| tracking number | trackingnummer |
| dropship / dropshipment | dropshipment |
| return | retour |
| return label | retourlabel |
| replacement | vervangende levering |
| invoice | factuur |
| credit invoice / credit note | creditfactuur (do not mix with "creditnota") |
| invoice reminder | betalingsherinnering |
| payment | betaling |
| payment terms | betalingsvoorwaarden |
| VAT | btw |
| currency | valuta |
| exchange rate | wisselkoers |
| price | prijs |
| purchase price | inkoopprijs |
| profit margin | winstmarge |
| purchase order | inkooporder |
| purchase order suggestions | inkoopordervoorstellen |
| supplier | leverancier |
| delivery (incoming goods) | levering |
| offer (ShopCtrl Offers: quote sent to a customer) | offerte (never "aanbieding", which means a promotion) |
| contract | contract |
| employee | medewerker |
| employee group | medewerkersgroep |
| role | rol |
| permission | recht (meervoud: rechten) |
| two-factor authentication | tweestapsverificatie (2FA) |
| sign in / log in | inloggen |
| account | account |
| organization | organisatie |
| settings | instellingen |
| setup / set up | instellen / configuratie |
| configure | configureren |
| enable / disable | inschakelen / uitschakelen |
| create | aanmaken |
| edit | bewerken |
| delete | verwijderen |
| save | opslaan |
| import / export | importeren / exporteren (de import, de export) |
| bulk action | bulkactie |
| filter | filter |
| table / column / row | tabel / kolom / rij |
| field | veld |
| dropdown (field) | vervolgkeuzelijst |
| drop-down menu | vervolgkeuzemenu |
| context menu | contextmenu |
| clipboard | klembord |
| dialog / message dialog | dialoogvenster |
| grid / data grid | tabel |
| checkbox | selectievakje |
| tab | tabblad |
| page | pagina |
| details page | detailpagina |
| overview | overzicht |
| template | sjabloon (het sjabloon: "een getest sjabloon") |
| merge field | merge field (het merge field, de merge fields) — never translate; see "Keep in English" |
| condition | voorwaarde |
| event | gebeurtenis |
| action | actie |
| mailbox | mailbox |
| email | e-mail |
| message | bericht |
| ticket | ticket |
| report | rapport |
| alert | melding (keep **Alerts** as menu name) |
| status | status |
| draft | concept (keep **Draft** as status label) |
| troubleshooting | probleemoplossing |
| overview page | overzichtspagina |
| deep link | deeplink |
| hotkey / keyboard shortcut | sneltoets |
| favorites | favorieten |
| screenshot | schermafbeelding |
| obfuscate / obfuscation | obfusceren / obfuscatie (keep **Customer Data Obfuscation** as UI name) |
| anonymize / anonymization (GDPR) | anonimiseren / anonimisering |
| GDPR right to be forgotten | AVG-verzoek om vergeten te worden |
| record (customer record, order record) | record (klantrecord, orderrecord) |
| supervisor | leidinggevende |
| assign (employee to shop) / assignment | koppelen / koppeling |
| pane | deelvenster |
| topic menu | plain text → menu (the "topic" sections → onderdelen); bold **Topic menu** stays as UI label |
| eligible / eligibility rules | in aanmerking komen / voorwaarden |
| role names (System Admin, Shop Owner Admin, Admin, Power User, User, Guest) | keep English |
| employee book / Colleagues | medewerkersboek (**General > Colleagues**) |
| assign (customer to group, order to carrier) | toewijzen |
| placeholder value | vaste tekst / vervangende waarde |
| shop admin permissions | **shop admin**-rechten |
| carrier account | vervoerdersaccount |
| shipping service | verzenddienst |
| tail lift | laadklep |
| sandbox / test mode | sandboxomgeving / testmodus (keep **Test mode** as UI label) |
| group shipment (generic noun) | groepszending (keep **Group Shipment** only as feature/UI name) |
| acknowledgement (Amazon) / acknowledge | bevestiging / bevestigen |
| pick file / pack file | pickbestand / pakbestand |
| credit row | creditregel |
| wildcard | wildcard (jokerteken on first use) |
| commercial invoice | handelsfactuur |
| cut-off time | sluitingstijd |
| data sheet | gegevensblad |
| account manager / representative | accountmanager |
| merchant / seller | verkoper |
| rule set | set met regels |
| shop owner (running text) | shop owner |
| rotate (credentials) | vervangen (roteren) |
| credentials | inloggegevens / gegevens |
| store (webshop, Shopify/WooCommerce/eBay/Amazon store) | shop — never "winkel"; "fysieke winkel" only for an In Store / physical shop |
| offer (marketplace offer on Bol, Mirakl, Virtualstock) | offer (het offer) |
| listing (Amazon) | aanbieding |
| back-in-stock date | datum waarop het product weer op voorraad is (heading: "weer op voorraad"-datum) |
| lead time | levertijd |
| fallback value | terugvalwaarde |
| source of truth | leidende bron |
| collection (merge fields) | collectie |
| conditional block | voorwaardelijk blok |
| range (RangeStart/RangeEnd) | reeks |
| comment template | opmerkingsjabloon |
| office hours | kantooruren |
| holiday calendar | feestdagenkalender |
| client secret | client secret (het) |
| single merge field | enkelvoudig merge field |
| entity | record |
| trigger action / event / condition | Trigger-actie / Trigger-gebeurtenis / Trigger-voorwaarde (hyphenated) |
| bulk operation (generic) | bulkbewerking (keep **Bulk Operations** as feature/UI name) |
| preset filter | voorkeuzefilter |
| custom status | aangepaste status |
| payment type (running text) | betaalmethode |
| tier / tier range (prices) | staffel |
| workdays offset | verschuiving in werkdagen / leververschuiving |
| customize / customization (Amazon products) | personaliseren / personalisatie |
| handling employee (running text) | behandelende medewerker |
| current year | lopend jaar (not "afgelopen jaar", which means last year) |
| reporting | rapportages |
| report parameter names, chart names, report names | keep English, also in parameter lists ("Shop (selectie van…)") |
| date range | datumbereik |
| communication event | communicatiemoment |
| NPS promoter / passive / detractor | promotor / passive / criticaster |
| node (tree) | onderdeel |
| regular / private (wiki article) | gewoon / privé |
| error messages shown by ShopCtrl | keep English (quote them exactly) |
| checkout page | afrekenpagina |
| payment link | betaallink |
| down payment | aanbetaling |
| payment fee | betaalkosten |
| intra-community supply | intracommunautaire levering |
| business hours | openingstijden |
| badge | label |
| pin / unpin (tab) | vastzetten / losmaken |
| flow | flow |
| slot | slot |
| MessageBird step names (Date/time, Handover) | keep English |
| return condition (state of returned product) | conditie / retourconditie ("staat" in explanations; never "voorwaarde") |
| return reason | retourreden |
| return row | retourregel |
| resolution (return) | afhandeling (keep **Resend/Repair/Exchange/Refund** as UI values) |
| re-stock | weer op voorraad boeken |
| finalize (return, stock count) | afronden |
| refund | terugbetaling / terugbetalen |
| package (one of several in a parcel) | colli (packages grid → tabel met colli) |
| ship-from / ship-to address | afzendadres / afleveradres |
| place / unplace / placement (group shipment) | plaatsen / plaatsing ongedaan maken / plaatsing (keep **Place to**, **Unplace**, **Move unplaced**) |
| identifier (pallet/carton) | identificatie |
| delivery window / pickup window | leveringsvenster / tijdvenster (keep **Pickup Windows** / **Delivery Windows** as labels) |
| fulfillment center (Amazon) | fulfilmentcentrum |
| fulfillment (Shopify object) | fulfilment (de fulfilment) |
| Bulk Buy Offer / bulk buy order / Bulk Buy purchase order | de Bulk Buy Offer / bulk buy-order / Bulk Buy-inkooporder |
| approver | goedkeurder |
| pending (rows/items) | openstaand |
| weekly / undefined purchase order | wekelijkse / niet-gedefinieerde inkooporder (**Undefined**) |
| re-acknowledgment | nieuwe bevestiging / opnieuw bevestigen |
| ASN | keep English, plural ASN's |
| supply chain management | ketenbeheer |
| retail price | verkoopprijs |
| preferred supplier | voorkeursleverancier |
| property set | eigenschappenset |
| product attribute | productkenmerk |
| stock item (simple or basic / advanced) | voorraaditem (eenvoudig / geavanceerd) — never leave "advanced"/"simple" in English in plain text |
| discrepancy (count) | verschil |
| stock count group | voorraadtellingsgroep / tellingsgroep |
| tree pane / product tree / group tree | boomdeelvenster / productboom / groepenboom |
| parent group / sub-group | bovenliggende groep / subgroep |
| sequence (number) | volgorde / volgnummer |
| culture (translation) | cultuur |
| resources (tab heading) | bronnen |
| product relations | productrelaties |
| dropship purchase order | dropship-inkooporder |
| purchase product (supplier) | inkoopproduct |
| price list / price quote | prijslijst / prijsopgave |
| HS code | HS-code |
| unlink | loskoppelen |
| page titles 08/09 used in links | Productvarianten (product-variants); Leveranciersproducten importeren (import-supplier-products); Producteigenschappen; Algemene productgegevens; Productdetails; Productverkoop; Productfulfilment; Product aanmaken; Productimport via Excel; Magazijnhandelingen (warehouse-operations); Productinkoop (product-purchasing); Productmerken; Productgroepen; Producten; Voorraadtelling; Magazijnen; Voorraad exporteren; Productgegevens exporteren naar Amazon; ASIN en EAN aan uw producten toevoegen |
| products pane | productdeelvenster (never "productendeelvenster") |
| parent product for variants | hoofdproduct voor varianten |
| advanced / simple product | geavanceerd / eenvoudig product |
| warehouse operations module | module voor magazijnhandelingen |
| shop selection | shopselectie |
| provisioning (running text) / to provision / provisioned | Provisioning-proces / -pagina / -scherm / -status (hyphen, capital P); inboeken (via Provisioning) / ingeboekt |
| Provision button (generic) | Provision-knop |
| private warehouse / fulfillment warehouse | eigen magazijn / fulfilmentmagazijn |
| submit status / main status / payment status | verzendstatus / hoofdstatus / betaalstatus |
| expected delivery date | verwachte leverdatum |
| part shipments / wholesale shipments | deelzendingen / groothandelszendingen |
| over-provisioning | te veel inboeken |
| label template / warehouse label | labelsjabloon / magazijnlabel |
| picklist (running text) | picklijst |
| sales order | verkooporder |
| UDI scan | UDI-scan |
| barcode format / format literals | barcodeformaat / vaste tekens |
| custom parameters | aangepaste parameters |
| lot/batch number | lot-/batchnummer |
| YYMMDD (running text only) | JJMMDD |
| ShopCtrl Tip (admonition title) | ShopCtrl-tip |
| support manager | supportmanager |
| page titles 09 | Provisioning-overzicht; Provisioning met UDI-scan; Advanced Warehouse; Leveringen aanmaken; Export/import; Leverancier aanmaken; Leveranciersproducten importeren; Dropshipleverancier; Import van inkoopprijzen (met staffels); Prijzen en winstmarges bij inkooporders berekenen |
| dropship supplier / warehouse / order | dropshipleverancier / dropshipmagazijn / dropshiporder |
| packing slip | pakbon |
| tier price / tiered pricing / quantity break | staffelprijs / staffelprijzen / staffel |
| header rows | kopregels |
| CSV separator / encoding | CSV-scheidingsteken / codering |
| conversation history | gespreksgeschiedenis |
| company contacts | bedrijfscontacten |
| private note | privénotitie |
| PO lifecycle | levenscyclus van de inkooporder |
| foreign currency | vreemde valuta |
| supplier price | leveranciersprijs |
| purchase order document / PO code | inkooporderdocument / inkoopordercode |
| base status | basisstatus |
| Bill to / Ship to (headings) | Factuuradres / Afleveradres (UI labels stay **Bill To** / **Ship To**) |
| destination warehouse | bestemmingsmagazijn |
| regular / back-to-back / forecast purchase order | gewone / back-to-back- / prognose-inkooporder |
| on hand (stock) | voorraad in huis |
| order unit / units | besteleenheid / stuks |
| product row (purchase order) | productregel |
| action / filter / export panel | actiepaneel / filterpaneel / exportpaneel |
| contact info | contactgegevens |
| (pre) allocated order rows | (vooraf) toegewezen orderregels |
| totals (ex VAT) | totalen (excl. btw) |
| Before you begin (admonition title) | Voordat u begint |
| error messages (heading) | Foutmeldingen |
| keyword search | zoeken op trefwoord |
| attachments pane | deelvenster met bijlagen |
| expiry mode | vervaldatummodus |
| First expired, first out (admonition title) | keep English |
| page titles 09 (purchase orders) | Overzicht van inkooporders; Een inkooporder aanmaken; Inkoopordervoorstellen; Inkooporders filteren; Details van een inkooporder |
| import profile | importprofiel |
| shop group | shopgroep |
| included properties | opgenomen eigenschappen |
| map / match products (by code) | matchen |
| publication status | publicatiestatus |
| VAT tariff | btw-tarief |
| stock level / stock transactions / stock history | voorraadniveau / voorraadtransacties / voorraadhistorie |
| supplier stock / private stock | leveranciersvoorraad / eigen voorraad |
| parked stock (generic) | geparkeerde voorraad (keep **Parked Stock** as feature name) |
| simple / advanced warehousing | eenvoudig / geavanceerd magazijnbeheer (keep **Advanced Warehouse** as feature name) |
| warehouse operations | magazijnhandelingen |
| product package | productverpakking |
| transport category | transportcategorie |
| deallocate | toewijzing vrijgeven / voorraad vrijgeven |
| allocation priority | toewijzingsprioriteit |
| expiry date / expiry warning | vervaldatum / vervalwaarschuwing |
| storage life | houdbaarheid |
| lot number / serial number | lotnummer / serienummer |
| sales history | verkoophistorie |
| reserved orders | gereserveerde orders |
| lock / unlock (product) | vergrendelen / ontgrendelen |
| groups and selections tree | boomstructuur (met groepen en selecties) |
| top action menu | actiemenu bovenaan |
| products grid | producttabel |
| product listing / inventory listing (Amazon) | productaanbieding / voorraadaanbieding |
| unpublish | de publicatie intrekken |
| forced export | geforceerde export |
| snapshot (Mirakl) | momentopname |
| split button | gesplitste knop |
| scope (export menu) | bereik |
| pill / role badge | label / rollabel |
| drift out of sync / in sync | uit de pas gaan lopen / gesynchroniseerd |
| zeroed (stock) | op nul gezet |
| consolidated value | opgetelde waarde |
| base currency | basisvaluta |
| aisle, bay, shelf, bin | gang, sectie, plank, vak |
| page title Mirakl Stock & Price Export | Voorraad- en prijsexport naar Mirakl |

Add new terms here when a choice is made, so later batches stay consistent.

## Review checklist

The reviewer compares each Dutch file with its English source and checks:

1. Nothing is missing or added: same sections, steps, list items, table rows, admonitions, images.
2. All "Never change" items are byte-identical to the English source (front matter values, `{#ids}`,
   link targets, image paths, code, imports, JSX).
3. All UI labels are still in English and in the same formatting.
4. Glossary terms and "u"-form are used consistently.
5. The Dutch reads naturally and the meaning matches the English exactly, especially in steps,
   warnings and permissions.
6. The page builds: no MDX errors, no broken links.
