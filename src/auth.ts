import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import email from "@/components/LoginForm"
import Login from "./app/login/page"
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub, Google,
  
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
    }),
  ]
})