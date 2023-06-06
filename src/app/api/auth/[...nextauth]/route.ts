import { connect } from "@/db";
import User from "@/models/User";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialProvider({
      id: "credentials",
      name: "credentials",
      async authorize(credentials: any) {
        try {
          await connect();

          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const passwordMatch = user.password === credentials.password;
            if (passwordMatch) {
              return user;
            }
          } else {
            throw new Error("User not found");
          }
        } catch (err) {}
      },
      credentials: {},
    }),
  ],
};

const handler = NextAuth({
  ...authOptions,
  pages: { error: "/dashboard", signIn: "/dashboard" },
});

export { handler as GET, handler as POST };
