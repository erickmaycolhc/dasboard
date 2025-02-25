// export { default } from "next-auth/middleware";

// export const config = {
//   pages: {
//     error: "/auth/error", // Error code passed in query string as ?error=
//     newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
//     signIn: "/auth/signin",
//     signOut: "/auth/signout",
//     verifyRequest: "/auth/verify-request", // (used for check email message)
//   },
// };

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
});

// export const config = { pages: { error: "/auth/error" } };
