// app/services/page.tsx
import api from "@/lib/api";
import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";

async function getServices() {
  try {
    const res = await api.get("/services");
    return res.data.data || [];
  } catch (error) {
    return [];
  }
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main className="bg-navy min-h-screen font-sans overflow-hidden">
      {/* IMMERSIVE HEADER SECTION */}
      <section className="bg-navy pt-60 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="/layanan.jfif" 
            alt="Fisheries Research" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md text-brass text-[10px] font-black tracking-[0.4em] uppercase mb-8 border border-white/10">
            Resource Catalog
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-12 uppercase">
            PRODUK <br/> <span className="text-white/20">UNGGULAN.</span>
          </h1>
          <p className="text-white/50 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-bold tracking-tight">
            Menghubungkan sumber daya samudera dengan standar pengolahan modern untuk industri global yang berkelanjutan.
          </p>
        </div>
        
        {/* Wave Divider at Bottom of Header */}
        <div className="absolute bottom-[-2px] left-0 right-0 z-20">
          <WaveDivider color="#001F3F" flip={false} />
        </div>
      </section>

      {/* CATEGORY NAV (Immersive Style) */}
      <div className="bg-[#001F3F]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex justify-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] overflow-x-auto no-scrollbar">
            <span className="text-seafoam border-b-2 border-seafoam pb-4 cursor-pointer transition-all flex items-center gap-2">⚓ All Resources</span>
            <span className="text-white/30 hover:text-white pb-4 cursor-pointer transition-all">Fresh Catch</span>
            <span className="text-white/30 hover:text-white pb-4 cursor-pointer transition-all">Processed</span>
            <span className="text-white/30 hover:text-white pb-4 cursor-pointer transition-all">Export Grade</span>
          </div>
        </div>
      </div>

      {/* PRODUCT LIST GRID */}
      <section className="py-40 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {services.length === 0 ? (
            <div className="text-center py-40 border-4 border-dashed border-white/5 rounded-[4rem]">
              <p className="text-white/20 font-black tracking-[0.4em] text-xs uppercase">No Data Found In This Coordinates</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-20">
              {services.map((service: any, index: number) => (
                <div 
                  key={service.id} 
                  className="group flex flex-col items-center text-center bg-[#001F3F]/50 border border-white/5 p-16 rounded-[4rem] hover:bg-white transition-all duration-1000 shadow-2xl relative overflow-hidden"
                >
                  <div className="porthole w-64 h-64 mb-12 transition-transform duration-1000 group-hover:scale-110">
                    <img 
                      src={service.image || "https://images.unsplash.com/photo-1544526226-d4568090ffb8?w=900"} 
                      alt={service.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-brass text-[10px] font-black tracking-[0.3em] uppercase mb-4 opacity-50">Operational Line</span>
                    <h2 className="text-4xl font-black text-white group-hover:text-navy mb-6 tracking-tight transition-colors duration-500 uppercase">
                      {service.title}
                    </h2>
                    <p className="text-white/40 group-hover:text-navy/60 font-medium text-lg leading-relaxed mb-12 transition-colors duration-500">
                      {service.description}
                    </p>
                    <Link 
                      href="/contact" 
                      className="px-10 py-4 border-2 border-seafoam/20 group-hover:border-navy/20 text-seafoam group-hover:text-navy rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-navy hover:text-white transition-all duration-500"
                    >
                      Inquire Details ⚓
                    </Link>
                  </div>
                  
                  {/* Background Watermark Accent */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 text-9xl font-black pointer-events-none group-hover:text-navy/5 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Background bubbles */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-seafoam/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-ocean/5 blur-[120px] pointer-events-none" />
      </section>

      {/* FOOTER CTA (Shoreline Style) */}
      <section className="pb-40 px-6">
        <div className="max-w-7xl mx-auto bg-primary/20 rounded-[5rem] border-2 border-white/5 p-24 md:p-32 text-center relative overflow-hidden shadow-inner group">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none">PENGADAAN <br/> KHUSUS?</h2>
            <p className="text-white/40 mb-16 max-w-xl mx-auto text-xl font-medium tracking-tight">Kami memproses permintaan pengadaan kustom untuk skala industri dan ekspor regional.</p>
            <Link 
              href="/contact" 
              className="px-16 py-7 bg-brass text-navy rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-white hover:scale-110 transition-all duration-700 shadow-2xl"
            >
              Hubungi Tim Ahli ⚓
            </Link>
          </div>
          {/* Compass Detail */}
          <div className="absolute bottom-0 right-0 w-64 h-64 border-t-4 border-l-4 border-white/5 rounded-tl-full pointer-events-none" />
        </div>
      </section>

    </main>
  );
}