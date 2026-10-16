// ============================================================
// Central content for yamir.in
// Every page reads from this file. Edit here, every page updates.
//
// RULE: nothing on the site is invented. Anything not yet confirmed
// by Yamir is wrapped as NEEDS('...') and shows as a yellow marker
// in the browser until replaced with the real value.
// ============================================================

export const NEEDS = (what: string) => `[NEEDS INPUT: ${what}]`;
export const isNeeds = (s: string) => s.startsWith('[NEEDS INPUT');

export const company = {
  name: 'Yamir Packaging Pvt. Ltd.',
  shortName: 'Yamir Packaging',
  // One-line description used in meta tags and schema. Keep it factual.
  description:
    'Paperboard packaging manufacturer with three plants in Gujarat, India — Kadi, Bharuch and Mandva. ISO 9001, ISO 14001, ISO 45001, FSSC 22000 and FSC certified.',
  domain: 'https://www.yamir.in',
  foundedYear: NEEDS('founding year — old draft had 1980 (group roots) and 2010 (Yamir Pvt. Ltd.). Which one do we state?'),
  // Contact — the phone/email below came from the July draft. Confirm before launch.
  phone: NEEDS('main sales phone — July draft had +91 99982 00084'),
  phoneHref: 'tel:+919998200084',
  email: NEEDS('sales email — July draft had sales@yamir.in'),
  emailHref: 'mailto:sales@yamir.in',
  whatsapp: NEEDS('WhatsApp number'),
  whatsappHref: 'https://wa.me/919998200084',
  registeredOffice: NEEDS('registered / head office address (Ahmedabad?)'),
  gstin: NEEDS('GSTIN (optional, but builds trust with Indian buyers)'),
  // Form endpoint: Web3Forms / Formspree access key. Form will not send until this is set.
  formEndpoint: 'https://api.web3forms.com/submit',
  formAccessKey: 'REPLACE_WITH_WEB3FORMS_KEY',
};

export const nav = [
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Plants', href: '/plants' },
  { label: 'Quality', href: '/quality' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'About', href: '/about' },
];

// Proof shown near the top of every page. Only confirmed facts go here.
export const proof = [
  { value: '3', label: 'plants in Gujarat' },
  { value: 'ISO 9001', label: 'Quality management' },
  { value: 'FSSC 22000', label: 'Food safety' },
  { value: 'FSC®', label: 'Certified board' },
  { value: 'EcoVadis', label: 'Bronze medal' },
];

// Source: Yamir letterhead / logo lock-up supplied 9 Oct 2026, plus EcoVadis from Hyuma.
export const certifications = [
  { code: 'ISO 9001 : 2015', label: 'Quality Management System', body: 'QMS' },
  { code: 'ISO 14001 : 2015', label: 'Environmental Management System', body: 'EMS' },
  { code: 'ISO 45001 : 2018', label: 'Occupational Health & Safety', body: 'OH&S' },
  { code: 'FSSC 22000 V6', label: 'Food Safety System Certification', body: 'FSSC' },
  { code: 'SEDEX', label: 'Ethical trade audit (SMETA)', body: 'SEDEX' },
  { code: 'FSC®', label: 'Forest Stewardship Council chain of custody', body: NEEDS('FSC licence code, e.g. FSC-C000000') },
  { code: 'EcoVadis Bronze', label: 'Sustainability rating', body: NEEDS('EcoVadis year of award') },
];

export type Plant = {
  slug: string;
  name: string;
  city: string;
  district: string;
  locality: string;
  address: string;
  mapsUrl: string;
  lat?: number;
  lng?: number;
  summary: string;
  products: string;
  capacity: string;
  area: string;
  people: string;
  since: string;
  keyMachines: string[];
};

