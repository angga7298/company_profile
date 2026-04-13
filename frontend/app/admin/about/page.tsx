'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAboutData, updateAboutData, AboutData, stringifyValues } from '@/lib/aboutService';

export default function EditAbout() {
  const router = useRouter();
  const [description, setDescription] = useState('');
  const [vision, setVision] = useState('');
  const [mission, setMission] = useState('');
  const [heroTitle, setHeroTitle] = useState('');
  const [heroSubtitle, setHeroSubtitle] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    const fetchAbout = async () => {
      try {
        const data = await getAboutData();
        if (data) {
          setDescription(data.description || '');
          setVision(data.vision || '');
          setMission(data.mission || '');
          setHeroTitle(data.hero_title || '');
          setHeroSubtitle(data.hero_subtitle || '');
        }
      } catch (err) {
        setError('Gagal memuat profil perusahaan.');
      } finally {
        setFetching(false);
      }
    };
    fetchAbout();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const dataToSave: Partial<AboutData> = {
        description,
        vision,
        mission,
        hero_title: heroTitle,
        hero_subtitle: heroSubtitle,
        values: stringifyValues([
            { title: "Efisiensi Operasional", description: "Optimalisasi rantai pasok kelautan yang presisi.", icon: "" },
            { title: "Kualitas Standar Ekspor", description: "Hanya produk terbaik yang lolos seleksi kualitas.", icon: "" },
            { title: "Keberlanjutan Ekosistem", description: "Menjaga keseimbangan laut untuk masa depan.", icon: "" }
        ])
      };
      
      const updated = await updateAboutData(dataToSave);
      
      if (!updated) {
        throw new Error('Gagal memperbarui database.');
      }

      setSuccess('Profil perusahaan berhasil diperbarui!');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    if (!confirm('PERINGATAN KRITIKAL: Seluruh konten profil akan dihapus dari manifest. Lanjutkan?')) return;
    
    setLoading(true);
    try {
      const resetData: Partial<AboutData> = {
        description: '',
        vision: '',
        mission: '',
        hero_title: '',
        hero_subtitle: '',
        values: '[]'
      };
      await updateAboutData(resetData);
      
      setDescription('');
      setVision('');
      setMission('');
      setHeroTitle('');
      setHeroSubtitle('');
      
      setSuccess('Konten profil telah dikosongkan.');
    } catch (err) {
      setError('Terjadi kesalahan saat mengosongkan data.');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="w-10 h-10 border-4 border-white/5 border-t-brass rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="animate-fade-in-up">
      <header className="mb-20">
        <span className="text-brass font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Manifest Settings</span>
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase leading-none">Profil <br/>Perusahaan.</h1>
        <p className="text-white/30 text-[10px] mt-4 uppercase tracking-[0.2em] font-black italic">Mendefinisikan Ulang Narasi Bahari</p>
      </header>
      
      {error && (
        <div className="bg-red-500/10 text-red-500 p-8 rounded-[3rem] mb-12 border border-red-500/20 flex items-center gap-6">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line></svg>
          <span className="font-black text-[10px] uppercase tracking-[0.2em]">{error}</span>
        </div>
      )}
      {success && (
        <div className="bg-seafoam/10 text-seafoam p-8 rounded-[3rem] mb-12 border border-seafoam/20 flex items-center gap-6">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span className="font-black text-[10px] uppercase tracking-[0.2em] text-glow">{success}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-24">
        {/* HERO CONTENT SECTION */}
        <section className="space-y-12">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black text-white/10 uppercase tracking-[0.5em] whitespace-nowrap">Header Deck Configuration</span>
            <div className="h-px bg-white/5 flex-grow"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 pl-8">Hero Title</label>
              <input
                type="text"
                value={heroTitle}
                onChange={(e) => setHeroTitle(e.target.value)}
                placeholder="Ex: Solusi Maritim Terpadu"
                className="w-full bg-[#001f3f] border-2 border-white/5 rounded-[2rem] px-10 py-7 text-sm font-bold text-white focus:border-brass/30 transition-all outline-none shadow-2xl"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 pl-8">Hero Subtitle</label>
              <input
                type="text"
                value={heroSubtitle}
                onChange={(e) => setHeroSubtitle(e.target.value)}
                placeholder="Ex: Menuju ekosistem laut yang berkelanjutan."
                className="w-full bg-[#001f3f] border-2 border-white/5 rounded-[2rem] px-10 py-7 text-sm font-bold text-white focus:border-brass/30 transition-all outline-none shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* CORE BRAND CONTENT SECTION */}
        <section className="space-y-12">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black text-white/10 uppercase tracking-[0.5em] whitespace-nowrap">Core Logbook Entry</span>
            <div className="h-px bg-white/5 flex-grow"></div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 pl-8">Corporate Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={8}
                className="w-full bg-[#001f3f] border-2 border-white/5 rounded-[3.5rem] px-12 py-10 text-sm font-medium leading-loose text-white/60 focus:border-seafoam/30 transition-all outline-none shadow-2xl"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 pl-8">Vision Parameters</label>
                <textarea
                  value={vision}
                  onChange={(e) => setVision(e.target.value)}
                  rows={6}
                  className="w-full bg-[#001f3f] border-2 border-white/5 rounded-[3rem] px-12 py-10 text-sm font-medium leading-loose text-white/60 focus:border-seafoam/30 transition-all outline-none shadow-2xl"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 pl-8">Mission Protocol Points</label>
                <textarea
                  value={mission}
                  onChange={(e) => setMission(e.target.value)}
                  rows={6}
                  className="w-full bg-[#001f3f] border-2 border-white/5 rounded-[3rem] px-12 py-10 text-sm font-medium leading-loose text-white/60 focus:border-seafoam/30 transition-all outline-none shadow-2xl"
                  placeholder="Format:&#10;Point One&#10;Point Two"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ACTIONS SECTION */}
        <div className="flex flex-col md:flex-row gap-8 pt-20 border-t border-white/5">
          <button
            type="submit"
            disabled={loading}
            className="px-20 py-7 bg-brass text-navy text-[10px] font-black uppercase tracking-[0.5em] rounded-full hover:bg-white transition-all duration-700 shadow-[0_0_50px_rgba(197,160,89,0.2)] disabled:bg-white/5"
          >
            {loading ? 'Transmitting...' : 'Update Records ⚓'}
          </button>
          
          <button
            type="button"
            onClick={handleReset}
            disabled={loading}
            className="px-20 py-7 bg-red-500/10 text-red-500 font-black text-[10px] uppercase tracking-[0.5em] rounded-full hover:bg-red-500 hover:text-white transition-all duration-500"
          >
            Terminal Wipe
          </button>
        </div>
      </form>
    </div>
  );
}