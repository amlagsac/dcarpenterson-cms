import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./db";
import { User } from "./types/user";
import { verifyPassword } from "./utils";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const email = credentials?.email;
        const password = credentials?.password;

        if (typeof email !== "string" || typeof password !== "string") {
          throw new Error("Invalid input.");
        }

        const user: User | null = await prisma.user.findUnique({
          where: { email, deletedAt: null },
        });

        if (!user) throw new Error("Invalid email or password.");

        const isPasswordValid: boolean = await verifyPassword(
          password,
          user.password,
        );

        if (!isPasswordValid) throw new Error("Invalid email or password.");

        return {
          id: String(user?.id),
          email: user?.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
});
