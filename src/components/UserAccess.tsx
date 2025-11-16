'use client';

import { ArrowRight, CheckCircle2, User } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function UserAccess() {
  const { t, isRTL } = useLanguage();

  const userFeatures = [
    t.userAccess.benefits.personalizedJobs,
    t.userAccess.benefits.instantFeedback,
    t.userAccess.benefits.careerGuidance,
    t.userAccess.benefits.applicationTracking,
    t.userAccess.benefits.skillsGap,
    t.userAccess.benefits.interviewPrep,
    t.userAccess.benefits.realTimeAlerts,
    t.userAccess.benefits.careerTracking
  ];

  return (
    <section id="user-access" className="py-24 sm:py-32 bg-gradient-to-br from-orange-50 via-amber-50/50 to-white dark:from-neutral-950 dark:via-orange-950/10 dark:to-neutral-950" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950/50 dark:to-amber-950/50 border border-orange-200 dark:border-orange-800/30 px-5 py-2.5 text-sm font-semibold text-orange-700 dark:text-orange-300 mb-6">
              <User className="h-4 w-4" />
              <span>{t.userAccess.title}</span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
              {t.userAccess.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              {t.userAccess.subtitle}
            </p>

            <ul className="mt-8 space-y-4">
              {userFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-orange-600 dark:text-orange-400 mt-0.5" />
                  <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 px-10 py-4 text-base font-semibold text-white shadow-xl shadow-orange-500/25 transition-all hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105 active:scale-95"
              >
                {t.userAccess.cta}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-orange-600 dark:border-orange-400 bg-transparent px-10 py-4 text-base font-semibold text-orange-600 dark:text-orange-400 transition-all hover:bg-orange-50 dark:hover:bg-orange-950/30 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-primary-300 dark:from-primary-600 dark:to-primary-500 p-1 shadow-2xl">
              <div className="h-full w-full rounded-2xl bg-white dark:bg-gray-900 p-8">
                <div className="space-y-6">
                  {/* Mock CV Score Card */}
                  <div className="rounded-lg border-2 border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t.userAccess.benefits.cvScore}</h3>
                      <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">92/100</span>
                    </div>
                    <div className="mt-4 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div className="h-full w-[92%] rounded-full bg-primary-600 dark:bg-primary-400"></div>
                    </div>
                  </div>

                  {/* Mock Job Matches */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                      Top Matches
                    </h3>
                    {[
                      { title: 'Senior Software Engineer', match: '95%' },
                      { title: 'Full Stack Developer', match: '89%' },
                      { title: 'Tech Lead', match: '87%' }
                    ].map((job, index) => (
                      <div key={index} className="flex items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-800 p-4">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{job.title}</span>
                        <span className="text-sm font-bold text-green-600 dark:text-green-400">{job.match}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
