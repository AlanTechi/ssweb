import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Phones/tablets → landing. Desktop (Mac/Windows/Linux) → invite page. */
const MOBILE_UA =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i;

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? "";

  if (MOBILE_UA.test(ua)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/Invite/e/profile", "/Invite/e/profile/:path*"],
};
