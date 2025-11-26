// app/api/create-order/route.ts
import Razorpay from "razorpay";
import { NextResponse } from "next/server";

type RequestBody = {
  amount: number; // paise
  currency?: string;
  receipt?: string;
};

export async function POST(req: Request) {
  try {
    const body: RequestBody = await req.json();
    const amount = body.amount;
    if (!amount || typeof amount !== "number") {
      return NextResponse.json({ error: "amount required (in paise, number)" }, { status: 400 });
    }

    // Make sure you have these env vars set (RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET)
    const key_id = process.env.RAZORPAY_KEY_ID!;
    const key_secret = process.env.RAZORPAY_KEY_SECRET!;
    if (!key_id || !key_secret) {
      return NextResponse.json({ error: "Razorpay keys not configured in env" }, { status: 500 });
    }

    const razorpay = new Razorpay({
      key_id,
      key_secret,
    });

    // Create order
    const order = await razorpay.orders.create({
      amount,                 // amount in paise (number)
      currency: body.currency || "INR",
      receipt: body.receipt || `rcpt_${Date.now()}`,
      payment_capture: 1,     // 1 -> auto-capture, 0 -> manual
    } as any); // cast to any to avoid minor type mismatches from razorpay types

    return NextResponse.json({ order }, { status: 200 });
  } catch (err: any) {
    console.error("create-order error:", err);
    return NextResponse.json({ error: err.message || "server error" }, { status: 500 });
  }
}
