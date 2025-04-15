// src/middleware.ts
import { authMiddleware, redirectToSignIn } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const protectedRoutes = [
  { path: '/dashboard/admin', roles: ['admin'] },
  { path: '/dashboard/student', roles: ['student'] },
  { path: '/dashboard/teacher', roles: ['teacher'] },
  { path: '/dashboard/parent', roles: ['parent'] },
];

export default authMiddleware({
  publicRoutes: ['/', '/sign-in(.*)', '/sign-up(.*)', '/unauthorized'],

  async afterAuth(auth, req) {
    const { userId, sessionClaims, isPublicRoute } = auth;
    const { pathname } = req.nextUrl;

    const role = sessionClaims?.publicMetadata?.role as string | undefined;

    // ✅ Redirect signed-in users from /sign-in or /sign-up to their dashboard
    if (userId && (pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up'))) {
      return NextResponse.redirect(new URL(`/dashboard/${role || ''}`, req.url));
    }

    // ✅ Allow access to public routes
    if (isPublicRoute) return NextResponse.next();

    // 🔒 Redirect non-authenticated users to sign-in
    if (!userId) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // 🔐 Role-based protection
    for (const route of protectedRoutes) {
      if (pathname.startsWith(route.path)) {
        if (!role || !route.roles.includes(role)) {
          return NextResponse.redirect(new URL('/unauthorized', req.url));
        }
      }
    }

    return NextResponse.next();
  },
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
