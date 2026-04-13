// app/admin/login/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Otoritas Gagal');
      localStorage.setItem('token', data.token);
      document.cookie = `token=${data.token}; path=/`;
      window.dispatchEvent(new Event('storage'));
      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-navy flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor - Radar Pulse */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-seafoam/20 rounded-full animate-ping"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-seafoam/10 rounded-full"></div>
      </div>

      <div className="w-full max-w-lg relative z-10">
        <div className="mb-10 text-center">
            <div className="w-20 h-20 bg-brass rounded-full flex items-center justify-center text-navy font-black text-3xl mx-auto mb-8 shadow-[0_0_40px_rgba(197,160,89,0.5)] border-4 border-white/10">
                ⚓
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase leading-none mb-2">Login <br/> <span className="text-seafoam">Administrator.</span></h1>
            <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-black">Akses Terbatas Petugas</p>
        </div>

        {/* Card Login */}
        <div className="sea-glass rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl">
          <div className="p-16">
            {error && (
              <div className="mb-10 bg-red-500/10 border border-red-500/20 text-red-500 px-8 py-5 rounded-3xl text-xs font-black uppercase tracking-widest text-center">
                 Galat: {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 pl-6 underline decoration-white/5">Alamat Email</label>
                <input
                  type="email"
                  placeholder="admin@email.com"
                  className="w-full bg-navy/50 border-none rounded-3xl p-6 text-sm font-bold text-white focus:ring-4 focus:ring-brass/20 transition-all outline-none shadow-inner"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 pl-6 underline decoration-white/5">Kata Sandi (Password)</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-navy/50 border-none rounded-3xl p-6 text-sm font-bold text-white focus:ring-4 focus:ring-brass/20 transition-all outline-none shadow-inner"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brass text-navy font-black py-6 rounded-full transition-all duration-700 hover:bg-white hover:scale-110 shadow-[0_0_30px_rgba(197,160,89,0.3)] uppercase text-[10px] tracking-[0.4em] disabled:bg-white/10"
              >
                {loading ? 'Memverifikasi...' : 'Masuk ke Dashboard ⚓'}
              </button>
            </form>
            <div className="mt-12 text-center">
              <Link href="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white transition-all group">
                <span className="inline-block transition-transform group-hover:-translate-x-3 mr-2">←</span> Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
        
        {/* Footer Coordinate */}
        <div className="mt-12 text-center text-[9px] font-bold text-white/10 tracking-[0.8em] uppercase">
             ID-JKT // 001.002.003
        </div>
      </div>
    </main>
  );
}