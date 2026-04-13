// app/admin/about/page.tsx
"use client";

import { useState, useEffect } from "react";
import { 
  getAboutData, 
  updateAboutData, 
  parseValues, 
  stringifyValues,
  formatMission,
  formatMissionString,
  AboutData, 
  AboutValue 
} from "@/lib/aboutService";

export default function AdminAboutPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<Partial<AboutData>>({});
  const [activeTab, setActiveTab] = useState("hero");
  const [missionList, setMissionList] = useState<string[]>([
    "Menyajikan menu dengan waktu tunggu maksimal 15 menit tanpa mengurangi kualitas.",
    "Bermitra dengan petani lokal untuk bahan baku segar setiap hari.",
    "Mengembangkan menu inovatif yang menggabungkan cita rasa internasional dengan sentuhan lokal.",
    "Menciptakan pengalaman pelanggan yang ramah, cepat, dan berkesan melalui teknologi digital."
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const data = await getAboutData();
    if (data) {
      setFormData(data);
      
      let parsedMission = formatMission(data.mission);
      if (parsedMission.length === 0 || (parsedMission.length === 1 && parsedMission[0] === "")) {
        parsedMission = [
          "Menyajikan menu dengan waktu tunggu maksimal 15 menit tanpa mengurangi kualitas.",
          "Bermitra dengan petani lokal untuk bahan baku segar setiap hari.",
          "Mengembangkan menu inovatif yang menggabungkan cita rasa internasional dengan sentuhan lokal.",
          "Menciptakan pengalaman pelanggan yang ramah, cepat, dan berkesan melalui teknologi digital."
        ];
      }
      setMissionList(parsedMission);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    const updateData = {
      ...formData,
      values: "[]", // Kosongkan nilai perusahaan
      mission: formatMissionString(missionList)
    };
    
    const result = await updateAboutData(updateData);
    if (result) {
      alert("✓ Data berhasil disimpan!");
      fetchData();
    } else {
      alert("✗ Gagal menyimpan data!");
    }
    setSaving(false);
  };

  const handleMissionChange = (index: number, value: string) => {
    const newMissionList = [...missionList];
    newMissionList[index] = value;
    setMissionList(newMissionList);
  };

  const addMission = () => {
    setMissionList([...missionList, ""]);
  };

  const removeMission = (index: number) => {
    const newMissionList = missionList.filter((_, i) => i !== index);
    setMissionList(newMissionList);
  };

  const tabs = [
    { id: "hero", label: "Hero Section", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { id: "description", label: "Deskripsi", icon: "M4 6h16M4 12h16M4 18h7" },
    { id: "visi", label: "Visi & Misi", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Halaman Tentang Perusahaan</h1>
        <p className="text-gray-500 text-sm mt-1">Kelola konten halaman tentang perusahaan Anda</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-t-lg transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-white text-red-600 border-b-2 border-red-600"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tab.icon} />
            </svg>
            {tab.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Hero Section Tab */}
        {activeTab === "hero" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-800">Hero Section</h2>
              </div>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hero Title</label>
                <input
                  type="text"
                  value={formData.hero_title || ""}
                  onChange={(e) => setFormData({ ...formData, hero_title: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition outline-none"
                  placeholder="Contoh: Tentang PerusahaanKita"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hero Subtitle</label>
                <textarea
                  value={formData.hero_subtitle || ""}
                  onChange={(e) => setFormData({ ...formData, hero_subtitle: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition outline-none resize-none"
                  placeholder="Deskripsi singkat tentang perusahaan..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hero Image URL</label>
                <input
                  type="text"
                  value={formData.hero_image || ""}
                  onChange={(e) => setFormData({ ...formData, hero_image: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition outline-none"
                  placeholder="https://images.unsplash.com/..."
                />
                <p className="text-xs text-gray-400 mt-1">Gunakan URL gambar dari Unsplash atau hosting gambar lainnya</p>
              </div>
            </div>
          </div>
        )}

        {/* Deskripsi Tab */}
        {activeTab === "description" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-800">Deskripsi Perusahaan</h2>
              </div>
            </div>
            <div className="p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Konten Deskripsi</label>
              <textarea
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={12}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition outline-none font-mono text-sm"
                placeholder="Tulis deskripsi lengkap perusahaan di sini...&#10;&#10;Gunakan enter untuk membuat paragraf baru."
              />
              <p className="text-xs text-gray-400 mt-2">
                Tip: Gunakan baris kosong untuk memisahkan paragraf.
              </p>
            </div>
          </div>
        )}

        {/* Visi & Misi Tab */}
        {activeTab === "visi" && (
          <div className="space-y-6">
            {/* Visi */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">Visi Perusahaan</h2>
                </div>
              </div>
              <div className="p-6">
                <textarea
                  value={formData.vision || ""}
                  onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition outline-none"
                  placeholder="Tulis visi perusahaan di sini..."
                />
              </div>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">Misi Perusahaan</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {missionList.map((mission, index) => (
                    <div key={index} className="flex gap-2">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-sm font-semibold text-red-600">
                        {index + 1}
                      </div>
                      <input
                        type="text"
                        value={mission}
                        onChange={(e) => handleMissionChange(index, e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition outline-none"
                        placeholder={`Misi ${index + 1}`}
                      />
                      <button
                        type="button"
                        onClick={() => removeMission(index)}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                  
                  <button
                    type="button"
                    onClick={addMission}
                    className="mt-3 flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Tambah Misi
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button - Sticky Bottom */}
        <div className="sticky bottom-6 mt-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => fetchData()}
              className="px-5 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
            >
              Reset
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm"
            >
              {saving ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Menyimpan...
                </span>
              ) : (
                "Simpan Perubahan"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}