'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({ pages: 0, portfolios: 0, services: 0, contacts: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    const fetchStats = async () => {
      try {
        const [pages, portfolios, services, contacts] = await Promise.all([
          fetch('http://localhost:8000/api/pages').then(res => res.json()),
          fetch('http://localhost:8000/api/portfolios').then(res => res.json()),
          fetch('http://localhost:8000/api/services').then(res => res.json()),
          fetch('http://localhost:8000/api/admin/contacts', {
            headers: { Authorization: `Bearer ${token}` }
          }).then(res => res.json()).catch(() => []),
        ]);
        setStats({
          pages: pages.data?.length || 0,
          portfolios: portfolios.data?.length || 0,
          services: services.data?.length || 0,
          contacts: contacts.length || 0,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [router]);

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      });
    }
    localStorage.removeItem('token');
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    router.push('/admin/login');
  };

  if (loading) return <div className="p-6 text-gray-900">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          {/* <button 
            onClick={handleLogout} 
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition"
          >
            Logout
          </button> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Card Pages */}
          <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-500">
            <h2 className="text-lg font-semibold text-gray-700">Halaman</h2>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.pages}</p>
            <Link href="/admin/pages" className="text-blue-600 text-sm hover:underline mt-2 inline-block">
              Kelola →
            </Link>
          </div>
          
          {/* Card Portfolios */}
          <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-green-500">
            <h2 className="text-lg font-semibold text-gray-700">Portofolio</h2>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.portfolios}</p>
            <Link href="/admin/portfolios" className="text-green-600 text-sm hover:underline mt-2 inline-block">
              Kelola →
            </Link>
          </div>
          
          {/* Card Services */}
          <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-yellow-500">
            <h2 className="text-lg font-semibold text-gray-700">Layanan</h2>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.services}</p>
            <Link href="/admin/services" className="text-yellow-600 text-sm hover:underline mt-2 inline-block">
              Kelola →
            </Link>
          </div>
          
          {/* Card Contacts */}
          <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-purple-500">
            <h2 className="text-lg font-semibold text-gray-700">Pesan Kontak</h2>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.contacts}</p>
            <Link href="/admin/contacts" className="text-purple-600 text-sm hover:underline mt-2 inline-block">
              Lihat →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}