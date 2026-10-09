import React from 'react';
import { useAura } from '../../context/AuraContext';
import { STUDIO_ROLES } from '../../data/auraData';
import { X, Trash2, ArrowRight, Bookmark, MapPin } from 'lucide-react';

export const SavedRolesDrawer: React.FC = () => {
  const {
    isSavedDrawerOpen,
    setIsSavedDrawerOpen,
    savedRoles,
    toggleSaveRole,
    openRoleModal,
    openApplicationModal,
  } = useAura();

  if (!isSavedDrawerOpen) return null;

  const roles = STUDIO_ROLES.filter((r) => savedRoles.includes(r.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsSavedDrawerOpen(false)}
        className="fixed inset-0 bg-[#1F1914]/50 backdrop-blur-xs transition-opacity"
      />

      {/* Slide-out Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] border-l border-stone-200/90 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200/60 pb-4">
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-[#C26E42]" />
                <h2 className="font-serif text-xl text-[#241D17]">
                  Saved Dossier ({savedRoles.length})
                </h2>
              </div>
              <button
                onClick={() => setIsSavedDrawerOpen(false)}
                className="p-2 rounded-full hover:bg-stone-200/60 text-[#5C4D40] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#7A6C60] leading-relaxed">
              Curated spatial design opportunities bookmarked for your application review.
            </p>

            {/* Roles List */}
            {roles.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-[#8E8074]">
                  <Bookmark className="w-5 h-5" />
                </div>
                <p className="text-xs text-[#7A6C60]">
                  No roles saved yet. Explore our open positions and click "Save for later".
                </p>
              </div>
            ) : (
              <div className="space-y-3 pt-2">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C26E42]">
                          {role.department}
                        </span>
                        <h3 className="font-serif text-lg text-[#241D17]">
                          {role.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-[#7A6C60] mt-0.5">
                          <MapPin className="w-3 h-3 text-[#C26E42]" />
                          <span>{role.location}</span>
                          <span>·</span>
                          <span className="font-semibold text-[#241D17] tabular-nums">
                            ${(role.compensationMin / 1000).toFixed(0)}K – ${(role.compensationMax / 1000).toFixed(0)}K
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleSaveRole(role.id)}
                        className="p-1.5 rounded-lg text-stone-400 hover:text-red-600 transition-colors cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 pt-1 border-t border-stone-100">
                      <button
                        onClick={() => {
                          setIsSavedDrawerOpen(false);
                          openRoleModal(role);
                        }}
                        className="flex-1 py-1.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#3D3126] text-xs font-medium cursor-pointer"
                      >
                        Inspect Details
                      </button>
                      <button
                        onClick={() => {
                          setIsSavedDrawerOpen(false);
                          openApplicationModal(role);
                        }}
                        className="aura-terracotta-btn flex-1 py-1.5 px-3 rounded-xl text-white text-xs font-medium flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>Apply</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="pt-6 border-t border-stone-200/60 text-center">
            <span className="text-[11px] text-[#8E8074]">
              Aura Studio · Los Angeles Arts District
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
