import React, { createContext, useContext, useState, useEffect } from 'react';
import { YADAH_BRAND } from '../data/yadahData';

export interface CartItem {
  id: string;
  title: string;
  weight: string;
  priceNgn: number;
  quantity: number;
  image: string;
  isWholesale?: boolean;
}

interface YadahCartContextType {
  cart: CartItem[];
  addToCart: (
    item: { id: string; title: string; weight: string; priceNgn: number; image: string; isWholesale?: boolean },
    qty?: number
  ) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalNgn: number;
  totalItems: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  createWhatsAppOrderUrl: (customerDetails?: {
    name: string;
    phone: string;
    address: string;
    state: string;
    notes?: string;
  }) => string;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const YadahCartContext = createContext<YadahCartContextType | undefined>(undefined);

export const YadahCartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('yadah_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const savedTheme = localStorage.getItem('yadah_theme');
      return savedTheme === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('yadah_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('yadah_theme', theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const addToCart = (
    item: { id: string; title: string; weight: string; priceNgn: number; image: string; isWholesale?: boolean },
    qty = 1
  ) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          title: item.title,
          weight: item.weight,
          priceNgn: item.priceNgn,
          quantity: qty,
          image: item.image,
          isWholesale: item.isWholesale,
        },
      ];
    });

    showToast(`Added ${item.title} (${qty}x) to bag`);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.id === id) {
            const next = i.quantity + delta;
            return next > 0 ? { ...i, quantity: next } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => setCart([]);

  const totalNgn = cart.reduce((sum, item) => sum + item.priceNgn * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const createWhatsAppOrderUrl = (customerDetails?: {
    name: string;
    phone: string;
    address: string;
    state: string;
    notes?: string;
  }) => {
    let text = `*New Order from Yadah’s Crunchies*\n\n`;
    text += `*Order Items:*\n`;
    cart.forEach((item, idx) => {
      text += `${idx + 1}. ${item.title} (${item.weight}) x${item.quantity} = ₦${(
        item.priceNgn * item.quantity
      ).toLocaleString()}\n`;
    });
    text += `\n*Total Amount:* ₦${totalNgn.toLocaleString()}\n\n`;

    if (customerDetails && customerDetails.name) {
      text += `*Customer Information:*\n`;
      text += `• Name: ${customerDetails.name}\n`;
      text += `• Phone: ${customerDetails.phone}\n`;
      text += `• Delivery Address: ${customerDetails.address}\n`;
      if (customerDetails.state) {
        text += `• State/City: ${customerDetails.state}\n`;
      }
      if (customerDetails.notes) {
        text += `• Notes: ${customerDetails.notes}\n`;
      }
    } else {
      text += `Kindly provide payment instructions and delivery dispatch. Thank you!`;
    }

    return `https://wa.me/2348162095850?text=${encodeURIComponent(text)}`;
  };

  return (
    <YadahCartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalNgn,
        totalItems,
        isCartOpen,
        setIsCartOpen,
        toastMessage,
        showToast,
        createWhatsAppOrderUrl,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </YadahCartContext.Provider>
  );
};

export const useYadahCart = () => {
  const ctx = useContext(YadahCartContext);
  if (!ctx) throw new Error('useYadahCart must be used within YadahCartProvider');
  return ctx;
};
