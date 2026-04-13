'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({ pages: 0, portfolios: 0, services: 0, contacts: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    const fetchStats = async () => {
      try {
        const [pages, portfolios, services, contacts] = await Promise.all([
          fetch('http://localhost:8000/api/pages').then(res => res.json()),
          fetch('http://localhost:8000/api/portfolios').then(res => res.json()),
          fetch('http://localhost:8000/api/services').then(res => res.json()),
          fetch('http://localhost:8000/api/admin/contacts', {
            headers: { Authorization: `Bearer ${token}` }
          }).then(res => res.json()).catch(() => []),
        ]);
        setStats({
          pages: pages.data?.length || 0,
          portfolios: portfolios.data?.length || 0,
          services: services.data?.length || 0,
          contacts: contacts.length || 0,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [router]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="w-10 h-10 border-4 border-white/5 border-t-brass rounded-full animate-spin"></div>
    </div>
  );

  const statCards = [
    {
      label: 'Cargo Manifest',
      sub: 'Total Produk Aktif',
      value: stats.services,
      href: '/admin/services',
      accent: 'text-seafoam',
      icon: <svg size="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
    },
    {
      label: 'Strategic Map',
      sub: 'Proyek Terinstalasi',
      value: stats.portfolios,
      href: '/admin/portfolios',
      accent: 'text-brass',
      icon: <svg size="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon></svg>
    },
    {
      label: 'Incoming Signal',
      sub: 'Pesan Transmisi',
      value: stats.contacts,
      href: '/admin/contacts',
      accent: 'text-blue-400',
      icon: <svg size="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M22 12L2 12"></path><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89z"></path></svg>
    },
    {
      label: 'Control Nodes',
      sub: 'Halaman Statis',
      value: stats.pages,
      href: '/admin/pages',
      accent: 'text-white/40',
      icon: <svg size="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>
    },
  ];

  return (
    <div className="animate-fade-in-up">
      <header className="mb-20 flex justify-between items-end">
        <div>
          <span className="text-brass font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Central Command Dashboard</span>
          <h1 className="text-5xl md:text-fluid-7xl font-black text-white tracking-tighter uppercase leading-none">Status <br />Operasional.</h1>
        </div>
        <div className="hidden md:block text-right">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 text-seafoam text-[10px] font-black uppercase tracking-widest border border-white/5">
            <span className="w-2 h-2 rounded-full bg-seafoam animate-ping shadow-[0_0_10px_rgba(130,238,253,0.8)]"></span> Signal Synchronized
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {statCards.map((card) => (
          <div key={card.label} className="group relative bg-[#001f3f] border border-white/5 p-10 rounded-[3rem] hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] transition-all duration-700 overflow-hidden">
            <div className="relative z-10">
              <div className={`w-14 h-14 bg-white/5 group-hover:bg-navy text-brass rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-all duration-700 group-hover:scale-110`}>
                {card.icon}
              </div>
              <h3 className="text-[10px] font-black text-white/40 group-hover:text-navy/40 uppercase tracking-[0.3em] mb-2">{card.label}</h3>
              <p className={`text-6xl font-black ${card.accent} group-hover:text-navy tracking-tighter mb-8 leading-none`}>{card.value}</p>
              <div className="mb-10">
                <p className="text-[9px] font-bold text-white/20 group-hover:text-navy/30 uppercase tracking-[0.4em]">{card.sub}</p>
              </div>
              <Link
                href={card.href}
                className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-navy hover:gap-6 transition-all"
              >
                Access Matrix <span>→</span>
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/0 group-hover:bg-navy/5 rounded-full blur-3xl transition-colors" />
          </div>
        ))}
      </div>

      <div className="mt-16 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-white/5 p-16 rounded-[4rem] border border-white/5 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-6">
               <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Transmission Feed</h3>
               <div className="px-3 py-1 bg-seafoam text-navy text-[8px] font-black rounded-full uppercase tracking-widest">Live</div>
            </div>
            <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">Temporal Log</span>
          </div>
          <div className="space-y-4">
            {[
              { text: "Sinkronisasi aset maritim selesai.", time: "02m ago", color: "bg-seafoam", op: "System" },
              { text: "Backup data koordinat portofolio aman.", time: "15m ago", color: "bg-brass", op: "Node A" },
              { text: "Transmisi pesan masuk dari klien ekspor.", time: "1h ago", color: "bg-blue-400", op: "External" },
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between p-8 rounded-3xl bg-navy/40 border border-white/5 hover:border-white/10 transition-all group">
                <div className="flex items-center gap-8">
                  <div className={`w-2 h-2 rounded-full ${log.color} shadow-[0_0_10px_currentcolor] group-hover:scale-150 transition-transform`} />
                  <div>
                     <p className="text-white font-bold text-sm tracking-tight mb-1">{log.text}</p>
                     <p className="text-[9px] text-white/20 uppercase font-black tracking-widest">Origin: {log.op}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-white/10 uppercase font-black group-hover:text-white/40 transition-colors">{log.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 bg-brass p-16 rounded-[4rem] text-navy flex flex-col justify-between relative overflow-hidden group shadow-2xl">
          <div className="relative z-10">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] opacity-40 mb-6 block">Quick Nav</span>
            <h3 className="text-4xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">Visual Site <br />Console.</h3>
            <p className="text-navy/60 text-[10px] leading-relaxed mb-12 uppercase tracking-[0.2em] font-black">Verify deployment in production environment.</p>
            <Link href="/" className="inline-block px-14 py-6 bg-navy text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-white hover:text-navy transition-all duration-700 shadow-2xl">
              Launch Site ⚓
            </Link>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[40px] border-navy/5 rounded-full pointer-events-none group-hover:rotate-180 transition-transform duration-[4000ms]" />
        </div>
      </div>
    </div>
  );
}