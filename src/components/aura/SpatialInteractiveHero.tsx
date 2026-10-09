import React from 'react';
import { Sun, Moon, Sliders, Volume2, VolumeX, Sparkles, Code2, ArrowDown } from 'lucide-react';
import { SpatialRoleCard } from './SpatialRoleCard';
import { useAura } from '../../context/AuraContext';
import { STUDIO_ROLES } from '../../data/auraData';

export const SpatialInteractiveHero: React.FC = () => {
  const {
    lightingMode,
    toggleLightingMode,
    glassDiffusion,
    setGlassDiffusion,
    isSoundPlaying,
    toggleAmbientSound,
    setIsDesignTokensOpen,
  } = useAura();

  const primaryRole = STUDIO_ROLES[0]; // Spatial Designer

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 md:px-8 overflow-hidden">
      {/* BACKGROUND SCENE: Photorealistic Architectural Still-Life with Frosted Dome & Porcelains */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/aura_spatial_background_1791569815099.jpg"
          alt="Aura Studio Architectural Still Life with Frosted Glass Dome and Porcelain Spheres"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-all duration-1000 ${
            lightingMode === 'twilight'
              ? 'brightness-75 contrast-110 sepia-[0.25] hue-rotate-[-10deg]'
              : 'brightness-100 contrast-100'
          }`}
        />
        {/* Soft atmospheric gradient scrims to ensure pristine typography and depth */}
        <div
          className={`absolute inset-0 transition-colors duration-1000 ${
            lightingMode === 'twilight'
              ? 'bg-gradient-to-t from-[#1F1914]/85 via-[#2E241D]/40 to-[#1F1914]/30'
              : 'bg-gradient-to-t from-[#F4EFEA]/80 via-transparent to-[#FAF7F2]/40'
          }`}
        />
      </div>

      {/* TOP FLOATING INTERACTIVE ATMOSPHERE TOOLBAR */}
      <div className="absolute top-24 z-20 flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto px-4">
        {/* Illumination toggle */}
        <button
          onClick={toggleLightingMode}
          className="aura-glass-pill flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-[#2E251E] cursor-pointer"
          title="Toggle studio illumination"
        >
          {lightingMode === 'daylight' ? (
            <>
              <Sun className="w-3.5 h-3.5 text-[#C26E42]" />
              <span>Daylight Travertine</span>
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-[#E69165]" />
              <span>Twilight Lantern</span>
            </>
          )}
        </button>

        {/* Ambient Soundscape toggle */}
        <button
          onClick={toggleAmbientSound}
          className={`aura-glass-pill flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
            isSoundPlaying ? 'bg-[#C26E42]/15 text-[#C26E42] border-[#C26E42]/40' : 'text-[#2E251E]'
          }`}
          title="Toggle ambient 174Hz room resonance"
        >
          {isSoundPlaying ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#C26E42] animate-pulse" />
              <span>Ambient Stillness (Playing)</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#7A6C60]" />
              <span>Soundscape: Muted</span>
            </>
          )}
        </button>

        {/* Live Frosted Glass Diffusion Slider */}
        <div className="aura-glass-pill flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-[#2E251E]">
          <Sliders className="w-3.5 h-3.5 text-[#7A6C60]" />
          <span className="hidden sm:inline">Diffusion:</span>
          <span className="tabular-nums font-mono text-[11px]">{glassDiffusion}px</span>
          <input
            type="range"
            min="10"
            max="45"
            value={glassDiffusion}
            onChange={(e) => setGlassDiffusion(Number(e.target.value))}
            className="w-16 accent-[#C26E42] cursor-pointer"
            aria-label="Glass diffusion blur strength"
          />
        </div>

        {/* View design.md Spec Tokens button */}
        <button
          onClick={() => setIsDesignTokensOpen(true)}
          className="aura-glass-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#2E251E] cursor-pointer hover:text-[#C26E42]"
        >
          <Code2 className="w-3.5 h-3.5 text-[#C26E42]" />
          <span>design.md Tokens</span>
        </button>
      </div>

      {/* MAIN VIEWPORT COMPOSITION: 2-COLUMN BALANCED SPLIT */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-8">
        {/* Left Column: Studio Manifesto & Narrative */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          {/* Subtle Editorial Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-xs text-xs font-medium text-[#4D3F33]">
            <Sparkles className="w-3.5 h-3.5 text-[#C26E42]" />
            <span>Los Angeles Arts District · Materiality & Architecture</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.12] text-[#241D17] font-normal tracking-tight text-balance">
            Architecture sculptured in <span className="italic font-normal">stone</span>, light, and silence.
          </h1>

          <p className="text-base sm:text-lg text-[#5E5045] leading-relaxed max-w-xl mx-auto lg:mx-0">
            Aura Studio creates sanctuaries that calm the human nervous system. We weave unveneered Roman travertine, blown silica, and living biophilia into environments that feel deeply grounded.
          </p>

          {/* Quick Actions & Jump Links */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#roles"
              className="aura-terracotta-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-medium"
            >
              <span>Explore Top Openings</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#sanctuaries"
              className="aura-glass-pill inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[#2E251E] text-sm font-medium"
            >
              <span>View Sanctuaries</span>
            </a>
          </div>

          {/* Studio Metrics adjacent to claims */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#8F7D6E]/20 max-w-lg mx-auto lg:mx-0">
            <div>
              <div className="font-sans font-bold text-2xl text-[#241D17] tabular-nums">24</div>
              <div className="text-xs text-[#7A6C60] mt-0.5">Built Sanctuaries</div>
            </div>
            <div>
              <div className="font-sans font-bold text-2xl text-[#241D17] tabular-nums">100%</div>
              <div className="text-xs text-[#7A6C60] mt-0.5">Raw Minerals</div>
            </div>
            <div>
              <div className="font-sans font-bold text-2xl text-[#241D17] tabular-nums">05</div>
              <div className="text-xs text-[#7A6C60] mt-0.5">Biennial Honors</div>
            </div>
          </div>
        </div>

        {/* Right Column: The Signature Frosted Role Card in its Glory */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Soft luminous underglow behind card matching the ceramic sphere highlight in the image */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-72 h-36 bg-[#E88E5E]/20 blur-3xl rounded-full pointer-events-none" />

            {/* The Masterpiece Card */}
            <SpatialRoleCard role={primaryRole} interactiveTilt={true} />
          </div>
        </div>
      </div>
    </section>
  );
};
