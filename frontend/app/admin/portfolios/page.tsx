'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';

export default function AdminPortfolios() {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    const res = await api.get('/portfolios');
    setPortfolios(res.data.data);
  };

  const handleDelete = async (id) => {
    if (confirm('Yakin hapus?')) {
      await api.delete(`/admin/portfolios/${id}`);
      fetchPortfolios();
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Portfolios</h1>
        <Link href="/admin/portfolios/create" className="bg-green-600 text-white px-4 py-2 rounded">
          + Add New
        </Link>
      </div>
      <div className="grid gap-4">
        {portfolios.map((p: any) => (
          <div key={p.id} className="border p-4 rounded flex gap-4 items-center">
            {p.image && <img src={p.image} alt={p.title} className="w-24 h-24 object-cover rounded" />}
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p>{p.description}</p>
            </div>
            <div className="space-x-2">
              <Link href={`/admin/portfolios/edit/${p.id}`} className="text-blue-600">Edit</Link>
              <button onClick={() => handleDelete(p.id)} className="text-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}