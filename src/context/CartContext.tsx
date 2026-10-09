import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';

export interface CartItem {
  id: string; // unique item id based on product + size + color + monogram
  product: Product;
  size: number;
  colorwayId: string;
  colorwayName: string;
  monogram?: string;
  quantity: number;
}

export type Currency = 'USD' | 'EUR' | 'GBP';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: number, colorwayId: string, monogram?: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (priceInUSD: number) => string;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  isConciergeOpen: boolean;
  setIsConciergeOpen: (open: boolean) => void;
  isAppointmentOpen: boolean;
  setIsAppointmentOpen: (open: boolean) => void;
  appointmentPrefillBoutique: string | null;
  setAppointmentPrefillBoutique: (city: string | null) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const RATES: Record<Currency, { rate: number; symbol: string }> = {
  USD: { rate: 1, symbol: '$' },
  EUR: { rate: 0.92, symbol: '€' },
  GBP: { rate: 0.8, symbol: '£' }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('aurelia_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [appointmentPrefillBoutique, setAppointmentPrefillBoutique] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('aurelia_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  const addToCart = (product: Product, size: number, colorwayId: string, monogram?: string) => {
    const colorway = product.colorways.find((c) => c.id === colorwayId) || product.colorways[0];
    const itemId = `${product.id}-${size}-${colorwayId}-${monogram || ''}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          product,
          size,
          colorwayId,
          colorwayName: colorway.name,
          monogram: monogram?.trim() || undefined,
          quantity: 1
        }
      ];
    });

    showToast(`Added ${product.name} (EU ${size}) to Private Bag`);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === cartItemId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => setCart([]);

  const formatPrice = (priceInUSD: number) => {
    const conf = RATES[currency];
    const converted = Math.round(priceInUSD * conf.rate);
    return `${conf.symbol}${converted.toLocaleString()}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        currency,
        setCurrency,
        formatPrice,
        selectedProduct,
        setSelectedProduct,
        isConciergeOpen,
        setIsConciergeOpen,
        isAppointmentOpen,
        setIsAppointmentOpen,
        appointmentPrefillBoutique,
        setAppointmentPrefillBoutique,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
