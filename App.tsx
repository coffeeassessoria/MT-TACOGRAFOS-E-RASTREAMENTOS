import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TacografoSection } from './components/TacografoSection';
import { RastreamentoSection } from './components/RastreamentoSection';
import { VideoTelemetrySection } from './components/VideoTelemetrySection';
import { AdvancedTelemetrySection } from './components/AdvancedTelemetrySection';
import { MaintenanceSection } from './components/MaintenanceSection';
import { Features } from './components/Features';
import { PricingSection } from './components/PricingSection';
import { Gallery } from './components/Gallery';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-text">
      <Header />
      <main>
        <Hero />
        <TacografoSection />
        <RastreamentoSection />
        <VideoTelemetrySection />
        <AdvancedTelemetrySection />
        <MaintenanceSection />
        <Features />
        <PricingSection />
        <Gallery />
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;