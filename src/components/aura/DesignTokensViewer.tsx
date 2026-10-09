import React, { useState } from 'react';
import { useAura } from '../../context/AuraContext';
import { X, Copy, Check, Palette, Type, Sparkles, FileText } from 'lucide-react';

export const DesignTokensViewer: React.FC = () => {
  const { isDesignTokensOpen, setIsDesignTokensOpen, showToast } = useAura();
  const [activeTab, setActiveTab] = useState<'tokens' | 'typography' | 'glass' | 'markdown'>('tokens');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isDesignTokensOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    showToast(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const tokens = [
    { name: 'Travertine Canvas', hex: '#F6F2EC', role: '60% Dominant Background' },
    { name: 'Sunlit Cream', hex: '#FAF7F2', role: 'Surface & Plaster Fill' },
    { name: 'Architectural Sand', hex: '#EEE6DB', role: 'Secondary Surface' },
    { name: 'Warm Espresso', hex: '#2A221B', role: 'High-Contrast Headings & Typography' },
    { name: 'Terracotta Ochre', hex: '#C26E42', role: '10% High-Intent Accent / CTA' },
    { name: 'Terracotta Dark', hex: '#A85830', role: 'Button Shadow & Hover' },
    { name: 'Amber Status Glow', hex: '#D97706', role: 'Top Role Indicator Dot' },
    { name: 'Muted Earth', hex: '#6B5D52', role: 'Secondary Metadata & Captions' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setIsDesignTokensOpen(false)}
        className="fixed inset-0 bg-[#1F1914]/65 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl rounded-[32px] bg-[#FAF7F2] border border-stone-200/90 shadow-2xl p-6 sm:p-9 text-[#2A221B] z-10 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200/60 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E8DFD3] flex items-center justify-center text-[#C26E42]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C26E42]">
                Specification Inspector
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#241D17]">
                Aura Studio — design.md System
              </h2>
            </div>
          </div>

          <button
            onClick={() => setIsDesignTokensOpen(false)}
            className="p-2.5 rounded-full bg-white hover:bg-stone-100 border border-stone-200 text-[#5C4D40] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 pt-6 pb-4 overflow-x-auto border-b border-stone-200/60">
          <button
            onClick={() => setActiveTab('tokens')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'tokens' ? 'bg-[#C26E42] text-white shadow-xs' : 'text-[#695A4E] hover:bg-stone-100'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Color Swatches</span>
          </button>
          <button
            onClick={() => setActiveTab('typography')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'typography' ? 'bg-[#C26E42] text-white shadow-xs' : 'text-[#695A4E] hover:bg-stone-100'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>Typography Scale</span>
          </button>
          <button
            onClick={() => setActiveTab('glass')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'glass' ? 'bg-[#C26E42] text-white shadow-xs' : 'text-[#695A4E] hover:bg-stone-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frosted Glass Recipe</span>
          </button>
          <button
            onClick={() => setActiveTab('markdown')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'markdown' ? 'bg-[#C26E42] text-white shadow-xs' : 'text-[#695A4E] hover:bg-stone-100'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>design.md Prose</span>
          </button>
        </div>

        {/* TAB 1: COLOR SWATCHES */}
        {activeTab === 'tokens' && (
          <div className="py-6 space-y-6">
            <p className="text-xs text-[#695A4E]">
              60-30-10 distribution: 60% warm travertine ground, 30% frosted milk-glass surfaces, 10% focused terracotta ochre accents.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {tokens.map((tok) => (
                <div
                  key={tok.name}
                  className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div
                    className="w-full h-16 rounded-xl border border-black/5 shadow-inner mb-3"
                    style={{ backgroundColor: tok.hex }}
                  />
                  <div>
                    <span className="font-semibold text-xs text-[#241D17] block">{tok.name}</span>
                    <span className="text-[11px] text-[#7A6C60] block mt-0.5">{tok.role}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(tok.hex, tok.name)}
                    className="mt-3 flex items-center justify-between text-xs font-mono text-[#4A3D33] py-1.5 px-2.5 rounded-lg bg-stone-50 hover:bg-stone-100 cursor-pointer"
                  >
                    <span>{tok.hex}</span>
                    {copiedKey === tok.name ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-[#8E8074]" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: TYPOGRAPHY SCALE */}
        {activeTab === 'typography' && (
          <div className="py-6 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 space-y-4">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-[11px] uppercase tracking-wider text-[#C26E42] font-semibold block">
                  Display Headline Serif · Playfair Display
                </span>
                <div className="font-serif text-3xl sm:text-4xl text-[#241D17] mt-1">
                  Shape spaces that feel alive.
                </div>
                <span className="text-xs text-[#7A6C60] font-mono mt-1 block">
                  Weight 500/600 · Used for Hero titles and "Spatial Designer" headline
                </span>
              </div>

              <div className="border-b border-stone-100 pb-4">
                <span className="text-[11px] uppercase tracking-wider text-[#C26E42] font-semibold block">
                  Brand & Wordmark · Outfit / Geometric Sans
                </span>
                <div className="font-sans text-sm font-bold uppercase tracking-[0.24em] text-[#241D17] mt-1">
                  AURA STUDIO
                </div>
                <span className="text-xs text-[#7A6C60] font-mono mt-1 block">
                  Weight 700 · tracking-[0.24em] · Strict top-bar single element
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#C26E42] font-semibold block">
                  Body Prose & Tabular Figures · Plus Jakarta Sans
                </span>
                <div className="text-sm text-[#4A3D33] mt-1">
                  We weave unveneered Roman travertine, blown silica, and living biophilia into environments that calm the human nervous system.
                </div>
                <div className="text-lg font-bold tabular-nums text-[#241D17] mt-1">
                  $120,000 – $180,000 + Performance Bonus
                </div>
                <span className="text-xs text-[#7A6C60] font-mono mt-1 block">
                  Tabular-nums enabled for currency and physical metrics
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: GLASS RECIPE */}
        {activeTab === 'glass' && (
          <div className="py-6 space-y-4">
            <p className="text-xs text-[#695A4E]">
              Copy the exact physical frosted glassmorphism CSS used on the signature Spatial Designer card:
            </p>
            <pre className="p-5 rounded-2xl bg-[#1E1914] text-amber-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`.aura-glass-card {
  background: linear-gradient(
    135deg, 
    rgba(255, 255, 255, 0.58) 0%, 
    rgba(247, 241, 233, 0.42) 100%
  );
  backdrop-filter: blur(28px) saturate(135%);
  -webkit-backdrop-filter: blur(28px) saturate(135%);
  border: 1.5px solid rgba(255, 255, 255, 0.68);
  box-shadow: 
    0 24px 48px -12px rgba(60, 48, 36, 0.12),
    0 10px 20px -8px rgba(60, 48, 36, 0.08),
    inset 0 1px 2px rgba(255, 255, 255, 0.8),
    inset 0 -1px 2px rgba(180, 160, 140, 0.15);
  border-radius: 32px;
}`}
            </pre>
            <div className="flex justify-end">
              <button
                onClick={() =>
                  copyToClipboard(
                    `background: linear-gradient(135deg, rgba(255,255,255,0.58) 0%, rgba(247,241,233,0.42) 100%);\nbackdrop-filter: blur(28px) saturate(135%);\nborder: 1.5px solid rgba(255,255,255,0.68);\nborder-radius: 32px;`,
                    'Glassmorphism CSS'
                  )
                }
                className="aura-terracotta-btn px-5 py-2.5 rounded-full text-white text-xs font-medium cursor-pointer"
              >
                Copy CSS Snippet
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: MARKDOWN PREVIEW */}
        {activeTab === 'markdown' && (
          <div className="py-6 space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-stone-200/80 font-mono text-xs text-[#3D3126] max-h-96 overflow-y-auto leading-relaxed whitespace-pre-wrap">
{`# Aura Studio — Design System & Specification (\`design.md\`)

Derived from the visual identity of Aura Studio: "Designing spaces. Elevating lives."

## 1. Visual Philosophy & Core Aesthetic
Aura Studio fuses warm architectural biophilic minimalism with ultra-tactile frosted glassmorphism. Inspired by sunlit travertine sanctuaries, polished ceramic sculptures, volcanic pumice stones, and pure frosted blown-glass domes.

## 2. Color Palette & Design Tokens
- Travertine Light Canvas: #F4EFEA
- Sunlit Cream: #FAF7F2
- Warm Espresso: #2A221B
- Terracotta Ochre: #C26E42 (10% Accent)
- Amber Status Dot: #D97706`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
