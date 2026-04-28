import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');

  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      // atob can be problematic in some server environments, Buffer is robust
      const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':');

      if (user === process.env.ADMIN_USER && pwd === process.env.ADMIN_PASS) {
        return NextResponse.next();
      }
    }

    return new NextResponse('Authentication Required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
