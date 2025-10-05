import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // ✅ Allow everything except Next.js internals, static files, and APIs
    "/((?!_next|.*\\..*|api|trpc|favicon.ico).*)",
  ],
};
