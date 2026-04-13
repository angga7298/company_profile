'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminCard from '@/components/AdminCard';

export default function ContactsList() {
  const router = useRouter();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    try {
      const res = await fetch('http://localhost:8000/api/admin/contacts', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setContacts(data);
    } catch (error) {
      console.error('Gagal memuat pesan:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [router]);

  const toggleRead = async (id: number, currentStatus: boolean) => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`http://localhost:8000/api/admin/contacts/${id}/read`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ is_read: !currentStatus }),
      });
      if (res.ok) {
        fetchContacts();
      } else {
        alert('Gagal mengubah status');
      }
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan');
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="w-10 h-10 border-4 border-white/5 border-t-brass rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="animate-fade-in-up">
      <header className="mb-16">
        <span className="text-brass font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Signal Intelligence</span>
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase leading-none">Intersepsi <br/>Pesan Masuk.</h1>
        <p className="text-white/30 text-[10px] mt-4 uppercase tracking-[0.2em] font-black italic">Monitoring Transmisi Eksternal</p>
      </header>

      {contacts.length === 0 ? (
        <div className="text-center py-32 border-2 border-dashed border-white/5 rounded-[3rem]">
          <p className="text-white/10 font-black tracking-[0.4em] text-[10px] uppercase">No Signals Detected in this Frequency</p>
        </div>
      ) : (
        <div className="space-y-6">
          {contacts.map((msg: any) => (
            <AdminCard key={msg.id} className={`transition-all duration-500 ${!msg.is_read ? 'border-l-4 border-l-seafoam' : ''}`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-4 mb-2">
                     <span className={`w-2 h-2 rounded-full ${msg.is_read ? 'bg-white/10' : 'bg-seafoam animate-pulse shadow-[0_0_10px_#82eefd]'}`} />
                     <strong className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-navy transition-colors">{msg.name}</strong>
                  </div>
                  <p className="text-white/30 group-hover:text-navy/40 font-bold text-[10px] uppercase tracking-widest pl-6">Source: {msg.email}</p>
                </div>
                <div className="text-[10px] font-black text-white/20 group-hover:text-navy/20 uppercase tracking-widest bg-white/5 group-hover:bg-navy/5 px-4 py-2 rounded-full border border-white/5 group-hover:border-navy/5 transition-all">
                  T-Log: {new Date(msg.created_at).toLocaleString('id-ID')}
                </div>
              </div>
              
              <div className="bg-navy/40 group-hover:bg-navy/5 rounded-3xl p-8 mb-8 border border-white/5 group-hover:border-navy/5 transition-all">
                <p className="text-white/60 group-hover:text-navy/70 leading-relaxed font-medium whitespace-pre-wrap">{msg.message}</p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => toggleRead(msg.id, msg.is_read)}
                  className={`px-10 py-4 rounded-full text-[9px] font-black uppercase tracking-[0.3em] transition-all duration-500 shadow-xl ${
                    msg.is_read
                      ? 'bg-white/5 text-white/40 hover:bg-white hover:text-navy'
                      : 'bg-brass text-navy hover:bg-white'
                  }`}
                >
                  {msg.is_read ? '✓ Archived Signal' : '○ Mark as Read'}
                </button>
              </div>
            </AdminCard>
          ))}
        </div>
      )}
    </div>
  );
}