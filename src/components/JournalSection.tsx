import React, { useState } from 'react';
import { BookOpen, ArrowRight, X } from 'lucide-react';
import { JOURNAL_ARTICLES, JournalArticle } from '../data/products';

export const JournalSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="py-24 bg-[#08080a] relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-serif text-xs tracking-[0.3em] uppercase text-[#cca578] block mb-2 font-light">
              CHRONIQUES DE LA MAISON
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-white tracking-wide">
              The Aurélia Journal
            </h2>
          </div>
          <p className="text-stone-400 text-xs sm:text-sm font-light max-w-md">
            Essays on metallurgy, horological precision, and the botanical geometry sculpting contemporary luxury.
          </p>
        </div>

        {/* 3 Editorial Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-[#0e0e12] p-8 rounded-2xl border border-stone-800/80 hover:border-amber-900/60 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              <div>
                {/* Clean unboxed metadata with typographic dots (Zero-Pill discipline) */}
                <div className="flex items-center gap-2 text-xs text-[#cca578] font-sans tracking-widest uppercase mb-3 font-light">
                  <span>{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-amber-200 transition-colors font-light leading-snug mb-4">
                  {article.title}
                </h3>

                <p className="text-xs text-stone-400 font-light leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-sans tracking-wide">
                  {article.author}
                </span>
                <span className="text-[#cca578] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read Essay <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-[#121216] border border-amber-900/50 rounded-2xl p-8 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs text-[#cca578] uppercase tracking-widest mb-3">
              <span>{selectedArticle.category}</span>
              <span>·</span>
              <span>{selectedArticle.date}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light mb-4">
              {selectedArticle.title}
            </h3>

            <p className="text-xs text-stone-400 italic mb-8 pb-4 border-b border-stone-800">
              Authored by {selectedArticle.author} · {selectedArticle.readTime}
            </p>

            <div className="space-y-4 text-stone-300 text-sm font-light leading-relaxed">
              <p>
                {selectedArticle.excerpt}
              </p>
              <p>
                In the classical Renaissance traditions of central Italy, sculptors such as Benvenuto Cellini treated metal not as a rigid boundary, but as liquid light captured at the pinnacle of tension. When Maison Aurélia set out to engineer The Flora Stiletto, the ambition was not merely aesthetic decoration, but structural symbiosis.
              </p>
              <p>
                The twisting golden vines do not wrap around a concealed heel pin; they *are* the heel pin. Using aeronautical bronze alloys combined with lost-wax micro-casting, our foundry in Florence calibrated the center of gravity directly beneath the calcaneus bone. The result is a shoe of 105mm pitch that moves with fluid stability, whispering botanical grace with every step.
              </p>
              <p>
                The calfskin, seasoned in oak vats along the Arno river, yields a tactile depth that responds to ambient room light. As the wearer moves, the embossed flower petals catch subtle highlights, harmonizing with the 24k vermeil heel.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-800 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2 rounded-full border border-stone-700 text-xs uppercase tracking-widest text-stone-300 hover:text-white"
              >
                Return to Journal
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
