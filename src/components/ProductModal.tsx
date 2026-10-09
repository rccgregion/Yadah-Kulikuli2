import React, { useState } from 'react';
import { X, Check, Shield, Truck, Sparkles, ChevronRight } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart, formatPrice } = useCart();
  const [selectedColorwayId, setSelectedColorwayId] = useState(product.colorways[0].id);
  const [selectedSize, setSelectedSize] = useState<number>(38);
  const [monogram, setMonogram] = useState('');
  const [activeTab, setActiveTab] = useState<'details' | 'specs'>('details');
  const [activeImage, setActiveImage] = useState<string>(product.image);

  const currentColorway =
    product.colorways.find((c) => c.id === selectedColorwayId) || product.colorways[0];

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColorwayId, monogram);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative max-w-5xl w-full bg-[#101015] border border-amber-900/40 rounded-2xl overflow-hidden shadow-2xl my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] overflow-y-auto">
          {/* Left Column: Visual Gallery */}
          <div className="lg:col-span-7 bg-[#0b0b0e] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-800">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-stone-800/80 mb-4 bg-black">
              <img
                src={activeImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail switcher if secondary image exists */}
            {product.secondaryImage && (
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveImage(product.image)}
                  className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === product.image ? 'border-[#cca578]' : 'border-stone-800 opacity-60'
                  }`}
                >
                  <img
                    src={product.image}
                    alt="Overview"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  onClick={() => setActiveImage(product.secondaryImage!)}
                  className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === product.secondaryImage ? 'border-[#cca578]' : 'border-stone-800 opacity-60'
                  }`}
                >
                  <img
                    src={product.secondaryImage}
                    alt="Macro Detail"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
                <div className="flex items-center text-xs text-stone-400 font-light pl-2">
                  <span>Toggle between Full Silhouette and 24k Gold Macro</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#121217]">
            <div>
              {/* Category & Heel */}
              <div className="flex items-center gap-2 text-xs text-[#cca578] font-sans tracking-widest uppercase mb-1.5 font-light">
                <span>{product.category}</span>
                <span aria-hidden="true">·</span>
                <span>{product.heelHeight}</span>
              </div>

              {/* Title & Price */}
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2">
                {product.name}
              </h3>
              <p className="font-mono text-xl text-amber-200 font-medium tabular-nums mb-6">
                {formatPrice(product.price)}
              </p>

              {/* Finish Selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-sans">
                    Atelier Finish
                  </span>
                  <span className="text-xs text-amber-200 font-light">
                    {currentColorway.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colorways.map((cw) => (
                    <button
                      key={cw.id}
                      onClick={() => setSelectedColorwayId(cw.id)}
                      className={`px-3 py-2 rounded-lg border text-xs flex items-center gap-2 transition-all cursor-pointer ${
                        selectedColorwayId === cw.id
                          ? 'border-amber-400 bg-amber-950/20 text-white'
                          : 'border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full inline-block border border-stone-600"
                        style={{
                          background: `linear-gradient(135deg, ${cw.hex} 0%, ${cw.goldTone} 100%)`
                        }}
                      />
                      <span>{cw.leatherColor.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-sans">
                    Select Size (EU)
                  </span>
                  <span className="text-[11px] text-stone-400 font-light underline cursor-pointer">
                    True to size · Sizing Guide
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 text-xs font-mono rounded border transition-all cursor-pointer ${
                        selectedSize === size
                          ? 'bg-[#cca578] text-black font-bold border-[#cca578]'
                          : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:border-stone-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bespoke Initial Monogram Option */}
              <div className="mb-6 p-3.5 rounded-xl bg-stone-900/50 border border-stone-800">
                <label className="block text-[11px] font-sans tracking-wider uppercase text-amber-200/90 mb-1">
                  Bespoke Arch Monogram (Complimentary)
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    maxLength={3}
                    placeholder="E.g. A·L"
                    value={monogram}
                    onChange={(e) => setMonogram(e.target.value.toUpperCase())}
                    className="w-24 bg-stone-950 border border-stone-700 rounded px-2.5 py-1.5 text-xs text-white uppercase font-mono tracking-widest focus:border-amber-400 focus:outline-none"
                  />
                  <span className="text-[11px] text-stone-400 font-light">
                    Stamped in 24k gold foil on interior kidskin arch
                  </span>
                </div>
              </div>

              {/* Tabbed Specs & Details */}
              <div className="mb-6">
                <div className="flex border-b border-stone-800 mb-3 text-xs">
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`pb-2 mr-4 font-sans tracking-wider uppercase cursor-pointer ${
                      activeTab === 'details'
                        ? 'text-amber-200 border-b-2 border-amber-400'
                        : 'text-stone-500'
                    }`}
                  >
                    Creations Details
                  </button>
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`pb-2 font-sans tracking-wider uppercase cursor-pointer ${
                      activeTab === 'specs'
                        ? 'text-amber-200 border-b-2 border-amber-400'
                        : 'text-stone-500'
                    }`}
                  >
                    Technical Specifications
                  </button>
                </div>

                {activeTab === 'details' ? (
                  <ul className="space-y-1.5 text-xs text-stone-300 font-light list-disc list-inside">
                    {product.details.map((d, i) => (
                      <li key={i} className="leading-relaxed">
                        {d}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-stone-500 uppercase block">Heel Architecture</span>
                      <span className="text-stone-300 font-light">{product.specs.heel}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-500 uppercase block">Upper Material</span>
                      <span className="text-stone-300 font-light">{product.specs.upper}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-500 uppercase block">Sole & Finish</span>
                      <span className="text-stone-300 font-light">{product.specs.sole}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-500 uppercase block">Atelier Origin</span>
                      <span className="text-stone-300 font-light">{product.specs.origin}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contiguous Action & Trust Guarantee */}
            <div className="pt-4 border-t border-stone-800">
              <button
                onClick={handleAddToCart}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#cca578] via-[#e2c29d] to-[#cca578] hover:opacity-95 text-stone-950 text-xs font-semibold tracking-[0.2em] uppercase transition-all shadow-xl cursor-pointer mb-3"
              >
                Acquire Pair · {formatPrice(product.price)}
              </button>

              <div className="flex items-center justify-between text-[11px] text-stone-500 font-sans tracking-wide">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#cca578]" />
                  White-glove courier
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-[#cca578]" />
                  Numbered hallmark passport
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
