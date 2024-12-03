import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/prismaClient";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 1 * 30 * 30, // 30 minutes
  },
  pages: {
    signIn: "/admin/signin",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Sign In',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "JohnDoe" },
        password: { label: "Password", type: "password" },
      },
      async authorize (credentials) {
        if (!credentials?.username || !credentials?.password)
        {
          return null;
        }

        const existingAdmin = await prisma.user.findUnique({
          where: {
            username: credentials?.username,
          },
        });

        if (!existingAdmin)
        {
          return null;
        }
        console.log(credentials.password, existingAdmin.password);

        if (existingAdmin.password)
        {
          const passwordMatch = await compare(
            credentials.password,
            existingAdmin.password
          );
          if (!passwordMatch)
          {
            return null;
          }
        }
        return {
          id: existingAdmin.id,
          username: existingAdmin.username,
        };
      },
    }),
  ],
};
