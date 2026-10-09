import React from 'react';
import { YADAH_BRAND } from '../../data/yadahData';
import { PageType } from './Navbar';
import { Phone, MapPin, Instagram, ShieldCheck, Mail } from 'lucide-react';
import { useYadahCart } from '../../context/YadahCartContext';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { theme } = useYadahCart();
  const isDark = theme === 'dark';

  return (
    <footer
      className={`border-t pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 transition-colors ${
        isDark ? 'bg-[#14100E] border-stone-800 text-stone-200' : 'bg-[#FAF7F2] border-[#8F7D6E]/20 text-[#2A221B]'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand & Physical Address (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full border shadow-xs font-serif text-sm font-bold ${
                  isDark ? 'bg-stone-800 border-stone-700 text-amber-200' : 'bg-white border-stone-200 text-[#241D17]'
                }`}
              >
                Y<span className="text-[10px] text-[#C26E42] ml-0.5 -mt-1">✦</span>
              </span>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.24em]">
                {YADAH_BRAND.brandName}
              </span>
            </div>

            <p className="font-serif text-xl font-normal italic text-[#C26E42]">
              “{YADAH_BRAND.tagline}”
            </p>

            <p className="text-xs leading-relaxed max-w-sm flex items-start gap-2 text-stone-400 dark:text-stone-400">
              <MapPin className="w-4 h-4 text-[#C26E42] shrink-0 mt-0.5" />
              <span>{YADAH_BRAND.physicalAddress}</span>
            </p>

            <div className="pt-2 space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C26E42]" />
                <span>Phone & WhatsApp: </span>
                <a
                  href="https://wa.me/2348162095850"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#C26E42] hover:underline"
                >
                  {YADAH_BRAND.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#C26E42]" />
                <span>Social Media: </span>
                <span className="font-semibold">{YADAH_BRAND.socialMedia}</span>
              </div>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C26E42]">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#C26E42] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#C26E42] transition-colors cursor-pointer"
                >
                  About Our Lokoja Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#C26E42] transition-colors cursor-pointer"
                >
                  Products & Nutrition
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('wholesale')}
                  className="hover:text-[#C26E42] transition-colors cursor-pointer"
                >
                  Wholesale Cartons
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#C26E42] transition-colors cursor-pointer"
                >
                  Contact & Orders
                </button>
              </li>
            </ul>
          </div>

          {/* Quality & Storage Declaration (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C26E42] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Authentic Quality Guarantee</span>
            </div>
            <p className="text-xs leading-relaxed">
              {YADAH_BRAND.storageInstructions}
            </p>
            <div
              className={`p-3.5 rounded-2xl border text-xs space-y-1 ${
                isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
              }`}
            >
              <span className="font-semibold block text-[#C26E42]">Allergen Notice:</span>
              <p>{YADAH_BRAND.allergenAdvice}</p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-stone-200/40 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} {YADAH_BRAND.brandName}. All rights reserved. Produced in Lokoja, Kogi State, Nigeria.
          </div>
          <div className="flex items-center gap-4">
            <span>100% Natural Peanuts</span>
            <span>·</span>
            <span>Rich in Protein</span>
            <span>·</span>
            <span>Bold & Spicy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
