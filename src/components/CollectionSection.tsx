import React, { useState } from 'react';
import { Eye, Plus, Check } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { useCart } from '../context/CartContext';

export const CollectionSection: React.FC = () => {
  const { formatPrice, setSelectedProduct, addToCart } = useCart();
  const [activeFilter, setActiveFilter] = useState<'all' | 'stilettos' | 'mules-pumps'>('all');

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeFilter === 'stilettos') return p.category.toLowerCase().includes('stiletto');
    if (activeFilter === 'mules-pumps')
      return p.category.toLowerCase().includes('mule') || p.category.toLowerCase().includes('pump');
    return true;
  });

  return (
    <section id="collection" className="py-24 bg-[#09090b] relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#cca578] block mb-2 font-light">
              LA COLLECTION BOTANIQUE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-white tracking-wide">
              Haute Couture Footwear
            </h2>
          </div>

          {/* Interactive Filter Tabs (functional buttons with click handlers) */}
          <div className="flex items-center gap-1 p-1 bg-stone-900/80 border border-stone-800 rounded-lg self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-sans tracking-wider rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-stone-800 text-amber-200 shadow-sm font-medium'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              All Creations
            </button>
            <button
              onClick={() => setActiveFilter('stilettos')}
              className={`px-3.5 py-1.5 text-xs font-sans tracking-wider rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'stilettos'
                  ? 'bg-stone-800 text-amber-200 shadow-sm font-medium'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Stilettos
            </button>
            <button
              onClick={() => setActiveFilter('mules-pumps')}
              className={`px-3.5 py-1.5 text-xs font-sans tracking-wider rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'mules-pumps'
                  ? 'bg-stone-800 text-amber-200 shadow-sm font-medium'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Mules & Pumps
            </button>
          </div>
        </div>

        {/* 3-Column Luxury Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col bg-[#101014] rounded-2xl overflow-hidden border border-stone-800/80 hover:border-amber-900/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Product Imagery Frame */}
              <div
                onClick={() => setSelectedProduct(product)}
                className="relative aspect-[4/3] w-full overflow-hidden bg-[#0c0c0e] cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-transparent to-transparent opacity-50" />

                {/* Quick Inspect Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900/90 border border-amber-900/50 text-xs font-sans tracking-widest uppercase text-amber-100 shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-[#cca578]" />
                    Inspect Details
                  </span>
                </div>
              </div>

              {/* Product Content & Metadata */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Clean unboxed metadata with typographic dot separator */}
                  <div className="flex items-center gap-2 text-[11px] font-sans tracking-widest text-[#cca578] uppercase mb-1.5 font-light">
                    <span>{product.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{product.heelHeight}</span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setSelectedProduct(product)}
                    className="font-serif text-xl text-white hover:text-amber-200 transition-colors cursor-pointer mb-2 font-normal"
                  >
                    {product.name}
                  </h3>

                  {/* Description excerpt */}
                  <p className="text-xs text-stone-400 font-light line-clamp-2 leading-relaxed mb-4">
                    {product.subtitle}
                  </p>
                </div>

                {/* Bottom Row: Price & Action */}
                <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] tracking-wider uppercase text-stone-500">
                      Maison Edition
                    </span>
                    <span className="font-mono text-base font-semibold text-amber-100 tabular-nums">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="px-3.5 py-1.5 rounded-full border border-stone-700 hover:border-amber-700/60 text-xs text-stone-300 hover:text-white transition-colors cursor-pointer"
                    >
                      Bespoke Specs
                    </button>
                    <button
                      onClick={() => addToCart(product, product.availableSizes[2] || 38, product.colorways[0].id)}
                      className="p-2 rounded-full bg-[#cca578] hover:bg-[#e2c29d] text-stone-950 transition-colors cursor-pointer"
                      title="Quick Add in Size EU 38"
                      aria-label={`Quick add ${product.name}`}
                    >
                      <Plus className="w-4 h-4 stroke-[2]" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
