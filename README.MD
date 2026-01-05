# Hajma fólia - LLumar® Autófóliázás

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_SITE_ID/deploy-status)](https://app.netlify.com/sites/hajmafolia/deploys)

Egy modern, reszponzív weboldal a Hajma fólia autófóliázási szolgáltatások számára. A weboldal React, TypeScript és Tailwind CSS technológiákon alapul, teljes SSR támogatással.

## ⚠️ Fontos Megjegyzések (Privát Projekt)

- **Ez egy privát projekt** - kizárólag a Hajma fólia cég számára
- **Bizalmas információk** - ügyféladatok, árak, kapcsolati adatok kezelése
- **Adatvédelem** - minden személyes adat kezelése GDPR kompatibilis módon
- **Biztonság** - rendszeres biztonsági auditok és frissítések szükségesek

### 🔧 Potenciális Optimalizációk

#### Performance
- **Lazy Loading**: Nagy képek lazy loading implementálása
- **Bundle Size**: Unused dependencies eltávolítása
- **Image Optimization**: WebP formátum használata, responsive images
- **Code Splitting**: Route-based code splitting

#### SEO & Accessibility
- **Meta Tags**: Dinamikus meta tagok minden oldalhoz
- **Structured Data**: JSON-LD séma autószerelő szolgáltatásokhoz
- **ARIA Labels**: Teljes ARIA compliance ellenőrzés
- **Focus Management**: Keyboard navigation javítása

#### Development Experience
- **Error Boundaries**: React error boundary implementáció
- **Loading States**: Skeleton loaders hozzáadása
- **Type Safety**: Strict TypeScript konfiguráció
- **Testing**: Unit és E2E tesztek hozzáadása

## 🚀 Technológiák

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Radix UI komponensek
- **SSR**: Express.js + Vite SSR
- **Routing**: React Router v6
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Theme**: next-themes
- **Forms**: React Hook Form + Zod
- **Animations**: Tailwind CSS animations
- **Build**: Vite (SPA + SSR)
- **Hosting**: Netlify

## 📦 Telepítés és Futtatás

### Előfeltételek

- Node.js 18+
- pnpm 8+ (ajánlott) vagy npm
- Git

### Quick Start

```bash
# Repository klónozása
git clone https://github.com/BPusok/hajma02.git
cd hajma02

# Függőségek telepítése
pnpm install

# Fejlesztői szerver indítása
pnpm dev
```

A weboldal elérhető lesz: `http://localhost:8080`

### Production Build

```bash
# Teljes build (client + server)
pnpm build

# Lokális tesztelés
pnpm start
```

## 🏗️ Projekt Struktúra

```
hajma02/
├── client/                    # React SPA
│   ├── components/
│   │   ├── ui/               # shadcn/ui komponensek
│   │   ├── Header.tsx        # Navigáció és theme selector
│   │   └── Footer.tsx        # Lábléc
│   ├── pages/
│   │   ├── Index.tsx         # Főoldal (összes szekció)
│   │   └── NotFound.tsx      # 404 oldal
│   ├── hooks/                # Custom React hookok
│   ├── lib/
│   │   ├── utils.ts          # Segédfüggvények
│   │   └── utils.spec.ts     # Unit tesztek
│   ├── global.css           # Global styles és CSS variables
│   └── App.tsx              # Root komponens
├── server/                   # Express SSR szerver
│   ├── index.ts             # Szerver setup
│   ├── node-build.ts        # SSR entry point
│   └── routes/
│       └── demo.ts          # API routes példa
├── shared/                   # Megosztott kód
│   ├── config.ts            # Alkalmazás konfiguráció
│   └── api.ts               # API típusok
├── public/                   # Statikus fájlok
│   ├── cropped-hajmafolia-logo-12_white.png
│   └── favicon.ico
├── dist/                    # Build output
│   ├── spa/                 # SPA build
│   └── server/              # SSR build
└── package.json
```

## 🔧 Konfiguráció

### Környezeti Változók

Hozz létre egy `.env` fájlt a gyökérkönyvtárban:

```env
# API konfiguráció
VITE_API_URL=https://api.hajmafolia.hu

# Development
NODE_ENV=development

# Analytics (opcionális)
VITE_GA_ID=G-XXXXXXXXXX

# Email service (kapcsolati űrlap)
VITE_EMAIL_SERVICE_KEY=your_service_key
```

### Design System

A projekt használja a **refined Llumar brand colors**-t:

- **Primary**: Softened red (#D32F2F)
- **Secondary**: Orange (#E65100)
- **Accent**: Yellow (#FFC107)
- **Typography**: Montserrat font family

CSS változók a `client/global.css` fájlban definiáltak.

## 📱 Fejlesztési Ötletek és Roadmap

### Rövid Távú (1-3 hónap)

#### 1. Tartalom Kitöltése
- [ ] **Árak szekció**: Valós árak frissítése `shared/config.ts`-ból
- [ ] **Fólia típusok**: Részletes termékleírások hozzáadása
- [ ] **Galéria**: Valós képek feltöltése és optimalizálása
- [ ] **Kapcsolati űrlap**: Email küldés implementáció

#### 2. SEO Optimalizálás
- [ ] **Meta tags**: Dinamikus title és description minden oldalhoz
- [ ] **Open Graph**: Facebook megosztás optimalizálás
- [ ] **JSON-LD**: Local business séma hozzáadása
- [ ] **Sitemap**: Automatikus sitemap generálás

#### 3. Performance Javítás
- [ ] **Image optimization**: WebP konverzió és lazy loading
- [ ] **Bundle analysis**: Unused code eltávolítása
- [ ] **Caching**: Service worker implementáció
- [ ] **CDN**: Static assets CDN-re helyezése

### Közép Távú (3-6 hónap)

#### 1. Funkcionalitás Bővítés
- [ ] **Online Árajánlatkérés**: Interaktív árajánlat kalkulátor
- [ ] **Időpontfoglalás**: Online booking rendszer
- [ ] **Ügyfél Portál**: Regisztrált ügyfelek számára
- [ ] **Többnyelvű Támogatás**: Magyar + Angol

#### 2. Analytics és Monitoring
- [ ] **Google Analytics**: Esemény tracking implementáció
- [ ] **Error tracking**: Sentry vagy hasonló szolgáltatás
- [ ] **Performance monitoring**: Core Web Vitals követés
- [ ] **User feedback**: Beépített visszajelzés rendszer

#### 3. Mobile App
- [ ] **PWA**: Progressive Web App implementáció
- [ ] **Push notifications**: Szerviz emlékeztetők
- [ ] **Offline mód**: Alapszolgáltatások offline elérhetősége

### Hosszú Távú (6+ hónap)

#### 1. Üzleti Integrációk
- [ ] **CRM Integráció**: Ügyfélmenedzsment rendszer
- [ ] **Foglalási Rendszer**: Automatizált időpontfoglalás
- [ ] **Fizetési Gateway**: Online fizetés implementáció
- [ ] **Inventory Management**: Alkatrész készlet követés

#### 2. AI és Automatizálás
- [ ] **Chatbot**: 24/7 ügyfélszolgálat
- [ ] **Smart Pricing**: Dinamikus árképzés
- [ ] **Predictive Maintenance**: Karbantartási emlékeztetők
- [ ] **Image Recognition**: Kárfelmérés asszisztens

## 🐛 Debug és Hibaelhárítás

### Gyakori Problémák

#### 1. Build Hibák
```bash
# TypeScript hibák ellenőrzése
pnpm typecheck

# Build log részletes megtekintése
pnpm build 2>&1 | tee build.log

# Bundle size analysis
pnpm build && npx vite-bundle-analyzer dist/spa
```

#### 2. SSR Problémák
```bash
# Server-side rendering teszt
curl http://localhost:8080 -H "User-Agent: Mozilla/5.0"

# Hydration mismatch debug
# Ellenőrizd a console.log üzeneteket development-ben
```

#### 3. Theme Problémák
```bash
# Theme persistence teszt
localStorage.setItem('theme', 'dark')
location.reload()

# CSS variables ellenőrzés
# Browser dev tools > Computed > CSS Variables
```

#### 4. Performance Issues
```bash
# Lighthouse audit
npx lighthouse http://localhost:8080

# Bundle analyzer
npx vite-bundle-analyzer dist/spa

# React DevTools Profiler használata
```

### Debug Checklist

- [ ] **Console errors**: Böngésző console tisztítása és újratöltés
- [ ] **Network tab**: Sikertelen requestek ellenőrzése
- [ ] **React DevTools**: Component tree és props vizsgálat
- [ ] **TypeScript**: `pnpm typecheck` futtatása
- [ ] **ESLint**: `pnpm lint` futtatása
- [ ] **Build**: Clean build tesztelése
- [ ] **SSR**: Server és client konzisztencia ellenőrzés

## 🔒 Biztonság és Adatvédelem

### GDPR Compliance
- [ ] **Cookie consent**: Cookie banner implementáció
- [ ] **Privacy policy**: Adatvédelmi nyilatkozat hozzáadása
- [ ] **Data processing**: Személyes adatok kezelése
- [ ] **Contact forms**: Secure form handling

### Security Best Practices
- [ ] **HTTPS**: SSL tanúsítvány telepítése
- [ ] **CSP**: Content Security Policy beállítása
- [ ] **XSS Protection**: Input sanitization
- [ ] **Rate limiting**: API rate limiting
- [ ] **Security headers**: Helmet.js implementáció

## 📊 Monitoring és Analytics

### Essential Metrics
- **Core Web Vitals**: Lighthouse scores követése
- **User behavior**: Page views, bounce rate
- **Conversion tracking**: Contact form submissions
- **Error tracking**: JavaScript errors, failed requests

### Tools és Services
- **Google Analytics**: Web analytics
- **Sentry**: Error tracking
- **Vercel Analytics**: Real-time metrics
- **Google Search Console**: SEO monitoring

## 🚀 Deploy és CI/CD

### Netlify Setup
```yaml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist/spa"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/api/*"
  to = "https://hajmafolia-api.netlify.app/:splat"
  status = 200
```

### Environment Variables
- **Production**: Real API endpoints
- **Staging**: Test environment
- **Development**: Local development

## 🤝 Fejlesztési Workflow

### Git Strategy
```bash
# Feature branch workflow
git checkout -b feature/new-section
git commit -m "feat: add new pricing section"
git push origin feature/new-section

# Hotfix
git checkout -b hotfix/theme-fix
git commit -m "fix: theme selector animation"
```

### Code Quality
```bash
# Pre-commit hooks
pnpm format.fix
pnpm typecheck
pnpm test

# CI Pipeline
- Lint check
- Type check
- Unit tests
- Build test
- E2E tests
```

## 📞 Kapcsolat és Támogatás

**Hajma fólia Development Team**
- **Tech Lead**: [Név]
- **Project Manager**: [Név]
- **Email**: dev@hajmafolia.hu

**Emergency Contacts**
- **Server Issues**: +36 XX XXX XXXX
- **Security Issues**: security@hajmafolia.hu

## 📋 TODO és Backlog

### High Priority
- [ ] Real pricing data frissítése
- [ ] Contact form backend implementáció
- [ ] SEO meta tags hozzáadása
- [ ] Image optimization pipeline

### Medium Priority
- [ ] PWA implementáció
- [ ] Multi-language support
- [ ] Admin dashboard
- [ ] API documentation

### Low Priority
- [ ] Blog section
- [ ] Social media integration
- [ ] Newsletter signup
- [ ] Customer testimonials

---

**Privát projekt - Hajma fólia Kft.**
*Készült: 2024* | *Frissítve: 2026*
