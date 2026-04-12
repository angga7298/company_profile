// app/services/page.tsx
import api from "@/lib/api";
import Link from "next/link";

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
    <main className="bg-white overflow-hidden font-sans">
      {/* Hero Section dengan gambar */}
      <section className="relative w-full bg-blue-900 py-20 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=900')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Layanan Kelautan & Perikanan
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Kami menyediakan solusi terpadu untuk mendukung ekosistem perikanan
            yang produktif dan lestari.
          </p>
        </div>
      </section>

      {/* Daftar Layanan */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col overflow-hidden"
              >
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <div className="p-8 text-center flex flex-col items-center">
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-5xl mb-4 transition-transform group-hover:scale-110 duration-300">
                    {service.icon || "🐟"}
                  </div>
                  <h2 className="text-2xl font-bold text-blue-800 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artikel Statis Pendukung */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Komitmen Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-2">
              Mengapa Memilih Layanan Kami?
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="prose prose-lg text-gray-600 mx-auto text-justify leading-relaxed space-y-6">
            <p>
              Setiap layanan yang kami tawarkan dirancang berdasarkan riset
              ilmiah dan kebutuhan nyata di lapangan. Kami berkolaborasi dengan
              ahli kelautan, nelayan, dan pemerintah daerah untuk memastikan
              solusi yang tepat guna dan berkelanjutan.
            </p>
            <p>
              Dengan pendekatan berbasis teknologi ramah lingkungan, kami
              membantu meningkatkan produktivitas perikanan sekaligus menjaga
              ekosistem laut. Lebih dari 100 kelompok nelayan telah merasakan
              manfaat dari program-program kami.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-800">100+</div>
                <div className="text-gray-600">Kelompok Nelayan</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-800">15+</div>
                <div className="text-gray-600">Mitra Strategis</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-800">30%</div>
                <div className="text-gray-600">Efisiensi Biaya</div>
              </div>
            </div>
            <p>
              Kami mengundang Anda untuk menjelajahi layanan kami dan
              berdiskusi bagaimana kami dapat membantu mewujudkan perikanan
              yang lebih baik.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="w-full py-20 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Meningkatkan Produktivitas Perikanan?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Konsultasikan kebutuhan Anda dengan tim ahli kami.
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