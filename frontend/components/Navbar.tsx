'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const checkToken = () => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkToken();
    window.addEventListener('storage', checkToken);
    return () => window.removeEventListener('storage', checkToken);
  }, [pathname]);

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      });
    }
    localStorage.removeItem('token');
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    setIsLoggedIn(false);
    router.push('/');
  };

  const navItems = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang' },
    { href: '/services', label: 'Produk' },
    { href: '/portfolio', label: 'Portofolio' },
    { href: '/contact', label: 'Kontak' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'sea-glass py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-12">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-brass rounded-full flex items-center justify-center text-navy font-black shadow-[0_0_20px_rgba(197,160,89,0.5)] group-hover:rotate-[360deg] transition-transform duration-1000 border-2 border-white/20">
            ⚓
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-white leading-none">BAHARI</span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-seafoam leading-none mt-1">EST. 2024</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 nav-link-nautical flex items-center gap-2 ${isActive ? 'text-seafoam text-glow' : 'text-white/70 hover:text-white'}`}
              >
                {isActive && <span className="text-brass">⚓</span>}
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link href="/admin/dashboard" className="text-[10px] font-black uppercase tracking-widest px-6 py-2.5 rounded-full border border-brass text-brass hover:bg-brass hover:text-navy transition-all duration-500 shadow-lg">
                Dashboard
              </Link>
              <button 
                onClick={handleLogout}
                className="text-[10px] font-black uppercase tracking-widest px-6 py-2.5 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all duration-500"
              >
                Keluar
              </button>
            </>
          ) : (
            <Link 
              href="/admin/login" 
              className="text-[10px] font-black uppercase tracking-widest px-8 py-3 rounded-full bg-brass text-navy hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-500 shadow-[0_0_20px_rgba(197,160,89,0.3)]"
            >
              Portal Admin
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}