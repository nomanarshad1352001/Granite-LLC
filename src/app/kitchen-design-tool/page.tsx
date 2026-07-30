import type { Metadata } from "next";
import { KitchenDesigner } from "@/components/KitchenDesigner";

export const metadata: Metadata = {
  title: "Interactive Kitchen Design Tool | House of Granite LLC",
  description:
    "Design your dream kitchen online. Choose your layout, add cabinets, appliances, and countertops. Submit your plan for a free estimate.",
};

export default function KitchenDesignToolPage() {
  return (
    <div className="bg-granite-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-granite-950 mb-3">
            Interactive Kitchen Design Tool
          </h1>
          <p className="text-granite-600 text-lg max-w-2xl mx-auto">
            Create your kitchen layout, add cabinets and appliances, enter
            measurements, and submit your design for a free estimate.
          </p>
        </div>
        <KitchenDesigner />
      </div>
    </div>
  );
}
