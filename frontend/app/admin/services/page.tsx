'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string | null;
}

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
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:8000/api/services');
      const data = await res.json();
      setServices(data.data || []);
    } catch (err) {
      setError('Gagal memuat data');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Yakin hapus layanan ini?')) return;
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:8000/api/admin/services/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        fetchServices();
      } else {
        alert('Gagal hapus');
      }
    } catch (err) {
      alert('Error');
    }
  };

  if (loading) return <div className="p-6 text-gray-900">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Daftar Layanan</h1>
          <Link
            href="/admin/services/create"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
          >
            + Tambah Layanan
          </Link>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ikon</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judul</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deskripsi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {services.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-gray-500">Belum ada data</td>
                </tr>
              ) : (
                services.map((service) => (
                  <tr key={service.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{service.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{service.icon || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{service.title}</td>
                    <td className="px-6 py-4 text-sm">{service.description.substring(0, 60)}...</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <Link
                        href={`/admin/services/edit/${service.id}`}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(service.id)}
                        className="text-red-600 hover:text-red-900 ml-2"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}