'use client'
import { SEO } from '@components/common/seo'
import { LoginMain } from '@components/login/login-main'
import { LoginFooter } from '@components/login/login-footer'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Login(): JSX.Element {
  const session = useSession()
  if (session.data)
    redirect('/home')

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
