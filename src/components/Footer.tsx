import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-[#050507] border-t border-stone-800/80 pt-16 pb-12 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800/60">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-serif text-2xl tracking-[0.25em] text-amber-100/90 block">
              AURÉLIA
            </span>
            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              Maison de haute couture footwear. Sculpted in 24-karat gold vermeil and Florentine relief calfskin. Crafted for the discerning collector.
            </p>
            <div className="text-[11px] text-stone-500 font-mono tracking-wider">
              Atelier No. 4 · Florence · Place Vendôme Paris
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-stone-300 font-medium">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-amber-200 transition-colors"
                >
                  Collection Botanique
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('atelier')}
                  className="hover:text-amber-200 transition-colors"
                >
                  Florence Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journal')}
                  className="hover:text-amber-200 transition-colors"
                >
                  Maison Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('boutiques')}
                  className="hover:text-amber-200 transition-colors"
                >
                  Global Salons
                </button>
              </li>
            </ul>
          </div>

          {/* Client Care & Authenticity */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-stone-300 font-medium">
              Client Care
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-200 transition-colors"
                >
                  Private Concierge
                </button>
              </li>
              <li>
                <span className="text-stone-500">Bespoke Sizing Consultation</span>
              </li>
              <li>
                <span className="text-stone-500">Hallmark Provenance Passport</span>
              </li>
              <li>
                <span className="text-stone-500">Complimentary White-Glove Delivery</span>
              </li>
            </ul>
          </div>

          {/* Private Newsletter Invitation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-stone-300 font-medium">
              Private Client Gazette
            </h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Receive private invitations to confidential salon previews, private casting unveilings, and limited editions.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-amber-950/30 border border-[#cca578]/40 text-xs text-amber-200 flex items-center gap-2">
                <Check className="w-4 h-4 text-[#cca578]" />
                <span>You have been inscribed into the private salon roll.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter private email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-stone-900/80 border border-stone-800 rounded-full px-4 py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-amber-400 flex-grow"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-full bg-[#cca578] hover:bg-[#e2c29d] text-stone-950 text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-light gap-4">
          <div>
            © {new Date().getFullYear()} Maison Aurélia Haute Couture. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-stone-400 cursor-pointer">Confidentiality Charter</span>
            <span className="hover:text-stone-400 cursor-pointer">Terms of Commission</span>
            <span className="hover:text-stone-400 cursor-pointer">Ethics & Sourcing</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
