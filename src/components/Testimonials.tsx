'use client';

import { Quote, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Testimonials() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-neutral-950" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-base font-semibold leading-7 text-orange-600 dark:text-orange-400 tracking-wide uppercase">
            {t.testimonials.title}
          </h2>
          <p className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
            {t.testimonials.subtitle}
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            {t.testimonials.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 transition-all hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-300 dark:hover:border-orange-700 hover:-translate-y-1 duration-300"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-orange-100 dark:text-orange-950" />

              <div className="relative">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="text-4xl">👤</div>
                  <div>
                    <p className="font-bold text-neutral-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 border-t border-gray-200 dark:border-gray-800 pt-12">
          <p className="text-center text-sm font-semibold text-gray-600 dark:text-gray-400 mb-8">
            {t.testimonials.trustBadges.users} • {t.testimonials.trustBadges.companies} • {t.testimonials.trustBadges.rating}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix'].map((company) => (
              <div
                key={company}
                className="text-2xl font-bold text-gray-400 dark:text-gray-600"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
