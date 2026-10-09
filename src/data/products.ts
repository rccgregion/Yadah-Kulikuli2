export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  price: number; // in USD
  heelHeight: string;
  leatherType: string;
  finish: string;
  image: string;
  secondaryImage?: string;
  description: string;
  details: string[];
  specs: {
    heel: string;
    upper: string;
    lining: string;
    sole: string;
    hardware: string;
    origin: string;
  };
  availableSizes: number[];
  colorways: {
    id: string;
    name: string;
    leatherColor: string;
    hardwareFinish: string;
    hex: string;
    goldTone: string;
  }[];
  isSignature?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'flora-stiletto',
    name: 'The Flora Stiletto',
    subtitle: 'An artisanal masterpiece in leather and gold, embodying botanical grace.',
    category: 'Haute Couture Stiletto',
    price: 2850,
    heelHeight: '105MM HEEL',
    leatherType: 'EMBOSSED CALFSKIN',
    finish: 'HAND-FINISHED',
    image: '/src/assets/images/flora_stiletto_hero_1791567508481.jpg',
    secondaryImage: '/src/assets/images/botanical_sculpture_macro_1791567546515.jpg',
    isSignature: true,
    description:
      'The crown jewel of Maison Aurélia. Each pair features a sculpted botanical heel lost-wax cast in bronze and layered in 24-karat gold vermeil, supporting a deep obsidian calfskin upper meticulously embossed with Florentine floral relief.',
    details: [
      '105mm (4.1 in) architectural stem heel sculpted into blooming vine motifs',
      'Florentine vegetable-tanned full-grain calfskin with hand-pressed botanical bas-relief',
      'Natural lacquered Italian leather sole with anti-slip brass micro-island',
      'Cushioned memory-foam lambskin arch support designed for balance',
      'Presented in a handmade velvet-lined lacquered wooden casket with brass plaques'
    ],
    specs: {
      heel: '105mm architectural 24k gold-plated sculptural bronze',
      upper: '100% full-grain embossed Italian calfskin leather',
      lining: 'Silky nude kidskin leather with gold foil stamp',
      sole: 'Hand-dyed Tuscan leather with protective brass micro-inlay',
      hardware: 'Gilded floral leaf buckle and engraved serial plaque',
      origin: 'Florence, Italy — Master Atelier No. 4'
    },
    availableSizes: [35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 42],
    colorways: [
      {
        id: 'nocturne-or',
        name: 'Nocturne & Or (Signature)',
        leatherColor: 'Obsidian Jet Black',
        hardwareFinish: '24K Yellow Gold Vermeil',
        hex: '#141416',
        goldTone: '#e5b95b'
      },
      {
        id: 'bronze-antique',
        name: 'Espresso & Rose Bronze',
        leatherColor: 'Deep Espresso Brown',
        hardwareFinish: 'Sculpted Rose Bronze',
        hex: '#2b211a',
        goldTone: '#cca578'
      },
      {
        id: 'ivoire-champagne',
        name: 'Ivoire & Champagne Gold',
        leatherColor: 'Alabaster Ivory Cream',
        hardwareFinish: 'Subtle Champagne Gold',
        hex: '#e8e4dc',
        goldTone: '#f4d58d'
      }
    ]
  },
  {
    id: 'flora-nocturne-mule',
    name: 'The Flora Nocturne Mule',
    subtitle: 'Effortless evening ease with a twisted gilded stem.',
    category: 'Haute Couture Mule',
    price: 2450,
    heelHeight: '90MM HEEL',
    leatherType: 'EMBOSSED CALFSKIN',
    finish: 'HAND-FINISHED',
    image: '/src/assets/images/flora_nocturne_mule_1791567527306.jpg',
    secondaryImage: '/src/assets/images/botanical_sculpture_macro_1791567546515.jpg',
    description:
      'A sleek pointed mule tailored for gala evenings. The upper features refined botanical relief calfskin, anchored by an intertwined golden stem heel with budding flower calyx accents.',
    details: [
      '90mm (3.5 in) twisted botanical heel cast in polished gold bronze',
      'Deep V-cut vamp silhouette for an elongated instep line',
      'Breathable kidskin interior in signature midnight noir',
      'Tuscan leather sole finished by hand with burnished bevel edges'
    ],
    specs: {
      heel: '90mm twisted golden botanical bronze stem',
      upper: 'Florentine embossed noir calfskin leather',
      lining: 'Black kidskin leather with gold debossed monogram',
      sole: 'Lacquered leather sole with anti-slip tread',
      hardware: 'Gilded leaf heel accents',
      origin: 'Florence, Italy — Master Atelier No. 4'
    },
    availableSizes: [35, 36, 36.5, 37, 37.5, 38, 38.5, 39, 40, 41],
    colorways: [
      {
        id: 'nocturne-classic',
        name: 'Midnight & Polished Gold',
        leatherColor: 'Obsidian Jet Black',
        hardwareFinish: '24K Polished Gold',
        hex: '#141416',
        goldTone: '#e5b95b'
      },
      {
        id: 'bronze-velvet',
        name: 'Charcoal & Antiqued Gold',
        leatherColor: 'Smoky Charcoal',
        hardwareFinish: 'Antiqued Brushed Gold',
        hex: '#222328',
        goldTone: '#cca578'
      }
    ]
  },
  {
    id: 'flora-dorsay-pump',
    name: "The Flora D'Orsay Pump",
    subtitle: 'Sculpted orchid vine heel with classic side-cut silhouette.',
    category: "D'Orsay Pump",
    price: 2700,
    heelHeight: '100MM HEEL',
    leatherType: 'VELVET & CALFSKIN',
    finish: 'HAND-FINISHED',
    image: '/src/assets/images/flora_d_orsay_pump_1791567537349.jpg',
    secondaryImage: '/src/assets/images/botanical_sculpture_macro_1791567546515.jpg',
    description:
      'An ode to classical Parisian silhouette architecture. An ankle strap in midnight velvet supports a sculpted open-side waist, culminating in an intricate flowering orchid vine heel in high-relief gold.',
    details: [
      '100mm (3.9 in) sculpted blooming orchid vine heel in 24k vermeil',
      'Refined buckle ankle strap with miniature pavé crystal clasp',
      'Deep indigo-midnight velvet rear quarter with embossed calfskin toe box',
      'Dual-cushioned insole for hours of effortless posture'
    ],
    specs: {
      heel: '100mm gilded orchid blossom sculptural bronze',
      upper: 'Hybrid embossed calfskin and silk velvet',
      lining: 'Blush kidskin with hand-stitched borders',
      sole: 'Buffed leather with Maison Aurélia signature seal',
      hardware: 'Micro pavé buckle and gilded orchid vines',
      origin: 'Paris & Florence Ateliers'
    },
    availableSizes: [36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 41],
    colorways: [
      {
        id: 'royal-midnight',
        name: 'Midnight Velvet & Gold',
        leatherColor: 'Deep Midnight Velvet / Noir',
        hardwareFinish: '24K Orchid Gold',
        hex: '#0d131f',
        goldTone: '#e5b95b'
      },
      {
        id: 'pure-nero',
        name: 'Total Nero & Gold',
        leatherColor: 'Pure Black Calfskin',
        hardwareFinish: '24K Polished Gold',
        hex: '#111113',
        goldTone: '#d4a034'
      }
    ]
  }
];

