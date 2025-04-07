import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { dashboardUrl, homeUrl, loginUrl } from "./lib/route";
import { Session } from "next-auth";

const protectedRoutes = ["/dashboard"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session: Session | null = await auth();

  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !session) {
    return NextResponse.redirect(new URL(loginUrl, request.url));
  }

  if (pathname === loginUrl && session) {
    return NextResponse.redirect(new URL(dashboardUrl, request.url));
  }

  if (pathname === homeUrl) {
    const targetUrl = session ? dashboardUrl : loginUrl;
    return NextResponse.redirect(new URL(targetUrl, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/"],
};
