import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAccessable } from "./json/restrictedUrls";

export async function middleware(request: NextRequest) {
  const user:any = request?.cookies?.get("quizzLoginData")?.value;
    if (!user || user === undefined) {
      if (new URL(request.url).pathname !== "/quizz/auth/register" && new URL(request.url).pathname !== "/quizz/auth/login") {
        return NextResponse.redirect(new URL("/quizz/auth/login", request.url));
      }
    } else{
      const updatedUser = JSON.parse(user);
      if(updatedUser.is_admin && new URL(request.url).pathname === "/quizz/home"){
        return NextResponse.redirect(new URL("/quizz/admin/home", request.url));
      }
      if(!isAccessable(updatedUser, new URL(request.url).pathname)){
        return NextResponse.redirect(new URL("/quizz/not-found", request.url));
      }
    }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|quizz/auth/login|quizz/auth/register|profile.png).*)",
  ],
};
