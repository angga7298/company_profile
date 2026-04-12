'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/admin/login';

  // Proteksi: jika belum login dan bukan halaman login, redirect ke login
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && !isLoginPage) {
      router.push('/admin/login');
    }
  }, [pathname, router, isLoginPage]);

  // Jika halaman login, render tanpa sidebar
  if (isLoginPage) {
    return <>{children}</>;
  }

  const navItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/admin/services', label: 'Layanan', icon: '⚙️' },
    { href: '/admin/portfolios', label: 'Portofolio', icon: '🖼️' },
    { href: '/admin/pages', label: 'Halaman', icon: '📄' },
    { href: '/admin/contacts', label: 'Pesan Kontak', icon: '✉️' },
  ];

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

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 font-bold text-xl border-b">Admin Panel</div>
        <nav className="p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 p-2 rounded mb-1 hover:bg-gray-100 ${
                pathname === item.href ? 'bg-blue-100 text-blue-700' : ''
              }`}
            >
              <span>{item.icon}</span> {item.label}
            </Link>
          ))}
          {/* <button
            onClick={handleLogout}
            className="flex items-center gap-2 p-2 rounded w-full text-left mt-4 text-red-600 hover:bg-red-50"
          >
            🚪 Logout
          </button> */}
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow p-6">
          {children}
        </div>
      </main>
    </div>
  );
}