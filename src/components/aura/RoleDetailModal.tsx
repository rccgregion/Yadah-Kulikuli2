import React from 'react';
import { useAura } from '../../context/AuraContext';
import { X, Bookmark, MapPin, CheckCircle, ArrowRight, HeartHandshake, Layers } from 'lucide-react';

export const RoleDetailModal: React.FC = () => {
  const { activeRole, closeRoleModal, isRoleSaved, toggleSaveRole, openApplicationModal } = useAura();

  if (!activeRole) return null;

  const saved = isRoleSaved(activeRole.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={closeRoleModal}
        className="fixed inset-0 bg-[#1F1914]/60 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl rounded-[32px] bg-[#FAF7F2] border border-stone-200/90 shadow-2xl p-6 sm:p-10 text-[#2A221B] z-10 max-h-[90vh] overflow-y-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-stone-200/60 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-serif font-bold text-[#2A221B] shadow-xs border border-stone-200">
              A<span className="text-xs text-[#C26E42] ml-0.5 -mt-1">✦</span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C26E42] block">
                {activeRole.department}
              </span>
              <span className="text-xs text-[#7A6C60]">Aura Studio Cohort Opening</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleSaveRole(activeRole.id)}
              className={`p-2.5 rounded-full border transition-colors cursor-pointer ${
                saved
                  ? 'bg-[#C26E42] text-white border-[#C26E42]'
                  : 'bg-white hover:bg-stone-100 text-[#5C4D40] border-stone-200'
              }`}
              title={saved ? 'Remove from saved' : 'Save for later'}
            >
              <Bookmark className={`w-4 h-4 ${saved ? 'fill-white' : ''}`} />
            </button>
            <button
              onClick={closeRoleModal}
              className="p-2.5 rounded-full bg-white hover:bg-stone-100 border border-stone-200 text-[#5C4D40] transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Header Content */}
        <div className="py-6 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7A6C60]">
              {activeRole.isTopRole ? 'Top Priority Role' : 'Active Opening'}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#C26E42]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#241D17]">
            {activeRole.title}
          </h2>

          <p className="text-base sm:text-lg text-[#695A4E]">
            {activeRole.tagline}
          </p>

          {/* Key Facts Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            <div className="p-3 rounded-2xl bg-white border border-stone-200/80">
              <span className="text-[10px] uppercase tracking-wider text-[#8E8074] block">Employment</span>
              <span className="text-xs font-semibold text-[#29221C]">{activeRole.employmentType}</span>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-stone-200/80">
              <span className="text-[10px] uppercase tracking-wider text-[#8E8074] block">Location</span>
              <span className="text-xs font-semibold text-[#29221C] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C26E42]" />
                {activeRole.location}
              </span>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-stone-200/80">
              <span className="text-[10px] uppercase tracking-wider text-[#8E8074] block">Compensation</span>
              <span className="text-xs font-semibold text-[#29221C] tabular-nums">
                ${(activeRole.compensationMin / 1000).toFixed(0)}K – ${(activeRole.compensationMax / 1000).toFixed(0)}K
              </span>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-stone-200/80">
              <span className="text-[10px] uppercase tracking-wider text-[#8E8074] block">Structure</span>
              <span className="text-xs font-semibold text-[#29221C]">{activeRole.contractType}</span>
            </div>
          </div>
        </div>

        {/* Role Overview Prose */}
        <div className="space-y-6 text-sm text-[#4A3D33] leading-relaxed border-t border-stone-200/60 pt-6">
          <div>
            <h3 className="font-serif text-lg text-[#241D17] mb-2 font-medium">
              Role Scope & Architectural Mission
            </h3>
            <p>{activeRole.description}</p>
          </div>

          <div>
            <h3 className="font-serif text-lg text-[#241D17] mb-3 font-medium">
              Core Responsibilities
            </h3>
            <ul className="space-y-2.5">
              {activeRole.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 text-[#C26E42] shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-[#241D17] mb-3 font-medium">
              Qualifications & Tactile Sensibility
            </h3>
            <ul className="space-y-2.5">
              {activeRole.qualifications.map((qual, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 text-[#C26E42] shrink-0 mt-0.5" />
                  <span>{qual}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Perks */}
          <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-3">
            <h3 className="font-serif text-base text-[#241D17] flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#C26E42]" />
              <span>Studio Cohort Benefits</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5C4D40]">
              {activeRole.studioPerks.map((perk, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C26E42]" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Material Palette in Role */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A6C60] mb-2">
              <Layers className="w-3.5 h-3.5 text-[#C26E42]" />
              <span>Signature Materials Touched In This Role</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeRole.materialsUsed.map((m) => (
                <span
                  key={m}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#EFE8DD] text-[#3D3126] border border-stone-300/60"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Primary Apply CTA */}
        <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#7A6C60] block">
              Annual Base + Performance
            </span>
            <span className="text-xl font-bold font-sans text-[#241D17] tabular-nums">
              ${(activeRole.compensationMin / 1000).toFixed(0)}K – ${(activeRole.compensationMax / 1000).toFixed(0)}K
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => toggleSaveRole(activeRole.id)}
              className="flex-1 sm:flex-none px-5 py-3 rounded-full text-xs font-medium bg-white border border-stone-200 hover:bg-stone-100 text-[#3D3126] cursor-pointer"
            >
              {saved ? 'In Saved Dossier' : 'Save Role'}
            </button>

            <button
              onClick={() => openApplicationModal(activeRole)}
              className="aura-terracotta-btn flex-1 sm:flex-none flex items-center justify-center gap-2 px-7 py-3 rounded-full text-white text-xs font-medium cursor-pointer"
            >
              <span>Submit Portfolio & Apply</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
