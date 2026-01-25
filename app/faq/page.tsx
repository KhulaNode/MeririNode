"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I order?",
    answer:
      "Click any 'Order on WhatsApp' button. You'll be taken to WhatsApp with a prefilled message. We'll respond quickly with payment details, collection/delivery options, and answer any questions.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're based in Cape Town, South Africa. All our stock is held locally - no waiting for imports. We offer collection in Cape Town and delivery across the Western Cape.",
  },
  {
    question: "What's the difference between human hair and synthetic?",
    answer:
      "Human hair wigs can be heat styled, dyed, and look most natural. They last 6-12 months with care. Synthetic wigs are pre-styled, more affordable (R799-R999), and require less maintenance but can't handle high heat. Both look great - it depends on your budget and styling needs.",
  },
  {
    question: "Can I try before I buy?",
    answer:
      "Message us on WhatsApp to arrange a viewing. We can send additional photos/videos or arrange an in-person viewing in Cape Town. We want you to feel confident before ordering.",
  },
  {
    question: "How long do wigs last?",
    answer:
      "Human hair wigs: 6-12 months with proper care. Synthetic wigs: 3-6 months. Frontals/closures: 1-2 months per install. Follow the care instructions on each product page to maximize lifespan.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept EFT, SnapScan, and card payments. Full payment details will be sent via WhatsApp once you place your order.",
  },
  {
    question: "Do you do installations?",
    answer:
      "We sell the hair only. We can recommend trusted stylists in Cape Town for installation. Message us on WhatsApp for referrals.",
  },
  {
    question: "What if the color doesn't match?",
    answer:
      "Most of our wigs come in natural black/dark brown (#1B). Human hair wigs can be colored by a professional stylist. Send us a WhatsApp message if you need specific color advice before ordering.",
  },
  {
    question: "How do I care for my wig?",
    answer:
      "Each product has specific care instructions on its page. General tips: Use sulfate-free shampoo, condition regularly, store on a wig stand, sleep in a silk bonnet, and avoid excessive heat on synthetic wigs.",
  },
  {
    question: "What's your return policy?",
    answer:
      "Due to hygiene reasons, we can't accept returns on worn wigs. If you receive a damaged or incorrect product, message us immediately on WhatsApp with photos. We'll make it right.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-neutral-600">
            Can't find your answer? Message us on WhatsApp.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="font-medium text-neutral-900 pr-4">
                  {faq.question}
                </span>
                <span className="text-neutral-600 flex-shrink-0 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="px-6 pb-5"
                >
                  <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center bg-accent-pink rounded-lg p-8">
          <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-neutral-700 mb-6">
            We're here to help. Message us on WhatsApp and we'll respond quickly.
          </p>
          <a
            href="https://wa.me/27123456789?text=Hi!%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors min-h-[48px]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
