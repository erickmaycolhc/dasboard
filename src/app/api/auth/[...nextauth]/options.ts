import NextAuth, { NextAuthOptions } from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { signOut } from "next-auth/react";
import Providers from "next-auth/providers";

export const authOptions: NextAuthOptions = {
  providers: [
    // OAuth authentication providers...
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    // Passwordless / email sign in
    //   EmailProvider({
    //     server: process.env.MAIL_SERVER,
    //     from: "NextAuth.js <no-reply@example.com>",
    //   }),
    // ],
  ],
  // pages: {
  //   signIn: "/",
  // },

  // callbacks: {
  //   async signIn() {
  //     // Redirigir después de iniciar sesión
  //     return "/";
  //   },
  //   async redirect(params) {
  //     // Personalizar la lógica de redirección si es necesario
  //     console.log("params.url == >" + params.url);
  //     console.log("params.baseUrl == >" + params.baseUrl);
  //     // return params.url.startsWith(params.baseUrl)
  //     //   ? params.url
  //     //   : params.baseUrl;
  //     return "/";
  //   },
  // },
};

export default NextAuth(authOptions);
