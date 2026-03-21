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
      "Browse our shop, add items to your cart, and proceed to checkout. Enter your shipping details and pay securely with your card via Yoco. You'll receive a confirmation once your payment is processed.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're an online-first hair store serving all of South Africa. Stock is held locally and we ship nationwide — delivery straight to your door.",
  },
  {
    question: "What's the difference between human hair and synthetic?",
    answer:
      "Human hair wigs can be heat styled, dyed, and look most natural. They last 6-12 months with care. Synthetic wigs are pre-styled, more affordable (R799-R999), and require less maintenance but can't handle high heat. Both look great - it depends on your budget and styling needs.",
  },
  {
    question: "Can I see more photos before buying?",
    answer:
      "Each product page has multiple images and detailed descriptions. If you need more info, email us at hello@meriri.co.za and we'll send through additional photos.",
  },
  {
    question: "How long do wigs last?",
    answer:
      "Human hair wigs: 6-12 months with proper care. Synthetic wigs: 3-6 months. Frontals/closures: 1-2 months per install. Follow the care instructions on each product page to maximize lifespan.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard) via Yoco — South Africa's leading payment platform. Your card details are encrypted and never stored on our servers.",
  },
  {
    question: "Do you do installations?",
    answer:
      "We sell the hair only. If you need installation recommendations, email us at hello@meriri.co.za and we'll do our best to point you in the right direction.",
  },
  {
    question: "What if the color doesn't match?",
    answer:
      "Most of our wigs come in natural black/dark brown (#1B). Human hair wigs can be colored by a professional stylist. Email us before ordering if you need specific color advice.",
  },
  {
    question: "How do I care for my wig?",
    answer:
      "Each product has specific care instructions on its page. General tips: Use sulfate-free shampoo, condition regularly, store on a wig stand, sleep in a silk bonnet, and avoid excessive heat on synthetic wigs.",
  },
  {
    question: "What's your return policy?",
    answer:
      "Due to hygiene reasons, we can't accept returns on worn wigs. If you receive a damaged or incorrect product, email us immediately at hello@meriri.co.za with photos. We'll make it right.",
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
            Can&apos;t find your answer? Email us at hello@meriri.co.za
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
            We&apos;re here to help. Send us an email and we&apos;ll get back to
            you quickly.
          </p>
          <a
            href="mailto:hello@meriri.co.za"
            className="inline-flex items-center justify-center bg-neutral-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-neutral-700 transition-colors min-h-[48px]"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
