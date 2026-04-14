'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createService } from '@/lib/serviceService';

export default function CreateService() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      if (image) {
        formData.append('image', image);
      }

      await createService(formData);
      router.push('/admin/services');
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Gagal menambah';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fade-in-up">
      <header className="mb-20">
        <Link href="/admin/services" className="inline-flex items-center gap-3 text-white/30 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 transition-colors duration-300">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>
          Kembali ke Manifest
        </Link>
        <span className="text-brass font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Asset Registration</span>
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase leading-none">Registrasi <br/>Produk Baru.</h1>
        <p className="text-white/30 text-[10px] mt-4 uppercase tracking-[0.2em] font-black italic">Mendaftarkan Aset Baru ke Manifest Inventori</p>
      </header>

      {error && (
        <div className="bg-red-500/10 text-red-500 p-8 rounded-[3rem] mb-12 border border-red-500/20 flex items-center gap-6">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line></svg>
          <span className="font-black text-[10px] uppercase tracking-[0.2em]">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-16">
        {/* SECTION: Identity */}
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black text-white/10 uppercase tracking-[0.5em] whitespace-nowrap">Asset Identity</span>
            <div className="h-px bg-white/5 flex-grow"></div>
          </div>

          <div className="space-y-4">
            <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 pl-8">Nama Produk *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Ex: Tuna Grade A Premium"
              className="w-full bg-[#001f3f] border-2 border-white/5 rounded-[2rem] px-10 py-7 text-sm font-bold text-white focus:border-brass/30 transition-all outline-none shadow-2xl placeholder:text-white/10"
            />
          </div>

          <div className="space-y-4">
            <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 pl-8">Deskripsi Lengkap *</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={6}
              placeholder="Tuliskan deskripsi lengkap tentang produk ini..."
              className="w-full bg-[#001f3f] border-2 border-white/5 rounded-[3rem] px-12 py-10 text-sm font-medium leading-loose text-white/60 focus:border-seafoam/30 transition-all outline-none shadow-2xl placeholder:text-white/10"
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
            <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 pl-8">Gambar Produk</label>
            
            {preview && (
              <div className="mb-6">
                <div className="porthole w-40 h-40 shadow-2xl border-brass/50 border-4">
                  <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            <label className="block w-full bg-[#001f3f] border-2 border-dashed border-white/10 rounded-[3rem] px-12 py-12 text-center cursor-pointer hover:border-brass/30 transition-all duration-500 group">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
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
                  {image ? image.name : 'Pilih atau Seret File Gambar'}
                </span>
              </div>
            </label>
          </div>
        </section>

        {/* ACTIONS */}
        <div className="flex flex-col md:flex-row gap-6 pt-16 border-t border-white/5">
          <button
            type="submit"
            disabled={loading}
            className="px-20 py-7 bg-brass text-navy text-[10px] font-black uppercase tracking-[0.5em] rounded-full hover:bg-white transition-all duration-700 shadow-[0_0_50px_rgba(197,160,89,0.2)] disabled:bg-white/5 disabled:text-white/20 flex items-center justify-center gap-4"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin"></div>
                Transmitting...
              </>
            ) : (
              'Simpan ke Manifest ⚓'
            )}
          </button>
          
          <Link
            href="/admin/services"
            className="px-20 py-7 bg-white/5 text-white/40 text-[10px] font-black uppercase tracking-[0.5em] rounded-full hover:bg-white/10 hover:text-white transition-all duration-500 text-center border border-white/5"
          >
            Batalkan Operasi
          </Link>
        </div>
      </form>
    </div>
  );
}