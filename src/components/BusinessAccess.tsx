'use client';

import { ArrowRight, Briefcase, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BusinessAccess() {
  const { t, isRTL } = useLanguage();

  const businessFeatures = [
    t.businessAccess.benefits.aiScreening,
    t.businessAccess.benefits.talentPool,
    t.businessAccess.benefits.hiring,
    t.businessAccess.benefits.analytics,
    t.businessAccess.benefits.integration,
    t.businessAccess.benefits.teamCollaboration,
    t.businessAccess.benefits.customWorkflows,
    t.businessAccess.benefits.cvParsing
  ];

  return (
    <section id="business-access" className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-950" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Visual Element */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-orange-400 via-orange-500 to-amber-500 dark:from-orange-600 dark:to-amber-600 p-1 shadow-2xl shadow-orange-500/25">
              <div className="h-full w-full rounded-3xl bg-white dark:bg-neutral-900 p-8">
                <div className="space-y-6">
                  {/* Mock Hiring Pipeline */}
                  <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 p-6">
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Hiring Pipeline</h3>
                    <div className="space-y-3">
                      {[
                        { stage: t.businessAccess.pipeline.applied, count: 245 },
                        { stage: t.businessAccess.pipeline.screening, count: 87 },
                        { stage: t.businessAccess.pipeline.interview, count: 23 },
                        { stage: t.businessAccess.pipeline.offer, count: 5 }
                      ].map((stage, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm text-neutral-700 dark:text-neutral-300">{stage.stage}</span>
                          <div className="flex items-center gap-3">
                            <div className="h-2 w-24 rounded-full bg-neutral-200 dark:bg-neutral-700">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-orange-600 to-amber-600"
                                style={{ width: `${(stage.count / 245) * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-bold text-neutral-900 dark:text-white w-8">{stage.count}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mock Candidate Cards */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">
                      Top Candidates
                    </h3>
                    {[
                      { name: 'Alex Johnson', score: '98%', badge: 'Perfect Match' },
                      { name: 'Sarah Williams', score: '94%', badge: 'High Potential' },
                      { name: 'Michael Chen', score: '91%', badge: 'Strong Fit' }
                    ].map((candidate, index) => (
                      <div key={index} className="rounded-xl bg-neutral-100 dark:bg-neutral-800 p-4 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-bold text-neutral-900 dark:text-white">{candidate.name}</p>
                            <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">{candidate.badge}</p>
                          </div>
                          <span className="text-lg font-bold text-green-600 dark:text-green-400">{candidate.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-950/50 dark:to-amber-950/50 border border-orange-200 dark:border-orange-800/30 px-5 py-2.5 text-sm font-semibold text-orange-700 dark:text-orange-300 mb-6">
              <Briefcase className="h-4 w-4" />
              <span>{t.businessAccess.title}</span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
              {t.businessAccess.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              {t.businessAccess.subtitle}
            </p>

            <ul className="mt-8 space-y-4">
              {businessFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-orange-600 dark:text-orange-400 mt-0.5" />
                  <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/business/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 px-10 py-4 text-base font-semibold text-white shadow-xl shadow-orange-500/25 transition-all hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105 active:scale-95"
              >
                {t.businessAccess.cta}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/business/demo"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-orange-600 dark:border-orange-400 bg-transparent px-10 py-4 text-base font-semibold text-orange-600 dark:text-orange-400 transition-all hover:bg-orange-50 dark:hover:bg-orange-950/30 hover:scale-105"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
