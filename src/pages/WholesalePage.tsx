import React, { useState } from 'react';
import { PageType } from '../components/yadah/Navbar';
import { WHOLESALE_TIERS, WholesaleTier } from '../data/yadahData';
import { YADAH_IMAGES } from '../assets/yadahImages';
import { useYadahCart } from '../context/YadahCartContext';
import {
  Boxes,
  TrendingUp,
  Truck,
  ShieldCheck,
  ShoppingBag,
  MessageSquare,
  Calculator,
} from 'lucide-react';

interface WholesalePageProps {
  onNavigate: (page: PageType) => void;
}

export const WholesalePage: React.FC<WholesalePageProps> = ({ onNavigate }) => {
  const { addToCart, theme } = useYadahCart();
  const [selectedTier, setSelectedTier] = useState<WholesaleTier>(WHOLESALE_TIERS[0]);
  const [sellingPrice, setSellingPrice] = useState<number>(1000);
  const isDark = theme === 'dark';

  const calculateProfit = () => {
    const totalRevenue = sellingPrice * selectedTier.unitsPerCarton;
    const profit = totalRevenue - selectedTier.cartonPriceNgn;
    const margin = ((profit / totalRevenue) * 100).toFixed(1);
    return { totalRevenue, profit, margin };
  };

  const { totalRevenue, profit, margin } = calculateProfit();

  const handleAddCarton = (tier: WholesaleTier) => {
    addToCart({
      id: tier.id,
      title: `${tier.name}`,
      weight: tier.weight,
      priceNgn: tier.cartonPriceNgn,
      image: YADAH_IMAGES.heroBanner,
      isWholesale: true,
    });
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 space-y-16 sm:space-y-20">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider text-[#C26E42] ${
            isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
          }`}
        >
          <Boxes className="w-3.5 h-3.5 text-[#C26E42]" />
          <span>B2B & Retail Distribution Portal</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight">
          Stock Nigeria’s Favorite Peppered Kulikuli
        </h1>
        <p className={`text-sm sm:text-base max-w-2xl leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#695A4E]'}`}>
          Supply your supermarket, corner mart, campus tuck shop, or event hampers with high-turnover cartons. Attractive profit margins and dependable interstate dispatch from Lokoja.
        </p>
      </section>

      {/* 2. THREE WHOLESALE CARTON TIERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {WHOLESALE_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`p-6 sm:p-7 rounded-3xl border shadow-sm flex flex-col justify-between space-y-6 transition-all ${
                isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200/90'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider text-[#C26E42] px-3 py-1 rounded-full border ${
                      isDark ? 'bg-stone-800 border-stone-700' : 'bg-[#FAF7F2] border-stone-200'
                    }`}
                  >
                    {tier.unitsPerCarton} Packs / Carton
                  </span>
                  <span className="text-xs font-mono text-stone-400">{tier.weight}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-medium">
                  {tier.name}
                </h3>

                <div
                  className={`p-3.5 rounded-2xl border text-xs space-y-1.5 ${
                    isDark ? 'bg-stone-800/60 border-stone-700 text-stone-300' : 'bg-[#FAF7F2] border-stone-100'
                  }`}
                >
                  <div className="flex justify-between">
                    <span className="text-stone-400">Unit Cost:</span>
                    <span className="font-bold tabular-nums">₦{tier.unitEquivalentNgn} / pack</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Rec. Retail:</span>
                    <span className="font-bold tabular-nums">₦{tier.recommendedRetailNgn} / pack</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-stone-200/40 text-[#C26E42] font-semibold">
                    <span>Retailer Margin:</span>
                    <span>{tier.retailProfitMargin}</span>
                  </div>
                </div>

                <div className={`text-xs ${isDark ? 'text-stone-400' : 'text-[#6B5D52]'}`}>
                  <span className="font-semibold text-[#C26E42]">Recommended for:</span>{' '}
                  {tier.recommendedFor}
                </div>
              </div>

              {/* Price & Add to Cart */}
              <div className="pt-4 border-t border-stone-200/50 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-stone-400">Carton Price:</span>
                  <span className="text-xl sm:text-2xl font-bold font-sans text-[#C26E42] tabular-nums">
                    ₦{tier.cartonPriceNgn.toLocaleString()}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleAddCarton(tier)}
                    className="aura-terracotta-btn py-3 px-3 rounded-full text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>

                  <a
                    href={`https://wa.me/2348162095850?text=Hello%20Yadah's%20Crunchies,%20I%20would%20like%20to%20order%20wholesale%20cartons%20of%20${encodeURIComponent(
                      tier.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-3 px-3 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer border ${
                      isDark ? 'bg-stone-800 text-stone-200 border-stone-700' : 'bg-white text-[#241D17] border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#C26E42]" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE RETAILER PROFIT CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-6 sm:p-10 lg:p-12 rounded-3xl sm:rounded-[32px] border shadow-sm space-y-8 ${
            isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C26E42]">
                <Calculator className="w-4 h-4 text-[#C26E42]" />
                <span>Interactive Estimator</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl">
                Retail Profit Margin Calculator
              </h2>
            </div>

            {/* Select Tier */}
            <div className="flex flex-wrap gap-2">
              {WHOLESALE_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => {
                    setSelectedTier(tier);
                    setSellingPrice(tier.recommendedRetailNgn);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedTier.id === tier.id
                      ? 'bg-[#C26E42] text-white'
                      : isDark
                      ? 'bg-stone-800 text-stone-300 border border-stone-700'
                      : 'bg-[#FAF7F2] text-[#4A3D33] border border-stone-200'
                  }`}
                >
                  {tier.packSize}
                </button>
              ))}
            </div>
          </div>

          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-6 sm:p-8 rounded-2xl border ${
              isDark ? 'bg-stone-800/50 border-stone-700' : 'bg-[#FAF7F2] border-stone-200'
            }`}
          >
            <div className="lg:col-span-6 space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                  Your Intended Retail Selling Price (per pack)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={selectedTier.unitEquivalentNgn + 50}
                    max={selectedTier.unitEquivalentNgn * 2}
                    step={50}
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(Number(e.target.value))}
                    className="flex-1 accent-[#C26E42] cursor-pointer"
                  />
                  <span className="text-xl font-bold font-sans tabular-nums min-w-[5rem] text-right text-[#C26E42]">
                    ₦{sellingPrice}
                  </span>
                </div>
              </div>

              <div className={`text-xs ${isDark ? 'text-stone-300' : 'text-[#695A4E]'}`}>
                Cost per pack to you: <span className="font-semibold">₦{selectedTier.unitEquivalentNgn}</span> ({selectedTier.unitsPerCarton} packs per carton @ ₦{selectedTier.cartonPriceNgn.toLocaleString()})
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 border-t lg:border-t-0 lg:border-l border-stone-200/50 pt-4 lg:pt-0 lg:pl-6 text-center">
              <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'}`}>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Gross Revenue</span>
                <span className="text-base sm:text-lg font-bold tabular-nums mt-0.5 block">₦{totalRevenue.toLocaleString()}</span>
              </div>
              <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'}`}>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Net Profit</span>
                <span className="text-base sm:text-lg font-bold text-emerald-500 tabular-nums mt-0.5 block">+₦{profit.toLocaleString()}</span>
              </div>
              <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'}`}>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Profit Margin</span>
                <span className="text-base sm:text-lg font-bold text-[#C26E42] tabular-nums mt-0.5 block">{margin}%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHOLESALE PERKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className={`p-6 rounded-3xl border space-y-2 ${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'}`}>
            <Truck className="w-6 h-6 text-[#C26E42]" />
            <h3 className="font-serif text-lg font-semibold">Nationwide Logistics</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#6B5D52]'}`}>
              We dispatch cartons daily via verified transport logistics to major motor parks and courier depots across all 36 states.
            </p>
          </div>

          <div className={`p-6 rounded-3xl border space-y-2 ${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'}`}>
            <ShieldCheck className="w-6 h-6 text-[#C26E42]" />
            <h3 className="font-serif text-lg font-semibold">6-Month Shelf Life</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#6B5D52]'}`}>
              Our durable foil pouches prevent moisture and air leakage, maintaining the crunch for half a year in store conditions.
            </p>
          </div>

          <div className={`p-6 rounded-3xl border space-y-2 ${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'}`}>
            <TrendingUp className="w-6 h-6 text-[#C26E42]" />
            <h3 className="font-serif text-lg font-semibold">High Consumer Retention</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#6B5D52]'}`}>
              Customers who buy one pack frequently return for multiple pouches because of our authentic spice kick and dependable crunch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
