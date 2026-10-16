import React, { createContext, useContext, useState, useEffect } from 'react';

interface ImageSlotContextType {
  slots: Record<string, string>;
  setSlotImage: (slotId: string, url: string) => void;
  removeSlotImage: (slotId: string) => void;
  clearAllSlots: () => void;
  loadSampleArt: () => void;
  isManagerOpen: boolean;
  setIsManagerOpen: (open: boolean) => void;
  activeUploadSlot: string | null;
  openUploadModal: (slotId: string) => void;
  closeUploadModal: () => void;
}

const STORAGE_KEY = 'god_loves_broken_things_slots_v2';

const SAMPLE_ARTWORK: Record<string, string> = {
  'hero-volos': '/src/assets/images/hero_god_marionette_1792098950974.jpg',
  'lucian-portrait': '/src/assets/images/character_inquisitor_1792098953169.jpg',
  'karcel-portrait': '/src/assets/images/character_executioner_1792099000574.jpg',
  'leon-portrait': '/src/assets/images/character_scholar_1792099001874.jpg',
  'yujin-portrait': '/src/assets/images/character_puppeteer_1792099002781.jpg',
  'taeha-portrait': '/src/assets/images/character_prophet_1792099002734.jpg',
  'sion-portrait': '/src/assets/images/character_prince_1792099002863.jpg',
  'volos-image': '/src/assets/images/hero_god_marionette_1792098950974.jpg',
  'altar-image': '/src/assets/images/altar_broken_covenant_1792098953408.jpg',
  'coast-image': '/src/assets/images/island_desolate_sanctuary_1792098951631.jpg',
};

const ImageSlotContext = createContext<ImageSlotContextType | undefined>(undefined);

export const ImageSlotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [slots, setSlots] = useState<Record<string, string>>({});
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [activeUploadSlot, setActiveUploadSlot] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setSlots(JSON.parse(saved));
      } else {
        // By default, start with clean placeholders or hero backdrop so the user sees the designed structure
        // Let's set hero-volos and altar as subtle initial atmosphere while leaving character slots clean or custom
        setSlots({
          'hero-volos': SAMPLE_ARTWORK['hero-volos'],
          'altar-image': SAMPLE_ARTWORK['altar-image'],
        });
      }
    } catch {
      // ignore
    }
  }, []);

  const persist = (updated: Record<string, string>) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // quota
    }
  };

  const setSlotImage = (slotId: string, url: string) => {
    setSlots((prev) => {
      const next = { ...prev, [slotId]: url };
      persist(next);
      return next;
    });
  };

  const removeSlotImage = (slotId: string) => {
    setSlots((prev) => {
      const next = { ...prev };
      delete next[slotId];
      persist(next);
      return next;
    });
  };

  const clearAllSlots = () => {
    setSlots({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const loadSampleArt = () => {
    setSlots(SAMPLE_ARTWORK);
    persist(SAMPLE_ARTWORK);
  };

  const openUploadModal = (slotId: string) => {
    setActiveUploadSlot(slotId);
  };

  const closeUploadModal = () => {
    setActiveUploadSlot(null);
  };

  return (
    <ImageSlotContext.Provider
      value={{
        slots,
        setSlotImage,
        removeSlotImage,
        clearAllSlots,
        loadSampleArt,
        isManagerOpen,
        setIsManagerOpen,
        activeUploadSlot,
        openUploadModal,
        closeUploadModal,
      }}
    >
      {children}
    </ImageSlotContext.Provider>
  );
};

export const useImageSlots = () => {
  const context = useContext(ImageSlotContext);
  if (!context) {
    throw new Error('useImageSlots must be used within ImageSlotProvider');
  }
  return context;
};
