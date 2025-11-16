import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';
import arTranslations from './locales/ar.json';

export const languages = {
  en: { name: 'English', flag: '🇺🇸' },
  fr: { name: 'Français', flag: '🇫🇷' },
  ar: { name: 'العربية', flag: '🇸🇦' }
} as const;

export type Language = keyof typeof languages;

export const translations = {
  en: enTranslations,
  fr: frTranslations,
  ar: arTranslations
} as const;
