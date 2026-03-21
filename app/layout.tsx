import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meriri | Premium Hair & Wigs",
  description:
    "Premium wigs, weaves, and hair bundles. Shop online, pay securely with Yoco. Human hair and synthetic options. Delivered nationwide.",
  keywords: [
    "wigs online South Africa",
    "hair weaves South Africa",
    "human hair wigs",
    "synthetic wigs",
    "frontals",
    "closures",
    "body wave",
    "African hair",
  ],
  openGraph: {
    title: "Meriri | Premium Hair & Wigs",
    description: "Premium hair. One message away.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
