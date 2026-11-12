// ============================================================
// Central content for yamir.in. Every page reads from here.
// RULE: nothing is invented. A fact not yet confirmed is wrapped
// as NEEDS('...') and shows as a soft marker until replaced.
// ============================================================

export const NEEDS = (what: string) => `[NEEDS INPUT: ${what}]`;
export const isNeeds = (s: string) => typeof s === 'string' && s.startsWith('[NEEDS INPUT');

export const company = {
  name: 'Yamir Packaging Pvt. Ltd.',
  shortName: 'Yamir Packaging',
  description:
    'Folding carton manufacturer with three plants in Gujarat, India: Kadi, Bharuch and Mandva. ISO 9001, ISO 14001, ISO 45001, FSSC 22000 V6, SEDEX, FSC and EcoVadis Bronze.',
  domain: 'https://www.yamir.in',
  foundedYear: NEEDS('year to state as "since"'),
  phone: '+91 99982 00084',
  phoneHref: 'tel:+919998200084',
  email: 'info@yamir.in',
  emailHref: 'mailto:info@yamir.in',
  whatsapp: '+91 99982 00084',
  whatsappHref: 'https://wa.me/919998200084',
  linkedin: 'https://www.linkedin.com/company/yamir-packaging-pvt-ltd/',
  registeredOffice: NEEDS('registered office address'),
  gstin: NEEDS('GSTIN'),
  formEndpoint: 'https://api.web3forms.com/submit',
  formAccessKey: 'REPLACE_WITH_WEB3FORMS_KEY',
};

export const nav = [
  { label: 'Cartons', href: '/cartons' },
  { label: 'Industries', href: '/industries' },
  { label: 'Plants', href: '/plants' },
  { label: 'Quality', href: '/quality' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'About', href: '/about' },
];

export const certifications = [
  { code: 'ISO 9001 : 2015', label: 'Quality management system', doc: 'Certificate PDF' },
  { code: 'ISO 14001 : 2015', label: 'Environmental management system', doc: 'Certificate PDF' },
  { code: 'ISO 45001 : 2018', label: 'Occupational health and safety', doc: 'Certificate PDF' },
  { code: 'FSSC 22000 V6', label: 'Food safety system certification', doc: 'Certificate PDF' },
  { code: 'SEDEX', label: 'Ethical trade audit (SMETA)', doc: 'Report on request' },
  { code: 'FSC®', label: 'Chain of custody, certified board on request', doc: 'Licence code' },
  { code: 'EcoVadis Bronze', label: 'Sustainability rating', doc: 'Scorecard on request' },
];

export type Plant = {
  slug: string; name: string; city: string; district: string; locality: string; short: string;
  address: string; mapsUrl: string; makes: string; capacity: string; area: string; people: string; since: string;
  machines: string[];
};
export const plants: Plant[] = [
  { slug: 'kadi', name: 'Kadi', city: 'Kadi', district: 'Mehsana', locality: 'Mehsana district, about 40 km north of Ahmedabad', short: 'Serves Ahmedabad and North Gujarat.',
    address: NEEDS('Kadi plant postal address with PIN'), mapsUrl: NEEDS('Kadi Google Maps link'),
    makes: NEEDS('what Kadi makes'), capacity: NEEDS('Kadi monthly capacity'), area: NEEDS('Kadi built-up area'), people: NEEDS('Kadi headcount'), since: NEEDS('year Kadi started'),
    machines: [NEEDS('key presses and converting lines at Kadi')] },
  { slug: 'bharuch', name: 'Bharuch', city: 'Bharuch', district: 'Bharuch', locality: 'Bharuch district, South Gujarat', short: 'In the pharma and chemical belt of South Gujarat.',
    address: NEEDS('Bharuch plant postal address with PIN'), mapsUrl: NEEDS('Bharuch Google Maps link'),
    makes: NEEDS('what Bharuch makes'), capacity: NEEDS('Bharuch monthly capacity'), area: NEEDS('Bharuch built-up area'), people: NEEDS('Bharuch headcount'), since: NEEDS('year Bharuch started'),
    machines: [NEEDS('key presses and converting lines at Bharuch')] },
  { slug: 'mandva', name: 'Mandva', city: 'Mandva', district: 'Bharuch', locality: 'Between Bharuch and Ankleshwar, on the national highway', short: 'On the Ahmedabad–Mumbai highway.',
    address: NEEDS('Mandva plant postal address with PIN'), mapsUrl: NEEDS('Mandva Google Maps link'),
    makes: NEEDS('what Mandva makes'), capacity: NEEDS('Mandva monthly capacity'), area: NEEDS('Mandva built-up area'), people: NEEDS('Mandva headcount'), since: NEEDS('year Mandva started'),
    machines: [NEEDS('key presses and converting lines at Mandva')] },
];

