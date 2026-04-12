// app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden font-sans">
      {/* Hero Section dengan gambar */}
      <section className="relative w-full bg-blue-900 py-20 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Tentang Kami</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Komitmen kami untuk menjaga laut dan menyejahterakan nelayan Indonesia.
          </p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Siapa Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-2">
              Menjaga Laut, Menyejahterakan Nelayan
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="prose prose-lg text-gray-600 mx-auto text-justify leading-relaxed space-y-6">
            <p className="text-xl text-blue-800 font-semibold">
              Laut adalah sumber kehidupan bagi bangsa Indonesia. Sebagai negara maritim
              terbesar di dunia, kelestarian laut dan kesejahteraan nelayan adalah
              prioritas utama kami.
            </p>
            <p>
              Perikanan laut yang berkelanjutan bukan hanya tentang menangkap ikan,
              tetapi juga menjaga ekosistem, memberdayakan masyarakat pesisir, dan
              mengelola sumber daya secara bijak. Kami hadir untuk mendukung visi
              tersebut melalui edukasi, teknologi ramah lingkungan, dan kolaborasi
              dengan berbagai pihak.
            </p>
            <p>
              Didirikan pada tahun 2020, tim kami terdiri dari para ahli kelautan,
              aktivis lingkungan, dan teknolog yang peduli terhadap masa depan laut
              Nusantara. Kami percaya bahwa dengan pendekatan holistik – mulai dari
              nelayan tradisional hingga industri perikanan modern – kita dapat
              menciptakan perubahan nyata.
            </p>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Pedoman Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-2">
              Visi & Misi
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-4">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-3">Visi</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi gerakan utama dalam mewujudkan perikanan Indonesia yang
                berkelanjutan, nelayan sejahtera, dan laut yang lestari untuk generasi
                mendatang.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-4">
                📋
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-3">Misi</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mengedukasi masyarakat pesisir tentang praktik perikanan ramah lingkungan.</li>
                <li>Mengembangkan teknologi tepat guna untuk meningkatkan hasil tangkapan tanpa merusak ekosistem.</li>
                <li>Mendorong kebijakan yang berpihak pada nelayan kecil dan keberlanjutan laut.</li>
                <li>Membangun kolaborasi dengan pemerintah, swasta, dan komunitas lokal.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Kami */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Prinsip Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-2">
              Nilai-Nilai Kami
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group bg-gray-50 rounded-2xl p-8 transition-all hover:shadow-md">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition">
                🌊
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Keberlanjutan</h3>
              <p className="text-gray-600">
                Setiap tindakan kami mempertimbangkan dampak jangka panjang terhadap
                laut dan kehidupan yang bergantung padanya.
              </p>
            </div>
            <div className="text-center group bg-gray-50 rounded-2xl p-8 transition-all hover:shadow-md">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition">
                🤝
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Kolaborasi</h3>
              <p className="text-gray-600">
                Kami percaya perubahan besar lahir dari kerja sama lintas sektor dan
                masyarakat.
              </p>
            </div>
            <div className="text-center group bg-gray-50 rounded-2xl p-8 transition-all hover:shadow-md">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition">
                📚
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Edukasi</h3>
              <p className="text-gray-600">
                Memberdayakan nelayan dan generasi muda dengan pengetahuan adalah kunci
                transformasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="w-full py-20 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mari Berkolaborasi
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Jadilah bagian dari perubahan untuk laut dan nelayan Indonesia.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-md"
          >
            Hubungi Kami
          </Link>
        </div>
      </section> */}
    </main>
  );
}