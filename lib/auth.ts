import { betterAuth } from "better-auth"
console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID)
console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET)
console.log("BETTER_AUTH_URL:", process.env.BETTER_AUTH_URL)
export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:3000",
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
})