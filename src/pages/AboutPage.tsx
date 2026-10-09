import React from 'react';
import { PageType } from '../components/yadah/Navbar';
import { YADAH_BRAND, KEY_ATTRIBUTES } from '../data/yadahData';
import { MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { useYadahCart } from '../context/YadahCartContext';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { theme } = useYadahCart();
  const isDark = theme === 'dark';

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 space-y-16 sm:space-y-20">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="max-w-3xl space-y-3">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider text-[#C26E42] ${
              isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C26E42]" />
            <span>Our Lokoja Craftsmanship Story</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-balance">
            Rooted in heritage. Perfected for the modern palate.
          </h1>

          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#5E5045]'}`}>
            Yadah’s Crunchies was born out of a deep reverence for Northern Nigerian culinary tradition and a determination to create a clean, premium snack that never compromises on authentic flavor or health.
          </p>
        </div>
      </section>

      {/* 2. PRODUCTION PHOTO SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 rounded-3xl overflow-hidden border border-stone-200/60 shadow-md aspect-[16/10]">
            <img
              src="/src/assets/images/yadah_lokoja_production_1791568569856.jpg"
              alt="Yadah's Crunchies Production Workshop in Lokoja, Kogi State"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className={`md:col-span-5 space-y-5 p-6 sm:p-8 rounded-3xl border shadow-xs ${
              isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
            }`}
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C26E42]">
              Physical Location
            </div>
            <h2 className="font-serif text-2xl font-normal">
              Manufactured with Pride in Lokoja
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#695A4E]'}`}>
              Our workshop is situated in Zone 8, Off Hassan Katsina Road in Lokoja, Kogi State—a historic confluence city linking Northern grain and peanut farming heartlands with Southern markets.
            </p>
            <div
              className={`p-4 rounded-2xl border space-y-1 text-xs ${
                isDark ? 'bg-stone-800/80 border-stone-700' : 'bg-[#FAF7F2] border-stone-200'
              }`}
            >
              <span className="font-semibold block flex items-center gap-1.5 text-[#C26E42]">
                <MapPin className="w-3.5 h-3.5" />
                Factory & Atelier Address:
              </span>
              <p className={isDark ? 'text-stone-300' : 'text-[#5C4D40]'}>
                {YADAH_BRAND.physicalAddress}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 4-STEP ARTISANAL KULIKULI PROCESS */}
      <section
        className={`border-y py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors ${
          isDark ? 'bg-stone-900/60 border-stone-800' : 'bg-[#EFE8DD]/40 border-[#8F7D6E]/15'
        }`}
      >
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C26E42]">
              The Artisanal Method
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal">
              How we achieve that iconic shatter-crunch
            </h2>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-stone-300' : 'text-[#695A4E]'}`}>
              Unlike industrial snack factories using wheat fillers and chemical binders, our flat kulikuli follows pure peanut alchemy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className={`p-6 rounded-3xl border space-y-3 ${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'}`}>
              <span className="font-mono text-sm font-bold text-[#C26E42]">01</span>
              <h3 className="font-serif text-lg sm:text-xl font-medium">Peanut Selection & Roasting</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#5C4D40]'}`}>
                Only healthy, full-bodied Nigerian groundnuts are selected and gently dry-roasted to awaken natural peanut aromatics.
              </p>
            </div>

            <div className={`p-6 rounded-3xl border space-y-3 ${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'}`}>
              <span className="font-mono text-sm font-bold text-[#C26E42]">02</span>
              <h3 className="font-serif text-lg sm:text-xl font-medium">Cold Mechanical Oil Press</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#5C4D40]'}`}>
                Groundnuts are finely milled and physically pressed without chemicals to extract heavy excess oils, leaving behind nutrient-dense protein paste.
              </p>
            </div>

            <div className={`p-6 rounded-3xl border space-y-3 ${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'}`}>
              <span className="font-mono text-sm font-bold text-[#C26E42]">03</span>
              <h3 className="font-serif text-lg sm:text-xl font-medium">Spicy Pepper Marinade</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#5C4D40]'}`}>
                Infused with sun-dried chili peppers, aromatic ginger, and balanced sea salt. No MSG, no artificial colorings, no fake powders.
              </p>
            </div>

            <div className={`p-6 rounded-3xl border space-y-3 ${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'}`}>
              <span className="font-mono text-sm font-bold text-[#C26E42]">04</span>
              <h3 className="font-serif text-lg sm:text-xl font-medium">Thin-Flat Golden Fry</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#5C4D40]'}`}>
                Pressed wafer-thin into flat discs and flash-fried in clear vegetable oil until crisp and golden brown, then sealed in airtight pouches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY ATTRIBUTES RECAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="font-serif text-2xl sm:text-3xl text-center">
          Our Four Non-Negotiable Standards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {KEY_ATTRIBUTES.map((attr, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border space-y-2 text-center ${
                isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
              }`}
            >
              <div className="text-3xl mx-auto">{attr.symbol}</div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold">{attr.title}</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#6B5D52]'}`}>
                {attr.marketingText}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 sm:p-10 rounded-[32px] border text-center max-w-3xl mx-auto space-y-4 ${
            isDark ? 'bg-stone-900 border-stone-800' : 'bg-[#FAF7F2] border-[#8F7D6E]/30'
          }`}
        >
          <h2 className="font-serif text-2xl sm:text-3xl">
            Taste the authentic crunch of Lokoja
          </h2>
          <p className={`text-xs sm:text-sm max-w-lg mx-auto ${isDark ? 'text-stone-300' : 'text-[#695A4E]'}`}>
            Order a personal pouch or stock your retail shelves with our high-demand cartons today.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('products')}
              className="aura-terracotta-btn px-6 py-3 rounded-full text-white text-xs font-semibold cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>Explore Product Lineup</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('wholesale')}
              className={`px-6 py-3 rounded-full text-xs font-semibold cursor-pointer border ${
                isDark ? 'bg-stone-800 text-stone-200 border-stone-700' : 'bg-white text-[#241D17] border-stone-200'
              }`}
            >
              <span>Wholesale Information</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
