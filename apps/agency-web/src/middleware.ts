import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const isEnglish = /^\/en(?:\/|$)/.test(request.nextUrl.pathname);
  requestHeaders.set("x-page-language", isEnglish ? "en" : "el");
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon).*)"] };
