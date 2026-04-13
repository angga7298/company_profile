'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/admin/login';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && !isLoginPage) {
      router.push('/admin/login');
    }
  }, [pathname, router, isLoginPage]);

  // Close sidebar on navigation (mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  if (isLoginPage) {
    return <>{children}</>;
  }

  const navItems = [
    { 
      href: '/admin/dashboard', 
      label: 'Dashboard Utama', 
      icon: (
        <svg size="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
      ) 
    },
    { 
      href: '/admin/about', 
      label: 'Tentang Kami', 
      icon: (
        <svg size="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
      )
    },
    { 
      href: '/admin/services', 
      label: 'Produk Maritim', 
      icon: (
        <svg size="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
      )
    },
    { 
      href: '/admin/portfolios', 
      label: 'Portofolio Proyek', 
      icon: (
        <svg size="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
      )
    },
    { 
      href: '/admin/pages', 
      label: 'Halaman Statis', 
      icon: (
        <svg size="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
      )
    },
    { 
      href: '/admin/contacts', 
      label: 'Pesan Masuk', 
      icon: (
        <svg size="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M22 12L2 12"></path><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line></svg>
      )
    },
  ];

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      });
    }
    localStorage.removeItem('token');
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    router.push('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-navy font-sans text-foreground overflow-hidden">
      {/* MOBILE HEADER */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-20 bg-[#001f3f] border-b border-white/5 flex items-center justify-between px-8 z-50">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brass rounded flex items-center justify-center text-navy font-black text-sm">⚓</div>
          <span className="text-lg font-black tracking-tighter text-white">BAHARI</span>
        </Link>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <div className={`w-6 h-0.5 bg-white transition-all ${isSidebarOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${isSidebarOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${isSidebarOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* OVERLAY */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-navy/80 backdrop-blur-sm z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* COMMAND BRIDGE SIDEBAR */}
      <aside className={`
        fixed lg:relative top-0 bottom-0 left-0 w-80 bg-[#001f3f] border-r border-white/5 flex flex-col z-50 
        transition-transform duration-500 shadow-[20px_0_60px_rgba(0,0,0,0.5)]
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Subtle Light Reveal on Sidebar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brass/30 to-transparent" />
        
        <div className="p-12 pb-20 hidden lg:block">
          <Link href="/" className="flex flex-col gap-2 group">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-brass rounded-lg flex items-center justify-center text-navy font-black shadow-[0_0_20px_rgba(197,160,89,0.3)] group-hover:rotate-180 transition-transform duration-1000">⚓</div>
               <span className="text-2xl font-black tracking-tighter text-white leading-none">BAHARI</span>
            </div>
            <span className="text-[9px] font-black tracking-[0.5em] text-seafoam leading-none mt-2 uppercase opacity-60">Command Systems</span>
          </Link>
        </div>

        <nav className="flex-grow px-8 space-y-3 mt-24 lg:mt-0">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-5 px-8 py-5 rounded-2xl transition-all duration-700 group relative overflow-hidden ${
                  isActive 
                  ? 'bg-white text-navy shadow-[0_10px_40px_rgba(0,0,0,0.3)]' 
                  : 'text-white/30 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={`transition-transform duration-700 ${isActive ? 'scale-125' : 'group-hover:translate-x-1'}`}>
                  {item.icon}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.label}</span>
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brass" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-10 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="flex items-center gap-5 px-8 py-5 rounded-2xl w-full text-left text-red-500 bg-red-500/5 hover:bg-red-500 hover:text-white transition-all duration-500 group"
          >
            <svg className="group-hover:-translate-x-1 transition-transform" size="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Terminate</span>
          </button>
        </div>
      </aside>

      {/* COMMAND CONTROL AREA */}
      <main className="flex-1 flex flex-col h-screen relative bg-navy abyss-gradient pt-20 lg:pt-0">
        <div className="flex-1 overflow-y-auto p-6 md:p-12 custom-scrollbar relative">
           <div className="max-w-6xl mx-auto min-h-full">
              {children}
           </div>
        </div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}