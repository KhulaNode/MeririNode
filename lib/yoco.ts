// Yoco Payment SDK Utility
// Docs: https://developer.yoco.com/online/sdks/javascript-sdk

// Type declaration for the browser-loaded Yoco SDK
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YocoSDK: any;
  }
}

export const YOCO_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_YOCO_PUBLIC_KEY ?? "";

export interface YocoPopupOptions {
  amountInCents: number;
  currency?: string;
  name?: string;
  description?: string;
  callback: (result: YocoResult) => void;
}

export interface YocoResult {
  id?: string; // Payment token on success
  error?: {
    message: string;
    status?: string;
  };
}

/**
 * Opens the Yoco payment popup.
 * The Yoco JS SDK must be loaded via <Script> in layout.tsx before calling this.
 */
export function openYocoPopup(options: YocoPopupOptions): void {
  if (typeof window === "undefined" || !window.YocoSDK) {
    console.error("Yoco SDK not loaded");
    return;
  }

  const yoco = new window.YocoSDK({ publicKey: YOCO_PUBLIC_KEY });

  yoco.showPopup({
    amountInCents: options.amountInCents,
    currency: options.currency ?? "ZAR",
    name: options.name ?? "Meriri",
    description: options.description ?? "Hair purchase",
    callback: options.callback,
  });
}
