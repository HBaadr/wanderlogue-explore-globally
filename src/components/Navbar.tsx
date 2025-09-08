import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin } from 'lucide-react'; // Retire Compass import
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/contexts/TranslationContext';

export function Navbar() {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const location = useLocation();

  const getNavigationLink = (path: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('language', language);
    return `${path}?${searchParams.toString()}`;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to={getNavigationLink('/')} className="flex items-center gap-2 font-bold text-xl">
            <img 
                src="/travel-logo.png"
                alt={t('logo_alt')}
                className="h-10 w-10 object-contain"
              />
            <span className="travel-heading text-xl">Wanderlogue</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              to={getNavigationLink('/blog')}
              className="flex items-center gap-2 text-sm font-medium hover:text-primary smooth-transition"
            >
              <span className="hidden md:inline">{t('blog')}</span>
            </Link>
            <Link 
              to={getNavigationLink('/about')}
              className="flex items-center gap-2 text-sm font-medium hover:text-primary smooth-transition"
            >
              <span className="hidden md:inline">{t('about')}</span>
            </Link>
            <Link 
              to={getNavigationLink('/')}
              className="flex items-center gap-2 text-sm font-medium hover:text-primary smooth-transition"
            >
              <MapPin className="h-4 w-4" />
              <span className="hidden md:inline">{t('explore_world')}</span>
            </Link>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}
