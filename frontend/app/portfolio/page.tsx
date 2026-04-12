// app/portfolio/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/lib/api";

// ========== MODAL COMPONENT (sama seperti di HomeClient) ==========
const Modal = ({ isOpen, onClose, title, description, image, date }: any) => {
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
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">{title}</h3>
          {date && <p className="text-sm text-gray-500 mb-4">{date}</p>}
          <div
            className="text-gray-600 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: description }}
          />
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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <main className="bg-white overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative w-full bg-blue-900 py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Portofolio Proyek</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Berbagai inisiatif nyata yang telah kami lakukan untuk perikanan berkelanjutan dan kesejahteraan nelayan.
          </p>
        </div>
      </section>

      {/* Daftar Portofolio dengan Modal */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolios.map((project: any) => (
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
                  <p className="text-gray-500 line-clamp-3 mb-2">{project.description}</p>
                  {project.project_date && (
                    <p className="text-sm text-gray-400 mb-4">
                      {new Date(project.project_date).toLocaleDateString("id-ID")}
                    </p>
                  )}
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
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        description={selectedProject?.description}
        image={selectedProject?.image}
        date={selectedProject?.project_date && new Date(selectedProject.project_date).toLocaleDateString("id-ID")}
      />

      {/* Artikel Statis Penjelasan Tambahan */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Komitmen Kami</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-2">Dampak Nyata untuk Laut & Nelayan</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="prose prose-lg text-gray-600 mx-auto text-justify leading-relaxed space-y-6">
            <p>
              Setiap proyek yang kami jalankan dirancang untuk memberikan manfaat langsung bagi ekosistem laut dan peningkatan kesejahteraan nelayan. Dari teknologi ramah lingkungan hingga program pemberdayaan masyarakat pesisir, kami terus berinovasi.
            </p>
            <p>
              Hingga saat ini, kami telah bermitra dengan lebih dari 50 kelompok nelayan di 15 kabupaten pesisir. Berkat kolaborasi ini, terjadi peningkatan hasil tangkapan rata-rata 25% sekaligus penurunan penggunaan alat tangkap destruktif.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-800">50+</div>
                <div className="text-gray-600">Kelompok Nelayan</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-800">15</div>
                <div className="text-gray-600">Kabupaten Pesisir</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-800">25%</div>
                <div className="text-gray-600">Peningkatan Hasil Tangkapan</div>
              </div>
            </div>
            <p>
              Kami mengundang Anda untuk menjadi bagian dari perubahan. Mari bersama menjaga laut dan menyejahterakan nelayan Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="w-full py-20 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tertarik Berkolaborasi?</h2>
          <p className="text-lg text-blue-100 mb-8">Hubungi kami untuk mendiskusikan proyek perikanan berkelanjutan Anda.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-md"
          >
            Hubungi Kami
          </Link>
        </div>
      </section> */}

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