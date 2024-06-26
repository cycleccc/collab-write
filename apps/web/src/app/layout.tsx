import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'

import { ThemeContextProvider } from '@lib/context/theme-context'
import SessionProvider from '@components/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Twitter - It’s what’s happening',
  description: 'Create Next ApGenerated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  console.log('session', session)
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ThemeContextProvider>
            <main className="">
              {/* <main className="mx-auto max-w-5xl text-2xl flex gap-2 text-white"> */}
              {children}
            </main>
          </ThemeContextProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
