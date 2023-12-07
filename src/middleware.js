import { NextResponse } from "next/server";

export function middleware(request) {
  let token = false;
    if (token) {
      return NextResponse.redirect(new URL("/", request.url))
    }
}

export const config = {
  matcher: ["/login", "/register"]
}