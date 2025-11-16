'use client';

import { Brain, FileText, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const features = [
  {
    icon: Brain,
    key: 'aiMatching' as const,
    color: 'text-primary-600 dark:text-primary-400',
    bgColor: 'bg-primary-100 dark:bg-primary-900/30'
  },
  {
    icon: FileText,
    key: 'cvOptimization' as const,
    color: 'text-primary-600 dark:text-primary-400',
    bgColor: 'bg-primary-100 dark:bg-primary-900/30'
  },
  {
    icon: Target,
    key: 'careerAdvice' as const,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/30'
  },
  {
    icon: TrendingUp,
    key: 'jobAlerts' as const,
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30'
  },
  {
    icon: Users,
    key: 'analytics' as const,
    color: 'text-cyan-600 dark:text-cyan-400',
    bgColor: 'bg-cyan-100 dark:bg-cyan-900/30'
  },
  {
    icon: Zap,
    key: 'networking' as const,
    color: 'text-pink-600 dark:text-pink-400',
    bgColor: 'bg-pink-100 dark:bg-pink-900/30'
  }
];

export default function Features() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-950" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-600 dark:text-orange-400 tracking-wide uppercase">
            {t.features.title}
          </h2>
          <p className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
            {t.features.subtitle}
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            {t.features.description}
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.key}
                  className="group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-300 dark:hover:border-orange-700 hover:-translate-y-1"
                >
                  <div className={`inline-flex rounded-xl ${feature.bgColor} p-3.5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-neutral-900 dark:text-white">
                    {t.features.items[feature.key].title}
                  </h3>
                  <p className="mt-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {t.features.items[feature.key].description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