export interface Boutique {
  city: string;
  salonName: string;
  address: string;
  hours: string;
  phone: string;
  privateAppointmentOnly: boolean;
}

export const BOUTIQUES: Boutique[] = [
  {
    city: 'Paris',
    salonName: 'Salons Aurélia Vendôme',
    address: '18 Place Vendôme, 75001 Paris, France',
    hours: 'Mon – Sat: 10:00 – 19:30',
    phone: '+33 1 42 68 00 12',
    privateAppointmentOnly: true
  },
  {
    city: 'Milan',
    salonName: 'Atelier Aurélia Montenapoleone',
    address: 'Via Monte Napoleone, 12, 20121 Milano, Italy',
    hours: 'Mon – Sat: 10:30 – 19:30',
    phone: '+39 02 7600 8421',
    privateAppointmentOnly: true
  },
  {
    city: 'New York',
    salonName: 'Maison Aurélia Madison',
    address: '740 Madison Avenue, New York, NY 10065',
    hours: 'Mon – Sat: 10:00 – 18:30',
    phone: '+1 212 555 0188',
    privateAppointmentOnly: true
  },
  {
    city: 'Tokyo',
    salonName: 'Aurélia Ginza Maison',
    address: '5-7-2 Ginza, Chuo-ku, Tokyo 104-0061',
    hours: 'Mon – Sun: 11:00 – 20:00',
    phone: '+81 3 3567 9920',
    privateAppointmentOnly: true
  }
];

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-of-the-gilded-heel',
    title: 'The Anatomy of a Gilded Heel: Where Metallurgy Meets Couture',
    category: 'Savoir-Faire',
    date: 'Autumn 2026',
    readTime: '4 min read',
    excerpt:
      'How our Florence bronze foundry borrows centuries-old lost-wax casting techniques from Renaissance sculptors to engineer a stiletto heel that bears 300 times its own weight.',
    author: 'Clara Delacroix, Head of Horological Casting'
  },
  {
    id: 'botanical-grace-philosophy',
    title: 'Botanical Grace: Transforming Florentine Reliefs Into Wearable Architecture',
    category: 'Design Philosophy',
    date: 'Summer 2026',
    readTime: '5 min read',
    excerpt:
      'Nature never draws a straight line. Exploring the organic curved vine and hand-embossed petal dynamics that sculpt the posture of the modern discerning woman.',
    author: 'Aurélien Laurent, Creative Director'
  },
  {
    id: 'white-glove-provenance',
    title: 'The Provenance Certificate: Preserving the Heritage of Every Hand-Finished Pair',
    category: 'Heritage',
    date: 'Spring 2026',
    readTime: '3 min read',
    excerpt:
      'Every pair of The Flora Stiletto is numbered with a microscopic hallmark and accompanied by a master shoemaker provenance passport.',
    author: 'Maison Aurélia Archives'
  }
];
