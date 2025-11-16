'use client';

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

import { useLanguage } from '@/contexts/LanguageContext';

const social = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/aiiforsa' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/aiiforsa' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/aiiforsa' }
];

export default function Footer() {
  const { t } = useLanguage();

  const navigation = {
    product: [
      { name: t.footer.product.features, href: '#features' },
      { name: t.footer.product.forJobSeekers, href: '#user-access' },
      { name: t.footer.product.forBusinesses, href: '#business-access' },
      { name: t.footer.product.pricing, href: '#pricing' },
      { name: t.footer.product.testimonials, href: '#testimonials' }
    ],
    company: [
      { name: t.footer.company.about, href: '/about' },
      { name: t.footer.company.blog, href: '/blog' },
      { name: t.footer.company.careers, href: '/careers' },
      { name: t.footer.company.press, href: '/press' },
      { name: t.footer.company.partners, href: '/partners' }
    ],
    resources: [
      { name: t.footer.resources.documentation, href: '/docs' },
      { name: t.footer.resources.helpCenter, href: '/help' },
      { name: t.footer.resources.apiReference, href: '/api' },
      { name: t.footer.resources.community, href: '/community' },
      { name: t.footer.resources.contactUs, href: '/contact' }
    ],
    legal: [
      { name: t.footer.legal.privacyPolicy, href: '/privacy' },
      { name: t.footer.legal.termsOfService, href: '/terms' },
      { name: t.footer.legal.cookiePolicy, href: '/cookies' },
      { name: t.footer.legal.gdpr, href: '/gdpr' }
    ]
  };
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white border-t border-neutral-800 dark:border-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              AiiForsa
            </Link>
            <p className="mt-4 text-sm text-neutral-400 max-w-md leading-relaxed">
              {t.footer.tagline}
            </p>
            
            <div className="mt-6 flex gap-4">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="rounded-lg bg-neutral-800 dark:bg-neutral-900 p-2.5 text-neutral-400 transition-all hover:bg-orange-600 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
            
            <div className="mt-8">
              <h3 className="text-sm font-bold text-white">{t.footer.newsletter.title}</h3>
              <form className="mt-3 flex gap-2">
                <input
                  type="email"
                  placeholder={t.footer.newsletter.placeholder}
                  className="flex-1 rounded-lg bg-neutral-800 dark:bg-neutral-900 border border-neutral-700 dark:border-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-orange-500/30"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4">{t.footer.product.title}</h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-orange-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">{t.footer.company.title}</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-orange-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">{t.footer.resources.title}</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-orange-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 dark:border-neutral-900 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} AiiForsa. {t.footer.copyright}
            </p>
            
            <ul className="flex flex-wrap gap-6">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-orange-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
