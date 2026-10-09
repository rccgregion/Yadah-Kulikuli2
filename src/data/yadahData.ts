export interface ProductSize {
  id: string;
  sizeName: string;
  weight: string;
  weightGrams: number;
  priceNgn: number;
  image: string;
  description: string;
  idealFor: string;
  badge?: string;
  isFlagship?: boolean;
}

export interface WholesaleTier {
  id: string;
  name: string;
  unitsPerCarton: number;
  packSize: string;
  weight: string;
  cartonPriceNgn: number;
  unitEquivalentNgn: number;
  recommendedRetailNgn: number;
  retailProfitMargin: string;
  recommendedFor: string;
}

export const YADAH_BRAND = {
  brandName: "Yadah’s Crunchies",
  monogram: "Y✦",
  productName: "Premium Crunchy Kulikuli (Spicy Peanut Snack)",
  productType: "Spicy Peanut Snack (Flat Kulikuli)",
  manufacturer: "Produced by Yadah’s Crunchies",
  physicalAddress: "Off Hassan Katsina Road, Zone 8, Lokoja, Kogi State, Nigeria",
  weightFlagship: "250 grams",
  tagline: "Crunchy. Spicy. Irresistible.",
  flavorProfile: "Bold, peppered, and authentically Nigerian",
  frontHighlights: [
    "Fresh Crunchy Spicy",
    "100% Natural",
    "Rich in Protein",
    "Bold & Spicy",
    "Crunch You Can’t Resist"
  ],
  phone: "+234 (0) 816 209 5850",
  whatsappNumber: "+2348162095850",
  socialMedia: "@YadahCrunchies",
  storageInstructions: "Store in a cool, dry place. Keep sealed after opening to maintain crunchiness.",
  allergenAdvice: "Contains Peanuts. Made in a facility that handles nuts.",
  ingredients: [
    "Selected Groundnuts (Peanuts)",
    "Chili Pepper",
    "Spices",
    "Salt",
    "Vegetable Oil (for frying)"
  ]
};

export const PRODUCT_SIZES: ProductSize[] = [
  {
    id: "size-xl",
    sizeName: "Size XL (Signature Flagship)",
    weight: "250g",
    weightGrams: 250,
    priceNgn: 1000,
    image: "/src/assets/images/yadah_signature_pouch_front_back_1791568597763.jpg",
    description: "Our signature flagship pouch. Generously filled with authentic flat peppered kulikuli crisps, seasoned to a bold, irresistible crunch.",
    idealFor: "Desk fuel, movie nights, companion for chilled soaked garri, weekend sharing",
    badge: "Signature Flagship",
    isFlagship: true
  },
  {
    id: "size-l",
    sizeName: "Size L (Pocket Grab)",
    weight: "150g",
    weightGrams: 150,
    priceNgn: 500,
    image: "/src/assets/images/yadah_three_sizes_lineup_1791568558953.jpg",
    description: "The ideal personal on-the-go pocket snack. Perfectly portioned, crispy, peppered, and ready for commutes, study sessions, or quick energy boosts.",
    idealFor: "Office desk snack, school bags, car rides, travel pack",
    badge: "Popular Quick Grab"
  },
  {
    id: "size-xxl",
    sizeName: "Size XXL (Family Feast)",
    weight: "400g",
    weightGrams: 400,
    priceNgn: 1500,
    image: "/src/assets/images/yadah_hero_banner_1791568533893.jpg",
    description: "Maximum crunch for true kulikuli enthusiasts, large families, and gatherings. Heavy-duty airtight resealable zip ensures prolonged crunch.",
    idealFor: "Family sharing, festive parties, corporate hospitality trays, gift hampers",
    badge: "Best Value"
  }
];

