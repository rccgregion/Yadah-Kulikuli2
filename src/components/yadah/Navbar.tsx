import React, { useState } from 'react';
import { ShoppingBag, Menu, X, MessageSquare, Sun, Moon } from 'lucide-react';
import { useYadahCart } from '../../context/YadahCartContext';
import { YADAH_BRAND } from '../../data/yadahData';

export type PageType = 'home' | 'about' | 'products' | 'wholesale' | 'contact';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const { totalItems, setIsCartOpen, theme, toggleTheme } = useYadahCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'wholesale', label: 'Wholesale' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const isDark = theme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 backdrop-blur-xl border-b ${
        isDark
          ? 'bg-[#181411]/90 border-stone-800 text-stone-100'
          : 'bg-[#FAF7F2]/90 border-[#8F7D6E]/15 text-[#241D17]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4 md:gap-8">
        {/* ZONE 1: BRAND WORDMARK */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 font-serif text-lg sm:text-xl tracking-tight whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity cursor-pointer text-left"
        >
          <span
            className={`flex items-center justify-center w-8 h-8 rounded-full border shadow-xs font-serif text-sm font-bold ${
              isDark
                ? 'bg-stone-800 border-stone-700 text-amber-200'
                : 'bg-white border-stone-200 text-[#241D17]'
            }`}
          >
            Y<span className="text-[10px] text-[#C26E42] ml-0.5 -mt-1">✦</span>
          </span>
          <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
            {YADAH_BRAND.brandName}
          </span>
        </button>

        {/* ZONE 2: 5 CLEAN TEXT NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs uppercase tracking-[0.16em] font-semibold">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 border-b-2 ${
                  isActive
                    ? 'text-[#C26E42] border-[#C26E42]'
                    : isDark
                    ? 'text-stone-300 hover:text-white border-transparent'
                    : 'text-[#6B5D52] hover:text-[#241D17] border-transparent'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* ZONE 3: ACTIONS (THEME TOGGLE, CART & WHATSAPP) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* THEME TOGGLE BUTTON IN HEADER NAV */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`flex items-center justify-center w-9 h-9 rounded-full border transition-all cursor-pointer ${
              isDark
                ? 'bg-stone-800/80 border-stone-700 text-amber-300 hover:bg-stone-700'
                : 'bg-white/80 border-stone-200 text-[#5C4D40] hover:bg-white hover:text-[#C26E42]'
            }`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Warm Dusk Mode'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Cart Bag Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 rounded-full text-xs font-medium border shadow-xs transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              isDark
                ? 'bg-stone-800/90 border-stone-700 text-stone-100 hover:bg-stone-700'
                : 'bg-white/80 border-stone-200 text-[#29221C] hover:bg-white'
            }`}
            aria-label="View shopping bag"
          >
            <ShoppingBag className="w-4 h-4 text-[#C26E42]" />
            <span className="hidden sm:inline">Bag</span>
            {totalItems > 0 && (
              <span className="flex items-center justify-center w-4.5 h-4.5 rounded-full bg-[#C26E42] text-white text-[10px] font-bold">
                {totalItems}
              </span>
            )}
          </button>

          {/* Direct WhatsApp Order CTA */}
          <a
            href="https://wa.me/2348162095850?text=Hello%20Yadah's%20Crunchies,%20I%20would%20like%20to%20order%20some%20Peppered%20Flat%20Kulikuli!"
            target="_blank"
            rel="noopener noreferrer"
            className="aura-terracotta-btn hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Order on WhatsApp</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-colors cursor-pointer ${
              isDark ? 'text-stone-200 hover:bg-stone-800' : 'text-[#29221C] hover:bg-stone-100'
            }`}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-t px-6 py-5 space-y-4 ${
            isDark ? 'bg-[#181411] border-stone-800' : 'bg-[#FAF7F2] border-[#8F7D6E]/15'
          }`}
        >
          <nav className="flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`py-2 text-left text-xs uppercase tracking-wider font-semibold border-b ${
                  isDark ? 'border-stone-800' : 'border-stone-100'
                } ${currentPage === link.id ? 'text-[#C26E42]' : isDark ? 'text-stone-300' : 'text-[#4A3D32]'}`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/2348162095850?text=Hello%20Yadah's%20Crunchies,%20I%20would%20like%20to%20order!"
                target="_blank"
                rel="noopener noreferrer"
                className="aura-terracotta-btn inline-flex items-center justify-center gap-2 w-full py-3 rounded-full text-white text-xs font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order (+234 816 209 5850)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
