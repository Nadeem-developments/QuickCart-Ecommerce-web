import { clerkMiddleware } from "@clerk/nextjs/server";

// Clerk middleware ko export karte hain
export default clerkMiddleware();

// Next.js ko batate hain kin routes par middleware chale
export const config = {
  matcher: [
    // Ignore Next.js internal files and static assets
    "/((?!_next|.*\\..*).*)",
    // Always include API routes
    "/(api|trpc)(.*)",
  ],
};
