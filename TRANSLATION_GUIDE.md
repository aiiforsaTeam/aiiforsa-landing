# Translation System - Implementation Guide

## ✅ **COMPLETED**

### What's Working:
1. **LanguageContext Provider** - Manages global language state
2. **localStorage Persistence** - Language choice saved automatically
3. **RTL Support** - Proper right-to-left for Arabic
4. **Header Component** - Fully translated and working
5. **Hero Component** - Fully translated and working

### How It Works:

The language system is centralized using React Context. When a user changes the language in the Header:

```typescript
// In Header.tsx
const changeLang = (lang: Language) => {
  setLanguage(lang); // This updates the context
  setShowLangMenu(false);
};
```

This automatically:
- Updates `currentLang` in the context
- Saves to `localStorage.setItem('language', lang)`
- Updates HTML attributes (`dir="rtl"` for Arabic, `lang="en"/"fr"/"ar"`)
- Re-renders ALL components wrapped in `<LanguageProvider>`

## 📝 **HOW TO ADD TRANSLATIONS TO ANY COMPONENT**

### Step 1: Make Component Client-Side
```tsx
'use client';  // Add this at the top
```

### Step 2: Import useLanguage Hook
```tsx
import { useLanguage } from '@/contexts/LanguageContext';
```

### Step 3: Use in Component
```tsx
export default function MyComponent() {
  const { t, isRTL } = useLanguage();
  
  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <h2>{t.features.title}</h2>
      <p>{t.features.subtitle}</p>
    </div>
  );
}
```

## 🔧 **EXAMPLE: Update Features Component**

### Before (hardcoded):
```tsx
export default function Features() {
  return (
    <h2>Powerful Features</h2>
    <p>Everything you need to succeed</p>
  );
}
```

### After (translated):
```tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Features() {
  const { t, isRTL } = useLanguage();
  
  return (
    <section dir={isRTL ? 'rtl' : 'ltr'}>
      <h2>{t.features.title}</h2>
      <p>{t.features.subtitle}</p>
      {/* Use t.features.items.aiMatching.title, etc. */}
    </section>
  );
}
```

## 📋 **TRANSLATION KEYS AVAILABLE**

All translations are in `src/lib/i18n.ts`:

```typescript
t.nav.features          // "Features" | "Fonctionnalités" | "الميزات"
t.hero.title            // Full hero title
t.hero.subtitle         // Full hero subtitle
t.hero.primaryCta       // "Get Started Free" etc.
t.hero.stats.users      // "50K+ Active Users" etc.
t.features.title        // "Powerful Features for Everyone"
t.features.items.aiMatching.title
t.features.items.aiMatching.description
t.userAccess.title      // "For Job Seekers"
t.userAccess.benefits.cvScore
t.businessAccess.title  // "For Businesses"
t.pricing.title         // "Choose Your Plan"
t.pricing.plans.free.name
t.testimonials.title    // "What Our Users Say"
t.finalCta.title        // "Ready to Transform Your Career?"
t.footer.tagline        // "Empowering careers with AI"
t.footer.product.title
t.footer.newsletter.placeholder
```

## 🔄 **REMAINING COMPONENTS TO UPDATE**

### Priority List:
1. **Features.tsx** - Add `'use client'`, import useLanguage, use `t.features.*`
2. **UserAccess.tsx** - Use `t.userAccess.*`
3. **BusinessAccess.tsx** - Use `t.businessAccess.*`
4. **Pricing.tsx** - Use `t.pricing.*`
5. **Testimonials.tsx** - Use `t.testimonials.*`
6. **CTA.tsx** - Use `t.finalCta.*`
7. **Footer.tsx** - Use `t.footer.*`

## ✨ **QUICK TEMPLATE**

Copy-paste this into any component:

```tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
// ... other imports

export default function ComponentName() {
  const { t, isRTL, currentLang } = useLanguage();
  
  return (
    <section dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Replace hardcoded strings with t.section.key */}
      <h2>{t.section.title}</h2>
      <p>{t.section.subtitle}</p>
    </section>
  );
}
```

## 🚀 **TESTING**

1. Run the dev server: `npm run dev`
2. Open `http://localhost:3000`
3. Click the globe icon (🌐) in header
4. Switch between English, French, Arabic
5. Refresh page - language persists!
6. Check Arabic - page flips to RTL

## 🎯 **KEY BENEFITS**

✅ **Single Source of Truth** - All translations in `i18n.ts`
✅ **Automatic Persistence** - localStorage handles saves
✅ **No Page Refresh** - Instant language switching
✅ **RTL Support** - Arabic properly right-to-left
✅ **Type Safety** - TypeScript ensures correct keys
✅ **Performance** - Only re-renders when language changes

## 📊 **CURRENT STATUS**

| Component | Status | Notes |
|-----------|--------|-------|
| Header | ✅ Done | Fully translated |
| Hero | ✅ Done | Fully translated |
| Features | ⏳ Pending | Use `t.features.*` |
| UserAccess | ⏳ Pending | Use `t.userAccess.*` |
| BusinessAccess | ⏳ Pending | Use `t.businessAccess.*` |
| Pricing | ⏳ Pending | Use `t.pricing.*` |
| Testimonials | ⏳ Pending | Use `t.testimonials.*` |
| CTA | ⏳ Pending | Use `t.finalCta.*` |
| Footer | ⏳ Pending | Use `t.footer.*` |

## 🛠️ **ADD MORE LANGUAGES**

To add Spanish:

1. Edit `src/lib/i18n.ts`:
```typescript
export const languages = {
  en: { name: 'English', flag: '🇺🇸' },
  fr: { name: 'Français', flag: '🇫🇷' },
  ar: { name: 'العربية', flag: '🇸🇦' },
  es: { name: 'Español', flag: '🇪🇸' }  // Add this
} as const;

export const translations = {
  en: { /* ... */ },
  fr: { /* ... */ },
  ar: { /* ... */ },
  es: {  // Add complete Spanish translations
    nav: { features: 'Características', /* ... */ },
    hero: { title: 'Transforma Tu Carrera con IA', /* ... */ },
    // ... rest of translations
  }
};
```

That's it! The header will automatically show Spanish in the dropdown.

## 💡 **TIPS**

- Always use `t.section.key` instead of hardcoded strings
- Add `dir={isRTL ? 'rtl' : 'ltr'}` to section containers
- Rotate arrows for RTL: `className={isRTL ? 'rotate-180' : ''}`
- Test all 3 languages before deploying
- Keep translation keys organized by component

---

**Next Step:** Update remaining components (Features, UserAccess, etc.) using the pattern shown above.
