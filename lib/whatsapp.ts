import { WhatsAppOrderData } from "@/types/product";

// WhatsApp Business Number
// TODO: Replace with actual business number
const BUSINESS_WHATSAPP = "27123456789"; // Format: country code + number (no + or spaces)

/**
 * Generates a prefilled WhatsApp message URL for ordering
 * Mobile-optimized for South African users
 */
export function generateWhatsAppOrderLink(data: WhatsAppOrderData): string {
  const message = `Hi! I'd like to order:

*${data.productName}*
Length: ${data.length}"
Texture: ${data.texture}
Price: R${data.price.toLocaleString("en-ZA")}

${data.deliveryMethod ? `Preferred: ${data.deliveryMethod}` : "Please let me know about collection/delivery options."}

Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  
  // Use wa.me for universal compatibility (works on all devices)
  return `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodedMessage}`;
}

/**
 * Generates a general inquiry WhatsApp link
 */
export function generateWhatsAppInquiryLink(message?: string): string {
  const defaultMessage = "Hi! I have a question about your hair products.";
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  
  return `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodedMessage}`;
}

/**
 * Opens WhatsApp in a new window/tab
 * Mobile-optimized: will open WhatsApp app on mobile
 */
export function openWhatsApp(url: string): void {
  // Use window.open for better mobile app integration
  window.open(url, "_blank", "noopener,noreferrer");
}
