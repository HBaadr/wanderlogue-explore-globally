import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/contexts/TranslationContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Language } from '@/types/travel';
import { useAnalytics } from '@/contexts/AnalyticsContext';

const languages = [
  { code: 'en' as Language, name: 'language_english', flag: '🇺🇸' },
  { code: 'fr' as Language, name: 'language_french', flag: '🇫🇷' },
  { code: 'ar' as Language, name: 'language_arabic', flag: '🇸🇦' },
  { code: 'es' as Language, name: 'language_spanish', flag: '🇪🇸' },
  { code: 'zh' as Language, name: 'language_chinese', flag: '🇨🇳' },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const currentLanguage = languages.find(lang => lang.code === language);
  const { trackLanguageChange } = useAnalytics();

  const handleLanguageChange = (newLanguage: string) => {
  const previousLanguage = currentLanguage; // your current language state
  
  // Your existing language change logic
  setCurrentLanguage(newLanguage);
  
  // Track the language change
  trackLanguageChange(newLanguage, previousLanguage);
};

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden md:inline">{currentLanguage?.flag} {t(currentLanguage?.name || 'language_english')}</span>
          <span className="md:hidden">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="gap-2"
          >
            <span>{lang.flag}</span>
            <span>{t(lang.name)}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
