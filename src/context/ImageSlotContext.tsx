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

const STORAGE_KEY = 'god_loves_broken_things_slots_v3';

export const CANONICAL_IMAGE_MAP: Record<string, string> = {
  'hero-volos': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/A.png',
  'lucian-portrait': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/I1.png',
  'karcel-portrait': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/I2.png',
  'leon-portrait': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/I3.png',
  'yujin-portrait': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/I4.png',
  'taeha-portrait': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/I5.png',
  'sion-portrait': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/I6.png',
  'coast-image': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/M1.png',
  'jungle-image': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/M2.png',
  'cave-image': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/M3.png',
  'ruins-image': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/M4.png',
  'depths-image': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/M5.png',
  'camp-image': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/M6.png',
  'cabin-image': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/M7.png',
  'afterimage-image': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/J1.png',
  'mutated-image': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/J2.png',
  'predator-image': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/J3.png',
  'volos-image': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/A51.png',
  'altar-image': 'https://raw.githubusercontent.com/gaeun5085-gif/pp/refs/heads/main/A5.png',
};

const ImageSlotContext = createContext<ImageSlotContextType | undefined>(undefined);

export const ImageSlotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [slots, setSlots] = useState<Record<string, string>>(CANONICAL_IMAGE_MAP);
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [activeUploadSlot, setActiveUploadSlot] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setSlots({ ...CANONICAL_IMAGE_MAP, ...parsed });
      } else {
        setSlots(CANONICAL_IMAGE_MAP);
        persist(CANONICAL_IMAGE_MAP);
      }
    } catch {
      setSlots(CANONICAL_IMAGE_MAP);
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
    setSlots(CANONICAL_IMAGE_MAP);
    persist(CANONICAL_IMAGE_MAP);
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
