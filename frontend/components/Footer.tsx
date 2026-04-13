// components/Footer.tsx
import Link from "next/link";
import WaveDivider from "./WaveDivider";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-navy text-foreground/50 overflow-hidden pt-20">
      {/* Shoreline Wave Divider (Top) */}
      <div className="absolute top-0 left-0 w-full z-10">
        <WaveDivider color="#001220" flip={true} animate={false} />
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 pt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-4 group mb-8">
              <div className="w-14 h-14 bg-brass rounded-full flex items-center justify-center text-navy font-black shadow-2xl transition-transform duration-700 group-hover:scale-110 border-4 border-white/5">
                ⚓
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white leading-none">BAHARI</span>
                <span className="text-[10px] font-bold tracking-[0.4em] text-seafoam leading-none mt-1 uppercase">Maritime Group</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-10 text-foreground/70">
              Menyeberangi batas teknologi kelautan dengan komitmen tanpa batas pada keberlanjutan samudera. Inovasi kami dibangun di atas integritas maritim.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="px-6 py-2 rounded-full border border-white/5 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">Navigasi Dek</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><Link href="/" className="hover:text-seafoam transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">⚓</span> Beranda</Link></li>
                <li><Link href="/about" className="hover:text-seafoam transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">⚓</span> Tentang</Link></li>
                <li><Link href="/services" className="hover:text-seafoam transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">⚓</span> Produk</Link></li>
                <li><Link href="/portfolio" className="hover:text-seafoam transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">⚓</span> Portofolio</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">Dukungan Logistik</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><Link href="/contact" className="hover:text-seafoam transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">⚓</span> Hubungi</Link></li>
                <li><Link href="#" className="hover:text-seafoam transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">⚓</span> FAQ</Link></li>
                <li><Link href="#" className="hover:text-seafoam transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">⚓</span> Regulasi</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">Hub Koordinat</h4>
              <address className="not-italic text-xs font-bold tracking-widest leading-relaxed uppercase opacity-60">
                Jl. Bahari Nusantara No. 88<br/>
                Sektor Selatan, Jakarta<br/>
                Kawasan Samudera ID
              </address>
              <div className="mt-8 space-y-3">
                <a href="mailto:hello@baharigroup.com" className="block text-[10px] font-black text-seafoam hover:text-white transition-colors uppercase tracking-widest">hello@baharigroup.com</a>
                <a href="tel:+62215550123" className="block text-[10px] font-black text-white hover:text-seafoam transition-colors uppercase tracking-widest">+62 21 555 0123</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black tracking-[0.4em] uppercase text-white/20">
          <p>© {currentYear} BAHARI MARITIME GROUP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-white transition-colors">Privacy Code</Link>
            <Link href="#" className="hover:text-white transition-colors">Nautical Terms</Link>
          </div>
        </div>
      </div>
      
      {/* Background Deep Ocean Accent */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-ocean/10 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
}