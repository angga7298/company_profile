// app/about/page.tsx
"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import WaveDivider from "@/components/WaveDivider";
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const RevealSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function AboutPage() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [missionList, setMissionList] = useState<string[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    const fetchData = async () => {
      setLoading(true);
      const data = await getAboutData();
      setAboutData(data);
      if (data) {
        let parsedMission = formatMission(data.mission);
        if (!parsedMission || parsedMission.length === 0 || (parsedMission.length === 1 && parsedMission[0] === "")) {
          parsedMission = [
            "Mengembangkan teknologi pasca-panen untuk menjaga kesegaran produk lebih lama.",
            "Memberdayakan komunitas nelayan lokal melalui edukasi dan akses pasar global.",
            "Menerapkan standar keberlanjutan kelautan di setiap rantai nilai operasional.",
            "Inovasi produk olahan hasil laut yang bergizi dan bernilai tambah tinggi."
          ];
        }
        setMissionList(parsedMission);
      }
      setLoading(false);
    };
    
    fetchData();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-navy">
      <div className="w-12 h-12 border-4 border-primary/10 border-t-seafoam rounded-full animate-spin"></div>
    </div>
  );

  if (!aboutData) return (
    <div className="min-h-screen flex items-center justify-center p-10 text-center bg-navy">
      <div>
        <h1 className="text-3xl font-black text-white tracking-tighter uppercase mb-4">Coordinates Missing</h1>
        <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Unable to load corporate profile.</p>
      </div>
    </div>
  );

  return (
    <main className="bg-navy overflow-hidden font-sans">
      
      {/* DIVING HERO - STARTING AT SURFACE */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-ocean/50 via-transparent to-navy z-10" />
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format" 
            alt="Sea Surface" 
            className="w-full h-full object-cover"
            style={{ transform: `scale(1.1) translateY(${scrollY * 0.3}px)` }}
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <RevealSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md text-seafoam text-[10px] font-black tracking-[0.4em] uppercase mb-8 border border-white/10">
              Navigation Chart
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-8 leading-[0.8] uppercase">
              {aboutData.hero_title || 'LOGBOOK KAMI'}
            </h1>
            <p className="text-white/70 text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-bold leading-relaxed tracking-tight">
              {aboutData.hero_subtitle || 'Menelusuri sejarah dan masa depan bahari.'}
            </p>
          </RevealSection>
        </div>
        
        <div className="absolute bottom-[-2px] left-0 right-0 z-30">
          <WaveDivider color="#001F3F" />
        </div>
      </section>

      {/* CORPORATE LOG (DEEPER WATER) */}
      <section className="py-40 px-6 bg-[#001F3F] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <RevealSection className="lg:col-span-5 relative">
              <div className="porthole w-full aspect-square shadow-2xl">
                 <img src="/about.jfif" alt="Ocean Deep" className="w-full h-full object-cover" />
              </div>
              {/* Nautical Compass Decor */}
              <div className="absolute -top-10 -left-10 w-24 h-24 border border-brass/30 rounded-full animate-spin-slow opacity-20" />
              <div className="absolute -bottom-10 -right-10 text-brass font-black text-6xl opacity-10">⚓</div>
            </RevealSection>
            
            <div className="lg:col-span-7">
              <span className="text-brass font-black tracking-[0.3em] uppercase text-[10px] mb-6 block">Identity Deck</span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-12 uppercase">MASA DEPAN <br/><span className="text-seafoam">ADALAH LAUTAN.</span></h2>
              <div className="prose prose-2xl prose-invert max-w-none text-white/50 leading-relaxed text-justify font-medium">
                <p className="font-black text-white mb-10 text-xl tracking-tight border-l-4 border-brass pl-8">
                  "Kekuatan kami terletak pada keterhubungan antara teknologi modern dan kearifan ekosistem samudera."
                </p>
                <div dangerouslySetInnerHTML={{ __html: aboutData.description.replace(/\n/g, "<br/>") }} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider to Deepest Sea */}
        <div className="absolute bottom-[-2px] left-0 right-0 z-30">
          <WaveDivider color="#001220" />
        </div>
      </section>

      {/* VISI & MISI (THE ABYSS - DARKEST SECTION) */}
      <section className="py-40 bg-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-32">
          <RevealSection>
            <span className="text-seafoam font-black tracking-[0.4em] uppercase text-[10px] mb-8 block">Primary Objective</span>
            <h2 className="text-6xl md:text-fluid-8xl font-black tracking-tighter leading-[0.8] mb-12 uppercase">VISI <br/><span className="text-white/10">MARKAH.</span></h2>
            <div className="group relative">
               <div className="absolute -left-10 top-0 bottom-0 w-1 bg-seafoam/30 group-hover:bg-seafoam transition-colors duration-700" />
               <p className="text-white text-3xl md:text-4xl leading-[1.1] font-black tracking-tighter uppercase pl-4">
                 {aboutData.vision}
               </p>
               <div className="mt-12 flex items-center gap-6 opacity-20">
                  <span className="text-xs font-black uppercase tracking-[0.5em]">Vision Protocol</span>
                  <div className="h-px bg-white flex-grow" />
               </div>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <span className="text-brass font-black tracking-[0.4em] uppercase text-[10px] mb-8 block">Action Plan</span>
            <h2 className="text-6xl md:text-fluid-8xl font-black tracking-tighter leading-[0.8] mb-12 uppercase">MISI <br/><span className="text-white/10">UTAMA.</span></h2>
            <div className="space-y-12">
              {missionList.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 group">
                  <span className="text-brass font-black text-3xl leading-none">{(index + 1).toString().padStart(2, '0')}</span>
                  <div className="space-y-4">
                    <p className="text-white/50 text-xl group-hover:text-white transition-colors duration-500 leading-relaxed font-bold tracking-tight">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
        
        {/* Subtle Underwater Background Detail */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
      </section>

      {/* CALL TO ACTION (SURFACING) */}
      {/* <RevealSection>
        <section className="py-40 px-6">
          <div className="max-w-7xl mx-auto bg-white/5 rounded-[5rem] border border-white/5 p-24 text-center shadow-2xl relative overflow-hidden group backdrop-blur-sm">
            <h2 className="text-4xl md:text-fluid-7xl font-black text-white mb-10 tracking-tighter uppercase leading-none">SIAP BERLAYAR <br/>BERSAMA?</h2>
            <p className="text-white/40 mb-16 max-w-xl mx-auto text-xl font-bold tracking-tight uppercase">Jadilah bagian dari revolusi industri kelautan berkelanjutan.</p>
            <Link 
              href="/contact" 
              className="inline-block px-16 py-6 bg-brass text-navy rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:scale-110 transition-all duration-700 shadow-[0_0_50px_rgba(197,160,89,0.3)]"
            >
              Hubungi Tim Komando ⚓
            </Link>
           
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </div>
        </section>
      </RevealSection> */}

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </main>
  );
}