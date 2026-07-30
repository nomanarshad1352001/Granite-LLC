"use client";

import { useState, useRef, useCallback } from "react";
import {
  RotateCcw,
  Trash2,
  Send,
  Plus,
  Move,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  Upload,
  Grid,
} from "lucide-react";

// Types
interface DesignItem {
  id: string;
  type: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  color: string;
}

interface WallMeasurement {
  id: string;
  label: string;
  length: string;
}

const KITCHEN_SHAPES = [
  { id: "l-shaped", name: "L-Shaped", desc: "Two walls meeting at a right angle" },
  { id: "u-shaped", name: "U-Shaped", desc: "Three walls forming a U shape" },
  { id: "galley", name: "Galley", desc: "Two parallel walls" },
  { id: "one-wall", name: "One-Wall", desc: "Single wall layout" },
  { id: "island", name: "With Island", desc: "Layout with a center island" },
  { id: "peninsula", name: "With Peninsula", desc: "Layout with an attached peninsula" },
];

const ITEM_CATALOG = [
  { type: "base-cabinet", label: "Base Cabinet 24\"", width: 60, height: 24, color: "#8B7355" },
  { type: "base-cabinet-36", label: "Base Cabinet 36\"", width: 90, height: 24, color: "#8B7355" },
  { type: "wall-cabinet", label: "Wall Cabinet 30\"", width: 75, height: 14, color: "#A0926B" },
  { type: "wall-cabinet-36", label: "Wall Cabinet 36\"", width: 90, height: 14, color: "#A0926B" },
  { type: "tall-cabinet", label: "Tall/Pantry Cabinet", width: 36, height: 24, color: "#7A6545" },
  { type: "island", label: "Kitchen Island", width: 120, height: 60, color: "#6B5B3E" },
  { type: "peninsula", label: "Peninsula", width: 100, height: 40, color: "#6B5B3E" },
  { type: "sink", label: "Sink", width: 40, height: 24, color: "#4A90A4" },
  { type: "cooktop", label: "Cooktop/Range", width: 50, height: 26, color: "#2F2F2F" },
  { type: "refrigerator", label: "Refrigerator", width: 36, height: 30, color: "#708090" },
  { type: "dishwasher", label: "Dishwasher", width: 24, height: 24, color: "#A9A9A9" },
  { type: "wall-oven", label: "Wall Oven", width: 30, height: 26, color: "#3F3F3F" },
  { type: "door", label: "Door", width: 40, height: 8, color: "#CD853F" },
  { type: "window", label: "Window", width: 48, height: 6, color: "#87CEEB" },
];

const generateId = () => Math.random().toString(36).substring(2, 9);

