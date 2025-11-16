'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t, isRTL } = useLanguage();
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-white dark:from-neutral-950 dark:via-orange-950/20 dark:to-neutral-950 py-24 sm:py-32" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#fed7aa20,transparent_50%),radial-gradient(circle_at_bottom_left,#fb923c15,transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731608_1px,transparent_1px),linear-gradient(to_bottom,#f9731608_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-40 -right-20 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950/50 dark:to-amber-950/50 border border-orange-200 dark:border-orange-800/30 px-5 py-2.5 text-sm font-semibold text-orange-700 dark:text-orange-300 shadow-lg backdrop-blur-sm">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>{t.hero.badge}</span>
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl lg:text-7xl leading-tight">
            {t.hero.title.split(' AI')[0]}{' '}
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent animate-gradient">
              AI
            </span>
          </h1>
          
          <p className="mt-8 text-xl leading-8 text-neutral-600 dark:text-neutral-300 sm:text-2xl max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#user-access"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-10 py-4 text-base font-semibold text-white shadow-xl shadow-orange-500/25 transition-all hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105 active:scale-95"
            >
              {t.hero.primaryCta}
              <ArrowRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
            
            <Link
              href="#business-access"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-10 py-4 text-base font-semibold text-neutral-900 dark:text-white transition-all hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/30 hover:scale-105 active:scale-95"
            >
              {t.hero.secondaryCta}
              <ArrowRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mx-auto mt-24 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="group text-center p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all hover:shadow-xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">👥</div>
              <div className="mt-3 text-base font-medium text-neutral-600 dark:text-neutral-400">{t.hero.stats.users}</div>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all hover:shadow-xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">🚀</div>
              <div className="mt-3 text-base font-medium text-neutral-600 dark:text-neutral-400">{t.hero.stats.matches}</div>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all hover:shadow-xl">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">🛠️</div>
              <div className="mt-3 text-base font-medium text-neutral-600 dark:text-neutral-400">{t.hero.stats.satisfaction}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
