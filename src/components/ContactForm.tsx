'use client';

import { Send, Mail, User, Building2, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactForm() {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be implemented later
    console.log('Form submitted:', formData);
    alert(t.contact.successMessage);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30 dark:from-neutral-950 dark:via-orange-950/10 dark:to-neutral-950" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-orange-600 dark:text-orange-400 tracking-wide uppercase">
            {t.contact.subtitle}
          </h2>
          <p className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
            {t.contact.title}
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            {t.contact.description}
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <form onSubmit={handleSubmit} className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                  <User className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                  <Mail className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                />
              </div>
            </div>

            {/* Company Input */}
            <div className="mt-6">
              <label htmlFor="company" className="flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                <Building2 className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                {t.contact.form.company}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={t.contact.form.companyPlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
            </div>

            {/* Message Input */}
            <div className="mt-6">
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                <MessageSquare className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t.contact.form.messagePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-orange-500/25 transition-all hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105 active:scale-95"
              >
                {t.contact.form.submit}
                <Send className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
