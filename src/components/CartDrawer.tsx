import React, { useState } from 'react';
import { X, Trash2, ShieldCheck, Gift, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    formatPrice,
    clearCart
  } = useCart();

  const [giftBox, setGiftBox] = useState(true);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [clientInfo, setClientInfo] = useState({
    name: 'Madeline Vance',
    email: 'm.vance@couture-client.com',
    address: '14 Avenue Montaigne',
    city: 'Paris',
    postal: '75008'
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderConfirmed(true);
    clearCart();
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
      <div className="relative w-full max-w-md bg-[#0e0e13] border-l border-amber-900/40 h-full flex flex-col justify-between p-6 sm:p-8 shadow-2xl overflow-y-auto">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-stone-800">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#cca578] uppercase block">
                MAISON AURÉLIA
              </span>
              <h3 className="font-serif text-xl text-white font-light">
                Private Client Bag
              </h3>
            </div>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setOrderConfirmed(false);
                setIsCheckingOut(false);
              }}
              className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* If Order Confirmed State */}
          {orderConfirmed ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-950/40 border border-[#cca578] mx-auto flex items-center justify-center text-[#cca578]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-white font-light">
                Order Confirmed
              </h4>
              <p className="text-xs text-stone-300 font-light leading-relaxed max-w-xs mx-auto">
                Order <span className="font-mono text-amber-200">#AUR-88219</span> has been registered with Florence Atelier No. 4.
              </p>
              <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 text-left text-xs text-stone-400 space-y-1">
                <div>Recipient: <span className="text-stone-200">{clientInfo.name}</span></div>
                <div>Destination: <span className="text-stone-200">{clientInfo.address}, {clientInfo.city}</span></div>
                <div>Delivery: <span className="text-[#cca578]">White-Glove Armored Courier (Complimentary)</span></div>
              </div>
              <button
                onClick={() => {
                  setOrderConfirmed(false);
                  setIsCheckingOut(false);
                  setIsCartOpen(false);
                }}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#cca578] text-stone-950 text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : isCheckingOut ? (
            /* Checkout Form View */
            <form onSubmit={handlePlaceOrder} className="py-4 space-y-4">
              <span className="text-xs uppercase tracking-widest text-amber-200 block font-sans">
                Delivery & Commission Details
              </span>

              <div>
                <label className="block text-[11px] text-stone-400 uppercase tracking-wider mb-1">
                  Client Full Name
                </label>
                <input
                  type="text"
                  required
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] text-stone-400 uppercase tracking-wider mb-1">
                  Private Client Email
                </label>
                <input
                  type="email"
                  required
                  value={clientInfo.email}
                  onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] text-stone-400 uppercase tracking-wider mb-1">
                  Delivery Residence / Suite
                </label>
                <input
                  type="text"
                  required
                  value={clientInfo.address}
                  onChange={(e) => setClientInfo({ ...clientInfo, address: e.target.value })}
                  className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-stone-400 uppercase tracking-wider mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    value={clientInfo.city}
                    onChange={(e) => setClientInfo({ ...clientInfo, city: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-stone-400 uppercase tracking-wider mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    required
                    value={clientInfo.postal}
                    onChange={(e) => setClientInfo({ ...clientInfo, postal: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="p-3 rounded-lg bg-stone-900/60 border border-stone-800 text-[11px] text-stone-400">
                Payment Option: <strong className="text-amber-200">Private Client Wire / White-Glove On-Delivery Escrow</strong>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="w-1/3 py-2.5 rounded-full border border-stone-700 text-xs text-stone-400 hover:text-white"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-2.5 rounded-full bg-[#cca578] text-stone-950 font-semibold text-xs tracking-wider uppercase hover:bg-[#e2c29d]"
                >
                  Confirm Commission
                </button>
              </div>
            </form>
          ) : (
            /* Cart Items List */
            <div className="divide-y divide-stone-800/80 my-4 max-h-[50vh] overflow-y-auto">
              {cart.length === 0 ? (
                <div className="py-16 text-center text-stone-500 text-xs space-y-2">
                  <p>Your private client bag is presently unoccupied.</p>
                  <p className="text-stone-400 italic">Explore The Flora Stiletto signature creation.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="py-4 flex gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 rounded-lg object-cover bg-black border border-stone-800 shrink-0"
                    />
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-sm text-white font-normal">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-stone-500 hover:text-red-400 p-1 cursor-pointer"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-[11px] text-[#cca578] font-sans tracking-wide">
                          EU {item.size} · {item.colorwayName}
                        </div>

                        {item.monogram && (
                          <div className="text-[10px] text-amber-200/80 font-mono">
                            Gold Monogram: "{item.monogram}"
                          </div>
                        )}
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center gap-2 border border-stone-800 rounded px-2 py-0.5 text-xs font-mono">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-stone-400 hover:text-white px-1"
                          >
                            -
                          </button>
                          <span className="text-stone-200">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-stone-400 hover:text-white px-1"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-mono text-xs text-amber-100 tabular-nums">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Footer / Summary (When not confirmed and has items) */}
        {!orderConfirmed && !isCheckingOut && cart.length > 0 && (
          <div className="pt-4 border-t border-stone-800 space-y-4">
            {/* Gift packaging toggle */}
            <div className="flex items-center justify-between text-xs text-stone-300 p-2.5 rounded-lg bg-stone-900/60 border border-stone-800">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-[#cca578]" />
                <span className="font-light">Handmade lacquered casket & velvet wrap</span>
              </div>
              <input
                type="checkbox"
                checked={giftBox}
                onChange={(e) => setGiftBox(e.target.checked)}
                className="accent-[#cca578] cursor-pointer"
              />
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-400">
                <span>Subtotal</span>
                <span className="font-mono text-white tabular-nums">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>White-Glove Armored Courier</span>
                <span className="text-[#cca578] uppercase text-[11px]">Complimentary</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-white pt-2 border-t border-stone-800">
                <span>Commission Total</span>
                <span className="font-mono text-amber-200 tabular-nums">{formatPrice(subtotal)}</span>
              </div>
            </div>

            <button
              onClick={() => setIsCheckingOut(true)}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#cca578] to-[#936e43] hover:opacity-95 text-stone-950 text-xs font-semibold tracking-[0.2em] uppercase transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Proceed to Commission</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
