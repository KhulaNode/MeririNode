import React from "react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Meriri</h3>
            <p className="text-neutral-400 text-sm">
              Premium hair. Secure checkout. Nationwide delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/shop"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Shop All Hair
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>South Africa</li>
              <li>
                <a
                  href="tel:+27123456789"
                  className="hover:text-white transition-colors"
                >
                  +27 12 345 6789
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@meriri.co.za"
                  className="hover:text-white transition-colors"
                >
                  hello@meriri.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-400">
          <p>&copy; {currentYear} Meriri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
