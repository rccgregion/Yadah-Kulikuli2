import React from 'react';
import { MapPin, Clock, Phone, Calendar, Sparkles } from 'lucide-react';
import { BOUTIQUES, Boutique } from '../data/products';
import { useCart } from '../context/CartContext';

export const BoutiquesSection: React.FC = () => {
  const { setIsAppointmentOpen, setAppointmentPrefillBoutique } = useCart();

  const handleBookSalon = (city: string) => {
    setAppointmentPrefillBoutique(city);
    setIsAppointmentOpen(true);
  };

  return (
    <section id="boutiques" className="py-24 bg-[#0a0a0d] relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#cca578] block mb-2 font-light">
              GLOBAL SALONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-white tracking-wide">
              The Flagship Boutiques
            </h2>
          </div>
          <p className="text-stone-400 text-xs sm:text-sm font-light max-w-md">
            Private fitting salons providing discreet bespoke consultations, champagne service, and customized heel fitting.
          </p>
        </div>

        {/* 4 Boutiques Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOUTIQUES.map((boutique) => (
            <div
              key={boutique.city}
              className="bg-[#101014] p-6 rounded-2xl border border-stone-800/80 hover:border-amber-900/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl text-white font-light">
                    {boutique.city}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#cca578] uppercase">
                    SALON
                  </span>
                </div>

                <h4 className="text-xs font-semibold text-stone-200 tracking-wider mb-3">
                  {boutique.salonName}
                </h4>

                <div className="space-y-2.5 text-xs text-stone-400 font-light mb-6">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#cca578] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{boutique.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                    <span>{boutique.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                    <span className="font-mono text-[11px]">{boutique.phone}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleBookSalon(boutique.city)}
                className="w-full py-2.5 rounded-full border border-stone-700/80 hover:border-amber-600/70 text-xs font-sans tracking-widest uppercase text-stone-200 hover:text-amber-200 hover:bg-stone-900/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#cca578]" />
                <span>Reserve Salon</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