export type Carton = {
  slug: string; name: string; d: string; answer: string; dieline: string;
  bestFor: string[]; options: string[]; specs: [string, string][]; faqs: { q: string; a: string }[];
};
export const cartons: Carton[] = [
  { slug: 'mono-cartons', name: 'Mono cartons', d: 'Straight or reverse tuck', dieline: 'ste',
    answer: 'Single-ply printed folding cartons, the most common retail pack. Printed, cut, creased and glued at our Gujarat plants.',
    bestFor: ['FMCG', 'Pharma', 'Food', 'Personal care'],
    options: [NEEDS('print, coating, lamination, foil and emboss options')],
    specs: [['Board', NEEDS('board grades and GSM range')], ['Print', NEEDS('max colours, inline UV')], ['Minimum order', NEEDS('MOQ')]],
    faqs: [{ q: 'What is the minimum order for mono cartons?', a: NEEDS('MOQ answer') }] },
  { slug: 'liner-cartons', name: 'Liner cartons', d: 'Second ply for stiffness', dieline: 'liner',
    answer: 'A second layer of board bonded inside a printed carton for extra stiffness. For heavier or premium products.',
    bestFor: ['Heavier retail products', 'Premium packs', 'Multi-unit packs'], options: [NEEDS('liner options')],
    specs: [['Construction', NEEDS('liner construction')], ['Lining speed', NEEDS('cartons per hour')]], faqs: [] },
  { slug: 'micro-flute-cartons', name: 'Micro-flute cartons', d: 'E or B flute, printed liner', dieline: 'flute',
    answer: 'A printed sheet laminated to E- or B-flute board. Protection for heavier products with offset print quality.',
    bestFor: ['E-commerce', 'Heavier retail packs', 'Display-ready packs'], options: [NEEDS('flute types, lamination, max sheet size')],
    specs: [['Flute', NEEDS('E / B flute')], ['Max sheet', NEEDS('max sheet size mm')]], faqs: [] },
  { slug: 'window-cartons', name: 'Window cartons', d: 'Die-cut, film patched', dieline: 'window',
    answer: 'A die-cut opening covered with clear film so the buyer sees the product inside.',
    bestFor: ['Food', 'Toys', 'Stationery', 'Personal care'], options: [NEEDS('window films and shapes')],
    specs: [['Patching', NEEDS('inline / offline window patching')]], faqs: [] },
  { slug: 'foil-and-metpet-cartons', name: 'Foil and Metpet cartons', d: 'Hot foil, metallised board', dieline: 'foil',
    answer: 'Hot-foil stamping on selected areas, or metallised polyester-laminated board across the whole carton.',
    bestFor: ['Cosmetics', 'Confectionery', 'Gifting', 'Premium FMCG'], options: [NEEDS('foil types, Metpet board options')],
    specs: [['Process', NEEDS('foil stamping details')]], faqs: [] },
  { slug: 'blister-and-backer-cards', name: 'Blister and backer cards', d: 'Heat-seal coated', dieline: 'blister',
    answer: 'Printed, heat-seal coated cards that a blister is sealed onto. Flatness and coating consistency matter for automatic sealing lines.',
    bestFor: ['Pharma', 'Hardware', 'Stationery', 'Retail hang-sell'], options: [NEEDS('blister coating options')],
    specs: [['Coating', NEEDS('heat-seal lacquer type')]], faqs: [] },
  { slug: 'pharma-cartons', name: 'Pharma cartons', d: 'Braille, camera inspected', dieline: 'pharma',
    answer: 'Folding cartons made under controlled QC with camera inspection, Braille embossing where required, and batch traceability.',
    bestFor: ['Pharmaceutical', 'Nutraceutical', 'Medical devices'], options: [NEEDS('Braille, security features, inspection details')],
    specs: [['Inspection', NEEDS('camera inspection system')], ['Braille', NEEDS('Braille capability')]],
    faqs: [{ q: 'Do you emboss Braille on pharma cartons?', a: NEEDS('Braille answer') }] },
];

