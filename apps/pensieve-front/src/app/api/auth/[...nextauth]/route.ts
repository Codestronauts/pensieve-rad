import NextAuth, { NextAuthOptions } from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: `${process.env.AUTH0_CLIENT_ID}`,
      clientSecret: `${process.env.AUTH0_CLIENT_SECRET}`,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }
      return token;
    },

    async session({ session, token }) {
      return { ...session, token };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
