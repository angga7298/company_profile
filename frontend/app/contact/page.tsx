// app/contact/page.tsx
"use client";

import { useState } from "react";
import api from "@/lib/api";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/contact", form);
      setStatus({ type: "success", message: "Pesan berhasil dikirim. Terima kasih!" });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: "Gagal mengirim pesan. Silakan coba lagi." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative w-full bg-blue-900 py-16 md:py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=900')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hubungi Kami</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Kami siap mendengar saran, pertanyaan, atau kolaborasi Anda untuk perikanan berkelanjutan.
          </p>
        </div>
      </section>

      {/* Form & Info Kontak */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Bagian Kiri - Info Kontak */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Informasi Kontak</h2>
              <div className="space-y-6">
                {/* ... (sama seperti sebelumnya, tidak perlu diubah) ... */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href="mailto:info@perikananlestari.com" className="text-blue-600 hover:underline">info@perikananlestari.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Telepon / WhatsApp</h3>
                    <a href="https://wa.me/6281234567890" className="text-blue-600 hover:underline">+62 812-3456-7890</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Alamat</h3>
                    <p className="text-gray-600">Jl. Perikanan No. 123, Jakarta Selatan, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Media Sosial</h3>
                    <div className="flex gap-4 mt-2">
                      <a href="https://instagram.com/perikananlestari" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Instagram</a>
                      <a href="https://facebook.com/perikananlestari" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Facebook</a>
                      <a href="https://twitter.com/perikananlestari" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Twitter</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bagian Kanan - Form Kontak (DIUBAH: teks input jadi hitam) */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Kirim Pesan</h2>
              {status.type && (
                <div className={`mb-4 p-3 rounded-lg ${status.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                  {status.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-xl p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Alamat Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-xl p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Pesan</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-xl p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition transform hover:scale-[1.01] disabled:bg-gray-400 disabled:hover:scale-100"
                >
                  {loading ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Artikel Pendukung - Pentingnya Kolaborasi */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Kolaborasi</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-2">Bersama Membangun Perikanan Berkelanjutan</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="prose prose-lg text-gray-600 mx-auto text-justify leading-relaxed space-y-6">
            <p>
              Perubahan besar dalam sektor perikanan tidak bisa dilakukan sendiri. Kami mengundang individu, komunitas, LSM, pemerintah, dan swasta untuk berkolaborasi. Setiap masukan dan dukungan Anda sangat berarti bagi masa depan laut Indonesia.
            </p>
            <p>
              Dengan menghubungi kami, Anda menjadi bagian dari gerakan untuk menjaga ekosistem laut sekaligus meningkatkan kesejahteraan nelayan. Mari diskusikan ide, proyek, atau peluang kemitraan bersama kami.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <p className="text-blue-800 font-semibold italic">
                "Laut yang sehat adalah warisan untuk anak cucu kita. Kolaborasi adalah kuncinya."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA kecil - kembali ke beranda */}
      <section className="w-full py-12 bg-gray-50 text-center">
        <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-1">
          ← Kembali ke Beranda
        </Link>
      </section>
    </main>
  );
}