import React, { useState } from 'react';
import { STUDIO_ROLES, StudioRole } from '../../data/auraData';
import { SpatialRoleCard } from './SpatialRoleCard';
import { Filter, Sparkles } from 'lucide-react';
import { useAura } from '../../context/AuraContext';

export const RolesCatalogSection: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const { openRoleModal } = useAura();

  const departments = [
    { id: 'all', label: 'All Openings' },
    { id: 'Spatial Design', label: 'Spatial Design' },
    { id: 'Materials Lab', label: 'Materials Lab' },
    { id: 'Sensory Scenography', label: 'Sensory Scenography' },
    { id: 'Digital Atelier', label: 'Digital Atelier' },
  ];

  const filteredRoles =
    selectedDept === 'all'
      ? STUDIO_ROLES
      : STUDIO_ROLES.filter((r) => r.department === selectedDept);

  return (
    <section id="roles" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C26E42]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Cohort Openings</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#241D17] font-normal tracking-tight text-balance">
            Opportunities to sculpt spaces that elevate human consciousness.
          </h2>
          <p className="text-sm md:text-base text-[#695A4E] leading-relaxed">
            Every position at Aura Studio is structured around radical material honesty, research sabbaticals, and collective craftsmanship.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-white/70 backdrop-blur-md rounded-2xl border border-stone-200/80 shadow-xs overflow-x-auto max-w-full">
          <div className="hidden sm:flex items-center pl-2 pr-1 text-xs text-[#8E8074]">
            <Filter className="w-3.5 h-3.5 mr-1" />
            <span>Filter:</span>
          </div>
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(dept.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                selectedDept === dept.id
                  ? 'bg-[#C26E42] text-white shadow-xs'
                  : 'text-[#5C4D40] hover:text-[#241D17] hover:bg-stone-100/60'
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Spatial Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
        {filteredRoles.map((role: StudioRole) => (
          <div key={role.id} className="w-full flex justify-center">
            <SpatialRoleCard
              role={role}
              interactiveTilt={true}
              onExplore={() => openRoleModal(role)}
            />
          </div>
        ))}
      </div>

      {/* Reassurance & Studio Commitments Banner */}
      <div className="mt-16 p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-stone-200/80 text-center max-w-3xl mx-auto space-y-3">
        <h3 className="font-serif text-xl text-[#241D17]">
          Don’t see your exact spatial discipline?
        </h3>
        <p className="text-xs sm:text-sm text-[#695A4E] leading-relaxed">
          We frequently welcome master stone sculptors, botanical horticulturists, and glass blowers for guest residencies. Inquire directly at <span className="font-semibold text-[#C26E42]">cohort@aurastudio.la</span>.
        </p>
      </div>
    </section>
  );
};
