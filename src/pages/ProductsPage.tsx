import React, { useState } from 'react';
import { PageType } from '../components/yadah/Navbar';
import { PRODUCT_SIZES, YADAH_BRAND, NUTRITION_FACTS, ProductSize } from '../data/yadahData';
import { useYadahCart } from '../context/YadahCartContext';
import {
  ShoppingBag,
  CheckCircle2,
  Layers,
  ArrowRight,
  Flame,
} from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: PageType) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  const { addToCart, theme } = useYadahCart();
  const [selectedProduct, setSelectedProduct] = useState<ProductSize>(PRODUCT_SIZES[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const isDark = theme === 'dark';

  const handleAddCurrent = () => {
    addToCart(
      {
        id: selectedProduct.id,
        title: selectedProduct.sizeName,
        weight: selectedProduct.weight,
        priceNgn: selectedProduct.priceNgn,
        image: selectedProduct.image,
      },
      quantity
    );
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 space-y-16 sm:space-y-20">
      {/* 1. PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider text-[#C26E42] ${
            isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-[#C26E42]" />
          <span>Product Lineup & Nutrition Dossier</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight">
          {YADAH_BRAND.productName}
        </h1>
        <p className={`text-sm sm:text-base max-w-2xl leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#695A4E]'}`}>
          {YADAH_BRAND.productType} made with 100% natural ingredients. Sealed in airtight foil pouches for maximum crunch and lasting freshness.
        </p>
      </section>

      {/* 2. INTERACTIVE PRODUCT SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12 rounded-3xl sm:rounded-[32px] border shadow-sm ${
            isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200/90'
          }`}
        >
          {/* Left: Product Imagery */}
          <div className="lg:col-span-6 space-y-4">
            <div
              className={`aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border relative shadow-inner ${
                isDark ? 'bg-stone-800 border-stone-700' : 'bg-stone-50 border-stone-200'
              }`}
            >
              <img
                src={selectedProduct.image}
                alt={selectedProduct.sizeName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute top-3 left-3 bg-[#1C1613]/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/20">
                {selectedProduct.badge || selectedProduct.weight}
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {PRODUCT_SIZES.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => {
                    setSelectedProduct(prod);
                    setQuantity(1);
                  }}
                  className={`p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedProduct.id === prod.id
                      ? 'border-[#C26E42] bg-[#C26E42]/10 ring-1 ring-[#C26E42]'
                      : isDark
                      ? 'border-stone-800 bg-stone-800/40 hover:bg-stone-800'
                      : 'border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <div className="font-bold text-xs truncate">{prod.weight}</div>
                  <div className="text-[11px] text-[#C26E42] font-semibold tabular-nums mt-0.5">
                    ₦{prod.priceNgn.toLocaleString()}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details & Add to Cart Action */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C26E42]">
                <span>Weight: {selectedProduct.weight}</span>
                <span>·</span>
                <span>{selectedProduct.isFlagship ? 'Signature Flagship' : 'Convenient Pack'}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-medium mt-1">
                {selectedProduct.sizeName}
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed mt-2 ${isDark ? 'text-stone-300' : 'text-[#695A4E]'}`}>
                {selectedProduct.description}
              </p>
            </div>

            {/* Ideal For Callout */}
            <div
              className={`p-3.5 sm:p-4 rounded-2xl border text-xs space-y-1 ${
                isDark ? 'bg-stone-800/80 border-stone-700' : 'bg-[#FAF7F2] border-stone-200'
              }`}
            >
              <span className="font-semibold block text-[#C26E42]">Best Suited For:</span>
              <p className={isDark ? 'text-stone-300' : 'text-[#6B5D52]'}>{selectedProduct.idealFor}</p>
            </div>

            {/* Price & Quantity Control */}
            <div className="space-y-3 pt-2 border-t border-stone-200/50">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block">
                    Price per Pouch
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold font-sans tabular-nums text-[#C26E42]">
                    ₦{selectedProduct.priceNgn.toLocaleString()}
                  </span>
                </div>

                {/* Quantity Buttons */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xs text-stone-400">Qty:</span>
                  <div className="flex items-center border border-stone-200 dark:border-stone-700 rounded-xl overflow-hidden bg-white dark:bg-stone-800">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-1.5 text-xs font-bold hover:bg-stone-100 dark:hover:bg-stone-700"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-bold tabular-nums">{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3 py-1.5 text-xs font-bold hover:bg-stone-100 dark:hover:bg-stone-700"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Total & Add Button */}
              <button
                onClick={handleAddCurrent}
                className="aura-terracotta-btn w-full py-3.5 sm:py-4 rounded-full text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#C26E42]/25"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>
                  Add {quantity}x to Bag — ₦{(selectedProduct.priceNgn * quantity).toLocaleString()}
                </span>
              </button>
            </div>

            {/* Quick trust reassurance */}
            <div className="grid grid-cols-2 gap-2 text-xs text-stone-400 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Resealable Airtight Zip</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Zero Artificial Additives</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NUTRITION FACTS & INGREDIENTS TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C26E42]">
            Transparency & Wholesomeness
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl">
            Nutrition & Ingredient Breakdown
          </h2>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-stone-300' : 'text-[#695A4E]'}`}>
            Verified nutritional profile per 100 grams of Yadah’s Crunchy Flat Kulikuli.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Nutrition Table (7 cols) */}
          <div
            className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border shadow-xs space-y-4 ${
              isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
            }`}
          >
            <div className="flex items-center justify-between border-b border-stone-200/50 pb-3">
              <h3 className="font-serif text-lg sm:text-xl font-semibold">
                Nutrition Information (per 100g)
              </h3>
              <span className="text-xs font-mono text-[#8E8074]">Yadah Standard</span>
            </div>

            <div className="divide-y divide-stone-100 dark:divide-stone-800">
              {NUTRITION_FACTS.map((fact) => (
                <div
                  key={fact.nutrient}
                  className="py-2.5 flex items-center justify-between text-xs sm:text-sm"
                >
                  <span className="font-medium">{fact.nutrient}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#C26E42] font-mono tabular-nums">
                      {fact.amount}
                    </span>
                    <span className="text-[11px] text-stone-400 hidden sm:inline">
                      ({fact.note})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients & Allergen Side Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Ingredients */}
            <div
              className={`p-6 rounded-3xl border shadow-xs space-y-3 ${
                isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C26E42]">
                <Layers className="w-3.5 h-3.5" />
                <span>Ingredients List</span>
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#5C4D40]'}`}>
                {YADAH_BRAND.ingredients.join(', ')}.
              </p>
              <div className="pt-2 text-[11px] text-stone-400 border-t border-stone-200/50">
                100% natural local recipe. Zero chemical preservatives, zero MSG, zero artificial coloring.
              </div>
            </div>

            {/* Allergen & Storage */}
            <div
              className={`p-6 rounded-3xl border shadow-xs space-y-4 ${
                isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
              }`}
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C26E42] block mb-1">
                  Allergen Advisory
                </span>
                <p className={`text-xs ${isDark ? 'text-stone-300' : 'text-[#5C4D40]'}`}>
                  {YADAH_BRAND.allergenAdvice}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200/50">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C26E42] block mb-1">
                  Storage Instructions
                </span>
                <p className={`text-xs ${isDark ? 'text-stone-300' : 'text-[#5C4D40]'}`}>
                  {YADAH_BRAND.storageInstructions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHOLESALE CROSS-LINK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 sm:p-10 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 ${
            isDark ? 'bg-stone-900 border-stone-800' : 'bg-[#FAF7F2] border-[#8F7D6E]/30'
          }`}
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-xl sm:text-2xl">
              Are you a Retailer, Supermarket, or Event Planner?
            </h3>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-stone-300' : 'text-[#695A4E]'}`}>
              We supply cartons with attractive wholesale pricing and profit margins between 15% to 24%.
            </p>
          </div>

          <button
            onClick={() => onNavigate('wholesale')}
            className="aura-terracotta-btn px-6 py-3 rounded-full text-white text-xs font-semibold cursor-pointer shrink-0 inline-flex items-center gap-2"
          >
            <span>View Wholesale Cartons</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
