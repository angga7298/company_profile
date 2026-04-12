'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

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
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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
        setLoading(false);
        };
    fetchData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('full_description', form.full_description);
    formData.append('project_date', form.project_date);
    if (form.image) formData.append('image', form.image);
    formData.append('_method', 'PUT'); // Laravel spoofing method

    const res = await fetch(`http://localhost:8000/api/admin/portfolios/${id}`, {
      method: 'POST', // because _method=PUT
      headers: { Authorization: `Bearer ${token}` },
      body: formData
    });
    if (res.ok) router.push('/admin/portfolios');
    else alert('Gagal update');
    setSaving(false);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Portofolio</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        {oldImage && <img src={oldImage} alt="Current" className="w-32 h-32 object-cover rounded" />}
        <div>
          <label className="block font-semibold">Judul Proyek</label>
          <input type="text" className="w-full border p-2 rounded" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
        </div>
        <div>
          <label className="block font-semibold">Deskripsi Singkat</label>
          <input type="text" className="w-full border p-2 rounded" value={form.description} onChange={e => setForm({...form, description: e.target.value})} required />
        </div>
        <div>
          <label className="block font-semibold">Deskripsi Lengkap</label>
          <textarea rows={4} className="w-full border p-2 rounded" value={form.full_description} onChange={e => setForm({...form, full_description: e.target.value})} required />
        </div>
        <div>
          <label className="block font-semibold">Tanggal Proyek</label>
          <input type="date" className="w-full border p-2 rounded" value={form.project_date} onChange={e => setForm({...form, project_date: e.target.value})} required />
        </div>
        <div>
          <label className="block font-semibold">Ganti Gambar</label>
          <input type="file" accept="image/*" className="w-full border p-2 rounded" onChange={e => setForm({...form, image: e.target.files?.[0] || null})} />
        </div>
        <div className="flex gap-2">
          <button type="submit" disabled={saving} className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
          <button type="button" onClick={() => router.back()} className="bg-gray-500 text-white px-4 py-2 rounded">Batal</button>
        </div>
      </form>
    </div>
  );
}