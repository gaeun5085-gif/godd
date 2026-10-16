/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ImageSlotProvider } from './context/ImageSlotContext';
import { RedThreadCanvas } from './components/RedThreadCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { CharactersSection } from './components/CharactersSection';
import { WorldsSection } from './components/WorldsSection';
import { IslandSection } from './components/IslandSection';
import { EntitiesSection } from './components/EntitiesSection';
import { FragmentsSection } from './components/FragmentsSection';
import { ResonanceSection } from './components/ResonanceSection';
import { VolosSection } from './components/VolosSection';
import { AltarSection } from './components/AltarSection';
import { Footer } from './components/Footer';
import { SurvivalRulesModal } from './components/SurvivalRulesModal';
import { SlotUploadModal } from './components/SlotUploadModal';

export default function App() {
  const [rulesModalOpen, setRulesModalOpen] = useState(false);

  return (
    <ImageSlotProvider>
      <div className="min-h-screen bg-[#080808] text-[#F1EFE8] relative selection:bg-[#8F1017] selection:text-[#F1EFE8]">
        {/* Continuous Red Thread of Fate & Right Scroll Bar */}
        <RedThreadCanvas />

        {/* Global Navigation */}
        <Navbar onOpenRules={() => setRulesModalOpen(true)} />

        {/* Canonical Narrative Flow */}
        <main className="relative z-10 flex flex-col">
          <HeroSection />
          <StorySection />
          <CharactersSection />
          <WorldsSection />
          <IslandSection />
          <EntitiesSection />
          <FragmentsSection />
          <ResonanceSection />
          <VolosSection />
          <AltarSection />
        </main>

        {/* Quiet Editorial Footer */}
        <Footer onOpenRules={() => setRulesModalOpen(true)} />

        {/* Modals */}
        <SurvivalRulesModal
          isOpen={rulesModalOpen}
          onClose={() => setRulesModalOpen(false)}
        />
        <SlotUploadModal />
      </div>
    </ImageSlotProvider>
  );
}
