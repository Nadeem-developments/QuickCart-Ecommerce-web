import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// ✅ Safe configuration for Vercel deploy
export const config = {
  matcher: [
    // Run Clerk middleware for all routes
    // BUT skip Next.js internals, static assets, and APIs
    "/((?!_next|.*\\..*|api|trpc|favicon.ico).*)",
  ],
};
