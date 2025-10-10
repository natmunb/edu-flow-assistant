import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export type Language = 'en' | 'es';

interface LanguageSwitcherProps {
  onLanguageChange?: (lang: Language) => void;
}

export const LanguageSwitcher = ({ onLanguageChange }: LanguageSwitcherProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    const newLang: Language = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);
    onLanguageChange?.(newLang);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      {language.toUpperCase()}
    </Button>
  );
};
