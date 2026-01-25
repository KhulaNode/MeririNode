"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { generateWhatsAppInquiryLink, openWhatsApp } from "@/lib/whatsapp";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About" },
  ];

  const handleWhatsAppClick = () => {
    const url = generateWhatsAppInquiryLink();
    openWhatsApp(url);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-display font-bold text-neutral-900"
          >
            Meriri
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-neutral-600 ${
                  pathname === link.href
                    ? "text-neutral-900"
                    : "text-neutral-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors min-h-[44px]"
            >
              WhatsApp Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleWhatsAppClick}
            className="md:hidden bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors min-h-[44px]"
          >
            Order
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 flex gap-4 overflow-x-auto pb-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium whitespace-nowrap transition-colors ${
                pathname === link.href
                  ? "text-neutral-900 border-b-2 border-neutral-900"
                  : "text-neutral-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