export const plants: Plant[] = [
  {
    slug: 'kadi',
    name: 'Kadi plant',
    city: 'Kadi',
    district: 'Mehsana',
    locality: 'Kadi, Mehsana district, Gujarat — about 40 km north of Ahmedabad',
    address: NEEDS('Kadi plant full postal address with PIN'),
    mapsUrl: NEEDS('Google Maps link for Kadi plant'),
    summary: 'Folding carton plant near Ahmedabad.',
    products: NEEDS('what Kadi makes — e.g. mono cartons, liner cartons'),
    capacity: NEEDS('Kadi monthly capacity, e.g. in MT or million cartons'),
    area: NEEDS('Kadi built-up area in sq ft'),
    people: NEEDS('Kadi headcount'),
    since: NEEDS('year Kadi plant started'),
    keyMachines: [NEEDS('key presses and converting lines at Kadi')],
  },
  {
    slug: 'bharuch',
    name: 'Bharuch plant',
    city: 'Bharuch',
    district: 'Bharuch',
    locality: 'Bharuch, Gujarat — on the Ahmedabad–Mumbai industrial corridor',
    address: NEEDS('Bharuch plant full postal address with PIN'),
    mapsUrl: NEEDS('Google Maps link for Bharuch plant'),
    summary: 'Folding carton plant in South Gujarat.',
    products: NEEDS('what Bharuch makes'),
    capacity: NEEDS('Bharuch monthly capacity'),
    area: NEEDS('Bharuch built-up area in sq ft'),
    people: NEEDS('Bharuch headcount'),
    since: NEEDS('year Bharuch plant started'),
    keyMachines: [NEEDS('key presses and converting lines at Bharuch')],
  },
  {
    slug: 'mandva',
    name: 'Mandva plant',
    city: 'Mandva',
    district: 'Bharuch',
    locality: 'Mandva, between Bharuch and Ankleshwar on the national highway, Gujarat',
    address: NEEDS('Mandva plant full postal address with PIN'),
    mapsUrl: NEEDS('Google Maps link for Mandva plant'),
    summary: 'Plant on the Bharuch–Ankleshwar highway.',
    products: NEEDS('what Mandva makes'),
    capacity: NEEDS('Mandva monthly capacity'),
    area: NEEDS('Mandva built-up area in sq ft'),
    people: NEEDS('Mandva headcount'),
    since: NEEDS('year Mandva plant started'),
    keyMachines: [NEEDS('key presses and converting lines at Mandva')],
  },
];

export type Product = {
  slug: string;
  name: string;
  short: string; // one line, used on cards
  answer: string; // direct 1–2 sentence answer at top of page (AI readiness)
  bestFor: string[];
  options: string[];
  specs: [string, string][];
  faqs: { q: string; a: string }[];
};

// The product list below is carried over from the July draft as a STRUCTURE
// only. Confirm each type is something Yamir actually makes and sells.
export const products: Product[] = [
  {
    slug: 'mono-cartons',
    name: 'Mono cartons',
    short: 'Single-ply folding cartons for retail packs.',
    answer: 'Mono cartons are single-ply printed folding cartons, the most common retail pack format. Yamir prints and converts them in-house at its Gujarat plants.',
    bestFor: ['FMCG', 'Pharma', 'Food', 'Personal care'],
    options: [NEEDS('print colours, coatings, lamination, foil, emboss options for mono cartons')],
    specs: [['Board', NEEDS('board grades and GSM range')], ['Print', NEEDS('max colours + inline UV?')], ['Minimum order', NEEDS('MOQ')]],
    faqs: [{ q: 'What is the minimum order quantity for mono cartons?', a: NEEDS('MOQ answer') }],
  },
  {
    slug: 'liner-cartons',
    name: 'Duplex and liner cartons',
    short: 'Reinforced cartons for heavier or premium products.',
    answer: 'Liner cartons add a second layer of board to a printed carton for extra stiffness. They suit heavier products and premium packs.',
    bestFor: ['Heavier retail products', 'Premium packs', 'Multi-unit packs'],
    options: [NEEDS('liner options')],
    specs: [['Construction', NEEDS('liner construction detail')], ['Lining speed', NEEDS('cartons per hour')]],
    faqs: [],
  },
  {
    slug: 'corrugated-cartons',
    name: 'Micro-flute corrugated cartons',
    short: 'Printed micro-flute for protection with print quality.',
    answer: 'Micro-flute corrugated cartons laminate a printed sheet onto E- or B-flute board. They protect heavier products while keeping offset print quality.',
    bestFor: ['E-commerce', 'Heavier retail packs', 'Display-ready packs'],
    options: [NEEDS('flute types, lamination, max sheet size')],
    specs: [['Flute', NEEDS('E / B flute?')], ['Max sheet', NEEDS('max sheet size mm')]],
    faqs: [],
  },
  {
    slug: 'window-cartons',
    name: 'Window cartons',
    short: 'Film-patched windows that show the product.',
    answer: 'Window cartons have a die-cut opening covered with clear film so the buyer can see the product inside.',
    bestFor: ['Food', 'Toys', 'Stationery', 'Personal care'],
    options: [NEEDS('window films and shapes')],
    specs: [['Patching', NEEDS('inline / offline window patching')]],
    faqs: [],
  },
  {
    slug: 'foil-and-metpet-cartons',
    name: 'Foil and Metpet cartons',
    short: 'Hot-foil and metallised board for premium shelf presence.',
    answer: 'Foil cartons use hot-foil stamping on selected areas. Metpet cartons use metallised polyester-laminated board across the whole carton.',
    bestFor: ['Cosmetics', 'Confectionery', 'Gifting', 'Premium FMCG'],
    options: [NEEDS('foil types, metpet board options')],
    specs: [['Process', NEEDS('foil stamping details')]],
    faqs: [],
  },
  {
    slug: 'blister-and-backer-cards',
    name: 'Blister and backer cards',
    short: 'Coated cards for blister and hang-sell packs.',
    answer: 'Blister and backer cards are printed, heat-seal coated cards that a blister is sealed onto. Flatness and coating consistency matter for automatic sealing lines.',
    bestFor: ['Pharma', 'Hardware', 'Stationery', 'Retail hang-sell'],
    options: [NEEDS('blister coating options')],
    specs: [['Coating', NEEDS('heat-seal lacquer type')]],
    faqs: [],
  },
  {
    slug: 'pharma-cartons',
    name: 'Pharma cartons',
    short: 'Cartons with Braille, camera inspection and traceability.',
    answer: 'Pharma cartons are folding cartons made under controlled QC with 100% camera inspection, Braille embossing where required, and batch traceability.',
    bestFor: ['Pharmaceutical', 'Nutraceutical', 'Medical devices'],
    options: [NEEDS('Braille, security features, camera inspection details')],
    specs: [['Inspection', NEEDS('camera inspection system and resolution')], ['Braille', NEEDS('Braille capability confirmation')]],
    faqs: [{ q: 'Do you do Braille embossing on pharma cartons?', a: NEEDS('Braille answer') }],
  },
];

