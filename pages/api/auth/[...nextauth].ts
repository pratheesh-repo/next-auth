import NextAuth, { NextAuthOptions } from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [

    AzureADProvider({
           clientId: process.env.AZURE_AD_CLIENT_ID || "3ba44ae1-831d-4943-8abc-7ba35bfb18c7",
           clientSecret: process.env.AZURE_AD_CLIENT_SECRET || "Wd88Q~5AzjWZkvr64MDPDjLBUcPcscrNL8B5Xa8m",
           tenantId: process.env.AZURE_AD_TENANT_ID || "08eea03a-f2ff-4528-af12-25d864760ffe",
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
