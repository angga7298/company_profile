"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import RevealSection from "@/components/RevealSection";
import NauticalModal from "@/components/NauticalModal";

interface HomeClientProps {
  services: any[];
  portfolios: any[];
  allPages: any[];
  aboutFishery: any | null;
}

export default function HomeClient({ services, portfolios, allPages, aboutFishery }: HomeClientProps) {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-navy overflow-hidden font-sans">
      
      {/* IMMERSIVE OCEAN HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy z-10" />
          <img 
            src="https://images.unsplash.com/photo-1518837691462-13619b76ad89?q=80&w=2070&auto=format" 
            alt="Deep Ocean" 
            className="w-full h-full object-cover scale-110"
            style={{ transform: `scale(1.1) translateY(${scrollY * 0.2}px)` }}
          />
          {/* Bubbles Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
             <div className="bobbing absolute top-[20%] left-[10%] w-4 h-4 rounded-full bg-white blur-sm"></div>
             <div className="bobbing-delayed absolute top-[50%] right-[15%] w-6 h-6 rounded-full bg-white blur-md"></div>
             <div className="bobbing absolute bottom-[30%] left-[40%] w-3 h-3 rounded-full bg-white blur-sm"></div>
          </div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center mt-13">
          <RevealSection>
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-brass text-[10px] font-black tracking-[0.4em] uppercase mb-10 shadow-2xl">
              <span className="animate-pulse ">⚓</span> Maritime Technology Leader
            </div>
            <h1 className="text-6xl md:text-fluid-9xl font-black text-white tracking-tight mb-10 leading-[0.8] uppercase flex flex-col">
              <span>PENJELAJAH</span>
              <span className="text-seafoam text-glow">SAMUDERA.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-bold leading-relaxed tracking-tight">
              Membangun masa depan industri kelautan melalui integrasi teknologi cerdas dan komitmen pelestarian ekosistem.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Link
                href="/portfolio"
                className="px-12 py-6 bg-brass text-navy rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:scale-110 transition-all duration-700 shadow-[0_0_40px_rgba(197,160,89,0.4)]"
              >
                Misi Kami
              </Link>
              <Link
                href="/contact"
                className="px-12 py-6 bg-transparent border-2 border-white text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-navy transition-all duration-700 backdrop-blur-md"
              >
                Kontak Hub
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* STRATEGIC VISION (ABOUT) */}
      <section className="py-40 bg-[#001F3F] relative px-6 abyss-gradient">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
          <RevealSection className="relative">
            <div className="porthole w-full max-w-[500px] mx-auto group">
              <img src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=2000&auto=format" alt="Ship Bridge" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-125" />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-1000" />
            </div>
            {/* Compass Accent */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-brass/20 rounded-full flex items-center justify-center pointer-events-none opacity-30 animate-spin-slow">
              <div className="w-px h-full bg-brass/30 rotate-45"></div>
              <div className="w-px h-full bg-brass/30 -rotate-45"></div>
            </div>
          </RevealSection>
          
          <div>
            <span className="text-brass font-black tracking-[0.3em] uppercase text-[10px] mb-6 block">Legacy & Future</span>
            <h2 className="text-5xl md:text-fluid-7xl font-black text-white tracking-tighter mb-10 leading-none uppercase">
                INTEGRITAS <br/><span className="text-seafoam">DI LAUTAN.</span>
            </h2>
            <p className="text-white/50 text-xl leading-relaxed mb-12 font-medium">
              Bahari Group mendefinisikan ulang standar operasional perikanan nasional. Dengan dukungan teknologi navigasi canggih, kami memastikan setiap langkah operasional berdampak positif pada keberlanjutan sumber daya laut.
            </p>
            <Link href="/about" className="inline-flex items-center gap-4 text-brass font-black tracking-[0.2em] uppercase text-xs group">
              Pelajari Peta Jalan <span className="w-12 h-px bg-brass group-hover:w-20 transition-all duration-700"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT CATALOG (PORTHOLE CARDS) */}
      <section className="py-40 bg-navy relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <span className="text-seafoam font-black tracking-[0.4em] uppercase text-[10px] mb-8 block">Inventory</span>
            <h2 className="text-6xl md:text-fluid-8xl font-black text-white tracking-tight leading-none uppercase">KATALOG <br/><span className="text-white/10">PRODUK.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {services.map((service: any, index: number) => (
              <RevealSection key={service.id} delay={index * 150}>
                <div className="group relative">
                  {/* Hull Shape Background Decor */}
                  <div className="absolute inset-0 bg-white shadow-2xl opacity-0 group-hover:opacity-100 hull-shape scale-90 group-hover:scale-100 transition-all duration-700" />
                  
                  <div className="relative z-10 p-12 transition-all duration-700 group-hover:-translate-y-4">
                    <div className="porthole w-32 h-32 mb-10 mx-auto transition-transform duration-700 group-hover:rotate-12">
                      <img src={service.image || "https://images.unsplash.com/photo-1551244072-5d1289347791?w=500"} alt="Service" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-black text-white group-hover:text-navy text-center uppercase tracking-tighter mb-6 transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-white/40 group-hover:text-navy/60 text-center font-bold text-sm leading-loose transition-colors duration-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
          
          <div className="text-center mt-32">
            <Link href="/services" className="px-16 py-6 bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-[0.3em] rounded-full hover:bg-brass hover:text-navy transition-all duration-700">
                Lihat Selengkapnya
            </Link>
          </div>
        </div>
      </section>

      {/* STRATEGIC PORTFOLIO (HULL CARDS) */}
      <section className="py-40 bg-navy relative pt-0 abyss-gradient">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-10 mb-24">
            <div className="h-px bg-white/10 flex-grow" />
            <div className="text-center">
                <span className="mt-12 text-brass font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Operations</span>
                <h2 className="text-5xl md:text-fluid-7xl font-black text-white tracking-tighter uppercase leading-none">PROYEK <br/>STRATEGIS</h2>
            </div>
            <div className="h-px bg-white/10 flex-grow" />
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {portfolios.slice(0, 4).map((project: any, index: number) => (
              <RevealSection key={project.id} delay={index % 2 * 200}>
                <div 
                  className="group relative hull-shape aspect-[16/10] overflow-hidden cursor-pointer shadow-2xl bg-black"
                  onClick={() => setSelectedProject(project)}
                >
                  <img 
                    src={project.image || "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900"} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-[2000ms] group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent p-12 flex flex-col justify-end">
                    <span className="text-seafoam text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">Case #00{index+1}</span>
                    <h3 className="text-3xl font-black text-white mb-2 leading-none tracking-tight uppercase">{project.title}</h3>
                    <div className="overflow-hidden h-0 group-hover:h-12 transition-all duration-700 ease-in-out">
                      <p className="text-white/50 font-bold text-sm tracking-tight">{project.description}</p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* IMMERSIVE CTA */}
      <section className="py-40 bg-navy relative">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="bg-white/5 rounded-[4rem] border border-white/5 p-20 md:p-32 text-center overflow-hidden relative shadow-inner backdrop-blur-sm">
              <div className="relative z-10">
                <h2 className="text-5xl md:text-fluid-9xl font-black text-white tracking-widest uppercase mb-12 leading-none whitespace-pre-line">BERKOMUNIKASI <br/>DENGAN KAMI.</h2>
                <Link href="/contact" className="inline-block px-20 py-8 bg-brass text-navy rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all duration-700 hover:scale-110 shadow-2xl">
                  Hubungi Sekarang ⚓
                </Link>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-white/10 transition-colors" />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Modal */}
      <NauticalModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        description={selectedProject?.description}
        image={selectedProject?.image}
      />

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes bobbing {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .bobbing {
           animation: bobbing 4s ease-in-out infinite;
        }
        .bobbing-delayed {
           animation: bobbing 4s ease-in-out infinite;
           animation-delay: 2s;
        }
      `}</style>
    </main>
  );
}