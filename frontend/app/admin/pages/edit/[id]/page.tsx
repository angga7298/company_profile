'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function EditPage() {
  const router = useRouter();
  const { id } = useParams();
  const [form, setForm] = useState({
    title: '',
    content: '',
    status: true,
  });
  const [image, setImage] = useState<File | null>(null);
  const [oldImage, setOldImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchPage = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/admin/login');
        return;
      }
      try {
        const res = await fetch(`http://localhost:8000/api/pages/id/${id}`);
        if (!res.ok) throw new Error('Page not found');
        const data = await res.json();
        const page = data.data;
        setForm({
          title: page.title || '',
          content: page.content || '',
          status: page.status === 1 || page.status === true,
        });
        setOldImage(page.featured_image || '');
      } catch (error) {
        console.error(error);
        alert('Gagal memuat data halaman');
      } finally {
        setLoading(false);
      }
    };
    fetchPage();
  }, [id, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('content', form.content);
    formData.append('status', form.status ? '1' : '0');
    if (image) formData.append('featured_image', image);
    formData.append('_method', 'PUT');

    const res = await fetch(`http://localhost:8000/api/admin/pages/${id}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    if (res.ok) {
      router.push('/admin/pages');
    } else {
      alert('Gagal update halaman');
      setSaving(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Halaman</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
        {oldImage && (
          <div>
            <label className="block font-semibold">Gambar Saat Ini</label>
            <img src={oldImage} alt="current" className="w-32 h-32 object-cover rounded" />
          </div>
        )}
        <div>
          <label className="block font-semibold">Judul Halaman</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Konten (HTML)</label>
          <textarea
            rows={10}
            className="w-full border p-2 rounded font-mono"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            required
          />
          <p className="text-xs text-gray-500">Anda bisa menggunakan tag HTML.</p>
        </div>
        <div>
          <label className="block font-semibold">Ganti Gambar Utama (opsional)</label>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
        </div>
        <div>
          <label className="block font-semibold">Status</label>
          <select
            className="w-full border p-2 rounded"
            value={form.status ? '1' : '0'}
            onChange={(e) => setForm({ ...form, status: e.target.value === '1' })}
          >
            <option value="1">Aktif</option>
            <option value="0">Nonaktif</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button type="submit" disabled={saving} className="bg-blue-600 text-white px-4 py-2 rounded">
            {saving ? 'Menyimpan...' : 'Update'}
          </button>
          <button type="button" onClick={() => router.back()} className="bg-gray-500 text-white px-4 py-2 rounded">
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}