export type Industry = {
  slug: string;
  name: string;
  answer: string;
  needs: string[]; // what buyers in this industry need
  how: string[]; // how Yamir meets it (proof)
  productSlugs: string[];
};

export const industries: Industry[] = [
  {
    slug: 'fmcg',
    name: 'FMCG',
    answer: 'Yamir makes printed folding cartons for FMCG brands that need consistent colour and reliable supply at volume.',
    needs: ['Colour that matches from batch to batch', 'Delivery that holds to schedule', 'Capacity for seasonal peaks'],
    how: [NEEDS('FMCG proof points: colour management system, OTIF %, capacity')],
    productSlugs: ['mono-cartons', 'liner-cartons', 'window-cartons', 'foil-and-metpet-cartons'],
  },
  {
    slug: 'pharma',
    name: 'Pharma',
    answer: 'Yamir supplies pharma cartons made under controlled QC with camera inspection, Braille and batch traceability.',
    needs: ['Zero mix-ups', 'Braille and regulatory text accuracy', 'Traceability for audits'],
    how: [NEEDS('pharma proof points: inspection system, QC lab, audits passed')],
    productSlugs: ['pharma-cartons', 'blister-and-backer-cards', 'mono-cartons'],
  },
  {
    slug: 'food',
    name: 'Food and confectionery',
    answer: 'Yamir is FSSC 22000 certified for food packaging and uses FSC-certified board where specified.',
    needs: ['Food-safe materials and inks', 'Hygiene in the plant', 'Certification buyers can audit'],
    how: ['FSSC 22000 V6 certified', 'FSC® certified board available', NEEDS('low-migration ink policy, hygiene practices')],
    productSlugs: ['mono-cartons', 'window-cartons', 'corrugated-cartons', 'foil-and-metpet-cartons'],
  },
];

// Client names: show ONLY after written approval from each client.
export const clients: string[] = [];

export const faqsGeneral = [
  { q: 'Where are Yamir Packaging plants located?', a: 'Yamir has three plants in Gujarat, India: Kadi (near Ahmedabad), Bharuch, and Mandva (between Bharuch and Ankleshwar).' },
  { q: 'Which certifications does Yamir hold?', a: 'ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, FSSC 22000 V6, SEDEX, FSC®, and an EcoVadis Bronze medal.' },
  { q: 'What is the typical lead time for a new carton?', a: NEEDS('lead time for new artwork vs repeat orders') },
  { q: 'Do you export?', a: NEEDS('export markets, if any') },
];
