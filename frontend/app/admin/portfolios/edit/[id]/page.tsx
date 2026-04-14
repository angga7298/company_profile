'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

export default function EditPortfolio() {
  const router = useRouter();
  const { id } = useParams();
  const [form, setForm] = useState({
    title: '',
    description: '',
    full_description: '',
    project_date: '',
    image: null as File | null,
  });
  const [oldImage, setOldImage] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/portfolios/${id}`);
        const data = await res.json();
        const item = data.data;
        setForm({
          title: item.title || '',
          description: item.description || '',
          full_description: item.full_description || '',
          project_date: item.project_date || '',
          image: null,
        });
        setOldImage(item.image || '');
      } catch (err) {
        setError('Gagal memuat data proyek.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm({ ...form, image: file });
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setForm({ ...form, image: null });
      setPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('full_description', form.full_description);
    formData.append('project_date', form.project_date);
    if (form.image) formData.append('image', form.image);
    formData.append('_method', 'PUT');

    try {
      const res = await fetch(`http://localhost:8000/api/admin/portfolios/${id}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });
      if (res.ok) router.push('/admin/portfolios');
      else {
        const errorData = await res.json();
        setError('Gagal update: ' + (errorData.message || 'Unknown error'));
      }
    } catch (err) {
      setError('Terjadi kesalahan koneksi.');
    }
    setSaving(false);
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="w-10 h-10 border-4 border-white/5 border-t-brass rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="animate-fade-in-up">
      <header className="mb-20">
        <Link href="/admin/portfolios" className="inline-flex items-center gap-3 text-white/30 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 transition-colors duration-300">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>
          Kembali ke Manifest
        </Link>
        <span className="text-brass font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Strategic Modification</span>
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase leading-none">Edit <br/>Portofolio.</h1>
        <p className="text-white/30 text-[10px] mt-4 uppercase tracking-[0.2em] font-black italic">Modifikasi Data Proyek — Archive #{id}</p>
      </header>

      {error && (
        <div className="bg-red-500/10 text-red-500 p-8 rounded-[3rem] mb-12 border border-red-500/20 flex items-center gap-6">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line></svg>
          <span className="font-black text-[10px] uppercase tracking-[0.2em]">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-16">
        {/* SECTION: Project Identity */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black text-white/10 uppercase tracking-[0.5em] whitespace-nowrap">Project Identity</span>
            <div className="h-px bg-white/5 flex-grow"></div>
          </div>

          <div className="space-y-4">
            <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 pl-8">Judul Proyek *</label>
            <input
              type="text"
              className="w-full bg-[#001f3f] border-2 border-white/5 rounded-[2rem] px-10 py-7 text-sm font-bold text-white focus:border-brass/30 transition-all outline-none shadow-2xl placeholder:text-white/10"
              value={form.title}
              onChange={e => setForm({...form, title: e.target.value})}
              required
            />
          </div>

          <div className="space-y-4">
            <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 pl-8">Deskripsi Singkat *</label>
            <input
              type="text"
              className="w-full bg-[#001f3f] border-2 border-white/5 rounded-[2rem] px-10 py-7 text-sm font-bold text-white focus:border-brass/30 transition-all outline-none shadow-2xl placeholder:text-white/10"
              value={form.description}
              onChange={e => setForm({...form, description: e.target.value})}
              required
            />
          </div>

          <div className="space-y-4">
            <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 pl-8">Deskripsi Lengkap *</label>
            <textarea
              rows={6}
              className="w-full bg-[#001f3f] border-2 border-white/5 rounded-[3rem] px-12 py-10 text-sm font-medium leading-loose text-white/60 focus:border-seafoam/30 transition-all outline-none shadow-2xl placeholder:text-white/10"
              value={form.full_description}
              onChange={e => setForm({...form, full_description: e.target.value})}
              required
            />
          </div>

          <div className="space-y-4">
            <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 pl-8">Tanggal Proyek *</label>
            <input
              type="date"
              className="w-full bg-[#001f3f] border-2 border-white/5 rounded-[2rem] px-10 py-7 text-sm font-bold text-white focus:border-brass/30 transition-all outline-none shadow-2xl [color-scheme:dark]"
              value={form.project_date}
              onChange={e => setForm({...form, project_date: e.target.value})}
              required
            />
          </div>
        </section>

        {/* SECTION: Visual Asset */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black text-white/10 uppercase tracking-[0.5em] whitespace-nowrap">Visual Asset</span>
            <div className="h-px bg-white/5 flex-grow"></div>
          </div>

          <div className="space-y-4">
            <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 pl-8">Gambar Proyek</label>

            {(preview || oldImage) && (
              <div className="mb-6 flex items-center gap-8">
                <div className="w-48 h-48 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
                  <img src={preview || oldImage} alt="Project" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 block">
                    {preview ? 'Gambar Baru' : 'Gambar Saat Ini'}
                  </span>
                  {preview && (
                    <button type="button" onClick={() => { setForm({...form, image: null}); setPreview(null); }} className="text-[9px] font-black uppercase tracking-widest text-red-500/60 hover:text-red-500 transition-colors">
                      ✕ Hapus Perubahan
                    </button>
                  )}
                </div>
              </div>
            )}

            <label className="block w-full bg-[#001f3f] border-2 border-dashed border-white/10 rounded-[3rem] px-12 py-12 text-center cursor-pointer hover:border-brass/30 transition-all duration-500 group">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brass/10 transition-colors">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white/20 group-hover:text-brass transition-colors">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-white/40 transition-colors">
                  {form.image ? form.image.name : 'Ganti Gambar — Pilih File Baru'}
                </span>
              </div>
            </label>
          </div>
        </section>

        {/* ACTIONS */}
        <div className="flex flex-col md:flex-row gap-6 pt-16 border-t border-white/5">
          <button
            type="submit"
            disabled={saving}
            className="px-20 py-7 bg-seafoam text-navy text-[10px] font-black uppercase tracking-[0.5em] rounded-full hover:bg-white transition-all duration-700 shadow-[0_0_50px_rgba(130,238,253,0.2)] disabled:bg-white/5 disabled:text-white/20 flex items-center justify-center gap-4"
          >
            {saving ? (
              <>
                <div className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin"></div>
                Transmitting...
              </>
            ) : (
              'Update Records ⚓'
            )}
          </button>
          
          <Link
            href="/admin/portfolios"
            className="px-20 py-7 bg-white/5 text-white/40 text-[10px] font-black uppercase tracking-[0.5em] rounded-full hover:bg-white/10 hover:text-white transition-all duration-500 text-center border border-white/5"
          >
            Batalkan Operasi
          </Link>
        </div>
      </form>
    </div>
  );
}