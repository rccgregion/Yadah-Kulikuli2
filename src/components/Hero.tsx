import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, Info, ZoomIn } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface HeroProps {
  onDiscoverClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverClick }) => {
  const { addToCart, formatPrice, setSelectedProduct } = useCart();
  const signatureShoe = PRODUCTS[0]; // The Flora Stiletto

  const [selectedColorway, setSelectedColorway] = useState(signatureShoe.colorways[0].id);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<number>(38);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  const currentColorway =
    signatureShoe.colorways.find((c) => c.id === selectedColorway) || signatureShoe.colorways[0];

  const hotspots = [
    {
      id: 1,
      x: '72%',
      y: '58%',
      title: 'Architectural Vine Heel',
      description: 'Lost-wax cast bronze stem finished in 24k gold vermeil, engineered to support 300x its weight.',
      tag: '105MM ARCHITECTURE'
    },
    {
      id: 2,
      x: '38%',
      y: '64%',
      title: 'Florentine Floral Relief',
      description: 'Full-grain Italian calfskin heat-embossed with hand-carved botanical floral plates.',
      tag: 'FULL-GRAIN CALFSKIN'
    },
    {
      id: 3,
      x: '28%',
      y: '70%',
      title: 'Chiseled Pointed Toe',
      description: 'Calibrated pitch distributes metatarsal pressure smoothly across the cushioned footbed.',
      tag: 'ERGONOMIC BALANCE'
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen bg-[#08080a] overflow-hidden pt-24 lg:pt-28 pb-16">
      {/* Background Organic Layered Curves matching the reference design */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft radial warm glow behind the stiletto */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#cca578]/10 via-[#8c683f]/05 to-transparent rounded-full blur-[120px]" />
        
        {/* SVG Sculptural Organic Flowing Backdrops */}
        <svg
          className="absolute right-0 top-0 h-full w-full lg:w-3/4 object-cover opacity-60"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Deep bronze secondary flow */}
          <path
            d="M500,0 C650,200 480,450 680,700 C780,820 900,900 1000,1000 L1000,0 Z"
            fill="url(#bronzeGradient1)"
            opacity="0.35"
          />
          {/* Dark charcoal undulating curve */}
          <path
            d="M400,0 C550,250 380,500 580,750 C680,880 750,960 900,1000 L1000,1000 L1000,0 Z"
            fill="#121216"
            opacity="0.75"
          />
          {/* Accent hairline gilded contour */}
          <path
            d="M580,750 C680,880 750,960 900,1000"
            stroke="url(#goldHairline)"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="bronzeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a3525" />
              <stop offset="50%" stopColor="#2e2017" />
              <stop offset="100%" stopColor="#141418" />
            </linearGradient>
            <linearGradient id="goldHairline" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cca578" />
              <stop offset="100%" stopColor="#4a3525" />
            </linearGradient>
          </defs>
        </svg>

        {/* Top-right corner architectural dark panel */}
        <div className="absolute top-0 right-0 w-80 h-96 bg-gradient-to-b from-[#16161c] to-transparent rounded-bl-[140px] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Column: Brand, Title, Description, CTA, and 3 Technical Callouts */}
          <div className="lg:col-span-5 z-20 flex flex-col justify-center pt-4 lg:pt-0">
            {/* Brand Kicker */}
            <div className="mb-4">
              <span className="font-serif text-xs sm:text-sm tracking-[0.35em] text-[#cca578] uppercase font-light">
                AURÉLIA
              </span>
            </div>

            {/* Display Headline matching image: THE FLORA STILETTO */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-serif font-light tracking-[0.06em] text-[#f7df9e] leading-[1.08] mb-5 text-balance">
              THE FLORA
              <br />
              <span className="font-normal text-white/95">STILETTO</span>
            </h1>

            {/* Descriptive Body */}
            <p className="text-stone-300/80 text-sm sm:text-base leading-relaxed max-w-md mb-8 font-light tracking-wide">
              An artisanal masterpiece in leather and gold, embodying botanical grace. Sculpted for the discerning eye.
            </p>

            {/* Primary Action Button matching image: DISCOVER THE COLLECTION */}
            <div className="mb-12 flex flex-wrap items-center gap-4">
              <button
                onClick={onDiscoverClick}
                className="luxury-btn-glow px-8 py-3.5 rounded-full text-xs font-sans tracking-[0.24em] uppercase text-amber-100 font-medium cursor-pointer flex items-center gap-3"
              >
                <span>DISCOVER THE COLLECTION</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#cca578]" />
              </button>

              <button
                onClick={() => setSelectedProduct(signatureShoe)}
                className="text-xs font-sans tracking-[0.18em] uppercase text-stone-400 hover:text-amber-200 transition-colors py-2 px-3 cursor-pointer"
              >
                View Full Specs
              </button>
            </div>

            {/* The 3 Technical Specification Callouts with thin hairline leader lines */}
            <div className="space-y-6 pt-4 border-t border-stone-800/60 max-w-md">
              
              {/* Spec 1: 105MM HEEL */}
              <div className="group flex items-center gap-4">
                {/* Minimalist Wire Heel Icon */}
                <div className="w-8 h-8 rounded-full border border-stone-700/60 flex items-center justify-center shrink-0 text-[#cca578] group-hover:border-[#cca578] transition-colors">
                  <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M4 17l6-9h4l2 4 4 1" />
                    <path d="M16 12v7" />
                    <path d="M14 19h4" />
                  </svg>
                </div>
                {/* Hairline leader line */}
                <div className="w-6 h-[1px] bg-stone-700/80 shrink-0" />
                {/* Label & Description */}
                <div>
                  <h2 className="text-xs font-sans font-semibold tracking-[0.16em] text-white uppercase">
                    105MM HEEL
                  </h2>
                  <p className="text-[11px] text-stone-400 font-light tracking-wide">
                    Premium architectural pitch & balance
                  </p>
                </div>
              </div>

              {/* Spec 2: EMBOSSED CALFSKIN */}
              <div className="group flex items-center gap-4">
                {/* Minimalist Leather Icon */}
                <div className="w-8 h-8 rounded-full border border-stone-700/60 flex items-center justify-center shrink-0 text-[#cca578] group-hover:border-[#cca578] transition-colors">
                  <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
                    <rect x="5" y="4" width="14" height="16" rx="2" />
                    <path d="M8 8h8M8 12h8M8 16h5" />
                  </svg>
                </div>
                {/* Hairline leader line */}
                <div className="w-6 h-[1px] bg-stone-700/80 shrink-0" />
                {/* Label & Description */}
                <div>
                  <h2 className="text-xs font-sans font-semibold tracking-[0.16em] text-white uppercase">
                    EMBOSSED CALFSKIN
                  </h2>
                  <p className="text-[11px] text-stone-400 font-light tracking-wide">
                    Florentine hand-embossed botanical motif
                  </p>
                </div>
              </div>

              {/* Spec 3: HAND-FINISHED */}
              <div className="group flex items-center gap-4">
                {/* Minimalist Handcraft Icon */}
                <div className="w-8 h-8 rounded-full border border-stone-700/60 flex items-center justify-center shrink-0 text-[#cca578] group-hover:border-[#cca578] transition-colors">
                  <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" />
                  </svg>
                </div>
                {/* Hairline leader line */}
                <div className="w-6 h-[1px] bg-stone-700/80 shrink-0" />
                {/* Label & Description */}
                <div>
                  <h2 className="text-xs font-sans font-semibold tracking-[0.16em] text-white uppercase">
                    HAND-FINISHED
                  </h2>
                  <p className="text-[11px] text-stone-400 font-light tracking-wide">
                    Master atelier hand-finished sole & detailing
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Hero Showcase Visual Centerpiece */}
          <div className="lg:col-span-7 relative flex flex-col items-center justify-center">
            
            {/* The Stiletto Showcase Card & Pedestal Frame */}
            <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden group shadow-2xl">
              
              {/* Product Photography Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-[#121217] to-[#08080a]">
                <img
                  src={signatureShoe.image}
                  alt="AURÉLIA The Flora Stiletto on Bronze Pedestal"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Subtle vignette scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-60" />

                {/* Interactive Hotspot Pins */}
                {hotspots.map((hs) => (
                  <div
                    key={hs.id}
                    style={{ left: hs.x, top: hs.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <button
                      onClick={() => setActiveHotspot(activeHotspot === hs.id ? null : hs.id)}
                      className={`relative w-6 h-6 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                        activeHotspot === hs.id
                          ? 'bg-[#cca578] text-black shadow-lg scale-110'
                          : 'bg-black/60 text-[#cca578] border border-[#cca578]/60 hover:bg-black/80 hover:scale-105'
                      }`}
                      aria-label={`Inspect ${hs.title}`}
                    >
                      <span className="text-[10px] font-mono font-bold">+</span>
                      <span className="absolute inset-0 rounded-full border border-[#cca578] animate-ping opacity-25" />
                    </button>

                    {/* Popover Callout */}
                    {activeHotspot === hs.id && (
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 p-3 rounded-lg bg-[#141418]/95 backdrop-blur-md border border-amber-900/50 shadow-2xl z-30">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] font-mono tracking-widest text-[#cca578] uppercase">
                            {hs.tag}
                          </span>
                          <button
                            onClick={() => setActiveHotspot(null)}
                            className="text-stone-400 hover:text-white text-xs"
                          >
                            ×
                          </button>
                        </div>
                        <h4 className="text-xs font-serif font-semibold text-white mb-1">
                          {hs.title}
                        </h4>
                        <p className="text-[11px] text-stone-300 font-light leading-snug">
                          {hs.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Zoom Inspector Button */}
                <button
                  onClick={() => setIsZoomModalOpen(true)}
                  className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-stone-700/50 text-[11px] font-sans text-stone-300 hover:text-amber-200 hover:border-amber-700/60 transition-all cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-[#cca578]" />
                  <span>Inspect Details</span>
                </button>
              </div>

              {/* Contiguous Bespoke Bar below the centerpiece */}
              <div className="p-4 sm:p-5 bg-[#121217]/90 backdrop-blur-md border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Finish & Size Selectors */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div>
                    <label className="block text-[10px] font-sans tracking-[0.2em] uppercase text-stone-400 mb-1">
                      Bespoke Finish
                    </label>
                    <div className="flex items-center gap-2">
                      {signatureShoe.colorways.map((cw) => (
                        <button
                          key={cw.id}
                          onClick={() => setSelectedColorway(cw.id)}
                          title={cw.name}
                          className={`w-6 h-6 rounded-full border transition-all cursor-pointer relative ${
                            selectedColorway === cw.id
                              ? 'border-amber-300 scale-110 shadow-md ring-1 ring-amber-300/40'
                              : 'border-stone-700 hover:border-stone-500'
                          }`}
                          style={{
                            background: `linear-gradient(135deg, ${cw.hex} 0%, ${cw.goldTone} 100%)`
                          }}
                        />
                      ))}
                      <span className="text-xs text-stone-300 font-light ml-1 truncate max-w-[140px]">
                        {currentColorway.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  <div className="h-8 w-[1px] bg-stone-800 hidden sm:block" />

                  <div>
                    <label className="block text-[10px] font-sans tracking-[0.2em] uppercase text-stone-400 mb-1">
                      Size (EU)
                    </label>
                    <select
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(Number(e.target.value))}
                      className="bg-stone-900 border border-stone-700 text-stone-200 text-xs rounded px-2 py-1 font-mono cursor-pointer focus:border-amber-400 focus:outline-none"
                    >
                      {signatureShoe.availableSizes.map((s) => (
                        <option key={s} value={s}>
                          EU {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Price & Direct Purchase Button */}
                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                  <div className="text-right">
                    <span className="block text-[10px] font-sans tracking-widest uppercase text-stone-400">
                      Maison Price
                    </span>
                    <span className="font-mono text-base font-medium text-amber-100 tabular-nums">
                      {formatPrice(signatureShoe.price)}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(signatureShoe, selectedSize, selectedColorway)}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#cca578] to-[#936e43] hover:from-[#e2c29d] hover:to-[#cca578] text-[#08080a] text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap"
                  >
                    Acquire Pair
                  </button>
                </div>

              </div>
            </div>

            {/* Subtle Provenance Note */}
            <div className="mt-3 flex items-center justify-between w-full max-w-2xl px-2 text-[11px] text-stone-500 font-sans tracking-wider">
              <span>Florence Atelier No. 4</span>
              <span>·</span>
              <span>Numbered Hallmark Certificate</span>
              <span>·</span>
              <span>White-Glove Delivery</span>
            </div>

          </div>

        </div>
      </div>

      {/* High-Res Macro Zoom Modal */}
      {isZoomModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#121217] border border-amber-900/40 rounded-2xl overflow-hidden p-6">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#cca578] uppercase">
                  SAVOIR-FAIRE MACRO EXAMINATION
                </span>
                <h3 className="font-serif text-xl text-amber-100">
                  The Flora Stiletto — Gilded Stem & Relief Calfskin
                </h3>
              </div>
              <button
                onClick={() => setIsZoomModalOpen(false)}
                className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="rounded-xl overflow-hidden border border-stone-800 aspect-square">
                <img
                  src="/src/assets/images/botanical_sculpture_macro_1791567546515.jpg"
                  alt="Macro of Sculpted 24k Gold Floral Vine Heel"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4 text-stone-300 text-xs leading-relaxed font-light">
                <p>
                  <strong className="text-amber-200 font-serif text-sm block mb-1">
                    01. Micro-Sculpted Botanical Vine
                  </strong>
                  The stem is sculpted with organic winding tendrils, leaf veins, and blooming flower petals. Every ridge is polished by hand with diamond paste to achieve an uninterrupted golden radiance.
                </p>
                <p>
                  <strong className="text-amber-200 font-serif text-sm block mb-1">
                    02. Hand-Pressed Tuscan Calfskin
                  </strong>
                  Vegetable-tanned full-grain leather is heat-embossed under 80 tons of hydraulic pressure using steel matrices hand-chiseled in Milan.
                </p>
                <p>
                  <strong className="text-amber-200 font-serif text-sm block mb-1">
                    03. Horological Precision
                  </strong>
                  Tolerances are held to within 0.05mm at the union of the leather shank and the cast bronze heel to ensure absolute zero wobble across the 105mm pitch.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800 flex justify-end">
              <button
                onClick={() => setIsZoomModalOpen(false)}
                className="px-6 py-2 rounded-full border border-stone-700 text-xs uppercase tracking-widest text-stone-300 hover:text-white"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
