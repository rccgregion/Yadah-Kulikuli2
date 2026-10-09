import React from 'react';
import { Bookmark, Menu, X, Code2 } from 'lucide-react';
import { useAura } from '../../context/AuraContext';

export const Navbar: React.FC = () => {
  const { savedRoles, setIsSavedDrawerOpen, setIsDesignTokensOpen } = useAura();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#FAF7F2]/80 backdrop-blur-xl border-b border-[#8F7D6E]/15 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* ZONE 1: BRAND WORDMARK (Single-element contract) */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-serif text-xl tracking-tight text-[#241D17] whitespace-nowrap shrink-0 hover:opacity-85 transition-opacity"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/80 border border-stone-200 shadow-xs font-serif text-sm font-semibold text-[#241D17]">
            A<span className="text-[10px] text-[#C26E42] ml-0.5 -mt-1">✦</span>
          </span>
          <span className="font-sans text-sm font-bold uppercase tracking-[0.24em] text-[#241D17]">
            Aura Studio
          </span>
        </a>

        {/* ZONE 2: 4-5 CONCISE SINGLE-LINE NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.16em] font-medium text-[#6B5D52]">
          <a
            href="#roles"
            className="hover:text-[#C26E42] transition-colors whitespace-nowrap shrink-0"
          >
            Top Roles
          </a>
          <a
            href="#sanctuaries"
            className="hover:text-[#C26E42] transition-colors whitespace-nowrap shrink-0"
          >
            Sanctuaries
          </a>
          <a
            href="#philosophy"
            className="hover:text-[#C26E42] transition-colors whitespace-nowrap shrink-0"
          >
            Philosophy
          </a>
          <button
            onClick={() => setIsDesignTokensOpen(true)}
            className="flex items-center gap-1.5 hover:text-[#C26E42] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5 text-[#C26E42]" />
            <span>Design Tokens</span>
          </button>
        </nav>

        {/* ZONE 3: 1 PRIMARY ACTION (Saved Roles Button & Mobile Menu Toggle) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Saved Dossier Button */}
          <button
            onClick={() => setIsSavedDrawerOpen(true)}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-[#29221C] bg-white/70 hover:bg-white border border-stone-200 shadow-xs transition-all cursor-pointer whitespace-nowrap shrink-0"
            aria-label="View saved roles"
          >
            <Bookmark className="w-3.5 h-3.5 text-[#C26E42]" />
            <span className="hidden sm:inline">Saved Dossier</span>
            {savedRoles.length > 0 && (
              <span className="flex items-center justify-center w-4.5 h-4.5 rounded-full bg-[#C26E42] text-white text-[10px] font-bold">
                {savedRoles.length}
              </span>
            )}
          </button>

          {/* Primary CTA */}
          <a
            href="#roles"
            className="aura-terracotta-btn hidden sm:inline-flex items-center px-4 py-2 rounded-full text-xs font-medium text-white whitespace-nowrap shrink-0"
          >
            View Openings
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#29221C] hover:bg-black/5"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#8F7D6E]/15 bg-[#FAF7F2] px-6 py-5 space-y-4">
          <nav className="flex flex-col gap-3 text-sm font-medium text-[#4A3D32]">
            <a
              href="#roles"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C26E42]"
            >
              Top Roles
            </a>
            <a
              href="#sanctuaries"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C26E42]"
            >
              Sanctuaries
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C26E42]"
            >
              Philosophy
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsDesignTokensOpen(true);
              }}
              className="flex items-center gap-2 py-1 text-left hover:text-[#C26E42]"
            >
              <Code2 className="w-4 h-4 text-[#C26E42]" />
              <span>Design System Tokens</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
