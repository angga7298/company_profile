'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AdminCard from '@/components/AdminCard';
import { getServices, deleteService, Service } from '@/lib/serviceService';

export default function ServicesList() {
  const router = useRouter();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchServices();
  }, [router]);

  const fetchServices = async () => {
    try {
      const data = await getServices();
      setServices(data);
    } catch (err) {
      setError('Gagal memuat daftar produk.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('SISTEM LOG: Purge this asset from cargo manifest?')) return;
    try {
      const success = await deleteService(id);
      if (success) {
        setServices(services.filter(s => s.id !== id));
      } else {
        alert('Gagal menghapus produk.');
      }
    } catch (err) {
      alert('Terjadi kesalahan koneksi.');
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="w-10 h-10 border-4 border-white/5 border-t-brass rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="animate-fade-in-up">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <div>
          <span className="text-brass font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Fleet Inventory Control</span>
          <h1 className="text-5xl font-black text-white tracking-tighter uppercase leading-none">Manifes <br/>Produk Maritim.</h1>
        </div>
        <Link
          href="/admin/services/create"
          className="px-12 py-6 bg-brass text-navy text-[10px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-white transition-all duration-700 shadow-2xl flex items-center gap-4"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Registrasi Aset Baru
        </Link>
      </header>

      {error && (
        <div className="bg-red-500/10 text-red-500 p-10 rounded-[3rem] mb-12 border border-red-500/20 flex items-center gap-8">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line></svg>
          <span className="font-black text-[10px] uppercase tracking-[0.3em]">{error}</span>
        </div>
      )}

      <div className="grid gap-6">
        {services.length === 0 ? (
          <div className="text-center py-40 border-2 border-dashed border-white/5 rounded-[4rem]">
            <p className="text-white/10 font-black tracking-[0.5em] text-[10px] uppercase italic">Inventory Empty - No Active Assets</p>
          </div>
        ) : (
          services.map((service) => (
            <AdminCard key={service.id} className="group">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="porthole w-32 h-32 shadow-2xl shrink-0 group-hover:rotate-12 transition-transform duration-700 border-brass/50 border-4">
                  {service.image ? (
                    <img src={service.image} alt="Produk" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-navy text-white/10 font-black text-3xl">⚓</div>
                  )}
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                    <span className="text-brass text-[9px] font-black tracking-widest px-4 py-1.5 bg-brass/10 rounded-full border border-brass/20 uppercase">Class-S Security</span>
                    <span className="text-white/20 text-[9px] font-black tracking-widest uppercase">ID: BRG-00{service.id}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white group-hover:text-navy transition-colors duration-500 tracking-tighter uppercase mb-4 leading-none">
                    {service.title}
                  </h3>
                  <p className="text-white/40 group-hover:text-navy/60 transition-colors duration-500 text-[13px] font-medium leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>

                <div className="flex gap-4 w-full md:w-auto">
                  <Link
                    href={`/admin/services/edit/${service.id}`}
                    className="flex-1 md:w-16 h-16 rounded-2xl bg-white/5 text-white/40 hover:bg-navy hover:text-white flex items-center justify-center transition-all duration-500 group/btn border border-white/5"
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  </Link>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="flex-1 md:w-16 h-16 rounded-2xl bg-red-500/5 text-red-500/40 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all duration-500 border border-red-500/10"
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                  </button>
                </div>
              </div>
            </AdminCard>
          ))
        )}
      </div>
    </div>
  );
}