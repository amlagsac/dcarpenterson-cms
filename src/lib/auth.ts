import NextAuth, { CredentialsSignin } from "next-auth";
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
        const { email, password } = credentials;

        if (typeof email !== "string" || typeof password !== "string") {
          throw new Error("Invalid input.");
        }

        const user: User | null = await prisma.user.findUnique({
          where: { email, deletedAt: null },
        });

        if (!user) throw new CredentialsSignin("Invalid credentials.");

        const isPasswordValid: boolean = await verifyPassword(
          password,
          user.password,
        );

        if (!isPasswordValid)
          throw new CredentialsSignin("Invalid credentials.");

        return {
          id: String(user?.id),
          email: user?.email,
          firstName: user?.firstName,
          lastName: user?.lastName,
          role: user?.roleId,
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
