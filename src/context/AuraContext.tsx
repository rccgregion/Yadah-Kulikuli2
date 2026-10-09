import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { StudioRole, STUDIO_ROLES } from '../data/auraData';

interface AuraContextType {
  savedRoles: string[];
  toggleSaveRole: (roleId: string) => void;
  isRoleSaved: (roleId: string) => boolean;
  activeRole: StudioRole | null;
  openRoleModal: (role: StudioRole) => void;
  closeRoleModal: () => void;
  isSavedDrawerOpen: boolean;
  setIsSavedDrawerOpen: (open: boolean) => void;
  isDesignTokensOpen: boolean;
  setIsDesignTokensOpen: (open: boolean) => void;
  isApplicationModalOpen: boolean;
  openApplicationModal: (role: StudioRole) => void;
  closeApplicationModal: () => void;
  applicationRole: StudioRole | null;
  lightingMode: 'daylight' | 'twilight';
  setLightingMode: (mode: 'daylight' | 'twilight') => void;
  toggleLightingMode: () => void;
  glassDiffusion: number;
  setGlassDiffusion: (blur: number) => void;
  isSoundPlaying: boolean;
  toggleAmbientSound: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AuraContext = createContext<AuraContextType | undefined>(undefined);

export const AuraProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedRoles, setSavedRoles] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('aura_saved_roles');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [activeRole, setActiveRole] = useState<StudioRole | null>(null);
  const [applicationRole, setApplicationRole] = useState<StudioRole | null>(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState<boolean>(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState<boolean>(false);
  const [isDesignTokensOpen, setIsDesignTokensOpen] = useState<boolean>(false);
  const [lightingMode, setLightingMode] = useState<'daylight' | 'twilight'>('daylight');
  const [glassDiffusion, setGlassDiffusion] = useState<number>(28);
  const [isSoundPlaying, setIsSoundPlaying] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Audio Context ref for calming ambient harmonic drone
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscNodesRef = useRef<OscillatorNode[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem('aura_saved_roles', JSON.stringify(savedRoles));
    } catch (e) {
      console.warn('Unable to persist saved roles', e);
    }
  }, [savedRoles]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3800);
  };

  const toggleSaveRole = (roleId: string) => {
    const role = STUDIO_ROLES.find((r) => r.id === roleId);
    const title = role ? role.title : 'Role';

    setSavedRoles((prev) => {
      const exists = prev.includes(roleId);
      if (exists) {
        showToast(`Removed "${title}" from your saved roles.`);
        return prev.filter((id) => id !== roleId);
      } else {
        showToast(`Saved "${title}" to your portfolio dossier.`);
        return [...prev, roleId];
      }
    });
  };

  const isRoleSaved = (roleId: string) => savedRoles.includes(roleId);

  const openRoleModal = (role: StudioRole) => {
    setActiveRole(role);
  };

  const closeRoleModal = () => {
    setActiveRole(null);
  };

  const openApplicationModal = (role: StudioRole) => {
    setApplicationRole(role);
    setIsApplicationModalOpen(true);
    setActiveRole(null);
  };

  const closeApplicationModal = () => {
    setIsApplicationModalOpen(false);
    setApplicationRole(null);
  };

  const toggleLightingMode = () => {
    setLightingMode((prev) => {
      const next = prev === 'daylight' ? 'twilight' : 'daylight';
      showToast(next === 'daylight' ? 'Illumination: Daylight Travertine' : 'Illumination: Twilight Warm Lantern');
      return next;
    });
  };

  // Pure Web Audio API ambient room tone (soft, peaceful biophilic frequency: 174Hz and 261Hz harmonic)
  const toggleAmbientSound = () => {
    if (isSoundPlaying) {
      // Fade out
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1.2);
        setTimeout(() => {
          oscNodesRef.current.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {}
          });
          oscNodesRef.current = [];
          setIsSoundPlaying(false);
          showToast('Ambient studio soundscape paused.');
        }, 1250);
      }
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.045, ctx.currentTime + 2.5);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Warm frequencies reminiscent of singing bowls & desert stillness
        const freqs = [174, 261.63, 392, 523.25];
        const oscs: OscillatorNode[] = [];

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const filter = ctx.createBiquadFilter();
          const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(500, ctx.currentTime);

          if (panner) {
            panner.pan.setValueAtTime((idx - 1.5) * 0.4, ctx.currentTime);
            osc.connect(filter).connect(panner).connect(masterGain);
          } else {
            osc.connect(filter).connect(masterGain);
          }

          osc.start();
          oscs.push(osc);
        });

        oscNodesRef.current = oscs;
        setIsSoundPlaying(true);
        showToast('Ambient studio soundscape active: 174Hz Stillness');
      } catch (err) {
        console.warn('Web Audio error', err);
      }
    }
  };

  return (
    <AuraContext.Provider
      value={{
        savedRoles,
        toggleSaveRole,
        isRoleSaved,
        activeRole,
        openRoleModal,
        closeRoleModal,
        isSavedDrawerOpen,
        setIsSavedDrawerOpen,
        isDesignTokensOpen,
        setIsDesignTokensOpen,
        isApplicationModalOpen,
        openApplicationModal,
        closeApplicationModal,
        applicationRole,
        lightingMode,
        setLightingMode,
        toggleLightingMode,
        glassDiffusion,
        setGlassDiffusion,
        isSoundPlaying,
        toggleAmbientSound,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </AuraContext.Provider>
  );
};

export const useAura = (): AuraContextType => {
  const context = useContext(AuraContext);
  if (!context) {
    throw new Error('useAura must be used within an AuraProvider');
  }
  return context;
};
