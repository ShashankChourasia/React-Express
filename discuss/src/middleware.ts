import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./app/api/auth/[...nextauth]/route";

export default auth(async (request: NextRequest) => {
  const session = await auth();

  const url = request.nextUrl;
  const searchParams = url.searchParams.toString();
  let hostname = request.headers;

  const pathWithSearchParams = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  const customSubDomain = hostname
    .get("host")
    ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
    .filter(Boolean)[0];

  if (customSubDomain) {
    return NextResponse.rewrite(
      new URL(`/${customSubDomain}${pathWithSearchParams}`, request.url)
    );
  }

  if (request.nextUrl.pathname.startsWith("/api/login") && session?.user) {
    return NextResponse.rewrite(new URL("/", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/api/register") && session?.user) {
    return NextResponse.redirect(new URL("/", request.url));
  }
});

export const config = {
  //   matcher: ["/api/login", "/api/register", "/*"],
  // matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
