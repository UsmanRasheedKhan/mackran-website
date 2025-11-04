# Mackran Real Estate — Luxury Properties Website

A production-ready, SEO-optimized, luxury-styled real estate website built with Next.js 14, TypeScript, Tailwind CSS, and Firebase. Designed for the UAE real estate market.

## ✨ Features Implemented

### Core Pages
- ✅ **Home** — Hero section with animations, featured listings carousel, quick search, and CTA sections
- ✅ **Properties** — Listing page with location and property type filters, responsive grid
- ✅ **About** — Brand story, mission, vision, team showcase
- ✅ **Blog** — Insights and market updates (admin CRUD ready)
- ✅ **Contact** — Contact form and direct WhatsApp/email links

### Design & UX
- ✅ Luxury color palette (gold, midnight, champagne, charcoal)
- ✅ Premium typography (Poppins headings, Playfair Display serif accents)
- ✅ Smooth animations (Framer Motion: fade-in, slide, scroll reveals)
- ✅ Fully responsive (desktop, tablet, mobile)
- ✅ Sticky navigation with hover effects
- ✅ Modern, open-space layout inspired by Sotheby's and Next Level Real Estate

### Performance & SEO
- ✅ Server-side rendering (Next.js App Router)
- ✅ Image optimization (next/image with lazy loading)
- ✅ Dynamic meta tags and canonical URLs
- ✅ Structured data ready (JSON-LD schema placeholders)
- ✅ robots.txt and sitemap.xml

## 🏗️ Project Structure

```
mackran-next-official/
├── app/
│   ├── page.tsx              # Home page (hero, featured listings, CTA)
│   ├── about/
│   ├── properties/           # Listing page with filters
│   ├── blog/                 # Blog page
│   ├── contact/              # Contact form
│   ├── layout.tsx            # Root layout (Navbar + Footer)
│   └── globals.css           # Global Tailwind styles
├── components/
│   ├── Navbar.tsx            # Sticky navigation bar
│   ├── Footer.tsx            # Footer with contact info
│   ├── PropertyCard.tsx       # Reusable property listing card
│   └── AnimatedText.tsx       # Framer Motion text animations
├── lib/
│   ├── firebase.ts           # Firebase client setup
│   └── seo.ts                # SEO constants and helpers
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── .env.local                # Firebase env vars (placeholder)
└── next.config.ts            # Next.js config (Unsplash images allowed)
```

## 🚀 Quick Start

### 1. Install Dependencies
```powershell
cd mackran-next-official
npm install
```

### 2. Configure Firebase (Optional for demo)
Create or update `.env.local` with your Firebase credentials:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Run Dev Server
```powershell
npm run dev
```

Visit `http://localhost:3000` to see the site live!

### 4. Build for Production
```powershell
npm run build
npm start
```

## 📦 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS v4 + Framer Motion animations
- **Fonts**: Poppins (headings), Playfair Display (serif), Google Fonts
- **Backend**: Firebase (Firestore, Auth, Storage)
- **Images**: next/image with Unsplash demo sources
- **SEO**: next-seo, JSON-LD, dynamic meta tags
- **Linting**: ESLint, TypeScript strict mode

## 🎨 Design Highlights

### Color Palette
- Gold: `#C9A86A` — Luxury accent
- Midnight: `#0B1220` — Dark navy text/buttons
- Champagne: `#F7EFE2` — Light background
- Charcoal: `#2C2F33` — Hover states

### Animations
- Hero text reveal on page load
- Scroll-triggered section animations
- Property card hover effects
- Smooth button transitions
- Animated scroll indicator

## 📝 Remaining Tasks (Next Phases)

1. **Admin Panel** — Firebase Auth protected CRUD for properties and blogs
2. **Dynamic Property Pages** — Individual property details with JSON-LD schema and inquiry forms
3. **Internationalization** — Arabic + English i18n with language toggle and RTL support
4. **Firebase Integration** — Real property data from Firestore, image uploads to Storage
5. **Advanced Animations** — GSAP parallax, text reveal effects, scroll-linked animations
6. **Blog Admin** — Editor interface for creating/editing blog posts
7. **Analytics** — Google Analytics, Firestore-based user behavior tracking
8. **Deployment** — Vercel frontend + Firebase backend setup with .ae domain

## 🔧 Available Scripts

```powershell
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Connect repo to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Backend (Firebase)
1. Create Firebase project at https://console.firebase.google.com
2. Enable Firestore, Authentication, and Storage
3. Install Firebase CLI: `npm install -g firebase-tools`
4. Deploy Cloud Functions and Firestore rules as needed

### Domain (.ae)
1. Register .ae domain with a registrar
2. Add domain to Vercel DNS settings
3. Point nameservers to Vercel or use DNS CNAME records

## 📞 Contact

For inquiries about Mackran Real Estate:
- Email: info@mackran.ae
- WhatsApp: +971 50 123 4567

## 📄 License

Proprietary — Mackran Real Estate © 2025

---

**Built with ❤️ for luxury real estate in the UAE.**
