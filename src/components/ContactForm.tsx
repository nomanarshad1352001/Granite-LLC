"use client";

import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-granite-100 p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-green-600" size={32} />
        </div>
        <h3 className="text-xl font-bold text-granite-950 mb-2">Message Sent!</h3>
        <p className="text-granite-600 text-sm mb-4">We&apos;ll get back to you within 1 business day.</p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
          }}
          className="bg-gold-500 hover:bg-gold-600 text-white px-5 py-2 rounded-lg font-semibold text-sm transition"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-granite-100 p-6 space-y-4">
      <h3 className="text-lg font-bold text-granite-950 mb-2">Send Us a Message</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-granite-700 mb-1">Full Name *</label>
          <input type="text" required value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
            className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-granite-700 mb-1">Email *</label>
          <input type="email" required value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
            className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-granite-700 mb-1">Phone</label>
          <input type="tel" value={formData.phone} onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
            className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-granite-700 mb-1">Subject</label>
          <input type="text" value={formData.subject} onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))}
            className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-granite-700 mb-1">Message *</label>
        <textarea required value={formData.message} onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))} rows={5}
          placeholder="How can we help you?"
          className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none resize-none" />
      </div>
      <button type="submit" disabled={submitting || !formData.name || !formData.email || !formData.message}
        className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:bg-granite-300 text-white px-6 py-3 rounded-lg font-semibold transition">
        {submitting ? "Sending..." : <><Send size={16} /> Send Message</>}
      </button>
    </form>
  );
}
