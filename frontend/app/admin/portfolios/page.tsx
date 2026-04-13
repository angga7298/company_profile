'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
import AdminCard from '@/components/AdminCard';

export default function AdminPortfolios() {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const res = await api.get('/portfolios');
      setPortfolios(res.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('SISTEM LOG: Apakah Anda yakin ingin menghapus proyek ini dari manifest strategis?')) {
      await api.delete(`/admin/portfolios/${id}`);
      fetchPortfolios();
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="w-10 h-10 border-4 border-white/5 border-t-brass rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="animate-fade-in-up">
      <header className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-brass font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Strategic Management</span>
          <h1 className="text-5xl font-black text-white tracking-tighter uppercase leading-none">Manifest <br/>Portofolio.</h1>
        </div>
        <Link 
          href="/admin/portfolios/create" 
          className="px-10 py-5 bg-seafoam text-navy text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all duration-700 shadow-[0_0_30px_rgba(130,238,253,0.3)]"
        >
          + Registrasi Proyek Baru
        </Link>
      </header>

      <div className="grid gap-8">
        {portfolios.length === 0 ? (
          <div className="text-center py-32 border-2 border-dashed border-white/5 rounded-[3rem]">
            <p className="text-white/20 font-black tracking-[0.4em] text-[10px] uppercase">No Assets Detected in Current Sector</p>
          </div>
        ) : (
          portfolios.map((p: any) => (
            <AdminCard key={p.id} className="flex flex-col md:flex-row gap-10 items-center">
              {p.image ? (
                <div className="w-full md:w-48 h-48 rounded-3xl overflow-hidden shadow-2xl shrink-0">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                </div>
              ) : (
                <div className="w-full md:w-48 h-48 rounded-3xl bg-navy/50 flex items-center justify-center shrink-0 border border-white/5">
                   <span className="text-white/10 text-4xl">⚓</span>
                </div>
              )}
              
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                   <span className="text-brass text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-brass/10 rounded-full">Archive #{p.id}</span>
                   {p.project_date && <span className="text-white/20 text-[9px] font-black uppercase tracking-widest">{new Date(p.project_date).toLocaleDateString()}</span>}
                </div>
                <h2 className="text-3xl font-black text-white group-hover:text-navy transition-colors duration-500 tracking-tighter uppercase">{p.title}</h2>
                <p className="text-white/40 group-hover:text-navy/60 transition-colors duration-500 text-sm font-bold line-clamp-2 max-w-2xl">{p.description}</p>
              </div>

              <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto">
                <Link 
                  href={`/admin/portfolios/edit/${p.id}`} 
                  className="flex-1 px-8 py-4 bg-white/5 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-navy hover:text-white transition-all text-center border border-white/5"
                >
                  Modify
                </Link>
                <button 
                  onClick={() => handleDelete(p.id)} 
                  className="flex-1 px-8 py-4 bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-red-500 hover:text-white transition-all border border-red-500/10"
                >
                  Purge
                </button>
              </div>
            </AdminCard>
          ))
        )}
      </div>
    </div>
  );
}