export type Industry = { slug: string; name: string; answer: string; needs: string[]; how: string[]; cartonSlugs: string[] };
export const industries: Industry[] = [
  { slug: 'fmcg', name: 'FMCG', answer: 'Printed folding cartons for brands that need consistent colour and reliable supply at volume.',
    needs: ['Colour that matches from batch to batch', 'Delivery that holds to schedule', 'Capacity for seasonal peaks'],
    how: [NEEDS('FMCG proof: colour management, OTIF, capacity')], cartonSlugs: ['mono-cartons', 'liner-cartons', 'window-cartons', 'foil-and-metpet-cartons'] },
  { slug: 'pharma', name: 'Pharma', answer: 'Cartons made under controlled QC with camera inspection, Braille and batch traceability.',
    needs: ['Zero mix-ups', 'Braille and regulatory text accuracy', 'Traceability for audits'],
    how: [NEEDS('pharma proof: inspection system, QC lab, audits passed')], cartonSlugs: ['pharma-cartons', 'blister-and-backer-cards', 'mono-cartons'] },
  { slug: 'food', name: 'Food and confectionery', answer: 'FSSC 22000 certified for food packaging, with FSC-certified board where specified.',
    needs: ['Food-safe materials and inks', 'Hygiene in the plant', 'Certification buyers can audit'],
    how: ['FSSC 22000 V6 certified', 'FSC® certified board available', NEEDS('low-migration ink policy, hygiene practice')], cartonSlugs: ['mono-cartons', 'window-cartons', 'micro-flute-cartons', 'foil-and-metpet-cartons'] },
];

export const faqsGeneral = [
  { q: 'Where are the plants?', a: 'Three plants in Gujarat, India: Kadi near Ahmedabad, Bharuch, and Mandva between Bharuch and Ankleshwar.' },
  { q: 'Which certifications do you hold?', a: 'ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, FSSC 22000 V6, SEDEX, FSC®, and an EcoVadis Bronze medal.' },
  { q: 'What is the lead time for a new carton?', a: NEEDS('lead time for new artwork vs repeat orders') },
  { q: 'Do you export?', a: NEEDS('export markets, if any') },
];

