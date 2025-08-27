import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Compass } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navbar() {
  const { language } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to={`/${language}`} className="flex items-center gap-2 font-bold text-xl">
            <div className="p-2 rounded-lg travel-gradient">
              <Compass className="h-6 w-6 text-white" />
            </div>
            <span className="travel-heading text-xl">Wanderlogue</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              to={`/${language}`}
              className="flex items-center gap-2 text-sm font-medium hover:text-primary smooth-transition"
            >
              <MapPin className="h-4 w-4" />
              <span className="hidden md:inline">Explore World</span>
            </Link>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}