export const KEY_ATTRIBUTES = [
  {
    icon: "Sprout",
    symbol: "🌱",
    title: "100% Natural",
    marketingText: "No artificial additives, preservatives, or colorings.",
    benefit: "Pure, real goodness in every bite."
  },
  {
    icon: "Dumbbell",
    symbol: "💪",
    title: "Rich in Protein",
    marketingText: "Packed with plant-based peanut protein.",
    benefit: "A healthy snack and smart energy choice."
  },
  {
    icon: "Flame",
    symbol: "🔥",
    title: "Bold & Spicy",
    marketingText: "Infused with a perfect blend of local spices.",
    benefit: "Peppered to perfection for an authentic kick."
  },
  {
    icon: "Heart",
    symbol: "❤️",
    title: "Crunch You Can Trust",
    marketingText: "Crafted using premium, carefully selected groundnuts.",
    benefit: "Delivers a dependable, satisfying crunch."
  }
];

export const NUTRITION_FACTS = [
  { nutrient: "Energy", amount: "750 kcal", note: "High natural energy source" },
  { nutrient: "Carbohydrate", amount: "10 g", note: "Wholesome complex carbs" },
  { nutrient: "Sugar", amount: "5 g", note: "Naturally occurring peanut sugars" },
  { nutrient: "Fat", amount: "3 g", note: "Heart-healthy plant lipids" },
  { nutrient: "Saturates", amount: "1 g", note: "Low saturated fat profile" },
  { nutrient: "Salt", amount: "30 mg", note: "Delicately balanced seasoning" },
  { nutrient: "Protein", amount: "5 g", note: "100% plant-based protein" },
  { nutrient: "Vitamin B12", amount: "Source", note: "Healthy source for snacking" }
];

export const WHOLESALE_TIERS: WholesaleTier[] = [
  {
    id: "carton-xl",
    name: "Carton of Size XL (24 Packs)",
    unitsPerCarton: 24,
    packSize: "Size XL (250g Signature)",
    weight: "6.0 kg Total",
    cartonPriceNgn: 20400,
    unitEquivalentNgn: 850,
    recommendedRetailNgn: 1000,
    retailProfitMargin: "15% - 22% Profit",
    recommendedFor: "Supermarkets, mini-marts, fuel station marts, campus stores"
  },
  {
    id: "carton-l",
    name: "Carton of Size L (40 Packs)",
    unitsPerCarton: 40,
    packSize: "Size L (150g Pocket)",
    weight: "6.0 kg Total",
    cartonPriceNgn: 17000,
    unitEquivalentNgn: 425,
    recommendedRetailNgn: 500,
    retailProfitMargin: "15% - 20% Profit",
    recommendedFor: "Corner shops, kiosks, school canteens, street-side marts"
  },
  {
    id: "carton-xxl",
    name: "Carton of Size XXL (16 Packs)",
    unitsPerCarton: 16,
    packSize: "Size XXL (400g Jumbo)",
    weight: "6.4 kg Total",
    cartonPriceNgn: 20000,
    unitEquivalentNgn: 1250,
    recommendedRetailNgn: 1500,
    retailProfitMargin: "16% - 24% Profit",
    recommendedFor: "Gift shops, events, corporate hampers, premium grocers"
  }
];

export const FAQS = [
  {
    q: "Where is Yadah's Crunchies produced?",
    a: "We are proudly manufactured in Lokoja, Kogi State, Nigeria (Off Hassan Katsina Road, Zone 8) using selected local groundnuts and traditional pressing methods for an unmatched crunch."
  },
  {
    q: "Do you deliver nationwide across Nigeria?",
    a: "Yes! We dispatch orders nationwide via interstate road logistics and courier services to Lagos, Abuja, Port Harcourt, Kano, Ibadan, Enugu, and all 36 states."
  },
  {
    q: "How long does Yadah's Kulikuli stay crunchy?",
    a: "Our Kulikuli retains its peak crunch for up to 6 months when unopened. Each pouch features an airtight seal—just reseal after snacking to preserve the crispiness."
  },
  {
    q: "What makes flat kulikuli different from round kulikuli balls?",
    a: "Flat kulikuli offers a much lighter, crispier, and shatter-in-the-mouth texture compared to dense hard balls. It absorbs the spicy pepper marinade evenly for full flavor in every bite."
  },
  {
    q: "How do I place a wholesale order?",
    a: "You can select your desired cartons directly on our Wholesale page or click 'Order on WhatsApp' (+234 816 209 5850) to receive an official distributor invoice and immediate logistics coordination."
  }
];
