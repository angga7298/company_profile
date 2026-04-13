// app/about/page.tsx
"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { 
  getAboutData, 
  parseValues, 
  formatMission, 
  AboutData, 
  AboutValue 
} from "@/lib/aboutService";

// ========== HOOK SCROLL REVEAL ==========
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const RevealSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref as any}
      className={`transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// ========== LOADING STATE ==========
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
  </div>
);

export default function AboutPage() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState<AboutValue[]>([
    { title: "Kecepatan Tanpa Kompromi", description: "Setiap pesanan diproses dengan sistem efisien sehingga Anda tidak perlu menunggu lama, namun rasa tetap terjaga.", icon: "⚡" },
    { title: "Kualitas Bahan Baku", description: "Hanya bahan segar, tanpa pengawet. Daging sapi pilihan, ayam kampung, sayuran organik, dan rempah asli.", icon: "🥩" },
    { title: "Komunitas Foodie", description: "Kami membangun ruang bagi pecinta kuliner untuk berbagi pengalaman, review, dan eksplorasi rasa bersama.", icon: "👥" }
  ]);
  const [missionList, setMissionList] = useState<string[]>([
    "Menyajikan menu dengan waktu tunggu maksimal 15 menit tanpa mengurangi kualitas.",
    "Bermitra dengan petani lokal untuk bahan baku segar setiap hari.",
    "Mengembangkan menu inovatif yang menggabungkan cita rasa internasional dengan sentuhan lokal.",
    "Menciptakan pengalaman pelanggan yang ramah, cepat, dan berkesan melalui teknologi digital."
  ]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getAboutData();
      setAboutData(data);
      
      if (data) {
        let parsedValues = parseValues(data.values);
        if (!parsedValues || parsedValues.length === 0) {
          parsedValues = [
            { title: "Kecepatan Tanpa Kompromi", description: "Setiap pesanan diproses dengan sistem efisien sehingga Anda tidak perlu menunggu lama, namun rasa tetap terjaga.", icon: "⚡" },
            { title: "Kualitas Bahan Baku", description: "Hanya bahan segar, tanpa pengawet. Daging sapi pilihan, ayam kampung, sayuran organik, dan rempah asli.", icon: "🥩" },
            { title: "Komunitas Foodie", description: "Kami membangun ruang bagi pecinta kuliner untuk berbagi pengalaman, review, dan eksplorasi rasa bersama.", icon: "👥" }
          ];
        }
        setValues(parsedValues);
        
        let parsedMission = formatMission(data.mission);
        if (!parsedMission || parsedMission.length === 0 || (parsedMission.length === 1 && parsedMission[0] === "")) {
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
    
    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!aboutData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Data Tidak Ditemukan</h1>
          <p className="text-gray-600">Silakan hubungi administrator.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white overflow-hidden font-sans">
      {/* ========== HERO SECTION - FOTO DI ATAS, TEXT RATA KIRI ========== */}
      <section className="relative w-full">
        {/* Hero Image - Full width dengan overlay gradien */}
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQiqy14nBj6yacITdD8afM8W5O7tU3xRabvIdppiD2qc2Iyaymh)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
          
          {/* Text Content - Posisi kiri bawah dengan styling berbeda */}
          <div className="absolute bottom-0 left-0 right-0 pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold tracking-wide mb-5 border border-white/30">
                ✦ Tentang Kami ✦
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
                {aboutData.hero_title}
              </h1>
              <p className="text-base md:text-xl text-white/90 max-w-2xl leading-relaxed">
                {aboutData.hero_subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== DESKRIPSI PERUSAHAAN ========== */}
      <RevealSection>
        <section className="w-full py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-red-600 font-semibold tracking-wide uppercase text-sm">Tentang Perusahaan</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Perjalanan Kami</h2>
              <div className="w-16 h-0.5 bg-red-500 mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="prose prose-lg text-gray-700 mx-auto text-justify leading-relaxed space-y-6">
              <p className="text-xl text-red-700 font-medium italic text-center">
                "Bukan sekadar makanan cepat saji. Ini pengalaman rasa yang dirancang untuk gaya hidup modern tanpa mengorbankan kualitas."
              </p>
              <div className="text-gray-600 leading-loose" dangerouslySetInnerHTML={{ __html: aboutData.description.replace(/\n/g, "<br/>") }} />
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ========== VISI & MISI - GAYA ARTIKEL/ELEGAN (BUKAN CARD) ========== */}
      <RevealSection>
        <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-red-600 font-semibold tracking-wide uppercase text-sm">Arahan Strategis</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Visi & Misi</h2>
              <div className="w-16 h-0.5 bg-red-500 mx-auto mt-4 rounded-full"></div>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Landasan kami dalam memberikan pelayanan terbaik</p>
            </div>
            
            <div className="space-y-12">
              {/* Visi - Gaya Artikel Elegan */}
              <div className="border-l-4 border-red-500 pl-8 md:pl-10 py-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Visi Kami</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed pl-16">
                  {aboutData.vision}
                </p>
              </div>

              {/* Misi - Gaya Artikel dengan bullet points custom */}
              <div className="border-l-4 border-red-300 pl-8 md:pl-10 py-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Misi Kami</h3>
                </div>
                <div className="pl-16">
                  {missionList.map((item, index) => (
                    <div key={index} className="flex gap-3 mb-3 group">
                      <span className="text-red-500 font-bold text-lg mt-0.5">{(index + 1).toString().padStart(2, '0')}.</span>
                      <span className="text-gray-600 leading-relaxed flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ========== NILAI-NILAI PERUSAHAAN - 3 PILAR ========== */}

      {/* ========== CTA SECTION ========== */}
      <RevealSection>
        <section className="w-full py-20 bg-gradient-to-r from-red-600 to-red-500 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Menikmati Rasa Terbaik?</h2>
            <p className="text-red-100 text-lg mb-8">Kunjungi outlet terdekat atau pesan online sekarang juga.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-8 py-3 bg-white text-red-700 font-semibold rounded-full shadow-md hover:shadow-xl transition transform hover:scale-105"
              >
                Lihat Menu
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-red-700 transition"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </section>
      </RevealSection>
    </main>
  );
}