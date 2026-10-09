import React, { useState } from 'react';
import { X, MessageSquare, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ConciergeModal: React.FC = () => {
  const { isConciergeOpen, setIsConciergeOpen, showToast } = useCart();
  const [inquiryType, setInquiryType] = useState('bespoke');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isConciergeOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      showToast('Concierge inquiry delivered to Private Client Director');
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-md w-full bg-[#121217] border border-amber-900/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <button
          onClick={() => {
            setIsConciergeOpen(false);
            setSubmitted(false);
          }}
          className="absolute top-5 right-5 w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-amber-950/40 border border-[#cca578] mx-auto flex items-center justify-center text-[#cca578]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-white font-light">
              Message Transmitted
            </h3>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              Your inquiry has been assigned to our Paris & Florence Private Client desk. An artisan liaison will reply to <span className="text-amber-200">{email}</span> promptly.
            </p>
            <button
              onClick={() => {
                setIsConciergeOpen(false);
                setSubmitted(false);
              }}
              className="mt-4 px-6 py-2 rounded-full bg-[#cca578] text-stone-950 text-xs font-semibold uppercase tracking-wider"
            >
              Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#cca578] uppercase block">
                SERVICE CLIENT PRIVÉ
              </span>
              <h3 className="font-serif text-2xl text-white font-light">
                Private Concierge Liaison
              </h3>
              <p className="text-stone-400 text-xs font-light mt-1">
                Direct inquiry for bespoke heel alloy casting, wedding commissions, or archive acquisition.
              </p>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                Inquiry Topic
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
              >
                <option value="bespoke">Bespoke Gold Alloy or Gemstone Setting</option>
                <option value="bridal">Haute Couture Bridal Commission</option>
                <option value="sizing">Atelier Orthopedic Last Sizing & Fit</option>
                <option value="press">Archival Lending & Editorial Press</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                Client Email
              </label>
              <input
                type="email"
                required
                placeholder="client@haute-couture.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                Your Inquiries / Requirements
              </label>
              <textarea
                rows={4}
                required
                placeholder="Kindly elaborate on your sizing requirements, preferred delivery city, or custom metallurgical preferences..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#cca578] to-[#936e43] text-stone-950 font-semibold text-xs tracking-wider uppercase hover:opacity-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Private Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
