'use client'
import { type ReactElement, type ReactNode, useEffect } from 'react'
import { redirect, usePathname } from 'next/navigation'
import { SEO } from '@components/common/seo'
import { LoginMain } from '@components/login/login-main'
import { LoginFooter } from '@components/login/login-footer'
import { AuthLayout } from '@components/layout/auth-layout'
import { getServerSession } from 'next-auth'

export default function Login(): JSX.Element {
  return (
    <div className="grid min-h-screen grid-rows-[1fr,auto]">
      <SEO
        title="Twitter - It’s what’s happening"
        description="From breaking news and entertainment to sports and politics, get the full story with all the live commentary."
      />
      <LoginMain />
      <LoginFooter />
    </div>
  )
}

// components/UserAuthForm.tsx

// import { getServerSession } from 'next-auth'

// export default async function Home() {
//   const session = await getServerSession()

//   return (
//     <>
//       getServerSession Result
//       {session?.user?.name
//         ? (
//           <div>{session?.user?.name}</div>
//           )
//         : (
//           <div>Not logged in</div>
//           )}
//     </>
//   )
// }
