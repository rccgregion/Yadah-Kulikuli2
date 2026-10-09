import React, { useState } from 'react';
import { useYadahCart } from '../../context/YadahCartContext';
import { X, Trash2, Plus, Minus, MessageSquare, ShoppingBag } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalNgn,
    totalItems,
    createWhatsAppOrderUrl,
    theme,
  } = useYadahCart();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerState, setCustomerState] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  const isDark = theme === 'dark';

  if (!isCartOpen) return null;

  const handleCheckoutWhatsApp = () => {
    const url = createWhatsAppOrderUrl({
      name: customerName,
      phone: customerPhone,
      address: customerAddress,
      state: customerState,
      notes: customerNotes,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Slide-out Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div
          className={`w-screen max-w-md border-l shadow-2xl p-5 sm:p-7 flex flex-col justify-between overflow-y-auto transition-colors ${
            isDark
              ? 'bg-[#181411] border-stone-800 text-stone-100'
              : 'bg-[#FAF7F2] border-stone-200/90 text-[#2A221B]'
          }`}
        >
          {/* Top Bar */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200/50 dark:border-stone-800 pb-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#C26E42]" />
                <h2 className="font-serif text-lg sm:text-xl font-medium">
                  Your Snack Bag ({totalItems})
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cart Items List */}
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto ${
                    isDark ? 'bg-stone-800 text-stone-400' : 'bg-stone-100 text-[#8E8074]'
                  }`}
                >
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-medium">Your bag is currently empty</h3>
                <p className="text-xs text-stone-400 max-w-xs mx-auto">
                  Add our signature 250g peppered flat kulikuli pouch to experience authentic Nigerian crunch.
                </p>
              </div>
            ) : (
              <div className="space-y-3 pt-2 max-h-[42vh] overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className={`p-3 rounded-2xl border shadow-xs flex items-center justify-between gap-3 ${
                      isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200/80'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-12 sm:w-14 h-12 sm:h-14 object-cover rounded-xl border border-stone-200/40 shrink-0"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-xs truncate">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-stone-400">
                        Weight: {item.weight}
                      </div>
                      <div className="text-xs font-bold text-[#C26E42] tabular-nums mt-0.5">
                        ₦{(item.priceNgn * item.quantity).toLocaleString()}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold cursor-pointer ${
                          isDark ? 'bg-stone-800 hover:bg-stone-700' : 'bg-stone-100 hover:bg-stone-200'
                        }`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold cursor-pointer ${
                          isDark ? 'bg-stone-800 hover:bg-stone-700' : 'bg-stone-100 hover:bg-stone-200'
                        }`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-stone-400 hover:text-red-500 ml-1 cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Delivery Inputs */}
            {cart.length > 0 && (
              <div
                className={`p-3.5 rounded-2xl border space-y-2 text-xs ${
                  isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'
                }`}
              >
                <span className="font-semibold uppercase tracking-wider text-[10px] text-stone-400 block">
                  Delivery Details (Optional for WhatsApp message)
                </span>
                <input
                  type="text"
                  placeholder="Your Name (e.g. Amara / Tunde)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className={`w-full px-3 py-2 rounded-xl border focus:outline-hidden focus:border-[#C26E42] ${
                    isDark ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-[#FAF7F2] border-stone-200 text-[#241D17]'
                  }`}
                />
                <input
                  type="text"
                  placeholder="Delivery Address & City"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className={`w-full px-3 py-2 rounded-xl border focus:outline-hidden focus:border-[#C26E42] ${
                    isDark ? 'bg-stone-800 border-stone-700 text-stone-100' : 'bg-[#FAF7F2] border-stone-200 text-[#241D17]'
                  }`}
                />
              </div>
            )}
          </div>

          {/* Bottom Checkout & Total */}
          {cart.length > 0 && (
            <div className="pt-4 border-t border-stone-200/50 dark:border-stone-800 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-400">Subtotal:</span>
                <span className="font-bold font-sans text-xl text-[#C26E42] tabular-nums">
                  ₦{totalNgn.toLocaleString()}
                </span>
              </div>

              <button
                onClick={handleCheckoutWhatsApp}
                className="aura-terracotta-btn w-full py-3.5 px-6 rounded-full text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#C26E42]/25"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order on WhatsApp (+234 816 209 5850)</span>
              </button>

              <p className="text-[10px] text-center text-stone-400">
                Direct bank transfer and interstate logistics arranged via WhatsApp.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
