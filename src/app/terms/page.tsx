import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | House of Granite LLC",
  description: "Terms and conditions for House of Granite LLC website and services.",
};

export default function TermsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-granite-950 mb-8">Terms &amp; Conditions</h1>
        <div className="prose prose-granite max-w-none space-y-6 text-granite-600 leading-relaxed">
          <p><strong>Last updated:</strong> January 2024</p>

          <h2 className="text-xl font-bold text-granite-950 mt-8">1. Acceptance of Terms</h2>
          <p>By accessing and using the House of Granite LLC website, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.</p>

          <h2 className="text-xl font-bold text-granite-950 mt-8">2. Services</h2>
          <p>House of Granite LLC provides countertop fabrication, installation, kitchen remodeling, bathroom remodeling, and related home renovation services. All services are subject to availability, scheduling, and a signed service agreement.</p>

          <h2 className="text-xl font-bold text-granite-950 mt-8">3. Estimates</h2>
          <p>Estimates provided through our website or in person are approximate and subject to change based on final measurements, material availability, and project scope. A formal quote will be provided before work begins.</p>

          <h2 className="text-xl font-bold text-granite-950 mt-8">4. Kitchen Design Tool</h2>
          <p>The interactive Kitchen Design Tool is provided for planning purposes only. Designs created using the tool are approximate and intended to help communicate your vision. Final designs, measurements, and specifications will be confirmed during our professional consultation and templating process.</p>

          <h2 className="text-xl font-bold text-granite-950 mt-8">5. Intellectual Property</h2>
          <p>All content on this website, including text, images, logos, and design, is the property of House of Granite LLC and protected by applicable copyright laws.</p>

          <h2 className="text-xl font-bold text-granite-950 mt-8">6. Limitation of Liability</h2>
          <p>House of Granite LLC shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services.</p>

          <h2 className="text-xl font-bold text-granite-950 mt-8">7. Warranty</h2>
          <p>We provide warranties on our workmanship. Material warranties are provided by the manufacturer. Specific warranty terms will be included in your service agreement.</p>

          <h2 className="text-xl font-bold text-granite-950 mt-8">8. Changes to Terms</h2>
          <p>We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page.</p>

          <h2 className="text-xl font-bold text-granite-950 mt-8">9. Contact</h2>
          <p>For questions about these Terms, contact us at:</p>
          <p>House of Granite LLC<br />123 Stone Avenue, Suite 100<br />Your City, ST 12345<br />info@houseofgranitellc.com<br />(555) 123-4567</p>
        </div>
      </div>
    </div>
  );
}
