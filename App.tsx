import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TacografoSection } from './components/TacografoSection';
import { RastreamentoSection } from './components/RastreamentoSection';
import { VideoTelemetrySection } from './components/VideoTelemetrySection';
import { AdvancedTelemetrySection } from './components/AdvancedTelemetrySection';
import { MaintenanceSection } from './components/MaintenanceSection';
import { Features } from './components/Features';
import { PricingSection } from './components/PricingSection';
import { LeadFormSection } from './components/LeadFormSection';
import { Gallery } from './components/Gallery';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';

const App: React.FC = () => {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

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
        <LeadFormSection />
        <Gallery />
        <AboutSection />
      </main>
      <Footer onOpenPolicy={() => setIsPolicyOpen(true)} />
      <WhatsAppButton />
      
      <PrivacyPolicyModal 
        isOpen={isPolicyOpen} 
        onClose={() => setIsPolicyOpen(false)} 
      />
    </div>
  );
};

export default App;
