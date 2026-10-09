import React from 'react';
import { PageType } from '../components/yadah/Navbar';
import { YADAH_BRAND, KEY_ATTRIBUTES, PRODUCT_SIZES } from '../data/yadahData';
import { useYadahCart } from '../context/YadahCartContext';
import {
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Flame,
  MapPin,
  Sparkles,
  ShieldCheck,
  Phone,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { addToCart, theme } = useYadahCart();
  const signatureProduct = PRODUCT_SIZES[0]; // 250g Size XL
  const isDark = theme === 'dark';

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. HERO SECTION FEATURING THE UPLOADED PACKAGING SET IMAGE */}
      <section
        className={`relative pt-24 sm:pt-28 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b transition-colors duration-300 ${
          isDark
            ? 'bg-gradient-to-b from-[#1E1915] via-[#16120F] to-[#120F0D] border-stone-800 text-stone-100'
            : 'bg-gradient-to-b from-[#FAF7F2] via-[#F4EFEA] to-[#ECE3D8] border-[#8F7D6E]/15 text-[#241D17]'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Brand & Hero Value Proposition */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left">
              {/* Highlight Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-900/10 border border-[#C26E42]/30 text-xs font-semibold uppercase tracking-wider text-[#C26E42]">
                <Flame className="w-3.5 h-3.5 text-[#C26E42] fill-current" />
                <span>Authentic Nigerian Flat Kulikuli · 250g Pouch</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.12] font-normal tracking-tight text-balance">
                Peppered Flat <br className="hidden sm:inline" />
                <span className="italic font-normal">Kulikuli</span>.{' '}
                <span className="text-[#C26E42]">Real Flavor.</span>
              </h1>

              {/* Tagline */}
              <p className="font-serif italic text-lg sm:text-2xl text-[#C26E42] font-medium">
                “{YADAH_BRAND.tagline}”
              </p>

              {/* Description */}
              <p
                className={`text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 ${
                  isDark ? 'text-stone-300' : 'text-[#5E5045]'
                }`}
              >
                Crafted by Yadah’s Crunchies in Lokoja, Kogi State from carefully selected groundnuts, sun-dried chili peppers, and authentic local spices. 100% natural, rich in plant protein, and pressed thin for that dependable shatter-crunch.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <button
                  onClick={() => {
                    addToCart({
                      id: signatureProduct.id,
                      title: signatureProduct.sizeName,
                      weight: signatureProduct.weight,
                      priceNgn: signatureProduct.priceNgn,
                      image: signatureProduct.image,
                    });
                  }}
                  className="aura-terracotta-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white text-xs sm:text-sm font-semibold cursor-pointer shadow-lg shadow-[#C26E42]/25"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order 250g Signature — ₦1,000</span>
                </button>

                <button
                  onClick={() => onNavigate('products')}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isDark
                      ? 'bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-700'
                      : 'bg-white hover:bg-stone-50 text-[#241D17] border border-stone-200'
                  }`}
                >
                  <span>Explore All Sizes</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs border-t border-[#8F7D6E]/20 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C26E42] shrink-0" />
                  <span>100% Selected Peanuts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C26E42] shrink-0" />
                  <span>Rich Plant Protein</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C26E42] shrink-0" />
                  <span>Zero Additives</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C26E42] shrink-0" />
                  <span>Bold Local Spices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C26E42] shrink-0" />
                  <span>Resealable Airtight Zip</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C26E42] shrink-0" />
                  <span>Lokoja, Kogi State</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Showcase of the Uploaded Packaging Set */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg">
                {/* Luminous Warm Floor Glow */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-24 bg-[#E88E5E]/25 blur-3xl rounded-full pointer-events-none" />

                {/* Hero Packaging Set Image Container */}
                <div
                  className={`overflow-hidden rounded-3xl sm:rounded-[32px] border p-2 sm:p-3 shadow-2xl transition-all duration-300 ${
                    isDark
                      ? 'bg-stone-900/80 border-stone-800 shadow-black/60'
                      : 'bg-white/85 border-white/80 shadow-[#4a3928]/15'
                  }`}
                >
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl sm:rounded-[26px] overflow-hidden bg-[#241D17]">
                    <img
                      src="/src/assets/images/yadah_packaging_set.jpg"
                      alt="Yadah’s Crunchies Kulikuli Packaging Set - Front and Back Pouch"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover sm:object-contain object-center"
                    />

                    {/* Badge Overlay */}
                    <div className="absolute top-3 left-3 bg-[#1C1613]/90 text-white backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold border border-white/20 flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Official 250g Packaging Set</span>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-[#C26E42] text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-md">
                      ₦1,000 / Pouch
                    </div>
                  </div>

                  {/* Card Micro-Details Strip */}
                  <div className="px-3 py-3.5 flex items-center justify-between gap-3 text-xs">
                    <div>
                      <div className="font-bold text-[#241D17] dark:text-stone-100 flex items-center gap-1">
                        <span>Front & Back Official Pack</span>
                      </div>
                      <div className="text-[11px] text-[#78695C] dark:text-stone-400">
                        Sealed fresh in Lokoja · Resealable foil
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        addToCart({
                          id: signatureProduct.id,
                          title: signatureProduct.sizeName,
                          weight: signatureProduct.weight,
                          priceNgn: signatureProduct.priceNgn,
                          image: signatureProduct.image,
                        });
                      }}
                      className="aura-terracotta-btn px-4 py-2 rounded-full text-white text-xs font-semibold cursor-pointer shrink-0"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FRONT HIGHLIGHTS TICKER */}
      <div
        className={`py-3.5 border-y overflow-hidden transition-colors ${
          isDark ? 'bg-stone-900 border-stone-800' : 'bg-[#EFE8DD]/70 border-[#8F7D6E]/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6 text-xs font-semibold uppercase tracking-[0.18em]">
          {YADAH_BRAND.frontHighlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C26E42]" />
              <span className={isDark ? 'text-stone-300' : 'text-[#6B5D52]'}>
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. KEY PRODUCT ATTRIBUTES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-2 text-center sm:text-left">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C26E42]">
            Key Product Attributes
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight">
            Crafted for pure flavor, vitality, and dependable crunch.
          </h2>
          <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#695A4E]'}`}>
            Every batch of Yadah’s Crunchies is produced with rigorous quality control, giving you wholesome peanut energy with zero artificial additives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {KEY_ATTRIBUTES.map((attr, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl border shadow-xs space-y-3.5 transition-all ${
                isDark
                  ? 'bg-stone-900/90 border-stone-800 hover:border-stone-700'
                  : 'bg-white/90 border-stone-200/80 hover:shadow-md'
              }`}
            >
              <div className="text-3xl">{attr.symbol}</div>
              <h3 className="font-serif text-xl font-semibold">
                {attr.title}
              </h3>
              <p className={`text-xs leading-snug font-medium ${isDark ? 'text-stone-400' : 'text-[#7A6C60]'}`}>
                {attr.marketingText}
              </p>
              <div className="pt-2 border-t border-stone-200/50 text-xs">
                <span className="font-semibold text-[#C26E42]">Benefit: </span>
                <span className={isDark ? 'text-stone-300' : 'text-[#4A3D33]'}>
                  {attr.benefit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THREE PRODUCT SIZES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C26E42]">
              Snack Lineup
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight">
              From pocket grab to family feast.
            </h2>
          </div>

          <button
            onClick={() => onNavigate('wholesale')}
            className={`self-center sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold cursor-pointer border ${
              isDark
                ? 'bg-stone-800 text-stone-200 border-stone-700'
                : 'bg-white text-[#241D17] border-stone-200 hover:bg-stone-50'
            }`}
          >
            <span>Need Wholesale Cartons?</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C26E42]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCT_SIZES.map((prod) => (
            <div
              key={prod.id}
              className={`rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 ${
                prod.isFlagship
                  ? 'border-[#C26E42]/60 shadow-xl shadow-[#C26E42]/10 ring-1 ring-[#C26E42]/40 bg-white dark:bg-stone-900'
                  : isDark
                  ? 'bg-stone-900/80 border-stone-800'
                  : 'bg-white border-stone-200/90 shadow-xs'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C26E42]">
                    {prod.badge}
                  </span>
                  <span
                    className={`font-bold text-xs px-2.5 py-1 rounded-full ${
                      isDark ? 'bg-stone-800 text-stone-200' : 'bg-stone-100 text-[#4A3D32]'
                    }`}
                  >
                    {prod.weight}
                  </span>
                </div>

                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-stone-100 relative group">
                  <img
                    src={prod.image}
                    alt={prod.sizeName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium">
                    {prod.sizeName}
                  </h3>
                  <p className={`text-xs leading-relaxed mt-1.5 ${isDark ? 'text-stone-300' : 'text-[#6B5D52]'}`}>
                    {prod.description}
                  </p>
                  <div
                    className={`mt-3 text-[11px] p-2.5 rounded-xl border ${
                      isDark
                        ? 'bg-stone-800/60 border-stone-700 text-stone-300'
                        : 'bg-[#FAF7F2] border-stone-100 text-[#7A6C60]'
                    }`}
                  >
                    <span className="font-semibold">Ideal for:</span> {prod.idealFor}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-stone-200/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block">
                    Price
                  </span>
                  <span className="text-xl font-bold font-sans tabular-nums">
                    ₦{prod.priceNgn.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() =>
                    addToCart({
                      id: prod.id,
                      title: prod.sizeName,
                      weight: prod.weight,
                      priceNgn: prod.priceNgn,
                      image: prod.image,
                    })
                  }
                  className="aura-terracotta-btn px-4 py-2.5 rounded-full text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LOKOJA HERITAGE SHOWCASE */}
      <section
        className={`border-y py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors ${
          isDark ? 'bg-stone-900/60 border-stone-800' : 'bg-[#EFE8DD]/50 border-[#8F7D6E]/15'
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C26E42]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Confluence City Tradition</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-balance">
              Produced by Yadah’s Crunchies in Lokoja.
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#5E5045]'}`}>
              Located Off Hassan Katsina Road in Zone 8, Lokoja, Kogi State, we prepare authentic Northern Nigerian peppered flat kulikuli. Groundnuts are roasted, mechanically cold-pressed to extract excess oil, marinated in vibrant chili peppers, and fried to golden crispness.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="aura-terracotta-btn px-6 py-3 rounded-full text-white text-xs font-semibold cursor-pointer inline-flex items-center gap-2"
              >
                <span>Discover Our Heritage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden border border-stone-200/60 shadow-md">
              <img
                src="/src/assets/images/yadah_kulikuli_crispy_bowl_1791568546489.jpg"
                alt="Crispy Bowl of Peppered Kulikuli"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden border border-stone-200/60 shadow-md mt-6">
              <img
                src="/src/assets/images/yadah_lokoja_production_1791568569856.jpg"
                alt="Lokoja Production Workshop"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHATSAPP FAST ORDER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl sm:rounded-[32px] bg-gradient-to-r from-[#29221C] to-[#1C1613] text-white flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-xl text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E69165]">
              Nationwide Dispatch from Lokoja
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-white">
              Ready for authentic Nigerian crunch?
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Order directly through our WhatsApp sales desk for rapid courier dispatch across Lagos, Abuja, Port Harcourt, and all states.
            </p>
          </div>

          <a
            href="https://wa.me/2348162095850?text=Hello%20Yadah's%20Crunchies,%20I%20would%20like%20to%20order%20some%20Peppered%20Flat%20Kulikuli!"
            target="_blank"
            rel="noopener noreferrer"
            className="aura-terracotta-btn w-full md:w-auto px-7 py-3.5 rounded-full text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Order on WhatsApp (+234 816 209 5850)</span>
          </a>
        </div>
      </section>
    </div>
  );
};
