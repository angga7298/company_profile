'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePortfolio() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    description: '', // hanya satu deskripsi
    project_date: '',
    image: null as File | null,
  });
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm({ ...form, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setForm({ ...form, image: null });
      setPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('title', form.title);
    // Kirim nilai yang sama untuk description dan full_description
    formData.append('description', form.description);
    formData.append('full_description', form.description);
    formData.append('project_date', form.project_date);
    if (form.image) formData.append('image', form.image);

    const res = await fetch('http://localhost:8000/api/admin/portfolios', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    if (res.ok) {
      router.push('/admin/portfolios');
    } else {
      const error = await res.json();
      alert('Gagal menyimpan: ' + (error.message || 'Unknown error'));
    }
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tambah Portofolio</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="block font-semibold">Judul Proyek</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Deskripsi</label>
          <textarea
            rows={4}
            className="w-full border p-2 rounded"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Tanggal Proyek</label>
          <input
            type="date"
            className="w-full border p-2 rounded"
            value={form.project_date}
            onChange={e => setForm({ ...form, project_date: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Gambar Proyek</label>
          <input
            type="file"
            accept="image/*"
            className="w-full border p-2 rounded"
            onChange={handleImageChange}
            required
          />
          {preview && (
            <div className="mt-2">
              <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded border" />
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
            {loading ? 'Menyimpan...' : 'Simpan'}
          </button>
          <button type="button" onClick={() => router.back()} className="bg-gray-500 text-white px-4 py-2 rounded">
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}