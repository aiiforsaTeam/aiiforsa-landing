'use client';

import { Check, Star } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Pricing() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-orange-50 via-amber-50/50 to-white dark:from-neutral-950 dark:via-orange-950/10 dark:to-neutral-950" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-base font-semibold leading-7 text-orange-600 dark:text-orange-400 tracking-wide uppercase">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
            {t.pricing.subtitle}
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            {t.pricing.description}
          </p>
        </div>

        {/* Job Seekers Pricing */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
            {t.pricing.userTitle}
          </h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                name: t.pricing.plans.free.name,
                price: '$0',
                period: t.pricing.forever,
                description: t.pricing.plans.free.description,
                features: t.pricing.plans.free.features,
                cta: t.pricing.cta,
                href: '/signup',
                featured: false
              },
              {
                name: t.pricing.plans.pro.name,
                price: '$19',
                period: t.pricing.perMonth,
                description: t.pricing.plans.pro.description,
                features: t.pricing.plans.pro.features,
                cta: t.pricing.plans.pro.cta,
                href: '/signup?plan=pro',
                featured: true
              },
              {
                name: t.pricing.plans.business.name,
                price: '$49',
                period: t.pricing.perMonth,
                description: t.pricing.plans.business.description,
                features: t.pricing.plans.business.features,
                cta: t.pricing.plans.business.cta,
                href: '/contact',
                featured: false
              }
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl ${
                  plan.featured
                    ? 'border-2 border-orange-500 dark:border-orange-600 shadow-2xl shadow-orange-500/20 scale-105 ring-4 ring-orange-100 dark:ring-orange-900/30'
                    : 'border border-neutral-200 dark:border-neutral-800'
                } bg-white dark:bg-neutral-900 p-10 transition-all hover:shadow-2xl hover:-translate-y-1 duration-300`}
              >
                {plan.featured && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 px-5 py-1.5 text-sm font-bold text-white shadow-lg">
                      <Star className="h-4 w-4 fill-current" />
                      {t.pricing.mostPopular}
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {plan.name}
                  </h4>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {plan.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-x-2">
                    <span className="text-5xl font-bold tracking-tight bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="mb-10 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400 mt-0.5" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block w-full rounded-full px-8 py-3.5 text-center text-sm font-bold transition-all ${
                    plan.featured
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Business Pricing */}
        <div>
          <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
            {t.pricing.businessTitle}
          </h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                name: t.pricing.plans.businessPlans.starter.name,
                price: '$99',
                period: t.pricing.perMonth,
                description: t.pricing.plans.businessPlans.starter.description,
                features: t.pricing.plans.businessPlans.starter.features,
                cta: t.pricing.plans.businessPlans.starter.cta,
                href: '/business/signup',
                featured: false
              },
              {
                name: t.pricing.plans.businessPlans.growth.name,
                price: '$299',
                period: t.pricing.perMonth,
                description: t.pricing.plans.businessPlans.growth.description,
                features: t.pricing.plans.businessPlans.growth.features,
                cta: t.pricing.plans.businessPlans.growth.cta,
                href: '/business/signup?plan=growth',
                featured: true
              },
              {
                name: t.pricing.plans.businessPlans.enterprise.name,
                price: 'Custom',
                period: t.pricing.contactUs,
                description: t.pricing.plans.businessPlans.enterprise.description,
                features: t.pricing.plans.businessPlans.enterprise.features,
                cta: t.pricing.plans.businessPlans.enterprise.cta,
                href: '/business/contact',
                featured: false
              }
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl ${
                  plan.featured
                    ? 'border-2 border-orange-500 dark:border-orange-600 shadow-2xl shadow-orange-500/20 scale-105 ring-4 ring-orange-100 dark:ring-orange-900/30'
                    : 'border border-neutral-200 dark:border-neutral-800'
                } bg-white dark:bg-neutral-900 p-10 transition-all hover:shadow-2xl hover:-translate-y-1 duration-300`}
              >
                {plan.featured && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 px-5 py-1.5 text-sm font-bold text-white shadow-lg">
                      <Star className="h-4 w-4 fill-current" />
                      {t.pricing.mostPopular}
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {plan.name}
                  </h4>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {plan.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-x-2">
                    <span className="text-5xl font-bold tracking-tight bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="mb-10 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400 mt-0.5" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block w-full rounded-full px-8 py-3.5 text-center text-sm font-bold transition-all ${
                    plan.featured
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
