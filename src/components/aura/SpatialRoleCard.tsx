import React, { useState, useRef } from 'react';
import { Bookmark, MapPin, ArrowRight } from 'lucide-react';
import { StudioRole, STUDIO_ROLES } from '../../data/auraData';
import { useAura } from '../../context/AuraContext';

interface SpatialRoleCardProps {
  role?: StudioRole;
  interactiveTilt?: boolean;
  onExplore?: (role: StudioRole) => void;
  className?: string;
}

export const SpatialRoleCard: React.FC<SpatialRoleCardProps> = ({
  role = STUDIO_ROLES[0],
  interactiveTilt = true,
  onExplore,
  className = '',
}) => {
  const { isRoleSaved, toggleSaveRole, openRoleModal, glassDiffusion } = useAura();
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt & specular reflection
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [sheen, setSheen] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -5;
    const tiltY = ((x - centerX) / centerX) * 5;

    setTilt({ x: tiltX, y: tiltY });
    setSheen({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.28,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setSheen((prev) => ({ ...prev, opacity: 0 }));
  };

  const saved = isRoleSaved(role.id);

  const handleExploreClick = () => {
    if (onExplore) {
      onExplore(role);
    } else {
      openRoleModal(role);
    }
  };

  return (
    <div
      style={{ perspective: '1200px' }}
      className={`relative inline-block w-full max-w-[490px] select-none ${className}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: sheen.opacity === 0 ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.08s ease-out',
          backdropFilter: `blur(${glassDiffusion}px) saturate(140%)`,
          WebkitBackdropFilter: `blur(${glassDiffusion}px) saturate(140%)`,
        }}
        className="relative overflow-hidden rounded-[32px] p-8 md:p-9 text-[#2A221B] aura-glass-card transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#3c3024]/20"
      >
        {/* Specular Glare Overlay tracking cursor */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: sheen.opacity,
            background: `radial-gradient(circle 320px at ${sheen.x}% ${sheen.y}%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)`,
          }}
        />

        {/* TOP ROW: Brand Lockup & Bookmark Button */}
        <div className="flex items-center justify-between gap-4">
          {/* Brand Monogram & Studio Tagline */}
          <div className="flex items-center gap-3.5">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF7F2]/85 border border-white shadow-[0_2px_8px_rgba(42,34,27,0.06)] shrink-0">
              <span className="font-serif text-lg font-bold text-[#2A221B] tracking-tight flex items-center">
                A<span className="text-xs text-[#C26E42] ml-0.5 -mt-2">✦</span>
              </span>
            </div>
            <div>
              <h2 className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#2A221B]">
                Aura Studio
              </h2>
              <p className="text-[11px] text-[#78695C] leading-tight mt-0.5">
                Designing spaces. Elevating lives.
              </p>
            </div>
          </div>

          {/* Save for later Pill Button */}
          <button
            onClick={() => toggleSaveRole(role.id)}
            aria-label={saved ? 'Remove from saved' : 'Save for later'}
            className={`group flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
              saved
                ? 'bg-[#C26E42] text-white shadow-sm'
                : 'bg-white/60 hover:bg-white/90 text-[#3D3126] border border-white/70 shadow-xs'
            }`}
          >
            <span className="text-[11.5px]">Save for later</span>
            <Bookmark
              className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110 ${
                saved ? 'fill-white text-white' : 'text-[#5C4D40]'
              }`}
            />
          </button>
        </div>

        {/* ROLE KICKER: TOP ROLE with warm terracotta dot */}
        <div className="mt-8 flex items-center gap-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#695A4E]">
            {role.isTopRole ? 'Top Role' : 'Featured Opening'}
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#C26E42] shadow-[0_0_8px_rgba(194,110,66,0.6)]" />
        </div>

        {/* HERO TITLE & SUBHEADING */}
        <div className="mt-2.5">
          <h1 className="font-serif text-[38px] md:text-[42px] leading-[1.08] font-normal tracking-tight text-[#261E18]">
            {role.title}
          </h1>
          <p className="mt-2.5 text-[15px] md:text-[16px] text-[#63554A] leading-snug">
            {role.tagline.replace(role.highlightPhrase, '')}
            <span className="text-[#C26E42] font-medium">{role.highlightPhrase}</span>
          </p>
        </div>

        {/* DUAL TACTILE FEATURE PODS */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {/* Pod 1: Full-Time / Permanent */}
          <div className="aura-clay-pill flex items-center gap-3 p-3.5 rounded-2xl">
            {/* Clay-embossed 3D Briefcase Icon Badge */}
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#D9875A] to-[#A85830] text-white shadow-[0_3px_8px_rgba(168,88,48,0.28)] shrink-0">
              <svg
                className="w-5 h-5 drop-shadow-xs"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-[13px] font-semibold text-[#29221C] truncate">
                {role.employmentType}
              </div>
              <div className="text-[11.5px] text-[#7A6C60] truncate">
                {role.contractType}
              </div>
            </div>
          </div>

          {/* Pod 2: Creative Studio / Collaborative Team */}
          <div className="aura-clay-pill flex items-center gap-3 p-3.5 rounded-2xl">
            {/* Clay-embossed 3D Studio Architecture Icon Badge */}
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#D9875A] to-[#A85830] text-white shadow-[0_3px_8px_rgba(168,88,48,0.28)] shrink-0">
              <svg
                className="w-5 h-5 drop-shadow-xs"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21h18" />
                <path d="M5 21V7l7-4 7 4v14" />
                <path d="M9 10h1v2H9z" />
                <path d="M14 10h1v2h-1z" />
                <path d="M9 15h1v2H9z" />
                <path d="M14 15h1v2h-1z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-[13px] font-semibold text-[#29221C] truncate">
                {role.team}
              </div>
              <div className="text-[11.5px] text-[#7A6C60] truncate">
                {role.teamType}
              </div>
            </div>
          </div>
        </div>

        {/* HAIRLINE GLOWING DIVIDER */}
        <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-[#8F7D6E]/25 to-transparent" />

        {/* BOTTOM METRICS & CALL TO ACTION */}
        <div className="flex items-end justify-between gap-4">
          {/* Left Column: Compensation & Location */}
          <div className="space-y-3.5">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7D6E62]">
                Compensation
              </div>
              <div className="mt-0.5 text-[21px] font-bold font-sans tracking-tight text-[#241D17] tabular-nums">
                ${(role.compensationMin / 1000).toFixed(0)}K – ${(role.compensationMax / 1000).toFixed(0)}K
              </div>
              <div className="text-[11px] text-[#7A6C60]">
                {role.bonusText}
              </div>
            </div>

            {/* Location row */}
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E5D7C7]/60 text-[#C26E42]">
                <MapPin className="w-3.5 h-3.5 fill-[#C26E42]/20" />
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7D6E62] block">
                  Location
                </span>
                <span className="text-[12px] font-medium text-[#2E251E]">
                  {role.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Explore Role Button */}
          <button
            onClick={handleExploreClick}
            className="aura-terracotta-btn group flex items-center gap-2.5 px-6 py-3.5 rounded-full text-white text-sm font-medium cursor-pointer shrink-0"
          >
            <span>Explore Role</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
