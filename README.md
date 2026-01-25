# Meriri - Premium Hair & Wig Store

A production-grade, mobile-first e-commerce frontend for a Cape Town-based hair and wig store. Built with Next.js, TypeScript, and Tailwind CSS, designed for optimal mobile performance and WhatsApp-based ordering.

## 🎯 Key Features

- **Mobile-First Design**: Optimized for South African mobile users (low bandwidth, mid-range devices)
- **Emotion-Driven UI**: Focus on feel, movement, and confidence rather than technical specs
- **WhatsApp Integration**: Simple ordering via prefilled WhatsApp messages
- **Smart Filtering**: Easy product discovery without decision paralysis
- **Performance Optimized**: Built for Lighthouse mobile score ≥90
- **Supabase-Ready**: Clean architecture prepared for backend integration

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom neutral luxury theme)
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Fonts**: Inter + Playfair Display

## 📁 Project Structure

```
/app                    # Next.js App Router pages
  /shop                 # Product listing & detail pages
  /faq                  # FAQ page
  /about                # About page
  page.tsx              # Home page
  layout.tsx            # Root layout
  globals.css           # Global styles

/components             # Reusable React components
  /layout               # Header, Footer
  /products             # ProductCard, ImageGallery, FilterBar
  /ui                   # Button, Badge

/types                  # TypeScript type definitions
  product.ts            # Product, Filter, Cart types

/data                   # Mock data (TODO: replace with Supabase)
  products.ts           # Mock product data + helper functions

/store                  # Zustand state management
  productStore.ts       # Filters, search, cart state

/lib                    # Utility functions
  products.ts           # Filtering, formatting, helpers
  whatsapp.ts           # WhatsApp link generation

/public                 # Static assets
  /products             # Product images (placeholder paths)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A code editor (VS Code recommended)

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add product images**:
   - Place product images in `/public/products/`
   - Update image paths in `/data/products.ts` to match your actual images
   - For now, the app uses placeholder paths

3. **Update WhatsApp number**:
   - Open `/lib/whatsapp.ts`
   - Replace `27123456789` with your actual WhatsApp Business number (format: country code + number, no + or spaces)

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages

### Home (`/`)
- Hero section with emotional copy and trust signals
- Featured products showcase
- "Why Choose Us" section
- Multiple WhatsApp CTAs

### Shop (`/shop`)
- Product grid with real-time filtering
- Filters: Type, Length, Texture, Stock Status
- Mobile-optimized layout
- Smooth animations

### Product Detail (`/shop/[id]`)
- Image gallery with thumbnails
- Emotional copy ("Why Women Love This")
- Collapsible care instructions
- Sticky WhatsApp order button
- Stock status indicators

### FAQ (`/faq`)
- Accordion-style questions
- Covers ordering, care, returns, payments
- WhatsApp CTA for additional questions

### About (`/about`)
- Brand story and values
- Cape Town location emphasis
- Contact information
- Trust-building content

## 🔧 Customization

### Colors & Theme

Edit `/tailwind.config.ts` to customize the neutral luxury palette:

```typescript
colors: {
  background: "#FAFAF9",
  foreground: "#1C1917",
  accent: {
    pink: "#FDF2F8",
    pinkDark: "#F9A8D4",
  },
  // ... more colors
}
```

### Product Data

Mock data is in `/data/products.ts`. Each product follows this structure:

```typescript
{
  id: string;
  name: string;
  category: "Synthetic Wig" | "Human Hair Wig" | "Frontal" | "Closure";
  texture: "Body Wave" | "Jerry Curl" | "Straight" | "Deep Wave" | "Kinky Curly";
  lengthInInches: number;
  laceType?: "Transparent" | "HD" | "Brown";
  priceZAR: number;
  stockStatus: "In Stock" | "Limited" | "Pre-Order" | "Out of Stock";
  images: string[];
  shortDescription: string;
  careNotes: string;
}
```

### Fonts

Current font pairing:
- **Sans-serif**: Inter (body text)
- **Display**: Playfair Display (headings)

Change in `/app/layout.tsx` if needed.

## 🔌 Supabase Integration (Future)

The codebase is structured for easy Supabase integration. Look for `TODO` comments throughout the code:

### Database Schema (Suggested)

```sql
-- Products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  texture TEXT NOT NULL,
  length_in_inches INTEGER NOT NULL,
  lace_type TEXT,
  price_zar INTEGER NOT NULL,
  stock_status TEXT NOT NULL,
  images TEXT[] NOT NULL,
  short_description TEXT NOT NULL,
  care_notes TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index for filtering
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_stock ON products(stock_status);
```

### Integration Steps

1. **Install Supabase client**:
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Create Supabase client** (`/lib/supabase.ts`):
   ```typescript
   import { createClient } from '@supabase/supabase-js';
   
   export const supabase = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL!,
     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
   );
   ```

3. **Replace mock data calls** in `/data/products.ts` with Supabase queries

4. **Add Supabase Storage** for product images

5. **Add authentication** for admin/management features

## 📊 Performance Optimization

The app is built for optimal mobile performance:

- **Image Optimization**: Next.js Image component with responsive sizes
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Components load on demand
- **Minimal JS**: Lightweight state management with Zustand
- **Mobile-First CSS**: Touch-friendly targets (44px minimum)
- **Efficient Animations**: GPU-accelerated Framer Motion

### Lighthouse Targets

- Performance: ≥90
- Accessibility: ≥90
- Best Practices: ≥90
- SEO: ≥90

Test with:
```bash
npm run build
npm run start
# Then run Lighthouse in Chrome DevTools
```

## 🎨 Design Principles

1. **Emotion First**: Copy emphasizes feel, confidence, movement
2. **Low Cognitive Load**: Minimal choices, fast scanning
3. **Trust Signals**: Cape Town location, local stock, WhatsApp ease
4. **Mobile-Optimized**: Large touch targets, readable text, fast load
5. **African Mobile Reality**: Works on unstable networks, mid-range devices

## 📞 WhatsApp Features

The app generates prefilled WhatsApp messages for:

- **Product Orders**: Includes product name, specs, price
- **General Inquiries**: Quick contact for questions
- **Collection/Delivery**: Automatically asks about preferred method

Messages open directly in WhatsApp app on mobile or WhatsApp Web on desktop.

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Compatible with any Next.js hosting:
- Netlify
- AWS Amplify
- Digital Ocean App Platform

## 📝 TODO for Production

- [ ] Replace placeholder images with real product photos
- [ ] Update WhatsApp number in `/lib/whatsapp.ts`
- [ ] Update contact info in Footer and About page
- [ ] Add real business address/location
- [ ] Set up domain and update metadata
- [ ] Add Google Analytics or tracking
- [ ] Integrate Supabase for dynamic data
- [ ] Add proper error boundaries
- [ ] Set up monitoring (Sentry, etc.)
- [ ] Add sitemap and robots.txt
- [ ] Implement admin dashboard for product management
- [ ] Add product video support
- [ ] Set up automated testing

## 📄 License

Private project. All rights reserved.

## 🤝 Support

For questions or issues:
- WhatsApp: +27 12 345 6789
- Email: hello@meriri.co.za

---

Built with ❤️ for South African women who deserve better hair shopping experiences.
