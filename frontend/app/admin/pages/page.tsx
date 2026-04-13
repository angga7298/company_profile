'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AdminCard from '@/components/AdminCard';

export default function PagesList() {
  const router = useRouter();
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        router.push('/admin/login');
        return;
    }
    try {
      const res = await fetch('http://localhost:8000/api/pages');
      const data = await res.json();
      setPages(data.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id: number) => {
    if (!confirm('SISTEM KRITIKAL: Hapus sektor halaman ini secara permanen?')) return;
    const token = localStorage.getItem('token');
    try {
      await fetch(`http://localhost:8000/api/admin/pages/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchData();
    } catch (error) {
      alert('Gagal menghapus sektor.');
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="w-10 h-10 border-4 border-white/5 border-t-brass rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="animate-fade-in-up">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div>
          <span className="text-brass font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Sector Mapping Control</span>
          <h1 className="text-5xl font-black text-white tracking-tighter uppercase leading-none">Manajamen <br/>Sektor Halaman.</h1>
        </div>
        <Link
          href="/admin/pages/create"
          className="px-12 py-6 bg-seafoam text-navy text-[10px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-white transition-all duration-700 shadow-2xl flex items-center gap-4"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Inisialisasi Halaman
        </Link>
      </header>

      <div className="grid gap-6">
        {pages.length === 0 ? (
          <div className="text-center py-40 border-2 border-dashed border-white/5 rounded-[4rem]">
            <p className="text-white/10 font-black tracking-[0.5em] text-[10px] uppercase italic">No Active Sectors Found</p>
          </div>
        ) : (
          pages.map((p: any) => (
            <AdminCard key={p.id} className="group flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex-1 space-y-3">
                 <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black text-brass uppercase tracking-widest px-3 py-1 bg-brass/10 rounded-full border border-brass/10">Sector 0{p.id}</span>
                    <span className={`w-2 h-2 rounded-full ${p.status ? 'bg-seafoam shadow-[0_0_10px_#82eefd]' : 'bg-red-500 shadow-[0_0_10px_#ef4444]'}`}></span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/20">{p.status ? 'Active Protocol' : 'Standby Mode'}</span>
                 </div>
                 <h3 className="text-3xl font-black text-white group-hover:text-navy transition-colors duration-500 tracking-tighter uppercase">{p.title}</h3>
                 <div className="flex items-center gap-3 text-white/30 group-hover:text-navy/40">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Matrix Link:</span>
                    <code className="text-[11px] font-bold">/{p.slug}</code>
                 </div>
              </div>

              <div className="flex gap-4 w-full md:w-auto">
                <Link
                  href={`/admin/pages/edit/${p.id}`}
                  className="flex-1 md:px-10 py-5 bg-white/5 text-white text-[10px] font-black uppercase tracking-widest rounded-3xl hover:bg-navy hover:text-white transition-all text-center border border-white/5"
                >
                  Edit Matrix
                </Link>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="flex-1 md:px-10 py-5 bg-red-500/5 text-red-500 text-[10px] font-black uppercase tracking-widest rounded-3xl hover:bg-red-500 hover:text-white transition-all border border-red-500/10"
                >
                  Purge Sector
                </button>
              </div>
            </AdminCard>
          ))
        )}
      </div>
    </div>
  );
}