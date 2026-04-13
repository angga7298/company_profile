'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { getServiceById, updateService } from '@/lib/serviceService';

export default function EditService() {
  const router = useRouter();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [existingImage, setExistingImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    const fetchService = async () => {
      try {
        const service = await getServiceById(id as string);
        if (service) {
          setTitle(service.title);
          setDescription(service.description);
          setExistingImage(service.image || '');
        } else {
          setError('Data produk tidak ditemukan.');
        }
      } catch (err) {
        setError('Gagal memuat data');
      } finally {
        setFetching(false);
      }
    };
    fetchService();
  }, [id, router]);

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

      await updateService(id as string, formData);
      router.push('/admin/services');
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Gagal update';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <div className="p-6 text-gray-900">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-900">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Edit Produk</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama Produk *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Deskripsi *</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={4}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Gambar Produk</label>
            {existingImage && !image && (
              <div className="mb-2">
                <img src={existingImage} alt="Current Product" className="w-32 h-32 object-cover rounded" />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:bg-gray-400"
            >
              {loading ? 'Menyimpan...' : 'Update'}
            </button>
            <Link
              href="/admin/services"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded text-center"
            >
              Batal
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}