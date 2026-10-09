import React, { useState } from 'react';
import { useAura } from '../../context/AuraContext';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { showToast, setIsDesignTokensOpen } = useAura();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    showToast('Subscribed to The Travertine Journal.');
  };

  return (
    <footer className="border-t border-[#8F7D6E]/20 bg-[#FAF7F2] text-[#2A221B] pt-20 pb-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Studio Brand & Address (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-stone-200 shadow-xs font-serif text-sm font-semibold text-[#241D17]">
                A<span className="text-[10px] text-[#C26E42] ml-0.5 -mt-1">✦</span>
              </span>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.24em] text-[#241D17]">
                Aura Studio
              </span>
            </div>

            <p className="font-serif text-xl text-[#3D3126] font-normal italic">
              "Designing spaces. Elevating lives."
            </p>

            <p className="text-xs text-[#7A6C60] leading-relaxed max-w-sm">
              724 S Santa Fe Avenue, Arts District<br />
              Los Angeles, California 90021<br />
              Mon–Fri 09:00 — 18:00 PST
            </p>

            <div className="pt-2 text-xs text-[#8E8074]">
              Contact: <span className="text-[#241D17] font-medium">atelier@aurastudio.la</span>
            </div>
          </div>

          {/* Navigation Columns (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C26E42]">
              Studio Navigation
            </div>
            <ul className="space-y-2 text-xs font-medium text-[#5C4D40]">
              <li>
                <a href="#roles" className="hover:text-[#C26E42] transition-colors">
                  Spatial Design Openings
                </a>
              </li>
              <li>
                <a href="#sanctuaries" className="hover:text-[#C26E42] transition-colors">
                  Built Sanctuaries & Portfolios
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#C26E42] transition-colors">
                  Material Sincerity Manifesto
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsDesignTokensOpen(true)}
                  className="hover:text-[#C26E42] transition-colors text-left cursor-pointer"
                >
                  design.md Visual Tokens
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C26E42] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>The Travertine Journal</span>
            </div>
            <p className="text-xs text-[#695A4E] leading-relaxed">
              Bi-monthly dispatches from our Los Angeles workshop exploring mineral chemistry, circadian glass optics, and architectural stillness.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-emerald-800 p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>You are subscribed to our private studio dispatches.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-full text-xs bg-white border border-stone-200 text-[#241D17] focus:outline-hidden focus:border-[#C26E42]"
                />
                <button
                  type="submit"
                  className="aura-terracotta-btn px-4 py-2.5 rounded-full text-white text-xs font-medium flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Quiet Legal & Design System Line */}
        <div className="pt-8 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8E8074]">
          <div>
            © {new Date().getFullYear()} Aura Studio Architectural Practice. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Arts District · Los Angeles</span>
            <span>·</span>
            <span>Natural Stone & Blown Silica</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
