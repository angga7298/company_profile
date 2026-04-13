// app/contact/page.tsx
"use client";

import { useState } from "react";
import api from "@/lib/api";
import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";

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
      setStatus({ type: "success", message: "Log transmisi berhasil terkirim. Petugas kami akan membalas di frekuensi Anda segera." });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: "Gagal mengirim log. Silakan periksa sistem komunikasi Anda." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-navy min-h-screen font-sans overflow-hidden">
      {/* IMMERSIVE HEADER SECTION */}
      <section className="bg-navy pt-60 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
           <img 
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2000&auto=format" 
            alt="Ocean Port" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md text-seafoam text-[10px] font-black tracking-[0.4em] uppercase mb-10 border border-white/10">
            Communication Hub
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-12 uppercase">
            HUBUNGI <br/> <span className="text-white/20">KOMANDO.</span>
          </h1>
          <p className="text-white/50 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-bold tracking-tight">
            Transmisikan pesan atau rencana kolaborasi Anda langsung ke pusat operasional Bahari Group.
          </p>
        </div>
        
        <div className="absolute bottom-[-2px] left-0 right-0 z-20">
          <WaveDivider color="#001F3F" flip={false} />
        </div>
      </section>

      {/* FORM & INFO SECTION */}
      <section className="py-40 px-6 bg-[#001F3F] relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
          
          {/* LEFT: STRATEGIC INFO */}
          <div className="space-y-20">
            <div>
              <span className="text-brass font-black tracking-[0.3em] uppercase text-[10px] mb-8 block">Network Map</span>
              <h2 className="text-5xl font-black text-white tracking-tighter mb-12 uppercase leading-none">POS KOORDINASI<br/><span className="text-seafoam">STRATEGIS.</span></h2>
              
              <div className="space-y-16">
                <div className="group">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20 block mb-4">Base Coordinates</span>
                  <p className="text-2xl font-black text-white group-hover:text-seafoam transition-colors duration-500">Jl. Bahari Nusantara No. 88, Sektor I, Jakarta</p>
                </div>
                <div className="group">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20 block mb-4">Direct Frequency (Email)</span>
                  <a href="mailto:hq@baharigroup.com" className="text-2xl font-black text-brass hover:text-white transition-colors duration-500 uppercase tracking-tighter">hq@baharigroup.com</a>
                </div>
                <div className="group">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20 block mb-4">Emergency Line (WhatsApp)</span>
                  <a href="tel:+62215550123" className="text-2xl font-black text-white hover:text-seafoam transition-colors duration-500 tracking-tighter">+62 21 555 0123</a>
                </div>
              </div>
            </div>

            <div className="pt-20 border-t border-white/5 flex gap-12">
              {['LinkedIn', 'Instagram', 'Intelligence'].map(social => (
                <a key={social} href="#" className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-brass transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: COMMAND FORM */}
          <div className="bg-navy rounded-[4rem] p-16 md:p-20 shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden group">
            <h2 className="text-3xl font-black text-white tracking-tight mb-12 uppercase">Kirim Transmisi</h2>
            
            {status.type && (
              <div className={`mb-12 p-8 rounded-3xl text-sm font-black tracking-tight ${status.type === "success" ? "bg-seafoam/10 text-seafoam border border-seafoam/20" : "bg-red-500/10 text-red-500 border border-red-500/20"}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/20 pl-6">Identitas Pengirim</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Nama Lengkap / Instansi"
                  className="w-full bg-[#001F3F] border-none rounded-3xl px-8 py-5 text-sm font-bold text-white focus:ring-4 focus:ring-seafoam/20 transition-all outline-none shadow-inner"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/20 pl-6">Alamat Transmisi (Email)</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="email@instansi.com"
                  className="w-full bg-[#001F3F] border-none rounded-3xl px-8 py-5 text-sm font-bold text-white focus:ring-4 focus:ring-seafoam/20 transition-all outline-none shadow-inner"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/20 pl-6">Pesan Strategis</label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Detail kolaborasi atau pertanyaan..."
                  className="w-full bg-[#001F3F] border-none rounded-[2.5rem] px-8 py-6 text-sm font-bold text-white leading-relaxed focus:ring-4 focus:ring-seafoam/20 transition-all outline-none shadow-inner"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-6 bg-brass text-navy font-black uppercase tracking-[0.4em] text-xs rounded-full hover:bg-white hover:scale-105 transition-all duration-500 shadow-2xl disabled:bg-white/10"
              >
                {loading ? "Transmitting..." : "Kirim Sekarang ⚓"}
              </button>
            </form>
            
            {/* Background Detail */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl pointer-events-none group-hover:bg-seafoam/5 transition-colors" />
          </div>
        </div>
        
        {/* Wave Divider to Deepest Sea */}
        <div className="absolute bottom-[-2px] left-0 right-0 z-30">
          <WaveDivider color="#001220" />
        </div>
      </section>

      {/* ADDITIONAL CONTENT (STRATEGIC PARTNERSHIP) */}
      <section className="py-40 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-seafoam font-black tracking-[0.4em] uppercase text-[10px] mb-8 block">Global Alliance</span>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-12 uppercase">SINERGI <br/><span className="text-white/10">SAMUDERA.</span></h2>
          <div className="text-white/40 text-xl font-bold leading-loose tracking-tight text-justify">
            <p>
              Keberlanjutan sektor kelautan bukan hanya tanggung jawab satu entitas. Bahari Group mengundang seluruh elemen industri—dari periset hingga penyandang dana—untuk membangun ekosistem maritim yang tangguh dan berdaya saing global.
            </p>
          </div>
        </div>
      </section>

      {/* BACK NAVIGATION */}
      <div className="py-32 text-center">
        <Link href="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white transition-all group">
          <span className="inline-block transition-transform group-hover:-translate-x-3 mr-2">←</span> 
          Return to Deck
        </Link>
      </div>
    </main>
  );
}