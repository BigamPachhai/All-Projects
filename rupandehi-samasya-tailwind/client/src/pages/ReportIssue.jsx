import React, { useRef, useState } from "react";
import api from "../api/client";
import { useAuth } from "../context/AuthContext";

const COMMON_LOCATIONS = [
  "Butwal Sub-Metropolitan City",
  "Siddharthanagar (Bhairahawa)",
  "Lumbini Sanskritik Municipality",
  "Tilottama Municipality",
  "Devdaha Municipality",
  "Sainamaina Municipality"
];

const ReportIssue = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "waste",
    locationName: "",
    locationType: "predefined",
    lat: "",
    lng: "",
    isAnonymous: false
  });
  const [imageFile, setImageFile] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef(null);

  if (!user) {
    return (
      <main className="mx-auto max-w-xl px-3 py-6">
        <div className="rounded-2xl border border-amber-100 bg-white/90 p-5 text-sm text-slate-700 shadow">
          कृपया पहिला{" "}
          <span className="font-semibold text-rose-700">Login</span> गरेर
          समस्या रिपोर्ट गर्नुहोस्।
        </div>
      </main>
    );
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setImageFile(file || null);
  };

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      alert("Browser मा location उपलब्ध छैन।");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setForm((prev) => ({
          ...prev,
          locationType: "manual",
          lat: pos.coords.latitude.toFixed(6),
          lng: pos.coords.longitude.toFixed(6)
        }));
      },
      () => {
        alert("लोकेशन लिन नमिल्यो। कृपया म्यानुअल राख्नुहोस्।");
      }
    );
  };

  const handleAiDescribe = async () => {
    if (!imageFile) {
      alert("पहिला फोटो छान्नुहोस्।");
      return;
    }
    setAiLoading(true);
    try {
      const fd = new FormData();
      fd.append("image", imageFile);
      const res = await api.post("/api/ai/describe", fd, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      const data = res.data;
      setForm((prev) => ({
        ...prev,
        category: data.category || prev.category,
        description: data.descriptionNepali || data.descriptionEnglish || prev.description
      }));
    } catch (err) {
      console.error(err);
      alert("AI बाट विवरण ल्याउँदा समस्या आयो।");
    } finally {
      setAiLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (imageFile) fd.append("image", imageFile);
      const res = await api.post("/api/issues", fd, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      alert("समस्या सफलतापूर्वक रिपोर्ट भयो। धन्यवाद!");
      setForm({
        title: "",
        description: "",
        category: "waste",
        locationName: "",
        locationType: "predefined",
        lat: "",
        lng: "",
        isAnonymous: false
      });
      setImageFile(null);
      if (fileRef.current) fileRef.current.value = "";
    } catch (err) {
      if (err.response?.status === 409 && err.response.data?.type === "DUPLICATE") {
        const existing = err.response.data.duplicateOf;
        alert(
          `यो समस्या पहिले नै रिपोर्ट भइसकेको जस्तो देखिन्छ: "${existing.title}" @ ${existing.locationName}. कृपया त्यही पोस्टलाई अपभोट गर्नुहोस्।`
        );
      } else {
        alert("रिपोर्ट गर्दा त्रुटि भयो।");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-3 py-5">
      <div className="rounded-3xl border border-amber-100 bg-white/95 p-5 shadow-md shadow-amber-100">
        <h1 className="text-lg font-semibold text-slate-900">
          समस्या रिपोर्ट गर्नुहोस्
        </h1>
        <p className="mt-1 text-xs text-slate-600">
          फोटो, क्याटेगरी, लोकेशन र संक्षिप्त विवरण लेख्नुहोस्।
        </p>
        <form onSubmit={handleSubmit} className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-slate-700">
                Short title
              </label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-xl border border-amber-200 bg-amber-50/40 px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-700">
                Category
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-amber-200 bg-amber-50/40 px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
              >
                <option value="waste">Waste / Garbage</option>
                <option value="water">Water</option>
                <option value="electrical">Electrical</option>
                <option value="road">Road / Street</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-700">
                Description
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={6}
                required
                className="mt-1 w-full rounded-xl border border-amber-200 bg-amber-50/40 px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                placeholder="के समस्या हो, कति दिनदेखि छ, जोखिम के छ?"
              />
              <button
                type="button"
                onClick={handleAiDescribe}
                disabled={aiLoading}
                className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
              >
                {aiLoading ? "AI विश्लेषण हुँदै..." : "AI बाट विवरण लेखाउनुहोस्"}
              </button>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-slate-700">
                चुनिने स्थान (Rupandehi)
              </label>
              <select
                name="locationName"
                value={form.locationName}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-amber-200 bg-amber-50/40 px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
              >
                <option value="">स्थान छान्नुहोस्…</option>
                {COMMON_LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={handleUseLocation}
                className="mt-2 inline-flex items-center gap-1 rounded-full border border-emerald-500 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-800 hover:bg-emerald-100"
              >
                📍 मोबाइलबाट लोकेशन लिनुहोस्
              </button>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="text-xs font-medium text-slate-700">
                  Latitude
                </label>
                <input
                  name="lat"
                  value={form.lat}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-amber-200 bg-amber-50/40 px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs font-medium text-slate-700">
                  Longitude
                </label>
                <input
                  name="lng"
                  value={form.lng}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-amber-200 bg-amber-50/40 px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-700">
                Photo (camera / gallery)
              </label>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileChange}
                className="mt-1 block w-full text-xs"
              />
              {imageFile && (
                <p className="mt-1 text-[11px] text-slate-500">
                  Selected: {imageFile.name}
                </p>
              )}
            </div>
            <label className="mt-2 flex items-center gap-2 text-xs text-slate-700">
              <input
                type="checkbox"
                name="isAnonymous"
                checked={form.isAnonymous}
                onChange={handleChange}
                className="h-3.5 w-3.5 rounded border-slate-400"
              />
              सार्वजनिक बोर्डमा नाम नदिखाउने (anonymous)
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="mt-3 w-full rounded-full bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-rose-700 disabled:opacity-60"
            >
              {submitting ? "रिपोर्ट पठाउँदै..." : "रिपोर्ट पठाउनुहोस्"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ReportIssue;