// ---------- Photographs ----------
// Every photograph the site needs, in one list. The Plate component shows a
// quiet blank plate until the file exists at public/photos/<id>.webp.
// `npm run shots` prints this as a shot list.
export type Shot = { id: string; page: string; subject: string; ratio: '3/2' | '4/5' | '16/9' | '1/1'; note?: string };
export const shots: Shot[] = [
  // home
  { id: 'home-plant', page: 'Home', subject: 'Press hall at one plant, wide, from the end of the line, operators small in frame', ratio: '16/9', note: 'Morning, lights on, floor clean. This is the one photo that sells the company.' },
  { id: 'home-cartons', page: 'Home', subject: 'A stack of finished cartons on a pallet, close, so the board edge and crease are visible', ratio: '4/5' },
  // cartons
  { id: 'cartons-hero', page: 'Cartons', subject: 'Six or seven finished cartons of different styles on a plain surface, arranged with space between them, top-down or three-quarter', ratio: '3/2', note: 'Use only cartons we are allowed to show. Blank or own samples are fine.' },
  { id: 'carton-mono-cartons', page: 'Mono cartons', subject: 'Three mono cartons, one open, one flat, one closed', ratio: '4/5' },
  { id: 'carton-liner-cartons', page: 'Liner cartons', subject: 'Liner carton cut in section so the second ply is visible', ratio: '4/5' },
  { id: 'carton-micro-flute-cartons', page: 'Micro-flute cartons', subject: 'Edge of a micro-flute carton showing the flute, close', ratio: '4/5' },
  { id: 'carton-window-cartons', page: 'Window cartons', subject: 'Window carton with film, light coming through the window', ratio: '4/5' },
  { id: 'carton-foil-and-metpet-cartons', page: 'Foil and Metpet cartons', subject: 'Foil detail catching the light, very close', ratio: '4/5' },
  { id: 'carton-blister-and-backer-cards', page: 'Blister and backer cards', subject: 'A stack of blister cards fanned, euro slot visible', ratio: '4/5' },
  { id: 'carton-pharma-cartons', page: 'Pharma cartons', subject: 'Pharma carton with Braille, raking light so the dots show', ratio: '4/5' },
  // industries
  { id: 'ind-fmcg', page: 'FMCG', subject: 'Folder-gluer delivery end with cartons streaming out', ratio: '3/2' },
  { id: 'ind-pharma', page: 'Pharma', subject: 'Camera inspection unit on the line, screen showing a carton', ratio: '3/2' },
  { id: 'ind-food', page: 'Food', subject: 'Clean press area with FSSC hygiene practice visible (hairnets, clean floor)', ratio: '3/2' },
  // plants
  { id: 'plant-kadi-ext', page: 'Kadi', subject: 'Kadi plant exterior with signboard, wide, morning', ratio: '16/9' },
  { id: 'plant-kadi-int', page: 'Kadi', subject: 'Kadi main press, operator at the console', ratio: '3/2' },
  { id: 'plant-bharuch-ext', page: 'Bharuch', subject: 'Bharuch plant exterior with signboard, wide, morning', ratio: '16/9' },
  { id: 'plant-bharuch-int', page: 'Bharuch', subject: 'Bharuch main press or die-cutter, operator at work', ratio: '3/2' },
  { id: 'plant-mandva-ext', page: 'Mandva', subject: 'Mandva plant exterior with signboard, wide, morning', ratio: '16/9' },
  { id: 'plant-mandva-int', page: 'Mandva', subject: 'Mandva main line, operator at work', ratio: '3/2' },
  // quality
  { id: 'qc-lab', page: 'Quality', subject: 'QC lab: technician using the spectrophotometer on a printed sheet', ratio: '3/2' },
  { id: 'qc-press', page: 'Quality', subject: 'Press-side colour check, operator holding sheet against the proof', ratio: '4/5' },
  // sustainability
  { id: 'sus-board', page: 'Sustainability', subject: 'Board reels in the store, FSC labels visible', ratio: '3/2' },
  { id: 'sus-waste', page: 'Sustainability', subject: 'Baled board waste ready for recycling, or rooftop solar if installed', ratio: '3/2' },
  // about
  { id: 'about-hyuma', page: 'About', subject: 'Hyuma on the shop floor, candid, talking with the team, not posed', ratio: '3/2' },
  { id: 'about-portrait-md', page: 'About', subject: 'Hyuma Mahadevia, head and shoulders, plant background, soft light', ratio: '4/5' },
  { id: 'about-portrait-2', page: 'About', subject: 'Plant head, head and shoulders, same light and background as the MD', ratio: '4/5' },
  { id: 'about-portrait-3', page: 'About', subject: 'Quality head, head and shoulders, same light and background', ratio: '4/5' },
  { id: 'about-team', page: 'About', subject: 'A whole shift in front of the plant, wide', ratio: '16/9', note: 'Optional, but strong.' },
];
export const shot = (id: string) => shots.find((s) => s.id === id)!;
