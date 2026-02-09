// // auth.js
// import NextAuth from "next-auth"
// import Credentials from "next-auth/providers/credentials"
// import GoogleProvider from "next-auth/providers/google"
// import User from "@/models/User"
// import connectToDatabase from '@/utils/database' 
// import { compare } from 'bcryptjs'

// const authConfig = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     Credentials({
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         try {
//           let user = null

//           if (!credentials?.email || !credentials?.password) {
//             throw new Error('Missing credentials')
//           }

//           await connectToDatabase()

//           user = await User.findOne({ email: credentials.email }).select('+password')
          
//           if (!user) {
//             throw new Error('Invalid credentials')
//           }

//           const isPasswordValid = await compare(credentials.password, user.password)
//           if (!isPasswordValid) {
//             throw new Error('Invalid credentials')
//           }

//           return {
//             id: user._id.toString(),
//             email: user.email,
//             name: user.name,
//             role: user.role
//           }

//         } catch (error) {
//           console.error('Auth error:', error)
//           return null
//         }
//       }
//     })
//   ],

//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//   },

//   callbacks: {
//     async jwt({ token, user, trigger, session }) {
//       if (user) {
//         token.id = user.id
//         token.role = user.role        
//         token.email = user.email
//       }
//       // Handle user updates
//       if (trigger === "update" && session) {
//         token = { ...token, ...session }
//       }
//       return token
//     },

//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.id
//         session.user.role = token.role
//         session.user.email = token.email
//       }
//       return session
//     }
//   },

//   secret: process.env.NEXTAUTH_SECRET,

//   pages: {
//     signIn: '/login',
//     error: '/error',
//     signOut: '/logout'
//   },

//   events: { 
//     async signIn({ user }) {
//       console.log(`User ${user.email} signed in`)
//     }
//   }
// }

// // Export the NextAuth instance
// export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)











// auth.js
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import User from "@/models/User"
import connectToDatabase from '@/utils/database' 
import { compare } from 'bcryptjs'



export const {
  handlers,
  auth, 
  signIn,
  signOut 
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          let user = null

          if (!credentials?.email || !credentials?.password) {
            throw new Error('Missing credentials')
          }

          await connectToDatabase()

          user = await User.findOne({ email: credentials.email }).select('+password')
          
          if (!user) {
            throw new Error('Invalid credentials')
          }

          const isPasswordValid = await compare(credentials.password, user.password)
          if (!isPasswordValid) {
            throw new Error('Invalid credentials')
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role // Include if you have role-based auth
          }


        } catch (error) {
          console.error('Auth error:', error)
          return null
        }
      }
    })
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },


  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id
        token.role = user.role        
        token.email = user.email;
      }
      // Handle user updates
      if (trigger === "update" && session) {
        token = { ...token, ...session }
      }
      return token
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.role = token.role
        session.user.email = token.email;
      }
      return session
    }
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: '/login',
    error: '/error', // Custom error page
    signOut: '/logout'
  },

  events: { 
    async signIn({ user }) {
      // Log sign-ins or update last login time
      console.log(`User ${user.email} signed in`)
    }
  }
})
