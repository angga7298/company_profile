'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PagesList() {
  const router = useRouter();
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/admin/login');
    const res = await fetch('http://localhost:8000/api/pages');
    const data = await res.json();
    setPages(data.data || []);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id: number) => {
    if (!confirm('Yakin hapus halaman ini?')) return;
    const token = localStorage.getItem('token');
    await fetch(`http://localhost:8000/api/admin/pages/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchData();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Daftar Halaman</h1>
        <Link href="/admin/pages/create" className="bg-blue-600 text-white px-4 py-2 rounded">+ Tambah Halaman</Link>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Judul</th>
            <th className="p-2 border">Slug</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((p: any) => (
            <tr key={p.id}>
              <td className="p-2 border">{p.id}</td>
              <td className="p-2 border">{p.title}</td>
              <td className="p-2 border">{p.slug}</td>
              <td className="p-2 border">{p.status ? 'Aktif' : 'Nonaktif'}</td>
              <td className="p-2 border">
                <Link href={`/admin/pages/edit/${p.id}`} className="text-blue-600 mr-2">Edit</Link>
                <button onClick={() => handleDelete(p.id)} className="text-red-600">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}