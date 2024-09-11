
import { handlers } from "@/auth"
export const { GET, POST } = handlers


// import NextAuth from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaClient } from "@prisma/client";
// import { z } from "zod";
// import { comparePassword } from "@/lib/hash-password";

// declare global {
//   var prisma: PrismaClient | undefined;
// }

// export const db = globalThis.prisma || new PrismaClient();

// export const createPostSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6),
// });

// export const {
//   handlers: { GET, POST },
//   auth,
// } = NextAuth({
//   session: {
//     strategy: "jwt",
//   },
//   adapter: PrismaAdapter(db),
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "Credentials",
//       credentials: {
//         email: {},
//         password: {},
//       },
//       async authorize(credentials) {
//         const result = createPostSchema.safeParse({
//           email: credentials.email,
//           password: credentials.password,
//         });
//         result;
//         if (!result.success) {
//           console.log("result not found");
//           return null;
//         }
//         const user = await db.user.findUnique({
//           where: {
//             email: result.data.email,
//           },
//         });

//         if (!user) {
//           // Any object returned will be saved in `user` property of the JWT
//           return null;
//         }
//         const passwordMatch = await comparePassword(
//           result.data.password,
//           user.password
//         );
//         if (!passwordMatch) {
//           return null;
//         }
//         return user;
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     // Usually not needed, here we are fixing a bug in nextauth
//     async session({ session, user }: any) {
//       if (session && user) {
//         session.user.id = user.id;
//       }

//       return session;
//     },
//   },
// });
