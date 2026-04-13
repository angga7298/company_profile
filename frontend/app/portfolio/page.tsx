// app/portfolio/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import WaveDivider from "@/components/WaveDivider";
import RevealSection from "@/components/RevealSection";
import NauticalModal from "@/components/NauticalModal";

export default function PortfolioPage() {
  const [portfolios, setPortfolios] = useState<any[]>([]);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPortfolios() {
      try {
        const res = await api.get("/portfolios");
        setPortfolios(res.data.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPortfolios();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy">
        <div className="w-12 h-12 border-4 border-white/5 border-t-seafoam rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="bg-navy overflow-hidden font-sans">
      
      {/* ABYSS HEADER SECTION */}
      <section className="bg-navy pt-60 pb-32 px-6 relative overflow-hidden abyss-gradient">
        <div className="absolute inset-0 z-0 opacity-20">
           <img 
            src="https://images.unsplash.com/photo-1551244072-5d1289347791?q=80&w=2000&auto=format" 
            alt="Deep Sea" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <RevealSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md text-brass text-[10px] font-black tracking-[0.4em] uppercase mb-10 border border-white/10">
              Case Book #2024
            </span>
            <h1 className="text-6xl md:text-fluid-9xl font-black text-white tracking-tighter leading-[0.8] mb-12 uppercase">
              REKAM <br/> <span className="text-white/20">JEJAK.</span>
            </h1>
            <p className="text-white/50 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-bold tracking-tight">
              Manifestasi nyata integrasi teknologi bahari dalam berbagai proyek strategis di seluruh penjuru kepulauan.
            </p>
          </RevealSection>
        </div>
        
        <div className="absolute bottom-[-2px] left-0 right-0 z-20">
          <WaveDivider color="#001F3F" />
        </div>
      </section>

      {/* PORTFOLIO GRID (HULL CARDS) */}
      <section className="py-40 px-6 bg-[#001F3F] relative">
        <div className="max-w-7xl mx-auto">
          {portfolios.length === 0 ? (
            <div className="text-center py-40 border-4 border-dashed border-white/5 rounded-[4rem]">
              <p className="text-white/20 font-black tracking-[0.4em] text-xs uppercase">No Strategic Data In This Coordinate</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-24">
              {portfolios.map((project: any, index: number) => (
                <RevealSection key={project.id} delay={index * 150}>
                  <div
                    className="group relative hull-shape aspect-[4/3] cursor-pointer shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden bg-navy"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image || "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900"}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent p-12 flex flex-col justify-end">
                      <div className="flex justify-between items-end">
                        <div className="max-w-md">
                           <span className="text-seafoam text-[10px] font-black tracking-[0.4em] uppercase mb-6 block opacity-0 group-hover:opacity-100 transition-opacity duration-700">Project Mission</span>
                           <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-[0.9] tracking-tighter uppercase">{project.title}</h3>
                           <p className="text-white/40 font-bold text-sm line-clamp-2 transition-colors duration-500 group-hover:text-white/80">
                             {project.description}
                           </p>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-brass flex items-center justify-center text-navy font-black text-xl translate-y-20 group-hover:translate-y-0 transition-transform duration-700 shadow-2xl">
                           ⚓
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          )}
        </div>
        
        <div className="absolute bottom-[-2px] left-0 right-0 z-20">
          <WaveDivider color="#001220" />
        </div>
      </section>

      {/* STRATEGIC IMPACT (ABYSS STYLE) */}
      <RevealSection>
        <section className="py-40 px-6 bg-navy overflow-hidden relative abyss-gradient">
          <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-[5rem] p-16 md:p-32 overflow-hidden relative group">
            <div className="relative z-10 grid lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-7">
                <span className="text-ocean font-black tracking-[0.4em] uppercase text-[10px] mb-8 block">Operational Impact</span>
                <h2 className="text-5xl md:text-fluid-8xl font-black text-navy tracking-tighter uppercase mb-12 leading-none">DAMPAK <br/> <span className="text-navy/10">RIIL.</span></h2>
                <p className="text-navy/50 text-xl leading-relaxed mb-12 font-medium">
                  Setiap inisiatif Bahari Group diukur berdasarkan parameter keberlanjutan dan efisiensi industri kelautan nasional Indonesia.
                </p>
              </div>
              <div className="lg:col-span-5 grid grid-cols-2 gap-8">
                {[
                  { label: "Binaan", val: "50+", sub: "Kelompok Nelayan" },
                  { label: "Wilayah", val: "15", sub: "Kabupaten Strategis" },
                  { label: "Output", val: "25%", sub: "Peningkatan Hasil" },
                  { label: "Partner", val: "20+", sub: "Kemitraan Global" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-navy/5 p-10 rounded-[3rem] border border-navy/5 transition-all duration-700 group-hover:bg-navy group-hover:text-white group-hover:-translate-y-4">
                    <div className="text-4xl font-black mb-2 tracking-tighter">{stat.val}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-40">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Compass background watermark */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] border-8 border-navy/5 rounded-full pointer-events-none group-hover:rotate-45 transition-transform duration-[3000ms]" />
          </div>
        </section>
      </RevealSection>

      {/* Modal */}
      <NauticalModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        description={selectedProject?.description}
        image={selectedProject?.image}
        date={selectedProject?.project_date && new Date(selectedProject.project_date).toLocaleDateString("id-ID", { year: 'numeric', month: 'long' })}
      />

    </main>
  );
}