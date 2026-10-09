import React, { useState, useRef } from 'react';
import { ShoppingBag, MapPin, ArrowRight, Sparkles, Check } from 'lucide-react';
import { PRODUCT_SIZES, YADAH_BRAND } from '../../data/yadahData';
import { useYadahCart } from '../../context/YadahCartContext';

interface FloatingKulikuliCardProps {
  onExploreProducts?: () => void;
  className?: string;
}

export const FloatingKulikuliCard: React.FC<FloatingKulikuliCardProps> = ({
  onExploreProducts,
  className = '',
}) => {
  const { addToCart } = useYadahCart();
  const signatureProduct = PRODUCT_SIZES[0]; // 250g Size XL

  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [sheen, setSheen] = useState({ x: 50, y: 50, opacity: 0 });
  const [added, setAdded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -5;
    const tiltY = ((x - centerX) / centerX) * 5;

    setTilt({ x: tiltX, y: tiltY });
    setSheen({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.28,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setSheen((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleAddToCart = () => {
    addToCart({
      id: signatureProduct.id,
      title: 'Flat Kulikuli (250g Signature Pouch)',
      weight: signatureProduct.weight,
      priceNgn: signatureProduct.priceNgn,
      image: signatureProduct.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      style={{ perspective: '1200px' }}
      className={`relative inline-block w-full max-w-[490px] select-none ${className}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: sheen.opacity === 0 ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.08s ease-out',
        }}
        className="relative overflow-hidden rounded-[32px] p-8 md:p-9 text-[#2A221B] aura-glass-card transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#3c3024]/18"
      >
        {/* Specular Glare Overlay tracking cursor */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: sheen.opacity,
            background: `radial-gradient(circle 320px at ${sheen.x}% ${sheen.y}%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)`,
          }}
        />

        {/* TOP ROW: Brand Lockup & Quick Order Action */}
        <div className="flex items-center justify-between gap-4">
          {/* Brand Monogram & Subtitle */}
          <div className="flex items-center gap-3.5">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF7F2]/90 border border-white shadow-[0_2px_8px_rgba(42,34,27,0.06)] shrink-0">
              <span className="font-serif text-lg font-bold text-[#2A221B] tracking-tight flex items-center">
                Y<span className="text-xs text-[#C26E42] ml-0.5 -mt-2">✦</span>
              </span>
            </div>
            <div>
              <h2 className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#2A221B]">
                {YADAH_BRAND.brandName}
              </h2>
              <p className="text-[11px] text-[#78695C] leading-tight mt-0.5">
                Authentic Nigerian Spicy Peanut Snack
              </p>
            </div>
          </div>

          {/* Quick Action Pill */}
          <button
            onClick={handleAddToCart}
            className={`group flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
              added
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white/60 hover:bg-white/90 text-[#3D3126] border border-white/70 shadow-xs'
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span className="text-[11.5px]">Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#5C4D40] group-hover:scale-110 transition-transform" />
                <span className="text-[11.5px]">Quick Add</span>
              </>
            )}
          </button>
        </div>

        {/* SNACK KICKER: FEATURED SNACK with warm terracotta dot */}
        <div className="mt-8 flex items-center gap-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#695A4E]">
            Signature Snack
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#C26E42] shadow-[0_0_8px_rgba(194,110,66,0.6)]" />
        </div>

        {/* HERO TITLE & SUBHEADING */}
        <div className="mt-2.5">
          <h1 className="font-serif text-[38px] md:text-[42px] leading-[1.08] font-normal tracking-tight text-[#261E18]">
            Flat Kulikuli
          </h1>
          <p className="mt-2.5 text-[15px] md:text-[16px] text-[#63554A] leading-snug">
            Crunchy. Spicy.{' '}
            <span className="text-[#C26E42] font-semibold">Irresistible.</span>
          </p>
        </div>

        {/* DUAL TACTILE FEATURE PODS */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {/* Pod 1: 250 Grams / Size XL */}
          <div className="aura-clay-pill flex items-center gap-3 p-3.5 rounded-2xl">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#D9875A] to-[#A85830] text-white shadow-[0_3px_8px_rgba(168,88,48,0.28)] shrink-0">
              <span className="font-bold text-xs tracking-tight">250g</span>
            </div>
            <div className="min-w-0">
              <div className="text-[13px] font-semibold text-[#29221C] truncate">
                Size XL Flagship
              </div>
              <div className="text-[11.5px] text-[#7A6C60] truncate">
                Resealable Fresh Pouch
              </div>
            </div>
          </div>

          {/* Pod 2: 100% Natural / Rich in Protein */}
          <div className="aura-clay-pill flex items-center gap-3 p-3.5 rounded-2xl">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#D9875A] to-[#A85830] text-white shadow-[0_3px_8px_rgba(168,88,48,0.28)] shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="text-[13px] font-semibold text-[#29221C] truncate">
                100% Natural
              </div>
              <div className="text-[11.5px] text-[#7A6C60] truncate">
                Rich in Plant Protein
              </div>
            </div>
          </div>
        </div>

        {/* HAIRLINE GLOWING DIVIDER */}
        <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-[#8F7D6E]/25 to-transparent" />

        {/* BOTTOM METRICS & CALL TO ACTION */}
        <div className="flex items-end justify-between gap-4">
          {/* Left Column: Price & Origin */}
          <div className="space-y-3.5">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7D6E62]">
                Price per Pouch
              </div>
              <div className="mt-0.5 text-[22px] font-bold font-sans tracking-tight text-[#241D17] tabular-nums">
                ₦1,000 <span className="text-xs font-normal text-[#7A6C60]">($1.20)</span>
              </div>
              <div className="text-[11px] text-[#7A6C60]">
                Fresh batch sealed daily
              </div>
            </div>

            {/* Location row */}
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E5D7C7]/60 text-[#C26E42]">
                <MapPin className="w-3.5 h-3.5 fill-[#C26E42]/20" />
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7D6E62] block">
                  Crafted In
                </span>
                <span className="text-[12px] font-medium text-[#2E251E]">
                  Lokoja, Kogi State
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Add to Cart Action */}
          <button
            onClick={handleAddToCart}
            className="aura-terracotta-btn group flex items-center gap-2.5 px-6 py-3.5 rounded-full text-white text-sm font-medium cursor-pointer shrink-0"
          >
            <span>Add to Cart</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
