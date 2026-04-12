'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactsList() {
  const router = useRouter();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    try {
      const res = await fetch('http://localhost:8000/api/admin/contacts', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setContacts(data);
    } catch (error) {
      console.error('Gagal memuat pesan:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [router]);

  const toggleRead = async (id: number, currentStatus: boolean) => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`http://localhost:8000/api/admin/contacts/${id}/read`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ is_read: !currentStatus }),
      });
      if (res.ok) {
        // Refresh daftar setelah update
        fetchContacts();
      } else {
        alert('Gagal mengubah status');
      }
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan');
    }
  };

  if (loading) return <p className="text-center py-10">Memuat pesan...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Pesan Kontak Masuk</h1>
      {contacts.length === 0 && <p className="text-gray-500">Belum ada pesan.</p>}
      <div className="space-y-5">
        {contacts.map((msg: any) => (
          <div key={msg.id} className={`border rounded-xl p-5 shadow-sm transition ${msg.is_read ? 'bg-gray-50' : 'bg-white border-l-4 border-l-blue-500'}`}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <strong className="text-lg text-blue-800">{msg.name}</strong>
                <p className="text-gray-600 text-sm">Email: {msg.email}</p>
              </div>
              <div className="text-sm text-gray-500">{new Date(msg.created_at).toLocaleString()}</div>
            </div>
            <p className="mt-3 text-gray-700 whitespace-pre-wrap border-t pt-3">{msg.message}</p>
            <div className="mt-4">
              <button
                onClick={() => toggleRead(msg.id, msg.is_read)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                  msg.is_read
                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                    : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                }`}
              >
                {msg.is_read ? '✓ Sudah dibaca' : '○ Tandai sudah dibaca'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}