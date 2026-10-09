import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageSquare, Menu, X, Sparkles } from 'lucide-react';
import { useCart, Currency } from '../context/CartContext';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const { cart, setIsCartOpen, currency, setCurrency, setIsConciergeOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'COLLECTION', target: 'collection' },
    { label: 'ATELIER', target: 'atelier' },
    { label: 'JOURNAL', target: 'journal' },
    { label: 'BOUTIQUES', target: 'boutiques' },
    { label: 'CONTACT', target: 'contact' }
  ];

  const handleLinkClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-amber-950/30 py-3 shadow-2xl'
            : 'bg-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('hero');
              }}
              className="group flex items-center gap-2 text-xl sm:text-2xl font-serif tracking-[0.22em] text-amber-100/95 hover:text-amber-200 transition-colors whitespace-nowrap shrink-0"
            >
              <span className="font-light tracking-[0.28em]">AURÉLIA</span>
            </a>

            {/* Zone 2: Navigation Links (single-line, elegant typography) */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[11px] lg:text-xs font-sans tracking-[0.2em] font-medium text-stone-300/80">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleLinkClick(link.target)}
                  className={`cursor-pointer transition-all duration-200 whitespace-nowrap shrink-0 hover:text-amber-200 relative py-1 ${
                    activeSection === link.target ? 'text-amber-200 font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {activeSection === link.target && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#cca578] to-transparent" />
                  )}
                </button>
              ))}
            </nav>

            {/* Zone 3: Functional Luxury Actions */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              {/* Currency Selector */}
              <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono tracking-wider text-stone-400">
                {(['USD', 'EUR', 'GBP'] as Currency[]).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-1.5 py-0.5 transition-colors cursor-pointer rounded-sm ${
                      currency === curr
                        ? 'text-amber-300 font-semibold'
                        : 'text-stone-500 hover:text-stone-300'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>

              {/* Concierge Inquiry trigger */}
              <button
                onClick={() => setIsConciergeOpen(true)}
                title="Bespoke Concierge & Salon Inquiry"
                className="p-2 text-stone-300 hover:text-amber-200 transition-colors cursor-pointer rounded-full hover:bg-white/5"
                aria-label="Contact Concierge"
              >
                <MessageSquare className="w-4 h-4 stroke-[1.5]" />
              </button>

              {/* Private Client Shopping Bag */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-900/40 bg-stone-900/40 hover:bg-amber-950/30 hover:border-amber-700/60 transition-all cursor-pointer"
                aria-label="View Private Bag"
              >
                <ShoppingBag className="w-4 h-4 text-amber-200/90 group-hover:text-amber-100 transition-colors stroke-[1.5]" />
                <span className="text-[11px] tracking-widest text-amber-100 font-mono tabular-nums">
                  {totalItems}
                </span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#cca578]" />
                )}
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-stone-300 hover:text-white cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#08080a]/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col justify-between pb-8">
          <div className="space-y-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-sans">
              Maison Navigation
            </p>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleLinkClick(link.target)}
                  className="text-left font-serif text-xl tracking-[0.15em] text-amber-100/90 hover:text-amber-300 py-2 border-b border-stone-800/60"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-stone-800/80 space-y-4">
            <div className="flex items-center justify-between text-xs text-stone-400">
              <span className="tracking-widest uppercase">Currency</span>
              <div className="flex gap-2">
                {(['USD', 'EUR', 'GBP'] as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-2 py-1 text-xs font-mono rounded ${
                      currency === c ? 'bg-amber-950/60 text-amber-200' : 'text-stone-400'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsConciergeOpen(true);
              }}
              className="w-full py-2.5 text-xs tracking-[0.2em] uppercase font-sans text-amber-200 border border-amber-900/60 rounded-full hover:bg-amber-950/30"
            >
              Contact Private Salon
            </button>
          </div>
        </div>
      )}
    </>
  );
};
