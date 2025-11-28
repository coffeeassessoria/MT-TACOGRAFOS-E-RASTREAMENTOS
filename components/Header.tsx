import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#home' },
  { label: 'Tacógrafos', href: '#tacografos' },
  { label: 'Rastreamento', href: '#rastreamento' },
  { label: 'Videotelemetria', href: '#videotelemetria' },
  { label: 'Telemetria', href: '#telemetria' },
  { label: 'Contato', href: '#contato' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <a href="#home" className="flex items-center gap-3 group relative z-50">
            <img 
              src="/logo.png" 
              alt="Logo MT Rastreamentos" 
              className="h-14 w-auto object-contain mix-blend-screen group-hover:scale-105 transition-transform duration-300" 
            />
            {/* Texto removido pois a logo já contém o nome, mantendo apenas se necessário para acessibilidade ou SEO, mas visualmente a logo basta */}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-sm font-medium text-brand-text hover:text-brand-orange transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button href="#contato" variant="primary" className="px-5 py-2 text-sm">
              Falar com Especialista
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-text hover:text-brand-orange transition-colors relative z-50"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer System with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding Drawer */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-xs bg-brand-card border-l border-white/10 shadow-2xl z-[70] md:hidden flex flex-col"
            >
              <div className="flex flex-col h-full p-6">
                {/* Drawer Header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-bold text-white">Menu</span>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a 
                      key={item.label} 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-brand-text hover:text-brand-orange hover:bg-white/5 px-4 py-3 rounded-lg transition-all"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                {/* Drawer Footer */}
                <div className="mt-auto pt-6 border-t border-white/10">
                  <Button href="#contato" onClick={() => setIsOpen(false)} className="w-full justify-center">
                    Falar com Especialista
                  </Button>
                  <p className="text-center text-xs text-gray-500 mt-4">
                    Grupo MT - Logística & Tecnologia
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};