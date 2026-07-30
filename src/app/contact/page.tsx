import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | House of Granite LLC",
  description: "Contact House of Granite LLC for countertops, kitchen remodeling, and bathroom remodeling. Call, email, or visit our showroom.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-granite-950 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-granite-300 text-lg max-w-2xl mx-auto">
            Ready to start your project? Have questions? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="bg-granite-50 rounded-xl p-6 border border-granite-100">
              <h3 className="font-bold text-granite-950 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="tel:+15551234567" className="flex items-start gap-3 text-granite-600 hover:text-gold-600 transition">
                  <Phone size={18} className="mt-0.5 shrink-0 text-gold-500" />
                  <div>
                    <p className="font-medium text-granite-950">Phone</p>
                    <p>(555) 123-4567</p>
                  </div>
                </a>
                <a href="mailto:info@houseofgranitellc.com" className="flex items-start gap-3 text-granite-600 hover:text-gold-600 transition">
                  <Mail size={18} className="mt-0.5 shrink-0 text-gold-500" />
                  <div>
                    <p className="font-medium text-granite-950">Email</p>
                    <p>info@houseofgranitellc.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-granite-600">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-gold-500" />
                  <div>
                    <p className="font-medium text-granite-950">Address</p>
                    <p>123 Stone Avenue, Suite 100<br />Your City, ST 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-granite-600">
                  <Clock size={18} className="mt-0.5 shrink-0 text-gold-500" />
                  <div>
                    <p className="font-medium text-granite-950">Business Hours</p>
                    <p>Mon – Fri: 8:00 AM – 5:00 PM</p>
                    <p>Saturday: 9:00 AM – 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold-50 rounded-xl p-6 border border-gold-200">
              <h3 className="font-bold text-granite-950 mb-2">Quick Response</h3>
              <p className="text-granite-600 text-sm">
                We respond to all inquiries within 1 business day. For urgent requests, call us directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
