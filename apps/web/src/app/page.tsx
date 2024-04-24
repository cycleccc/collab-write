'use client'

import type { ReactElement, ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { SEO } from '@components/common/seo'
import { LoginMain } from '@components/login/login-main'
import { LoginFooter } from '@components/login/login-footer'
import { AuthLayout } from '@components/layout/auth-layout'

redirect('/home')
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
