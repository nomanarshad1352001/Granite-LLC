import type { Metadata } from "next";
import { EstimateForm } from "@/components/EstimateForm";

export const metadata: Metadata = {
  title: "Request a Free Estimate | House of Granite LLC",
  description:
    "Get a free estimate for countertops, kitchen remodeling, bathroom remodeling, cabinets, backsplash, and more.",
};

export default function EstimatePage() {
  return (
    <div className="bg-granite-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-granite-950 mb-3">
            Request a Free Estimate
          </h1>
          <p className="text-granite-600 text-lg max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll provide a detailed estimate.
            Fill out the form below and our team will contact you promptly.
          </p>
        </div>
        <EstimateForm />
      </div>
    </div>
  );
}
