'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: '', content: '', status: true });
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('content', form.content);
    formData.append('status', form.status ? '1' : '0');
    if (image) formData.append('featured_image', image);

    const res = await fetch('http://localhost:8000/api/admin/pages', {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}` },
  body: formData
});
if (res.ok) {
  router.push('/admin/pages');
} else {
  const errorData = await res.json();
  alert('Gagal menyimpan: ' + JSON.stringify(errorData));
}
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tambah Halaman</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
        <div>
          <label className="block font-semibold">Judul Halaman</label>
          <input type="text" className="w-full border p-2 rounded" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
        </div>
        <div>
          <label className="block font-semibold">Konten (HTML)</label>
          <textarea rows={8} className="w-full border p-2 rounded font-mono" value={form.content} onChange={e => setForm({...form, content: e.target.value})} required />
          <p className="text-xs text-gray-500">Anda bisa menggunakan tag HTML seperti &lt;p&gt;, &lt;strong&gt;, dll.</p>
        </div>
        <div>
          <label className="block font-semibold">Gambar Utama (opsional)</label>
          <input type="file" accept="image/*" onChange={e => setImage(e.target.files?.[0] || null)} />
        </div>
        <div>
          <label className="block font-semibold">Status</label>
          <select className="w-full border p-2 rounded" value={form.status ? '1' : '0'} onChange={e => setForm({...form, status: e.target.value === '1'})}>
            <option value="1">Aktif</option>
            <option value="0">Nonaktif</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">Simpan</button>
          <button type="button" onClick={() => router.back()} className="bg-gray-500 text-white px-4 py-2 rounded">Batal</button>
        </div>
      </form>
    </div>
  );
}