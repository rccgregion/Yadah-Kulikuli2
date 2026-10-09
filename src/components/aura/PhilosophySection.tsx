import React, { useState } from 'react';
import { STUDIO_DATA } from '../../data/auraData';
import { Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface MaterialSpec {
  name: string;
  origin: string;
  finish: string;
  tactileFeel: string;
  acousticScore: string;
  description: string;
}

const MATERIAL_SPECS: MaterialSpec[] = [
  {
    name: "Roman Travertine",
    origin: "Tivoli, Italy",
    finish: "Open-Pore Vein Cut, Honed",
    tactileFeel: "Cool, porous, grounded mineral heft",
    acousticScore: "0.45 NRC (natural sound diffusion)",
    description: "Extracted without synthetic epoxies. We preserve the organic caverns formed by sulfur spring waters thousands of years ago.",
  },
  {
    name: "Blown Frosted Silica",
    origin: "Murano & Arts District Kiln",
    finish: "Acid-Etched Milk Diffusion",
    tactileFeel: "Silky, satin, soft light scattering",
    acousticScore: "Optical scattering, 92% light transmission",
    description: "Hand-turned molten borosilicate glass that turns harsh direct sunlight into a gentle, non-glaring ambient luminesce.",
  },
  {
    name: "Volcanic Pumice Stone",
    origin: "Mojave Caldera, California",
    finish: "Raw Fractured Crust",
    tactileFeel: "Ultralight, vesicular, chalky texture",
    acousticScore: "0.72 NRC (extraordinary acoustic absorption)",
    description: "Gas-bubble rich igneous rock that naturally dampens reverberations and balances ambient room humidity.",
  },
  {
    name: "Waxed Cast Bronze",
    origin: "Pasadena Artisan Foundry",
    finish: "Lost-Wax Cast with Carnauba Wax",
    tactileFeel: "Heavy, warm metallic patina",
    acousticScore: "High damping resonance factor",
    description: "Hardware and handrails cast to fit the natural curve of the human palm. Ages with golden highlights as hands touch it.",
  },
];

export const PhilosophySection: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialSpec>(MATERIAL_SPECS[0]);

  return (
    <section id="philosophy" className="py-24 px-6 md:px-10 max-w-7xl mx-auto space-y-16">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C26E42]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Architectural Manifesto</span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-[#241D17] font-normal tracking-tight text-balance">
          Designing spaces. Elevating lives.
        </h2>
        <p className="text-base text-[#695A4E] leading-relaxed">
          Contemporary buildings often over-stimulate or numb the senses with synthetic plastics and glossy screens. Aura Studio returns to primordial truths: mineral weight, silence, and living sunlight.
        </p>
      </div>

      {/* 3 Foundational Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STUDIO_DATA.principles.map((principle) => (
          <div
            key={principle.index}
            className="p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-stone-200/80 shadow-xs space-y-4 relative"
          >
            <div className="font-mono text-sm font-bold text-[#C26E42]">
              {principle.index}
            </div>
            <h3 className="font-serif text-2xl text-[#241D17] font-medium">
              {principle.title}
            </h3>
            <p className="text-sm text-[#695A4E] leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive Material Truth Laboratory */}
      <div className="p-8 md:p-10 rounded-3xl bg-[#FAF7F2] border border-[#8F7D6E]/20 shadow-sm space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#C26E42]">
              <Layers className="w-3.5 h-3.5" />
              <span>Tactile Sourcing Laboratory</span>
            </div>
            <h3 className="font-serif text-2xl text-[#241D17]">
              Inspect Material Chemistry & Tactile Score
            </h3>
          </div>

          {/* Material Selectors */}
          <div className="flex flex-wrap gap-2">
            {MATERIAL_SPECS.map((mat) => (
              <button
                key={mat.name}
                onClick={() => setSelectedMaterial(mat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedMaterial.name === mat.name
                    ? 'bg-[#C26E42] text-white shadow-xs'
                    : 'bg-white text-[#5C4D40] border border-stone-200 hover:bg-stone-50'
                }`}
              >
                {mat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Material Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/70 p-6 md:p-8 rounded-2xl border border-stone-200/80">
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium text-[#7A6C60]">
              <ShieldCheck className="w-4 h-4 text-[#C26E42]" />
              <span>Certified Sustainable Harvest & Non-Toxic Binder</span>
            </div>
            <h4 className="font-serif text-3xl text-[#241D17]">
              {selectedMaterial.name}
            </h4>
            <p className="text-sm text-[#63554A] leading-relaxed">
              {selectedMaterial.description}
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-4 border-t md:border-t-0 md:border-l border-stone-200 pt-4 md:pt-0 md:pl-6 text-xs">
            <div>
              <span className="text-[#8E8074] uppercase tracking-wider block">Provenance</span>
              <span className="font-semibold text-[#29221C] mt-0.5 block">{selectedMaterial.origin}</span>
            </div>
            <div>
              <span className="text-[#8E8074] uppercase tracking-wider block">Surface Finish</span>
              <span className="font-semibold text-[#29221C] mt-0.5 block">{selectedMaterial.finish}</span>
            </div>
            <div>
              <span className="text-[#8E8074] uppercase tracking-wider block">Tactility</span>
              <span className="font-semibold text-[#29221C] mt-0.5 block">{selectedMaterial.tactileFeel}</span>
            </div>
            <div>
              <span className="text-[#8E8074] uppercase tracking-wider block">Acoustic / Optical</span>
              <span className="font-semibold text-[#29221C] mt-0.5 block">{selectedMaterial.acousticScore}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
