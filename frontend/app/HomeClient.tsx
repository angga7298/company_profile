// app/HomeClient.tsx
"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

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
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// ========== HERO CAROUSEL ==========
const HeroCarousel = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900",
      title: "Menjaga Laut, Menyejahterakan Nelayan",
      desc: "Perikanan berkelanjutan untuk masa depan Indonesia",
    },
    {
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=2070&auto=format",
      title: "Teknologi Ramah Lingkungan",
      desc: "Inovasi untuk hasil tangkapan optimal tanpa merusak ekosistem",
    },
    {
      image: "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=900",
      title: "Kolaborasi & Edukasi",
      desc: "Bersama nelayan dan komunitas pesisir",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <div className="max-w-4xl animate-fade-in-up">
              <h1 className="text-4xl md:text-7xl font-extrabold mb-4 drop-shadow-lg tracking-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-8 font-light">{slide.desc}</p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-800 px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-gray-100 transition transform hover:scale-105 duration-300"
              >
                Gabung Bersama Kami
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// ========== MODAL COMPONENT ==========
const Modal = ({ isOpen, onClose, title, description, image }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
        {image && (
          <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">{title}</h3>
          <div className="text-gray-600 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: description }} />
          <button
            onClick={onClose}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

// ========== CLIENT COMPONENT ==========
interface HomeClientProps {
  services: any[];
  portfolios: any[];
  allPages: any[];
  aboutFishery: any | null;
}

export default function HomeClient({ services, portfolios, allPages, aboutFishery }: HomeClientProps) {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className="bg-white overflow-hidden font-sans">
      <HeroCarousel />

      {/* Tentang Perikanan - dengan max-w-5xl */}
      {aboutFishery && aboutFishery.content && (
        <RevealSection>
          <section className="w-full py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-8">
                <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Tentang Kami</span>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-2">{aboutFishery.title}</h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
              </div>
              <div
                className="prose prose-lg text-gray-600 mx-auto text-justify leading-relaxed"
                dangerouslySetInnerHTML={{ __html: aboutFishery.content }}
              />
            </div>
          </section>
        </RevealSection>
      )}

      {/* Layanan Kami - dengan max-w-7xl */}
      <RevealSection>
        <section className="w-full py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Layanan</span>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-2">Perikanan & Kelautan</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Solusi lengkap untuk ekosistem perikanan modern</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service: any) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 text-center hover:-translate-y-2"
                >
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl transition-transform group-hover:scale-110 duration-300">
                    {service.icon || "🐟"}
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">{service.title}</h3>
                  <p className="text-gray-500">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Proyek Unggulan dengan Modal - max-w-7xl */}
      <RevealSection>
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Portofolio</span>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-2">Proyek Unggulan</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
              <p className="text-gray-500 mt-4">Inisiatif nyata yang telah kami lakukan</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {portfolios.slice(0, 3).map((project: any) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col"
                >
                  {project.image && (
                    <div className="overflow-hidden h-56">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">{project.title}</h3>
                    <p className="text-gray-500 line-clamp-3 mb-4">{project.description}</p>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="mt-auto text-blue-600 font-semibold hover:text-blue-800 transition inline-flex items-center gap-1"
                    >
                      Baca Selengkapnya
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-md"
              >
                Lihat Semua Proyek →
              </Link>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        description={selectedProject?.description}
        image={selectedProject?.image}
      />

      {/* Informasi & Artikel - dengan max-w-6xl */}
      {allPages.length > 0 && (
        <RevealSection>
          <section className="w-full py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Blog & Berita</span>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-2">Informasi & Artikel</h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                <p className="text-gray-500 mt-4">Wawasan terkini seputar perikanan dan kelautan</p>
              </div>
              <div className="space-y-20">
                {allPages.map((page: any) => (
                  <article key={page.id} className="border-b border-gray-200 pb-12 last:border-0">
                    <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">{page.title}</h3>
                    {page.featured_image && (
                      <div className="rounded-2xl overflow-hidden mb-8 shadow-md">
                        <img
                          src={page.featured_image}
                          alt={page.title}
                          className="w-full h-80 object-cover transition duration-500 hover:scale-105"
                        />
                      </div>
                    )}
                    <div
                      className="prose prose-lg max-w-none text-gray-600 text-justify leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: page.content }}
                    />
                  </article>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>
      )}

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}