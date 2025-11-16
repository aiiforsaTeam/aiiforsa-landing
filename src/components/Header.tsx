'use client';

import { Menu, X, Globe, ChevronDown, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Language, languages } from '@/lib/i18n';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
  const { currentLang, setLanguage, t, isRTL } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const themeContext = mounted ? useTheme() : { theme: 'light', toggleTheme: () => {} };
  const { theme, toggleTheme } = themeContext;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const navigation = [
    { name: t.nav.features, href: '#features' },
    { name: t.nav.forUsers, href: '#user-access' },
    { name: t.nav.forBusiness, href: '#business-access' },
    { name: t.nav.pricing, href: '#pricing' },
    { name: t.nav.testimonials, href: '#testimonials' },
    { name: t.nav.contact, href: '#contact' }
  ];

  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        setShowLangMenu(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const changeLang = (lang: Language) => {
    setLanguage(lang);
    setShowLangMenu(false);
  };

  // Smooth scroll for anchor links
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-white text-center py-2.5 text-sm relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] animate-shimmer" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center gap-4">
            <p className={isRTL ? 'text-right' : ''}>
              🚀 <strong className="font-bold">{t.announcement.text.split(':')[0]}:</strong> {t.announcement.text.split(':')[1]}
              <Link href="/beta" className="ml-2 underline hover:no-underline font-semibold">
                {t.announcement.cta} →
              </Link>
            </p>
            <button
              onClick={() => setShowAnnouncement(false)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Dismiss announcement"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <header className={`fixed z-50 w-full transition-all duration-300 ${
        showAnnouncement ? 'top-8' : 'top-0'
      }`}>
        <nav className={`mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 rounded-xl transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''} ${
          isScrolled
            ? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50'
            : 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg'
        }`}>
          {/* Logo */}
          <div className={`flex lg:flex-1 ${isRTL ? 'justify-end' : ''}`}>
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              AiiForsa
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className={`hidden lg:flex lg:gap-x-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white transition-all duration-200 hover:text-orange-600 dark:hover:text-orange-400 hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 dark:bg-orange-400 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop actions */}
          <div className={`hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center p-2.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
            )}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Select language"
              >
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium">{languages[currentLang].flag}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {showLangMenu && (
                <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-2 w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-700 py-1 z-50`}>
                  {(Object.keys(languages) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => changeLang(lang)}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors ${
                        currentLang === lang ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400' : 'text-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      <span className="text-xl">{languages[lang].flag}</span>
                      <span>{languages[lang].name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Get Started Button */}
            <Link
              href="https://app.aiiforsa.com/dashboard"
              className="rounded-full bg-gradient-to-r from-orange-600 to-amber-600 px-6 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              {t.cta.getStarted}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
            )}
            
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <div className={`fixed inset-y-0 ${isRTL ? 'left-0' : 'right-0'} z-50 w-full overflow-y-auto bg-white dark:bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10 transform transition-transform duration-300 ease-in-out`}>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} justify-between`}>
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  AiiForsa
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-neutral-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 w-full transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                  <div className="py-6 space-y-4">
                    {/* Mobile Language Selection */}
                    <div className="space-y-2">
                      <span className={`block text-sm font-semibold text-neutral-600 dark:text-neutral-400 ${isRTL ? 'text-right' : ''}`}>
                        {isRTL ? 'اللغة' : currentLang === 'fr' ? 'Langue' : 'Language'}
                      </span>
                      {(Object.keys(languages) as Language[]).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => changeLang(lang)}
                          className={`w-full flex items-center ${isRTL ? 'flex-row-reverse justify-end' : ''} gap-3 px-3 py-2 rounded-lg transition-colors ${
                            currentLang === lang
                              ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
                              : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                          }`}
                        >
                          <span className="text-xl">{languages[lang].flag}</span>
                          <span className="font-medium">{languages[lang].name}</span>
                        </button>
                      ))}
                    </div>

                    <Link
                      href="https://app.aiiforsa.com/dashboard"
                      className="block rounded-full bg-gradient-to-r from-orange-600 to-amber-600 px-6 py-3 text-center text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.cta.getStarted}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
