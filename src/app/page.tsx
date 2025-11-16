'use client';

import Hero from '@/components/Hero';
import Features from '@/components/Features';
import UserAccess from '@/components/UserAccess';
import BusinessAccess from '@/components/BusinessAccess';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
          <Header />
        
        <main className="">
          <Hero />
          
          <section id="features">
            <Features />
          </section>
          
          <section id="user-access">
            <UserAccess />
          </section>
          
          <section id="business-access">
            <BusinessAccess />
          </section>
          
          <section id="pricing">
            <Pricing />
          </section>
          
          <section id="testimonials">
            <Testimonials />
          </section>
          
          <ContactForm />
          
          <CTA />
        </main>
        
        <Footer />
      </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
