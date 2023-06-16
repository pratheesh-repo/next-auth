import NextAuth, { NextAuthOptions } from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [

    AzureADProvider({
           clientId: process.env.AZURE_AD_CLIENT_ID || "1",
           clientSecret: process.env.AZURE_AD_CLIENT_SECRET || "2",
           tenantId: process.env.AZURE_AD_TENANT_ID || "3",
         }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
  debug:true
}

export default NextAuth(authOptions)
