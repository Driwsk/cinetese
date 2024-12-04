import { getServerSession, type DefaultSession, type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { UserRepositoryMemory } from "@/Users/UserRepositoryMemory";
import { LoginHandler } from "@/Users/LoginHandler";



// Declaração do módulo para adicionar o tipo 'User' ao session
declare module "next-auth" {
  interface Session {
    user: User;
  }
}

// Tipo para o usuário
export type User = { id: string } & DefaultSession["user"];

// Configurações de autenticação
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: ({ session, token }) => {
      debugger;
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
        },
      };
    },
  },
  pages: {
    signIn: "/login", // Corrigido 'singIn' para 'signIn'
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "E-mail" },
        password: { label: "Senha", type: "password" },
      },
      authorize:(credentials: any) => {
        try{
            debugger;
            if (!credentials?.email|| !credentials?.password) {
                return null;
            }
            const userRepo = new UserRepositoryMemory();
            const handler = new LoginHandler(userRepo);

            const user = handler.execute(credentials);
            if (!user) return null;
            return {
                id: user.id,
                email: user.email,
                name: user.name,
            };
        } catch (error) {
            return null;
        }
      }
    }),
  ],
};

export const getAuthSession = (authOptions: NextAuthOptions) => getServerSession(authOptions);
