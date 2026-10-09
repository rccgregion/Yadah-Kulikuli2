import React, { useState } from 'react';
import { STUDIO_PROJECTS, StudioProject } from '../../data/auraData';
import { MapPin, Calendar, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

export const SanctuariesSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<StudioProject>(STUDIO_PROJECTS[0]);

  return (
    <section id="sanctuaries" className="py-24 px-6 md:px-10 bg-[#EFE8DD]/40 border-y border-[#8F7D6E]/15">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C26E42]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Built Architecture & Sanctuaries</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#241D17] font-normal tracking-tight text-balance">
              Where monolithic stone breathes with light.
            </h2>
            <p className="text-sm md:text-base text-[#695A4E] leading-relaxed">
              Our completed spatial environments exist to quiet the senses. Every travertine seam, blown-glass skylight, and stone placement is intentional.
            </p>
          </div>

          <div className="text-xs uppercase tracking-[0.16em] text-[#7D6E62] font-medium">
            3 Featured Case Studies · 2024–2026
          </div>
        </div>

        {/* Featured Project Showcase + Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visual Display (8 cols) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-stone-200/80 shadow-lg group">
            <div className="aspect-[16/10] w-full relative">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1914]/85 via-[#1F1914]/20 to-transparent" />

              {/* Bottom Scrim Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs text-stone-300">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E69165]" />
                    {activeProject.location}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#E69165]" />
                    {activeProject.year}
                  </span>
                  <span>·</span>
                  <span>{activeProject.category}</span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-normal text-white">
                  {activeProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-200/90 max-w-2xl leading-relaxed">
                  {activeProject.description}
                </p>

                {/* Materials used list */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 flex items-center gap-1">
                    <Layers className="w-3 h-3 text-[#E69165]" />
                    Tactile Elements:
                  </span>
                  {activeProject.materials.map((mat) => (
                    <span
                      key={mat}
                      className="px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md text-[11px] text-white border border-white/20"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project List Switcher (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7A6C60] mb-2">
                Select Sanctuary Dossier
              </h4>
              {STUDIO_PROJECTS.map((proj) => {
                const isSelected = activeProject.id === proj.id;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProject(proj)}
                    className={`w-full text-left p-4 rounded-2xl transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-white shadow-md border-[#C26E42]/40 translate-x-1'
                        : 'bg-white/40 hover:bg-white/80 border-stone-200/70 text-[#4D3F33]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C26E42]">
                        {proj.category}
                      </span>
                      <span className="text-xs text-[#8A7B6E]">{proj.year}</span>
                    </div>
                    <div className="font-serif text-lg text-[#241D17] mt-1 font-medium">
                      {proj.title}
                    </div>
                    <div className="text-xs text-[#6B5D52] mt-0.5 line-clamp-1">
                      {proj.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Studio Commission Card */}
            <div className="p-5 rounded-2xl bg-[#E8DFD3]/60 border border-[#8F7D6E]/20 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-[#241D17]">
                <span>Commission Inquiry</span>
                <ArrowUpRight className="w-4 h-4 text-[#C26E42]" />
              </div>
              <p className="text-xs text-[#6B5D52] leading-snug">
                We accept at most 3 private spatial commissions annually to preserve unhurried craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
