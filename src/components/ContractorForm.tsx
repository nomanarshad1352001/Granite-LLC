"use client";

import { useState } from "react";
import { CheckCircle, Send, Upload } from "lucide-react";

export function ContractorForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    email: "",
    projectType: "",
    description: "",
    deadline: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contractors", {
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
        <h3 className="text-xl font-bold text-granite-950 mb-2">Submission Received!</h3>
        <p className="text-granite-600 text-sm mb-4">We&apos;ll review your project details and contact you within 1 business day.</p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ companyName: "", contactName: "", phone: "", email: "", projectType: "", description: "", deadline: "" });
          }}
          className="bg-gold-500 hover:bg-gold-600 text-white px-5 py-2 rounded-lg font-semibold text-sm transition"
        >
          Submit Another Project
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-granite-100 p-6 space-y-4">
      <h3 className="text-lg font-bold text-granite-950 mb-2">Submit Your Project</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-granite-700 mb-1">Company Name *</label>
          <input type="text" required value={formData.companyName} onChange={(e) => setFormData((p) => ({ ...p, companyName: e.target.value }))}
            className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-granite-700 mb-1">Contact Name *</label>
          <input type="text" required value={formData.contactName} onChange={(e) => setFormData((p) => ({ ...p, contactName: e.target.value }))}
            className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-granite-700 mb-1">Phone *</label>
          <input type="tel" required value={formData.phone} onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
            className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-granite-700 mb-1">Email *</label>
          <input type="email" required value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
            className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-granite-700 mb-1">Project Type</label>
        <select value={formData.projectType} onChange={(e) => setFormData((p) => ({ ...p, projectType: e.target.value }))}
          className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none bg-white">
          <option value="">Select...</option>
          <option value="countertops">Countertop Fabrication & Installation</option>
          <option value="kitchen">Kitchen Remodeling</option>
          <option value="bathroom">Bathroom Remodeling</option>
          <option value="cabinets">Cabinet Installation</option>
          <option value="commercial">Commercial Project</option>
          <option value="multi-unit">Multi-Unit / Builder Project</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-granite-700 mb-1">Project Deadline</label>
        <input type="date" value={formData.deadline} onChange={(e) => setFormData((p) => ({ ...p, deadline: e.target.value }))}
          className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium text-granite-700 mb-1">Project Description</label>
        <textarea value={formData.description} onChange={(e) => setFormData((p) => ({ ...p, description: e.target.value }))} rows={4}
          placeholder="Describe your project, measurements, materials needed..."
          className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none resize-none" />
      </div>
      <div className="border-2 border-dashed border-granite-200 rounded-xl p-6 text-center hover:border-gold-400 transition cursor-pointer">
        <Upload className="mx-auto text-granite-400 mb-2" size={24} />
        <p className="text-granite-600 text-sm">Upload project plans, layouts, or measurements</p>
      </div>
      <button type="submit" disabled={submitting || !formData.companyName || !formData.contactName || !formData.phone || !formData.email}
        className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:bg-granite-300 text-white px-6 py-3 rounded-lg font-semibold transition">
        {submitting ? "Submitting..." : <><Send size={16} /> Submit Project</>}
      </button>
    </form>
  );
}
