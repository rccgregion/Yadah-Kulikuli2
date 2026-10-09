import React, { useState } from 'react';
import { Hammer, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const AtelierSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      index: '01',
      title: 'Lost-Wax Bronze Sculpture',
      subtitle: 'Renaissance foundry metallurgy meets horological micro-tolerances',
      description:
        'The signature vine heel begins as a hand-carved jeweler’s wax model. Molten sculptural bronze is poured using lost-wax casting, cooled slowly over 14 hours, and meticulously chiseled by hand before receiving an electroplated 24-karat gold vermeil coat.',
      stat: '24K Vermeil',
      statLabel: 'Gold Purity Standard'
    },
    {
      index: '02',
      title: 'Florentine Blind Debossing',
      subtitle: 'Heat and hydraulic plate pressing upon full-grain calfskin',
      description:
        'Selected Italian calfskin is hand-cut and conditioned with natural organic oils. Heated steel plates engraved with floral botanical motifs press down to create deep, tactile petal shadows that will never flatten or crease with wear.',
      stat: '80 Tons',
      statLabel: 'Hydraulic Heat Pressure'
    },
    {
      index: '03',
      title: 'Structural Pitch Calibration',
      subtitle: '105mm architectural elevation without metatarsal fatigue',
      description:
        'By integrating a high-tensile spring steel shank and dual-density memory foam beneath the kidskin footbed, load is distributed evenly from heel strike to toe off, giving the 105mm Flora Stiletto unparalleled grace in motion.',
      stat: '105mm',
      statLabel: 'Calculated Pitch'
    },
    {
      index: '04',
      title: 'Master Shoemaker Hallmark',
      subtitle: '72 hours of devoted bench work per commissioned pair',
      description:
        'Every single pair is assembled and inspected by a single master artisan at Florence Atelier No. 4. Upon completion, the master punches the official serial hallmark and signs the archival provenance passport.',
      stat: '72 Hours',
      statLabel: 'Artisan Bench Work'
    }
  ];

  return (
    <section id="atelier" className="py-24 bg-[#070709] relative border-t border-stone-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#cca578] block mb-2 font-light">
            SAVOIR-FAIRE & HERITAGE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-wide mb-4">
            The Atelier in Florence
          </h2>
          <p className="text-stone-400 text-sm font-light leading-relaxed">
            Where botanical sculpture and classical shoemaking converge into timeless couture.
          </p>
        </div>

        {/* 2-Column Balanced Split: Atelier Photography & Interactive Step Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Atelier Photo Showcase */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-stone-800/80 group min-h-[420px] lg:min-h-full">
            <img
              src="/src/assets/images/atelier_craftsmanship_1791567518947.jpg"
              alt="Master craftsman hand-sculpting the golden botanical heel at the atelier"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            {/* Scrim overlay with caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#cca578] mb-1">
                DOCUMENTARY PROVENANCE
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-light">
                Hand-Chiseling the Botanical Vine Heel
              </h3>
              <p className="text-stone-300 text-xs font-light max-w-md mt-1">
                Master artisan carving leaf veins into the 24k gold floral armature at the Florence workbench.
              </p>
            </div>
          </div>

          {/* Right: Step-by-Step Craft Journey */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {steps.map((step, idx) => (
                <div
                  key={step.index}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer ${
                    activeStep === idx
                      ? 'bg-[#121217] border-amber-800/70 shadow-xl'
                      : 'bg-[#0d0d10] border-stone-800/60 hover:border-stone-700/80 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#cca578] tracking-widest">
                        {step.index}
                      </span>
                      <h4 className="font-serif text-lg text-white font-normal">
                        {step.title}
                      </h4>
                    </div>

                    <div className="text-right">
                      <span className="font-mono text-xs text-amber-200 tabular-nums font-semibold block">
                        {step.stat}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-stone-500 block">
                        {step.statLabel}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quality Commitment Footer */}
            <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#cca578]" />
                <span className="font-sans font-light">
                  Accompanied by Certificate of Authenticity & Master Signature
                </span>
              </div>
              <span className="font-mono text-[11px] text-stone-500">
                UNI EN ISO 9001
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
