import React, { useState } from 'react';
import { YadahCartProvider, useYadahCart } from './context/YadahCartContext';
import { Navbar, PageType } from './components/yadah/Navbar';
import { Footer } from './components/yadah/Footer';
import { CartDrawer } from './components/yadah/CartDrawer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { WholesalePage } from './pages/WholesalePage';
import { ContactPage } from './pages/ContactPage';
import { Sparkles } from 'lucide-react';

const YadahAppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const { toastMessage, theme } = useYadahCart();

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen font-sans antialiased flex flex-col justify-between selection:bg-[#C26E42] selection:text-white transition-colors duration-300 ${
        isDark ? 'bg-[#14100E] text-stone-100' : 'bg-[#F6F2EC] text-[#2A221B]'
      }`}
    >
      {/* Strict Top Bar Navigation with Header Theme Toggle */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Pages */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'products' && <ProductsPage onNavigate={handleNavigate} />}
        {currentPage === 'wholesale' && <WholesalePage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Refined Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Slide-out Cart Drawer with WhatsApp Order Dispatch */}
      <CartDrawer />

      {/* Clean Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#241D17]/95 border border-[#C26E42]/60 text-[#FAF7F2] text-xs py-3.5 px-5 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <Sparkles className="w-4 h-4 text-[#E69165] shrink-0" />
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <YadahCartProvider>
      <YadahAppContent />
    </YadahCartProvider>
  );
}
