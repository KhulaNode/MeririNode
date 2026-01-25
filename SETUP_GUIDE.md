# 🚀 Quick Setup Guide

## 🎯 What You Have

A fully functional, production-ready hair & wig store frontend with:
- ✅ Mobile-first design optimized for South African users
- ✅ WhatsApp ordering integration
- ✅ Product filtering and search
- ✅ Beautiful, emotion-driven UI
- ✅ Performance optimized (Lighthouse ready)
- ✅ Supabase-ready architecture

## 📦 Installation (Already Done)

```bash
npm install
```

## 🏃 Run Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📸 Replace Product Images

The app currently uses placeholder SVG images. To add real product photos:

1. Add your images to `/public/products/`
2. Update the image paths in `/data/products.ts` to match your actual filenames

Example:
```typescript
images: [
  "/products/your-actual-image-1.jpg",
  "/products/your-actual-image-2.jpg",
],
```

**Image Recommendations:**
- Format: JPEG or WebP
- Size: 1200x1600px (3:4 ratio)
- Quality: 80-85%
- File size: <300KB each

## 📱 Update WhatsApp Number

Open `/lib/whatsapp.ts` and replace the placeholder:

```typescript
const BUSINESS_WHATSAPP = "27123456789"; // ← Change this
```

Format: Country code + number (no + or spaces)
Example: For +27 82 123 4567, use "27821234567"

## 🎨 Customize Content

### 1. Contact Information

Update in these files:
- `/components/layout/Footer.tsx`
- `/app/about/page.tsx`
- `/app/faq/page.tsx`

### 2. Brand Name

Replace "Meriri" throughout the app (use Find & Replace):
- Header: `/components/layout/Header.tsx`
- Footer: `/components/layout/Footer.tsx`
- Layout: `/app/layout.tsx`

### 3. Product Data

Edit `/data/products.ts` to:
- Update product names
- Adjust prices
- Change descriptions
- Modify stock status

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

This creates an optimized production build.

## 📊 Performance Check

After building, test with Lighthouse:

1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Mobile" device
4. Run audit

**Targets:**
- Performance: ≥90
- Accessibility: ≥90
- Best Practices: ≥90
- SEO: ≥90

## 🚢 Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy (automatic)

## 🔌 Next Steps (Optional)

### Integrate Supabase

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Install Supabase client:
   ```bash
   npm install @supabase/supabase-js
   ```
3. Follow the TODO comments in the codebase
4. See README.md for database schema

### Add Analytics

```bash
npm install @vercel/analytics
```

Then add to `/app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

// In body:
<Analytics />
```

## 📁 Project Structure Overview

```
/app                    # Pages (Next.js App Router)
  /shop                 # Product listing & details
  /faq                  # FAQ page
  /about                # About page
  page.tsx              # Home page

/components             # Reusable components
  /layout               # Header, Footer
  /products             # Product-specific components
  /ui                   # Generic UI components

/data                   # Mock product data
/lib                    # Utilities (WhatsApp, filters)
/store                  # State management (Zustand)
/types                  # TypeScript definitions
/public                 # Static files (images)
```

## 🎯 Key Features to Test

1. **Home page** (`/`)
   - Hero section with CTAs
   - Featured products
   - WhatsApp buttons

2. **Shop page** (`/shop`)
   - Filter by type, length, texture
   - Product grid responsive layout
   - Stock status badges

3. **Product detail** (`/shop/[id]`)
   - Image gallery with thumbnails
   - WhatsApp order button
   - Care instructions accordion

4. **Mobile experience**
   - Responsive design
   - Touch-friendly buttons (44px+)
   - Sticky order button on product page

## 🐛 Troubleshooting

### Images not showing?
- Check image paths in `/data/products.ts`
- Ensure images exist in `/public/products/`
- Restart dev server after adding new images

### WhatsApp not opening?
- Check phone number format in `/lib/whatsapp.ts`
- Test on actual mobile device (not just desktop)
- Ensure WhatsApp is installed

### Build errors?
```bash
rm -rf .next
npm run build
```

## 📞 Support

Questions? Need help?
- Check the main README.md for detailed docs
- Review TODO comments in the code
- All Supabase integration points are marked

## ✅ Pre-Launch Checklist

- [ ] Replace all product images
- [ ] Update WhatsApp number
- [ ] Update contact info (email, phone)
- [ ] Update business address
- [ ] Customize brand name
- [ ] Test all pages on mobile
- [ ] Test WhatsApp ordering flow
- [ ] Run Lighthouse audit
- [ ] Test on slow network
- [ ] Deploy to production
- [ ] Set up custom domain
- [ ] Add analytics

---

**You're ready to go!** 🎉

The frontend is production-ready. Add real images, update contact info, and deploy.
