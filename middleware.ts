import { authMiddleware, clerkMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/api/webhooks/clerk"],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\\.[\\w]+$)"],
  
}
);


export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
