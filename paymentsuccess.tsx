"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();

  const amount = searchParams.get("amount") || "0";
  const paymentStatus = searchParams.get("redirect_status") || "unknown";
  const paymentIntent = searchParams.get("payment_intent");

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-green-400 to-green-600">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">
          {paymentStatus === "succeeded" ? "Payment Successful!" : "Payment Processing"}
        </h1>
        <h2 className="text-2xl">You successfully sent</h2>

        <div className="bg-white p-2 rounded-md text-black mt-5 text-4xl font-bold">
          ${amount}
        </div>

        {paymentStatus === "succeeded" && paymentIntent && (
          <p className="mt-4 text-sm">Transaction ID: {paymentIntent}</p>
        )}
      </div>
    </main>
  );
}
