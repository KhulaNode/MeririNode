import { NextRequest, NextResponse } from "next/server";
import { CartItem, ShippingDetails } from "@/types/product";

interface CheckoutBody {
  token: string;
  amountInCents: number;
  items: CartItem[];
  shipping: ShippingDetails;
}

export async function POST(req: NextRequest) {
  try {
    const body: CheckoutBody = await req.json();
    const { token, amountInCents, items, shipping } = body;

    if (!token || !amountInCents || !items?.length || !shipping) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Charge the card via Yoco's REST API
    const yocoRes = await fetch("https://online.yoco.com/v1/charges/", {
      method: "POST",
      headers: {
        "X-Auth-Secret-Key": process.env.YOCO_SECRET_KEY ?? "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        amountInCents,
        currency: "ZAR",
      }),
    });

    const charge = await yocoRes.json();

    if (!yocoRes.ok) {
      return NextResponse.json(
        {
          error:
            charge.displayMessage ??
            charge.errorCode ??
            "Payment failed. Please try again.",
        },
        { status: 400 }
      );
    }

    // TODO: Persist the order in your database (e.g. Supabase) here.
    // For now we generate a reference from the Yoco charge ID.
    const orderId = charge.id ?? `ORD-${Date.now()}`;

    return NextResponse.json({
      success: true,
      orderId,
      charge,
    });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
