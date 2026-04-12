import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Cek apakah user mengakses halaman admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Kecuali halaman login
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }
    
    // Ambil token dari cookie (kita akan set cookie setelah login)
    const token = request.cookies.get('token')?.value;
    
    if (!token) {
      // Redirect ke login
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};