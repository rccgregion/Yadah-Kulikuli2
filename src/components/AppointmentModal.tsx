import React, { useState } from 'react';
import { X, Calendar, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BOUTIQUES } from '../data/products';

export const AppointmentModal: React.FC = () => {
  const { isAppointmentOpen, setIsAppointmentOpen, appointmentPrefillBoutique } = useCart();
  const [selectedBoutique, setSelectedBoutique] = useState(
    appointmentPrefillBoutique || BOUTIQUES[0].city
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2026-10-24',
    time: '14:30',
    notes: 'Interested in bespoke sizing and 24k gold vine heel fitting for gala.'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isAppointmentOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-lg w-full bg-[#121217] border border-amber-900/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <button
          onClick={() => {
            setIsAppointmentOpen(false);
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
              Appointment Requested
            </h3>
            <p className="text-xs text-stone-300 font-light leading-relaxed max-w-sm mx-auto">
              Our salon director for <span className="text-amber-200">{selectedBoutique}</span> will contact you within 4 hours to confirm your private salon fitting suite and vintage champagne pairing.
            </p>
            <button
              onClick={() => {
                setIsAppointmentOpen(false);
                setSubmitted(false);
              }}
              className="mt-4 px-6 py-2 rounded-full bg-[#cca578] text-stone-950 text-xs font-semibold uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#cca578] uppercase block">
                VIP SALON RESERVATION
              </span>
              <h3 className="font-serif text-2xl text-white font-light">
                Private Fitting Consultation
              </h3>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                Select Flagship Salon
              </label>
              <select
                value={selectedBoutique}
                onChange={(e) => setSelectedBoutique(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
              >
                {BOUTIQUES.map((b) => (
                  <option key={b.city} value={b.city}>
                    {b.salonName} ({b.city})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Lady / Monsieur"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+33 / +1 / +44"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                Client Email
              </label>
              <input
                type="email"
                required
                placeholder="client@domaine.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none font-mono"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                  Preferred Time
                </label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                Special Requests or Footwear Size
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#cca578] to-[#936e43] text-stone-950 font-semibold text-xs tracking-wider uppercase hover:opacity-95 cursor-pointer mt-2"
            >
              Confirm Salon Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
