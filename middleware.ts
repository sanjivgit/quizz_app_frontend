import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export async function middleware(request: NextRequest) {
  
  const user = request.cookies.get("govJobsLoginData")?.value;
  if (!user) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  } 
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|johar.png|Juidco.png|Jhar_logo.png|favicon.ico|auth/login|profile.png).*)',
  ],
};
