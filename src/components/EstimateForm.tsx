"use client";

import { useEffect, useState } from "react";
import { CheckCircle, CircleDollarSign, Upload, Send } from "lucide-react";
import { servicePricing } from "@/lib/service-pricing";

const propertyTypes = ["Single Family Home", "Condo/Townhouse", "Multi-Family", "Commercial", "Other"];
const customerTypes = ["Homeowner", "Contractor", "Builder", "Property Manager", "Other"];
const timelineOptions = ["ASAP", "1-2 weeks", "1 month", "2-3 months", "3-6 months", "Flexible"];
const contactMethods = ["Phone", "Email", "Text"];

export function EstimateForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    projectAddress: "",
    city: "",
    zipCode: "",
    propertyType: "",
    projectType: "",
    timeline: "",
    customerType: "",
    description: "",
    measurements: "",
    preferredMaterial: "",
    contactMethod: "",
    appointmentDate: "",
    services: [] as string[],
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const selectedId = new URLSearchParams(window.location.search).get("service");
    const selectedService = servicePricing.find((item) => item.id === selectedId)?.service;
    if (selectedService) {
      setFormData((current) => ({
        ...current,
        services: current.services.includes(selectedService) ? current.services : [...current.services, selectedService],
      }));
    }
  }, []);

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/estimates", {
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
      <div className="max-w-lg mx-auto text-center py-16">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-green-600" size={40} />
        </div>
        <h2 className="text-2xl font-bold text-granite-950 mb-3">
          Estimate Request Submitted!
        </h2>
        <p className="text-granite-600 mb-6">
          Thank you for your request. Our team will review your project details
          and contact you within 1-2 business days.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: "",
              phone: "",
              email: "",
              projectAddress: "",
              city: "",
              zipCode: "",
              propertyType: "",
              projectType: "",
              timeline: "",
              customerType: "",
              description: "",
              measurements: "",
              preferredMaterial: "",
              contactMethod: "",
              appointmentDate: "",
              services: [],
            });
          }}
          className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[30px] border border-[#ddd2c4] bg-[#fffdf9] p-6 shadow-[0_30px_90px_-55px_rgba(64,37,20,.32)] md:p-9 space-y-9"
    >
      {/* Services */}
      <div>
        <h3 className="text-lg font-bold text-granite-950 mb-3">
          What services are you interested in?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {servicePricing.map((item) => (
            <label
              key={item.id}
              className={`group relative cursor-pointer rounded-2xl border p-4 transition-all ${
                formData.services.includes(item.service)
                  ? "border-[#b28a52] bg-[#faf4e8] shadow-[0_14px_35px_-24px_rgba(178,138,82,.28)] ring-1 ring-[#b28a52]/15"
                  : "border-[#e1d7ca] bg-[#fffdf9] hover:-translate-y-0.5 hover:border-[#bda98e] hover:shadow-lg"
              }`}
            >
              <input type="checkbox" checked={formData.services.includes(item.service)} onChange={() => toggleService(item.service)} className="sr-only" />
              <div className="flex items-start justify-between gap-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${formData.services.includes(item.service) ? "bg-[#233d34] text-white" : "bg-[#f1ece4] text-[#6d6257]"}`}><item.icon size={18} /></span>
                <span className={`flex h-5 w-5 items-center justify-center rounded-full border ${formData.services.includes(item.service) ? "border-[#b28a52] bg-[#b28a52] text-white" : "border-[#cbbfb2] text-transparent"}`}><CheckCircle size={13} /></span>
              </div>
              <h4 className="mt-4 text-sm font-semibold text-[#302720]">{item.shortName}</h4>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-[#96897c]">Starting around</p>
              <p className="mt-0.5 text-xl font-semibold text-[#493b32]">{item.startingAt}</p>
              <p className="mt-1 text-[10px] font-medium text-[#9a7546]">{item.range}</p>
            </label>
          ))}
          <label className={`cursor-pointer rounded-2xl border p-4 transition ${formData.services.includes("Other remodeling services") ? "border-[#b28a52] bg-[#faf4e8] ring-1 ring-[#b28a52]/15" : "border-[#e1d7ca] bg-[#fffdf9] hover:border-[#bda98e]"}`}>
            <input type="checkbox" checked={formData.services.includes("Other remodeling services")} onChange={() => toggleService("Other remodeling services")} className="sr-only" />
            <CircleDollarSign size={20} className="text-[#6d6257]" />
            <h4 className="mt-3 text-sm font-semibold text-[#302720]">Other project</h4>
            <p className="mt-2 text-xs leading-5 text-[#796d61]">Tell us what you are imagining and we will build a custom scope.</p>
          </label>
        </div>
        <p className="mt-3 text-[10px] leading-5 text-granite-500">Price guidance is illustrative. Your written proposal will reflect final measurements, materials, access, cutouts, demolition, and trade requirements.</p>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-bold text-granite-950 mb-3">
          Your Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-granite-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData((p) => ({ ...p, fullName: e.target.value }))
              }
              className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-granite-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData((p) => ({ ...p, phone: e.target.value }))
              }
              className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-granite-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData((p) => ({ ...p, email: e.target.value }))
              }
              className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-granite-700 mb-1">
              I am a...
            </label>
            <select
              value={formData.customerType}
              onChange={(e) =>
                setFormData((p) => ({ ...p, customerType: e.target.value }))
              }
              className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none bg-white"
            >
              <option value="">Select...</option>
              {customerTypes.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div>
        <h3 className="text-lg font-bold text-granite-950 mb-3">
          Project Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-granite-700 mb-1">
              Project Address
            </label>
            <input
              type="text"
              value={formData.projectAddress}
              onChange={(e) =>
                setFormData((p) => ({ ...p, projectAddress: e.target.value }))
              }
              className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-granite-700 mb-1">
                City
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, city: e.target.value }))
                }
                className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-granite-700 mb-1">
                ZIP Code
              </label>
              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, zipCode: e.target.value }))
                }
                className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-granite-700 mb-1">
              Property Type
            </label>
            <select
              value={formData.propertyType}
              onChange={(e) =>
                setFormData((p) => ({ ...p, propertyType: e.target.value }))
              }
              className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none bg-white"
            >
              <option value="">Select...</option>
              {propertyTypes.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-granite-700 mb-1">
              Timeline
            </label>
            <select
              value={formData.timeline}
              onChange={(e) =>
                setFormData((p) => ({ ...p, timeline: e.target.value }))
              }
              className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none bg-white"
            >
              <option value="">Select...</option>
              {timelineOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-granite-700 mb-1">
              Preferred Material
            </label>
            <input
              type="text"
              placeholder="e.g. Granite, Quartz, Not sure yet"
              value={formData.preferredMaterial}
              onChange={(e) =>
                setFormData((p) => ({
                  ...p,
                  preferredMaterial: e.target.value,
                }))
              }
              className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-granite-700 mb-1">
              Preferred Contact Method
            </label>
            <select
              value={formData.contactMethod}
              onChange={(e) =>
                setFormData((p) => ({ ...p, contactMethod: e.target.value }))
              }
              className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none bg-white"
            >
              <option value="">Select...</option>
              {contactMethods.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-granite-700 mb-1">
              Preferred Appointment Date
            </label>
            <input
              type="date"
              value={formData.appointmentDate}
              onChange={(e) =>
                setFormData((p) => ({
                  ...p,
                  appointmentDate: e.target.value,
                }))
              }
              className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-granite-700 mb-1">
              Approximate Measurements
            </label>
            <input
              type="text"
              placeholder="e.g. 25 sq ft, 10' x 3'"
              value={formData.measurements}
              onChange={(e) =>
                setFormData((p) => ({ ...p, measurements: e.target.value }))
              }
              className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-granite-700 mb-1">
          Project Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData((p) => ({ ...p, description: e.target.value }))
          }
          rows={4}
          placeholder="Describe your project, goals, and any special requirements..."
          className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-200 outline-none resize-none"
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-medium text-granite-700 mb-2">
          Upload Photos &amp; Documents
        </label>
        <div className="border-2 border-dashed border-granite-200 rounded-xl p-8 text-center hover:border-gold-400 transition cursor-pointer">
          <Upload className="mx-auto text-granite-400 mb-2" size={32} />
          <p className="text-granite-600 text-sm">
            Drag &amp; drop files here, or click to browse
          </p>
          <p className="text-granite-400 text-xs mt-1">
            Supports images, PDFs, and documents (max 10 files)
          </p>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting || !formData.fullName || !formData.phone || !formData.email}
        className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:bg-granite-300 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
      >
        {submitting ? (
          "Submitting..."
        ) : (
          <>
            Submit Estimate Request <Send size={20} />
          </>
        )}
      </button>
    </form>
  );
}
