import React, { useState } from 'react';
import { YADAH_BRAND, FAQS } from '../data/yadahData';
import { useYadahCart } from '../context/YadahCartContext';
import {
  Phone,
  MapPin,
  Instagram,
  MessageSquare,
  HelpCircle,
  CheckCircle2,
  Clock,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast, theme } = useYadahCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Personal Order');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const isDark = theme === 'dark';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      showToast('Please provide your name and phone number.');
      return;
    }

    const text = `*Inquiry from Yadah’s Crunchies Website*\n\n• *Name:* ${name}\n• *Phone:* ${phone}\n• *Email:* ${
      email || 'Not provided'
    }\n• *Topic:* ${topic}\n• *Message:* ${message}`;
    const url = `https://wa.me/2348162095850?text=${encodeURIComponent(text)}`;

    setIsSent(true);
    showToast('Redirecting to WhatsApp to send your inquiry...');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 space-y-16 sm:space-y-20">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider text-[#C26E42] ${
            isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
          }`}
        >
          <Phone className="w-3.5 h-3.5 text-[#C26E42]" />
          <span>Contact & Order Coordination</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight">
          We’d love to hear from you.
        </h1>
        <p className={`text-sm sm:text-base max-w-2xl leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#695A4E]'}`}>
          Whether you want a few pouches for your pantry, cartons for your store, or event catering in Lokoja, Abuja, Lagos, or beyond—we’re here.
        </p>
      </section>

      {/* 2. CONTACT DETAILS & INTERACTIVE INQUIRY FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: Contact Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div
              className={`p-6 sm:p-7 rounded-3xl border shadow-xs space-y-3 ${
                isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl border flex items-center justify-center text-[#C26E42] ${
                  isDark ? 'bg-stone-800 border-stone-700' : 'bg-[#FAF7F2] border-stone-200'
                }`}
              >
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold">
                Factory & Physical Atelier
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#5C4D40]'}`}>
                {YADAH_BRAND.physicalAddress}
              </p>
              <div className="text-[11px] text-stone-400">
                Visitors by appointment during production hours.
              </div>
            </div>

            <div
              className={`p-6 sm:p-7 rounded-3xl border shadow-xs space-y-3 ${
                isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl border flex items-center justify-center text-[#C26E42] ${
                  isDark ? 'bg-stone-800 border-stone-700' : 'bg-[#FAF7F2] border-stone-200'
                }`}
              >
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold">
                Phone & Direct WhatsApp
              </h3>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-stone-300' : 'text-[#5C4D40]'}`}>
                Chat directly with our sales desk on WhatsApp:
              </p>
              <a
                href="https://wa.me/2348162095850"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold font-sans text-base sm:text-lg text-[#C26E42] block hover:underline"
              >
                {YADAH_BRAND.phone}
              </a>
              <div className="flex items-center gap-1.5 text-xs text-stone-400">
                <Clock className="w-3.5 h-3.5 text-[#C26E42]" />
                <span>Monday — Saturday: 08:00 to 18:00 WAT</span>
              </div>
            </div>

            <div
              className={`p-6 sm:p-7 rounded-3xl border shadow-xs space-y-2.5 ${
                isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl border flex items-center justify-center text-[#C26E42] ${
                  isDark ? 'bg-stone-800 border-stone-700' : 'bg-[#FAF7F2] border-stone-200'
                }`}
              >
                <Instagram className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold">
                Social Media
              </h3>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-stone-300' : 'text-[#5C4D40]'}`}>
                Follow our crunch journey, recipe videos, and customer reviews:
              </p>
              <div className="font-semibold text-sm text-[#C26E42]">
                {YADAH_BRAND.socialMedia}
              </div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form (7 cols) */}
          <div
            className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 rounded-3xl sm:rounded-[32px] border shadow-xs space-y-6 ${
              isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
            }`}
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C26E42]">
                Message Dispatch
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl mt-1">
                Send Us a Quick Note
              </h2>
              <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-stone-300' : 'text-[#695A4E]'}`}>
                Submitting this form connects you directly with our Lokoja desk via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Halima Usman"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-3 rounded-2xl border focus:outline-hidden focus:border-[#C26E42] ${
                      isDark ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-[#FAF7F2] border-stone-200 text-[#241D17]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0801 234 5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-4 py-3 rounded-2xl border focus:outline-hidden focus:border-[#C26E42] ${
                      isDark ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-[#FAF7F2] border-stone-200 text-[#241D17]'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 rounded-2xl border focus:outline-hidden focus:border-[#C26E42] ${
                      isDark ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-[#FAF7F2] border-stone-200 text-[#241D17]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                    Inquiry Category
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className={`w-full px-4 py-3 rounded-2xl border focus:outline-hidden focus:border-[#C26E42] ${
                      isDark ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-[#FAF7F2] border-stone-200 text-[#241D17]'
                    }`}
                  >
                    <option value="Personal Snack Order">Personal Snack Order</option>
                    <option value="Wholesale Carton Supply">Wholesale Carton Supply</option>
                    <option value="Supermarket Distributorship">Supermarket Distributorship</option>
                    <option value="Event Catering / Hampers">Event Catering / Hampers</option>
                    <option value="Other Inquiries">Other Inquiries</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                  Message / Quantity Requested
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what you need, your delivery city/state, or any questions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full px-4 py-3 rounded-2xl border focus:outline-hidden focus:border-[#C26E42] ${
                    isDark ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-[#FAF7F2] border-stone-200 text-[#241D17]'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="aura-terracotta-btn w-full py-4 rounded-full text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#C26E42]/25"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send to WhatsApp (+234 816 209 5850)</span>
              </button>

              {isSent && (
                <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-300 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp opened with your message. We look forward to serving you!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C26E42]">
            Got Questions?
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border space-y-2.5 ${
                isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200/80'
              }`}
            >
              <h3 className="font-serif text-base sm:text-lg font-medium flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#C26E42] shrink-0 mt-1" />
                <span>{faq.q}</span>
              </h3>
              <p className={`text-xs leading-relaxed pl-6 ${isDark ? 'text-stone-300' : 'text-[#5C4D40]'}`}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
