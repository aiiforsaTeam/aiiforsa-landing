'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CTA() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 dark:from-orange-700 dark:via-orange-600 dark:to-amber-700 py-24 sm:py-32" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ffffff15,transparent_50%)]" />
      
      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-300/20 rounded-full filter blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
            {t.finalCta.title}
          </h2>
          <p className="mt-8 text-xl leading-8 text-orange-50">
            {t.finalCta.subtitle}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-base font-bold text-orange-600 shadow-2xl transition-all hover:bg-orange-50 hover:scale-105 active:scale-95"
            >
              {t.finalCta.primaryCta}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-10 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              {t.finalCta.secondaryCta}
            </Link>
          </div>

          <p className="mt-8 text-sm font-medium text-orange-100">
            {t.pricingCta.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
