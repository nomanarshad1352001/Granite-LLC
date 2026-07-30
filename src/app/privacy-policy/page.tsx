import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | House of Granite LLC",
  description: "Privacy policy for House of Granite LLC website and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-granite-950 mb-8">Privacy Policy</h1>
        <div className="prose prose-granite max-w-none space-y-6 text-granite-600 leading-relaxed">
          <p><strong>Last updated:</strong> January 2024</p>

          <h2 className="text-xl font-bold text-granite-950 mt-8">1. Information We Collect</h2>
          <p>When you use our website, request an estimate, or submit a design through our Kitchen Design Tool, we may collect the following information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name, email address, phone number, and mailing address</li>
            <li>Project details and measurements</li>
            <li>Photos and documents you upload</li>
            <li>Kitchen design layouts created with our design tool</li>
            <li>Property information related to your project</li>
          </ul>

          <h2 className="text-xl font-bold text-granite-950 mt-8">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Respond to your inquiries and estimate requests</li>
            <li>Provide countertop and remodeling services</li>
            <li>Communicate with you about your project</li>
            <li>Improve our website and services</li>
            <li>Send relevant updates with your consent</li>
          </ul>

          <h2 className="text-xl font-bold text-granite-950 mt-8">3. Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted partners who assist us in operating our website and serving you, as long as those parties agree to keep this information confidential.</p>

          <h2 className="text-xl font-bold text-granite-950 mt-8">4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>

          <h2 className="text-xl font-bold text-granite-950 mt-8">5. Cookies</h2>
          <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.</p>

          <h2 className="text-xl font-bold text-granite-950 mt-8">6. Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at info@houseofgranitellc.com.</p>

          <h2 className="text-xl font-bold text-granite-950 mt-8">7. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
          <p>House of Granite LLC<br />123 Stone Avenue, Suite 100<br />Your City, ST 12345<br />info@houseofgranitellc.com<br />(555) 123-4567</p>
        </div>
      </div>
    </div>
  );
}