export function KitchenDesigner() {
  const [step, setStep] = useState(1);
  const [kitchenShape, setKitchenShape] = useState("");
  const [items, setItems] = useState<DesignItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [walls, setWalls] = useState<WallMeasurement[]>([
    { id: generateId(), label: "Wall A", length: "" },
    { id: generateId(), label: "Wall B", length: "" },
  ]);
  const [countertopMeasurements, setCountertopMeasurements] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
    propertyAddress: "",
    contactMethod: "email",
  });
  const canvasRef = useRef<HTMLDivElement>(null);

  // Navigate to specific step
  const goToStep = (newStep: number) => {
    if (newStep >= 1 && newStep <= 4) {
      setStep(newStep);
    }
  };

  const addItem = useCallback((catalogItem: typeof ITEM_CATALOG[0]) => {
    const newItem: DesignItem = {
      id: generateId(),
      type: catalogItem.type,
      label: catalogItem.label,
      x: 150 + Math.random() * 200,
      y: 100 + Math.random() * 150,
      width: catalogItem.width,
      height: catalogItem.height,
      rotation: 0,
      color: catalogItem.color,
    };
    setItems((prev) => [...prev, newItem]);
    setSelectedId(newItem.id);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setSelectedId(null);
  }, []);

  const rotateItem = useCallback((id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, rotation: (item.rotation + 90) % 360 } : item
      )
    );
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.preventDefault();
      e.stopPropagation();
      const item = items.find((i) => i.id === id);
      if (!item || !canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left - item.x,
        y: e.clientY - rect.top - item.y,
      });
      setSelectedId(id);
      setIsDragging(true);
    },
    [items]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !selectedId || !canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left - dragOffset.x, rect.width - 50));
      const y = Math.max(0, Math.min(e.clientY - rect.top - dragOffset.y, rect.height - 50));
      setItems((prev) =>
        prev.map((item) => (item.id === selectedId ? { ...item, x, y } : item))
      );
    },
    [isDragging, selectedId, dragOffset]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent, id: string) => {
      e.stopPropagation();
      const touch = e.touches[0];
      const item = items.find((i) => i.id === id);
      if (!item || !canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      setDragOffset({
        x: touch.clientX - rect.left - item.x,
        y: touch.clientY - rect.top - item.y,
      });
      setSelectedId(id);
      setIsDragging(true);
    },
    [items]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || !selectedId || !canvasRef.current) return;
      const touch = e.touches[0];
      const rect = canvasRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(touch.clientX - rect.left - dragOffset.x, rect.width - 50));
      const y = Math.max(0, Math.min(touch.clientY - rect.top - dragOffset.y, rect.height - 50));
      setItems((prev) =>
        prev.map((item) => (item.id === selectedId ? { ...item, x, y } : item))
      );
    },
    [isDragging, selectedId, dragOffset]
  );

  const clearCanvas = useCallback(() => {
    setItems([]);
    setSelectedId(null);
  }, []);

  // Update walls based on shape
  const handleShapeSelect = (shapeId: string) => {
    setKitchenShape(shapeId);
    const shapeWalls: Record<string, string[]> = {
      "l-shaped": ["Wall A (Long)", "Wall B (Short)"],
      "u-shaped": ["Wall A (Left)", "Wall B (Back)", "Wall C (Right)"],
      galley: ["Wall A (Left)", "Wall B (Right)"],
      "one-wall": ["Wall A"],
      island: ["Wall A", "Wall B", "Island Length", "Island Width"],
      peninsula: ["Wall A", "Wall B", "Peninsula Length"],
    };
    const wallNames = shapeWalls[shapeId] || ["Wall A", "Wall B"];
    setWalls(wallNames.map((label) => ({ id: generateId(), label, length: "" })));
  };

  const handleSubmit = async () => {
    if (!contactInfo.fullName || !contactInfo.phone || !contactInfo.email) {
      alert("Please fill in all required fields");
      return;
    }
    
    setSubmitting(true);
    try {
      const res = await fetch("/api/kitchen-designs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...contactInfo,
          kitchenShape,
          designData: {
            items,
            walls,
            countertopMeasurements,
          },
          notes,
          fileUrls: [],
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setItems([]);
    setKitchenShape("");
    setNotes("");
    setCountertopMeasurements("");
    setWalls([
      { id: generateId(), label: "Wall A", length: "" },
      { id: generateId(), label: "Wall B", length: "" },
    ]);
    setContactInfo({
      fullName: "",
      phone: "",
      email: "",
      propertyAddress: "",
      contactMethod: "email",
    });
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-20 px-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-green-600" size={40} />
        </div>
        <h2 className="text-2xl font-bold text-granite-950 mb-3">
          Design Submitted Successfully!
        </h2>
        <p className="text-granite-600 mb-6">
          Thank you for submitting your kitchen design. Our team will review
          your layout and contact you within 1-2 business days to discuss
          your project and provide a free estimate.
        </p>
        <button
          onClick={resetForm}
          className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Create Another Design
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-granite-100 overflow-hidden">
      {/* Step Indicator - All clickable */}
      <div className="bg-granite-50 border-b border-granite-100 px-4 py-4">
        <div className="flex items-center justify-center gap-2 md:gap-4 text-sm">
          {[
            { num: 1, label: "Kitchen Shape" },
            { num: 2, label: "Design Layout" },
            { num: 3, label: "Measurements" },
            { num: 4, label: "Submit" },
          ].map((s) => (
            <button
              key={s.num}
              onClick={() => goToStep(s.num)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full font-medium transition cursor-pointer hover:opacity-80 ${
                step === s.num
                  ? "bg-gold-500 text-white"
                  : step > s.num
                  ? "bg-green-500 text-white"
                  : "bg-granite-200 text-granite-600 hover:bg-granite-300"
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                {step > s.num ? "✓" : s.num}
              </span>
              <span className="hidden md:inline">{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 md:p-6">
        {/* Step 1: Kitchen Shape */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-granite-950 mb-2">
              Select Your Kitchen Shape
            </h2>
            <p className="text-granite-600 text-sm mb-6">
              Choose the basic layout that best matches your kitchen.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {KITCHEN_SHAPES.map((shape) => (
                <button
                  key={shape.id}
                  onClick={() => handleShapeSelect(shape.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                    kitchenShape === shape.id
                      ? "border-gold-500 bg-gold-50 shadow-md"
                      : "border-granite-200 hover:border-granite-300 bg-white"
                  }`}
                >
                  <div className="w-full aspect-square mb-3 bg-granite-100 rounded-lg flex items-center justify-center">
                    <KitchenShapeIcon shape={shape.id} selected={kitchenShape === shape.id} />
                  </div>
                  <h3 className="font-semibold text-granite-950 text-sm">
                    {shape.name}
                  </h3>
                  <p className="text-granite-500 text-xs mt-1">{shape.desc}</p>
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-8">
              <div></div>
              <button
                onClick={() => goToStep(2)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
                  kitchenShape 
                    ? "bg-gold-500 hover:bg-gold-600 text-white" 
                    : "bg-granite-200 text-granite-500 cursor-not-allowed"
                }`}
                disabled={!kitchenShape}
              >
                Next: Design Layout <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Interactive Canvas */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold text-granite-950 mb-2">
              Design Your Kitchen Layout
            </h2>
            <p className="text-granite-600 text-sm mb-4">
              Click items below to add them, then drag to position. Tap an item to select it.
            </p>
            
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Item Palette */}
              <div className="lg:w-64 shrink-0">
                <h3 className="font-bold text-granite-950 mb-3 text-sm flex items-center gap-2">
                  <Plus size={16} /> Add Items
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 max-h-[400px] lg:max-h-[500px] overflow-y-auto pr-2">
                  {ITEM_CATALOG.map((cat) => (
                    <button
                      key={cat.type}
                      onClick={() => addItem(cat)}
                      className="flex items-center gap-2 p-3 rounded-lg border border-granite-200 hover:border-gold-400 hover:bg-gold-50 transition text-left text-xs group"
                    >
                      <div
                        className="w-8 h-8 rounded shrink-0 flex items-center justify-center text-white text-[8px] font-bold"
                        style={{ backgroundColor: cat.color }}
                      >
                        {cat.label.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="text-granite-700 font-medium leading-tight flex-1">
                        {cat.label}
                      </span>
                      <Plus size={14} className="text-granite-400 group-hover:text-gold-500 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Canvas */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-granite-500 flex items-center gap-1">
                    <Move size={12} />
                    Drag items to position
                  </p>
                  <div className="flex gap-2">
                    {selectedId && (
                      <>
                        <button
                          onClick={() => rotateItem(selectedId)}
                          className="p-2 rounded border border-granite-200 hover:bg-granite-50 text-granite-600 text-xs flex items-center gap-1"
                          title="Rotate"
                        >
                          <RotateCcw size={14} /> Rotate
                        </button>
                        <button
                          onClick={() => removeItem(selectedId)}
                          className="p-2 rounded border border-red-200 hover:bg-red-50 text-red-500 text-xs flex items-center gap-1"
                          title="Remove"
                        >
                          <Trash2 size={14} /> Remove
                        </button>
                      </>
                    )}
                    <button
                      onClick={clearCanvas}
                      className="p-2 rounded border border-granite-200 hover:bg-granite-50 text-granite-600 text-xs"
                    >
                      Clear All
                    </button>
                  </div>
                </div>
                
                <div
                  ref={canvasRef}
                  className="relative bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-granite-300 rounded-xl overflow-hidden"
                  style={{ height: "450px", touchAction: "none" }}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleMouseUp}
                  onClick={(e) => {
                    if (e.target === e.currentTarget) setSelectedId(null);
                  }}
                >
                  {/* Grid Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#ddd" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>

                  {/* Kitchen shape overlay */}
                  <KitchenShapeOverlay shape={kitchenShape} />

                  {/* Placed Items */}
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className={`absolute cursor-move select-none flex items-center justify-center text-white text-[9px] font-bold rounded shadow-lg border-2 transition-all ${
                        selectedId === item.id
                          ? "border-gold-500 ring-2 ring-gold-300 z-20"
                          : "border-white/50 z-10 hover:border-gold-300"
                      }`}
                      style={{
                        left: item.x,
                        top: item.y,
                        width: item.width,
                        height: item.height,
                        backgroundColor: item.color,
                        transform: `rotate(${item.rotation}deg)`,
                      }}
                      onMouseDown={(e) => handleMouseDown(e, item.id)}
                      onTouchStart={(e) => handleTouchStart(e, item.id)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedId(item.id);
                      }}
                    >
                      <span className="truncate px-1 drop-shadow text-center leading-tight">
                        {item.label}
                      </span>
                    </div>
                  ))}

                  {items.length === 0 && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-granite-400 text-sm pointer-events-none">
                      <Grid size={32} className="mb-2 opacity-50" />
                      <p>Click items on the left to add them</p>
                      <p className="text-xs mt-1">Then drag to position</p>
                    </div>
                  )}
                </div>

                {/* Selected item info */}
                {selectedId && (
                  <div className="mt-3 p-3 bg-gold-50 rounded-lg border border-gold-200 text-sm flex items-center justify-between">
                    <span>
                      <strong>Selected:</strong>{" "}
                      {items.find((i) => i.id === selectedId)?.label}
                    </span>
                    <span className="text-granite-500 text-xs">
                      Drag to move • Use buttons to rotate/remove
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between mt-6 pt-4 border-t border-granite-100">
              <button
                onClick={() => goToStep(1)}
                className="flex items-center gap-2 text-granite-600 hover:text-granite-950 px-4 py-2 rounded-lg transition"
              >
                <ChevronLeft size={18} /> Back
              </button>
              <button
                onClick={() => goToStep(3)}
                className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Next: Measurements <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Measurements & Notes */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold text-granite-950 mb-2">
              Measurements &amp; Notes
            </h2>
            <p className="text-granite-600 text-sm mb-6">
              Enter the measurements for each wall and add any project notes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-granite-950 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-gold-500 text-white rounded-full flex items-center justify-center text-xs">1</span>
                  Wall Measurements
                </h3>
                <div className="space-y-3">
                  {walls.map((wall, idx) => (
                    <div key={wall.id} className="flex gap-3 items-center">
                      <label className="w-36 text-sm font-medium text-granite-700 shrink-0">
                        {wall.label}
                      </label>
                      <input
                        type="text"
                        placeholder='e.g. 120" or 10ft'
                        value={wall.length}
                        onChange={(e) =>
                          setWalls((prev) =>
                            prev.map((w) =>
                              w.id === wall.id ? { ...w, length: e.target.value } : w
                            )
                          )
                        }
                        className="flex-1 border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() =>
                    setWalls((prev) => [
                      ...prev,
                      {
                        id: generateId(),
                        label: `Wall ${String.fromCharCode(65 + prev.length)}`,
                        length: "",
                      },
                    ])
                  }
                  className="mt-3 text-sm text-gold-600 hover:text-gold-700 font-medium flex items-center gap-1"
                >
                  <Plus size={14} /> Add Another Wall
                </button>
              </div>

              <div>
                <h3 className="font-semibold text-granite-950 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-gold-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
                  Countertop Measurements
                </h3>
                <textarea
                  value={countertopMeasurements}
                  onChange={(e) => setCountertopMeasurements(e.target.value)}
                  placeholder="Enter approximate countertop dimensions, depth, any special cutouts needed..."
                  className="w-full border border-granite-200 rounded-lg px-3 py-3 text-sm h-28 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none resize-none"
                />

                <h3 className="font-semibold text-granite-950 mb-4 mt-6 flex items-center gap-2">
                  <span className="w-6 h-6 bg-gold-500 text-white rounded-full flex items-center justify-center text-xs">3</span>
                  Project Notes
                </h3>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any additional details, special requests, or notes about your project..."
                  className="w-full border border-granite-200 rounded-lg px-3 py-3 text-sm h-28 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none resize-none"
                />
              </div>
            </div>

            {/* File upload area */}
            <div className="mt-8">
              <h3 className="font-semibold text-granite-950 mb-3">
                Upload Pictures or Floor Plans (Optional)
              </h3>
              <div className="border-2 border-dashed border-granite-300 rounded-xl p-8 text-center hover:border-gold-400 transition cursor-pointer bg-granite-50">
                <Upload className="mx-auto text-granite-400 mb-2" size={32} />
                <p className="text-granite-600 text-sm">
                  Drag &amp; drop files here, or click to browse
                </p>
                <p className="text-granite-400 text-xs mt-1">
                  Supports images, PDFs, and documents
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-8 pt-4 border-t border-granite-100">
              <button
                onClick={() => goToStep(2)}
                className="flex items-center gap-2 text-granite-600 hover:text-granite-950 px-4 py-2 rounded-lg transition"
              >
                <ChevronLeft size={18} /> Back
              </button>
              <button
                onClick={() => goToStep(4)}
                className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Next: Submit <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Contact Info & Submit */}
        {step === 4 && (
          <div>
            <h2 className="text-xl font-bold text-granite-950 mb-2">
              Your Contact Information
            </h2>
            <p className="text-granite-600 text-sm mb-6">
              Please provide your details so our team can review your design and contact you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-granite-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={contactInfo.fullName}
                  onChange={(e) =>
                    setContactInfo((p) => ({ ...p, fullName: e.target.value }))
                  }
                  className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-granite-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={contactInfo.phone}
                  onChange={(e) =>
                    setContactInfo((p) => ({ ...p, phone: e.target.value }))
                  }
                  className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-granite-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) =>
                    setContactInfo((p) => ({ ...p, email: e.target.value }))
                  }
                  className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-granite-700 mb-1">
                  Property Address
                </label>
                <input
                  type="text"
                  value={contactInfo.propertyAddress}
                  onChange={(e) =>
                    setContactInfo((p) => ({ ...p, propertyAddress: e.target.value }))
                  }
                  className="w-full border border-granite-200 rounded-lg px-3 py-2.5 text-sm focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none"
                  placeholder="123 Main St, City, ST"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-granite-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex gap-6">
                  {["email", "phone", "text"].map((method) => (
                    <label
                      key={method}
                      className="flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method}
                        checked={contactInfo.contactMethod === method}
                        onChange={(e) =>
                          setContactInfo((p) => ({ ...p, contactMethod: e.target.value }))
                        }
                        className="accent-gold-500 w-4 h-4"
                      />
                      <span className="capitalize">{method}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Design Summary */}
            <div className="mt-8 p-5 bg-granite-50 rounded-xl border border-granite-200">
              <h3 className="font-semibold text-granite-950 mb-4">
                Design Summary
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white p-3 rounded-lg">
                  <span className="text-granite-500 text-xs block mb-1">Kitchen Shape</span>
                  <p className="font-semibold text-granite-950 capitalize">
                    {kitchenShape ? kitchenShape.replace("-", " ") : "Not selected"}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <span className="text-granite-500 text-xs block mb-1">Items Placed</span>
                  <p className="font-semibold text-granite-950">{items.length} items</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <span className="text-granite-500 text-xs block mb-1">Walls Measured</span>
                  <p className="font-semibold text-granite-950">
                    {walls.filter((w) => w.length).length} of {walls.length}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <span className="text-granite-500 text-xs block mb-1">Notes Added</span>
                  <p className="font-semibold text-granite-950">
                    {notes || countertopMeasurements ? "Yes" : "None"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8 pt-4 border-t border-granite-100">
              <button
                onClick={() => goToStep(3)}
                className="flex items-center gap-2 text-granite-600 hover:text-granite-950 px-4 py-2 rounded-lg transition"
              >
                <ChevronLeft size={18} /> Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting || !contactInfo.fullName || !contactInfo.phone || !contactInfo.email}
                className={`flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition ${
                  submitting || !contactInfo.fullName || !contactInfo.phone || !contactInfo.email
                    ? "bg-granite-300 text-granite-500 cursor-not-allowed"
                    : "bg-gold-500 hover:bg-gold-600 text-white"
                }`}
              >
                {submitting ? (
                  <>
                    <span className="animate-spin">⏳</span> Submitting...
                  </>
                ) : (
                  <>
                    Submit Design <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function KitchenShapeIcon({ shape, selected }: { shape: string; selected?: boolean }) {
  const strokeColor = selected ? "#d99a2b" : "#9ca3af";
  const strokeWidth = selected ? "3" : "2";
  
  switch (shape) {
    case "l-shaped":
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16">
          <path d="M15 15 L15 65 L65 65 L65 45 L35 45 L35 15 Z" fill={selected ? "#fdf9ef" : "#f3f4f6"} stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );
    case "u-shaped":
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16">
          <path d="M15 15 L15 65 L65 65 L65 15 L50 15 L50 50 L30 50 L30 15 Z" fill={selected ? "#fdf9ef" : "#f3f4f6"} stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );
    case "galley":
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16">
          <rect x="15" y="15" width="50" height="15" fill={selected ? "#fdf9ef" : "#f3f4f6"} stroke={strokeColor} strokeWidth={strokeWidth} />
          <rect x="15" y="50" width="50" height="15" fill={selected ? "#fdf9ef" : "#f3f4f6"} stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );
    case "one-wall":
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16">
          <rect x="15" y="30" width="50" height="20" fill={selected ? "#fdf9ef" : "#f3f4f6"} stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );
    case "island":
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16">
          <path d="M15 15 L15 65 L65 65 L65 45 L35 45 L35 15 Z" fill={selected ? "#fdf9ef" : "#f3f4f6"} stroke={strokeColor} strokeWidth={strokeWidth} />
          <rect x="40" y="22" width="18" height="12" fill={selected ? "#fdf9ef" : "#f3f4f6"} stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );
    case "peninsula":
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16">
          <path d="M15 15 L15 65 L65 65 L65 45 L35 45 L35 15 Z" fill={selected ? "#fdf9ef" : "#f3f4f6"} stroke={strokeColor} strokeWidth={strokeWidth} />
          <rect x="42" y="45" width="10" height="15" fill={selected ? "#fdf9ef" : "#f3f4f6"} stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 80 80" className="w-16 h-16">
          <rect x="20" y="20" width="40" height="40" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2" />
        </svg>
      );
  }
}

function KitchenShapeOverlay({ shape }: { shape: string }) {
  if (!shape) return null;
  
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 450">
      {shape === "l-shaped" && (
        <path
          d="M50 30 L50 420 L750 420 L750 250 L300 250 L300 30 Z"
          fill="rgba(217, 154, 43, 0.05)"
          stroke="#d99a2b"
          strokeWidth="2"
          strokeDasharray="8 4"
        />
      )}
      {shape === "u-shaped" && (
        <path
          d="M50 30 L50 420 L750 420 L750 30 L550 30 L550 280 L250 280 L250 30 Z"
          fill="rgba(217, 154, 43, 0.05)"
          stroke="#d99a2b"
          strokeWidth="2"
          strokeDasharray="8 4"
        />
      )}
      {shape === "galley" && (
        <>
          <rect x="50" y="30" width="700" height="80" fill="rgba(217, 154, 43, 0.05)" stroke="#d99a2b" strokeWidth="2" strokeDasharray="8 4" />
          <rect x="50" y="340" width="700" height="80" fill="rgba(217, 154, 43, 0.05)" stroke="#d99a2b" strokeWidth="2" strokeDasharray="8 4" />
        </>
      )}
      {shape === "one-wall" && (
        <rect x="50" y="180" width="700" height="90" fill="rgba(217, 154, 43, 0.05)" stroke="#d99a2b" strokeWidth="2" strokeDasharray="8 4" />
      )}
      {shape === "island" && (
        <>
          <path
            d="M50 30 L50 420 L750 420 L750 250 L300 250 L300 30 Z"
            fill="rgba(217, 154, 43, 0.05)"
            stroke="#d99a2b"
            strokeWidth="2"
            strokeDasharray="8 4"
          />
          <rect x="380" y="80" width="180" height="100" fill="rgba(217, 154, 43, 0.08)" stroke="#d99a2b" strokeWidth="2" strokeDasharray="8 4" />
        </>
      )}
      {shape === "peninsula" && (
        <>
          <path
            d="M50 30 L50 420 L750 420 L750 250 L300 250 L300 30 Z"
            fill="rgba(217, 154, 43, 0.05)"
            stroke="#d99a2b"
            strokeWidth="2"
            strokeDasharray="8 4"
          />
          <rect x="380" y="250" width="100" height="120" fill="rgba(217, 154, 43, 0.08)" stroke="#d99a2b" strokeWidth="2" strokeDasharray="8 4" />
        </>
      )}
    </svg>
  );
}
